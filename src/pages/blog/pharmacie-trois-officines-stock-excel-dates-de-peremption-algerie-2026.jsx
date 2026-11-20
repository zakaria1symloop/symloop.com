import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026.mjs';

const SLUG = 'pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026';
const FIGURES = ['leaks', 'platform', 'ai', 'timeline'];
const DATE = '2026-10-29';

const CONTENT = {
  fr: {
    kind: 'Problème · Pharmacie et commerce', title: "J'ai trois officines, mon stock est sur Excel et je perds des produits périmés chaque mois : comment reprendre la main (Algérie, 2026).",
    dek: "À une officine, Excel tient. À deux, il ment. À trois, il coûte de l'argent tous les mois : périmés découverts trop tard, ruptures dans un point de vente pendant que l'autre surstocke, commandes passées de mémoire. Pourquoi, ce qui se règle en une semaine, le logiciel qu'il vous faut vraiment, où l'IA aide, et le calendrier pour basculer sans fermer une officine.",
    publishedAt: 'Octobre 2026', readTime: '9 min de lecture', author: 'Symloop', about: ['Pharmacie', 'Gestion de stock', 'Multi-officines', 'Dates de péremption', 'Algérie'],
    intro: [
      "**Réponse courte.** Excel n'est pas fait pour trois officines, parce qu'il n'a ni la notion de lot, ni celle de date de péremption, ni celle de transfert entre points de vente. Tant que chaque officine a son fichier, personne ne voit qu'un produit manque ici et expire là-bas. La solution n'est pas un ERP complet : c'est **un stock unique par lot et par date, partagé par vos trois comptoirs**, avec les transferts entre officines proposés avant toute commande fournisseur, l'alerte au comptoir sur les lots qui expirent, et un inventaire tournant de dix minutes par jour à la place de la journée de fermeture. L'IA vient ensuite, pour prévoir les ruptures et proposer la commande. Le tout se met en place en dix semaines, officine par officine.",
      "Ce guide répond à une question qu'un commerçant nous a posée en arabe : « je veux un système qui gère les stocks de pharmacies, supérettes et restaurants, avec facturation, et des abonnements ». Nous répondons ici pour la pharmacie, le cas le plus exigeant ; le même raisonnement vaut pour une supérette ou une chaîne de restaurants avec plusieurs points de vente.",
    ],
    sections: [
      { heading: "Pourquoi Excel casse à partir de la deuxième officine", body: [
        "Excel sait compter des quantités. Il ne sait pas qu'une même référence est présente en trois lots avec trois dates, que le lot le plus ancien doit sortir en premier, qu'une boîte vendue au comptoir de la première officine doit disparaître du stock au moment où le ticket s'imprime, ni qu'un transfert vers la deuxième officine est plus rentable qu'une commande fournisseur. Chaque officine finit donc avec sa vérité, mise à jour quand quelqu'un y pense, et c'est entre ces trois vérités que l'argent disparaît.",
      ], visual: 'leaks', after: [
        "Les pharmaciens que nous rencontrons connaissent ces cinq fuites. Ce qu'ils sous-estiment, c'est leur somme : **un produit périmé n'est pas une perte de stock, c'est un achat payé au fournisseur, stocké, puis jeté**, et les ruptures font partir des clients fidèles vers l'officine d'en face. À trois points de vente, cette somme dépasse largement le coût d'un logiciel sérieux.",
      ] },
      { heading: 'Palier 1 — Ce qui se règle en une semaine, avant tout logiciel', body: [
        "Quatre règles, applicables lundi, qui arrêtent les pires fuites et préparent la reprise des données.",
      ], preOrdered: [
        "**Une date de péremption par ligne, obligatoire.** Dans chaque fichier, une colonne lot et une colonne date. Une ligne sans date ne compte pas. C'est fastidieux une fois, et c'est la condition de tout le reste.",
        "**Le tour des périmés du lundi.** Chaque officine sort la liste de ce qui expire dans quatre-vingt-dix jours et la partage avec les deux autres. Un produit qui dort ici et se vend là-bas change d'officine dans la semaine.",
        "**Pas de commande fournisseur sans regarder les deux autres stocks.** Un message dans le groupe avant chaque commande : « qui a du X ? ». Rudimentaire, et pourtant la moitié des surstocks disparaît.",
        "**La réception se note le jour même**, lot et date compris. Une réception notée le lendemain est une réception fausse.",
      ], after: [
        "Pour une officine unique, ces règles suffisent longtemps. À trois, elles tiennent quelques mois, le temps de choisir et de déployer le logiciel. **Ne les sautez pas : des fichiers avec lots et dates se reprennent en une semaine ; des fichiers sans dates se reprennent jamais.**",
      ] },
      { heading: 'Palier 2 — Le logiciel multi-officines : ce qu’il doit faire, et ce qui est superflu', body: [
        "Ce dont vous avez besoin n'est pas un ERP. C'est un logiciel de pharmacie qui connaît le lot, la date, le comptoir et le transfert, et qui tient sur trois sites avec une seule fiche produit. Nous avons détaillé les modules d'un [logiciel de pharmacie et de gestion de stock en Algérie](/blog/logiciel-pharmacie-gestion-stock-algerie-2026/) ; voici le minimum pour trois officines.",
      ], visual: 'platform', after: [
        "Deux fonctions paient le logiciel à elles seules. **Le transfert entre officines**, proposé automatiquement quand un produit manque dans l'une et dort dans l'autre, avant toute commande fournisseur. **L'alerte au comptoir**, qui prévient le préparateur qu'un lot expire dans soixante jours au moment où il scanne, et lui propose de le servir en premier. Le reste, tableau de bord, inventaire tournant, réception par scan, consolide. Le tiers payant et la carte Chifa doivent être gérés au comptoir dès le premier jour, sinon l'équipe garde l'ancien système à côté.",
        "Logiciel existant ou sur mesure ? Si vos trois officines fonctionnent de façon standard, un logiciel de pharmacie du marché, déployé proprement, suffit. Le sur mesure se justifie quand vous mélangez pharmacie, parapharmacie et supérette, quand vous voulez vendre le logiciel par abonnement à d'autres officines, comme le demandait le commerçant qui a posé la question, ou quand les transferts et les règles d'achat sont propres à votre groupe. Le [guide des applications de gestion de stock en Algérie](/blog/application-gestion-stock-algerie-2026/) détaille ce choix.",
      ] },
      { heading: "Où l'IA aide une pharmacie multi-officines, et où elle n'apporte rien", body: [
        "La question de l'IA arrive toujours en premier. Elle se règle en troisième, et sur deux usages seulement.",
      ], visual: 'ai', after: [
        "**Prévoir les ruptures et proposer la commande**, officine par officine, à partir de six mois de ventes réelles, des délais fournisseurs et des saisons : la grippe, le Ramadan, la rentrée. **Proposer le transfert avant que le lot n'expire**, en croisant la vitesse de vente de chaque officine avec les dates. Ces deux usages exigent un stock par lot et par date, à jour. Sur un Excel approximatif, l'IA propose des transferts de produits qui n'existent plus. Le conseil au comptoir, lui, reste l'acte du pharmacien ; nous l'avons écrit dans notre dossier sur [la transformation digitale de la pharmacie en Algérie](/blog/transformation-digitale-pharma-algerie-ia-2026/).",
      ] },
      { heading: 'Combien ça coûte et combien de temps', body: [
        "Un logiciel sur mesure pour trois officines, avec comptoir, stock par lot, transferts, achats et tableau de bord, se situe en catégorie 2 de notre [grille de prix](/blog/prix-application-mobile-algerie-2026/), la prévision par IA en option. Un logiciel du marché se paie par abonnement et se déploie plus vite, avec les limites de son éditeur. Dans les deux cas, le calendrier qui marche est le même : officine par officine, jamais les trois en même temps.",
      ], visual: 'timeline', after: [
        "Le commerçant qui nous a écrit demandait aussi s'il pouvait connaître le prix total à l'avance. Oui, à partir d'un périmètre écrit, nous l'expliquons dans [notre réponse dédiée à cette question](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/). Pour une pharmacie, le périmètre tient en une page : vos familles de produits, vos fournisseurs, vos règles de tiers payant, et l'état de vos fichiers Excel.",
      ] },
      { heading: 'Les erreurs que nous voyons dans les pharmacies à plusieurs officines', body: [], list: [
        "**Déployer les trois officines le même jour.** Trois équipes perdues en même temps, et retour à Excel en une semaine.",
        "**Importer les fichiers sans dates de péremption.** Le logiciel hérite d'un stock aveugle. Mettez les dates avant, pas après.",
        "**Garder un comptoir sur l'ancien système « en attendant ».** Deux vérités de nouveau. La bascule d'une officine est totale ou elle n'est pas.",
        "**Acheter un logiciel de caisse générique.** Il ne connaît ni le lot, ni la date, ni Chifa. Le préparateur le contourne dès la première ordonnance.",
        "**Commencer par l'IA.** Elle prévoit à partir de ventes que vous n'avez pas encore enregistrées proprement. Six mois de données d'abord.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Faut-il fermer une officine pour l'inventaire de départ ?", a: "Non. L'inventaire de départ se fait par famille de produits, en dehors des heures de pointe, sur trois à cinq jours, pendant que l'officine vend. Ensuite, l'inventaire tournant remplace définitivement la journée de fermeture." },
        { q: "Peut-on reprendre nos fichiers Excel ?", a: "Oui, et c'est obligatoire, à condition qu'ils contiennent le lot et la date de péremption. La reprise comprend le nettoyage des doublons et des références mal orthographiées. Comptez deux semaines pour trois officines." },
        { q: "Et la carte Chifa, le tiers payant ?", a: "Ils se gèrent au comptoir dès le premier jour, sinon l'équipe garde l'ancien système à côté. Tout logiciel de pharmacie sérieux en Algérie les intègre ; vérifiez-le avant de signer." },
        { q: "Logiciel du marché ou sur mesure ?", a: "Du marché si vos officines fonctionnent de façon standard. Sur mesure si vous mélangez plusieurs métiers, si vous voulez le revendre par abonnement, ou si vos règles de transfert et d'achat sont propres à votre groupe." },
        { q: "Combien de temps avant que l'équipe l'utilise vraiment ?", a: "Une officine à la fois, deux semaines chacune, soit dix semaines pour trois. L'équipe l'adopte le jour où l'alerte au comptoir lui évite de servir un lot qui expire : en général la première semaine." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Un produit périmé n'est pas une perte de stock. C'est un achat payé, stocké, puis jeté." },
      { after: 2, text: "Deux fonctions paient le logiciel : le transfert entre officines, et l'alerte au comptoir sur le lot qui expire." },
    ],
    cta: { eyebrow: 'Dites-nous où vous en êtes', title: "Combien d'officines, combien de références, et l'état de vos fichiers. Nous vous dirons si un logiciel du marché suffit ou si votre cas demande du sur mesure, et ce que le cadrage doit contenir.", body: "Symloop conçoit des logiciels de gestion de stock et de point de vente pour les pharmacies, les commerces à plusieurs points de vente et les distributeurs en Algérie : stock par lot et par date, transferts entre sites, comptoir avec Chifa, prévision par IA. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/logiciel-pharmacie-gestion-stock-algerie-2026/', kind: 'Guide', name: 'Logiciel de pharmacie et gestion de stock en Algérie : les modules' },
      { href: '/blog/application-gestion-stock-algerie-2026/', kind: 'Guide', name: 'Application de gestion de stock en Algérie : du marché ou sur mesure' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problème', name: 'Peut-on connaître le prix total avant de commencer ?' },
      { href: '/blog/transformation-digitale-pharma-algerie-ia-2026/', kind: 'Dossier', name: 'Transformation digitale de la pharmacie en Algérie' },
    ] },
  },
  en: {
    kind: 'Problem · Pharmacy and retail', title: 'I have three pharmacies, my stock is on Excel and I lose expired products every month: how to take back control (Algeria, 2026).',
    dek: "With one pharmacy, Excel holds. With two, it lies. With three, it costs money every month: expiries discovered too late, stock-outs in one shop while the other overstocks, orders placed from memory. Why, what gets fixed in a week, the software you really need, where AI helps, and the timeline to switch without closing a shop.",
    publishedAt: 'October 2026', readTime: '9 min read', author: 'Symloop', about: ['Pharmacy', 'Stock management', 'Multi-branch', 'Expiry dates', 'Algeria'],
    intro: [
      "**Short answer.** Excel is not built for three pharmacies, because it has no notion of batch, expiry date or transfer between shops. As long as each pharmacy has its own file, nobody sees that a product is missing here and expiring there. The solution is not a full ERP: it is **a single stock per batch and date, shared by your three counters**, with transfers between branches proposed before any supplier order, a counter alert on expiring batches, and a ten-minute daily rolling inventory instead of the closing day. AI comes after, to forecast stock-outs and propose the order. It all goes live in ten weeks, one branch at a time.",
      "This guide answers a question a shop owner asked us in Arabic: \"I want a system that manages stock for pharmacies, mini-markets and restaurants, with invoicing, sold by subscription\". We answer here for the pharmacy, the most demanding case; the same reasoning applies to a mini-market or a restaurant chain with several outlets.",
    ],
    sections: [
      { heading: 'Why Excel breaks from the second pharmacy', body: [
        "Excel can count quantities. It does not know that one reference exists in three batches with three dates, that the oldest batch must go out first, that a box sold at the first pharmacy's counter must leave the stock the moment the receipt prints, nor that a transfer to the second pharmacy is more profitable than a supplier order. So each pharmacy ends up with its own truth, updated when someone remembers, and the money disappears between those three truths.",
      ], visual: 'leaks', after: [
        "The pharmacists we meet know these five leaks. What they underestimate is their sum: **an expired product is not a stock loss, it is a purchase paid to the supplier, stored, then thrown away**, and stock-outs send loyal customers to the pharmacy across the street. With three shops, that sum far exceeds the cost of serious software.",
      ] },
      { heading: 'Tier 1 — What gets fixed in a week, before any software', body: [
        "Four rules, applicable on Monday, that stop the worst leaks and prepare the data import.",
      ], preOrdered: [
        "**One expiry date per row, mandatory.** In each file, a batch column and a date column. A row without a date does not count. Tedious once, and the condition for everything else.",
        "**The Monday expiry round.** Each pharmacy lists what expires within ninety days and shares it with the other two. A product sleeping here and selling there changes shop within the week.",
        "**No supplier order without checking the other two stocks.** A message in the group before each order: \"who has X?\". Rudimentary, and yet half the overstock disappears.",
        "**Receiving is logged the same day**, batch and date included. A receipt logged the next day is a wrong receipt.",
      ], after: [
        "For a single pharmacy, these rules are enough for a long time. With three, they hold a few months, the time to choose and deploy the software. **Do not skip them: files with batches and dates import in a week; files without dates never import.**",
      ] },
      { heading: 'Tier 2 — Multi-branch software: what it must do, and what is superfluous', body: [
        "What you need is not an ERP. It is pharmacy software that knows the batch, the date, the counter and the transfer, and runs on three sites with one product record. We detailed the modules of [pharmacy and stock management software in Algeria](/blog/logiciel-pharmacie-gestion-stock-algerie-2026/); here is the minimum for three branches.",
      ], visual: 'platform', after: [
        "Two features pay for the software on their own. **Transfers between branches**, proposed automatically when a product is missing in one and sleeping in another, before any supplier order. **The counter alert**, which tells the assistant a batch expires in sixty days at the moment they scan it, and suggests serving it first. The rest, dashboard, rolling inventory, receiving by scan, consolidates. Third-party payment and the Chifa card must be handled at the counter from day one, otherwise the team keeps the old system alongside.",
        "Off-the-shelf or custom? If your three pharmacies work in a standard way, a market pharmacy software, deployed properly, is enough. Custom is justified when you mix pharmacy, parapharmacy and mini-market, when you want to sell the software by subscription to other pharmacies, as the shop owner who asked wanted, or when transfers and purchasing rules are specific to your group. The [guide to stock management apps in Algeria](/blog/application-gestion-stock-algerie-2026/) details that choice.",
      ] },
      { heading: 'Where AI helps a multi-branch pharmacy, and where it adds nothing', body: [
        "The AI question always comes first. It is settled third, and on two uses only.",
      ], visual: 'ai', after: [
        "**Forecasting stock-outs and proposing the order**, branch by branch, from six months of real sales, supplier lead times and seasons: flu, Ramadan, back to school. **Proposing the transfer before the batch expires**, by crossing each branch's sales velocity with the dates. These two uses require a stock per batch and date, up to date. On an approximate Excel, AI proposes transfers of products that no longer exist. Counter advice remains the pharmacist's act; we wrote about it in our report on [digital transformation of pharmacy in Algeria](/blog/transformation-digitale-pharma-algerie-ia-2026/).",
      ] },
      { heading: 'What it costs and how long it takes', body: [
        "Custom software for three pharmacies, with counter, stock per batch, transfers, purchasing and dashboard, sits in category 2 of our [price grid](/blog/prix-application-mobile-algerie-2026/), with AI forecasting as an option. Market software is paid by subscription and deploys faster, with its vendor's limits. In both cases, the timeline that works is the same: one branch at a time, never all three at once.",
      ], visual: 'timeline', after: [
        "The shop owner who wrote to us also asked whether he could know the total price in advance. Yes, from a written scope, we explain it in [our dedicated answer to that question](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/). For a pharmacy, the scope fits on one page: your product families, your suppliers, your third-party payment rules, and the state of your Excel files.",
      ] },
      { heading: 'The mistakes we see in multi-branch pharmacies', body: [], list: [
        "**Deploying the three branches the same day.** Three teams lost at once, and back to Excel within a week.",
        "**Importing files without expiry dates.** The software inherits a blind stock. Add the dates before, not after.",
        "**Keeping one counter on the old system \"for now\".** Two truths again. A branch switch is total or it is not.",
        "**Buying a generic till software.** It knows neither batch, nor date, nor Chifa. The assistant bypasses it at the first prescription.",
        "**Starting with AI.** It forecasts from sales you have not yet recorded properly. Six months of data first.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Do we have to close a pharmacy for the initial inventory?', a: 'No. The initial inventory is done by product family, outside peak hours, over three to five days, while the pharmacy sells. Then the rolling inventory permanently replaces the closing day.' },
        { q: 'Can our Excel files be imported?', a: 'Yes, and it is mandatory, provided they contain the batch and the expiry date. The import includes cleaning duplicates and misspelled references. Count two weeks for three pharmacies.' },
        { q: 'What about the Chifa card and third-party payment?', a: 'They are handled at the counter from day one, otherwise the team keeps the old system alongside. Any serious pharmacy software in Algeria integrates them; check before signing.' },
        { q: 'Market software or custom?', a: 'Market if your pharmacies work in a standard way. Custom if you mix several trades, want to resell it by subscription, or if your transfer and purchasing rules are specific to your group.' },
        { q: 'How long before the team really uses it?', a: 'One pharmacy at a time, two weeks each, so ten weeks for three. The team adopts it the day the counter alert saves them from serving an expiring batch: usually the first week.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'An expired product is not a stock loss. It is a purchase paid, stored, then thrown away.' },
      { after: 2, text: 'Two features pay for the software: transfers between branches, and the counter alert on the expiring batch.' },
    ],
    cta: { eyebrow: 'Tell us where you stand', title: 'How many pharmacies, how many references, and the state of your files. We will tell you whether market software is enough or your case needs custom work, and what the scoping must contain.', body: 'Symloop designs stock and point-of-sale software for pharmacies, multi-outlet retailers and distributors in Algeria: stock per batch and date, transfers between sites, counter with Chifa, AI forecasting. Senior engineers in Algiers and Sétif, written scope, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/logiciel-pharmacie-gestion-stock-algerie-2026/', kind: 'Guide', name: 'Pharmacy and stock management software in Algeria: the modules' },
      { href: '/blog/application-gestion-stock-algerie-2026/', kind: 'Guide', name: 'Stock management app in Algeria: market or custom' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problem', name: 'Can I know the total price before starting?' },
      { href: '/blog/transformation-digitale-pharma-algerie-ia-2026/', kind: 'Report', name: 'Digital transformation of pharmacy in Algeria' },
    ] },
  },
  ar: {
    kind: 'مشكلة · صيدلية وتجارة', title: 'لديّ ثلاث صيدليات، مخزوني على Excel وأخسر منتجات منتهية الصلاحية كل شهر: كيف أستعيد السيطرة (الجزائر، 2026).',
    dek: 'بصيدلية واحدة يصمد Excel. باثنتين يكذب. بثلاث يكلّف مالاً كل شهر: منتهيات تُكتشف متأخرة، نفاد في نقطة بيع بينما تفيض الأخرى، طلبات من الذاكرة. لماذا، ما يُحلّ في أسبوع، البرنامج الذي تحتاجه فعلاً، أين يساعد الذكاء الاصطناعي، والجدول الزمني للانتقال دون إغلاق صيدلية.',
    publishedAt: 'أكتوبر 2026', readTime: '9 دقائق قراءة', author: 'سيملوب', about: ['صيدلية', 'تسيير المخزون', 'متعدد الفروع', 'تواريخ الانتهاء', 'الجزائر'],
    intro: [
      '**الجواب المختصر.** Excel ليس مصمماً لثلاث صيدليات، لأنه لا يعرف مفهوم الدفعة ولا تاريخ الانتهاء ولا التحويل بين نقاط البيع. ما دام لكل صيدلية ملفها، لا أحد يرى أن منتجاً ناقص هنا وينتهي هناك. الحل ليس ERP كاملاً: إنه **مخزون واحد بالدفعة والتاريخ تتشاركه أكشاككم الثلاثة**، مع تحويلات بين الفروع تُقترح قبل أي طلب مورّد، وتنبيه عند الكشك على الدفعات التي تنتهي، وجرد دوري من عشر دقائق يومياً بدل يوم الإغلاق. يأتي الذكاء الاصطناعي بعدها لتوقّع النفاد واقتراح الطلب. كل ذلك في عشرة أسابيع، صيدلية بصيدلية.',
      'يجيب هذا الدليل عن سؤال طرحه علينا تاجر بالعربية: «أريد نظاماً يسيّر مخزونات الصيدليات والسوبيرات والمطاعم، مع الفوترة، وباشتراكات». نجيب هنا عن الصيدلية، الحالة الأكثر تطلباً؛ والمنطق نفسه يصلح لسوبيرات أو سلسلة مطاعم بعدة نقاط بيع.',
    ],
    sections: [
      { heading: 'لماذا ينكسر Excel من الصيدلية الثانية', body: ['يعرف Excel عدّ الكميات. لا يعرف أن المرجع نفسه موجود في ثلاث دفعات بثلاثة تواريخ، وأن الأقدم يجب أن يخرج أولاً، وأن علبة بيعت في كشك الصيدلية الأولى يجب أن تختفي من المخزون لحظة طباعة التذكرة، ولا أن التحويل إلى الصيدلية الثانية أربح من طلب مورّد. فتنتهي كل صيدلية بحقيقتها، تُحدَّث عندما يتذكر أحدهم، وبين هذه الحقائق الثلاث يختفي المال.'], visual: 'leaks', after: ['الصيادلة الذين نلتقيهم يعرفون هذه التسربات الخمسة. ما يقلّلون من شأنه هو مجموعها: **المنتج المنتهي ليس خسارة مخزون، بل شراء دُفع للمورّد وخُزّن ثم رُمي**، والنفادات ترسل الزبائن الأوفياء إلى الصيدلية المقابلة. بثلاث نقاط بيع يتجاوز هذا المجموع بكثير ثمن برنامج جاد.'] },
      { heading: 'الدرجة 1 — ما يُحلّ في أسبوع، قبل أي برنامج', body: ['أربع قواعد قابلة للتطبيق يوم الاثنين توقف أسوأ التسربات وتهيّئ استرجاع البيانات.'], preOrdered: [
        '**تاريخ انتهاء لكل سطر، إلزامي.** في كل ملف عمود للدفعة وعمود للتاريخ. السطر بلا تاريخ لا يُحسب. متعب مرة واحدة، وهو شرط كل ما يليه.',
        '**جولة المنتهيات يوم الاثنين.** تُخرج كل صيدلية قائمة ما ينتهي خلال تسعين يوماً وتشاركها مع الأخريين. المنتج النائم هنا والمباع هناك يغيّر صيدليته خلال الأسبوع.',
        '**لا طلب مورّد دون النظر في المخزونين الآخرين.** رسالة في المجموعة قبل كل طلب: «من لديه X؟». بدائي، ومع ذلك يختفي نصف الفائض.',
        '**الاستلام يُسجَّل في اليوم نفسه** بالدفعة والتاريخ. الاستلام المسجَّل في الغد استلام خاطئ.',
      ], after: ['لصيدلية واحدة تكفي هذه القواعد طويلاً. بثلاث تصمد بضعة أشهر، ريثما تختار البرنامج وتنشره. **لا تتجاوزها: ملفات بدفعات وتواريخ تُسترجع في أسبوع؛ وملفات بلا تواريخ لا تُسترجع أبداً.**'] },
      { heading: 'الدرجة 2 — برنامج متعدد الفروع: ما يجب أن يفعله، وما هو زائد', body: ['ما تحتاجه ليس ERP. إنه برنامج صيدلية يعرف الدفعة والتاريخ والكشك والتحويل، ويعمل على ثلاثة مواقع ببطاقة منتج واحدة. فصّلنا وحدات [برنامج الصيدلية وتسيير المخزون في الجزائر](/blog/logiciel-pharmacie-gestion-stock-algerie-2026/)؛ وهذا هو الحد الأدنى لثلاث صيدليات.'], visual: 'platform', after: [
        'وظيفتان تسدّدان ثمن البرنامج وحدهما. **التحويل بين الفروع** المقترح تلقائياً عندما ينقص منتج في فرع وينام في آخر، قبل أي طلب مورّد. **التنبيه عند الكشك** الذي يخبر المحضّر أن دفعة تنتهي خلال ستين يوماً لحظة مسحها ويقترح صرفها أولاً. الباقي، لوحة القيادة والجرد الدوري والاستلام بالمسح، يعزّز. يجب إدارة الدافع الثالث وبطاقة الشفاء عند الكشك من اليوم الأول وإلا احتفظ الفريق بالنظام القديم إلى جانبه.',
        'برنامج جاهز أم مخصص؟ إن كانت صيدلياتك الثلاث تعمل بطريقة قياسية يكفي برنامج صيدلية من السوق منشور بإتقان. يُبرَّر المخصص عندما تمزج صيدلية وشبه صيدلية وسوبيرات، أو عندما تريد بيع البرنامج بالاشتراك لصيدليات أخرى كما طلب التاجر الذي سأل، أو عندما تكون قواعد التحويل والشراء خاصة بمجموعتك. يفصّل [دليل تطبيقات تسيير المخزون في الجزائر](/blog/application-gestion-stock-algerie-2026/) هذا الخيار.',
      ] },
      { heading: 'أين يساعد الذكاء الاصطناعي صيدلية متعددة الفروع، وأين لا يضيف شيئاً', body: ['سؤال الذكاء الاصطناعي يأتي دائماً أولاً. ويُحسم ثالثاً، وفي استخدامين فقط.'], visual: 'ai', after: ['**توقّع النفاد واقتراح الطلب** فرعاً بفرع من ستة أشهر مبيعات حقيقية وآجال المورّدين والمواسم: الإنفلونزا، رمضان، الدخول المدرسي. **اقتراح التحويل قبل انتهاء الدفعة** بمقاطعة سرعة بيع كل فرع مع التواريخ. يتطلب هذان الاستخدامان مخزوناً بالدفعة والتاريخ محدّثاً. على Excel تقريبي يقترح الذكاء الاصطناعي تحويل منتجات لم تعد موجودة. أما النصيحة عند الكشك فتبقى فعل الصيدلي؛ كتبنا ذلك في ملفنا حول [التحول الرقمي للصيدلة في الجزائر](/blog/transformation-digitale-pharma-algerie-ia-2026/).'] },
      { heading: 'كم يكلف وكم يستغرق', body: ['برنامج مخصص لثلاث صيدليات بكشك ومخزون بالدفعة وتحويلات ومشتريات ولوحة قيادة يقع في الفئة 2 من [شبكة أسعارنا](/blog/prix-application-mobile-algerie-2026/)، مع التوقّع بالذكاء الاصطناعي اختيارياً. برنامج السوق يُدفع بالاشتراك ويُنشر أسرع بحدود ناشره. في الحالتين الجدول الذي ينجح واحد: صيدلية بصيدلية، لا الثلاث معاً.'], visual: 'timeline', after: ['التاجر الذي كتب لنا سأل أيضاً إن كان يمكنه معرفة السعر الإجمالي مسبقاً. نعم، انطلاقاً من نطاق مكتوب، نشرح ذلك في [جوابنا المخصص لهذا السؤال](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/). لصيدلية يكتفي النطاق بصفحة: عائلات منتجاتك، مورّدوك، قواعد الدافع الثالث، وحالة ملفات Excel.'] },
      { heading: 'الأخطاء التي نراها في الصيدليات متعددة الفروع', body: [], list: [
        '**نشر الفروع الثلاثة في اليوم نفسه.** ثلاثة فرق ضائعة معاً، والعودة إلى Excel في أسبوع.',
        '**استيراد الملفات بلا تواريخ انتهاء.** يرث البرنامج مخزوناً أعمى. ضع التواريخ قبل لا بعد.',
        '**إبقاء كشك على النظام القديم «مؤقتاً».** حقيقتان من جديد. انتقال الفرع كامل أو لا يكون.',
        '**شراء برنامج صندوق عام.** لا يعرف الدفعة ولا التاريخ ولا الشفاء. يلتف عليه المحضّر من أول وصفة.',
        '**البدء بالذكاء الاصطناعي.** يتوقّع من مبيعات لم تسجّلها بعد بشكل سليم. ستة أشهر من البيانات أولاً.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'هل يجب إغلاق صيدلية للجرد الأولي؟', a: 'لا. يتم الجرد الأولي حسب عائلة المنتجات خارج ساعات الذروة على ثلاثة إلى خمسة أيام بينما تبيع الصيدلية. ثم يحل الجرد الدوري نهائياً محل يوم الإغلاق.' },
        { q: 'هل يمكن استرجاع ملفات Excel؟', a: 'نعم وهو إلزامي، بشرط أن تحتوي الدفعة وتاريخ الانتهاء. يشمل الاسترجاع تنظيف التكرارات والمراجع الخاطئة الكتابة. أسبوعان لثلاث صيدليات.' },
        { q: 'وبطاقة الشفاء والدافع الثالث؟', a: 'يُداران عند الكشك من اليوم الأول وإلا احتفظ الفريق بالنظام القديم. كل برنامج صيدلية جاد في الجزائر يدمجهما؛ تحقق قبل التوقيع.' },
        { q: 'برنامج السوق أم مخصص؟', a: 'السوق إن كانت صيدلياتك تعمل بطريقة قياسية. مخصص إن مزجت عدة مهن أو أردت إعادة بيعه بالاشتراك أو كانت قواعد التحويل والشراء خاصة بمجموعتك.' },
        { q: 'كم من الوقت قبل أن يستعمله الفريق فعلاً؟', a: 'صيدلية في كل مرة، أسبوعان لكل واحدة، أي عشرة أسابيع لثلاث. يتبنّاه الفريق يوم يجنّبه تنبيه الكشك صرف دفعة تنتهي: عادة في الأسبوع الأول.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'المنتج المنتهي ليس خسارة مخزون. إنه شراء دُفع وخُزّن ثم رُمي.' },
      { after: 2, text: 'وظيفتان تسدّدان ثمن البرنامج: التحويل بين الفروع، وتنبيه الكشك على الدفعة التي تنتهي.' },
    ],
    cta: { eyebrow: 'أخبرنا أين أنت', title: 'كم صيدلية، كم مرجعاً، وحالة ملفاتك. سنخبرك إن كان برنامج السوق يكفي أو أن حالتك تتطلب تخصيصاً، وما الذي يجب أن يحتويه التأطير.', body: 'تصمم سيملوب برامج تسيير المخزون ونقاط البيع للصيدليات والتجار متعددي نقاط البيع والموزّعين في الجزائر: مخزون بالدفعة والتاريخ، تحويلات بين المواقع، كشك بالشفاء، توقّع بالذكاء الاصطناعي. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/logiciel-pharmacie-gestion-stock-algerie-2026/', kind: 'دليل', name: 'برنامج الصيدلية وتسيير المخزون في الجزائر: الوحدات' },
      { href: '/blog/application-gestion-stock-algerie-2026/', kind: 'دليل', name: 'تطبيق تسيير المخزون في الجزائر: من السوق أم مخصص' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'مشكلة', name: 'هل يمكن معرفة السعر الإجمالي قبل البدء؟' },
      { href: '/blog/transformation-digitale-pharma-algerie-ia-2026/', kind: 'ملف', name: 'التحول الرقمي للصيدلة في الجزائر' },
    ] },
  },
};

const KEYWORDS = "gestion stock pharmacie plusieurs officines, logiciel pharmacie multi officines algérie, dates de péremption stock excel pharmacie, transfert stock entre officines, logiciel gestion stock supérette algérie, périmés pharmacie perte, برنامج صيدلية متعدد الفروع الجزائر, multi-branch pharmacy software algeria";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
