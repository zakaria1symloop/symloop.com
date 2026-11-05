import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis';
const T = {
  fr: {
    cover: { eyebrow: 'Cahier des charges · Application · Plateforme · 2027', title: ['Trois devis', 'pour « la même appli »,', 'du simple au sextuple.'], subtitle: 'Une page de problème, cinq parcours racontés, les fonctions triées, des critères d’acceptation, la propriété du code et des comptes : le cahier des charges qui rend trois devis comparables et une première version livrable en 2027, pour une application mobile, une plateforme web ou un SaaS en Algérie.', left: { label: 'Sans cahier des charges', sub: 'une idée vue en France, un fichier Excel, « une appli comme Yassir », trois prix sans rapport' }, right: { label: 'Avec', sub: 'neuf pages, quatorze fonctions en première version, trois devis à 25 % près, une date' }, note: 'Algérie · cahier des charges · 2027' },
    plan: { title: 'Ce qu’un cahier des charges d’application contient, en six parties', layers: [
      { label: 'Problème', items: [
        { name: 'Le problème, les utilisateurs, ce qui se passe aujourd’hui', sub: 'une page : qui perd quoi, combien de fois par jour, avec quels outils ; ce que la version 1 doit changer', accent: true },
      ] },
      { label: 'Parcours', items: [
        { name: 'Cinq à huit parcours racontés de bout en bout', sub: 'le client commande, le livreur accepte, le gérant suit : une histoire par rôle, avec le cas où ça se passe mal' },
      ] },
      { label: 'Fonctions', items: [
        { name: 'La liste des fonctions, triée : version 1, ensuite, jamais', sub: 'format « en tant que… je veux… pour… » ; au plus 60 % de l’effort en indispensable' },
      ] },
      { label: 'Données', items: [
        { name: 'Les données et les intégrations', sub: 'l’Excel existant à reprendre, SATIM pour la carte, SMS, WhatsApp, le logiciel comptable, la caisse' },
      ] },
      { label: 'Contraintes', items: [
        { name: 'Contraintes et propriété', sub: 'arabe et français, Android d’abord, hors ligne où le réseau manque, hébergement, code et comptes au nom de l’entreprise' },
      ] },
      { label: 'Réception', items: [{ name: 'Critères d’acceptation, budget, calendrier, suite', sub: 'comment on sait que c’est fini ; une fourchette ; la date du pilote ; qui maintient et pour combien par mois' }] },
    ], caption: 'Figure 1 · La première partie est celle qui manque le plus souvent et celle qui fait le plus pour le devis : un prestataire qui comprend le problème propose moins de fonctions et les bonnes. La partie « fonctions » n’est utile que triée ; une liste de quarante fonctions sans ordre est une liste de souhaits, pas un cahier des charges.', alt: 'Six parties : le problème et les utilisateurs, mis en avant ; cinq à huit parcours racontés ; la liste des fonctions triée en version 1, ensuite, jamais ; les données et intégrations ; les contraintes et la propriété ; les critères d’acceptation, le budget et le calendrier.' },
    ecrire: { title: 'L’écrire en deux semaines, en six étapes', items: [
      { n: '01', label: 'Une page de problème', sub: 'Qui, quoi, combien de fois, avec quels outils aujourd’hui ; ce que la V1 doit changer, en chiffres.' },
      { n: '02', label: 'Cinq parcours racontés', sub: 'Une histoire par rôle, du début à la fin, avec le cas où ça rate : paiement refusé, livreur absent.' },
      { n: '03', label: 'La liste, puis le tri', sub: 'Toutes les fonctions, puis trois colonnes : version 1, ensuite, jamais. La V1 tient sur une page.', accent: true },
      { n: '04', label: 'Les écrans au crayon', sub: 'Six à dix écrans dessinés à la main, une capture d’une application de référence par écran.' },
      { n: '05', label: 'Un critère par fonction', sub: '« C’est fini quand… » : une phrase vérifiable par fonction de la V1, pas un adjectif.' },
      { n: '06', label: 'Relecture à deux voix', sub: 'Un futur utilisateur et un développeur de confiance lisent ; ce qu’ils ne comprennent pas est réécrit.' },
    ], caption: 'Figure 2 · L’étape 03 est celle qui décide du prix et du délai : c’est le tri, pas la liste, qui fait un cahier des charges. L’étape 05 est celle qui rend la recette possible : un critère vérifiable par fonction remplace « interface moderne et intuitive ». Les six étapes se font sans outil et sans prestataire, en une dizaine d’heures réparties sur deux semaines.', alt: 'Six étapes : une page de problème ; cinq parcours racontés ; la liste des fonctions puis le tri en version 1, ensuite, jamais, mis en avant ; les écrans dessinés au crayon ; un critère d’acceptation par fonction ; relecture par un utilisateur et un développeur.' },
    exemple: { title: 'Un grossiste, une plateforme de commande pour ses détaillants : l’exemple', items: [
      { value: '38 → 14', label: 'fonctions souhaitées au départ, quatorze gardées en version 1 après le tri, onze pour ensuite, treize jamais ; hypothèse' },
      { value: '9 pages', label: 'de cahier des charges : une page de problème, six parcours, la liste triée, huit écrans au crayon, un critère par fonction' },
      { value: '3 devis', label: 'reçus sur le même document, à 25 % près l’un de l’autre, contre un écart de un à six sur la première demande orale' },
      { value: '20 semaines', label: 'du premier jour d’écriture au pilote avec dix détaillants, avec une démonstration toutes les deux semaines', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : le nombre de fonctions, de pages et de semaines est à remplacer par le vôtre. Ce qui se répète d’un projet à l’autre, c’est la proportion : un peu plus du tiers des fonctions souhaitées survit au tri, et les devis reçus sur un document trié se rapprochent assez pour être comparés.', alt: 'Exemple chiffré : 38 fonctions souhaitées ramenées à 14 en version 1 ; un cahier des charges de 9 pages ; trois devis à 25 % près ; vingt semaines du premier jour d’écriture au pilote, mis en avant.' },
    flou: { title: 'Six phrases qui rendent les devis incomparables, et ce qu’on écrit à la place', columns: ['Ce qu’on lit souvent', 'Ce qui rend le devis comparable'], rows: [
      { label: '« Une appli comme Yassir »', cells: ['Chaque prestataire imagine un périmètre différent : avec ou sans suivi en temps réel, avec ou sans paiement, un ou trois rôles', 'Trois parcours racontés : le client commande, le livreur accepte, le gérant suit ; et la liste de ce qu’on ne fait pas en V1'] },
      { label: '« Interface moderne et intuitive »', cells: ['Invérifiable à la recette ; chacun y met son goût, et le désaccord arrive à la livraison', 'Huit écrans au crayon, une capture de référence par écran, et « la commande se passe en trois écrans, sans compte au premier achat »'] },
      { label: '« Paiement en ligne »', cells: ['Carte CIB et Edahabia via SATIM, paiement à la livraison, virement, portefeuille : quatre chantiers très différents', 'Lequel en V1 : à la livraison d’abord, carte via SATIM en V2 ; qui porte le dossier SATIM ; que se passe-t-il si le paiement est refusé'] },
      { label: '« Gestion des utilisateurs »', cells: ['Deux rôles ou neuf, inscription libre ou sur invitation, validation manuelle ou non : le prix varie du simple au triple', 'Les rôles nommés : client, livreur, gérant, administrateur ; qui crée qui ; qui voit quoi ; qui peut supprimer'] },
      { label: '« Ça doit marcher partout »', cells: ['Android et iOS, web et mobile, hors ligne ou non, arabe et français : chaque « et » double une partie du travail', 'Android d’abord, iOS en V2 ; hors ligne pour la prise de commande du vendeur seulement ; arabe et français dès la V1, écrans dessinés dans les deux sens'] },
      { label: '« Livraison en deux mois »', cells: ['Deux mois de quoi : de la première maquette ou de la mise en ligne sur les stores, avec ou sans recette, avec ou sans données reprises', 'Une V1 de quatorze fonctions, une démonstration toutes les deux semaines, deux semaines de recette sur critères écrits, pilote avec dix utilisateurs'] },
    ], caption: 'Figure 4 · Chaque phrase de gauche est honnête : le demandeur sait ce qu’il veut dire. Mais chaque prestataire la lit différemment, et c’est cette lecture, pas le travail, qui explique un écart de un à six entre devis. La colonne de droite ne demande aucune compétence technique ; elle demande d’avoir raconté les parcours et trié les fonctions.', alt: 'Matrice de six phrases floues : une appli comme Yassir ; interface moderne et intuitive ; paiement en ligne ; gestion des utilisateurs ; ça doit marcher partout ; livraison en deux mois ; avec pour chacune ce qu’on écrit à la place.' },
    comparer: { title: 'Comparer trois devis : six questions, dans cet ordre', columns: ['Ce que dit le devis', 'Ce qu’on vérifie'], rows: [
      { label: 'Le périmètre', cells: ['« Développement de l’application selon cahier des charges »', 'La liste des quatorze fonctions de la V1 est reprise une à une, avec ce qui est exclu ; une fonction absente est une fonction non chiffrée'] },
      { label: 'Ce qui est compris', cells: ['Un prix global, parfois « design en option »', 'Maquettes, développement, tests, mise en ligne sur Play et App Store, reprise des données existantes, formation : chaque ligne présente ou absente'] },
      { label: 'La propriété', cells: ['Rien, le plus souvent', 'Le dépôt de code, les comptes Play, App Store, hébergement et nom de domaine sont au nom de l’entreprise dès le premier jour ; écrit dans le contrat'] },
      { label: 'La méthode', cells: ['« Méthode agile »', 'Une démonstration toutes les deux semaines sur un lien que vous ouvrez vous-même ; accès au dépôt ; une personne nommée qui répond'] },
      { label: 'La suite', cells: ['« Maintenance : nous consulter »', 'Un prix par mois après la livraison, ce qu’il couvre, le délai de réponse en cas de panne, le prix d’une journée de développement supplémentaire'] },
      { label: 'Les hypothèses', cells: ['Aucune', 'Le nombre d’utilisateurs prévu, qui fournit les contenus et les données, qui porte le dossier SATIM, ce qui fait changer le prix'] },
    ], caption: 'Figure 5 · Les deux premières questions rendent les prix comparables ; la troisième évite le scénario de l’application bloquée chez un développeur disparu ; les trois dernières disent ce que coûtera l’année qui suit la livraison, qui est souvent la vraie différence entre les devis. Un prestataire qui répond aux six par écrit avant de signer est en général celui qui livre.', alt: 'Matrice de six questions pour comparer des devis : le périmètre, ce qui est compris, la propriété du code et des comptes, la méthode, la suite après livraison, les hypothèses ; avec pour chacune ce que dit le devis et ce qu’on vérifie.' },
    calendrier: { title: 'Du cahier des charges au pilote en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Cahier des charges écrit', note: 'deux semaines : problème, parcours, tri, écrans, critères', from: 0, to: 2 },
      { label: 'Trois devis, trois entretiens', note: 'même document envoyé à trois prestataires ; six questions posées à chacun', from: 2, to: 5 },
      { label: 'Cadrage et maquettes', note: 'ateliers avec le prestataire retenu, maquettes cliquables, contrat signé', from: 5, to: 7 },
      { label: 'Construction de la V1', note: 'quatorze fonctions, une démonstration toutes les deux semaines', from: 7, to: 17, accent: true },
      { label: 'Recette et mise en ligne', note: 'critères écrits vérifiés un à un, Play puis App Store', from: 17, to: 20 },
      { label: 'Pilote et corrections', note: 'dix utilisateurs réels, retours, décision sur la V2', from: 20, to: 24 },
    ], caption: 'Figure 6 · Semaine 0 = mi-janvier 2027. Les cinq premières semaines ne coûtent que du temps et décident de tout le reste. Le ramadan commence vers le 8 février 2027 : il tombe sur la consultation et le cadrage, ce qui ne gêne pas ; la construction démarre après. Le pilote tourne en juin, avant l’été, avec de vrais utilisateurs et non une démonstration.', alt: 'Calendrier en semaines : cahier des charges écrit en semaines 0 à 2 ; trois devis et entretiens en 2 à 5 ; cadrage et maquettes en 5 à 7 ; construction de la V1 en 7 à 17, mise en avant ; recette et mise en ligne en 17 à 20 ; pilote et corrections en 20 à 24.' },
  },
  en: {
    cover: { eyebrow: 'Specification · App · Platform · 2027', title: ['Three quotes', 'for “the same app”,', 'one to six apart.'], subtitle: 'One page of problem, five user journeys told end to end, a sorted feature list, acceptance criteria, ownership of code and accounts: the specification that makes three quotes comparable and a first version deliverable in 2027, for a mobile app, a web platform or a SaaS in Algeria.', left: { label: 'Without a specification', sub: 'an idea seen in France, an Excel file, “an app like Yassir”, three unrelated prices' }, right: { label: 'With one', sub: 'nine pages, fourteen features in version 1, three quotes within 25 %, a date' }, note: 'Algeria · specification · 2027' },
    plan: { title: 'What an app specification contains, in six parts', layers: [
      { label: 'Problem', items: [
        { name: 'The problem, the users, what happens today', sub: 'one page: who loses what, how many times a day, with which tools; what version 1 must change', accent: true },
      ] },
      { label: 'Journeys', items: [
        { name: 'Five to eight journeys told end to end', sub: 'the customer orders, the driver accepts, the manager follows: one story per role, including the case where it goes wrong' },
      ] },
      { label: 'Features', items: [
        { name: 'The feature list, sorted: version 1, later, never', sub: '“as a… I want… so that…” format; at most 60 % of the effort in must-haves' },
      ] },
      { label: 'Data', items: [
        { name: 'Data and integrations', sub: 'the existing Excel to carry over, SATIM for cards, SMS, WhatsApp, the accounting software, the till' },
      ] },
      { label: 'Constraints', items: [
        { name: 'Constraints and ownership', sub: 'Arabic and French, Android first, offline where the network fails, hosting, code and accounts in the company’s name' },
      ] },
      { label: 'Acceptance', items: [{ name: 'Acceptance criteria, budget, calendar, what comes next', sub: 'how we know it is done; a range; the pilot date; who maintains it and for how much per month' }] },
    ], caption: 'Figure 1 · The first part is the one most often missing and the one that does the most for the quote: a vendor who understands the problem proposes fewer features, and the right ones. The “features” part is only useful once sorted; a list of forty features in no order is a wish list, not a specification.', alt: 'Six parts: the problem and the users, highlighted; five to eight journeys told end to end; the feature list sorted into version 1, later, never; data and integrations; constraints and ownership; acceptance criteria, budget and calendar.' },
    ecrire: { title: 'Writing it in two weeks, in six steps', items: [
      { n: '01', label: 'One page of problem', sub: 'Who, what, how many times, with which tools today; what V1 must change, in numbers.' },
      { n: '02', label: 'Five journeys told', sub: 'One story per role, start to finish, including the failure case: payment refused, driver absent.' },
      { n: '03', label: 'The list, then the sort', sub: 'Every feature, then three columns: version 1, later, never. V1 fits on one page.', accent: true },
      { n: '04', label: 'Screens in pencil', sub: 'Six to ten screens drawn by hand, one screenshot of a reference app per screen.' },
      { n: '05', label: 'One criterion per feature', sub: '“It is done when…”: one checkable sentence per V1 feature, not an adjective.' },
      { n: '06', label: 'Two readers', sub: 'A future user and a trusted developer read it; whatever they do not understand is rewritten.' },
    ], caption: 'Figure 2 · Step 03 is the one that decides price and lead time: the sort, not the list, is what makes a specification. Step 05 is what makes acceptance possible: one checkable criterion per feature replaces “modern and intuitive interface”. The six steps need no tool and no vendor, about ten hours spread over two weeks.', alt: 'Six steps: one page of problem; five journeys told; the feature list then the sort into version 1, later, never, highlighted; screens drawn in pencil; one acceptance criterion per feature; reading by a user and a developer.' },
    exemple: { title: 'A wholesaler, an ordering platform for its retailers: the example', items: [
      { value: '38 → 14', label: 'features wanted at the start, fourteen kept in version 1 after the sort, eleven for later, thirteen never; assumption' },
      { value: '9 pages', label: 'of specification: one page of problem, six journeys, the sorted list, eight pencil screens, one criterion per feature' },
      { value: '3 quotes', label: 'received on the same document, within 25 % of each other, against a one-to-six spread on the first verbal request' },
      { value: '20 weeks', label: 'from the first day of writing to the pilot with ten retailers, with a demo every two weeks', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: the number of features, pages and weeks is to be replaced by yours. What repeats from one project to the next is the proportion: a little over a third of the wanted features survive the sort, and quotes received on a sorted document come close enough to be compared.', alt: 'Worked example: 38 wanted features brought down to 14 in version 1; a 9-page specification; three quotes within 25 %; twenty weeks from the first day of writing to the pilot, highlighted.' },
    flou: { title: 'Six sentences that make quotes incomparable, and what to write instead', columns: ['What we often read', 'What makes the quote comparable'], rows: [
      { label: '“An app like Yassir”', cells: ['Every vendor imagines a different scope: with or without live tracking, with or without payment, one role or three', 'Three journeys told: the customer orders, the driver accepts, the manager follows; and the list of what V1 does not do'] },
      { label: '“Modern and intuitive interface”', cells: ['Impossible to check at acceptance; everyone brings their own taste, and the disagreement arrives at delivery', 'Eight pencil screens, one reference screenshot per screen, and “ordering takes three screens, with no account on the first purchase”'] },
      { label: '“Online payment”', cells: ['CIB and Edahabia cards via SATIM, cash on delivery, bank transfer, wallet: four very different pieces of work', 'Which one in V1: cash on delivery first, card via SATIM in V2; who carries the SATIM file; what happens when a payment is refused'] },
      { label: '“User management”', cells: ['Two roles or nine, open sign-up or by invitation, manual approval or not: the price varies threefold', 'Named roles: customer, driver, manager, administrator; who creates whom; who sees what; who can delete'] },
      { label: '“It has to work everywhere”', cells: ['Android and iOS, web and mobile, offline or not, Arabic and French: every “and” doubles part of the work', 'Android first, iOS in V2; offline for the sales rep’s order entry only; Arabic and French from V1, screens drawn in both directions'] },
      { label: '“Delivery in two months”', cells: ['Two months of what: from the first mock-up or to the store release, with or without acceptance, with or without data carried over', 'A V1 of fourteen features, a demo every two weeks, two weeks of acceptance on written criteria, pilot with ten users'] },
    ], caption: 'Figure 4 · Every sentence on the left is honest: the person asking knows what they mean. But every vendor reads it differently, and it is that reading, not the work, that explains a one-to-six spread between quotes. The right column needs no technical skill; it needs the journeys told and the features sorted.', alt: 'Matrix of six vague sentences: an app like Yassir; modern and intuitive interface; online payment; user management; it has to work everywhere; delivery in two months; with what to write instead for each.' },
    comparer: { title: 'Comparing three quotes: six questions, in this order', columns: ['What the quote says', 'What we check'], rows: [
      { label: 'Scope', cells: ['“Development of the application as per specification”', 'The fourteen V1 features are listed one by one, with what is excluded; a missing feature is an unpriced feature'] },
      { label: 'What is included', cells: ['One overall price, sometimes “design optional”', 'Mock-ups, development, tests, release on Play and App Store, carry-over of existing data, training: each line present or absent'] },
      { label: 'Ownership', cells: ['Nothing, most of the time', 'The code repository, the Play, App Store, hosting and domain accounts are in the company’s name from day one; written in the contract'] },
      { label: 'Method', cells: ['“Agile method”', 'A demo every two weeks on a link you open yourself; access to the repository; a named person who answers'] },
      { label: 'What comes next', cells: ['“Maintenance: contact us”', 'A price per month after delivery, what it covers, the response time when something breaks, the price of an extra development day'] },
      { label: 'Assumptions', cells: ['None', 'The expected number of users, who provides content and data, who carries the SATIM file, what changes the price'] },
    ], caption: 'Figure 5 · The first two questions make prices comparable; the third avoids the scenario of the app stuck with a developer who vanished; the last three say what the year after delivery will cost, which is often the real difference between quotes. A vendor who answers all six in writing before signing is usually the one who delivers.', alt: 'Matrix of six questions to compare quotes: scope, what is included, ownership of code and accounts, method, what comes next after delivery, assumptions; with what the quote says and what we check for each.' },
    calendrier: { title: 'From specification to pilot in 2027, in weeks', unit: 'wks', items: [
      { label: 'Specification written', note: 'two weeks: problem, journeys, sort, screens, criteria', from: 0, to: 2 },
      { label: 'Three quotes, three interviews', note: 'same document sent to three vendors; six questions asked of each', from: 2, to: 5 },
      { label: 'Scoping and mock-ups', note: 'workshops with the chosen vendor, clickable mock-ups, contract signed', from: 5, to: 7 },
      { label: 'Building V1', note: 'fourteen features, a demo every two weeks', from: 7, to: 17, accent: true },
      { label: 'Acceptance and release', note: 'written criteria checked one by one, Play then App Store', from: 17, to: 20 },
      { label: 'Pilot and fixes', note: 'ten real users, feedback, decision on V2', from: 20, to: 24 },
    ], caption: 'Figure 6 · Week 0 = mid-January 2027. The first five weeks cost only time and decide everything that follows. Ramadan starts around 8 February 2027: it falls on the consultation and scoping, which is no problem; building starts after. The pilot runs in June, before summer, with real users and not a demo.', alt: 'Calendar in weeks: specification written in weeks 0 to 2; three quotes and interviews in 2 to 5; scoping and mock-ups in 5 to 7; building V1 in 7 to 17, highlighted; acceptance and release in 17 to 20; pilot and fixes in 20 to 24.' },
  },
  ar: {
    cover: { eyebrow: 'دفتر الشروط · تطبيق · منصة · 2027', title: ['ثلاثة عروض أسعار', 'لـ«التطبيق نفسه»،', 'من واحد إلى ستة.'], subtitle: 'صفحة واحدة للمشكلة، خمسة مسارات تُروى من البداية إلى النهاية، قائمة وظائف مرتَّبة، معايير قبول، ملكية الكود والحسابات: دفتر الشروط الذي يجعل ثلاثة عروض قابلة للمقارنة ونسخة أولى قابلة للتسليم في 2027، لتطبيق هاتف أو منصة ويب أو SaaS في الجزائر.', left: { label: 'بدون دفتر شروط', sub: 'فكرة رُئيت في فرنسا، ملف Excel، «تطبيق مثل Yassir»، ثلاثة أسعار لا علاقة بينها' }, right: { label: 'معه', sub: 'تسع صفحات، أربع عشرة وظيفة في النسخة الأولى، ثلاثة عروض في حدود 25 %، تاريخ' }, note: 'الجزائر · دفتر الشروط · 2027' },
    plan: { title: 'ما يحتويه دفتر شروط تطبيق، في ستة أجزاء', layers: [
      { label: 'المشكلة', items: [
        { name: 'المشكلة، المستعملون، ما يحدث اليوم', sub: 'صفحة واحدة: من يخسر ماذا، كم مرة في اليوم، بأي أدوات؛ ما يجب أن تغيّره النسخة الأولى', accent: true },
      ] },
      { label: 'المسارات', items: [
        { name: 'خمسة إلى ثمانية مسارات تُروى من البداية إلى النهاية', sub: 'الزبون يطلب، الموزّع يقبل، المسيّر يتابع: قصة لكل دور، مع الحالة التي تسوء فيها الأمور' },
      ] },
      { label: 'الوظائف', items: [
        { name: 'قائمة الوظائف مرتَّبة: النسخة الأولى، لاحقاً، أبداً', sub: 'صيغة «بصفتي… أريد… لكي…»؛ على الأكثر 60 % من الجهد في الضروري' },
      ] },
      { label: 'البيانات', items: [
        { name: 'البيانات والتكاملات', sub: 'ملف Excel الحالي الذي يُنقل، SATIM للبطاقة، SMS، واتساب، برنامج المحاسبة، الصندوق' },
      ] },
      { label: 'القيود', items: [
        { name: 'القيود والملكية', sub: 'العربية والفرنسية، أندرويد أولاً، دون اتصال حيث تنقطع الشبكة، الاستضافة، الكود والحسابات باسم الشركة' },
      ] },
      { label: 'القبول', items: [{ name: 'معايير القبول، الميزانية، التقويم، ما بعد', sub: 'كيف نعرف أن العمل انتهى؛ نطاق سعري؛ تاريخ التجربة؛ من يصون المنتج وبكم شهرياً' }] },
    ], caption: 'الشكل 1 · الجزء الأول هو الأكثر غياباً والأكثر أثراً في عرض السعر: المورّد الذي يفهم المشكلة يقترح وظائف أقل وأصوب. جزء «الوظائف» لا ينفع إلا مرتَّباً؛ قائمة من أربعين وظيفة بلا ترتيب هي قائمة أمنيات لا دفتر شروط.', alt: 'ستة أجزاء: المشكلة والمستعملون، مُبرَز؛ خمسة إلى ثمانية مسارات؛ قائمة الوظائف مرتَّبة إلى النسخة الأولى ولاحقاً وأبداً؛ البيانات والتكاملات؛ القيود والملكية؛ معايير القبول والميزانية والتقويم.' },
    ecrire: { title: 'كتابته في أسبوعين، في ست خطوات', items: [
      { n: '01', label: 'صفحة للمشكلة', sub: 'من، ماذا، كم مرة، بأي أدوات اليوم؛ ما يجب أن تغيّره النسخة الأولى، بالأرقام.' },
      { n: '02', label: 'خمسة مسارات تُروى', sub: 'قصة لكل دور من البداية إلى النهاية، مع حالة الفشل: دفع مرفوض، موزّع غائب.' },
      { n: '03', label: 'القائمة ثم الفرز', sub: 'كل الوظائف، ثم ثلاثة أعمدة: النسخة الأولى، لاحقاً، أبداً. النسخة الأولى في صفحة واحدة.', accent: true },
      { n: '04', label: 'الشاشات بالقلم', sub: 'ست إلى عشر شاشات مرسومة باليد، ولقطة من تطبيق مرجعي لكل شاشة.' },
      { n: '05', label: 'معيار لكل وظيفة', sub: '«ينتهي العمل عندما…»: جملة واحدة قابلة للتحقق لكل وظيفة في النسخة الأولى، لا صفة.' },
      { n: '06', label: 'قراءة بصوتين', sub: 'مستعمل مستقبلي ومطوّر موثوق يقرآن؛ ما لا يفهمانه يُعاد كتابته.' },
    ], caption: 'الشكل 2 · الخطوة 03 هي التي تقرر السعر والمدة: الفرز، لا القائمة، هو ما يصنع دفتر الشروط. الخطوة 05 هي التي تجعل الاستلام ممكناً: معيار قابل للتحقق لكل وظيفة يحل محل «واجهة عصرية وبديهية». الخطوات الست لا تحتاج أداة ولا مورّداً، نحو عشر ساعات موزعة على أسبوعين.', alt: 'ست خطوات: صفحة للمشكلة؛ خمسة مسارات تُروى؛ قائمة الوظائف ثم الفرز إلى النسخة الأولى ولاحقاً وأبداً، مُبرَز؛ الشاشات بالقلم؛ معيار قبول لكل وظيفة؛ قراءة من مستعمل ومطوّر.' },
    exemple: { title: 'تاجر جملة، منصة طلبات لتجار التجزئة عنده: المثال', items: [
      { value: '38 → 14', label: 'وظيفة مرغوبة في البداية، أربع عشرة أُبقيت في النسخة الأولى بعد الفرز، إحدى عشرة لاحقاً، ثلاث عشرة أبداً؛ فرضية' },
      { value: '9 صفحات', label: 'لدفتر الشروط: صفحة للمشكلة، ستة مسارات، القائمة المرتَّبة، ثماني شاشات بالقلم، معيار لكل وظيفة' },
      { value: '3 عروض', label: 'وردت على الوثيقة نفسها، في حدود 25 % بعضها من بعض، مقابل فارق من واحد إلى ستة في الطلب الشفهي الأول' },
      { value: '20 أسبوعاً', label: 'من أول يوم كتابة إلى التجربة مع عشرة تجار تجزئة، مع عرض تجريبي كل أسبوعين', accent: true },
    ], caption: 'الشكل 3 · حساب على فرضيات لا قياس: عدد الوظائف والصفحات والأسابيع يُستبدل بأرقامكم. ما يتكرر من مشروع إلى آخر هو النسبة: ما يزيد قليلاً عن ثلث الوظائف المرغوبة ينجو من الفرز، والعروض الواردة على وثيقة مرتَّبة تتقارب بما يكفي للمقارنة.', alt: 'مثال محسوب: 38 وظيفة مرغوبة خُفضت إلى 14 في النسخة الأولى؛ دفتر شروط من 9 صفحات؛ ثلاثة عروض في حدود 25 %؛ عشرون أسبوعاً من أول يوم كتابة إلى التجربة، مُبرَز.' },
    flou: { title: 'ست جمل تجعل العروض غير قابلة للمقارنة، وما نكتبه بدلاً منها', columns: ['ما نقرؤه كثيراً', 'ما يجعل العرض قابلاً للمقارنة'], rows: [
      { label: '«تطبيق مثل Yassir»', cells: ['كل مورّد يتخيل نطاقاً مختلفاً: مع التتبع الحي أو بدونه، مع الدفع أو بدونه، دور واحد أو ثلاثة', 'ثلاثة مسارات تُروى: الزبون يطلب، الموزّع يقبل، المسيّر يتابع؛ وقائمة ما لا تفعله النسخة الأولى'] },
      { label: '«واجهة عصرية وبديهية»', cells: ['لا يمكن التحقق منها عند الاستلام؛ كلٌّ يأتي بذوقه، والخلاف يصل عند التسليم', 'ثماني شاشات بالقلم، لقطة مرجعية لكل شاشة، و«الطلب يتم في ثلاث شاشات، دون حساب عند أول شراء»'] },
      { label: '«الدفع الإلكتروني»', cells: ['بطاقة CIB والذهبية عبر SATIM، الدفع عند التسليم، التحويل، المحفظة: أربعة أعمال مختلفة جداً', 'أيها في النسخة الأولى: عند التسليم أولاً، البطاقة عبر SATIM في الثانية؛ من يحمل ملف SATIM؛ ماذا يحدث إن رُفض الدفع'] },
      { label: '«إدارة المستعملين»', cells: ['دوران أو تسعة، تسجيل حر أو بدعوة، مصادقة يدوية أو لا: السعر يتغير من واحد إلى ثلاثة', 'أدوار مسمّاة: زبون، موزّع، مسيّر، مدير؛ من ينشئ من؛ من يرى ماذا؛ من يستطيع الحذف'] },
      { label: '«يجب أن يعمل في كل مكان»', cells: ['أندرويد وiOS، ويب وهاتف، دون اتصال أو لا، عربية وفرنسية: كل «و» تضاعف جزءاً من العمل', 'أندرويد أولاً وiOS في النسخة الثانية؛ دون اتصال لإدخال طلبات البائع فقط؛ العربية والفرنسية من النسخة الأولى، شاشات مرسومة في الاتجاهين'] },
      { label: '«التسليم في شهرين»', cells: ['شهران من ماذا: من أول نموذج أم حتى النشر في المتاجر، مع الاستلام أو بدونه، مع نقل البيانات أو بدونه', 'نسخة أولى من أربع عشرة وظيفة، عرض تجريبي كل أسبوعين، أسبوعان من الاستلام على معايير مكتوبة، تجربة مع عشرة مستعملين'] },
    ], caption: 'الشكل 4 · كل جملة في العمود الأول صادقة: صاحب الطلب يعرف ما يقصد. لكن كل مورّد يقرؤها بطريقة مختلفة، وهذه القراءة، لا العمل، هي ما يفسر فارقاً من واحد إلى ستة بين العروض. العمود الثاني لا يحتاج كفاءة تقنية؛ يحتاج أن تكون المسارات قد رُويت والوظائف قد فُرزت.', alt: 'مصفوفة ست جمل غامضة: تطبيق مثل Yassir؛ واجهة عصرية وبديهية؛ الدفع الإلكتروني؛ إدارة المستعملين؛ يجب أن يعمل في كل مكان؛ التسليم في شهرين؛ مع ما نكتبه بدلاً من كل منها.' },
    comparer: { title: 'مقارنة ثلاثة عروض: ستة أسئلة، بهذا الترتيب', columns: ['ما يقوله العرض', 'ما نتحقق منه'], rows: [
      { label: 'النطاق', cells: ['«تطوير التطبيق وفق دفتر الشروط»', 'وظائف النسخة الأولى الأربع عشرة مذكورة واحدة واحدة، مع ما هو مستبعَد؛ الوظيفة الغائبة وظيفة غير مسعَّرة'] },
      { label: 'ما هو مشمول', cells: ['سعر إجمالي، وأحياناً «التصميم اختياري»', 'النماذج، التطوير، الاختبارات، النشر على Play وApp Store، نقل البيانات الحالية، التكوين: كل سطر حاضر أو غائب'] },
      { label: 'الملكية', cells: ['لا شيء، في الغالب', 'مستودع الكود وحسابات Play وApp Store والاستضافة واسم النطاق باسم الشركة من اليوم الأول؛ مكتوب في العقد'] },
      { label: 'الطريقة', cells: ['«منهجية رشيقة»', 'عرض تجريبي كل أسبوعين على رابط تفتحونه بأنفسكم؛ وصول إلى المستودع؛ شخص مسمّى يجيب'] },
      { label: 'ما بعد', cells: ['«الصيانة: استشيرونا»', 'سعر شهري بعد التسليم، ما يغطيه، مهلة الرد عند العطل، سعر يوم تطوير إضافي'] },
      { label: 'الفرضيات', cells: ['لا شيء', 'عدد المستعملين المتوقع، من يوفر المحتوى والبيانات، من يحمل ملف SATIM، ما الذي يغيّر السعر'] },
    ], caption: 'الشكل 5 · السؤالان الأولان يجعلان الأسعار قابلة للمقارنة؛ الثالث يتفادى سيناريو التطبيق العالق عند مطوّر اختفى؛ الثلاثة الأخيرة تقول كم ستكلف السنة التي تلي التسليم، وهي غالباً الفرق الحقيقي بين العروض. المورّد الذي يجيب عن الستة كتابياً قبل التوقيع هو عادة من يسلّم.', alt: 'مصفوفة ستة أسئلة لمقارنة العروض: النطاق، ما هو مشمول، ملكية الكود والحسابات، الطريقة، ما بعد التسليم، الفرضيات؛ مع ما يقوله العرض وما نتحقق منه لكل منها.' },
    calendrier: { title: 'من دفتر الشروط إلى التجربة في 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'دفتر الشروط مكتوب', note: 'أسبوعان: المشكلة، المسارات، الفرز، الشاشات، المعايير', from: 0, to: 2 },
      { label: 'ثلاثة عروض، ثلاث مقابلات', note: 'الوثيقة نفسها تُرسل إلى ثلاثة مورّدين؛ ستة أسئلة لكل واحد', from: 2, to: 5 },
      { label: 'التأطير والنماذج', note: 'ورشات مع المورّد المختار، نماذج قابلة للنقر، عقد موقَّع', from: 5, to: 7 },
      { label: 'بناء النسخة الأولى', note: 'أربع عشرة وظيفة، عرض تجريبي كل أسبوعين', from: 7, to: 17, accent: true },
      { label: 'الاستلام والنشر', note: 'المعايير المكتوبة تُتحقق واحداً واحداً، Play ثم App Store', from: 17, to: 20 },
      { label: 'التجربة والتصحيحات', note: 'عشرة مستعملين حقيقيين، ملاحظات، قرار النسخة الثانية', from: 20, to: 24 },
    ], caption: 'الشكل 6 · الأسبوع 0 = منتصف جانفي 2027. الأسابيع الخمسة الأولى لا تكلف إلا وقتاً وتقرر كل ما يليها. رمضان يبدأ نحو 8 فيفري 2027: يصادف الاستشارة والتأطير، وهذا لا يعيق؛ البناء يبدأ بعده. التجربة تجري في جوان، قبل الصيف، مع مستعملين حقيقيين لا عرضاً تجريبياً.', alt: 'تقويم بالأسابيع: دفتر الشروط مكتوب في الأسبوعين 0 إلى 2؛ ثلاثة عروض ومقابلات من 2 إلى 5؛ التأطير والنماذج من 5 إلى 7؛ بناء النسخة الأولى من 7 إلى 17، مُبرَز؛ الاستلام والنشر من 17 إلى 20؛ التجربة والتصحيحات من 20 إلى 24.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      plan: { svg: layers({ title: t.plan.title, layers: t.plan.layers, rtl }), caption: t.plan.caption, alt: t.plan.alt },
      ecrire: { svg: steps({ title: t.ecrire.title, steps: t.ecrire.items, arrows: true, rtl }), caption: t.ecrire.caption, alt: t.ecrire.alt },
      exemple: { svg: stats({ title: t.exemple.title, items: t.exemple.items, rtl }), caption: t.exemple.caption, alt: t.exemple.alt },
      flou: { svg: matrix({ title: t.flou.title, columns: t.flou.columns, rows: t.flou.rows, rtl }), caption: t.flou.caption, alt: t.flou.alt },
      comparer: { svg: matrix({ title: t.comparer.title, columns: t.comparer.columns, rows: t.comparer.rows, rtl }), caption: t.comparer.caption, alt: t.comparer.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 24, tick: 4, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
