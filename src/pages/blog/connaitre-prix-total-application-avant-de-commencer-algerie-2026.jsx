import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/connaitre-prix-total-application-avant-de-commencer-algerie-2026.mjs';

const SLUG = 'connaitre-prix-total-application-avant-de-commencer-algerie-2026';
const FIGURES = ['factors', 'scoping', 'milestones', 'categories'];
const DATE = '2026-10-28';

const CONTENT = {
  fr: {
    kind: 'Problème · Budget', title: "Peut-on connaître le prix total de mon application avant de commencer ? La réponse honnête (Algérie, 2026).",
    dek: "C'est la question que tout porteur de projet pose, souvent avant même de décrire le projet. Oui, le prix total peut être connu et fixé avant de commencer, à une condition : que le périmètre soit écrit. Ce qui fait bouger le prix, comment deux semaines de cadrage le fixent, comment il se paie, et comment lire un devis.",
    publishedAt: 'Octobre 2026', readTime: '8 min de lecture', author: 'Symloop', about: ['Prix application mobile', 'Cadrage', 'Devis', 'Algérie'],
    intro: [
      "**Réponse courte.** Oui, à une condition. Personne ne peut donner un prix total honnête sur une idée, parce que le prix dépend de choses que l'idée ne dit pas : le nombre de rôles utilisateurs, les intégrations de paiement et de livraison, les données à reprendre, les langues, le mode hors connexion. Quiconque vous donne un total « de 0 à la fin » après un message WhatsApp l'ajustera plus tard. En revanche, **un périmètre écrit**, produit par un cadrage d'une à deux semaines, permet un **prix fixe, payé par jalons**, avec une règle claire pour les changements. Avant même ce cadrage, une grille publique par catégorie vous dit dans quelle fourchette vous êtes.",
      "Ce guide répond à une question qu'un commerçant nous a posée en arabe, mot pour mot : « est-ce que je peux savoir à l'avance combien coûtera le développement complet, de zéro jusqu'à la fin ? ». Voici la réponse complète, valable quelle que soit l'équipe que vous choisirez.",
    ],
    sections: [
      { heading: "Pourquoi « ça dépend » est vrai, et pourquoi ce n'est pas une réponse", body: [
        "Une application n'a pas de prix au mètre carré. Deux projets décrits par la même phrase, « une application de livraison », peuvent coûter du simple au quintuple selon ce qu'ils contiennent. Ce n'est pas une excuse de prestataire, c'est la réalité du métier, et vous pouvez la vérifier : les huit facteurs ci-dessous expliquent presque tout l'écart entre deux devis.",
      ], visual: 'factors', after: [
        "Les deux premiers facteurs dominent. **Chaque rôle utilisateur est une application de plus**, avec ses écrans, ses règles et ses tests. **Chaque intégration algérienne**, CIB et Edahabia via SATIM, Yalidine, SMS opérateur, est un mini-projet avec sa documentation, ses tests et son support. Les six autres font varier le prix de vingt à cinquante pour cent chacun. Aucun ne se devine à partir d'une idée. Tous se lisent dans un périmètre écrit.",
        "C'est pour cela que « ça dépend » est vrai. Et c'est pour cela que ce n'est pas une réponse : la réponse, c'est le document qui enlève le « ça dépend ».",
      ] },
      { heading: 'Le cadrage : deux semaines qui transforment une estimation en prix', body: [
        "Le cadrage est la phase où l'on écrit ce que l'application fait, et surtout ce qu'elle ne fait pas. Il dure une à deux semaines selon la taille du projet, se fait à distance, et produit un document que vous pouvez relire, contester et faire chiffrer par qui vous voulez.",
      ], visual: 'scoping', after: [
        "Le livrable contient au minimum : la liste des écrans par rôle, les règles métier en phrases simples, les intégrations avec leurs prérequis, les données à reprendre et leur état, les langues, ce qui est explicitement hors périmètre, et le calendrier par jalon avec un montant par jalon. **Ce document vous appartient.** Un prestataire qui refuse de vous le remettre vous dit quelque chose.",
        "Si le prestataire facture le cadrage, c'est normal : c'est du travail d'ingénierie. Ce qui compte est que le montant soit annoncé d'avance et que le document soit à vous à la fin, que vous continuiez avec lui ou non.",
      ] },
      { heading: "Un prix fixe se paie par jalons, jamais d'avance", body: [
        "Un prix fixe n'est pas une promesse, c'est une structure. Il se découpe en jalons qui ont chacun un livrable visible et un montant. Vous voyez le livrable avant de payer le jalon. Voici la structure que nous appliquons et que vous pouvez exiger de n'importe quelle équipe.",
      ], visual: 'milestones', after: [
        "**Et si je change d'avis en cours de route ?** C'est fréquent et c'est sain : on comprend mieux son produit en le voyant. La règle est simple : un changement de périmètre se décrit par écrit, se chiffre à part, et vous l'acceptez ou non avant qu'il soit fait. Le prix fixe reste fixe pour le périmètre initial. Ce qui fait exploser les budgets, ce ne sont pas les changements, c'est l'absence de cette règle. C'est la même logique que dans notre [guide du fondateur de la diaspora](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/) : cadrage écrit, jalons, propriété du code.",
      ] },
      { heading: 'Se situer avant le cadrage : la grille par catégorie', body: [
        "Vous n'avez pas besoin d'un cadrage pour savoir dans quelle fourchette vous êtes. Nous publions une [grille de prix par catégorie d'application](/blog/prix-application-mobile-algerie-2026/), en dinars, avec ce qui est inclus et ce qui ne l'est pas. Elle sert à une chose : vérifier que votre budget et votre projet sont dans la même catégorie avant de passer du temps à cadrer.",
      ], visual: 'categories', after: [
        "Trois coûts n'apparaissent dans aucun total de développement et doivent être budgétés à part : la maintenance annuelle, en général quinze à vingt-cinq pour cent du coût initial, les comptes développeur Apple et Google, et l'hébergement du backend. Un devis qui ne les mentionne pas n'est pas faux, il est incomplet.",
      ] },
      { heading: "Comment lire un devis, et repérer celui qui va bouger", body: [], list: [
        "**Pas de périmètre annexé ?** C'est une estimation, pas un prix. Demandez la liste des écrans et des intégrations.",
        "**Un « forfait » sans jalons ?** Vous paierez sans voir. Exigez un livrable par paiement.",
        "**Rien sur la maintenance, les stores, l'hébergement ?** Le total est incomplet, ajoutez-les vous-même avant de comparer.",
        "**La propriété du code et des comptes n'est pas écrite ?** Elle doit l'être, à votre nom, dès le contrat.",
        "**Un prix très en dessous des autres ?** En général, le périmètre chiffré est plus petit que le vôtre. Comparez les périmètres, pas les totaux.",
        "**Un paiement intégral d'avance ?** Non. Le cadrage, oui ; le reste par jalons.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Peut-on avoir un prix sans cadrage ?", a: "Une fourchette par catégorie, oui, c'est ce que donne la grille publique. Un prix total, non : il dépend d'un périmètre que seul le cadrage écrit." },
        { q: "Le prix peut-il changer après le cadrage ?", a: "Seulement si vous changez le périmètre, par écrit, et après avoir accepté le chiffrage du changement. Le prix du périmètre initial ne bouge pas." },
        { q: "Combien de temps dure le cadrage ?", a: "Une à deux semaines selon la taille du projet, à distance, avec deux ou trois ateliers et un document écrit à la fin." },
        { q: "Je suis en France, comment se passe la facturation ?", a: "Devis et factures en euros, contrat clair, paiement par jalons. Toute équipe sérieuse en Algérie travaille ainsi avec ses clients établis en Europe." },
        { q: "Que couvre le prix après la livraison ?", a: "La période de garantie incluse dans le dernier jalon, en général trente jours de corrections. Ensuite, la maintenance annuelle se contracte à part, autour de quinze à vingt-cinq pour cent du coût initial." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Personne ne peut donner un prix total sur une idée. Tout le monde peut en donner un sur un périmètre écrit." },
      { after: 2, text: "Un prix fixe n'est pas une promesse. C'est un document." },
    ],
    cta: { eyebrow: 'Envoyez votre idée en cinq lignes', title: "Nous vous dirons dans quelle catégorie elle tombe, et ce qu'un cadrage devrait contenir pour la chiffrer au dinar près.", body: "Symloop cadre et développe des applications mobiles, des plateformes web et des systèmes d'IA pour des entreprises en Algérie et des fondateurs établis en France. Cadrage écrit qui vous appartient, prix fixe par jalons, code à votre nom. Ingénieurs seniors à Alger et Sétif." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/prix-application-mobile-algerie-2026/', kind: 'Guide prix', name: 'Combien coûte une application mobile en Algérie en 2026, par catégorie' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Guide fondateur', name: 'Lancer une startup tech en Algérie depuis la France' },
      { href: '/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/', kind: 'Problème', name: 'Mon agence immobilière tourne sur WhatsApp et Google Sheets' },
      { href: '/insights/cost/', kind: 'Insight', name: 'Le vrai coût du développement logiciel en Algérie' },
    ] },
  },
  en: {
    kind: 'Problem · Budget', title: 'Can I know the total price of my app before starting? The honest answer (Algeria, 2026).',
    dek: "It is the question every project owner asks, often before describing the project. Yes, the total price can be known and fixed before starting, on one condition: the scope must be written. What moves the price, how two weeks of scoping fix it, how it is paid, and how to read a quote.",
    publishedAt: 'October 2026', readTime: '8 min read', author: 'Symloop', about: ['Mobile app price', 'Scoping', 'Quote', 'Algeria'],
    intro: [
      "**Short answer.** Yes, on one condition. Nobody can give an honest total price on an idea, because the price depends on things the idea does not say: the number of user roles, payment and delivery integrations, data to import, languages, offline mode. Anyone who gives you a \"zero to the end\" total after a WhatsApp message will adjust it later. On the other hand, **a written scope**, produced by one to two weeks of scoping, allows a **fixed price, paid by milestones**, with a clear rule for changes. Even before that scoping, a public grid by category tells you which range you are in.",
      "This guide answers a question a shop owner asked us in Arabic, word for word: \"can I know in advance how much the complete development will cost, from zero to the end?\". Here is the complete answer, valid whatever team you choose.",
    ],
    sections: [
      { heading: 'Why "it depends" is true, and why it is not an answer', body: [
        "An app has no price per square metre. Two projects described by the same sentence, \"a delivery app\", can cost five times more or less depending on what they contain. That is not a vendor's excuse, it is the reality of the trade, and you can check it: the eight factors below explain almost all the gap between two quotes.",
      ], visual: 'factors', after: [
        "The first two factors dominate. **Each user role is one more app**, with its screens, rules and tests. **Each Algerian integration**, CIB and Edahabia through SATIM, Yalidine, carrier SMS, is a mini-project with its documentation, tests and support. The other six each move the price by twenty to fifty percent. None can be guessed from an idea. All can be read in a written scope.",
        "That is why \"it depends\" is true. And that is why it is not an answer: the answer is the document that removes the \"it depends\".",
      ] },
      { heading: 'Scoping: two weeks that turn an estimate into a price', body: [
        "Scoping is the phase where you write down what the app does, and above all what it does not do. It lasts one to two weeks depending on project size, happens remotely, and produces a document you can re-read, challenge and have priced by whoever you want.",
      ], visual: 'scoping', after: [
        "The deliverable contains at least: the screen list per role, business rules in plain sentences, integrations with their prerequisites, data to import and its state, languages, what is explicitly out of scope, and the milestone calendar with an amount per milestone. **This document belongs to you.** A vendor who refuses to hand it over is telling you something.",
        "If the vendor charges for scoping, that is normal: it is engineering work. What matters is that the amount is announced upfront and that the document is yours at the end, whether you continue with them or not.",
      ] },
      { heading: 'A fixed price is paid by milestones, never upfront', body: [
        "A fixed price is not a promise, it is a structure. It is split into milestones that each have a visible deliverable and an amount. You see the deliverable before you pay the milestone. Here is the structure we apply and that you can demand from any team.",
      ], visual: 'milestones', after: [
        "**What if I change my mind along the way?** It is frequent and healthy: you understand your product better when you see it. The rule is simple: a scope change is described in writing, priced separately, and you accept it or not before it is done. The fixed price stays fixed for the initial scope. What blows up budgets is not the changes, it is the absence of that rule. It is the same logic as in our [diaspora founder's guide](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/): written scope, milestones, code ownership.",
      ] },
      { heading: 'Placing yourself before scoping: the grid by category', body: [
        "You do not need scoping to know which range you are in. We publish a [price grid by app category](/blog/prix-application-mobile-algerie-2026/), in dinars, with what is included and what is not. It serves one purpose: checking that your budget and your project are in the same category before spending time on scoping.",
      ], visual: 'categories', after: [
        "Three costs appear in no development total and must be budgeted separately: annual maintenance, usually fifteen to twenty-five percent of the initial cost, the Apple and Google developer accounts, and backend hosting. A quote that does not mention them is not wrong, it is incomplete.",
      ] },
      { heading: 'How to read a quote, and spot the one that will move', body: [], list: [
        "**No scope attached?** It is an estimate, not a price. Ask for the list of screens and integrations.",
        "**A \"package\" without milestones?** You will pay without seeing. Demand a deliverable per payment.",
        "**Nothing on maintenance, stores, hosting?** The total is incomplete, add them yourself before comparing.",
        "**Code and account ownership not written?** It must be, in your name, from the contract.",
        "**A price far below the others?** Usually the priced scope is smaller than yours. Compare scopes, not totals.",
        "**Full payment upfront?** No. Scoping, yes; the rest by milestones.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Can I get a price without scoping?', a: 'A range by category, yes, that is what the public grid gives. A total price, no: it depends on a scope that only scoping writes down.' },
        { q: 'Can the price change after scoping?', a: 'Only if you change the scope, in writing, and after accepting the price of the change. The price of the initial scope does not move.' },
        { q: 'How long does scoping take?', a: 'One to two weeks depending on project size, remotely, with two or three workshops and a written document at the end.' },
        { q: 'I am in France, how does invoicing work?', a: 'Quotes and invoices in euros, a clear contract, milestone payments. Any serious team in Algeria works this way with clients based in Europe.' },
        { q: 'What does the price cover after delivery?', a: 'The warranty period included in the last milestone, usually thirty days of fixes. Then annual maintenance is contracted separately, around fifteen to twenty-five percent of the initial cost.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'Nobody can give a total price on an idea. Everybody can give one on a written scope.' },
      { after: 2, text: 'A fixed price is not a promise. It is a document.' },
    ],
    cta: { eyebrow: 'Send your idea in five lines', title: 'We will tell you which category it falls in, and what a scoping should contain to price it to the dinar.', body: 'Symloop scopes and builds mobile apps, web platforms and AI systems for companies in Algeria and founders based in France. Written scope that belongs to you, fixed price by milestones, code in your name. Senior engineers in Algiers and Sétif.' },
    related: { label: 'Read next', items: [
      { href: '/blog/prix-application-mobile-algerie-2026/', kind: 'Pricing guide', name: 'How much does a mobile app cost in Algeria in 2026, by category' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Founder guide', name: 'Launching a tech startup in Algeria from France' },
      { href: '/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/', kind: 'Problem', name: 'My real-estate agency runs on WhatsApp and Google Sheets' },
      { href: '/insights/cost/', kind: 'Insight', name: 'The real cost of building software in Algeria' },
    ] },
  },
  ar: {
    kind: 'مشكلة · الميزانية', title: 'هل يمكنني معرفة السعر الإجمالي لتطبيقي قبل البدء؟ الجواب الصادق (الجزائر، 2026).',
    dek: 'هو السؤال الذي يطرحه كل صاحب مشروع، غالباً قبل أن يصف مشروعه. نعم، يمكن معرفة السعر الإجمالي وتثبيته قبل البدء بشرط واحد: أن يكون النطاق مكتوباً. ما الذي يحرّك السعر، كيف يثبّته أسبوعان من التأطير، كيف يُدفع، وكيف تقرأ عرض سعر.',
    publishedAt: 'أكتوبر 2026', readTime: '8 دقائق قراءة', author: 'سيملوب', about: ['سعر تطبيق الجوال', 'التأطير', 'عرض السعر', 'الجزائر'],
    intro: [
      '**الجواب المختصر.** نعم، بشرط واحد. لا أحد يستطيع إعطاء سعر إجمالي صادق على فكرة، لأن السعر يعتمد على أشياء لا تقولها الفكرة: عدد أدوار المستخدمين، تكاملات الدفع والتوصيل، البيانات المسترجعة، اللغات، العمل دون اتصال. من يعطيك إجمالياً «من الصفر إلى النهاية» بعد رسالة واتساب سيعدّله لاحقاً. في المقابل، **النطاق المكتوب** الناتج عن تأطير من أسبوع إلى أسبوعين يسمح بـ**سعر ثابت يُدفع حسب المراحل**، بقاعدة واضحة للتغييرات. وحتى قبل هذا التأطير، شبكة علنية حسب الفئة تخبرك في أي نطاق سعري أنت.',
      'يجيب هذا الدليل عن سؤال طرحه علينا تاجر بالعربية بالحرف: «هل أستطيع أن أعرف مسبقاً بكم التطوير الكلي من الصفر إلى الآخر؟». هذا هو الجواب الكامل، صالح أياً كان الفريق الذي تختاره.',
    ],
    sections: [
      { heading: 'لماذا «يعتمد» صحيح، ولماذا ليس جواباً', body: ['ليس للتطبيق سعر بالمتر المربع. مشروعان توصفهما الجملة نفسها، «تطبيق توصيل»، قد يكلّفان من واحد إلى خمسة أضعاف حسب ما يحتويان. ليس هذا عذر مزوّد، بل واقع المهنة، ويمكنك التحقق منه: العوامل الثمانية أدناه تفسّر تقريباً كل الفارق بين عرضين.'], visual: 'factors', after: [
        'العاملان الأولان يهيمنان. **كل دور مستخدم هو تطبيق إضافي** بشاشاته وقواعده واختباراته. **كل تكامل جزائري**، CIB والذهبية عبر SATIM، Yalidine، رسائل المشغّل، هو مشروع مصغّر بوثائقه واختباراته ودعمه. العوامل الستة الأخرى يحرّك كل منها السعر بين عشرين وخمسين في المئة. لا يمكن تخمين أي منها من فكرة. وكلها تُقرأ في نطاق مكتوب.',
        'لهذا «يعتمد» صحيح. ولهذا ليس جواباً: الجواب هو الوثيقة التي تزيل «يعتمد».',
      ] },
      { heading: 'التأطير: أسبوعان يحوّلان التقدير إلى سعر', body: ['التأطير هو المرحلة التي نكتب فيها ما يفعله التطبيق، وخصوصاً ما لا يفعله. يدوم من أسبوع إلى أسبوعين حسب حجم المشروع، يتم عن بعد، وينتج وثيقة يمكنك إعادة قراءتها والاعتراض عليها وطلب تسعيرها ممن تشاء.'], visual: 'scoping', after: [
        'يحتوي المخرج كحد أدنى على: قائمة الشاشات لكل دور، قواعد العمل بجمل بسيطة، التكاملات بشروطها، البيانات المسترجعة وحالتها، اللغات، ما هو خارج النطاق صراحة، وجدول المراحل بمبلغ لكل مرحلة. **هذه الوثيقة ملكك.** المزوّد الذي يرفض تسليمها لك يقول لك شيئاً.',
        'إن فوتر المزوّد التأطير فهذا طبيعي: إنه عمل هندسي. المهم أن يُعلن المبلغ مسبقاً وأن تكون الوثيقة لك في النهاية، سواء واصلت معه أم لا.',
      ] },
      { heading: 'السعر الثابت يُدفع حسب المراحل، لا مقدّماً أبداً', body: ['السعر الثابت ليس وعداً بل هيكل. يُقسَّم إلى مراحل لكل منها مخرج مرئي ومبلغ. ترى المخرج قبل أن تدفع المرحلة. هذا هو الهيكل الذي نطبّقه والذي يمكنك أن تطلبه من أي فريق.'], visual: 'milestones', after: [
        '**وماذا لو غيّرت رأيي في الطريق؟** هذا شائع وصحي: تفهم منتجك أفضل عندما تراه. القاعدة بسيطة: تغيير النطاق يُوصف كتابياً ويُسعَّر على حدة وتقبله أو لا قبل تنفيذه. يبقى السعر الثابت ثابتاً للنطاق الأولي. ما يفجّر الميزانيات ليس التغييرات بل غياب هذه القاعدة. هو المنطق نفسه في [دليل مؤسس الجالية](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/): تأطير مكتوب، مراحل، ملكية الكود.',
      ] },
      { heading: 'تحديد موقعك قبل التأطير: الشبكة حسب الفئة', body: ['لا تحتاج تأطيراً لتعرف في أي نطاق سعري أنت. ننشر [شبكة أسعار حسب فئة التطبيق](/blog/prix-application-mobile-algerie-2026/) بالدينار، مع ما هو مشمول وما ليس كذلك. تخدم غرضاً واحداً: التحقق من أن ميزانيتك ومشروعك في الفئة نفسها قبل قضاء وقت في التأطير.'], visual: 'categories', after: [
        'ثلاث تكاليف لا تظهر في أي إجمالي تطوير ويجب تخصيص ميزانية لها على حدة: الصيانة السنوية، عادة بين خمسة عشر وخمسة وعشرين في المئة من التكلفة الأولية، حسابا المطوّر لدى Apple وGoogle، واستضافة الخلفية. عرض السعر الذي لا يذكرها ليس خاطئاً بل ناقص.',
      ] },
      { heading: 'كيف تقرأ عرض سعر، وتكشف الذي سيتغير', body: [], list: [
        '**لا نطاق مرفق؟** هذا تقدير لا سعر. اطلب قائمة الشاشات والتكاملات.',
        '**«باقة» بلا مراحل؟** ستدفع دون أن ترى. اشترط مخرجاً لكل دفعة.',
        '**لا شيء عن الصيانة والمتاجر والاستضافة؟** الإجمالي ناقص، أضفها بنفسك قبل المقارنة.',
        '**ملكية الكود والحسابات غير مكتوبة؟** يجب أن تُكتب باسمك منذ العقد.',
        '**سعر أدنى بكثير من الآخرين؟** غالباً النطاق المسعَّر أصغر من نطاقك. قارن النطاقات لا الإجماليات.',
        '**دفع كامل مقدّماً؟** لا. التأطير نعم، والباقي حسب المراحل.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'هل يمكن الحصول على سعر دون تأطير؟', a: 'نطاق سعري حسب الفئة، نعم، وهذا ما تعطيه الشبكة العلنية. سعر إجمالي، لا: يعتمد على نطاق لا يكتبه إلا التأطير.' },
        { q: 'هل يمكن أن يتغير السعر بعد التأطير؟', a: 'فقط إذا غيّرت النطاق كتابياً وبعد قبول تسعير التغيير. سعر النطاق الأولي لا يتحرك.' },
        { q: 'كم يدوم التأطير؟', a: 'من أسبوع إلى أسبوعين حسب حجم المشروع، عن بعد، بورشتين أو ثلاث ووثيقة مكتوبة في النهاية.' },
        { q: 'أنا في فرنسا، كيف تتم الفوترة؟', a: 'عروض وفواتير باليورو، عقد واضح، دفع حسب المراحل. كل فريق جاد في الجزائر يعمل هكذا مع عملائه المقيمين في أوروبا.' },
        { q: 'ماذا يغطي السعر بعد التسليم؟', a: 'فترة الضمان المشمولة في المرحلة الأخيرة، عادة ثلاثون يوماً من التصحيحات. ثم تُتعاقد الصيانة السنوية على حدة، حوالي خمسة عشر إلى خمسة وعشرين في المئة من التكلفة الأولية.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'لا أحد يستطيع إعطاء سعر إجمالي على فكرة. الجميع يستطيع إعطاءه على نطاق مكتوب.' },
      { after: 2, text: 'السعر الثابت ليس وعداً. إنه وثيقة.' },
    ],
    cta: { eyebrow: 'أرسل فكرتك في خمسة أسطر', title: 'سنخبرك في أي فئة تقع، وما الذي يجب أن يحتويه التأطير لتسعيرها بالدينار.', body: 'تؤطّر سيملوب وتطوّر تطبيقات الجوال والمنصات الويب وأنظمة الذكاء الاصطناعي لشركات في الجزائر ومؤسسين مقيمين في فرنسا. تأطير مكتوب يعود إليك، سعر ثابت حسب المراحل، كود باسمك. مهندسون خبراء في الجزائر وسطيف.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/prix-application-mobile-algerie-2026/', kind: 'دليل أسعار', name: 'كم يكلف تطبيق جوال في الجزائر في 2026، حسب الفئة' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'دليل المؤسس', name: 'إطلاق شركة تقنية ناشئة في الجزائر انطلاقاً من فرنسا' },
      { href: '/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/', kind: 'مشكلة', name: 'وكالتي العقارية تشتغل على واتساب وGoogle Sheets' },
      { href: '/insights/cost/', kind: 'رؤية', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' },
    ] },
  },
};

const KEYWORDS = "prix total application avant de commencer, combien coûte une application devis, cadrage application mobile prix fixe, devis application mobile algérie, prix fixe développement application, comment lire un devis application, سعر التطبيق قبل البدء, fixed price app development algeria";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
