import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels.mjs';

const SLUG = 'combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels';
const FIGURES = ['types', 'phases', 'parallel', 'timeline'];
const DATE = '2026-10-30';

const CONTENT = {
  fr: {
    kind: 'Problème · Délais', title: "Combien de temps pour développer une application ou une plateforme en Algérie en 2027 ? Les délais réels, par type de projet.",
    dek: "Vous avez reçu trois devis : l'un promet six semaines, l'autre quatre mois, le troisième ne dit rien. Aucun ne précise ce qui est compté, ce qui dépend de vous, et ce qui dépend d'une banque ou d'un store. Les délais réels par type de projet, les cinq phases et qui tient chacune, les lignes qui courent en parallèle et ne dépendent de personne, et un calendrier de seize semaines, en vrai, pour une application avec back-office.",
    publishedAt: 'Octobre 2026', readTime: '10 min de lecture', author: 'Symloop', about: ['Délais', 'Application mobile', 'Plateforme', 'Calendrier projet', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** En 2027, en Algérie, **un site ou une web-app de commande se construit en six à dix semaines ; une application mobile avec back-office en trois à cinq mois ; un SaaS métier avec facturation en quatre à six ; une plateforme à deux faces avec séquestre et logistique en cinq à huit ; un agent IA branché sur un back-office existant en six semaines à trois mois ; une reprise d'application abandonnée en six semaines.** Ce qui fait qu'un projet de trois mois en prend six n'est presque jamais le code : c'est le dossier de web-marchand lancé trop tard, les comptes stores ouverts au mauvais nom, les données à reprendre livrées en dernier, et les validations qui attendent. Un calendrier honnête a cinq lignes, pas une, et il donne une date de mise en ligne parce qu'il montre ce qui court en parallèle.",
      "Ce guide complète [peut-on connaître le prix total avant de commencer](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/) : le prix et le délai s'écrivent ensemble, dans le même cadrage. Les délais ci-dessous sont ceux que nous écrivons dans nos calendriers ; ils supposent un cadrage signé et un interlocuteur qui valide en quarante-huit heures.",
    ],
    sections: [
      { heading: 'Les délais réels par type de projet', body: [
        "Six types de projets, deux colonnes. La première est le temps de construction. La seconde est ce qui s'y ajoute quand on ne l'a pas lancé le premier jour.",
      ], visual: 'types', after: [
        "**Le site ou la web-app de commande**, prise de rendez-vous, catalogue, paiement, suivi, se construit en six à dix semaines ; ce qui le fait durer est le statut de web-marchand, qui s'obtient via la banque et le GIE Monétique en des semaines à des mois, et qui part le premier jour ou retarde tout. **L'application mobile avec back-office**, Android et iOS avec un seul code, hors-ligne, paiement, prend trois à cinq mois ; les comptes stores à votre nom, le hors-ligne testé sur le terrain et la reprise des données sont les trois lignes qui l'allongent, nous les avons détaillées dans [les sept décisions d'une application mobile en 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/). **Le SaaS métier** avec facturation et abonnement prend quatre à six mois, et c'est le périmètre du métier et les dix clients pilotes qui décident, comme dans [lancer un SaaS en Algérie en 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/). **La plateforme à deux faces**, séquestre, logistique, prend cinq à huit mois, parce que les vendeurs se recrutent avant le code et que les transporteurs se contractent avant le pilote. **L'agent IA** sur un back-office existant prend six semaines à trois mois selon l'état des données et des règles écrites, et un mois de plus si rien n'existe dans un système. **La reprise** d'une application abandonnée prend six semaines, dont deux à trois pour récupérer des comptes et un code qui ne sont pas sous votre contrôle, comme nous l'avons décrit dans [mon application est bloquée chez un développeur qui a disparu](/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/).",
      ] },
      { heading: 'Les cinq phases, et qui tient chacune', body: [
        "Un projet ne se mesure pas en mois de code. Il se mesure en cinq phases, dont trois dépendent de vous autant que de nous.",
      ], visual: 'phases', after: [
        "**Le cadrage écrit**, une à deux semaines : vous décidez, nous écrivons les écrans, les règles, le prix total et le calendrier à cinq lignes. C'est la phase que les devis de six semaines sautent, et c'est pourquoi ils ne tiennent pas. **Le prototype testé**, une à deux semaines, avec cinq utilisateurs réels, pas des proches : c'est le moment le moins cher pour changer d'avis, et chaque changement demandé après coûte dix fois plus. **Le développement**, le gros du délai, livré toutes les deux semaines en versions que vous pouvez ouvrir et tester ; un projet dont vous ne voyez rien pendant deux mois est un projet en retard qui ne le dit pas. **La reprise des données et les tests terrain**, deux à quatre semaines : vos fichiers réels, vos téléphones, votre réseau, vos utilisateurs ; une application ouverte avec des données fausses perd la confiance de l'équipe en une semaine. **La mise en ligne et les corrections**, deux semaines : stores, production, premières versions correctives incluses dans le projet, pas dans un devis supplémentaire.",
      ] },
      { heading: 'Ce qui court en parallèle, et ne dépend de personne', body: [
        "La différence entre un devis et un calendrier, c'est que le calendrier a cinq lignes. Voici les cinq.",
      ], visual: 'parallel', after: [
        "**Vous** : les décisions et les validations, quarante-huit heures chacune ou le projet attend ; et les données à reprendre, livrées propres le plus tôt possible, pas la veille de la mise en ligne. C'est la ligne qui fait le plus souvent la différence entre trois mois et six. **Les banques et le GIE Monétique** : le statut de web-marchand prend des semaines à des mois, selon la banque et l'état de votre dossier ; il part le premier jour du cadrage, et aucun code ne peut l'accélérer. **Les stores** : les comptes développeur à votre nom, avec une vérification d'identité, puis la revue de l'application à chaque publication, quelques jours, parfois des allers-retours. **L'administration** : selon le projet, la société, le [label startup](/blog/label-startup-algerie-2026-conditions-dossier-avantages/), l'identification de la plateforme auprès du fisc prévue par le PLF 2027 ; en parallèle, jamais en série. **Nous** : la construction, la seule ligne que le studio contrôle entièrement, et la seule sur laquelle il peut s'engager sans condition.",
        "Un devis qui ne montre qu'une ligne vous promet une date qu'il ne tient pas, parce qu'il ignore les quatre autres. Un calendrier qui les montre vous donne une date de mise en ligne, et vous dit exactement ce qui la décale si elle bouge.",
      ] },
      { heading: 'Un calendrier réel : seize semaines pour une application avec back-office', body: [
        "Voici à quoi ressemble, en vrai, le calendrier d'une application mobile avec back-office, paiement et reprise de données, quand tout part le premier jour.",
      ], visual: 'timeline', after: [
        "**Semaines 1 et 2, le cadrage** ; et dès la semaine 1, le dossier de web-marchand et les comptes stores, qui courent jusqu'à la semaine 12 sans que personne ne puisse les accélérer. **Semaines 3 et 4, le prototype**, testé avec cinq utilisateurs. **Semaines 5 à 12, le développement**, livré toutes les deux semaines. **Semaines 12 à 14, la reprise des données et les tests terrain**, avec vos fichiers arrivés en semaine 8, pas en semaine 13. **Semaines 15 et 16, la mise en ligne**, revue des stores comprise, et les premières corrections.",
        "Le même projet, avec le web-marchand lancé en semaine 8 et les données livrées en semaine 13, se met en ligne en semaine 24. Rien n'a changé dans le code. C'est la raison pour laquelle nous refusons d'écrire un délai sans écrire les cinq lignes, et pour laquelle le cadrage, lui, commence toujours par la liste de ce qui part le premier jour.",
      ] },
      { heading: 'Ce qui fait qu’un projet de trois mois en prend six', body: [], list: [
        "**Le web-marchand lancé après le produit.** L'application est prête, la carte n'est pas acceptée. Il part le premier jour du cadrage.",
        "**Les comptes stores au nom du prestataire.** Transfert, vérification, semaines perdues. À votre nom, dès la semaine 1.",
        "**Les données livrées la veille.** La reprise révèle des doublons et des champs vides, et tout s'arrête. Fichiers propres en milieu de projet.",
        "**Des validations qui prennent trois semaines.** Chaque écran attendu bloque le suivant. Un interlocuteur, quarante-huit heures.",
        "**Pas de prototype.** Les changements arrivent en développement et coûtent dix fois plus. Cinq utilisateurs réels en semaine 3.",
        "**Rien de visible pendant deux mois.** Le retard se découvre à la fin. Livraisons toutes les deux semaines, ou changez de prestataire.",
        "**Un périmètre qui grandit en route.** Chaque « tant qu'on y est » ajoute une semaine. Le cadrage écrit est la liste ; le reste va en version 2.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Combien de temps pour développer une application mobile en Algérie ?", a: "Trois à cinq mois pour une application Android et iOS avec back-office, paiement et reprise de données, quand le dossier de web-marchand et les comptes stores partent le premier jour. Un site ou une web-app de commande prend six à dix semaines ; une plateforme à deux faces cinq à huit mois." },
        { q: "Pourquoi les devis promettent-ils six semaines ?", a: "Parce qu'ils ne comptent que la ligne de construction et ignorent les quatre autres : vos validations et vos données, le statut de web-marchand, les comptes et la revue des stores, l'administration. Un calendrier honnête a cinq lignes et donne une date de mise en ligne qu'il peut tenir." },
        { q: "Qu'est-ce qui ne dépend de personne ?", a: "Le statut de web-marchand, obtenu via la banque et le GIE Monétique en des semaines à des mois ; la vérification des comptes développeur et la revue des stores ; et les démarches administratives selon le projet. Ces lignes partent le premier jour et courent en parallèle ; aucun code ne les accélère." },
        { q: "Combien de temps dure le cadrage ?", a: "Une à deux semaines, pour écrire les écrans, les règles, le prix total et le calendrier à cinq lignes. C'est la phase que les devis rapides sautent, et la raison pour laquelle ils ne tiennent pas." },
        { q: "Que puis-je faire pour que le projet aille plus vite ?", a: "Trois choses : valider en quarante-huit heures avec un seul interlocuteur, livrer vos données propres en milieu de projet plutôt qu'à la fin, et lancer le web-marchand et les comptes stores dès la semaine 1. Ces trois lignes font la différence entre trois mois et six." },
        { q: "Les corrections après la mise en ligne sont-elles comprises dans le délai ?", a: "Oui. Les deux dernières semaines du calendrier couvrent la mise en ligne, la revue des stores et les premières versions correctives, qui font partie du projet et non d'un devis supplémentaire. La maintenance de l'année suivante se décide à part, avant le lancement." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Ce qui fait qu'un projet de trois mois en prend six n'est presque jamais le code." },
      { after: 2, text: "Un devis qui ne montre qu'une ligne vous promet une date qu'il ne tient pas." },
    ],
    cta: { eyebrow: 'Décrivez votre projet', title: "Le type de projet, ce que vous avez déjà (société, compte bancaire, données, comptes stores) et la date à laquelle vous voulez être en ligne. Nous vous rendons le calendrier à cinq lignes et le prix total, écrits, avant de commencer.", body: "Symloop construit des applications mobiles, des SaaS et des plateformes pour l'Algérie avec un cadrage écrit, un prototype testé, des livraisons toutes les deux semaines, la reprise de vos données et l'accompagnement du dossier web-marchand et des comptes stores à votre nom. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problème', name: 'Peut-on connaître le prix total avant de commencer ?' },
      { href: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/', kind: '2027', name: 'Une application mobile en Algérie en 2027 : sept décisions' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Lancer un SaaS en Algérie en 2027' },
      { href: '/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/', kind: '2027', name: 'Mon application est bloquée chez un développeur qui a disparu' },
    ] },
  },
  en: {
    kind: 'Problem · Timelines', title: 'How long does it take to build an app or a platform in Algeria in 2027? Real timelines by project type.',
    dek: "You received three quotes: one promises six weeks, another four months, the third says nothing. None specifies what is counted, what depends on you, and what depends on a bank or a store. Real timelines by project type, the five phases and who holds each, the lines that run in parallel and depend on nobody, and a sixteen-week calendar, for real, for an app with back-office.",
    publishedAt: 'October 2026', readTime: '10 min read', author: 'Symloop', about: ['Timelines', 'Mobile app', 'Platform', 'Project calendar', 'Algeria 2027'],
    intro: [
      "**Short answer.** In 2027, in Algeria, **an ordering site or web app is built in six to ten weeks; a mobile app with back-office in three to five months; a vertical SaaS with invoicing in four to six; a two-sided platform with escrow and logistics in five to eight; an AI agent connected to an existing back-office in six weeks to three months; a takeover of an abandoned app in six weeks.** What turns a three-month project into six is almost never the code: it is the merchant file started too late, store accounts opened in the wrong name, data to import delivered last, and sign-offs that wait. An honest calendar has five lines, not one, and it gives a go-live date because it shows what runs in parallel.",
      "This guide complements [can you know the total price before starting](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/): price and timeline are written together, in the same scoping. The timelines below are the ones we write into our calendars; they assume a signed scope and a counterpart who signs off within forty-eight hours.",
    ],
    sections: [
      { heading: 'Real timelines by project type', body: [
        "Six project types, two columns. The first is build time. The second is what gets added when it was not started on day one.",
      ], visual: 'types', after: [
        "**The ordering site or web app**, appointment booking, catalogue, payment, tracking, is built in six to ten weeks; what makes it longer is online-merchant status, obtained through the bank and GIE Monétique in weeks to months, which starts on day one or delays everything. **The mobile app with back-office**, Android and iOS from one codebase, offline, payment, takes three to five months; store accounts in your name, offline mode tested in the field and data import are the three lines that stretch it, detailed in [the seven decisions of a mobile app in 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/). **The vertical SaaS** with invoicing and subscription takes four to six months, and the scope of the trade and the ten pilot customers decide, as in [launching a SaaS in Algeria in 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/). **The two-sided platform**, escrow, logistics, takes five to eight months, because sellers are recruited before the code and carriers are contracted before the pilot. **The AI agent** on an existing back-office takes six weeks to three months depending on the state of the data and written rules, and one more month if nothing exists in a system. **The takeover** of an abandoned app takes six weeks, two to three of them to recover accounts and code that are not under your control, as described in [my app is stuck with a developer who vanished](/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/).",
      ] },
      { heading: 'The five phases, and who holds each', body: [
        "A project is not measured in months of code. It is measured in five phases, three of which depend on you as much as on us.",
      ], visual: 'phases', after: [
        "**Written scoping**, one to two weeks: you decide, we write the screens, the rules, the total price and the five-line calendar. It is the phase six-week quotes skip, which is why they do not hold. **The tested prototype**, one to two weeks, with five real users, not relatives: the cheapest moment to change your mind, and every change requested afterwards costs ten times more. **Development**, the bulk of the time, delivered every two weeks in versions you can open and test; a project you see nothing of for two months is a late project that does not say so. **Data import and field tests**, two to four weeks: your real files, your phones, your network, your users; an app opened with wrong data loses the team's trust within a week. **Go-live and fixes**, two weeks: stores, production, first corrective versions included in the project, not in an extra quote.",
      ] },
      { heading: 'What runs in parallel, and depends on nobody', body: [
        "The difference between a quote and a calendar is that the calendar has five lines. Here are the five.",
      ], visual: 'parallel', after: [
        "**You**: decisions and sign-offs, forty-eight hours each or the project waits; and the data to import, delivered clean as early as possible, not the day before go-live. It is the line that most often makes the difference between three months and six. **Banks and GIE Monétique**: online-merchant status takes weeks to months, depending on the bank and the state of your file; it starts on day one of scoping, and no code can speed it up. **The stores**: developer accounts in your name, with identity verification, then app review at every publication, a few days, sometimes back and forth. **Administration**: depending on the project, the company, the [startup label](/blog/label-startup-algerie-2026-conditions-dossier-avantages/), the platform registration with the tax administration planned by the 2027 finance bill; in parallel, never in series. **Us**: construction, the only line the studio fully controls, and the only one it can commit to without condition.",
        "A quote that shows only one line promises a date it will not keep, because it ignores the other four. A calendar that shows them gives you a go-live date, and tells you exactly what moves it if it moves.",
      ] },
      { heading: 'A real calendar: sixteen weeks for an app with back-office', body: [
        "Here is what the calendar of a mobile app with back-office, payment and data import looks like, for real, when everything starts on day one.",
      ], visual: 'timeline', after: [
        "**Weeks 1 and 2, scoping**; and from week 1, the merchant file and the store accounts, which run until week 12 with nobody able to speed them up. **Weeks 3 and 4, the prototype**, tested with five users. **Weeks 5 to 12, development**, delivered every two weeks. **Weeks 12 to 14, data import and field tests**, with your files received in week 8, not week 13. **Weeks 15 and 16, go-live**, store review included, and the first fixes.",
        "The same project, with merchant status started in week 8 and data delivered in week 13, goes live in week 24. Nothing changed in the code. That is why we refuse to write a timeline without writing the five lines, and why scoping always starts with the list of what begins on day one.",
      ] },
      { heading: 'What turns a three-month project into six', body: [], list: [
        "**Merchant status started after the product.** The app is ready, cards are not accepted. It starts on day one of scoping.",
        "**Store accounts in the vendor's name.** Transfer, verification, weeks lost. In your name, from week 1.",
        "**Data delivered the day before.** The import reveals duplicates and empty fields, and everything stops. Clean files mid-project.",
        "**Sign-offs that take three weeks.** Every pending screen blocks the next. One counterpart, forty-eight hours.",
        "**No prototype.** Changes arrive in development and cost ten times more. Five real users in week 3.",
        "**Nothing visible for two months.** The delay is discovered at the end. Deliveries every two weeks, or change vendor.",
        "**A scope that grows along the way.** Every “while we're at it” adds a week. The written scope is the list; the rest goes to version 2.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'How long does it take to build a mobile app in Algeria?', a: 'Three to five months for an Android and iOS app with back-office, payment and data import, when the merchant file and store accounts start on day one. An ordering site or web app takes six to ten weeks; a two-sided platform five to eight months.' },
        { q: 'Why do quotes promise six weeks?', a: 'Because they count only the construction line and ignore the other four: your sign-offs and data, online-merchant status, store accounts and review, administration. An honest calendar has five lines and gives a go-live date it can keep.' },
        { q: 'What depends on nobody?', a: 'Online-merchant status, obtained through the bank and GIE Monétique in weeks to months; developer account verification and store review; and administrative steps depending on the project. These lines start on day one and run in parallel; no code speeds them up.' },
        { q: 'How long does scoping take?', a: 'One to two weeks, to write the screens, the rules, the total price and the five-line calendar. It is the phase fast quotes skip, and the reason they do not hold.' },
        { q: 'What can I do to make the project faster?', a: 'Three things: sign off within forty-eight hours with a single counterpart, deliver your clean data mid-project rather than at the end, and start merchant status and store accounts in week 1. Those three lines make the difference between three months and six.' },
        { q: 'Are fixes after go-live included in the timeline?', a: 'Yes. The last two weeks of the calendar cover go-live, store review and the first corrective versions, which are part of the project and not of an extra quote. Maintenance for the following year is decided separately, before launch.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'What turns a three-month project into six is almost never the code.' },
      { after: 2, text: 'A quote that shows only one line promises a date it will not keep.' },
    ],
    cta: { eyebrow: 'Describe your project', title: 'The project type, what you already have (company, bank account, data, store accounts) and the date you want to be live. We return the five-line calendar and the total price, in writing, before starting.', body: 'Symloop builds mobile apps, SaaS and platforms for Algeria with written scoping, a tested prototype, deliveries every two weeks, import of your data and support through the merchant file and store accounts in your name. Senior engineers in Algiers and Setif, written total price and calendar, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problem', name: 'Can you know the total price before starting?' },
      { href: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/', kind: '2027', name: 'A mobile app in Algeria in 2027: seven decisions' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Launching a SaaS in Algeria in 2027' },
      { href: '/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/', kind: '2027', name: 'My app is stuck with a developer who vanished' },
    ] },
  },
  ar: {
    kind: 'مشكلة · الآجال', title: 'كم من الوقت لتطوير تطبيق أو منصة في الجزائر سنة 2027؟ الآجال الحقيقية حسب نوع المشروع.',
    dek: 'تلقيت ثلاثة عروض أسعار: أحدها يعد بستة أسابيع، والثاني بأربعة أشهر، والثالث لا يقول شيئاً. لا أحد منها يحدد ما يُحسب، وما يعتمد عليك، وما يعتمد على بنك أو متجر. الآجال الحقيقية حسب نوع المشروع، المراحل الخمس ومن يمسك كلاً منها، الخطوط التي تجري بالتوازي ولا تعتمد على أحد، وجدول من ستة عشر أسبوعاً، فعلاً، لتطبيق بمكتب خلفي.',
    publishedAt: 'أكتوبر 2026', readTime: '10 دقائق قراءة', author: 'سيملوب', about: ['آجال', 'تطبيق جوّال', 'منصة', 'جدول مشروع', 'الجزائر 2027'],
    intro: [
      '**الجواب المختصر.** في 2027 في الجزائر، **يُبنى موقع أو تطبيق ويب للطلب في ستة إلى عشرة أسابيع؛ وتطبيق جوّال بمكتب خلفي في ثلاثة إلى خمسة أشهر؛ وSaaS مهني بفوترة في أربعة إلى ستة؛ ومنصة بوجهين بحجز ولوجستيك في خمسة إلى ثمانية؛ ووكيل ذكاء اصطناعي موصول بمكتب خلفي موجود في ستة أسابيع إلى ثلاثة أشهر؛ واستعادة تطبيق مهجور في ستة أسابيع.** ما يجعل مشروع ثلاثة أشهر يستغرق ستة ليس الكود تقريباً أبداً: بل ملف التاجر الإلكتروني المنطلق متأخراً، حسابات المتاجر المفتوحة بالاسم الخطأ، البيانات التي تُسلَّم أخيراً، والمصادقات التي تنتظر. الجدول الصادق له خمسة خطوط لا خط واحد، ويعطي تاريخ نشر لأنه يُظهر ما يجري بالتوازي.',
      'يكمّل هذا الدليل [هل يمكن معرفة السعر الإجمالي قبل البدء](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/): يُكتب السعر والأجل معاً في التأطير نفسه. الآجال أدناه هي التي نكتبها في جداولنا؛ وتفترض تأطيراً موقَّعاً ومحاوراً يصادق خلال ثمان وأربعين ساعة.',
    ],
    sections: [
      { heading: 'الآجال الحقيقية حسب نوع المشروع', body: [
        'ستة أنواع مشاريع وعمودان. الأول زمن البناء. والثاني ما يُضاف إليه حين لا يُطلق في اليوم الأول.',
      ], visual: 'types', after: [
        '**موقع أو تطبيق ويب للطلب**، حجز مواعيد، كتالوج، دفع، متابعة، يُبنى في ستة إلى عشرة أسابيع؛ وما يطيله صفة التاجر الإلكتروني التي تُنال عبر البنك وGIE Monétique في أسابيع إلى أشهر، وتنطلق في اليوم الأول أو تؤخر كل شيء. **تطبيق الجوّال بمكتب خلفي**، أندرويد وiOS بكود واحد، دون اتصال، دفع، يستغرق ثلاثة إلى خمسة أشهر؛ وحسابات المتاجر باسمك ووضع عدم الاتصال المختبَر ميدانياً واسترجاع البيانات هي الخطوط الثلاثة التي تمدّده، فصّلناها في [القرارات السبعة لتطبيق جوّال في 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/). **SaaS المهني** بفوترة واشتراك يستغرق أربعة إلى ستة أشهر، ونطاق المهنة والزبائن التجريبيون العشرة هم من يقرر، كما في [إطلاق SaaS في الجزائر سنة 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/). **المنصة بوجهين**، حجز، لوجستيك، تستغرق خمسة إلى ثمانية أشهر، لأن البائعين يُجنَّدون قبل الكود والناقلين يُتعاقد معهم قبل التجربة. **وكيل الذكاء الاصطناعي** على مكتب خلفي موجود يستغرق ستة أسابيع إلى ثلاثة أشهر حسب حالة البيانات والقواعد المكتوبة، وشهراً إضافياً إن لم يوجد شيء في نظام. **استعادة** تطبيق مهجور تستغرق ستة أسابيع، منها أسبوعان إلى ثلاثة لاسترجاع حسابات وكود ليسا تحت سيطرتك، كما وصفنا في [تطبيقي معلّق عند مطوّر اختفى](/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/).',
      ] },
      { heading: 'المراحل الخمس، ومن يمسك كلاً منها', body: [
        'لا يُقاس المشروع بأشهر من الكود. يُقاس بخمس مراحل، ثلاث منها تعتمد عليك بقدر ما تعتمد علينا.',
      ], visual: 'phases', after: [
        '**التأطير المكتوب**، أسبوع إلى أسبوعين: أنت تقرر ونحن نكتب الشاشات والقواعد والسعر الإجمالي والجدول بخمسة خطوط. هي المرحلة التي تقفز عنها عروض الأسابيع الستة، ولهذا لا تصمد. **النموذج المختبَر**، أسبوع إلى أسبوعين، مع خمسة مستخدمين حقيقيين لا أقارب: أرخص لحظة لتغيير الرأي، وكل تغيير يُطلب بعدها يكلّف عشرة أضعاف. **التطوير**، الجزء الأكبر من الوقت، يُسلَّم كل أسبوعين في نسخ تستطيع فتحها واختبارها؛ المشروع الذي لا ترى منه شيئاً لشهرين مشروع متأخر لا يقول ذلك. **استرجاع البيانات والاختبارات الميدانية**، أسبوعان إلى أربعة: ملفاتك الحقيقية، هواتفك، شبكتك، مستخدموك؛ تطبيق يُفتح ببيانات خاطئة يُفقد الفريق الثقة في أسبوع. **النشر والتصحيحات**، أسبوعان: متاجر، إنتاج، أولى الإصدارات التصحيحية مشمولة في المشروع لا في عرض سعر إضافي.',
      ] },
      { heading: 'ما يجري بالتوازي، ولا يعتمد على أحد', body: [
        'الفرق بين عرض السعر والجدول أن للجدول خمسة خطوط. هذه الخمسة.',
      ], visual: 'parallel', after: [
        '**أنت**: القرارات والمصادقات، ثمان وأربعون ساعة لكل منها وإلا انتظر المشروع؛ والبيانات التي تُسترجع، تُسلَّم نظيفة في أقرب وقت لا عشية النشر. هذا الخط الذي يصنع غالباً الفرق بين ثلاثة أشهر وستة. **البنوك وGIE Monétique**: صفة التاجر الإلكتروني تستغرق أسابيع إلى أشهر حسب البنك وحالة ملفك؛ تنطلق في اليوم الأول من التأطير، ولا كود يسرّعها. **المتاجر**: حسابات المطور باسمك بتحقق من الهوية، ثم مراجعة التطبيق عند كل نشر، بضعة أيام وأحياناً ذهاب وإياب. **الإدارة**: حسب المشروع، الشركة، [علامة ستارت-أب](/blog/label-startup-algerie-2026-conditions-dossier-avantages/)، تعريف المنصة لدى الضرائب الذي ينص عليه مشروع قانون المالية 2027؛ بالتوازي لا بالتسلسل أبداً. **نحن**: البناء، الخط الوحيد الذي يتحكم فيه الاستوديو كلياً، والوحيد الذي يستطيع الالتزام به دون شرط.',
        'عرض سعر يُظهر خطاً واحداً يعدك بتاريخ لن يفي به لأنه يتجاهل الأربعة الأخرى. والجدول الذي يُظهرها يعطيك تاريخ نشر ويقول لك بالضبط ما يحرّكه إن تحرك.',
      ] },
      { heading: 'جدول حقيقي: ستة عشر أسبوعاً لتطبيق بمكتب خلفي', body: [
        'هكذا يبدو فعلاً جدول تطبيق جوّال بمكتب خلفي ودفع واسترجاع بيانات حين ينطلق كل شيء في اليوم الأول.',
      ], visual: 'timeline', after: [
        '**الأسبوعان 1 و2، التأطير**؛ ومنذ الأسبوع 1 ملف التاجر الإلكتروني وحسابات المتاجر، تجري حتى الأسبوع 12 دون أن يستطيع أحد تسريعها. **الأسبوعان 3 و4، النموذج**، مختبَر مع خمسة مستخدمين. **الأسابيع 5 إلى 12، التطوير**، يُسلَّم كل أسبوعين. **الأسابيع 12 إلى 14، استرجاع البيانات والاختبارات الميدانية**، بملفاتك التي وصلت في الأسبوع 8 لا 13. **الأسبوعان 15 و16، النشر**، بمراجعة المتاجر، وأولى التصحيحات.',
        'المشروع نفسه، بتاجر إلكتروني منطلق في الأسبوع 8 وبيانات مسلَّمة في الأسبوع 13، يُنشر في الأسبوع 24. لم يتغير شيء في الكود. لهذا نرفض كتابة أجل دون كتابة الخطوط الخمسة، ولهذا يبدأ التأطير دائماً بقائمة ما ينطلق في اليوم الأول.',
      ] },
      { heading: 'ما يجعل مشروع ثلاثة أشهر يستغرق ستة', body: [], list: [
        '**التاجر الإلكتروني منطلق بعد المنتج.** التطبيق جاهز والبطاقة غير مقبولة. ينطلق في اليوم الأول من التأطير.',
        '**حسابات المتاجر باسم المزوّد.** نقل، تحقق، أسابيع ضائعة. باسمك منذ الأسبوع 1.',
        '**البيانات مسلَّمة عشية النشر.** يكشف الاسترجاع عن تكرارات وحقول فارغة ويتوقف كل شيء. ملفات نظيفة في منتصف المشروع.',
        '**مصادقات تستغرق ثلاثة أسابيع.** كل شاشة منتظَرة تعطّل التالية. محاور واحد، ثمان وأربعون ساعة.',
        '**لا نموذج.** تصل التغييرات في التطوير وتكلّف عشرة أضعاف. خمسة مستخدمين حقيقيين في الأسبوع 3.',
        '**لا شيء مرئي لشهرين.** يُكتشف التأخر في النهاية. تسليمات كل أسبوعين أو غيّر المزوّد.',
        '**نطاق يكبر في الطريق.** كل «ما دمنا هنا» يضيف أسبوعاً. التأطير المكتوب هو القائمة؛ والباقي في الإصدار 2.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'كم من الوقت لتطوير تطبيق جوّال في الجزائر؟', a: 'ثلاثة إلى خمسة أشهر لتطبيق أندرويد وiOS بمكتب خلفي ودفع واسترجاع بيانات، حين ينطلق ملف التاجر الإلكتروني وحسابات المتاجر في اليوم الأول. موقع أو تطبيق ويب للطلب يستغرق ستة إلى عشرة أسابيع؛ ومنصة بوجهين خمسة إلى ثمانية أشهر.' },
        { q: 'لماذا تعد عروض الأسعار بستة أسابيع؟', a: 'لأنها تحسب خط البناء فقط وتتجاهل الأربعة الأخرى: مصادقاتك وبياناتك، صفة التاجر الإلكتروني، حسابات المتاجر ومراجعتها، الإدارة. الجدول الصادق له خمسة خطوط ويعطي تاريخ نشر يستطيع الوفاء به.' },
        { q: 'ما الذي لا يعتمد على أحد؟', a: 'صفة التاجر الإلكتروني المنالة عبر البنك وGIE Monétique في أسابيع إلى أشهر؛ التحقق من حسابات المطور ومراجعة المتاجر؛ والإجراءات الإدارية حسب المشروع. تنطلق هذه الخطوط في اليوم الأول وتجري بالتوازي؛ ولا كود يسرّعها.' },
        { q: 'كم يستغرق التأطير؟', a: 'أسبوع إلى أسبوعين لكتابة الشاشات والقواعد والسعر الإجمالي والجدول بخمسة خطوط. هي المرحلة التي تقفز عنها العروض السريعة، وسبب عدم صمودها.' },
        { q: 'ماذا أستطيع أن أفعل ليسير المشروع أسرع؟', a: 'ثلاثة أشياء: المصادقة خلال ثمان وأربعين ساعة بمحاور واحد، تسليم بياناتك نظيفة في منتصف المشروع لا في نهايته، وإطلاق التاجر الإلكتروني وحسابات المتاجر منذ الأسبوع 1. هذه الخطوط الثلاثة تصنع الفرق بين ثلاثة أشهر وستة.' },
        { q: 'هل التصحيحات بعد النشر مشمولة في الأجل؟', a: 'نعم. يغطي الأسبوعان الأخيران من الجدول النشر ومراجعة المتاجر وأولى الإصدارات التصحيحية، وهي جزء من المشروع لا من عرض سعر إضافي. وتُقرَّر صيانة السنة التالية على حدة قبل الإطلاق.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'ما يجعل مشروع ثلاثة أشهر يستغرق ستة ليس الكود تقريباً أبداً.' },
      { after: 2, text: 'عرض سعر يُظهر خطاً واحداً يعدك بتاريخ لن يفي به.' },
    ],
    cta: { eyebrow: 'صف مشروعك', title: 'نوع المشروع، ما تملكه أصلاً (شركة، حساب بنكي، بيانات، حسابات متاجر) والتاريخ الذي تريد أن تكون فيه على الخط. نعيد إليك الجدول بخمسة خطوط والسعر الإجمالي مكتوبَين قبل البدء.', body: 'تبني سيملوب تطبيقات الجوّال وSaaS والمنصات للجزائر بتأطير مكتوب ونموذج مختبَر وتسليمات كل أسبوعين واسترجاع بياناتك ومرافقة ملف التاجر الإلكتروني وحسابات المتاجر باسمك. مهندسون خبراء في الجزائر وسطيف، سعر إجمالي وجدول مكتوبان، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'مشكلة', name: 'هل يمكن معرفة السعر الإجمالي قبل البدء؟' },
      { href: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/', kind: '2027', name: 'تطبيق جوّال في الجزائر 2027: سبعة قرارات' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'إطلاق SaaS في الجزائر سنة 2027' },
      { href: '/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/', kind: '2027', name: 'تطبيقي معلّق عند مطوّر اختفى' },
    ] },
  },
};

const KEYWORDS = "combien de temps développer application mobile algérie 2027, délai développement application, durée projet application plateforme algérie, combien de temps créer plateforme algérie, calendrier développement application, délai statut web-marchand, délai publication google play app store, how long to build an app algeria 2027, كم من الوقت لتطوير تطبيق في الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
