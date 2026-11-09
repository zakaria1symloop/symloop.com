import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'quelle-societe-choisir-algerie-2027-application-avec-ia-cinq-preuves-a-exiger-avant-de-signer-ou-verifier-les-notres';
const T = {
  fr: {
    cover: { eyebrow: 'Choisir un prestataire · Preuves · Application + IA · 2027', title: ['Tout le monde dit', 'qu’il fait de l’IA.', 'Demandez les preuves.'], subtitle: 'Les cinq preuves à exiger d’une société de développement en Algérie avant de lui confier une application avec de l’IA : un produit livré qu’on peut ouvrir, un avis vérifié par un tiers, l’architecture expliquée, une démonstration de bout en bout, et le code dans votre dépôt. Et où vérifier les nôtres.', left: { label: 'Un site qui affirme', sub: 'capacités, logos, promesses' }, right: { label: 'Un prestataire qui prouve', sub: 'liens, avis tiers, dépôt à votre nom' } },
    parcours: { title: 'Vérifier un prestataire en six moments, sans se déplacer', items: [
      { n: '01', label: 'Le produit qu’on peut ouvrir', sub: 'Une adresse publique d’un produit livré, qu’on ouvre sur son téléphone : pas une capture, pas une maquette, pas un « projet confidentiel ».' },
      { n: '02', label: 'L’avis vérifié par un tiers', sub: 'Un avis client sur une plateforme qui vérifie l’identité du client, avec le projet, le budget et les dates ; pas un témoignage collé sur le site.', accent: true },
      { n: '03', label: 'L’architecture expliquée', sub: 'Comment l’application, le serveur, la base et l’IA sont construits, en texte lisible : hors ligne, authentification, intégration, données.' },
      { n: '04', label: 'La démonstration de bout en bout', sub: 'Un rendez-vous où l’on voit un produit réel fonctionner du téléphone au serveur, y compris la partie IA, et où l’on pose ses questions.' },
      { n: '05', label: 'Le code, les comptes, le dépôt', sub: 'Le contrat dit que le code, les comptes et l’hébergement sont au nom de votre entreprise, dès la première livraison, dans votre dépôt.' },
      { n: '06', label: 'La méthode de livraison', sub: 'Un lot démontré toutes les deux semaines, une recette que vous faites vous-même, un retour arrière démontré ; écrit dans le devis.' },
    ], caption: 'Figure 1 · Le moment 02 est celui que les sites ne peuvent pas fabriquer : un avis sur une plateforme tierce qui vérifie le client, avec le budget et les dates, ne se rédige pas soi-même. Le moment 05 est celui qui protège l’avenir : un prestataire qui refuse de mettre le code dans votre dépôt dès la première livraison a répondu à la question.', alt: 'Six étapes : produit ouvrable, avis tiers, architecture, démonstration, code et dépôt, méthode de livraison' },
    couches: { title: 'Ce qu’une application avec de l’IA demande vraiment, en cinq couches', layers: [
      { label: 'Application', items: [{ name: 'iOS et Android ou application installable, comptes, notifications, paiement, hors ligne', sub: 'ce que l’utilisateur touche ; ce que la plupart des devis décrivent, et rien d’autre' }] },
      { label: 'Serveur et données', items: [{ name: 'API, base de données, authentification, fichiers, sauvegardes, hébergement', sub: 'ce qui fait que l’application existe encore dans trois ans' }] },
      { label: 'IA', items: [{ name: 'Modèle, récupération de documents, agents, limites, journal, coût par requête, repli humain', sub: 'la partie où « on fait de l’IA » doit devenir « voici comment, à quel coût, et ce que l’agent ne fait jamais »', accent: true }] },
      { label: 'Intégration', items: [{ name: 'Comptabilité, caisse, ERP, WhatsApp, SMS, paiement CIB/Edahabia', sub: 'ce qui relie le produit à l’entreprise réelle ; souvent la moitié du travail' }] },
      { label: 'Livraison et vie', items: [{ name: 'Tests, recette, mise en production, stores, supervision, mises à jour, coût annuel', sub: 'ce qui distingue un produit d’un prototype ; ce qu’un devis sérieux chiffre' }] },
    ], caption: 'Figure 2 · La couche du milieu est celle où les affirmations sont les plus faciles et les preuves les plus rares. Un prestataire qui peut expliquer, par écrit, comment son agent IA lit vos données, ce qu’il ne fait jamais et ce que coûte une requête a construit la chose au moins une fois.', alt: 'Cinq couches : application, serveur et données, IA, intégration, livraison et vie' },
    exemple: { title: 'Ce que nous mettons sur la table avant la signature : nos preuves', items: [
      { value: '2012', label: 'année de création ; ingénieurs à Alger et Sétif ; fiche entreprise vérifiée sur Clutch avec adresse, équipe et taux horaire' },
      { value: '2 × 5,0', label: 'avis clients vérifiés par Clutch, notés 5,0 sur 5 : une plateforme de réservation (2026) et un système de projection en réalité augmentée (2025), avec budget et dates' },
      { value: '3', label: 'plateformes livrées et publiques, ouvrables aujourd’hui : Hajz, Sadia et TrackSera, chacune avec son étude de cas et son adresse' },
      { value: '8', label: 'guides techniques publiés qui décrivent comment nous construisons : hors ligne, authentification, agent WhatsApp, intégration, SaaS, livraison', accent: true },
    ], caption: 'Figure 3 · Ces chiffres se vérifient sans nous : la fiche Clutch est tenue par Clutch, les trois plateformes s’ouvrent dans un navigateur, et les guides sont publics. Ce que nous ne mettons pas sur cette page : les noms des clients qui ne l’ont pas autorisé, et les produits encore en construction.', alt: 'Quatre preuves : fondée en 2012, deux avis Clutch à 5,0, trois plateformes publiques, huit guides techniques' },
    preuves: { title: 'Les cinq questions d’un acheteur, et où vérifier nos réponses', columns: ['Ce qu’on vous répond', 'Où le vérifier vous-même'], rows: [
      { label: 'Un produit mobile + IA livré ?', cells: ['Des plateformes publiques livrées, dont une multi-tenant pour la distribution ; les produits avec IA en cours sont montrés en rendez-vous, pas affichés', 'Études de cas Hajz, Sadia, TrackSera sur ce site, chacune avec l’adresse publique du produit'] },
      { label: 'Une application sur les stores ?', cells: ['Applications installables et distribution directe sur appareils d’entreprise ; publication sur Google Play et App Store faite au nom du client, sur son compte développeur', 'Le guide PWA ou native explique le choix ; les stores sont consultés sur le compte du client, pas sur le nôtre'] },
      { label: 'L’architecture serveur et IA ?', cells: ['Décrite par écrit, guide par guide : hors ligne, authentification, agent WhatsApp, intégration comptable, SaaS multi-tenant, tableau de bord', 'Les guides 2027 de ce site, lisibles sans rendez-vous'] },
      { label: 'Une démonstration de bout en bout ?', cells: ['Un rendez-vous d’une heure sur un produit réel, du téléphone au serveur, IA comprise, puis une démonstration toutes les deux semaines sur votre projet', 'Le guide sur la livraison décrit le lot de deux semaines et l’environnement de recette que vous ouvrez vous-même'] },
      { label: 'Propriété du code et suite après lancement ?', cells: ['Code, comptes, domaines et hébergement au nom de votre entreprise dès la première livraison ; maintenance et évolutions chiffrées à l’année', 'La clause est dans le devis ; le guide sur la vie d’une application donne ce que coûte l’année'] },
      { label: 'Un avis indépendant ?', cells: ['Deux avis vérifiés par Clutch, notés 5,0, avec budget, dates et rôle du client', 'clutch.co/profile/symloop-technology, tenu par Clutch, pas par nous'] },
    ], caption: 'Figure 4 · Posez les mêmes six questions à chaque prestataire que vous comparez, et exigez pour chacune un lien que vous ouvrez vous-même. Un prestataire qui répond « confidentiel » aux six n’a rien livré qu’on puisse voir, ou n’a pas demandé à ses clients.', alt: 'Matrice de six questions d’acheteur avec la réponse et le lieu de vérification' },
    criteres: { title: 'Agence web, freelance, société produit : ce que chacun livre sur une application avec IA', columns: ['Agence web ou freelance', 'Société d’ingénierie produit'], rows: [
      { label: 'Application mobile', cells: ['Écrans et formulaires ; hors ligne rarement ; stores souvent au nom du prestataire', 'Base locale, file de synchronisation, stores au nom du client, tests sur vrais téléphones'] },
      { label: 'Serveur et données', cells: ['Un hébergement mutualisé, une base sans sauvegarde testée, des comptes au nom du prestataire', 'API, sauvegardes restaurées en recette, hébergement et comptes au nom du client'] },
      { label: 'IA', cells: ['Un chatbot branché sur une API, sans journal ni limites ni coût suivi', 'Agent avec récupération de documents, limites écrites, repli humain, coût par requête mesuré'] },
      { label: 'Intégration', cells: ['« Export Excel » ; la comptabilité et la caisse restent à part', 'Connecteurs API ou fichiers, idempotence, rapprochement quotidien'] },
      { label: 'Livraison', cells: ['Une grande livraison à la fin, recette « en regardant », mise en ligne par copie de fichiers', 'Lot toutes les deux semaines, environnement de recette, tests automatisés, retour arrière démontré'] },
      { label: 'Après le lancement', cells: ['Le prestataire passe au projet suivant ; les mises à jour se négocient à chaque fois', 'Supervision, mises à jour, coût annuel écrit, et le code dans votre dépôt si vous changez'] },
    ], caption: 'Figure 5 · Aucune colonne n’est « la bonne » pour tout : un site vitrine se confie à une agence, et c’est très bien. Une application avec de l’IA que des clients paieront se confie à ceux qui livrent la colonne de droite, et la preuve en est un produit qu’on ouvre, pas un devis.', alt: 'Matrice comparant agence web ou freelance et société d’ingénierie produit sur six critères' },
    calendrier: { title: 'De la première question au contrat, en semaines', unit: 'sem.', items: [
      { label: 'Trois prestataires, six questions', note: 'les mêmes six questions envoyées par écrit aux trois ; réponses avec liens exigées', from: 0, to: 1 },
      { label: 'Vérification des preuves', note: 'ouvrir chaque produit, lire chaque avis tiers, lire l’architecture ; éliminer ceux qui répondent « confidentiel »', from: 1, to: 2 },
      { label: 'Démonstrations de bout en bout', note: 'une heure par prestataire restant, sur un produit réel, IA comprise ; vos questions préparées', from: 2, to: 3, accent: true },
      { label: 'Cahier des charges et devis', note: 'exigences vérifiables, lots, méthode de livraison et propriété du code écrits ; trois devis comparables', from: 3, to: 5 },
      { label: 'Contrat et premier lot', note: 'dépôt à votre nom créé avant le premier commit ; premier lot écrit ; première démonstration quinze jours plus tard', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines pour choisir sans se tromper, dont une seule de rendez-vous. La semaine 1 élimine plus de prestataires que la semaine 2 : ceux qui ne peuvent pas envoyer un lien vers un produit livré ou vers un avis tiers n’ont pas à être rencontrés.', alt: 'Frise de six semaines : six questions, vérification, démonstrations, cahier des charges et devis, contrat et premier lot' },
  },
  en: {
    cover: { eyebrow: 'Choosing a vendor · Proof · App + AI · 2027', title: ['Everyone says', 'they do AI.', 'Ask for the proof.'], subtitle: 'The five proofs to demand from a software company in Algeria before trusting it with an app that includes AI: a delivered product you can open, a third-party verified review, the architecture explained, an end-to-end demo, and the code in your repository. And where to check ours.', left: { label: 'A site that claims', sub: 'capabilities, logos, promises' }, right: { label: 'A vendor that proves', sub: 'links, third-party reviews, your repo' } },
    parcours: { title: 'Verifying a vendor in six moments, without travelling', items: [
      { n: '01', label: 'The product you can open', sub: 'A public address of a delivered product, opened on your phone: not a screenshot, not a mock-up, not a “confidential project”.' },
      { n: '02', label: 'The third-party verified review', sub: 'A client review on a platform that verifies the client’s identity, with project, budget and dates; not a testimonial pasted on the site.', accent: true },
      { n: '03', label: 'The architecture explained', sub: 'How the app, server, database and AI are built, in readable text: offline, authentication, integration, data.' },
      { n: '04', label: 'The end-to-end demo', sub: 'A meeting where you see a real product run from phone to server, AI included, and where you ask your questions.' },
      { n: '05', label: 'Code, accounts, repository', sub: 'The contract says code, accounts and hosting are in your company’s name, from the first delivery, in your repository.' },
      { n: '06', label: 'The delivery method', sub: 'A batch demoed every two weeks, an acceptance you do yourself, a demonstrated rollback; written in the quote.' },
    ], caption: 'Figure 1 · Moment 02 is the one websites cannot fabricate: a review on a third-party platform that verifies the client, with budget and dates, cannot be written by oneself. Moment 05 protects the future: a vendor who refuses to put the code in your repository from the first delivery has answered the question.', alt: 'Six steps: openable product, third-party review, architecture, demo, code and repository, delivery method' },
    couches: { title: 'What an app with AI really requires, in five layers', layers: [
      { label: 'App', items: [{ name: 'iOS and Android or installable app, accounts, notifications, payment, offline', sub: 'what the user touches; what most quotes describe, and nothing else' }] },
      { label: 'Server and data', items: [{ name: 'API, database, authentication, files, backups, hosting', sub: 'what makes the app still exist in three years' }] },
      { label: 'AI', items: [{ name: 'Model, document retrieval, agents, limits, log, cost per request, human fallback', sub: 'where “we do AI” must become “here is how, at what cost, and what the agent never does”', accent: true }] },
      { label: 'Integration', items: [{ name: 'Accounting, till, ERP, WhatsApp, SMS, CIB/Edahabia payment', sub: 'what connects the product to the real company; often half the work' }] },
      { label: 'Delivery and life', items: [{ name: 'Tests, acceptance, release, stores, supervision, updates, annual cost', sub: 'what distinguishes a product from a prototype; what a serious quote prices' }] },
    ], caption: 'Figure 2 · The middle layer is where claims are easiest and proof rarest. A vendor who can explain, in writing, how their AI agent reads your data, what it never does and what a request costs has built the thing at least once.', alt: 'Five layers: app, server and data, AI, integration, delivery and life' },
    exemple: { title: 'What we put on the table before signing: our proof', items: [
      { value: '2012', label: 'year founded; engineers in Algiers and Sétif; company profile verified on Clutch with address, team and hourly rate' },
      { value: '2 × 5.0', label: 'client reviews verified by Clutch, rated 5.0 out of 5: a booking platform (2026) and an augmented-reality projection system (2025), with budget and dates' },
      { value: '3', label: 'delivered, public platforms you can open today: Hajz, Sadia and TrackSera, each with its case study and its address' },
      { value: '8', label: 'published technical guides describing how we build: offline, authentication, WhatsApp agent, integration, SaaS, delivery', accent: true },
    ], caption: 'Figure 3 · These figures can be checked without us: the Clutch profile is kept by Clutch, the three platforms open in a browser, and the guides are public. What we do not put on this page: the names of clients who have not authorised it, and products still under construction.', alt: 'Four proofs: founded 2012, two Clutch reviews at 5.0, three public platforms, eight technical guides' },
    preuves: { title: 'A buyer’s five questions, and where to verify our answers', columns: ['What we answer', 'Where to check it yourself'], rows: [
      { label: 'A delivered mobile + AI product?', cells: ['Delivered public platforms, including a multi-tenant one for distribution; AI products in progress are shown in a meeting, not displayed', 'Case studies Hajz, Sadia, TrackSera on this site, each with the product’s public address'] },
      { label: 'An app on the stores?', cells: ['Installable apps and direct distribution on company devices; Google Play and App Store publication done in the client’s name, on their developer account', 'The PWA or native guide explains the choice; the stores are checked on the client’s account, not ours'] },
      { label: 'Server and AI architecture?', cells: ['Described in writing, guide by guide: offline, authentication, WhatsApp agent, accounting integration, multi-tenant SaaS, dashboard', 'This site’s 2027 guides, readable without a meeting'] },
      { label: 'An end-to-end demo?', cells: ['A one-hour meeting on a real product, from phone to server, AI included, then a demo every two weeks on your project', 'The delivery guide describes the two-week batch and the acceptance environment you open yourself'] },
      { label: 'Code ownership and post-launch?', cells: ['Code, accounts, domains and hosting in your company’s name from the first delivery; maintenance and evolutions priced per year', 'The clause is in the quote; the guide on keeping an app alive gives what a year costs'] },
      { label: 'An independent review?', cells: ['Two reviews verified by Clutch, rated 5.0, with budget, dates and the client’s role', 'clutch.co/profile/symloop-technology, kept by Clutch, not by us'] },
    ], caption: 'Figure 4 · Ask the same six questions of every vendor you compare, and demand for each a link you open yourself. A vendor who answers “confidential” to all six has delivered nothing visible, or has not asked their clients.', alt: 'Matrix of six buyer questions with the answer and the place to verify' },
    criteres: { title: 'Web agency, freelancer, product company: what each delivers on an app with AI', columns: ['Web agency or freelancer', 'Product engineering company'], rows: [
      { label: 'Mobile app', cells: ['Screens and forms; rarely offline; stores often in the vendor’s name', 'Local database, sync queue, stores in the client’s name, tests on real phones'] },
      { label: 'Server and data', cells: ['Shared hosting, a database with no tested backup, accounts in the vendor’s name', 'API, backups restored in acceptance, hosting and accounts in the client’s name'] },
      { label: 'AI', cells: ['A chatbot wired to an API, with no log, limits or tracked cost', 'Agent with document retrieval, written limits, human fallback, measured cost per request'] },
      { label: 'Integration', cells: ['“Excel export”; accounting and till stay apart', 'API or file connectors, idempotency, daily reconciliation'] },
      { label: 'Delivery', cells: ['One big delivery at the end, acceptance “by looking”, go-live by copying files', 'Batch every two weeks, acceptance environment, automated tests, demonstrated rollback'] },
      { label: 'After launch', cells: ['The vendor moves to the next project; updates negotiated every time', 'Supervision, updates, written annual cost, and the code in your repo if you switch'] },
    ], caption: 'Figure 5 · No column is “the right one” for everything: a showcase site goes to an agency, and that is fine. An app with AI that customers will pay for goes to those who deliver the right-hand column, and the proof is a product you open, not a quote.', alt: 'Matrix comparing web agency or freelancer and product engineering company on six criteria' },
    calendrier: { title: 'From the first question to the contract, in weeks', unit: 'wks', items: [
      { label: 'Three vendors, six questions', note: 'the same six questions sent in writing to all three; answers with links required', from: 0, to: 1 },
      { label: 'Checking the proof', note: 'open every product, read every third-party review, read the architecture; drop those who answer “confidential”', from: 1, to: 2 },
      { label: 'End-to-end demos', note: 'one hour per remaining vendor, on a real product, AI included; your questions prepared', from: 2, to: 3, accent: true },
      { label: 'Specification and quotes', note: 'verifiable requirements, batches, delivery method and code ownership written; three comparable quotes', from: 3, to: 5 },
      { label: 'Contract and first batch', note: 'repository in your name created before the first commit; first batch written; first demo a fortnight later', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks to choose without getting it wrong, only one of them in meetings. Week 1 eliminates more vendors than week 2: those who cannot send a link to a delivered product or to a third-party review do not need to be met.', alt: 'Six-week timeline: six questions, checking, demos, specification and quotes, contract and first batch' },
  },
  ar: {
    cover: { eyebrow: 'اختيار المورّد · الأدلة · تطبيق + ذكاء اصطناعي · 2027', title: ['الكل يقول', 'يصنع ذكاءً اصطناعياً.', 'اطلبوا الأدلة.'], subtitle: 'الأدلة الخمسة التي تُطلب من شركة تطوير في الجزائر قبل أن تُوكل إليها تطبيقاً فيه ذكاء اصطناعي: منتج مسلَّم يُفتح، رأي متحقَّق منه من طرف ثالث، هندسة مشروحة، عرض من البداية إلى النهاية، والكود في مستودعكم. وأين تتحققون من أدلتنا.', left: { label: 'موقع يدّعي', sub: 'قدرات، شعارات، وعود' }, right: { label: 'مورّد يثبت', sub: 'روابط، آراء طرف ثالث، مستودع باسمكم' } },
    parcours: { title: 'التحقق من مورّد في ست لحظات، دون سفر', items: [
      { n: '01', label: 'المنتج الذي يُفتح', sub: 'عنوان عام لمنتج مسلَّم يُفتح على هاتفكم: لا لقطة شاشة، لا نموذج، لا «مشروع سري».' },
      { n: '02', label: 'الرأي المتحقَّق منه من طرف ثالث', sub: 'رأي زبون على منصة تتحقق من هوية الزبون، بالمشروع والميزانية والتواريخ؛ لا شهادة ملصقة على الموقع.', accent: true },
      { n: '03', label: 'الهندسة المشروحة', sub: 'كيف يُبنى التطبيق والخادم والقاعدة والذكاء الاصطناعي، بنص مقروء: دون اتصال، المصادقة، التكامل، البيانات.' },
      { n: '04', label: 'العرض من البداية إلى النهاية', sub: 'اجتماع ترون فيه منتجاً حقيقياً يعمل من الهاتف إلى الخادم، بما فيه الذكاء الاصطناعي، وتطرحون فيه أسئلتكم.' },
      { n: '05', label: 'الكود والحسابات والمستودع', sub: 'العقد يقول إن الكود والحسابات والاستضافة باسم شركتكم، منذ أول تسليم، في مستودعكم.' },
      { n: '06', label: 'منهجية التسليم', sub: 'دفعة تُعرض كل أسبوعين، قبول تجرونه بأنفسكم، تراجع معروض؛ مكتوب في عرض السعر.' },
    ], caption: 'الشكل 1 · اللحظة 02 هي التي لا تستطيع المواقع تلفيقها: رأي على منصة طرف ثالث تتحقق من الزبون، بالميزانية والتواريخ، لا يُكتب ذاتياً. واللحظة 05 هي التي تحمي المستقبل: مورّد يرفض وضع الكود في مستودعكم منذ أول تسليم قد أجاب عن السؤال.', alt: 'ست خطوات: منتج يُفتح، رأي طرف ثالث، الهندسة، العرض، الكود والمستودع، منهجية التسليم' },
    couches: { title: 'ما يتطلبه تطبيق بذكاء اصطناعي فعلاً، في خمس طبقات', layers: [
      { label: 'التطبيق', items: [{ name: 'iOS وAndroid أو تطبيق قابل للتثبيت، حسابات، إشعارات، دفع، عمل دون اتصال', sub: 'ما يلمسه المستعمل؛ ما تصفه أغلب عروض الأسعار ولا شيء غيره' }] },
      { label: 'الخادم والبيانات', items: [{ name: 'API، قاعدة بيانات، مصادقة، ملفات، نسخ احتياطي، استضافة', sub: 'ما يجعل التطبيق موجوداً بعد ثلاث سنوات' }] },
      { label: 'الذكاء الاصطناعي', items: [{ name: 'نموذج، استرجاع وثائق، وكلاء، حدود، سجل، تكلفة لكل طلب، تحويل إلى إنسان', sub: 'حيث يجب أن يصير «نصنع الذكاء الاصطناعي» «هكذا نصنعه، بهذه التكلفة، وهذا ما لا يفعله الوكيل أبداً»', accent: true }] },
      { label: 'التكامل', items: [{ name: 'المحاسبة، الصندوق، ERP، WhatsApp، SMS، الدفع CIB/Edahabia', sub: 'ما يربط المنتج بالشركة الحقيقية؛ غالباً نصف العمل' }] },
      { label: 'التسليم والحياة', items: [{ name: 'اختبارات، قبول، نشر، متاجر التطبيقات، إشراف، تحديثات، تكلفة سنوية', sub: 'ما يميّز منتجاً عن نموذج أولي؛ ما يسعّره عرض سعر جاد' }] },
    ], caption: 'الشكل 2 · الطبقة الوسطى هي حيث الادعاءات أسهل والأدلة أندر. ومورّد يستطيع أن يشرح كتابةً كيف يقرأ وكيله بياناتكم وما لا يفعله أبداً وكم يكلّف الطلب قد بنى الشيء مرة على الأقل.', alt: 'خمس طبقات: التطبيق، الخادم والبيانات، الذكاء الاصطناعي، التكامل، التسليم والحياة' },
    exemple: { title: 'ما نضعه على الطاولة قبل التوقيع: أدلتنا', items: [
      { value: '2012', label: 'سنة التأسيس؛ مهندسون في الجزائر العاصمة وسطيف؛ بطاقة شركة متحقَّق منها على Clutch بالعنوان والفريق والسعر بالساعة' },
      { value: '2 × 5,0', label: 'رأيا زبونين متحقَّق منهما من Clutch بتقييم 5,0 من 5: منصة حجز (2026) ونظام إسقاط بالواقع المعزز (2025)، بالميزانية والتواريخ' },
      { value: '3', label: 'منصات مسلَّمة وعامة تُفتح اليوم: Hajz وSadia وTrackSera، لكل منها دراسة حالتها وعنوانها' },
      { value: '8', label: 'أدلة تقنية منشوراً يصف كيف نبني: دون اتصال، المصادقة، وكيل WhatsApp، التكامل، SaaS، التسليم', accent: true },
    ], caption: 'الشكل 3 · هذه الأرقام تُتحقَّق منها بدوننا: بطاقة Clutch تمسكها Clutch، والمنصات الثلاث تُفتح في متصفح، والأدلة عامة. وما لا نضعه في هذه الصفحة: أسماء الزبائن الذين لم يأذنوا، والمنتجات التي ما زالت قيد البناء.', alt: 'أربعة أدلة: تأسيس 2012، رأيان على Clutch بـ5,0، ثلاث منصات عامة، ثمانية أدلة تقنية' },
    preuves: { title: 'أسئلة المشتري الخمسة، وأين تتحققون من إجاباتنا', columns: ['ما نجيب به', 'أين تتحققون بأنفسكم'], rows: [
      { label: 'منتج هاتف + ذكاء اصطناعي مسلَّم؟', cells: ['منصات عامة مسلَّمة، منها متعددة المستأجرين للتوزيع؛ منتجات الذكاء الاصطناعي الجارية تُعرض في اجتماع لا تُنشر', 'دراسات الحالة Hajz وSadia وTrackSera على هذا الموقع، لكل منها العنوان العام للمنتج'] },
      { label: 'تطبيق على المتاجر؟', cells: ['تطبيقات قابلة للتثبيت وتوزيع مباشر على أجهزة الشركة؛ النشر على Google Play وApp Store يتم باسم الزبون على حسابه كمطوّر', 'دليل PWA أم أصلي يشرح الاختيار؛ المتاجر تُراجَع على حساب الزبون لا حسابنا'] },
      { label: 'هندسة الخادم والذكاء الاصطناعي؟', cells: ['موصوفة كتابةً، دليلاً دليلاً: دون اتصال، المصادقة، وكيل WhatsApp، التكامل المحاسبي، SaaS متعدد المستأجرين، لوحة القيادة', 'أدلة 2027 في هذا الموقع، تُقرأ دون اجتماع'] },
      { label: 'عرض من البداية إلى النهاية؟', cells: ['اجتماع من ساعة على منتج حقيقي، من الهاتف إلى الخادم، بالذكاء الاصطناعي، ثم عرض كل أسبوعين على مشروعكم', 'دليل التسليم يصف دفعة الأسبوعين وبيئة القبول التي تفتحونها بأنفسكم'] },
      { label: 'ملكية الكود وما بعد الإطلاق؟', cells: ['الكود والحسابات والنطاقات والاستضافة باسم شركتكم منذ أول تسليم؛ الصيانة والتطويرات مسعَّرة سنوياً', 'البند في عرض السعر؛ ودليل حياة التطبيق يعطي ما تكلّفه السنة'] },
      { label: 'رأي مستقل؟', cells: ['رأيان متحقَّق منهما من Clutch بتقييم 5,0، بالميزانية والتواريخ ودور الزبون', 'clutch.co/profile/symloop-technology، تمسكه Clutch لا نحن'] },
    ], caption: 'الشكل 4 · اطرحوا الأسئلة الستة نفسها على كل مورّد تقارنونه، واطلبوا لكل منها رابطاً تفتحونه بأنفسكم. والمورّد الذي يجيب «سري» عن الستة لم يسلّم شيئاً يُرى، أو لم يسأل زبائنه.', alt: 'مصفوفة ستة أسئلة للمشتري مع الجواب ومكان التحقق' },
    criteres: { title: 'وكالة ويب، مستقل، شركة منتج: ما يسلّمه كل منهم في تطبيق بذكاء اصطناعي', columns: ['وكالة ويب أو مستقل', 'شركة هندسة منتجات'], rows: [
      { label: 'تطبيق الهاتف', cells: ['شاشات واستمارات؛ نادراً دون اتصال؛ المتاجر غالباً باسم المورّد', 'قاعدة محلية، طابور مزامنة، متاجر باسم الزبون، اختبارات على هواتف حقيقية'] },
      { label: 'الخادم والبيانات', cells: ['استضافة مشتركة، قاعدة بلا نسخ احتياطي مختبَر، حسابات باسم المورّد', 'API، نسخ احتياطي مستعاد في القبول، استضافة وحسابات باسم الزبون'] },
      { label: 'الذكاء الاصطناعي', cells: ['روبوت محادثة موصول بواجهة، بلا سجل ولا حدود ولا تكلفة متابَعة', 'وكيل باسترجاع وثائق، حدود مكتوبة، تحويل إلى إنسان، تكلفة لكل طلب مقاسة'] },
      { label: 'التكامل', cells: ['«تصدير Excel»؛ المحاسبة والصندوق يبقيان منفصلين', 'موصلات API أو ملفات، منع تكرار، مطابقة يومية'] },
      { label: 'التسليم', cells: ['تسليم كبير في النهاية، قبول «بالنظر»، نشر بنسخ الملفات', 'دفعة كل أسبوعين، بيئة قبول، اختبارات آلية، تراجع معروض'] },
      { label: 'بعد الإطلاق', cells: ['ينتقل المورّد إلى المشروع التالي؛ التحديثات تُتفاوَض كل مرة', 'إشراف، تحديثات، تكلفة سنوية مكتوبة، والكود في مستودعكم إن غيّرتم'] },
    ], caption: 'الشكل 5 · لا عمود هو «الصحيح» لكل شيء: موقع عرض يُوكل إلى وكالة وهذا جيد جداً. أما تطبيق بذكاء اصطناعي سيدفع له الزبائن فيُوكل إلى من يسلّم العمود الأيمن، والدليل منتج يُفتح لا عرض سعر.', alt: 'مصفوفة تقارن وكالة ويب أو مستقل وشركة هندسة منتجات على ستة معايير' },
    calendrier: { title: 'من السؤال الأول إلى العقد، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'ثلاثة مورّدين، ستة أسئلة', note: 'الأسئلة الستة نفسها تُرسل كتابةً إلى الثلاثة؛ إجابات بروابط مطلوبة', from: 0, to: 1 },
      { label: 'التحقق من الأدلة', note: 'فتح كل منتج، قراءة كل رأي طرف ثالث، قراءة الهندسة؛ استبعاد من يجيب «سري»', from: 1, to: 2 },
      { label: 'عروض من البداية إلى النهاية', note: 'ساعة لكل مورّد متبقٍ، على منتج حقيقي، بالذكاء الاصطناعي؛ أسئلتكم محضَّرة', from: 2, to: 3, accent: true },
      { label: 'دفتر الشروط وعروض الأسعار', note: 'متطلبات قابلة للتحقق، دفعات، منهجية التسليم وملكية الكود مكتوبة؛ ثلاثة عروض قابلة للمقارنة', from: 3, to: 5 },
      { label: 'العقد والدفعة الأولى', note: 'مستودع باسمكم يُنشأ قبل أول commit؛ الدفعة الأولى مكتوبة؛ أول عرض بعد خمسة عشر يوماً', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع للاختيار دون خطأ، أسبوع واحد منها في اجتماعات. الأسبوع 1 يستبعد مورّدين أكثر من الأسبوع 2: من لا يستطيع إرسال رابط إلى منتج مسلَّم أو إلى رأي طرف ثالث لا داعي للقائه.', alt: 'خط زمني من ستة أسابيع: ستة أسئلة، التحقق، العروض، دفتر الشروط وعروض الأسعار، العقد والدفعة الأولى' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      parcours: { svg: steps({ title: t.parcours.title, steps: t.parcours.items, arrows: true, rtl }), caption: t.parcours.caption, alt: t.parcours.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      exemple: { svg: stats({ title: t.exemple.title, items: t.exemple.items, rtl }), caption: t.exemple.caption, alt: t.exemple.alt },
      preuves: { svg: matrix({ title: t.preuves.title, columns: t.preuves.columns, rows: t.preuves.rows, rtl }), caption: t.preuves.caption, alt: t.preuves.alt },
      criteres: { svg: matrix({ title: t.criteres.title, columns: t.criteres.columns, rows: t.criteres.rows, rtl }), caption: t.criteres.caption, alt: t.criteres.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
