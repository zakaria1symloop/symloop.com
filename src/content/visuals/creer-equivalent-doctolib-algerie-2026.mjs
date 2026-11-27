import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'creer-equivalent-doctolib-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Vu en France, à construire en Algérie · 01', title: ['Doctolib n’existe pas', 'en Algérie.', 'Qui le construira ?'], subtitle: 'Le modèle, le marché, ce qui doit changer, l’architecture et le calendrier pour lancer la prise de rendez-vous médical en ligne.', left: { label: 'Doctolib · France', sub: '2013 → usage de masse' }, right: { label: 'Algérie', sub: '2026 · marché ouvert' }, note: 'Série fondateurs' },
    mechanisms: { title: 'Les trois mécanismes qui ont fait Doctolib', items: [
      { label: 'Le patient ne paie rien', sub: 'L’application est gratuite. Le médecin paie un abonnement parce que l’outil lui fait gagner du temps de secrétariat.' },
      { label: 'Le rappel automatique', sub: 'Un SMS la veille divise les rendez-vous manqués par deux ou trois. C’est l’argument qui convainc dès le premier mois.' },
      { label: 'L’effet de réseau local', sub: 'Généraliste, dentiste et ophtalmologue au même endroit : le patient ne revient plus au téléphone. Construit ville par ville.' },
    ], caption: 'Figure 1 · Trois mécanismes qui comptent plus que la technologie.', alt: 'Les trois mécanismes du succès de Doctolib : gratuité côté patient, rappel automatique par SMS, effet de réseau local ville par ville.' },
    changes: { title: 'Ce qui change entre le modèle français et la version algérienne', columns: ['Modèle français', 'Version algérienne'], rows: [
      { label: 'Identité du patient', cells: ['Email et mot de passe', 'Numéro de téléphone et code SMS'] },
      { label: 'Premiers clients', cells: ['Médecins libéraux', 'Cabinets privés et cliniques'] },
      { label: 'Données de santé', cells: ['RGPD, hébergeur certifié HDS', 'Loi 18-07, hébergement conforme'] },
      { label: 'Langues', cells: ['Français', 'Arabe (RTL) et français'] },
      { label: 'Téléconsultation', cells: ['Remboursée et encadrée', 'À préparer, pas au lancement'] },
      { label: 'Vente aux praticiens', cells: ['En ligne, à grande échelle', 'Sur le terrain, cabinet par cabinet'] },
    ], highlight: 1, caption: 'Figure 2 · Copier Doctolib écran par écran est l’erreur la plus courante. Six points changent tout.', alt: 'Comparaison du modèle Doctolib français et de sa version algérienne : identité par SMS, cabinets privés comme premiers clients, loi 18-07, arabe et français, téléconsultation différée, vente terrain.' },
    architecture: { title: 'Architecture d’une première version solide', layers: [
      { label: 'Patients', items: [{ name: 'Application iOS et Android', sub: 'Flutter ou React Native, AR et FR natifs' }, { name: 'Recherche', sub: 'spécialité, ville, quartier, disponibilité' }] },
      { label: 'Praticiens', items: [{ name: 'Espace médecin web', sub: 'responsive, tablette' }, { name: 'Poste secrétariat', sub: 'ordinateur du cabinet' }] },
      { label: 'Cœur du produit', items: [{ name: 'Agenda multi-praticiens', sub: 'créneaux, absences, listes d’attente, annulations', accent: true }, { name: 'Tableau de bord d’activation', sub: 'votre équipe terrain en dépend' }] },
      { label: 'Notifications', items: [{ name: 'SMS via opérateurs locaux', sub: 'taux de lecture proche de 100 %' }, { name: 'WhatsApp Business', sub: 'rappels et confirmations' }] },
      { label: 'Données', items: [{ name: 'Backend Node.js ou Laravel', sub: 'PostgreSQL' }, { name: 'Hébergement conforme loi 18-07', sub: 'données de santé' }] },
    ], caption: 'Figure 3 · Le cœur du produit est l’agenda. C’est là que se cachent les bugs et que l’expérience d’une équipe fait la différence.', alt: 'Architecture d’une plateforme de rendez-vous médical en Algérie : application patient, espace médecin, agenda multi-praticiens, notifications SMS et WhatsApp, backend PostgreSQL hébergé conformément à la loi 18-07.' },
    timeline: { title: 'Lancer dans une ville avec trente cabinets actifs', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'spécialités de lancement, règles d’agenda, 18-07', from: 0, to: 2 },
      { label: 'Design', note: 'parcours patient et médecin, AR et FR', from: 2, to: 5 },
      { label: 'Développement', note: 'backend, application, espace médecin', from: 5, to: 14 },
      { label: 'Cabinets pilotes', note: 'cinq à dix cabinets, une seule ville, stores', from: 14, to: 16 },
      { label: 'Activation terrain', note: 'premiers abonnements, deuxième version', from: 16, to: 24, accent: true },
    ], caption: 'Figure 4 · Quatre mois de produit, deux mois d’activation. La densité locale avant l’étendue nationale.', alt: 'Calendrier en semaines : cadrage 0 à 2, design 2 à 5, développement 5 à 14, cabinets pilotes 14 à 16, activation terrain 16 à 24.' },
    revenue: { title: 'Le modèle économique, dans cet ordre', items: [
      { label: 'Abonnement par praticien', sub: 'Un mois gratuit, puis un tarif mensuel adapté au marché local. C’est la base.', accent: true },
      { label: 'Services premium cliniques', sub: 'Multi-praticiens, statistiques, rappels WhatsApp, intégration avec leur logiciel de gestion.' },
      { label: 'Téléconsultation, plus tard', sub: 'Quand le cadre réglementaire le permettra. L’architecture est prête, le lancement attend.' },
    ], caption: 'Figure 5 · Ne monétisez jamais le patient : la gratuité crée le réseau, le réseau rend le service indispensable.', alt: 'Les trois sources de revenus dans l’ordre : abonnement par praticien, services premium pour les cliniques, téléconsultation plus tard.' },
  },
  en: {
    cover: { eyebrow: 'Seen in France, to be built in Algeria · 01', title: ['Doctolib does not exist', 'in Algeria.', 'Who will build it?'], subtitle: 'The model, the market, what must change, the architecture and the timeline to launch online medical booking.', left: { label: 'Doctolib · France', sub: '2013 → mass adoption' }, right: { label: 'Algeria', sub: '2026 · open market' }, note: 'Founder series' },
    mechanisms: { title: 'The three mechanisms behind Doctolib', items: [
      { label: 'The patient pays nothing', sub: 'The app is free. The doctor pays a subscription because the tool saves front-desk time.' },
      { label: 'Automatic reminders', sub: 'An SMS the day before cuts no-shows by two to three times. It is the argument that convinces in the first month.' },
      { label: 'Local network effect', sub: 'GP, dentist and ophthalmologist in one place: the patient never goes back to the phone. Built city by city.' },
    ], caption: 'Figure 1 · Three mechanisms that matter more than the technology.', alt: 'The three mechanisms of Doctolib’s success: free for patients, automatic SMS reminders, local network effect city by city.' },
    changes: { title: 'What changes between the French model and the Algerian version', columns: ['French model', 'Algerian version'], rows: [
      { label: 'Patient identity', cells: ['Email and password', 'Phone number and SMS code'] },
      { label: 'First customers', cells: ['Independent physicians', 'Private practices and clinics'] },
      { label: 'Health data', cells: ['GDPR, certified HDS hosting', 'Law 18-07, compliant hosting'] },
      { label: 'Languages', cells: ['French', 'Arabic (RTL) and French'] },
      { label: 'Teleconsultation', cells: ['Reimbursed and regulated', 'Prepare it, do not launch with it'] },
      { label: 'Selling to practitioners', cells: ['Online, at scale', 'In the field, practice by practice'] },
    ], highlight: 1, caption: 'Figure 2 · Copying Doctolib screen by screen is the most common mistake. Six points change everything.', alt: 'Comparison of the French Doctolib model and its Algerian version: SMS identity, private practices as first customers, Law 18-07, Arabic and French, deferred teleconsultation, field sales.' },
    architecture: { title: 'Architecture of a solid first version', layers: [
      { label: 'Patients', items: [{ name: 'iOS and Android app', sub: 'Flutter or React Native, native AR and FR' }, { name: 'Search', sub: 'specialty, city, district, availability' }] },
      { label: 'Practitioners', items: [{ name: 'Web doctor space', sub: 'responsive, tablet' }, { name: 'Front-desk workstation', sub: 'the practice computer' }] },
      { label: 'Product core', items: [{ name: 'Multi-practitioner agenda', sub: 'slots, absences, waiting lists, cancellations', accent: true }, { name: 'Activation dashboard', sub: 'your field team depends on it' }] },
      { label: 'Notifications', items: [{ name: 'SMS via local carriers', sub: 'read rate close to 100%' }, { name: 'WhatsApp Business', sub: 'reminders and confirmations' }] },
      { label: 'Data', items: [{ name: 'Node.js or Laravel backend', sub: 'PostgreSQL' }, { name: 'Law 18-07 compliant hosting', sub: 'health data' }] },
    ], caption: 'Figure 3 · The core of the product is the agenda. That is where bugs hide and where a team’s experience makes the difference.', alt: 'Architecture of a medical booking platform in Algeria: patient app, doctor space, multi-practitioner agenda, SMS and WhatsApp notifications, PostgreSQL backend hosted in compliance with Law 18-07.' },
    timeline: { title: 'Launch in one city with thirty active practices', unit: 'weeks', items: [
      { label: 'Scoping', note: 'launch specialties, agenda rules, 18-07', from: 0, to: 2 },
      { label: 'Design', note: 'patient and doctor journeys, AR and FR', from: 2, to: 5 },
      { label: 'Development', note: 'backend, app, doctor space', from: 5, to: 14 },
      { label: 'Pilot practices', note: 'five to ten practices, one city, stores', from: 14, to: 16 },
      { label: 'Field activation', note: 'first subscriptions, second version', from: 16, to: 24, accent: true },
    ], caption: 'Figure 4 · Four months of product, two months of activation. Local density before national reach.', alt: 'Timeline in weeks: scoping 0 to 2, design 2 to 5, development 5 to 14, pilot practices 14 to 16, field activation 16 to 24.' },
    revenue: { title: 'The business model, in this order', items: [
      { label: 'Subscription per practitioner', sub: 'One free month, then a monthly price adapted to the local market. This is the base.', accent: true },
      { label: 'Premium services for clinics', sub: 'Multi-practitioner, statistics, WhatsApp reminders, integration with their management software.' },
      { label: 'Teleconsultation, later', sub: 'When the regulatory framework allows it. The architecture is ready, the launch waits.' },
    ], caption: 'Figure 5 · Never monetize the patient: free access builds the network, the network makes the service indispensable.', alt: 'The three revenue sources in order: subscription per practitioner, premium services for clinics, teleconsultation later.' },
  },
  ar: {
    cover: { eyebrow: 'رأيته في فرنسا، ابنِه في الجزائر · 01', title: ['Doctolib غير موجود', 'في الجزائر.', 'من سيبنيه؟'], subtitle: 'النموذج، السوق، ما يجب تغييره، البنية والجدول الزمني لإطلاق حجز المواعيد الطبية عبر الإنترنت.', left: { label: 'Doctolib · فرنسا', sub: '2013 ← استخدام جماهيري' }, right: { label: 'الجزائر', sub: '2026 · سوق مفتوحة' }, note: 'سلسلة المؤسسين' },
    mechanisms: { title: 'الآليات الثلاث وراء نجاح Doctolib', items: [
      { label: 'المريض لا يدفع شيئاً', sub: 'التطبيق مجاني. الطبيب يدفع اشتراكاً لأن الأداة توفر وقت السكرتارية.' },
      { label: 'التذكير التلقائي', sub: 'رسالة SMS قبل الموعد بيوم تقلّص الغيابات إلى النصف أو الثلث. هذه الحجة تُقنع من الشهر الأول.' },
      { label: 'أثر الشبكة المحلي', sub: 'الطبيب العام وطبيب الأسنان وطبيب العيون في مكان واحد: لا يعود المريض إلى الهاتف. يُبنى مدينة بمدينة.' },
    ], caption: 'الشكل 1 · ثلاث آليات أهم من التقنية.', alt: 'الآليات الثلاث لنجاح Doctolib.' },
    changes: { title: 'ما يتغير بين النموذج الفرنسي والنسخة الجزائرية', columns: ['النموذج الفرنسي', 'النسخة الجزائرية'], rows: [
      { label: 'هوية المريض', cells: ['بريد إلكتروني وكلمة مرور', 'رقم هاتف ورمز SMS'] },
      { label: 'أول العملاء', cells: ['الأطباء الأحرار', 'العيادات الخاصة والمصحات'] },
      { label: 'البيانات الصحية', cells: ['RGPD واستضافة HDS', 'القانون 18-07 واستضافة مطابقة'] },
      { label: 'اللغات', cells: ['الفرنسية', 'العربية (RTL) والفرنسية'] },
      { label: 'الاستشارة عن بعد', cells: ['مموّلة ومؤطرة', 'تُحضَّر ولا تُطلق في البداية'] },
      { label: 'البيع للأطباء', cells: ['عبر الإنترنت على نطاق واسع', 'ميدانياً، عيادة بعيادة'] },
    ], highlight: 1, caption: 'الشكل 2 · نسخ Doctolib شاشة بشاشة هو الخطأ الأكثر شيوعاً. ست نقاط تغيّر كل شيء.', alt: 'مقارنة بين نموذج Doctolib الفرنسي ونسخته الجزائرية.' },
    architecture: { title: 'بنية نسخة أولى متينة', layers: [
      { label: 'المرضى', items: [{ name: 'تطبيق iOS وAndroid', sub: 'Flutter أو React Native، عربي وفرنسي' }, { name: 'البحث', sub: 'التخصص، المدينة، الحي، التوفر' }] },
      { label: 'الأطباء', items: [{ name: 'فضاء الطبيب على الويب', sub: 'متجاوب، لوحي' }, { name: 'جهاز السكرتارية', sub: 'حاسوب العيادة' }] },
      { label: 'قلب المنتج', items: [{ name: 'أجندة متعددة الأطباء', sub: 'فترات، غيابات، قوائم انتظار، إلغاءات', accent: true }, { name: 'لوحة تفعيل العيادات', sub: 'فريقك الميداني يعتمد عليها' }] },
      { label: 'الإشعارات', items: [{ name: 'SMS عبر المشغلين المحليين', sub: 'نسبة قراءة قريبة من 100%' }, { name: 'WhatsApp Business', sub: 'تذكيرات وتأكيدات' }] },
      { label: 'البيانات', items: [{ name: 'خلفية Node.js أو Laravel', sub: 'PostgreSQL' }, { name: 'استضافة مطابقة للقانون 18-07', sub: 'بيانات صحية' }] },
    ], caption: 'الشكل 3 · قلب المنتج هو الأجندة. هناك تختبئ الأخطاء وهناك تصنع خبرة الفريق الفرق.', alt: 'بنية منصة حجز المواعيد الطبية في الجزائر.' },
    timeline: { title: 'الإطلاق في مدينة واحدة مع ثلاثين عيادة نشطة', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'تخصصات الإطلاق، قواعد الأجندة، 18-07', from: 0, to: 2 },
      { label: 'التصميم', note: 'مسار المريض والطبيب بالعربية والفرنسية', from: 2, to: 5 },
      { label: 'التطوير', note: 'الخلفية، التطبيق، فضاء الطبيب', from: 5, to: 14 },
      { label: 'عيادات تجريبية', note: 'خمس إلى عشر عيادات، مدينة واحدة، المتاجر', from: 14, to: 16 },
      { label: 'التفعيل الميداني', note: 'أول الاشتراكات، النسخة الثانية', from: 16, to: 24, accent: true },
    ], caption: 'الشكل 4 · أربعة أشهر للمنتج وشهران للتفعيل. الكثافة المحلية قبل الانتشار الوطني.', alt: 'جدول زمني بالأسابيع.' },
    revenue: { title: 'نموذج الأعمال، بهذا الترتيب', items: [
      { label: 'اشتراك لكل طبيب', sub: 'شهر مجاني ثم سعر شهري ملائم للسوق المحلية. هذا هو الأساس.', accent: true },
      { label: 'خدمات مميزة للمصحات', sub: 'تعدد الأطباء، إحصائيات، تذكيرات WhatsApp، تكامل مع برنامج التسيير.' },
      { label: 'الاستشارة عن بعد، لاحقاً', sub: 'عندما يسمح الإطار التنظيمي. البنية جاهزة والإطلاق ينتظر.' },
    ], caption: 'الشكل 5 · لا تحقق الربح من المريض أبداً: المجانية تبني الشبكة، والشبكة تجعل الخدمة لا غنى عنها.', alt: 'مصادر الإيراد الثلاثة بالترتيب.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      mechanisms: { svg: steps({ title: t.mechanisms.title, steps: t.mechanisms.items, arrows: false, rtl }), caption: t.mechanisms.caption, alt: t.mechanisms.alt },
      changes: { svg: matrix({ title: t.changes.title, columns: t.changes.columns, rows: t.changes.rows, highlight: t.changes.highlight, rtl }), caption: t.changes.caption, alt: t.changes.alt },
      architecture: { svg: layers({ title: t.architecture.title, layers: t.architecture.layers, rtl }), caption: t.architecture.caption, alt: t.architecture.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 24, tick: 4, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
      revenue: { svg: steps({ title: t.revenue.title, steps: t.revenue.items, arrows: true, rtl }), caption: t.revenue.caption, alt: t.revenue.alt },
    },
  };
}
