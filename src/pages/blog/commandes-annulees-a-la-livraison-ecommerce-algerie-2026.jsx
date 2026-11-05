import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/commandes-annulees-a-la-livraison-ecommerce-algerie-2026.mjs';

const SLUG = 'commandes-annulees-a-la-livraison-ecommerce-algerie-2026';
const FIGURES = ['causes', 'flow', 'system'];
const DATE = '2026-10-30';

const CONTENT = {
  fr: {
    kind: 'Problème · E-commerce', title: "La moitié de mes commandes est refusée à la livraison : comment diviser les retours par deux quand on vend en paiement à la livraison (Algérie, 2026).",
    dek: "Vous vendez en ligne, les commandes arrivent, vous expédiez, et une commande sur deux ou sur trois revient : client absent, injoignable, ou qui refuse le colis. Chaque retour vous coûte l'aller, le retour et parfois le produit. Les six causes de refus, le processus de confirmation qui les divise par deux, ce qu'un système fait à votre place, et les chiffres à suivre chaque semaine.",
    publishedAt: 'Octobre 2026', readTime: '8 min de lecture', author: 'Symloop', about: ['E-commerce', 'Paiement à la livraison', 'Taux de refus', 'Yalidine', 'Algérie'],
    intro: [
      "**Réponse courte.** Le paiement à la livraison est le mode dominant en Algérie et il le restera encore des années ; le problème n'est pas de le supprimer, c'est de ne plus expédier les commandes qui vont revenir. **Quatre des six causes de refus se traitent avant l'expédition** : la commande impulsive, la commande passée chez plusieurs vendeurs, le prix de livraison découvert à la porte et le client qui refuse par habitude. Un processus simple, confirmation sous deux heures, frais par wilaya affichés avant la commande, score par numéro de téléphone, message la veille de la livraison, divise les refus par deux chez la plupart des vendeurs que nous accompagnons. Un système l'applique pour vous à partir de trente commandes par semaine.",
      "Ce guide prolonge notre réponse aux [vendeurs sur Instagram et WhatsApp](/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/) et notre [guide du paiement en ligne CIB et Edahabia](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/). Il s'adresse à tout vendeur, boutique Instagram, site e-commerce ou marque, qui livre en paiement à la livraison.",
    ],
    sections: [
      { heading: "Pourquoi un client refuse un colis qu'il a lui-même commandé", body: [
        "Le refus à la livraison n'est pas un caprice algérien, c'est une conséquence mécanique du paiement à la livraison : tant que le client n'a rien payé, la commande n'est qu'une intention. Chaque heure entre la commande et la porte est une occasion de changer d'avis, et le système de vente n'a souvent rien fait pour la réduire. Voici les six causes que nous retrouvons dans les retours de nos clients, avec le remède de chacune.",
      ], visual: 'causes', after: [
        "La sixième cause mérite un mot. Dans toutes les boutiques que nous avons analysées, **une petite minorité de numéros de téléphone concentre une part énorme des refus** : des clients qui commandent partout, refusent partout, et recommencent. Les repérer ne demande pas d'intelligence artificielle, seulement une mémoire : un score par numéro, et un acompte demandé au-delà d'un seuil.",
      ] },
      { heading: 'Le processus de confirmation qui divise les refus par deux', body: [
        "Le processus tient en cinq étapes. Il se fait à la main en dessous de trente commandes par semaine, et il se fait par un système au-dessus, parce qu'à la main on saute toujours une étape le soir où il y a du monde.",
      ], visual: 'flow', after: [
        "**La confirmation sous deux heures** est l'étape qui compte le plus : un message WhatsApp automatique auquel le client répond par un mot, puis un appel si le message reste sans réponse. Elle élimine les commandes impulsives et les doublons, et elle permet de convenir d'un créneau. **Le message de la veille** est la deuxième : le client absent n'est presque jamais un client de mauvaise foi, c'est un client qui ne savait pas que le colis arrivait aujourd'hui. **Les frais par wilaya affichés avant la commande** suppriment le refus du total à la porte. Le reste, point relais, score, acompte conditionnel, consolide.",
        "L'acompte mérite une précision. Vous ne le demandez pas à tout le monde, ce serait perdre la moitié des ventes. Vous le demandez au-delà d'un montant, par exemple pour les produits chers, et aux numéros qui ont déjà refusé. En CIB ou Edahabia sur un lien de paiement, ou par BaridiMob. Un acompte de dix pour cent suffit : il transforme une intention en engagement.",
      ] },
      { heading: "Ce qu'un système fait à votre place", body: [
        "À partir de trente commandes par semaine, le processus ne tient plus à la main. Un système de commande léger, celui que nous décrivons dans notre [guide de l'application de livraison sur mesure](/blog/application-livraison-sur-mesure-algerie-2026/), l'applique sans oubli.",
      ], visual: 'system', after: [
        "Le composant que les vendeurs sous-estiment est le dernier : **le tableau de bord du taux de refus par wilaya, par produit et par transporteur.** Il révèle, en deux semaines, qu'une wilaya vous coûte plus qu'elle ne rapporte, qu'un produit revient trois fois plus que les autres parce que sa photo ment, ou qu'un transporteur perd vos colis sur une ligne. Ce sont des décisions, pas des réglages : arrêter de livrer à domicile dans une wilaya et passer au point relais, retirer un produit, changer de transporteur sur une ligne.",
        "Où l'IA aide : la confirmation par WhatsApp à toute heure, en arabe et en français, qui comprend « oui », « ok », « demain » ou « annule », et le classement des réponses ambiguës vers la file d'appels. C'est un usage modeste et très rentable. Prévoir le refus avant la commande, en revanche, demande des mois de données propres : commencez par les enregistrer.",
      ] },
      { heading: 'Les chiffres à suivre chaque semaine', body: [], list: [
        "**Taux de confirmation** : commandes confirmées sur commandes reçues. Sous soixante-dix pour cent, votre formulaire laisse passer trop de commandes vides.",
        "**Taux de refus livré** : colis refusés sur colis présentés. C'est le chiffre qui coûte ; suivez-le par wilaya, par produit, par transporteur.",
        "**Délai commande-livraison** : chaque jour de plus ajoute des refus. Au-delà de quatre jours hors grandes villes, le client a souvent acheté ailleurs.",
        "**Part des récidivistes** : refus venant de numéros déjà connus. Si elle dépasse un tiers, votre score ne sert pas encore à bloquer.",
        "**Coût d'un retour** : aller, retour, remise en stock, produit abîmé. Mettez le chiffre sur la table, il justifie le système en un mois.",
      ] },
      { heading: 'Les erreurs que nous voyons chez les vendeurs', body: [], list: [
        "**Expédier sans confirmer parce que « ça va plus vite ».** Le colis part vite et revient lentement, à vos frais.",
        "**Un prix de livraison unique pour tout le pays.** Vous perdez de l'argent au Sud et des clients à Alger, et vous créez le refus du total à la porte.",
        "**Demander un acompte à tout le monde.** La moitié des ventes disparaît. L'acompte est conditionnel : montant élevé ou numéro à risque.",
        "**Changer de transporteur sans regarder les chiffres par ligne.** Un transporteur est bon sur une ligne et mauvais sur une autre. Décidez par wilaya.",
        "**Blâmer le client.** Le client absent ne savait pas que le colis arrivait. Le message de la veille règle plus de refus que n'importe quelle liste noire.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Quel taux de refus est normal en paiement à la livraison en Algérie ?", a: "Sans processus de confirmation, les vendeurs que nous rencontrons voient souvent un colis sur trois, parfois un sur deux, revenir. Avec confirmation, frais affichés, message de la veille et score, la plupart passent sous un colis sur six. Le chiffre dépend fortement du produit et des wilayas livrées." },
        { q: "Faut-il abandonner le paiement à la livraison ?", a: "Non, c'est le mode dominant et le supprimer ferait disparaître la majorité des ventes. Il faut arrêter d'expédier les commandes qui vont revenir, et demander un acompte seulement au-delà d'un montant ou aux numéros à risque." },
        { q: "Le point relais réduit-il les refus ?", a: "Oui, sensiblement, pour les clients qui le choisissent : le colis attend le client au lieu de l'inverse, et le refus à la porte disparaît. Proposez-le au moment de la commande, avec un prix de livraison plus bas." },
        { q: "Comment demander un acompte sans perdre des ventes ?", a: "Seulement au-delà d'un montant, ou aux numéros qui ont déjà refusé. Dix pour cent par lien de paiement CIB ou Edahabia, ou par BaridiMob. Le reste des clients ne voit jamais cette étape." },
        { q: "À partir de quand faut-il un système ?", a: "Autour de trente commandes par semaine. En dessous, le processus se tient à la main avec WhatsApp Business et une feuille. Au-dessus, on saute toujours une étape, et chaque étape sautée est un retour." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Tant que le client n'a rien payé, la commande n'est qu'une intention. Le travail consiste à ne plus expédier les intentions." },
      { after: 2, text: "Le client absent n'est presque jamais de mauvaise foi. Il ne savait pas que le colis arrivait aujourd'hui." },
    ],
    cta: { eyebrow: 'Dites-nous votre taux de refus', title: "Envoyez votre nombre de commandes par semaine, votre taux de retour et vos wilayas. Nous vous dirons quelles étapes du processus vous manquent et si un système se justifie déjà.", body: "Symloop construit des systèmes de commande et de livraison pour les vendeurs en ligne en Algérie : confirmation WhatsApp automatique, score par téléphone, acompte conditionnel CIB et Edahabia, intégration Yalidine, ZR Express et Maystro, tableau de bord des refus. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/', kind: 'Problème', name: "Je vends sur Instagram : ai-je besoin d'une application ?" },
      { href: '/blog/ecommerce-algerie-paiement-cib-edahabia-2024/', kind: 'Guide', name: 'Paiement en ligne CIB et Edahabia pour un site en Algérie' },
      { href: '/blog/application-livraison-sur-mesure-algerie-2026/', kind: 'Guide', name: 'Application de livraison sur mesure : les modules' },
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'Série · 04', name: 'Leboncoin et Vinted en Algérie : le paiement protégé' },
    ] },
  },
  en: {
    kind: 'Problem · E-commerce', title: 'Half my orders are refused at delivery: how to halve returns when you sell cash on delivery (Algeria, 2026).',
    dek: "You sell online, orders come in, you ship, and one order in two or three comes back: customer absent, unreachable, or refusing the parcel. Each return costs you the outbound trip, the return and sometimes the product. The six causes of refusal, the confirmation process that halves them, what a system does for you, and the numbers to track every week.",
    publishedAt: 'October 2026', readTime: '8 min read', author: 'Symloop', about: ['E-commerce', 'Cash on delivery', 'Refusal rate', 'Yalidine', 'Algeria'],
    intro: [
      "**Short answer.** Cash on delivery is the dominant payment method in Algeria and will remain so for years; the problem is not to remove it, it is to stop shipping the orders that will come back. **Four of the six causes of refusal are handled before shipping**: the impulse order, the order placed with several sellers, the delivery fee discovered at the door, and the customer who refuses out of habit. A simple process, confirmation within two hours, fees by wilaya shown before ordering, a score per phone number, a message the day before delivery, halves refusals for most of the sellers we work with. A system applies it for you from thirty orders a week.",
      "This guide extends our answer to [Instagram and WhatsApp sellers](/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/) and our [CIB and Edahabia online payment guide](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/). It is for any seller, Instagram shop, e-commerce site or brand, delivering cash on delivery.",
    ],
    sections: [
      { heading: 'Why a customer refuses a parcel they ordered themselves', body: [
        "Refusal at delivery is not an Algerian whim, it is a mechanical consequence of cash on delivery: as long as the customer has paid nothing, the order is only an intention. Every hour between the order and the door is an opportunity to change their mind, and the selling system has often done nothing to reduce it. Here are the six causes we find in our clients' returns, with the remedy for each.",
      ], visual: 'causes', after: [
        "The sixth cause deserves a word. In every shop we analysed, **a small minority of phone numbers concentrates a huge share of refusals**: customers who order everywhere, refuse everywhere, and start again. Spotting them does not require artificial intelligence, only a memory: a score per number, and a deposit required above a threshold.",
      ] },
      { heading: 'The confirmation process that halves refusals', body: [
        "The process fits in five steps. It is done by hand under thirty orders a week, and by a system above that, because by hand you always skip a step on the busy evening.",
      ], visual: 'flow', after: [
        "**Confirmation within two hours** is the step that counts most: an automatic WhatsApp message the customer answers with one word, then a call if the message goes unanswered. It eliminates impulse orders and duplicates, and allows a slot to be agreed. **The day-before message** is the second: the absent customer is almost never acting in bad faith, they simply did not know the parcel was arriving today. **Fees by wilaya shown before ordering** remove the refusal of the total at the door. The rest, pickup point, score, conditional deposit, consolidates.",
        "The deposit deserves precision. You do not ask everyone, that would lose half the sales. You ask above an amount, for expensive products for instance, and from numbers that have already refused. By CIB or Edahabia on a payment link, or by BaridiMob. A ten percent deposit is enough: it turns an intention into a commitment.",
      ] },
      { heading: 'What a system does for you', body: [
        "From thirty orders a week, the process no longer holds by hand. A light ordering system, the one we describe in our [custom delivery app guide](/blog/application-livraison-sur-mesure-algerie-2026/), applies it without omission.",
      ], visual: 'system', after: [
        "The component sellers underestimate is the last one: **the refusal-rate dashboard by wilaya, by product and by carrier.** Within two weeks it reveals that one wilaya costs you more than it brings, that one product comes back three times more than the others because its photo lies, or that one carrier loses your parcels on one line. These are decisions, not settings: stop home delivery in a wilaya and switch to pickup points, pull a product, change carrier on a line.",
        "Where AI helps: WhatsApp confirmation at any hour, in Arabic and French, that understands \"yes\", \"ok\", \"tomorrow\" or \"cancel\", and routes ambiguous answers to the call queue. It is a modest and very profitable use. Predicting refusal before the order, on the other hand, requires months of clean data: start by recording it.",
      ] },
      { heading: 'The numbers to track every week', body: [], list: [
        "**Confirmation rate**: confirmed orders over received orders. Under seventy percent, your form lets through too many empty orders.",
        "**Delivered refusal rate**: refused parcels over presented parcels. That is the number that costs; track it by wilaya, product, carrier.",
        "**Order-to-delivery time**: every extra day adds refusals. Beyond four days outside big cities, the customer has often bought elsewhere.",
        "**Share of repeat refusers**: refusals from already known numbers. If it exceeds a third, your score is not yet used to block.",
        "**Cost of a return**: outbound, return, restocking, damaged product. Put the number on the table, it justifies the system within a month.",
      ] },
      { heading: 'The mistakes we see among sellers', body: [], list: [
        "**Shipping without confirming because \"it is faster\".** The parcel leaves fast and comes back slowly, at your expense.",
        "**One delivery price for the whole country.** You lose money in the South and customers in Algiers, and you create the refusal of the total at the door.",
        "**Asking everyone for a deposit.** Half the sales disappear. The deposit is conditional: high amount or risky number.",
        "**Changing carrier without looking at numbers per line.** A carrier is good on one line and bad on another. Decide by wilaya.",
        "**Blaming the customer.** The absent customer did not know the parcel was coming. The day-before message fixes more refusals than any blacklist.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'What refusal rate is normal for cash on delivery in Algeria?', a: 'Without a confirmation process, the sellers we meet often see one parcel in three, sometimes one in two, come back. With confirmation, fees shown, day-before message and score, most drop below one in six. The number depends heavily on the product and the wilayas served.' },
        { q: 'Should we abandon cash on delivery?', a: 'No, it is the dominant method and removing it would make most sales disappear. You must stop shipping orders that will come back, and ask for a deposit only above an amount or from risky numbers.' },
        { q: 'Do pickup points reduce refusals?', a: 'Yes, noticeably, for customers who choose them: the parcel waits for the customer instead of the reverse, and refusal at the door disappears. Offer it at ordering time, with a lower delivery price.' },
        { q: 'How to ask for a deposit without losing sales?', a: 'Only above an amount, or from numbers that have already refused. Ten percent by CIB or Edahabia payment link, or by BaridiMob. The rest of the customers never see this step.' },
        { q: 'When do you need a system?', a: 'Around thirty orders a week. Below, the process holds by hand with WhatsApp Business and a sheet. Above, you always skip a step, and every skipped step is a return.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'As long as the customer has paid nothing, the order is only an intention. The job is to stop shipping intentions.' },
      { after: 2, text: 'The absent customer is almost never acting in bad faith. They did not know the parcel was arriving today.' },
    ],
    cta: { eyebrow: 'Tell us your refusal rate', title: 'Send your number of orders per week, your return rate and your wilayas. We will tell you which steps of the process you are missing and whether a system is already justified.', body: 'Symloop builds ordering and delivery systems for online sellers in Algeria: automatic WhatsApp confirmation, score per phone, conditional CIB and Edahabia deposit, Yalidine, ZR Express and Maystro integration, refusal dashboard. Senior engineers in Algiers and Sétif, written scope, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/', kind: 'Problem', name: 'I sell on Instagram: do I need an app?' },
      { href: '/blog/ecommerce-algerie-paiement-cib-edahabia-2024/', kind: 'Guide', name: 'CIB and Edahabia online payment for a site in Algeria' },
      { href: '/blog/application-livraison-sur-mesure-algerie-2026/', kind: 'Guide', name: 'Custom delivery app: the modules' },
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'Series · 04', name: 'Leboncoin and Vinted in Algeria: protected payment' },
    ] },
  },
  ar: {
    kind: 'مشكلة · التجارة الإلكترونية', title: 'نصف طلباتي تُرفض عند التسليم: كيف تقلّص المرتجعات إلى النصف عندما تبيع بالدفع عند التسليم (الجزائر، 2026).',
    dek: 'تبيع عبر الإنترنت، تصل الطلبات، تشحن، ويعود طلب من اثنين أو ثلاثة: عميل غائب، لا يُرد، أو يرفض الطرد. كل إرجاع يكلّفك الذهاب والعودة وأحياناً المنتج. أسباب الرفض الستة، عملية التأكيد التي تقلّصها إلى النصف، ما يفعله النظام نيابة عنك، والأرقام التي تتابعها كل أسبوع.',
    publishedAt: 'أكتوبر 2026', readTime: '8 دقائق قراءة', author: 'سيملوب', about: ['التجارة الإلكترونية', 'الدفع عند التسليم', 'نسبة الرفض', 'Yalidine', 'الجزائر'],
    intro: [
      '**الجواب المختصر.** الدفع عند التسليم هو الطريقة المهيمنة في الجزائر وسيبقى كذلك سنوات؛ المشكلة ليست إلغاءه بل التوقف عن شحن الطلبات التي ستعود. **أربعة من أسباب الرفض الستة تُعالج قبل الشحن**: الطلب الاندفاعي، الطلب من عدة بائعين، سعر التوصيل المكتشف عند الباب، والعميل الذي يرفض بالعادة. عملية بسيطة، تأكيد خلال ساعتين، رسوم حسب الولاية معروضة قبل الطلب، نقاط لكل رقم هاتف، رسالة عشية التسليم، تقلّص الرفض إلى النصف لدى أغلب البائعين الذين نرافقهم. ويطبّقها النظام نيابة عنك ابتداءً من ثلاثين طلباً أسبوعياً.',
      'يمدّد هذا الدليل جوابنا [لبائعي إنستغرام وواتساب](/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/) و[دليل الدفع الإلكتروني CIB والذهبية](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/). يتوجه إلى كل بائع، متجر إنستغرام أو موقع تجارة إلكترونية أو علامة، يوصّل بالدفع عند التسليم.',
    ],
    sections: [
      { heading: 'لماذا يرفض العميل طرداً طلبه بنفسه', body: ['الرفض عند التسليم ليس نزوة جزائرية بل نتيجة ميكانيكية للدفع عند التسليم: ما دام العميل لم يدفع شيئاً فالطلب مجرد نية. كل ساعة بين الطلب والباب فرصة لتغيير الرأي، ونظام البيع غالباً لم يفعل شيئاً لتقليصها. إليك الأسباب الستة التي نجدها في مرتجعات عملائنا مع علاج كل منها.'], visual: 'causes', after: ['السبب السادس يستحق كلمة. في كل المتاجر التي حلّلناها، **أقلية صغيرة من أرقام الهاتف تركّز حصة ضخمة من الرفض**: عملاء يطلبون في كل مكان ويرفضون في كل مكان ويعيدون. رصدهم لا يتطلب ذكاءً اصطناعياً بل ذاكرة فقط: نقاط لكل رقم، وعربون مطلوب فوق حد.'] },
      { heading: 'عملية التأكيد التي تقلّص الرفض إلى النصف', body: ['تكتفي العملية بخمس خطوات. تتم يدوياً تحت ثلاثين طلباً أسبوعياً، وبنظام فوق ذلك، لأنك يدوياً تتجاوز دائماً خطوة في المساء المزدحم.'], visual: 'flow', after: [
        '**التأكيد خلال ساعتين** هو الخطوة الأهم: رسالة واتساب تلقائية يجيب عنها العميل بكلمة، ثم مكالمة إن بقيت بلا رد. تُقصي الطلبات الاندفاعية والتكرارات وتتيح الاتفاق على فترة. **رسالة العشية** هي الثانية: العميل الغائب نادراً ما يكون سيئ النية، هو عميل لم يعرف أن الطرد يصل اليوم. **الرسوم حسب الولاية المعروضة قبل الطلب** تزيل رفض الإجمالي عند الباب. والباقي، نقطة الاستلام والنقاط والعربون المشروط، يعزّز.',
        'العربون يستحق توضيحاً. لا تطلبه من الجميع، فذلك يخسر نصف المبيعات. تطلبه فوق مبلغ معين، للمنتجات الغالية مثلاً، ومن الأرقام التي رفضت سابقاً. بـCIB أو الذهبية عبر رابط دفع، أو بـBaridiMob. عربون عشرة في المئة يكفي: يحوّل النية إلى التزام.',
      ] },
      { heading: 'ما يفعله النظام نيابة عنك', body: ['ابتداءً من ثلاثين طلباً أسبوعياً لا تصمد العملية يدوياً. نظام طلب خفيف، الذي نصفه في [دليل تطبيق التوصيل حسب الطلب](/blog/application-livraison-sur-mesure-algerie-2026/)، يطبّقها بلا نسيان.'], visual: 'system', after: [
        'المكوّن الذي يستهين به البائعون هو الأخير: **لوحة نسبة الرفض حسب الولاية والمنتج والناقل.** تكشف خلال أسبوعين أن ولاية تكلّفك أكثر مما تجلب، وأن منتجاً يعود ثلاث مرات أكثر من غيره لأن صورته تكذب، أو أن ناقلاً يضيّع طرودك على خط. هذه قرارات لا إعدادات: التوقف عن التوصيل للمنزل في ولاية والانتقال إلى نقطة الاستلام، سحب منتج، تغيير الناقل على خط.',
        'أين يساعد الذكاء الاصطناعي: التأكيد عبر واتساب في أي ساعة بالعربية والفرنسية، يفهم «نعم» و«ok» و«غداً» و«ألغِ»، ويوجّه الأجوبة الملتبسة إلى طابور المكالمات. استخدام متواضع ومربح جداً. أما توقّع الرفض قبل الطلب فيتطلب أشهراً من بيانات نظيفة: ابدأ بتسجيلها.',
      ] },
      { heading: 'الأرقام التي تتابعها كل أسبوع', body: [], list: [
        '**نسبة التأكيد**: الطلبات المؤكدة على الطلبات المستلمة. تحت سبعين في المئة يمرّر نموذجك طلبات فارغة كثيرة.',
        '**نسبة الرفض عند التسليم**: الطرود المرفوضة على الطرود المقدَّمة. هذا الرقم الذي يكلّف؛ تابعه حسب الولاية والمنتج والناقل.',
        '**مدة من الطلب إلى التسليم**: كل يوم إضافي يضيف رفضاً. فوق أربعة أيام خارج المدن الكبرى غالباً ما اشترى العميل من مكان آخر.',
        '**حصة المعتادين**: رفض من أرقام معروفة. إن تجاوزت الثلث فنقاطك لا تُستعمل بعد للحجب.',
        '**تكلفة الإرجاع**: ذهاب، عودة، إعادة تخزين، منتج تالف. ضع الرقم على الطاولة، يبرّر النظام في شهر.',
      ] },
      { heading: 'الأخطاء التي نراها لدى البائعين', body: [], list: [
        '**الشحن دون تأكيد لأن «ذلك أسرع».** يغادر الطرد سريعاً ويعود ببطء على حسابك.',
        '**سعر توصيل واحد لكل البلاد.** تخسر المال في الجنوب والعملاء في العاصمة وتخلق رفض الإجمالي عند الباب.',
        '**طلب عربون من الجميع.** يختفي نصف المبيعات. العربون مشروط: مبلغ مرتفع أو رقم خطر.',
        '**تغيير الناقل دون النظر في الأرقام لكل خط.** الناقل جيد على خط وسيئ على آخر. قرّر حسب الولاية.',
        '**لوم العميل.** العميل الغائب لم يعرف أن الطرد قادم. رسالة العشية تحل رفضاً أكثر من أي قائمة سوداء.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'ما نسبة الرفض الطبيعية في الدفع عند التسليم في الجزائر؟', a: 'بلا عملية تأكيد، يرى البائعون الذين نلتقيهم غالباً عودة طرد من ثلاثة وأحياناً من اثنين. مع التأكيد والرسوم المعروضة ورسالة العشية والنقاط ينزل أغلبهم تحت طرد من ستة. يعتمد الرقم كثيراً على المنتج والولايات المخدومة.' },
        { q: 'هل نتخلى عن الدفع عند التسليم؟', a: 'لا، هو الطريقة المهيمنة وإلغاؤه يُفقد أغلب المبيعات. يجب التوقف عن شحن الطلبات التي ستعود، وطلب عربون فقط فوق مبلغ أو من الأرقام الخطرة.' },
        { q: 'هل تقلّل نقطة الاستلام الرفض؟', a: 'نعم بوضوح لمن يختارونها: ينتظر الطرد العميل بدل العكس ويختفي الرفض عند الباب. اقترحها عند الطلب بسعر توصيل أدنى.' },
        { q: 'كيف أطلب عربوناً دون خسارة مبيعات؟', a: 'فقط فوق مبلغ، أو من الأرقام التي رفضت سابقاً. عشرة في المئة عبر رابط دفع CIB أو الذهبية أو BaridiMob. باقي العملاء لا يرون هذه الخطوة أبداً.' },
        { q: 'متى أحتاج نظاماً؟', a: 'حوالي ثلاثين طلباً أسبوعياً. تحته تصمد العملية يدوياً بـWhatsApp Business وورقة. فوقه تتجاوز دائماً خطوة، وكل خطوة متجاوزة إرجاع.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'ما دام العميل لم يدفع شيئاً فالطلب مجرد نية. العمل هو التوقف عن شحن النوايا.' },
      { after: 2, text: 'العميل الغائب نادراً ما يكون سيئ النية. لم يعرف أن الطرد يصل اليوم.' },
    ],
    cta: { eyebrow: 'أخبرنا بنسبة رفضك', title: 'أرسل عدد طلباتك الأسبوعية ونسبة المرتجعات وولاياتك. سنخبرك بالخطوات الناقصة في عمليتك وإن كان النظام مبرراً أصلاً.', body: 'تبني سيملوب أنظمة الطلب والتوصيل للبائعين عبر الإنترنت في الجزائر: تأكيد واتساب تلقائي، نقاط لكل هاتف، عربون مشروط CIB والذهبية، تكامل Yalidine وZR Express وMaystro، لوحة الرفض. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026/', kind: 'مشكلة', name: 'أبيع على إنستغرام: هل أحتاج تطبيقاً؟' },
      { href: '/blog/ecommerce-algerie-paiement-cib-edahabia-2024/', kind: 'دليل', name: 'الدفع الإلكتروني CIB والذهبية لموقع في الجزائر' },
      { href: '/blog/application-livraison-sur-mesure-algerie-2026/', kind: 'دليل', name: 'تطبيق توصيل حسب الطلب: الوحدات' },
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'سلسلة · 04', name: 'Leboncoin وVinted في الجزائر: الدفع المحمي' },
    ] },
  },
};

const KEYWORDS = "commandes annulées à la livraison algérie, taux de refus paiement à la livraison, colis refusé yalidine que faire, réduire les retours e-commerce algérie, confirmation commande whatsapp automatique, acompte paiement à la livraison, livraison algérie refus client, cash on delivery refusal rate algeria, رفض الطرد عند التسليم الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
