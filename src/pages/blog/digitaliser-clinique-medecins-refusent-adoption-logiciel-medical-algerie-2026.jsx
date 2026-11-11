import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/digitaliser-clinique-medecins-refusent-adoption-logiciel-medical-algerie-2026.mjs';

const SLUG = 'digitaliser-clinique-medecins-refusent-adoption-logiciel-medical-algerie-2026';
const FIGURES = ['reasons', 'screens', 'ai', 'timeline'];
const DATE = '2026-10-29';

const CONTENT = {
  fr: {
    kind: 'Problème · Clinique et cabinet', title: "Je veux digitaliser ma clinique mais mes médecins refusent : comment faire adopter un logiciel médical sans l'imposer (Algérie, 2026).",
    dek: "Vous dirigez une clinique ou un centre médical, vous avez décidé de passer au dossier patient informatisé, et vos médecins ne veulent pas en entendre parler. Pourquoi ils ont souvent raison, ce qu'un logiciel doit faire pour qu'un médecin l'ouvre, l'ordre de déploiement qui marche, où l'IA retourne les réticents, et les vingt semaines service par service.",
    publishedAt: 'Octobre 2026', readTime: '9 min de lecture', author: 'Symloop', about: ['Clinique', 'Logiciel médical', 'Dossier patient', 'Adoption', 'Algérie'],
    intro: [
      "**Réponse courte.** Vos médecins ne refusent pas le numérique. Ils refusent de taper au lieu de soigner, de perdre vingt ans de notes, d'être comptés par la direction et de revivre le dernier logiciel raté. Chacune de ces objections a une réponse concrète, et aucune ne passe par l'autorité. **Le logiciel qui s'adopte tient en deux écrans pour le médecin, ma journée et la consultation, avec la dictée vocale à la place du clavier, et laisse la facturation, le stock et les statistiques au secrétariat et à la direction.** Il se déploie dans un service, avec deux médecins volontaires, pendant quatre semaines, puis s'étend parce que les autres le demandent. Pas avant.",
      "Ce guide répond à une situation que nous rencontrons dans presque toutes les cliniques privées algériennes qui se digitalisent : la direction veut, les médecins freinent, et le projet s'enlise entre les deux. Voici comment le sortir de là, écrit pour être utile même si vous ne faites jamais appel à nous.",
    ],
    sections: [
      { heading: "Pourquoi les médecins refusent, et ce qu'ils veulent dire", body: [
        "Écoutez les objections mot à mot : elles sont presque toujours les mêmes, et presque toujours justes. Un médecin qui voit trente patients par jour n'a pas une minute pour un écran de plus. Un médecin qui a tenu ses dossiers pendant vingt ans ne veut pas les voir disparaître dans un import raté. Un médecin qui a connu un logiciel générique imposé d'en haut ne croit plus personne. Voici les cinq objections que nous entendons, traduites, avec la réponse qui fonctionne.",
      ], visual: 'reasons', after: [
        "Deux de ces réponses relèvent de la direction, pas du logiciel. **Les règles écrites sur ce que la direction voit** : activité par service, occupation, délais, oui ; le détail acte par acte d'un praticien nommé, à définir ensemble, par écrit, avant le premier jour. **Le choix avec deux médecins** : pas un comité, deux praticiens volontaires qui valident les deux écrans sur leur téléphone. Ce sont eux qui convaincront les autres, pas vous.",
      ] },
      { heading: 'Ce que le médecin voit : deux écrans, rien d’autre', body: [
        "Le logiciel de clinique complet existe, nous en avons décrit les modules dans notre guide des [logiciels de clinique et de cabinet médical en Algérie](/blog/logiciel-clinique-cabinet-medical-algerie-2026/). La question de l'adoption n'est pas ce que le logiciel contient, c'est ce que le médecin en voit. La réponse doit tenir sur une main : ma journée, la consultation. Tout le reste appartient au secrétariat et à la direction.",
      ], visual: 'screens', after: [
        "**Ma journée** : les patients du jour, le motif, le dossier en un geste, et rien à saisir. **La consultation** : des notes dictées au téléphone en arabe ou en français, l'ordonnance en trois touches, les examens, le prochain rendez-vous. Si le médecin a besoin de plus d'une heure de formation, l'écran est mal fait. Si on lui demande de saisir un acte pour la facturation, il arrêtera au bout d'une semaine : la secrétaire le fait à partir de la consultation, comme elle le faisait à partir du cahier.",
        "Le dossier patient unique, hébergé conformément à la loi 18-07 avec des accès tracés, est le socle invisible. C'est lui qui rend possible la prise de rendez-vous en ligne et les rappels, que nous décrivons dans notre épisode sur [Doctolib en Algérie](/blog/creer-equivalent-doctolib-algerie-2026/), mais il vient après l'adoption interne, jamais avant.",
      ] },
      { heading: "Où l'IA aide une clinique, et où elle n'apporte rien", body: [
        "L'IA est, dans ce projet précis, l'argument qui retourne les médecins réticents. Pas pour diagnostiquer : pour écrire à leur place.",
      ], visual: 'ai', after: [
        "**La dictée structurée.** Le médecin parle trente secondes à la fin de la consultation, comme il le ferait à une secrétaire : motif, examen, conclusion, traitement. Le dossier s'écrit, structuré, en français ou en arabe, et l'ordonnance se prépare. C'est l'usage qui fait dire à un médecin de cinquante ans « ça, je veux bien ». **Les rappels automatiques** de rendez-vous réduisent les absences dès le premier mois, à condition que l'agenda soit unique au secrétariat. Le reste attend des mois de données. Le diagnostic, lui, reste l'acte du médecin ; nous l'avons écrit dans notre analyse sur [l'IA, la santé et la télémédecine en Algérie](/blog/ia-sante-telemedicine-algerie-2026/).",
      ] },
      { heading: "L'ordre de déploiement qui marche", body: [
        "Toutes les cliniques qui ont échoué ont fait la même chose : acheter le logiciel, former tout le monde un samedi, et exiger le lundi. Toutes celles qui ont réussi ont fait l'inverse : un service, deux médecins volontaires, quatre semaines, puis les autres services à leur demande. Un logiciel sur mesure pour ce périmètre se situe en catégorie 2 de notre [grille de prix](/blog/prix-application-mobile-algerie-2026/), la dictée par IA en option ; un logiciel du marché se paie par abonnement et se déploie plus vite, avec les limites de son éditeur sur les deux écrans et la dictée.",
      ], visual: 'timeline', after: [
        "La semaine qui décide de tout est la reprise des dossiers actifs : les patients vus dans l'année, saisis proprement ; les autres, scannés et rattachés. Un médecin qui ouvre le logiciel le premier jour et ne retrouve pas son patient d'hier retourne au cahier. Celui qui le retrouve, avec ses notes, reste. Nous appliquons la même règle dans notre dossier sur la [digitalisation de la santé en Algérie](/solutions/digitalisation-sante-algerie/).",
      ] },
      { heading: 'Les erreurs que nous voyons dans les cliniques', body: [], list: [
        "**Imposer le logiciel à tous le même lundi.** La résistance devient collective et définitive.",
        "**Faire saisir la facturation par le médecin.** Il arrête en une semaine. C'est le travail du secrétariat, à partir de la consultation.",
        "**Ne pas écrire ce que la direction verra.** La peur du contrôle se nourrit du flou. Les règles écrites la font disparaître.",
        "**Importer tous les dossiers, ou aucun.** Les dossiers actifs saisis, les autres scannés. Le reste est du temps perdu.",
        "**Choisir un logiciel générique de gestion.** Il ne connaît ni la consultation, ni Chifa, ni l'ordonnance. Le médecin le contourne dès le premier patient.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Faut-il rendre le logiciel obligatoire ?", a: "Pas au début. Deux médecins volontaires dans un service, quatre semaines, puis les autres le demandent quand ils voient les premiers finir plus tôt. L'obligation vient en dernier, quand elle ne coûte plus rien." },
        { q: "Que peut voir la direction ?", a: "Ce qui est écrit avant le premier jour : activité et occupation par service, délais, agrégats. Le détail acte par acte d'un praticien nommé se décide ensemble, par écrit. Ce document est la condition de la confiance." },
        { q: "Peut-on reprendre les dossiers papier ?", a: "Les dossiers actifs, patients vus dans l'année, sont saisis proprement avant le premier jour. Les autres sont scannés et rattachés au patient. Un médecin doit retrouver son patient d'hier dès la première ouverture." },
        { q: "La dictée vocale fonctionne-t-elle en arabe et en darija ?", a: "Oui pour l'arabe et le français, avec une relecture par le médecin avant validation. La darija médicale fonctionne pour les motifs et les conclusions courantes ; le vocabulaire spécialisé se dicte en français ou en arabe standard." },
        { q: "Combien de temps avant que toute la clinique l'utilise ?", a: "Douze semaines pour le premier service, puis quatre à huit semaines de plus selon le nombre de services, à la demande des médecins. Compter vingt semaines pour une clinique de taille moyenne." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Aucune de ces objections n'est contre le numérique. Toutes sont contre un mauvais logiciel mal déployé." },
      { after: 2, text: "La dictée est l'argument qui retourne un médecin réticent : il parle comme avant, le dossier s'écrit tout seul." },
    ],
    cta: { eyebrow: 'Décrivez votre clinique', title: "Combien de médecins, combien de services, et ce qui a déjà été tenté. Nous vous dirons par quel service commencer, ce que les deux écrans doivent contenir, et ce qu'il faut écrire avant le premier jour.", body: "Symloop conçoit des logiciels de clinique et de cabinet pour l'Algérie : dossier patient unique conforme à la loi 18-07, deux écrans pour le médecin, dictée vocale par IA en arabe et en français, agenda, Chifa et facturation au secrétariat. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/logiciel-clinique-cabinet-medical-algerie-2026/', kind: 'Guide', name: 'Logiciel de clinique et cabinet médical en Algérie : les modules' },
      { href: '/blog/creer-equivalent-doctolib-algerie-2026/', kind: 'Série · 01', name: 'Doctolib en Algérie : lancer la prise de rendez-vous médical en ligne' },
      { href: '/blog/ia-sante-telemedicine-algerie-2026/', kind: 'Analyse', name: "IA, santé et télémédecine en Algérie" },
      { href: '/solutions/digitalisation-sante-algerie/', kind: 'Dossier', name: 'Digitalisation de la santé en Algérie' },
    ] },
  },
  en: {
    kind: 'Problem · Clinic and practice', title: 'I want to digitise my clinic but my doctors refuse: how to get medical software adopted without imposing it (Algeria, 2026).',
    dek: "You run a clinic or medical centre, you have decided to move to electronic patient records, and your doctors will not hear of it. Why they are often right, what software must do for a doctor to open it, the deployment order that works, where AI turns the reluctant, and the twenty weeks department by department.",
    publishedAt: 'October 2026', readTime: '9 min read', author: 'Symloop', about: ['Clinic', 'Medical software', 'Patient record', 'Adoption', 'Algeria'],
    intro: [
      "**Short answer.** Your doctors do not refuse digital. They refuse to type instead of treating, to lose twenty years of notes, to be counted by management and to relive the last failed software. Each of these objections has a concrete answer, and none goes through authority. **Software that gets adopted fits in two screens for the doctor, my day and the consultation, with voice dictation instead of the keyboard, and leaves billing, stock and statistics to the front desk and management.** It is deployed in one department, with two volunteer doctors, for four weeks, then extends because the others ask for it. Not before.",
      "This guide answers a situation we meet in almost every Algerian private clinic that digitises: management wants it, doctors slow it down, and the project gets stuck between the two. Here is how to get it out, written to be useful even if you never call us.",
    ],
    sections: [
      { heading: 'Why doctors refuse, and what they mean', body: [
        "Listen to the objections word for word: they are almost always the same, and almost always right. A doctor who sees thirty patients a day does not have a minute for one more screen. A doctor who kept their files for twenty years does not want to see them vanish in a failed import. A doctor who lived through generic software imposed from above no longer believes anyone. Here are the five objections we hear, translated, with the answer that works.",
      ], visual: 'reasons', after: [
        "Two of these answers belong to management, not to the software. **Written rules on what management sees**: activity per department, occupancy, lead times, yes; the act-by-act detail of a named practitioner, to be defined together, in writing, before day one. **Choosing with two doctors**: not a committee, two volunteer practitioners who validate the two screens on their phone. They will convince the others, not you.",
      ] },
      { heading: 'What the doctor sees: two screens, nothing else', body: [
        "Complete clinic software exists, we described its modules in our guide to [clinic and medical practice software in Algeria](/blog/logiciel-clinique-cabinet-medical-algerie-2026/). The adoption question is not what the software contains, it is what the doctor sees of it. The answer must fit on one hand: my day, the consultation. Everything else belongs to the front desk and management.",
      ], visual: 'screens', after: [
        "**My day**: today's patients, the reason, the file in one tap, and nothing to enter. **The consultation**: notes dictated on the phone in Arabic or French, the prescription in three taps, tests, the next appointment. If the doctor needs more than an hour of training, the screen is badly built. If they are asked to enter an act for billing, they will stop within a week: the assistant does it from the consultation, as they did from the notebook.",
        "The single patient record, hosted in compliance with Law 18-07 with traced access, is the invisible base. It is what makes online booking and reminders possible, which we describe in our episode on [Doctolib in Algeria](/blog/creer-equivalent-doctolib-algerie-2026/), but it comes after internal adoption, never before.",
      ] },
      { heading: 'Where AI helps a clinic, and where it adds nothing', body: [
        "In this precise project, AI is the argument that turns reluctant doctors. Not to diagnose: to write for them.",
      ], visual: 'ai', after: [
        "**Structured dictation.** The doctor speaks for thirty seconds at the end of the consultation, as they would to an assistant: reason, examination, conclusion, treatment. The file writes itself, structured, in French or Arabic, and the prescription is prepared. It is the use that makes a fifty-year-old doctor say \"that, I will take\". **Automatic reminders** reduce no-shows from the first month, provided the agenda is single at the front desk. The rest waits for months of data. Diagnosis remains the doctor's act; we wrote about it in our analysis of [AI, health and telemedicine in Algeria](/blog/ia-sante-telemedicine-algerie-2026/).",
      ] },
      { heading: 'The deployment order that works', body: [
        "Every clinic that failed did the same thing: buy the software, train everyone on a Saturday, and demand on Monday. Every one that succeeded did the opposite: one department, two volunteer doctors, four weeks, then the other departments at their request. Custom software for this scope sits in category 2 of our [price grid](/blog/prix-application-mobile-algerie-2026/), with AI dictation as an option; market software is paid by subscription and deploys faster, with its vendor's limits on the two screens and dictation.",
      ], visual: 'timeline', after: [
        "The week that decides everything is the import of active files: patients seen within the year, entered cleanly; the others, scanned and attached. A doctor who opens the software on day one and does not find yesterday's patient goes back to the notebook. One who finds them, with their notes, stays. We apply the same rule in our report on [health digitisation in Algeria](/solutions/digitalisation-sante-algerie/).",
      ] },
      { heading: 'The mistakes we see in clinics', body: [], list: [
        "**Imposing the software on everyone the same Monday.** Resistance becomes collective and permanent.",
        "**Having the doctor enter billing.** They stop within a week. It is the front desk's job, from the consultation.",
        "**Not writing down what management will see.** Fear of control feeds on vagueness. Written rules make it disappear.",
        "**Importing all files, or none.** Active files entered, the others scanned. The rest is wasted time.",
        "**Choosing generic management software.** It knows neither the consultation, nor Chifa, nor the prescription. The doctor bypasses it from the first patient.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Should the software be made mandatory?', a: 'Not at first. Two volunteer doctors in one department, four weeks, then the others ask for it when they see the first ones finish earlier. Obligation comes last, when it no longer costs anything.' },
        { q: 'What can management see?', a: 'What is written before day one: activity and occupancy per department, lead times, aggregates. The act-by-act detail of a named practitioner is decided together, in writing. That document is the condition of trust.' },
        { q: 'Can paper files be imported?', a: 'Active files, patients seen within the year, are entered cleanly before day one. The others are scanned and attached to the patient. A doctor must find yesterday\'s patient at the first opening.' },
        { q: 'Does voice dictation work in Arabic and darija?', a: 'Yes for Arabic and French, with a review by the doctor before validation. Medical darija works for common reasons and conclusions; specialised vocabulary is dictated in French or standard Arabic.' },
        { q: 'How long before the whole clinic uses it?', a: 'Twelve weeks for the first department, then four to eight more weeks depending on the number of departments, at the doctors\' request. Count twenty weeks for a mid-sized clinic.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'None of these objections is against digital. All are against bad software badly deployed.' },
      { after: 2, text: 'Dictation is the argument that turns a reluctant doctor: they speak as before, the file writes itself.' },
    ],
    cta: { eyebrow: 'Describe your clinic', title: 'How many doctors, how many departments, and what has already been tried. We will tell you which department to start with, what the two screens must contain, and what to write down before day one.', body: 'Symloop designs clinic and practice software for Algeria: single patient record compliant with Law 18-07, two screens for the doctor, AI voice dictation in Arabic and French, agenda, Chifa and billing at the front desk. Senior engineers in Algiers and Sétif, written scope, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/logiciel-clinique-cabinet-medical-algerie-2026/', kind: 'Guide', name: 'Clinic and medical practice software in Algeria: the modules' },
      { href: '/blog/creer-equivalent-doctolib-algerie-2026/', kind: 'Series · 01', name: 'Doctolib in Algeria: launching online medical booking' },
      { href: '/blog/ia-sante-telemedicine-algerie-2026/', kind: 'Analysis', name: 'AI, health and telemedicine in Algeria' },
      { href: '/solutions/digitalisation-sante-algerie/', kind: 'Report', name: 'Health digitisation in Algeria' },
    ] },
  },
  ar: {
    kind: 'مشكلة · مصحة وعيادة', title: 'أريد رقمنة مصحتي لكن أطبائي يرفضون: كيف تجعلهم يتبنّون برنامجاً طبياً دون فرضه (الجزائر، 2026).',
    dek: 'تدير مصحة أو مركزاً طبياً، قررت الانتقال إلى الملف الطبي الإلكتروني، وأطباؤك لا يريدون سماع ذلك. لماذا هم على حق غالباً، ما يجب أن يفعله البرنامج ليفتحه الطبيب، ترتيب النشر الذي ينجح، أين يقلب الذكاء الاصطناعي المترددين، والأسابيع العشرون مصلحة بمصلحة.',
    publishedAt: 'أكتوبر 2026', readTime: '9 دقائق قراءة', author: 'سيملوب', about: ['مصحة', 'برنامج طبي', 'ملف المريض', 'التبني', 'الجزائر'],
    intro: [
      '**الجواب المختصر.** أطباؤك لا يرفضون الرقمنة. يرفضون أن يكتبوا بدل أن يعالجوا، وأن يفقدوا عشرين سنة من الملاحظات، وأن تعدّهم الإدارة، وأن يعيشوا من جديد البرنامج الفاشل الأخير. لكل اعتراض من هذه جواب ملموس، ولا واحد منها يمر عبر السلطة. **البرنامج الذي يُتبنّى يكتفي بشاشتين للطبيب، يومي والاستشارة، بالإملاء الصوتي بدل لوحة المفاتيح، ويترك الفوترة والمخزون والإحصائيات للسكرتارية والإدارة.** يُنشر في مصلحة واحدة مع طبيبَين متطوعَين لأربعة أسابيع، ثم يتوسع لأن الآخرين يطلبونه. لا قبل ذلك.',
      'يجيب هذا الدليل عن وضع نلتقيه في كل المصحات الخاصة الجزائرية تقريباً التي ترقمن: الإدارة تريد، الأطباء يكبحون، ويغرق المشروع بينهما. إليك كيف تخرجه من هناك، مكتوباً ليكون مفيداً حتى لو لم تتصل بنا أبداً.',
    ],
    sections: [
      { heading: 'لماذا يرفض الأطباء، وماذا يقصدون', body: ['استمع إلى الاعتراضات حرفياً: هي دائماً تقريباً نفسها، وصحيحة تقريباً دائماً. طبيب يرى ثلاثين مريضاً يومياً ليس لديه دقيقة لشاشة إضافية. طبيب حفظ ملفاته عشرين سنة لا يريد رؤيتها تختفي في استيراد فاشل. طبيب عرف برنامجاً عاماً مفروضاً من فوق لم يعد يصدّق أحداً. إليك الاعتراضات الخمسة التي نسمعها، مترجمة، مع الجواب الذي ينجح.'], visual: 'reasons', after: ['جوابان من هذه يخصان الإدارة لا البرنامج. **القواعد المكتوبة لما تراه الإدارة**: النشاط لكل مصلحة، الإشغال، الآجال، نعم؛ تفصيل عمل بعمل لممارس مسمّى، يُحدَّد معاً كتابياً قبل اليوم الأول. **الاختيار مع طبيبَين**: لا لجنة، بل ممارسان متطوعان يصادقان على الشاشتين على هاتفيهما. هما من سيقنعان الآخرين، لا أنت.'] },
      { heading: 'ما يراه الطبيب: شاشتان، لا غير', body: ['برنامج المصحة الكامل موجود، وصفنا وحداته في دليل [برامج المصحات والعيادات الطبية في الجزائر](/blog/logiciel-clinique-cabinet-medical-algerie-2026/). سؤال التبني ليس ما يحتويه البرنامج، بل ما يراه الطبيب منه. يجب أن يكتفي الجواب بيد واحدة: يومي، الاستشارة. كل ما عداه للسكرتارية والإدارة.'], visual: 'screens', after: [
        '**يومي**: مرضى اليوم، السبب، الملف بلمسة، ولا شيء يُدخَل. **الاستشارة**: ملاحظات مُملاة على الهاتف بالعربية أو الفرنسية، الوصفة بثلاث لمسات، الفحوص، الموعد التالي. إن احتاج الطبيب أكثر من ساعة تكوين فالشاشة سيئة الصنع. وإن طُلب منه إدخال عمل للفوترة فسيتوقف بعد أسبوع: السكرتيرة تفعل ذلك من الاستشارة كما كانت تفعله من الدفتر.',
        'ملف المريض الواحد، المستضاف وفق القانون 18-07 بوصول متتبع، هو القاعدة غير المرئية. هو ما يجعل الحجز الإلكتروني والتذكيرات ممكنَين، كما نصف في حلقتنا عن [Doctolib في الجزائر](/blog/creer-equivalent-doctolib-algerie-2026/)، لكنه يأتي بعد التبني الداخلي، لا قبله أبداً.',
      ] },
      { heading: 'أين يساعد الذكاء الاصطناعي المصحة، وأين لا يضيف شيئاً', body: ['في هذا المشروع تحديداً، الذكاء الاصطناعي هو الحجة التي تقلب الأطباء المترددين. ليس للتشخيص: بل للكتابة بدلاً عنهم.'], visual: 'ai', after: ['**الإملاء المنظّم.** يتكلم الطبيب ثلاثين ثانية في نهاية الاستشارة كما لو كان يملي على سكرتيرة: السبب، الفحص، الخلاصة، العلاج. يُكتب الملف منظّماً بالفرنسية أو العربية وتُحضَّر الوصفة. هذا الاستخدام الذي يجعل طبيباً في الخمسين يقول «هذا أقبله». **التذكيرات التلقائية** تقلّص الغيابات من الشهر الأول شرط أن تكون الأجندة واحدة عند السكرتارية. الباقي ينتظر أشهراً من البيانات. أما التشخيص فيبقى فعل الطبيب؛ كتبنا ذلك في تحليلنا حول [الذكاء الاصطناعي والصحة والطب عن بعد في الجزائر](/blog/ia-sante-telemedicine-algerie-2026/).'] },
      { heading: 'ترتيب النشر الذي ينجح', body: ['كل المصحات التي فشلت فعلت الشيء نفسه: شراء البرنامج، تكوين الجميع يوم سبت، والمطالبة يوم الاثنين. وكل التي نجحت فعلت العكس: مصلحة واحدة، طبيبان متطوعان، أربعة أسابيع، ثم باقي المصالح بطلبها. يقع برنامج مخصص لهذا النطاق في الفئة 2 من [شبكة أسعارنا](/blog/prix-application-mobile-algerie-2026/)، مع الإملاء بالذكاء الاصطناعي اختيارياً؛ وبرنامج السوق يُدفع بالاشتراك ويُنشر أسرع بحدود ناشره في الشاشتين والإملاء.'], visual: 'timeline', after: ['الأسبوع الذي يقرر كل شيء هو استرجاع الملفات النشطة: مرضى السنة مُدخلون بإتقان؛ والآخرون ممسوحون ومرتبطون. الطبيب الذي يفتح البرنامج في اليوم الأول ولا يجد مريض الأمس يعود إلى الدفتر. والذي يجده بملاحظاته يبقى. نطبّق القاعدة نفسها في ملفنا حول [رقمنة الصحة في الجزائر](/solutions/digitalisation-sante-algerie/).'] },
      { heading: 'الأخطاء التي نراها في المصحات', body: [], list: [
        '**فرض البرنامج على الجميع في الاثنين نفسه.** تصبح المقاومة جماعية ونهائية.',
        '**جعل الطبيب يُدخل الفوترة.** يتوقف في أسبوع. هذا عمل السكرتارية انطلاقاً من الاستشارة.',
        '**عدم كتابة ما ستراه الإدارة.** يتغذى الخوف من المراقبة على الغموض. القواعد المكتوبة تزيله.',
        '**استيراد كل الملفات أو لا شيء.** الملفات النشطة تُدخَل والباقي يُمسح. ما عدا ذلك وقت ضائع.',
        '**اختيار برنامج تسيير عام.** لا يعرف الاستشارة ولا الشفاء ولا الوصفة. يلتف عليه الطبيب من أول مريض.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'هل يجب جعل البرنامج إلزامياً؟', a: 'ليس في البداية. طبيبان متطوعان في مصلحة واحدة، أربعة أسابيع، ثم يطلبه الآخرون عندما يرون الأولَين ينهيان أبكر. الإلزام يأتي أخيراً عندما لا يكلّف شيئاً.' },
        { q: 'ماذا يمكن للإدارة أن ترى؟', a: 'ما كُتب قبل اليوم الأول: النشاط والإشغال لكل مصلحة، الآجال، المجاميع. تفصيل عمل بعمل لممارس مسمّى يُقرَّر معاً كتابياً. هذه الوثيقة شرط الثقة.' },
        { q: 'هل يمكن استرجاع الملفات الورقية؟', a: 'الملفات النشطة، مرضى السنة، تُدخَل بإتقان قبل اليوم الأول. الأخرى تُمسح ضوئياً وتُربط بالمريض. يجب أن يجد الطبيب مريض الأمس من أول فتح.' },
        { q: 'هل يعمل الإملاء الصوتي بالعربية والدارجة؟', a: 'نعم للعربية والفرنسية مع مراجعة الطبيب قبل المصادقة. الدارجة الطبية تعمل للأسباب والخلاصات الشائعة؛ والمفردات المتخصصة تُملى بالفرنسية أو العربية الفصحى.' },
        { q: 'كم من الوقت قبل أن تستعمله المصحة كلها؟', a: 'اثنا عشر أسبوعاً للمصلحة الأولى، ثم أربعة إلى ثمانية أسابيع إضافية حسب عدد المصالح بطلب الأطباء. عشرون أسبوعاً لمصحة متوسطة.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'لا اعتراض من هذه ضد الرقمنة. كلها ضد برنامج سيئ مُنشر بسوء.' },
      { after: 2, text: 'الإملاء هو الحجة التي تقلب طبيباً متردداً: يتكلم كما كان، والملف يُكتب وحده.' },
    ],
    cta: { eyebrow: 'صف مصحتك', title: 'كم طبيباً، كم مصلحة، وما الذي جُرِّب من قبل. سنخبرك بأي مصلحة تبدأ وما الذي يجب أن تحتويه الشاشتان وما الذي يجب كتابته قبل اليوم الأول.', body: 'تصمم سيملوب برامج المصحات والعيادات للجزائر: ملف مريض واحد مطابق للقانون 18-07، شاشتان للطبيب، إملاء صوتي بالذكاء الاصطناعي بالعربية والفرنسية، أجندة والشفاء والفوترة عند السكرتارية. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/logiciel-clinique-cabinet-medical-algerie-2026/', kind: 'دليل', name: 'برامج المصحات والعيادات الطبية في الجزائر: الوحدات' },
      { href: '/blog/creer-equivalent-doctolib-algerie-2026/', kind: 'سلسلة · 01', name: 'Doctolib في الجزائر: إطلاق حجز المواعيد الطبية عبر الإنترنت' },
      { href: '/blog/ia-sante-telemedicine-algerie-2026/', kind: 'تحليل', name: 'الذكاء الاصطناعي والصحة والطب عن بعد في الجزائر' },
      { href: '/solutions/digitalisation-sante-algerie/', kind: 'ملف', name: 'رقمنة الصحة في الجزائر' },
    ] },
  },
};

const KEYWORDS = "digitaliser clinique algérie médecins refusent, adoption logiciel médical médecins, dossier patient informatisé clinique privée algérie, logiciel clinique dictée vocale ia, résistance au changement médecins logiciel, logiciel médical loi 18-07, clinic software adoption doctors algeria, رقمنة المصحة رفض الأطباء";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
