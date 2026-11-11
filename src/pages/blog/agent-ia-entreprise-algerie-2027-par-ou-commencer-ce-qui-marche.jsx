import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche.mjs';

const SLUG = 'agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche';
const FIGURES = ['uses', 'levels', 'stack', 'timeline'];
const DATE = '2026-10-30';

const CONTENT = {
  fr: {
    kind: 'Problème · IA en entreprise', title: "Mettre un agent IA dans mon entreprise en Algérie en 2027 : par où commencer, ce qui marche, ce qui doit exister avant.",
    dek: "Vous utilisez déjà ChatGPT pour rédiger un e-mail ou traduire un devis, et vous vous demandez ce qu'un « agent IA » changerait vraiment dans votre entreprise : répondre aux clients sur WhatsApp la nuit, relancer les impayés, trier les demandes, vous résumer la journée. Ce qui paie en Algérie et ce qui ne sert à rien, ce qui doit exister avant la première ligne d'IA, les quatre niveaux d'autonomie à franchir dans l'ordre, où l'agent tourne et comment on le paie, et les six mois pour y arriver.",
    publishedAt: 'Octobre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Agent IA', 'Intelligence artificielle', 'WhatsApp Business', 'Automatisation', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un agent IA ne travaille que s'il a quelque chose à lire et quelque chose à faire : un échéancier pour relancer, des règles pour répondre, un back-office où écrire. **Les trois usages qui paient en Algérie, les relances de paiement et de commande, le support client en arabe, français et darija 24h/24, et la qualification des demandes WhatsApp, ont tous ce prérequis.** Rédiger des posts ou résumer des documents rapporte peu ; remplacer un commercial ou décider un crédit est hors sujet. Ensuite, un niveau d'autonomie à la fois : l'agent répond, puis propose, puis agit dans des limites, puis agit et rend compte. Le premier mois ne contient pas d'IA : il met les données dans un système. C'est lui qui décide si les cinq suivants servent à quelque chose.",
      "Ce guide prolonge notre [feuille de route pour digitaliser une PME en 2027](/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/), où l'IA arrive au quatrième trimestre, après l'encaissement, le flux et le back-office. Il répond aux dirigeants qui nous écrivent « je veux mettre de l'IA » sans savoir à quel endroit, et aux fondateurs qui veulent un agent dans leur [SaaS](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/) ou leur [application](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/).",
    ],
    sections: [
      { heading: "Les usages qui paient, et ceux qui ne servent à rien", body: [
        "Sept usages, classés par gain pour une PME algérienne, avec pour chacun ce qui doit exister avant. La colonne de droite est la plus importante.",
      ], visual: 'uses', after: [
        "**Les relances** sont l'usage le plus rentable, parce qu'elles traitent de l'argent qui existe déjà et qu'on ne récupère pas : la tranche impayée d'une [école](/blog/ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026/), la commande non confirmée d'un [e-commerçant](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/), la facture en retard d'un grossiste. L'agent relance au bon moment, dans la langue du client, avec le montant exact et la façon de payer, et remonte à l'humain ceux qui ne répondent pas. Prérequis : l'échéancier ou les commandes vivent dans un système.",
        "**Le support trilingue** répond la nuit et le vendredi, à partir de vos règles et de votre back-office : où en est ma commande, quels sont vos horaires, combien je dois. Il comprend l'arabe, le français, la darija et l'arabe écrit en lettres latines, parce que c'est ainsi que vos clients écrivent. Prérequis : des règles écrites et un statut lisible quelque part. **La qualification des demandes WhatsApp** transforme le flot de messages d'une [agence immobilière](/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/) ou d'un [transporteur](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/) en demandes triées, avec les informations complètes, déposées dans un pipeline. Prérequis : un pipeline.",
        "**Le résumé du jour**, la saisie de documents et la rédaction sont utiles mais secondaires. Le premier exige une seule base ; le deuxième, un volume de papier ; le troisième n'exige rien, et c'est pour cela que tout le monde l'a déjà et que personne n'en tire d'avantage. **Remplacer un commercial ou décider un crédit** est hors sujet : l'agent prépare, l'humain décide. Une entreprise qui laisse un agent promettre un prix ou accorder un délai sans limite le regrette en une semaine.",
      ] },
      { heading: "Les quatre niveaux d'autonomie, dans l'ordre", body: [
        "La question n'est pas « quelle IA », c'est « combien d'autonomie, et quand ». Quatre niveaux, qu'on franchit un par un.",
      ], visual: 'levels', after: [
        "**Niveau 1, il répond** : lecture seule, statut, horaires, solde, règlement. Aucun risque, un gain immédiat sur les questions répétitives. **Niveau 2, il propose** : il rédige la relance, suggère le rendez-vous, prépare la réponse, et un humain valide avant envoi. C'est le niveau où l'équipe apprend à lui faire confiance, et où vous découvrez ses erreurs sans qu'un client les voie. **Niveau 3, il agit dans des limites** : la relance part, le rendez-vous se confirme, un geste commercial s'accorde sous un seuil que vous avez fixé ; au-delà, il escalade. C'est le niveau qui rapporte. **Niveau 4, il agit et rend compte** : chaque soir, ce qu'il a fait, ce qu'il n'a pas su faire, les exceptions, les chiffres. L'humain supervise au lieu d'exécuter.",
        "Sauter du niveau 1 au niveau 4 en un mois est la façon la plus sûre de perdre la confiance de l'équipe, qui verra l'agent se tromper en public, et des clients, qui recevront une relance fausse. Un niveau par mois environ, chacun mesuré.",
      ] },
      { heading: "Comment l'agent s'insère dans l'entreprise", body: [
        "Un agent n'est pas un chatbot posé sur un site. C'est cinq couches, dont la troisième, les outils, est celle qui fait la différence entre un agent qui parle et un agent qui travaille.",
      ], visual: 'stack', after: [
        "**Les canaux** sont ceux où vos clients écrivent déjà : WhatsApp Business d'abord, votre application ou votre site ensuite, l'e-mail pour les demandes B2B. Mêmes règles partout. **L'agent** comprend les trois langues et leurs mélanges, connaît vos règles, ce qu'il peut dire, faire et promettre, et escalade à un humain dès qu'il n'est pas sûr. **Les outils** sont la lecture et l'écriture dans votre back-office : lire une commande, écrire un rendez-vous, mettre à jour un échéancier, déposer une demande dans le CRM. Sans eux, l'agent est un répondeur poli. **Les données** vivent dans une seule base, avec un hébergement choisi au regard de la loi 18-07, et chaque action de l'agent est journalisée : qui a dit quoi, qui a fait quoi. **Le contrôle** est humain : seuils, revue hebdomadaire des conversations, chiffres.",
        "**Où tourne l'agent, et comment on le paie.** Les modèles d'IA se louent à l'usage, en devises, auprès de fournisseurs étrangers ; nous avons détaillé [comment payer le cloud et l'IA depuis l'Algérie](/blog/payer-cloud-ia-depuis-algerie-carte-internationale-solutions-2026/). Pour une PME, le coût d'usage est faible au regard d'un salaire ; ce qui coûte, c'est l'intégration aux outils, et c'est ce qui se cadre par écrit avec un prix total. Pour les entreprises dont les données ne doivent pas sortir du pays, cliniques, assurances, administrations, des modèles ouverts s'hébergent sur une infrastructure locale ; c'est plus lourd, et cela se décide au cadrage, pas après.",
      ] },
      { heading: "Six mois, un niveau à la fois", body: [
        "Le calendrier d'un agent IA en 2027 commence par un mois sans IA.",
      ], visual: 'timeline', after: [
        "**Mois 1, les prérequis** : l'échéancier, les commandes ou les demandes entrent dans un système ; les règles de l'entreprise sont écrites, horaires, politique de retour, délais, ce qu'on promet et ce qu'on ne promet pas ; le back-office expose ce qu'il faut lire et écrire. Si ce mois révèle que rien n'existe dans un système, la bonne décision est de construire le back-office d'abord, comme nous l'expliquons dans la [feuille de route PME](/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/). **Mois 2, niveau 1** sur WhatsApp et dans l'application. **Mois 3, niveau 2**, brouillons validés par l'équipe, erreurs corrigées dans les règles. **Mois 4 et 5, niveau 3**, relances envoyées, rendez-vous confirmés, seuils fixés et respectés. **Mois 6, niveau 4**, résumé du jour, mesure, revue : taux de réponse, impayés récupérés, demandes qualifiées, temps de l'équipe libéré.",
        "Un agent de ce périmètre, trois canaux, trois langues, branché sur un back-office existant, se situe en catégorie 2 de notre [grille de prix](/blog/prix-application-mobile-algerie-2026/), le back-office à construire en plus s'il n'existe pas.",
      ] },
      { heading: "Les erreurs que nous voyons avec l'IA en entreprise", body: [], list: [
        "**Brancher un agent sur un cahier.** Il n'a rien à lire. Les données dans un système d'abord.",
        "**Commencer par l'autonomie maximale.** Une relance fausse envoyée à cent clients. Un niveau par mois.",
        "**Un agent qui ne comprend que le français.** Les clients écrivent en darija et en arabe latinisé. Les trois langues et leurs mélanges, dès le niveau 1.",
        "**Pas d'escalade à un humain.** L'agent invente quand il ne sait pas. Il doit savoir dire « je transmets » et le faire.",
        "**Aucun seuil.** Un geste commercial sans limite, un délai accordé à tous. Seuils écrits, au-delà il escalade.",
        "**Aucun journal.** Un client conteste, personne ne sait ce que l'agent a dit. Chaque conversation et chaque action sont journalisées.",
        "**Mesurer rien.** Sans taux de réponse, impayés récupérés et demandes qualifiées, l'agent est une dépense. Un chiffre par usage, lu chaque semaine.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Quel est le premier usage d'un agent IA dans une PME algérienne ?", a: "Les relances de paiement et de commande, parce qu'elles traitent de l'argent qui existe déjà et qu'on ne récupère pas, puis le support client en arabe, français et darija 24h/24, puis la qualification des demandes WhatsApp. Les trois exigent que l'information vive dans un système." },
        { q: "Un agent IA peut-il répondre sur WhatsApp en darija ?", a: "Oui, à condition qu'il soit conçu pour les trois langues et leurs mélanges, y compris l'arabe écrit en lettres latines, et qu'il escalade à un humain dès qu'il n'est pas sûr. WhatsApp Business est le premier canal, parce que c'est là que les clients écrivent déjà." },
        { q: "Que doit-il exister avant de mettre un agent IA ?", a: "Des données dans un système, échéancier, commandes ou demandes, des règles écrites, et un back-office que l'agent peut lire et écrire. Sans cela, l'agent parle mais ne travaille pas. Si rien n'existe, on construit le back-office d'abord." },
        { q: "Jusqu'où laisser l'agent agir seul ?", a: "Jusqu'au niveau 3 : il agit dans des limites que vous fixez, relance envoyée, rendez-vous confirmé, geste commercial sous un seuil, et escalade au-delà. Remplacer un commercial ou décider un crédit reste hors sujet : l'agent prépare, l'humain décide." },
        { q: "Où tourne l'agent et comment le paie-t-on depuis l'Algérie ?", a: "Les modèles se louent à l'usage en devises auprès de fournisseurs étrangers ; le coût d'usage est faible pour une PME, l'intégration est ce qui se cadre. Pour les données qui ne doivent pas sortir du pays, des modèles ouverts s'hébergent sur une infrastructure locale, ce qui se décide au cadrage." },
        { q: "Combien de temps pour avoir un agent utile ?", a: "Six mois : un mois de prérequis sans IA, puis un niveau d'autonomie par mois environ, il répond, il propose, il agit dans des limites, il rend compte. Chaque niveau est mesuré avant de passer au suivant." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Un agent branché sur un cahier n'a rien à lire." },
      { after: 2, text: "Sans la couche des outils, l'agent parle ; il ne travaille pas." },
    ],
    cta: { eyebrow: 'Décrivez ce que vous voulez automatiser', title: "Les questions que vos clients posent, ce que vous relancez à la main, ce que vous voudriez lire chaque soir. Nous vous dirons quels usages paient chez vous, ce qui doit exister avant, et le prix total écrit de l'agent et de ses outils.", body: "Symloop conçoit des agents IA pour les entreprises algériennes : WhatsApp Business, application et e-mail, compréhension de l'arabe, du français et de la darija, règles et seuils écrits, lecture et écriture dans votre back-office, journal de chaque action, escalade à un humain, hébergement conforme à la loi 18-07 ou infrastructure locale pour les données sensibles. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/', kind: '2027', name: 'Digitaliser une PME en Algérie en 2027 : par où commencer' },
      { href: '/blog/payer-cloud-ia-depuis-algerie-carte-internationale-solutions-2026/', kind: 'Problème', name: "Payer le cloud et l'IA depuis l'Algérie" },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Lancer un SaaS en Algérie en 2027' },
      { href: '/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/', kind: 'Problème', name: 'Une agence immobilière sur WhatsApp et Google Sheets' },
    ] },
  },
  en: {
    kind: 'Problem · AI in the company', title: 'Putting an AI agent in my company in Algeria in 2027: where to start, what works, what must exist first.',
    dek: "You already use ChatGPT to draft an e-mail or translate a quote, and you wonder what an “AI agent” would really change in your company: answering customers on WhatsApp at night, chasing unpaid bills, sorting requests, summarising your day. What pays in Algeria and what is useless, what must exist before the first line of AI, the four autonomy levels to climb in order, where the agent runs and how it is paid, and the six months to get there.",
    publishedAt: 'October 2026', readTime: '11 min read', author: 'Symloop', about: ['AI agent', 'Artificial intelligence', 'WhatsApp Business', 'Automation', 'Algeria 2027'],
    intro: [
      "**Short answer.** An AI agent only works if it has something to read and something to do: a schedule to follow up, rules to answer from, a back-office to write into. **The three uses that pay in Algeria, payment and order reminders, customer support in Arabic, French and darija around the clock, and qualifying WhatsApp requests, all share that prerequisite.** Writing posts or summarising documents yields little; replacing a salesperson or deciding credit is off topic. Then one autonomy level at a time: the agent answers, then proposes, then acts within limits, then acts and reports. The first month contains no AI: it puts the data into a system. It is the month that decides whether the next five are worth anything.",
      "This guide extends our [roadmap for digitising an SME in 2027](/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/), where AI arrives in the fourth quarter, after collection, the flow and the back-office. It answers owners who write to us “I want to add AI” without knowing where, and founders who want an agent in their [SaaS](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/) or their [app](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/).",
    ],
    sections: [
      { heading: 'The uses that pay, and those that are useless', body: [
        "Seven uses, ranked by gain for an Algerian SME, each with what must exist first. The right-hand column is the important one.",
      ], visual: 'uses', after: [
        "**Reminders** are the most profitable use, because they deal with money that already exists and is not being recovered: the unpaid instalment of a [school](/blog/ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026/), the unconfirmed order of an [e-merchant](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/), the late invoice of a wholesaler. The agent follows up at the right time, in the customer's language, with the exact amount and how to pay, and raises to a human those who do not respond. Prerequisite: the schedule or the orders live in a system.",
        "**Trilingual support** answers at night and on Friday, from your rules and your back-office: where is my order, what are your hours, how much do I owe. It understands Arabic, French, darija and Arabic written in Latin letters, because that is how your customers write. Prerequisite: written rules and a status readable somewhere. **Qualifying WhatsApp requests** turns the message flood of a [real-estate agency](/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/) or a [carrier](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/) into sorted requests, with complete information, dropped into a pipeline. Prerequisite: a pipeline.",
        "**The daily summary**, document entry and copywriting are useful but secondary. The first requires one single base; the second, a volume of paper; the third requires nothing, which is why everyone already has it and nobody gains an edge from it. **Replacing a salesperson or deciding credit** is off topic: the agent prepares, the human decides. A company that lets an agent promise a price or grant a payment delay without limit regrets it within a week.",
      ] },
      { heading: 'The four autonomy levels, in order', body: [
        "The question is not “which AI”, it is “how much autonomy, and when”. Four levels, climbed one by one.",
      ], visual: 'levels', after: [
        "**Level 1, it answers**: read-only, status, hours, balance, rules. No risk, an immediate gain on repetitive questions. **Level 2, it proposes**: it drafts the reminder, suggests the appointment, prepares the reply, and a human validates before sending. This is the level where the team learns to trust it, and where you discover its mistakes before a customer sees them. **Level 3, it acts within limits**: the reminder goes out, the appointment is confirmed, a goodwill gesture is granted under a threshold you set; beyond, it escalates. This is the level that pays. **Level 4, it acts and reports**: every evening, what it did, what it could not do, the exceptions, the numbers. The human supervises instead of executing.",
        "Jumping from level 1 to level 4 in a month is the surest way to lose the trust of the team, who will watch the agent fail in public, and of the customers, who will receive a wrong reminder. About one level per month, each measured.",
      ] },
      { heading: 'How the agent fits into the company', body: [
        "An agent is not a chatbot dropped onto a website. It is five layers, of which the third, the tools, makes the difference between an agent that talks and an agent that works.",
      ], visual: 'stack', after: [
        "**The channels** are where your customers already write: WhatsApp Business first, your app or website next, e-mail for B2B requests. Same rules everywhere. **The agent** understands the three languages and their mixes, knows your rules, what it may say, do and promise, and escalates to a human as soon as it is unsure. **The tools** are reading and writing in your back-office: read an order, write an appointment, update a schedule, drop a request into the CRM. Without them the agent is a polite answering machine. **The data** lives in one single base, with hosting chosen with Law 18-07 in mind, and every action of the agent is logged: who said what, who did what. **Control** is human: thresholds, weekly review of conversations, numbers.",
        "**Where the agent runs, and how it is paid.** AI models are rented per use, in foreign currency, from foreign providers; we detailed [how to pay for cloud and AI from Algeria](/blog/payer-cloud-ia-depuis-algerie-carte-internationale-solutions-2026/). For an SME the usage cost is small next to a salary; what costs is the integration with the tools, and that is what gets scoped in writing with a total price. For companies whose data must not leave the country, clinics, insurers, administrations, open models can be hosted on local infrastructure; it is heavier, and it is decided at scoping, not after.",
      ] },
      { heading: 'Six months, one level at a time', body: [
        "The calendar of an AI agent in 2027 starts with a month without AI.",
      ], visual: 'timeline', after: [
        "**Month 1, prerequisites**: the schedule, orders or requests enter a system; company rules are written, hours, return policy, delays, what you promise and what you do not; the back-office exposes what must be read and written. If this month reveals that nothing exists in a system, the right decision is to build the back-office first, as we explain in the [SME roadmap](/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/). **Month 2, level 1** on WhatsApp and in the app. **Month 3, level 2**, drafts validated by the team, mistakes fixed in the rules. **Months 4 and 5, level 3**, reminders sent, appointments confirmed, thresholds set and respected. **Month 6, level 4**, daily summary, measurement, review: response rate, unpaid bills recovered, requests qualified, team time freed.",
        "An agent of this scope, three channels, three languages, connected to an existing back-office, sits in category 2 of our [price grid](/blog/prix-application-mobile-algerie-2026/), with the back-office to build on top if it does not exist.",
      ] },
      { heading: 'The mistakes we see with AI in companies', body: [], list: [
        "**Plugging an agent into a notebook.** It has nothing to read. Data in a system first.",
        "**Starting with maximum autonomy.** A wrong reminder sent to a hundred customers. One level per month.",
        "**An agent that only understands French.** Customers write in darija and Latin-script Arabic. The three languages and their mixes, from level 1.",
        "**No escalation to a human.** The agent makes things up when it does not know. It must be able to say “I'll pass this on” and do it.",
        "**No thresholds.** A goodwill gesture without limit, a delay granted to everyone. Written thresholds, beyond which it escalates.",
        "**No log.** A customer disputes, nobody knows what the agent said. Every conversation and every action is logged.",
        "**Measuring nothing.** Without response rate, recovered bills and qualified requests, the agent is an expense. One number per use, read every week.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'What is the first use of an AI agent in an Algerian SME?', a: 'Payment and order reminders, because they deal with money that already exists and is not being recovered, then customer support in Arabic, French and darija around the clock, then qualifying WhatsApp requests. All three require the information to live in a system.' },
        { q: 'Can an AI agent answer on WhatsApp in darija?', a: 'Yes, provided it is designed for the three languages and their mixes, including Arabic written in Latin letters, and escalates to a human as soon as it is unsure. WhatsApp Business is the first channel, because that is where customers already write.' },
        { q: 'What must exist before adding an AI agent?', a: 'Data in a system, schedule, orders or requests, written rules, and a back-office the agent can read and write. Without that, the agent talks but does not work. If nothing exists, the back-office is built first.' },
        { q: 'How far should the agent act on its own?', a: 'Up to level 3: it acts within limits you set, reminder sent, appointment confirmed, goodwill gesture under a threshold, and escalates beyond. Replacing a salesperson or deciding credit stays off topic: the agent prepares, the human decides.' },
        { q: 'Where does the agent run and how is it paid from Algeria?', a: 'Models are rented per use in foreign currency from foreign providers; the usage cost is small for an SME, the integration is what gets scoped. For data that must not leave the country, open models can be hosted on local infrastructure, which is decided at scoping.' },
        { q: 'How long until the agent is useful?', a: 'Six months: one month of prerequisites without AI, then about one autonomy level per month, it answers, it proposes, it acts within limits, it reports. Each level is measured before moving to the next.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'An agent plugged into a notebook has nothing to read.' },
      { after: 2, text: 'Without the tools layer, the agent talks; it does not work.' },
    ],
    cta: { eyebrow: 'Describe what you want to automate', title: 'The questions your customers ask, what you chase by hand, what you would like to read every evening. We will tell you which uses pay in your case, what must exist first, and the written total price of the agent and its tools.', body: 'Symloop designs AI agents for Algerian companies: WhatsApp Business, app and e-mail, understanding of Arabic, French and darija, written rules and thresholds, read and write access to your back-office, log of every action, escalation to a human, Law 18-07 compliant hosting or local infrastructure for sensitive data. Senior engineers in Algiers and Setif, written scoping, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/', kind: '2027', name: 'Digitising an SME in Algeria in 2027: where to start' },
      { href: '/blog/payer-cloud-ia-depuis-algerie-carte-internationale-solutions-2026/', kind: 'Problem', name: 'Paying for cloud and AI from Algeria' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Launching a SaaS in Algeria in 2027' },
      { href: '/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/', kind: 'Problem', name: 'A real-estate agency on WhatsApp and Google Sheets' },
    ] },
  },
  ar: {
    kind: 'مشكلة · الذكاء الاصطناعي في الشركة', title: 'إدخال وكيل ذكاء اصطناعي في شركتي في الجزائر سنة 2027: من أين أبدأ، ما ينجح، وما يجب أن يوجد قبله.',
    dek: 'تستعمل ChatGPT أصلاً لكتابة بريد أو ترجمة عرض سعر، وتتساءل ما الذي سيغيّره «وكيل ذكاء اصطناعي» فعلاً في شركتك: الرد على الزبائن على واتساب ليلاً، تذكير المتأخرين بالدفع، فرز الطلبات، تلخيص يومك. ما ينفع في الجزائر وما لا ينفع، ما يجب أن يوجد قبل أول سطر ذكاء اصطناعي، مستويات الاستقلالية الأربعة التي تُجتاز بالترتيب، أين يعمل الوكيل وكيف يُدفع ثمنه، والأشهر الستة للوصول.',
    publishedAt: 'أكتوبر 2026', readTime: '11 دقيقة قراءة', author: 'سيملوب', about: ['وكيل ذكاء اصطناعي', 'ذكاء اصطناعي', 'واتساب للأعمال', 'أتمتة', 'الجزائر 2027'],
    intro: [
      '**الجواب المختصر.** لا يعمل وكيل الذكاء الاصطناعي إلا إن كان لديه ما يقرأ وما يفعل: جدول استحقاقات ليذكّر، قواعد ليجيب، مكتب خلفي ليكتب فيه. **الاستخدامات الثلاثة المجدية في الجزائر، تذكيرات الدفع والطلبات، دعم الزبائن بالعربية والفرنسية والدارجة على مدار الساعة، وتأهيل طلبات واتساب، تشترك كلها في هذا الشرط.** كتابة المنشورات أو تلخيص الوثائق يدرّ القليل؛ واستبدال مندوب تجاري أو تقرير قرض خارج الموضوع. ثم مستوى استقلالية واحد في كل مرة: الوكيل يجيب، ثم يقترح، ثم يتصرف ضمن حدود، ثم يتصرف ويقدّم تقريراً. الشهر الأول لا يحتوي ذكاءً اصطناعياً: يضع البيانات في نظام. وهو الذي يقرر إن كانت الأشهر الخمسة التالية تنفع بشيء.',
      'يمدّد هذا الدليل [خارطة طريقنا لرقمنة مؤسسة في 2027](/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/) حيث يأتي الذكاء الاصطناعي في الفصل الرابع بعد التحصيل والتدفق والمكتب الخلفي. ويجيب المسيّرين الذين يكتبون لنا «أريد إدخال الذكاء الاصطناعي» دون أن يعرفوا أين، والمؤسسين الذين يريدون وكيلاً في [SaaS](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/) أو [تطبيقهم](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/).',
    ],
    sections: [
      { heading: 'الاستخدامات المجدية، وتلك التي لا تنفع', body: [
        'سبعة استخدامات مرتبة حسب الفائدة لمؤسسة جزائرية، مع ما يجب أن يوجد قبل كل منها. العمود الأيسر هو الأهم.',
      ], visual: 'uses', after: [
        '**التذكيرات** هي الاستخدام الأكثر ربحية لأنها تعالج مالاً موجوداً أصلاً ولا يُسترد: القسط غير المدفوع في [مدرسة](/blog/ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026/)، الطلب غير المؤكد عند [تاجر إلكتروني](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/)، الفاتورة المتأخرة عند تاجر جملة. يذكّر الوكيل في الوقت المناسب بلغة الزبون بالمبلغ الدقيق وطريقة الدفع، ويرفع إلى الإنسان من لا يجيبون. الشرط: جدول الاستحقاقات أو الطلبات في نظام.',
        '**الدعم بثلاث لغات** يجيب ليلاً ويوم الجمعة انطلاقاً من قواعدك ومكتبك الخلفي: أين طلبي، ما مواعيدكم، كم أدين. يفهم العربية والفرنسية والدارجة والعربية المكتوبة بحروف لاتينية، لأن زبائنك يكتبون هكذا. الشرط: قواعد مكتوبة وحالة قابلة للقراءة في مكان ما. **تأهيل طلبات واتساب** يحوّل سيل رسائل [وكالة عقارية](/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/) أو [ناقل](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/) إلى طلبات مفروزة بمعلومات كاملة مودَعة في خط أنابيب. الشرط: خط أنابيب.',
        '**ملخص اليوم** وإدخال الوثائق والكتابة مفيدة لكنها ثانوية. الأول يتطلب قاعدة واحدة؛ الثاني حجماً من الورق؛ الثالث لا يتطلب شيئاً، ولهذا يملكه الجميع أصلاً ولا يستفيد منه أحد. **استبدال مندوب تجاري أو تقرير قرض** خارج الموضوع: الوكيل يحضّر والإنسان يقرر. شركة تترك وكيلاً يعد بسعر أو يمنح أجلاً بلا حد تندم خلال أسبوع.',
      ] },
      { heading: 'مستويات الاستقلالية الأربعة، بالترتيب', body: [
        'السؤال ليس «أي ذكاء اصطناعي» بل «كم من الاستقلالية ومتى». أربعة مستويات تُجتاز واحداً واحداً.',
      ], visual: 'levels', after: [
        '**المستوى 1، يجيب**: قراءة فقط، حالة، مواعيد، رصيد، نظام داخلي. لا خطر، وفائدة فورية على الأسئلة المتكررة. **المستوى 2، يقترح**: يكتب التذكير، يقترح الموعد، يحضّر الرد، وإنسان يصادق قبل الإرسال. هذا المستوى الذي يتعلم فيه الفريق الثقة به وتكتشف فيه أخطاءه قبل أن يراها زبون. **المستوى 3، يتصرف ضمن حدود**: يُرسل التذكير، يُؤكَّد الموعد، تُمنح بادرة تجارية تحت سقف حددته؛ وفوقه يصعّد. هذا المستوى الذي يدرّ. **المستوى 4، يتصرف ويقدّم تقريراً**: كل مساء، ما فعله، ما لم يستطع فعله، الاستثناءات، الأرقام. الإنسان يشرف بدل أن ينفّذ.',
        'القفز من المستوى 1 إلى المستوى 4 في شهر هو أضمن طريقة لخسارة ثقة الفريق الذي سيرى الوكيل يخطئ علناً، والزبائن الذين سيتلقون تذكيراً خاطئاً. مستوى واحد في الشهر تقريباً، كل منها مقيس.',
      ] },
      { heading: 'كيف يندمج الوكيل في الشركة', body: [
        'الوكيل ليس روبوت دردشة موضوعاً على موقع. هو خمس طبقات، ثالثتها، الأدوات، هي التي تصنع الفرق بين وكيل يتكلم ووكيل يعمل.',
      ], visual: 'stack', after: [
        '**القنوات** هي حيث يكتب زبائنك أصلاً: واتساب للأعمال أولاً، ثم تطبيقك أو موقعك، والبريد لطلبات B2B. القواعد نفسها في كل مكان. **الوكيل** يفهم اللغات الثلاث وخليطها، يعرف قواعدك، ما يجوز له قوله وفعله والوعد به، ويصعّد إلى إنسان بمجرد أن لا يكون متأكداً. **الأدوات** هي القراءة والكتابة في مكتبك الخلفي: قراءة طلب، كتابة موعد، تحديث جدول استحقاقات، إيداع طلب في CRM. بدونها الوكيل مجيب آلي مهذب. **البيانات** تعيش في قاعدة واحدة باستضافة مختارة وفق القانون 18-07، وكل إجراء للوكيل مسجَّل: من قال ماذا، من فعل ماذا. **التحكم** بشري: سقوف، مراجعة أسبوعية للمحادثات، أرقام.',
        '**أين يعمل الوكيل، وكيف يُدفع ثمنه.** تُستأجر نماذج الذكاء الاصطناعي حسب الاستعمال بالعملة الصعبة من مزودين أجانب؛ فصّلنا [كيف تدفع للسحابة والذكاء الاصطناعي من الجزائر](/blog/payer-cloud-ia-depuis-algerie-carte-internationale-solutions-2026/). لمؤسسة صغيرة تكلفة الاستعمال ضئيلة مقارنة براتب؛ وما يكلّف هو الدمج مع الأدوات، وهو ما يُؤطَّر كتابياً بسعر إجمالي. أما الشركات التي يجب ألا تخرج بياناتها من البلد، عيادات، تأمينات، إدارات، فتُستضاف نماذج مفتوحة على بنية تحتية محلية؛ وهذا أثقل، ويُقرَّر عند التأطير لا بعده.',
      ] },
      { heading: 'ستة أشهر، مستوى واحد في كل مرة', body: [
        'يبدأ جدول وكيل الذكاء الاصطناعي في 2027 بشهر بلا ذكاء اصطناعي.',
      ], visual: 'timeline', after: [
        '**الشهر 1، الشروط المسبقة**: جدول الاستحقاقات أو الطلبات أو الطلبيات تدخل نظاماً؛ قواعد الشركة مكتوبة، مواعيد، سياسة الإرجاع، آجال، ما نعد به وما لا نعد به؛ المكتب الخلفي يتيح ما يجب قراءته وكتابته. إن كشف هذا الشهر أن لا شيء موجود في نظام، فالقرار الصحيح بناء المكتب الخلفي أولاً كما نشرح في [خارطة طريق المؤسسات](/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/). **الشهر 2، المستوى 1** على واتساب وفي التطبيق. **الشهر 3، المستوى 2**، مسودات يصادق عليها الفريق وأخطاء تُصحَّح في القواعد. **الشهران 4 و5، المستوى 3**، تذكيرات مرسَلة، مواعيد مؤكَّدة، سقوف محددة ومحترمة. **الشهر 6، المستوى 4**، ملخص اليوم، قياس، مراجعة: نسبة الرد، المتأخرات المستردة، الطلبات المؤهَّلة، وقت الفريق المحرَّر.',
        'وكيل بهذا النطاق، ثلاث قنوات، ثلاث لغات، موصول بمكتب خلفي موجود، يقع في الفئة 2 من [شبكة أسعارنا](/blog/prix-application-mobile-algerie-2026/)، مع المكتب الخلفي إضافةً إن لم يكن موجوداً.',
      ] },
      { heading: 'الأخطاء التي نراها مع الذكاء الاصطناعي في الشركات', body: [], list: [
        '**وصل وكيل بدفتر.** لا يجد ما يقرأ. البيانات في نظام أولاً.',
        '**البدء بأقصى استقلالية.** تذكير خاطئ يُرسل إلى مئة زبون. مستوى واحد في الشهر.',
        '**وكيل لا يفهم إلا الفرنسية.** يكتب الزبائن بالدارجة وبالعربية اللاتينية. اللغات الثلاث وخليطها منذ المستوى 1.',
        '**لا تصعيد إلى إنسان.** يخترع الوكيل حين لا يعرف. يجب أن يعرف قول «سأحوّل الطلب» ويفعله.',
        '**لا سقوف.** بادرة تجارية بلا حد، أجل يُمنح للجميع. سقوف مكتوبة، وفوقها يصعّد.',
        '**لا سجل.** يعترض زبون ولا أحد يعرف ما قاله الوكيل. كل محادثة وكل إجراء مسجَّلان.',
        '**عدم قياس أي شيء.** بلا نسبة رد ومتأخرات مستردة وطلبات مؤهَّلة يكون الوكيل نفقة. رقم لكل استخدام، يُقرأ كل أسبوع.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'ما أول استخدام لوكيل ذكاء اصطناعي في مؤسسة جزائرية؟', a: 'تذكيرات الدفع والطلبات لأنها تعالج مالاً موجوداً أصلاً ولا يُسترد، ثم دعم الزبائن بالعربية والفرنسية والدارجة على مدار الساعة، ثم تأهيل طلبات واتساب. الثلاثة تتطلب أن تعيش المعلومة في نظام.' },
        { q: 'هل يستطيع وكيل الذكاء الاصطناعي الرد على واتساب بالدارجة؟', a: 'نعم، بشرط أن يُصمَّم للغات الثلاث وخليطها بما فيها العربية بحروف لاتينية، وأن يصعّد إلى إنسان بمجرد أن لا يكون متأكداً. واتساب للأعمال هو القناة الأولى لأن الزبائن يكتبون هناك أصلاً.' },
        { q: 'ما الذي يجب أن يوجد قبل إدخال وكيل ذكاء اصطناعي؟', a: 'بيانات في نظام، جدول استحقاقات أو طلبات أو طلبيات، قواعد مكتوبة، ومكتب خلفي يستطيع الوكيل قراءته والكتابة فيه. بدون ذلك يتكلم الوكيل ولا يعمل. وإن لم يوجد شيء يُبنى المكتب الخلفي أولاً.' },
        { q: 'إلى أي حد نترك الوكيل يتصرف وحده؟', a: 'حتى المستوى 3: يتصرف ضمن حدود تضعها، تذكير مرسَل، موعد مؤكَّد، بادرة تجارية تحت سقف، ويصعّد فوقها. استبدال مندوب تجاري أو تقرير قرض يبقى خارج الموضوع: الوكيل يحضّر والإنسان يقرر.' },
        { q: 'أين يعمل الوكيل وكيف يُدفع ثمنه من الجزائر؟', a: 'تُستأجر النماذج حسب الاستعمال بالعملة الصعبة من مزودين أجانب؛ تكلفة الاستعمال ضئيلة لمؤسسة صغيرة، والدمج هو ما يُؤطَّر. وللبيانات التي يجب ألا تخرج من البلد تُستضاف نماذج مفتوحة على بنية تحتية محلية، وهو ما يُقرَّر عند التأطير.' },
        { q: 'كم من الوقت للحصول على وكيل مفيد؟', a: 'ستة أشهر: شهر شروط مسبقة بلا ذكاء اصطناعي، ثم مستوى استقلالية واحد في الشهر تقريباً، يجيب، يقترح، يتصرف ضمن حدود، يقدّم تقريراً. يُقاس كل مستوى قبل الانتقال إلى التالي.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'وكيل موصول بدفتر لا يجد ما يقرأ.' },
      { after: 2, text: 'بدون طبقة الأدوات يتكلم الوكيل ولا يعمل.' },
    ],
    cta: { eyebrow: 'صف ما تريد أتمتته', title: 'الأسئلة التي يطرحها زبائنك، ما تذكّر به يدوياً، ما تودّ قراءته كل مساء. سنخبرك بالاستخدامات المجدية عندك، وما يجب أن يوجد قبلها، والسعر الإجمالي المكتوب للوكيل وأدواته.', body: 'تصمم سيملوب وكلاء الذكاء الاصطناعي للشركات الجزائرية: واتساب للأعمال والتطبيق والبريد، فهم العربية والفرنسية والدارجة، قواعد وسقوف مكتوبة، قراءة وكتابة في مكتبك الخلفي، سجل لكل إجراء، تصعيد إلى إنسان، استضافة مطابقة للقانون 18-07 أو بنية تحتية محلية للبيانات الحساسة. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/', kind: '2027', name: 'رقمنة مؤسسة في الجزائر سنة 2027: من أين تبدأ' },
      { href: '/blog/payer-cloud-ia-depuis-algerie-carte-internationale-solutions-2026/', kind: 'مشكلة', name: 'الدفع للسحابة والذكاء الاصطناعي من الجزائر' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'إطلاق SaaS في الجزائر سنة 2027' },
      { href: '/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/', kind: 'مشكلة', name: 'وكالة عقارية على واتساب وجوجل شيتس' },
    ] },
  },
};

const KEYWORDS = "agent ia entreprise algérie 2027, intelligence artificielle pme algérie, chatbot whatsapp entreprise algérie darija, ia relances clients impayés, automatisation ia entreprise algérie, agent ia support client arabe français, ai agent company algeria 2027, وكيل ذكاء اصطناعي شركة الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
