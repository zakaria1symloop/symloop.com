import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { compte, revue, STRINGS as SC } from './custom/publier.mjs';
export const slug = 'comment-publier-une-application-algerie-2027-google-play-app-store-compte-au-nom-de-l-entreprise-tests-revue-refus-huit-semaines';
const T = {
  fr: {
    cover: { eyebrow: 'Publier une application · Algérie · 2027', title: ['Comment publier une application', 'huit semaines, pas huit jours'], subtitle: 'Le compte au nom de l’entreprise, les tests, la revue, un refus possible, la diffusion par étapes', left: { label: 'Compte du développeur', sub: 'elle part avec lui' }, right: { label: 'Compte de la société', sub: 'elle reste à vous' } },
    compte: { caption: 'Figure 1 · La même application, publiée de deux façons. Sur le compte du développeur, la fiche, les utilisateurs, les notes et les statistiques sont chez lui : le jour où il part, tout y reste. Sur le compte de la société, il n’est qu’un invité : son accès se retire, et rien d’autre ne bouge. Exemple construit.' },
    stores: { title: 'Google Play et App Store : ce que chacun demande', columns: ['Google Play', 'App Store'], rows: [
      { label: 'Le compte', cells: ['personnel ou organisation, 25 dollars une fois', 'individuel ou organisation, 99 dollars par an'] },
      { label: 'La vérification', cells: ['identité vérifiée à la création du compte', 'numéro D-U-N-S exigé pour une organisation'] },
      { label: 'Les tests avant la production', cells: ['compte personnel récent : 12 testeurs pendant 14 jours', 'TestFlight : jusqu’à 10 000 testeurs externes'] },
      { label: 'La revue', cells: ['accès à la production : en général sept jours ou moins', 'la moitié en moins de 24 h, 90 % en moins de 48 h'] },
      { label: 'Une exigence qu’on oublie', cells: ['cibler Android 16 depuis le 31 août 2026', 'un compte de démonstration si l’application a une connexion'] },
      { label: 'La suppression de compte', cells: ['l’utilisateur doit pouvoir la demander', 'à proposer dans l’application elle-même'] },
      { label: 'La diffusion', cells: ['déploiement par étapes, à un pourcentage choisi', 'diffusion par phases sur sept jours'] },
    ], caption: 'Figure 2 · Sept lignes, deux stores. Les deux demandent un compte vérifié, une revue et la possibilité pour l’utilisateur de supprimer son compte ; ils diffèrent sur les tests imposés et sur les délais. Conditions lues dans l’aide de Google Play et d’Apple en novembre 2026 ; elles changent chaque année.', alt: 'Matrice comparant Google Play et l’App Store sur sept lignes : compte, vérification, tests avant la production, revue, exigence technique, suppression de compte, diffusion.' },
    pret: { title: 'Ce qui doit être prêt avant d’envoyer, en cinq couches', layers: [
      { label: 'Compte', items: [{ name: 'Au nom de l’entreprise, vérifié, deux administrateurs, le développeur invité avec un rôle', sub: 'la première chose à lancer, et la plus longue', accent: true }] },
      { label: 'Identité', items: [{ name: 'Nom de l’application, identifiant unique, icône, clés d’envoi conservées par l’entreprise', sub: 'l’identifiant ne se change plus une fois l’application publiée' }] },
      { label: 'Fiche', items: [{ name: 'Description, captures d’écran, catégorie, contact, en français, en arabe et en anglais', sub: 'ce que l’utilisateur lit avant d’installer' }] },
      { label: 'Conformité', items: [{ name: 'Politique de confidentialité, déclaration des données collectées, suppression de compte', sub: 'des motifs de refus simples à éviter' }] },
      { label: 'Technique', items: [{ name: 'Version d’Android ciblée de l’année, application complète, serveur allumé, compte de démonstration', sub: 'la revue essaie l’application comme un utilisateur' }] },
    ], caption: 'Figure 3 · La couche accentuée est la première : le compte, parce que sa vérification ne dépend pas de vous et ne se presse pas. Les quatre autres se préparent pendant ce temps : l’identité de l’application, sa fiche, sa conformité et sa technique.', alt: 'Cinq couches : compte (accentuée) ; identité ; fiche ; conformité ; technique.' },
    chemin: { title: 'Le chemin d’une version, en six temps', items: [
      { label: 'Compte', sub: 'au nom de l’entreprise, vérifié', accent: true },
      { label: 'Fiche', sub: 'textes, captures, confidentialité' },
      { label: 'Version signée', sub: 'identifiant, numéro de version' },
      { label: 'Tests', sub: 'en interne, puis avec de vrais utilisateurs' },
      { label: 'Revue', sub: 'le store essaie, accepte ou refuse' },
      { label: 'Diffusion', sub: 'par étapes, puis à tous' },
    ], caption: 'Figure 4 · Le temps accentué est le premier : le compte. Les trois suivants se préparent en parallèle ; la revue et la diffusion viennent à la fin, et se répètent ensuite à chaque mise à jour, en plus court.', alt: 'Six temps : compte (accentué), fiche, version signée, tests, revue, diffusion.' },
    revue: { caption: 'Figure 5 · Une version envoyée un lundi. Au premier passage, elle est refusée à la deuxième porte parce que le compte de démonstration manque ; corrigée et renvoyée le mercredi, elle est acceptée le jeudi. Les cinq portes reprennent les cinq chapitres des règles de revue d’Apple. Jours et motif sont un exemple construit.' },
    semaines: { title: 'Huit semaines avant la date annoncée', unit: 'sem.', items: [
      { label: 'Comptes et vérification', note: 'comptes au nom de l’entreprise sur les deux stores, numéro D-U-N-S, identité vérifiée, développeur invité', from: 0, to: 3, accent: true },
      { label: 'Fiche et conformité', note: 'textes en trois langues, captures, politique de confidentialité, déclaration des données, suppression de compte', from: 1, to: 4 },
      { label: 'Version et test interne', note: 'identifiant, signature, version d’Android ciblée, essais par l’équipe sur de vrais téléphones', from: 3, to: 5 },
      { label: 'Test fermé', note: 'de vrais utilisateurs pendant quatorze jours, retours corrigés, compte de démonstration vérifié', from: 4, to: 6 },
      { label: 'Revue, et un refus possible', note: 'envoi sur les deux stores, réponse au motif de refus, correction, nouvel envoi', from: 6, to: 7 },
      { label: 'Diffusion par étapes', note: 'quelques pour cent des utilisateurs, mesure des plantages, puis ouverture à tous à la date annoncée', from: 7, to: 8 },
    ], caption: 'Figure 6 · Huit semaines dans l’exemple, comptées à rebours depuis la date annoncée. La période accentuée est la première : trois semaines pour des comptes vérifiés, pendant lesquelles la fiche et la version se préparent. Le test fermé de quatorze jours et un refus possible occupent les semaines cinq à sept. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : comptes et vérification (accentué, trois semaines), fiche et conformité, version et test interne, test fermé, revue et refus possible, diffusion par étapes.' },
  },
  en: {
    cover: { eyebrow: 'Publishing an app · Algeria · 2027', title: ['How to publish an app', 'eight weeks, not eight days'], subtitle: 'The account in the company’s name, the tests, the review, a possible refusal, the staged rollout', left: { label: 'Developer’s account', sub: 'it leaves with him' }, right: { label: 'Company’s account', sub: 'it stays yours' } },
    compte: { caption: 'Figure 1 · The same app, published in two ways. On the developer’s account, the listing, the users, the ratings and the statistics are with him: the day he leaves, everything stays there. On the company’s account, he is only a guest: his access is removed, and nothing else moves. Constructed example.' },
    stores: { title: 'Google Play and App Store: what each one asks for', columns: ['Google Play', 'App Store'], rows: [
      { label: 'The account', cells: ['personal or organization, US$25 once', 'individual or organization, 99 USD a year'] },
      { label: 'Verification', cells: ['identity verified when the account is created', 'D-U-N-S Number required for an organization'] },
      { label: 'Tests before production', cells: ['recent personal account: 12 testers for 14 days', 'TestFlight: up to 10,000 external testers'] },
      { label: 'Review', cells: ['production access: usually seven days or less', 'half in under 24 hours, 90 % in under 48 hours'] },
      { label: 'A requirement people forget', cells: ['target Android 16 since 31 August 2026', 'a demo account if the app has a login'] },
      { label: 'Account deletion', cells: ['the user must be able to request it', 'to be offered inside the app itself'] },
      { label: 'Rollout', cells: ['staged rollout, at a chosen percentage', 'phased release over seven days'] },
    ], caption: 'Figure 2 · Seven rows, two stores. Both ask for a verified account, a review and a way for the user to delete their account; they differ on the tests imposed and on the times. Conditions read in the Google Play and Apple help pages in November 2026; they change every year.', alt: 'Matrix comparing Google Play and the App Store on seven rows: account, verification, tests before production, review, technical requirement, account deletion, rollout.' },
    pret: { title: 'What must be ready before sending, in five layers', layers: [
      { label: 'Account', items: [{ name: 'In the company’s name, verified, two administrators, the developer invited with a role', sub: 'the first thing to start, and the longest', accent: true }] },
      { label: 'Identity', items: [{ name: 'App name, unique identifier, icon, upload keys kept by the company', sub: 'the identifier can no longer be changed once the app is published' }] },
      { label: 'Listing', items: [{ name: 'Description, screenshots, category, contact, in French, Arabic and English', sub: 'what the user reads before installing' }] },
      { label: 'Compliance', items: [{ name: 'Privacy policy, declaration of the data collected, account deletion', sub: 'reasons for refusal that are simple to avoid' }] },
      { label: 'Technical', items: [{ name: 'This year’s target Android version, complete app, server switched on, demo account', sub: 'the review tries the app the way a user would' }] },
    ], caption: 'Figure 3 · The accented layer is the first: the account, because its verification does not depend on you and cannot be hurried. The other four are prepared in the meantime: the app’s identity, its listing, its compliance and its technical side.', alt: 'Five layers: account (accented); identity; listing; compliance; technical.' },
    chemin: { title: 'The path of a version, in six steps', items: [
      { label: 'Account', sub: 'in the company’s name, verified', accent: true },
      { label: 'Listing', sub: 'texts, screenshots, privacy' },
      { label: 'Signed version', sub: 'identifier, version number' },
      { label: 'Tests', sub: 'internal, then with real users' },
      { label: 'Review', sub: 'the store tries, accepts or refuses' },
      { label: 'Rollout', sub: 'in stages, then to everyone' },
    ], caption: 'Figure 4 · The accented step is the first: the account. The next three are prepared in parallel; review and rollout come at the end, and are then repeated at every update, more briefly.', alt: 'Six steps: account (accented), listing, signed version, tests, review, rollout.' },
    revue: { caption: 'Figure 5 · A version sent on a Monday. On the first pass it is refused at the second gate because the demo account is missing; fixed and sent again on Wednesday, it is accepted on Thursday. The five gates follow the five chapters of Apple’s review guidelines. Days and reason are a constructed example.' },
    semaines: { title: 'Eight weeks before the announced date', unit: 'wk', items: [
      { label: 'Accounts and verification', note: 'accounts in the company’s name on both stores, D-U-N-S Number, identity verified, developer invited', from: 0, to: 3, accent: true },
      { label: 'Listing and compliance', note: 'texts in three languages, screenshots, privacy policy, data declaration, account deletion', from: 1, to: 4 },
      { label: 'Version and internal test', note: 'identifier, signing, target Android version, trials by the team on real phones', from: 3, to: 5 },
      { label: 'Closed test', note: 'real users for fourteen days, feedback fixed, demo account checked', from: 4, to: 6 },
      { label: 'Review, and a possible refusal', note: 'submission to both stores, reply to the reason for refusal, fix, new submission', from: 6, to: 7 },
      { label: 'Staged rollout', note: 'a few per cent of users, crashes measured, then open to everyone on the announced date', from: 7, to: 8 },
    ], caption: 'Figure 6 · Eight weeks in the example, counted back from the announced date. The accented period is the first: three weeks for verified accounts, during which the listing and the version are prepared. The fourteen-day closed test and a possible refusal take weeks five to seven. Indicative durations from a constructed example.', alt: 'Eight-week calendar: accounts and verification (accented, three weeks), listing and compliance, version and internal test, closed test, review and possible refusal, staged rollout.' },
  },
  ar: {
    cover: { eyebrow: 'نشر تطبيق · الجزائر · 2027', title: ['كيف يُنشر تطبيق', 'ثمانية أسابيع، لا ثمانية أيام'], subtitle: 'الحساب باسم المؤسسة، الاختبارات، المراجعة، رفض محتمل، والنشر على مراحل', left: { label: 'حساب المطوِّر', sub: 'يغادر معه' }, right: { label: 'حساب الشركة', sub: 'يبقى لكم' } },
    compte: { caption: 'الشكل 1 · التطبيق نفسه، منشوراً بطريقتين. على حساب المطوِّر، البطاقة والمستعملون والتقييمات والإحصائيات عنده: ويوم يغادر، يبقى كل شيء هناك. وعلى حساب الشركة، ليس إلا مدعواً: يُسحب وصوله، ولا شيء آخر يتحرك. مثال مركَّب.' },
    stores: { title: 'غوغل بلاي وآب ستور: ما يطلبه كل واحد', columns: ['غوغل بلاي', 'آب ستور'], rows: [
      { label: 'الحساب', cells: ['شخصي أو لمؤسسة، 25 دولاراً مرة واحدة', 'فردي أو لمؤسسة، 99 دولاراً في السنة'] },
      { label: 'التحقق', cells: ['تحقق من الهوية عند إنشاء الحساب', 'رقم D-U-N-S مطلوب للمؤسسة'] },
      { label: 'الاختبارات قبل الإنتاج', cells: ['حساب شخصي حديث: 12 مختبِراً مدة 14 يوماً', 'TestFlight: إلى 10 000 مختبِر خارجي'] },
      { label: 'المراجعة', cells: ['الوصول إلى الإنتاج: سبعة أيام أو أقل في العادة', 'النصف في أقل من 24 ساعة، و90 % في أقل من 48'] },
      { label: 'شرط يُنسى', cells: ['استهداف أندرويد 16 منذ 31 أوت 2026', 'حساب تجربة إذا كان في التطبيق تسجيل دخول'] },
      { label: 'حذف الحساب', cells: ['يجب أن يستطيع المستعمل طلبه', 'يُقترح داخل التطبيق نفسه'] },
      { label: 'النشر', cells: ['نشر على مراحل، بنسبة مختارة', 'نشر على أطوار خلال سبعة أيام'] },
    ], caption: 'الشكل 2 · سبعة أسطر، ومتجران. كلاهما يطلب حساباً متحقَّقاً منه، مراجعة، وإمكانية أن يحذف المستعمل حسابه؛ ويختلفان في الاختبارات المفروضة وفي الآجال. الشروط مقروءة في مساعدة غوغل بلاي وآبل في نوفمبر 2026؛ وهي تتغيّر كل سنة.', alt: 'مصفوفة تقارن غوغل بلاي وآب ستور في سبعة أسطر: الحساب، التحقق، الاختبارات قبل الإنتاج، المراجعة، الشرط التقني، حذف الحساب، والنشر.' },
    pret: { title: 'ما يجب أن يكون جاهزاً قبل الإرسال، في خمس طبقات', layers: [
      { label: 'الحساب', items: [{ name: 'باسم المؤسسة، متحقَّق منه، بمسؤولَين، والمطوِّر مدعو بدور', sub: 'أول ما يُطلق، والأطول', accent: true }] },
      { label: 'الهوية', items: [{ name: 'اسم التطبيق، معرّف فريد، أيقونة، ومفاتيح الإرسال محفوظة عند المؤسسة', sub: 'المعرّف لا يتغيّر بعد نشر التطبيق' }] },
      { label: 'البطاقة', items: [{ name: 'الوصف، لقطات الشاشة، الصنف، وجهة الاتصال، بالفرنسية والعربية والإنجليزية', sub: 'ما يقرؤه المستعمل قبل التنصيب' }] },
      { label: 'المطابقة', items: [{ name: 'سياسة الخصوصية، التصريح بالبيانات المجموعة، وحذف الحساب', sub: 'أسباب رفض يسهل تفاديها' }] },
      { label: 'التقني', items: [{ name: 'نسخة أندرويد المستهدَفة لهذه السنة، تطبيق كامل، خادم مشغَّل، وحساب تجربة', sub: 'المراجعة تجرّب التطبيق كما يفعل مستعمل' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي الأولى: الحساب، لأن التحقق منه لا يتوقف عليكم ولا يُستعجَل. والأربع الأخرى تُحضَّر في تلك الأثناء: هوية التطبيق، بطاقته، مطابقته، وجانبه التقني.', alt: 'خمس طبقات: الحساب (مبرزة)؛ الهوية؛ البطاقة؛ المطابقة؛ التقني.' },
    chemin: { title: 'مسار إصدار، في ست مراحل', items: [
      { label: 'الحساب', sub: 'باسم المؤسسة، متحقَّق منه', accent: true },
      { label: 'البطاقة', sub: 'نصوص، لقطات، وخصوصية' },
      { label: 'إصدار موقَّع', sub: 'المعرّف ورقم الإصدار' },
      { label: 'الاختبارات', sub: 'داخلياً، ثم مع مستعملين حقيقيين' },
      { label: 'المراجعة', sub: 'المتجر يجرّب، يقبل أو يرفض' },
      { label: 'النشر', sub: 'على مراحل، ثم للجميع' },
    ], caption: 'الشكل 4 · المرحلة المبرزة هي الأولى: الحساب. والثلاث الموالية تُحضَّر بالتوازي؛ والمراجعة والنشر يأتيان في النهاية، ويتكرران بعدها عند كل تحديث، بمدة أقصر.', alt: 'ست مراحل: الحساب (مبرزة)، البطاقة، إصدار موقَّع، الاختبارات، المراجعة، النشر.' },
    revue: { caption: 'الشكل 5 · إصدار أُرسل يوم اثنين. في المرور الأول يُرفض عند الباب الثاني لأن حساب التجربة ناقص؛ يُصحَّح ويُعاد إرساله يوم الأربعاء، فيُقبل يوم الخميس. والأبواب الخمسة تتبع الفصول الخمسة لقواعد المراجعة عند آبل. الأيام والسبب مثال مركَّب.' },
    semaines: { title: 'ثمانية أسابيع قبل التاريخ المعلَن', unit: 'أسبوع', items: [
      { label: 'الحسابات والتحقق', note: 'حسابات باسم المؤسسة في المتجرين، رقم D-U-N-S، تحقق من الهوية، ودعوة المطوِّر', from: 0, to: 3, accent: true },
      { label: 'البطاقة والمطابقة', note: 'نصوص بثلاث لغات، لقطات، سياسة الخصوصية، التصريح بالبيانات، وحذف الحساب', from: 1, to: 4 },
      { label: 'الإصدار والاختبار الداخلي', note: 'المعرّف، التوقيع، نسخة أندرويد المستهدَفة، وتجارب الفريق على هواتف حقيقية', from: 3, to: 5 },
      { label: 'الاختبار المغلق', note: 'مستعملون حقيقيون مدة أربعة عشر يوماً، ملاحظات تُصحَّح، وحساب تجربة يُراجَع', from: 4, to: 6 },
      { label: 'المراجعة، ورفض محتمل', note: 'إرسال إلى المتجرين، جواب على سبب الرفض، تصحيح، وإرسال جديد', from: 6, to: 7 },
      { label: 'النشر على مراحل', note: 'نسبة صغيرة من المستعملين، قياس الأعطال، ثم الفتح للجميع في التاريخ المعلَن', from: 7, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع في المثال، محسوبة رجوعاً من التاريخ المعلَن. الفترة المبرزة هي الأولى: ثلاثة أسابيع لحسابات متحقَّق منها، تُحضَّر خلالها البطاقة والإصدار. والاختبار المغلق لأربعة عشر يوماً ورفض محتمل يأخذان الأسابيع من الخامس إلى السابع. مدد تقريبية لمثال مركَّب.', alt: 'تقويم ثمانية أسابيع: الحسابات والتحقق (مبرزة، ثلاثة أسابيع)، البطاقة والمطابقة، الإصدار والاختبار الداخلي، الاختبار المغلق، المراجعة ورفض محتمل، النشر على مراحل.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      compte: { svg: compte(e.compte, rtl), caption: t.compte.caption, alt: e.compte.alt },
      stores: { svg: matrix({ title: t.stores.title, columns: t.stores.columns, rows: t.stores.rows, rtl }), caption: t.stores.caption, alt: t.stores.alt },
      pret: { svg: layers({ title: t.pret.title, layers: t.pret.layers, rtl }), caption: t.pret.caption, alt: t.pret.alt },
      chemin: { svg: steps({ title: t.chemin.title, steps: t.chemin.items, arrows: true, rtl }), caption: t.chemin.caption, alt: t.chemin.alt },
      revue: { svg: revue(e.revue, rtl), caption: t.revue.caption, alt: e.revue.alt },
      semaines: { svg: timeline({ title: t.semaines.title, items: t.semaines.items, total: 8, tick: 1, unit: t.semaines.unit, rtl }), caption: t.semaines.caption, alt: t.semaines.alt },
    },
  };
}
