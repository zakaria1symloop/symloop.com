import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { chemins, ligne, STRINGS as SC } from './custom/acces.mjs';
export const slug = 'acces-a-distance-au-bureau-entreprise-algerie-2027-bureau-a-distance-qui-ne-fonctionne-pas-teletravail-tunnel-chiffre-sans-port-ouvert';
const T = {
  fr: {
    cover: { eyebrow: 'Accès à distance · Algérie · 2027', title: ['Accès à distance au bureau', 'sans port ouvert'], subtitle: 'Travailler de l’extérieur sur le logiciel du bureau : tunnel chiffré, comptes nominatifs, ligne mesurée', left: { label: 'Un port ouvert', sub: 'visible de tout internet' }, right: { label: 'Un tunnel chiffré', sub: 'un compte, un second code' } },
    chemins: { caption: 'Figure 1 · La même personne atteint le logiciel du bureau par trois chemins. Avec un port ouvert sur la box, elle arrive au poste, et les inconnus qui balaient internet aussi : 3389 est le port par défaut du bureau à distance. Avec un tunnel chiffré, elle entre dans le réseau avec son compte et un second code, et les inconnus s’arrêtent à la box. Avec une application web, il n’y a plus de poste à joindre. Schéma de principe d’un exemple construit.' },
    causes: { title: 'Le bureau à distance ne fonctionne pas : six causes', columns: ['Le signe', 'Ce qu’on fait'], rows: [
      { label: 'Le poste du bureau est éteint ou en veille', cells: ['ça marchait hier, plus rien ce matin', 'veille coupée, réveil par le réseau, ou serveur toujours allumé'] },
      { label: 'L’adresse du bureau a changé', cells: ['la connexion cherche une adresse qui n’est plus la vôtre', 'le tunnel suit un nom tenu à jour, pas une adresse notée'] },
      { label: 'L’opérateur partage l’adresse', cells: ['rien n’entre, même avec la bonne redirection', 'adresse publique demandée, ou tunnel établi depuis le bureau'] },
      { label: 'Le poste est en édition Famille', cells: ['l’option de bureau à distance n’existe pas', 'seule l’édition Pro accepte les connexions entrantes'] },
      { label: 'Le compte ou le mot de passe', cells: ['refus après un changement de mot de passe', 'compte nominatif autorisé, mot de passe à jour, second code'] },
      { label: 'La ligne du bureau est saturée', cells: ['image qui gèle, frappe en retard', 'web et vidéo hors de la session, débit montant mesuré'] },
    ], caption: 'Figure 2 · Six causes, dans l’ordre où on les vérifie, de la plus banale à la plus technique. Les quatre premières n’ont rien à voir avec la sécurité : un poste éteint, une adresse qui change, un opérateur qui partage son adresse, une édition de Windows qui n’accepte pas de connexion. Aucune ne se règle en ouvrant un port de plus.', alt: 'Matrice de six causes pour lesquelles le bureau à distance ne fonctionne pas, avec le signe et l’action : poste éteint ou en veille, adresse qui a changé, adresse partagée par l’opérateur, édition Famille, compte ou mot de passe, ligne saturée.' },
    gestes: { title: 'Un accès à distance propre, en six gestes', items: [
      { label: 'Lister', sub: 'qui a besoin de quoi, et depuis où' },
      { label: 'Fermer', sub: 'les ports ouverts sur la box, tous', accent: true },
      { label: 'Installer le tunnel', sub: 'chiffré, sur le routeur du bureau' },
      { label: 'Créer les comptes', sub: 'un par personne, avec un second code' },
      { label: 'Préparer les postes', sub: 'édition Pro, veille coupée, réveil réseau' },
      { label: 'Essayer', sub: 'de l’extérieur, en 4G, avec chacun' },
    ], caption: 'Figure 3 · Le geste accentué est le deuxième : avant d’installer quoi que ce soit, on relève et on ferme toutes les redirections de port de la box, y compris celle « faite un jour pour dépanner ». Le dernier geste se fait avec chaque personne, depuis l’endroit où elle travaillera vraiment.', alt: 'Six gestes : lister, fermer (accentué), installer le tunnel, créer les comptes, préparer les postes, essayer.' },
    ligne: { caption: 'Figure 4 · Le bureau à distance envoie l’image de l’écran : c’est le débit montant du bureau qui compte. Avec les repères publiés par Microsoft, six personnes sur un logiciel de gestion demandent 1,2 Mbit/s ; qu’une seule navigue sur le web dans sa session, 7,5 ; qu’elle lance une vidéo, 10,5, plus que la ligne. En bas, le délai aller-retour : sans gêne jusqu’à 150 ms, correct pour du texte jusqu’à 200 ms. Personnes, ligne et délais sont un exemple construit.' },
    couches: { title: 'Un accès à distance sérieux, en cinq couches', layers: [
      { label: 'Qui', items: [{ name: 'Un compte par personne, un second code à chaque connexion, des droits limités au nécessaire', sub: 'un départ se règle en fermant un compte, pas en changeant le mot de passe de tous' }] },
      { label: 'Par où', items: [{ name: 'Un tunnel chiffré ou une passerelle, aucun port de bureau à distance ouvert sur la box', sub: 'ce qui n’est pas visible d’internet ne peut pas être essayé par un inconnu', accent: true }] },
      { label: 'Vers quoi', items: [{ name: 'Son propre poste, un serveur de sessions pour plusieurs, ou le logiciel devenu application web', sub: 'le choix dépend du logiciel et du nombre de personnes' }] },
      { label: 'Avec quoi', items: [{ name: 'Un ordinateur de l’entreprise de préférence, à jour, chiffré, sans copie locale des données', sub: 'un ordinateur familial partagé n’est pas un poste de travail' }] },
      { label: 'Suivi', items: [{ name: 'Journal des connexions, alertes sur les échecs répétés, mises à jour, revue des comptes par trimestre', sub: 'on sait qui s’est connecté, d’où et quand' }] },
    ], caption: 'Figure 5 · La couche accentuée est celle du chemin : c’est elle qui décide de ce qu’un inconnu peut essayer. Les comptes, au-dessus, disent qui entre ; la cible et l’ordinateur, en dessous, disent vers quoi et avec quoi ; le suivi garde la trace de tout.', alt: 'Cinq couches : qui ; par où (accentuée) ; vers quoi ; avec quoi ; suivi.' },
    calendrier: { title: 'Un accès à distance en place en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Inventaire et mesure', note: 'qui se connecte et à quoi, ports ouverts sur la box, édition de chaque poste, débit montant et délai mesurés de l’extérieur', from: 0, to: 1 },
      { label: 'Tunnel et comptes', note: 'tunnel chiffré sur le routeur, comptes nominatifs, second code, deux personnes l’utilisent pendant une semaine', from: 1, to: 2, accent: true },
      { label: 'Bascule et fermeture', note: 'tout le monde passe par le tunnel, ports fermés, outils de prise en main retirés, journal des connexions en place', from: 2, to: 3 },
    ], caption: 'Figure 6 · Trois semaines dans l’exemple, la première sans rien changer. La semaine accentuée est celle du tunnel et des comptes, essayés par deux personnes avant tout le monde ; les ports ne sont fermés qu’une fois le tunnel éprouvé, pour ne couper personne.', alt: 'Calendrier de trois semaines : inventaire et mesure, tunnel et comptes (accentué), bascule et fermeture.' },
  },
  en: {
    cover: { eyebrow: 'Remote access · Algeria · 2027', title: ['Remote access to the office', 'with no open port'], subtitle: 'Working from home or abroad on the company software: encrypted tunnel, named accounts, a measured line', left: { label: 'An open port', sub: 'visible to the whole internet' }, right: { label: 'An encrypted tunnel', sub: 'an account, a second code' } },
    chemins: { caption: 'Figure 1 · The same person reaches the office software by three routes. With a port opened on the router, they reach the PC, and so do the strangers who scan the internet: 3389 is the default port of remote desktop. With an encrypted tunnel, they enter the network with their account and a second code, and strangers stop at the router. With a web application, there is no PC left to reach. Schematic of a constructed example.' },
    causes: { title: 'Remote desktop does not work: six causes', columns: ['The sign', 'What is done'], rows: [
      { label: 'The office PC is off or asleep', cells: ['it worked yesterday, nothing this morning', 'sleep turned off, wake-on-LAN, or a server always on'] },
      { label: 'The office address has changed', cells: ['the connection looks for an address no longer yours', 'the tunnel follows an updated name, not a noted address'] },
      { label: 'The operator shares the address', cells: ['nothing gets in, even with the right forwarding', 'public address requested, or tunnel started from the office'] },
      { label: 'The PC runs the Home edition', cells: ['the remote desktop option does not exist', 'only the Pro edition accepts incoming connections'] },
      { label: 'The account or the password', cells: ['refused after a password change', 'named account allowed, current password, second code'] },
      { label: 'The office line is saturated', cells: ['frozen picture, typing that lags', 'web and video outside the session, upload rate measured'] },
    ], caption: 'Figure 2 · Six causes, in the order they are checked, from the most ordinary to the most technical. The first four have nothing to do with security: a PC switched off, an address that changes, an operator that shares its address, a Windows edition that accepts no connection. None is solved by opening one more port.', alt: 'Matrix of six causes for remote desktop not working, with the sign and the action: PC off or asleep, address changed, address shared by the operator, Home edition, account or password, saturated line.' },
    gestes: { title: 'Clean remote access, in six steps', items: [
      { label: 'List', sub: 'who needs what, and from where' },
      { label: 'Close', sub: 'the ports open on the router, all of them', accent: true },
      { label: 'Install the tunnel', sub: 'encrypted, on the office router' },
      { label: 'Create accounts', sub: 'one per person, with a second code' },
      { label: 'Prepare the PCs', sub: 'Pro edition, no sleep, wake-on-LAN' },
      { label: 'Try it', sub: 'from outside, on 4G, with each person' },
    ], caption: 'Figure 3 · The accented step is the second: before installing anything, every port forwarding on the router is listed and closed, including the one “set up one day to fix something”. The last step is done with each person, from the place where they will really work.', alt: 'Six steps: list, close (accented), install the tunnel, create accounts, prepare the PCs, try it.' },
    ligne: { caption: 'Figure 4 · Remote desktop sends the picture of the screen: what counts is the office’s upload rate. With the figures published by Microsoft, six people on management software need 1.2 Mbit/s; if one of them browses the web inside the session, 7.5; if they play a video, 10.5, more than the line. At the bottom, the round-trip delay: no discomfort up to 150 ms, fine for text up to 200 ms. People, line and delays are a constructed example.' },
    couches: { title: 'Serious remote access, in five layers', layers: [
      { label: 'Who', items: [{ name: 'One account per person, a second code at each connection, rights limited to what is needed', sub: 'a departure is handled by closing one account, not by changing everyone’s password' }] },
      { label: 'Through where', items: [{ name: 'An encrypted tunnel or a gateway, no remote desktop port opened on the router', sub: 'what is not visible from the internet cannot be tried by a stranger', accent: true }] },
      { label: 'To what', items: [{ name: 'Your own PC, a session server for several people, or the software turned into a web application', sub: 'the choice depends on the software and the number of people' }] },
      { label: 'With what', items: [{ name: 'A company computer for preference, up to date, encrypted, with no local copy of the data', sub: 'a shared family computer is not a workstation' }] },
      { label: 'Follow-up', items: [{ name: 'Connection log, alerts on repeated failures, updates, account review every quarter', sub: 'you know who connected, from where and when' }] },
    ], caption: 'Figure 5 · The accented layer is the route: it decides what a stranger can try. Accounts, above, say who comes in; the target and the computer, below, say to what and with what; follow-up keeps the record of everything.', alt: 'Five layers: who; through where (accented); to what; with what; follow-up.' },
    calendrier: { title: 'Remote access in place in 2027, in weeks', unit: 'wk', items: [
      { label: 'Stock-take and measurement', note: 'who connects and to what, ports open on the router, edition of each PC, upload rate and delay measured from outside', from: 0, to: 1 },
      { label: 'Tunnel and accounts', note: 'encrypted tunnel on the router, named accounts, second code, two people use it for a week', from: 1, to: 2, accent: true },
      { label: 'Switch-over and closing', note: 'everyone goes through the tunnel, ports closed, remote-control tools removed, connection log in place', from: 2, to: 3 },
    ], caption: 'Figure 6 · Three weeks in the example, the first with nothing changed. The accented week is the tunnel and the accounts, tried by two people before everyone; ports are closed only once the tunnel has proved itself, so that nobody is cut off.', alt: 'Three-week calendar: stock-take and measurement, tunnel and accounts (accented), switch-over and closing.' },
  },
  ar: {
    cover: { eyebrow: 'الوصول عن بعد · الجزائر · 2027', title: ['الوصول إلى المكتب عن بعد', 'دون منفذ مفتوح'], subtitle: 'العمل من البيت أو من الخارج على برنامج المؤسسة: نفق مشفَّر، حسابات اسمية، وخط مقاس', left: { label: 'منفذ مفتوح', sub: 'ظاهر لكل الإنترنت' }, right: { label: 'نفق مشفَّر', sub: 'حساب ورمز ثانٍ' } },
    chemins: { caption: 'الشكل 1 · الشخص نفسه يصل إلى برنامج المكتب عبر ثلاث طرق. بمنفذ مفتوح على الموجِّه، يصل إلى الحاسوب، ويصل إليه كذلك المجهولون الذين يمسحون الإنترنت: ⁦3389⁩ هو المنفذ الافتراضي لسطح المكتب البعيد. وبنفق مشفَّر، يدخل إلى الشبكة بحسابه ورمز ثانٍ، والمجهولون يتوقفون عند الموجِّه. وبتطبيق ويب، لم يعد هناك حاسوب يُوصَل إليه. مخطط مبدئي لمثال مركَّب.' },
    causes: { title: 'سطح المكتب البعيد لا يعمل: ستة أسباب', columns: ['العلامة', 'ما نفعله'], rows: [
      { label: 'حاسوب المكتب مطفأ أو في وضع السكون', cells: ['كان يعمل أمس، ولا شيء هذا الصباح', 'إلغاء السكون، إيقاظ عبر الشبكة، أو خادم يعمل دائماً'] },
      { label: 'عنوان المكتب تغيّر', cells: ['الاتصال يبحث عن عنوان لم يعد لكم', 'النفق يتبع اسماً محدَّثاً، لا عنواناً مكتوباً'] },
      { label: 'المتعامل يتقاسم العنوان', cells: ['لا شيء يدخل، حتى بإعادة توجيه صحيحة', 'طلب عنوان عمومي، أو نفق يُنشأ من المكتب'] },
      { label: 'الحاسوب بإصدار Home', cells: ['خيار سطح المكتب البعيد غير موجود', 'إصدار Pro وحده يقبل الاتصالات الواردة'] },
      { label: 'الحساب أو كلمة المرور', cells: ['رفض بعد تغيير كلمة المرور', 'حساب اسمي مسموح له، كلمة مرور محدَّثة، ورمز ثانٍ'] },
      { label: 'خط المكتب مشبَع', cells: ['صورة تتجمّد، وكتابة تتأخر', 'الويب والفيديو خارج الجلسة، وتدفق الرفع مقاس'] },
    ], caption: 'الشكل 2 · ستة أسباب، بالترتيب الذي نتحقق منها به، من الأبسط إلى الأكثر تقنية. الأربعة الأولى لا علاقة لها بالأمن: حاسوب مطفأ، عنوان يتغيّر، متعامل يتقاسم عنوانه، وإصدار ويندوز لا يقبل الاتصال. ولا واحد منها يُحَلّ بفتح منفذ إضافي.', alt: 'مصفوفة ستة أسباب لعدم عمل سطح المكتب البعيد، مع العلامة والإجراء: حاسوب مطفأ أو في السكون، عنوان تغيّر، عنوان يتقاسمه المتعامل، إصدار Home، الحساب أو كلمة المرور، خط مشبَع.' },
    gestes: { title: 'وصول عن بعد كما يجب، في ست خطوات', items: [
      { label: 'الجرد', sub: 'من يحتاج ماذا، ومن أين' },
      { label: 'الإغلاق', sub: 'المنافذ المفتوحة على الموجِّه، كلها', accent: true },
      { label: 'تنصيب النفق', sub: 'مشفَّر، على موجِّه المكتب' },
      { label: 'إنشاء الحسابات', sub: 'حساب لكل شخص، مع رمز ثانٍ' },
      { label: 'تحضير الحواسيب', sub: 'إصدار Pro، لا سكون، إيقاظ عبر الشبكة' },
      { label: 'التجربة', sub: 'من الخارج، بالجيل الرابع، مع كل واحد' },
    ], caption: 'الشكل 3 · الخطوة المبرزة هي الثانية: قبل تنصيب أي شيء، تُجرَد وتُغلَق كل إعادات توجيه المنافذ على الموجِّه، بما فيها التي «وُضعت يوماً لإصلاح عطل». والخطوة الأخيرة تتم مع كل شخص، من المكان الذي سيعمل منه فعلاً.', alt: 'ست خطوات: الجرد، الإغلاق (مبرزة)، تنصيب النفق، إنشاء الحسابات، تحضير الحواسيب، التجربة.' },
    ligne: { caption: 'الشكل 4 · سطح المكتب البعيد يرسل صورة الشاشة: فالمهم هو تدفق الرفع في المكتب. وبالأرقام التي تنشرها مايكروسوفت، ستة أشخاص على برنامج تسيير يحتاجون 1,2 ميغابت في الثانية؛ وإذا تصفّح أحدهم الويب داخل جلسته، 7,5؛ وإذا شغّل فيديو، 10,5، أكثر من الخط. وفي الأسفل زمن الذهاب والإياب: دون إزعاج حتى 150 ميلي ثانية، ومقبول للنصوص حتى 200. الأشخاص والخط والأزمنة مثال مركَّب.' },
    couches: { title: 'وصول عن بعد جادّ، في خمس طبقات', layers: [
      { label: 'من', items: [{ name: 'حساب لكل شخص، رمز ثانٍ عند كل اتصال، وصلاحيات محصورة في الضروري', sub: 'المغادرة تُحَلّ بإغلاق حساب، لا بتغيير كلمة مرور الجميع' }] },
      { label: 'من أين', items: [{ name: 'نفق مشفَّر أو بوابة، ولا منفذ لسطح المكتب البعيد مفتوح على الموجِّه', sub: 'ما لا يُرى من الإنترنت لا يمكن أن يجرّبه مجهول', accent: true }] },
      { label: 'إلى ماذا', items: [{ name: 'الحاسوب الشخصي في المكتب، خادم جلسات لعدة أشخاص، أو البرنامج وقد صار تطبيق ويب', sub: 'الاختيار يتوقف على البرنامج وعدد الأشخاص' }] },
      { label: 'بماذا', items: [{ name: 'حاسوب للمؤسسة بالأفضلية، محدَّث، مشفَّر، ودون نسخة محلية من البيانات', sub: 'حاسوب العائلة المتقاسَم ليس منصب عمل' }] },
      { label: 'المتابعة', items: [{ name: 'سجل الاتصالات، تنبيهات على الإخفاقات المتكررة، تحديثات، ومراجعة الحسابات كل ثلاثة أشهر', sub: 'نعرف من اتصل، ومن أين، ومتى' }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي الطريق: هي التي تحدّد ما يمكن أن يجرّبه مجهول. الحسابات، فوقها، تقول من يدخل؛ والهدف والحاسوب، تحتها، يقولان إلى ماذا وبماذا؛ والمتابعة تحفظ أثر كل شيء.', alt: 'خمس طبقات: من؛ من أين (مبرزة)؛ إلى ماذا؛ بماذا؛ المتابعة.' },
    calendrier: { title: 'وصول عن بعد جاهز سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الجرد والقياس', note: 'من يتصل وبماذا، المنافذ المفتوحة على الموجِّه، إصدار كل حاسوب، وتدفق الرفع والزمن مقاسان من الخارج', from: 0, to: 1 },
      { label: 'النفق والحسابات', note: 'نفق مشفَّر على الموجِّه، حسابات اسمية، رمز ثانٍ، وشخصان يستعملانه مدة أسبوع', from: 1, to: 2, accent: true },
      { label: 'الانتقال والإغلاق', note: 'الجميع يمرّ عبر النفق، المنافذ مغلقة، أدوات التحكم عن بعد مسحوبة، وسجل الاتصالات قائم', from: 2, to: 3 },
    ], caption: 'الشكل 6 · ثلاثة أسابيع في المثال، الأول دون تغيير شيء. الأسبوع المبرز هو النفق والحسابات، يجرّبهما شخصان قبل الجميع؛ والمنافذ لا تُغلَق إلا بعد أن يثبت النفق، حتى لا ينقطع أحد.', alt: 'تقويم ثلاثة أسابيع: الجرد والقياس، النفق والحسابات (مبرز)، الانتقال والإغلاق.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      chemins: { svg: chemins(e.chemins, rtl), caption: t.chemins.caption, alt: e.chemins.alt },
      causes: { svg: matrix({ title: t.causes.title, columns: t.causes.columns, rows: t.causes.rows, rtl }), caption: t.causes.caption, alt: t.causes.alt },
      gestes: { svg: steps({ title: t.gestes.title, steps: t.gestes.items, arrows: true, rtl }), caption: t.gestes.caption, alt: t.gestes.alt },
      ligne: { svg: ligne(e.ligne, rtl), caption: t.ligne.caption, alt: e.ligne.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 3, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
