import { cover, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { actions, toolcard, STRINGS as EA } from './custom/erp-agent.mjs';
export const slug = 'agent-ia-back-office-erp-algerie-2027-outils-lecture-ecriture-plafonds-approbation-idempotence-journal-ce-que-l-agent-a-le-droit-de-faire';
const T = {
  fr: {
    cover: { eyebrow: 'Agent IA · Back-office · ERP · Outils · 2027', title: ['« L’IA peut créer', 'un avoir ? » Oui,', 'sous conditions'], subtitle: 'Comment un agent IA agit dans votre back-office et votre ERP sans rien casser : des outils définis un par un, la lecture avant l’écriture, des plafonds, une approbation sur le téléphone de celui qui peut dire oui, une clé qui empêche de faire deux fois, un aperçu avant d’écrire, et une ligne de journal pour chaque appel', left: { label: 'Un accès total à la base', sub: 'l’agent fait ce qu’il comprend' }, right: { label: 'Des outils sous contrôle', sub: 'il propose ; le serveur dispose' } },
    actions: { caption: 'Figure 1 · L’agent ne voit jamais la base : il voit quatre outils, et chacun passe par la même porte avant de toucher l’ERP. La lecture passe seule ; l’écriture sous plafond passe avec une clé qui empêche le doublon ; l’écriture au-dessus du plafond devient une demande d’approbation ; l’outil que le rôle n’a pas n’existe pas pour lui, et la tentative est écrite.' },
    couches: { title: 'Un agent dans le back-office, en cinq couches', layers: [
      { label: 'Canal', items: [{ name: 'Le gérant écrit à l’agent depuis WhatsApp, le back-office ou un bouton dans l’écran', sub: 'la demande arrive avec le nom et le rôle de celui qui la fait ; l’agent n’a jamais plus de droits que lui' }] },
      { label: 'Agent', items: [{ name: 'Le modèle lit la demande, choisit les outils, propose les paramètres, explique ce qu’il va faire', sub: 'il propose, il n’exécute pas ; ses instructions et ses limites sont versionnées dans votre dépôt' }] },
      { label: 'Outils et porte', items: [{ name: 'Une fiche par outil, lecture ou écriture, schéma strict ; la porte vérifie rôle, paramètres, plafond, idempotence, puis journalise', sub: 'la couche qui vous appartient et qui ne dépend d’aucun éditeur ; c’est elle qui dit non', accent: true }] },
      { label: 'ERP et données', items: [{ name: 'Votre logiciel de gestion ou votre comptabilité, appelés par leur API ou leur connecteur, jamais par la base en direct', sub: 'les mêmes règles métier que pour un humain : stock, crédit, prix, numérotation' }] },
      { label: 'Supervision', items: [{ name: 'Le journal des appels, les approbations en attente, les refus, le coût par tâche, le jeu d’évaluation rejoué', sub: 'un écran lu chaque semaine : ce que l’agent a fait, ce qu’on lui a refusé, ce qu’il a coûté' }] },
    ], caption: 'Figure 2 · La couche du milieu est celle qui fait la différence entre un agent qu’on peut brancher sur sa comptabilité et un agent qu’on n’ose pas : le modèle ne touche jamais l’ERP, il appelle des outils que vous avez écrits, et la porte applique vos règles quoi qu’il envoie.', alt: 'Cinq couches : canal, agent, outils et porte (accentuée), ERP et données, supervision.' },
    toolcard: { caption: 'Figure 3 · La fiche de gauche est tout ce que le modèle sait de l’outil ; la liste de droite s’exécute quoi qu’il envoie. Les éditeurs eux-mêmes préviennent qu’un modèle peut deviner un paramètre manquant : c’est la raison du troisième contrôle, le montant doit exister dans la facture, et du cinquième, l’aperçu avant d’écrire.' },
    demandes: { title: 'Six demandes d’un gérant, et les outils qu’elles deviennent', columns: ['Ce que le gérant dit à l’agent', 'Outils, plafonds, approbation'], rows: [
      { label: 'Relancer les retards', cells: ['« Relance tous ceux qui me doivent de l’argent depuis plus d’un mois »', 'lecture des soldes ; envoi par gabarit approuvé, plafond quotidien, jamais de texte libre ; liste des envoyés en retour'] },
      { label: 'Créer un avoir', cells: ['« Fais l’avoir pour le retour du client Baraka »', 'écriture sous plafond ; montant pris dans la facture, jamais saisi ; au-dessus du plafond, aperçu et approbation'] },
      { label: 'Passer une commande fournisseur', cells: ['« Recommande ce qui va manquer la semaine prochaine »', 'lecture du stock et des ventes ; proposition de commande ; création en brouillon seulement, validée par un humain'] },
      { label: 'Modifier un prix', cells: ['« Baisse le prix de l’huile de 3 % pour les détaillants de Blida »', 'écriture sous plafond par rôle ; approbation au-delà ; ancienne valeur gardée ; effet daté'] },
      { label: 'Répondre à un client', cells: ['« Dis-lui où en est sa commande »', 'lecture de la commande et de la tournée ; réponse sourcée ; jamais de promesse qui n’est pas dans les données'] },
      { label: 'Sortir un état', cells: ['« Fais-moi le chiffre de la semaine par agence »', 'lecture des agrégats déjà définis ; aucun calcul inventé ; le chiffre a la même définition que le tableau de bord'] },
    ], caption: 'Figure 4 · La colonne de droite ne contient aucun outil « générique » : pas d’« exécuter une requête », pas de « modifier un enregistrement ». Chaque outil fait une chose nommée, avec ses paramètres typés et son plafond, et c’est ce qui rend l’agent prévisible.', alt: 'Matrice de six demandes : relancer, créer un avoir, commander, modifier un prix, répondre à un client, sortir un état ; la phrase du gérant et les outils.' },
    pieges: { title: 'Six pièges d’un agent dans l’ERP, et ce que l’architecture fait', columns: ['Ce qui se passe', 'Ce que l’architecture fait'], rows: [
      { label: 'L’outil trop large', cells: ['Un outil « exécuter une requête SQL » ou « modifier n’importe quel champ » ; l’agent fait ce qu’il comprend', 'Un outil par action métier, paramètres typés, valeurs énumérées ; moins de vingt outils par agent'] },
      { label: 'Le paramètre deviné', cells: ['Le gérant n’a pas dit le montant ; le modèle en invente un plausible', 'Paramètre obligatoire vérifié contre la donnée source ; s’il n’y est pas, l’agent demande, il n’exécute pas'] },
      { label: 'La double exécution', cells: ['La connexion coupe, l’appel est renvoyé ; deux avoirs, vingt-trois relances en double', 'Clé d’idempotence par appel ; la seconde exécution renvoie le résultat de la première'] },
      { label: 'L’écriture sans aperçu', cells: ['L’agent écrit dans la comptabilité avant que quiconque ait vu quoi', 'Aperçu systématique pour les écritures ; au-dessus du plafond, approbation sur le téléphone'] },
      { label: 'L’agent plus puissant que l’humain', cells: ['L’agent a un compte « admin » pour simplifier ; le commercial lui fait faire ce qu’il ne peut pas', 'L’agent hérite du rôle de celui qui lui parle, jamais plus ; un rôle « agent » propre, plus étroit'] },
      { label: 'L’action sans trace', cells: ['Personne ne sait que c’est l’agent qui a changé ce prix, ni pourquoi', 'Ligne de journal par appel : qui a demandé, quel outil, quels paramètres, avant, après, refus compris'] },
    ], caption: 'Figure 5 · Les deux premiers pièges viennent de la fiche d’outil ; les quatre autres de la porte. Aucun ne se règle en changeant de modèle, et tous se décident la première semaine, quand on écrit la liste des outils.', alt: 'Matrice de six pièges : outil trop large, paramètre deviné, double exécution, écriture sans aperçu, agent trop puissant, action sans trace ; ce qui se passe et la parade.' },
    calendrier: { title: 'Brancher un agent sur le back-office en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Les demandes et les outils', note: 'les dix demandes que le gérant fait vraiment ; la liste des outils, lecture ou écriture, plafond, approbateur ; signée', from: 0, to: 1 },
      { label: 'Jeu d’évaluation', note: 'soixante demandes réelles avec les appels attendus ; les pièges : paramètre manquant, hors droits, doublon', from: 1, to: 2 },
      { label: 'Outils de lecture et porte', note: 'fiches, schémas stricts, porte avec rôle, paramètres, journal ; l’agent répond et explique, n’écrit rien', from: 2, to: 4, accent: true },
      { label: 'Outils d’écriture', note: 'plafonds, idempotence, aperçu, approbation sur téléphone ; un outil d’écriture à la fois', from: 4, to: 6 },
      { label: 'Pilote', note: 'le gérant et deux personnes ; chaque refus et chaque approbation lus chaque jour ; coût par tâche', from: 6, to: 8 },
    ], caption: 'Figure 6 · Huit semaines, et l’agent ne peut rien écrire avant la cinquième : deux semaines de lecture seule, pendant lesquelles il explique ce qu’il ferait, sont ce qui donne au gérant la confiance d’ouvrir la première écriture. Les écritures s’ouvrent une par une, chacune avec son plafond.', alt: 'Frise de huit semaines : demandes et outils, jeu d’évaluation, outils de lecture et porte (accentué), outils d’écriture, pilote.' },
  },
  en: {
    cover: { eyebrow: 'AI agent · Back office · ERP · Tools · 2027', title: ['“Can the AI create', 'a credit note?” Yes,', 'under conditions'], subtitle: 'How an AI agent acts in your back office and ERP without breaking anything: tools defined one by one, reading before writing, limits, an approval on the phone of whoever can say yes, a key that prevents doing it twice, a preview before writing, and a log line for every call', left: { label: 'Full access to the database', sub: 'the agent does what it understands' }, right: { label: 'Tools under control', sub: 'it proposes; the server disposes' } },
    actions: { caption: 'Figure 1 · The agent never sees the database: it sees four tools, and each goes through the same gate before touching the ERP. The read passes alone; the write under the limit passes with a key that prevents duplicates; the write above the limit becomes an approval request; the tool the role does not have does not exist for it, and the attempt is written.' },
    couches: { title: 'An agent in the back office, in five layers', layers: [
      { label: 'Channel', items: [{ name: 'The manager writes to the agent from WhatsApp, the back office or a button in the screen', sub: 'the request arrives with the name and role of whoever makes it; the agent never has more rights than them' }] },
      { label: 'Agent', items: [{ name: 'The model reads the request, chooses the tools, proposes the parameters, explains what it will do', sub: 'it proposes, it does not execute; its instructions and limits are versioned in your repository' }] },
      { label: 'Tools and gate', items: [{ name: 'One card per tool, read or write, strict schema; the gate checks role, parameters, limit, idempotency, then logs', sub: 'the layer that belongs to you and depends on no vendor; it is the one that says no', accent: true }] },
      { label: 'ERP and data', items: [{ name: 'Your management software or accounting, called through their API or connector, never the database directly', sub: 'the same business rules as for a human: stock, credit, prices, numbering' }] },
      { label: 'Supervision', items: [{ name: 'The call log, pending approvals, refusals, cost per task, the evaluation set replayed', sub: 'a screen read every week: what the agent did, what it was refused, what it cost' }] },
    ], caption: 'Figure 2 · The middle layer is what separates an agent you can plug into your accounting from one you dare not: the model never touches the ERP, it calls tools you wrote, and the gate applies your rules whatever it sends.', alt: 'Five layers: channel, agent, tools and gate (accented), ERP and data, supervision.' },
    toolcard: { caption: 'Figure 3 · The card on the left is all the model knows about the tool; the list on the right runs whatever it sends. The vendors themselves warn that a model may guess a missing parameter: that is the reason for the third check, the amount must exist in the invoice, and the fifth, the preview before writing.' },
    demandes: { title: 'Six requests from a manager, and the tools they become', columns: ['What the manager tells the agent', 'Tools, limits, approval'], rows: [
      { label: 'Chase late payers', cells: ['“Chase everyone who has owed me money for more than a month”', 'read balances; send through an approved template, daily limit, never free text; list of those sent in return'] },
      { label: 'Create a credit note', cells: ['“Do the credit note for the Baraka customer’s return”', 'write under limit; amount taken from the invoice, never typed; above the limit, preview and approval'] },
      { label: 'Place a supplier order', cells: ['“Reorder what will run out next week”', 'read stock and sales; order proposal; created as a draft only, validated by a human'] },
      { label: 'Change a price', cells: ['“Lower the oil price by 3 % for Blida retailers”', 'write under limit per role; approval beyond; old value kept; dated effect'] },
      { label: 'Answer a customer', cells: ['“Tell him where his order is”', 'read the order and the route; sourced answer; never a promise that is not in the data'] },
      { label: 'Produce a report', cells: ['“Give me this week’s figure per branch”', 'read already defined aggregates; no invented calculation; the figure has the same definition as the dashboard'] },
    ], caption: 'Figure 4 · The right column contains no “generic” tool: no “run a query”, no “modify a record”. Each tool does one named thing, with typed parameters and its limit, and that is what makes the agent predictable.', alt: 'Matrix of six requests: chase, credit note, order, change a price, answer a customer, produce a report; the manager’s sentence and the tools.' },
    pieges: { title: 'Six traps of an agent in the ERP, and what the architecture does', columns: ['What happens', 'What the architecture does'], rows: [
      { label: 'The tool too broad', cells: ['A “run a SQL query” or “modify any field” tool; the agent does what it understands', 'One tool per business action, typed parameters, enumerated values; fewer than twenty tools per agent'] },
      { label: 'The guessed parameter', cells: ['The manager did not say the amount; the model invents a plausible one', 'Required parameter checked against the source data; if it is not there, the agent asks, it does not execute'] },
      { label: 'The double execution', cells: ['The connection drops, the call is resent; two credit notes, twenty-three reminders twice', 'Idempotency key per call; the second execution returns the result of the first'] },
      { label: 'The write with no preview', cells: ['The agent writes to accounting before anyone has seen anything', 'Systematic preview for writes; above the limit, approval on the phone'] },
      { label: 'The agent more powerful than the human', cells: ['The agent has an “admin” account to keep things simple; the sales rep gets it to do what they cannot', 'The agent inherits the role of whoever talks to it, never more; a narrower “agent” role of its own'] },
      { label: 'The action with no trace', cells: ['Nobody knows the agent changed this price, or why', 'Log line per call: who asked, which tool, which parameters, before, after, refusals included'] },
    ], caption: 'Figure 5 · The first two traps come from the tool card; the other four from the gate. None is solved by changing model, and all are decided in week one, when the tool list is written.', alt: 'Matrix of six traps: tool too broad, guessed parameter, double execution, write with no preview, agent too powerful, action with no trace; what happens and the defence.' },
    calendrier: { title: 'Plugging an agent into the back office in 2027, in weeks', unit: 'wk', items: [
      { label: 'Requests and tools', note: 'the ten requests the manager really makes; the tool list, read or write, limit, approver; signed', from: 0, to: 1 },
      { label: 'Evaluation set', note: 'sixty real requests with the expected calls; the traps: missing parameter, out of rights, duplicate', from: 1, to: 2 },
      { label: 'Read tools and gate', note: 'cards, strict schemas, gate with role, parameters, log; the agent answers and explains, writes nothing', from: 2, to: 4, accent: true },
      { label: 'Write tools', note: 'limits, idempotency, preview, approval on the phone; one write tool at a time', from: 4, to: 6 },
      { label: 'Pilot', note: 'the manager and two people; every refusal and approval read every day; cost per task', from: 6, to: 8 },
    ], caption: 'Figure 6 · Eight weeks, and the agent can write nothing before the fifth: two read-only weeks, during which it explains what it would do, are what gives the manager the confidence to open the first write. Writes are opened one at a time, each with its limit.', alt: 'Eight-week timeline: requests and tools, evaluation set, read tools and gate (accented), write tools, pilot.' },
  },
  ar: {
    cover: { eyebrow: 'وكيل ذكاء اصطناعي · المكتب الخلفي · ERP · أدوات · 2027', title: ['«هل يستطيع الذكاء', 'إنشاء إشعار دائن؟»', 'نعم، بشروط'], subtitle: 'كيف يتصرف وكيل ذكاء اصطناعي في مكتبكم الخلفي ونظام ERP دون كسر شيء: أدوات تُعرَّف واحدة واحدة، القراءة قبل الكتابة، سقوف، موافقة على هاتف من يستطيع أن يقول نعم، مفتاح يمنع التكرار، معاينة قبل الكتابة، وسطر في السجل لكل استدعاء', left: { label: 'وصول كامل إلى القاعدة', sub: 'الوكيل يفعل ما يفهمه' }, right: { label: 'أدوات تحت السيطرة', sub: 'هو يقترح؛ والخادم يقرر' } },
    actions: { caption: 'الشكل 1 · الوكيل لا يرى القاعدة أبداً: يرى أربع أدوات، وكل منها تمر بالباب نفسه قبل لمس ERP. القراءة تمر وحدها؛ والكتابة تحت السقف تمر بمفتاح يمنع التكرار؛ والكتابة فوق السقف تصير طلب موافقة؛ والأداة التي لا يملكها الدور لا وجود لها عنده، والمحاولة تُكتب.' },
    couches: { title: 'وكيل في المكتب الخلفي، في خمس طبقات', layers: [
      { label: 'القناة', items: [{ name: 'يكتب المسيّر للوكيل من WhatsApp أو المكتب الخلفي أو زر في الشاشة', sub: 'يصل الطلب باسم ودور من يقدّمه؛ ولا يملك الوكيل حقوقاً أكثر منه أبداً' }] },
      { label: 'الوكيل', items: [{ name: 'يقرأ النموذج الطلب، يختار الأدوات، يقترح المعاملات، يشرح ما سيفعله', sub: 'يقترح ولا ينفّذ؛ تعليماته وحدوده مُصدَرة في مستودعكم' }] },
      { label: 'الأدوات والباب', items: [{ name: 'بطاقة لكل أداة، قراءة أو كتابة، مخطط صارم؛ الباب يتحقق من الدور والمعاملات والسقف وعدم التكرار ثم يسجّل', sub: 'الطبقة التي تخصكم ولا تتوقف على أي ناشر؛ وهي التي تقول لا', accent: true }] },
      { label: 'ERP والبيانات', items: [{ name: 'برنامج التسيير أو المحاسبة، يُستدعيان عبر واجهتهما أو موصّلهما، لا عبر القاعدة مباشرة', sub: 'قواعد العمل نفسها كما للإنسان: المخزون، الائتمان، الأسعار، الترقيم' }] },
      { label: 'الإشراف', items: [{ name: 'سجل الاستدعاءات، الموافقات المعلَّقة، المرفوضات، التكلفة لكل مهمة، مجموعة التقييم المُعادة', sub: 'شاشة تُقرأ كل أسبوع: ما فعله الوكيل، وما رُفض له، وكم كلّف' }] },
    ], caption: 'الشكل 2 · الطبقة الوسطى هي الفارق بين وكيل يمكن وصله بالمحاسبة ووكيل لا يُجرؤ عليه: النموذج لا يلمس ERP أبداً، بل يستدعي أدوات كتبتموها، والباب يطبّق قواعدكم مهما أرسل.', alt: 'خمس طبقات: القناة، الوكيل، الأدوات والباب (مميزة)، ERP والبيانات، الإشراف.' },
    toolcard: { caption: 'الشكل 3 · البطاقة على اليمين هي كل ما يعرفه النموذج عن الأداة؛ والقائمة على اليسار تُنفَّذ مهما أرسل. والناشرون أنفسهم يحذّرون من أن النموذج قد يخمّن معاملاً ناقصاً: وهذا سبب الفحص الثالث، المبلغ يجب أن يوجد في الفاتورة، والخامس، المعاينة قبل الكتابة.' },
    demandes: { title: 'ستة طلبات من مسيّر، والأدوات التي تصيرها', columns: ['ما يقوله المسيّر للوكيل', 'الأدوات والسقوف والموافقة'], rows: [
      { label: 'متابعة المتأخرين', cells: ['«تابع كل من يدين لي بمال منذ أكثر من شهر»', 'قراءة الأرصدة؛ إرسال بقالب معتمد وسقف يومي ولا نص حر أبداً؛ قائمة المرسَل إليهم تعود'] },
      { label: 'إنشاء إشعار دائن', cells: ['«اعمل إشعار الدائن لمرتجع الزبون البركة»', 'كتابة تحت سقف؛ المبلغ من الفاتورة لا يُكتب؛ فوق السقف، معاينة وموافقة'] },
      { label: 'طلبية مورّد', cells: ['«اطلب ما سينفد الأسبوع المقبل»', 'قراءة المخزون والمبيعات؛ اقتراح طلبية؛ تُنشأ مسودةً فقط ويصادق عليها إنسان'] },
      { label: 'تعديل سعر', cells: ['«خفّض سعر الزيت 3 % لتجار البليدة»', 'كتابة تحت سقف لكل دور؛ موافقة فوقه؛ القيمة القديمة تُحفظ؛ أثر مؤرَّخ'] },
      { label: 'الرد على زبون', cells: ['«قل له أين وصلت طلبيته»', 'قراءة الطلبية والجولة؛ جواب بمصدره؛ لا وعد ليس في البيانات أبداً'] },
      { label: 'إخراج كشف', cells: ['«أعطني رقم الأسبوع لكل وكالة»', 'قراءة المجاميع المعرَّفة سلفاً؛ لا حساب مخترَع؛ للرقم التعريف نفسه كما في لوحة القيادة'] },
    ], caption: 'الشكل 4 · العمود الأيسر لا يحتوي أي أداة «عامة»: لا «تنفيذ استعلام» ولا «تعديل سجل». كل أداة تفعل شيئاً واحداً مسمّى، بمعاملاتها المنمَّطة وسقفها، وهذا ما يجعل الوكيل متوقَّعاً.', alt: 'مصفوفة ستة طلبات: متابعة، إشعار دائن، طلبية، تعديل سعر، رد على زبون، كشف؛ جملة المسيّر والأدوات.' },
    pieges: { title: 'ستة فخاخ لوكيل في ERP، وما تفعله الهندسة', columns: ['ما يحدث', 'ما تفعله الهندسة'], rows: [
      { label: 'الأداة الواسعة جداً', cells: ['أداة «تنفيذ استعلام SQL» أو «تعديل أي حقل»؛ الوكيل يفعل ما يفهمه', 'أداة لكل فعل عمل، معاملات منمَّطة، قيم محصورة؛ أقل من عشرين أداة لكل وكيل'] },
      { label: 'المعامل المخمَّن', cells: ['لم يقل المسيّر المبلغ؛ فيخترع النموذج مبلغاً معقولاً', 'المعامل الإلزامي يُتحقَّق منه مقابل البيانات المصدر؛ وإن لم يوجد، يسأل الوكيل ولا ينفّذ'] },
      { label: 'التنفيذ المزدوج', cells: ['ينقطع الاتصال ويُعاد الاستدعاء؛ إشعارا دائن، وثلاثة وعشرون تذكيراً مكرراً', 'مفتاح عدم تكرار لكل استدعاء؛ التنفيذ الثاني يعيد نتيجة الأول'] },
      { label: 'الكتابة بلا معاينة', cells: ['يكتب الوكيل في المحاسبة قبل أن يرى أحد شيئاً', 'معاينة منهجية للكتابات؛ وفوق السقف موافقة على الهاتف'] },
      { label: 'وكيل أقوى من الإنسان', cells: ['للوكيل حساب «مدير» للتبسيط؛ فيجعله المندوب يفعل ما لا يستطيع هو', 'الوكيل يرث دور من يخاطبه ولا أكثر أبداً؛ ودور «وكيل» خاص أضيق'] },
      { label: 'الفعل بلا أثر', cells: ['لا أحد يعرف أن الوكيل هو من غيّر هذا السعر، ولا لماذا', 'سطر في السجل لكل استدعاء: من طلب، أي أداة، أي معاملات، قبل، بعد، حتى المرفوض'] },
    ], caption: 'الشكل 5 · الفخان الأولان يأتيان من بطاقة الأداة؛ والأربعة الأخرى من الباب. ولا واحد يُحل بتغيير النموذج، وكلها تُقرَّر في الأسبوع الأول حين تُكتب قائمة الأدوات.', alt: 'مصفوفة ستة فخاخ: أداة واسعة، معامل مخمَّن، تنفيذ مزدوج، كتابة بلا معاينة، وكيل أقوى من اللازم، فعل بلا أثر؛ ما يحدث والصدّ.' },
    calendrier: { title: 'وصل وكيل بالمكتب الخلفي سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الطلبات والأدوات', note: 'الطلبات العشرة التي يقدّمها المسيّر فعلاً؛ قائمة الأدوات، قراءة أو كتابة، السقف، الموافِق؛ موقَّعة', from: 0, to: 1 },
      { label: 'مجموعة التقييم', note: 'ستون طلباً حقيقياً بالاستدعاءات المنتظرة؛ الفخاخ: معامل ناقص، خارج الحقوق، تكرار', from: 1, to: 2 },
      { label: 'أدوات القراءة والباب', note: 'بطاقات، مخططات صارمة، باب بالدور والمعاملات والسجل؛ الوكيل يجيب ويشرح ولا يكتب شيئاً', from: 2, to: 4, accent: true },
      { label: 'أدوات الكتابة', note: 'سقوف، عدم تكرار، معاينة، موافقة على الهاتف؛ أداة كتابة واحدة في كل مرة', from: 4, to: 6 },
      { label: 'التجريب', note: 'المسيّر وشخصان؛ كل رفض وكل موافقة يُقرآن كل يوم؛ التكلفة لكل مهمة', from: 6, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع، والوكيل لا يستطيع كتابة شيء قبل الخامس: أسبوعان للقراءة فقط يشرح فيهما ما كان سيفعله، هما ما يعطي المسيّر الثقة لفتح أول كتابة. وتُفتح الكتابات واحدة واحدة، لكل منها سقفها.', alt: 'خط زمني من ثمانية أسابيع: الطلبات والأدوات، مجموعة التقييم، أدوات القراءة والباب (مميزة)، أدوات الكتابة، التجريب.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = EA[locale] || EA.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      actions: { svg: actions(e.actions, rtl), caption: t.actions.caption, alt: e.actions.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      toolcard: { svg: toolcard(e.toolcard, rtl), caption: t.toolcard.caption, alt: e.toolcard.alt },
      demandes: { svg: matrix({ title: t.demandes.title, columns: t.demandes.columns, rows: t.demandes.rows, rtl }), caption: t.demandes.caption, alt: t.demandes.alt },
      pieges: { svg: matrix({ title: t.pieges.title, columns: t.pieges.columns, rows: t.pieges.rows, rtl }), caption: t.pieges.caption, alt: t.pieges.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 2, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
