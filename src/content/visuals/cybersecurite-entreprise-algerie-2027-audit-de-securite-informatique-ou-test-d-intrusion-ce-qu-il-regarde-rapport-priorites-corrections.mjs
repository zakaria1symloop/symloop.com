import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { surface, priorites, STRINGS as SC } from './custom/audit.mjs';
export const slug = 'cybersecurite-entreprise-algerie-2027-audit-de-securite-informatique-ou-test-d-intrusion-ce-qu-il-regarde-rapport-priorites-corrections';
const T = {
  fr: {
    cover: { eyebrow: 'Cybersécurité · Algérie · 2027', title: ['Audit de sécurité informatique', 'ce qu’il regarde, dans l’ordre'], subtitle: 'Audit ou test d’intrusion, ce qu’un inconnu voit de vous, des constats classés, cinq corrections à faire', left: { label: 'Un rapport de 80 pages', sub: 'que personne ne lit' }, right: { label: 'Cinq corrections', sub: 'dans l’ordre, cette semaine' } },
    comparatif: { title: 'Audit ou test d’intrusion : six différences', columns: ['Audit de sécurité', 'Test d’intrusion'], rows: [
      { label: 'La question posée', cells: ['où sont nos faiblesses, et dans quel ordre corriger', 'un attaquant peut-il entrer, et jusqu’où va-t-il'] },
      { label: 'Ce qu’on regarde', cells: ['réglages, comptes, mises à jour, sauvegardes, organisation', 'une cible précise, attaquée comme le ferait un inconnu'] },
      { label: 'Ce que vous donnez', cells: ['des accès en lecture et du temps avec vos équipes', 'un périmètre et un accord écrit, parfois rien d’autre'] },
      { label: 'Ce que vous recevez', cells: ['des constats classés, avec la correction de chacun', 'la preuve des chemins d’attaque qui ont abouti'] },
      { label: 'Quand le faire', cells: ['en premier, et à chaque changement important', 'après avoir corrigé, pour vérifier que cela tient'] },
      { label: 'Le risque', cells: ['un rapport trop long, que personne ne lit', 'une attaque simulée sur un système pas encore rangé'] },
    ], caption: 'Figure 1 · Deux prestations, deux questions. L’audit cherche toutes les faiblesses et les classe ; le test d’intrusion vise une cible et prouve qu’on peut y entrer. Le scan de vulnérabilités, lui, n’est pas une troisième prestation : c’est un programme que les deux utilisent. Pour une entreprise qui n’a jamais rien fait, l’ordre est : auditer, corriger, puis tester.', alt: 'Matrice de six différences entre un audit de sécurité et un test d’intrusion : la question posée, ce qu’on regarde, ce que vous donnez, ce que vous recevez, quand le faire, le risque.' },
    surface: { caption: 'Figure 2 · Le premier regard d’un audit se fait de l’extérieur, sans aucun mot de passe : six portes visibles d’internet, avec la gravité de ce qu’on y trouve sur une échelle de 0 à 10. Dans l’exemple, un port de bureau à distance ouvert est critique, la messagerie sans double vérification et le site non mis à jour sont élevés. Constats et notes sont un exemple construit ; les bandes de gravité sont celles de l’échelle CVSS.' },
    etapes: { title: 'Un audit de sécurité, en six temps', items: [
      { label: 'Cadrer', sub: 'périmètre, dates, accord écrit, personnes prévenues', accent: true },
      { label: 'Inventorier', sub: 'postes, serveurs, comptes, services en ligne' },
      { label: 'Voir de l’extérieur', sub: 'ce qu’internet voit de vous' },
      { label: 'Vérifier à l’intérieur', sub: 'comptes, droits, mises à jour, sauvegardes' },
      { label: 'Classer', sub: 'par gravité, puis par effort' },
      { label: 'Corriger, recontrôler', sub: 'les urgences d’abord, contrôle à trois mois' },
    ], caption: 'Figure 3 · Le temps accentué est le premier : un périmètre et un accord écrit, sans lesquels il n’y a pas d’audit mais une intrusion. Le dernier temps est celui que beaucoup d’offres oublient : un audit sans correction ni recontrôle n’est qu’une photographie.', alt: 'Six temps : cadrer (accentué), inventorier, voir de l’extérieur, vérifier à l’intérieur, classer, corriger et recontrôler.' },
    priorites: { caption: 'Figure 4 · Les quatorze constats de l’exemple, placés selon la gravité et l’effort de correction. Cinq sont à la fois graves et rapides : tout le critique et tout l’élevé se corrigent en moins d’une semaine, sans rien acheter. Les neuf autres, moyens ou faibles, demandent des jours ou des semaines et se planifient. Constats, notes et efforts sont un exemple construit.' },
    couches: { title: 'Ce qu’un audit examine, en cinq couches', layers: [
      { label: 'Exposition', items: [{ name: 'Tout ce qui répond depuis internet : accès à distance, site, messagerie, applications, nom de domaine', sub: 'ce qu’un inconnu peut essayer sans rien savoir de vous', accent: true }] },
      { label: 'Identités', items: [{ name: 'Comptes, mots de passe, double vérification, droits d’administrateur, comptes d’anciens salariés', sub: 'un compte de trop ou un droit de trop suffit à ouvrir le reste' }] },
      { label: 'Postes et serveurs', items: [{ name: 'Mises à jour, protection contre les logiciels malveillants, chiffrement des portables, logiciels installés', sub: 'ce qui n’est plus mis à jour finit par avoir une faille connue' }] },
      { label: 'Données', items: [{ name: 'Sauvegardes réellement restaurées, partages ouverts, fichiers sensibles, départ d’un salarié', sub: 'ce que vous perdriez, et ce qu’on pourrait vous prendre' }] },
      { label: 'Organisation', items: [{ name: 'Qui décide, qui fait quoi en cas d’incident, ce que savent les équipes, ce que disent les contrats', sub: 'la technique ne tient que si quelqu’un en a la charge' }] },
    ], caption: 'Figure 5 · La couche accentuée est l’exposition : c’est par elle que commence l’auditeur, parce que c’est par elle que commencerait un inconnu. Les quatre suivantes se vérifient de l’intérieur, avec vos équipes ; la dernière explique souvent pourquoi les quatre autres en sont là.', alt: 'Cinq couches : exposition (accentuée) ; identités ; postes et serveurs ; données ; organisation.' },
    calendrier: { title: 'Un audit en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Cadrage et inventaire', note: 'périmètre, accord écrit, liste des postes, serveurs, comptes et services en ligne, entretiens avec le gérant et l’informaticien', from: 0, to: 1 },
      { label: 'Mesures et vérifications', note: 'regard de l’extérieur, comptes et droits, mises à jour, essai de restauration d’une sauvegarde, réseau et Wi-Fi', from: 1, to: 2, accent: true },
      { label: 'Rapport et urgences', note: 'constats classés par gravité et par effort, restitution au gérant, correction des cinq premiers dans la semaine', from: 2, to: 3 },
      { label: 'Suite et recontrôle', note: 'plan des corrections restantes avec un responsable et une date, recontrôle des urgences, rendez-vous à trois mois', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple, pour quarante postes. La semaine accentuée est celle des mesures ; la troisième est celle qui compte pour le gérant, puisque les cinq constats les plus graves y sont corrigés.', alt: 'Calendrier de quatre semaines : cadrage et inventaire, mesures et vérifications (accentué), rapport et urgences, suite et recontrôle.' },
  },
  en: {
    cover: { eyebrow: 'Cybersecurity · Algeria · 2027', title: ['IT security audit', 'what it looks at, in order'], subtitle: 'Audit or penetration test, what a stranger sees of you, ranked findings, five fixes this week', left: { label: 'An 80-page report', sub: 'that nobody reads' }, right: { label: 'Five fixes', sub: 'in order, this week' } },
    comparatif: { title: 'Audit or penetration test: six differences', columns: ['Security audit', 'Penetration test'], rows: [
      { label: 'The question asked', cells: ['where are our weaknesses, and in what order to fix', 'can an attacker get in, and how far do they go'] },
      { label: 'What is looked at', cells: ['settings, accounts, updates, backups, organisation', 'one precise target, attacked as a stranger would'] },
      { label: 'What you provide', cells: ['read access and time with your teams', 'a scope and a written agreement, sometimes nothing else'] },
      { label: 'What you receive', cells: ['ranked findings, with the fix for each', 'proof of the attack paths that succeeded'] },
      { label: 'When to do it', cells: ['first, and at every significant change', 'after fixing, to check that it holds'] },
      { label: 'The risk', cells: ['a report too long, that nobody reads', 'a simulated attack on a system not yet tidied'] },
    ], caption: 'Figure 1 · Two services, two questions. The audit looks for all the weaknesses and ranks them; the penetration test aims at a target and proves that it can be entered. The vulnerability scan is not a third service: it is a program both of them use. For a company that has never done anything, the order is: audit, fix, then test.', alt: 'Matrix of six differences between a security audit and a penetration test: the question asked, what is looked at, what you provide, what you receive, when to do it, the risk.' },
    surface: { caption: 'Figure 2 · An audit’s first look is from outside, without any password: six doors visible from the internet, with the severity of what is found there on a 0 to 10 scale. In the example, an open remote desktop port is critical, mail without two-step verification and the website not updated are high. Findings and scores are a constructed example; the severity bands are those of the CVSS scale.' },
    etapes: { title: 'A security audit, in six steps', items: [
      { label: 'Scope it', sub: 'scope, dates, written agreement, people warned', accent: true },
      { label: 'Take stock', sub: 'workstations, servers, accounts, online services' },
      { label: 'Look from outside', sub: 'what the internet sees of you' },
      { label: 'Check inside', sub: 'accounts, rights, updates, backups' },
      { label: 'Rank', sub: 'by severity, then by effort' },
      { label: 'Fix, check again', sub: 'emergencies first, check at three months' },
    ], caption: 'Figure 3 · The accented step is the first: a scope and a written agreement, without which there is no audit but an intrusion. The last step is the one many offers forget: an audit with no fixing and no second check is only a photograph.', alt: 'Six steps: scope it (accented), take stock, look from outside, check inside, rank, fix and check again.' },
    priorites: { caption: 'Figure 4 · The fourteen findings of the example, placed by severity and correction effort. Five are both serious and quick: everything critical and everything high is fixed in under a week, without buying anything. The other nine, medium or low, take days or weeks and are planned. Findings, scores and efforts are a constructed example.' },
    couches: { title: 'What an audit examines, in five layers', layers: [
      { label: 'Exposure', items: [{ name: 'Everything that answers from the internet: remote access, website, mail, applications, domain name', sub: 'what a stranger can try without knowing anything about you', accent: true }] },
      { label: 'Identities', items: [{ name: 'Accounts, passwords, two-step verification, administrator rights, former employees’ accounts', sub: 'one account too many or one right too many is enough to open the rest' }] },
      { label: 'PCs and servers', items: [{ name: 'Updates, protection against malicious software, laptop encryption, installed software', sub: 'what is no longer updated ends up with a known flaw' }] },
      { label: 'Data', items: [{ name: 'Backups actually restored, open shares, sensitive files, an employee’s departure', sub: 'what you would lose, and what could be taken from you' }] },
      { label: 'Organisation', items: [{ name: 'Who decides, who does what in an incident, what the teams know, what the contracts say', sub: 'the technical side only holds if someone is in charge of it' }] },
    ], caption: 'Figure 5 · The accented layer is exposure: the auditor starts there, because a stranger would start there. The next four are checked from inside, with your teams; the last one often explains why the other four are where they are.', alt: 'Five layers: exposure (accented); identities; PCs and servers; data; organisation.' },
    calendrier: { title: 'An audit in 2027, in weeks', unit: 'wk', items: [
      { label: 'Scoping and stock-take', note: 'scope, written agreement, list of workstations, servers, accounts and online services, interviews with the manager and the IT person', from: 0, to: 1 },
      { label: 'Measurements and checks', note: 'look from outside, accounts and rights, updates, trial restore of a backup, network and Wi-Fi', from: 1, to: 2, accent: true },
      { label: 'Report and emergencies', note: 'findings ranked by severity and effort, debrief with the manager, the first five fixed within the week', from: 2, to: 3 },
      { label: 'Follow-up and second check', note: 'plan for the remaining fixes with an owner and a date, second check of the emergencies, meeting at three months', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example, for forty workstations. The accented week is the measurements; the third is the one that counts for the manager, since the five most serious findings are fixed during it.', alt: 'Four-week calendar: scoping and stock-take, measurements and checks (accented), report and emergencies, follow-up and second check.' },
  },
  ar: {
    cover: { eyebrow: 'الأمن السيبراني · الجزائر · 2027', title: ['تدقيق أمن الإعلام الآلي', 'ماذا يفحص، وبأي ترتيب'], subtitle: 'تدقيق أم اختبار اختراق، ما يراه مجهول منكم، ملاحظات مرتَّبة، وخمسة تصحيحات هذا الأسبوع', left: { label: 'تقرير من 80 صفحة', sub: 'لا يقرؤه أحد' }, right: { label: 'خمسة تصحيحات', sub: 'بالترتيب، هذا الأسبوع' } },
    comparatif: { title: 'تدقيق أم اختبار اختراق: ستة فروق', columns: ['التدقيق الأمني', 'اختبار الاختراق'], rows: [
      { label: 'السؤال المطروح', cells: ['أين نقاط ضعفنا، وبأي ترتيب نصحّح', 'هل يستطيع مهاجم الدخول، وإلى أين يصل'] },
      { label: 'ما يُفحَص', cells: ['الإعدادات، الحسابات، التحديثات، النسخ، والتنظيم', 'هدف محدَّد، يُهاجَم كما يفعل مجهول'] },
      { label: 'ما تقدّمونه', cells: ['وصول للقراءة ووقت مع فرقكم', 'محيط وموافقة مكتوبة، وأحياناً لا شيء آخر'] },
      { label: 'ما تستلمونه', cells: ['ملاحظات مرتَّبة، مع تصحيح كل واحدة', 'الدليل على مسارات الهجوم التي نجحت'] },
      { label: 'متى يُنجَز', cells: ['أولاً، وعند كل تغيير مهم', 'بعد التصحيح، للتحقق من أنه يصمد'] },
      { label: 'الخطر', cells: ['تقرير طويل جداً، لا يقرؤه أحد', 'هجوم محاكى على نظام لم يُرتَّب بعد'] },
    ], caption: 'الشكل 1 · خدمتان، وسؤالان. التدقيق يبحث عن كل نقاط الضعف ويرتّبها؛ واختبار الاختراق يستهدف هدفاً ويثبت إمكانية الدخول إليه. أما مسح الثغرات فليس خدمة ثالثة: هو برنامج يستعمله الاثنان. ولمؤسسة لم تفعل شيئاً قط، الترتيب هو: التدقيق، التصحيح، ثم الاختبار.', alt: 'مصفوفة ستة فروق بين التدقيق الأمني واختبار الاختراق: السؤال المطروح، ما يُفحَص، ما تقدّمونه، ما تستلمونه، متى يُنجَز، والخطر.' },
    surface: { caption: 'الشكل 2 · النظرة الأولى في التدقيق تكون من الخارج، دون أي كلمة مرور: ستة أبواب تُرى من الإنترنت، مع خطورة ما يوجد فيها على سلّم من 0 إلى 10. في المثال، منفذ سطح المكتب البعيد المفتوح حرج، والبريد دون تحقق بخطوتين والموقع غير المحدَّث مرتفعان. الملاحظات والعلامات مثال مركَّب؛ ونطاقات الخطورة هي نطاقات سلّم ⁦CVSS⁩.' },
    etapes: { title: 'تدقيق أمني، في ست مراحل', items: [
      { label: 'التأطير', sub: 'المحيط، التواريخ، موافقة مكتوبة، ومن يُعلَم', accent: true },
      { label: 'الجرد', sub: 'الحواسيب، الخوادم، الحسابات، والخدمات على الإنترنت' },
      { label: 'النظر من الخارج', sub: 'ما يراه الإنترنت منكم' },
      { label: 'التحقق من الداخل', sub: 'الحسابات، الصلاحيات، التحديثات، والنسخ' },
      { label: 'الترتيب', sub: 'حسب الخطورة، ثم حسب الجهد' },
      { label: 'التصحيح والمراجعة', sub: 'العاجل أولاً، ومراقبة بعد ثلاثة أشهر' },
    ], caption: 'الشكل 3 · المرحلة المبرزة هي الأولى: محيط وموافقة مكتوبة، من دونهما لا يوجد تدقيق بل اختراق. والمرحلة الأخيرة هي التي تنساها عروض كثيرة: تدقيق دون تصحيح ولا مراقبة ثانية ليس إلا صورة.', alt: 'ست مراحل: التأطير (مبرزة)، الجرد، النظر من الخارج، التحقق من الداخل، الترتيب، التصحيح والمراجعة.' },
    priorites: { caption: 'الشكل 4 · الملاحظات الأربع عشرة للمثال، موضوعة حسب الخطورة وجهد التصحيح. خمس منها خطيرة وسريعة معاً: كل الحرج وكل المرتفع يُصحَّح في أقل من أسبوع، دون شراء شيء. والتسع الأخرى، متوسطة أو ضعيفة، تتطلب أياماً أو أسابيع وتُبرمَج. الملاحظات والعلامات والجهود مثال مركَّب.' },
    couches: { title: 'ما يفحصه التدقيق، في خمس طبقات', layers: [
      { label: 'الانكشاف', items: [{ name: 'كل ما يجيب من الإنترنت: الوصول عن بعد، الموقع، البريد، التطبيقات، واسم النطاق', sub: 'ما يمكن أن يجرّبه مجهول دون أن يعرف عنكم شيئاً', accent: true }] },
      { label: 'الهويات', items: [{ name: 'الحسابات، كلمات المرور، التحقق بخطوتين، صلاحيات المسؤول، وحسابات الأجراء السابقين', sub: 'حساب زائد أو صلاحية زائدة يكفي لفتح الباقي' }] },
      { label: 'الحواسيب والخوادم', items: [{ name: 'التحديثات، الحماية من البرمجيات الخبيثة، تشفير الحواسيب المحمولة، والبرامج المنصَّبة', sub: 'ما لم يعد يُحدَّث ينتهي بثغرة معروفة' }] },
      { label: 'البيانات', items: [{ name: 'نسخ احتياطية استُرجعت فعلاً، مجلدات مفتوحة، ملفات حساسة، ومغادرة أجير', sub: 'ما ستخسرونه، وما يمكن أن يؤخذ منكم' }] },
      { label: 'التنظيم', items: [{ name: 'من يقرّر، من يفعل ماذا عند الحادث، ما تعرفه الفرق، وما تقوله العقود', sub: 'الجانب التقني لا يصمد إلا إذا كان أحدهم مكلَّفاً به' }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي الانكشاف: منها يبدأ المدقِّق، لأن منها يبدأ المجهول. والأربع الموالية تُراجَع من الداخل، مع فرقكم؛ والأخيرة تفسّر غالباً لماذا الأربع الأخرى على حالها.', alt: 'خمس طبقات: الانكشاف (مبرزة)؛ الهويات؛ الحواسيب والخوادم؛ البيانات؛ التنظيم.' },
    calendrier: { title: 'تدقيق سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'التأطير والجرد', note: 'المحيط، الموافقة المكتوبة، قائمة الحواسيب والخوادم والحسابات والخدمات على الإنترنت، ولقاءات مع المسيّر والتقني', from: 0, to: 1 },
      { label: 'القياسات والتحقق', note: 'النظر من الخارج، الحسابات والصلاحيات، التحديثات، تجربة استرجاع نسخة احتياطية، الشبكة والواي فاي', from: 1, to: 2, accent: true },
      { label: 'التقرير والعاجل', note: 'ملاحظات مرتَّبة حسب الخطورة والجهد، عرض على المسيّر، وتصحيح الخمس الأولى خلال الأسبوع', from: 2, to: 3 },
      { label: 'المتابعة والمراقبة', note: 'خطة للتصحيحات الباقية بمسؤول وتاريخ، مراقبة ثانية للعاجل، وموعد بعد ثلاثة أشهر', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال، لأربعين حاسوباً. الأسبوع المبرز هو القياسات؛ والثالث هو الذي يهمّ المسيّر، لأن الملاحظات الخمس الأخطر تُصحَّح فيه.', alt: 'تقويم أربعة أسابيع: التأطير والجرد، القياسات والتحقق (مبرز)، التقرير والعاجل، المتابعة والمراقبة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      comparatif: { svg: matrix({ title: t.comparatif.title, columns: t.comparatif.columns, rows: t.comparatif.rows, rtl }), caption: t.comparatif.caption, alt: t.comparatif.alt },
      surface: { svg: surface(e.surface, rtl), caption: t.surface.caption, alt: e.surface.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      priorites: { svg: priorites(e.priorites, rtl), caption: t.priorites.caption, alt: e.priorites.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
