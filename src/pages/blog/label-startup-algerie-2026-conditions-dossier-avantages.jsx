import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/label-startup-algerie-2026-conditions-dossier-avantages.mjs';

const SLUG = 'label-startup-algerie-2026-conditions-dossier-avantages';
const FIGURES = ['criteria', 'process', 'benefits', 'timeline'];
const DATE = '2026-10-29';

const CONTENT = {
  fr: {
    kind: 'Guide fondateur · Label startup', title: "Comment obtenir le label startup en Algérie en 2026 : conditions, dossier, avantages fiscaux, renouvellement, et pourquoi il faut un produit avant.",
    dek: "« Comment avoir le label startup », « dossier label startup », « avantage label startup », « renouvellement » : ce sont les questions que les fondateurs posent chaque semaine. Les conditions d'éligibilité, le parcours sur startup.dz, ce que le label apporte d'après les textes cités par les sources publiques, les délais réalistes, et l'erreur qui fait perdre six mois : déposer avec une idée.",
    publishedAt: 'Octobre 2026', readTime: '9 min de lecture', author: 'Symloop', about: ['Label startup', 'startup.dz', 'Fiscalité', 'Création de startup', 'Algérie'],
    intro: [
      "**Réponse courte.** Le label startup algérien s'obtient auprès du comité national de labellisation, via la plateforme startup.dz, pour une société de droit algérien de moins de huit ans, au modèle innovant, d'au plus 250 employés, dont le capital est détenu à cinquante pour cent au moins par des personnes physiques, des fonds agréés ou d'autres startups labellisées. Il est accordé pour quatre ans, renouvelable une fois. D'après les textes cités par les sources publiques, il ouvre quatre ans d'exonération d'impôt sur le bénéfice, IRG, IBS ou IFU selon le cas, prolongés de deux ans en cas de renouvellement, et des avantages sur les équipements du projet. **Une seule chose compte plus que le reste du dossier : un produit démontrable.** Le comité labellise des startups, pas des idées. Construisez d'abord, déposez ensuite.",
      "Ce guide met à jour notre [guide startup Algérie](/blog/startup-algerie-guide-2024/) sur le seul sujet du label, et il s'adresse en particulier aux fondateurs établis en France qui lancent pour le marché algérien, dont nous détaillons le parcours complet dans [le guide du fondateur de la diaspora](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/). Les règles évoluent avec chaque loi de finances : tout ce qui suit se vérifie sur startup.dz et au Journal officiel avant de déposer.",
    ],
    sections: [
      { heading: "Les conditions d'éligibilité", body: [
        "Les critères rapportés par les sources publiques sont stables depuis le décret exécutif de 2020 qui a créé le label. Voici ce qu'ils exigent et, pour chacun, ce qu'il faut vérifier dans votre cas.",
      ], visual: 'criteria', after: [
        "Deux points piègent les fondateurs de la diaspora. **La règle du capital** : une société algérienne détenue majoritairement par votre société française ne remplit pas le critère des cinquante pour cent de personnes physiques ; détenez les parts en votre nom propre, ou vérifiez le montage avec un avocat. **Le plafond de chiffre d'affaires** : il n'est pas écrit dans le décret mais fixé par le comité ; les sources donnent des valeurs différentes, demandez celle en vigueur avant de déposer.",
      ] },
      { heading: 'Le parcours, du produit au label', body: [
        "Le dossier se dépose en ligne sur startup.dz, où vous créez un compte, remplissez le formulaire, joignez les pièces de la société et présentez le produit, le modèle d'affaires et ce qui le rend innovant. Le comité national instruit, pose parfois des questions, et décide. Les délais d'instruction varient selon la période et la qualité du dossier.",
      ], visual: 'process', after: [
        "La pièce que le comité regarde en premier n'est pas le business plan. C'est la démonstration : une application qui tourne sur un téléphone, un prototype avec de vrais utilisateurs, des chiffres même modestes. **Un dossier déposé avec une idée et des maquettes attend, puis recommence.** Un dossier déposé avec un produit en test passe. C'est pour cette raison que nous écrivons partout la même chose : le label se demande avec un produit.",
        "Si vous n'avez pas encore de produit, la [méthode MVP](/blog/mvp-startup-algerie-2024/) et notre [grille de prix par catégorie](/blog/prix-application-mobile-algerie-2026/) vous disent ce qu'une première version démontrable demande en temps et en budget.",
      ] },
      { heading: "Ce que le label apporte, et ce qu'il n'apporte pas", body: [
        "Les avantages fiscaux sont fixés par la loi de finances et modifiés régulièrement. D'après les textes cités par les sources publiques en 2026, voici l'essentiel.",
      ], visual: 'benefits', after: [
        "**Ce que le label apporte.** L'exonération d'impôt sur le bénéfice pendant quatre ans à compter de la date d'obtention, prolongée de deux ans au renouvellement ; des avantages rapportés sur les équipements du projet, exonération de TVA et droits de douane réduits ; l'accès facilité aux dispositifs de financement et aux accélérateurs publics ; et une crédibilité réelle auprès des banques, des clients publics et des partenaires.",
        "**Ce qu'il n'apporte pas.** Des clients. Le label ne vend rien à votre place. Il ne remplace ni le produit, ni le marketing local, ni l'équipe terrain. Nous voyons des startups labellisées sans utilisateurs et des entreprises sans label qui tournent très bien. Le label est un accélérateur fiscal pour une entreprise qui existe déjà. Faites valider les montants et les articles par un expert-comptable avant d'en dépendre dans vos prévisions.",
      ] },
      { heading: 'Le calendrier réaliste : construire et labelliser en parallèle', body: [
        "Le bon calendrier ne met pas le label au début ni à la fin. Il construit le produit, crée la société en parallèle, et dépose le dossier quand la démonstration existe.",
      ], visual: 'timeline', after: [
        "Pour un fondateur en France, la société se crée par procuration pendant que le produit se développe, comme nous le décrivons dans le guide de la diaspora. Le dépôt intervient autour de la quatorzième semaine avec une première version en test ; le label arrive quelques semaines plus tard selon l'instruction. Les exonérations courent à compter de la date d'obtention : déposer trop tôt avec une idée ne fait pas gagner de temps, cela fait perdre un tour.",
      ] },
      { heading: 'Les erreurs que nous voyons dans les dossiers', body: [], list: [
        "**Déposer avec une idée et des maquettes.** Le comité labellise des startups, pas des intentions. Six mois perdus.",
        "**Un capital détenu par une société étrangère.** La règle des cinquante pour cent de personnes physiques n'est pas remplie. Vérifiez le montage avant de créer.",
        "**Compter les avantages fiscaux avant le label.** Ils courent à compter de la date d'obtention et changent avec la loi de finances.",
        "**Croire que le label remplace le marché.** Il ne vend rien. Le produit, les utilisateurs et l'équipe terrain restent votre travail.",
        "**Oublier le renouvellement.** Le label vaut quatre ans. Le renouvellement a ses conditions ; préparez-les dès la troisième année.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Peut-on demander le label avec une idée ou un business plan ?", a: "Formellement, le dépôt est possible ; en pratique, le comité regarde d'abord le produit et son caractère innovant. Un prototype qui tourne avec de premiers utilisateurs est la pièce qui fait passer un dossier." },
        { q: "Combien de temps dure le label ?", a: "Quatre ans à compter de la date d'obtention, renouvelable une fois sous conditions, d'après les textes cités par les sources publiques. Les avantages fiscaux suivent la même logique, avec deux années supplémentaires au renouvellement." },
        { q: "Un fondateur résidant en France peut-il obtenir le label ?", a: "Oui, par une société de droit algérien dont il détient les parts en son nom propre, créée par procuration si besoin. Le montage avec une société française majoritaire ne remplit pas la règle du capital." },
        { q: "Quels sont les avantages fiscaux exacts en 2026 ?", a: "D'après les textes cités par les sources, quatre ans d'exonération IRG, IBS ou IFU selon le cas, prolongés de deux ans au renouvellement, et des avantages sur les équipements du projet. Les montants et articles changent avec chaque loi de finances : faites-les confirmer par un expert-comptable." },
        { q: "Le label aide-t-il à trouver des clients ?", a: "Indirectement, par la crédibilité auprès des banques, des clients publics et des partenaires. Directement, non : le produit, le marketing local et l'équipe terrain restent la seule source de clients." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Le comité labellise des startups, pas des idées. Construisez d'abord, déposez ensuite." },
      { after: 2, text: "Le label est un accélérateur fiscal pour une entreprise qui existe déjà. Il ne vend rien à votre place." },
    ],
    cta: { eyebrow: 'Vous visez le label', title: "Décrivez votre produit et où il en est. Nous vous dirons ce qu'il manque pour une démonstration qui tient devant le comité, et combien de temps la première version demande.", body: "Symloop construit les premières versions démontrables des startups algériennes et de la diaspora : applications mobiles, plateformes web, systèmes d'IA, livrés en douze à seize semaines avec un cadrage écrit, des jalons et le code à votre nom. Ingénieurs seniors à Alger et Sétif." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Guide fondateur', name: 'Lancer une startup tech en Algérie depuis la France' },
      { href: '/blog/startup-algerie-guide-2024/', kind: 'Guide', name: 'Créer une startup en Algérie : le guide complet' },
      { href: '/blog/mvp-startup-algerie-2024/', kind: 'Méthode', name: 'La méthode MVP appliquée au marché algérien' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problème', name: 'Peut-on connaître le prix total avant de commencer ?' },
    ] },
  },
  en: {
    kind: 'Founder guide · Startup label', title: 'How to get the startup label in Algeria in 2026: conditions, file, tax benefits, renewal, and why you need a product first.',
    dek: "\"How to get the startup label\", \"startup label file\", \"startup label benefits\", \"renewal\": these are the questions founders ask every week. Eligibility conditions, the path on startup.dz, what the label brings according to the texts cited by public sources, realistic timing, and the mistake that costs six months: filing with an idea.",
    publishedAt: 'October 2026', readTime: '9 min read', author: 'Symloop', about: ['Startup label', 'startup.dz', 'Taxation', 'Startup creation', 'Algeria'],
    intro: [
      "**Short answer.** The Algerian startup label is obtained from the national labelling committee, through the startup.dz platform, for an Algerian-law company under eight years old, with an innovative model, at most 250 employees, whose capital is held at least fifty percent by natural persons, approved funds or other labelled startups. It is granted for four years, renewable once. According to the texts cited by public sources, it opens four years of profit tax exemption, IRG, IBS or IFU as the case may be, extended by two years on renewal, and benefits on project equipment. **One thing matters more than the rest of the file: a demonstrable product.** The committee labels startups, not ideas. Build first, file after.",
      "This guide updates our [Algeria startup guide](/blog/startup-algerie-guide-2024/) on the single topic of the label, and is aimed in particular at founders based in France launching for the Algerian market, whose full path we detail in [the diaspora founder's guide](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/). Rules change with each finance act: everything below is checked on startup.dz and in the Official Journal before filing.",
    ],
    sections: [
      { heading: 'Eligibility conditions', body: [
        "The criteria reported by public sources have been stable since the 2020 executive decree that created the label. Here is what they require and, for each, what to check in your case.",
      ], visual: 'criteria', after: [
        "Two points trap diaspora founders. **The capital rule**: an Algerian company majority-owned by your French company does not meet the fifty percent natural persons criterion; hold the shares in your own name, or check the structure with a lawyer. **The turnover cap**: it is not written in the decree but set by the committee; sources give different values, ask for the one in force before filing.",
      ] },
      { heading: 'The path, from product to label', body: [
        "The file is submitted online on startup.dz, where you create an account, fill in the form, attach the company documents and present the product, the business model and what makes it innovative. The national committee reviews, sometimes asks questions, and decides. Review times vary with the period and the quality of the file.",
      ], visual: 'process', after: [
        "The piece the committee looks at first is not the business plan. It is the demonstration: an app running on a phone, a prototype with real users, numbers even if modest. **A file submitted with an idea and mockups waits, then starts over.** A file submitted with a product in testing passes. That is why we write the same thing everywhere: the label is requested with a product.",
        "If you do not have a product yet, the [MVP method](/blog/mvp-startup-algerie-2024/) and our [price grid by category](/blog/prix-application-mobile-algerie-2026/) tell you what a first demonstrable version requires in time and budget.",
      ] },
      { heading: 'What the label brings, and what it does not', body: [
        "Tax benefits are set by the finance act and amended regularly. According to the texts cited by public sources in 2026, here is the essential.",
      ], visual: 'benefits', after: [
        "**What the label brings.** Profit tax exemption for four years from the date obtained, extended by two years on renewal; reported benefits on project equipment, VAT exemption and reduced customs duties; easier access to public funding schemes and accelerators; and real credibility with banks, public clients and partners.",
        "**What it does not bring.** Customers. The label sells nothing for you. It replaces neither the product, nor local marketing, nor the field team. We see labelled startups without users and unlabelled companies doing very well. The label is a tax accelerator for a company that already exists. Have the amounts and articles validated by an accountant before relying on them in your forecasts.",
      ] },
      { heading: 'The realistic timeline: build and label in parallel', body: [
        "The right timeline puts the label neither at the start nor at the end. It builds the product, incorporates the company in parallel, and files when the demonstration exists.",
      ], visual: 'timeline', after: [
        "For a founder in France, the company is incorporated by proxy while the product is being developed, as we describe in the diaspora guide. Filing happens around week fourteen with a first version in testing; the label arrives a few weeks later depending on the review. Exemptions run from the date obtained: filing too early with an idea does not save time, it loses a round.",
      ] },
      { heading: 'The mistakes we see in files', body: [], list: [
        "**Filing with an idea and mockups.** The committee labels startups, not intentions. Six months lost.",
        "**Capital held by a foreign company.** The fifty percent natural persons rule is not met. Check the structure before incorporating.",
        "**Counting tax benefits before the label.** They run from the date obtained and change with the finance act.",
        "**Believing the label replaces the market.** It sells nothing. The product, users and field team remain your work.",
        "**Forgetting renewal.** The label lasts four years. Renewal has its conditions; prepare them from year three.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Can you apply for the label with an idea or a business plan?', a: 'Formally, filing is possible; in practice, the committee looks first at the product and its innovative character. A running prototype with first users is the piece that gets a file through.' },
        { q: 'How long does the label last?', a: 'Four years from the date obtained, renewable once under conditions, according to the texts cited by public sources. Tax benefits follow the same logic, with two additional years on renewal.' },
        { q: 'Can a founder living in France obtain the label?', a: 'Yes, through an Algerian-law company whose shares they hold in their own name, incorporated by proxy if needed. A structure with a majority French company does not meet the capital rule.' },
        { q: 'What are the exact tax benefits in 2026?', a: 'According to the texts cited by sources, four years of IRG, IBS or IFU exemption as the case may be, extended by two years on renewal, and benefits on project equipment. Amounts and articles change with each finance act: have them confirmed by an accountant.' },
        { q: 'Does the label help find customers?', a: 'Indirectly, through credibility with banks, public clients and partners. Directly, no: the product, local marketing and the field team remain the only source of customers.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'The committee labels startups, not ideas. Build first, file after.' },
      { after: 2, text: 'The label is a tax accelerator for a company that already exists. It sells nothing for you.' },
    ],
    cta: { eyebrow: 'You are aiming for the label', title: 'Describe your product and where it stands. We will tell you what is missing for a demonstration that holds up before the committee, and how long the first version takes.', body: 'Symloop builds the first demonstrable versions of Algerian and diaspora startups: mobile apps, web platforms, AI systems, delivered in twelve to sixteen weeks with a written scope, milestones and code in your name. Senior engineers in Algiers and Sétif.' },
    related: { label: 'Read next', items: [
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Founder guide', name: 'Launching a tech startup in Algeria from France' },
      { href: '/blog/startup-algerie-guide-2024/', kind: 'Guide', name: 'Creating a startup in Algeria: the complete guide' },
      { href: '/blog/mvp-startup-algerie-2024/', kind: 'Method', name: 'The MVP method applied to the Algerian market' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problem', name: 'Can I know the total price before starting?' },
    ] },
  },
  ar: {
    kind: 'دليل المؤسس · علامة Startup', title: 'كيف تحصل على علامة Startup في الجزائر في 2026: الشروط، الملف، المزايا الضريبية، التجديد، ولماذا تحتاج منتجاً أولاً.',
    dek: '«كيف أحصل على علامة Startup»، «ملف العلامة»، «مزايا العلامة»، «التجديد»: هذه أسئلة يطرحها المؤسسون كل أسبوع. شروط الأهلية، المسار على startup.dz، ما تمنحه العلامة حسب النصوص التي تنقلها المصادر العلنية، الآجال الواقعية، والخطأ الذي يضيّع ستة أشهر: الإيداع بفكرة.',
    publishedAt: 'أكتوبر 2026', readTime: '9 دقائق قراءة', author: 'سيملوب', about: ['علامة Startup', 'startup.dz', 'الضرائب', 'تأسيس شركة ناشئة', 'الجزائر'],
    intro: [
      '**الجواب المختصر.** تُمنح علامة Startup الجزائرية من اللجنة الوطنية للوسم عبر منصة startup.dz لشركة خاضعة للقانون الجزائري عمرها أقل من ثماني سنوات بنموذج مبتكر و250 موظفاً على الأكثر، يملك أشخاص طبيعيون أو صناديق معتمدة أو شركات ناشئة موسومة أخرى خمسين في المئة على الأقل من رأس مالها. تُمنح لأربع سنوات قابلة للتجديد مرة واحدة. وحسب النصوص التي تنقلها المصادر العلنية، تفتح أربع سنوات من الإعفاء من ضريبة الأرباح، IRG أو IBS أو IFU حسب الحالة، تمدَّد سنتين عند التجديد، ومزايا على تجهيزات المشروع. **شيء واحد يهم أكثر من باقي الملف: منتج قابل للعرض.** تمنح اللجنة العلامة لشركات ناشئة لا لأفكار. ابنِ أولاً ثم أودع.',
      'يحدّث هذا الدليل [دليل الشركات الناشئة في الجزائر](/blog/startup-algerie-guide-2024/) في موضوع العلامة وحده، ويتوجه خاصة إلى المؤسسين المقيمين في فرنسا الذين يطلقون للسوق الجزائرية والذين نفصّل مسارهم الكامل في [دليل مؤسس الجالية](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/). تتغير القواعد مع كل قانون مالية: كل ما يلي يُتحقق منه على startup.dz وفي الجريدة الرسمية قبل الإيداع.',
    ],
    sections: [
      { heading: 'شروط الأهلية', body: ['المعايير التي تنقلها المصادر العلنية مستقرة منذ المرسوم التنفيذي لسنة 2020 الذي أنشأ العلامة. إليك ما تتطلبه، ولكل منها ما يجب التحقق منه في حالتك.'], visual: 'criteria', after: ['نقطتان توقعان مؤسسي الجالية. **قاعدة رأس المال**: شركة جزائرية تملكها أغلبيةً شركتك الفرنسية لا تستوفي معيار خمسين في المئة من الأشخاص الطبيعيين؛ امتلك الحصص باسمك الشخصي أو تحقق من التركيبة مع محامٍ. **سقف رقم الأعمال**: ليس مكتوباً في المرسوم بل تحدده اللجنة؛ تعطي المصادر قيماً مختلفة، اطلب القيمة السارية قبل الإيداع.'] },
      { heading: 'المسار، من المنتج إلى العلامة', body: ['يُودع الملف إلكترونياً على startup.dz حيث تنشئ حساباً وتملأ الاستمارة وترفق وثائق الشركة وتعرض المنتج ونموذج الأعمال وما يجعله مبتكراً. تدرس اللجنة الوطنية وتطرح أحياناً أسئلة وتقرر. تختلف آجال الدراسة حسب الفترة وجودة الملف.'], visual: 'process', after: [
        'القطعة التي تنظر إليها اللجنة أولاً ليست خطة الأعمال بل العرض العملي: تطبيق يعمل على هاتف، نموذج أولي بمستخدمين حقيقيين، أرقام ولو متواضعة. **ملف مودَع بفكرة ونماذج تصميم ينتظر ثم يعيد.** وملف مودَع بمنتج قيد الاختبار يمر. لهذا نكتب في كل مكان الشيء نفسه: تُطلب العلامة بمنتج.',
        'إن لم يكن لديك منتج بعد، تخبرك [منهجية MVP](/blog/mvp-startup-algerie-2024/) و[شبكة أسعارنا حسب الفئة](/blog/prix-application-mobile-algerie-2026/) بما تتطلبه نسخة أولى قابلة للعرض من وقت وميزانية.',
      ] },
      { heading: 'ما تمنحه العلامة، وما لا تمنحه', body: ['تُحدَّد المزايا الضريبية بقانون المالية وتُعدَّل بانتظام. حسب النصوص التي تنقلها المصادر العلنية في 2026، إليك الأساسي.'], visual: 'benefits', after: [
        '**ما تمنحه العلامة.** إعفاء من ضريبة الأرباح أربع سنوات من تاريخ الحصول، تمدَّد سنتين عند التجديد؛ مزايا منقولة على تجهيزات المشروع، إعفاء من TVA ورسوم جمركية مخفّضة؛ وصول أسهل إلى آليات التمويل والحاضنات العمومية؛ ومصداقية حقيقية لدى البنوك والعملاء العموميين والشركاء.',
        '**ما لا تمنحه.** العملاء. لا تبيع العلامة شيئاً نيابة عنك. لا تعوّض المنتج ولا التسويق المحلي ولا الفريق الميداني. نرى شركات ناشئة موسومة بلا مستخدمين وشركات بلا علامة تعمل جيداً جداً. العلامة مسرّع ضريبي لشركة موجودة أصلاً. اطلب مصادقة محاسب خبير على المبالغ والمواد قبل الاعتماد عليها في توقعاتك.',
      ] },
      { heading: 'الجدول الواقعي: ابنِ واحصل على العلامة بالتوازي', body: ['الجدول الصحيح لا يضع العلامة في البداية ولا في النهاية. يبني المنتج ويؤسس الشركة بالتوازي ويودع الملف عندما يوجد العرض العملي.'], visual: 'timeline', after: ['لمؤسس في فرنسا، تُؤسَّس الشركة بالوكالة بينما يُطوَّر المنتج كما نصف في دليل الجالية. يتم الإيداع حوالي الأسبوع الرابع عشر بنسخة أولى قيد الاختبار؛ وتصل العلامة بعد أسابيع حسب الدراسة. تسري الإعفاءات من تاريخ الحصول: الإيداع المبكر بفكرة لا يوفر وقتاً بل يضيّع دوراً.'] },
      { heading: 'الأخطاء التي نراها في الملفات', body: [], list: [
        '**الإيداع بفكرة ونماذج تصميم.** تمنح اللجنة العلامة لشركات ناشئة لا لنوايا. ستة أشهر ضائعة.',
        '**رأس مال تملكه شركة أجنبية.** قاعدة خمسين في المئة من الأشخاص الطبيعيين غير مستوفاة. تحقق من التركيبة قبل التأسيس.',
        '**احتساب المزايا الضريبية قبل العلامة.** تسري من تاريخ الحصول وتتغير مع قانون المالية.',
        '**الاعتقاد بأن العلامة تعوّض السوق.** لا تبيع شيئاً. المنتج والمستخدمون والفريق الميداني يبقون عملك.',
        '**نسيان التجديد.** تصلح العلامة أربع سنوات. للتجديد شروطه؛ حضّرها من السنة الثالثة.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'هل يمكن طلب العلامة بفكرة أو خطة أعمال؟', a: 'شكلياً الإيداع ممكن؛ عملياً تنظر اللجنة أولاً إلى المنتج وطابعه المبتكر. نموذج أولي يعمل بأول مستخدمين هو القطعة التي تمرّر الملف.' },
        { q: 'كم تدوم العلامة؟', a: 'أربع سنوات من تاريخ الحصول، قابلة للتجديد مرة واحدة بشروط، حسب النصوص التي تنقلها المصادر العلنية. تتبع المزايا الضريبية المنطق نفسه مع سنتين إضافيتين عند التجديد.' },
        { q: 'هل يستطيع مؤسس مقيم في فرنسا الحصول على العلامة؟', a: 'نعم، عبر شركة خاضعة للقانون الجزائري يملك حصصها باسمه الشخصي، مؤسَّسة بالوكالة عند الحاجة. التركيبة بشركة فرنسية مهيمنة لا تستوفي قاعدة رأس المال.' },
        { q: 'ما المزايا الضريبية الدقيقة في 2026؟', a: 'حسب النصوص التي تنقلها المصادر، أربع سنوات من الإعفاء من IRG أو IBS أو IFU حسب الحالة، تمدَّد سنتين عند التجديد، ومزايا على تجهيزات المشروع. تتغير المبالغ والمواد مع كل قانون مالية: اطلب تأكيد محاسب خبير.' },
        { q: 'هل تساعد العلامة في إيجاد عملاء؟', a: 'بشكل غير مباشر عبر المصداقية لدى البنوك والعملاء العموميين والشركاء. مباشرة لا: المنتج والتسويق المحلي والفريق الميداني يبقون المصدر الوحيد للعملاء.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'تمنح اللجنة العلامة لشركات ناشئة لا لأفكار. ابنِ أولاً ثم أودع.' },
      { after: 2, text: 'العلامة مسرّع ضريبي لشركة موجودة أصلاً. لا تبيع شيئاً نيابة عنك.' },
    ],
    cta: { eyebrow: 'تستهدف العلامة', title: 'صف منتجك وأين وصل. سنخبرك بما ينقص لعرض عملي يصمد أمام اللجنة وكم تستغرق النسخة الأولى.', body: 'تبني سيملوب النسخ الأولى القابلة للعرض للشركات الناشئة الجزائرية وشركات الجالية: تطبيقات جوال، منصات ويب، أنظمة ذكاء اصطناعي، تُسلَّم في اثني عشر إلى ستة عشر أسبوعاً بتأطير مكتوب ومراحل وكود باسمك. مهندسون خبراء في الجزائر وسطيف.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'دليل المؤسس', name: 'إطلاق شركة تقنية ناشئة في الجزائر انطلاقاً من فرنسا' },
      { href: '/blog/startup-algerie-guide-2024/', kind: 'دليل', name: 'تأسيس شركة ناشئة في الجزائر: الدليل الكامل' },
      { href: '/blog/mvp-startup-algerie-2024/', kind: 'منهجية', name: 'منهجية MVP مطبّقة على السوق الجزائرية' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'مشكلة', name: 'هل يمكن معرفة السعر الإجمالي قبل البدء؟' },
    ] },
  },
};

const KEYWORDS = "label startup algérie, comment obtenir le label startup en algérie, dossier label startup algérie, avantages label startup algérie, renouvellement label startup, startup.dz label, exonération fiscale startup algérie, label startup diaspora, startup label algeria, علامة ستارت أب الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
