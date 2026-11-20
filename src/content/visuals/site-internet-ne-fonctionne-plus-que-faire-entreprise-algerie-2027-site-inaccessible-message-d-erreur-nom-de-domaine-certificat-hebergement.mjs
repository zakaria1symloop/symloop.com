import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { trajet, decouverte, STRINGS as SC } from './custom/sitepanne.mjs';
export const slug = 'site-internet-ne-fonctionne-plus-que-faire-entreprise-algerie-2027-site-inaccessible-message-d-erreur-nom-de-domaine-certificat-hebergement';
const T = {
  fr: {
    cover: { eyebrow: 'Site en panne · Algérie · 2027', title: ['Mon site ne fonctionne plus', 'cinq maillons, un message d’erreur'], subtitle: 'Vérifier d’ailleurs, lire le message, savoir qui appeler, et l’apprendre avant vos clients', left: { label: 'Appris par un client', sub: '35 heures d’arrêt' }, right: { label: 'Appris par une alerte', sub: '45 minutes' } },
    ordre: { title: 'D’abord d’ailleurs, puis cinq maillons dans l’ordre', items: [
      { label: 'Autre réseau', sub: 'le téléphone en 4G : est-ce seulement chez vous ?', accent: true },
      { label: 'Nom de domaine', sub: 'date d’expiration, renouvellement' },
      { label: 'DNS', sub: 'le nom mène-t-il au bon serveur ?' },
      { label: 'Hébergement', sub: 'compte actif, serveur qui répond, disque' },
      { label: 'Certificat', sub: 'date de fin, renouvellement' },
      { label: 'Application', sub: 'dernière mise à jour, base de données' },
    ], caption: 'Figure 1 · Le temps accentué est le premier : ouvrir le site depuis un autre réseau, pour savoir si la panne est chez vous ou sur le site. Les cinq suivants remontent le chemin d’une visite, du nom de domaine à l’application : on vérifie d’abord ce qui est le plus en amont, parce que rien ne fonctionne derrière.', alt: 'Six temps : autre réseau (accentué), nom de domaine, DNS, hébergement, certificat, application.' },
    trajet: { caption: 'Figure 2 · Cinq maillons qu’une visite traverse dans l’ordre. Chaque ligne montre jusqu’où elle arrive quand un maillon casse, ce que le visiteur voit alors, et qui doit agir. Plus la barre est courte, plus la cause est en amont. Messages tels que Chrome les affiche ; exemple construit.' },
    messages: { title: 'Lire le message d’erreur : il dit où chercher', columns: ['Ce que cela veut dire', 'Où chercher, qui appeler'], rows: [
      { label: '« Ce site est inaccessible » · NXDOMAIN', cells: ['le nom du site ne mène à aucune adresse', 'nom de domaine, puis zone DNS : bureau d’enregistrement'] },
      { label: '« Délai dépassé » · connexion refusée', cells: ['le nom mène à un serveur, qui ne répond pas', 'hébergeur : compte suspendu, serveur arrêté, pare-feu'] },
      { label: '« Votre connexion n’est pas privée »', cells: ['le certificat est expiré, ou ne correspond pas au nom du site', 'hébergeur ou prestataire : renouveler le certificat'] },
      { label: 'Erreur 500 · page blanche', cells: ['le serveur répond, l’application a rencontré une erreur', 'développeur : dernière mise à jour, journal d’erreurs'] },
      { label: 'Erreurs 502, 503, 504', cells: ['serveur surchargé, en maintenance, ou qui attend une réponse', 'hébergeur d’abord : charge, mémoire, disque, base de données'] },
      { label: 'Erreur 404 sur une page précise', cells: ['le site fonctionne ; cette page-là n’existe plus', 'celui qui gère le contenu : lien cassé, page renommée'] },
    ], caption: 'Figure 3 · Six messages, du plus en amont au plus en aval. Les trois premiers viennent du navigateur : le site n’a pas été atteint, ou pas en sécurité. Les trois suivants viennent du serveur : il a répondu, avec un code à trois chiffres. Notez le message mot pour mot avant d’appeler.', alt: 'Matrice de six messages d’erreur, avec ce qu’ils veulent dire et où chercher : site inaccessible, délai dépassé, connexion non privée, erreur 500, erreurs 502 à 504, erreur 404.' },
    decouverte: { caption: 'Figure 4 · La même panne, deux fois : un certificat qui expire un vendredi à 23 heures. Sans surveillance, on l’apprend le dimanche matin par un client, et le site reste arrêté 35 heures. Avec un test chaque minute, l’alerte part trois minutes plus tard, et tout est rétabli en 45 minutes. Heures, délais et visites sont un exemple construit.' },
    couches: { title: 'Ce qui tient un site debout, en cinq couches', layers: [
      { label: 'Nom et DNS', items: [{ name: 'Au nom de l’entreprise, renouvellement automatique, alerte soixante jours avant, modifications notées', sub: 'le maillon le plus en amont ne lâche pas' }] },
      { label: 'Hébergement', items: [{ name: 'Compte au nom de l’entreprise, facture suivie, disque et mémoire surveillés, sauvegardes hors du serveur', sub: 'ni suspension, ni disque plein un vendredi soir' }] },
      { label: 'Certificat', items: [{ name: 'Renouvellement automatique, vérifié après chaque passage, alerte trente jours avant la date de fin', sub: 'les certificats durent de moins en moins longtemps' }] },
      { label: 'Application', items: [{ name: 'Mises à jour essayées sur une copie, retour arrière en un geste, journal d’erreurs lu', sub: 'une mise à jour ratée se défait en cinq minutes' }] },
      { label: 'Surveillance', items: [{ name: 'Test extérieur chaque minute sur la vraie page, alerte à deux personnes, dates suivies', sub: 'on l’apprend avant les clients', accent: true }] },
    ], caption: 'Figure 5 · La couche accentuée est la surveillance : sans elle, les quatre autres lâchent sans bruit. Les trois premières sont des échéances et des comptes à tenir au nom de l’entreprise ; la quatrième est une méthode de mise à jour ; la cinquième dit, chaque minute, si l’ensemble tient.', alt: 'Cinq couches : nom et DNS ; hébergement ; certificat ; application ; surveillance (accentuée).' },
    heure: { title: 'La première heure, minute par minute', unit: 'min', items: [
      { label: 'Noter et vérifier d’ailleurs', note: 'message d’erreur mot pour mot, heure, essai depuis le téléphone en 4G, question à quelqu’un hors de l’entreprise', from: 0, to: 5, accent: true },
      { label: 'Nom de domaine et DNS', note: 'date d’expiration, bureau d’enregistrement, enregistrements de la zone, dernier changement', from: 5, to: 15 },
      { label: 'Hébergement', note: 'espace client, facture, état du serveur, disque, puis un ticket qui cite le message exact et l’heure', from: 15, to: 30 },
      { label: 'Certificat et application', note: 'date du certificat, renouvellement relancé, dernière mise à jour annulée, journal d’erreurs', from: 30, to: 50 },
      { label: 'Vérifier et prévenir', note: 'site ouvert depuis deux réseaux, formulaire essayé, clients prévenus, cause notée', from: 50, to: 60 },
    ], caption: 'Figure 6 · Une heure dans l’exemple. La période accentuée est la première : cinq minutes pour noter le message et vérifier depuis un autre réseau, qui évitent d’appeler la mauvaise personne. Toutes les pannes ne tiennent pas dans une heure ; celles qui durent sont souvent celles dont personne n’a les accès.', alt: 'Calendrier d’une heure : noter et vérifier d’ailleurs (accentué, cinq minutes), nom de domaine et DNS, hébergement, certificat et application, vérifier et prévenir.' },
  },
  en: {
    cover: { eyebrow: 'Website down · Algeria · 2027', title: ['My website has stopped working', 'five links, one error message'], subtitle: 'Check from elsewhere, read the message, know who to call, and find out before your customers', left: { label: 'Heard from a customer', sub: '35 hours down' }, right: { label: 'Heard from an alert', sub: '45 minutes' } },
    ordre: { title: 'First from elsewhere, then five links in order', items: [
      { label: 'Another network', sub: 'your phone on 4G: is it only at your end?', accent: true },
      { label: 'Domain name', sub: 'expiry date, renewal' },
      { label: 'DNS', sub: 'does the name lead to the right server?' },
      { label: 'Hosting', sub: 'active account, server answering, disk' },
      { label: 'Certificate', sub: 'end date, renewal' },
      { label: 'Application', sub: 'last update, database' },
    ], caption: 'Figure 1 · The accented step is the first: open the site from another network, to know whether the fault is at your end or on the site. The next five go up the path of a visit, from the domain name to the application: you check what is furthest upstream first, because nothing works behind it.', alt: 'Six steps: another network (accented), domain name, DNS, hosting, certificate, application.' },
    trajet: { caption: 'Figure 2 · Five links a visit crosses in order. Each row shows how far it gets when a link breaks, what the visitor then sees, and who has to act. The shorter the bar, the further upstream the cause. Messages as Chrome displays them; constructed example.' },
    messages: { title: 'Reading the error message: it says where to look', columns: ['What it means', 'Where to look, who to call'], rows: [
      { label: '“This site can’t be reached” · NXDOMAIN', cells: ['the site’s name leads to no address', 'domain name, then DNS zone: the registrar'] },
      { label: '“Timed out” · connection refused', cells: ['the name leads to a server, which does not answer', 'host: account suspended, server stopped, firewall'] },
      { label: '“Your connection is not private”', cells: ['the certificate has expired, or does not match the site’s name', 'host or provider: renew the certificate'] },
      { label: 'Error 500 · blank page', cells: ['the server answers, the application hit an error', 'developer: last update, error log'] },
      { label: 'Errors 502, 503, 504', cells: ['server overloaded, in maintenance, or waiting for an answer', 'host first: load, memory, disk, database'] },
      { label: 'Error 404 on one particular page', cells: ['the site works; that page no longer exists', 'whoever manages the content: broken link, renamed page'] },
    ], caption: 'Figure 3 · Six messages, from the furthest upstream to the furthest downstream. The first three come from the browser: the site was not reached, or not safely. The next three come from the server: it answered, with a three-digit code. Note the message word for word before calling.', alt: 'Matrix of six error messages, with what they mean and where to look: site can’t be reached, timed out, connection not private, error 500, errors 502 to 504, error 404.' },
    decouverte: { caption: 'Figure 4 · The same outage, twice: a certificate that expires on a Friday at 11 pm. Without monitoring, you hear about it on Sunday morning from a customer, and the site stays down for 35 hours. With a test every minute, the alert goes out three minutes later, and everything is restored in 45 minutes. Times, delays and visits are a constructed example.' },
    couches: { title: 'What keeps a site up, in five layers', layers: [
      { label: 'Name and DNS', items: [{ name: 'In the company’s name, automatic renewal, alert sixty days before, changes noted', sub: 'the link furthest upstream does not give way' }] },
      { label: 'Hosting', items: [{ name: 'Account in the company’s name, invoice followed, disk and memory watched, backups off the server', sub: 'no suspension, no full disk on a Friday night' }] },
      { label: 'Certificate', items: [{ name: 'Automatic renewal, checked after each run, alert thirty days before the end date', sub: 'certificates last less and less long' }] },
      { label: 'Application', items: [{ name: 'Updates tried on a copy, rollback in one action, error log actually read', sub: 'a failed update is undone in five minutes' }] },
      { label: 'Monitoring', items: [{ name: 'Outside test every minute on the real page, alert to two people, dates followed', sub: 'you find out before the customers', accent: true }] },
    ], caption: 'Figure 5 · The accented layer is monitoring: without it, the other four give way silently. The first three are due dates and accounts to keep in the company’s name; the fourth is a way of updating; the fifth says, every minute, whether the whole thing holds.', alt: 'Five layers: name and DNS; hosting; certificate; application; monitoring (accented).' },
    heure: { title: 'The first hour, minute by minute', unit: 'min', items: [
      { label: 'Note and check from elsewhere', note: 'error message word for word, time, a try from your phone on 4G, a question to someone outside the company', from: 0, to: 5, accent: true },
      { label: 'Domain name and DNS', note: 'expiry date, registrar, records in the zone, last change', from: 5, to: 15 },
      { label: 'Hosting', note: 'customer area, invoice, server status, disk, then a ticket quoting the exact message and the time', from: 15, to: 30 },
      { label: 'Certificate and application', note: 'certificate date, renewal run again, last update rolled back, error log', from: 30, to: 50 },
      { label: 'Check and inform', note: 'site opened from two networks, a form tried, customers told, cause noted', from: 50, to: 60 },
    ], caption: 'Figure 6 · One hour in the example. The accented period is the first: five minutes to note the message and check from another network, which avoid calling the wrong person. Not every outage fits into an hour; the ones that last are often those for which nobody holds the access.', alt: 'One-hour calendar: note and check from elsewhere (accented, five minutes), domain name and DNS, hosting, certificate and application, check and inform.' },
  },
  ar: {
    cover: { eyebrow: 'موقع معطَّل · الجزائر · 2027', title: ['موقعي لم يعد يعمل', 'خمس حلقات، ورسالة خطأ واحدة'], subtitle: 'التحقق من مكان آخر، قراءة الرسالة، معرفة من نتصل به، والعلم بالعطل قبل زبائنكم', left: { label: 'عُلم به من زبون', sub: '35 ساعة توقف' }, right: { label: 'عُلم به من تنبيه', sub: '45 دقيقة' } },
    ordre: { title: 'أولاً من مكان آخر، ثم خمس حلقات بالترتيب', items: [
      { label: 'شبكة أخرى', sub: 'الهاتف على 4G: هل العطل عندكم فقط؟', accent: true },
      { label: 'اسم النطاق', sub: 'تاريخ الانتهاء، والتجديد' },
      { label: 'DNS', sub: 'هل يقود الاسم إلى الخادم الصحيح؟' },
      { label: 'الاستضافة', sub: 'حساب نشط، خادم يجيب، والقرص' },
      { label: 'الشهادة', sub: 'تاريخ النهاية، والتجديد' },
      { label: 'التطبيق', sub: 'آخر تحديث، وقاعدة البيانات' },
    ], caption: 'الشكل 1 · المرحلة المبرزة هي الأولى: فتح الموقع من شبكة أخرى، لمعرفة هل العطل عندكم أم في الموقع. والخمس الموالية تصعد مسار الزيارة، من اسم النطاق إلى التطبيق: نتحقق أولاً مما هو أبعد في الأعلى، لأن لا شيء يعمل وراءه.', alt: 'ست مراحل: شبكة أخرى (مبرزة)، اسم النطاق، DNS، الاستضافة، الشهادة، التطبيق.' },
    trajet: { caption: 'الشكل 2 · خمس حلقات تعبرها الزيارة بالترتيب. كل سطر يبيّن إلى أين تصل حين تنكسر حلقة، ما يراه الزائر حينها، ومن عليه أن يتحرك. وكلما قصر الشريط، كان السبب أبعد في الأعلى. الرسائل كما يعرضها Chrome؛ مثال مركَّب.' },
    messages: { title: 'قراءة رسالة الخطأ: تقول أين نبحث', columns: ['ما معناها', 'أين نبحث، وبمن نتصل'], rows: [
      { label: '«لا يمكن الوصول إلى الموقع» · NXDOMAIN', cells: ['اسم الموقع لا يقود إلى أي عنوان', 'اسم النطاق، ثم منطقة DNS: مكتب التسجيل'] },
      { label: '«انتهت المهلة» · اتصال مرفوض', cells: ['الاسم يقود إلى خادم، لكنه لا يجيب', 'المستضيف: حساب موقوف، خادم متوقف، جدار ناري'] },
      { label: '«اتصالك ليس خاصاً»', cells: ['الشهادة منتهية، أو لا تطابق اسم الموقع', 'المستضيف أو المتعهّد: تجديد الشهادة'] },
      { label: 'خطأ 500 · صفحة بيضاء', cells: ['الخادم يجيب، والتطبيق صادف خطأ', 'المطوِّر: آخر تحديث، وسجل الأخطاء'] },
      { label: 'أخطاء 502، 503، 504', cells: ['خادم مثقَل، في صيانة، أو ينتظر جواباً', 'المستضيف أولاً: الحمل، الذاكرة، القرص، قاعدة البيانات'] },
      { label: 'خطأ 404 في صفحة معيّنة', cells: ['الموقع يعمل؛ وتلك الصفحة لم تعد موجودة', 'من يسيّر المحتوى: رابط مكسور، صفحة أُعيدت تسميتها'] },
    ], caption: 'الشكل 3 · ست رسائل، من الأبعد في الأعلى إلى الأبعد في الأسفل. الثلاث الأولى تأتي من المتصفح: الموقع لم يُبلَغ، أو لم يُبلَغ بأمان. والثلاث الموالية تأتي من الخادم: أجاب، برمز من ثلاثة أرقام. سجّلوا الرسالة كلمة بكلمة قبل الاتصال.', alt: 'مصفوفة ست رسائل خطأ، مع معناها وأين نبحث: موقع لا يمكن الوصول إليه، مهلة منتهية، اتصال غير خاص، خطأ 500، أخطاء 502 إلى 504، خطأ 404.' },
    decouverte: { caption: 'الشكل 4 · العطل نفسه، مرتين: شهادة تنتهي يوم جمعة على الساعة 23. دون مراقبة، نعلم به صباح الأحد من زبون، ويبقى الموقع متوقفاً 35 ساعة. وباختبار كل دقيقة، ينطلق التنبيه بعد ثلاث دقائق، ويعود كل شيء في 45 دقيقة. الساعات والآجال والزيارات مثال مركَّب.' },
    couches: { title: 'ما يُبقي الموقع واقفاً، في خمس طبقات', layers: [
      { label: 'الاسم و DNS', items: [{ name: 'باسم المؤسسة، تجديد آلي، تنبيه ستين يوماً قبل الأجل، وتعديلات مسجَّلة', sub: 'الحلقة الأبعد في الأعلى لا تنفلت' }] },
      { label: 'الاستضافة', items: [{ name: 'حساب باسم المؤسسة، فاتورة متابَعة، قرص وذاكرة مراقَبان، ونسخ احتياطية خارج الخادم', sub: 'لا إيقاف، ولا قرص ممتلئ مساء جمعة' }] },
      { label: 'الشهادة', items: [{ name: 'تجديد آلي، يُراجَع بعد كل مرور، وتنبيه ثلاثين يوماً قبل تاريخ النهاية', sub: 'الشهادات تدوم أقل فأقل' }] },
      { label: 'التطبيق', items: [{ name: 'تحديثات تُجرَّب على نسخة، رجوع إلى الوراء بحركة، وسجل أخطاء يُقرأ', sub: 'تحديث فاشل يُلغى في خمس دقائق' }] },
      { label: 'المراقبة', items: [{ name: 'اختبار خارجي كل دقيقة على الصفحة الحقيقية، تنبيه لشخصين، وتواريخ متابَعة', sub: 'نعلم به قبل الزبائن', accent: true }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي المراقبة: دونها، تنفلت الأربع الأخرى في صمت. الثلاث الأولى آجال وحسابات تُمسك باسم المؤسسة؛ والرابعة طريقة تحديث؛ والخامسة تقول، كل دقيقة، هل الكل قائم.', alt: 'خمس طبقات: الاسم و DNS؛ الاستضافة؛ الشهادة؛ التطبيق؛ المراقبة (مبرزة).' },
    heure: { title: 'الساعة الأولى، دقيقة بدقيقة', unit: 'دقيقة', items: [
      { label: 'التسجيل والتحقق من مكان آخر', note: 'رسالة الخطأ كلمة بكلمة، الساعة، محاولة من الهاتف على 4G، وسؤال شخص من خارج المؤسسة', from: 0, to: 5, accent: true },
      { label: 'اسم النطاق و DNS', note: 'تاريخ الانتهاء، مكتب التسجيل، سجلات المنطقة، وآخر تغيير', from: 5, to: 15 },
      { label: 'الاستضافة', note: 'فضاء الزبون، الفاتورة، حالة الخادم، القرص، ثم تذكرة تذكر الرسالة بالضبط والساعة', from: 15, to: 30 },
      { label: 'الشهادة والتطبيق', note: 'تاريخ الشهادة، إعادة التجديد، إلغاء آخر تحديث، وسجل الأخطاء', from: 30, to: 50 },
      { label: 'التحقق والإعلام', note: 'موقع يُفتح من شبكتين، استمارة تُجرَّب، زبائن يُعلَمون، وسبب يُسجَّل', from: 50, to: 60 },
    ], caption: 'الشكل 6 · ساعة في المثال. الفترة المبرزة هي الأولى: خمس دقائق لتسجيل الرسالة والتحقق من شبكة أخرى، تجنّب الاتصال بالشخص الخطأ. وليست كل الأعطال تسعها ساعة؛ والتي تطول هي غالباً التي لا يملك أحد مفاتيح الوصول إليها.', alt: 'تقويم ساعة: التسجيل والتحقق من مكان آخر (مبرزة، خمس دقائق)، اسم النطاق و DNS، الاستضافة، الشهادة والتطبيق، التحقق والإعلام.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      ordre: { svg: steps({ title: t.ordre.title, steps: t.ordre.items, arrows: true, rtl }), caption: t.ordre.caption, alt: t.ordre.alt },
      trajet: { svg: trajet(e.trajet, rtl), caption: t.trajet.caption, alt: e.trajet.alt },
      messages: { svg: matrix({ title: t.messages.title, columns: t.messages.columns, rows: t.messages.rows, rtl }), caption: t.messages.caption, alt: t.messages.alt },
      decouverte: { svg: decouverte(e.decouverte, rtl), caption: t.decouverte.caption, alt: e.decouverte.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      heure: { svg: timeline({ title: t.heure.title, items: t.heure.items, total: 60, tick: 10, unit: t.heure.unit, rtl }), caption: t.heure.caption, alt: t.heure.alt },
    },
  };
}
