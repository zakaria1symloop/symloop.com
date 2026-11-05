import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/promoteur-immobilier-vendre-sur-plan-diaspora-2027-espace-acquereur-suivi-chantier.mjs';

const SLUG = 'promoteur-immobilier-vendre-sur-plan-diaspora-2027-espace-acquereur-suivi-chantier';
const FIGURES = ['journey', 'stack', 'salon', 'questions', 'saison', 'models'];
const DATE = '2026-11-01';

const CONTENT = {
  fr: {
    kind: 'Promoteurs · Diaspora · 2027', title: "Promoteur immobilier : vendre sur plan à la diaspora en 2027, avec un espace acquéreur qui remplace les allers-retours.",
    dek: "Les promoteurs algériens viennent chercher leurs acquéreurs jusqu'à Paris, au salon SINA. Mais une fois le contrat signé, l'acheteur qui vit en France ne voit plus rien du chantier pendant deux ou trois ans, appelle, attend, et finit par prendre l'avion pour vérifier. Ce qu'une vente sur plan à distance doit tenir à chaque moment, ce qu'il faut construire en premier, ce que vaut un salon bien suivi, les six questions d'un acquéreur à distance, et un calendrier jusqu'au salon d'octobre 2027.",
    publishedAt: 'Novembre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Promotion immobilière', 'Vente sur plan', 'Suivi de chantier', 'Diaspora', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Pour vendre sur plan à la diaspora en 2027, un promoteur algérien n'a pas d'abord besoin d'un plus beau site : il a besoin d'un **espace acquéreur** alimenté par un **journal de chantier**. Chaque mois, le conducteur de travaux photographie les mêmes points du chantier depuis une application simple ; les photos datées sont validées puis publiées dans l'espace de chaque acquéreur, avec l'échéancier des versements, les reçus, les documents du lot et un interlocuteur nommé qui répond sous 48 heures. Avant la vente, les contacts du salon sont qualifiés et relancés ; après, la livraison se fait avec les réserves en photo. **Ce qui fait vendre au suivant, c'est l'acquéreur qui n'a pas eu besoin de prendre l'avion.**",
      "Ce guide s'adresse aux promoteurs immobiliers, architectes, bureaux d'études et entrepreneurs du bâtiment qui vendent ou veulent vendre à des Algériens vivant en France, et au fondateur de la diaspora qui veut construire la plateforme qui manque entre les deux rives. Il ne traite pas des règles juridiques et fiscales de l'achat, qui relèvent du notaire.",
    ],
    sections: [
      { heading: 'Ce que le salon de Paris dit du marché', body: [
        "Le salon SINA, consacré à l'immobilier neuf algérien, se tient à Paris depuis 2022. Sa quatrième édition, en octobre 2025, a réuni **16 promoteurs venus de cinq wilayas**, Alger, Oran, Ghardaïa, Tlemcen et Béjaïa, et plus de **16 000 visiteurs** selon les organisateurs, d'après TSA. La cinquième était programmée du 23 au 25 octobre 2026. Les prix annoncés pour le haut standing vont, selon la presse, de 17 à 20 millions de dinars à Oran et de 25 à 35 millions à Alger. **La demande vient d'elle-même jusqu'aux stands : le problème commence après.**",
        "Une visiteuse citée par TSA résumait la suite : son appartement acheté sur plan à Alger, elle disait que son projet était « bloqué parce que je ne peux pas me déplacer en Algérie à chaque fois ». Les visiteurs réclamaient surtout la présence des banques ; l'organisateur parlait de **compléter la chaîne de confiance** entre promoteurs et acheteurs. Le financement relève des banques. Mais une partie de la confiance relève du promoteur lui-même : montrer, chaque mois, depuis Paris, que le chantier avance et que l'argent versé correspond à ce qui est construit.",
      ] },
      { heading: 'Une vente sur plan à distance, en six moments', body: [
        "Le système doit tenir chacun de ces six moments. Les trois premiers se jouent en quelques semaines ; les trois derniers durent des années.",
      ], visual: 'journey', after: [
        "**Le contact** se note avec ce qui sert à le rappeler : budget, wilaya, typologie, financement envisagé, date du prochain voyage. **La visite à distance** se fait en vidéo en direct, le samedi, avec les plans du lot, la vue depuis l'étage et les échantillons de finitions ; l'Algérie est à la même heure que la France en hiver et une heure derrière en été, ce qui facilite les rendez-vous. **La réservation** bloque le lot et prépare le dossier, pour que la signature chez le notaire tienne dans le prochain voyage.",
        "**L'avancement** est montré en photos datées à chaque étape, prises depuis les mêmes points chaque mois, pour que l'acquéreur compare d'un coup d'œil. **Les versements** suivent l'échéancier écrit dans le contrat : chaque appel de fonds est annoncé, payé, reçu, et visible. **La livraison**, enfin, se prépare : date confirmée assez tôt pour poser un congé, réserves notées en photo et suivies jusqu'à leur levée, clés remises à l'acquéreur ou à un proche qu'il a désigné.",
      ] },
      { heading: "Ce qu'il faut construire : le journal de chantier d'abord", body: [
        "La tentation est de commencer par l'espace acquéreur, puisque c'est ce que l'on montre au salon. Mais l'espace n'affiche que ce que le chantier lui donne.",
      ], visual: 'stack', after: [
        "**Le journal de chantier** est le cœur. Pour chaque bloc, on définit une fois pour toutes une dizaine de **points de prise de vue** : façade nord, cage d'escalier, un appartement témoin par étage. Chaque mois, le conducteur de travaux ouvre l'application, qui le guide point par point ; chaque photo porte sa date, sa position et l'étape du chantier. Il valide, un responsable relit, et la publication part dans l'espace des acquéreurs du bloc. **Dix minutes par bloc et par mois** : c'est la condition pour que le journal tienne trois ans, et c'est la question à poser avant toute autre fonction.",
        "**Les contacts et relances** viennent juste après, parce que c'est là que se perd l'argent du salon : une fiche par contact, une personne chargée de rappeler sous 48 heures, et une relance datée. Un [agent IA](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) peut répondre le soir, en arabe et en français, aux questions simples sur un projet à partir de ses documents, et passer la main à un commercial pour le reste. **Le socle**, enfin, reste au nom du promoteur : contrats, plans, photos et échanges sont des données personnelles, à protéger selon la loi 18-07.",
      ] },
      { heading: "Ce que vaut un salon bien suivi", body: [
        "Un exemple sur des hypothèses, à refaire avec les chiffres de votre dernier salon : 400 contacts recueillis en trois jours, 20 millions de dinars par logement.",
      ], visual: 'salon', after: [
        "Si 3 % des contacts réservent quand on les rappelle au hasard des disponibilités, le salon donne 12 réservations. Si les contacts sont qualifiés, rappelés sous 48 heures, invités à une visite à distance et relancés jusqu'au voyage d'été, et que le taux passe à 6 %, **il en donne 24 : 12 logements de plus, soit environ 240 millions de dinars de ventes**. Nous ne connaissons pas de mesure publique de ces taux ; ce sont des hypothèses pour montrer l'ordre de grandeur, pas une promesse.",
        "La vérification se fait sans logiciel : reprenez la liste du dernier salon et comptez combien de contacts ont été rappelés sous 48 heures, et combien ont réservé six mois plus tard. Si la liste dort dans un tableur ou un téléphone, c'est le premier chantier. Les mêmes principes de suivi valent pour [un logiciel d'agence immobilière](/blog/logiciel-immobilier-agence-algerie-2026/), mais le promoteur a une contrainte de plus : il doit nourrir la confiance pendant toute la durée du chantier.",
      ] },
      { heading: "Six questions d'un acquéreur à distance", body: [
        "Toutes les questions d'un acquéreur de la diaspora se ramènent à six. Chacune, sans réponse, devient un appel, un voyage ou un doute.",
      ], visual: 'questions', after: [
        "Les deux questions qui coûtent le plus au promoteur sont souvent les plus simples. **« Où en sont mes versements ? »** : quand l'acquéreur ne retrouve pas ses reçus, chaque appel de fonds devient une négociation ; quand l'échéancier, les reçus et le prochain appel sont visibles, il paie à la date. **« Qui me répond ? »** : un interlocuteur nommé, avec un délai de réponse écrit, remplace les trois numéros que l'acquéreur essaie l'un après l'autre.",
        "Les finitions méritent un traitement à part. Choisir son carrelage ou sa cuisine depuis Paris est possible si l'outil présente les options, leur prix et une **date limite** au-delà de laquelle le choix par défaut s'applique. Sans date limite, le chantier attend ; sans prix écrit, la livraison tourne au litige.",
      ] },
      { heading: 'Et la maison construite depuis la France ?', body: [
        "Beaucoup d'Algériens de France ne passent pas par un promoteur : ils font construire une maison sur un terrain familial, en confiant le chantier à un entrepreneur et l'argent à un proche. La mécanique de confiance est la même, et c'est une place pour des entreprises du bâtiment ou des plateformes de suivi sérieuses.",
        "Les principes ne changent pas : **un devis par lots**, gros œuvre, plomberie, électricité, menuiserie ; **des versements par étape**, jamais plus d'une étape d'avance ; **des photos datées depuis des points fixes** à chaque étape, et les factures de matériaux photographiées ; **chaque travail supplémentaire validé à distance** avant d'être fait, comme nous le décrivions pour [les devis de garage](/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/). Une entreprise qui offre ce suivi à ses clients de la diaspora a un argument que ses concurrents n'ont pas ; une plateforme qui l'offre pour plusieurs entreprises peut le facturer au chantier, en euros.",
      ] },
      { heading: 'Quel modèle construire', body: [
        "Six modèles possibles, du promoteur qui équipe ses propres projets à la plateforme qui sert plusieurs métiers.",
      ], visual: 'models', after: [
        "**Un promoteur et un projet en cours** sont le point de départ le plus sûr : les acquéreurs existent déjà, leurs questions aussi, et l'effet se mesure en quelques mois sur le nombre d'appels et la ponctualité des versements. **Un portail commun à plusieurs promoteurs** est tentant pour la diaspora, qui aime comparer, mais il met sous une même marque des projets de qualité inégale : il faut des règles d'entrée, à commencer par le journal de chantier obligatoire.",
        "**La gestion locative après la livraison** est le prolongement naturel pour les acquéreurs qui investissent pour louer : la presse cite des rendements bruts de 5 à 9 %, à vérifier projet par projet. Le même acquéreur qui a suivi son chantier depuis Paris voudra suivre ses loyers de la même façon ; nous détaillons le pilotage à distance dans [gérer son commerce en Algérie depuis la France](/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/).",
      ] },
      { heading: 'Le calendrier pour 2027', body: [
        "Une douzaine de semaines entre le cadrage et un essai sur un projet en cours, pour être rodé avant l'été.",
      ], visual: 'saison', after: [
        "**Novembre : le cadrage**, et la reprise des contacts du salon d'octobre pendant qu'ils sont encore chauds. **Novembre à janvier : l'espace acquéreur** avec l'avancement, les documents et l'échéancier, puis **l'application de chantier**, avec ses points de prise de vue définis bloc par bloc. **Février et mars : l'essai sur un projet en cours**, avec ses vrais acquéreurs ; leurs questions des six premières semaines disent ce qu'il faut corriger.",
        "**Mars à mai : la visite à distance et le choix des finitions.** **L'été**, quand la diaspora vient en vacances, est le moment des visites sur place et des signatures ; **octobre**, le salon de Paris, celui des nouveaux contacts, avec un argument de plus : montrer sur le stand l'espace d'un acquéreur réel, avec son accord. Ces durées sont cohérentes avec celles que nous détaillons dans [combien de temps pour développer une application ou une plateforme](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'Ce qui fait échouer ce type de projet', body: [], list: [
        "**Commencer par la vitrine.** Un bel espace acquéreur sans journal de chantier est vide au bout de trois mois.",
        "**Des photos sans méthode.** Des images prises au hasard ne permettent pas de comparer ; il faut les mêmes points chaque mois.",
        "**Un journal trop lourd pour le chantier.** S'il faut plus de dix minutes par bloc, le conducteur de travaux arrête.",
        "**Des contacts de salon qui dorment.** Sans rappel sous 48 heures, le salon a coûté le stand et le voyage pour rien.",
        "**Des finitions sans date limite ni prix écrit.** Le chantier attend, ou la livraison tourne au litige.",
        "**Un retard caché.** Un retard annoncé avec sa raison se pardonne mieux qu'un retard découvert ; l'outil doit permettre de l'écrire.",
        "**Les comptes au nom du développeur.** Serveur, domaine, données, photos et contrats au nom du promoteur dès la première semaine.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Un acquéreur vivant en France peut-il suivre l'avancement d'un chantier en Algérie sans se déplacer ?", a: "Oui, si le promoteur publie un journal de chantier : des photos datées prises chaque mois depuis les mêmes points, par étape, dans un espace propre à chaque acquéreur, avec l'échéancier et les reçus. La visite en vidéo en direct complète les photos. Le déplacement reste utile pour la signature et la livraison." },
        { q: "Les versements d'une vente sur plan sont-ils liés à l'avancement des travaux ?", a: "L'échéancier est fixé par le contrat de vente sur plan et suit des étapes du chantier ; faites-le vérifier par votre notaire. Le rôle de l'outil n'est pas de fixer ces règles, mais de montrer à l'acquéreur, pour chaque appel de fonds, l'étape atteinte, la photo qui la prouve et le reçu de son paiement." },
        { q: "Combien de temps le conducteur de travaux y passe-t-il ?", a: "L'objectif est d'environ dix minutes par bloc et par mois : l'application le guide de point en point, chaque photo est datée et rattachée à son étape, et un responsable relit avant publication. Au-delà, le journal ne tient pas trois ans." },
        { q: "Faut-il une application mobile pour les acquéreurs ?", a: "Pas au début. Un espace web en arabe et en français, avec une notification à chaque publication, suffit. L'application vient si les acquéreurs reviennent souvent, par exemple pour choisir leurs finitions ou suivre la livraison ; nous détaillons ces choix dans [créer une application mobile en 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "Un entrepreneur qui construit des maisons pour la diaspora peut-il utiliser le même outil ?", a: "Oui : devis par lots, versements par étape, photos datées depuis des points fixes, factures de matériaux photographiées et travaux supplémentaires validés à distance. C'est le même mécanisme de confiance, à l'échelle d'une maison." },
        { q: "Combien de temps pour être prêt ?", a: "Environ douze semaines entre le cadrage et un essai sur un projet en cours, avec les contacts, l'espace acquéreur et l'application de chantier. La visite à distance et les finitions suivent sur deux à trois mois, pour être rodé avant l'été et le salon d'octobre." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Ce qui fait vendre au suivant, c'est l'acquéreur qui n'a pas eu besoin de prendre l'avion." },
      { after: 3, text: "L'espace acquéreur n'affiche que ce que le chantier lui donne." },
    ],
    cta: { eyebrow: 'Décrivez votre projet', title: "Promoteur, architecte, entreprise du bâtiment ou plateforme à lancer : vos projets en cours, le nombre d'acquéreurs, combien vivent à l'étranger, comment vous suivez aujourd'hui vos contacts et vos chantiers. Nous vous rendons le périmètre, le calendrier et le prix total, écrits, avant de commencer.", body: "Symloop construit des espaces acquéreurs, des applications de suivi de chantier, des outils de suivi commercial et des agents IA pour les promoteurs et les entreprises du bâtiment algériens, en arabe, en français et en anglais. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, serveur et données à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/logiciel-immobilier-agence-algerie-2026/', kind: 'Immobilier', name: 'Logiciel immobilier pour agences en Algérie' },
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'Série #06', name: "Créer l'équivalent de Booking en Algérie en 2027" },
      { href: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/', kind: '2027', name: 'Gérer son commerce en Algérie depuis la France en 2027' },
      { href: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/', kind: '2027', name: 'Agent IA en entreprise en Algérie en 2027' },
    ] },
  },
  en: {
    kind: 'Developers · Diaspora · 2027', title: 'Property developers: selling off-plan to the diaspora in 2027, with a buyer portal that replaces the round trips.',
    dek: "Algerian developers now travel to Paris, to the SINA fair, to find their buyers. But once the contract is signed, the buyer living in France sees nothing of the site for two or three years, calls, waits, and ends up flying over to check. What a remote off-plan sale must hold at each moment, what to build first, what a well-followed fair is worth, the six questions of a remote buyer, and a calendar to the October 2027 fair.",
    publishedAt: 'November 2026', readTime: '11 min read', author: 'Symloop', about: ['Property development', 'Off-plan sales', 'Site follow-up', 'Diaspora', 'Algeria 2027'],
    intro: [
      "**Short answer.** To sell off-plan to the diaspora in 2027, an Algerian developer does not first need a better website: they need a **buyer portal** fed by a **site log**. Every month the site manager photographs the same points on the site from a simple app; the dated photos are approved and then published in each buyer’s space, with the payment schedule, receipts, the unit’s documents and a named contact who answers within 48 hours. Before the sale, contacts from the fair are qualified and followed up; after it, handover is done with snags recorded in photos. **What sells the next unit is the buyer who never had to get on a plane.**",
      "This guide is for property developers, architects, engineering firms and building contractors who sell, or want to sell, to Algerians living in France, and for the diaspora founder who wants to build the platform missing between the two shores. It does not cover the legal and tax rules of buying, which are a matter for the notary.",
    ],
    sections: [
      { heading: 'What the Paris fair says about the market', body: [
        "The SINA fair, dedicated to new-build property in Algeria, has been held in Paris since 2022. Its fourth edition, in October 2025, brought together **16 developers from five wilayas**, Algiers, Oran, Ghardaïa, Tlemcen and Béjaïa, and more than **16,000 visitors** according to the organisers, as reported by TSA. The fifth was scheduled for 23 to 25 October 2026. Prices quoted for high-end units range, according to the press, from 17 to 20 million dinars in Oran and from 25 to 35 million in Algiers. **Demand comes to the stands on its own: the problem starts afterwards.**",
        "A visitor quoted by TSA summed up what follows: with her flat bought off-plan in Algiers, she said her project was “blocked because I can’t travel to Algeria every time”. Visitors mainly asked for banks to be there; the organiser spoke of **completing the chain of trust** between developers and buyers. Financing is a matter for the banks. But part of that trust is the developer’s own job: showing, every month, from Paris, that the site is moving and that the money paid matches what has been built.",
      ] },
      { heading: 'An off-plan sale at a distance, in six moments', body: [
        "The system has to hold each of these six moments. The first three play out over a few weeks; the last three last for years.",
      ], visual: 'journey', after: [
        "**The contact** is recorded with what is needed to call back: budget, wilaya, unit type, planned financing, date of the next trip. **Remote viewing** is a live video call on a Saturday, with the unit plans, the view from the floor and samples of finishes; Algeria is on the same time as France in winter and one hour behind in summer, which makes appointments easier. **Reservation** holds the unit and prepares the file, so that the signature at the notary fits into the next trip.",
        "**Progress** is shown in dated photos at each stage, taken from the same points every month, so the buyer can compare at a glance. **Payments** follow the schedule written in the contract: each call for funds is announced, paid, receipted and visible. **Handover**, finally, is prepared: a date confirmed early enough to book leave, snags recorded in photos and tracked until they are fixed, keys handed to the buyer or to a relative they have named.",
      ] },
      { heading: 'What to build: the site log first', body: [
        "The temptation is to start with the buyer portal, since that is what you show at the fair. But the portal only shows what the site gives it.",
      ], visual: 'stack', after: [
        "**The site log** is the heart of it. For each block, about ten **photo points** are defined once and for all: north façade, stairwell, one sample flat per floor. Every month the site manager opens the app, which guides them point by point; each photo carries its date, position and construction stage. They approve, a manager reviews, and the update goes out to the portal of that block’s buyers. **Ten minutes per block per month**: that is the condition for the log to last three years, and the question to ask before any other feature.",
        "**Contacts and follow-up** come right after, because that is where the money spent on the fair is lost: one record per contact, one person responsible for calling back within 48 hours, and a dated follow-up. An [AI agent](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) can answer simple questions about a project in the evening, in Arabic and French, from its documents, and hand over to a salesperson for the rest. **The foundation** stays in the developer’s name: contracts, plans, photos and messages are personal data, to be protected under law 18-07.",
      ] },
      { heading: 'What a well-followed fair is worth', body: [
        "An example on assumptions, to redo with the figures from your last fair: 400 contacts collected over three days, 20 million dinars per home.",
      ], visual: 'salon', after: [
        "If 3% of contacts reserve when they are called back whenever someone has time, the fair produces 12 reservations. If contacts are qualified, called back within 48 hours, invited to a remote viewing and followed up until the summer trip, and the rate rises to 6%, **it produces 24: 12 more homes, about 240 million dinars in sales**. We know of no public measurement of these rates; they are assumptions to show the order of magnitude, not a promise.",
        "The check needs no software: take the list from the last fair and count how many contacts were called back within 48 hours, and how many reserved six months later. If the list is asleep in a spreadsheet or a phone, that is the first job. The same follow-up principles apply to [property agency software](/blog/logiciel-immobilier-agence-algerie-2026/), but the developer has one more constraint: they must keep trust alive for the whole length of the build.",
      ] },
      { heading: 'Six questions from a remote buyer', body: [
        "Every question a diaspora buyer asks comes down to six. Each one, unanswered, becomes a call, a trip or a doubt.",
      ], visual: 'questions', after: [
        "The two questions that cost the developer most are often the simplest. **“Where are my payments?”**: when the buyer cannot find their receipts, every call for funds becomes a negotiation; when the schedule, receipts and next call are visible, they pay on time. **“Who answers me?”**: one named contact, with a written response time, replaces the three numbers the buyer tries one after another.",
        "Finishes deserve their own treatment. Choosing tiles or a kitchen from Paris is possible if the tool presents the options, their price and a **deadline** after which the default choice applies. Without a deadline the site waits; without a written price, handover turns into a dispute.",
      ] },
      { heading: 'And the house built from France?', body: [
        "Many Algerians in France do not go through a developer: they have a house built on family land, entrusting the site to a contractor and the money to a relative. The trust mechanics are the same, and there is room here for serious building firms or follow-up platforms.",
        "The principles do not change: **a quote by trade**, structural work, plumbing, electrics, joinery; **payments by stage**, never more than one stage ahead; **dated photos from fixed points** at each stage, with material invoices photographed; **any extra work approved remotely** before it is done, as we described for [garage quotes](/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/). A firm that offers this follow-up to its diaspora clients has an argument its competitors lack; a platform that offers it across several firms can charge per site, in euros.",
      ] },
      { heading: 'Which model to build', body: [
        "Six possible models, from the developer equipping its own projects to the platform serving several trades.",
      ], visual: 'models', after: [
        "**One developer and one live project** are the safest starting point: the buyers already exist, so do their questions, and the effect can be measured within months in the number of calls and the punctuality of payments. **A portal shared by several developers** is tempting for the diaspora, who like to compare, but it puts projects of uneven quality under one brand: it needs entry rules, starting with a mandatory site log.",
        "**Rental management after handover** is the natural next step for buyers who invest to let: the press cites gross yields of 5 to 9%, to be checked project by project. The same buyer who followed their site from Paris will want to follow their rents the same way; we cover remote oversight in [running a business in Algeria from France](/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/).",
      ] },
      { heading: 'The calendar for 2027', body: [
        "About twelve weeks between scoping and a trial on a live project, to be run in before summer.",
      ], visual: 'saison', after: [
        "**November: scoping**, and picking up the contacts from the October fair while they are still warm. **November to January: the buyer portal** with progress, documents and the schedule, then **the site app**, with its photo points defined block by block. **February and March: the trial on a live project**, with its real buyers; their questions in the first six weeks show what needs fixing.",
        "**March to May: remote viewing and the choice of finishes.** **Summer**, when the diaspora comes on holiday, is the time for site visits and signatures; **October**, the Paris fair, is the time for new contacts, with one more argument: showing a real buyer’s portal on the stand, with their consent. These durations are consistent with those we set out in [how long it takes to build an app or platform](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'What makes this kind of project fail', body: [], list: [
        "**Starting with the shop window.** A beautiful buyer portal with no site log is empty after three months.",
        "**Photos with no method.** Pictures taken at random cannot be compared; the same points are needed every month.",
        "**A log too heavy for the site.** If it takes more than ten minutes per block, the site manager stops.",
        "**Fair contacts left asleep.** Without a call back within 48 hours, the fair cost the stand and the trip for nothing.",
        "**Finishes with no deadline or written price.** The site waits, or handover turns into a dispute.",
        "**A hidden delay.** A delay announced with its reason is forgiven more easily than one discovered; the tool must make it easy to write.",
        "**Accounts in the developer’s name.** Server, domain, data, photos and contracts in the property developer’s name from the first week.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Can a buyer living in France follow the progress of a site in Algeria without travelling?', a: "Yes, if the developer publishes a site log: dated photos taken every month from the same points, by stage, in a space for each buyer, with the schedule and receipts. A live video visit complements the photos. Travelling is still useful for signing and for handover." },
        { q: 'Are off-plan payments tied to construction progress?', a: "The schedule is set by the off-plan sale contract and follows construction stages; have it checked by your notary. The tool’s role is not to set those rules but to show the buyer, for each call for funds, the stage reached, the photo that proves it and the receipt for their payment." },
        { q: 'How much time does the site manager spend on it?', a: "The aim is about ten minutes per block per month: the app guides them from point to point, each photo is dated and tied to its stage, and a manager reviews before publication. Beyond that, the log will not last three years." },
        { q: 'Do buyers need a mobile app?', a: "Not at first. A web portal in Arabic and French, with a notification at each update, is enough. The app comes if buyers return often, for example to choose finishes or follow handover; we cover those choices in [building a mobile app in 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: 'Can a contractor building houses for the diaspora use the same tool?', a: "Yes: quotes by trade, payments by stage, dated photos from fixed points, material invoices photographed and extra work approved remotely. It is the same trust mechanism, at the scale of one house." },
        { q: 'How long does it take to be ready?', a: "About twelve weeks between scoping and a trial on a live project, with contacts, the buyer portal and the site app. Remote viewing and finishes follow over two to three months, to be run in before summer and the October fair." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'What sells the next unit is the buyer who never had to get on a plane.' },
      { after: 3, text: 'The buyer portal only shows what the site gives it.' },
    ],
    cta: { eyebrow: 'Tell us about your project', title: 'Developer, architect, building firm or platform to launch: your live projects, the number of buyers, how many live abroad, and how you follow your contacts and sites today. We send back the scope, the calendar and the total price, in writing, before we start.', body: 'Symloop builds buyer portals, site follow-up apps, sales follow-up tools and AI agents for Algerian property developers and building firms, in Arabic, French and English. Senior engineers in Algiers and Sétif, total price and calendar in writing, server and data in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/logiciel-immobilier-agence-algerie-2026/', kind: 'Property', name: 'Property agency software in Algeria' },
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'Series #06', name: 'Building the Booking of Algeria in 2027' },
      { href: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/', kind: '2027', name: 'Running a business in Algeria from France in 2027' },
      { href: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/', kind: '2027', name: 'AI agents in Algerian companies in 2027' },
    ] },
  },
  ar: {
    kind: 'المرقّون · الجالية · 2027', title: 'المرقّي العقاري: البيع على التصاميم للجالية سنة 2027، بفضاء مشترٍ يغني عن الذهاب والإياب.',
    dek: 'صار المرقّون الجزائريون يذهبون إلى باريس، إلى صالون SINA، بحثاً عن مشتريهم. لكن بعد توقيع العقد لا يرى المشتري المقيم في فرنسا شيئاً من الورشة طوال سنتين أو ثلاث، فيتصل وينتظر، وينتهي به الأمر إلى ركوب الطائرة ليتحقق. ما يجب أن يصمد عنده البيع على التصاميم عن بُعد في كل لحظة، وما يُبنى أولاً، وكم يساوي صالون متابَع جيداً، والأسئلة الست للمشتري عن بُعد، وجدول زمني حتى صالون أكتوبر 2027.',
    publishedAt: 'نوفمبر 2026', readTime: '11 دقيقة قراءة', author: 'Symloop', about: ['الترقية العقارية', 'البيع على التصاميم', 'متابعة الورشة', 'الجالية', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** ليبيع على التصاميم للجالية سنة 2027، لا يحتاج المرقّي الجزائري أولاً إلى موقع أجمل: يحتاج إلى **فضاء للمشتري** يغذّيه **سجل للورشة**. كل شهر يصوّر مسؤول الأشغال النقاط نفسها من الورشة عبر تطبيق بسيط؛ تُصادَق الصور المؤرَّخة ثم تُنشر في فضاء كل مشترٍ، مع جدول الدفعات والوصولات ووثائق الشقة ومحاور بالاسم يجيب خلال 48 ساعة. قبل البيع، تُؤهَّل اتصالات الصالون وتُتابَع؛ وبعده يتم التسليم والتحفظات مسجَّلة بالصور. **ما يبيع الشقة التالية هو المشتري الذي لم يحتج إلى ركوب الطائرة.**",
      "هذا الدليل موجّه للمرقّين العقاريين والمهندسين المعماريين ومكاتب الدراسات ومقاولي البناء الذين يبيعون، أو يريدون البيع، لجزائريين مقيمين في فرنسا، وللمؤسس من الجالية الذي يريد بناء المنصة الناقصة بين الضفتين. ولا يتناول القواعد القانونية والجبائية للشراء، فهي من اختصاص الموثّق.",
    ],
    sections: [
      { heading: 'ما يقوله صالون باريس عن السوق', body: [
        "يُقام صالون SINA المخصّص للعقار الجديد في الجزائر في باريس منذ 2022. جمعت طبعته الرابعة في أكتوبر 2025 **16 مرقّياً من خمس ولايات**، الجزائر ووهران وغرداية وتلمسان وبجاية، وأكثر من **16000 زائر** حسب المنظّمين، كما نقل موقع TSA. وبُرمجت الطبعة الخامسة من 23 إلى 25 أكتوبر 2026. وتتراوح الأسعار المعلنة للسكن الراقي، حسب الصحافة، بين 17 و20 مليون دينار في وهران وبين 25 و35 مليوناً في العاصمة. **الطلب يأتي وحده إلى الأجنحة: المشكلة تبدأ بعد ذلك.**",
        "لخّصت زائرة نقل عنها موقع TSA ما يلي: شقتها مشتراة على التصاميم في العاصمة، وقالت إن مشروعها «متوقف لأنني لا أستطيع التنقل إلى الجزائر في كل مرة». طالب الزوار أساساً بحضور البنوك؛ وتحدّث المنظّم عن **استكمال سلسلة الثقة** بين المرقّين والمشترين. التمويل من شأن البنوك. لكن جزءاً من الثقة من شأن المرقّي نفسه: أن يُري كل شهر، من باريس، أن الورشة تتقدّم وأن المال المدفوع يطابق ما بُني.",
      ] },
      { heading: 'بيع على التصاميم عن بُعد، في ست لحظات', body: [
        "على النظام أن يصمد في كل لحظة من هذه اللحظات الست. الثلاث الأولى تجري في أسابيع؛ والثلاث الأخيرة تدوم سنوات.",
      ], visual: 'journey', after: [
        "**الاتصال** يُدوَّن بما يلزم لمعاودة الاتصال: الميزانية، الولاية، نوع المسكن، التمويل المتوقّع، تاريخ السفر القادم. **الزيارة عن بُعد** مكالمة فيديو مباشرة يوم السبت، مع مخططات الشقة والإطلالة من الطابق وعيّنات التشطيبات؛ والجزائر في التوقيت نفسه مع فرنسا شتاءً ومتأخرة عنها بساعة صيفاً، ما يسهّل المواعيد. **الحجز** يُثبّت الشقة ويُحضّر الملف، حتى يتّسع السفر القادم للتوقيع عند الموثّق.",
        "**تقدّم الأشغال** يُعرض بصور مؤرَّخة في كل مرحلة، تُلتقط من النقاط نفسها كل شهر، ليقارن المشتري بنظرة واحدة. **الدفعات** تتبع الجدول المكتوب في العقد: كل طلب دفع يُعلن ويُدفع ويُسلَّم وصله ويبقى مرئياً. وأخيراً **التسليم** يُحضَّر: تاريخ مؤكَّد مبكراً بما يكفي لأخذ عطلة، وتحفظات مسجَّلة بالصور ومتابَعة حتى رفعها، ومفاتيح تُسلَّم للمشتري أو لقريب عيّنه.",
      ] },
      { heading: 'ما يجب بناؤه: سجل الورشة أولاً', body: [
        "الإغراء هو البدء بفضاء المشتري، لأنه ما يُعرض في الصالون. لكن الفضاء لا يعرض إلا ما تعطيه الورشة.",
      ], visual: 'stack', after: [
        "**سجل الورشة** هو القلب. لكل عمارة تُحدَّد مرة واحدة نحو عشر **نقاط تصوير**: الواجهة الشمالية، بيت الدرج، شقة نموذجية في كل طابق. كل شهر يفتح مسؤول الأشغال التطبيق الذي يوجّهه من نقطة إلى نقطة؛ وتحمل كل صورة تاريخها وموقعها ومرحلة الأشغال. يصادق عليها، ويراجعها مسؤول، ويُنشر التحديث في فضاء مشتري تلك العمارة. **عشر دقائق لكل عمارة في الشهر**: هذا شرط صمود السجل ثلاث سنوات، وهو السؤال الذي يُطرح قبل أي وظيفة أخرى.",
        "**الاتصالات والمتابعة** تأتي مباشرة بعده، لأن هناك يضيع المال المصروف على الصالون: بطاقة لكل اتصال، وشخص مكلّف بمعاودة الاتصال خلال 48 ساعة، ومتابعة مؤرَّخة. ويمكن [لوكيل ذكاء اصطناعي](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) أن يجيب مساءً، بالعربية والفرنسية، عن الأسئلة البسيطة حول مشروع انطلاقاً من وثائقه، ثم يحيل الباقي إلى بائع. وتبقى **القاعدة** باسم المرقّي: العقود والمخططات والصور والمراسلات معطيات شخصية تُحمى وفق القانون 18-07.",
      ] },
      { heading: 'كم يساوي صالون متابَع جيداً', body: [
        "مثال مبني على فرضيات، أعده بأرقام صالونك الأخير: 400 اتصال في ثلاثة أيام، و20 مليون دينار للمسكن.",
      ], visual: 'salon', after: [
        "إذا حجز 3 % من الاتصالات حين يُعاوَد الاتصال بهم كلما سمح الوقت، يعطي الصالون 12 حجزاً. وإذا أُهّلت الاتصالات، وعوود الاتصال بها خلال 48 ساعة، ودُعيت إلى زيارة عن بُعد، وتوبعت حتى سفر الصيف، فارتفعت النسبة إلى 6 %، **يعطي 24: أي 12 مسكناً إضافياً، نحو 240 مليون دينار من المبيعات**. لا نعرف قياساً علنياً لهذه النسب؛ إنها فرضيات لإظهار حجم الأمر، لا وعد.",
        "التحقق لا يحتاج برنامجاً: خذ قائمة الصالون الأخير وعُدّ كم اتصالاً عوود الاتصال به خلال 48 ساعة، وكم منها حجز بعد ستة أشهر. وإذا كانت القائمة نائمة في جدول أو هاتف، فتلك أول ورشة. ومبادئ المتابعة نفسها تنطبق على [برنامج الوكالة العقارية](/blog/logiciel-immobilier-agence-algerie-2026/)، لكن على المرقّي قيداً إضافياً: أن يغذّي الثقة طوال مدة الأشغال.",
      ] },
      { heading: 'ستة أسئلة لمشترٍ عن بُعد', body: [
        "كل أسئلة مشتري الجالية ترجع إلى ستة. وكل واحد منها، دون جواب، يصير مكالمة أو سفراً أو شكاً.",
      ], visual: 'questions', after: [
        "السؤالان الأكثر كلفة على المرقّي هما غالباً الأبسط. **«أين وصلت دفعاتي؟»**: حين لا يجد المشتري وصولاته، يصير كل طلب دفع تفاوضاً؛ وحين يكون الجدول والوصولات والطلب القادم مرئية، يدفع في الموعد. **«من يجيبني؟»**: محاور واحد بالاسم، مع أجل جواب مكتوب، يحلّ محل الأرقام الثلاثة التي يجرّبها المشتري واحداً تلو الآخر.",
        "التشطيبات تستحق معاملة خاصة. اختيار البلاط أو المطبخ من باريس ممكن إذا عرضت الأداة الخيارات وأسعارها و**آخر أجل** يُطبَّق بعده الاختيار الافتراضي. دون آخر أجل تنتظر الورشة؛ ودون سعر مكتوب يتحوّل التسليم إلى نزاع.",
      ] },
      { heading: 'وماذا عن المنزل الذي يُبنى من فرنسا؟', body: [
        "كثير من الجزائريين في فرنسا لا يمرّون بمرقٍّ: يبنون منزلاً على أرض عائلية، ويعهدون بالورشة إلى مقاول وبالمال إلى قريب. آلية الثقة هي نفسها، وهنا مكان لمقاولات بناء جادة أو لمنصات متابعة.",
        "المبادئ لا تتغيّر: **تقدير حسب الحِرف**، الأشغال الكبرى والترصيص والكهرباء والنجارة؛ **دفعات حسب المراحل**، دون تقدّم بأكثر من مرحلة واحدة أبداً؛ **صور مؤرَّخة من نقاط ثابتة** في كل مرحلة، مع تصوير فواتير المواد؛ و**كل عمل إضافي يُوافَق عليه عن بُعد** قبل إنجازه، كما وصفنا في [تقديرات الورشات الميكانيكية](/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/). المقاولة التي تقدّم هذه المتابعة لزبائنها من الجالية تملك حجة لا يملكها منافسوها؛ والمنصة التي تقدّمها لعدة مقاولات يمكنها أن تفوترها لكل ورشة، باليورو.",
      ] },
      { heading: 'أي نموذج تبني', body: [
        "ستة نماذج ممكنة، من المرقّي الذي يجهّز مشاريعه إلى المنصة التي تخدم عدة مهن.",
      ], visual: 'models', after: [
        "**مرقٍّ واحد ومشروع جارٍ** هما نقطة الانطلاق الأكثر أماناً: المشترون موجودون، وأسئلتهم كذلك، ويُقاس الأثر خلال أشهر في عدد المكالمات وانتظام الدفعات. **بوابة مشتركة لعدة مرقّين** مغرية للجالية التي تحب المقارنة، لكنها تضع مشاريع متفاوتة الجودة تحت علامة واحدة: تلزمها قواعد دخول، أولها سجل ورشة إلزامي.",
        "**تسيير الإيجار بعد التسليم** هو الامتداد الطبيعي للمشترين الذين يستثمرون للإيجار: تذكر الصحافة مردودية خامّاً بين 5 و9 %، يجب التحقق منها مشروعاً مشروعاً. والمشتري نفسه الذي تابع ورشته من باريس سيريد متابعة إيجاراته بالطريقة نفسها؛ نفصّل المتابعة عن بُعد في [تسيير تجارتك في الجزائر من فرنسا](/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/).",
      ] },
      { heading: 'الجدول الزمني لسنة 2027', body: [
        "نحو اثني عشر أسبوعاً بين التأطير وتجربة على مشروع جارٍ، لتكون الأداة مجرَّبة قبل الصيف.",
      ], visual: 'saison', after: [
        "**نوفمبر: التأطير**، واستعادة اتصالات صالون أكتوبر ما دامت ساخنة. **من نوفمبر إلى جانفي: فضاء المشتري** بتقدّم الأشغال والوثائق وجدول الدفع، ثم **تطبيق الورشة** بنقاط تصويره المحدّدة عمارةً عمارة. **فيفري ومارس: التجربة على مشروع جارٍ** مع مشتريه الحقيقيين؛ أسئلتهم في الأسابيع الستة الأولى تقول ما يجب تصحيحه.",
        "**من مارس إلى ماي: الزيارة عن بُعد واختيار التشطيبات.** **الصيف**، حين تأتي الجالية في العطلة، هو وقت الزيارات في الموقع والتوقيعات؛ و**أكتوبر**، صالون باريس، وقت الاتصالات الجديدة، بحجة إضافية: عرض فضاء مشترٍ حقيقي في الجناح، بموافقته. وهذه المدد متّسقة مع ما نفصّله في [كم من الوقت لتطوير تطبيق أو منصة](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'ما يُفشل هذا النوع من المشاريع', body: [], list: [
        "**البدء بالواجهة.** فضاء مشترٍ جميل دون سجل ورشة يفرغ بعد ثلاثة أشهر.",
        "**صور بلا منهج.** الصور الملتقطة عشوائياً لا تسمح بالمقارنة؛ تلزم النقاط نفسها كل شهر.",
        "**سجل أثقل من طاقة الورشة.** إذا تجاوز عشر دقائق لكل عمارة، يتوقف مسؤول الأشغال.",
        "**اتصالات صالون نائمة.** دون معاودة الاتصال خلال 48 ساعة، كلّف الصالون الجناح والسفر بلا فائدة.",
        "**تشطيبات بلا آخر أجل ولا سعر مكتوب.** تنتظر الورشة، أو يتحوّل التسليم إلى نزاع.",
        "**تأخير مخفي.** التأخير المعلن بسببه يُغتفر أكثر من تأخير يُكتشف؛ ويجب أن تسهّل الأداة كتابته.",
        "**الحسابات باسم المطوّر.** الخادم والنطاق والبيانات والصور والعقود باسم المرقّي منذ الأسبوع الأول.",
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: "هل يستطيع مشترٍ مقيم في فرنسا متابعة تقدّم ورشة في الجزائر دون أن يتنقل؟", a: "نعم، إذا نشر المرقّي سجل ورشة: صور مؤرَّخة تُلتقط كل شهر من النقاط نفسها، حسب المراحل، في فضاء خاص بكل مشترٍ، مع جدول الدفع والوصولات. والزيارة بالفيديو المباشر تكمّل الصور. ويبقى التنقل مفيداً للتوقيع والتسليم." },
        { q: "هل ترتبط دفعات البيع على التصاميم بتقدّم الأشغال؟", a: "الجدول يحدّده عقد البيع على التصاميم ويتبع مراحل الأشغال؛ اجعل موثّقك يتحقق منه. ودور الأداة ليس تحديد هذه القواعد، بل أن تُري المشتري، لكل طلب دفع، المرحلة المنجزة والصورة التي تثبتها ووصل دفعته." },
        { q: "كم من الوقت يقضي مسؤول الأشغال في ذلك؟", a: "الهدف نحو عشر دقائق لكل عمارة في الشهر: يوجّهه التطبيق من نقطة إلى نقطة، وكل صورة مؤرَّخة ومربوطة بمرحلتها، ويراجعها مسؤول قبل النشر. وأكثر من ذلك لا يصمد السجل ثلاث سنوات." },
        { q: "هل يحتاج المشترون إلى تطبيق للهاتف؟", a: "ليس في البداية. يكفي فضاء على الويب بالعربية والفرنسية مع إشعار عند كل نشر. ويأتي التطبيق إذا عاد المشترون كثيراً، مثلاً لاختيار التشطيبات أو متابعة التسليم؛ نفصّل هذه الخيارات في [إنشاء تطبيق للهاتف سنة 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "هل يستطيع مقاول يبني منازل للجالية استعمال الأداة نفسها؟", a: "نعم: تقدير حسب الحِرف، دفعات حسب المراحل، صور مؤرَّخة من نقاط ثابتة، فواتير مواد مصوَّرة، وأشغال إضافية يُوافَق عليها عن بُعد. إنها آلية الثقة نفسها، على مستوى منزل واحد." },
        { q: "كم من الوقت يلزم للجاهزية؟", a: "نحو اثني عشر أسبوعاً بين التأطير وتجربة على مشروع جارٍ، بالاتصالات وفضاء المشتري وتطبيق الورشة. ثم تأتي الزيارة عن بُعد والتشطيبات خلال شهرين إلى ثلاثة، لتكون الأداة مجرَّبة قبل الصيف وصالون أكتوبر." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "ما يبيع الشقة التالية هو المشتري الذي لم يحتج إلى ركوب الطائرة." },
      { after: 3, text: "فضاء المشتري لا يعرض إلا ما تعطيه الورشة." },
    ],
    cta: { eyebrow: 'صف لنا مشروعك', title: "مرقٍّ، أو مهندس معماري، أو مقاولة بناء، أو منصة للإطلاق: مشاريعك الجارية، عدد المشترين، وكم منهم يقيم في الخارج، وكيف تتابع اليوم اتصالاتك وورشاتك. نعيد إليك النطاق والجدول والسعر الإجمالي مكتوبة قبل البدء.", body: "تبني Symloop فضاءات المشترين وتطبيقات متابعة الورشات وأدوات المتابعة التجارية ووكلاء الذكاء الاصطناعي للمرقّين العقاريين ومقاولات البناء الجزائرية، بالعربية والفرنسية والإنجليزية. مهندسون ذوو خبرة في الجزائر العاصمة وسطيف، سعر إجمالي وجدول مكتوبان، والخادم والبيانات باسمك." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: '/blog/logiciel-immobilier-agence-algerie-2026/', kind: 'عقار', name: 'برنامج الوكالات العقارية في الجزائر' },
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'سلسلة #06', name: 'إنشاء مقابل Booking في الجزائر سنة 2027' },
      { href: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/', kind: '2027', name: 'تسيير تجارتك في الجزائر من فرنسا سنة 2027' },
      { href: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/', kind: '2027', name: 'وكيل الذكاء الاصطناعي في المؤسسة بالجزائر سنة 2027' },
    ] },
  },
};

const KEYWORDS = "promoteur immobilier algérie diaspora 2027, vente sur plan algérie diaspora, espace acquéreur promoteur immobilier, application suivi de chantier algérie, suivi de chantier à distance depuis la france, construire maison algérie depuis la france, logiciel promotion immobilière algérie, SINA Paris salon immobilier algérien, off-plan property algeria diaspora, البيع على التصاميم الجالية الجزائرية";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
