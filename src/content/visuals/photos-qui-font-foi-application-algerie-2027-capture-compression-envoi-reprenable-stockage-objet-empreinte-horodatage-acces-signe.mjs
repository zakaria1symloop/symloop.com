import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { pipeline, proof, STRINGS as PH } from './custom/photo-proof.mjs';
export const slug = 'photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe';
const T = {
  fr: {
    cover: { eyebrow: 'Photos · Preuve · Stockage · 2027', title: ['« La photo', 'n’est jamais', 'arrivée »'], subtitle: 'Ce qu’on construit pour que les photos de chantier, de livraison et d’état des lieux arrivent, pèsent peu, prouvent quelque chose et restent lisibles cinq ans : capture guidée, réduction sur l’appareil, envoi reprenable, stockage objet, empreinte, deux heures, accès signé', left: { label: 'Des photos sur WhatsApp', sub: 'perdues, lourdes, sans date fiable' }, right: { label: 'Une fiche, une empreinte, un objet', sub: 'et un lien qui expire' } },
    couches: { title: 'Des photos qui tiennent, en cinq couches', layers: [
      { label: 'Capture', items: [{ name: 'Prise guidée dans l’application : cadre attendu, nombre de photos, flash, pas de recadrage ; appareil enrôlé, auteur connecté', sub: 'la photo naît dans le dossier, jamais dans la galerie du téléphone' }] },
      { label: 'Traitement sur l’appareil', items: [{ name: 'Réduction à 1 600 px et WebP avant tout envoi ; empreinte SHA-256 ; heure, position et précision, dossier, auteur attachés', sub: 'ce qui part pèse vingt fois moins et porte déjà sa preuve', accent: true }] },
      { label: 'Transport', items: [{ name: 'File hors ligne ; envoi reprenable par morceaux (protocole ouvert) ; reprise au morceau après coupure ; accusé par morceau', sub: 'une photo n’est jamais renvoyée depuis le début' }] },
      { label: 'Stockage', items: [{ name: 'Réception : heure du serveur, empreinte recalculée ; objet versionné ; miniatures ; fiche liée au dossier et à l’auteur', sub: 'la base de données garde la fiche, le stockage objet garde les octets' }] },
      { label: 'Accès et rétention', items: [{ name: 'Lien signé qui expire en 15 min, journal d’accès, export avec empreintes, rétention écrite puis suppression journalisée', sub: 'la photo n’est jamais publique, et on sait qui l’a vue' }] },
    ], caption: 'Figure 1 · La couche accentuée est celle qui change tout sur un réseau faible : la photo est réduite et empreinte sur l’appareil, avant tout envoi. Les applications qui envoient l’original et réduisent sur le serveur perdent des photos à chaque coupure et ne peuvent pas prouver que ce qui est arrivé est ce qui a été pris.', alt: 'Cinq couches : capture, traitement sur l’appareil (accentué), transport, stockage, accès et rétention.' },
    parcours: { caption: 'Figure 2 · Une seule photo, de la capture au dossier. Elle passe de 4,2 Mo à 240 Ko sur l’appareil, reçoit son empreinte et ses métadonnées, attend le réseau dans la file hors ligne, part en trois morceaux dont le deuxième est repris après une coupure, et arrive sept minutes plus tard avec son empreinte vérifiée. Deux heures sont conservées, celle de l’appareil et celle du serveur. Tailles et durées sont un exemple construit.' },
    etapes: { title: 'Sur le terrain, en six gestes', items: [
      { label: 'Ouvrir le dossier', sub: 'livraison, chantier, état des lieux ; les photos attendues sont listées' },
      { label: 'Prendre dans l’application', sub: 'cadre guidé ; pas d’import depuis la galerie sur les dossiers de preuve', accent: true },
      { label: 'Vérifier la liste', sub: 'photos manquantes signalées avant de fermer' },
      { label: 'Signer ou faire signer', sub: 'signature sur l’écran ; liée aux photos du dossier' },
      { label: 'Fermer le dossier', sub: 'même sans réseau ; tout est en file' },
      { label: 'Laisser partir', sub: 'envoi reprenable en arrière-plan ; état visible : 3 en attente, 2 envoyées' },
    ], caption: 'Figure 3 · L’étape accentuée est une règle, pas une fonctionnalité : sur un dossier qui doit prouver quelque chose, la photo se prend dans l’application, pas dans la galerie, parce qu’une photo importée peut venir de n’importe où et de n’importe quand. La sixième étape dit à l’agent où en est l’envoi sans qu’il attende.', alt: 'Six gestes : ouvrir le dossier, prendre dans l’application (accentuée), vérifier la liste, signer ou faire signer, fermer le dossier, laisser partir.' },
    preuve: { caption: 'Figure 4 · Ce qui fait tenir une photo n’est pas l’image : c’est la fiche autour d’elle, l’empreinte calculée à la prise et recalculée aujourd’hui sur l’objet stocké, la version de l’objet qui montre qu’il n’a jamais été réécrit, et le journal de qui l’a vue par un lien signé. Une copie retouchée donne une empreinte différente et ne passe pas. Les valeurs sont un exemple construit, et la valeur juridique d’une photo dépend du contexte.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'La photo n’est jamais arrivée', cells: ['Envoyée sur WhatsApp depuis le chantier, réseau coupé, perdue', 'file hors ligne, envoi reprenable, état visible ; rien n’est perdu'] },
      { label: 'Vingt photos de 4 Mo par dossier', cells: ['Le forfait data y passe, le serveur se remplit, les écrans rament', 'réduction à 1 600 px et WebP sur l’appareil ; miniatures pour les listes'] },
      { label: 'La date de la photo est contestée', cells: ['L’heure du téléphone était fausse, ou la photo vient de la galerie', 'deux heures conservées, appareil et serveur ; prise dans l’application'] },
      { label: '« Cette photo a été retouchée »', cells: ['Aucun moyen de le prouver ou de le réfuter', 'empreinte à la prise, recalculée à la demande ; objet jamais réécrit'] },
      { label: 'Le lien de la photo circule', cells: ['Une URL publique transférée ; visible par n’importe qui', 'lien signé qui expire en quinze minutes ; journal de qui l’a ouvert'] },
      { label: 'Cinq ans plus tard, un litige', cells: ['Les photos sont sur un vieux téléphone ou un disque perdu', 'rétention écrite, export avec empreintes, suppression journalisée'] },
    ], caption: 'Figure 5 · Les deux premières lignes se règlent sur l’appareil, par la réduction et la file ; les deux suivantes par l’empreinte, les deux heures et la règle de prise dans l’application ; les deux dernières par l’accès signé et la rétention écrite. Aucune ne se règle par un agent plus soigneux.', alt: 'Matrice de six situations : photo jamais arrivée, photos trop lourdes, date contestée, retouche alléguée, lien qui circule, litige cinq ans plus tard ; ce qui se passe et ce que l’application fait.' },
    calendrier: { title: 'Des photos qui tiennent en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'quels dossiers exigent des photos, combien, quelles tailles, original conservé ou non, durée de rétention, qui peut voir ; signées', from: 0, to: 1 },
      { label: 'Capture et réduction', note: 'prise guidée dans l’application, réduction et WebP sur l’appareil, empreinte et métadonnées attachées', from: 1, to: 2, accent: true },
      { label: 'File et envoi', note: 'file hors ligne, envoi reprenable par morceaux, état visible pour l’agent, reprise après coupure testée', from: 2, to: 3 },
      { label: 'Stockage et fiche', note: 'réception avec heure serveur et vérification, stockage objet versionné, miniatures, fiche liée au dossier', from: 3, to: 4 },
      { label: 'Accès et export', note: 'liens signés, journal d’accès, export litige avec empreintes, affichage dans les dossiers et sur le portail client', from: 4, to: 5 },
      { label: 'Rétention et mesure', note: 'suppression journalisée à l’échéance, photos manquantes par dossier, taux d’envoi réussi au premier essai', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la première sans code : combien de photos, quelle taille, l’original ou non, combien de temps et qui peut voir sont des décisions du gérant, pas des réglages de développeur. La deuxième semaine est accentuée parce que la réduction sur l’appareil est ce qui fait que les photos arrivent.', alt: 'Frise de six semaines : règles, capture et réduction (accentué), file et envoi, stockage et fiche, accès et export, rétention et mesure.' },
  },
  en: {
    cover: { eyebrow: 'Photos · Proof · Storage · 2027', title: ['“The photo', 'never', 'arrived”'], subtitle: 'What gets built so that site, delivery and inspection photos arrive, weigh little, prove something and stay readable for five years: guided capture, on-device reduction, resumable upload, object storage, fingerprint, two times, signed access', left: { label: 'Photos on WhatsApp', sub: 'lost, heavy, no reliable date' }, right: { label: 'A record, a fingerprint, an object', sub: 'and a link that expires' } },
    couches: { title: 'Photos that hold up, in five layers', layers: [
      { label: 'Capture', items: [{ name: 'Guided capture in the application: expected frame, number of photos, flash, no cropping; enrolled device, logged-in author', sub: 'the photo is born in the file, never in the phone’s gallery' }] },
      { label: 'On-device processing', items: [{ name: 'Reduction to 1,600 px and WebP before any upload; SHA-256 fingerprint; time, position and accuracy, file, author attached', sub: 'what leaves weighs twenty times less and already carries its proof', accent: true }] },
      { label: 'Transport', items: [{ name: 'Offline queue; resumable chunked upload (open protocol); resume at the chunk after a cut; acknowledgement per chunk', sub: 'a photo is never resent from the start' }] },
      { label: 'Storage', items: [{ name: 'Receipt: server time, recomputed fingerprint; versioned object; thumbnails; record linked to the file and the author', sub: 'the database keeps the record, object storage keeps the bytes' }] },
      { label: 'Access and retention', items: [{ name: 'Signed link expiring in 15 min, access log, export with fingerprints, written retention then logged deletion', sub: 'the photo is never public, and you know who saw it' }] },
    ], caption: 'Figure 1 · The accented layer is what changes everything on a weak network: the photo is reduced and fingerprinted on the device, before any upload. Applications that send the original and reduce on the server lose photos at every cut and cannot prove that what arrived is what was taken.', alt: 'Five layers: capture, on-device processing (accented), transport, storage, access and retention.' },
    parcours: { caption: 'Figure 2 · One photo, from capture to file. It goes from 4.2 MB to 240 KB on the device, receives its fingerprint and metadata, waits for network in the offline queue, leaves in three chunks of which the second is resumed after a cut, and arrives seven minutes later with its fingerprint checked. Two times are kept, the device’s and the server’s. Sizes and durations are a constructed example.' },
    etapes: { title: 'In the field, in six gestures', items: [
      { label: 'Open the file', sub: 'delivery, site, inspection; the expected photos are listed' },
      { label: 'Shoot in the application', sub: 'guided frame; no gallery import on proof files', accent: true },
      { label: 'Check the list', sub: 'missing photos flagged before closing' },
      { label: 'Sign or get signed', sub: 'signature on the screen; linked to the file’s photos' },
      { label: 'Close the file', sub: 'even without network; everything is queued' },
      { label: 'Let it go', sub: 'resumable upload in the background; visible state: 3 pending, 2 sent' },
    ], caption: 'Figure 3 · The accented step is a rule, not a feature: on a file that must prove something, the photo is taken in the application, not in the gallery, because an imported photo can come from anywhere and any time. The sixth step tells the agent where the upload stands without waiting.', alt: 'Six gestures: open the file, shoot in the application (accented), check the list, sign or get signed, close the file, let it go.' },
    preuve: { caption: 'Figure 4 · What makes a photo hold up is not the image: it is the record around it, the fingerprint computed at capture and recomputed today on the stored object, the object version showing it was never rewritten, and the log of who saw it through a signed link. A retouched copy gives a different fingerprint and fails. Values are a constructed example, and the legal weight of a photo depends on context.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The photo never arrived', cells: ['Sent on WhatsApp from the site, network cut, lost', 'offline queue, resumable upload, visible state; nothing is lost'] },
      { label: 'Twenty 4 MB photos per file', cells: ['The data plan goes, the server fills up, screens crawl', 'reduction to 1,600 px and WebP on the device; thumbnails for lists'] },
      { label: 'The photo’s date is disputed', cells: ['The phone’s time was wrong, or the photo came from the gallery', 'two times kept, device and server; taken in the application'] },
      { label: '“This photo was retouched”', cells: ['No way to prove or refute it', 'fingerprint at capture, recomputed on request; object never rewritten'] },
      { label: 'The photo link circulates', cells: ['A public URL forwarded; visible to anyone', 'signed link expiring in fifteen minutes; log of who opened it'] },
      { label: 'Five years later, a dispute', cells: ['The photos are on an old phone or a lost disk', 'written retention, export with fingerprints, logged deletion'] },
    ], caption: 'Figure 5 · The first two rows are settled on the device, by reduction and the queue; the next two by the fingerprint, the two times and the shoot-in-app rule; the last two by signed access and written retention. None is settled by a more careful agent.', alt: 'Matrix of six situations: photo never arrived, photos too heavy, disputed date, alleged retouching, circulating link, dispute five years later; what happens and what the application does.' },
    calendrier: { title: 'Photos that hold up in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'which files require photos, how many, what sizes, original kept or not, retention period, who may see; signed', from: 0, to: 1 },
      { label: 'Capture and reduction', note: 'guided capture in the application, reduction and WebP on the device, fingerprint and metadata attached', from: 1, to: 2, accent: true },
      { label: 'Queue and upload', note: 'offline queue, resumable chunked upload, visible state for the agent, resume after cut tested', from: 2, to: 3 },
      { label: 'Storage and record', note: 'receipt with server time and check, versioned object storage, thumbnails, record linked to the file', from: 3, to: 4 },
      { label: 'Access and export', note: 'signed links, access log, dispute export with fingerprints, display in files and on the customer portal', from: 4, to: 5 },
      { label: 'Retention and measurement', note: 'logged deletion at term, missing photos per file, first-attempt upload success rate', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the first without code: how many photos, what size, original or not, how long and who may see are the manager’s decisions, not developer settings. The second week is accented because on-device reduction is what makes photos arrive.', alt: 'Six-week timeline: rules, capture and reduction (accented), queue and upload, storage and record, access and export, retention and measurement.' },
  },
  ar: {
    cover: { eyebrow: 'صور · إثبات · تخزين · 2027', title: ['«الصورة', 'لم تصل', 'أبداً»'], subtitle: 'ما يُبنى كي تصل صور الورشة والتسليم والمعاينة، وتزن قليلاً، وتثبت شيئاً، وتبقى مقروءة خمس سنوات: التقاط موجَّه، تصغير على الجهاز، رفع قابل للاستئناف، تخزين كائنات، بصمة، وقتان، وصول موقَّع', left: { label: 'صور على WhatsApp', sub: 'ضائعة، ثقيلة، بلا تاريخ موثوق' }, right: { label: 'بطاقة وبصمة وكائن', sub: 'ورابط ينتهي' } },
    couches: { title: 'صور تصمد، في خمس طبقات', layers: [
      { label: 'الالتقاط', items: [{ name: 'التقاط موجَّه في التطبيق: إطار متوقَّع، عدد الصور، فلاش، لا قصّ؛ جهاز مسجَّل، مؤلف متصل', sub: 'تولد الصورة في الملف لا في معرض الهاتف أبداً' }] },
      { label: 'المعالجة على الجهاز', items: [{ name: 'تصغير إلى 1600 بكسل وWebP قبل أي رفع؛ بصمة SHA-256؛ وقت وموقع ودقة وملف ومؤلف مرفقة', sub: 'ما يخرج يزن عشرين مرة أقل ويحمل إثباته سلفاً', accent: true }] },
      { label: 'النقل', items: [{ name: 'طابور دون اتصال؛ رفع قابل للاستئناف بقطع (بروتوكول مفتوح)؛ استئناف عند القطعة؛ إقرار لكل قطعة', sub: 'الصورة لا تُعاد من البداية أبداً' }] },
      { label: 'التخزين', items: [{ name: 'استلام: وقت الخادم، بصمة معاد حسابها؛ كائن بنسخ؛ مصغّرات؛ بطاقة مرتبطة بالملف والمؤلف', sub: 'قاعدة البيانات تحفظ البطاقة، وتخزين الكائنات يحفظ البايتات' }] },
      { label: 'الوصول والاحتفاظ', items: [{ name: 'رابط موقَّع ينتهي في 15 د، سجل وصول، تصدير بالبصمات، احتفاظ مكتوب ثم حذف مسجَّل', sub: 'الصورة ليست عامة أبداً، ونعرف من رآها' }] },
    ], caption: 'الشكل 1 · الطبقة المميزة هي ما يغيّر كل شيء على شبكة ضعيفة: تُصغَّر الصورة وتُبصَم على الجهاز قبل أي رفع. والتطبيقات التي ترسل الأصل وتصغّر على الخادم تفقد صوراً عند كل انقطاع ولا تستطيع إثبات أن ما وصل هو ما التُقط.', alt: 'خمس طبقات: الالتقاط، المعالجة على الجهاز (مميزة)، النقل، التخزين، الوصول والاحتفاظ.' },
    parcours: { caption: 'الشكل 2 · صورة واحدة من الالتقاط إلى الملف. تنتقل من 4.2 ميغابايت إلى 240 كيلوبايت على الجهاز، وتتلقى بصمتها وبياناتها، وتنتظر الشبكة في طابور دون اتصال، وتنطلق في ثلاث قطع تُستأنف الثانية منها بعد انقطاع، وتصل بعد سبع دقائق ببصمة متحقَّق منها. ويُحتفظ بوقتين، وقت الجهاز ووقت الخادم. والأحجام والمدد مثال مبني.' },
    etapes: { title: 'في الميدان، في ست حركات', items: [
      { label: 'فتح الملف', sub: 'تسليم، ورشة، معاينة؛ الصور المتوقَّعة مدرجة' },
      { label: 'التصوير في التطبيق', sub: 'إطار موجَّه؛ لا استيراد من المعرض في ملفات الإثبات', accent: true },
      { label: 'مراجعة القائمة', sub: 'الصور الناقصة تُشار قبل الإغلاق' },
      { label: 'التوقيع أو طلبه', sub: 'توقيع على الشاشة؛ مرتبط بصور الملف' },
      { label: 'إغلاق الملف', sub: 'حتى بلا شبكة؛ كل شيء في الطابور' },
      { label: 'تركه ينطلق', sub: 'رفع قابل للاستئناف في الخلفية؛ حالة ظاهرة: 3 معلّقة، 2 مرسلة' },
    ], caption: 'الشكل 3 · الخطوة المميزة قاعدة لا ميزة: في ملف يجب أن يثبت شيئاً، تُلتقط الصورة في التطبيق لا في المعرض، لأن صورة مستوردة قد تأتي من أي مكان وأي وقت. والخطوة السادسة تخبر العون بحال الرفع دون أن ينتظر.', alt: 'ست حركات: فتح الملف، التصوير في التطبيق (مميزة)، مراجعة القائمة، التوقيع أو طلبه، إغلاق الملف، تركه ينطلق.' },
    preuve: { caption: 'الشكل 4 · ما يجعل الصورة تصمد ليس الصورة: إنه البطاقة حولها، والبصمة المحسوبة عند الالتقاط والمعاد حسابها اليوم على الكائن المخزَّن، ونسخة الكائن التي تُظهر أنه لم يُعَد كتابته، وسجل من رآها برابط موقَّع. والنسخة المعدَّلة تعطي بصمة مختلفة ولا تمر. والقيم مثال مبني، والقيمة القانونية للصورة تتوقف على السياق.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الصورة لم تصل أبداً', cells: ['أُرسلت على WhatsApp من الورشة، انقطعت الشبكة، ضاعت', 'طابور دون اتصال، رفع قابل للاستئناف، حالة ظاهرة؛ لا شيء يضيع'] },
      { label: 'عشرون صورة بـ 4 ميغابايت لكل ملف', cells: ['باقة البيانات تنفد، الخادم يمتلئ، الشاشات تبطئ', 'تصغير إلى 1600 بكسل وWebP على الجهاز؛ مصغّرات للقوائم'] },
      { label: 'تاريخ الصورة محل نزاع', cells: ['وقت الهاتف كان خاطئاً، أو الصورة من المعرض', 'وقتان محفوظان، الجهاز والخادم؛ ملتقطة في التطبيق'] },
      { label: '«هذه الصورة معدَّلة»', cells: ['لا سبيل لإثباته أو نفيه', 'بصمة عند الالتقاط، معاد حسابها عند الطلب؛ كائن لا يُعاد كتابته'] },
      { label: 'رابط الصورة يتداول', cells: ['رابط عام مُرسَل؛ مرئية لأي كان', 'رابط موقَّع ينتهي في خمس عشرة دقيقة؛ سجل من فتحه'] },
      { label: 'بعد خمس سنوات، نزاع', cells: ['الصور على هاتف قديم أو قرص ضائع', 'احتفاظ مكتوب، تصدير بالبصمات، حذف مسجَّل'] },
    ], caption: 'الشكل 5 · السطران الأولان يُحلان على الجهاز بالتصغير والطابور؛ والتاليان بالبصمة والوقتين وقاعدة الالتقاط في التطبيق؛ والأخيران بالوصول الموقَّع والاحتفاظ المكتوب. ولا واحد يُحل بعون أكثر عناية.', alt: 'مصفوفة ست حالات: صورة لم تصل، صور ثقيلة جداً، تاريخ محل نزاع، تعديل مزعوم، رابط يتداول، نزاع بعد خمس سنوات؛ ما يحدث وما يفعله التطبيق.' },
    calendrier: { title: 'صور تصمد سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'أي ملفات تتطلب صوراً، كم، أي أحجام، الأصل محفوظ أم لا، مدة الاحتفاظ، من يرى؛ موقَّعة', from: 0, to: 1 },
      { label: 'الالتقاط والتصغير', note: 'التقاط موجَّه في التطبيق، تصغير وWebP على الجهاز، بصمة وبيانات مرفقة', from: 1, to: 2, accent: true },
      { label: 'الطابور والرفع', note: 'طابور دون اتصال، رفع قابل للاستئناف بقطع، حالة ظاهرة للعون، استئناف بعد الانقطاع مختبَر', from: 2, to: 3 },
      { label: 'التخزين والبطاقة', note: 'استلام بوقت الخادم وتحقق، تخزين كائنات بنسخ، مصغّرات، بطاقة مرتبطة بالملف', from: 3, to: 4 },
      { label: 'الوصول والتصدير', note: 'روابط موقَّعة، سجل وصول، تصدير نزاع بالبصمات، عرض في الملفات وعلى بوابة الزبون', from: 4, to: 5 },
      { label: 'الاحتفاظ والقياس', note: 'حذف مسجَّل عند الأجل، صور ناقصة لكل ملف، نسبة نجاح الرفع من أول محاولة', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والأول بلا كود: كم صورة، وأي حجم، والأصل أم لا، وكم من الوقت، ومن يرى، قرارات المسيّر لا إعدادات مطوّر. والأسبوع الثاني مميز لأن التصغير على الجهاز هو ما يجعل الصور تصل.', alt: 'خط زمني من ستة أسابيع: القواعد، الالتقاط والتصغير (مميز)، الطابور والرفع، التخزين والبطاقة، الوصول والتصدير، الاحتفاظ والقياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = PH[locale] || PH.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      parcours: { svg: pipeline(e.pipeline, rtl), caption: t.parcours.caption, alt: e.pipeline.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      preuve: { svg: proof(e.proof, rtl), caption: t.preuve.caption, alt: e.proof.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
