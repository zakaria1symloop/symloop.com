import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { chemin, cle, STRINGS as SC } from './custom/durcir.mjs';
export const slug = 'comment-securiser-un-reseau-informatique-d-entreprise-en-algerie-2027-mots-de-passe-d-origine-wifi-mises-a-jour-ports-ouverts-reseau-invites';
const T = {
  fr: {
    cover: { eyebrow: 'Sécurité réseau · Algérie · 2027', title: ['Sécuriser le réseau', 'de l’entreprise'], subtitle: 'L’inventaire d’abord, puis les mots de passe d’origine, les mises à jour, les portes ouvertes, le Wi-Fi', left: { label: 'Tel qu’installé', sub: 'la clé que tout le monde connaît' }, right: { label: 'Six réglages', sub: 'des réglages avant un achat' } },
    ordre: { title: 'Sécuriser un réseau, dans cet ordre', items: [
      { label: 'Inventorier', sub: 'tout ce qui est branché, câble et Wi-Fi', accent: true },
      { label: 'Changer', sub: 'les mots de passe d’origine, partout' },
      { label: 'Mettre à jour', sub: 'box, bornes, caméras, imprimantes' },
      { label: 'Fermer', sub: 'ce qui est ouvert depuis internet' },
      { label: 'Séparer', sub: 'invités et équipements, loin des postes' },
      { label: 'Surveiller', sub: 'un journal, une alerte, une revue' },
    ], caption: 'Figure 1 · Le temps accentué est le premier : inventorier. On ne sécurise pas ce qu’on ne sait pas avoir. Les trois temps suivants sont des réglages sur le matériel en place ; la séparation peut demander un matériel qui la gère ; la surveillance empêche que tout se défasse en un an.', alt: 'Six temps : inventorier (accentué), changer, mettre à jour, fermer, séparer, surveiller.' },
    appareils: { title: 'Six équipements, ce qu’on y change', columns: ['Le réglage à changer', 'Ce qu’il laisse ouvert sinon'], rows: [
      { label: 'La box ou le routeur', cells: ['mot de passe d’administration, accès distant coupé, ports revus', 'la porte d’entrée de tout le réseau'] },
      { label: 'Le Wi-Fi', cells: ['WPA2 ou WPA3, WPS désactivé, un réseau invités à part', 'une clé que tout le monde connaît'] },
      { label: 'Les caméras et l’enregistreur', cells: ['mot de passe d’origine remplacé, mise à jour, aucun port ouvert', 'des images, et un pied dans le réseau'] },
      { label: 'L’imprimante', cells: ['mot de passe d’administration, services inutiles coupés', 'les documents numérisés, le carnet d’adresses'] },
      { label: 'Le switch et les bornes', cells: ['mot de passe d’administration, mise à jour, prises libres coupées', 'quiconque se branche est dans le réseau'] },
      { label: 'Le serveur de fichiers', cells: ['comptes nominatifs, mise à jour, jamais joignable depuis internet', 'tous les fichiers de l’entreprise'] },
    ], caption: 'Figure 2 · Six équipements d’un petit bureau. Pour chacun, le réglage à changer et ce qu’il laisse ouvert s’il reste tel qu’à la livraison. Aucune ligne ne demande d’achat : ce sont des écrans d’administration à ouvrir, un par un, avec la liste de l’inventaire sous les yeux.', alt: 'Matrice de six équipements : la box ou le routeur, le Wi-Fi, les caméras et l’enregistreur, l’imprimante, le switch et les bornes, le serveur de fichiers ; pour chacun, le réglage à changer et ce qu’il laisse ouvert sinon.' },
    chemin: { caption: 'Figure 3 · Le même bureau, deux fois. En haut, tel qu’installé : un port ouvert sur la box, un enregistreur au mot de passe d’origine, et le serveur de fichiers sur le même réseau que les caméras ; le chemin va jusqu’au bout. En bas, trois réglages : le chemin s’arrête au premier. Exemple construit.' },
    cle: { caption: 'Figure 4 · Une seule clé Wi-Fi, jamais changée. En vingt-quatre mois, ceux qui la connaissent passent de 12 à 46, alors que 13 personnes travaillent dans le bureau. Trois façons de refermer l’écart : un réseau invités, une clé changée à chaque départ, ou un compte par personne. Exemple construit.' },
    couches: { title: 'Un réseau sécurisé, en cinq couches', layers: [
      { label: 'Entrée', items: [{ name: 'Rien d’ouvert depuis internet sans raison écrite ; l’accès distant passe par un tunnel chiffré', sub: 'la liste des ports ouverts tient sur une ligne' }] },
      { label: 'Équipements', items: [{ name: 'Aucun mot de passe d’origine, tout est à jour, les accès sont dans un gestionnaire de mots de passe', sub: 'box, switch, bornes, caméras, imprimantes', accent: true }] },
      { label: 'Wi-Fi', items: [{ name: 'WPA2 ou WPA3, WPS coupé, les visiteurs sur leur réseau, une clé qui change ou un compte par personne', sub: 'on retire un accès sans changer celui des autres' }] },
      { label: 'Zones', items: [{ name: 'Les postes et le serveur d’un côté, les caméras et les imprimantes d’un autre, les invités à part', sub: 'un appareil compromis ne voit pas le reste' }] },
      { label: 'Surveillance', items: [{ name: 'Un journal des connexions, une alerte sur un appareil inconnu, une revue chaque trimestre', sub: 'ce qui n’est pas regardé se défait' }] },
    ], caption: 'Figure 5 · La couche accentuée est celle des équipements : c’est là que se trouvent les mots de passe d’origine et les mises à jour jamais faites. Les quatre autres l’entourent : une entrée fermée, un Wi-Fi dont on sait qui a l’accès, des zones séparées, et un regard régulier.', alt: 'Cinq couches : entrée ; équipements (accentuée) ; Wi-Fi ; zones ; surveillance.' },
    calendrier: { title: 'Quatre semaines, de l’inventaire à la revue', unit: 'sem.', items: [
      { label: 'Inventaire', note: 'tout ce qui est branché, par câble et en Wi-Fi ; qui détient quel mot de passe', from: 0, to: 1, accent: true },
      { label: 'Mots de passe', note: 'identifiants d’origine remplacés, rangés dans un gestionnaire, deux personnes y ont accès', from: 0, to: 2 },
      { label: 'Mises à jour et portes', note: 'micrologiciels à jour, accès distant coupé, redirections de ports fermées ou justifiées', from: 1, to: 3 },
      { label: 'Wi-Fi et zones', note: 'chiffrement vérifié, WPS coupé, réseau invités, équipements séparés des postes', from: 2, to: 4 },
      { label: 'Journal et revue', note: 'journal activé, alerte sur un appareil inconnu, date de la prochaine revue fixée', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple. La période accentuée est la première : l’inventaire, sans rien changer. Les mots de passe commencent aussitôt ; les mises à jour et les portes suivent ; le Wi-Fi et les zones viennent en dernier, parce qu’ils dérangent le plus les utilisateurs. Durées indicatives d’un exemple construit.', alt: 'Calendrier de quatre semaines : inventaire (accentué, une semaine), mots de passe, mises à jour et portes, Wi-Fi et zones, journal et revue.' },
  },
  en: {
    cover: { eyebrow: 'Network security · Algeria · 2027', title: ['Securing the company', 'network'], subtitle: 'The inventory first, then factory passwords, updates, open doors and the Wi-Fi', left: { label: 'As installed', sub: 'the key everyone knows' }, right: { label: 'Six settings', sub: 'settings before a purchase' } },
    ordre: { title: 'Securing a network, in this order', items: [
      { label: 'Take inventory', sub: 'everything plugged in, cable and Wi-Fi', accent: true },
      { label: 'Change', sub: 'factory passwords, everywhere' },
      { label: 'Update', sub: 'box, access points, cameras, printers' },
      { label: 'Close', sub: 'what is open from the internet' },
      { label: 'Separate', sub: 'guests and devices, away from computers' },
      { label: 'Watch', sub: 'a log, an alert, a review' },
    ], caption: 'Figure 1 · The accented step is the first: take inventory. You cannot secure what you do not know you have. The next three steps are settings on the equipment in place; separation may need equipment that handles it; watching keeps everything from coming undone within a year.', alt: 'Six steps: take inventory (accented), change, update, close, separate, watch.' },
    appareils: { title: 'Six devices, what to change on each', columns: ['The setting to change', 'What it leaves open otherwise'], rows: [
      { label: 'The box or router', cells: ['administration password, remote access off, ports reviewed', 'the front door of the whole network'] },
      { label: 'The Wi-Fi', cells: ['WPA2 or WPA3, WPS turned off, a separate guest network', 'a key that everyone knows'] },
      { label: 'Cameras and the recorder', cells: ['factory password replaced, updated, no open port', 'images, and a foot inside the network'] },
      { label: 'The printer', cells: ['administration password, unused services off', 'scanned documents, the address book'] },
      { label: 'The switch and access points', cells: ['administration password, updated, free sockets turned off', 'whoever plugs in is on the network'] },
      { label: 'The file server', cells: ['named accounts, updated, never reachable from the internet', 'all the company’s files'] },
    ], caption: 'Figure 2 · Six devices in a small office. For each, the setting to change and what it leaves open if it stays as delivered. No line asks for a purchase: these are administration screens to open, one by one, with the inventory list in front of you.', alt: 'Matrix of six devices: the box or router, the Wi-Fi, cameras and the recorder, the printer, the switch and access points, the file server; for each, the setting to change and what it leaves open otherwise.' },
    chemin: { caption: 'Figure 3 · The same office, twice. At the top, as installed: an open port on the box, a recorder with its factory password, and the file server on the same network as the cameras; the path goes all the way. At the bottom, three settings: the path stops at the first. Constructed example.' },
    cle: { caption: 'Figure 4 · A single Wi-Fi key, never changed. In twenty-four months, those who know it go from 12 to 46, while 13 people work in the office. Three ways to close the gap: a guest network, a key changed at every departure, or one account per person. Constructed example.' },
    couches: { title: 'A secured network, in five layers', layers: [
      { label: 'Entry', items: [{ name: 'Nothing open from the internet without a written reason; remote access goes through an encrypted tunnel', sub: 'the list of open ports fits on one line' }] },
      { label: 'Devices', items: [{ name: 'No factory password, everything up to date, credentials kept in a password manager', sub: 'box, switch, access points, cameras, printers', accent: true }] },
      { label: 'Wi-Fi', items: [{ name: 'WPA2 or WPA3, WPS off, visitors on their own network, a key that changes or one account per person', sub: 'one access is removed without changing the others' }] },
      { label: 'Zones', items: [{ name: 'Computers and the server on one side, cameras and printers on another, guests apart', sub: 'a compromised device does not see the rest' }] },
      { label: 'Watching', items: [{ name: 'A log of connections, an alert on an unknown device, a review every quarter', sub: 'what is not looked at comes undone' }] },
    ], caption: 'Figure 5 · The accented layer is devices: that is where the factory passwords and the updates never done are found. The other four surround it: a closed entry, a Wi-Fi where you know who has access, separate zones, and a regular look.', alt: 'Five layers: entry; devices (accented); Wi-Fi; zones; watching.' },
    calendrier: { title: 'Four weeks, from the inventory to the review', unit: 'wk', items: [
      { label: 'Inventory', note: 'everything plugged in, by cable and on Wi-Fi; who holds which password', from: 0, to: 1, accent: true },
      { label: 'Passwords', note: 'factory credentials replaced, kept in a manager, two people have access to it', from: 0, to: 2 },
      { label: 'Updates and doors', note: 'firmware up to date, remote access off, port forwards closed or justified', from: 1, to: 3 },
      { label: 'Wi-Fi and zones', note: 'encryption checked, WPS off, guest network, devices separated from computers', from: 2, to: 4 },
      { label: 'Log and review', note: 'log turned on, alert on an unknown device, date of the next review set', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example. The accented period is the first: the inventory, with nothing changed. Passwords start straight away; updates and doors follow; Wi-Fi and zones come last, because they disturb users the most. Indicative durations from a constructed example.', alt: 'Four-week calendar: inventory (accented, one week), passwords, updates and doors, Wi-Fi and zones, log and review.' },
  },
  ar: {
    cover: { eyebrow: 'أمن الشبكة · الجزائر · 2027', title: ['تأمين شبكة', 'المؤسسة'], subtitle: 'الجرد أولاً، ثم كلمات المرور الأصلية، التحديثات، الأبواب المفتوحة، والواي فاي', left: { label: 'كما رُكِّبت', sub: 'المفتاح الذي يعرفه الجميع' }, right: { label: 'ستة إعدادات', sub: 'إعدادات قبل أي شراء' } },
    ordre: { title: 'تأمين شبكة، بهذا الترتيب', items: [
      { label: 'الجرد', sub: 'كل ما هو موصول، بكابل أو واي فاي', accent: true },
      { label: 'التغيير', sub: 'كلمات المرور الأصلية، في كل مكان' },
      { label: 'التحديث', sub: 'العلبة، النقاط، الكاميرات، والطابعات' },
      { label: 'الإغلاق', sub: 'ما هو مفتوح من الإنترنت' },
      { label: 'الفصل', sub: 'الزوّار والأجهزة، بعيداً عن الحواسيب' },
      { label: 'المراقبة', sub: 'سجل، تنبيه، ومراجعة' },
    ], caption: 'الشكل 1 · المرحلة المبرزة هي الأولى: الجرد. لا يُؤمَّن ما لا نعرف أننا نملكه. والمراحل الثلاث الموالية إعدادات على العتاد الموجود؛ والفصل قد يتطلب عتاداً يدعمه؛ والمراقبة تمنع أن ينحلّ كل شيء في سنة.', alt: 'ست مراحل: الجرد (مبرزة)، التغيير، التحديث، الإغلاق، الفصل، المراقبة.' },
    appareils: { title: 'ستة أجهزة، وما يُغيَّر فيها', columns: ['الإعداد الذي يُغيَّر', 'ما يتركه مفتوحاً إن بقي'], rows: [
      { label: 'العلبة أو الموجِّه', cells: ['كلمة مرور الإدارة، الدخول عن بعد مقطوع، والمنافذ مراجَعة', 'باب الدخول إلى الشبكة كلها'] },
      { label: 'الواي فاي', cells: ['⁦WPA2⁩ أو ⁦WPA3⁩، ⁦WPS⁩ معطَّل، وشبكة للزوّار منفصلة', 'مفتاح يعرفه الجميع'] },
      { label: 'الكاميرات والمسجِّل', cells: ['كلمة المرور الأصلية مستبدَلة، تحديث، ولا منفذ مفتوح', 'صور، وقدم داخل الشبكة'] },
      { label: 'الطابعة', cells: ['كلمة مرور الإدارة، والخدمات غير اللازمة مقطوعة', 'الوثائق الممسوحة، ودفتر العناوين'] },
      { label: 'الموزِّع ونقاط الوصول', cells: ['كلمة مرور الإدارة، تحديث، والمآخذ الحرة مقطوعة', 'كل من يتصل بكابل يصير في الشبكة'] },
      { label: 'خادم الملفات', cells: ['حسابات اسمية، تحديث، ولا يُوصَل إليه من الإنترنت أبداً', 'كل ملفات المؤسسة'] },
    ], caption: 'الشكل 2 · ستة أجهزة في مكتب صغير. ولكل واحد، الإعداد الذي يُغيَّر وما يتركه مفتوحاً إن بقي كما سُلِّم. ولا سطر يتطلب شراء: هي شاشات إدارة تُفتح، واحدة بعد واحدة، وقائمة الجرد أمامكم.', alt: 'مصفوفة ستة أجهزة: العلبة أو الموجِّه، الواي فاي، الكاميرات والمسجِّل، الطابعة، الموزِّع ونقاط الوصول، خادم الملفات؛ ولكل واحد الإعداد الذي يُغيَّر وما يتركه مفتوحاً إن بقي.' },
    chemin: { caption: 'الشكل 3 · المكتب نفسه، مرتين. في الأعلى، كما رُكِّب: منفذ مفتوح على العلبة، مسجِّل بكلمة مروره الأصلية، وخادم الملفات على شبكة الكاميرات نفسها؛ والطريق يصل إلى آخره. في الأسفل، ثلاثة إعدادات: الطريق يتوقف عند الأول. مثال مركَّب.' },
    cle: { caption: 'الشكل 4 · مفتاح واي فاي واحد، لم يُغيَّر أبداً. في أربعة وعشرين شهراً، من يعرفونه يمرّون من 12 إلى 46، بينما 13 شخصاً يعملون في المكتب. وثلاث طرق لسدّ الفارق: شبكة للزوّار، مفتاح يُغيَّر عند كل مغادرة، أو حساب لكل شخص. مثال مركَّب.' },
    couches: { title: 'شبكة مؤمَّنة، في خمس طبقات', layers: [
      { label: 'المدخل', items: [{ name: 'لا شيء مفتوح من الإنترنت دون سبب مكتوب؛ والدخول عن بعد يمر بنفق مشفَّر', sub: 'قائمة المنافذ المفتوحة تسعها سطر' }] },
      { label: 'الأجهزة', items: [{ name: 'لا كلمة مرور أصلية، الكل محدَّث، والمعرّفات في مسيّر كلمات المرور', sub: 'العلبة، الموزِّع، النقاط، الكاميرات، والطابعات', accent: true }] },
      { label: 'الواي فاي', items: [{ name: '⁦WPA2⁩ أو ⁦WPA3⁩، ⁦WPS⁩ مقطوع، الزوّار على شبكتهم، ومفتاح يتغيّر أو حساب لكل شخص', sub: 'يُسحب دخول واحد دون تغيير دخول الآخرين' }] },
      { label: 'المناطق', items: [{ name: 'الحواسيب والخادم من جهة، الكاميرات والطابعات من جهة أخرى، والزوّار على حدة', sub: 'الجهاز المخترَق لا يرى الباقي' }] },
      { label: 'المراقبة', items: [{ name: 'سجل للاتصالات، تنبيه عند جهاز مجهول، ومراجعة كل ثلاثة أشهر', sub: 'ما لا يُنظر إليه ينحلّ' }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي الأجهزة: فيها كلمات المرور الأصلية والتحديثات التي لم تُنجز أبداً. والأربع الأخرى تحيط بها: مدخل مغلق، واي فاي نعرف من يدخله، مناطق مفصولة، ونظرة منتظمة.', alt: 'خمس طبقات: المدخل؛ الأجهزة (مبرزة)؛ الواي فاي؛ المناطق؛ المراقبة.' },
    calendrier: { title: 'أربعة أسابيع، من الجرد إلى المراجعة', unit: 'أسبوع', items: [
      { label: 'الجرد', note: 'كل ما هو موصول، بكابل أو واي فاي؛ ومن يملك أي كلمة مرور', from: 0, to: 1, accent: true },
      { label: 'كلمات المرور', note: 'المعرّفات الأصلية مستبدَلة، محفوظة في مسيّر، وشخصان لهما الدخول إليه', from: 0, to: 2 },
      { label: 'التحديثات والأبواب', note: 'البرامج الثابتة محدَّثة، الدخول عن بعد مقطوع، وتحويلات المنافذ مغلقة أو مبرَّرة', from: 1, to: 3 },
      { label: 'الواي فاي والمناطق', note: 'التشفير مراجَع، WPS مقطوع، شبكة للزوّار، والأجهزة مفصولة عن الحواسيب', from: 2, to: 4 },
      { label: 'السجل والمراجعة', note: 'السجل مفعَّل، تنبيه عند جهاز مجهول، وتاريخ المراجعة المقبلة محدَّد', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال. الفترة المبرزة هي الأولى: الجرد، دون تغيير شيء. وكلمات المرور تبدأ حالاً؛ ثم التحديثات والأبواب؛ والواي فاي والمناطق في الأخير، لأنها تزعج المستعملين أكثر. مدد تقريبية لمثال مركَّب.', alt: 'تقويم أربعة أسابيع: الجرد (مبرزة، أسبوع)، كلمات المرور، التحديثات والأبواب، الواي فاي والمناطق، السجل والمراجعة.' },
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
      appareils: { svg: matrix({ title: t.appareils.title, columns: t.appareils.columns, rows: t.appareils.rows, rtl }), caption: t.appareils.caption, alt: t.appareils.alt },
      chemin: { svg: chemin(e.chemin, rtl), caption: t.chemin.caption, alt: e.chemin.alt },
      cle: { svg: cle(e.cle, rtl), caption: t.cle.caption, alt: e.cle.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
