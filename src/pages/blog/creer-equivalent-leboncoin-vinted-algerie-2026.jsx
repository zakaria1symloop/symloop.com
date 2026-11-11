import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-equivalent-leboncoin-vinted-algerie-2026.mjs';

const SLUG = 'creer-equivalent-leboncoin-vinted-algerie-2026';
const FIGURES = ['market', 'positions', 'flow', 'timeline'];
const DATE = '2026-10-29';
const SRC = { semrush: 'https://www.semrush.com/website/ouedkniss.com/overview/' };

const CONTENT = {
  fr: {
    kind: 'Vu en France, à construire en Algérie · 04', title: "Leboncoin et Vinted en Algérie : Ouedkniss a gagné les annonces. Ce qui reste à construire, et comment (guide fondateur 2026).",
    dek: "« Comment s'appelle Leboncoin en Algérie ? » La réponse est Ouedkniss, et il a gagné depuis longtemps. Ce qu'il fait, ce qu'il laisse au téléphone et aux espèces, et les trois produits encore ouverts : la seconde main avec livraison et paiement protégé, la verticale vérifiée, les outils des vendeurs professionnels.",
    publishedAt: 'Octobre 2026', readTime: '10 min de lecture', author: 'Symloop', about: ['Leboncoin', 'Vinted', 'Ouedkniss', 'Petites annonces', 'Seconde main', 'Algérie'],
    intro: [
      "**Réponse courte.** L'équivalent de Leboncoin en Algérie existe et s'appelle Ouedkniss : le premier site de petites annonces du pays depuis près de vingt ans, autour de dix millions de visites par mois, toutes catégories, gratuit pour les particuliers et payant pour les professionnels. Vouloir le remplacer est le projet le plus coûteux et le moins probable de cette série. En revanche, **Ouedkniss s'arrête là où Leboncoin et Vinted continuent : au premier message**. Le paiement, la livraison, le retour et le litige se font encore au téléphone, en espèces, sans recours. C'est là que se trouvent trois produits ouverts : la seconde main avec livraison et paiement protégé, le modèle Vinted limité aux catégories qui voyagent bien ; la verticale vérifiée, voitures ou immobilier avec inspection ; et les outils des vendeurs professionnels qui vendent déjà sur Ouedkniss, Facebook et Instagram.",
      "C'est le quatrième épisode de notre série « Vu en France, à construire en Algérie », après [Doctolib](/blog/creer-equivalent-doctolib-algerie-2026/), [Uber Eats](/blog/creer-equivalent-uber-eats-algerie-2026/) et [Airbnb](/blog/creer-equivalent-airbnb-algerie-2026/). Le cadre général du fondateur de la diaspora est dans [notre guide dédié](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
    ],
    sections: [
      { heading: "Ce que Leboncoin et Vinted ont prouvé, et ce qu'Ouedkniss a déjà pris", body: [
        "Leboncoin a prouvé qu'un pays entier pouvait vendre et acheter d'occasion sur un seul site, à condition que publier soit gratuit et que la recherche soit locale. Ouedkniss a prouvé exactement la même chose en Algérie, plus tôt que beaucoup de pays voisins : selon les mesures d'audience publiques, le site reçoit [autour de dix millions de visites par mois](" + SRC.semrush + "), avec une audience d'abord algérienne puis française, celle de la diaspora qui achète et vend à distance. La découverte est gagnée. Personne ne la reprendra avec un meilleur design.",
        "Vinted a prouvé autre chose, dix ans plus tard : que la seconde main de vêtements devient massive le jour où la plateforme **prend l'argent de l'acheteur, génère l'étiquette de livraison, et ne verse le vendeur qu'à la réception**. Sans cette mécanique, la seconde main reste une affaire de quartier. Avec elle, une étudiante à Oran vend un manteau à une mère de famille à Constantine sans que les deux se parlent. C'est cette mécanique qui manque en Algérie, et c'est elle qui est à construire.",
      ], visual: 'market', after: [
        "Lisez les lignes trois à cinq. **Tout ce qui suit le premier message est à prendre.** Ouedkniss n'a aucune raison de s'y engager : son modèle est l'audience et l'abonnement des professionnels, et la transaction est un métier différent, avec des litiges, des transporteurs et des espèces à réconcilier.",
      ] },
      { heading: 'Trois produits encore ouverts', body: [
        "Aucun des trois ne combat Ouedkniss sur son terrain. Chacun prend ce qu'il laisse au téléphone.",
      ], visual: 'positions', after: [
        "**La seconde main avec livraison et paiement protégé.** Vêtements, chaussures, puériculture, téléphones et petits objets : des catégories légères, standardisées, qui voyagent bien par Yalidine ou ZR Express. L'acheteur paie, l'argent est bloqué, le vendeur dépose le colis, l'acheteur confirme la réception, les fonds sont libérés. Les vendeuses existent déjà, par milliers, sur Instagram et dans les groupes Facebook de vente de vêtements ; elles passent leurs soirées à gérer des paiements à la livraison et des retours. Nous avons décrit leur quotidien dans [notre réponse aux vendeurs sur Instagram](/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/).",
        "**La verticale vérifiée.** Pour une voiture d'occasion ou un appartement, le problème n'est pas de trouver l'annonce, c'est de savoir si elle dit vrai. Une plateforme qui envoie un inspecteur, publie un rapport et prend une commission sur la vérification plutôt que sur l'annonce vend ce qu'Ouedkniss ne peut pas vendre : la confiance. C'est un métier de terrain avant d'être une application.",
        "**Les outils des vendeurs professionnels.** Des dizaines de milliers de commerçants vendent sur Ouedkniss, Facebook et Instagram en même temps, et gèrent tout à la main. Un outil qui publie partout d'un coup, répond aux messages, tient le stock, génère les étiquettes et suit les commandes ne concurrence pas Ouedkniss : il l'équipe. Vous vendez un logiciel par abonnement, sans avoir besoin d'atteindre une masse critique d'acheteurs.",
      ] },
      { heading: 'Ce qui doit changer par rapport au modèle français', body: [
        "Le parcours de Vinted se transpose, à cinq conditions près. Le paiement est hybride : acompte ou total en CIB ou Edahabia via SATIM, ou espèces déposées au point relais du transporteur. L'identité passe par le téléphone et le code SMS. L'adresse se remplace par la wilaya, la commune et le point relais. Le litige se tranche sur photos, en quarante-huit heures, par une équipe humaine, parce qu'il n'y a pas encore d'historique d'avis. Et le versement au vendeur se fait en dinars, par virement ou carte CIB, dans le pays.",
      ], visual: 'flow', after: [
        "Le produit, c'est l'argent bloqué entre le paiement et la libération. Les photos, la recherche et les filtres sont la vitrine. C'est pour cela qu'une équipe qui a déjà intégré [le paiement CIB et Edahabia](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/) et les transporteurs algériens gagne des mois : les pièges sont dans la réconciliation des espèces déposées au relais, dans les colis refusés et dans les retours, pas dans l'interface.",
      ] },
      { heading: 'Budget et calendrier : une catégorie, une ville, trois mois', body: [
        "Deux parcours, vendre et acheter, un paiement bloqué, des étiquettes de transporteur et un back-office de litiges placent le projet en catégorie 3 de notre [grille de prix des applications en Algérie](/blog/prix-application-mobile-algerie-2026/), hors équipe de médiation et marketing. La verticale vérifiée est moins lourde techniquement et plus lourde en terrain. Les outils pour vendeurs pro sont en catégorie 2 et se vendent dès le premier client.",
      ], visual: 'timeline', after: [
        "La règle qui compte est la même que pour Uber Eats et Airbnb, appliquée à la seconde main : **une catégorie et une ville avant d'étendre.** Cent vendeuses actives de vêtements à Alger, recrutées une par une sur Instagram pendant le développement, valent mieux que dix mille annonces importées et mortes. La seconde main vit de la densité et de la rotation, pas du catalogue.",
      ] },
      { heading: 'Les erreurs qui tuent ce projet', body: [], list: [
        "**Vouloir remplacer Ouedkniss.** Vingt ans d'avance et dix millions de visites par mois. Prenez ce qu'il laisse, pas ce qu'il tient.",
        "**Ouvrir toutes les catégories.** Un réfrigérateur ne voyage pas par Yalidine. Commencez par ce qui tient dans un colis.",
        "**Verser le vendeur avant la réception.** C'est tout le produit. Sans argent bloqué, vous êtes un Ouedkniss en moins bien.",
        "**Laisser le litige à un chatbot.** La première année, les litiges se tranchent par des humains, sur photos, vite. La confiance se construit là.",
        "**Importer des annonces pour paraître gros.** Un catalogue mort fait fuir les acheteurs en une visite. La densité se construit avec de vrais vendeurs actifs.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Comment s'appelle Leboncoin en Algérie ?", a: "Ouedkniss. C'est le premier site de petites annonces algérien, toutes catégories, gratuit pour les particuliers, avec une audience d'environ dix millions de visites par mois selon les mesures publiques." },
        { q: "Vinted existe-t-il en Algérie ?", a: "Non. La seconde main de vêtements se vend dans des groupes Facebook, sur Instagram et sur Ouedkniss, sans paiement protégé ni livraison intégrée. C'est précisément le produit encore ouvert." },
        { q: "Peut-on concurrencer Ouedkniss ?", a: "Pas sur les annonces généralistes. On peut construire ce qu'il ne fait pas : la transaction protégée, la vérification des biens, et les outils des vendeurs professionnels." },
        { q: "Comment fonctionne le paiement protégé en Algérie ?", a: "L'acheteur paie en CIB ou Edahabia, ou en espèces au point relais du transporteur. L'argent est bloqué par la plateforme et versé au vendeur en dinars après confirmation de réception, avec un délai de signalement de quarante-huit heures." },
        { q: "Combien de temps et quel budget ?", a: "Dix-huit semaines jusqu'à l'ouverture d'une catégorie dans une ville. Le projet se situe en catégorie 3 de notre grille de prix, hors médiation et marketing ; les outils pour vendeurs pro, en catégorie 2." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Ouedkniss a gagné la découverte. Tout ce qui suit le premier message est à prendre." },
      { after: 2, text: "Le produit, c'est l'argent bloqué entre le paiement et la libération. Le reste est la vitrine." },
    ],
    cta: { eyebrow: 'Vous avez vu le modèle fonctionner', title: "Construisons la version algérienne. Dites-nous quel produit des trois vous visez, quelle catégorie et quelle ville : nous vous dirons quoi lancer en premier et en combien de temps.", body: "Symloop conçoit des places de marché, des systèmes de paiement protégé et des outils de vente multicanal pour le marché algérien, avec des ingénieurs seniors à Alger et Sétif qui ont livré des intégrations CIB, Edahabia, SATIM et Yalidine en production. Cadrage écrit, jalons, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/', kind: 'Problème', name: "Je vends sur Instagram : ai-je besoin d'une application ?" },
      { href: '/blog/creer-equivalent-airbnb-algerie-2026/', kind: 'Série · 03', name: "Airbnb en Algérie : la demande existe, la plateforme non" },
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'Série · 02', name: 'Uber Eats en Algérie : qui livre vraiment' },
      { href: '/blog/ecommerce-algerie-paiement-cib-edahabia-2024/', kind: 'Guide', name: 'Paiement en ligne CIB et Edahabia' },
    ] },
  },
  en: {
    kind: 'Seen in France, to be built in Algeria · 04', title: 'Leboncoin and Vinted in Algeria: Ouedkniss won the classifieds. What remains to be built, and how (founder guide 2026).',
    dek: "\"What is Leboncoin called in Algeria?\" The answer is Ouedkniss, and it won long ago. What it does, what it leaves to the phone and to cash, and the three products still open: second-hand with delivery and protected payment, the verified vertical, tools for professional sellers.",
    publishedAt: 'October 2026', readTime: '10 min read', author: 'Symloop', about: ['Leboncoin', 'Vinted', 'Ouedkniss', 'Classifieds', 'Second-hand', 'Algeria'],
    intro: [
      "**Short answer.** The Leboncoin equivalent in Algeria exists and is called Ouedkniss: the country's first classifieds site for nearly twenty years, around ten million visits a month, all categories, free for individuals and paid for professionals. Wanting to replace it is the most expensive and least likely project in this series. However, **Ouedkniss stops where Leboncoin and Vinted continue: at the first message**. Payment, delivery, returns and disputes still happen by phone, in cash, with no recourse. That is where three open products sit: second-hand with delivery and protected payment, the Vinted model limited to categories that ship well; the verified vertical, cars or real estate with inspection; and tools for professional sellers already selling on Ouedkniss, Facebook and Instagram.",
      "This is the fourth episode of our series \"Seen in France, to be built in Algeria\", after [Doctolib](/blog/creer-equivalent-doctolib-algerie-2026/), [Uber Eats](/blog/creer-equivalent-uber-eats-algerie-2026/) and [Airbnb](/blog/creer-equivalent-airbnb-algerie-2026/). The general frame for a diaspora founder is in [our dedicated guide](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
    ],
    sections: [
      { heading: 'What Leboncoin and Vinted proved, and what Ouedkniss already took', body: [
        "Leboncoin proved that a whole country could buy and sell second-hand on one site, provided posting is free and search is local. Ouedkniss proved exactly the same thing in Algeria, earlier than many neighbouring countries: according to public audience measurements, the site receives [around ten million visits a month](" + SRC.semrush + "), with an audience first Algerian then French, the diaspora buying and selling remotely. Discovery is won. Nobody will take it back with a better design.",
        "Vinted proved something else, ten years later: that second-hand clothing becomes massive the day the platform **takes the buyer's money, generates the shipping label, and pays the seller only on receipt**. Without that mechanism, second-hand stays a neighbourhood affair. With it, a student in Oran sells a coat to a mother in Constantine without the two ever speaking. That mechanism is what is missing in Algeria, and that is what needs building.",
      ], visual: 'market', after: [
        "Read rows three to five. **Everything after the first message is up for grabs.** Ouedkniss has no reason to go there: its model is audience and professional subscriptions, and the transaction is a different trade, with disputes, carriers and cash to reconcile.",
      ] },
      { heading: 'Three products still open', body: [
        "None of the three fights Ouedkniss on its ground. Each takes what it leaves to the phone.",
      ], visual: 'positions', after: [
        "**Second-hand with delivery and protected payment.** Clothes, shoes, baby gear, phones and small items: light, standardised categories that ship well by Yalidine or ZR Express. The buyer pays, the money is held, the seller drops the parcel, the buyer confirms receipt, the funds are released. The sellers already exist, by the thousands, on Instagram and in Facebook clothing groups; they spend their evenings managing cash on delivery and returns. We described their daily life in [our answer to Instagram sellers](/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/).",
        "**The verified vertical.** For a used car or a flat, the problem is not finding the listing, it is knowing whether it tells the truth. A platform that sends an inspector, publishes a report and takes a commission on the verification rather than the listing sells what Ouedkniss cannot: trust. It is a field trade before it is an app.",
        "**Tools for professional sellers.** Tens of thousands of merchants sell on Ouedkniss, Facebook and Instagram at the same time, and manage everything by hand. A tool that posts everywhere at once, answers messages, keeps stock, generates labels and tracks orders does not compete with Ouedkniss: it equips it. You sell software by subscription, without needing to reach a critical mass of buyers.",
      ] },
      { heading: 'What must change from the French model', body: [
        "Vinted's journey transfers, on five conditions. Payment is hybrid: deposit or total by CIB or Edahabia through SATIM, or cash deposited at the carrier's pickup point. Identity goes through the phone and an SMS code. The address is replaced by wilaya, commune and pickup point. Disputes are settled on photos, within forty-eight hours, by a human team, because there is no review history yet. And the seller is paid in dinars, by transfer or CIB card, inside the country.",
      ], visual: 'flow', after: [
        "The product is the money held between payment and release. Photos, search and filters are the shop window. That is why a team that has already integrated [CIB and Edahabia payment](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/) and Algerian carriers saves months: the traps are in reconciling cash deposited at pickup points, in refused parcels and in returns, not in the interface.",
      ] },
      { heading: 'Budget and timeline: one category, one city, three months', body: [
        "Two journeys, sell and buy, a held payment, carrier labels and a dispute back-office place the project in category 3 of our [app price grid for Algeria](/blog/prix-application-mobile-algerie-2026/), excluding mediation team and marketing. The verified vertical is lighter technically and heavier in the field. Pro seller tools are in category 2 and sell from the first customer.",
      ], visual: 'timeline', after: [
        "The rule that counts is the same as for Uber Eats and Airbnb, applied to second-hand: **one category and one city before expanding.** One hundred active clothing sellers in Algiers, recruited one by one on Instagram during development, beat ten thousand imported, dead listings. Second-hand lives on density and turnover, not on catalogue size.",
      ] },
      { heading: 'The mistakes that kill this project', body: [], list: [
        "**Wanting to replace Ouedkniss.** Twenty years of lead and ten million visits a month. Take what it leaves, not what it holds.",
        "**Opening every category.** A fridge does not ship by Yalidine. Start with what fits in a parcel.",
        "**Paying the seller before receipt.** That is the whole product. Without held money, you are a worse Ouedkniss.",
        "**Leaving disputes to a chatbot.** In year one, disputes are settled by humans, on photos, fast. Trust is built there.",
        "**Importing listings to look big.** A dead catalogue drives buyers away in one visit. Density is built with real active sellers.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'What is Leboncoin called in Algeria?', a: 'Ouedkniss. It is the first Algerian classifieds site, all categories, free for individuals, with an audience of about ten million visits a month according to public measurements.' },
        { q: 'Does Vinted exist in Algeria?', a: 'No. Second-hand clothing is sold in Facebook groups, on Instagram and on Ouedkniss, without protected payment or integrated delivery. That is precisely the product still open.' },
        { q: 'Can you compete with Ouedkniss?', a: 'Not on general classifieds. You can build what it does not do: the protected transaction, verification of goods, and tools for professional sellers.' },
        { q: 'How does protected payment work in Algeria?', a: 'The buyer pays by CIB or Edahabia, or in cash at the carrier pickup point. The platform holds the money and pays the seller in dinars after receipt is confirmed, with a forty-eight hour window to report a problem.' },
        { q: 'How long and what budget?', a: 'Eighteen weeks to open one category in one city. The project sits in category 3 of our price grid, excluding mediation and marketing; pro seller tools in category 2.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'Ouedkniss won discovery. Everything after the first message is up for grabs.' },
      { after: 2, text: 'The product is the money held between payment and release. The rest is the shop window.' },
    ],
    cta: { eyebrow: 'You have seen the model work', title: "Let's build the Algerian version. Tell us which of the three products you aim for, which category and which city: we will tell you what to launch first and how long it takes.", body: 'Symloop designs marketplaces, protected payment systems and multichannel selling tools for the Algerian market, with senior engineers in Algiers and Sétif who have shipped CIB, Edahabia, SATIM and Yalidine integrations in production. Written scope, milestones, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/', kind: 'Problem', name: 'I sell on Instagram: do I need an app?' },
      { href: '/blog/creer-equivalent-airbnb-algerie-2026/', kind: 'Series · 03', name: 'Airbnb in Algeria: the demand exists, the platform does not' },
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'Series · 02', name: 'Uber Eats in Algeria: who really delivers' },
      { href: '/blog/ecommerce-algerie-paiement-cib-edahabia-2024/', kind: 'Guide', name: 'CIB and Edahabia online payment' },
    ] },
  },
  ar: {
    kind: 'رأيته في فرنسا، ابنِه في الجزائر · 04', title: 'Leboncoin وVinted في الجزائر: Ouedkniss ربح الإعلانات. ما يبقى للبناء، وكيف (دليل المؤسس 2026).',
    dek: '«ما اسم Leboncoin في الجزائر؟» الجواب Ouedkniss، وقد ربح منذ زمن. ما يفعله، ما يتركه للهاتف والنقد، والمنتجات الثلاثة التي ما زالت مفتوحة: المستعمل مع التوصيل والدفع المحمي، العمودي الموثّق، أدوات البائعين المحترفين.',
    publishedAt: 'أكتوبر 2026', readTime: '10 دقائق قراءة', author: 'سيملوب', about: ['Leboncoin', 'Vinted', 'Ouedkniss', 'إعلانات مبوّبة', 'مستعمل', 'الجزائر'],
    intro: [
      '**الجواب المختصر.** مكافئ Leboncoin في الجزائر موجود واسمه Ouedkniss: أول موقع إعلانات مبوّبة في البلاد منذ نحو عشرين سنة، حوالي عشرة ملايين زيارة شهرياً، كل الفئات، مجاني للأفراد ومدفوع للمحترفين. الرغبة في استبداله هي أغلى مشروع في هذه السلسلة وأقلها احتمالاً. في المقابل، **يتوقف Ouedkniss حيث يواصل Leboncoin وVinted: عند الرسالة الأولى**. الدفع والتوصيل والإرجاع والنزاع ما زالت تتم بالهاتف ونقداً وبلا طعن. هناك توجد ثلاثة منتجات مفتوحة: المستعمل مع التوصيل والدفع المحمي، نموذج Vinted محصوراً في الفئات التي تُشحن جيداً؛ العمودي الموثّق، سيارات أو عقار بفحص؛ وأدوات البائعين المحترفين الذين يبيعون أصلاً على Ouedkniss وفيسبوك وإنستغرام.',
      'هذه الحلقة الرابعة من سلسلتنا «رأيته في فرنسا، ابنِه في الجزائر» بعد [Doctolib](/blog/creer-equivalent-doctolib-algerie-2026/) و[Uber Eats](/blog/creer-equivalent-uber-eats-algerie-2026/) و[Airbnb](/blog/creer-equivalent-airbnb-algerie-2026/). الإطار العام لمؤسس الجالية في [دليلنا المخصص](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).',
    ],
    sections: [
      { heading: 'ما أثبته Leboncoin وVinted، وما أخذه Ouedkniss أصلاً', body: [
        'أثبت Leboncoin أن بلداً كاملاً يستطيع بيع وشراء المستعمل على موقع واحد، شرط أن يكون النشر مجانياً والبحث محلياً. وأثبت Ouedkniss الشيء نفسه في الجزائر، قبل كثير من البلدان المجاورة: حسب قياسات الجمهور العلنية يستقبل الموقع [حوالي عشرة ملايين زيارة شهرياً](' + SRC.semrush + ')، بجمهور جزائري أولاً ثم فرنسي، جالية تشتري وتبيع عن بعد. الاكتشاف محسوم. لن يستعيده أحد بتصميم أجمل.',
        'أثبت Vinted شيئاً آخر بعد عشر سنوات: أن مستعمل الملابس يصبح ضخماً يوم **تأخذ المنصة مال المشتري وتولّد وصل الشحن ولا تدفع للبائع إلا عند الاستلام**. بدون هذه الآلية يبقى المستعمل شأن حيّ. ومعها تبيع طالبة في وهران معطفاً لأم في قسنطينة دون أن تتكلما. هذه الآلية هي الغائبة في الجزائر، وهي ما يجب بناؤه.',
      ], visual: 'market', after: ['اقرأ الأسطر من الثالث إلى الخامس. **كل ما يلي الرسالة الأولى متاح للأخذ.** لا سبب لدى Ouedkniss للذهاب إليه: نموذجه الجمهور واشتراك المحترفين، والمعاملة مهنة مختلفة بنزاعات وناقلين ونقد يُطابَق.'] },
      { heading: 'ثلاثة منتجات ما زالت مفتوحة', body: ['لا أحد من الثلاثة يقاتل Ouedkniss في ميدانه. كل واحد يأخذ ما يتركه للهاتف.'], visual: 'positions', after: [
        '**المستعمل مع التوصيل والدفع المحمي.** ملابس، أحذية، مستلزمات أطفال، هواتف وأشياء صغيرة: فئات خفيفة موحّدة تُشحن جيداً عبر Yalidine أو ZR Express. يدفع المشتري، يُحجز المال، يودع البائع الطرد، يؤكد المشتري الاستلام، تُحرَّر الأموال. البائعات موجودات أصلاً بالآلاف على إنستغرام وفي مجموعات فيسبوك لبيع الملابس؛ يقضين أمسياتهن في إدارة الدفع عند التسليم والمرتجعات. وصفنا يومياتهن في [جوابنا للبائعين على إنستغرام](/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/).',
        '**العمودي الموثّق.** لسيارة مستعملة أو شقة، المشكلة ليست إيجاد الإعلان بل معرفة إن كان صادقاً. منصة ترسل فاحصاً وتنشر تقريراً وتأخذ عمولة على التحقق لا على الإعلان تبيع ما لا يستطيع Ouedkniss بيعه: الثقة. إنها مهنة ميدانية قبل أن تكون تطبيقاً.',
        '**أدوات البائعين المحترفين.** عشرات آلاف التجار يبيعون على Ouedkniss وفيسبوك وإنستغرام معاً ويديرون كل شيء يدوياً. أداة تنشر في كل مكان دفعة واحدة وتجيب عن الرسائل وتمسك المخزون وتولّد الوصولات وتتابع الطلبات لا تنافس Ouedkniss بل تجهّزه. تبيع برنامجاً بالاشتراك دون الحاجة إلى كتلة حرجة من المشترين.',
      ] },
      { heading: 'ما يجب تغييره مقارنة بالنموذج الفرنسي', body: ['ينتقل مسار Vinted بخمسة شروط. الدفع هجين: عربون أو إجمالي بـCIB أو الذهبية عبر SATIM، أو نقد يُودع في نقطة استلام الناقل. الهوية عبر الهاتف ورمز SMS. يحل محل العنوان الولاية والبلدية ونقطة الاستلام. يُفصل النزاع على الصور خلال ثمانٍ وأربعين ساعة بفريق بشري لأنه لا يوجد بعد سجل تقييمات. ويُدفع للبائع بالدينار، تحويلاً أو ببطاقة CIB، داخل البلاد.'], visual: 'flow', after: ['المنتج هو المال المحجوز بين الدفع والتحرير. الصور والبحث والمرشحات واجهة. لهذا يوفر الفريق الذي دمج أصلاً [الدفع CIB والذهبية](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/) والناقلين الجزائريين أشهراً: الفخاخ في مطابقة النقد المودع في نقاط الاستلام وفي الطرود المرفوضة والمرتجعات، لا في الواجهة.'] },
      { heading: 'الميزانية والجدول الزمني: فئة واحدة، مدينة واحدة، ثلاثة أشهر', body: ['مساران، بيع وشراء، ودفع محجوز ووصولات ناقل وإدارة خلفية للنزاعات تضع المشروع في الفئة 3 من [شبكة أسعار التطبيقات في الجزائر](/blog/prix-application-mobile-algerie-2026/)، دون فريق الوساطة والتسويق. العمودي الموثّق أخف تقنياً وأثقل ميدانياً. أدوات البائعين المحترفين في الفئة 2 وتُباع من أول عميل.'], visual: 'timeline', after: ['القاعدة التي تهم هي نفسها كما في Uber Eats وAirbnb مطبّقة على المستعمل: **فئة ومدينة قبل التوسع.** مئة بائعة ملابس نشطة في العاصمة مستقطبات واحدة واحدة على إنستغرام أثناء التطوير أفضل من عشرة آلاف إعلان مستورد وميت. المستعمل يعيش على الكثافة والدوران لا على حجم الكتالوج.'] },
      { heading: 'الأخطاء التي تقتل هذا المشروع', body: [], list: [
        '**الرغبة في استبدال Ouedkniss.** عشرون سنة من التقدم وعشرة ملايين زيارة شهرياً. خذ ما يتركه لا ما يمسكه.',
        '**فتح كل الفئات.** الثلاجة لا تُشحن عبر Yalidine. ابدأ بما يسع طرداً.',
        '**الدفع للبائع قبل الاستلام.** هذا هو المنتج كله. بلا مال محجوز أنت Ouedkniss أسوأ.',
        '**ترك النزاع لروبوت محادثة.** في السنة الأولى يفصل البشر في النزاعات على الصور وبسرعة. هناك تُبنى الثقة.',
        '**استيراد إعلانات للظهور كبيراً.** الكتالوج الميت يطرد المشترين من أول زيارة. تُبنى الكثافة ببائعين نشطين حقيقيين.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'ما اسم Leboncoin في الجزائر؟', a: 'Ouedkniss. أول موقع إعلانات مبوّبة جزائري، كل الفئات، مجاني للأفراد، بجمهور حوالي عشرة ملايين زيارة شهرياً حسب القياسات العلنية.' },
        { q: 'هل Vinted موجود في الجزائر؟', a: 'لا. يُباع مستعمل الملابس في مجموعات فيسبوك وعلى إنستغرام وOuedkniss بلا دفع محمي ولا توصيل مدمج. هذا بالضبط المنتج الذي ما زال مفتوحاً.' },
        { q: 'هل يمكن منافسة Ouedkniss؟', a: 'ليس في الإعلانات العامة. يمكن بناء ما لا يفعله: المعاملة المحمية، التحقق من السلع، وأدوات البائعين المحترفين.' },
        { q: 'كيف يعمل الدفع المحمي في الجزائر؟', a: 'يدفع المشتري بـCIB أو الذهبية أو نقداً في نقطة استلام الناقل. تحجز المنصة المال وتدفع للبائع بالدينار بعد تأكيد الاستلام، مع مهلة إبلاغ ثمانٍ وأربعين ساعة.' },
        { q: 'كم من الوقت وأي ميزانية؟', a: 'ثمانية عشر أسبوعاً حتى افتتاح فئة في مدينة. يقع المشروع في الفئة 3 من شبكة أسعارنا دون الوساطة والتسويق؛ وأدوات البائعين المحترفين في الفئة 2.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'ربح Ouedkniss الاكتشاف. كل ما يلي الرسالة الأولى متاح للأخذ.' },
      { after: 2, text: 'المنتج هو المال المحجوز بين الدفع والتحرير. الباقي واجهة.' },
    ],
    cta: { eyebrow: 'رأيت النموذج يعمل', title: 'لنبنِ النسخة الجزائرية. أخبرنا أي المنتجات الثلاثة تستهدف وأي فئة وأي مدينة: سنخبرك بما تطلقه أولاً وفي كم من الوقت.', body: 'تصمم سيملوب أسواقاً إلكترونية وأنظمة دفع محمي وأدوات بيع متعددة القنوات للسوق الجزائرية بمهندسين خبراء في الجزائر وسطيف سلّموا تكاملات CIB والذهبية وSATIM وYalidine في الإنتاج. تأطير مكتوب، مراحل، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/', kind: 'مشكلة', name: 'أبيع على إنستغرام: هل أحتاج تطبيقاً؟' },
      { href: '/blog/creer-equivalent-airbnb-algerie-2026/', kind: 'سلسلة · 03', name: 'Airbnb في الجزائر: الطلب موجود والمنصة لا' },
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'سلسلة · 02', name: 'Uber Eats في الجزائر: من يوصّل فعلاً' },
      { href: '/blog/ecommerce-algerie-paiement-cib-edahabia-2024/', kind: 'دليل', name: 'الدفع الإلكتروني CIB والذهبية' },
    ] },
  },
};

const KEYWORDS = "leboncoin algérie, comment s'appelle leboncoin en algérie, équivalent leboncoin algérie, vinted algérie, seconde main vêtements algérie application, ouedkniss alternative, créer une marketplace en algérie, paiement protégé algérie, leboncoin algeria, vinted algeria, سوق مستعمل الجزائر تطبيق";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
