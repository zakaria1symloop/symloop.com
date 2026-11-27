import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { acces, coffre, STRINGS as SC } from './custom/securiteapp.mjs';
export const slug = 'comment-securiser-une-application-mobile-ou-web-en-algerie-2027-donnees-clients-acces-verifies-sur-le-serveur-mots-de-passe-haches-mises-a-jour';
const T = {
  fr: {
    cover: { eyebrow: 'Sécurité des applications · Algérie · 2027', title: ['Comment sécuriser une application', 'ce qui se vérifie sur le serveur'], subtitle: 'Les accès vérifiés à chaque demande, les mots de passe hachés, les secrets hors du code, les mises à jour', left: { label: 'Un chiffre changé', sub: 'la commande d’un autre client' }, right: { label: 'Demande refusée', sub: 'vérifiée sur le serveur' } },
    acces: { caption: 'Figure 1 · Un client connecté change un chiffre dans l’adresse de sa commande. L’application fragile ne vérifie que la connexion, et renvoie la commande d’un autre. L’application sûre vérifie aussi que la commande est à lui, refuse, et note la tentative. Exemple construit.' },
    couches: { title: 'Une application sûre, en cinq couches', layers: [
      { label: 'Téléphone', items: [{ name: 'Sur le téléphone : aucun secret dans le code, et le moins de données possible gardées sur l’appareil', sub: 'un téléphone se perd, une application se démonte' }] },
      { label: 'Chemin', items: [{ name: 'En chemin : tout passe par une liaison chiffrée, les images et les appels internes aussi', sub: 'sans exception, y compris en interne' }] },
      { label: 'Serveur', items: [{ name: 'Sur le serveur : chaque demande est vérifiée, qui êtes-vous, et ceci est-il à vous', sub: 'la couche où se joue l’essentiel', accent: true }] },
      { label: 'Données', items: [{ name: 'Dans la base : mots de passe hachés, accès réduits au nécessaire, sauvegardes protégées', sub: 'ce qu’un voleur y trouverait' }] },
      { label: 'Durée', items: [{ name: 'Dans la durée : mises à jour, composants suivis, journal des accès, comptes d’administration protégés', sub: 'une application sûre à la livraison ne le reste pas seule' }] },
    ], caption: 'Figure 2 · La couche accentuée est le serveur : c’est là que chaque demande est acceptée ou refusée. Les écrans du téléphone ne protègent rien par eux-mêmes ; ils ne font que montrer ce que le serveur a bien voulu répondre.', alt: 'Cinq couches : le téléphone ; le chemin ; le serveur (accentuée) ; les données ; la durée.' },
    coffre: { caption: 'Figure 3 · La table des comptes, telle qu’un voleur la lirait. En clair, tout se lit, et deux clients ont visiblement le même mot de passe. Hachés et salés, les quatre mots de passe deviennent quatre chaînes illisibles et différentes. Exemple construit, chaînes abrégées.' },
    etapes: { title: 'Sécuriser une application existante, en six temps', items: [
      { label: 'Inventorier', sub: 'ce qu’elle garde, et qui y accède' },
      { label: 'Essayer', sub: 'les accès : changer un numéro', accent: true },
      { label: 'Fermer', sub: 'comptes et clés qui ne servent plus' },
      { label: 'Corriger', sub: 'accès, mots de passe, saisies' },
      { label: 'Mettre à jour', sub: 'système, composants, application' },
      { label: 'Surveiller', sub: 'journal, alertes, essai annuel' },
    ], caption: 'Figure 4 · Le temps accentué est le deuxième : essayer les accès, écran par écran, en changeant un numéro. C’est l’essai qui trouve le plus, et le plus vite. On ferme ensuite ce qui ne sert plus, avant de corriger ce qui sert.', alt: 'Six temps : inventorier, essayer (accentué), fermer, corriger, mettre à jour, surveiller.' },
    questions: { title: 'Six questions à poser à celui qui a fait l’application', columns: ['Une réponse qui rassure', 'Une réponse qui inquiète'], rows: [
      { label: 'Où sont vérifiés les droits ?', cells: ['sur le serveur, à chaque demande', 'dans l’application : on cache les boutons'] },
      { label: 'Comment sont gardés les mots de passe ?', cells: ['hachés et salés, personne ne les lit', 'on peut vous renvoyer le vôtre'] },
      { label: 'Où sont les clés et les secrets ?', cells: ['sur le serveur, hors du code', 'dans le code de l’application'] },
      { label: 'Qui a un accès d’administration ?', cells: ['une liste de noms, avec double vérification', 'un compte partagé, un seul mot de passe'] },
      { label: 'De quand date la dernière mise à jour ?', cells: ['de ce mois-ci, composants compris', 'de la livraison, il y a deux ans'] },
      { label: 'Que se passe-t-il après dix essais ?', cells: ['le compte ralentit, une alerte part', 'rien : on peut essayer toute la nuit'] },
    ], caption: 'Figure 5 · Six questions, et pour chacune une réponse qui rassure et une réponse qui inquiète. Elles se posent par écrit, au prestataire ou à votre équipe. Une réponse vague est déjà une réponse.', alt: 'Matrice de six questions : où sont vérifiés les droits, comment sont gardés les mots de passe, où sont les clés, qui a un accès d’administration, de quand date la dernière mise à jour, que se passe-t-il après dix essais ; pour chacune, une réponse qui rassure et une réponse qui inquiète.' },
    calendrier: { title: 'Six semaines pour une application existante', unit: 'sem.', items: [
      { label: 'Inventaire et essais', note: 'données gardées, comptes, clés, composants ; les accès essayés écran par écran', from: 0, to: 1, accent: true },
      { label: 'Fermer', note: 'comptes inutiles supprimés, clés changées, accès d’administration réduits et doublés', from: 1, to: 2 },
      { label: 'Corriger les accès', note: 'chaque demande vérifiée sur le serveur, refus par défaut, tentatives journalisées', from: 1, to: 4 },
      { label: 'Protéger les données', note: 'mots de passe hachés, secrets sortis du code, sauvegardes protégées', from: 3, to: 5 },
      { label: 'Mettre à jour', note: 'système, composants, puis nouvelle version publiée sur les magasins d’applications', from: 4, to: 6 },
      { label: 'Vérifier', note: 'les mêmes essais rejoués, puis un test d’intrusion confié à un tiers', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple, pour une application existante. La période accentuée est la première : inventorier et essayer, avant de toucher au code. Les corrections d’accès prennent le plus de temps, parce qu’elles se font demande par demande. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : inventaire et essais (accentué), fermer, corriger les accès, protéger les données, mettre à jour, vérifier.' },
  },
  en: {
    cover: { eyebrow: 'Application security · Algeria · 2027', title: ['How to secure an application', 'what is checked on the server'], subtitle: 'Access checked on every request, passwords hashed, secrets out of the code, updates', left: { label: 'One digit changed', sub: 'another customer’s order' }, right: { label: 'Request refused', sub: 'checked on the server' } },
    acces: { caption: 'Figure 1 · A signed-in customer changes one digit in the address of their order. The fragile application checks only the sign-in, and returns someone else’s order. The safe application also checks that the order is theirs, refuses, and records the attempt. Constructed example.' },
    couches: { title: 'A safe application, in five layers', layers: [
      { label: 'Phone', items: [{ name: 'On the phone: no secret in the code, and as little data as possible kept on the device', sub: 'a phone gets lost, an application gets taken apart' }] },
      { label: 'Path', items: [{ name: 'On the way: everything travels over an encrypted connection, images and internal calls too', sub: 'no exception, including internally' }] },
      { label: 'Server', items: [{ name: 'On the server: every request is checked, who are you, and is this yours', sub: 'the layer where it is decided', accent: true }] },
      { label: 'Data', items: [{ name: 'In the database: hashed passwords, access cut down to what is needed, protected backups', sub: 'what a thief would find there' }] },
      { label: 'Time', items: [{ name: 'Over time: updates, components tracked, an access log, protected admin accounts', sub: 'safe at delivery does not stay safe by itself' }] },
    ], caption: 'Figure 2 · The accented layer is the server: that is where each request is accepted or refused. The screens on the phone protect nothing by themselves; they only show what the server agreed to answer.', alt: 'Five layers: the phone; the path; the server (accented); the data; time.' },
    coffre: { caption: 'Figure 3 · The accounts table, as a thief would read it. In clear, everything is read, and two customers visibly share a password. Hashed and salted, the four passwords become four unreadable and different strings. Constructed example, strings shortened.' },
    etapes: { title: 'Securing an existing application, in six steps', items: [
      { label: 'Inventory', sub: 'what it keeps, and who gets in' },
      { label: 'Test', sub: 'access: change a number', accent: true },
      { label: 'Close', sub: 'accounts and keys no longer used' },
      { label: 'Fix', sub: 'access, passwords, inputs' },
      { label: 'Update', sub: 'system, components, application' },
      { label: 'Watch', sub: 'log, alerts, a yearly test' },
    ], caption: 'Figure 4 · The accented step is the second: test access, screen by screen, by changing a number. It is the test that finds the most, the fastest. What is no longer used is then closed, before fixing what is used.', alt: 'Six steps: inventory, test (accented), close, fix, update, watch.' },
    questions: { title: 'Six questions to put to whoever built the application', columns: ['An answer that reassures', 'An answer that worries'], rows: [
      { label: 'Where are rights checked?', cells: ['on the server, on every request', 'in the app: the buttons are hidden'] },
      { label: 'How are passwords kept?', cells: ['hashed and salted, nobody reads them', 'we can send you yours'] },
      { label: 'Where are the keys and secrets?', cells: ['on the server, out of the code', 'in the application’s code'] },
      { label: 'Who has admin access?', cells: ['a list of names, with two-step checks', 'one shared account, one password'] },
      { label: 'When was the last update?', cells: ['this month, components included', 'at delivery, two years ago'] },
      { label: 'What happens after ten tries?', cells: ['the account slows down, an alert goes out', 'nothing: you can try all night'] },
    ], caption: 'Figure 5 · Six questions, and for each an answer that reassures and an answer that worries. They are put in writing, to the contractor or to your team. A vague answer is already an answer.', alt: 'Matrix of six questions: where rights are checked, how passwords are kept, where the keys are, who has admin access, when the last update was, what happens after ten tries; for each, an answer that reassures and an answer that worries.' },
    calendrier: { title: 'Six weeks for an existing application', unit: 'wk', items: [
      { label: 'Inventory and tests', note: 'data kept, accounts, keys, components; access tested screen by screen', from: 0, to: 1, accent: true },
      { label: 'Close', note: 'unused accounts removed, keys changed, admin access cut down and doubled', from: 1, to: 2 },
      { label: 'Fix access', note: 'every request checked on the server, deny by default, attempts logged', from: 1, to: 4 },
      { label: 'Protect the data', note: 'passwords hashed, secrets taken out of the code, backups protected', from: 3, to: 5 },
      { label: 'Update', note: 'system, components, then a new version published on the app stores', from: 4, to: 6 },
      { label: 'Check', note: 'the same tests replayed, then a penetration test entrusted to a third party', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example, for an existing application. The accented period is the first: inventory and test, before touching the code. Access fixes take the longest, because they are done request by request. Indicative durations of a constructed example.', alt: 'Six-week calendar: inventory and tests (accented), close, fix access, protect the data, update, check.' },
  },
  ar: {
    cover: { eyebrow: 'أمن التطبيقات · الجزائر · 2027', title: ['كيف يُؤمَّن تطبيق', 'ما يُتحقَّق منه على الخادم'], subtitle: 'الصلاحيات تُراجَع عند كل طلب، كلمات المرور مجزَّأة، الأسرار خارج الشيفرة، والتحديثات', left: { label: 'رقم واحد تغيّر', sub: 'طلبية زبون آخر' }, right: { label: 'الطلب مرفوض', sub: 'بعد التحقق على الخادم' } },
    acces: { caption: 'الشكل 1 · زبون متصل يغيّر رقماً واحداً في عنوان طلبيته. التطبيق الهشّ يتحقق من الاتصال فقط، ويعيد طلبية زبون آخر. والتطبيق الآمن يتحقق كذلك من أن الطلبية له، يرفض، ويسجّل المحاولة. مثال مركَّب.' },
    couches: { title: 'تطبيق آمن، في خمس طبقات', layers: [
      { label: 'الهاتف', items: [{ name: 'على الهاتف: لا سرّ في الشيفرة، وأقل ما يمكن من البيانات محفوظ على الجهاز', sub: 'الهاتف يضيع، والتطبيق يُفكَّك' }] },
      { label: 'الطريق', items: [{ name: 'في الطريق: كل شيء يمر عبر اتصال مشفَّر، والصور والنداءات الداخلية كذلك', sub: 'دون استثناء، حتى داخلياً' }] },
      { label: 'الخادم', items: [{ name: 'على الخادم: كل طلب يُراجَع، من أنتم، وهل هذا لكم', sub: 'الطبقة التي يُحسم فيها الأمر', accent: true }] },
      { label: 'البيانات', items: [{ name: 'في القاعدة: كلمات مرور مجزَّأة، صلاحيات على قدر الحاجة، ونسخ احتياطية محمية', sub: 'ما كان سيجده سارق فيها' }] },
      { label: 'الزمن', items: [{ name: 'مع الزمن: تحديثات، مكوّنات متابَعة، سجل للدخول، وحسابات إدارة محمية', sub: 'الآمن يوم التسليم لا يبقى آمناً وحده' }] },
    ], caption: 'الشكل 2 · الطبقة المبرزة هي الخادم: هناك يُقبل كل طلب أو يُرفض. وشاشات الهاتف لا تحمي شيئاً بذاتها؛ هي تعرض فقط ما قبِل الخادم أن يجيب به.', alt: 'خمس طبقات: الهاتف؛ الطريق؛ الخادم (مبرزة)؛ البيانات؛ والزمن.' },
    coffre: { caption: 'الشكل 3 · جدول الحسابات، كما يقرؤه سارق. كما هي، كل شيء يُقرأ، وزبونان لهما كلمة المرور نفسها بوضوح. ومجزَّأة ومملَّحة، تصير كلمات المرور الأربع أربع سلاسل غير مقروءة ومختلفة. مثال مركَّب، والسلاسل مختصرة.' },
    etapes: { title: 'تأمين تطبيق موجود، في ست مراحل', items: [
      { label: 'الجرد', sub: 'ما يحفظه، ومن يدخل إليه' },
      { label: 'التجربة', sub: 'الصلاحيات: تغيير رقم', accent: true },
      { label: 'الإغلاق', sub: 'الحسابات والمفاتيح غير المستعملة' },
      { label: 'التصحيح', sub: 'الصلاحيات، كلمات المرور، والإدخالات' },
      { label: 'التحديث', sub: 'النظام، المكوّنات، والتطبيق' },
      { label: 'المراقبة', sub: 'السجل، التنبيهات، وتجربة سنوية' },
    ], caption: 'الشكل 4 · المرحلة المبرزة هي الثانية: تجربة الصلاحيات، شاشة بعد شاشة، بتغيير رقم. وهي التجربة التي تجد أكثر، وأسرع. ثم يُغلق ما لم يعد يُستعمل، قبل تصحيح ما يُستعمل.', alt: 'ست مراحل: الجرد، التجربة (مبرزة)، الإغلاق، التصحيح، التحديث، والمراقبة.' },
    questions: { title: 'ستة أسئلة تُطرح على من أنجز التطبيق', columns: ['جواب يُطمئن', 'جواب يُقلق'], rows: [
      { label: 'أين تُراجَع الصلاحيات؟', cells: ['على الخادم، عند كل طلب', 'في التطبيق: نخفي الأزرار'] },
      { label: 'كيف تُحفظ كلمات المرور؟', cells: ['مجزَّأة ومملَّحة، لا أحد يقرؤها', 'نستطيع أن نرسل لكم كلمتكم'] },
      { label: 'أين المفاتيح والأسرار؟', cells: ['على الخادم، خارج الشيفرة', 'في شيفرة التطبيق'] },
      { label: 'من له دخول الإدارة؟', cells: ['قائمة أسماء، مع تحقق بعاملين', 'حساب مشترك، وكلمة مرور واحدة'] },
      { label: 'متى كان آخر تحديث؟', cells: ['هذا الشهر، والمكوّنات كذلك', 'يوم التسليم، قبل سنتين'] },
      { label: 'ماذا يحدث بعد عشر محاولات؟', cells: ['الحساب يتباطأ، وتنبيه يُرسَل', 'لا شيء: يمكن المحاولة طوال الليل'] },
    ], caption: 'الشكل 5 · ستة أسئلة، ولكل واحد جواب يُطمئن وجواب يُقلق. تُطرح كتابياً، على مقدّم الخدمة أو على فريقكم. والجواب الغامض جواب في حد ذاته.', alt: 'مصفوفة من ستة أسئلة: أين تُراجَع الصلاحيات، كيف تُحفظ كلمات المرور، أين المفاتيح، من له دخول الإدارة، متى كان آخر تحديث، وماذا يحدث بعد عشر محاولات؛ ولكل واحد جواب يُطمئن وجواب يُقلق.' },
    calendrier: { title: 'ستة أسابيع لتطبيق موجود', unit: 'أسبوع', items: [
      { label: 'الجرد والتجارب', note: 'البيانات المحفوظة، الحسابات، المفاتيح، والمكوّنات؛ والصلاحيات مجرَّبة شاشة بعد شاشة', from: 0, to: 1, accent: true },
      { label: 'الإغلاق', note: 'حسابات غير مستعملة محذوفة، مفاتيح مغيَّرة، ودخول الإدارة مقلَّص ومضاعَف التحقق', from: 1, to: 2 },
      { label: 'تصحيح الصلاحيات', note: 'كل طلب يُراجَع على الخادم، الرفض هو الأصل، والمحاولات مسجَّلة', from: 1, to: 4 },
      { label: 'حماية البيانات', note: 'كلمات المرور مجزَّأة، الأسرار خارج الشيفرة، والنسخ الاحتياطية محمية', from: 3, to: 5 },
      { label: 'التحديث', note: 'النظام، المكوّنات، ثم نسخة جديدة منشورة على متاجر التطبيقات', from: 4, to: 6 },
      { label: 'المراجعة', note: 'التجارب نفسها تُعاد، ثم اختبار اختراق يُسنَد إلى طرف ثالث', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال، لتطبيق موجود. الفترة المبرزة هي الأولى: الجرد والتجربة، قبل لمس الشيفرة. وتصحيح الصلاحيات يأخذ أطول وقت، لأنه يتم طلباً بعد طلب. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ستة أسابيع: الجرد والتجارب (مبرزة)، الإغلاق، تصحيح الصلاحيات، حماية البيانات، التحديث، والمراجعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      acces: { svg: acces(e.acces, rtl), caption: t.acces.caption, alt: e.acces.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      coffre: { svg: coffre(e.coffre, rtl), caption: t.coffre.caption, alt: e.coffre.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      questions: { svg: matrix({ title: t.questions.title, columns: t.questions.columns, rows: t.questions.rows, rtl }), caption: t.questions.caption, alt: t.questions.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
