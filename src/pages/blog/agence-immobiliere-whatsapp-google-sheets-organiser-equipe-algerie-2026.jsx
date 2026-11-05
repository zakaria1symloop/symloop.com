import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026.mjs';

const SLUG = 'agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026';
const FIGURES = ['journey', 'platform', 'ai', 'timeline'];
const DATE = '2026-10-28';

const CONTENT = {
  fr: {
    kind: 'Problème · Agence immobilière', title: "Mon agence immobilière tourne sur WhatsApp et Google Sheets : comment organiser mon équipe sans tout casser (Algérie, 2026).",
    dek: "Les clients sont dans des groupes WhatsApp, les biens disponibles dans un Google Sheets, et personne ne sait qui a appelé qui. Le diagnostic, ce qui se règle en une semaine sans logiciel, ce qui demande une plateforme, où l'IA fait vraiment gagner du temps, et ce que ça coûte.",
    publishedAt: 'Octobre 2026', readTime: '9 min de lecture', author: 'Symloop', about: ['Agence immobilière', 'CRM immobilier', 'WhatsApp Business', 'Algérie'],
    intro: [
      "**Réponse courte.** Le problème n'est pas WhatsApp, ni Google Sheets. C'est qu'aucun endroit de votre agence ne sait avec certitude deux choses : quels biens sont encore disponibles, et quelles demandes sont en cours et avec quel agent. Tant que cette mémoire vit dans les téléphones de chacun, vous perdez des demandes, vous proposez des biens déjà loués et vos agents se marchent dessus. La solution se construit en trois paliers : **une semaine de règles et de rangement sans aucun logiciel**, puis **une plateforme avec une fiche bien unique et une application pour les agents** quand l'équipe dépasse deux personnes ou cent biens, puis **l'IA pour le matching et la réponse aux premiers messages**, seulement une fois la base propre.",
      "Ce guide répond à une question qu'un gérant d'agence nous a posée presque mot pour mot : « mon équipe enregistre les clients dans des groupes WhatsApp et lit les appartements disponibles dans Google Sheets, comment l'organiser ? ». Voici la réponse complète, utile même si vous ne faites jamais appel à nous.",
    ],
    sections: [
      { heading: "Ce qui se passe vraiment dans votre agence", body: [
        "Les symptômes sont toujours les mêmes, et vous les reconnaîtrez : un client visite un appartement qu'un collègue a loué la veille ; deux agents appellent le même propriétaire le même matin ; une demande arrivée sur Facebook un vendredi soir n'a jamais eu de réponse ; un agent part et emporte ses clients dans son téléphone ; le propriétaire demande « où en est-on ? » et personne ne peut répondre sans passer trois coups de fil.",
        "La cause est unique. **Chaque étape du parcours d'une demande dépend de la mémoire d'une personne.** Le Sheet n'est pas la vérité, il est ce que quelqu'un a pensé à écrire. Le groupe WhatsApp n'est pas un suivi, c'est un flux que personne ne relit.",
      ], visual: 'journey' },
      { heading: 'Palier 1 — Ce qui se règle en une semaine, sans logiciel', body: [
        "Avant d'acheter quoi que ce soit, cinq règles règlent la moitié du problème. Elles sont gratuites et elles sont aussi la condition pour qu'un outil fonctionne plus tard.",
      ], preOrdered: [
        "**Un seul Sheet pour les biens, verrouillé.** Une ligne par bien, une référence unique, un statut parmi quatre (disponible, visite en cours, réservé, loué ou vendu), le nom de l'agent, la date de dernière mise à jour. Personne ne crée de colonne. Une seule personne supprime.",
        "**Un numéro WhatsApp d'agence, pas des numéros personnels.** WhatsApp Business gratuit, avec les étiquettes : nouvelle demande, en visite, à rappeler, perdu. Les clients écrivent à l'agence, l'agence attribue.",
        "**Pas de bien sans référence.** Un agent qui propose un bien à un client cite la référence. Un bien qui n'a pas de ligne n'existe pas.",
        "**Le résultat se note le jour même.** Après chaque visite, une ligne dans un second onglet : référence, client, agent, résultat. Trois colonnes suffisent.",
        "**Quinze minutes le lundi.** On passe les biens dont le statut n'a pas bougé depuis quinze jours et les demandes sans réponse. C'est la seule réunion nécessaire.",
      ], after: [
        "Pour une agence d'un ou deux agents avec moins d'une centaine de biens, **ce palier suffit souvent pendant un an**. Si vous le tenez, vous n'avez pas besoin de lire la suite tout de suite.",
      ] },
      { heading: 'Palier 2 — Quand il vous faut une plateforme', body: [
        "Les signes qui disent que le Sheet a atteint sa limite : plus de deux agents, plus d'une centaine de biens actifs, plus de cinquante demandes par mois, des mandats exclusifs à protéger, une deuxième agence ou un deuxième quartier, des propriétaires qui demandent un compte rendu. À ce stade, la discipline humaine ne tient plus et il faut que l'outil impose la règle.",
        "Une plateforme d'agence n'est pas un CRM générique avec un champ « bien ». Elle contient au minimum ce qui suit.",
      ], visual: 'platform', after: [
        "Le centre est la **fiche bien unique**. Tout le reste la lit ou la met à jour : l'application de l'agent sur le terrain, le back-office du gérant, la diffusion sur votre site et sur Ouedkniss, les conversations WhatsApp rattachées au bien et au client. WhatsApp reste le canal, il cesse d'être la mémoire. Nous avons détaillé les modules dans notre guide du [logiciel pour agence immobilière en Algérie](/blog/logiciel-immobilier-agence-algerie-2026/), et la logique de pipeline dans celui du [CRM en Algérie](/blog/logiciel-crm-algerie-2024/).",
        "Deux chemins existent. **Un logiciel immobilier existant par abonnement**, rapide à démarrer, suffisant si vos processus sont standards et si vous acceptez ses limites sur WhatsApp, l'arabe et la diffusion locale. **Une plateforme sur mesure**, quand vous avez plusieurs agences, des règles de commission particulières, un portail propriétaires, ou que vous voulez que l'outil soit un actif de l'entreprise et non une location.",
      ] },
      { heading: "Palier 3 — Où l'IA fait vraiment gagner du temps, et où elle n'apporte rien", body: [
        "L'IA est la question que tout le monde pose en premier. Elle vient en troisième, et pas partout.",
      ], visual: 'ai', after: [
        "Les deux usages à fort gain partagent une condition : des biens structurés dans une fiche unique. **Le matching automatique** lit chaque nouvelle demande, budget, quartier, surface, nombre de pièces, et propose les biens correspondants à l'agent, puis prévient le client quand un bien entre. **La réponse au premier message** sur WhatsApp, à toute heure, qualifie la demande, donne les horaires, et passe la main à un agent le matin avec un résumé. Ces deux usages suppriment la plus grande fuite du parcours : la demande du vendredi soir restée sans réponse.",
        "L'estimation automatique des prix, en revanche, dépend de données de transactions fiables qui restent rares en Algérie. Nous expliquons pourquoi, et ce qui marche quand même, dans notre analyse sur [l'IA et l'estimation immobilière en Algérie](/blog/ia-immobilier-estimation-algerie-2026/).",
      ] },
      { heading: 'Combien ça coûte et combien de temps', body: [
        "Une plateforme d'agence avec application mobile pour les agents, back-office, fiche bien, demandes, matching et WhatsApp Business se situe en catégorie 2 de notre [grille de prix des applications en Algérie](/blog/prix-application-mobile-algerie-2026/), l'IA de matching et de réponse en option. Le calendrier tient en douze semaines.",
      ], visual: 'timeline', after: [
        "La semaine qui décide de tout est la deuxième : **la reprise de vos Sheets**. Doublons, biens fantômes, statuts faux, numéros de propriétaires en triple. Si l'équipe ouvre l'outil le premier jour et y trouve le même désordre que dans le Sheet, elle retourne à WhatsApp. Si elle y trouve une base propre, elle y reste.",
      ] },
      { heading: 'Les erreurs que nous voyons dans les agences', body: [], list: [
        "**Acheter un CRM généraliste.** Il ne connaît ni le bien, ni le mandat, ni la visite. Les agents le remplissent une semaine.",
        "**Importer le Sheet tel quel.** Le désordre change de logiciel, la confiance ne vient pas.",
        "**Lancer l'outil sans la règle.** « Aucun bien hors plateforme » doit être dit par le gérant, pas par le logiciel.",
        "**Garder les numéros personnels.** Le client appartient alors à l'agent, pas à l'agence.",
        "**Commencer par l'IA.** Sur une base sale, elle propose des biens loués et répond à côté. Rangez d'abord.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Faut-il abandonner WhatsApp ?", a: "Non. WhatsApp reste le canal préféré de vos clients. Ce qui change, c'est que les conversations passent par un numéro d'agence et sont rattachées au bien et au client dans la plateforme. WhatsApp cesse d'être la mémoire de l'agence." },
        { q: "Mes agents ne sont pas à l'aise avec les logiciels.", a: "L'application agent doit tenir en trois écrans : mes demandes, mes biens, noter une visite. En arabe et en français. Si un agent a besoin d'une formation de plus d'une heure, l'outil est mal conçu." },
        { q: "Peut-on reprendre mes Google Sheets existants ?", a: "Oui, et c'est obligatoire. La reprise comprend le nettoyage des doublons, la vérification des statuts et l'import une seule fois. C'est la semaine la plus importante du projet." },
        { q: "Logiciel existant ou sur mesure ?", a: "Existant si vous avez une agence, des processus standards et que vous acceptez ses limites sur WhatsApp, l'arabe et la diffusion locale. Sur mesure si vous avez plusieurs agences, des règles propres, un portail propriétaires, ou si vous voulez que l'outil soit un actif de l'entreprise." },
        { q: "Combien de temps avant que l'équipe l'utilise vraiment ?", a: "Douze semaines jusqu'à la bascule, puis un mois pendant lequel le gérant tient la règle « aucun bien hors plateforme ». Après ce mois, l'outil se défend tout seul parce qu'il contient ce que le Sheet n'a jamais contenu : la vérité du jour." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Le problème n'est pas WhatsApp. C'est qu'aucun endroit de l'agence ne sait quel bien est encore disponible." },
      { after: 3, text: "L'IA ne range pas une agence. Elle accélère une agence déjà rangée." },
    ],
    cta: { eyebrow: 'Dites-nous où vous en êtes', title: "Décrivez votre agence : nombre d'agents, de biens actifs, de demandes par mois. Nous vous dirons à quel palier vous êtes et ce qu'il faut faire en premier.", body: "Symloop conçoit des plateformes de gestion pour les agences et les promoteurs en Algérie : fiche bien unique, application mobile pour les agents, WhatsApp Business, matching par IA. Ingénieurs seniors à Alger et Sétif, cadrage écrit, jalons, et un code qui vous appartient." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/logiciel-immobilier-agence-algerie-2026/', kind: 'Guide', name: 'Logiciel pour agence immobilière en Algérie : les modules qui comptent' },
      { href: '/blog/ia-immobilier-estimation-algerie-2026/', kind: 'Analyse', name: "L'IA et l'estimation immobilière en Algérie" },
      { href: '/blog/logiciel-crm-algerie-2024/', kind: 'Guide', name: 'CRM en Algérie : choisir et déployer' },
      { href: '/blog/prix-application-mobile-algerie-2026/', kind: 'Guide prix', name: 'Combien coûte une application en Algérie en 2026' },
    ] },
  },
  en: {
    kind: 'Problem · Real-estate agency', title: 'My real-estate agency runs on WhatsApp and Google Sheets: how to organise my team without breaking everything (Algeria, 2026).',
    dek: "Clients live in WhatsApp groups, available listings in a Google Sheet, and nobody knows who called whom. The diagnosis, what gets fixed in a week without software, what needs a platform, where AI really saves time, and what it costs.",
    publishedAt: 'October 2026', readTime: '9 min read', author: 'Symloop', about: ['Real-estate agency', 'Real-estate CRM', 'WhatsApp Business', 'Algeria'],
    intro: [
      "**Short answer.** The problem is neither WhatsApp nor Google Sheets. It is that no place in your agency knows two things for certain: which listings are still available, and which enquiries are in progress and with which agent. As long as that memory lives in everyone's phones, you lose enquiries, you offer flats that are already rented and your agents step on each other. The fix is built in three tiers: **one week of rules and tidying with no software at all**, then **a platform with a single listing record and an app for agents** once the team exceeds two people or a hundred listings, then **AI for matching and first-message replies**, only once the base is clean.",
      "This guide answers a question an agency manager asked us almost word for word: \"my team records clients in WhatsApp groups and reads available flats in Google Sheets, how do I organise it?\". Here is the complete answer, useful even if you never call us.",
    ],
    sections: [
      { heading: 'What is really happening in your agency', body: [
        "The symptoms are always the same, and you will recognise them: a client views a flat a colleague rented the day before; two agents call the same owner the same morning; an enquiry that arrived on Facebook on a Friday night never got an answer; an agent leaves and takes their clients away in their phone; the owner asks \"where are we?\" and nobody can answer without three phone calls.",
        "The cause is single. **Every step of an enquiry's journey depends on one person's memory.** The Sheet is not the truth, it is what someone remembered to write. The WhatsApp group is not a follow-up, it is a stream nobody re-reads.",
      ], visual: 'journey' },
      { heading: 'Tier 1 — What gets fixed in a week, without software', body: [
        "Before buying anything, five rules solve half the problem. They are free, and they are also the condition for any tool to work later.",
      ], preOrdered: [
        "**One Sheet for listings, locked.** One row per listing, a unique reference, one of four statuses (available, viewing in progress, reserved, rented or sold), the agent's name, the last update date. Nobody adds columns. One person deletes.",
        "**One agency WhatsApp number, not personal numbers.** Free WhatsApp Business, with labels: new enquiry, viewing, to call back, lost. Clients write to the agency, the agency assigns.",
        "**No listing without a reference.** An agent offering a listing to a client quotes the reference. A listing without a row does not exist.",
        "**The outcome is written the same day.** After each viewing, one row in a second tab: reference, client, agent, outcome. Three columns are enough.",
        "**Fifteen minutes on Monday.** Go through listings whose status has not moved in two weeks and enquiries without an answer. It is the only meeting needed.",
      ], after: [
        "For an agency of one or two agents with under a hundred listings, **this tier is often enough for a year**. If you hold it, you do not need to read on right away.",
      ] },
      { heading: 'Tier 2 — When you need a platform', body: [
        "The signs that the Sheet has reached its limit: more than two agents, more than a hundred active listings, more than fifty enquiries a month, exclusive mandates to protect, a second branch or a second district, owners asking for a report. At that point human discipline no longer holds and the tool has to enforce the rule.",
        "An agency platform is not a generic CRM with a \"listing\" field. It contains at least the following.",
      ], visual: 'platform', after: [
        "The centre is the **single listing record**. Everything else reads or updates it: the agent's app in the field, the manager's back-office, publishing to your website and Ouedkniss, WhatsApp conversations attached to the listing and the client. WhatsApp stays the channel, it stops being the memory. We detailed the modules in our guide to [real-estate agency software in Algeria](/blog/logiciel-immobilier-agence-algerie-2026/), and the pipeline logic in our [CRM in Algeria](/blog/logiciel-crm-algerie-2024/) guide.",
        "Two paths exist. **An existing real-estate software by subscription**, quick to start, enough if your processes are standard and you accept its limits on WhatsApp, Arabic and local publishing. **A custom platform**, when you have several branches, specific commission rules, an owner portal, or you want the tool to be a company asset rather than a rental.",
      ] },
      { heading: 'Tier 3 — Where AI really saves time, and where it adds nothing', body: [
        "AI is the question everyone asks first. It comes third, and not everywhere.",
      ], visual: 'ai', after: [
        "The two high-gain uses share one condition: listings structured in a single record. **Automatic matching** reads each new enquiry, budget, district, surface, rooms, proposes matching listings to the agent, then alerts the client when a listing comes in. **The first-message reply** on WhatsApp, at any hour, qualifies the enquiry, gives opening hours, and hands over to an agent in the morning with a summary. These two uses remove the biggest leak in the journey: the Friday-night enquiry left unanswered.",
        "Automatic price estimation, on the other hand, depends on reliable transaction data that remains rare in Algeria. We explain why, and what works anyway, in our analysis of [AI and real-estate valuation in Algeria](/blog/ia-immobilier-estimation-algerie-2026/).",
      ] },
      { heading: 'What it costs and how long it takes', body: [
        "An agency platform with a mobile app for agents, back-office, listing record, enquiries, matching and WhatsApp Business sits in category 2 of our [app price grid for Algeria](/blog/prix-application-mobile-algerie-2026/), with matching and reply AI as options. The timeline fits in twelve weeks.",
      ], visual: 'timeline', after: [
        "The week that decides everything is the second one: **importing your Sheets**. Duplicates, ghost listings, wrong statuses, owner numbers in triplicate. If the team opens the tool on day one and finds the same mess as in the Sheet, it goes back to WhatsApp. If it finds a clean base, it stays.",
      ] },
      { heading: 'The mistakes we see in agencies', body: [], list: [
        "**Buying a generic CRM.** It knows neither the listing, nor the mandate, nor the viewing. Agents fill it in for a week.",
        "**Importing the Sheet as is.** The mess changes software, trust does not come.",
        "**Launching the tool without the rule.** \"No listing outside the platform\" must be said by the manager, not the software.",
        "**Keeping personal numbers.** The client then belongs to the agent, not the agency.",
        "**Starting with AI.** On a dirty base it proposes rented flats and answers off target. Tidy first.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Do we have to abandon WhatsApp?', a: 'No. WhatsApp remains your clients\' preferred channel. What changes is that conversations go through an agency number and are attached to the listing and the client in the platform. WhatsApp stops being the agency\'s memory.' },
        { q: 'My agents are not comfortable with software.', a: 'The agent app must fit in three screens: my enquiries, my listings, log a viewing. In Arabic and French. If an agent needs more than an hour of training, the tool is badly designed.' },
        { q: 'Can my existing Google Sheets be imported?', a: 'Yes, and it is mandatory. The import includes cleaning duplicates, checking statuses and importing once. It is the most important week of the project.' },
        { q: 'Existing software or custom?', a: 'Existing if you have one branch, standard processes and accept its limits on WhatsApp, Arabic and local publishing. Custom if you have several branches, your own rules, an owner portal, or want the tool to be a company asset.' },
        { q: 'How long before the team really uses it?', a: 'Twelve weeks to the switch-over, then one month during which the manager holds the rule "no listing outside the platform". After that month the tool defends itself, because it contains what the Sheet never did: today\'s truth.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'The problem is not WhatsApp. It is that no place in the agency knows which listing is still available.' },
      { after: 3, text: 'AI does not tidy an agency. It speeds up an agency that is already tidy.' },
    ],
    cta: { eyebrow: 'Tell us where you stand', title: 'Describe your agency: number of agents, active listings, enquiries per month. We will tell you which tier you are at and what to do first.', body: 'Symloop designs management platforms for agencies and developers in Algeria: single listing record, mobile app for agents, WhatsApp Business, AI matching. Senior engineers in Algiers and Sétif, written scope, milestones, and code you own.' },
    related: { label: 'Read next', items: [
      { href: '/blog/logiciel-immobilier-agence-algerie-2026/', kind: 'Guide', name: 'Real-estate agency software in Algeria: the modules that matter' },
      { href: '/blog/ia-immobilier-estimation-algerie-2026/', kind: 'Analysis', name: 'AI and real-estate valuation in Algeria' },
      { href: '/blog/logiciel-crm-algerie-2024/', kind: 'Guide', name: 'CRM in Algeria: choosing and deploying' },
      { href: '/blog/prix-application-mobile-algerie-2026/', kind: 'Pricing guide', name: 'How much does an app cost in Algeria in 2026' },
    ] },
  },
  ar: {
    kind: 'مشكلة · وكالة عقارية', title: 'وكالتي العقارية تشتغل على واتساب وGoogle Sheets: كيف أنظّم فريقي دون أن أكسر كل شيء (الجزائر، 2026).',
    dek: 'العملاء في مجموعات واتساب، العقارات المتاحة في ملف Google Sheets، ولا أحد يعرف من اتصل بمن. التشخيص، ما يُحلّ في أسبوع بلا برنامج، ما يحتاج منصة، أين يوفّر الذكاء الاصطناعي الوقت فعلاً، وكم يكلف.',
    publishedAt: 'أكتوبر 2026', readTime: '9 دقائق قراءة', author: 'سيملوب', about: ['وكالة عقارية', 'CRM عقاري', 'WhatsApp Business', 'الجزائر'],
    intro: [
      '**الجواب المختصر.** المشكلة ليست واتساب ولا Google Sheets. المشكلة أن لا مكان في وكالتك يعرف بيقين أمرين: أي العقارات ما زالت متاحة، وأي الطلبات جارية ومع أي وكيل. ما دامت هذه الذاكرة تعيش في هواتف الأفراد، تضيع الطلبات وتُعرض شقق مؤجّرة ويتزاحم الوكلاء. الحل يُبنى على ثلاث درجات: **أسبوع من القواعد والترتيب بلا أي برنامج**، ثم **منصة ببطاقة عقار واحدة وتطبيق للوكلاء** عندما يتجاوز الفريق شخصين أو مئة عقار، ثم **الذكاء الاصطناعي للمطابقة والرد على الرسائل الأولى**، فقط بعد أن تصبح القاعدة نظيفة.',
      'يجيب هذا الدليل عن سؤال طرحه علينا مسيّر وكالة بالحرف تقريباً: «فريقي يسجّل العملاء في مجموعات واتساب ويقرأ الشقق المتاحة من Google Sheets، كيف أنظّمه؟». هذا هو الجواب الكامل، مفيد حتى لو لم تتصل بنا أبداً.',
    ],
    sections: [
      { heading: 'ما يحدث فعلاً في وكالتك', body: [
        'الأعراض واحدة دائماً وستتعرف عليها: عميل يزور شقة أجّرها زميل أمس؛ وكيلان يتصلان بالمالك نفسه في الصباح نفسه؛ طلب وصل على فيسبوك مساء الجمعة لم يتلقَّ جواباً قط؛ وكيل يغادر ويأخذ عملاءه في هاتفه؛ المالك يسأل «أين وصلنا؟» ولا أحد يجيب دون ثلاث مكالمات.',
        'السبب واحد. **كل خطوة في مسار الطلب تعتمد على ذاكرة شخص.** الملف ليس الحقيقة بل ما تذكّر أحدهم أن يكتبه. مجموعة واتساب ليست متابعة بل تدفّق لا يعيد أحد قراءته.',
      ], visual: 'journey' },
      { heading: 'الدرجة 1 — ما يُحلّ في أسبوع، بلا برنامج', body: ['قبل شراء أي شيء، خمس قواعد تحل نصف المشكلة. مجانية، وهي أيضاً شرط ليعمل أي برنامج لاحقاً.'], preOrdered: [
        '**ملف واحد للعقارات، مقفل.** سطر لكل عقار، مرجع فريد، حالة من أربع (متاح، زيارة جارية، محجوز، مؤجَّر أو مبيع)، اسم الوكيل، تاريخ آخر تحديث. لا أحد يضيف أعمدة. شخص واحد يحذف.',
        '**رقم واتساب واحد للوكالة، لا أرقام شخصية.** WhatsApp Business المجاني مع التصنيفات: طلب جديد، في زيارة، للمعاودة، ضائع. العملاء يكتبون للوكالة والوكالة تُسند.',
        '**لا عقار بلا مرجع.** الوكيل الذي يعرض عقاراً يذكر مرجعه. العقار بلا سطر غير موجود.',
        '**النتيجة تُسجَّل في اليوم نفسه.** بعد كل زيارة، سطر في تبويب ثانٍ: المرجع، العميل، الوكيل، النتيجة. ثلاثة أعمدة تكفي.',
        '**خمس عشرة دقيقة يوم الاثنين.** نمرّ على العقارات التي لم تتغير حالتها منذ أسبوعين والطلبات بلا جواب. هذا هو الاجتماع الوحيد اللازم.',
      ], after: ['لوكالة بوكيل أو اثنين وأقل من مئة عقار، **هذه الدرجة تكفي غالباً لسنة كاملة**. إن التزمت بها فلا تحتاج قراءة الباقي الآن.'] },
      { heading: 'الدرجة 2 — عندما تحتاج منصة', body: [
        'العلامات التي تقول إن الملف بلغ حدّه: أكثر من وكيلين، أكثر من مئة عقار نشط، أكثر من خمسين طلباً شهرياً، تفويضات حصرية يجب حمايتها، وكالة ثانية أو حي ثانٍ، ملاك يطلبون تقريراً. هنا لا يصمد الانضباط البشري ويجب أن تفرض الأداة القاعدة.',
        'منصة الوكالة ليست CRM عاماً بحقل «عقار». تحتوي كحد أدنى ما يلي.',
      ], visual: 'platform', after: [
        'المركز هو **بطاقة العقار الواحدة**. كل ما عداها يقرؤها أو يحدّثها: تطبيق الوكيل في الميدان، الإدارة الخلفية للمسيّر، النشر على موقعكم وعلى Ouedkniss، محادثات واتساب المرتبطة بالعقار والعميل. يبقى واتساب القناة ويتوقف عن أن يكون الذاكرة. فصّلنا الوحدات في دليل [برنامج الوكالة العقارية في الجزائر](/blog/logiciel-immobilier-agence-algerie-2026/)، ومنطق مسار الطلبات في دليل [CRM في الجزائر](/blog/logiciel-crm-algerie-2024/).',
        'طريقان. **برنامج عقاري جاهز بالاشتراك**، سريع البدء، يكفي إن كانت عملياتكم قياسية وقبلتم حدوده في واتساب والعربية والنشر المحلي. **منصة مخصصة**، عندما تكون لديكم عدة وكالات أو قواعد عمولة خاصة أو بوابة ملاك، أو تريدون أن تكون الأداة أصلاً للشركة لا إيجاراً.',
      ] },
      { heading: 'الدرجة 3 — أين يوفّر الذكاء الاصطناعي الوقت فعلاً، وأين لا يضيف شيئاً', body: ['الذكاء الاصطناعي هو السؤال الذي يطرحه الجميع أولاً. يأتي ثالثاً، وليس في كل مكان.'], visual: 'ai', after: [
        'الاستخدامان عاليا الفائدة يشتركان في شرط: عقارات منظّمة في بطاقة واحدة. **المطابقة التلقائية** تقرأ كل طلب جديد، الميزانية والحي والمساحة وعدد الغرف، وتقترح العقارات المناسبة على الوكيل ثم تنبّه العميل عند دخول عقار جديد. **الرد على الرسالة الأولى** في واتساب في أي ساعة يؤهّل الطلب ويعطي المواعيد ويسلّم لوكيل في الصباح مع ملخص. هذان الاستخدامان يسدّان أكبر تسرّب في المسار: طلب مساء الجمعة الذي بقي بلا جواب.',
        'أما التقدير التلقائي للأسعار فيعتمد على بيانات معاملات موثوقة ما زالت نادرة في الجزائر. نشرح السبب وما يعمل رغم ذلك في تحليلنا حول [الذكاء الاصطناعي والتقييم العقاري في الجزائر](/blog/ia-immobilier-estimation-algerie-2026/).',
      ] },
      { heading: 'كم يكلف وكم يستغرق', body: ['منصة وكالة بتطبيق هاتف للوكلاء وإدارة خلفية وبطاقة عقار وطلبات ومطابقة وWhatsApp Business تقع في الفئة 2 من [شبكة أسعار التطبيقات في الجزائر](/blog/prix-application-mobile-algerie-2026/)، مع ذكاء المطابقة والرد اختيارياً. الجدول يكتمل في اثني عشر أسبوعاً.'], visual: 'timeline', after: ['الأسبوع الذي يقرر كل شيء هو الثاني: **استرجاع ملفاتكم**. تكرارات، عقارات وهمية، حالات خاطئة، أرقام ملاك مكررة ثلاث مرات. إن فتح الفريق الأداة في اليوم الأول ووجد فيها فوضى الملف نفسها عاد إلى واتساب. وإن وجد قاعدة نظيفة بقي.'] },
      { heading: 'الأخطاء التي نراها في الوكالات', body: [], list: [
        '**شراء CRM عام.** لا يعرف العقار ولا التفويض ولا الزيارة. يملؤه الوكلاء أسبوعاً ثم يتركونه.',
        '**استيراد الملف كما هو.** تنتقل الفوضى إلى برنامج آخر ولا تأتي الثقة.',
        '**إطلاق الأداة بلا القاعدة.** «لا عقار خارج المنصة» يجب أن يقولها المسيّر لا البرنامج.',
        '**الاحتفاظ بالأرقام الشخصية.** يصبح العميل ملكاً للوكيل لا للوكالة.',
        '**البدء بالذكاء الاصطناعي.** على قاعدة غير نظيفة يقترح شققاً مؤجَّرة ويجيب خارج الموضوع. رتّب أولاً.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'هل يجب التخلي عن واتساب؟', a: 'لا. يبقى واتساب القناة المفضلة لعملائكم. ما يتغير أن المحادثات تمر عبر رقم الوكالة وتُربط بالعقار والعميل في المنصة. يتوقف واتساب عن أن يكون ذاكرة الوكالة.' },
        { q: 'وكلائي غير مرتاحين مع البرامج.', a: 'تطبيق الوكيل يجب أن يكتفي بثلاث شاشات: طلباتي، عقاراتي، تسجيل زيارة. بالعربية والفرنسية. إن احتاج وكيل تكويناً يتجاوز ساعة فالأداة سيئة التصميم.' },
        { q: 'هل يمكن استرجاع ملفات Google Sheets الحالية؟', a: 'نعم وهو إلزامي. يشمل الاسترجاع تنظيف التكرارات والتحقق من الحالات والاستيراد مرة واحدة. إنه أهم أسبوع في المشروع.' },
        { q: 'برنامج جاهز أم مخصص؟', a: 'جاهز إن كانت لديك وكالة واحدة وعمليات قياسية وقبلت حدوده في واتساب والعربية والنشر المحلي. مخصص إن كانت لديك عدة وكالات أو قواعد خاصة أو بوابة ملاك، أو أردت أن تكون الأداة أصلاً للشركة.' },
        { q: 'كم من الوقت قبل أن يستعمله الفريق فعلاً؟', a: 'اثنا عشر أسبوعاً حتى الانتقال، ثم شهر يلتزم فيه المسيّر بقاعدة «لا عقار خارج المنصة». بعد هذا الشهر تدافع الأداة عن نفسها لأنها تحتوي ما لم يحتوه الملف قط: حقيقة اليوم.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'المشكلة ليست واتساب. المشكلة أن لا مكان في الوكالة يعرف أي عقار ما زال متاحاً.' },
      { after: 3, text: 'الذكاء الاصطناعي لا يرتّب وكالة. إنه يسرّع وكالة مرتّبة أصلاً.' },
    ],
    cta: { eyebrow: 'أخبرنا أين أنت', title: 'صف وكالتك: عدد الوكلاء، العقارات النشطة، الطلبات شهرياً. سنخبرك في أي درجة أنت وما الذي يجب فعله أولاً.', body: 'تصمم سيملوب منصات تسيير للوكالات والمرقّين العقاريين في الجزائر: بطاقة عقار واحدة، تطبيق هاتف للوكلاء، WhatsApp Business، مطابقة بالذكاء الاصطناعي. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، مراحل، وكود تملكونه.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/logiciel-immobilier-agence-algerie-2026/', kind: 'دليل', name: 'برنامج الوكالة العقارية في الجزائر: الوحدات التي تهم' },
      { href: '/blog/ia-immobilier-estimation-algerie-2026/', kind: 'تحليل', name: 'الذكاء الاصطناعي والتقييم العقاري في الجزائر' },
      { href: '/blog/logiciel-crm-algerie-2024/', kind: 'دليل', name: 'CRM في الجزائر: الاختيار والنشر' },
      { href: '/blog/prix-application-mobile-algerie-2026/', kind: 'دليل أسعار', name: 'كم يكلف تطبيق في الجزائر في 2026' },
    ] },
  },
};

const KEYWORDS = "organiser agence immobilière whatsapp, logiciel agence immobilière algérie, crm immobilier algérie, gestion agence immobilière google sheets, application agent immobilier algérie, whatsapp business agence immobilière, ia agence immobilière algérie, real estate agency software algeria, برنامج وكالة عقارية الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
