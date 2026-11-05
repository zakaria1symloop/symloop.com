import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'cabinet-dentaire-algerie-2027-patients-diaspora-ete-plan-de-traitement-a-distance-devis-radios-suivi';
const T = {
  fr: {
    cover: { eyebrow: 'Cabinet dentaire · Patients de la diaspora · Été · 2027', title: ['Trois semaines en août', 'pour un plan', 'qui en demande six.'], subtitle: 'Le premier message depuis Lyon en mars, le plan de traitement à distance, le devis en deux monnaies, les séances groupées avec le laboratoire réservé, le compte rendu et le suivi après le retour : la plateforme d’un cabinet dentaire qui reçoit la diaspora, et le calendrier 2027', left: { label: 'Aujourd’hui', sub: 'découvert au fauteuil, fini à moitié' }, right: { label: 'Avec la plateforme', sub: 'plan en mars, séances en août, suivi' } },
    parcours: { title: 'Un patient de la diaspora, du premier message au retour, en six moments', items: [
      { n: '01', label: 'Le premier message', sub: 'En mars, depuis Lyon : photos, radio panoramique existante, dates de séjour ; triés par l’agent IA, lus par le praticien.' },
      { n: '02', label: 'Le plan à distance', sub: 'Téléconsultation de quinze minutes, plan par étapes, nombre de séances, ce qui tient en trois semaines et ce qui n’y tient pas.', accent: true },
      { n: '03', label: 'Le devis en deux monnaies', sub: 'En dinars avec la contre-valeur, acompte pour bloquer les créneaux d’août, conditions écrites.' },
      { n: '04', label: 'Le calendrier des séances', sub: 'Créneaux groupés sur trois semaines, laboratoire de prothèse réservé, rappels avant chaque séance.' },
      { n: '05', label: 'Les séances', sub: 'Dossier, imagerie, consentement signé, paiement par séance avec reçu numéroté.' },
      { n: '06', label: 'Le retour en France', sub: 'Compte rendu remis, radios en ligne, suivi à distance à quinze et quatre-vingt-dix jours, prochain séjour planifié.' },
    ], caption: 'Figure 1 · Le moment 02 est celui qui change l’été : un plan écrit en mars dit ce qui tiendra en trois semaines d’août, et ce qui attendra décembre. Sans lui, le plan se découvre au fauteuil le 2 août et se termine à moitié le 20. Le moment 06 est celui que presque personne ne fait et qui fait revenir le patient.', alt: 'Six étapes : premier message, plan à distance, devis en deux monnaies, calendrier des séances, séances, retour en France.' },
    plateforme: { title: 'La plateforme du cabinet, en cinq couches', layers: [
      { label: 'Dossier', items: [{ name: 'Dossier patient et imagerie', sub: 'radios, photos, plan de traitement par dent, consentements ; hébergé en Algérie, accès tracés' }] },
      { label: 'Agenda', items: [{ name: 'Agenda à séances groupées et laboratoire', sub: 'un plan = une série de créneaux sur trois semaines, avec le délai du prothésiste réservé en même temps', accent: true }] },
      { label: 'Devis', items: [{ name: 'Devis, acompte, paiements par séance', sub: 'dinars et contre-valeur, acompte qui bloque les créneaux, reçu numéroté à chaque séance' }] },
      { label: 'Patient', items: [{ name: 'L’espace patient à distance', sub: 'messages, documents, téléconsultation, rappels ; en français et en arabe, depuis la France' }] },
      { label: 'Pilotage', items: [{ name: 'Tableau de bord et agent IA', sub: 'triage des premiers messages, séances non honorées, remplissage de l’été, suivis en attente' }] },
    ], caption: 'Figure 2 · L’agenda à séances groupées est la couche qui fait la différence pour un patient de passage : un rendez-vous isolé ne sert à rien à quelqu’un qui repart dans trois semaines. Le dossier et l’imagerie viennent en premier parce que le plan à distance ne se fait pas sans eux.', alt: 'Cinq couches : dossier et imagerie, agenda à séances groupées, devis et paiements, espace patient, pilotage.' },
    exemple: { title: 'Un cabinet, deux fauteuils, un été : l’exemple', items: [
      { value: '120 patients', label: 'de la diaspora entre juin et septembre, soit environ un tiers des patients de la saison ; hypothèse à remplacer par la vôtre' },
      { value: '30 % → 8 %', label: 'de séances non honorées ou annulées la veille, avec l’acompte qui bloque les créneaux et le rappel avant chaque séance' },
      { value: '4 → 2 semaines', label: 'pour un plan à prothèse, quand le plan est écrit en mars et le laboratoire réservé avant l’arrivée' },
      { value: '+40 patients', label: 'reçus sur la saison grâce aux séances groupées et aux créneaux libérés ; à devis moyen égal, un tiers de chiffre d’été en plus', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : le nombre de patients, le taux de séances non honorées et la durée des plans sont à remplacer par les vôtres. Ce qui se vérifie partout : un plan écrit avant l’arrivée raccourcit le séjour, et un acompte fait venir à l’heure.', alt: 'Quatre chiffres : 120 patients de la diaspora, séances non honorées de 30 à 8 %, plan de 4 à 2 semaines, 40 patients de plus sur la saison.' },
    pieges: { title: 'Six pièges de l’été dentaire, et ce que la plateforme change', columns: ['Ce qui se passe aujourd’hui', 'Ce que la plateforme change'], rows: [
      { label: 'Le patient arrive sans dossier', cells: ['Radio chez un confrère en France, photos sur un téléphone, antécédents de mémoire', 'Documents envoyés en mars dans l’espace patient, dossier ouvert avant l’arrivée'] },
      { label: 'Le plan découvert au fauteuil', cells: ['Six séances nécessaires, trois semaines de séjour : le plan finit à moitié', 'Plan à distance par étapes : ce qui se fait cet été, ce qui attend décembre, écrit avant le vol'] },
      { label: 'Le devis qui change', cells: ['Annoncé à l’oral en dinars, converti de tête, contesté à la dernière séance', 'Devis écrit par dent et par étape, en dinars avec contre-valeur, figé à l’acompte'] },
      { label: 'Les séances dispersées', cells: ['Le prothésiste n’a pas été prévenu ; la couronne arrive après le départ', 'Laboratoire réservé avec les créneaux ; la série de séances tient dans le séjour'] },
      { label: 'Le paiement en espèces sans reçu', cells: ['La famille règle pour le patient ; personne ne sait ce qui reste dû', 'Paiement par séance, reçu numéroté, solde visible par le patient et par le cabinet'] },
      { label: 'Le suivi perdu après le retour', cells: ['Une douleur à J+10 à Lyon, un confrère sans aucune information', 'Compte rendu et radios dans l’espace patient, suivi à distance à quinze et quatre-vingt-dix jours'] },
    ], caption: 'Figure 4 · Les trois premiers pièges se règlent avant l’arrivée, en mars ; les trois derniers pendant et après le séjour. Tous les six viennent de la même absence : rien n’est écrit avant que le patient ne soit dans le fauteuil.', alt: 'Matrice de six pièges avec ce qui se passe aujourd’hui et ce que la plateforme change.' },
    modeles: { title: 'Six situations, ce qu’on construit d’abord', columns: ['Ce qu’on construit d’abord', 'Ce qui vient ensuite'], rows: [
      { label: 'Cabinet d’un praticien', cells: ['Dossier avec imagerie, agenda à séances groupées, devis en deux monnaies avec acompte', 'Espace patient, suivi après le retour, agent IA de triage des messages'] },
      { label: 'Cabinet de groupe ou clinique dentaire', cells: ['Agenda multi-fauteuils et multi-praticiens, dossier partagé, laboratoire intégré', 'Tableau de bord par praticien, remplissage de l’été, tarifs par acte'] },
      { label: 'Laboratoire de prothèse', cells: ['Commandes des cabinets avec dates de séance, suivi de fabrication, livraison', 'Portail cabinet, empreintes numériques, relances'] },
      { label: 'Centre d’imagerie dentaire', cells: ['Rendez-vous, remise des radios en ligne au patient et au cabinet, facturation', 'Envoi direct dans le dossier du cabinet, archivage'] },
      { label: 'Fondateur en France : plateforme de séjours dentaires', cells: ['Vingt cabinets vérifiés dans trois villes, plan à distance et devis via la plateforme, acompte', 'Coordination du séjour, avis après suivi, abonnement des cabinets'] },
      { label: 'Clinique multi-spécialités', cells: ['Le même parcours pour l’ophtalmologie, la dermatologie esthétique, l’orthopédie', 'Dossier unique, parcours par spécialité, suivi à distance'] },
    ], caption: 'Figure 5 · Dans les six cas, la première colonne tient en dix à quatorze semaines. Le cabinet d’un praticien n’a pas besoin d’une plateforme de séjours pour recevoir la diaspora ; il a besoin d’un plan écrit avant l’arrivée et d’un agenda qui groupe. La plateforme vient après, avec des cabinets qui savent déjà faire.', alt: 'Matrice de six situations avec ce qu’on construit d’abord et ce qui vient ensuite.' },
    calendrier: { title: 'Préparer l’été 2027, en semaines', unit: 'sem.', items: [
      { label: 'Dossier et agenda', note: 'dossiers repris, imagerie branchée, agenda à séances groupées ; janvier', from: 0, to: 4 },
      { label: 'Devis, espace patient, téléconsultation', note: 'construits pendant le ramadan (≈ 8 février – 9 mars), saison calme du cabinet', from: 4, to: 10, accent: true },
      { label: 'Pilote : vingt patients de printemps', note: 'séjours des vacances d’avril ; plans à distance, acomptes, premiers suivis', from: 10, to: 14 },
      { label: 'Préparation de l’été', note: 'messages de mars à juin triés, plans écrits, laboratoire réservé, créneaux groupés', from: 14, to: 24 },
      { label: 'Saison d’été : séances groupées', note: 'juillet et août ; rappels, paiements par séance, comptes rendus', from: 24, to: 34 },
      { label: 'Suivis et bilan', note: 'suivis à quinze et quatre-vingt-dix jours, séances non honorées mesurées, séjours de décembre', from: 34, to: 40 },
    ], caption: 'Figure 6 · Semaine 0 = mi-janvier 2027. Les patients de l’été écrivent au printemps : la plateforme doit recevoir les plans dès mars, et c’est pourquoi elle se construit pendant le ramadan. Le pilote d’avril teste tout le parcours sur vingt patients avant les cent vingt de l’été. Dates du ramadan prévisionnelles.', alt: 'Frise de 40 semaines : dossier et agenda, devis et espace patient, pilote de printemps, préparation de l’été, saison d’été, suivis et bilan.' },
  },
  en: {
    cover: { eyebrow: 'Dental practice · Diaspora patients · Summer · 2027', title: ['Three weeks in August', 'for a plan', 'that needs six.'], subtitle: 'The first message from Lyon in March, the remote treatment plan, the two-currency quote, grouped sessions with the lab booked, the report and the follow-up after the return: the platform of a dental practice that receives the diaspora, and the 2027 calendar', left: { label: 'Today', sub: 'discovered in the chair, half finished' }, right: { label: 'With the platform', sub: 'plan in March, sessions in August' } },
    parcours: { title: 'A diaspora patient, from first message to return, in six moments', items: [
      { n: '01', label: 'The first message', sub: 'In March, from Lyon: photos, existing panoramic X-ray, travel dates; triaged by the AI agent, read by the practitioner.' },
      { n: '02', label: 'The remote plan', sub: 'Fifteen-minute teleconsultation, plan by stages, number of sessions, what fits in three weeks and what does not.', accent: true },
      { n: '03', label: 'The two-currency quote', sub: 'In dinars with the counter-value, deposit to hold the August slots, written conditions.' },
      { n: '04', label: 'The session calendar', sub: 'Slots grouped over three weeks, prosthetics lab booked, reminders before each session.' },
      { n: '05', label: 'The sessions', sub: 'File, imaging, signed consent, payment per session with a numbered receipt.' },
      { n: '06', label: 'The return to France', sub: 'Report handed over, X-rays online, remote follow-up at fifteen and ninety days, next stay planned.' },
    ], caption: 'Figure 1 · Moment 02 is what changes the summer: a plan written in March says what will fit into three weeks of August, and what will wait for December. Without it, the plan is discovered in the chair on 2 August and half finished on the 20th. Moment 06 is the one almost nobody does and the one that brings the patient back.', alt: 'Six steps: first message, remote plan, two-currency quote, session calendar, sessions, return to France.' },
    plateforme: { title: 'The practice’s platform, in five layers', layers: [
      { label: 'File', items: [{ name: 'Patient file and imaging', sub: 'X-rays, photos, treatment plan per tooth, consents; hosted in Algeria, access logged' }] },
      { label: 'Calendar', items: [{ name: 'Calendar with grouped sessions and lab', sub: 'one plan = a series of slots over three weeks, with the prosthetist’s lead time booked at the same time', accent: true }] },
      { label: 'Quote', items: [{ name: 'Quote, deposit, payments per session', sub: 'dinars and counter-value, deposit that holds the slots, numbered receipt at each session' }] },
      { label: 'Patient', items: [{ name: 'The remote patient space', sub: 'messages, documents, teleconsultation, reminders; in French and Arabic, from France' }] },
      { label: 'Management', items: [{ name: 'Dashboard and AI agent', sub: 'triage of first messages, missed sessions, summer occupancy, pending follow-ups' }] },
    ], caption: 'Figure 2 · The calendar with grouped sessions is the layer that makes the difference for a visiting patient: an isolated appointment is useless to someone leaving in three weeks. The file and imaging come first because the remote plan cannot be made without them.', alt: 'Five layers: file and imaging, calendar with grouped sessions, quote and payments, patient space, management.' },
    exemple: { title: 'One practice, two chairs, one summer: the example', items: [
      { value: '120 patients', label: 'from the diaspora between June and September, about a third of the season’s patients; an assumption to replace with yours' },
      { value: '30 % → 8 %', label: 'of sessions missed or cancelled the day before, with the deposit that holds the slots and the reminder before each session' },
      { value: '4 → 2 weeks', label: 'for a plan with prosthetics, when the plan is written in March and the lab booked before arrival' },
      { value: '+40 patients', label: 'received over the season thanks to grouped sessions and freed slots; at equal average quote, a third more summer revenue', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: the number of patients, the missed-session rate and the plan duration are to be replaced by yours. What holds everywhere: a plan written before arrival shortens the stay, and a deposit makes people come on time.', alt: 'Four figures: 120 diaspora patients, missed sessions from 30 to 8 %, plan from 4 to 2 weeks, 40 more patients over the season.' },
    pieges: { title: 'Six traps of the dental summer, and what the platform changes', columns: ['What happens today', 'What the platform changes'], rows: [
      { label: 'The patient arrives without a file', cells: ['X-ray at a colleague’s in France, photos on a phone, history from memory', 'Documents sent in March to the patient space, file opened before arrival'] },
      { label: 'The plan discovered in the chair', cells: ['Six sessions needed, three weeks of stay: the plan ends half done', 'Remote plan by stages: what is done this summer, what waits for December, written before the flight'] },
      { label: 'The quote that changes', cells: ['Announced verbally in dinars, converted in the head, disputed at the last session', 'Written quote per tooth and per stage, in dinars with counter-value, frozen at the deposit'] },
      { label: 'Scattered sessions', cells: ['The prosthetist was not warned; the crown arrives after departure', 'Lab booked with the slots; the series of sessions fits within the stay'] },
      { label: 'Cash payment without a receipt', cells: ['The family pays for the patient; nobody knows what is still owed', 'Payment per session, numbered receipt, balance visible to patient and practice'] },
      { label: 'Follow-up lost after the return', cells: ['Pain at D+10 in Lyon, a colleague with no information at all', 'Report and X-rays in the patient space, remote follow-up at fifteen and ninety days'] },
    ], caption: 'Figure 4 · The first three traps are settled before arrival, in March; the last three during and after the stay. All six come from the same absence: nothing is written before the patient is in the chair.', alt: 'Matrix of six traps with what happens today and what the platform changes.' },
    modeles: { title: 'Six situations, what gets built first', columns: ['What gets built first', 'What comes next'], rows: [
      { label: 'Single-practitioner practice', cells: ['File with imaging, calendar with grouped sessions, two-currency quote with deposit', 'Patient space, follow-up after return, AI message-triage agent'] },
      { label: 'Group practice or dental clinic', cells: ['Multi-chair, multi-practitioner calendar, shared file, integrated lab', 'Dashboard per practitioner, summer occupancy, prices per procedure'] },
      { label: 'Prosthetics lab', cells: ['Orders from practices with session dates, production tracking, delivery', 'Practice portal, digital impressions, follow-ups'] },
      { label: 'Dental imaging centre', cells: ['Appointments, X-rays delivered online to patient and practice, invoicing', 'Direct push into the practice file, archiving'] },
      { label: 'Founder in France: dental-stay platform', cells: ['Twenty verified practices in three cities, remote plan and quote through the platform, deposit', 'Stay coordination, reviews after follow-up, practice subscription'] },
      { label: 'Multi-specialty clinic', cells: ['The same journey for ophthalmology, aesthetic dermatology, orthopaedics', 'Single file, journey per specialty, remote follow-up'] },
    ], caption: 'Figure 5 · In all six cases the first column fits in ten to fourteen weeks. A single practitioner does not need a stay platform to receive the diaspora; they need a plan written before arrival and a calendar that groups. The platform comes after, with practices that already know how.', alt: 'Matrix of six situations with what gets built first and what comes next.' },
    calendrier: { title: 'Preparing summer 2027, in weeks', unit: 'wks', items: [
      { label: 'File and calendar', note: 'files taken over, imaging connected, calendar with grouped sessions; January', from: 0, to: 4 },
      { label: 'Quote, patient space, teleconsultation', note: 'built during Ramadan (≈ 8 February – 9 March), the practice’s quiet season', from: 4, to: 10, accent: true },
      { label: 'Pilot: twenty spring patients', note: 'April holiday stays; remote plans, deposits, first follow-ups', from: 10, to: 14 },
      { label: 'Summer preparation', note: 'March-to-June messages triaged, plans written, lab booked, slots grouped', from: 14, to: 24 },
      { label: 'Summer season: grouped sessions', note: 'July and August; reminders, payments per session, reports', from: 24, to: 34 },
      { label: 'Follow-ups and review', note: 'follow-ups at fifteen and ninety days, missed sessions measured, December stays', from: 34, to: 40 },
    ], caption: 'Figure 6 · Week 0 = mid-January 2027. Summer patients write in spring: the platform must receive plans from March, which is why it is built during Ramadan. The April pilot tests the whole journey on twenty patients before the hundred and twenty of summer. Ramadan dates are forecasts.', alt: 'Timeline of 40 weeks: file and calendar, quote and patient space, spring pilot, summer preparation, summer season, follow-ups and review.' },
  },
  ar: {
    cover: { eyebrow: 'عيادة أسنان · مرضى الجالية · الصيف · 2027', title: ['ثلاثة أسابيع في أوت', 'لخطة علاج', 'تحتاج ستة.'], subtitle: 'أول رسالة من ليون في مارس، خطة العلاج عن بُعد، عرض السعر بعملتين، الجلسات المجمَّعة مع المخبر المحجوز، التقرير والمتابعة بعد العودة: منصة عيادة أسنان تستقبل الجالية، وتقويم 2027', left: { label: 'اليوم', sub: 'يُكتشف على الكرسي، يُنجز نصفه' }, right: { label: 'مع المنصة', sub: 'خطة في مارس، جلسات في أوت، متابعة' } },
    parcours: { title: 'مريض من الجالية، من أول رسالة إلى العودة، في ست لحظات', items: [
      { n: '01', label: 'الرسالة الأولى', sub: 'في مارس، من ليون: صور، أشعة بانورامية موجودة، تواريخ الإقامة؛ يفرزها وكيل الذكاء الاصطناعي ويقرؤها الطبيب.' },
      { n: '02', label: 'الخطة عن بُعد', sub: 'استشارة عن بُعد لخمس عشرة دقيقة، خطة بمراحل، عدد الجلسات، ما يسع ثلاثة أسابيع وما لا يسعها.', accent: true },
      { n: '03', label: 'عرض السعر بعملتين', sub: 'بالدينار مع المقابل، عربون لحجز مواعيد أوت، شروط مكتوبة.' },
      { n: '04', label: 'تقويم الجلسات', sub: 'مواعيد مجمَّعة على ثلاثة أسابيع، مخبر التعويضات محجوز، تذكيرات قبل كل جلسة.' },
      { n: '05', label: 'الجلسات', sub: 'الملف، التصوير، موافقة موقَّعة، دفع لكل جلسة بوصل مرقّم.' },
      { n: '06', label: 'العودة إلى فرنسا', sub: 'تقرير مسلَّم، أشعة على الإنترنت، متابعة عن بُعد بعد خمسة عشر وتسعين يوماً، الإقامة التالية مخطَّطة.' },
    ], caption: 'الشكل 1 · اللحظة 02 هي ما يغيّر الصيف: خطة مكتوبة في مارس تقول ما سيسع ثلاثة أسابيع من أوت وما سينتظر ديسمبر. بدونها تُكتشف الخطة على الكرسي يوم 2 أوت وتنتهي نصفها يوم 20. اللحظة 06 هي التي لا يكاد أحد يفعلها وهي التي تُعيد المريض.', alt: 'ست خطوات: الرسالة الأولى، الخطة عن بعد، عرض السعر بعملتين، تقويم الجلسات، الجلسات، العودة إلى فرنسا.' },
    plateforme: { title: 'منصة العيادة، في خمس طبقات', layers: [
      { label: 'الملف', items: [{ name: 'ملف المريض والتصوير', sub: 'أشعة، صور، خطة علاج لكل سن، موافقات؛ مستضاف في الجزائر، الدخول مسجَّل' }] },
      { label: 'المواعيد', items: [{ name: 'مواعيد بجلسات مجمَّعة ومخبر', sub: 'خطة واحدة = سلسلة مواعيد على ثلاثة أسابيع، مع حجز مهلة صانع التعويضات في الوقت نفسه', accent: true }] },
      { label: 'العرض', items: [{ name: 'عرض السعر، العربون، الدفع لكل جلسة', sub: 'دينار ومقابله، عربون يحجز المواعيد، وصل مرقّم في كل جلسة' }] },
      { label: 'المريض', items: [{ name: 'فضاء المريض عن بُعد', sub: 'رسائل، وثائق، استشارة عن بُعد، تذكيرات؛ بالفرنسية والعربية، من فرنسا' }] },
      { label: 'القيادة', items: [{ name: 'لوحة قيادة ووكيل ذكاء اصطناعي', sub: 'فرز الرسائل الأولى، الجلسات الفائتة، امتلاء الصيف، المتابعات المعلَّقة' }] },
    ], caption: 'الشكل 2 · المواعيد بالجلسات المجمَّعة هي الطبقة التي تصنع الفرق لمريض عابر: موعد معزول لا يفيد من يغادر بعد ثلاثة أسابيع. الملف والتصوير يأتيان أولاً لأن الخطة عن بُعد لا تُوضع بدونهما.', alt: 'خمس طبقات: الملف والتصوير، المواعيد بجلسات مجمعة، العرض والدفع، فضاء المريض، القيادة.' },
    exemple: { title: 'عيادة واحدة، كرسيان، صيف واحد: المثال', items: [
      { value: '120 مريضاً', label: 'من الجالية بين جوان وسبتمبر، أي نحو ثلث مرضى الموسم؛ فرضية تُستبدل بفرضيتكم' },
      { value: '30 % ← 8 %', label: 'من الجلسات الفائتة أو الملغاة عشية الموعد، مع العربون الذي يحجز المواعيد والتذكير قبل كل جلسة' },
      { value: '4 ← 2 أسابيع', label: 'لخطة بتعويضات، حين تُكتب الخطة في مارس ويُحجز المخبر قبل الوصول' },
      { value: '+40 مريضاً', label: 'يُستقبلون في الموسم بفضل الجلسات المجمَّعة والمواعيد المحرَّرة؛ بمتوسط عرض متساوٍ، ثلث إيراد صيفي إضافي', accent: true },
    ], caption: 'الشكل 3 · حساب على فرضيات لا قياس: عدد المرضى ونسبة الجلسات الفائتة ومدة الخطط تُستبدل بأرقامكم. ما يثبت في كل مكان: خطة مكتوبة قبل الوصول تقصّر الإقامة، والعربون يجعل الناس يأتون في الوقت.', alt: 'أربعة أرقام: 120 مريضاً من الجالية، جلسات فائتة من 30 إلى 8 %، خطة من 4 إلى أسبوعين، 40 مريضاً إضافياً في الموسم.' },
    pieges: { title: 'ستة فخاخ لصيف الأسنان، وما تغيّره المنصة', columns: ['ما يحدث اليوم', 'ما تغيّره المنصة'], rows: [
      { label: 'المريض يصل بلا ملف', cells: ['أشعة عند زميل في فرنسا، صور على هاتف، سوابق من الذاكرة', 'وثائق تُرسل في مارس إلى فضاء المريض، الملف يُفتح قبل الوصول'] },
      { label: 'الخطة تُكتشف على الكرسي', cells: ['ست جلسات لازمة وثلاثة أسابيع إقامة: الخطة تنتهي نصفها', 'خطة عن بُعد بمراحل: ما يُنجز هذا الصيف وما ينتظر ديسمبر، مكتوبة قبل الرحلة'] },
      { label: 'عرض السعر المتغير', cells: ['يُعلَن شفهياً بالدينار، يُحوَّل ذهنياً، يُنازَع فيه في آخر جلسة', 'عرض مكتوب لكل سن ولكل مرحلة، بالدينار مع المقابل، مجمَّد عند العربون'] },
      { label: 'جلسات متفرقة', cells: ['صانع التعويضات لم يُنبَّه؛ التاج يصل بعد المغادرة', 'المخبر محجوز مع المواعيد؛ سلسلة الجلسات تسع الإقامة'] },
      { label: 'دفع نقدي بلا وصل', cells: ['العائلة تدفع عن المريض؛ لا أحد يعرف ما بقي مستحقاً', 'دفع لكل جلسة، وصل مرقّم، رصيد مرئي للمريض وللعيادة'] },
      { label: 'المتابعة الضائعة بعد العودة', cells: ['ألم بعد عشرة أيام في ليون، زميل بلا أي معلومة', 'التقرير والأشعة في فضاء المريض، متابعة عن بُعد بعد خمسة عشر وتسعين يوماً'] },
    ], caption: 'الشكل 4 · الفخاخ الثلاثة الأولى تُحل قبل الوصول، في مارس؛ والثلاثة الأخيرة أثناء الإقامة وبعدها. الستة كلها تأتي من الغياب نفسه: لا شيء يُكتب قبل أن يكون المريض على الكرسي.', alt: 'مصفوفة ستة فخاخ مع ما يحدث اليوم وما تغيّره المنصة.' },
    modeles: { title: 'ست حالات، ما يُبنى أولاً', columns: ['ما يُبنى أولاً', 'ما يأتي بعده'], rows: [
      { label: 'عيادة طبيب واحد', cells: ['ملف بالتصوير، مواعيد بجلسات مجمَّعة، عرض سعر بعملتين مع عربون', 'فضاء المريض، متابعة بعد العودة، وكيل ذكاء اصطناعي لفرز الرسائل'] },
      { label: 'عيادة جماعية أو مصحة أسنان', cells: ['مواعيد متعددة الكراسي والأطباء، ملف مشترك، مخبر مدمج', 'لوحة قيادة لكل طبيب، امتلاء الصيف، أسعار لكل عمل'] },
      { label: 'مخبر تعويضات', cells: ['طلبيات العيادات بتواريخ الجلسات، تتبع الصنع، التسليم', 'بوابة عيادات، طبعات رقمية، متابعات'] },
      { label: 'مركز تصوير أسنان', cells: ['مواعيد، تسليم الأشعة على الإنترنت للمريض والعيادة، فوترة', 'إرسال مباشر إلى ملف العيادة، أرشفة'] },
      { label: 'مؤسس في فرنسا: منصة إقامات علاج الأسنان', cells: ['عشرون عيادة موثَّقة في ثلاث مدن، خطة عن بُعد وعرض سعر عبر المنصة، عربون', 'تنسيق الإقامة، تقييمات بعد المتابعة، اشتراك العيادات'] },
      { label: 'مصحة متعددة التخصصات', cells: ['المسار نفسه لطب العيون والجلدية التجميلية والعظام', 'ملف واحد، مسار لكل تخصص، متابعة عن بُعد'] },
    ], caption: 'الشكل 5 · في الحالات الست، العمود الأول يُنجز في عشرة إلى أربعة عشر أسبوعاً. عيادة الطبيب الواحد لا تحتاج منصة إقامات لتستقبل الجالية؛ تحتاج خطة مكتوبة قبل الوصول ومواعيد تجمّع. المنصة تأتي بعد ذلك، مع عيادات تعرف أصلاً كيف تفعل.', alt: 'مصفوفة ست حالات مع ما يُبنى أولاً وما يأتي بعده.' },
    calendrier: { title: 'التحضير لصيف 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الملف والمواعيد', note: 'الملفات مستعادة، التصوير موصول، مواعيد بجلسات مجمَّعة؛ يناير', from: 0, to: 4 },
      { label: 'العرض، فضاء المريض، الاستشارة عن بُعد', note: 'تُبنى خلال رمضان (≈ 8 فبراير – 9 مارس)، الموسم الهادئ للعيادة', from: 4, to: 10, accent: true },
      { label: 'التجربة: عشرون مريضاً في الربيع', note: 'إقامات عطلة أبريل؛ خطط عن بُعد، عرابين، أولى المتابعات', from: 10, to: 14 },
      { label: 'التحضير للصيف', note: 'رسائل مارس إلى جوان مفروزة، خطط مكتوبة، مخبر محجوز، مواعيد مجمَّعة', from: 14, to: 24 },
      { label: 'موسم الصيف: جلسات مجمَّعة', note: 'جويلية وأوت؛ تذكيرات، دفع لكل جلسة، تقارير', from: 24, to: 34 },
      { label: 'المتابعات والحصيلة', note: 'متابعات بعد خمسة عشر وتسعين يوماً، الجلسات الفائتة مقاسة، إقامات ديسمبر', from: 34, to: 40 },
    ], caption: 'الشكل 6 · الأسبوع 0 = منتصف يناير 2027. مرضى الصيف يكتبون في الربيع: على المنصة أن تستقبل الخطط من مارس، ولهذا تُبنى خلال رمضان. تجربة أبريل تختبر المسار كله على عشرين مريضاً قبل مئة وعشرين في الصيف. تواريخ رمضان تقديرية.', alt: 'خط زمني من 40 أسبوعاً: الملف والمواعيد، العرض وفضاء المريض، تجربة الربيع، التحضير للصيف، موسم الصيف، المتابعات والحصيلة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      parcours: { svg: steps({ title: t.parcours.title, steps: t.parcours.items, arrows: true, rtl }), caption: t.parcours.caption, alt: t.parcours.alt },
      plateforme: { svg: layers({ title: t.plateforme.title, layers: t.plateforme.layers, rtl }), caption: t.plateforme.caption, alt: t.plateforme.alt },
      exemple: { svg: stats({ title: t.exemple.title, items: t.exemple.items, rtl }), caption: t.exemple.caption, alt: t.exemple.alt },
      pieges: { svg: matrix({ title: t.pieges.title, columns: t.pieges.columns, rows: t.pieges.rows, rtl }), caption: t.pieges.caption, alt: t.pieges.alt },
      modeles: { svg: matrix({ title: t.modeles.title, columns: t.modeles.columns, rows: t.modeles.rows, rtl }), caption: t.modeles.caption, alt: t.modeles.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 40, tick: 4, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
