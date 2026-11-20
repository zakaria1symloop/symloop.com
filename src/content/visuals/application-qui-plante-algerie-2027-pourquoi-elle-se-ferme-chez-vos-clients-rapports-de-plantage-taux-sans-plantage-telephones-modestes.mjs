import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { grille, causes, STRINGS as SC } from './custom/plantage.mjs';
export const slug = 'application-qui-plante-algerie-2027-pourquoi-elle-se-ferme-chez-vos-clients-rapports-de-plantage-taux-sans-plantage-telephones-modestes';
const T = {
  fr: {
    cover: { eyebrow: 'Application mobile · Algérie · 2027', title: ['Application qui plante', 'chez vos clients, pas chez vous'], subtitle: 'Rapports de plantage, causes classées, téléphones des clients, correctifs testés, sortie par paliers', left: { label: 'Elle se ferme toute seule', sub: 'personne ne sait où ni pourquoi' }, right: { label: 'Chaque plantage est lu', sub: 'les trois premières causes d’abord' } },
    grille: { caption: 'Figure 1 · Les 3 800 clients de l’exemple, rangés par mémoire du téléphone et par version d’Android. La part de ceux qui subissent un plantage chaque jour va de 12,8 % sur un téléphone de 2 Go ancien à 0,1 % sur le téléphone de 8 Go avec lequel le développeur teste. Les téléphones de 2 et 3 Go représentent 40 % des clients et 89 % des plantages ; le taux d’ensemble, 2,9 %, dépasse le seuil de 1,09 % publié par Android vitals. Parts et taux sont un exemple construit.' },
    causes: { caption: 'Figure 2 · À gauche, ce que contient un rapport de plantage : l’appareil, la version, l’écran, la mémoire libre, les dernières actions, l’erreur, et la trace, illisible telle quelle puis relue grâce au fichier de correspondance de la version. À droite, quarante et une causes classées par clients touchés : les trois premières font 78 % des plantages. Causes, parts et noms de fichiers sont un exemple construit.' },
    couches: { title: 'Une application stable, en cinq couches', layers: [
      { label: 'Observer', items: [{ name: 'Un rapport à chaque plantage et à chaque blocage, avec l’appareil, la version, l’écran et les dernières actions', sub: 'sans rapport, il ne reste que les avis du store' }] },
      { label: 'Trier', items: [{ name: 'Les rapports regroupés par cause, les causes classées par nombre de clients touchés, version par version', sub: 'quelques causes font souvent l’essentiel des plantages', accent: true }] },
      { label: 'Reproduire', items: [{ name: 'Les téléphones réellement présents chez les clients, mémoire faible, réseau coupé, base locale pleine', sub: 'ce qui n’est pas reproduit n’est pas corrigé, seulement deviné' }] },
      { label: 'Corriger', items: [{ name: 'La cause et non le symptôme, avec un test automatique qui empêche le plantage de revenir', sub: 'un correctif sans test revient deux versions plus tard' }] },
      { label: 'Livrer', items: [{ name: 'Sortie par paliers, seuil de plantage écrit avant, arrêt si le seuil est franchi, réponse aux avis', sub: 'le chiffre du matin décide, pas l’impression' }] },
    ], caption: 'Figure 3 · La couche accentuée est le tri : c’est elle qui décide de ce qu’on corrige d’abord. Observer fournit la matière ; reproduire, corriger et livrer ne valent que pour les causes que le tri a désignées.', alt: 'Cinq couches : observer ; trier (accentuée) ; reproduire ; corriger ; livrer.' },
    situations: { title: 'Six situations réelles, et ce qu’il faut faire', columns: ['Ce qui se passe', 'Ce qu’il faut faire'], rows: [
      { label: 'Elle marche chez nous, elle plante chez les clients', cells: ['Testée sur des téléphones récents', 'tests sur les téléphones réellement présents chez les clients, dont les plus modestes'] },
      { label: 'Le développeur n’arrive pas à reproduire', cells: ['Aucun rapport, seulement des avis', 'rapport automatique avec appareil, version, écran et dernières actions'] },
      { label: 'Elle se ferme quand on ouvre le catalogue', cells: ['Des photos trop lourdes pour la mémoire', 'images à la taille de l’écran, mémoire libérée, liste chargée par pages'] },
      { label: 'Elle plante quand le réseau coupe', cells: ['Une réponse vide que le code n’attendait pas', 'chaque appel prévoit l’échec, le délai dépassé et la réponse vide'] },
      { label: 'Elle se fige, puis Android propose de la fermer', cells: ['Un traitement long bloque l’affichage', 'travail lourd hors du fil de l’affichage, écran qui répond pendant le chargement'] },
      { label: 'Depuis la mise à jour, la note du store a chuté', cells: ['Sortie à tous les clients d’un coup', 'sortie par paliers, seuil de plantage écrit avant, arrêt si le seuil est franchi'] },
    ], caption: 'Figure 4 · Les deux premières lignes disent pourquoi personne ne voit le problème ; les trois suivantes sont les causes les plus courantes, mémoire, réseau, blocage ; la dernière dit comment une mauvaise version atteint tout le monde. Aucune ne demande de refaire l’application.', alt: 'Matrice de six situations : marche au bureau et plante chez les clients, plantage non reproduit, fermeture au catalogue, plantage quand le réseau coupe, application figée, note du store en baisse après une mise à jour ; ce qui se passe et ce qu’il faut faire.' },
    calendrier: { title: 'Stabiliser une application en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Brancher et lire', note: 'outil de rapports installé, fichiers de correspondance gardés, version publiée, rapports lus par appareil et par écran', from: 0, to: 1 },
      { label: 'Trier et reproduire', note: 'causes regroupées et classées, trois premières reproduites sur les téléphones des clients, mémoire faible, réseau coupé', from: 1, to: 2 },
      { label: 'Corriger', note: 'trois premières causes corrigées, un test automatique par cause, essai sur base locale pleine et téléphones modestes', from: 2, to: 3, accent: true },
      { label: 'Livrer par paliers', note: 'sortie à 5 %, 20 % puis 100 % avec seuil écrit, réponse aux avis, tableau des plantages par version remis au gérant', from: 3, to: 4 },
    ], caption: 'Figure 5 · Quatre semaines dans l’exemple, la première sans rien corriger : on branche les rapports et on lit. La semaine accentuée est celle des corrections, qui ne portent que sur les trois premières causes ; les suivantes se traitent au cycle d’après.', alt: 'Calendrier de quatre semaines : brancher et lire, trier et reproduire, corriger (accentué), livrer par paliers.' },
    questions: { title: 'Six questions à poser à votre développeur', items: [
      { label: 'Quel taux ?', sub: 'part de clients sans plantage, par version' },
      { label: 'Quelles causes ?', sub: 'les trois premières, par clients touchés', accent: true },
      { label: 'Quels téléphones ?', sub: 'mémoire, version d’Android, modèles' },
      { label: 'Reproduit ?', sub: 'sur quel appareil, dans quelles conditions' },
      { label: 'Quel test ?', sub: 'celui qui empêche le plantage de revenir' },
      { label: 'Quel seuil ?', sub: 'le chiffre qui arrête une sortie' },
    ], caption: 'Figure 6 · La question accentuée est la deuxième : celui qui ne connaît pas ses trois premières causes ne peut pas dire ce qu’il corrigera ce mois-ci. Les six réponses tiennent sur une page et se demandent chaque mois.', alt: 'Six questions : quel taux, quelles causes (accentuée), quels téléphones, reproduit, quel test, quel seuil.' },
  },
  en: {
    cover: { eyebrow: 'Mobile app · Algeria · 2027', title: ['An app that keeps crashing', 'on your customers’ phones'], subtitle: 'Crash reports, ranked causes, the customers’ own phones, tested fixes, staged release', left: { label: 'It closes by itself', sub: 'nobody knows where or why' }, right: { label: 'Every crash is read', sub: 'the first three causes first' } },
    grille: { caption: 'Figure 1 · The 3,800 customers of the example, sorted by phone memory and Android version. The share who see a crash each day goes from 12.8 % on an old 2 GB phone to 0.1 % on the 8 GB phone the developer tests with. Phones with 2 and 3 GB are 40 % of the customers and 89 % of the crashes; the overall rate, 2.9 %, exceeds the 1.09 % threshold published by Android vitals. Shares and rates are a constructed example.' },
    causes: { caption: 'Figure 2 · On the left, what a crash report contains: device, version, screen, free memory, last actions, the error, and the trace, unreadable as it stands and then decoded with the version’s mapping file. On the right, forty-one causes ranked by customers affected: the first three account for 78 % of crashes. Causes, shares and file names are a constructed example.' },
    couches: { title: 'A stable app, in five layers', layers: [
      { label: 'Observe', items: [{ name: 'A report for every crash and every freeze, with the device, the version, the screen and the last actions', sub: 'without reports, only store reviews are left' }] },
      { label: 'Rank', items: [{ name: 'Reports grouped by cause, causes ranked by number of customers affected, version by version', sub: 'a few causes often account for most of the crashes', accent: true }] },
      { label: 'Reproduce', items: [{ name: 'The phones customers really have, low memory, network cut, a full local database', sub: 'what is not reproduced is not fixed, only guessed' }] },
      { label: 'Fix', items: [{ name: 'The cause and not the symptom, with an automated test that stops the crash coming back', sub: 'a fix without a test returns two versions later' }] },
      { label: 'Release', items: [{ name: 'Staged release, crash threshold written beforehand, halt if it is crossed, replies to reviews', sub: 'the morning figure decides, not the impression' }] },
    ], caption: 'Figure 3 · The accented layer is ranking: it decides what is fixed first. Observing supplies the material; reproducing, fixing and releasing only matter for the causes that ranking has pointed to.', alt: 'Five layers: observe; rank (accented); reproduce; fix; release.' },
    situations: { title: 'Six real situations, and what to do', columns: ['What happens', 'What to do'], rows: [
      { label: 'It works for us, it crashes for customers', cells: ['Tested on recent phones', 'tests on the phones customers really have, including the most modest'] },
      { label: 'The developer cannot reproduce it', cells: ['No reports, only reviews', 'automatic report with device, version, screen and last actions'] },
      { label: 'It closes when the catalogue opens', cells: ['Photos too heavy for the memory', 'images at screen size, memory released, list loaded page by page'] },
      { label: 'It crashes when the network drops', cells: ['An empty response the code did not expect', 'every call plans for failure, timeout and the empty response'] },
      { label: 'It freezes, then Android offers to close it', cells: ['A long task blocks the display', 'heavy work off the display thread, a screen that responds while loading'] },
      { label: 'Since the update, the store rating has fallen', cells: ['Released to every customer at once', 'staged release, crash threshold written first, halt if it is crossed'] },
    ], caption: 'Figure 4 · The first two rows say why nobody sees the problem; the next three are the most common causes, memory, network, freezing; the last says how a bad version reaches everyone. None requires rebuilding the app.', alt: 'Matrix of six situations: works at the office and crashes for customers, crash not reproduced, closing on the catalogue, crash when the network drops, frozen app, store rating falling after an update; what happens and what to do.' },
    calendrier: { title: 'Stabilising an app in 2027, in weeks', unit: 'wk', items: [
      { label: 'Connect and read', note: 'reporting tool installed, mapping files kept, version published, reports read by device and by screen', from: 0, to: 1 },
      { label: 'Rank and reproduce', note: 'causes grouped and ranked, the first three reproduced on customers’ phones, low memory, network cut', from: 1, to: 2 },
      { label: 'Fix', note: 'first three causes fixed, one automated test per cause, trial on a full local database and modest phones', from: 2, to: 3, accent: true },
      { label: 'Staged release', note: 'release to 5 %, 20 % then 100 % with a written threshold, replies to reviews, crash table by version for the manager', from: 3, to: 4 },
    ], caption: 'Figure 5 · Four weeks in the example, the first with nothing fixed: reports are connected and read. The accented week is the fixes, which only cover the first three causes; the next ones are handled in the following cycle.', alt: 'Four-week calendar: connect and read, rank and reproduce, fix (accented), staged release.' },
    questions: { title: 'Six questions to ask your developer', items: [
      { label: 'What rate?', sub: 'share of crash-free customers, by version' },
      { label: 'Which causes?', sub: 'the first three, by customers affected', accent: true },
      { label: 'Which phones?', sub: 'memory, Android version, models' },
      { label: 'Reproduced?', sub: 'on which device, in what conditions' },
      { label: 'Which test?', sub: 'the one that stops the crash coming back' },
      { label: 'What threshold?', sub: 'the figure that halts a release' },
    ], caption: 'Figure 6 · The accented question is the second: someone who does not know their first three causes cannot say what they will fix this month. The six answers fit on one page and are asked for every month.', alt: 'Six questions: what rate, which causes (accented), which phones, reproduced, which test, what threshold.' },
  },
  ar: {
    cover: { eyebrow: 'تطبيق الهاتف · الجزائر · 2027', title: ['التطبيق يتوقف فجأة', 'عند زبائنكم، لا عندكم'], subtitle: 'تقارير التوقف، أسباب مرتَّبة، هواتف الزبائن، إصلاحات مجرَّبة، وإصدار على مراحل', left: { label: 'يُغلق وحده', sub: 'لا أحد يعرف أين ولا لماذا' }, right: { label: 'كل توقف يُقرأ', sub: 'الأسباب الثلاثة الأولى أولاً' } },
    grille: { caption: 'الشكل 1 · زبائن المثال، وعددهم 3 800، مرتَّبون حسب ذاكرة الهاتف ونسخة أندرويد. حصة من يتوقف عندهم التطبيق كل يوم تذهب من 12,8 بالمئة على هاتف قديم من 2 غيغا إلى 0,1 بالمئة على هاتف 8 غيغا الذي يجرّب به المطوِّر. هواتف 2 و3 غيغا تمثل 40 بالمئة من الزبائن و89 بالمئة من التوقفات؛ والنسبة العامة، 2,9 بالمئة، تتجاوز عتبة 1,09 بالمئة التي تنشرها ⁦Android vitals⁩. الحصص والنسب مثال مركَّب.' },
    causes: { caption: 'الشكل 2 · على اليمين، ما يحويه تقرير التوقف: الجهاز، النسخة، الشاشة، الذاكرة الحرة، آخر الحركات، الخطأ، والأثر، غير مقروء كما هو ثم مقروء بفضل ملف المطابقة الخاص بالنسخة. وعلى اليسار، واحد وأربعون سبباً مرتَّبة حسب الزبائن المتضررين: الثلاثة الأولى تصنع 78 بالمئة من التوقفات. الأسباب والحصص وأسماء الملفات مثال مركَّب.' },
    couches: { title: 'تطبيق مستقر، في خمس طبقات', layers: [
      { label: 'الملاحظة', items: [{ name: 'تقرير عند كل توقف وكل تجمّد، فيه الجهاز والنسخة والشاشة وآخر الحركات', sub: 'دون تقارير لا يبقى إلا تقييمات المتجر' }] },
      { label: 'الترتيب', items: [{ name: 'التقارير مجموعة حسب السبب، والأسباب مرتَّبة حسب عدد الزبائن المتضررين، نسخة بنسخة', sub: 'أسباب قليلة تصنع غالباً معظم التوقفات', accent: true }] },
      { label: 'إعادة الحالة', items: [{ name: 'الهواتف الموجودة فعلاً عند الزبائن، ذاكرة ضعيفة، شبكة مقطوعة، وقاعدة محلية ممتلئة', sub: 'ما لا تُعاد حالته لا يُصلَّح، بل يُخمَّن' }] },
      { label: 'الإصلاح', items: [{ name: 'السبب لا العَرَض، مع اختبار آلي يمنع التوقف من العودة', sub: 'الإصلاح دون اختبار يعود بعد نسختين' }] },
      { label: 'الإصدار', items: [{ name: 'إصدار على مراحل، عتبة توقف مكتوبة قبله، إيقاف إذا تُجوّزت، وردّ على التقييمات', sub: 'رقم الصباح هو الذي يقرّر، لا الانطباع' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي الترتيب: هي التي تقرّر ما يُصلَّح أولاً. الملاحظة تعطي المادة؛ وإعادة الحالة والإصلاح والإصدار لا قيمة لها إلا للأسباب التي عيّنها الترتيب.', alt: 'خمس طبقات: الملاحظة؛ الترتيب (مبرزة)؛ إعادة الحالة؛ الإصلاح؛ الإصدار.' },
    situations: { title: 'ست حالات واقعية، وما يجب فعله', columns: ['ما يحدث', 'ما يجب فعله'], rows: [
      { label: 'يشتغل عندنا ويتوقف عند الزبائن', cells: ['جُرِّب على هواتف حديثة', 'تجارب على الهواتف الموجودة فعلاً عند الزبائن، ومنها المتواضعة'] },
      { label: 'المطوِّر لا يستطيع إعادة الحالة', cells: ['لا تقارير، تقييمات فقط', 'تقرير آلي فيه الجهاز والنسخة والشاشة وآخر الحركات'] },
      { label: 'يُغلق حين نفتح الكتالوغ', cells: ['صور أثقل من الذاكرة', 'صور بحجم الشاشة، ذاكرة تُحرَّر، وقائمة تُحمَّل صفحة صفحة'] },
      { label: 'يتوقف حين تنقطع الشبكة', cells: ['جواب فارغ لم يتوقعه البرنامج', 'كل نداء يحسب حساب الفشل، وتجاوز المهلة، والجواب الفارغ'] },
      { label: 'يتجمّد، ثم يقترح أندرويد إغلاقه', cells: ['معالجة طويلة تعطّل العرض', 'العمل الثقيل خارج خيط العرض، وشاشة تستجيب أثناء التحميل'] },
      { label: 'منذ التحديث، نزل تقييم المتجر', cells: ['أُصدر لكل الزبائن دفعة واحدة', 'إصدار على مراحل، عتبة مكتوبة قبله، وإيقاف إذا تُجوّزت'] },
    ], caption: 'الشكل 4 · السطران الأولان يقولان لماذا لا يرى أحد المشكلة؛ والثلاثة التالية هي الأسباب الأكثر شيوعاً، الذاكرة والشبكة والتجمّد؛ والأخير يقول كيف تصل نسخة سيئة إلى الجميع. لا يتطلب أي منها إعادة بناء التطبيق.', alt: 'مصفوفة ست حالات: يشتغل في المكتب ويتوقف عند الزبائن، توقف لم تُعَد حالته، إغلاق عند الكتالوغ، توقف عند انقطاع الشبكة، تطبيق متجمّد، نزول تقييم المتجر بعد تحديث؛ ما يحدث وما يجب فعله.' },
    calendrier: { title: 'تثبيت تطبيق سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الربط والقراءة', note: 'تنصيب أداة التقارير، حفظ ملفات المطابقة، نشر النسخة، وقراءة التقارير حسب الجهاز والشاشة', from: 0, to: 1 },
      { label: 'الترتيب وإعادة الحالة', note: 'جمع الأسباب وترتيبها، وإعادة الثلاثة الأولى على هواتف الزبائن، بذاكرة ضعيفة وشبكة مقطوعة', from: 1, to: 2 },
      { label: 'الإصلاح', note: 'إصلاح الأسباب الثلاثة الأولى، اختبار آلي لكل سبب، وتجربة على قاعدة ممتلئة وهواتف متواضعة', from: 2, to: 3, accent: true },
      { label: 'الإصدار على مراحل', note: 'إصدار لـ 5 ثم 20 ثم 100 بالمئة بعتبة مكتوبة، ردّ على التقييمات، وجدول التوقفات حسب النسخة للمسيّر', from: 3, to: 4 },
    ], caption: 'الشكل 5 · أربعة أسابيع في المثال، الأول دون إصلاح شيء: تُربط التقارير وتُقرأ. الأسبوع المبرز هو أسبوع الإصلاحات، وهي لا تخص إلا الأسباب الثلاثة الأولى؛ والتالية تُعالَج في الدورة الموالية.', alt: 'تقويم أربعة أسابيع: الربط والقراءة، الترتيب وإعادة الحالة، الإصلاح (مبرز)، الإصدار على مراحل.' },
    questions: { title: 'ستة أسئلة تطرحونها على مطوِّركم', items: [
      { label: 'أي نسبة؟', sub: 'حصة الزبائن دون توقف، حسب النسخة' },
      { label: 'أي أسباب؟', sub: 'الثلاثة الأولى، حسب الزبائن المتضررين', accent: true },
      { label: 'أي هواتف؟', sub: 'الذاكرة، نسخة أندرويد، الطرازات' },
      { label: 'أُعيدت الحالة؟', sub: 'على أي جهاز، وفي أي ظروف' },
      { label: 'أي اختبار؟', sub: 'الذي يمنع التوقف من العودة' },
      { label: 'أي عتبة؟', sub: 'الرقم الذي يوقف الإصدار' },
    ], caption: 'الشكل 6 · السؤال المبرز هو الثاني: من لا يعرف أسبابه الثلاثة الأولى لا يستطيع أن يقول ماذا سيصلّح هذا الشهر. والأجوبة الستة تسعها صفحة وتُطلب كل شهر.', alt: 'ستة أسئلة: أي نسبة، أي أسباب (مبرز)، أي هواتف، أُعيدت الحالة، أي اختبار، أي عتبة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      grille: { svg: grille(e.grille, rtl), caption: t.grille.caption, alt: e.grille.alt },
      causes: { svg: causes(e.causes, rtl), caption: t.causes.caption, alt: e.causes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      questions: { svg: steps({ title: t.questions.title, steps: t.questions.items, arrows: true, rtl }), caption: t.questions.caption, alt: t.questions.alt },
    },
  };
}
