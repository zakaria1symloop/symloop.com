import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { plan, couverture, STRINGS as SC } from './custom/reseau.mjs';
export const slug = 'installation-reseau-informatique-entreprise-algerie-2027-cablage-baie-de-brassage-switch-wifi-pare-feu-lien-de-secours';
const I = (x) => `⁦${x}⁩`;
const T = {
  fr: {
    cover: { eyebrow: 'Installation réseau informatique · Algérie · 2027', title: ['Installation réseau informatique', 'en Algérie : câblage, Wi-Fi, secours'], subtitle: 'Prises numérotées et testées, baie de brassage, switchs, réseaux séparés, Wi-Fi mesuré, second lien', left: { label: 'Un réseau sans plan', sub: 'personne ne sait quel câble va où' }, right: { label: 'Un réseau dessiné et mesuré', sub: 'bascule provoquée avant la signature' } },
    plan: { caption: 'Figure 1 · Le réseau d’un siège et de son dépôt, dessiné : deux liens internet de deux opérateurs arrivent sur un pare-feu, la baie principale porte deux switchs, le NAS, le serveur et l’onduleur, et le dépôt, à 140 mètres, est relié en fibre parce que le lien permanent en cuivre s’arrête à 90. Sur les mêmes câbles, six réseaux séparés : un visiteur connecté au Wi-Fi des invités ne voit ni les caméras ni le serveur. À 08:40 la fibre est coupée, le secours 4G prend le relais en vingt secondes, caisse et téléphonie d’abord. Équipements, puissances et durées sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que le réseau doit faire', columns: ['Ce qui se passe', 'Ce que le réseau doit faire'], rows: [
      { label: 'Tout rame le dimanche à 9 h', cells: ['Trois petits switchs en cascade sous les bureaux', 'switchs administrables dans la baie, un lien par étage, erreurs lues port par port'] },
      { label: 'Le Wi-Fi coupe en salle de réunion', cells: ['Une box au fond du couloir et un répéteur', 'bornes câblées placées d’après les mesures, un relevé par pièce, aucun répéteur'] },
      { label: 'Internet tombe, tout s’arrête', cells: ['La caisse, la téléphonie et les mails attendent', 'second lien d’un autre opérateur, bascule automatique, caisse et voix d’abord'] },
      { label: 'Un visiteur voit les caméras', cells: ['Tout le monde est sur le même réseau', 'réseaux séparés, invités sur internet seul, règles écrites au pare-feu'] },
      { label: 'Personne ne sait quel câble va où', cells: ['L’installateur est parti avec le plan', 'prises numérotées aux deux bouts, plan de brassage, dossier remis à l’entreprise'] },
      { label: 'Une coupure de courant éteint tout', cells: ['Au retour, la moitié ne redémarre pas', 'onduleur dimensionné et mesuré, arrêt propre du serveur, redémarrage dans l’ordre'] },
    ], caption: 'Figure 2 · Les trois premières lignes se règlent par des switchs dans une baie, des bornes câblées et un second lien ; les trois suivantes par des réseaux séparés, des prises numérotées et un onduleur mesuré. Aucune ne se règle par une box plus puissante ni par un technicien qui « passe quand il peut ».', alt: 'Matrice de six situations : lenteur du dimanche matin, Wi-Fi qui coupe en salle de réunion, internet qui tombe, visiteur qui voit les caméras, câbles non repérés, coupure de courant ; ce qui se passe et ce que le réseau doit faire.' },
    couverture: { caption: 'Figure 3 · Le même étage mesuré deux fois, au téléphone, dans chaque pièce, porte fermée. Avec la box de l’opérateur au bout du couloir, le signal passe de −48 dBm à l’accueil à −84 en salle de réunion, et quatre pièces sur huit sont sous le repère de −67 dBm, d’usage courant pour la voix et la visio. Avec deux bornes câblées au plafond du couloir, les huit pièces sont entre −49 et −56. Les valeurs sont un exemple construit ; les murs, les portes et le mobilier changent tout, et c’est pour cela qu’on mesure.' },
    couches: { title: 'Un réseau d’entreprise, en cinq couches', layers: [
      { label: 'Câblage, baie, énergie', items: [{ name: 'Prises numérotées aux deux bouts, câble de catégorie 6 ou 6A, panneaux de brassage, baie fermée, onduleur ; fibre au-delà de 90 m', sub: 'chaque prise est testée et son résultat est remis' }] },
      { label: 'Switchs et PoE', items: [{ name: 'Switchs administrables dans la baie, un lien par étage ou par bâtiment, bornes, téléphones et caméras alimentés par le câble', sub: 'le budget de puissance est compté ; plus de petit switch sous un bureau' }] },
      { label: 'Réseaux séparés', items: [{ name: 'Postes, téléphonie, serveurs et imprimantes, caméras et pointeuses, invités, administration : des règles écrites entre eux', sub: 'ce qui n’a pas besoin de se parler ne se parle pas', accent: true }] },
      { label: 'Wi-Fi', items: [{ name: 'Bornes câblées au plafond, placées d’après un relevé, un nom pour l’entreprise, un pour les invités, canaux répartis', sub: 'le Wi-Fi sert ce qui bouge, le câble sert ce qui reste' }] },
      { label: 'Bord et exploitation', items: [{ name: 'Pare-feu, deux liens de deux opérateurs, bascule automatique, accès distant chiffré, supervision, configurations sauvegardées', sub: 'le dossier et les mots de passe restent à l’entreprise' }] },
    ], caption: 'Figure 4 · La couche accentuée est celle des réseaux séparés : c’est elle qui empêche un visiteur, une caméra ou un poste infecté d’atteindre le serveur, et c’est celle qu’un réseau « qui a poussé tout seul » n’a jamais. Le câblage et les switchs la rendent possible ; le Wi-Fi et le pare-feu ne font que l’appliquer.', alt: 'Cinq couches : câblage, baie et énergie ; switchs et PoE ; réseaux séparés (accentuée) ; Wi-Fi ; bord et exploitation.' },
    calendrier: { title: 'Une installation réseau en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Relevé et plan', note: 'visite, plan des prises, mesures Wi-Fi, plan d’adressage, liste du matériel, devis ligne par ligne ; sans matériel posé', from: 0, to: 1 },
      { label: 'Câblage et baie', note: 'chemins de câbles, tirage, prises, panneaux, baie, fibre vers le dépôt ; chaque prise numérotée et testée', from: 1, to: 3, accent: true },
      { label: 'Équipements actifs', note: 'switchs, réseaux séparés, pare-feu, bornes, second lien ; configurés à côté de l’ancien réseau', from: 3, to: 4 },
      { label: 'Bascule et recette', note: 'migration un soir ou un week-end, six contrôles, dossier remis, deux personnes formées', from: 4, to: 5 },
    ], caption: 'Figure 5 · Cinq semaines dans l’exemple, la première sans matériel posé : le plan des prises, les mesures Wi-Fi et le plan d’adressage sont des décisions, pas des achats. Les deux semaines accentuées sont le câblage, parce qu’un câble mal posé reste dans le mur bien après les équipements, alors que tout le reste se remplace en une soirée. L’entreprise travaille pendant le chantier : l’ancien réseau reste en service jusqu’à la bascule.', alt: 'Calendrier de cinq semaines : relevé et plan, câblage et baie (accentué, deux semaines), équipements actifs, bascule et recette.' },
    recette: { title: 'La recette : six contrôles avant de signer', items: [
      { label: 'Chaque prise testée', sub: 'un rapport par prise, longueur sous 90 m' },
      { label: 'Wi-Fi mesuré', sub: 'une valeur par pièce, porte fermée' },
      { label: 'Internet coupé exprès', sub: 'on débranche la fibre, la caisse continue', accent: true },
      { label: 'Séparation vérifiée', sub: 'depuis le Wi-Fi invités, rien ne répond' },
      { label: 'Courant coupé exprès', sub: 'autonomie mesurée, redémarrage dans l’ordre' },
      { label: 'Dossier remis', sub: 'plans, adresses, mots de passe, sauvegardes' },
    ], caption: 'Figure 6 · Le contrôle accentué est la coupure provoquée : on débranche la fibre un matin de recette et on regarde la caisse continuer, la téléphonie tenir et le gérant recevoir l’alerte. Un secours qui n’a jamais été déclenché n’est pas un secours. Les cinq autres se lisent sur papier : un rapport par prise, une mesure par pièce, une séparation vérifiée, une autonomie mesurée, un dossier remis.', alt: 'Six contrôles de recette : chaque prise testée, Wi-Fi mesuré, internet coupé exprès (accentué), séparation vérifiée, courant coupé exprès, dossier remis.' },
  },
  en: {
    cover: { eyebrow: 'Company network installation · Algeria · 2027', title: ['Company network installation', 'in Algeria: cabling, Wi-Fi, backup'], subtitle: 'Numbered and tested outlets, patch cabinet, switches, separated networks, measured Wi-Fi, second link', left: { label: 'A network with no plan', sub: 'nobody knows which cable goes where' }, right: { label: 'A network drawn and measured', sub: 'failover provoked before sign-off' } },
    plan: { caption: 'Figure 1 · The network of a head office and its warehouse, drawn: two internet links from two operators reach a firewall, the main cabinet holds two switches, the NAS, the server and the UPS, and the warehouse, 140 metres away, is linked by fibre because the copper permanent link stops at 90. On the same cables, six separated networks: a visitor on the guest Wi-Fi sees neither the cameras nor the server. At 08:40 the fibre is cut, the 4G backup takes over in twenty seconds, till and telephony first. Equipment, powers and durations are a constructed example.' },
    situations: { title: 'Six real situations, and what the network must do', columns: ['What happens', 'What the network must do'], rows: [
      { label: 'Everything crawls on Sunday at 9', cells: ['Three small switches daisy-chained under desks', 'managed switches in the cabinet; one uplink per floor; errors read port by port'] },
      { label: 'Wi-Fi drops in the meeting room', cells: ['One box at the end of the corridor and a repeater', 'wired access points placed from measurements; one reading per room; no repeater'] },
      { label: 'Internet goes down, everything stops', cells: ['The till, the phones and email wait', 'second link from another operator; automatic failover; till and voice first'] },
      { label: 'A visitor can see the cameras', cells: ['Everyone is on the same network', 'separated networks; guests on internet only; rules written on the firewall'] },
      { label: 'Nobody knows which cable goes where', cells: ['The installer left with the plan', 'outlets numbered at both ends; patching plan; file handed to the company'] },
      { label: 'A power cut switches everything off', cells: ['When power returns, half does not restart', 'UPS sized and measured; clean server shutdown; restart in order'] },
    ], caption: 'Figure 2 · The first three rows are settled by switches in a cabinet, wired access points and a second link; the next three by separated networks, numbered outlets and a measured UPS. None is settled by a more powerful box or by a technician who “drops by when he can”.', alt: 'Matrix of six situations: Sunday-morning slowness, Wi-Fi dropping in the meeting room, internet outage, visitor seeing cameras, unlabelled cables, power cut; what happens and what the network must do.' },
    couverture: { caption: 'Figure 3 · The same floor measured twice, with a phone, in every room, door closed. With the operator box at the end of the corridor, the signal goes from −48 dBm at reception to −84 in the meeting room, and four rooms out of eight sit below the −67 dBm mark commonly used for voice and video. With two wired access points on the corridor ceiling, all eight rooms are between −49 and −56. The values are a constructed example; walls, doors and furniture change everything, which is why it is measured.' },
    couches: { title: 'A company network, in five layers', layers: [
      { label: 'Cabling, cabinet, power', items: [{ name: 'Outlets numbered at both ends, Category 6 or 6A cable, patch panels, closed cabinet, UPS; fibre beyond 90 m', sub: 'every outlet is tested and its result is handed over' }] },
      { label: 'Switches and PoE', items: [{ name: 'Managed switches in the cabinet, one uplink per floor or building, access points, phones and cameras powered by the cable', sub: 'the power budget is counted; no more small switch under a desk' }] },
      { label: 'Separated networks', items: [{ name: 'Workstations, telephony, servers and printers, cameras and time clocks, guests, administration: written rules between them', sub: 'what does not need to talk to each other does not', accent: true }] },
      { label: 'Wi-Fi', items: [{ name: 'Wired access points on the ceiling, placed from a survey, one name for the company, one for guests, channels spread', sub: 'Wi-Fi serves what moves, cable serves what stays' }] },
      { label: 'Edge and operation', items: [{ name: 'Firewall, two links from two operators, automatic failover, encrypted remote access, monitoring, saved configurations', sub: 'the file and the passwords stay with the company' }] },
    ], caption: 'Figure 4 · The accented layer is the separated networks: it is what stops a visitor, a camera or an infected workstation from reaching the server, and it is the one a network that “grew on its own” never has. Cabling and switches make it possible; Wi-Fi and the firewall only apply it.', alt: 'Five layers: cabling, cabinet and power; switches and PoE; separated networks (accented); Wi-Fi; edge and operation.' },
    calendrier: { title: 'A network installation in 2027, in weeks', unit: 'wk', items: [
      { label: 'Survey and plan', note: 'visit, outlet plan, Wi-Fi measurements, addressing plan, equipment list, line-by-line quote; nothing installed yet', from: 0, to: 1 },
      { label: 'Cabling and cabinet', note: 'cable trays, pulling, outlets, panels, cabinet, fibre to the warehouse; every outlet numbered and tested', from: 1, to: 3, accent: true },
      { label: 'Active equipment', note: 'switches, separated networks, firewall, access points, second link; configured beside the old network', from: 3, to: 4 },
      { label: 'Cutover and acceptance', note: 'migration one evening or weekend, six checks, file handed over, two people trained', from: 4, to: 5 },
    ], caption: 'Figure 5 · Five weeks in the example, the first with nothing installed: the outlet plan, the Wi-Fi measurements and the addressing plan are decisions, not purchases. The two accented weeks are the cabling, because a badly laid cable stays in the wall long after the equipment, while everything else can be replaced in an evening. The company keeps working during the job: the old network stays in service until cutover.', alt: 'Five-week calendar: survey and plan, cabling and cabinet (accented, two weeks), active equipment, cutover and acceptance.' },
    recette: { title: 'Acceptance: six checks before signing', items: [
      { label: 'Every outlet tested', sub: 'one report per outlet; length under 90 m' },
      { label: 'Wi-Fi measured', sub: 'one value per room, door closed' },
      { label: 'Internet cut on purpose', sub: 'the fibre is unplugged; the till carries on', accent: true },
      { label: 'Separation checked', sub: 'from the guest Wi-Fi, nothing answers' },
      { label: 'Power cut on purpose', sub: 'runtime measured; restart in order' },
      { label: 'File handed over', sub: 'plans, addresses, passwords, backups' },
    ], caption: 'Figure 6 · The accented check is the provoked outage: the fibre is unplugged on acceptance morning and everyone watches the till carry on, the phones hold and the manager receive the alert. A backup that has never been triggered is not a backup. The other five are read on paper: a report per outlet, a measurement per room, a verified separation, a measured runtime, a file handed over.', alt: 'Six acceptance checks: every outlet tested, Wi-Fi measured, internet cut on purpose (accented), separation checked, power cut on purpose, file handed over.' },
  },
  ar: {
    cover: { eyebrow: 'تركيب شبكة معلوماتية · الجزائر · 2027', title: ['تركيب شبكة معلوماتية للمؤسسة', 'في الجزائر: الكوابل، الواي فاي، الاحتياطي'], subtitle: 'مآخذ مرقَّمة ومختبَرة، خزانة توصيل، مبدّلات، شبكات معزولة، واي فاي مقاس، خط ثانٍ', left: { label: 'شبكة بلا مخطط', sub: 'لا أحد يعرف أي كابل يذهب إلى أين' }, right: { label: 'شبكة مرسومة ومقاسة', sub: 'التحويل جُرِّب عمداً قبل التوقيع' } },
    plan: { caption: `الشكل 1 · شبكة مقر ومستودعه مرسومة: خطّا إنترنت من متعاملَين يصلان إلى جدار حماية، الخزانة الرئيسية تحمل مبدّلين و${I('NAS')} والخادم ومزوّد الطاقة غير المنقطعة، والمستودع على بعد 140 متراً موصول بالألياف لأن الوصلة النحاسية الدائمة تتوقف عند 90. على الكوابل نفسها ست شبكات معزولة: الزائر الموصول بواي فاي الضيوف لا يرى الكاميرات ولا الخادم. عند ${I('08:40')} تنقطع الألياف، فيتولى خط ${I('4G')} الاحتياطي في عشرين ثانية، الصندوق والهاتف أولاً. التجهيزات والقدرات والمدد مثال مركَّب.` },
    situations: { title: 'ست حالات واقعية، وما يجب أن تفعله الشبكة', columns: ['ما يحدث', 'ما يجب أن تفعله الشبكة'], rows: [
      { label: 'كل شيء يتباطأ يوم الأحد صباحاً', cells: ['ثلاثة مبدّلات صغيرة متسلسلة تحت المكاتب', 'مبدّلات قابلة للإدارة في الخزانة؛ وصلة لكل طابق؛ الأخطاء تُقرأ منفذاً منفذاً'] },
      { label: 'الواي فاي ينقطع في قاعة الاجتماعات', cells: ['علبة في آخر الرواق ومكرِّر', 'نقاط وصول موصولة بالكابل حسب القياس؛ قراءة لكل غرفة؛ دون مكرِّر'] },
      { label: 'ينقطع الإنترنت فيتوقف كل شيء', cells: ['الصندوق والهاتف والبريد ينتظرون', 'خط ثانٍ من متعامل آخر؛ تحويل تلقائي؛ الصندوق والصوت أولاً'] },
      { label: 'زائر يرى الكاميرات', cells: ['الجميع على الشبكة نفسها', 'شبكات معزولة؛ الضيوف على الإنترنت فقط؛ قواعد مكتوبة في جدار الحماية'] },
      { label: 'لا أحد يعرف أي كابل يذهب إلى أين', cells: ['المركِّب غادر ومعه المخطط', 'مآخذ مرقَّمة من الطرفين؛ مخطط التوصيل؛ ملف يُسلَّم للمؤسسة'] },
      { label: 'انقطاع الكهرباء يطفئ كل شيء', cells: ['عند العودة نصف التجهيزات لا يشتغل', 'مزوّد طاقة محسوب ومقاس؛ إطفاء سليم للخادم؛ إعادة تشغيل بالترتيب'] },
    ], caption: 'الشكل 2 · السطور الثلاثة الأولى تُحَل بمبدّلات في خزانة، ونقاط وصول موصولة بالكابل، وخط ثانٍ؛ والثلاثة التالية بشبكات معزولة، ومآخذ مرقَّمة، ومزوّد طاقة مقاس. لا يُحَل أي منها بعلبة أقوى ولا بتقني «يمرّ حين يستطيع».', alt: 'مصفوفة ست حالات: بطء بداية الأسبوع، انقطاع الواي فاي في قاعة الاجتماعات، انقطاع الإنترنت، زائر يرى الكاميرات، كوابل غير معلَّمة، انقطاع الكهرباء؛ ما يحدث وما يجب أن تفعله الشبكة.' },
    couverture: { caption: `الشكل 3 · الطابق نفسه مقاساً مرتين، بالهاتف، في كل غرفة والباب مغلق. مع علبة المتعامل في آخر الرواق تنزل الإشارة من ${I('−48 dBm')} في الاستقبال إلى ${I('−84')} في قاعة الاجتماعات، وأربع غرف من ثمانٍ تحت علامة ${I('−67 dBm')} الشائعة للصوت والفيديو. مع نقطتي وصول موصولتين بالكابل في سقف الرواق، الغرف الثماني بين ${I('−49')} و${I('−56')}. القيم مثال مركَّب؛ الجدران والأبواب والأثاث تغيّر كل شيء، ولهذا نقيس.` },
    couches: { title: 'شبكة المؤسسة، في خمس طبقات', layers: [
      { label: 'الكوابل، الخزانة، الطاقة', items: [{ name: `مآخذ مرقَّمة من الطرفين، كابل من الفئة 6 أو ${I('6A')}، لوحات توصيل، خزانة مغلقة، مزوّد طاقة؛ ألياف بعد 90 متراً`, sub: 'كل مأخذ يُختبَر ونتيجته تُسلَّم' }] },
      { label: 'المبدّلات والتغذية بالكابل', items: [{ name: 'مبدّلات قابلة للإدارة في الخزانة، وصلة لكل طابق أو مبنى، نقاط الوصول والهواتف والكاميرات تتغذى من الكابل', sub: 'ميزانية القدرة محسوبة؛ لا مبدّل صغير تحت مكتب' }] },
      { label: 'شبكات معزولة', items: [{ name: 'الحواسيب، الهاتف، الخوادم والطابعات، الكاميرات وأجهزة البصمة، الضيوف، الإدارة التقنية: قواعد مكتوبة بينها', sub: 'ما لا يحتاج أن يتخاطب لا يتخاطب', accent: true }] },
      { label: 'الواي فاي', items: [{ name: 'نقاط وصول موصولة بالكابل في السقف، موضوعة حسب قياس، اسم للمؤسسة واسم للضيوف، قنوات موزَّعة', sub: 'الواي فاي لما يتحرك، والكابل لما يبقى في مكانه' }] },
      { label: 'الحافة والتشغيل', items: [{ name: 'جدار حماية، خطّان من متعاملَين، تحويل تلقائي، وصول عن بعد مشفَّر، مراقبة، إعدادات محفوظة', sub: 'الملف وكلمات المرور يبقيان عند المؤسسة' }] },
    ], caption: 'الشكل 4 · الطبقة المبرزة هي الشبكات المعزولة: هي التي تمنع زائراً أو كاميرا أو حاسوباً مصاباً من بلوغ الخادم، وهي التي لا تملكها أبداً شبكة «نمت وحدها». الكوابل والمبدّلات تجعلها ممكنة؛ والواي فاي وجدار الحماية يطبّقانها فقط.', alt: 'خمس طبقات: الكوابل والخزانة والطاقة؛ المبدّلات والتغذية بالكابل؛ الشبكات المعزولة (مبرزة)؛ الواي فاي؛ الحافة والتشغيل.' },
    calendrier: { title: 'تركيب شبكة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'المعاينة والمخطط', note: 'زيارة، مخطط المآخذ، قياسات الواي فاي، مخطط العناوين، قائمة العتاد، عرض سعر سطراً سطراً؛ دون تركيب أي عتاد', from: 0, to: 1 },
      { label: 'الكوابل والخزانة', note: 'مسارات الكوابل، السحب، المآخذ، اللوحات، الخزانة، الألياف نحو المستودع؛ كل مأخذ مرقَّم ومختبَر', from: 1, to: 3, accent: true },
      { label: 'التجهيزات الفعّالة', note: 'المبدّلات، الشبكات المعزولة، جدار الحماية، نقاط الوصول، الخط الثاني؛ تُضبَط بجانب الشبكة القديمة', from: 3, to: 4 },
      { label: 'الانتقال والاستلام', note: 'الانتقال في مساء أو نهاية أسبوع، ستة فحوص، تسليم الملف، تكوين شخصين', from: 4, to: 5 },
    ], caption: 'الشكل 5 · خمسة أسابيع في المثال، الأول دون تركيب أي عتاد: مخطط المآخذ وقياسات الواي فاي ومخطط العناوين قرارات لا مشتريات. الأسبوعان المبرزان هما الكوابل، لأن الكابل السيئ التركيب يبقى في الجدار طويلاً بعد التجهيزات، وكل ما عداه يُستبدَل في مساء. المؤسسة تواصل العمل أثناء الورشة: الشبكة القديمة تبقى في الخدمة حتى الانتقال.', alt: 'تقويم خمسة أسابيع: المعاينة والمخطط، الكوابل والخزانة (مبرز، أسبوعان)، التجهيزات الفعّالة، الانتقال والاستلام.' },
    recette: { title: 'الاستلام: ستة فحوص قبل التوقيع', items: [
      { label: 'اختبار كل مأخذ', sub: 'تقرير لكل مأخذ؛ الطول دون 90 متراً' },
      { label: 'قياس الواي فاي', sub: 'قيمة لكل غرفة والباب مغلق' },
      { label: 'قطع الإنترنت عمداً', sub: 'نفصل الألياف؛ والصندوق يواصل', accent: true },
      { label: 'التحقق من العزل', sub: 'من واي فاي الضيوف لا شيء يجيب' },
      { label: 'قطع الكهرباء عمداً', sub: 'المدة مقاسة؛ إعادة تشغيل بالترتيب' },
      { label: 'تسليم الملف', sub: 'مخططات، عناوين، كلمات مرور، نسخ' },
    ], caption: 'الشكل 6 · الفحص المبرز هو الانقطاع المتعمَّد: نفصل الألياف صباح الاستلام ونرى الصندوق يواصل، والهاتف يصمد، والمسيّر يتلقى التنبيه. الخط الاحتياطي الذي لم يُجرَّب قط ليس احتياطياً. الفحوص الخمسة الأخرى تُقرأ على الورق: تقرير لكل مأخذ، قياس لكل غرفة، عزل متحقَّق منه، مدة مقاسة، ملف مسلَّم.', alt: 'ستة فحوص استلام: اختبار كل مأخذ، قياس الواي فاي، قطع الإنترنت عمداً (مبرز)، التحقق من العزل، قطع الكهرباء عمداً، تسليم الملف.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      plan: { svg: plan(e.plan, rtl), caption: t.plan.caption, alt: e.plan.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      couverture: { svg: couverture(e.couverture, rtl), caption: t.couverture.caption, alt: e.couverture.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 5, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      recette: { svg: steps({ title: t.recette.title, steps: t.recette.items, arrows: true, rtl }), caption: t.recette.caption, alt: t.recette.alt },
    },
  };
}
