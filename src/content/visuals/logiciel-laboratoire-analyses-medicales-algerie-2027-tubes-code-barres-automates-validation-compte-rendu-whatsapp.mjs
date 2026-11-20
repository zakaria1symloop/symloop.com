import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { tube, labo, STRINGS as SC } from './custom/labo.mjs';
export const slug = 'logiciel-laboratoire-analyses-medicales-algerie-2027-tubes-code-barres-automates-validation-compte-rendu-whatsapp';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel laboratoire · Algérie · 2027', title: ['Logiciel de laboratoire d’analyses', 'médicales en Algérie : tubes, automates, validation'], subtitle: 'Ce qu’on construit pour un laboratoire : tubes code-barres, résultats lus depuis les automates, validation du biologiste, compte rendu envoyé, réactifs par lot', left: { label: 'Des résultats retapés', sub: 'et une feuille photographiée au patient' }, right: { label: 'Des valeurs lues, validées, envoyées', sub: 'lien signé, délai mesuré' } },
    couches: { title: 'Un logiciel de laboratoire, en cinq couches', layers: [
      { label: 'Dossier et tubes', items: [{ name: 'Patient, ordonnance, analyses demandées, étiquettes code-barres par tube, encaissement avec reçu, heure de prélèvement', sub: 'le tube porte le dossier, pas un papier' }] },
      { label: 'Automates', items: [{ name: 'Résultats lus depuis les automates reliés ; saisie manuelle en double pour le reste ; lot de réactif noté sur chaque résultat', sub: 'rien n’est retapé depuis une feuille', accent: true }] },
      { label: 'Validation', items: [{ name: 'Plages écrites par le laboratoire ; hors plage signalés ; validation technique puis biologique ; qui, quand, journalisés', sub: 'le biologiste valide, l’application signale' }] },
      { label: 'Compte rendu', items: [{ name: 'Signé, envoyé au patient par WhatsApp avec lien signé qui expire, copie au médecin, statut « en cours » puis « disponible »', sub: 'le patient reçoit un lien, pas une photo' }] },
      { label: 'Direction', items: [{ name: 'Délai par section contre l’objectif écrit, en attente de validation, réactifs par lot, tournée à domicile, encaissements, export', sub: 'le biologiste lit, il ne cherche plus' }] },
    ], caption: 'Figure 1 · La couche accentuée est celle des automates : les valeurs viennent des instruments reliés, et ce qui ne peut pas être lu est saisi deux fois ; c’est elle qui rend la validation fiable et le compte rendu rapide. Le dossier et les tubes au-dessus sont ce que les automates lisent ; la direction en bas n’est qu’une lecture.', alt: 'Cinq couches : dossier et tubes, automates (accentuée), validation, compte rendu, direction.' },
    tube: { caption: 'Figure 2 · Un dossier de neuf analyses suivi du tube au compte rendu : enregistré à 7h40 avec trois étiquettes code-barres, prélevé, centrifugé, quarante valeurs lues depuis deux automates et trois saisies en double, deux hors plage signalées contre les plages écrites par le laboratoire, validées par le biologiste à 10h40, compte rendu envoyé à 10h45 par un lien signé, copie au médecin ; trois heures cinq contre un objectif écrit de quatre heures. Dossier, valeurs et horaires sont un exemple construit.' },
    etapes: { title: 'Mettre un laboratoire sous logiciel, en six temps', items: [
      { label: 'Écrire le catalogue', sub: 'analyses, tubes, plages, objectifs de délai, prix' },
      { label: 'Étiqueter et encaisser', sub: 'dossier, étiquettes par tube, reçu, statut au patient' },
      { label: 'Relier les automates', sub: 'résultats lus ; saisie en double pour le reste', accent: true },
      { label: 'Valider', sub: 'hors plage signalés ; technique puis biologique' },
      { label: 'Envoyer', sub: 'lien signé par WhatsApp ; copie au médecin' },
      { label: 'Lire le tableau', sub: 'délais, attente, réactifs, tournée, encaissements' },
    ], caption: 'Figure 3 · Le temps accentué est la liaison des automates : tant que les valeurs sont retapées, la validation vérifie des fautes de frappe et le délai se perd à la paillasse. Avant, le catalogue et les étiquettes ; après, la validation, l’envoi et le tableau ne sont que des lectures de valeurs lues.', alt: 'Six temps : écrire le catalogue, étiqueter et encaisser, relier les automates (accentué), valider, envoyer, lire le tableau.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Un résultat retapé avec une faute', cells: ['Découvert par le médecin', 'valeurs lues depuis l’automate ; saisie manuelle en double ; hors plage signalé'] },
      { label: 'Deux tubes du même nom', cells: ['Un dossier inversé', 'étiquette code-barres par tube au dossier ; scan à chaque étape'] },
      { label: '« Mes résultats sont prêts ? »', cells: ['Vingt appels par matinée', 'statut sur le lien du patient ; WhatsApp à la validation ; agent qui répond depuis le statut'] },
      { label: 'Le patient est reparti en France', cells: ['Une photo de feuille envoyée', 'compte rendu signé sur lien signé qui expire ; copie au médecin ; règlement en euros possible'] },
      { label: 'Un réactif périmé a servi', cells: ['Personne ne sait quels dossiers', 'lot noté sur chaque résultat ; alerte avant péremption ; dossiers concernés listés'] },
      { label: 'La tournée à domicile sans réseau', cells: ['Tubes notés sur un carnet', 'application du préleveur hors ligne ; tubes scannés à la prise ; envoi au retour'] },
    ], caption: 'Figure 5 · Les trois premières lignes se règlent par les automates reliés, les étiquettes par tube et le statut du dossier ; les trois suivantes par le lien signé, le lot sur chaque résultat et l’application hors ligne du préleveur. Aucune ne se règle par une secrétaire de plus au téléphone.', alt: 'Matrice de six situations : résultat retapé, tubes inversés, appels des patients, patient en France, réactif périmé, tournée sans réseau ; ce qui se passe et ce que l’application fait.' },
    labo: { caption: 'Figure 4 · Le tableau que le biologiste lit à 11h : par section, les dossiers du jour, ce qui attend sa validation, le délai médian contre l’objectif qu’il a écrit, les hors plage ; les lots de réactifs qui périment sous trente jours et les références sous le seuil ; la tournée à domicile avec ses tubes scannés sans réseau ; les encaissements avec leurs reçus. Sections, délais et chiffres sont un exemple construit ; les objectifs et les plages sont ceux du laboratoire.' },
    calendrier: { title: 'Un logiciel de laboratoire en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Catalogue et règles', note: 'analyses, tubes par analyse, plages, objectifs de délai par section, prix ; avec le biologiste, sans code', from: 0, to: 1 },
      { label: 'Dossier, tubes, automates', note: 'enregistrement, étiquettes code-barres, encaissement ; liaison des automates, saisie en double, lot par résultat', from: 1, to: 3, accent: true },
      { label: 'Validation et envoi', note: 'hors plage, validation technique et biologique, compte rendu signé, lien WhatsApp, copie médecin', from: 3, to: 4 },
      { label: 'Réactifs et tournée', note: 'stock par lot, péremption, seuils ; application du préleveur hors ligne', from: 4, to: 5 },
      { label: 'Direction', note: 'délais par section, attente, encaissements, export comptable, revue du samedi', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, la première sans code : le catalogue, les plages et les objectifs de délai sont les décisions du biologiste. Les deux semaines accentuées sont le dossier, les tubes et les automates, parce que la validation, l’envoi et le tableau ne sont que des lectures de valeurs lues sur des tubes scannés.', alt: 'Calendrier de six semaines : catalogue et règles, dossier tubes et automates (accentué, deux semaines), validation et envoi, réactifs et tournée, direction.' },
  },
  en: {
    cover: { eyebrow: 'Laboratory software · Algeria · 2027', title: ['Medical laboratory software', 'in Algeria: tubes, analysers, validation'], subtitle: 'What gets built for a lab: barcode tubes, results read from the analysers, the biologist’s validation, report sent, reagents per lot', left: { label: 'Retyped results', sub: 'and a photographed sheet for the patient' }, right: { label: 'Values read, validated, sent', sub: 'signed link, measured turnaround' } },
    couches: { title: 'Laboratory software, in five layers', layers: [
      { label: 'File and tubes', items: [{ name: 'Patient, prescription, requested tests, barcode label per tube, collection with receipt, sampling time', sub: 'the tube carries the file, not a paper' }] },
      { label: 'Analysers', items: [{ name: 'Results read from connected analysers; double manual entry for the rest; reagent lot noted on each result', sub: 'nothing is retyped from a sheet', accent: true }] },
      { label: 'Validation', items: [{ name: 'Ranges written by the lab; out of range flagged; technical then biological validation; who, when, logged', sub: 'the biologist validates, the application flags' }] },
      { label: 'Report', items: [{ name: 'Signed, sent to the patient by WhatsApp with a signed link that expires, copy to the doctor, status “in progress” then “available”', sub: 'the patient gets a link, not a photo' }] },
      { label: 'Management', items: [{ name: 'Turnaround per section against the written target, awaiting validation, reagents per lot, home round, collections, export', sub: 'the biologist reads, and stops searching' }] },
    ], caption: 'Figure 1 · The accented layer is the analysers: values come from the connected instruments, and what cannot be read is typed twice; it is what makes validation reliable and the report fast. The file and tubes above are what the analysers read; management at the bottom is only a reading.', alt: 'Five layers: file and tubes, analysers (accented), validation, report, management.' },
    tube: { caption: 'Figure 2 · A nine-test file followed from tube to report: registered at 7:40 with three barcode labels, sampled, centrifuged, forty values read from two analysers and three double-entered, two out of range flagged against the ranges written by the lab, validated by the biologist at 10:40, report sent at 10:45 by a signed link, copy to the doctor; three hours five against a written four-hour target. File, values and times are a constructed example.' },
    etapes: { title: 'Putting a laboratory under software, in six beats', items: [
      { label: 'Write the catalogue', sub: 'tests, tubes, ranges, turnaround targets, prices' },
      { label: 'Label and collect', sub: 'file, label per tube, receipt, status to the patient' },
      { label: 'Connect the analysers', sub: 'results read; double entry for the rest', accent: true },
      { label: 'Validate', sub: 'out of range flagged; technical then biological' },
      { label: 'Send', sub: 'signed link by WhatsApp; copy to the doctor' },
      { label: 'Read the board', sub: 'turnarounds, awaiting, reagents, round, collections' },
    ], caption: 'Figure 3 · The accented beat is connecting the analysers: as long as values are retyped, validation checks typos and turnaround is lost at the bench. Before it, the catalogue and the labels; after it, validation, sending and the board are only readings of read values.', alt: 'Six beats: write the catalogue, label and collect, connect the analysers (accented), validate, send, read the board.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'A result retyped with a typo', cells: ['Found by the doctor', 'values read from the analyser; double manual entry; out of range flagged'] },
      { label: 'Two tubes with the same name', cells: ['A swapped file', 'barcode label per tube on the file; scan at every step'] },
      { label: '“Are my results ready?”', cells: ['Twenty calls a morning', 'status on the patient’s link; WhatsApp at validation; agent answering from the status'] },
      { label: 'The patient went back to France', cells: ['A photo of a sheet sent', 'signed report on a signed link that expires; copy to the doctor; payment in euros possible'] },
      { label: 'An expired reagent was used', cells: ['Nobody knows which files', 'lot noted on each result; alert before expiry; affected files listed'] },
      { label: 'The home round without network', cells: ['Tubes noted in a notebook', 'the sampler’s offline app; tubes scanned at collection; sent on return'] },
    ], caption: 'Figure 5 · The first three rows are settled by connected analysers, labels per tube and the file status; the next three by the signed link, the lot on each result and the sampler’s offline app. None is settled by one more secretary on the phone.', alt: 'Matrix of six situations: retyped result, swapped tubes, patient calls, patient in France, expired reagent, round without network; what happens and what the application does.' },
    labo: { caption: 'Figure 4 · The board the biologist reads at 11:00: per section, the day’s files, what awaits their validation, median turnaround against the target they wrote, out-of-range results; reagent lots expiring within thirty days and references under threshold; the home round with its tubes scanned without network; collections with their receipts. Sections, turnarounds and figures are a constructed example; targets and ranges are the lab’s.' },
    calendrier: { title: 'Laboratory software in 2027, in weeks', unit: 'wk', items: [
      { label: 'Catalogue and rules', note: 'tests, tubes per test, ranges, turnaround targets per section, prices; with the biologist, without code', from: 0, to: 1 },
      { label: 'File, tubes, analysers', note: 'registration, barcode labels, collection; analysers connected, double entry, lot per result', from: 1, to: 3, accent: true },
      { label: 'Validation and sending', note: 'out of range, technical and biological validation, signed report, WhatsApp link, doctor copy', from: 3, to: 4 },
      { label: 'Reagents and round', note: 'stock per lot, expiry, thresholds; the sampler’s offline app', from: 4, to: 5 },
      { label: 'Management', note: 'turnarounds per section, awaiting, collections, accounting export, Saturday review', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, the first without code: the catalogue, ranges and turnaround targets are the biologist’s decisions. The two accented weeks are the file, tubes and analysers, because validation, sending and the board are only readings of values read on scanned tubes.', alt: 'Six-week timeline: catalogue and rules, file tubes and analysers (accented, two weeks), validation and sending, reagents and round, management.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج مخبر · الجزائر · 2027', title: ['برنامج مخبر التحاليل الطبية', 'في الجزائر: أنابيب، أجهزة، مصادقة'], subtitle: 'ما يُبنى لمخبر: أنابيب باركود، نتائج مقروءة من الأجهزة، مصادقة البيولوجي، تقرير مرسَل، كواشف لكل دفعة', left: { label: 'نتائج يُعاد إدخالها', sub: 'وورقة مصوَّرة للمريض' }, right: { label: 'قيم مقروءة، مصادَق عليها، مرسَلة', sub: 'رابط موقَّع، أجل مقيس' } },
    couches: { title: 'برنامج مخبر، في خمس طبقات', layers: [
      { label: 'الملف والأنابيب', items: [{ name: 'المريض، الوصفة، التحاليل المطلوبة، ملصق باركود لكل أنبوب، تحصيل بوصل، ساعة أخذ العينة', sub: 'الأنبوب يحمل الملف، لا ورقة' }] },
      { label: 'الأجهزة', items: [{ name: 'نتائج مقروءة من الأجهزة الموصولة؛ إدخال يدوي مزدوج للباقي؛ دفعة الكاشف مسجَّلة على كل نتيجة', sub: 'لا شيء يُعاد إدخاله من ورقة', accent: true }] },
      { label: 'المصادقة', items: [{ name: 'مجالات كتبها المخبر؛ خارج المجال مُشار إليه؛ مصادقة تقنية ثم بيولوجية؛ من ومتى مسجَّلان', sub: 'يصادق البيولوجي، ويشير التطبيق' }] },
      { label: 'التقرير', items: [{ name: 'موقَّع، مرسَل للمريض عبر واتساب برابط موقَّع ينتهي، نسخة للطبيب، حالة «جارٍ» ثم «متاح»', sub: 'يتلقى المريض رابطاً لا صورة' }] },
      { label: 'الإدارة', items: [{ name: 'أجل لكل قسم مقابل الهدف المكتوب، في انتظار المصادقة، كواشف لكل دفعة، جولة المنازل، تحصيلات، تصدير', sub: 'يقرأ البيولوجي، ولا يبحث بعد اليوم' }] },
    ], caption: 'الشكل 1 · الطبقة المبرزة هي الأجهزة: تأتي القيم من الأجهزة الموصولة، وما لا يمكن قراءته يُدخل مرتين؛ وهي ما يجعل المصادقة موثوقة والتقرير سريعاً. الملف والأنابيب فوقها هما ما تقرؤه الأجهزة؛ والإدارة في الأسفل مجرد قراءة.', alt: 'خمس طبقات: الملف والأنابيب، الأجهزة (مبرزة)، المصادقة، التقرير، الإدارة.' },
    tube: { caption: 'الشكل 2 · ملف من تسعة تحاليل متتبَّع من الأنبوب إلى التقرير: مسجَّل على 7:40 بثلاثة ملصقات باركود، أُخذت عينته، طُرد مركزياً، أربعون قيمة مقروءة من جهازين وثلاث مُدخلة إدخالاً مزدوجاً، اثنتان خارج المجال مُشار إليهما مقابل المجالات التي كتبها المخبر، صادق عليها البيولوجي على 10:40، تقرير مرسَل على 10:45 برابط موقَّع، نسخة للطبيب؛ ثلاث ساعات وخمس دقائق مقابل هدف مكتوب أربع ساعات. الملف والقيم والأوقات مثال مبني.' },
    etapes: { title: 'وضع مخبر تحت برنامج، في ستة أوقات', items: [
      { label: 'كتابة الكتالوج', sub: 'تحاليل، أنابيب، مجالات، أهداف الأجل، أسعار' },
      { label: 'الوسم والتحصيل', sub: 'ملف، ملصق لكل أنبوب، وصل، حالة للمريض' },
      { label: 'وصل الأجهزة', sub: 'نتائج مقروءة؛ إدخال مزدوج للباقي', accent: true },
      { label: 'المصادقة', sub: 'خارج المجال مُشار إليه؛ تقنية ثم بيولوجية' },
      { label: 'الإرسال', sub: 'رابط موقَّع عبر واتساب؛ نسخة للطبيب' },
      { label: 'قراءة اللوحة', sub: 'آجال، انتظار، كواشف، جولة، تحصيلات' },
    ], caption: 'الشكل 3 · الوقت المبرز هو وصل الأجهزة: ما دامت القيم تُعاد كتابتها، تفحص المصادقة أخطاء الطباعة ويضيع الأجل على الطاولة. قبله الكتالوج والملصقات؛ وبعده المصادقة والإرسال واللوحة مجرد قراءات لقيم مقروءة.', alt: 'ستة أوقات: كتابة الكتالوج، الوسم والتحصيل، وصل الأجهزة (مبرز)، المصادقة، الإرسال، قراءة اللوحة.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'نتيجة أُعيد إدخالها بخطأ', cells: ['يكتشفها الطبيب', 'قيم مقروءة من الجهاز؛ إدخال يدوي مزدوج؛ خارج المجال مُشار إليه'] },
      { label: 'أنبوبان بالاسم نفسه', cells: ['ملف مقلوب', 'ملصق باركود لكل أنبوب في الملف؛ مسح في كل خطوة'] },
      { label: '«هل نتائجي جاهزة؟»', cells: ['عشرون مكالمة في الصباح', 'حالة على رابط المريض؛ واتساب عند المصادقة؛ وكيل يجيب من الحالة'] },
      { label: 'عاد المريض إلى فرنسا', cells: ['صورة ورقة مرسَلة', 'تقرير موقَّع على رابط موقَّع ينتهي؛ نسخة للطبيب؛ دفع باليورو ممكن'] },
      { label: 'استُعمل كاشف منتهي الصلاحية', cells: ['لا أحد يعرف أي ملفات', 'الدفعة مسجَّلة على كل نتيجة؛ تنبيه قبل الانتهاء؛ الملفات المعنية مُدرَجة'] },
      { label: 'جولة المنازل دون شبكة', cells: ['أنابيب مسجَّلة في دفتر', 'تطبيق آخذ العينات دون شبكة؛ أنابيب ممسوحة عند الأخذ؛ إرسال عند العودة'] },
    ], caption: 'الشكل 5 · الصفوف الثلاثة الأولى تُحل بالأجهزة الموصولة والملصقات لكل أنبوب وحالة الملف؛ والثلاثة التالية بالرابط الموقَّع والدفعة على كل نتيجة وتطبيق آخذ العينات دون شبكة. لا واحدة منها تُحل بسكرتيرة إضافية على الهاتف.', alt: 'مصفوفة ست حالات: نتيجة معادة، أنابيب مقلوبة، مكالمات المرضى، مريض في فرنسا، كاشف منتهٍ، جولة دون شبكة؛ ما يحدث وما يفعله التطبيق.' },
    labo: { caption: 'الشكل 4 · اللوحة التي يقرؤها البيولوجي على 11:00: لكل قسم، ملفات اليوم، ما ينتظر مصادقته، الأجل الوسيط مقابل الهدف الذي كتبه، ما هو خارج المجال؛ دفعات الكواشف التي تنتهي خلال ثلاثين يوماً والمراجع تحت العتبة؛ جولة المنازل بأنابيبها الممسوحة دون شبكة؛ التحصيلات بوصولاتها. الأقسام والآجال والأرقام مثال مبني؛ الأهداف والمجالات هي أهداف المخبر ومجالاته.' },
    calendrier: { title: 'برنامج مخبر سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الكتالوج والقواعد', note: 'تحاليل، أنابيب لكل تحليل، مجالات، أهداف الأجل لكل قسم، أسعار؛ مع البيولوجي، دون كود', from: 0, to: 1 },
      { label: 'الملف والأنابيب والأجهزة', note: 'تسجيل، ملصقات باركود، تحصيل؛ وصل الأجهزة، إدخال مزدوج، دفعة لكل نتيجة', from: 1, to: 3, accent: true },
      { label: 'المصادقة والإرسال', note: 'خارج المجال، مصادقة تقنية وبيولوجية، تقرير موقَّع، رابط واتساب، نسخة للطبيب', from: 3, to: 4 },
      { label: 'الكواشف والجولة', note: 'مخزون لكل دفعة، صلاحية، عتبات؛ تطبيق آخذ العينات دون شبكة', from: 4, to: 5 },
      { label: 'الإدارة', note: 'آجال لكل قسم، انتظار، تحصيلات، تصدير محاسبي، مراجعة السبت', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، الأول دون كود: الكتالوج والمجالات وأهداف الأجل قرارات البيولوجي. الأسبوعان المبرزان هما الملف والأنابيب والأجهزة، لأن المصادقة والإرسال واللوحة مجرد قراءات لقيم مقروءة على أنابيب ممسوحة.', alt: 'تقويم ستة أسابيع: الكتالوج والقواعد، الملف والأنابيب والأجهزة (مبرز، أسبوعان)، المصادقة والإرسال، الكواشف والجولة، الإدارة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      tube: { svg: tube(e.tube, rtl), caption: t.tube.caption, alt: e.tube.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      labo: { svg: labo(e.labo, rtl), caption: t.labo.caption, alt: e.labo.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
