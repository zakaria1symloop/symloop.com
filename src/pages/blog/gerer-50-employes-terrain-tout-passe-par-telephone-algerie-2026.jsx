import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026.mjs';

const SLUG = 'gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026';
const FIGURES = ['flows', 'app', 'ai', 'timeline'];
const DATE = '2026-10-28';

const CONTENT = {
  fr: {
    kind: 'Problème · Équipes terrain', title: "Je gère cinquante employés sur le terrain et tout passe par téléphone : par où commencer pour digitaliser sans bloquer l'activité (Algérie, 2026).",
    dek: "Transport de personnes, livraison, maintenance, nettoyage, commerciaux : le planning est sur WhatsApp, le pointage de mémoire, les missions par appel et les preuves en photo dans un groupe. Les trois informations que personne ne possède, ce qui se règle en une semaine, l'application terrain en trois écrans, où l'IA aide vraiment, et le calendrier.",
    publishedAt: 'Octobre 2026', readTime: '9 min de lecture', author: 'Symloop', about: ['Équipes terrain', 'Application terrain', 'Gestion des employés', 'Algérie'],
    intro: [
      "**Réponse courte.** Ne commencez pas par un ERP, ni par la paie, ni par un logiciel RH. Le téléphone n'est pas votre problème ; votre problème est que trois informations n'existent nulle part ailleurs que dans la tête de vos chefs d'équipe : **qui travaille aujourd'hui et où, quelle mission est faite ou pas, et quelle preuve existe du travail fait.** Commencez par ces trois flux. Une semaine de règles sans logiciel les rend visibles. Une application terrain en trois écrans, pour une équipe pilote d'abord, les rend fiables. L'IA vient ensuite, sur un seul usage très rentable : le rapport vocal transformé en compte rendu.",
      "Ce guide répond à une question qu'un gérant d'entreprise de transport de personnes à mobilité réduite nous a posée presque telle quelle : « je dois gérer une cinquantaine d'employés ». Voici la réponse complète, écrite pour toute entreprise dont les employés travaillent dehors.",
    ],
    sections: [
      { heading: "Les cinq informations que personne ne possède", body: [
        "Posez-vous cinq questions à onze heures du matin, un mardi. Qui travaille aujourd'hui et où ? Quelle mission est terminée, laquelle n'a pas commencé ? Quelle preuve avez-vous du travail fait chez le client de huit heures ? Combien d'heures chaque employé aura-t-il faites à la fin du mois ? Le client de quatorze heures sait-il que votre chauffeur part dans dix minutes ? Si la réponse passe par un appel à un chef d'équipe, vous dépendez de sa mémoire, de sa disponibilité et de sa bonne foi.",
      ], visual: 'flows', after: [
        "Ce tableau est tout le guide. Chaque ligne est une information vitale. Chaque colonne est un palier. **Vous n'avez pas besoin de sauter directement à la dernière colonne**, et vous ne devez surtout pas le faire sans passer par la première.",
      ] },
      { heading: 'Palier 1 — Une semaine de règles, zéro logiciel', body: [
        "Cinq règles qui rendent les cinq informations visibles dès la semaine prochaine, avec les outils que vos équipes ont déjà.",
      ], preOrdered: [
        "**Un planning hebdomadaire unique**, une feuille partagée, publié chaque jeudi pour la semaine suivante. Une ligne par employé et par jour : lieu, mission, horaire. Les changements se font sur la feuille, pas au téléphone.",
        "**Un message de début et de fin de mission** au format fixe, dans le groupe de l'équipe : « Début · client · heure » et « Fin · client · heure · remarque ». Dix secondes, et la mission existe.",
        "**Une photo de preuve nommée** : le client et la date dans la légende. Une photo sans légende n'est pas une preuve.",
        "**Un numéro d'entreprise pour les clients**, WhatsApp Business, tenu par le bureau. Les clients ne doivent pas avoir le numéro personnel du chauffeur ou du technicien.",
        "**Dix minutes chaque matin** avec chaque chef d'équipe : les absents, les missions à risque, les clients à prévenir. Debout, pas en réunion.",
      ], after: [
        "Pour une équipe unique de quinze à vingt personnes, **ce palier tient souvent un an**. À cinquante employés et plusieurs équipes, il tient quelques mois : le jour où un chef d'équipe part en congé, vous découvrez ce qu'il avait dans la tête.",
      ] },
      { heading: "Palier 2 — L'application terrain : ce qu'elle doit faire, et rien de plus", body: [
        "Les signes qu'il est temps : plus de vingt employés dehors, plusieurs équipes ou plusieurs villes, des clients qui demandent des horaires et des preuves, des heures supplémentaires contestées à la fin du mois, et un chef d'équipe dont l'absence paralyse une journée.",
        "Une application terrain n'est pas un ERP. Pour l'employé, elle tient en trois écrans, en arabe ou en français, avec des boutons assez gros pour une main gantée : ma journée, ma mission, ma preuve. Elle fonctionne sans réseau et se synchronise quand il revient. Tout le reste, dispatch, alertes, pointage, export pour la paie, clients, est pour le chef d'équipe et le bureau.",
      ], visual: 'app', after: [
        "La règle de conception est simple : **si un employé a besoin de plus d'une heure de formation, l'application est mal faite.** Les entreprises de livraison et de distribution ont ouvert la voie, nous en avons détaillé les modules dans nos guides sur la [gestion de flotte et le suivi GPS](/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/) et sur le [logiciel de gestion de la livraison et de la distribution](/blog/logiciel-gestion-livraison-distribution-algerie-2026/). Le même socle sert au transport de personnes, à la maintenance, au nettoyage et aux commerciaux de terrain : seuls les mots sur les boutons changent.",
        "La paie reste chez votre comptable. L'application lui exporte des heures fiables, elle ne les calcule pas. Un module de paie se décide après six mois de pointage propre, jamais avant.",
      ] },
      { heading: "Où l'IA aide une équipe terrain, et où elle n'apporte rien", body: [
        "Vos employés n'écriront jamais de compte rendu. Ils parleront. C'est là que l'IA change quelque chose.",
      ], visual: 'ai', after: [
        "**Le rapport vocal.** À la fin de la mission, l'employé appuie sur un bouton et parle trente secondes, en darija, en kabyle ou en français : ce qu'il a fait, ce qui manquait, ce que le client a dit. Le bureau reçoit un compte rendu écrit, structuré, rattaché à la mission. C'est l'usage le plus rentable que nous connaissons pour une équipe terrain, et il n'exige rien de l'employé qu'il ne fasse déjà au téléphone. **L'optimisation des tournées** vient en second, dès que vos adresses ont une position GPS. Le reste attend des mois de données.",
      ] },
      { heading: 'Coût et calendrier', body: [
        "Une application terrain avec les trois écrans employé, le dispatch, le pointage, l'export paie et les notifications clients se situe en catégorie 2 de notre [grille de prix des applications en Algérie](/blog/prix-application-mobile-algerie-2026/), le rapport vocal par IA en option. Le calendrier tient en douze semaines, avec une équipe pilote qui tourne en parallèle du téléphone.",
      ], visual: 'timeline', after: [
        "La règle du pilote : **on ne coupe pas le téléphone, on attend que l'équipe pilote arrête de l'utiliser d'elle-même.** En général, cela prend dix jours, le temps que les employés comprennent que l'application est la preuve de leurs heures et de leur travail, pas un outil de surveillance. C'est ainsi qu'il faut la présenter, parce que c'est ce qu'elle est.",
      ] },
      { heading: 'Les erreurs que nous voyons dans les entreprises de terrain', body: [], list: [
        "**Commencer par un ERP.** Six mois de projet, des écrans que personne dehors n'ouvre, et le téléphone continue.",
        "**Une application avec quinze écrans pour l'employé.** Trois suffisent. Le reste est pour le bureau.",
        "**Présenter l'outil comme un contrôle.** Il sera contourné. Présentez-le comme la preuve de leurs heures et de leurs primes, parce que c'est vrai.",
        "**Ignorer le hors connexion.** Une mission qui ne se note pas sans réseau ne se note pas.",
        "**Calculer la paie dans l'application dès le premier jour.** Exportez des heures fiables vers le comptable, décidez du module paie après six mois.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Mes employés n'ont pas tous un smartphone.", a: "Un Android d'entrée de gamme suffit pour une application légère qui fonctionne hors connexion. Pour les postes sans téléphone, le pointage peut passer par le chef d'équipe ou par un SMS. Le coût des téléphones est très inférieur à celui des heures contestées chaque mois." },
        { q: "Mes employés vont avoir peur d'être surveillés.", a: "Ils ont raison de le demander. L'application doit être présentée et conçue comme la preuve de leurs heures, de leurs missions et de leurs primes. La position n'est enregistrée qu'au début et à la fin d'une mission, pas en continu, et cela doit être écrit." },
        { q: "ERP ou application terrain ?", a: "Application terrain d'abord. Elle règle les trois informations vitales en douze semaines. Un ERP se justifie ensuite si vous avez du stock, de la facturation complexe ou plusieurs sociétés, et il se branche sur les données propres que l'application produit." },
        { q: "Combien de temps avant que ça tourne vraiment ?", a: "Douze semaines jusqu'à la bascule, dont deux semaines de pilote avec une équipe de dix. Le premier export de paie fiable arrive à la fin du premier mois complet." },
        { q: "Je pilote l'entreprise depuis la France, est-ce possible ?", a: "Le produit, oui. Le terrain, non : un chef d'équipe local qui porte la règle est indispensable. L'application lui donne précisément ce qu'il n'avait pas, la visibilité sans les appels." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Le téléphone n'est pas le problème. Le problème, c'est que l'information meurt à la fin de l'appel." },
      { after: 2, text: "Une application terrain tient en trois écrans : ma journée, ma mission, ma preuve. Tout le reste est pour le bureau." },
    ],
    cta: { eyebrow: 'Décrivez vos équipes', title: "Combien d'employés dehors, combien d'équipes, quel type de mission. Nous vous dirons à quel palier vous êtes et ce que l'application devrait contenir, et surtout ne pas contenir.", body: "Symloop conçoit des applications terrain et des plateformes de dispatch pour des entreprises de transport, de livraison, de maintenance et de services en Algérie : trois écrans pour l'employé, hors connexion, arabe et français, rapport vocal par IA. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/', kind: 'Guide', name: 'Gestion de flotte de livraison et suivi GPS en Algérie' },
      { href: '/blog/logiciel-gestion-livraison-distribution-algerie-2026/', kind: 'Guide', name: 'Logiciel de gestion de la livraison et de la distribution' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problème', name: 'Peut-on connaître le prix total avant de commencer ?' },
      { href: '/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/', kind: 'Problème', name: 'Mon agence immobilière tourne sur WhatsApp et Google Sheets' },
    ] },
  },
  en: {
    kind: 'Problem · Field teams', title: 'I manage fifty employees in the field and everything goes by phone: where to start digitising without stopping operations (Algeria, 2026).',
    dek: "Passenger transport, delivery, maintenance, cleaning, sales reps: the schedule is on WhatsApp, clock-in is from memory, jobs are assigned by call and proofs are photos in a group. The three facts nobody owns, what gets fixed in a week, the three-screen field app, where AI really helps, and the timeline.",
    publishedAt: 'October 2026', readTime: '9 min read', author: 'Symloop', about: ['Field teams', 'Field app', 'Workforce management', 'Algeria'],
    intro: [
      "**Short answer.** Do not start with an ERP, nor payroll, nor HR software. The phone is not your problem; your problem is that three facts exist nowhere but in your supervisors' heads: **who works today and where, which job is done or not, and what proof exists of the work done.** Start with those three flows. A week of rules without software makes them visible. A three-screen field app, for a pilot team first, makes them reliable. AI comes after, on one very profitable use: the voice report turned into a written summary.",
      "This guide answers a question a manager of a transport company for people with reduced mobility asked us almost as is: \"I have to manage about fifty employees\". Here is the complete answer, written for any company whose employees work outside.",
    ],
    sections: [
      { heading: 'The five facts nobody owns', body: [
        "Ask yourself five questions at eleven on a Tuesday morning. Who works today and where? Which job is finished, which has not started? What proof do you have of the work done at the eight o'clock customer? How many hours will each employee have done at month end? Does the two o'clock customer know your driver leaves in ten minutes? If the answer goes through a call to a supervisor, you depend on their memory, their availability and their good faith.",
      ], visual: 'flows', after: [
        "This table is the whole guide. Each row is a vital fact. Each column is a tier. **You do not need to jump straight to the last column**, and you must not do it without going through the first.",
      ] },
      { heading: 'Tier 1 — A week of rules, zero software', body: [
        "Five rules that make the five facts visible from next week, with the tools your teams already have.",
      ], preOrdered: [
        "**One weekly schedule**, a shared sheet, published every Thursday for the following week. One row per employee per day: place, job, hours. Changes happen on the sheet, not on the phone.",
        "**A start and end of job message** in a fixed format, in the team group: \"Start · customer · time\" and \"End · customer · time · remark\". Ten seconds, and the job exists.",
        "**A named proof photo**: the customer and the date in the caption. A photo without a caption is not a proof.",
        "**One company number for customers**, WhatsApp Business, held by the office. Customers must not have the driver's or technician's personal number.",
        "**Ten minutes every morning** with each supervisor: absentees, jobs at risk, customers to warn. Standing, not a meeting.",
      ], after: [
        "For a single team of fifteen to twenty people, **this tier often holds for a year**. At fifty employees and several teams, it holds a few months: the day a supervisor goes on leave, you discover what was in their head.",
      ] },
      { heading: 'Tier 2 — The field app: what it must do, and nothing more', body: [
        "The signs it is time: more than twenty employees outside, several teams or several cities, customers asking for times and proofs, overtime disputed at month end, and a supervisor whose absence paralyses a day.",
        "A field app is not an ERP. For the employee it fits in three screens, in Arabic or French, with buttons big enough for a gloved hand: my day, my job, my proof. It works without network and syncs when it returns. Everything else, dispatch, alerts, clock-in, payroll export, customers, is for the supervisor and the office.",
      ], visual: 'app', after: [
        "The design rule is simple: **if an employee needs more than an hour of training, the app is badly built.** Delivery and distribution companies led the way, we detailed the modules in our guides to [fleet management and GPS tracking](/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/) and [delivery and distribution management software](/blog/logiciel-gestion-livraison-distribution-algerie-2026/). The same base serves passenger transport, maintenance, cleaning and field sales: only the words on the buttons change.",
        "Payroll stays with your accountant. The app exports reliable hours to them, it does not compute them. A payroll module is decided after six months of clean clock-ins, never before.",
      ] },
      { heading: 'Where AI helps a field team, and where it adds nothing', body: [
        "Your employees will never write a report. They will talk. That is where AI changes something.",
      ], visual: 'ai', after: [
        "**The voice report.** At the end of the job, the employee presses a button and talks for thirty seconds, in darija, Kabyle or French: what they did, what was missing, what the customer said. The office receives a written, structured summary attached to the job. It is the most profitable use we know for a field team, and it asks nothing of the employee they do not already do on the phone. **Route optimisation** comes second, as soon as your addresses have a GPS position. The rest waits for months of data.",
      ] },
      { heading: 'Cost and timeline', body: [
        "A field app with the three employee screens, dispatch, clock-in, payroll export and customer notifications sits in category 2 of our [app price grid for Algeria](/blog/prix-application-mobile-algerie-2026/), with the AI voice report as an option. The timeline fits in twelve weeks, with a pilot team running alongside the phone.",
      ], visual: 'timeline', after: [
        "The pilot rule: **you do not cut the phone, you wait for the pilot team to stop using it on its own.** It usually takes ten days, the time for employees to understand that the app is the proof of their hours and their work, not a surveillance tool. That is how it must be presented, because that is what it is.",
      ] },
      { heading: 'The mistakes we see in field companies', body: [], list: [
        "**Starting with an ERP.** Six months of project, screens nobody outside opens, and the phone goes on.",
        "**An app with fifteen screens for the employee.** Three are enough. The rest is for the office.",
        "**Presenting the tool as control.** It will be bypassed. Present it as the proof of their hours and bonuses, because it is true.",
        "**Ignoring offline.** A job that cannot be logged without network does not get logged.",
        "**Computing payroll in the app from day one.** Export reliable hours to the accountant, decide on a payroll module after six months.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Not all my employees have a smartphone.', a: 'An entry-level Android is enough for a light app that works offline. For roles without a phone, clock-in can go through the supervisor or by SMS. The cost of the phones is far below that of the hours disputed every month.' },
        { q: 'My employees will fear being watched.', a: 'They are right to ask. The app must be presented and designed as the proof of their hours, jobs and bonuses. Position is recorded only at the start and end of a job, not continuously, and that must be written down.' },
        { q: 'ERP or field app?', a: 'Field app first. It fixes the three vital facts in twelve weeks. An ERP is justified afterwards if you have stock, complex invoicing or several companies, and it plugs into the clean data the app produces.' },
        { q: 'How long before it really runs?', a: 'Twelve weeks to the switch-over, including two weeks of pilot with a team of ten. The first reliable payroll export arrives at the end of the first full month.' },
        { q: 'I run the company from France, is it possible?', a: 'The product, yes. The field, no: a local supervisor who carries the rule is essential. The app gives them precisely what they lacked, visibility without the calls.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'The phone is not the problem. The problem is that the information dies at the end of the call.' },
      { after: 2, text: 'A field app fits in three screens: my day, my job, my proof. Everything else is for the office.' },
    ],
    cta: { eyebrow: 'Describe your teams', title: 'How many employees outside, how many teams, what kind of job. We will tell you which tier you are at and what the app should contain, and above all not contain.', body: 'Symloop designs field apps and dispatch platforms for transport, delivery, maintenance and service companies in Algeria: three screens for the employee, offline, Arabic and French, AI voice report. Senior engineers in Algiers and Sétif, written scope, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/', kind: 'Guide', name: 'Delivery fleet management and GPS tracking in Algeria' },
      { href: '/blog/logiciel-gestion-livraison-distribution-algerie-2026/', kind: 'Guide', name: 'Delivery and distribution management software' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problem', name: 'Can I know the total price before starting?' },
      { href: '/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/', kind: 'Problem', name: 'My real-estate agency runs on WhatsApp and Google Sheets' },
    ] },
  },
  ar: {
    kind: 'مشكلة · فرق ميدانية', title: 'أسيّر خمسين موظفاً في الميدان وكل شيء يمر بالهاتف: من أين أبدأ الرقمنة دون توقيف النشاط (الجزائر، 2026).',
    dek: 'نقل الأشخاص، التوصيل، الصيانة، التنظيف، المندوبون التجاريون: الجدول على واتساب، الحضور من الذاكرة، المهام بالمكالمة والإثباتات صور في مجموعة. المعلومات الثلاث التي لا يملكها أحد، ما يُحلّ في أسبوع، تطبيق الميدان بثلاث شاشات، أين يساعد الذكاء الاصطناعي فعلاً، والجدول الزمني.',
    publishedAt: 'أكتوبر 2026', readTime: '9 دقائق قراءة', author: 'سيملوب', about: ['فرق ميدانية', 'تطبيق ميداني', 'تسيير الموظفين', 'الجزائر'],
    intro: [
      '**الجواب المختصر.** لا تبدأ بنظام ERP ولا بالأجور ولا ببرنامج موارد بشرية. الهاتف ليس مشكلتك؛ مشكلتك أن ثلاث معلومات لا توجد في أي مكان سوى رؤوس مشرفيك: **من يعمل اليوم وأين، أي مهمة أُنجزت أو لا، وأي إثبات يوجد للعمل المنجز.** ابدأ بهذه التدفقات الثلاثة. أسبوع من القواعد بلا برنامج يجعلها مرئية. تطبيق ميداني بثلاث شاشات، لفريق تجريبي أولاً، يجعلها موثوقة. يأتي الذكاء الاصطناعي بعدها على استخدام واحد مربح جداً: التقرير الصوتي المحوّل إلى محضر.',
      'يجيب هذا الدليل عن سؤال طرحه علينا مسيّر شركة نقل أشخاص ذوي حركة محدودة بالحرف تقريباً: «عليّ تسيير نحو خمسين موظفاً». هذا هو الجواب الكامل لكل شركة يعمل موظفوها في الخارج.',
    ],
    sections: [
      { heading: 'المعلومات الخمس التي لا يملكها أحد', body: ['اطرح على نفسك خمسة أسئلة في الحادية عشرة صباح ثلاثاء. من يعمل اليوم وأين؟ أي مهمة انتهت وأيها لم تبدأ؟ أي إثبات لديك عن العمل المنجز عند عميل الثامنة؟ كم ساعة سيكون كل موظف قد أنجز آخر الشهر؟ هل يعرف عميل الثانية أن سائقك ينطلق بعد عشر دقائق؟ إن مرّ الجواب بمكالمة إلى مشرف، فأنت تعتمد على ذاكرته وتوفره وحسن نيته.'], visual: 'flows', after: ['هذا الجدول هو الدليل كله. كل سطر معلومة حيوية. كل عمود درجة. **لا تحتاج القفز مباشرة إلى العمود الأخير**، ولا يجوز فعل ذلك دون المرور بالأول.'] },
      { heading: 'الدرجة 1 — أسبوع من القواعد، بلا برنامج', body: ['خمس قواعد تجعل المعلومات الخمس مرئية من الأسبوع القادم، بالأدوات التي تملكها فرقك أصلاً.'], preOrdered: [
        '**جدول أسبوعي واحد**، ورقة مشتركة تُنشر كل خميس للأسبوع التالي. سطر لكل موظف ولكل يوم: المكان، المهمة، التوقيت. التغييرات تتم على الورقة لا بالهاتف.',
        '**رسالة بداية ونهاية مهمة** بصيغة ثابتة في مجموعة الفريق: «بداية · العميل · الساعة» و«نهاية · العميل · الساعة · ملاحظة». عشر ثوانٍ، وتصبح المهمة موجودة.',
        '**صورة إثبات مسمّاة**: العميل والتاريخ في التعليق. صورة بلا تعليق ليست إثباتاً.',
        '**رقم واحد للشركة للعملاء**، WhatsApp Business يديره المكتب. لا يجوز أن يملك العملاء الرقم الشخصي للسائق أو التقني.',
        '**عشر دقائق كل صباح** مع كل مشرف: الغائبون، المهام المعرّضة للخطر، العملاء الذين يجب إبلاغهم. وقوفاً لا اجتماعاً.',
      ], after: ['لفريق واحد من خمسة عشر إلى عشرين شخصاً، **تصمد هذه الدرجة غالباً سنة**. مع خمسين موظفاً وعدة فرق تصمد بضعة أشهر: يوم يأخذ مشرف إجازة تكتشف ما كان في رأسه.'] },
      { heading: 'الدرجة 2 — تطبيق الميدان: ما يجب أن يفعله، ولا شيء أكثر', body: [
        'العلامات: أكثر من عشرين موظفاً في الخارج، عدة فرق أو عدة مدن، عملاء يطلبون مواعيد وإثباتات، ساعات إضافية متنازع عليها آخر الشهر، ومشرف يشلّ غيابه يوماً كاملاً.',
        'تطبيق الميدان ليس ERP. للموظف يكتفي بثلاث شاشات بالعربية أو الفرنسية بأزرار كبيرة بما يكفي ليد بقفاز: يومي، مهمتي، إثباتي. يعمل دون شبكة ويتزامن عند عودتها. كل ما عداها، التوزيع والتنبيهات والحضور وتصدير الأجور والعملاء، للمشرف والمكتب.',
      ], visual: 'app', after: [
        'قاعدة التصميم بسيطة: **إن احتاج موظف أكثر من ساعة تكوين فالتطبيق سيئ الصنع.** شركات التوصيل والتوزيع فتحت الطريق، وفصّلنا الوحدات في دليلَي [تسيير الأسطول والتتبع GPS](/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/) و[برنامج تسيير التوصيل والتوزيع](/blog/logiciel-gestion-livraison-distribution-algerie-2026/). القاعدة نفسها تخدم نقل الأشخاص والصيانة والتنظيف والمندوبين الميدانيين: تتغير كلمات الأزرار فقط.',
        'تبقى الأجور عند محاسبك. يصدّر له التطبيق ساعات موثوقة ولا يحسبها. وحدة الأجور تُقرَّر بعد ستة أشهر من حضور نظيف، لا قبل.',
      ] },
      { heading: 'أين يساعد الذكاء الاصطناعي الفريق الميداني، وأين لا يضيف شيئاً', body: ['لن يكتب موظفوك محضراً أبداً. سيتكلمون. هنا يغيّر الذكاء الاصطناعي شيئاً.'], visual: 'ai', after: ['**التقرير الصوتي.** في نهاية المهمة يضغط الموظف زراً ويتكلم ثلاثين ثانية بالدارجة أو القبائلية أو الفرنسية: ما فعله، ما كان ناقصاً، ما قاله العميل. يستلم المكتب محضراً مكتوباً منظّماً مرتبطاً بالمهمة. إنه الاستخدام الأكثر ربحية الذي نعرفه لفريق ميداني ولا يطلب من الموظف شيئاً لا يفعله أصلاً بالهاتف. **تحسين الجولات** يأتي ثانياً حالما تملك عناوينك موقع GPS. الباقي ينتظر أشهراً من البيانات.'] },
      { heading: 'التكلفة والجدول الزمني', body: ['تطبيق ميداني بشاشات الموظف الثلاث والتوزيع والحضور وتصدير الأجور وإشعارات العملاء يقع في الفئة 2 من [شبكة أسعار التطبيقات في الجزائر](/blog/prix-application-mobile-algerie-2026/)، مع التقرير الصوتي بالذكاء الاصطناعي اختيارياً. الجدول يكتمل في اثني عشر أسبوعاً مع فريق تجريبي يعمل بالتوازي مع الهاتف.'], visual: 'timeline', after: ['قاعدة التجربة: **لا نقطع الهاتف، ننتظر أن يتوقف الفريق التجريبي عن استعماله من تلقاء نفسه.** يستغرق ذلك عادة عشرة أيام، ريثما يفهم الموظفون أن التطبيق إثبات لساعاتهم وعملهم لا أداة مراقبة. هكذا يجب تقديمه لأنه كذلك فعلاً.'] },
      { heading: 'الأخطاء التي نراها في شركات الميدان', body: [], list: [
        '**البدء بـERP.** ستة أشهر من المشروع وشاشات لا يفتحها أحد في الخارج ويستمر الهاتف.',
        '**تطبيق بخمس عشرة شاشة للموظف.** ثلاث تكفي. الباقي للمكتب.',
        '**تقديم الأداة كمراقبة.** سيتم الالتفاف عليها. قدّمها كإثبات لساعاتهم ومنحهم لأن هذا صحيح.',
        '**تجاهل العمل دون اتصال.** المهمة التي لا تُسجَّل بلا شبكة لا تُسجَّل.',
        '**حساب الأجور في التطبيق من اليوم الأول.** صدّر ساعات موثوقة للمحاسب وقرّر وحدة الأجور بعد ستة أشهر.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'ليس لكل موظفيّ هاتف ذكي.', a: 'يكفي Android اقتصادي لتطبيق خفيف يعمل دون اتصال. للمناصب بلا هاتف يمكن أن يمر الحضور عبر المشرف أو برسالة SMS. تكلفة الهواتف أدنى بكثير من تكلفة الساعات المتنازع عليها كل شهر.' },
        { q: 'سيخاف موظفيّ من المراقبة.', a: 'من حقهم أن يسألوا. يجب تقديم التطبيق وتصميمه كإثبات لساعاتهم ومهامهم ومنحهم. يُسجَّل الموقع فقط في بداية المهمة ونهايتها لا باستمرار، ويجب كتابة ذلك.' },
        { q: 'ERP أم تطبيق ميداني؟', a: 'تطبيق الميدان أولاً. يحل المعلومات الثلاث الحيوية في اثني عشر أسبوعاً. يُبرَّر ERP بعدها إن كان لديك مخزون أو فوترة معقدة أو عدة شركات، ويتصل بالبيانات النظيفة التي ينتجها التطبيق.' },
        { q: 'كم من الوقت قبل أن يعمل فعلاً؟', a: 'اثنا عشر أسبوعاً حتى الانتقال، منها أسبوعا تجربة مع فريق من عشرة. أول تصدير أجور موثوق يصل آخر أول شهر كامل.' },
        { q: 'أقود الشركة من فرنسا، هل هذا ممكن؟', a: 'المنتج نعم. الميدان لا: مشرف محلي يحمل القاعدة لا غنى عنه. يمنحه التطبيق بالضبط ما كان ينقصه، الرؤية بلا مكالمات.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'الهاتف ليس المشكلة. المشكلة أن المعلومة تموت في نهاية المكالمة.' },
      { after: 2, text: 'تطبيق الميدان يكتفي بثلاث شاشات: يومي، مهمتي، إثباتي. كل ما عداها للمكتب.' },
    ],
    cta: { eyebrow: 'صف فرقك', title: 'كم موظفاً في الخارج، كم فريقاً، أي نوع مهام. سنخبرك في أي درجة أنت وما الذي يجب أن يحتويه التطبيق، وخصوصاً ما لا يجب.', body: 'تصمم سيملوب تطبيقات ميدانية ومنصات توزيع لشركات النقل والتوصيل والصيانة والخدمات في الجزائر: ثلاث شاشات للموظف، دون اتصال، عربي وفرنسي، تقرير صوتي بالذكاء الاصطناعي. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/', kind: 'دليل', name: 'تسيير أسطول التوصيل والتتبع GPS في الجزائر' },
      { href: '/blog/logiciel-gestion-livraison-distribution-algerie-2026/', kind: 'دليل', name: 'برنامج تسيير التوصيل والتوزيع' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'مشكلة', name: 'هل يمكن معرفة السعر الإجمالي قبل البدء؟' },
      { href: '/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/', kind: 'مشكلة', name: 'وكالتي العقارية تشتغل على واتساب وGoogle Sheets' },
    ] },
  },
};

const KEYWORDS = "gérer employés terrain application, digitaliser entreprise de transport algérie, application pointage employés algérie, gestion équipe terrain whatsapp, application mission employés hors ligne, logiciel gestion chauffeurs algérie, تسيير الموظفين الميدانيين تطبيق, field team app algeria";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
