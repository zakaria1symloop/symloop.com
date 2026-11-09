import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { aiCache, STRINGS as AC } from './custom/ai-cache.mjs';
export const slug = 'mettre-de-l-ia-dans-une-application-algerie-2027-cinq-fonctions-recherche-documents-extraction-factures-classification-cout-par-requete';
const T = {
  fr: {
    cover: { eyebrow: 'IA dans l’application · Fonctions · Coût · 2027', title: ['« On met de l’IA. »', 'Laquelle, sur quoi,', 'et à quel prix ?'], subtitle: 'Les six fonctions d’IA qui se vendent dans une application en Algérie, et comment chacune se construit : la requête préparée, le modèle appelé avec un préfixe en cache, la sortie vérifiée contre un schéma et des règles, le repli vers un humain, le jeu d’évaluation qui empêche la régression, et le coût par requête lu chaque semaine', left: { label: 'Un chatbot branché', sub: 'sans limites, sans journal, sans coût' }, right: { label: 'Une fonction IA', sub: 'vérifiée, journalisée, mesurée' } },
    requete: { title: 'La vie d’une requête IA, en six moments', items: [
      { n: '01', label: 'La demande', sub: 'Un texte, un vocal en arabe dialectal, la photo d’une facture : la demande arrive de l’application avec son contexte, son utilisateur et son tenant.' },
      { n: '02', label: 'La préparation', sub: 'Nettoyage, découpage, récupération des seuls documents pertinents, instructions versionnées ; rien d’inutile ne part vers le modèle.' },
      { n: '03', label: 'L’appel au modèle', sub: 'Le modèle choisi pour la fonction, le préfixe commun mis en cache, une limite de tokens ; le même appel rejoué donne le même coût.' },
      { n: '04', label: 'La vérification', sub: 'La sortie est contrainte à un schéma, confrontée aux règles métier et à un score de confiance ; ce qui ne passe pas ne s’affiche pas.', accent: true },
      { n: '05', label: 'L’action ou le repli', sub: 'Dans les limites écrites, l’application agit ou répond ; en dessous du seuil, la demande part à un humain avec le contexte.' },
      { n: '06', label: 'Le journal et la mesure', sub: 'Chaque requête est journalisée avec son coût, sa latence, sa note ; c’est ce qui alimente le jeu d’évaluation et la facture.' },
    ], caption: 'Figure 1 · Le moment 04 est celui qui sépare une fonction IA d’un chatbot : une sortie qui n’est pas contrainte et vérifiée est une sortie qu’on ne peut pas montrer à un client. Le moment 03 est celui qui décide de la facture : un préfixe mis en cache coûte une fraction du même préfixe renvoyé à chaque requête.', alt: 'Six étapes : demande, préparation, appel au modèle, vérification, action ou repli, journal et mesure' },
    couches: { title: 'L’IA dans une application, en cinq couches', layers: [
      { label: 'Application', items: [{ name: 'L’écran, la saisie, l’affichage de la réponse avec sa source et son niveau de confiance', sub: 'l’utilisateur voit d’où vient la réponse et peut la corriger ; la correction nourrit l’évaluation' }] },
      { label: 'Orchestration', items: [{ name: 'Instructions versionnées, récupération de documents, outils, limites, seuils, repli humain', sub: 'la seule couche qui sait ce que l’IA a le droit de faire ; elle est à nous, pas à l’éditeur du modèle', accent: true }] },
      { label: 'Modèles', items: [{ name: 'Généraliste par API, modèle arabe pour le dialecte et la voix, modèle de lecture de documents', sub: 'interchangeables derrière l’orchestration ; choisis par fonction, par langue, par coût et par lieu d’hébergement' }] },
      { label: 'Données', items: [{ name: 'Documents découpés et indexés, journal des requêtes et réponses, jeu d’évaluation', sub: 'ce qui fait la qualité ; le modèle ne connaît pas votre entreprise, vos documents si' }] },
      { label: 'Exploitation', items: [{ name: 'Coût par requête, latence, qualité mesurée sur le jeu d’évaluation, alertes de dérive', sub: 'un écran lu chaque semaine : combien, à quel prix, avec quelle qualité, et quelle part passée à l’humain' }] },
    ], caption: 'Figure 2 · La couche du milieu est ce qu’on construit vraiment : les modèles changent de nom et de prix tous les six mois, l’écran change avec le métier, mais les instructions, les limites, le repli et le jeu d’évaluation restent. Un prestataire qui appelle l’API d’un éditeur depuis l’écran a branché un chatbot, pas construit une fonction.', alt: 'Cinq couches : application, orchestration, modèles, données, exploitation' },
    exemple: { title: 'Un portail de distribution avec trois fonctions IA, un mois : l’exemple', items: [
      { value: '2 000', label: 'requêtes IA par jour : recherche dans le catalogue et les fiches, lecture des bons de commande photographiés, tri des messages des détaillants ; hypothèse' },
      { value: '60', label: 'cas réels dans le jeu d’évaluation, écrits avec le gérant la première semaine, rejoués à chaque changement d’instruction ou de modèle' },
      { value: '÷ 10', label: 'sur le coût d’entrée des requêtes dont le préfixe est en cache, selon les grilles publiques des éditeurs ; à vérifier sur votre facture' },
      { value: '100 %', label: 'des requêtes journalisées avec coût, latence, note et source ; zéro réponse affichée sans passer par le schéma et les règles', accent: true },
    ], caption: 'Figure 3 · Les volumes et le facteur de cache sont des hypothèses à vérifier sur votre facture ; le jeu d’évaluation et le journal complet ne le sont pas. Sans jeu d’évaluation, chaque changement d’instruction est un pari ; sans journal, le coût se découvre à la fin du mois.', alt: 'Quatre chiffres : 2 000 requêtes par jour, 60 cas d’évaluation, coût d’entrée divisé par dix en cache, 100 % journalisé' },
    fonctions: { title: 'Six fonctions IA qui se vendent, et comment chacune se construit', columns: ['Ce que l’utilisateur obtient', 'Comment c’est construit'], rows: [
      { label: 'Recherche dans les documents', cells: ['Une réponse en arabe ou en français avec la source : fiche produit, procédure, contrat', 'Documents découpés et indexés, récupération des passages, réponse contrainte à citer ; « je ne sais pas » quand rien n’est trouvé'] },
      { label: 'Lecture de factures et de pièces', cells: ['Une photo de facture, de bon de commande ou de pièce d’identité devient des champs remplis', 'Modèle de lecture puis schéma strict, règles de cohérence (totaux, dates), score par champ, validation humaine sous le seuil'] },
      { label: 'Tri des messages', cells: ['Chaque message WhatsApp ou e-mail classé : commande, réclamation, question, urgence', 'Catégories fermées, exemples étiquetés, seuil de confiance, file humaine pour l’incertain ; mesuré sur le jeu d’évaluation'] },
      { label: 'Recommandation', cells: ['Le produit à proposer, le client à rappeler, la prochaine action', 'Règles métier d’abord, modèle ensuite ; jamais une action automatique sur un compte ou un paiement'] },
      { label: 'Génération', cells: ['Un devis, une réponse, un résumé de dossier rédigé en quelques secondes', 'Modèle alimenté par les données de l’entreprise, relecture obligatoire avant envoi, gabarits versionnés'] },
      { label: 'Transcription vocale', cells: ['Un vocal en arabe dialectal transformé en texte exploitable', 'Modèle de reconnaissance arabe multidialectal, mots en français conservés, texte ensuite traité comme une demande écrite'] },
    ], caption: 'Figure 4 · Aucune de ces fonctions n’est « un chatbot » : chacune a une entrée précise, une sortie contrainte et un seuil sous lequel un humain reprend. Les deux premières lignes sont celles qui paient le plus vite dans les entreprises algériennes, parce qu’elles remplacent de la ressaisie.', alt: 'Matrice de six fonctions IA : recherche documentaire, lecture de pièces, tri, recommandation, génération, transcription' },
    pieges: { title: 'Six échecs de l’IA dans une application, et ce que l’architecture fait', columns: ['Ce qui se passe', 'Ce que l’architecture fait'], rows: [
      { label: 'L’IA qui invente', cells: ['Le modèle répond avec assurance une chose fausse ; un client la lit', 'Réponse contrainte à citer une source retrouvée, schéma de sortie, règles métier, « je ne sais pas » autorisé, repli humain'] },
      { label: 'La facture qui explose', cells: ['Chaque requête renvoie tout le contexte ; la facture triple en un mois', 'Préfixe commun en cache, documents récupérés plutôt que tout envoyé, limite de tokens, modèle plus petit là où la qualité tient'] },
      { label: 'L’arabe dialectal mal compris', cells: ['Le vocal du détaillant devient un texte sans sens', 'Modèle de reconnaissance arabe multidialectal, test sur de vrais vocaux de vos clients, repli sur un humain sous le seuil'] },
      { label: 'Les données envoyées n’importe où', cells: ['Factures et pièces des clients partent vers un éditeur sans contrat ni lieu connu', 'Lieu d’hébergement du modèle décidé par fonction, contrat et clés au nom de l’entreprise, données minimales envoyées, journal'] },
      { label: 'Pas de jeu d’évaluation', cells: ['Un changement d’instruction améliore un cas et en casse dix, sans que personne le voie', 'Soixante cas réels rejoués à chaque changement ; la livraison est refusée si la note baisse'] },
      { label: 'L’IA sans repli', cells: ['Le client est bloqué dans une boucle ; personne ne reprend', 'Seuil de confiance, bouton « parler à quelqu’un », transfert avec le contexte, délai de reprise mesuré'] },
    ], caption: 'Figure 5 · Les trois premiers échecs se voient tout de suite, les trois derniers trois mois plus tard. Tous se traitent dans la couche d’orchestration et dans le jeu d’évaluation, pas en changeant de modèle.', alt: 'Matrice de six échecs : invention, facture, dialecte, données, évaluation, repli' },
    calendrier: { title: 'Mettre de l’IA dans une application en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Fonctions et limites', note: 'les deux ou trois fonctions retenues, ce que l’IA fait, ce qu’elle ne fait jamais, le seuil de repli ; écrits et signés', from: 0, to: 1 },
      { label: 'Jeu d’évaluation', note: 'soixante cas réels avec la bonne réponse attendue, écrits avec le gérant ; c’est la recette de toute la suite', from: 1, to: 2 },
      { label: 'Orchestration et première fonction', note: 'instructions versionnées, récupération, schéma, règles, repli, journal ; la fonction qui remplace le plus de ressaisie', from: 2, to: 5, accent: true },
      { label: 'Deuxième et troisième fonctions', note: 'même couche, nouveaux schémas et nouveaux cas d’évaluation ; modèle choisi par fonction et par langue', from: 5, to: 7 },
      { label: 'Pilote avec repli humain', note: 'vrais utilisateurs, part passée à l’humain mesurée, coût par requête et latence lus chaque jour', from: 7, to: 9 },
      { label: 'Réglage et coût', note: 'cache du préfixe, documents mieux découpés, modèle plus petit où la note tient ; même qualité, facture divisée', from: 9, to: 11 },
      { label: 'Supervision et bilan', note: 'écran hebdomadaire : volume, coût, qualité, dérive ; décision sur la fonction suivante', from: 11, to: 12 },
    ], caption: 'Figure 6 · Douze semaines, et la semaine 1 ne produit pas une ligne de code : le jeu d’évaluation écrit avec le gérant est ce qui rend tout le reste vérifiable. Les semaines 9 à 11 sont celles où la facture baisse sans que la qualité bouge, parce que la note est mesurée avant et après chaque réglage.', alt: 'Frise de douze semaines : fonctions et limites, jeu d’évaluation, orchestration, fonctions suivantes, pilote, réglage, supervision' },
  },
  en: {
    cover: { eyebrow: 'AI in the app · Functions · Cost · 2027', title: ['“We add AI.”', 'Which one, on what,', 'and at what price?'], subtitle: 'The six AI functions that sell inside an app in Algeria, and how each is built: the prepared request, the model called with a cached prefix, the output checked against a schema and rules, the fallback to a human, the evaluation set that prevents regression, and the cost per request read every week', left: { label: 'A wired chatbot', sub: 'no limits, no log, no tracked cost' }, right: { label: 'An AI function', sub: 'checked, logged, measured' } },
    requete: { title: 'The life of an AI request, in six moments', items: [
      { n: '01', label: 'The request', sub: 'A text, a voice note in dialectal Arabic, a photo of an invoice: the request arrives from the app with its context, its user and its tenant.' },
      { n: '02', label: 'Preparation', sub: 'Cleaning, chunking, retrieval of only the relevant documents, versioned instructions; nothing useless goes to the model.' },
      { n: '03', label: 'The model call', sub: 'The model chosen for the function, the shared prefix cached, a token limit; the same call replayed costs the same.' },
      { n: '04', label: 'Verification', sub: 'The output is constrained to a schema, checked against business rules and a confidence score; what fails is not displayed.', accent: true },
      { n: '05', label: 'Action or fallback', sub: 'Within the written limits, the app acts or answers; below the threshold, the request goes to a human with the context.' },
      { n: '06', label: 'Log and metering', sub: 'Every request is logged with its cost, latency and score; this feeds the evaluation set and the invoice.' },
    ], caption: 'Figure 1 · Moment 04 separates an AI function from a chatbot: an output that is not constrained and checked is an output you cannot show a customer. Moment 03 decides the bill: a cached prefix costs a fraction of the same prefix resent on every request.', alt: 'Six steps: request, preparation, model call, verification, action or fallback, log and metering' },
    couches: { title: 'AI in an app, in five layers', layers: [
      { label: 'Application', items: [{ name: 'The screen, the input, the answer displayed with its source and confidence level', sub: 'the user sees where the answer comes from and can correct it; the correction feeds evaluation' }] },
      { label: 'Orchestration', items: [{ name: 'Versioned instructions, document retrieval, tools, limits, thresholds, human fallback', sub: 'the only layer that knows what the AI is allowed to do; it is ours, not the model vendor’s', accent: true }] },
      { label: 'Models', items: [{ name: 'General model by API, Arabic model for dialect and voice, document-reading model', sub: 'interchangeable behind the orchestration; chosen per function, language, cost and hosting location' }] },
      { label: 'Data', items: [{ name: 'Chunked and indexed documents, log of requests and answers, evaluation set', sub: 'what makes quality; the model does not know your company, your documents do' }] },
      { label: 'Operations', items: [{ name: 'Cost per request, latency, quality measured on the evaluation set, drift alerts', sub: 'a screen read every week: how many, at what price, with what quality, and what share went to a human' }] },
    ], caption: 'Figure 2 · The middle layer is what is really built: models change name and price every six months, the screen changes with the business, but the instructions, limits, fallback and evaluation set stay. A vendor who calls a model vendor’s API from the screen has wired a chatbot, not built a function.', alt: 'Five layers: application, orchestration, models, data, operations' },
    exemple: { title: 'A distribution portal with three AI functions, one month: the example', items: [
      { value: '2,000', label: 'AI requests a day: search in the catalogue and product sheets, reading of photographed purchase orders, sorting of retailers’ messages; an assumption' },
      { value: '60', label: 'real cases in the evaluation set, written with the manager in the first week, replayed at every change of instruction or model' },
      { value: '÷ 10', label: 'on the input cost of requests whose prefix is cached, according to the vendors’ public price lists; to be checked on your invoice' },
      { value: '100 %', label: 'of requests logged with cost, latency, score and source; zero answer displayed without passing the schema and the rules', accent: true },
    ], caption: 'Figure 3 · Volumes and the cache factor are assumptions to check on your invoice; the evaluation set and the full log are not. Without an evaluation set, every instruction change is a bet; without a log, the cost is discovered at month end.', alt: 'Four figures: 2,000 requests a day, 60 evaluation cases, input cost divided by ten with cache, 100 % logged' },
    fonctions: { title: 'Six AI functions that sell, and how each is built', columns: ['What the user gets', 'How it is built'], rows: [
      { label: 'Search in documents', cells: ['An answer in Arabic or French with its source: product sheet, procedure, contract', 'Documents chunked and indexed, passages retrieved, answer constrained to cite; “I don’t know” when nothing is found'] },
      { label: 'Reading invoices and documents', cells: ['A photo of an invoice, purchase order or ID becomes filled fields', 'Reading model then strict schema, consistency rules (totals, dates), score per field, human validation below the threshold'] },
      { label: 'Sorting messages', cells: ['Every WhatsApp or email message classified: order, complaint, question, urgent', 'Closed categories, labelled examples, confidence threshold, human queue for the uncertain; measured on the evaluation set'] },
      { label: 'Recommendation', cells: ['The product to offer, the customer to call back, the next action', 'Business rules first, model second; never an automatic action on an account or a payment'] },
      { label: 'Generation', cells: ['A quote, an answer, a file summary drafted in seconds', 'Model fed with the company’s data, mandatory review before sending, versioned templates'] },
      { label: 'Voice transcription', cells: ['A voice note in dialectal Arabic turned into usable text', 'Multi-dialect Arabic recognition model, French words kept, text then handled as a written request'] },
    ], caption: 'Figure 4 · None of these functions is “a chatbot”: each has a precise input, a constrained output and a threshold below which a human takes over. The first two rows are the ones that pay back fastest in Algerian companies, because they replace re-entry.', alt: 'Matrix of six AI functions: document search, document reading, sorting, recommendation, generation, transcription' },
    pieges: { title: 'Six AI failures inside an app, and what the architecture does', columns: ['What happens', 'What the architecture does'], rows: [
      { label: 'The AI that makes things up', cells: ['The model confidently answers something false; a customer reads it', 'Answer constrained to cite a retrieved source, output schema, business rules, “I don’t know” allowed, human fallback'] },
      { label: 'The exploding bill', cells: ['Every request resends the whole context; the bill triples in a month', 'Shared prefix cached, documents retrieved rather than all sent, token limit, smaller model where quality holds'] },
      { label: 'Dialectal Arabic misunderstood', cells: ['The retailer’s voice note becomes meaningless text', 'Multi-dialect Arabic recognition model, test on real voice notes from your customers, human fallback below the threshold'] },
      { label: 'Data sent anywhere', cells: ['Customers’ invoices and IDs go to a vendor with no contract and no known location', 'Model hosting location decided per function, contract and keys in the company’s name, minimal data sent, log'] },
      { label: 'No evaluation set', cells: ['An instruction change improves one case and breaks ten, unseen', 'Sixty real cases replayed at every change; the release is refused if the score drops'] },
      { label: 'AI with no fallback', cells: ['The customer is stuck in a loop; nobody takes over', 'Confidence threshold, “talk to someone” button, handover with context, measured takeover time'] },
    ], caption: 'Figure 5 · The first three failures show immediately, the last three show three months later. All are handled in the orchestration layer and the evaluation set, not by switching model.', alt: 'Matrix of six failures: invention, bill, dialect, data, evaluation, fallback' },
    calendrier: { title: 'Putting AI in an app in 2027, in weeks', unit: 'wks', items: [
      { label: 'Functions and limits', note: 'the two or three functions chosen, what the AI does, what it never does, the fallback threshold; written and signed', from: 0, to: 1 },
      { label: 'Evaluation set', note: 'sixty real cases with the expected right answer, written with the manager; the acceptance test for everything after', from: 1, to: 2 },
      { label: 'Orchestration and first function', note: 'versioned instructions, retrieval, schema, rules, fallback, log; the function that replaces the most re-entry', from: 2, to: 5, accent: true },
      { label: 'Second and third functions', note: 'same layer, new schemas and new evaluation cases; model chosen per function and per language', from: 5, to: 7 },
      { label: 'Pilot with human fallback', note: 'real users, share handed to a human measured, cost per request and latency read every day', from: 7, to: 9 },
      { label: 'Tuning and cost', note: 'prefix cache, better chunked documents, smaller model where the score holds; same quality, bill divided', from: 9, to: 11 },
      { label: 'Supervision and review', note: 'weekly screen: volume, cost, quality, drift; decision on the next function', from: 11, to: 12 },
    ], caption: 'Figure 6 · Twelve weeks, and week 1 produces no code: the evaluation set written with the manager is what makes everything else verifiable. Weeks 9 to 11 are when the bill goes down without quality moving, because the score is measured before and after every tuning.', alt: 'Twelve-week timeline: functions and limits, evaluation set, orchestration, next functions, pilot, tuning, supervision' },
  },
  ar: {
    cover: { eyebrow: 'الذكاء الاصطناعي في التطبيق · الوظائف · التكلفة · 2027', title: ['«نضيف ذكاءً اصطناعياً.»', 'أيّه، وعلى ماذا،', 'وبأي ثمن؟'], subtitle: 'الوظائف الست للذكاء الاصطناعي التي تُباع داخل تطبيق في الجزائر، وكيف تُبنى كل منها: الطلب المحضَّر، النموذج المستدعى ببادئة مخزَّنة، المخرج المتحقَّق منه مقابل مخطط وقواعد، التحويل إلى إنسان، مجموعة التقييم التي تمنع التراجع، وتكلفة كل طلب تُقرأ كل أسبوع', left: { label: 'روبوت محادثة موصول', sub: 'بلا حدود ولا سجل ولا تكلفة متابَعة' }, right: { label: 'وظيفة ذكاء اصطناعي', sub: 'متحقَّق منها، مسجَّلة، مقاسة' } },
    requete: { title: 'حياة طلب ذكاء اصطناعي، في ست لحظات', items: [
      { n: '01', label: 'الطلب', sub: 'نص، رسالة صوتية بالعربية الدارجة، صورة فاتورة: يصل الطلب من التطبيق بسياقه ومستعمله ومستأجره.' },
      { n: '02', label: 'التحضير', sub: 'تنظيف، تقطيع، استرجاع الوثائق ذات الصلة فقط، تعليمات مُصدَرة؛ لا شيء زائد يذهب إلى النموذج.' },
      { n: '03', label: 'استدعاء النموذج', sub: 'النموذج المختار للوظيفة، البادئة المشتركة مخزَّنة، حد للرموز؛ الاستدعاء نفسه المُعاد يكلّف الشيء نفسه.' },
      { n: '04', label: 'التحقق', sub: 'يُقيَّد المخرج بمخطط، ويُقابَل بقواعد العمل ودرجة ثقة؛ وما لا يمرّ لا يُعرض.', accent: true },
      { n: '05', label: 'الفعل أو التحويل', sub: 'ضمن الحدود المكتوبة يفعل التطبيق أو يجيب؛ وتحت العتبة يذهب الطلب إلى إنسان مع السياق.' },
      { n: '06', label: 'السجل والقياس', sub: 'كل طلب يُسجَّل بتكلفته وكمونه ودرجته؛ وهذا ما يغذّي مجموعة التقييم والفاتورة.' },
    ], caption: 'الشكل 1 · اللحظة 04 هي ما يفصل وظيفة الذكاء الاصطناعي عن روبوت المحادثة: مخرج غير مقيَّد ولا متحقَّق منه مخرجٌ لا يمكن عرضه على زبون. واللحظة 03 هي التي تقرر الفاتورة: بادئة مخزَّنة تكلّف جزءاً من البادئة نفسها المُعاد إرسالها مع كل طلب.', alt: 'ست خطوات: الطلب، التحضير، استدعاء النموذج، التحقق، الفعل أو التحويل، السجل والقياس' },
    couches: { title: 'الذكاء الاصطناعي في التطبيق، في خمس طبقات', layers: [
      { label: 'التطبيق', items: [{ name: 'الشاشة، الإدخال، عرض الجواب بمصدره ومستوى ثقته', sub: 'يرى المستعمل من أين جاء الجواب ويستطيع تصحيحه؛ والتصحيح يغذّي التقييم' }] },
      { label: 'التنسيق', items: [{ name: 'تعليمات مُصدَرة، استرجاع وثائق، أدوات، حدود، عتبات، تحويل إلى إنسان', sub: 'الطبقة الوحيدة التي تعرف ما يحق للذكاء الاصطناعي فعله؛ وهي لنا لا لناشر النموذج', accent: true }] },
      { label: 'النماذج', items: [{ name: 'نموذج عام عبر API، نموذج عربي للدارجة والصوت، نموذج قراءة الوثائق', sub: 'قابلة للتبديل خلف التنسيق؛ تُختار حسب الوظيفة واللغة والتكلفة ومكان الاستضافة' }] },
      { label: 'البيانات', items: [{ name: 'وثائق مقطَّعة ومفهرسة، سجل الطلبات والأجوبة، مجموعة التقييم', sub: 'ما يصنع الجودة؛ النموذج لا يعرف شركتكم، أما وثائقكم فتعرفها' }] },
      { label: 'التشغيل', items: [{ name: 'تكلفة كل طلب، الكمون، الجودة المقاسة على مجموعة التقييم، تنبيهات الانحراف', sub: 'شاشة تُقرأ كل أسبوع: كم، بأي سعر، بأي جودة، وأي حصة ذهبت إلى إنسان' }] },
    ], caption: 'الشكل 2 · الطبقة الوسطى هي ما يُبنى فعلاً: النماذج تغيّر أسماءها وأسعارها كل ستة أشهر، والشاشة تتغير مع المهنة، لكن التعليمات والحدود والتحويل ومجموعة التقييم تبقى. ومورّد يستدعي واجهة ناشر من الشاشة وصل روبوت محادثة ولم يبنِ وظيفة.', alt: 'خمس طبقات: التطبيق، التنسيق، النماذج، البيانات، التشغيل' },
    exemple: { title: 'بوابة توزيع بثلاث وظائف ذكاء اصطناعي، شهر واحد: المثال', items: [
      { value: '2 000', label: 'طلب ذكاء اصطناعي يومياً: بحث في الكتالوج والبطاقات، قراءة طلبيات مصوَّرة، فرز رسائل التجار؛ فرضية' },
      { value: '60', label: 'حالة حقيقية في مجموعة التقييم، كُتبت مع المسيّر في الأسبوع الأول، تُعاد مع كل تغيير في التعليمات أو النموذج' },
      { value: '÷ 10', label: 'على تكلفة الإدخال للطلبات التي بادئتها مخزَّنة، وفق جداول الناشرين العلنية؛ يُتحقَّق منه على فاتورتكم' },
      { value: '100 %', label: 'من الطلبات مسجَّلة بالتكلفة والكمون والدرجة والمصدر؛ صفر جواب يُعرض دون المرور بالمخطط والقواعد', accent: true },
    ], caption: 'الشكل 3 · الأحجام وعامل التخزين فرضيات تُتحقَّق منها على فاتورتكم؛ أما مجموعة التقييم والسجل الكامل فلا. بلا مجموعة تقييم يكون كل تغيير في التعليمات رهاناً؛ وبلا سجل تُكتشف التكلفة في آخر الشهر.', alt: 'أربعة أرقام: 2 000 طلب يومياً، 60 حالة تقييم، تكلفة إدخال مقسومة على عشرة بالتخزين، 100 % مسجَّل' },
    fonctions: { title: 'ست وظائف ذكاء اصطناعي تُباع، وكيف تُبنى كل منها', columns: ['ما يحصل عليه المستعمل', 'كيف تُبنى'], rows: [
      { label: 'البحث في الوثائق', cells: ['جواب بالعربية أو الفرنسية بمصدره: بطاقة منتج، إجراء، عقد', 'وثائق مقطَّعة ومفهرسة، استرجاع المقاطع، جواب مقيَّد بالاستشهاد؛ «لا أعرف» حين لا يوجد شيء'] },
      { label: 'قراءة الفواتير والوثائق', cells: ['صورة فاتورة أو طلبية أو بطاقة هوية تصير حقولاً معبَّأة', 'نموذج قراءة ثم مخطط صارم، قواعد اتساق (المجاميع، التواريخ)، درجة لكل حقل، تحقق بشري تحت العتبة'] },
      { label: 'فرز الرسائل', cells: ['كل رسالة WhatsApp أو بريد مصنَّفة: طلبية، شكوى، سؤال، عاجل', 'فئات مغلقة، أمثلة موسومة، عتبة ثقة، طابور بشري لغير المؤكد؛ مقاس على مجموعة التقييم'] },
      { label: 'التوصية', cells: ['المنتج الذي يُقترح، الزبون الذي يُتصل به، الخطوة التالية', 'قواعد العمل أولاً ثم النموذج؛ لا فعل آلي أبداً على حساب أو دفع'] },
      { label: 'التوليد', cells: ['عرض سعر، جواب، ملخص ملف يُصاغ في ثوانٍ', 'نموذج مغذّى ببيانات الشركة، مراجعة إلزامية قبل الإرسال، قوالب مُصدَرة'] },
      { label: 'تفريغ الصوت', cells: ['رسالة صوتية بالعربية الدارجة تصير نصاً قابلاً للاستعمال', 'نموذج تعرف عربي متعدد اللهجات، الكلمات الفرنسية محفوظة، ثم يُعامَل النص كطلب مكتوب'] },
    ], caption: 'الشكل 4 · لا وظيفة من هذه «روبوت محادثة»: لكل منها مدخل دقيق ومخرج مقيَّد وعتبة يتولى تحتها إنسان. والسطران الأولان هما الأسرع عائداً في الشركات الجزائرية لأنهما يحلان محل إعادة الإدخال.', alt: 'مصفوفة ست وظائف: البحث في الوثائق، قراءة الوثائق، الفرز، التوصية، التوليد، التفريغ' },
    pieges: { title: 'ستة إخفاقات للذكاء الاصطناعي داخل تطبيق، وما تفعله الهندسة', columns: ['ما يحدث', 'ما تفعله الهندسة'], rows: [
      { label: 'الذكاء الاصطناعي الذي يخترع', cells: ['يجيب النموذج بثقة شيئاً خاطئاً؛ ويقرؤه زبون', 'جواب مقيَّد بالاستشهاد بمصدر مسترجَع، مخطط مخرج، قواعد عمل، «لا أعرف» مسموح، تحويل إلى إنسان'] },
      { label: 'الفاتورة المنفجرة', cells: ['كل طلب يعيد إرسال السياق كله؛ تتضاعف الفاتورة ثلاثاً في شهر', 'بادئة مشتركة مخزَّنة، وثائق مسترجَعة بدل إرسال الكل، حد للرموز، نموذج أصغر حيث تصمد الجودة'] },
      { label: 'الدارجة المفهومة خطأ', cells: ['صوتية التاجر تصير نصاً بلا معنى', 'نموذج تعرف عربي متعدد اللهجات، اختبار على صوتيات حقيقية من زبائنكم، تحويل إلى إنسان تحت العتبة'] },
      { label: 'البيانات المرسلة إلى أي مكان', cells: ['فواتير الزبائن وهوياتهم تذهب إلى ناشر بلا عقد ولا مكان معروف', 'مكان استضافة النموذج يُقرَّر لكل وظيفة، عقد ومفاتيح باسم الشركة، أقل بيانات تُرسل، سجل'] },
      { label: 'لا مجموعة تقييم', cells: ['تغيير تعليمة يحسّن حالة ويكسر عشراً دون أن يرى أحد', 'ستون حالة حقيقية تُعاد مع كل تغيير؛ يُرفض التسليم إن انخفضت الدرجة'] },
      { label: 'ذكاء اصطناعي بلا تحويل', cells: ['الزبون عالق في حلقة؛ ولا أحد يتولى', 'عتبة ثقة، زر «تحدث إلى شخص»، تحويل مع السياق، وقت تولٍّ مقاس'] },
    ], caption: 'الشكل 5 · الإخفاقات الثلاثة الأولى تظهر فوراً، والثلاثة الأخيرة بعد ثلاثة أشهر. وكلها تُعالَج في طبقة التنسيق ومجموعة التقييم لا بتغيير النموذج.', alt: 'مصفوفة ستة إخفاقات: الاختراع، الفاتورة، اللهجة، البيانات، التقييم، التحويل' },
    calendrier: { title: 'إدخال الذكاء الاصطناعي في تطبيق سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الوظائف والحدود', note: 'الوظيفتان أو الثلاث المختارة، ما يفعله الذكاء الاصطناعي، ما لا يفعله أبداً، عتبة التحويل؛ مكتوبة وموقَّعة', from: 0, to: 1 },
      { label: 'مجموعة التقييم', note: 'ستون حالة حقيقية بالجواب الصحيح المنتظر، تُكتب مع المسيّر؛ وهي اختبار قبول كل ما يلي', from: 1, to: 2 },
      { label: 'التنسيق والوظيفة الأولى', note: 'تعليمات مُصدَرة، استرجاع، مخطط، قواعد، تحويل، سجل؛ الوظيفة التي تحل محل أكثر إعادة إدخال', from: 2, to: 5, accent: true },
      { label: 'الوظيفتان الثانية والثالثة', note: 'الطبقة نفسها، مخططات جديدة وحالات تقييم جديدة؛ نموذج يُختار لكل وظيفة ولكل لغة', from: 5, to: 7 },
      { label: 'التجريب مع تحويل بشري', note: 'مستعملون حقيقيون، الحصة المحوَّلة إلى إنسان مقاسة، تكلفة كل طلب والكمون يُقرآن كل يوم', from: 7, to: 9 },
      { label: 'الضبط والتكلفة', note: 'تخزين البادئة، وثائق مقطَّعة أفضل، نموذج أصغر حيث تصمد الدرجة؛ الجودة نفسها والفاتورة مقسومة', from: 9, to: 11 },
      { label: 'الإشراف والحصيلة', note: 'شاشة أسبوعية: الحجم، التكلفة، الجودة، الانحراف؛ قرار بشأن الوظيفة التالية', from: 11, to: 12 },
    ], caption: 'الشكل 6 · اثنا عشر أسبوعاً، والأسبوع 1 لا ينتج سطر كود: مجموعة التقييم المكتوبة مع المسيّر هي ما يجعل كل الباقي قابلاً للتحقق. والأسابيع 9 إلى 11 هي التي تنخفض فيها الفاتورة دون أن تتحرك الجودة، لأن الدرجة تُقاس قبل كل ضبط وبعده.', alt: 'خط زمني من اثني عشر أسبوعاً: الوظائف والحدود، مجموعة التقييم، التنسيق، الوظائف التالية، التجريب، الضبط، الإشراف' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      requete: { svg: steps({ title: t.requete.title, steps: t.requete.items, arrows: true, rtl }), caption: t.requete.caption, alt: t.requete.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      exemple: { svg: aiCache(AC[locale] || AC.fr, rtl), caption: t.exemple.caption, alt: (AC[locale] || AC.fr).alt },
      fonctions: { svg: matrix({ title: t.fonctions.title, columns: t.fonctions.columns, rows: t.fonctions.rows, rtl }), caption: t.fonctions.caption, alt: t.fonctions.alt },
      pieges: { svg: matrix({ title: t.pieges.title, columns: t.pieges.columns, rows: t.pieges.rows, rtl }), caption: t.pieges.caption, alt: t.pieges.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 12, tick: 2, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
