import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { carte, allers, STRINGS as SC } from './custom/intersites.mjs';
export const slug = 'interconnecter-deux-sites-distants-algerie-2027-vpn-siege-agences-depot-plan-d-adresses-debit-secours-logiciel-lent';
const T = {
  fr: {
    cover: { eyebrow: 'Interconnexion de sites · Algérie · 2027', title: ['Interconnecter des sites distants', 'en Algérie : tunnels, adresses, secours'], subtitle: 'Plan d’adresses sans chevauchement, pare-feu à chaque site, tunnels chiffrés, logiciel qui traverse', left: { label: 'Chaque site dans son coin', sub: 'fichiers envoyés le soir, prix différents' }, right: { label: 'Un seul réseau, trois sites', sub: 'un tunnel qui remonte seul' } },
    carte: { caption: 'Figure 1 · Le siège d’Alger, l’agence d’Oran et le dépôt de Sétif reliés par deux tunnels chiffrés à travers internet. Chaque site a son propre plan d’adresses ; le siège a une adresse publique fixe et reçoit les tunnels que les deux autres ouvrent. Le débit entre deux sites est borné par le plus petit des deux, montant de celui qui envoie et descendant de celui qui reçoit : Sétif n’envoie qu’à dix mégabits par seconde. Avant, les trois sites portaient le même plan d’adresses d’usine et ne pouvaient pas être reliés. Quand le lien d’Oran tombe, le tunnel remonte sur le secours en vingt-cinq secondes. Débits, délais et adresses sont un exemple construit.' },
    allers: { caption: 'Figure 2 · Le même écran ouvert de cinq façons. Un logiciel installé sur le poste échange quatre cents fois avec sa base pour afficher une fiche : à une milliseconde l’aller-retour, c’est quatre dixièmes de seconde au siège ; à vingt millisecondes, c’est huit secondes à l’agence, quel que soit le débit. Par bureau à distance, par une application web ou par une copie locale synchronisée, le même écran revient sous la seconde. Nombre d’échanges et délais sont un exemple construit ; ils se mesurent sur votre logiciel.' },
    situations: { title: 'Six situations réelles, et ce que l’interconnexion doit faire', columns: ['Ce qui se passe', 'Ce que l’interconnexion doit faire'], rows: [
      { label: 'L’agence envoie ses ventes par fichier le soir', cells: ['Chaque site a son propre logiciel ou son tableur', 'un seul logiciel joint par le tunnel, ventes visibles au siège dans la minute'] },
      { label: 'Le logiciel est inutilisable à l’agence', cells: ['Il échange des centaines de fois avec le siège', 'bureau à distance, application web ou copie locale, choisi logiciel par logiciel'] },
      { label: 'On travaille par TeamViewer sur un poste du siège', cells: ['Un poste du siège reste allumé pour chaque agence', 'accès par le tunnel avec un compte par personne, plus de poste prêté'] },
      { label: 'Le bureau à distance est ouvert sur internet', cells: ['Une redirection de port faite un jour pour dépanner', 'plus aucun port ouvert, accès par le tunnel seul, double vérification'] },
      { label: 'Le lien de l’agence tombe, elle ne peut plus rien faire', cells: ['Un seul lien, aucun secours', 'second lien, tunnel qui remonte seul, caisse qui continue hors ligne'] },
      { label: 'On ne peut pas relier les sites', cells: ['Les trois utilisent le même plan d’adresses', 'un plan par site écrit une fois, renumérotation un soir, puis les tunnels'] },
    ], caption: 'Figure 3 · Les trois premières lignes se règlent par un tunnel et par le bon mode de traversée du logiciel ; les trois suivantes par la fermeture des ports ouverts, un second lien et un plan d’adresses par site. Aucune ne se règle par un abonnement internet plus rapide.', alt: 'Matrice de six situations : ventes envoyées par fichier, logiciel inutilisable à l’agence, travail par prise en main à distance, bureau à distance ouvert sur internet, lien de l’agence qui tombe, sites impossibles à relier ; ce qui se passe et ce que l’interconnexion doit faire.' },
    couches: { title: 'Une interconnexion de sites, en cinq couches', layers: [
      { label: 'Plan d’adresses', items: [{ name: 'Un bloc d’adresses par site, sans chevauchement, avec la même logique de réseaux séparés partout', sub: 'tant que deux sites portent les mêmes adresses, rien ne peut les relier' }] },
      { label: 'Pare-feu par site', items: [{ name: 'Un pare-feu à chaque site ; une adresse publique fixe au siège, ou un point central hébergé', sub: 'les agences ouvrent le tunnel vers le siège, jamais l’inverse depuis internet' }] },
      { label: 'Tunnels chiffrés', items: [{ name: 'Un tunnel par agence vers le siège, à travers internet, qui se rétablit seul après une coupure', sub: 'ce qui voyage entre les sites est illisible pour tout autre que les deux pare-feu', accent: true }] },
      { label: 'Règles entre sites', items: [{ name: 'Ce que chaque site peut joindre : le serveur et la téléphonie, pas les caméras ni les postes du voisin', sub: 'un tunnel n’est pas une porte ouverte sur tout le siège' }] },
      { label: 'Traversée et secours', items: [{ name: 'Bureau à distance, application web ou copie locale selon le logiciel ; second lien et délai mesuré', sub: 'le logiciel est choisi d’après le lien mesuré, pas l’inverse' }] },
    ], caption: 'Figure 4 · La couche accentuée est celle des tunnels chiffrés : c’est elle qui fait de trois réseaux un seul sans louer de ligne privée. Le plan d’adresses et les pare-feu, au-dessus, la rendent possible ; les règles entre sites et le mode de traversée, en dessous, décident de ce qu’elle transporte et de ce qu’elle refuse.', alt: 'Cinq couches : plan d’adresses ; pare-feu par site ; tunnels chiffrés (accentuée) ; règles entre sites ; traversée et secours.' },
    calendrier: { title: 'Une interconnexion de sites en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Relevé et plan', note: 'adresses de chaque site, liens, débit et délai mesurés, logiciels à faire traverser, plan d’adresses ; sans rien changer', from: 0, to: 1 },
      { label: 'Adresses et tunnels', note: 'renumérotation des sites qui se chevauchent, pare-feu posés, tunnels montés et essayés à côté de l’existant', from: 1, to: 2, accent: true },
      { label: 'Logiciels et secours', note: 'chaque logiciel basculé selon son mode, ports ouverts fermés, coupure provoquée, délais relus', from: 2, to: 3 },
    ], caption: 'Figure 5 · Trois semaines dans l’exemple pour trois sites, la première sans rien changer : le relevé des adresses, la mesure des liens et le plan sont des décisions. La semaine accentuée est celle des adresses et des tunnels, parce que renuméroter un site se prépare et se fait un soir. Une liaison privée louée à un opérateur, quand elle existe à vos adresses, suit son propre délai.', alt: 'Calendrier de trois semaines : relevé et plan, adresses et tunnels (accentué), logiciels et secours.' },
    etapes: { title: 'Six décisions avant de relier vos sites', items: [
      { label: 'Écrire le plan d’adresses', sub: 'un bloc par site, sans chevauchement', accent: true },
      { label: 'Étoile ou maillage', sub: 'tout par le siège, ou des liens directs' },
      { label: 'Trouver un point fixe', sub: 'adresse publique fixe ou point central hébergé' },
      { label: 'Écrire les règles', sub: 'ce que chaque site peut joindre au siège' },
      { label: 'Choisir la traversée', sub: 'écran, requêtes ou copie, logiciel par logiciel' },
      { label: 'Prévoir le secours', sub: 'second lien, tunnel qui remonte, alerte' },
    ], caption: 'Figure 6 · La décision accentuée est la première : sans un plan d’adresses écrit, chaque nouveau site apporte son réglage d’usine et bloque tout. Les cinq autres se prennent ensuite dans l’ordre : la forme du réseau, le point fixe vers lequel les tunnels s’ouvrent, les règles entre sites, la façon dont chaque logiciel traverse, et le secours.', alt: 'Six décisions : écrire le plan d’adresses (accentuée), étoile ou maillage, trouver un point fixe, écrire les règles, choisir la traversée, prévoir le secours.' },
  },
  en: {
    cover: { eyebrow: 'Linking company sites · Algeria · 2027', title: ['Linking distant company sites', 'in Algeria: tunnels, addresses, backup'], subtitle: 'Address plans with no overlap, a firewall at each site, encrypted tunnels, software that gets through', left: { label: 'Each site on its own', sub: 'files sent in the evening, different prices' }, right: { label: 'One network, three sites', sub: 'a tunnel that comes back by itself' } },
    carte: { caption: 'Figure 1 · The Algiers head office, the Oran branch and the Sétif warehouse linked by two encrypted tunnels across the internet. Each site has its own address plan; the head office has a fixed public address and receives the tunnels the other two open. Throughput between two sites is capped by the smaller of the two, upload of the sender and download of the receiver: Sétif sends at only ten megabits per second. Before, the three sites carried the same factory address plan and could not be linked. When the Oran link drops, the tunnel comes back over the backup in twenty-five seconds. Speeds, delays and addresses are a constructed example.' },
    allers: { caption: 'Figure 2 · The same screen opened five ways. Software installed on the workstation exchanges four hundred times with its database to display one record: at one millisecond per round trip, that is four tenths of a second at head office; at twenty milliseconds, it is eight seconds at the branch, whatever the bandwidth. By remote desktop, through a web application or with a synchronised local copy, the same screen comes back in under a second. Number of exchanges and delays are a constructed example; they are measured on your software.' },
    situations: { title: 'Six real situations, and what linking the sites must do', columns: ['What happens', 'What linking the sites must do'], rows: [
      { label: 'The branch sends its sales by file in the evening', cells: ['Each site has its own software or spreadsheet', 'one software reached through the tunnel; sales seen at head office within the minute'] },
      { label: 'The software is unusable at the branch', cells: ['It exchanges hundreds of times with head office', 'remote desktop, web application or local copy, chosen software by software'] },
      { label: 'We work through TeamViewer on a head-office PC', cells: ['A head-office PC stays on for each branch', 'access through the tunnel with one account per person; no more borrowed PC'] },
      { label: 'Remote desktop is open on the internet', cells: ['A port forward set up one day to fix something', 'no port open any more; access through the tunnel only; two-step sign-in'] },
      { label: 'The branch link drops and it can do nothing', cells: ['One link, no backup', 'second link; tunnel that comes back by itself; a till that carries on offline'] },
      { label: 'The sites cannot be linked', cells: ['All three use the same address plan', 'one plan per site written once; renumbering one evening; then the tunnels'] },
    ], caption: 'Figure 3 · The first three rows are settled by a tunnel and by the right way for the software to cross; the next three by closing the open ports, a second link and one address plan per site. None is settled by a faster internet subscription.', alt: 'Matrix of six situations: sales sent by file, software unusable at the branch, working through remote-control tools, remote desktop open on the internet, branch link dropping, sites impossible to link; what happens and what linking the sites must do.' },
    couches: { title: 'Linking sites, in five layers', layers: [
      { label: 'Address plan', items: [{ name: 'One block of addresses per site, with no overlap, and the same logic of separated networks everywhere', sub: 'as long as two sites carry the same addresses, nothing can link them' }] },
      { label: 'Firewall per site', items: [{ name: 'A firewall at each site; a fixed public address at head office, or a hosted central point', sub: 'branches open the tunnel towards head office, never the reverse from the internet' }] },
      { label: 'Encrypted tunnels', items: [{ name: 'One tunnel per branch towards head office, across the internet, re-established by itself after a cut', sub: 'what travels between sites is unreadable to anyone but the two firewalls', accent: true }] },
      { label: 'Rules between sites', items: [{ name: 'What each site may reach: the server and telephony, not the cameras nor the neighbour’s workstations', sub: 'a tunnel is not an open door onto the whole head office' }] },
      { label: 'Crossing and backup', items: [{ name: 'Remote desktop, web application or local copy depending on the software; second link and measured delay', sub: 'the software is chosen from the measured link, not the other way round' }] },
    ], caption: 'Figure 4 · The accented layer is the encrypted tunnels: it is what turns three networks into one without renting a private line. The address plan and the firewalls, above, make it possible; the rules between sites and the way of crossing, below, decide what it carries and what it refuses.', alt: 'Five layers: address plan; firewall per site; encrypted tunnels (accented); rules between sites; crossing and backup.' },
    calendrier: { title: 'Linking sites in 2027, in weeks', unit: 'wk', items: [
      { label: 'Survey and plan', note: 'addresses of each site, links, measured speed and delay, software that must cross, address plan; nothing changed', from: 0, to: 1 },
      { label: 'Addresses and tunnels', note: 'overlapping sites renumbered, firewalls installed, tunnels set up and tried beside what exists', from: 1, to: 2, accent: true },
      { label: 'Software and backup', note: 'each piece of software switched to its mode, open ports closed, outage provoked, delays re-read', from: 2, to: 3 },
    ], caption: 'Figure 5 · Three weeks in the example for three sites, the first with nothing changed: the survey of addresses, the link measurements and the plan are decisions. The accented week is addresses and tunnels, because renumbering a site is prepared and done in one evening. A private link rented from an operator, where it exists at your addresses, follows its own lead time.', alt: 'Three-week calendar: survey and plan, addresses and tunnels (accented), software and backup.' },
    etapes: { title: 'Six decisions before linking your sites', items: [
      { label: 'Write the address plan', sub: 'one block per site, no overlap', accent: true },
      { label: 'Star or mesh', sub: 'everything through head office, or direct links' },
      { label: 'Find a fixed point', sub: 'fixed public address or hosted central point' },
      { label: 'Write the rules', sub: 'what each site may reach at head office' },
      { label: 'Choose the crossing', sub: 'screen, requests or copy, software by software' },
      { label: 'Plan the backup', sub: 'second link, tunnel that returns, alert' },
    ], caption: 'Figure 6 · The accented decision is the first: without a written address plan, each new site brings its factory setting and blocks everything. The other five then follow in order: the shape of the network, the fixed point the tunnels open towards, the rules between sites, the way each piece of software crosses, and the backup.', alt: 'Six decisions: write the address plan (accented), star or mesh, find a fixed point, write the rules, choose the crossing, plan the backup.' },
  },
  ar: {
    cover: { eyebrow: 'ربط مواقع المؤسسة · الجزائر · 2027', title: ['ربط المواقع المتباعدة', 'في الجزائر: الأنفاق، العناوين، الاحتياط'], subtitle: 'مخططات عناوين دون تداخل، جدار حماية في كل موقع، أنفاق مشفَّرة، وبرنامج يعبر', left: { label: 'كل موقع وحده', sub: 'ملفات تُرسل في المساء وأسعار مختلفة' }, right: { label: 'شبكة واحدة وثلاثة مواقع', sub: 'نفق يعود وحده' } },
    carte: { caption: 'الشكل 1 · مقر الجزائر العاصمة ووكالة وهران ومستودع سطيف مربوطة بنفقين مشفَّرين عبر الإنترنت. لكل موقع مخطط عناوينه؛ وللمقر عنوان عمومي ثابت ويستقبل النفقين اللذين يفتحهما الموقعان الآخران. التدفق بين موقعين محدود بالأصغر بين الاثنين، صعود المرسِل ونزول المستقبِل: سطيف لا يرسل إلا بعشرة ميغابت في الثانية. من قبل كانت المواقع الثلاثة تحمل مخطط عناوين المصنع نفسه ولا يمكن ربطها. وحين يسقط خط وهران يعود النفق عبر الاحتياطي في خمس وعشرين ثانية. التدفقات والمهل والعناوين مثال مركَّب.' },
    allers: { caption: 'الشكل 2 · الشاشة نفسها مفتوحة بخمس طرق. برنامج مثبَّت على الحاسوب يتبادل أربعمئة مرة مع قاعدته لعرض بطاقة واحدة: بميلي ثانية واحدة للذهاب والإياب تكون أربعة أعشار الثانية في المقر؛ وبعشرين ميلي ثانية تكون ثماني ثوانٍ في الوكالة، مهما كان التدفق. بسطح المكتب البعيد، أو بتطبيق ويب، أو بنسخة محلية متزامنة، تعود الشاشة نفسها في أقل من ثانية. عدد التبادلات والمهل مثال مركَّب؛ وتُقاس على برنامجكم.' },
    situations: { title: 'ست حالات واقعية، وما يجب أن يفعله الربط', columns: ['ما يحدث', 'ما يجب أن يفعله الربط'], rows: [
      { label: 'الوكالة ترسل مبيعاتها في ملف كل مساء', cells: ['لكل موقع برنامجه أو جدوله', 'برنامج واحد يُبلَغ عبر النفق؛ والمبيعات تُرى في المقر في دقيقتها'] },
      { label: 'البرنامج لا يُستعمل في الوكالة', cells: ['يتبادل مئات المرات مع المقر', 'سطح مكتب بعيد أو تطبيق ويب أو نسخة محلية، برنامجاً برنامجاً'] },
      { label: 'نعمل بأداة تحكم عن بعد على حاسوب في المقر', cells: ['حاسوب في المقر يبقى مشتعلاً لكل وكالة', 'دخول عبر النفق بحساب لكل شخص؛ ولا حاسوب مُعار'] },
      { label: 'سطح المكتب البعيد مفتوح على الإنترنت', cells: ['تحويل منفذ أُنجز يوماً لإصلاح عطل', 'لا منفذ مفتوح؛ الدخول عبر النفق وحده؛ وتحقق بخطوتين'] },
      { label: 'يسقط خط الوكالة فلا تستطيع شيئاً', cells: ['خط واحد ولا احتياطي', 'خط ثانٍ؛ نفق يعود وحده؛ وصندوق يواصل دون اتصال'] },
      { label: 'لا يمكن ربط المواقع', cells: ['الثلاثة تستعمل مخطط العناوين نفسه', 'مخطط لكل موقع يُكتب مرة؛ إعادة ترقيم في مساء؛ ثم الأنفاق'] },
    ], caption: 'الشكل 3 · السطور الثلاثة الأولى تُحَل بنفق وبطريقة العبور المناسبة للبرنامج؛ والثلاثة التالية بإغلاق المنافذ المفتوحة، وخط ثانٍ، ومخطط عناوين لكل موقع. لا يُحَل أي منها باشتراك إنترنت أسرع.', alt: 'مصفوفة ست حالات: مبيعات تُرسل في ملف، برنامج لا يُستعمل في الوكالة، العمل بأداة تحكم عن بعد، سطح مكتب بعيد مفتوح على الإنترنت، سقوط خط الوكالة، مواقع يتعذر ربطها؛ ما يحدث وما يجب أن يفعله الربط.' },
    couches: { title: 'ربط المواقع، في خمس طبقات', layers: [
      { label: 'مخطط العناوين', items: [{ name: 'كتلة عناوين لكل موقع، دون تداخل، وبالمنطق نفسه للشبكات المعزولة في كل مكان', sub: 'ما دام موقعان يحملان العناوين نفسها فلا شيء يربطهما' }] },
      { label: 'جدار حماية لكل موقع', items: [{ name: 'جدار حماية في كل موقع؛ وعنوان عمومي ثابت في المقر، أو نقطة مركزية مستضافة', sub: 'الوكالات تفتح النفق نحو المقر، لا العكس من الإنترنت' }] },
      { label: 'أنفاق مشفَّرة', items: [{ name: 'نفق لكل وكالة نحو المقر، عبر الإنترنت، يعود وحده بعد الانقطاع', sub: 'ما يسافر بين المواقع لا يقرؤه غير جدارَي الحماية', accent: true }] },
      { label: 'القواعد بين المواقع', items: [{ name: 'ما يستطيع كل موقع بلوغه: الخادم والهاتف، لا الكاميرات ولا حواسيب الجار', sub: 'النفق ليس باباً مفتوحاً على المقر كله' }] },
      { label: 'العبور والاحتياط', items: [{ name: 'سطح مكتب بعيد أو تطبيق ويب أو نسخة محلية حسب البرنامج؛ خط ثانٍ ومهلة مقاسة', sub: 'البرنامج يُختار حسب الخط المقاس، لا العكس' }] },
    ], caption: 'الشكل 4 · الطبقة المبرزة هي الأنفاق المشفَّرة: هي التي تجعل من ثلاث شبكات شبكة واحدة دون كراء خط خاص. مخطط العناوين وجدران الحماية، فوقها، يجعلانها ممكنة؛ والقواعد بين المواقع وطريقة العبور، تحتها، تقرران ما تنقله وما ترفضه.', alt: 'خمس طبقات: مخطط العناوين؛ جدار حماية لكل موقع؛ أنفاق مشفَّرة (مبرزة)؛ القواعد بين المواقع؛ العبور والاحتياط.' },
    calendrier: { title: 'ربط المواقع سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'المعاينة والمخطط', note: 'عناوين كل موقع، الخطوط، التدفق والمهلة مقاسان، البرامج التي يجب أن تعبر، مخطط العناوين؛ دون تغيير شيء', from: 0, to: 1 },
      { label: 'العناوين والأنفاق', note: 'إعادة ترقيم المواقع المتداخلة، تركيب جدران الحماية، إقامة الأنفاق وتجربتها بجانب الموجود', from: 1, to: 2, accent: true },
      { label: 'البرامج والاحتياط', note: 'تحويل كل برنامج حسب طريقته، إغلاق المنافذ المفتوحة، انقطاع متعمَّد، إعادة قراءة المهل', from: 2, to: 3 },
    ], caption: 'الشكل 5 · ثلاثة أسابيع في المثال لثلاثة مواقع، الأول دون تغيير شيء: معاينة العناوين وقياس الخطوط والمخطط قرارات. الأسبوع المبرز هو العناوين والأنفاق، لأن إعادة ترقيم موقع تُحضَّر وتُنجز في مساء. والخط الخاص المكترى من متعامل، حين يتوفر في عناوينكم، له أجله الخاص.', alt: 'تقويم ثلاثة أسابيع: المعاينة والمخطط، العناوين والأنفاق (مبرز)، البرامج والاحتياط.' },
    etapes: { title: 'ستة قرارات قبل ربط مواقعكم', items: [
      { label: 'كتابة مخطط العناوين', sub: 'كتلة لكل موقع، دون تداخل', accent: true },
      { label: 'نجمة أم شبكة كاملة', sub: 'كل شيء عبر المقر، أو وصلات مباشرة' },
      { label: 'إيجاد نقطة ثابتة', sub: 'عنوان عمومي ثابت أو نقطة مركزية مستضافة' },
      { label: 'كتابة القواعد', sub: 'ما يستطيع كل موقع بلوغه في المقر' },
      { label: 'اختيار العبور', sub: 'الشاشة أو الطلبات أو نسخة، برنامجاً برنامجاً' },
      { label: 'تحضير الاحتياط', sub: 'خط ثانٍ، نفق يعود، وتنبيه' },
    ], caption: 'الشكل 6 · القرار المبرز هو الأول: دون مخطط عناوين مكتوب يأتي كل موقع جديد بإعداد المصنع ويعطّل كل شيء. الخمسة الأخرى تُتخذ بعده بالترتيب: شكل الشبكة، النقطة الثابتة التي تُفتح نحوها الأنفاق، القواعد بين المواقع، طريقة عبور كل برنامج، والاحتياط.', alt: 'ستة قرارات: كتابة مخطط العناوين (مبرز)، نجمة أم شبكة كاملة، إيجاد نقطة ثابتة، كتابة القواعد، اختيار العبور، تحضير الاحتياط.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      carte: { svg: carte(e.carte, rtl), caption: t.carte.caption, alt: e.carte.alt },
      allers: { svg: allers(e.allers, rtl), caption: t.allers.caption, alt: e.allers.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 3, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
    },
  };
}
