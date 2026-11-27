import { cover, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { grid, trail, STRINGS as AC } from './custom/access-control.mjs';
export const slug = 'roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations';
const T = {
  fr: {
    cover: { eyebrow: 'Rôles · Droits · Journal d’audit · 2027', title: ['« Qui a changé', 'ce prix ? » Et qui', 'avait le droit ?'], subtitle: 'Comment les accès d’une application se construisent : une personne par compte, des rôles, des règles par ligne, par agence et par montant, des approbations, un journal qu’on ne peut pas modifier, et l’accès coupé le jour du départ', left: { label: 'Un mot de passe partagé', sub: 'tout le monde voit tout, sans trace' }, right: { label: 'Des rôles et un journal', sub: 'chacun son périmètre, tout est écrit' } },
    ecran: { caption: 'Figure 1 · « Masqué » ne veut pas dire « caché à l’écran » : la marge n’est pas envoyée au téléphone du commercial, donc aucune manipulation ne la fait apparaître. La dernière colonne est celle qu’on oublie : l’agent IA est un rôle comme un autre, avec moins de droits que la personne qu’il assiste.' },
    couches: { title: 'Les accès d’une application, en cinq couches', layers: [
      { label: 'Identité', items: [{ name: 'Une personne, un compte : numéro de téléphone, code ou clé d’accès, appareils connus, session qui expire', sub: 'aucun compte partagé ; c’est ce qui donne un nom à chaque ligne du journal' }] },
      { label: 'Rôles', items: [{ name: 'Gérant, commercial, magasinier, comptable, prestataire, agent IA : ce que chaque rôle voit et fait, par écran et par action', sub: 'une personne peut avoir deux rôles ; un rôle ne se modifie pas pour arranger une personne' }] },
      { label: 'Règles par ligne', items: [{ name: 'Ses clients, son dépôt, son agence ; un plafond de remise, un montant maximal, une période', sub: 'appliquées par la base elle-même et par l’interface : refusé par défaut, autorisé par règle', accent: true }] },
      { label: 'Approbations', items: [{ name: 'Ce qui dépasse une limite ne s’arrête pas : cela part chez celui qui peut dire oui, sur son téléphone', sub: 'remise au-delà du plafond, annulation d’une facture, export, suppression' }] },
      { label: 'Journal', items: [{ name: 'Qui, quand, d’où, avant, après, pourquoi ; les refus et les lectures sensibles aussi', sub: 'on ajoute, on ne modifie ni ne supprime ; lu chaque semaine, alertes sur l’inhabituel' }] },
    ], caption: 'Figure 2 · La couche du milieu est celle qui manque dans la plupart des applications que nous reprenons : les rôles existent, mais un commercial voit les clients de tous les autres. Une règle qui n’existe que dans l’interface n’existe pas : elle se contourne en changeant un numéro dans l’adresse.', alt: 'Cinq couches : identité, rôles, règles par ligne (accentuée), approbations, journal.' },
    journal: { caption: 'Figure 3 · La première ligne est la plus utile : une tentative refusée dit où les limites sont mal placées, ou qui les teste. La dernière est celle qu’on oublie : quand un agent IA lit une donnée sensible pour répondre à un client, cette lecture est une action, et elle a une ligne.' },
    demandes: { title: 'Six demandes d’accès, et la règle qu’on écrit', columns: ['Ce que le gérant demande', 'La règle écrite'], rows: [
      { label: 'Le commercial', cells: ['« Qu’il ne voie que ses clients, et pas mes marges »', 'Lignes filtrées sur son portefeuille par la base ; prix d’achat et marge jamais envoyés ; remise jusqu’à son plafond, au-delà approbation'] },
      { label: 'Le magasinier', cells: ['« Qu’il gère le stock sans voir les prix »', 'Stock de son dépôt en écriture ; prix de vente en lecture ; prix d’achat masqué ; inventaire validé par un second'] },
      { label: 'Le comptable externe', cells: ['« Qu’il voie tout mais ne touche à rien »', 'Lecture seule sur tout ; export autorisé et journalisé ; aucune suppression ; accès revu chaque année'] },
      { label: 'Le chef d’agence', cells: ['« Qu’il pilote son agence, pas les autres »', 'Tout sur son agence ; rien sur les autres ; ses totaux visibles par la direction, pas l’inverse'] },
      { label: 'Le prestataire', cells: ['« Qu’il dépanne sans garder un accès »', 'Accès nominatif, limité dans le temps, sur un périmètre ; coupé automatiquement à la date ; tout est journalisé'] },
      { label: 'L’agent IA', cells: ['« Qu’il réponde aux clients sans tout savoir »', 'Rôle propre : lecture du nécessaire, actions sous plafond, jamais la marge ni l’export ; ses actions signées de son nom'] },
    ], caption: 'Figure 4 · Chaque ligne commence par une phrase du gérant, pas par un schéma : c’est elle qu’on transforme en règle et qu’on teste. Si une demande ne se laisse pas écrire en une phrase, le rôle est mal découpé.', alt: 'Matrice de six demandes d’accès : commercial, magasinier, comptable, chef d’agence, prestataire, agent IA ; la demande et la règle.' },
    failles: { title: 'Six fuites d’accès, et ce que l’architecture fait', columns: ['Ce qui se passe', 'Ce que l’architecture fait'], rows: [
      { label: 'L’employé parti', cells: ['Il a quitté l’entreprise il y a trois mois ; son compte marche encore sur son téléphone', 'Départ = une action : sessions coupées, appareils retirés, clients réattribués ; revue mensuelle des comptes inactifs'] },
      { label: 'Le compte partagé', cells: ['Trois personnes utilisent le compte du gérant ; le journal dit « gérant » partout', 'Un compte par personne, connexion par téléphone, pas de mot de passe à prêter ; délégation écrite plutôt que partage'] },
      { label: 'Le numéro changé dans l’adresse', cells: ['Le commercial remplace 1042 par 1043 et voit la commande d’un autre', 'Règle par ligne vérifiée côté serveur et dans la base à chaque requête ; refus journalisé'] },
      { label: 'L’export de toute la base', cells: ['La liste des clients part dans un fichier Excel, puis chez un concurrent', 'Export réservé, limité, journalisé, avec alerte ; l’interface montre, elle ne donne pas tout'] },
      { label: 'Tout le monde administrateur', cells: ['Pour aller vite, chacun a reçu tous les droits « en attendant »', 'Rôles écrits la première semaine ; droits ajoutés par demande ; revue trimestrielle'] },
      { label: 'Le journal modifiable', cells: ['Celui qui a changé le prix peut aussi effacer la ligne', 'Journal en ajout seul, hors de portée des rôles métier, sauvegardé à part ; gérant compris'] },
    ], caption: 'Figure 5 · Aucune de ces six fuites n’est une attaque : ce sont des habitudes. Les trois premières se voient dans le journal si quelqu’un le lit ; les trois dernières se décident la première semaine, quand on écrit les rôles.', alt: 'Matrice de six fuites : employé parti, compte partagé, numéro dans l’adresse, export, tous administrateurs, journal modifiable ; ce qui se passe et la parade.' },
    calendrier: { title: 'Construire les rôles, les droits et le journal en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Rôles et phrases', note: 'chaque rôle, une phrase du gérant par rôle, la grille qui voit quoi et qui modifie quoi, les plafonds ; signés', from: 0, to: 1 },
      { label: 'Identité et sessions', note: 'un compte par personne, connexion par téléphone, appareils, expiration, départ en une action', from: 1, to: 2 },
      { label: 'Règles par ligne', note: 'portefeuille, dépôt, agence, plafonds ; appliquées dans la base et côté serveur ; tests d’accès croisés', from: 2, to: 4, accent: true },
      { label: 'Approbations et journal', note: 'demandes qui partent sur le téléphone de l’approbateur ; journal en ajout seul, avant et après', from: 4, to: 5 },
      { label: 'Recette et revue', note: 'chaque rôle tente ce qu’il n’a pas le droit de faire ; écran de revue des accès et des alertes', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, construites avec l’application et non après : ajouter des droits à une application qui n’en a pas oblige à rouvrir chaque écran. La recette de la dernière semaine est faite à l’envers : on ne vérifie pas ce que chacun peut faire, mais ce qu’il ne peut pas.', alt: 'Frise de six semaines : rôles, identité, règles par ligne (accentué), approbations et journal, recette et revue.' },
  },
  en: {
    cover: { eyebrow: 'Roles · Permissions · Audit log · 2027', title: ['“Who changed this', 'price?” And who', 'was allowed to?'], subtitle: 'How an application’s access is built: one person per account, roles, rules per row, per branch and per amount, approvals, a log nobody can alter, and access cut the day someone leaves', left: { label: 'A shared password', sub: 'everyone sees everything, no trace' }, right: { label: 'Roles and a log', sub: 'each their scope, all written down' } },
    ecran: { caption: 'Figure 1 · “Hidden” does not mean “hidden on screen”: the margin is not sent to the sales rep’s phone, so no trick makes it appear. The last column is the one people forget: the AI agent is a role like any other, with fewer rights than the person it assists.' },
    couches: { title: 'An application’s access, in five layers', layers: [
      { label: 'Identity', items: [{ name: 'One person, one account: phone number, code or passkey, known devices, a session that expires', sub: 'no shared account; this is what gives every log line a name' }] },
      { label: 'Roles', items: [{ name: 'Manager, sales rep, storekeeper, accountant, contractor, AI agent: what each role sees and does, per screen and per action', sub: 'a person can hold two roles; a role is not altered to suit one person' }] },
      { label: 'Row rules', items: [{ name: 'Their customers, their depot, their branch; a discount limit, a maximum amount, a period', sub: 'enforced by the database itself and by the interface: denied by default, allowed by rule', accent: true }] },
      { label: 'Approvals', items: [{ name: 'What exceeds a limit does not stop: it goes to whoever can say yes, on their phone', sub: 'discount above the limit, invoice cancellation, export, deletion' }] },
      { label: 'Log', items: [{ name: 'Who, when, from where, before, after, why; refusals and sensitive reads too', sub: 'append-only, never changed or deleted; read every week, alerts on the unusual' }] },
    ], caption: 'Figure 2 · The middle layer is the one missing in most apps we take over: roles exist, but a sales rep sees everyone else’s customers. A rule that exists only in the interface does not exist: it is bypassed by changing a number in the address.', alt: 'Five layers: identity, roles, row rules (accented), approvals, log.' },
    journal: { caption: 'Figure 3 · The first line is the most useful: a refused attempt tells you where limits are badly placed, or who is testing them. The last is the one people forget: when an AI agent reads sensitive data to answer a customer, that read is an action, and it has a line.' },
    demandes: { title: 'Six access requests, and the rule that gets written', columns: ['What the manager asks', 'The written rule'], rows: [
      { label: 'The sales rep', cells: ['“They should only see their customers, not my margins”', 'Rows filtered on their portfolio by the database; purchase price and margin never sent; discount up to their limit, approval beyond'] },
      { label: 'The storekeeper', cells: ['“They manage stock without seeing prices”', 'Their depot’s stock writable; selling price readable; purchase price hidden; stock count validated by a second person'] },
      { label: 'The external accountant', cells: ['“They see everything but touch nothing”', 'Read-only on everything; export allowed and logged; no deletion; access reviewed every year'] },
      { label: 'The branch manager', cells: ['“They run their branch, not the others”', 'Everything on their branch; nothing on the others; their totals visible to head office, not the reverse'] },
      { label: 'The contractor', cells: ['“They fix things without keeping access”', 'Named access, time-limited, on a scope; cut automatically at the date; everything logged'] },
      { label: 'The AI agent', cells: ['“It answers customers without knowing everything”', 'Its own role: reads what is needed, actions under a limit, never the margin or the export; its actions signed in its name'] },
    ], caption: 'Figure 4 · Every row starts with a sentence from the manager, not a diagram: that sentence becomes a rule and gets tested. If a request cannot be written in one sentence, the role is badly cut.', alt: 'Matrix of six access requests: sales rep, storekeeper, accountant, branch manager, contractor, AI agent; the request and the rule.' },
    failles: { title: 'Six access leaks, and what the architecture does', columns: ['What happens', 'What the architecture does'], rows: [
      { label: 'The employee who left', cells: ['They left three months ago; their account still works on their phone', 'Leaving = one action: sessions cut, devices removed, customers reassigned; monthly review of inactive accounts'] },
      { label: 'The shared account', cells: ['Three people use the manager’s account; the log says “manager” everywhere', 'One account per person, login by phone, no password to lend; written delegation rather than sharing'] },
      { label: 'The number changed in the address', cells: ['The sales rep replaces 1042 with 1043 and sees someone else’s order', 'Row rule checked server-side and in the database on every request; refusal logged'] },
      { label: 'The export of the whole base', cells: ['The customer list leaves in an Excel file, then to a competitor', 'Export reserved, limited, logged, with an alert; the interface shows, it does not hand over everything'] },
      { label: 'Everyone an administrator', cells: ['To move fast, everyone got all rights “for now”', 'Roles written in week one; rights added on request; quarterly review'] },
      { label: 'The editable log', cells: ['Whoever changed the price can also delete the line', 'Append-only log, out of reach of business roles, backed up separately; manager included'] },
    ], caption: 'Figure 5 · None of these six leaks is an attack: they are habits. The first three show in the log if someone reads it; the last three are decided in week one, when roles are written.', alt: 'Matrix of six leaks: employee who left, shared account, number in the address, export, everyone administrator, editable log; what happens and the defence.' },
    calendrier: { title: 'Building roles, permissions and the log in 2027, in weeks', unit: 'wk', items: [
      { label: 'Roles and sentences', note: 'every role, one sentence from the manager per role, the grid of who sees and changes what, the limits; signed', from: 0, to: 1 },
      { label: 'Identity and sessions', note: 'one account per person, login by phone, devices, expiry, leaving in one action', from: 1, to: 2 },
      { label: 'Row rules', note: 'portfolio, depot, branch, limits; enforced in the database and server-side; cross-access tests', from: 2, to: 4, accent: true },
      { label: 'Approvals and log', note: 'requests that reach the approver’s phone; append-only log, before and after', from: 4, to: 5 },
      { label: 'Acceptance and review', note: 'every role attempts what it is not allowed to do; access review screen and alerts', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, built with the application and not after: adding rights to an app that has none means reopening every screen. The last week’s acceptance is done backwards: we do not check what each person can do, but what they cannot.', alt: 'Six-week timeline: roles, identity, row rules (accented), approvals and log, acceptance and review.' },
  },
  ar: {
    cover: { eyebrow: 'الأدوار · الصلاحيات · سجل التدقيق · 2027', title: ['«من غيّر هذا', 'السعر؟» ومن كان', 'له الحق؟'], subtitle: 'كيف تُبنى صلاحيات تطبيق: شخص واحد لكل حساب، أدوار، قواعد لكل سطر ولكل وكالة ولكل مبلغ، موافقات، سجل لا يُعدَّل، ووصول يُقطع يوم المغادرة', left: { label: 'كلمة مرور مشتركة', sub: 'الكل يرى الكل، بلا أثر' }, right: { label: 'أدوار وسجل', sub: 'لكلٍّ نطاقه، وكل شيء مكتوب' } },
    ecran: { caption: 'الشكل 1 · «مخفي» لا تعني «مخفي على الشاشة»: الهامش لا يُرسل إلى هاتف المندوب، فلا حيلة تُظهره. والعمود الأخير هو المنسيّ: وكيل الذكاء الاصطناعي دور كغيره، بحقوق أقل من الشخص الذي يساعده.' },
    couches: { title: 'صلاحيات التطبيق، في خمس طبقات', layers: [
      { label: 'الهوية', items: [{ name: 'شخص واحد وحساب واحد: رقم الهاتف، رمز أو مفتاح دخول، أجهزة معروفة، جلسة تنتهي', sub: 'لا حساب مشترك؛ وهذا ما يعطي اسماً لكل سطر في السجل' }] },
      { label: 'الأدوار', items: [{ name: 'مسيّر، مندوب، أمين مخزن، محاسب، مقدّم خدمة، وكيل ذكاء اصطناعي: ما يراه كل دور ويفعله، لكل شاشة ولكل فعل', sub: 'يمكن لشخص أن يحمل دورين؛ ولا يُعدَّل دور لإرضاء شخص' }] },
      { label: 'قواعد السطور', items: [{ name: 'زبائنه، مستودعه، وكالته؛ سقف تخفيض، مبلغ أقصى، فترة', sub: 'تطبقها القاعدة نفسها والواجهة: مرفوض افتراضياً ومسموح بقاعدة', accent: true }] },
      { label: 'الموافقات', items: [{ name: 'ما يتجاوز حداً لا يتوقف: يذهب إلى من يستطيع أن يقول نعم، على هاتفه', sub: 'تخفيض فوق السقف، إلغاء فاتورة، تصدير، حذف' }] },
      { label: 'السجل', items: [{ name: 'من، متى، من أين، قبل، بعد، لماذا؛ والمرفوضات والقراءات الحساسة أيضاً', sub: 'إضافة فقط بلا تعديل ولا حذف؛ يُقرأ كل أسبوع، وتنبيهات على غير المعتاد' }] },
    ], caption: 'الشكل 2 · الطبقة الوسطى هي الناقصة في أغلب التطبيقات التي نستلمها: الأدوار موجودة لكن المندوب يرى زبائن الجميع. وقاعدة لا توجد إلا في الواجهة لا وجود لها: تُتجاوز بتغيير رقم في العنوان.', alt: 'خمس طبقات: الهوية، الأدوار، قواعد السطور (مميزة)، الموافقات، السجل.' },
    journal: { caption: 'الشكل 3 · السطر الأول هو الأنفع: محاولة مرفوضة تقول أين وُضعت الحدود خطأً، أو من يختبرها. والأخير هو المنسيّ: حين يقرأ وكيل الذكاء الاصطناعي معطى حساساً ليجيب زبوناً، فهذه القراءة فعل، ولها سطر.' },
    demandes: { title: 'ستة طلبات صلاحية، والقاعدة التي تُكتب', columns: ['ما يطلبه المسيّر', 'القاعدة المكتوبة'], rows: [
      { label: 'المندوب', cells: ['«ألا يرى إلا زبائنه، ولا هوامشي»', 'سطور مرشَّحة على محفظته من القاعدة؛ سعر الشراء والهامش لا يُرسلان أبداً؛ تخفيض حتى سقفه وما فوقه بموافقة'] },
      { label: 'أمين المخزن', cells: ['«أن يسيّر المخزون دون رؤية الأسعار»', 'مخزون مستودعه للكتابة؛ سعر البيع للقراءة؛ سعر الشراء مخفي؛ الجرد يتحقق منه شخص ثانٍ'] },
      { label: 'المحاسب الخارجي', cells: ['«أن يرى كل شيء ولا يمسّ شيئاً»', 'قراءة فقط على كل شيء؛ تصدير مسموح ومسجَّل؛ لا حذف؛ الوصول يُراجَع كل سنة'] },
      { label: 'رئيس الوكالة', cells: ['«أن يدير وكالته لا الأخريات»', 'كل شيء على وكالته؛ لا شيء على الأخريات؛ مجاميعه مرئية للإدارة لا العكس'] },
      { label: 'مقدّم الخدمة', cells: ['«أن يصلح دون أن يحتفظ بوصول»', 'وصول اسمي، محدود في الزمن وعلى نطاق؛ يُقطع آلياً في التاريخ؛ وكل شيء مسجَّل'] },
      { label: 'وكيل الذكاء الاصطناعي', cells: ['«أن يجيب الزبائن دون أن يعرف كل شيء»', 'دور خاص: قراءة الضروري، أفعال تحت سقف، لا الهامش ولا التصدير أبداً؛ وأفعاله موقَّعة باسمه'] },
    ], caption: 'الشكل 4 · كل سطر يبدأ بجملة من المسيّر لا بمخطط: هي ما يتحول إلى قاعدة ويُختبر. وإن لم يُكتب طلب في جملة واحدة فالدور مقطَّع خطأً.', alt: 'مصفوفة ستة طلبات: مندوب، أمين مخزن، محاسب، رئيس وكالة، مقدّم خدمة، وكيل ذكاء اصطناعي؛ الطلب والقاعدة.' },
    failles: { title: 'ستة تسريبات صلاحية، وما تفعله الهندسة', columns: ['ما يحدث', 'ما تفعله الهندسة'], rows: [
      { label: 'الموظف المغادر', cells: ['غادر الشركة منذ ثلاثة أشهر؛ وحسابه ما زال يعمل على هاتفه', 'المغادرة = فعل واحد: جلسات تُقطع، أجهزة تُزال، زبائن يُعاد إسنادهم؛ ومراجعة شهرية للحسابات الخاملة'] },
      { label: 'الحساب المشترك', cells: ['ثلاثة أشخاص يستعملون حساب المسيّر؛ والسجل يقول «المسيّر» في كل مكان', 'حساب لكل شخص، دخول بالهاتف، لا كلمة مرور تُعار؛ تفويض مكتوب بدل المشاركة'] },
      { label: 'الرقم المغيَّر في العنوان', cells: ['يستبدل المندوب 1042 بـ 1043 فيرى طلبية غيره', 'قاعدة السطر تُتحقَّق في الخادم وفي القاعدة مع كل طلب؛ والرفض يُسجَّل'] },
      { label: 'تصدير القاعدة كلها', cells: ['قائمة الزبائن تخرج في ملف Excel ثم إلى منافس', 'تصدير محجوز، محدود، مسجَّل، بتنبيه؛ الواجهة تعرض ولا تعطي كل شيء'] },
      { label: 'الكل مدير', cells: ['للسرعة، نال كل واحد كل الحقوق «مؤقتاً»', 'أدوار تُكتب في الأسبوع الأول؛ حقوق تُضاف بطلب؛ ومراجعة فصلية'] },
      { label: 'السجل القابل للتعديل', cells: ['من غيّر السعر يستطيع أيضاً أن يمحو السطر', 'سجل للإضافة فقط، بعيد عن أدوار العمل، منسوخ على حدة؛ والمسيّر كذلك'] },
    ], caption: 'الشكل 5 · لا واحد من هذه التسريبات الستة هجوم: هي عادات. الثلاثة الأولى تظهر في السجل إن قرأه أحد؛ والثلاثة الأخيرة تُقرَّر في الأسبوع الأول حين تُكتب الأدوار.', alt: 'مصفوفة ستة تسريبات: موظف مغادر، حساب مشترك، رقم في العنوان، تصدير، الكل مدير، سجل قابل للتعديل؛ ما يحدث والصدّ.' },
    calendrier: { title: 'بناء الأدوار والصلاحيات والسجل سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الأدوار والجمل', note: 'كل دور، جملة من المسيّر لكل دور، شبكة من يرى ومن يعدّل ماذا، السقوف؛ موقَّعة', from: 0, to: 1 },
      { label: 'الهوية والجلسات', note: 'حساب لكل شخص، دخول بالهاتف، أجهزة، انتهاء، مغادرة بفعل واحد', from: 1, to: 2 },
      { label: 'قواعد السطور', note: 'محفظة، مستودع، وكالة، سقوف؛ تُطبَّق في القاعدة وفي الخادم؛ اختبارات وصول متقاطعة', from: 2, to: 4, accent: true },
      { label: 'الموافقات والسجل', note: 'طلبات تصل هاتف الموافِق؛ سجل للإضافة فقط، قبل وبعد', from: 4, to: 5 },
      { label: 'القبول والمراجعة', note: 'كل دور يحاول ما لا يحق له؛ شاشة مراجعة الوصول والتنبيهات', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، تُبنى مع التطبيق لا بعده: إضافة حقوق إلى تطبيق بلا حقوق تفرض فتح كل شاشة من جديد. وقبول الأسبوع الأخير يتم بالعكس: لا نتحقق مما يستطيع كل واحد فعله بل مما لا يستطيع.', alt: 'خط زمني من ستة أسابيع: الأدوار، الهوية، قواعد السطور (مميزة)، الموافقات والسجل، القبول والمراجعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const a = AC[locale] || AC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      ecran: { svg: grid(a.grid, rtl), caption: t.ecran.caption, alt: a.grid.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      journal: { svg: trail(a.trail, rtl), caption: t.journal.caption, alt: a.trail.alt },
      demandes: { svg: matrix({ title: t.demandes.title, columns: t.demandes.columns, rows: t.demandes.rows, rtl }), caption: t.demandes.caption, alt: t.demandes.alt },
      failles: { svg: matrix({ title: t.failles.title, columns: t.failles.columns, rows: t.failles.rows, rtl }), caption: t.failles.caption, alt: t.failles.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
