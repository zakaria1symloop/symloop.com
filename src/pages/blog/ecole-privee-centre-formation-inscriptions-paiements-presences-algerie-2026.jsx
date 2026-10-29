import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026.mjs';

const SLUG = 'ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026';
const FIGURES = ['leaks', 'platform', 'ai', 'timeline'];
const DATE = '2026-10-30';

const CONTENT = {
  fr: {
    kind: 'Problème · École privée et formation', title: "Je gère une école privée et tout est sur papier : inscriptions, paiements par tranches, présences, parents sur WhatsApp. Par où commencer (Algérie, 2026).",
    dek: "École privée, crèche, école de langues, centre de soutien ou de formation : les inscriptions se font en septembre dans la cour, les tranches se paient en espèces avec un reçu manuel, l'appel est dans un cahier et les parents vivent dans un groupe WhatsApp. Ce que vous perdez chaque trimestre, ce qui se règle en une semaine, la plateforme qu'il faut, où l'IA aide, et le calendrier pour être prêt à la rentrée.",
    publishedAt: 'Octobre 2026', readTime: '9 min de lecture', author: 'Symloop', about: ['École privée', 'Centre de formation', 'Gestion scolaire', 'Application parents', 'Algérie'],
    intro: [
      "**Réponse courte.** Une école privée perd de l'argent à deux endroits précis : les tranches impayées découvertes trop tard, et les élèves qui décrochent sans que personne n'ait vu les absences s'accumuler. Les trois autres fuites, inscriptions dans la cour, enseignants payés de mémoire, groupe WhatsApp saturé, coûtent du temps et de la réputation. **La solution tient en un dossier élève unique, un échéancier qui sait qui doit quoi, un appel en deux gestes sur le téléphone de l'enseignant, et une application pour les parents** qui montre les absences du jour, les notes et les paiements. Elle se prépare en juin, s'ouvre aux réinscriptions en juillet, et fait l'appel dès le premier jour de septembre. L'IA vient ensuite, sur deux usages qui paient : les relances de paiement et les alertes de décrochage.",
      "Ce guide répond à une famille de questions que nous recevons de directeurs d'écoles privées, d'écoles de langues et de centres de formation, et à un développeur qui nous a écrit sur ce site pour construire un logiciel destiné aux écoles privées et aux centres de soutien. Il vaut pour les deux : celui qui gère une école, et celui qui veut l'équiper.",
    ],
    sections: [
      { heading: "Ce qu'une école perd quand tout est sur papier", body: [
        "Les directeurs connaissent ces fuites une par une. Ce qu'ils voient moins, c'est qu'elles ont la même cause : chaque information vit dans un cahier, un reçu ou un téléphone, et n'existe nulle part où l'on pourrait la consulter sans déranger quelqu'un.",
      ], visual: 'leaks', after: [
        "Les deux premières coûtent le plus. **L'impayé** découvert en fin de trimestre est un impayé qu'on ne récupère plus, parce que l'élève est déjà passé au trimestre suivant et que la relation avec la famille rend la discussion difficile. **L'absence répétée** est le signal du décrochage, et donc d'une famille qui partira à la rentrée suivante ; vue à temps, elle se traite par un appel.",
      ] },
      { heading: 'Palier 1 — Ce qui se règle en une semaine, sans logiciel', body: [
        "Quatre règles applicables lundi, avec ce que vous avez déjà.",
      ], preOrdered: [
        "**Un seul registre des élèves**, une feuille partagée : nom, classe, tranches dues, tranches payées avec date et numéro de reçu. Personne d'autre que le secrétariat n'y écrit.",
        "**L'appel noté le jour même**, par classe, dans une seconde feuille ou un cahier unique, et les absents du jour envoyés aux parents avant midi par un message type.",
        "**Un numéro WhatsApp d'école** tenu par le secrétariat, en diffusion uniquement : informations de l'école, pas de discussions. Les questions passent par téléphone ou par le bureau.",
        "**Le point du lundi** : impayés de plus de quinze jours, élèves absents plus de trois fois, enseignants dont les heures ne sont pas notées. Quinze minutes.",
      ], after: [
        "Pour une petite structure, une école de langues à trois classes ou un centre de soutien, **ce palier tient souvent une année entière.** Pour une école primaire de trois cents élèves, il tient un trimestre : le temps de préparer la suite.",
      ] },
      { heading: "Palier 2 — La plateforme d'école : ce qu'elle doit contenir", body: [
        "Les signes qu'il est temps : plus de cent cinquante élèves, plusieurs niveaux, des parents qui demandent où en sont les paiements et les absences, un secrétariat qui passe ses journées au téléphone, et un directeur qui découvre les chiffres en fin de trimestre. Nous avons détaillé le cas des écoles dans notre dossier sur la [digitalisation de l'éducation en Algérie](/solutions/digitalisation-education-algerie/) ; voici le minimum pour une école privée.",
      ], visual: 'platform', after: [
        "**L'application parents** est ce qui justifie le projet aux yeux des familles : elles voient l'absence du matin avant midi, les notes quand elles tombent, l'échéancier et les reçus, et les messages de l'école sans le bruit d'un groupe. **Le dossier élève unique et l'échéancier** sont ce qui le justifie aux yeux de la direction : qui doit quoi, aujourd'hui, et quelles familles ont besoin d'un appel. **L'appel en deux gestes** est ce qui le justifie aux yeux des enseignants : moins de travail qu'un cahier, pas plus.",
        "Les paiements restent majoritairement en espèces au secrétariat, enregistrés dans la plateforme avec un reçu imprimé ou envoyé dans l'application ; CIB et Edahabia s'ajoutent pour les familles qui le demandent, nous avons documenté [l'intégration du paiement en ligne](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/). Les données concernent des mineurs : hébergement conforme à la loi 18-07 et accès tracés ne sont pas une option.",
        "Logiciel existant ou sur mesure ? Des logiciels de gestion scolaire existent par abonnement et conviennent à une école aux processus standards. Le sur mesure se justifie pour un groupe de plusieurs établissements, un centre de formation avec des sessions et des certifications plutôt que des classes, ou, comme le développeur qui nous a écrit, pour construire un produit à vendre à d'autres écoles par abonnement. Notre guide des [logiciels de gestion pour écoles et centres de formation](/blog/logiciel-ecole-gestion-scolaire-algerie-2026/) compare les deux.",
      ] },
      { heading: "Où l'IA aide une école, et où elle n'apporte rien", body: [
        "Deux usages paient, et ils traitent exactement les deux fuites les plus chères.",
      ], visual: 'ai', after: [
        "**Les relances de paiement personnalisées** : un message au bon moment, dans la langue de la famille, avec le montant exact et la façon de payer, puis une alerte au secrétariat pour les familles qui ne répondent pas. **Les alertes de décrochage** : l'IA repère l'élève dont les absences changent de rythme, avant que le trimestre ne soit perdu, et propose un appel à la famille. Les deux exigent que l'échéancier et l'appel vivent dans la plateforme. Le reste, réponses aux parents, planning, consolide. La correction des copies reste l'acte de l'enseignant.",
      ] },
      { heading: 'Le calendrier : prêt pour la rentrée en douze semaines', body: [
        "On ne bascule pas une école en septembre. Le calendrier qui marche part de juin, ouvre les réinscriptions en ligne en juillet, les nouvelles inscriptions en août, et fait l'appel dans la plateforme dès le premier jour. Un projet sur mesure pour ce périmètre se situe en catégorie 2 de notre [grille de prix](/blog/prix-application-mobile-algerie-2026/), l'IA de relance et d'alerte en option.",
      ], visual: 'timeline', after: [
        "La semaine qui compte est la reprise : élèves de l'année en cours, tranches payées et impayées, enseignants et heures. Une plateforme ouverte à la rentrée avec des soldes faux perd la confiance des parents en une semaine. Ouverte avec des soldes justes, elle devient le point de référence des familles, et le groupe WhatsApp se vide tout seul.",
      ] },
      { heading: 'Les erreurs que nous voyons dans les écoles', body: [], list: [
        "**Basculer en septembre.** La rentrée est le pire moment. Préparez en juin, inscrivez en été.",
        "**Ouvrir l'application parents avec des soldes faux.** La confiance se perd en une semaine. Reprenez les impayés avant.",
        "**Demander aux enseignants plus qu'un appel en deux gestes.** Ils retournent au cahier. Les notes et les devoirs viennent après l'appel, jamais avant.",
        "**Garder le groupe WhatsApp des parents comme canal officiel.** L'information importante se noie. L'application diffuse, le téléphone discute.",
        "**Choisir un logiciel qui ignore les tranches et les espèces.** Les écoles algériennes vivent des tranches payées au secrétariat. Un logiciel qui ne les gère pas ne gère pas l'école.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Les parents vont-ils installer une application ?", a: "Oui, si elle leur apporte dès le premier jour ce qu'ils demandent déjà par téléphone : l'absence du matin, les notes, le solde. Le taux d'installation dépasse rapidement la grande majorité des familles quand l'école annonce que les informations passent désormais par là." },
        { q: "Peut-on gérer les paiements en espèces dans la plateforme ?", a: "Oui, et c'est indispensable. Le secrétariat enregistre le versement, la plateforme émet le reçu et met l'échéancier à jour. CIB et Edahabia s'ajoutent en option pour les familles qui le souhaitent." },
        { q: "Et les enseignants qui n'ont pas de smartphone ?", a: "L'appel peut être fait par le secrétariat ou sur une tablette de classe. Mais un appel en deux gestes sur n'importe quel téléphone Android reste la solution la plus fiable." },
        { q: "Logiciel existant ou sur mesure ?", a: "Existant pour une école unique aux processus standards. Sur mesure pour un groupe d'établissements, un centre de formation en sessions et certifications, ou pour construire un produit à vendre à d'autres écoles." },
        { q: "Combien de temps pour être prêt à la rentrée ?", a: "Douze semaines en partant de juin : cadrage, reprise, développement ou paramétrage, réinscriptions en ligne, appel dès le premier jour. Commencer en août, c'est basculer en novembre." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "L'impayé découvert en fin de trimestre est un impayé qu'on ne récupère plus. L'absence répétée vue à temps se traite par un appel." },
      { after: 2, text: "Ouverte avec des soldes justes, l'application devient le point de référence des familles, et le groupe WhatsApp se vide tout seul." },
    ],
    cta: { eyebrow: 'Décrivez votre établissement', title: "Combien d'élèves, combien de classes ou de sessions, comment se paient les tranches. Nous vous dirons si un logiciel existant suffit ou ce que le sur mesure doit contenir, et le calendrier pour la prochaine rentrée.", body: "Symloop conçoit des plateformes de gestion pour les écoles privées, les écoles de langues et les centres de formation en Algérie : dossier élève unique, échéancier et reçus, appel en deux gestes, application parents en arabe et en français, relances et alertes par IA, hébergement conforme à la loi 18-07. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/solutions/digitalisation-education-algerie/', kind: 'Dossier', name: "Digitalisation de l'éducation en Algérie" },
      { href: '/blog/logiciel-ecole-gestion-scolaire-algerie-2026/', kind: 'Guide', name: 'Logiciel de gestion pour écoles et centres de formation' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problème', name: 'Peut-on connaître le prix total avant de commencer ?' },
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'Problème', name: 'Je gère cinquante employés et tout passe par téléphone' },
    ] },
  },
  en: {
    kind: 'Problem · Private school and training', title: 'I run a private school and everything is on paper: enrolments, instalment payments, attendance, parents on WhatsApp. Where to start (Algeria, 2026).',
    dek: "Private school, nursery, language school, tutoring or training centre: enrolments happen in September in the yard, instalments are paid in cash with a handwritten receipt, roll call is in a notebook and parents live in a WhatsApp group. What you lose every term, what gets fixed in a week, the platform you need, where AI helps, and the timeline to be ready for September.",
    publishedAt: 'October 2026', readTime: '9 min read', author: 'Symloop', about: ['Private school', 'Training centre', 'School management', 'Parent app', 'Algeria'],
    intro: [
      "**Short answer.** A private school loses money in two precise places: unpaid instalments discovered too late, and students who drop out without anyone seeing the absences pile up. The other three leaks, enrolments in the yard, teachers paid from memory, saturated WhatsApp group, cost time and reputation. **The solution fits in a single student record, a payment schedule that knows who owes what, a two-tap roll call on the teacher's phone, and a parent app** showing today's absences, grades and payments. It is prepared in June, opened for re-enrolments in July, and takes roll call from the first day of September. AI comes after, on two uses that pay: payment reminders and drop-out alerts.",
      "This guide answers a family of questions we receive from heads of private schools, language schools and training centres, and a developer who wrote to us on this site to build software for private schools and tutoring centres. It works for both: the one who runs a school, and the one who wants to equip it.",
    ],
    sections: [
      { heading: 'What a school loses when everything is on paper', body: [
        "Heads know these leaks one by one. What they see less is that they share the same cause: every piece of information lives in a notebook, a receipt or a phone, and exists nowhere it could be consulted without disturbing someone.",
      ], visual: 'leaks', after: [
        "The first two cost the most. **The unpaid fee** discovered at term end is one you no longer recover, because the student has already moved to the next term and the relationship with the family makes the conversation difficult. **The repeated absence** is the signal of drop-out, and therefore of a family that will leave next September; seen in time, it is handled with a phone call.",
      ] },
      { heading: 'Tier 1 — What gets fixed in a week, without software', body: [
        "Four rules applicable on Monday, with what you already have.",
      ], preOrdered: [
        "**One student register**, a shared sheet: name, class, instalments due, instalments paid with date and receipt number. Nobody but the office writes in it.",
        "**Roll call recorded the same day**, per class, in a second sheet or a single notebook, and the day's absentees sent to parents before noon with a template message.",
        "**One school WhatsApp number** held by the office, broadcast only: school information, no discussions. Questions go by phone or at the office.",
        "**The Monday review**: fees unpaid for more than fifteen days, students absent more than three times, teachers whose hours are not recorded. Fifteen minutes.",
      ], after: [
        "For a small structure, a three-class language school or a tutoring centre, **this tier often holds a whole year.** For a three-hundred-student primary school, it holds a term: the time to prepare what follows.",
      ] },
      { heading: 'Tier 2 — The school platform: what it must contain', body: [
        "The signs it is time: more than a hundred and fifty students, several levels, parents asking where payments and absences stand, an office spending its days on the phone, and a head discovering the numbers at term end. We detailed the case of schools in our report on [education digitisation in Algeria](/solutions/digitalisation-education-algerie/); here is the minimum for a private school.",
      ], visual: 'platform', after: [
        "**The parent app** is what justifies the project to families: they see the morning absence before noon, grades when they land, the schedule and receipts, and school messages without the noise of a group. **The single student record and the schedule** are what justify it to management: who owes what, today, and which families need a call. **The two-tap roll call** is what justifies it to teachers: less work than a notebook, not more.",
        "Payments remain mostly cash at the office, recorded in the platform with a printed receipt or one sent in the app; CIB and Edahabia are added for families who ask, we documented [online payment integration](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/). The data concerns minors: Law 18-07 compliant hosting and traced access are not optional.",
        "Existing software or custom? School management software exists by subscription and suits a school with standard processes. Custom is justified for a group of several institutions, a training centre with sessions and certifications rather than classes, or, like the developer who wrote to us, to build a product to sell to other schools by subscription. Our guide to [management software for schools and training centres](/blog/logiciel-ecole-gestion-scolaire-algerie-2026/) compares the two.",
      ] },
      { heading: 'Where AI helps a school, and where it adds nothing', body: [
        "Two uses pay, and they address exactly the two most expensive leaks.",
      ], visual: 'ai', after: [
        "**Personalised payment reminders**: a message at the right time, in the family's language, with the exact amount and how to pay, then an alert to the office for families who do not respond. **Drop-out alerts**: AI spots the student whose absences change rhythm, before the term is lost, and suggests a call to the family. Both require the schedule and roll call to live in the platform. The rest, parent answers, planning, consolidates. Marking papers remains the teacher's act.",
      ] },
      { heading: 'The timeline: ready for September in twelve weeks', body: [
        "You do not switch a school in September. The timeline that works starts in June, opens online re-enrolments in July, new enrolments in August, and takes roll call in the platform from day one. A custom project for this scope sits in category 2 of our [price grid](/blog/prix-application-mobile-algerie-2026/), with reminder and alert AI as options.",
      ], visual: 'timeline', after: [
        "The week that counts is the import: current-year students, paid and unpaid instalments, teachers and hours. A platform opened in September with wrong balances loses parents' trust within a week. Opened with correct balances, it becomes the families' reference point, and the WhatsApp group empties on its own.",
      ] },
      { heading: 'The mistakes we see in schools', body: [], list: [
        "**Switching in September.** Back to school is the worst moment. Prepare in June, enrol in summer.",
        "**Opening the parent app with wrong balances.** Trust is lost within a week. Import unpaid fees first.",
        "**Asking teachers for more than a two-tap roll call.** They go back to the notebook. Grades and homework come after roll call, never before.",
        "**Keeping the parents' WhatsApp group as the official channel.** Important information drowns. The app broadcasts, the phone discusses.",
        "**Choosing software that ignores instalments and cash.** Algerian schools live on instalments paid at the office. Software that does not handle them does not handle the school.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Will parents install an app?', a: 'Yes, if from day one it gives them what they already ask for by phone: the morning absence, grades, the balance. Installation quickly exceeds the vast majority of families once the school announces that information now goes through it.' },
        { q: 'Can cash payments be handled in the platform?', a: 'Yes, and it is essential. The office records the payment, the platform issues the receipt and updates the schedule. CIB and Edahabia are added as options for families who want them.' },
        { q: 'What about teachers without a smartphone?', a: 'Roll call can be done by the office or on a classroom tablet. But a two-tap roll call on any Android phone remains the most reliable solution.' },
        { q: 'Existing software or custom?', a: 'Existing for a single school with standard processes. Custom for a group of institutions, a training centre with sessions and certifications, or to build a product to sell to other schools.' },
        { q: 'How long to be ready for September?', a: 'Twelve weeks starting in June: scoping, import, development or setup, online re-enrolments, roll call from day one. Starting in August means switching in November.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'The unpaid fee discovered at term end is one you no longer recover. The repeated absence seen in time is handled with a phone call.' },
      { after: 2, text: 'Opened with correct balances, the app becomes the families’ reference point, and the WhatsApp group empties on its own.' },
    ],
    cta: { eyebrow: 'Describe your institution', title: 'How many students, how many classes or sessions, how instalments are paid. We will tell you whether existing software is enough or what custom must contain, and the timeline for next September.', body: 'Symloop designs management platforms for private schools, language schools and training centres in Algeria: single student record, schedule and receipts, two-tap roll call, parent app in Arabic and French, AI reminders and alerts, Law 18-07 compliant hosting. Senior engineers in Algiers and Sétif, written scope, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/solutions/digitalisation-education-algerie/', kind: 'Report', name: 'Education digitisation in Algeria' },
      { href: '/blog/logiciel-ecole-gestion-scolaire-algerie-2026/', kind: 'Guide', name: 'Management software for schools and training centres' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problem', name: 'Can I know the total price before starting?' },
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'Problem', name: 'I manage fifty employees and everything goes by phone' },
    ] },
  },
  ar: {
    kind: 'مشكلة · مدرسة خاصة وتكوين', title: 'أدير مدرسة خاصة وكل شيء على الورق: تسجيلات، أقساط، حضور، أولياء على واتساب. من أين أبدأ (الجزائر، 2026).',
    dek: 'مدرسة خاصة، روضة، مدرسة لغات، مركز دعم أو تكوين: التسجيلات في سبتمبر في الساحة، الأقساط نقداً بوصل يدوي، المناداة في دفتر، والأولياء يعيشون في مجموعة واتساب. ما تخسره كل فصل، ما يُحلّ في أسبوع، المنصة اللازمة، أين يساعد الذكاء الاصطناعي، والجدول لتكون جاهزاً للدخول المدرسي.',
    publishedAt: 'أكتوبر 2026', readTime: '9 دقائق قراءة', author: 'سيملوب', about: ['مدرسة خاصة', 'مركز تكوين', 'تسيير مدرسي', 'تطبيق الأولياء', 'الجزائر'],
    intro: [
      '**الجواب المختصر.** تخسر المدرسة الخاصة المال في موضعين محددين: الأقساط غير المدفوعة المكتشفة متأخراً، والتلاميذ الذين ينقطعون دون أن يرى أحد تراكم الغيابات. التسربات الثلاثة الأخرى، التسجيلات في الساحة والأساتذة المدفوع لهم من الذاكرة ومجموعة واتساب المشبعة، تكلّف وقتاً وسمعة. **الحل يكتفي بملف تلميذ واحد، وجدول أقساط يعرف من يدين بماذا، ومناداة بلمستين على هاتف الأستاذ، وتطبيق للأولياء** يعرض غيابات اليوم والنقاط والمدفوعات. يُحضَّر في جوان، يُفتح لإعادة التسجيل في جويلية، ويأخذ المناداة من أول يوم في سبتمبر. يأتي الذكاء الاصطناعي بعدها على استخدامين مجديين: تذكيرات الدفع وتنبيهات الانقطاع.',
      'يجيب هذا الدليل عن عائلة من الأسئلة نتلقاها من مديري مدارس خاصة ومدارس لغات ومراكز تكوين، وعن مطوّر كتب لنا على هذا الموقع لبناء برنامج موجه للمدارس الخاصة ومراكز الدعم. يصلح للاثنين: من يدير مدرسة، ومن يريد تجهيزها.',
    ],
    sections: [
      { heading: 'ما تخسره المدرسة عندما يكون كل شيء على الورق', body: ['يعرف المديرون هذه التسربات واحدة واحدة. ما يرونه أقل أن لها السبب نفسه: كل معلومة تعيش في دفتر أو وصل أو هاتف، ولا توجد في أي مكان يمكن الرجوع إليه دون إزعاج أحد.'], visual: 'leaks', after: ['الأوليان تكلّفان أكثر. **القسط غير المدفوع** المكتشف آخر الفصل قسط لا يُسترد، لأن التلميذ انتقل إلى الفصل التالي والعلاقة مع العائلة تجعل النقاش صعباً. **الغياب المتكرر** إشارة الانقطاع، وبالتالي عائلة سترحل في الدخول المدرسي التالي؛ وإن رُئي في وقته يُعالج بمكالمة.'] },
      { heading: 'الدرجة 1 — ما يُحلّ في أسبوع، بلا برنامج', body: ['أربع قواعد قابلة للتطبيق يوم الاثنين بما لديك أصلاً.'], preOrdered: [
        '**سجل تلاميذ واحد**، ورقة مشتركة: الاسم، القسم، الأقساط المستحقة، الأقساط المدفوعة بالتاريخ ورقم الوصل. لا يكتب فيها غير السكرتارية.',
        '**المناداة تُسجَّل في اليوم نفسه** لكل قسم، في ورقة ثانية أو دفتر واحد، وتُرسل غيابات اليوم للأولياء قبل الظهر برسالة نموذجية.',
        '**رقم واتساب واحد للمدرسة** تديره السكرتارية، للبث فقط: معلومات المدرسة لا نقاشات. الأسئلة بالهاتف أو في المكتب.',
        '**اجتماع الاثنين**: متأخرات تجاوزت خمسة عشر يوماً، تلاميذ غابوا أكثر من ثلاث مرات، أساتذة لم تُسجَّل ساعاتهم. ربع ساعة.',
      ], after: ['لهيكل صغير، مدرسة لغات بثلاثة أقسام أو مركز دعم، **تصمد هذه الدرجة غالباً سنة كاملة.** ولمدرسة ابتدائية بثلاثمئة تلميذ تصمد فصلاً: ريثما تُحضَّر الخطوة التالية.'] },
      { heading: 'الدرجة 2 — منصة المدرسة: ما يجب أن تحتويه', body: ['العلامات: أكثر من مئة وخمسين تلميذاً، عدة مستويات، أولياء يسألون عن المدفوعات والغيابات، سكرتارية تقضي أيامها على الهاتف، ومدير يكتشف الأرقام آخر الفصل. فصّلنا حالة المدارس في ملف [رقمنة التعليم في الجزائر](/solutions/digitalisation-education-algerie/)؛ وهذا الحد الأدنى لمدرسة خاصة.'], visual: 'platform', after: [
        '**تطبيق الأولياء** هو ما يبرّر المشروع في أعين العائلات: يرون غياب الصباح قبل الظهر، والنقاط حين تصدر، وجدول الأقساط والوصولات، ورسائل المدرسة بلا ضجيج مجموعة. **ملف التلميذ الواحد وجدول الأقساط** هما ما يبرّره في أعين الإدارة: من يدين بماذا اليوم وأي العائلات تحتاج مكالمة. **المناداة بلمستين** هي ما يبرّره في أعين الأساتذة: عمل أقل من الدفتر لا أكثر.',
        'تبقى المدفوعات نقدية في أغلبها عند السكرتارية، مسجَّلة في المنصة بوصل مطبوع أو مرسل في التطبيق؛ ويُضاف CIB والذهبية للعائلات التي تطلب، وثّقنا [تكامل الدفع الإلكتروني](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/). البيانات تخص قاصرين: الاستضافة المطابقة للقانون 18-07 والوصول المتتبع ليسا اختياريين.',
        'برنامج جاهز أم مخصص؟ توجد برامج تسيير مدرسي بالاشتراك تناسب مدرسة بعمليات قياسية. يُبرَّر المخصص لمجموعة مؤسسات، أو لمركز تكوين بدورات وشهادات بدل أقسام، أو، كالمطوّر الذي كتب لنا، لبناء منتج يُباع لمدارس أخرى بالاشتراك. يقارن دليل [برامج تسيير المدارس ومراكز التكوين](/blog/logiciel-ecole-gestion-scolaire-algerie-2026/) الاثنين.',
      ] },
      { heading: 'أين يساعد الذكاء الاصطناعي المدرسة، وأين لا يضيف شيئاً', body: ['استخدامان مجديان، ويعالجان بالضبط أغلى تسربين.'], visual: 'ai', after: ['**تذكيرات الدفع المخصصة**: رسالة في الوقت المناسب بلغة العائلة بالمبلغ الدقيق وطريقة الدفع، ثم تنبيه للسكرتارية للعائلات التي لا ترد. **تنبيهات الانقطاع**: يرصد الذكاء الاصطناعي التلميذ الذي يتغير إيقاع غياباته قبل ضياع الفصل ويقترح مكالمة للعائلة. يتطلب الاثنان أن يعيش جدول الأقساط والمناداة في المنصة. الباقي، أجوبة الأولياء والتخطيط، يعزّز. أما تصحيح الأوراق فيبقى فعل الأستاذ.'] },
      { heading: 'الجدول: جاهزون للدخول المدرسي في اثني عشر أسبوعاً', body: ['لا تنتقل مدرسة في سبتمبر. الجدول الذي ينجح ينطلق من جوان، يفتح إعادة التسجيل الإلكتروني في جويلية والتسجيلات الجديدة في أوت، ويأخذ المناداة في المنصة من اليوم الأول. يقع مشروع مخصص لهذا النطاق في الفئة 2 من [شبكة أسعارنا](/blog/prix-application-mobile-algerie-2026/)، مع ذكاء التذكير والتنبيه اختيارياً.'], visual: 'timeline', after: ['الأسبوع الذي يهم هو الاسترجاع: تلاميذ السنة الجارية، الأقساط المدفوعة وغير المدفوعة، الأساتذة والساعات. منصة تُفتح في الدخول المدرسي بأرصدة خاطئة تفقد ثقة الأولياء في أسبوع. وإن فُتحت بأرصدة صحيحة أصبحت مرجع العائلات، وتفرغ مجموعة واتساب من تلقاء نفسها.'] },
      { heading: 'الأخطاء التي نراها في المدارس', body: [], list: [
        '**الانتقال في سبتمبر.** الدخول المدرسي أسوأ لحظة. حضّر في جوان وسجّل في الصيف.',
        '**فتح تطبيق الأولياء بأرصدة خاطئة.** تضيع الثقة في أسبوع. استرجع المتأخرات أولاً.',
        '**طلب أكثر من مناداة بلمستين من الأساتذة.** يعودون إلى الدفتر. النقاط والواجبات بعد المناداة لا قبلها.',
        '**إبقاء مجموعة واتساب الأولياء قناة رسمية.** تغرق المعلومة المهمة. التطبيق يبث والهاتف يناقش.',
        '**اختيار برنامج يتجاهل الأقساط والنقد.** تعيش المدارس الجزائرية على أقساط تُدفع في السكرتارية. برنامج لا يديرها لا يدير المدرسة.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'هل سيثبّت الأولياء تطبيقاً؟', a: 'نعم إن منحهم من اليوم الأول ما يطلبونه أصلاً بالهاتف: غياب الصباح، النقاط، الرصيد. تتجاوز نسبة التثبيت بسرعة الغالبية العظمى من العائلات عندما تعلن المدرسة أن المعلومات تمر من هناك.' },
        { q: 'هل يمكن إدارة المدفوعات النقدية في المنصة؟', a: 'نعم وهو ضروري. تسجّل السكرتارية الدفعة وتصدر المنصة الوصل وتحدّث جدول الأقساط. يُضاف CIB والذهبية اختيارياً للعائلات الراغبة.' },
        { q: 'والأساتذة بلا هاتف ذكي؟', a: 'يمكن أن تقوم السكرتارية بالمناداة أو على لوحي القسم. لكن المناداة بلمستين على أي هاتف Android تبقى الحل الأكثر موثوقية.' },
        { q: 'برنامج جاهز أم مخصص؟', a: 'جاهز لمدرسة واحدة بعمليات قياسية. مخصص لمجموعة مؤسسات أو مركز تكوين بدورات وشهادات أو لبناء منتج يُباع لمدارس أخرى.' },
        { q: 'كم من الوقت لتكون جاهزاً للدخول المدرسي؟', a: 'اثنا عشر أسبوعاً انطلاقاً من جوان: تأطير، استرجاع، تطوير أو إعداد، إعادة تسجيل إلكتروني، مناداة من اليوم الأول. البدء في أوت يعني الانتقال في نوفمبر.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'القسط غير المدفوع المكتشف آخر الفصل قسط لا يُسترد. والغياب المتكرر المرئي في وقته يُعالج بمكالمة.' },
      { after: 2, text: 'إن فُتح التطبيق بأرصدة صحيحة أصبح مرجع العائلات، وتفرغ مجموعة واتساب من تلقاء نفسها.' },
    ],
    cta: { eyebrow: 'صف مؤسستك', title: 'كم تلميذاً، كم قسماً أو دورة، كيف تُدفع الأقساط. سنخبرك إن كان برنامج جاهز يكفي أو ما الذي يجب أن يحتويه المخصص، والجدول للدخول المدرسي القادم.', body: 'تصمم سيملوب منصات تسيير للمدارس الخاصة ومدارس اللغات ومراكز التكوين في الجزائر: ملف تلميذ واحد، جدول أقساط ووصولات، مناداة بلمستين، تطبيق أولياء بالعربية والفرنسية، تذكيرات وتنبيهات بالذكاء الاصطناعي، استضافة مطابقة للقانون 18-07. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/solutions/digitalisation-education-algerie/', kind: 'ملف', name: 'رقمنة التعليم في الجزائر' },
      { href: '/blog/logiciel-ecole-gestion-scolaire-algerie-2026/', kind: 'دليل', name: 'برامج تسيير المدارس ومراكز التكوين' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'مشكلة', name: 'هل يمكن معرفة السعر الإجمالي قبل البدء؟' },
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'مشكلة', name: 'أسيّر خمسين موظفاً وكل شيء يمر بالهاتف' },
    ] },
  },
};

const KEYWORDS = "logiciel gestion école privée algérie, application parents école algérie, gestion paiements tranches école, inscription en ligne école privée, appel présences application enseignant, logiciel centre de formation algérie, gestion scolaire algérie, private school management software algeria, برنامج تسيير مدرسة خاصة الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
