import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'promoteur-immobilier-vendre-sur-plan-diaspora-2027-espace-acquereur-suivi-chantier';
const T = {
  fr: {
    cover: { eyebrow: 'Promoteurs · Diaspora · 2027', title: ['Vendre sur plan', 'à la diaspora', 'en 2027.'], subtitle: 'Contact qualifié, visite à distance, chantier en photos datées, versements suivis : l’espace acquéreur.', left: { label: 'L’acquéreur', sub: 'à Paris, Lyon ou Marseille' }, right: { label: 'Le chantier', sub: 'Alger, Oran, Béjaïa, Tlemcen' }, note: 'France · Algérie · 2027' },
    journey: { title: 'Une vente sur plan à distance, en six moments', items: [
      { n: '01', label: 'Le contact', sub: 'Salon, site, appel : budget, wilaya, typologie notés.' },
      { n: '02', label: 'La visite à distance', sub: 'Vidéo en direct, plans du lot, vue, finitions.' },
      { n: '03', label: 'La réservation', sub: 'Lot bloqué, dossier prêt, rendez-vous au voyage.' },
      { n: '04', label: 'L’avancement', sub: 'Photos datées à chaque étape, mêmes angles chaque mois.' },
      { n: '05', label: 'Les versements', sub: 'Échéancier, reçus, prochain appel de fonds annoncé.' },
      { n: '06', label: 'La livraison', sub: 'Réserves en photo, levée suivie, clés à un proche.', accent: true },
    ], caption: 'Figure 1 · Entre le moment 03 et le moment 06 passent souvent deux ou trois ans. C’est là que l’acquéreur de la diaspora décroche : il ne voit rien, il appelle, personne ne répond, et il prend l’avion pour vérifier. Les moments 04 et 05 sont ceux qu’il faut rendre visibles depuis Paris.', alt: 'Six moments : le contact qualifié avec budget, wilaya et typologie ; la visite à distance en vidéo avec plans et finitions ; la réservation du lot ; l’avancement en photos datées à chaque étape ; les versements avec échéancier et reçus ; la livraison avec réserves en photo et remise des clés à un proche.' },
    stack: { title: 'Ce qu’il faut construire : le journal de chantier d’abord', layers: [
      { label: 'Côté acquéreur', items: [
        { name: 'Espace acquéreur', sub: 'avancement, documents, échéancier, messages' },
        { name: 'Visite à distance', sub: 'vidéo en direct, plans, choix des finitions' },
      ] },
      { label: 'Le promoteur', items: [
        { name: 'Contacts et relances', sub: 'salon, site, appels ; qui rappelle, quand' },
        { name: 'Journal de chantier', sub: 'photos datées par étape, validées, publiées chaque mois', accent: true },
        { name: 'Échéancier et reçus', sub: 'appels de fonds, paiements, retards' },
      ] },
      { label: 'Le chantier', items: [
        { name: 'Application du conducteur de travaux', sub: 'points de prise de vue, avancement par bloc' },
        { name: 'Réserves et livraison', sub: 'défauts en photo, levée, remise des clés' },
      ] },
      { label: 'Socle', items: [{ name: 'Serveur et données à votre nom', sub: 'contrats, plans, photos, échanges ; arabe, français ; loi 18-07 sur les données personnelles' }] },
    ], caption: 'Figure 2 · L’espace acquéreur n’affiche que ce que le chantier produit. Sans une application simple pour le conducteur de travaux, qui photographie les mêmes points à chaque étape, l’espace reste vide au bout de trois mois et l’acquéreur recommence à appeler.', alt: 'Quatre couches : côté acquéreur l’espace acquéreur et la visite à distance ; le promoteur avec les contacts et relances, le journal de chantier et l’échéancier ; le chantier avec l’application du conducteur de travaux et les réserves ; le socle, serveur et données au nom du promoteur.' },
    salon: { title: 'Un salon à Paris : ce que vaut un suivi tenu', items: [
      { value: '400', label: 'contacts recueillis en trois jours de salon (hypothèse)' },
      { value: '12', label: 'réservations si 3 % convertissent sans suivi (hypothèse)' },
      { value: '24', label: 'réservations à 6 % : qualifiés, visités à distance, relancés' },
      { value: '240 M', label: 'DA de ventes en plus : 12 logements à 20 M DA', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : 400 contacts, 3 % puis 6 % de réservations, 20 millions de dinars par logement. Refaites-le avec vos chiffres du dernier salon : combien de contacts, combien rappelés sous 48 heures, combien de réservations six mois plus tard.', alt: 'Exemple de calcul pour un salon : 400 contacts recueillis en trois jours ; 12 réservations si 3 % convertissent sans suivi ; 24 à 6 % avec qualification, visite à distance et relance ; 12 logements de plus à 20 millions de dinars font 240 millions de dinars de ventes. Les taux sont des hypothèses.' },
    questions: { title: 'Six questions d’un acquéreur à distance, six réponses dans l’outil', columns: ['Ce qu’il fait sans réponse', 'La réponse dans l’espace acquéreur'], rows: [
      { label: 'Le chantier avance-t-il vraiment ?', cells: ['Il demande à un cousin d’aller voir', 'Photos datées, mêmes angles chaque mois'] },
      { label: 'Où en sont mes versements ?', cells: ['Il cherche ses reçus dans ses e-mails', 'Échéancier, reçus, prochain appel annoncé'] },
      { label: 'Mon logement est-il celui du plan ?', cells: ['Il doute de la surface et de la vue', 'Plan du lot, surfaces, étage, orientation'] },
      { label: 'Puis-je choisir mes finitions ?', cells: ['Il découvre le carrelage à la livraison', 'Options, date limite, prix écrit'] },
      { label: 'Qui me répond, et quand ?', cells: ['Il appelle trois numéros différents', 'Un interlocuteur nommé, réponse sous 48 h'] },
      { label: 'Et le jour de la livraison ?', cells: ['Il pose un congé sans savoir la date', 'Date confirmée, réserves en photo, clés'] },
    ], caption: 'Figure 4 · Chaque question sans réponse se transforme en appel, en voyage ou en doute. Un acquéreur qui doute ne recommande pas le promoteur à sa famille, et dans la diaspora c’est la recommandation qui remplit le projet suivant.', alt: 'Matrice de six questions d’un acquéreur à distance : le chantier avance-t-il, où en sont mes versements, mon logement est-il celui du plan, puis-je choisir mes finitions, qui me répond et quand, et le jour de la livraison ; pour chacune, ce qu’il fait sans réponse et la réponse dans l’espace acquéreur.' },
    saison: { title: 'De novembre 2026 au salon d’octobre 2027, en semaines', unit: 'semaines', items: [
      { label: 'Cadrage, contacts et relances', note: 'reprise des contacts du dernier salon', from: 0, to: 4 },
      { label: 'Espace acquéreur', note: 'avancement, documents, échéancier', from: 3, to: 10 },
      { label: 'Application de chantier', note: 'points de prise de vue, par bloc', from: 6, to: 12 },
      { label: 'Essai : un projet en cours', note: 'ses vrais acquéreurs, leurs questions', from: 12, to: 18 },
      { label: 'Visite à distance, finitions', note: 'vidéo en direct, options, prix écrits', from: 18, to: 28 },
      { label: 'Été, puis salon d’octobre', note: 'visites de vacances, nouveaux contacts', from: 34, to: 52, accent: true },
    ], caption: 'Figure 5 · Semaine 0 = début novembre 2026. L’été, quand la diaspora vient en vacances, est le moment des visites sur place et des signatures ; le salon de Paris, en octobre, celui des nouveaux contacts. L’outil doit être rodé avant l’été, sur un projet dont les acquéreurs posent déjà des questions.', alt: 'Calendrier en semaines : cadrage, contacts et relances de 0 à 4 ; espace acquéreur de 3 à 10 ; application de chantier de 6 à 12 ; essai sur un projet en cours de 12 à 18 ; visite à distance et finitions de 18 à 28 ; été puis salon d’octobre de 34 à 52.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Un promoteur, son espace acquéreur', cells: ['Ventes à distance, recommandations', 'Un chantier qui ne photographie pas'] },
      { label: 'Portail commun de promoteurs', cells: ['Abonnement ou frais par contact', 'Projets inégaux sous une même marque'] },
      { label: 'Annonces du neuf pour la diaspora', cells: ['Mise en avant payée par projet', 'Il faut les projets avant le public'] },
      { label: 'Suivi de maison individuelle', cells: ['Forfait par chantier, payé en euros', 'Entrepreneurs à recruter et à former'] },
      { label: 'Architecte ou bureau d’études', cells: ['Suivi vendu avec la mission', 'Visites sur place à tenir'] },
      { label: 'Gestion locative après livraison', cells: ['Commission sur les loyers', 'Locataires, entretien, recouvrement'] },
    ], caption: 'Figure 6 · Les six modèles reposent sur la même pièce : un chantier qui produit chaque mois des preuves datées, et un acquéreur qui les voit depuis la France. Nous conseillons de commencer par un promoteur et un projet en cours, puis d’ouvrir l’outil aux autres projets.', alt: 'Matrice de six modèles : un promoteur avec son espace acquéreur, un portail commun de promoteurs, des annonces du neuf pour la diaspora, le suivi de maison individuelle, l’architecte ou bureau d’études, la gestion locative après livraison ; pour chacun, ce qui rapporte et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Developers · Diaspora · 2027', title: ['Selling off-plan', 'to the diaspora', 'in 2027.'], subtitle: 'Qualified contact, remote viewing, dated site photos, payments tracked: the buyer portal.', left: { label: 'The buyer', sub: 'in Paris, Lyon or Marseille' }, right: { label: 'The site', sub: 'Algiers, Oran, Béjaïa, Tlemcen' }, note: 'France · Algeria · 2027' },
    journey: { title: 'An off-plan sale at a distance, in six moments', items: [
      { n: '01', label: 'The contact', sub: 'Fair, website, call: budget, wilaya, unit type noted.' },
      { n: '02', label: 'Remote viewing', sub: 'Live video, unit plans, view, finishes.' },
      { n: '03', label: 'Reservation', sub: 'Unit held, file ready, appointment on the next trip.' },
      { n: '04', label: 'Progress', sub: 'Dated photos at each stage, same angles every month.' },
      { n: '05', label: 'Payments', sub: 'Schedule, receipts, next call for funds announced.' },
      { n: '06', label: 'Handover', sub: 'Snags in photos, fixes tracked, keys to a relative.', accent: true },
    ], caption: 'Figure 1 · Two or three years often pass between moment 03 and moment 06. That is where the diaspora buyer drops off: they see nothing, they call, nobody answers, and they fly over to check. Moments 04 and 05 are the ones to make visible from Paris.', alt: 'Six moments: the qualified contact with budget, wilaya and unit type; remote viewing by video with plans and finishes; reservation of the unit; progress in dated photos at each stage; payments with schedule and receipts; handover with snags in photos and keys given to a relative.' },
    stack: { title: 'What to build: the site log first', layers: [
      { label: 'Buyer side', items: [
        { name: 'Buyer portal', sub: 'progress, documents, schedule, messages' },
        { name: 'Remote viewing', sub: 'live video, plans, choice of finishes' },
      ] },
      { label: 'The developer', items: [
        { name: 'Contacts and follow-up', sub: 'fair, website, calls; who calls back, when' },
        { name: 'Site log', sub: 'dated photos per stage, approved, published monthly', accent: true },
        { name: 'Schedule and receipts', sub: 'calls for funds, payments, delays' },
      ] },
      { label: 'The site', items: [
        { name: 'Site manager app', sub: 'photo points, progress per block' },
        { name: 'Snags and handover', sub: 'defects in photos, fixes, key handover' },
      ] },
      { label: 'Foundation', items: [{ name: 'Server and data in your name', sub: 'contracts, plans, photos, messages; Arabic, French; law 18-07 on personal data' }] },
    ], caption: 'Figure 2 · The buyer portal only shows what the site produces. Without a simple app for the site manager, who photographs the same points at each stage, the portal is empty after three months and the buyer starts calling again.', alt: 'Four layers: buyer side with the buyer portal and remote viewing; the developer with contacts and follow-up, the site log and the payment schedule; the site with the site manager app and snags; the foundation, server and data in the developer’s name.' },
    salon: { title: 'A fair in Paris: what proper follow-up is worth', items: [
      { value: '400', label: 'contacts collected over three days of a fair (assumption)' },
      { value: '12', label: 'reservations if 3% convert with no follow-up (assumption)' },
      { value: '24', label: 'reservations at 6%: qualified, viewed remotely, chased' },
      { value: '240 M', label: 'DA more in sales: 12 homes at 20 M DA', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: 400 contacts, 3% then 6% reservations, 20 million dinars per home. Run it with your figures from the last fair: how many contacts, how many called back within 48 hours, how many reservations six months later.', alt: 'Worked example for a fair: 400 contacts collected over three days; 12 reservations if 3% convert with no follow-up; 24 at 6% with qualification, remote viewing and follow-up; 12 more homes at 20 million dinars make 240 million dinars in sales. The rates are assumptions.' },
    questions: { title: 'Six questions from a remote buyer, six answers in the tool', columns: ['What they do with no answer', 'The answer in the buyer portal'], rows: [
      { label: 'Is the site really moving?', cells: ['They ask a cousin to go and look', 'Dated photos, same angles every month'] },
      { label: 'Where are my payments?', cells: ['They dig for receipts in their e-mails', 'Schedule, receipts, next call announced'] },
      { label: 'Is my home the one on the plan?', cells: ['They doubt the floor area and the view', 'Unit plan, areas, floor, orientation'] },
      { label: 'Can I choose my finishes?', cells: ['They discover the tiles at handover', 'Options, deadline, written price'] },
      { label: 'Who answers me, and when?', cells: ['They call three different numbers', 'One named contact, answer within 48 h'] },
      { label: 'What about handover day?', cells: ['They book leave without knowing the date', 'Date confirmed, snags in photos, keys'] },
    ], caption: 'Figure 4 · Every unanswered question turns into a call, a trip or a doubt. A buyer who doubts does not recommend the developer to their family, and in the diaspora it is recommendation that fills the next project.', alt: 'Matrix of six questions from a remote buyer: is the site moving, where are my payments, is my home the one on the plan, can I choose my finishes, who answers me and when, and handover day; for each, what they do with no answer and the answer in the buyer portal.' },
    saison: { title: 'From November 2026 to the October 2027 fair, in weeks', unit: 'weeks', items: [
      { label: 'Scoping, contacts, follow-up', note: 'importing contacts from the last fair', from: 0, to: 4 },
      { label: 'Buyer portal', note: 'progress, documents, schedule', from: 3, to: 10 },
      { label: 'Site app', note: 'photo points, per block', from: 6, to: 12 },
      { label: 'Trial: one live project', note: 'its real buyers, their questions', from: 12, to: 18 },
      { label: 'Remote viewing, finishes', note: 'live video, options, written prices', from: 18, to: 28 },
      { label: 'Summer, then October fair', note: 'holiday visits, new contacts', from: 34, to: 52, accent: true },
    ], caption: 'Figure 5 · Week 0 = early November 2026. Summer, when the diaspora comes on holiday, is the time for site visits and signatures; the Paris fair in October is the time for new contacts. The tool has to be run in before summer, on a project whose buyers are already asking questions.', alt: 'Calendar in weeks: scoping, contacts and follow-up from 0 to 4; buyer portal from 3 to 10; site app from 6 to 12; trial on a live project from 12 to 18; remote viewing and finishes from 18 to 28; summer then the October fair from 34 to 52.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'One developer, its buyer portal', cells: ['Remote sales, recommendations', 'A site that does not take photos'] },
      { label: 'Shared portal for developers', cells: ['Subscription or fee per contact', 'Uneven projects under one brand'] },
      { label: 'New-build listings for diaspora', cells: ['Paid promotion per project', 'You need projects before the public'] },
      { label: 'Self-build house follow-up', cells: ['Fixed fee per site, paid in euros', 'Contractors to recruit and train'] },
      { label: 'Architect or engineering firm', cells: ['Follow-up sold with the assignment', 'Site visits to keep up'] },
      { label: 'Rental management after handover', cells: ['Commission on rents', 'Tenants, upkeep, collection'] },
    ], caption: 'Figure 6 · All six models rest on the same piece: a site that produces dated proof every month, and a buyer who sees it from France. We advise starting with one developer and one live project, then opening the tool to the other projects.', alt: 'Matrix of six models: one developer with its buyer portal, a shared portal for developers, new-build listings for the diaspora, self-build house follow-up, architect or engineering firm, rental management after handover; for each, what pays and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'المرقّون · الجالية · 2027', title: ['البيع على التصاميم', 'للجالية', 'سنة 2027.'], subtitle: 'اتصال مؤهَّل، زيارة عن بُعد، ورشة بصور مؤرَّخة، دفعات متابَعة: فضاء المشتري.', left: { label: 'المشتري', sub: 'في باريس أو ليون أو مرسيليا' }, right: { label: 'الورشة', sub: 'الجزائر، وهران، بجاية، تلمسان' }, note: 'فرنسا · الجزائر · 2027' },
    journey: { title: 'بيع على التصاميم عن بُعد، في ست لحظات', items: [
      { n: '01', label: 'الاتصال', sub: 'صالون، موقع، مكالمة: الميزانية والولاية والنوع مدوَّنة.' },
      { n: '02', label: 'الزيارة عن بُعد', sub: 'فيديو مباشر، مخططات الشقة، الإطلالة، التشطيبات.' },
      { n: '03', label: 'الحجز', sub: 'الشقة محجوزة، الملف جاهز، موعد في الزيارة القادمة.' },
      { n: '04', label: 'تقدّم الأشغال', sub: 'صور مؤرَّخة في كل مرحلة، بالزوايا نفسها كل شهر.' },
      { n: '05', label: 'الدفعات', sub: 'جدول الدفع، الوصولات، الدفعة القادمة معلنة.' },
      { n: '06', label: 'التسليم', sub: 'التحفظات بالصور، متابعة رفعها، المفاتيح لقريب.', accent: true },
    ], caption: 'الشكل 1 · بين اللحظة 03 واللحظة 06 تمر غالباً سنتان أو ثلاث. وهناك ينقطع مشتري الجالية: لا يرى شيئاً، يتصل، لا يجيب أحد، فيركب الطائرة ليتحقق. اللحظتان 04 و05 هما ما يجب جعله مرئياً من باريس.', alt: 'ست لحظات: الاتصال المؤهَّل بالميزانية والولاية والنوع؛ الزيارة عن بُعد بالفيديو مع المخططات والتشطيبات؛ حجز الشقة؛ تقدّم الأشغال بصور مؤرَّخة في كل مرحلة؛ الدفعات بجدول ووصولات؛ التسليم مع التحفظات بالصور وتسليم المفاتيح لقريب.' },
    stack: { title: 'ما يجب بناؤه: سجل الورشة أولاً', layers: [
      { label: 'جهة المشتري', items: [
        { name: 'فضاء المشتري', sub: 'تقدّم الأشغال، الوثائق، جدول الدفع، الرسائل' },
        { name: 'الزيارة عن بُعد', sub: 'فيديو مباشر، المخططات، اختيار التشطيبات' },
      ] },
      { label: 'المرقّي', items: [
        { name: 'الاتصالات والمتابعة', sub: 'صالون، موقع، مكالمات؛ من يعاود الاتصال ومتى' },
        { name: 'سجل الورشة', sub: 'صور مؤرَّخة لكل مرحلة، مصادق عليها، تُنشر كل شهر', accent: true },
        { name: 'جدول الدفع والوصولات', sub: 'طلبات الدفع، المدفوعات، التأخيرات' },
      ] },
      { label: 'الورشة', items: [
        { name: 'تطبيق مسؤول الأشغال', sub: 'نقاط التصوير، التقدّم حسب العمارة' },
        { name: 'التحفظات والتسليم', sub: 'العيوب بالصور، رفعها، تسليم المفاتيح' },
      ] },
      { label: 'القاعدة', items: [{ name: 'خادم وبيانات باسمك', sub: 'العقود، المخططات، الصور، المراسلات؛ عربية وفرنسية؛ القانون 18-07 للمعطيات الشخصية' }] },
    ], caption: 'الشكل 2 · فضاء المشتري لا يعرض إلا ما تنتجه الورشة. دون تطبيق بسيط لمسؤول الأشغال يصوّر النقاط نفسها في كل مرحلة، يفرغ الفضاء بعد ثلاثة أشهر ويعود المشتري إلى الاتصال.', alt: 'أربع طبقات: جهة المشتري بفضاء المشتري والزيارة عن بُعد؛ المرقّي بالاتصالات والمتابعة وسجل الورشة وجدول الدفع؛ الورشة بتطبيق مسؤول الأشغال والتحفظات؛ القاعدة، خادم وبيانات باسم المرقّي.' },
    salon: { title: 'صالون في باريس: كم تساوي متابعة مضبوطة', items: [
      { value: '400', label: 'اتصال يُجمع في ثلاثة أيام من الصالون (فرضية)' },
      { value: '12', label: 'حجزاً إذا تحوّل 3 % دون متابعة (فرضية)' },
      { value: '24', label: 'حجزاً بنسبة 6 %: مؤهَّلون، زيارة عن بُعد، متابعة' },
      { value: '240', label: 'مليون دج مبيعات إضافية: 12 مسكناً بـ20 مليون دج', accent: true },
    ], caption: 'الشكل 3 · حساب مبني على فرضيات لا على قياس: 400 اتصال، و3 % ثم 6 % حجوزات، و20 مليون دينار للمسكن. أعده بأرقام صالونك الأخير: كم اتصالاً، وكم منها عوود الاتصال به خلال 48 ساعة، وكم حجزاً بعد ستة أشهر.', alt: 'مثال حساب لصالون: 400 اتصال في ثلاثة أيام؛ 12 حجزاً إذا تحوّل 3 % دون متابعة؛ 24 بنسبة 6 % مع التأهيل والزيارة عن بُعد والمتابعة؛ 12 مسكناً إضافياً بـ20 مليون دينار تساوي 240 مليون دينار مبيعات. النسب فرضيات.' },
    questions: { title: 'ستة أسئلة لمشترٍ عن بُعد، وستة أجوبة في الأداة', columns: ['ما يفعله دون جواب', 'الجواب في فضاء المشتري'], rows: [
      { label: 'هل تتقدّم الأشغال فعلاً؟', cells: ['يطلب من قريب أن يذهب ليرى', 'صور مؤرَّخة، بالزوايا نفسها كل شهر'] },
      { label: 'أين وصلت دفعاتي؟', cells: ['يبحث عن الوصولات في بريده', 'جدول الدفع، الوصولات، الدفعة القادمة'] },
      { label: 'هل مسكني هو الذي في المخطط؟', cells: ['يشكّ في المساحة والإطلالة', 'مخطط الشقة، المساحات، الطابق، الاتجاه'] },
      { label: 'هل أختار تشطيباتي؟', cells: ['يكتشف البلاط يوم التسليم', 'خيارات، آخر أجل، سعر مكتوب'] },
      { label: 'من يجيبني، ومتى؟', cells: ['يتصل بثلاثة أرقام مختلفة', 'محاور واحد بالاسم، جواب خلال 48 ساعة'] },
      { label: 'وماذا عن يوم التسليم؟', cells: ['يأخذ عطلة دون أن يعرف التاريخ', 'تاريخ مؤكَّد، التحفظات بالصور، المفاتيح'] },
    ], caption: 'الشكل 4 · كل سؤال بلا جواب يتحوّل إلى مكالمة أو سفر أو شك. والمشتري الذي يشكّ لا يوصي عائلته بالمرقّي، وفي الجالية التوصية هي ما يملأ المشروع التالي.', alt: 'مصفوفة ستة أسئلة لمشترٍ عن بُعد: هل تتقدّم الأشغال، أين وصلت دفعاتي، هل مسكني هو الذي في المخطط، هل أختار تشطيباتي، من يجيبني ومتى، ويوم التسليم؛ ولكل منها ما يفعله دون جواب والجواب في فضاء المشتري.' },
    saison: { title: 'من نوفمبر 2026 إلى صالون أكتوبر 2027، بالأسابيع', unit: 'أسابيع', items: [
      { label: 'التأطير، الاتصالات، المتابعة', note: 'نقل اتصالات الصالون الأخير', from: 0, to: 4 },
      { label: 'فضاء المشتري', note: 'تقدّم الأشغال، الوثائق، جدول الدفع', from: 3, to: 10 },
      { label: 'تطبيق الورشة', note: 'نقاط التصوير، حسب العمارة', from: 6, to: 12 },
      { label: 'تجربة: مشروع جارٍ', note: 'مشتروه الحقيقيون وأسئلتهم', from: 12, to: 18 },
      { label: 'الزيارة عن بُعد، التشطيبات', note: 'فيديو مباشر، خيارات، أسعار مكتوبة', from: 18, to: 28 },
      { label: 'الصيف، ثم صالون أكتوبر', note: 'زيارات العطلة، اتصالات جديدة', from: 34, to: 52, accent: true },
    ], caption: 'الشكل 5 · الأسبوع 0 = بداية نوفمبر 2026. الصيف، حين تأتي الجالية في العطلة، هو وقت الزيارات في الموقع والتوقيعات؛ وصالون باريس في أكتوبر هو وقت الاتصالات الجديدة. يجب أن تكون الأداة مجرَّبة قبل الصيف، على مشروع يطرح مشتروه الأسئلة أصلاً.', alt: 'جدول بالأسابيع: التأطير والاتصالات والمتابعة من 0 إلى 4؛ فضاء المشتري من 3 إلى 10؛ تطبيق الورشة من 6 إلى 12؛ تجربة على مشروع جارٍ من 12 إلى 18؛ الزيارة عن بُعد والتشطيبات من 18 إلى 28؛ الصيف ثم صالون أكتوبر من 34 إلى 52.' },
    models: { title: 'أي نموذج تبني: ما يُدرّ، وما ينكسر', columns: ['ما يُدرّ', 'ما ينكسر'], rows: [
      { label: 'مرقٍّ واحد وفضاء مشتريه', cells: ['مبيعات عن بُعد، توصيات', 'ورشة لا تصوّر'] },
      { label: 'بوابة مشتركة للمرقّين', cells: ['اشتراك أو رسوم لكل اتصال', 'مشاريع متفاوتة تحت علامة واحدة'] },
      { label: 'إعلانات الجديد للجالية', cells: ['إبراز مدفوع لكل مشروع', 'تلزم المشاريع قبل الجمهور'] },
      { label: 'متابعة بناء منزل فردي', cells: ['مبلغ جزافي لكل ورشة، باليورو', 'مقاولون يجب توظيفهم وتكوينهم'] },
      { label: 'مهندس معماري أو مكتب دراسات', cells: ['متابعة تُباع مع المهمة', 'زيارات ميدانية يجب الالتزام بها'] },
      { label: 'تسيير الإيجار بعد التسليم', cells: ['عمولة على الإيجارات', 'المستأجرون، الصيانة، التحصيل'] },
    ], caption: 'الشكل 6 · النماذج الستة تقوم على القطعة نفسها: ورشة تنتج كل شهر إثباتات مؤرَّخة، ومشترٍ يراها من فرنسا. ننصح بالبدء بمرقٍّ واحد ومشروع جارٍ، ثم فتح الأداة لبقية المشاريع.', alt: 'مصفوفة ستة نماذج: مرقٍّ بفضاء مشتريه، بوابة مشتركة للمرقّين، إعلانات الجديد للجالية، متابعة بناء منزل فردي، مهندس معماري أو مكتب دراسات، تسيير الإيجار بعد التسليم؛ ولكل منها ما يُدرّ وما ينكسر.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      journey: { svg: steps({ title: t.journey.title, steps: t.journey.items, arrows: true, rtl }), caption: t.journey.caption, alt: t.journey.alt },
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      salon: { svg: stats({ title: t.salon.title, items: t.salon.items, rtl }), caption: t.salon.caption, alt: t.salon.alt },
      questions: { svg: matrix({ title: t.questions.title, columns: t.questions.columns, rows: t.questions.rows, rtl }), caption: t.questions.caption, alt: t.questions.alt },
      saison: { svg: timeline({ title: t.saison.title, items: t.saison.items, total: 52, tick: 4, unit: t.saison.unit, rtl }), caption: t.saison.caption, alt: t.saison.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
    },
  };
}
