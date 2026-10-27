import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026.mjs';

const SLUG = 'caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026';
const FIGURES = ['leaks', 'compare', 'system', 'timeline'];
const DATE = '2026-10-29';

const CONTENT = {
  fr: {
    kind: 'Problème · Restaurant', title: "Je veux une caisse pour mon restaurant : ce qu'il faut vraiment, caisse du marché ou sur mesure, et dans quel ordre (Algérie, 2026).",
    dek: "« Je veux un POS pour mon restaurant, commandes et menus. » Derrière cette phrase, il y a quatre fuites : la commande perdue entre la salle et la cuisine, la caisse qui ne dit pas la vérité, le stock d'ingrédients invisible et les commandes de livraison hors système. Ce qu'une caisse du marché règle, quand le sur mesure se justifie, où l'IA aide, et les huit semaines pour basculer sans fermer un soir.",
    publishedAt: 'Octobre 2026', readTime: '8 min de lecture', author: 'Symloop', about: ['Restaurant', 'Caisse POS', 'Écran cuisine', 'Livraison', 'Algérie'],
    intro: [
      "**Réponse courte.** Pour un seul restaurant aux processus standards, **n'achetez pas de développement sur mesure : une caisse du marché, bien déployée, règle les deux premières fuites en deux semaines**, la commande perdue et la caisse inexacte. Le sur mesure se justifie dans trois cas : quand vos commandes de livraison, WhatsApp, site, Yassir et vos propres livreurs, doivent arriver dans le même flux que la salle ; quand vous avez plusieurs adresses ou une cuisine centrale ; et quand vous voulez que le stock se tienne par recette, chaque plat vendu décrémentant ses ingrédients. Dans tous les cas, la semaine qui décide de tout n'est pas celle du logiciel, c'est celle où vous décrivez vos recettes.",
      "Ce guide répond à une question qu'un restaurateur a posée sur ce site, en quatre mots : « a POS for my restaurant: orders, menus ». Voici la réponse complète, honnête sur le moment où vous n'avez pas besoin de nous.",
    ],
    sections: [
      { heading: "Ce que « je veux une caisse » veut dire", body: [
        "Personne ne veut une caisse. On veut que la table douze ait son plat avant la table quatorze, que le tiroir corresponde au soir, que le poulet ne manque pas à vingt heures et que la commande WhatsApp de dix-neuf heures trente ne tombe pas entre deux services. Une caisse n'est qu'un des outils qui servent ces quatre objectifs. Les voici, dans l'ordre où ils coûtent de l'argent.",
      ], visual: 'leaks', after: [
        "Les deux premières fuites se règlent avec n'importe quelle caisse sérieuse. La troisième demande que vos recettes existent quelque part en ingrédients. La quatrième demande que tous vos canaux de commande entrent dans le même système, et c'est elle qui décide entre une caisse du marché et un système sur mesure.",
      ] },
      { heading: 'Caisse du marché ou système sur mesure', body: [
        "Les caisses de restaurant du marché, sur tablette, existent en Algérie et font bien la prise de commande, le ticket, l'écran cuisine et la clôture de caisse. Nous les décrivons dans notre guide des [logiciels de caisse pour restaurants et commerces](/blog/logiciel-caisse-pos-restaurant-commerce-setif-2026/). La question n'est pas de savoir si elles sont bonnes, mais où elles s'arrêtent.",
      ], visual: 'compare', after: [
        "**Choisissez le marché** si vous avez un restaurant, des processus standards, et une livraison marginale ou confiée à une plateforme. Vous serez en route en deux semaines et vous aurez réglé l'essentiel.",
        "**Choisissez le sur mesure** si vos commandes de livraison représentent une part sérieuse du chiffre et arrivent par plusieurs canaux, si vous avez ou préparez une deuxième adresse, une cuisine centrale ou une dark kitchen, ou si vos règles, menus par moment de la journée, formules, commissions des livreurs, ne rentrent pas dans les cases d'un logiciel du marché. Le sur mesure se construit souvent autour d'une caisse existante plutôt qu'à sa place : on garde la caisse, on ajoute le flux de commandes, le stock par recette et le tableau de bord. Nous avons décrit le volet commande en ligne dans notre guide de [l'application de commande pour restaurant](/blog/application-restaurant-livraison-algerie/).",
      ] },
      { heading: 'Ce que le système doit contenir, du comptoir à la direction', body: [
        "Qu'il vienne du marché ou qu'il soit construit, voici ce que votre système doit couvrir, et dans quel ordre vous verrez le gain.",
      ], visual: 'system', after: [
        "**L'écran cuisine** change la soirée dès le premier service : les commandes arrivent dans l'ordre, chaque plat a son temps, la cuisine marque « prêt » et la salle le voit. Les bons papier disparaissent, et avec eux la moitié des erreurs. **Le stock par recette** change la marge au bout d'un mois : chaque plat vendu décrémente ses ingrédients, le système prévient avant la rupture et calcule la commande fournisseur à partir des ventes réelles. C'est la fonction que les restaurateurs sous-estiment le plus, parce qu'elle demande une semaine de travail au départ : décrire chaque plat en ingrédients, une fois.",
        "**Les commandes de livraison dans le même flux** suppriment la quatrième fuite. WhatsApp, votre site, Yassir et vos propres livreurs arrivent sur le même écran cuisine que la salle, avec la même priorité et le même ticket. Si vous préparez votre propre application de commande, notre guide sur [la vente sur Instagram et WhatsApp](/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/) explique pourquoi un lien de commande suffit presque toujours.",
      ] },
      { heading: "Où l'IA aide un restaurant, et où elle n'apporte rien", body: [
        "Deux usages paient, après six mois de données propres. **La prévision des ventes par plat et par jour**, qui règle les achats et le personnel : un vendredi de Ramadan ne ressemble pas à un mardi de février, et le système l'apprend. **La réponse aux commandes WhatsApp**, qui prend la commande, confirme le prix et le délai, et la pousse en cuisine sans que personne ne tape. Le reste, menus générés, recommandations, attend que vos ventes existent dans un système. Un restaurant qui tourne sur papier n'a rien à donner à l'IA.",
      ] },
      { heading: 'Combien de temps et combien', body: [
        "Une caisse du marché se paie par abonnement ou à l'achat et se déploie en une à deux semaines. Un système sur mesure avec flux de commandes multicanal, stock par recette et tableau de bord se situe en catégorie 2 de notre [grille de prix](/blog/prix-application-mobile-algerie-2026/), plus si vous ajoutez une application client. Dans les deux cas, le calendrier qui marche tient en huit semaines et ne ferme aucun soir.",
      ], visual: 'timeline', after: [
        "La règle du service test : deux services calmes, un midi de semaine par exemple, avec le système et le papier en parallèle. On bascule quand la cuisine n'a plus regardé un bon papier de tout le service. En général, cela prend trois jours.",
      ] },
      { heading: 'Les erreurs que nous voyons dans les restaurants', body: [], list: [
        "**Acheter du sur mesure pour un seul restaurant standard.** Une caisse du marché aurait suffi, en deux semaines.",
        "**Installer la caisse sans décrire les recettes.** Elle comptera des plats, jamais des ingrédients, et la marge restera invisible.",
        "**Laisser la livraison hors système.** Trois flux en cuisine, un seul en caisse : la fuite continue, mais avec un logiciel.",
        "**Basculer un samedi soir.** Deux services calmes d'abord, en parallèle du papier.",
        "**Vouloir l'IA avant le premier mois de ventes.** Elle apprend de vos données, pas de vos intentions.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Ai-je besoin d'un développement sur mesure pour mon restaurant ?", a: "Pour un seul restaurant aux processus standards, non : une caisse du marché bien déployée suffit. Le sur mesure se justifie avec la livraison multicanal, plusieurs adresses ou une cuisine centrale, et des règles propres." },
        { q: "Combien de temps pour mettre en place une caisse ?", a: "Une à deux semaines pour une caisse du marché, six à dix pour un système sur mesure. Dans les deux cas, prévoyez une semaine pour décrire vos recettes en ingrédients : c'est elle qui rend le stock utile." },
        { q: "Puis-je garder ma caisse actuelle et ajouter le reste ?", a: "Souvent, oui. On garde la caisse pour le ticket et l'encaissement, et on ajoute le flux de commandes multicanal, le stock par recette et le tableau de bord autour. C'est moins cher et moins risqué que de tout remplacer." },
        { q: "Et les paiements CIB et Edahabia en salle ?", a: "Ils se gèrent par un terminal de paiement de votre banque, relié ou non à la caisse. Vérifiez que la caisse choisie enregistre le mode de paiement par ticket, pour que la clôture du soir soit juste." },
        { q: "L'IA peut-elle prendre les commandes ?", a: "Sur WhatsApp, oui, une fois que votre carte, vos prix et vos délais existent dans un système : elle prend la commande, confirme, et la pousse en cuisine. Avant cela, elle n'a rien sur quoi travailler." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Personne ne veut une caisse. On veut que la table douze ait son plat avant la table quatorze et que le tiroir corresponde au soir." },
      { after: 2, text: "L'écran cuisine change la soirée. Le stock par recette change la marge." },
    ],
    cta: { eyebrow: 'Décrivez votre restaurant', title: "Combien de couverts, quelle part de livraison, combien d'adresses. Nous vous dirons si une caisse du marché suffit ou ce que le sur mesure doit contenir, et par quoi commencer.", body: "Symloop conçoit des systèmes de commande, de cuisine et de livraison pour les restaurants et les chaînes en Algérie : flux multicanal, écran cuisine, stock par recette, commandes WhatsApp par IA. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/logiciel-caisse-pos-restaurant-commerce-setif-2026/', kind: 'Guide', name: 'Logiciel de caisse pour restaurants et commerces' },
      { href: '/blog/application-restaurant-livraison-algerie/', kind: 'Guide', name: "Application de commande en ligne pour restaurant" },
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'Série · 02', name: 'Uber Eats en Algérie : qui livre vraiment' },
      { href: '/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/', kind: 'Problème', name: "Je vends sur Instagram : ai-je besoin d'une application ?" },
    ] },
  },
  en: {
    kind: 'Problem · Restaurant', title: 'I want a till for my restaurant: what you really need, market POS or custom, and in what order (Algeria, 2026).',
    dek: "\"I want a POS for my restaurant, orders and menus.\" Behind that sentence are four leaks: the order lost between the floor and the kitchen, the till that does not tell the truth, the invisible ingredient stock and the delivery orders outside the system. What a market POS fixes, when custom is justified, where AI helps, and the eight weeks to switch without closing an evening.",
    publishedAt: 'October 2026', readTime: '8 min read', author: 'Symloop', about: ['Restaurant', 'POS', 'Kitchen display', 'Delivery', 'Algeria'],
    intro: [
      "**Short answer.** For a single restaurant with standard processes, **do not buy custom development: a well-deployed market POS fixes the first two leaks in two weeks**, the lost order and the inaccurate till. Custom is justified in three cases: when your delivery orders, WhatsApp, website, Yassir and your own couriers, must land in the same stream as the floor; when you have several addresses or a central kitchen; and when you want stock to be kept by recipe, each dish sold decrementing its ingredients. In every case, the week that decides everything is not the software week, it is the week you describe your recipes.",
      "This guide answers a question a restaurant owner asked on this site in four words: \"a POS for my restaurant: orders, menus\". Here is the complete answer, honest about when you do not need us.",
    ],
    sections: [
      { heading: 'What "I want a till" means', body: [
        "Nobody wants a till. You want table twelve to get its dish before table fourteen, the drawer to match at night, chicken not to run out at eight, and the seven-thirty WhatsApp order not to fall between two services. A till is only one of the tools serving those four goals. Here they are, in the order they cost money.",
      ], visual: 'leaks', after: [
        "The first two leaks are fixed by any serious POS. The third requires your recipes to exist somewhere as ingredients. The fourth requires all your order channels to enter the same system, and that is what decides between a market POS and a custom system.",
      ] },
      { heading: 'Market POS or custom system', body: [
        "Tablet-based restaurant POS products exist in Algeria and do order taking, receipts, kitchen screens and till closing well. We describe them in our guide to [POS software for restaurants and shops](/blog/logiciel-caisse-pos-restaurant-commerce-setif-2026/). The question is not whether they are good, but where they stop.",
      ], visual: 'compare', after: [
        "**Choose the market** if you have one restaurant, standard processes, and marginal delivery or delivery handled by a platform. You will be running in two weeks and will have fixed the essential.",
        "**Choose custom** if delivery orders are a serious share of revenue and arrive through several channels, if you have or are preparing a second address, a central kitchen or a dark kitchen, or if your rules, menus by time of day, set menus, courier commissions, do not fit the boxes of market software. Custom is often built around an existing POS rather than instead of it: keep the till, add the order stream, recipe stock and dashboard. We described the online ordering side in our guide to [ordering apps for restaurants](/blog/application-restaurant-livraison-algerie/).",
      ] },
      { heading: 'What the system must contain, from the counter to management', body: [
        "Whether it comes from the market or is built, here is what your system must cover, and in what order you will see the gain.",
      ], visual: 'system', after: [
        "**The kitchen screen** changes the evening from the first service: orders arrive in sequence, each dish has its time, the kitchen marks \"ready\" and the floor sees it. Paper slips disappear, and with them half the errors. **Recipe stock** changes the margin after a month: each dish sold decrements its ingredients, the system warns before a stock-out and computes the supplier order from real sales. It is the feature owners underestimate most, because it takes a week of work at the start: describing each dish in ingredients, once.",
        "**Delivery orders in the same stream** remove the fourth leak. WhatsApp, your website, Yassir and your own couriers land on the same kitchen screen as the floor, with the same priority and the same receipt. If you are preparing your own ordering app, our guide to [selling on Instagram and WhatsApp](/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/) explains why an ordering link is almost always enough.",
      ] },
      { heading: 'Where AI helps a restaurant, and where it adds nothing', body: [
        "Two uses pay, after six months of clean data. **Sales forecasting by dish and by day**, which drives purchasing and staffing: a Ramadan Friday looks nothing like a February Tuesday, and the system learns it. **WhatsApp order handling**, which takes the order, confirms price and lead time, and pushes it to the kitchen without anyone typing. The rest, generated menus, recommendations, waits until your sales exist in a system. A restaurant running on paper has nothing to give AI.",
      ] },
      { heading: 'How long and how much', body: [
        "A market POS is paid by subscription or purchase and deploys in one to two weeks. A custom system with multichannel order stream, recipe stock and dashboard sits in category 2 of our [price grid](/blog/prix-application-mobile-algerie-2026/), more if you add a customer app. In both cases, the timeline that works fits in eight weeks and closes no evening.",
      ], visual: 'timeline', after: [
        "The test service rule: two quiet services, a weekday lunch for instance, with the system and paper in parallel. You switch when the kitchen has not looked at a paper slip for a whole service. It usually takes three days.",
      ] },
      { heading: 'The mistakes we see in restaurants', body: [], list: [
        "**Buying custom for a single standard restaurant.** A market POS would have been enough, in two weeks.",
        "**Installing the POS without describing recipes.** It will count dishes, never ingredients, and the margin stays invisible.",
        "**Leaving delivery outside the system.** Three streams in the kitchen, one at the till: the leak continues, now with software.",
        "**Switching on a Saturday night.** Two quiet services first, alongside paper.",
        "**Wanting AI before the first month of sales.** It learns from your data, not your intentions.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Do I need custom development for my restaurant?', a: 'For a single restaurant with standard processes, no: a well-deployed market POS is enough. Custom is justified with multichannel delivery, several addresses or a central kitchen, and your own rules.' },
        { q: 'How long to set up a POS?', a: 'One to two weeks for a market POS, six to ten for a custom system. In both cases, plan a week to describe your recipes in ingredients: that is what makes stock useful.' },
        { q: 'Can I keep my current till and add the rest?', a: 'Often, yes. Keep the till for receipts and payment, and add the multichannel order stream, recipe stock and dashboard around it. It is cheaper and less risky than replacing everything.' },
        { q: 'What about CIB and Edahabia payments on the floor?', a: 'They go through a payment terminal from your bank, linked or not to the till. Check that the chosen POS records the payment method per receipt, so the night closing is right.' },
        { q: 'Can AI take orders?', a: 'On WhatsApp, yes, once your menu, prices and lead times exist in a system: it takes the order, confirms, and pushes it to the kitchen. Before that, it has nothing to work with.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'Nobody wants a till. You want table twelve to get its dish before table fourteen and the drawer to match at night.' },
      { after: 2, text: 'The kitchen screen changes the evening. Recipe stock changes the margin.' },
    ],
    cta: { eyebrow: 'Describe your restaurant', title: 'How many covers, what share of delivery, how many addresses. We will tell you whether a market POS is enough or what custom must contain, and where to start.', body: 'Symloop designs ordering, kitchen and delivery systems for restaurants and chains in Algeria: multichannel stream, kitchen screen, recipe stock, AI WhatsApp ordering. Senior engineers in Algiers and Sétif, written scope, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/logiciel-caisse-pos-restaurant-commerce-setif-2026/', kind: 'Guide', name: 'POS software for restaurants and shops' },
      { href: '/blog/application-restaurant-livraison-algerie/', kind: 'Guide', name: 'Online ordering app for restaurants' },
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'Series · 02', name: 'Uber Eats in Algeria: who really delivers' },
      { href: '/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/', kind: 'Problem', name: 'I sell on Instagram: do I need an app?' },
    ] },
  },
  ar: {
    kind: 'مشكلة · مطعم', title: 'أريد صندوقاً لمطعمي: ما تحتاجه فعلاً، صندوق السوق أم مخصص، وبأي ترتيب (الجزائر، 2026).',
    dek: '«أريد POS لمطعمي، طلبات وقوائم.» خلف هذه الجملة أربعة تسربات: الطلب الضائع بين الصالة والمطبخ، الصندوق الذي لا يقول الحقيقة، مخزون المكوّنات غير المرئي، وطلبات التوصيل خارج النظام. ما يحله صندوق السوق، متى يُبرَّر المخصص، أين يساعد الذكاء الاصطناعي، والأسابيع الثمانية للانتقال دون إغلاق سهرة.',
    publishedAt: 'أكتوبر 2026', readTime: '8 دقائق قراءة', author: 'سيملوب', about: ['مطعم', 'صندوق POS', 'شاشة المطبخ', 'التوصيل', 'الجزائر'],
    intro: [
      '**الجواب المختصر.** لمطعم واحد بعمليات قياسية، **لا تشترِ تطويراً مخصصاً: صندوق من السوق منشور بإتقان يحل التسربين الأولين في أسبوعين**، الطلب الضائع والصندوق غير الدقيق. يُبرَّر المخصص في ثلاث حالات: عندما يجب أن تصل طلبات التوصيل، واتساب والموقع وYassir وموصّلوك، في التدفق نفسه مع الصالة؛ عندما تكون لديك عدة عناوين أو مطبخ مركزي؛ وعندما تريد مسك المخزون حسب الوصفة، كل طبق مباع يُنقص مكوّناته. في كل الحالات، الأسبوع الذي يقرر كل شيء ليس أسبوع البرنامج بل الأسبوع الذي تصف فيه وصفاتك.',
      'يجيب هذا الدليل عن سؤال طرحه صاحب مطعم على هذا الموقع في أربع كلمات: «a POS for my restaurant: orders, menus». هذا هو الجواب الكامل، صادق بشأن اللحظة التي لا تحتاجنا فيها.',
    ],
    sections: [
      { heading: 'ماذا يعني «أريد صندوقاً»', body: ['لا أحد يريد صندوقاً. نريد أن تحصل الطاولة اثنتا عشرة على طبقها قبل الطاولة أربع عشرة، وأن يتطابق الدرج في المساء، وألا ينفد الدجاج في الثامنة، وألا يسقط طلب واتساب السابعة والنصف بين فترتين. الصندوق مجرد أداة من الأدوات التي تخدم هذه الأهداف الأربعة. إليكها بترتيب ما تكلّفه من مال.'], visual: 'leaks', after: ['يحل أي صندوق جاد التسربين الأولين. يتطلب الثالث أن توجد وصفاتك في مكان ما كمكوّنات. ويتطلب الرابع أن تدخل كل قنوات طلبك في النظام نفسه، وهو ما يحسم بين صندوق السوق والنظام المخصص.'] },
      { heading: 'صندوق السوق أم نظام مخصص', body: ['صناديق المطاعم من السوق على اللوحي موجودة في الجزائر وتؤدي جيداً أخذ الطلب والتذكرة وشاشة المطبخ وإقفال الصندوق. نصفها في دليل [برامج الصندوق للمطاعم والمحلات](/blog/logiciel-caisse-pos-restaurant-commerce-setif-2026/). السؤال ليس هل هي جيدة، بل أين تتوقف.'], visual: 'compare', after: [
        '**اختر السوق** إن كان لديك مطعم واحد وعمليات قياسية وتوصيل هامشي أو موكل لمنصة. ستعمل في أسبوعين وتكون قد حللت الأساسي.',
        '**اختر المخصص** إن كانت طلبات التوصيل تمثل حصة جدية من الرقم وتصل عبر عدة قنوات، أو كان لديك أو تحضّر عنواناً ثانياً أو مطبخاً مركزياً أو مطبخاً سحابياً، أو كانت قواعدك، قوائم حسب وقت اليوم، عروض، عمولات الموصّلين، لا تدخل في خانات برنامج السوق. غالباً يُبنى المخصص حول صندوق موجود لا بدلاً منه: نحتفظ بالصندوق ونضيف تدفق الطلبات والمخزون حسب الوصفة ولوحة القيادة. وصفنا جانب الطلب عبر الإنترنت في دليل [تطبيق الطلب للمطاعم](/blog/application-restaurant-livraison-algerie/).',
      ] },
      { heading: 'ما يجب أن يحتويه النظام، من الكشك إلى الإدارة', body: ['سواء جاء من السوق أو بُني، هذا ما يجب أن يغطيه نظامك وبأي ترتيب سترى المكسب.'], visual: 'system', after: [
        '**شاشة المطبخ** تغيّر السهرة من أول فترة: تصل الطلبات بالترتيب، لكل طبق وقته، يعلّم المطبخ «جاهز» وتراه الصالة. تختفي الأوراق ومعها نصف الأخطاء. **المخزون حسب الوصفة** يغيّر الهامش بعد شهر: كل طبق مباع يُنقص مكوّناته، ينبّه النظام قبل النفاد ويحسب طلب المورّد من المبيعات الحقيقية. إنها الوظيفة التي يستهين بها أصحاب المطاعم أكثر، لأنها تتطلب أسبوع عمل في البداية: وصف كل طبق بمكوّناته، مرة واحدة.',
        '**طلبات التوصيل في التدفق نفسه** تزيل التسرب الرابع. واتساب وموقعك وYassir وموصّلوك يصلون على شاشة المطبخ نفسها مع الصالة بالأولوية نفسها والتذكرة نفسها. إن كنت تحضّر تطبيق طلب خاصاً بك، يشرح دليلنا حول [البيع على إنستغرام وواتساب](/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/) لماذا يكفي رابط طلب تقريباً دائماً.',
      ] },
      { heading: 'أين يساعد الذكاء الاصطناعي المطعم، وأين لا يضيف شيئاً', body: ['استخدامان مجديان بعد ستة أشهر من بيانات نظيفة. **توقّع المبيعات حسب الطبق واليوم** الذي يضبط المشتريات والموظفين: جمعة رمضان لا تشبه ثلاثاء فيفري، والنظام يتعلم ذلك. **الرد على طلبات واتساب** الذي يأخذ الطلب ويؤكد السعر والمهلة ويدفعه إلى المطبخ دون أن يكتب أحد. الباقي، قوائم مولّدة وتوصيات، ينتظر أن توجد مبيعاتك في نظام. المطعم الذي يعمل بالورق لا شيء لديه يعطيه للذكاء الاصطناعي.'] },
      { heading: 'كم من الوقت وبكم', body: ['يُدفع صندوق السوق بالاشتراك أو بالشراء ويُنشر في أسبوع إلى أسبوعين. يقع النظام المخصص بتدفق طلبات متعدد القنوات ومخزون حسب الوصفة ولوحة قيادة في الفئة 2 من [شبكة أسعارنا](/blog/prix-application-mobile-algerie-2026/)، وأكثر إن أضفت تطبيق عملاء. في الحالتين، الجدول الذي ينجح يكتمل في ثمانية أسابيع ولا يغلق أي سهرة.'], visual: 'timeline', after: ['قاعدة الفترة التجريبية: فترتان هادئتان، غداء يوم أسبوع مثلاً، بالنظام والورق بالتوازي. ننتقل عندما لا ينظر المطبخ إلى ورقة طوال الفترة. يستغرق ذلك عادة ثلاثة أيام.'] },
      { heading: 'الأخطاء التي نراها في المطاعم', body: [], list: [
        '**شراء مخصص لمطعم واحد قياسي.** كان صندوق السوق يكفي، في أسبوعين.',
        '**تثبيت الصندوق دون وصف الوصفات.** سيعدّ أطباقاً لا مكوّنات، ويبقى الهامش غير مرئي.',
        '**ترك التوصيل خارج النظام.** ثلاثة تدفقات في المطبخ وواحد في الصندوق: يستمر التسرب لكن ببرنامج.',
        '**الانتقال ليلة سبت.** فترتان هادئتان أولاً بالتوازي مع الورق.',
        '**طلب الذكاء الاصطناعي قبل أول شهر مبيعات.** يتعلم من بياناتك لا من نواياك.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'هل أحتاج تطويراً مخصصاً لمطعمي؟', a: 'لمطعم واحد بعمليات قياسية، لا: يكفي صندوق من السوق منشور بإتقان. يُبرَّر المخصص مع التوصيل متعدد القنوات أو عدة عناوين أو مطبخ مركزي، وقواعد خاصة.' },
        { q: 'كم يستغرق تركيب صندوق؟', a: 'أسبوع إلى أسبوعين لصندوق السوق، ستة إلى عشرة لنظام مخصص. في الحالتين خصّص أسبوعاً لوصف وصفاتك بمكوّناتها: هو ما يجعل المخزون مفيداً.' },
        { q: 'هل أحتفظ بصندوقي الحالي وأضيف الباقي؟', a: 'غالباً نعم. نحتفظ بالصندوق للتذكرة والتحصيل ونضيف حوله تدفق الطلبات متعدد القنوات والمخزون حسب الوصفة ولوحة القيادة. أرخص وأقل خطراً من استبدال كل شيء.' },
        { q: 'والدفع بـCIB والذهبية في الصالة؟', a: 'يتم عبر جهاز دفع من بنكك، مرتبط بالصندوق أو لا. تحقق أن الصندوق المختار يسجّل طريقة الدفع لكل تذكرة ليكون إقفال المساء صحيحاً.' },
        { q: 'هل يستطيع الذكاء الاصطناعي أخذ الطلبات؟', a: 'على واتساب نعم، بعد أن توجد قائمتك وأسعارك ومهلك في نظام: يأخذ الطلب ويؤكد ويدفعه إلى المطبخ. قبل ذلك لا شيء لديه يعمل عليه.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'لا أحد يريد صندوقاً. نريد أن تحصل الطاولة اثنتا عشرة على طبقها قبل الطاولة أربع عشرة وأن يتطابق الدرج في المساء.' },
      { after: 2, text: 'شاشة المطبخ تغيّر السهرة. والمخزون حسب الوصفة يغيّر الهامش.' },
    ],
    cta: { eyebrow: 'صف مطعمك', title: 'كم عدد الأغطية، ما حصة التوصيل، كم عنواناً. سنخبرك إن كان صندوق السوق يكفي أو ما الذي يجب أن يحتويه المخصص، وبماذا تبدأ.', body: 'تصمم سيملوب أنظمة الطلب والمطبخ والتوصيل للمطاعم والسلاسل في الجزائر: تدفق متعدد القنوات، شاشة مطبخ، مخزون حسب الوصفة، طلبات واتساب بالذكاء الاصطناعي. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/logiciel-caisse-pos-restaurant-commerce-setif-2026/', kind: 'دليل', name: 'برنامج الصندوق للمطاعم والمحلات' },
      { href: '/blog/application-restaurant-livraison-algerie/', kind: 'دليل', name: 'تطبيق الطلب عبر الإنترنت للمطاعم' },
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'سلسلة · 02', name: 'Uber Eats في الجزائر: من يوصّل فعلاً' },
      { href: '/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/', kind: 'مشكلة', name: 'أبيع على إنستغرام: هل أحتاج تطبيقاً؟' },
    ] },
  },
};

const KEYWORDS = "caisse restaurant algérie, pos restaurant algérie, logiciel caisse restaurant commandes menus, écran cuisine restaurant, gestion stock restaurant recettes, commandes whatsapp restaurant, système de commande restaurant sur mesure, restaurant pos algeria, نظام صندوق مطعم الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
