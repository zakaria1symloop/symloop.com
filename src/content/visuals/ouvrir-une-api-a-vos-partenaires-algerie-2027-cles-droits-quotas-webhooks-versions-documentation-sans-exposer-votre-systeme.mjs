import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { gate, webhook, STRINGS as PA } from './custom/partner-api.mjs';
export const slug = 'ouvrir-une-api-a-vos-partenaires-algerie-2027-cles-droits-quotas-webhooks-versions-documentation-sans-exposer-votre-systeme';
const T = {
  fr: {
    cover: { eyebrow: 'API · Partenaires · Intégrations · 2027', title: ['« Mon transporteur', 'veut se brancher', 'sur mon système »'], subtitle: 'Comment on ouvre une API à des partenaires, transporteurs, gros clients, cabinets comptables, applications tierces, sans leur donner la base : une clé par partenaire, des droits par ressource, des quotas, des webhooks signés et réessayés, des versions datées, un bac à sable et une documentation qu’ils lisent seuls', left: { label: 'Un accès à la base « pour aller vite »', sub: 'et personne ne sait qui lit quoi' }, right: { label: 'Six portes et un journal', sub: 'le partenaire voit l’API, pas le système' } },
    etapes: { title: 'Brancher un partenaire, en six étapes', items: [
      { label: 'Demande et contrat', sub: 'ce que le partenaire lit et écrit, à quelle fréquence ; signé des deux côtés' },
      { label: 'Compte et clé de test', sub: 'un compte partenaire, une clé de bac à sable, des données fictives réalistes' },
      { label: 'Droits et quotas écrits', sub: 'lire ou écrire par ressource, appels par minute et par jour, avant la première ligne', accent: true },
      { label: 'Intégration en bac à sable', sub: 'le partenaire développe seul avec la documentation ; ses erreurs dans son journal' },
      { label: 'Revue', sub: 'journal relu ensemble, erreurs, idempotence vérifiée, webhooks acquittés' },
      { label: 'Clé de production', sub: 'activée à une date, quota de départ, surveillance la première semaine' },
    ], caption: 'Figure 1 · Six étapes, et la troisième est celle qu’on saute toujours : écrire ce que ce partenaire a le droit de faire, en lecture et en écriture, et combien de fois par minute, avant qu’il ait écrit une ligne. Tout le reste, clé, bac à sable, revue, est la mise en œuvre de cette feuille.', alt: 'Six étapes : demande et contrat, compte et clé de test, droits et quotas écrits (accentuée), intégration en bac à sable, revue, clé de production.' },
    porte: { caption: 'Figure 2 · Trois partenaires, une seule chaîne de portes, et la même ligne de journal pour chaque passage et chaque refus. Le transporteur passe ; le gros client qui tente de modifier un prix est arrêté à la porte des droits ; l’application de caisse qui dépasse ses six cents appels par minute reçoit un 429 avec le délai avant de réessayer, et ne perd rien. Les chiffres sont un exemple construit.' },
    couches: { title: 'Une API ouverte aux partenaires, en cinq couches', layers: [
      { label: 'Partenaire', items: [{ name: 'Son ERP, son application, son script ; sa clé, son secret de webhook, son adresse de réception', sub: 'vous ne contrôlez pas son code ; vous contrôlez ce qu’il peut demander et ce qu’il reçoit' }] },
      { label: 'Passerelle d’API', items: [{ name: 'Connexion chiffrée, clés et jetons, droits par ressource, quotas, schéma par version, idempotence, journal de chaque appel', sub: 'la couche qui protège ; identique pour tous les partenaires, et la seule qu’ils voient', accent: true }] },
      { label: 'Vos services', items: [{ name: 'Les mêmes services que votre propre application : commandes, livraisons, factures, catalogue ; aucune route « spéciale partenaire »', sub: 'ce qu’un partenaire peut faire, un utilisateur avec le même rôle peut le faire ; rien de plus' }] },
      { label: 'Données', items: [{ name: 'La base, les fichiers, les événements ; jamais exposés en direct, filtrés par le rôle du partenaire', sub: 'le gros client ne voit que ses commandes et ses factures ; le transporteur ne voit pas les prix' }] },
      { label: 'Portail et supervision', items: [{ name: 'Documentation générée depuis le schéma, bac à sable, clés et secrets gérés par le partenaire, journal de ses appels et de ses webhooks, rejeu', sub: 'ce que le partenaire lit seul au lieu de vous appeler ; ce que vous lisez chaque semaine' }] },
    ], caption: 'Figure 3 · La passerelle est la couche accentuée, mais la règle qui tient tout est dans la troisième : il n’y a pas de route spéciale pour les partenaires. Un partenaire est un utilisateur avec un rôle, qui passe par les mêmes services et les mêmes règles ; la passerelle ajoute la clé, le quota, la version et le journal.', alt: 'Cinq couches : partenaire, passerelle d’API (accentuée), vos services, données, portail et supervision.' },
    droits: { title: 'Six partenaires, et ce que chacun a le droit de faire', columns: ['Lire', 'Écrire · quota · webhooks reçus'], rows: [
      { label: 'Transporteur', cells: ['commandes à expédier, adresses, créneaux ; jamais les prix ni les marges', 'statut de livraison, preuve, incident · 300 appels / min · commande.expediee, commande.annulee'] },
      { label: 'Gros client B2B', cells: ['son catalogue aux prix négociés, ses commandes, ses factures ; rien des autres clients', 'créer une commande, l’annuler avant préparation · 120 / min · commande.confirmee, facture.emise'] },
      { label: 'Cabinet comptable', cells: ['factures, avoirs, règlements, exports par période', 'rien · 60 / min · facture.emise, avoir.emis, reglement.recu'] },
      { label: 'Revendeur ou marketplace', cells: ['stock disponible, prix revendeur, fiches produit', 'créer une commande, réserver du stock 30 min · 600 / min · stock.change, prix.change'] },
      { label: 'Application de caisse tierce', cells: ['catalogue, promotions du jour', 'ventes, encaissements, clôtures · 600 / min · catalogue.change'] },
      { label: 'Banque ou agrégateur de paiement', cells: ['rien', 'rien ; il envoie ses webhooks signés et vous les vérifiez · entrants seulement'] },
    ], caption: 'Figure 4 · Chaque ligne est une feuille de droits signée des deux côtés, et c’est le serveur qui l’applique, pas la documentation. Le transporteur ne voit pas les prix, le comptable n’écrit rien, le gros client ne voit que lui ; les quotas sont des points de départ qu’on relève sur demande, avec une date. Les valeurs sont un exemple.', alt: 'Matrice de six partenaires : transporteur, gros client, cabinet comptable, revendeur, application de caisse, banque ; ce que chacun lit, écrit, son quota et ses webhooks.' },
    webhook: { caption: 'Figure 5 · Un webhook est une tentative. Celui-ci a réussi à la troisième, dix minutes après l’événement, parce que le serveur du partenaire redémarrait ; l’en-tête signé était le même à chaque fois, le partenaire a vérifié la signature et aurait ignoré une livraison en double. Les grandes plateformes de paiement réessaient jusqu’à trois jours avec un écart croissant, ne garantissent pas l’ordre, et demandent une réponse 2xx rapide ; nous faisons de même.' },
    calendrier: { title: 'Ouvrir une API à ses partenaires en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Contrat d’API', note: 'ressources, droits par type de partenaire, quotas de départ, politique de versions et de dépréciation, écrits et signés', from: 0, to: 1 },
      { label: 'Passerelle', note: 'clés et jetons, droits par ressource, quotas, journal de chaque appel ; les services existants derrière, aucune route spéciale', from: 1, to: 3, accent: true },
      { label: 'Bac à sable et documentation', note: 'données fictives, documentation générée depuis le schéma, portail où le partenaire gère ses clés et lit son journal', from: 3, to: 4 },
      { label: 'Webhooks signés', note: 'événements, signature, tentatives à écart croissant jusqu’à trois jours, rejeu depuis le portail', from: 4, to: 6 },
      { label: 'Premier partenaire', note: 'un transporteur ou un gros client en bac à sable puis en production ; journal relu ensemble chaque semaine', from: 6, to: 8 },
      { label: 'Version 1 gelée', note: 'la v1 ne change plus que par ajout ; douze mois de support écrits ; la v2 n’existe que si un changement l’exige', from: 8, to: 10 },
    ], caption: 'Figure 6 · Dix semaines, dont deux pour le contrat d’API et la passerelle avant qu’un partenaire voie quoi que ce soit, et deux pour le premier partenaire réel. La version 1 est gelée à la fin : elle ne change plus que par ajout, et elle est supportée douze mois après l’annonce de la suivante, comme le font les plateformes de commerce qui publient une version par trimestre.', alt: 'Frise de dix semaines : contrat d’API, passerelle (accentuée), bac à sable et documentation, webhooks signés, premier partenaire, version 1 gelée.' },
  },
  en: {
    cover: { eyebrow: 'API · Partners · Integrations · 2027', title: ['“My carrier wants', 'to plug into', 'my system”'], subtitle: 'How an API is opened to partners, carriers, big clients, accounting firms, third-party apps, without handing them the database: one key per partner, rights per resource, quotas, signed and retried webhooks, dated versions, a sandbox and documentation they read on their own', left: { label: 'Database access “to go fast”', sub: 'and nobody knows who reads what' }, right: { label: 'Six gates and a log', sub: 'the partner sees the API, not the system' } },
    etapes: { title: 'Connecting a partner, in six steps', items: [
      { label: 'Request and contract', sub: 'what the partner reads and writes, how often; signed on both sides' },
      { label: 'Account and test key', sub: 'a partner account, a sandbox key, realistic fake data' },
      { label: 'Rights and quotas written', sub: 'read or write per resource, calls per minute and per day, before the first line', accent: true },
      { label: 'Sandbox integration', sub: 'the partner builds alone with the documentation; its errors in its own log' },
      { label: 'Review', sub: 'log reread together, errors, idempotency checked, webhooks acknowledged' },
      { label: 'Production key', sub: 'activated on a date, starting quota, first-week watch' },
    ], caption: 'Figure 1 · Six steps, and the third is the one always skipped: writing what this partner may do, in read and in write, and how many times per minute, before they have written a line. Everything else, key, sandbox, review, is the implementation of that sheet.', alt: 'Six steps: request and contract, account and test key, rights and quotas written (accented), sandbox integration, review, production key.' },
    porte: { caption: 'Figure 2 · Three partners, one chain of gates, and the same log line for every pass and every refusal. The carrier passes; the big client trying to change a price is stopped at the rights gate; the point-of-sale app exceeding its six hundred calls a minute receives a 429 with the delay before retrying, and loses nothing. The figures are a constructed example.' },
    couches: { title: 'An API open to partners, in five layers', layers: [
      { label: 'Partner', items: [{ name: 'Their ERP, their app, their script; their key, their webhook secret, their receiving address', sub: 'you do not control their code; you control what they may ask and what they receive' }] },
      { label: 'API gateway', items: [{ name: 'Encrypted connection, keys and tokens, rights per resource, quotas, schema per version, idempotency, log of every call', sub: 'the layer that protects; identical for every partner, and the only one they see', accent: true }] },
      { label: 'Your services', items: [{ name: 'The same services as your own application: orders, deliveries, invoices, catalogue; no “partner-special” route', sub: 'what a partner can do, a user with the same role can do; nothing more' }] },
      { label: 'Data', items: [{ name: 'The database, files, events; never exposed directly, filtered by the partner’s role', sub: 'the big client sees only its orders and invoices; the carrier does not see prices' }] },
      { label: 'Portal and supervision', items: [{ name: 'Documentation generated from the schema, sandbox, keys and secrets managed by the partner, log of its calls and webhooks, replay', sub: 'what the partner reads alone instead of calling you; what you read every week' }] },
    ], caption: 'Figure 3 · The gateway is the accented layer, but the rule that holds everything is in the third: there is no special route for partners. A partner is a user with a role, going through the same services and the same rules; the gateway adds the key, the quota, the version and the log.', alt: 'Five layers: partner, API gateway (accented), your services, data, portal and supervision.' },
    droits: { title: 'Six partners, and what each is allowed to do', columns: ['Read', 'Write · quota · webhooks received'], rows: [
      { label: 'Carrier', cells: ['orders to ship, addresses, time slots; never prices or margins', 'delivery status, proof, incident · 300 calls / min · order.shipped, order.cancelled'] },
      { label: 'Big B2B client', cells: ['its catalogue at negotiated prices, its orders, its invoices; nothing of other clients', 'create an order, cancel it before preparation · 120 / min · order.confirmed, invoice.issued'] },
      { label: 'Accounting firm', cells: ['invoices, credit notes, payments, exports per period', 'nothing · 60 / min · invoice.issued, credit_note.issued, payment.received'] },
      { label: 'Reseller or marketplace', cells: ['available stock, reseller prices, product sheets', 'create an order, reserve stock 30 min · 600 / min · stock.changed, price.changed'] },
      { label: 'Third-party point of sale', cells: ['catalogue, the day’s promotions', 'sales, payments, closings · 600 / min · catalogue.changed'] },
      { label: 'Bank or payment aggregator', cells: ['nothing', 'nothing; it sends its signed webhooks and you verify them · inbound only'] },
    ], caption: 'Figure 4 · Each row is a rights sheet signed on both sides, and the server applies it, not the documentation. The carrier does not see prices, the accountant writes nothing, the big client sees only itself; quotas are starting points raised on request, with a date. The values are an example.', alt: 'Matrix of six partners: carrier, big client, accounting firm, reseller, point of sale, bank; what each reads, writes, its quota and webhooks.' },
    webhook: { caption: 'Figure 5 · A webhook is an attempt. This one succeeded on the third, ten minutes after the event, because the partner’s server was restarting; the signed header was the same each time, the partner verified the signature and would have ignored a duplicate delivery. Large payment platforms retry for up to three days with a growing gap, do not guarantee order, and ask for a quick 2xx answer; we do the same.' },
    calendrier: { title: 'Opening an API to partners in 2027, in weeks', unit: 'wk', items: [
      { label: 'API contract', note: 'resources, rights per partner type, starting quotas, versioning and deprecation policy, written and signed', from: 0, to: 1 },
      { label: 'Gateway', note: 'keys and tokens, rights per resource, quotas, log of every call; existing services behind, no special route', from: 1, to: 3, accent: true },
      { label: 'Sandbox and documentation', note: 'fake data, documentation generated from the schema, portal where the partner manages keys and reads its log', from: 3, to: 4 },
      { label: 'Signed webhooks', note: 'events, signature, attempts with a growing gap up to three days, replay from the portal', from: 4, to: 6 },
      { label: 'First partner', note: 'a carrier or a big client in sandbox then in production; log reread together every week', from: 6, to: 8 },
      { label: 'Version 1 frozen', note: 'v1 now changes only by addition; twelve months of support written; v2 exists only if a change requires it', from: 8, to: 10 },
    ], caption: 'Figure 6 · Ten weeks, two of them for the API contract and the gateway before any partner sees anything, and two for the first real partner. Version 1 is frozen at the end: it changes only by addition, and it is supported twelve months after the next one is announced, as commerce platforms that publish a version every quarter do.', alt: 'Ten-week timeline: API contract, gateway (accented), sandbox and documentation, signed webhooks, first partner, version 1 frozen.' },
  },
  ar: {
    cover: { eyebrow: 'API · شركاء · عمليات دمج · 2027', title: ['«ناقلي يريد', 'أن يتصل', 'بنظامي»'], subtitle: 'كيف تُفتح واجهة برمجية للشركاء، ناقلين وزبائن كبار ومكاتب محاسبة وتطبيقات خارجية، دون إعطائهم القاعدة: مفتاح لكل شريك، حقوق لكل مورد، حصص، webhooks موقَّعة ومُعادة، نسخ مؤرَّخة، بيئة تجريبية ووثائق يقرؤونها وحدهم', left: { label: 'وصول إلى القاعدة «للإسراع»', sub: 'ولا أحد يعرف من يقرأ ماذا' }, right: { label: 'ستة أبواب وسجل', sub: 'الشريك يرى الواجهة لا النظام' } },
    etapes: { title: 'وصل شريك، في ست خطوات', items: [
      { label: 'الطلب والعقد', sub: 'ما يقرؤه الشريك ويكتبه، بأي تواتر؛ موقَّع من الجانبين' },
      { label: 'حساب ومفتاح اختبار', sub: 'حساب شريك، مفتاح بيئة تجريبية، بيانات وهمية تشبه الحقيقية' },
      { label: 'حقوق وحصص مكتوبة', sub: 'قراءة أو كتابة لكل مورد، استدعاءات في الدقيقة واليوم، تُكتب قبل أول سطر', accent: true },
      { label: 'دمج في البيئة التجريبية', sub: 'الشريك يطوّر وحده بالوثائق؛ أخطاؤه في سجله' },
      { label: 'مراجعة', sub: 'السجل يُعاد قراءته معاً، الأخطاء، عدم التكرار، webhooks مُقرّ بها' },
      { label: 'مفتاح الإنتاج', sub: 'يُفعَّل في تاريخ، حصة بداية، مراقبة الأسبوع الأول' },
    ], caption: 'الشكل 1 · ست خطوات، والثالثة هي التي تُتخطى دائماً: كتابة ما يحق لهذا الشريك فعله، قراءةً وكتابةً، وكم مرة في الدقيقة، قبل أن يكتب سطراً. وكل الباقي، المفتاح والبيئة التجريبية والمراجعة، تنفيذ لتلك الورقة.', alt: 'ست خطوات: الطلب والعقد، حساب ومفتاح اختبار، حقوق وحصص مكتوبة (مميزة)، دمج في البيئة التجريبية، مراجعة، مفتاح الإنتاج.' },
    porte: { caption: 'الشكل 2 · ثلاثة شركاء، سلسلة أبواب واحدة، وسطر السجل نفسه لكل مرور وكل رفض. الناقل يمر؛ الزبون الكبير الذي يحاول تعديل سعر يُوقَف عند باب الحقوق؛ تطبيق الصندوق الذي يتجاوز استدعاءاته الستمئة في الدقيقة يتلقى 429 مع مهلة قبل إعادة المحاولة، ولا يخسر شيئاً. والأرقام مثال مبني.' },
    couches: { title: 'واجهة مفتوحة للشركاء، في خمس طبقات', layers: [
      { label: 'الشريك', items: [{ name: 'نظامه، تطبيقه، برنامجه النصي؛ مفتاحه، سر الـ webhook الخاص به، عنوان استقباله', sub: 'لا تتحكمون في كوده؛ تتحكمون فيما يستطيع طلبه وما يتلقاه' }] },
      { label: 'بوابة الواجهة', items: [{ name: 'اتصال مشفَّر، مفاتيح ورموز، حقوق لكل مورد، حصص، مخطط لكل نسخة، عدم تكرار، سجل لكل استدعاء', sub: 'الطبقة التي تحمي؛ متطابقة لكل الشركاء، والوحيدة التي يرونها', accent: true }] },
      { label: 'خدماتكم', items: [{ name: 'الخدمات نفسها التي لتطبيقكم: الطلبيات، التسليمات، الفواتير، الكتالوج؛ لا مسار «خاص بالشركاء»', sub: 'ما يستطيع الشريك فعله يستطيعه مستعمل بالدور نفسه؛ لا أكثر' }] },
      { label: 'البيانات', items: [{ name: 'القاعدة، الملفات، الأحداث؛ لا تُكشف مباشرة أبداً، مرشَّحة بدور الشريك', sub: 'الزبون الكبير لا يرى إلا طلبياته وفواتيره؛ والناقل لا يرى الأسعار' }] },
      { label: 'البوابة والإشراف', items: [{ name: 'وثائق مولَّدة من المخطط، بيئة تجريبية، مفاتيح وأسرار يديرها الشريك، سجل استدعاءاته وwebhooks، إعادة', sub: 'ما يقرؤه الشريك وحده بدل أن يتصل بكم؛ وما تقرؤونه كل أسبوع' }] },
    ], caption: 'الشكل 3 · البوابة هي الطبقة المميزة، لكن القاعدة التي تحمل كل شيء في الثالثة: لا مسار خاصاً للشركاء. الشريك مستعمل بدور، يمر بالخدمات نفسها والقواعد نفسها؛ والبوابة تضيف المفتاح والحصة والنسخة والسجل.', alt: 'خمس طبقات: الشريك، بوابة الواجهة (مميزة)، خدماتكم، البيانات، البوابة والإشراف.' },
    droits: { title: 'ستة شركاء، وما يحق لكل منهم فعله', columns: ['قراءة', 'كتابة · حصة · webhooks مستلَمة'], rows: [
      { label: 'الناقل', cells: ['الطلبيات الجاهزة للشحن، العناوين، الفترات؛ لا الأسعار ولا الهوامش أبداً', 'حالة التسليم، الإثبات، الحادث · 300 استدعاء / د · commande.expediee، commande.annulee'] },
      { label: 'زبون كبير B2B', cells: ['كتالوجه بالأسعار المتفاوَض عليها، طلبياته، فواتيره؛ لا شيء من الزبائن الآخرين', 'إنشاء طلبية، إلغاؤها قبل التحضير · 120 / د · commande.confirmee، facture.emise'] },
      { label: 'مكتب المحاسبة', cells: ['الفواتير، إشعارات الدائن، التسديدات، التصديرات حسب الفترة', 'لا شيء · 60 / د · facture.emise، avoir.emis، reglement.recu'] },
      { label: 'موزّع أو منصة تجارية', cells: ['المخزون المتاح، أسعار الموزّع، بطاقات المنتجات', 'إنشاء طلبية، حجز مخزون 30 دقيقة · 600 / د · stock.change، prix.change'] },
      { label: 'تطبيق صندوق خارجي', cells: ['الكتالوج، عروض اليوم', 'المبيعات، التحصيلات، الإقفالات · 600 / د · catalogue.change'] },
      { label: 'بنك أو مجمّع دفع', cells: ['لا شيء', 'لا شيء؛ يرسل webhooks موقَّعة وأنتم تتحققون منها · واردة فقط'] },
    ], caption: 'الشكل 4 · كل سطر ورقة حقوق موقَّعة من الجانبين، والخادم هو من يطبّقها لا الوثائق. الناقل لا يرى الأسعار، والمحاسب لا يكتب شيئاً، والزبون الكبير لا يرى إلا نفسه؛ والحصص نقاط بداية تُرفع عند الطلب بتاريخ. والقيم مثال.', alt: 'مصفوفة ستة شركاء: ناقل، زبون كبير، مكتب محاسبة، موزّع، تطبيق صندوق، بنك؛ ما يقرؤه كل منهم ويكتبه وحصته وwebhooks.' },
    webhook: { caption: 'الشكل 5 · الـ webhook محاولة. هذا نجح في الثالثة، بعد عشر دقائق من الحدث، لأن خادم الشريك كان يعيد التشغيل؛ والترويسة الموقَّعة كانت نفسها كل مرة، وتحقق الشريك من التوقيع وكان سيتجاهل تسليماً مكرراً. منصات الدفع الكبرى تعيد المحاولة حتى ثلاثة أيام بفاصل متزايد، ولا تضمن الترتيب، وتطلب رداً 2xx سريعاً؛ ونحن نفعل الشيء نفسه.' },
    calendrier: { title: 'فتح واجهة للشركاء سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'عقد الواجهة', note: 'الموارد، الحقوق لكل نوع شريك، حصص البداية، سياسة النسخ والإهمال، مكتوبة وموقَّعة', from: 0, to: 1 },
      { label: 'البوابة', note: 'مفاتيح ورموز، حقوق لكل مورد، حصص، سجل لكل استدعاء؛ الخدمات القائمة خلفها، لا مسار خاص', from: 1, to: 3, accent: true },
      { label: 'بيئة تجريبية ووثائق', note: 'بيانات وهمية، وثائق مولَّدة من المخطط، بوابة يدير فيها الشريك مفاتيحه ويقرأ سجله', from: 3, to: 4 },
      { label: 'webhooks موقَّعة', note: 'أحداث، توقيع، محاولات بفاصل متزايد حتى ثلاثة أيام، إعادة من البوابة', from: 4, to: 6 },
      { label: 'الشريك الأول', note: 'ناقل أو زبون كبير في البيئة التجريبية ثم في الإنتاج؛ السجل يُعاد قراءته معاً كل أسبوع', from: 6, to: 8 },
      { label: 'تجميد النسخة 1', note: 'v1 لا تتغير إلا بالإضافة؛ اثنا عشر شهراً من الدعم مكتوبة؛ v2 لا توجد إلا إن اقتضاها تغيير', from: 8, to: 10 },
    ], caption: 'الشكل 6 · عشرة أسابيع، اثنان منها لعقد الواجهة والبوابة قبل أن يرى أي شريك شيئاً، واثنان للشريك الحقيقي الأول. وتُجمَّد النسخة 1 في النهاية: لا تتغير إلا بالإضافة، وتُدعم اثني عشر شهراً بعد الإعلان عن التالية، كما تفعل منصات التجارة التي تنشر نسخة كل فصل.', alt: 'خط زمني من عشرة أسابيع: عقد الواجهة، البوابة (مميزة)، بيئة تجريبية ووثائق، webhooks موقَّعة، الشريك الأول، تجميد النسخة 1.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = PA[locale] || PA.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      porte: { svg: gate(e.gate, rtl), caption: t.porte.caption, alt: e.gate.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      droits: { svg: matrix({ title: t.droits.title, columns: t.droits.columns, rows: t.droits.rows, rtl }), caption: t.droits.caption, alt: t.droits.alt },
      webhook: { svg: webhook(e.webhook, rtl), caption: t.webhook.caption, alt: e.webhook.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 2, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
