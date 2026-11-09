import { cover, stats, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { journey, states, STRINGS as PF } from './custom/payment-flow.mjs';
export const slug = 'integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement';
const T = {
  fr: {
    cover: { eyebrow: 'Paiement en ligne · CIB · Edahabia · Intégration · 2027', title: ['Le client a payé.', 'Votre serveur', 'le sait-il ?'], subtitle: 'Comment on intègre le paiement par carte CIB et Edahabia dans une application en Algérie sans perdre un paiement ni en compter un deux fois : la page de paiement de la passerelle, le retour qui n’est qu’un indice, la confirmation côté serveur, le webhook signé, les états d’une commande, le rapprochement avec le relevé et le remboursement', left: { label: 'Le retour du navigateur', sub: 'un indice, qu’on ne croit pas' }, right: { label: 'La confirmation serveur', sub: 'la preuve, qu’on journalise' } },
    chiffres: { title: 'Ce que les documentations disent, en six repères', items: [
      { value: '< 24 h', label: 'décision du GIE Monétique sur une demande CIBWEB, selon le portail' },
      { value: '× 100', label: 'le montant envoyé à la passerelle SATIM est en centimes' },
      { value: '50 DA', label: 'montant minimum d’une transaction, selon la doc. tierce' },
      { value: 'HMAC', label: 'signature d’un webhook d’agrégateur : clé secrète, corps brut', accent: true },
      { value: '200', label: 'la réponse attendue par la passerelle pour arrêter de renvoyer' },
      { value: '1', label: 'intégration pour les deux cartes, CIB et Edahabia' },
    ], caption: 'Figure 1 · Six repères tirés des documentations publiques : le portail CIBWEB du GIE Monétique pour l’entrée, la documentation tierce de la passerelle SATIM pour les centimes et le minimum, la documentation d’un agrégateur algérien pour la signature des webhooks. Aucune grille de frais officielle n’est publiée ; elle se demande par écrit à la banque acquéreuse ou à l’agrégateur.', alt: 'Six repères : décision en moins de 24 h, montant × 100, minimum 50 DA, signature HMAC, réponse 200, une intégration pour deux cartes.' },
    parcours: { caption: 'Figure 2 · Le paiement traverse trois couloirs, et la seule station qui compte est la cinquième : votre serveur demande à la passerelle le statut réel de la commande. Le retour du navigateur, station quatre, est ce qu’on voit en premier et ce qu’on croit en dernier : un client qui ferme l’onglet après avoir payé n’y passe jamais, et la commande doit quand même devenir payée.' },
    couches: { title: 'Le paiement en ligne dans une application, en cinq couches', layers: [
      { label: 'Écran', items: [{ name: 'Le panier, le bouton payer, la page d’attente, la page de succès et la page d’échec', sub: 'l’écran affiche ; il ne décide jamais si une commande est payée' }] },
      { label: 'Votre serveur', items: [{ name: 'La commande et sa machine à états, le montant calculé côté serveur, la clé d’idempotence, le journal', sub: 'la seule couche qui écrit « payée », et seulement après avoir vérifié à la source', accent: true }] },
      { label: 'Passerelle', items: [{ name: 'La page de paiement hébergée, l’enregistrement de la commande, le statut, le remboursement ; SATIM en direct ou un agrégateur', sub: 'la carte du client n’entre jamais dans votre application' }] },
      { label: 'Banque et réseau', items: [{ name: 'La banque acquéreuse qui vous verse, la banque émettrice du client, le réseau interbancaire, le GIE Monétique qui autorise', sub: 'le contrat, les frais et le délai de versement se négocient ici, pas dans le code' }] },
      { label: 'Supervision', items: [{ name: 'Le rapprochement relevé ↔ commandes, les paiements en attente trop longtemps, les webhooks rejetés, les remboursements', sub: 'un écran lu chaque semaine ; ce qui ne se relie pas est une question, pas un oubli' }] },
    ], caption: 'Figure 3 · La couche accentuée est la vôtre : c’est elle qui tient la machine à états et qui décide ce qu’une commande est. L’écran ne décide rien, la passerelle garde la carte, la banque garde l’argent, et la supervision relie les trois chaque semaine.', alt: 'Cinq couches : écran, votre serveur (accentué), passerelle, banque et réseau, supervision.' },
    etats: { caption: 'Figure 4 · Sept états, et chaque flèche porte l’événement qui a le droit de la déclencher. Deux choses ne déclenchent rien : le retour du navigateur, qui est barré, et le second exemplaire d’un webhook, qui retombe sur le même état. Ce dessin est la pièce du cahier des charges que nous relisons avec le client avant d’écrire la première ligne.' },
    situations: { title: 'Six situations réelles, et ce que l’architecture fait', columns: ['Ce qui se passe', 'Ce que fait votre serveur'], rows: [
      { label: 'Le client paie puis ferme l’onglet', cells: ['Le retour vers votre site n’arrive jamais ; le client a pourtant été débité', 'le webhook ou la vérification planifiée du statut passe la commande à payée ; le reçu part par WhatsApp sans que le client revienne'] },
      { label: 'Deux clics sur « payer »', cells: ['Deux commandes, deux pages de paiement, parfois deux débits', 'une clé d’idempotence par panier : le second clic renvoie la même commande et la même page'] },
      { label: 'Le webhook arrive avant le retour', cells: ['La page de succès s’affiche alors que la commande est déjà payée depuis deux secondes', 'la page de succès lit l’état en base et l’affiche ; elle ne le modifie pas, l’ordre d’arrivée est indifférent'] },
      { label: 'Le même webhook arrive deux fois', cells: ['Deux reçus, deux lignes comptables, un stock décompté deux fois', 'signature vérifiée, identifiant de l’événement mémorisé ; la seconde livraison répond 200 et n’écrit rien'] },
      { label: 'Payé, mais le stock a disparu', cells: ['Le dernier article a été vendu au comptoir pendant le paiement', 'remboursement par l’API de la passerelle, état remboursée, message au client ; jamais un virement manuel'] },
      { label: 'La passerelle ne répond plus', cells: ['Les pages de paiement ne s’ouvrent pas ; les clients abandonnent', 'le paiement à la livraison ou le virement reste proposé ; les commandes en attente expirent proprement et libèrent le stock'] },
    ], caption: 'Figure 5 · Aucune de ces six situations n’est rare : les trois premières arrivent chaque semaine sur une boutique qui fonctionne. Toutes se résolvent par la même règle, un état ne change que sur un événement vérifié par le serveur, et par deux mécanismes, la clé d’idempotence et la signature du webhook.', alt: 'Matrice de six situations : onglet fermé, double clic, webhook avant le retour, webhook en double, stock disparu, passerelle en panne ; ce qui se passe et ce que fait le serveur.' },
    calendrier: { title: 'Intégrer le paiement en ligne en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Dossier et choix', note: 'compte CIBWEB, registre et e-fournisseur vérifiés ; SATIM en direct ou agrégateur, décidé par écrit avec les frais', from: 0, to: 1 },
      { label: 'Machine à états', note: 'commande, montants côté serveur, clé d’idempotence, pages de succès et d’échec ; en environnement de test', from: 1, to: 3, accent: true },
      { label: 'Confirmation et webhook', note: 'statut lu à la source, signature vérifiée, événements mémorisés, vérification planifiée des commandes en attente', from: 3, to: 5 },
      { label: 'Tests techniques', note: 'les tests d’intégration de la plateforme, puis l’autorisation d’entrée en exploitation', from: 5, to: 7 },
      { label: 'Rapprochement et remboursement', note: 'relevé ↔ commandes, liste des écarts, remboursement par API et état remboursée', from: 7, to: 8 },
      { label: 'Pilote à petits montants', note: 'paiements réels de l’équipe et de dix clients ; chaque écart lu chaque jour ; décision d’ouvrir à tous', from: 8, to: 10 },
    ], caption: 'Figure 6 · Dix semaines, dont les deux premières d’attente administrative se recouvrent avec le code en environnement de test. La machine à états est écrite avant le branchement à la passerelle ; c’est elle qu’on teste avec des webhooks simulés, et c’est elle qui ne change pas quand on change de passerelle.', alt: 'Frise de dix semaines : dossier et choix, machine à états (accentuée), confirmation et webhook, tests techniques, rapprochement et remboursement, pilote.' },
  },
  en: {
    cover: { eyebrow: 'Online payment · CIB · Edahabia · Integration · 2027', title: ['The customer paid.', 'Does your server', 'know it?'], subtitle: 'How CIB and Edahabia card payment is integrated into an application in Algeria without losing a payment or counting one twice: the gateway’s payment page, the return that is only a hint, server-side confirmation, the signed webhook, an order’s states, reconciliation with the statement and refunds', left: { label: 'The browser’s return', sub: 'a hint, not believed' }, right: { label: 'Server confirmation', sub: 'the proof, logged' } },
    chiffres: { title: 'What the documentation says, in six markers', items: [
      { value: '< 24 h', label: 'GIE Monétique decision on a CIBWEB request, per the portal' },
      { value: '× 100', label: 'the amount sent to the SATIM gateway is in centimes' },
      { value: '50 DA', label: 'minimum transaction amount, per third-party docs' },
      { value: 'HMAC', label: 'aggregator webhook signature: secret key over the raw body', accent: true },
      { value: '200', label: 'the response the gateway expects to stop resending' },
      { value: '1', label: 'integration for both cards, CIB and Edahabia' },
    ], caption: 'Figure 1 · Six markers from public documentation: GIE Monétique’s CIBWEB portal for the entry point, third-party documentation of the SATIM gateway for centimes and the minimum, an Algerian aggregator’s documentation for webhook signatures. No official fee grid is published; it is requested in writing from the acquiring bank or the aggregator.', alt: 'Six markers: decision under 24 h, amount × 100, minimum 50 DA, HMAC signature, response 200, one integration for two cards.' },
    parcours: { caption: 'Figure 2 · The payment crosses three lanes, and the only station that counts is the fifth: your server asks the gateway for the order’s real status. The browser’s return, station four, is what you see first and believe last: a customer who closes the tab after paying never passes through it, and the order must still become paid.' },
    couches: { title: 'Online payment in an application, in five layers', layers: [
      { label: 'Screen', items: [{ name: 'The basket, the pay button, the waiting page, the success page and the failure page', sub: 'the screen displays; it never decides whether an order is paid' }] },
      { label: 'Your server', items: [{ name: 'The order and its state machine, the amount computed server-side, the idempotency key, the log', sub: 'the only layer that writes “paid”, and only after checking at the source', accent: true }] },
      { label: 'Gateway', items: [{ name: 'The hosted payment page, order registration, status, refund; SATIM directly or an aggregator', sub: 'the customer’s card never enters your application' }] },
      { label: 'Bank and network', items: [{ name: 'The acquiring bank that pays you, the customer’s issuing bank, the interbank network, GIE Monétique that authorises', sub: 'the contract, fees and settlement delay are negotiated here, not in code' }] },
      { label: 'Supervision', items: [{ name: 'Statement ↔ orders reconciliation, payments pending too long, rejected webhooks, refunds', sub: 'a screen read every week; what does not match is a question, not an oversight' }] },
    ], caption: 'Figure 3 · The accented layer is yours: it holds the state machine and decides what an order is. The screen decides nothing, the gateway keeps the card, the bank keeps the money, and supervision links the three every week.', alt: 'Five layers: screen, your server (accented), gateway, bank and network, supervision.' },
    etats: { caption: 'Figure 4 · Seven states, and each arrow carries the event allowed to trigger it. Two things trigger nothing: the browser’s return, which is crossed out, and the second copy of a webhook, which lands on the same state. This drawing is the piece of the specification we reread with the client before writing the first line.' },
    situations: { title: 'Six real situations, and what the architecture does', columns: ['What happens', 'What your server does'], rows: [
      { label: 'Customer pays then closes the tab', cells: ['The return to your site never arrives; the customer was charged anyway', 'the webhook or the scheduled status check moves the order to paid; the receipt goes out on WhatsApp without the customer coming back'] },
      { label: 'Two clicks on “pay”', cells: ['Two orders, two payment pages, sometimes two charges', 'one idempotency key per basket: the second click returns the same order and the same page'] },
      { label: 'Webhook arrives before the return', cells: ['The success page shows while the order has already been paid for two seconds', 'the success page reads the state from the database and displays it; it does not change it, arrival order is irrelevant'] },
      { label: 'The same webhook arrives twice', cells: ['Two receipts, two accounting lines, stock deducted twice', 'signature verified, event id remembered; the second delivery answers 200 and writes nothing'] },
      { label: 'Paid, but the stock is gone', cells: ['The last item was sold at the counter during the payment', 'refund through the gateway’s API, refunded state, message to the customer; never a manual transfer'] },
      { label: 'The gateway stops responding', cells: ['Payment pages do not open; customers give up', 'cash on delivery or bank transfer stays offered; pending orders expire cleanly and release stock'] },
    ], caption: 'Figure 5 · None of these six situations is rare: the first three happen every week on a shop that works. All are solved by the same rule, a state changes only on an event verified by the server, and by two mechanisms, the idempotency key and the webhook signature.', alt: 'Matrix of six situations: tab closed, double click, webhook before return, duplicate webhook, stock gone, gateway down; what happens and what the server does.' },
    calendrier: { title: 'Integrating online payment in 2027, in weeks', unit: 'wk', items: [
      { label: 'File and choice', note: 'CIBWEB account, register and e-supplier checked; SATIM directly or aggregator, decided in writing with fees', from: 0, to: 1 },
      { label: 'State machine', note: 'order, server-side amounts, idempotency key, success and failure pages; in the test environment', from: 1, to: 3, accent: true },
      { label: 'Confirmation and webhook', note: 'status read at the source, signature verified, events remembered, scheduled check of pending orders', from: 3, to: 5 },
      { label: 'Technical tests', note: 'the platform’s integration tests, then the authorisation to go live', from: 5, to: 7 },
      { label: 'Reconciliation and refund', note: 'statement ↔ orders, list of gaps, refund through the API and refunded state', from: 7, to: 8 },
      { label: 'Small-amount pilot', note: 'real payments by the team and ten customers; every gap read daily; decision to open to all', from: 8, to: 10 },
    ], caption: 'Figure 6 · Ten weeks, the first two of administrative waiting overlapping with code in the test environment. The state machine is written before connecting to the gateway; it is what gets tested with simulated webhooks, and what does not change when you change gateway.', alt: 'Ten-week timeline: file and choice, state machine (accented), confirmation and webhook, technical tests, reconciliation and refund, pilot.' },
  },
  ar: {
    cover: { eyebrow: 'الدفع الإلكتروني · CIB · الذهبية · دمج · 2027', title: ['الزبون دفع.', 'هل يعرف', 'خادمكم ذلك؟'], subtitle: 'كيف يُدمج الدفع ببطاقة CIB والذهبية في تطبيق في الجزائر دون ضياع دفعة أو عدّها مرتين: صفحة دفع البوابة، العودة التي ليست إلا إشارة، التأكيد في الخادم، الـ webhook الموقَّع، حالات الطلبية، المطابقة مع الكشف والاسترداد', left: { label: 'عودة المتصفح', sub: 'إشارة لا نصدّقها' }, right: { label: 'تأكيد الخادم', sub: 'الدليل الذي نسجّله' } },
    chiffres: { title: 'ما تقوله الوثائق، في ستة معالم', items: [
      { value: '< 24 س', label: 'قرار GIE Monétique في طلب CIBWEB، حسب البوابة' },
      { value: '× 100', label: 'المبلغ المرسل إلى بوابة SATIM بالسنتيم' },
      { value: '50 دج', label: 'الحد الأدنى للمعاملة، حسب وثائق طرف ثالث' },
      { value: 'HMAC', label: 'توقيع webhook المجمّع: مفتاح سري على النص الخام', accent: true },
      { value: '200', label: 'الرد الذي تنتظره البوابة لتتوقف عن الإعادة' },
      { value: '1', label: 'دمج واحد للبطاقتين، CIB والذهبية' },
    ], caption: 'الشكل 1 · ستة معالم من وثائق عامة: بوابة CIBWEB التابعة لـ GIE Monétique للدخول، وثائق طرف ثالث لبوابة SATIM للسنتيم والحد الأدنى، ووثائق مجمّع جزائري لتوقيع webhooks. لا تُنشر شبكة رسوم رسمية؛ تُطلب كتابةً من البنك المستحوذ أو المجمّع.', alt: 'ستة معالم: قرار في أقل من 24 ساعة، المبلغ × 100، حد أدنى 50 دج، توقيع HMAC، رد 200، دمج واحد لبطاقتين.' },
    parcours: { caption: 'الشكل 2 · تعبر الدفعة ثلاثة مسارات، والمحطة الوحيدة التي تهم هي الخامسة: خادمكم يسأل البوابة عن الحالة الحقيقية للطلبية. وعودة المتصفح، المحطة الرابعة، هي ما يُرى أولاً ويُصدَّق آخراً: الزبون الذي يغلق التبويب بعد الدفع لا يمر بها أبداً، ويجب أن تصير الطلبية مدفوعة مع ذلك.' },
    couches: { title: 'الدفع الإلكتروني في تطبيق، في خمس طبقات', layers: [
      { label: 'الشاشة', items: [{ name: 'السلة، زر الدفع، صفحة الانتظار، صفحة النجاح وصفحة الفشل', sub: 'الشاشة تعرض؛ ولا تقرر أبداً إن كانت الطلبية مدفوعة' }] },
      { label: 'خادمكم', items: [{ name: 'الطلبية وآلة حالاتها، المبلغ المحسوب في الخادم، مفتاح عدم التكرار، السجل', sub: 'الطبقة الوحيدة التي تكتب «مدفوعة»، وبعد التحقق من المصدر فقط', accent: true }] },
      { label: 'البوابة', items: [{ name: 'صفحة الدفع المستضافة، تسجيل الطلبية، الحالة، الاسترداد؛ SATIM مباشرة أو مجمّع', sub: 'بطاقة الزبون لا تدخل تطبيقكم أبداً' }] },
      { label: 'البنك والشبكة', items: [{ name: 'البنك المستحوذ الذي يدفع لكم، البنك المصدر للزبون، الشبكة البينية للبنوك، GIE Monétique الذي يرخّص', sub: 'العقد والرسوم وأجل التحويل تُتفاوَض هنا لا في الكود' }] },
      { label: 'الإشراف', items: [{ name: 'مطابقة الكشف ↔ الطلبيات، الدفعات المعلَّقة طويلاً، webhooks المرفوضة، الاستردادات', sub: 'شاشة تُقرأ كل أسبوع؛ ما لا يتطابق سؤال لا سهو' }] },
    ], caption: 'الشكل 3 · الطبقة المميزة هي طبقتكم: هي التي تحمل آلة الحالات وتقرر ما الطلبية. الشاشة لا تقرر شيئاً، والبوابة تحتفظ بالبطاقة، والبنك يحتفظ بالمال، والإشراف يربط الثلاثة كل أسبوع.', alt: 'خمس طبقات: الشاشة، خادمكم (مميز)، البوابة، البنك والشبكة، الإشراف.' },
    etats: { caption: 'الشكل 4 · سبع حالات، وكل سهم يحمل الحدث الذي يحق له إطلاقه. شيئان لا يطلقان شيئاً: عودة المتصفح، المشطوبة، والنسخة الثانية من webhook التي تعود إلى الحالة نفسها. هذا الرسم هو الجزء من دفتر الشروط الذي نعيد قراءته مع الزبون قبل كتابة أول سطر.' },
    situations: { title: 'ست حالات حقيقية، وما تفعله الهندسة', columns: ['ما يحدث', 'ما يفعله خادمكم'], rows: [
      { label: 'الزبون يدفع ثم يغلق التبويب', cells: ['العودة إلى موقعكم لا تصل أبداً؛ ومع ذلك خُصم من الزبون', 'الـ webhook أو الفحص المجدوَل للحالة ينقل الطلبية إلى مدفوعة؛ الوصل يُرسل على WhatsApp دون أن يعود الزبون'] },
      { label: 'نقرتان على «ادفع»', cells: ['طلبيتان، صفحتا دفع، وأحياناً خصمان', 'مفتاح عدم تكرار لكل سلة: النقرة الثانية تعيد الطلبية نفسها والصفحة نفسها'] },
      { label: 'الـ webhook يصل قبل العودة', cells: ['صفحة النجاح تظهر والطلبية مدفوعة منذ ثانيتين', 'صفحة النجاح تقرأ الحالة من القاعدة وتعرضها؛ لا تغيّرها، وترتيب الوصول لا يهم'] },
      { label: 'الـ webhook نفسه يصل مرتين', cells: ['وصلان، سطران محاسبيان، مخزون خُصم مرتين', 'التوقيع مُتحقَّق منه، معرّف الحدث محفوظ؛ التسليم الثاني يجيب 200 ولا يكتب شيئاً'] },
      { label: 'مدفوعة، لكن المخزون اختفى', cells: ['آخر قطعة بيعت في المحل أثناء الدفع', 'استرداد عبر واجهة البوابة، حالة مستردَّة، رسالة للزبون؛ لا تحويل يدوي أبداً'] },
      { label: 'البوابة لا تستجيب', cells: ['صفحات الدفع لا تُفتح؛ الزبائن يتخلون', 'الدفع عند التسليم أو التحويل يبقى مقترَحاً؛ الطلبيات المعلَّقة تنتهي بنظافة وتحرر المخزون'] },
    ], caption: 'الشكل 5 · لا واحدة من هذه الحالات الست نادرة: الثلاث الأولى تحدث كل أسبوع في متجر يعمل. وكلها تُحل بالقاعدة نفسها، لا تتغير الحالة إلا بحدث يتحقق منه الخادم، وبآليتين، مفتاح عدم التكرار وتوقيع webhook.', alt: 'مصفوفة ست حالات: تبويب مغلق، نقرتان، webhook قبل العودة، webhook مكرر، مخزون مختفٍ، بوابة معطلة؛ ما يحدث وما يفعله الخادم.' },
    calendrier: { title: 'دمج الدفع الإلكتروني سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الملف والاختيار', note: 'حساب CIBWEB، السجل والمورّد الإلكتروني مُتحقَّق منهما؛ SATIM مباشرة أو مجمّع، يُقرَّر كتابةً مع الرسوم', from: 0, to: 1 },
      { label: 'آلة الحالات', note: 'الطلبية، المبالغ في الخادم، مفتاح عدم التكرار، صفحتا النجاح والفشل؛ في بيئة الاختبار', from: 1, to: 3, accent: true },
      { label: 'التأكيد والـ webhook', note: 'الحالة تُقرأ من المصدر، التوقيع مُتحقَّق منه، الأحداث محفوظة، فحص مجدوَل للطلبيات المعلَّقة', from: 3, to: 5 },
      { label: 'الاختبارات التقنية', note: 'اختبارات دمج المنصة، ثم ترخيص الدخول في الاستغلال', from: 5, to: 7 },
      { label: 'المطابقة والاسترداد', note: 'الكشف ↔ الطلبيات، قائمة الفوارق، الاسترداد عبر الواجهة وحالة مستردَّة', from: 7, to: 8 },
      { label: 'تجريب بمبالغ صغيرة', note: 'دفعات حقيقية من الفريق وعشرة زبائن؛ كل فارق يُقرأ يومياً؛ قرار الفتح للجميع', from: 8, to: 10 },
    ], caption: 'الشكل 6 · عشرة أسابيع، الأسبوعان الأولان من الانتظار الإداري يتداخلان مع الكود في بيئة الاختبار. تُكتب آلة الحالات قبل الوصل بالبوابة؛ وهي ما يُختبر بـ webhooks محاكاة، وهي ما لا يتغير حين تغيّرون البوابة.', alt: 'خط زمني من عشرة أسابيع: الملف والاختيار، آلة الحالات (مميزة)، التأكيد والـ webhook، الاختبارات التقنية، المطابقة والاسترداد، التجريب.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = PF[locale] || PF.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      chiffres: { svg: stats({ title: t.chiffres.title, items: t.chiffres.items, rtl }), caption: t.chiffres.caption, alt: t.chiffres.alt },
      parcours: { svg: journey(e.journey, rtl), caption: t.parcours.caption, alt: e.journey.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      etats: { svg: states(e.states, rtl), caption: t.etats.caption, alt: e.states.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 2, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
