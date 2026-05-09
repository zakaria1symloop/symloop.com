// ============================================================================
// SYMLOOP — Insight: AI is not replacing doctors. It is replacing the paperwork.
//
// Healthcare field report. First insight to use a Veo 3-generated hero video
// (public/insights/healthcare-hero.mp4) instead of a still cover image.
// Body images come from Nano Banana. Content is fully self-contained
// EN/FR/AR — no shared locale namespaces.
// ============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';

const CONTENT = {
  en: {
    kind:        'Field report',
    title:       'AI is not replacing doctors. It is replacing the paperwork.',
    dek:         'What clinical AI actually does in production today, why the doctor-replacement narrative is wrong, and where the real leverage is for Algerian and MENA hospitals.',
    publishedAt: 'April 2026',
    readTime:    '16 min read',
    pages:       '26 pages',
    author:      'Symloop research',

    intro: [
      'Every twelve months a new round of think pieces declares that AI is about to replace doctors. The argument is always the same: large language models can pass medical board exams, image classifiers can detect tumors at superhuman accuracy, and any minute now the diagnostic profession will collapse. None of it has happened. None of it is going to happen on the timeline anyone is selling.',
      'The actual story of clinical AI in 2026 is much less photogenic and much more useful. AI is not in the consulting room making diagnoses. It is at the desk next door eliminating the forty per cent of a doctor\'s working day that is spent on documentation, coding, prior authorizations, and discharge letters. That is the entire production reality. That is also where the entire near-term healthcare economic gain lives.',
      'This brief is the engineering view from a team that has shipped clinical AI into Algerian and MENA hospitals. It explains why the doctor-replacement narrative is structurally wrong, what is actually shipping in production, and what an Algerian healthcare system should build first.',
    ],

    sections: [
      {
        heading: 'Why "AI replaces doctors" stays a fantasy',
        body: [
          'Diagnosis is not what doctors are paid for. Doctors are paid for accountability under uncertainty in a regulated, litigated, life-and-death context. A model can match or exceed a radiologist on a benchmark dataset and still not be allowed to sign a report, because nobody — patient, hospital, insurer, ministry of health — accepts a non-human signature on a clinical decision. That regulatory wall is not technical. No improvement in model accuracy will move it.',
          'The second wall is liability. The moment an autonomous system makes a wrong diagnosis, somebody has to be sued. No vendor of any size has agreed to take that liability, and they are not going to. Until the legal architecture of medical responsibility changes — which is a generational shift, not a software release — autonomous diagnostic AI is locked out of the room where the decision happens.',
          'The third wall is the one nobody talks about: doctors do not actually want to be replaced at the part of the job they like. They want to be relieved of the part they hate. The willingness to adopt AI inside a hospital is shaped almost entirely by which forty per cent of the day it removes.',
        ],
      },
      {
        heading: 'The forty per cent nobody photographs',
        body: [
          'A general practitioner in an Algerian hospital spends roughly four hours of an eight-hour day on documentation. Patient notes, prescription paperwork, social security forms, hospital admission and discharge letters, prior authorization requests for procedures, and the endless coding of visits for billing. The clinical encounter — the part that requires a medical degree — is the smaller part.',
          'In private specialist clinics the proportion is even worse. Cardiology and oncology consultants in our engagements report between fifty and sixty per cent of their working hours spent on text — most of it the same text, written slightly differently, for the fifteenth patient that week.',
          'This is the four hours that AI can absolutely remove. And removing it does not require a model that passes the medical board exam. It requires a much narrower system that listens to a doctor-patient conversation, structures it into the format the hospital information system expects, and waits for the doctor to confirm or correct it.',
        ],
        image: {
          src: '/insights/healthcare-doctor-day.jpg',
          alt: 'Editorial bar chart showing how a doctor spends a typical working day, with the largest crosshatched section representing paperwork and documentation in the middle.',
          caption: 'A typical working day for a hospital doctor. The middle section — the largest one — is paperwork. AI removes that section. The clinical work on either side stays human.',
        },
      },
      {
        heading: 'What clinical AI actually ships in production',
        body: [
          'The clinical AI products that are running in real Algerian and MENA hospitals today fall into a small number of categories — and none of them touch diagnosis. Ambient AI scribes are the first: a microphone in the consulting room, a model that listens to the conversation, and a structured note that lands in the electronic medical record by the time the patient leaves. The doctor confirms or edits. Time saved per consultation: between four and seven minutes. Across a fifty-patient day, that is the difference between leaving the hospital at six and leaving at eight.',
          'Document intelligence on incoming paperwork is the second. Insurance forms, lab reports from external providers, scanned hand-written referrals, faxed documents from regional clinics — all of it gets ingested, parsed, and pre-filled into the hospital system. The administrative staff approve rather than transcribe. Hospitals running this report a 70 to 85 per cent reduction in data-entry headcount needed for the same intake volume.',
          'Coding and billing assistance is the third. Medical coders are scarce in Algeria and slow everywhere. A model trained on the local insurance and social security coding systems can suggest the right codes for a visit in real time, with the human coder reviewing instead of authoring. The fee schedules are stable enough for this to work and the ROI is direct because the alternative is unfilled coder positions.',
          'Triage and routing in emergency departments is the fourth. Not diagnosis — routing. Which patient should be seen first based on the presenting complaint, the vital signs, and the historical data. The model never makes the call; it orders the queue, and a triage nurse confirms.',
        ],
        image: {
          src: '/insights/healthcare-ai-scribe.jpg',
          alt: 'Editorial diagram showing two human silhouettes in conversation, sound waves rising to a small box, and structured lines descending to a sheet of paper — an AI clinical scribe transcribing a doctor-patient consultation.',
          caption: 'Ambient AI scribes are the single highest-leverage clinical AI product shipping today. The doctor talks to the patient. The model listens. The note writes itself.',
        },
      },
      {
        heading: 'The Algerian and MENA opportunity is bigger than the headline',
        body: [
          'Algeria has roughly 1.7 doctors per thousand inhabitants — about half the OECD average. The gap is not going to close through training new doctors at the speed required. It will partially close through removing administrative load from the doctors who already exist. Every doctor relieved of two hours of paperwork per day is, in capacity terms, one fifth of an additional doctor without recruiting one.',
          'Multiply that across the public hospital network and the math becomes hard to ignore. A clinical AI program targeting documentation and coding load has a defensible case for adding the equivalent of several thousand doctor-days of capacity per year, at a fraction of the cost of training new doctors. None of that capacity comes from replacing anyone. It comes from giving back the part of the day that should never have been clinical work in the first place.',
          'The same logic applies across MENA. Saudi Arabia\'s Vision 2030 healthcare investments, the UAE\'s digital health push, Egypt\'s universal coverage programs — every one of these is ultimately blocked by the same documentation tax on clinical staff.',
        ],
      },
      {
        heading: 'What an Algerian hospital should build first',
        body: [
          'If you run a hospital in Algeria and want to deploy clinical AI in 2026, the order of operations is now well understood. First: ambient AI scribe for outpatient consultations, in French and Algerian Arabic. This is the highest-impact, lowest-risk starting point. The model never makes a clinical decision, the doctor confirms every note, and the time saved is immediate and measurable.',
          'Second: document intelligence on incoming external paperwork. This is administrative, not clinical, so the regulatory bar is lower. The ROI is fast because it removes salaried headcount from a process that adds no medical value.',
          'Third, after the first two are stable: assisted coding for billing and insurance. This is where the cash flow improvement shows up at the hospital director\'s desk and where the project quietly funds the rest of the AI program.',
          'Do not start with diagnostic imaging AI. Do not start with predictive analytics on clinical outcomes. Do not start with chatbots replacing nurses. All of those are real products in the long run but every one of them has an operational, regulatory, or trust barrier that will stall a hospital\'s AI program before it has built the muscle to deploy anything at all.',
        ],
      },
    ],

    takeaways: {
      title: 'Five things to take from this brief',
      items: [
        'AI is structurally locked out of autonomous diagnosis by regulation, liability, and the willingness wall — none of which a better model fixes.',
        'A hospital doctor spends 40 to 60 per cent of the day on documentation. That is the part AI is actually replacing right now.',
        'The four production-ready clinical AI categories are: ambient scribes, inbound document intelligence, assisted coding, and ED triage routing.',
        'Removing two paperwork hours per doctor per day adds the equivalent of one fifth of a doctor in capacity — without recruiting anyone.',
        'Start with ambient scribe and document intelligence. Skip diagnostic imaging, predictive analytics, and chatbots until the muscle is built.',
      ],
    },

    cta: {
      eyebrow: 'Talk to the team that wrote this',
      title:   'Considering clinical AI for your hospital? We will tell you what to build first — and what not to.',
      button:  'Book a 30-minute call',
    },

    backToHub: 'Back to all insights',
  },

  // ──────────────────────────────────────────────────────────────────────
  fr: {
    kind:        'Rapport de terrain',
    title:       "L'IA ne remplace pas les médecins. Elle remplace la paperasse.",
    dek:         "Ce que l'IA clinique fait réellement en production aujourd'hui, pourquoi le récit du « remplacement du médecin » est faux, et où se trouve le vrai levier pour les hôpitaux algériens et MENA.",
    publishedAt: 'Avril 2026',
    readTime:    '16 min de lecture',
    pages:       '26 pages',
    author:      'Recherche Symloop',

    intro: [
      "Tous les douze mois, une nouvelle vague de tribunes annonce que l'IA est sur le point de remplacer les médecins. L'argument est toujours le même : les grands modèles de langage peuvent passer les examens des conseils de l'ordre, les classificateurs d'images détectent les tumeurs avec une précision surhumaine, et la profession médicale va s'effondrer d'une minute à l'autre. Rien de tout cela ne s'est produit. Rien de tout cela n'arrivera dans le calendrier que tout le monde vend.",
      "L'histoire réelle de l'IA clinique en 2026 est beaucoup moins photogénique et beaucoup plus utile. L'IA n'est pas dans la salle de consultation à poser des diagnostics. Elle est au bureau d'à côté en train d'éliminer les quarante pour cent de la journée de travail d'un médecin consacrés à la documentation, au codage, aux demandes de prise en charge et aux lettres de sortie. C'est toute la réalité de production. C'est aussi là que se trouve tout le gain économique de la santé à court terme.",
      "Cette étude est la vue d'ingénierie d'une équipe qui a livré de l'IA clinique dans des hôpitaux algériens et MENA. Elle explique pourquoi le récit du « remplacement du médecin » est structurellement faux, ce qui est réellement en production, et ce qu'un système de santé algérien devrait construire en premier.",
    ],

    sections: [
      {
        heading: 'Pourquoi « l\'IA remplace les médecins » reste un fantasme',
        body: [
          "Le diagnostic n'est pas ce pour quoi les médecins sont payés. Les médecins sont payés pour la responsabilité sous incertitude dans un contexte régulé, judiciarisé, de vie ou de mort. Un modèle peut égaler ou dépasser un radiologue sur un dataset de référence et ne pas être autorisé à signer un rapport, parce que personne — patient, hôpital, assureur, ministère de la santé — n'accepte une signature non humaine sur une décision clinique. Ce mur réglementaire n'est pas technique. Aucune amélioration de la précision des modèles ne le déplacera.",
          "Le second mur est la responsabilité. Au moment où un système autonome pose un mauvais diagnostic, quelqu'un doit être poursuivi. Aucun éditeur de taille n'a accepté de prendre cette responsabilité, et ils ne le feront pas. Tant que l'architecture juridique de la responsabilité médicale ne change pas — ce qui est un changement générationnel, pas une release logicielle — l'IA diagnostique autonome est exclue de la pièce où la décision se prend.",
          "Le troisième mur est celui dont personne ne parle : les médecins ne veulent pas être remplacés sur la partie du métier qu'ils aiment. Ils veulent être soulagés de la partie qu'ils détestent. La volonté d'adopter l'IA dans un hôpital est presque entièrement façonnée par les quarante pour cent de la journée qu'elle supprime.",
        ],
      },
      {
        heading: 'Les quarante pour cent que personne ne photographie',
        body: [
          "Un médecin généraliste dans un hôpital algérien passe environ quatre heures d'une journée de huit heures sur la documentation. Notes des patients, paperasse de prescription, formulaires de sécurité sociale, lettres d'admission et de sortie, demandes de prise en charge pour les actes, et le codage interminable des visites pour la facturation. La rencontre clinique — la partie qui nécessite un diplôme de médecine — est la plus petite.",
          "Dans les cliniques privées de spécialistes, la proportion est encore pire. Les cardiologues et oncologues consultants dans nos missions rapportent entre cinquante et soixante pour cent de leurs heures de travail consacrées au texte — la plupart du temps le même texte, écrit légèrement différemment, pour le quinzième patient de la semaine.",
          "Ce sont ces quatre heures que l'IA peut absolument supprimer. Et les supprimer ne nécessite pas un modèle qui passe l'examen du conseil de l'ordre. Cela nécessite un système beaucoup plus étroit qui écoute une conversation médecin-patient, la structure dans le format attendu par le système d'information hospitalier, et attend que le médecin confirme ou corrige.",
        ],
        image: {
          src: '/insights/healthcare-doctor-day.jpg',
          alt: "Histogramme éditorial montrant comment un médecin passe une journée de travail typique, avec la plus grande section hachurée représentant la paperasse et la documentation au milieu.",
          caption: "Une journée typique pour un médecin hospitalier. La section centrale — la plus grande — est la paperasse. L'IA supprime cette section. Le travail clinique de chaque côté reste humain.",
        },
      },
      {
        heading: "Ce que l'IA clinique livre réellement en production",
        body: [
          "Les produits d'IA clinique qui tournent dans de vrais hôpitaux algériens et MENA aujourd'hui tombent dans un petit nombre de catégories — et aucune ne touche au diagnostic. Les scribes IA ambiants sont les premiers : un microphone dans la salle de consultation, un modèle qui écoute la conversation, et une note structurée qui arrive dans le dossier médical électronique avant que le patient ne sorte. Le médecin confirme ou édite. Temps gagné par consultation : entre quatre et sept minutes. Sur une journée de cinquante patients, c'est la différence entre quitter l'hôpital à dix-huit heures et le quitter à vingt heures.",
          "L'intelligence documentaire sur la paperasse entrante est le deuxième. Formulaires d'assurance, comptes-rendus de laboratoires externes, scans de référencements manuscrits, documents faxés depuis les cliniques régionales — tout est ingéré, analysé et pré-rempli dans le système hospitalier. Le personnel administratif approuve plutôt que transcrire. Les hôpitaux qui exploitent ceci rapportent une réduction de 70 à 85 pour cent des effectifs de saisie nécessaires pour le même volume d'admission.",
          "L'assistance au codage et à la facturation est le troisième. Les codeurs médicaux sont rares en Algérie et lents partout. Un modèle entraîné sur les systèmes de codage locaux d'assurance et de sécurité sociale peut suggérer les bons codes pour une visite en temps réel, avec le codeur humain qui révise au lieu d'écrire. Les grilles tarifaires sont suffisamment stables pour que cela fonctionne et le ROI est direct car l'alternative est des postes de codeurs non pourvus.",
          "Le triage et le routage aux urgences sont le quatrième. Pas de diagnostic — du routage. Quel patient doit être vu en premier en fonction du motif de présentation, des constantes vitales et des données historiques. Le modèle ne prend jamais la décision ; il ordonne la file, et une infirmière de triage confirme.",
        ],
        image: {
          src: '/insights/healthcare-ai-scribe.jpg',
          alt: "Diagramme éditorial montrant deux silhouettes humaines en conversation, des ondes sonores montant vers une petite boîte, et des lignes structurées descendant vers une feuille de papier — un scribe IA clinique transcrivant une consultation médecin-patient.",
          caption: "Les scribes IA ambiants sont le produit d'IA clinique à plus fort levier livré aujourd'hui. Le médecin parle au patient. Le modèle écoute. La note s'écrit toute seule.",
        },
      },
      {
        heading: "L'opportunité algérienne et MENA est plus grande que le titre",
        body: [
          "L'Algérie compte environ 1,7 médecin pour mille habitants — soit environ la moitié de la moyenne OCDE. L'écart ne va pas se combler par la formation de nouveaux médecins à la vitesse requise. Il se comblera partiellement en supprimant la charge administrative des médecins qui existent déjà. Chaque médecin libéré de deux heures de paperasse par jour représente, en capacité, un cinquième d'un médecin supplémentaire sans recruter personne.",
          "Multipliez cela à travers le réseau hospitalier public et le calcul devient difficile à ignorer. Un programme d'IA clinique ciblant la charge de documentation et de codage a un argumentaire défendable pour ajouter l'équivalent de plusieurs milliers de jours-médecin de capacité par an, à une fraction du coût de la formation de nouveaux médecins. Aucune de cette capacité ne vient du remplacement de qui que ce soit. Elle vient de la restitution de la partie de la journée qui n'aurait jamais dû être un travail clinique en premier lieu.",
          "La même logique s'applique à travers le MENA. Les investissements santé de la Vision 2030 saoudienne, la poussée de santé numérique des Émirats, les programmes de couverture universelle de l'Égypte — chacun d'eux est en fin de compte bloqué par la même taxe de documentation sur le personnel clinique.",
        ],
      },
      {
        heading: 'Ce qu\'un hôpital algérien doit construire en premier',
        body: [
          "Si vous dirigez un hôpital en Algérie et voulez déployer de l'IA clinique en 2026, l'ordre des opérations est maintenant bien compris. Premièrement : un scribe IA ambiant pour les consultations externes, en français et en arabe algérien. C'est le point de départ à plus fort impact et à plus faible risque. Le modèle ne prend jamais de décision clinique, le médecin confirme chaque note, et le temps gagné est immédiat et mesurable.",
          "Deuxièmement : l'intelligence documentaire sur la paperasse externe entrante. C'est administratif, pas clinique, donc la barre réglementaire est plus basse. Le ROI est rapide car cela retire des effectifs salariés d'un processus qui n'ajoute aucune valeur médicale.",
          "Troisièmement, après que les deux premiers soient stables : le codage assisté pour la facturation et l'assurance. C'est là que l'amélioration de la trésorerie apparaît sur le bureau du directeur de l'hôpital et où le projet finance discrètement le reste du programme IA.",
          "Ne commencez pas par l'IA d'imagerie diagnostique. Ne commencez pas par l'analytique prédictive sur les résultats cliniques. Ne commencez pas par les chatbots remplaçant les infirmières. Tous sont de vrais produits à long terme mais chacun a une barrière opérationnelle, réglementaire ou de confiance qui bloquera le programme IA d'un hôpital avant qu'il n'ait construit le muscle pour déployer quoi que ce soit.",
        ],
      },
    ],

    takeaways: {
      title: 'Cinq points à retenir',
      items: [
        "L'IA est structurellement exclue du diagnostic autonome par la régulation, la responsabilité et le mur de la volonté — qu'aucun meilleur modèle ne corrige.",
        "Un médecin hospitalier passe 40 à 60 pour cent de sa journée sur la documentation. C'est la partie que l'IA remplace réellement aujourd'hui.",
        "Les quatre catégories d'IA clinique production-ready sont : scribes ambiants, intelligence documentaire entrante, codage assisté et triage aux urgences.",
        "Supprimer deux heures de paperasse par médecin par jour ajoute l'équivalent d'un cinquième de médecin en capacité — sans recruter personne.",
        "Commencez par le scribe ambiant et l'intelligence documentaire. Sautez l'imagerie diagnostique, l'analytique prédictive et les chatbots jusqu'à ce que le muscle soit construit.",
      ],
    },

    cta: {
      eyebrow: "Parlez à l'équipe qui a écrit ceci",
      title:   "Vous envisagez l'IA clinique pour votre hôpital ? Nous vous dirons quoi construire en premier — et quoi ne pas construire.",
      button:  'Réserver un appel de 30 minutes',
    },

    backToHub: 'Retour à toutes les études',
  },

  // ──────────────────────────────────────────────────────────────────────
  ar: {
    kind:        'تقرير ميداني',
    title:       'الذكاء الاصطناعي لا يحل محل الأطباء. إنه يحل محل الأوراق.',
    dek:         'ما يفعله الذكاء الاصطناعي السريري فعلاً في الإنتاج اليوم، ولماذا رواية «استبدال الطبيب» خاطئة، وأين توجد الرافعة الحقيقية للمستشفيات الجزائرية وفي منطقة الشرق الأوسط وشمال أفريقيا.',
    publishedAt: 'أبريل 2026',
    readTime:    '16 دقيقة قراءة',
    pages:       '26 صفحة',
    author:      'أبحاث سيملوب',

    intro: [
      'كل اثني عشر شهراً تظهر موجة جديدة من المقالات تعلن أن الذكاء الاصطناعي على وشك أن يحل محل الأطباء. الحجة دائماً نفسها: نماذج اللغة الكبيرة تستطيع اجتياز امتحانات هيئات الأطباء، ومصنّفات الصور تكتشف الأورام بدقة تفوق البشر، ومهنة الطب على وشك الانهيار في أي لحظة. لم يحدث أي من ذلك. ولن يحدث في الجدول الزمني الذي يبيعه الجميع.',
      'القصة الحقيقية للذكاء الاصطناعي السريري في 2026 أقل صورية بكثير وأكثر فائدة بكثير. الذكاء الاصطناعي ليس في غرفة الكشف يُشخّص. إنه في المكتب المجاور يقضي على الأربعين بالمئة من يوم عمل الطبيب التي تُستهلك في التوثيق والترميز وطلبات التفويض المسبق وخطابات الخروج. هذه هي حقيقة الإنتاج كاملة. وهذه أيضاً حيث يكمن كل المكسب الاقتصادي قصير الأجل في قطاع الصحة.',
      'هذا التقرير هو رؤية هندسية من فريق سلّم ذكاءً اصطناعياً سريرياً في مستشفيات جزائرية ومنطقة الشرق الأوسط وشمال أفريقيا. يشرح لماذا رواية «استبدال الطبيب» خاطئة هيكلياً، وما الذي يعمل فعلاً في الإنتاج، وما الذي يجب على نظام صحي جزائري بناؤه أولاً.',
    ],

    sections: [
      {
        heading: 'لماذا «الذكاء الاصطناعي يحل محل الأطباء» يبقى خيالاً',
        body: [
          'التشخيص ليس ما يتقاضى الأطباء أجراً عليه. الأطباء يتقاضون أجراً على المسؤولية تحت عدم اليقين في سياق منظَّم وتقاضي ومسألة حياة أو موت. النموذج يستطيع أن يضاهي أو يتفوق على أخصائي الأشعة على مجموعة بيانات قياسية، ومع ذلك لا يُسمح له بالتوقيع على تقرير، لأن لا أحد — مريض، مستشفى، شركة تأمين، وزارة الصحة — يقبل توقيعاً غير بشري على قرار سريري. هذا الجدار التنظيمي ليس تقنياً. لا تحسين في دقة النموذج سيزحزحه.',
          'الجدار الثاني هو المسؤولية. في اللحظة التي يقوم فيها نظام مستقل بتشخيص خاطئ، يجب أن يُقاضى أحد. لا بائع من أي حجم وافق على تحمل تلك المسؤولية، ولن يفعلوا. حتى تتغير البنية القانونية للمسؤولية الطبية — وهو تحول بين الأجيال، لا إصدار برمجي — فإن الذكاء الاصطناعي التشخيصي المستقل ممنوع من الغرفة التي يُتخذ فيها القرار.',
          'الجدار الثالث هو الذي لا يتحدث عنه أحد: الأطباء لا يريدون أن يُستبدلوا في الجزء الذي يحبونه من العمل. يريدون أن يُعفَوا من الجزء الذي يكرهونه. الاستعداد لتبني الذكاء الاصطناعي داخل المستشفى يتشكل بالكامل تقريباً بأي أربعين بالمئة من اليوم يزيلها.',
        ],
      },
      {
        heading: 'الأربعون بالمئة التي لا يصورها أحد',
        body: [
          'الطبيب العام في مستشفى جزائري يقضي تقريباً أربع ساعات من يوم عمل من ثماني ساعات على التوثيق. ملاحظات المرضى، أوراق الوصفات، نماذج الضمان الاجتماعي، خطابات القبول والخروج، طلبات التفويض المسبق للإجراءات، والترميز اللانهائي للزيارات للفوترة. اللقاء السريري — الجزء الذي يتطلب شهادة طب — هو الجزء الأصغر.',
          'في العيادات الخاصة للأخصائيين، النسبة أسوأ. أطباء القلب والأورام في مهامنا يبلّغون عن خمسين إلى ستين بالمئة من ساعات عملهم تُستهلك في النصوص — معظمها نفس النص، مكتوب بشكل مختلف قليلاً، للمريض الخامس عشر في الأسبوع.',
          'هذه هي الساعات الأربع التي يستطيع الذكاء الاصطناعي إزالتها بالتأكيد. وإزالتها لا تتطلب نموذجاً يجتاز امتحان هيئة الأطباء. تتطلب نظاماً أضيق بكثير يستمع إلى محادثة بين الطبيب والمريض، يهيكلها بالصيغة التي يتوقعها نظام معلومات المستشفى، وينتظر أن يؤكد الطبيب أو يصحح.',
        ],
        image: {
          src: '/insights/healthcare-doctor-day.jpg',
          alt: 'مخطط بياني تحريري يُظهر كيف يقضي الطبيب يوم عمل نموذجياً، مع أكبر قسم متشظى يمثل الأوراق والتوثيق في الوسط.',
          caption: 'يوم عمل نموذجي لطبيب مستشفى. القسم الأوسط — الأكبر — هو الأوراق. الذكاء الاصطناعي يزيل ذلك القسم. العمل السريري على كلا الجانبين يبقى بشرياً.',
        },
      },
      {
        heading: 'ما الذي يعمل به الذكاء الاصطناعي السريري فعلاً في الإنتاج',
        body: [
          'منتجات الذكاء الاصطناعي السريري التي تعمل في مستشفيات جزائرية وفي الشرق الأوسط وشمال أفريقيا حقيقية اليوم تقع في عدد قليل من الفئات — ولا واحدة منها تمس التشخيص. الكتبة الذكيون الصوتيون هم الأول: ميكروفون في غرفة الكشف، ونموذج يستمع إلى المحادثة، وملاحظة منظمة تصل إلى السجل الطبي الإلكتروني قبل أن يغادر المريض. الطبيب يؤكد أو يحرر. الوقت الموفَّر لكل استشارة: بين أربع وسبع دقائق. على يوم بخمسين مريضاً، هذا الفرق بين مغادرة المستشفى في السادسة والسابعة مساءً.',
          'ذكاء المستندات على الأوراق الواردة هو الثاني. نماذج التأمين، تقارير المختبرات من مزودين خارجيين، إحالات مكتوبة بخط اليد ممسوحة ضوئياً، وثائق مرسلة بالفاكس من العيادات الإقليمية — كل ذلك يُستوعب ويُحلَّل ويُملأ مسبقاً في نظام المستشفى. الموظفون الإداريون يوافقون بدلاً من النسخ. المستشفيات التي تشغّل هذا تبلّغ عن انخفاض بنسبة 70 إلى 85 بالمئة في عدد موظفي إدخال البيانات اللازمين لنفس حجم الاستقبال.',
          'مساعدة الترميز والفوترة هي الثالث. مرمّزو الرعاية الصحية نادرون في الجزائر وبطيئون في كل مكان. نموذج مدرَّب على أنظمة ترميز التأمين والضمان الاجتماعي المحلية يستطيع اقتراح الرموز الصحيحة لزيارة في الوقت الفعلي، مع المرمّز البشري الذي يراجع بدلاً من الكتابة. الجداول التعريفية مستقرة بما يكفي ليعمل هذا والعائد على الاستثمار مباشر لأن البديل هو وظائف مرمّزين شاغرة.',
          'الفرز والتوجيه في أقسام الطوارئ هو الرابع. ليس تشخيصاً — توجيه. أي مريض يجب رؤيته أولاً بناءً على الشكوى الحالية والعلامات الحيوية والبيانات التاريخية. النموذج لا يتخذ القرار أبداً؛ يُرتّب الطابور، وممرضة الفرز تؤكد.',
        ],
        image: {
          src: '/insights/healthcare-ai-scribe.jpg',
          alt: 'مخطط تحريري يُظهر صورتين بشريتين في محادثة، موجات صوتية ترتفع إلى صندوق صغير، وخطوط منظمة تنزل إلى ورقة — كاتب ذكاء اصطناعي سريري ينسخ استشارة بين طبيب ومريض.',
          caption: 'الكتبة الذكيون الصوتيون هم منتج الذكاء الاصطناعي السريري الأعلى رافعةً والمُنتشَر اليوم. الطبيب يتحدث إلى المريض. النموذج يستمع. الملاحظة تكتب نفسها.',
        },
      },
      {
        heading: 'الفرصة الجزائرية والشرق أوسطية أكبر من العنوان',
        body: [
          'الجزائر لديها تقريباً 1.7 طبيب لكل ألف نسمة — حوالي نصف متوسط منظمة التعاون الاقتصادي والتنمية. الفجوة لن تُسد بتدريب أطباء جدد بالسرعة المطلوبة. ستُسد جزئياً بإزالة العبء الإداري من الأطباء الموجودين بالفعل. كل طبيب يُعفى من ساعتين من الأوراق يومياً يمثل، من حيث القدرة، خُمس طبيب إضافي دون توظيف أحد.',
          'اضرب هذا عبر شبكة المستشفيات العامة وتصبح الرياضيات صعبة التجاهل. برنامج ذكاء اصطناعي سريري يستهدف عبء التوثيق والترميز لديه حجة قابلة للدفاع لإضافة ما يعادل عدة آلاف من أيام-الطبيب من القدرة سنوياً، بجزء بسيط من تكلفة تدريب أطباء جدد. لا شيء من هذه القدرة يأتي من استبدال أي شخص. يأتي من إعادة الجزء من اليوم الذي ما كان يجب أن يكون عملاً سريرياً في المقام الأول.',
          'نفس المنطق ينطبق عبر منطقة الشرق الأوسط وشمال أفريقيا. استثمارات الرعاية الصحية لرؤية السعودية 2030، دفعة الصحة الرقمية للإمارات، برامج التغطية الشاملة لمصر — كل واحد منها مُسد في النهاية بنفس ضريبة التوثيق على الموظفين السريريين.',
        ],
      },
      {
        heading: 'ما الذي يجب على مستشفى جزائري بناؤه أولاً',
        body: [
          'إذا كنت تدير مستشفى في الجزائر وتريد نشر ذكاء اصطناعي سريري في 2026، فإن ترتيب العمليات الآن مفهوم جيداً. أولاً: كاتب ذكاء اصطناعي صوتي للاستشارات الخارجية، باللغة الفرنسية والعربية الجزائرية. هذه نقطة الانطلاق الأعلى تأثيراً والأقل خطراً. النموذج لا يتخذ قراراً سريرياً أبداً، الطبيب يؤكد كل ملاحظة، والوقت الموفَّر فوري وقابل للقياس.',
          'ثانياً: ذكاء المستندات على الأوراق الخارجية الواردة. هذا إداري وليس سريرياً، لذا فإن الحاجز التنظيمي أدنى. العائد على الاستثمار سريع لأنه يزيل موظفين من عملية لا تضيف أي قيمة طبية.',
          'ثالثاً، بعد استقرار الأولين: الترميز المساعَد للفوترة والتأمين. هنا يظهر تحسن التدفق النقدي على مكتب مدير المستشفى وحيث يموّل المشروع بهدوء بقية برنامج الذكاء الاصطناعي.',
          'لا تبدأ بذكاء اصطناعي للتصوير التشخيصي. لا تبدأ بالتحليلات التنبؤية على النتائج السريرية. لا تبدأ بروبوتات محادثة تحل محل الممرضات. كل تلك منتجات حقيقية على المدى الطويل لكن لكل واحد منها حاجزاً تشغيلياً أو تنظيمياً أو ثقياً سيُعطل برنامج الذكاء الاصطناعي للمستشفى قبل أن يبني العضلة لنشر أي شيء على الإطلاق.',
        ],
      },
    ],

    takeaways: {
      title: 'خمسة أشياء تأخذها من هذا التقرير',
      items: [
        'الذكاء الاصطناعي ممنوع هيكلياً من التشخيص المستقل بسبب التنظيم والمسؤولية وجدار الإرادة — لا شيء منها يُصلحه نموذج أفضل.',
        'طبيب المستشفى يقضي 40 إلى 60 بالمئة من اليوم على التوثيق. هذا هو الجزء الذي يحل محله الذكاء الاصطناعي فعلاً الآن.',
        'الفئات الأربع للذكاء الاصطناعي السريري الجاهزة للإنتاج هي: الكتبة الصوتيون، وذكاء المستندات الواردة، والترميز المساعَد، وتوجيه الفرز في الطوارئ.',
        'إزالة ساعتين من الأوراق لكل طبيب يومياً يضيف ما يعادل خُمس طبيب في القدرة — دون توظيف أحد.',
        'ابدأ بالكاتب الصوتي وذكاء المستندات. تخطَّ التصوير التشخيصي والتحليلات التنبؤية وروبوتات المحادثة حتى تُبنى العضلة.',
      ],
    },

    cta: {
      eyebrow: 'تحدث مع الفريق الذي كتب هذا',
      title:   'هل تفكر في الذكاء الاصطناعي السريري لمستشفاك؟ سنخبرك بما يجب بناؤه أولاً — وما لا يجب.',
      button:  'احجز مكالمة 30 دقيقة',
    },

    backToHub: 'العودة إلى جميع الرؤى',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function InsightHealthcarePage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.en;

  const articleLd = {
    '@context':      'https://schema.org',
    '@type':         'Article',
    headline:        c.title,
    description:     c.dek,
    image:           ['https://symloop.com/insights/cover-healthcare.jpg'],
    datePublished:   '2026-04-09',
    dateModified:    '2026-04-09',
    author:          { '@type': 'Organization', name: 'Symloop' },
    publisher:       {
      '@type': 'Organization',
      name:    'Symloop',
      logo:    { '@type': 'ImageObject', url: 'https://symloop.com/images/symloop-logo.png' },
    },
    mainEntityOfPage: 'https://symloop.com/insights/healthcare/',
    video: {
      '@type':        'VideoObject',
      name:           c.title,
      description:    c.dek,
      thumbnailUrl:   'https://symloop.com/insights/cover-healthcare.jpg',
      contentUrl:     'https://symloop.com/insights/healthcare-hero.mp4',
      uploadDate:     '2026-04-09',
    },
  };

  const breadcrumbs = [
    { name: 'Home',     url: 'https://symloop.com/' },
    { name: 'Insights', url: 'https://symloop.com/insights/' },
    { name: c.title,    url: 'https://symloop.com/insights/healthcare/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} — Symloop Insights`}
        description={c.dek}
        keywords="ai healthcare algeria, clinical ai mena, ai medical scribe, hospital ai algeria, doctor paperwork automation, ambient ai scribe, healthcare ai algeria, symloop insights"
        type="article"
        structuredData={articleLd}
        breadcrumbs={breadcrumbs}
        image="/insights/cover-healthcare.jpg"
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link
                  href="/insights/"
                  className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  {c.kind}
                </Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                  {c.publishedAt}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]"
              >
                {c.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl"
              >
                {c.dek}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]"
              >
                <span>{c.author}</span>
                <span>{c.pages}</span>
                <span>{c.readTime}</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Veo 3 hero video — autoplays muted, loops */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <video
              src="/insights/healthcare-hero.mp4"
              poster="/insights/cover-healthcare.jpg"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ── Body ───────────────────────────────────────────────────── */}
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="space-y-6 mb-16"
          >
            {c.intro.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-lg lg:text-xl text-white/75 leading-relaxed font-light"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {c.sections.map((s, idx) => (
            <motion.section
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">
                  {s.heading}
                </h2>
              </motion.div>

              <div className="space-y-5 ps-0 lg:ps-10">
                {s.body.map((p, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-base lg:text-lg text-white/65 leading-relaxed"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {s.image && (
                <motion.figure variants={fadeUp} className="mt-12">
                  <div className="relative w-full aspect-[16/9] border border-white/[0.08] bg-white/[0.02] overflow-hidden">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(min-width: 1024px) 800px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 font-mono text-[11px] tracking-[0.1em] uppercase text-white/40 leading-relaxed">
                    {s.image.caption}
                  </figcaption>
                </motion.figure>
              )}
            </motion.section>
          ))}

          <motion.aside
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="mt-20 mb-16 border border-white/[0.08] bg-white/[0.015] p-8 lg:p-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                {c.takeaways.title}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <ul className="space-y-5">
              {c.takeaways.items.map((t, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-5">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pt-1.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base lg:text-lg text-white/75 leading-relaxed font-light">
                    {t}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </article>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {c.cta.eyebrow}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]"
              >
                {c.cta.title}
              </motion.h2>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors"
                >
                  <span>{c.cta.button}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>

                <Link
                  href="/insights/"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  {isRtl ? (
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={1.5} />
                  ) : (
                    <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
                  )}
                  <span>{c.backToHub}</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
