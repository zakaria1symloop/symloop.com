import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Agence immobilière', title: ['Mon agence tourne', 'sur WhatsApp', 'et Google Sheets.'], subtitle: 'Ce qui se règle en une semaine, ce qui demande une plateforme, où l’IA fait vraiment gagner du temps.', left: { label: 'Aujourd’hui', sub: 'groupes WhatsApp · un Sheet' }, right: { label: 'Dans 12 semaines', sub: 'une seule source de vérité' }, note: 'Algérie · 2026' },
    journey: { title: 'Le parcours d’une demande aujourd’hui, et où elle fuit', items: [
      { label: 'La demande arrive', sub: 'WhatsApp, appel, Facebook, Ouedkniss. Sur le téléphone personnel d’un agent.' },
      { label: 'Un agent la lit', sub: 'Ou pas. Personne ne sait qui l’a prise ni si elle a eu une réponse.' },
      { label: 'Il cherche dans le Sheet', sub: 'Le bien est marqué disponible. Il a été loué hier par un collègue.' },
      { label: 'Visite', sub: 'Deux agents proposent le même bien au même client. Le propriétaire reçoit trois appels.' },
      { label: 'Le résultat n’est noté nulle part', sub: 'La demande est perdue pour la prochaine fois. Le client aussi.', accent: true },
    ], caption: 'Figure 1 · Chaque étape dépend de la mémoire d’une personne. C’est le problème, pas WhatsApp.', alt: 'Le parcours d’une demande dans une agence immobilière organisée sur WhatsApp et Google Sheets, avec les fuites à chaque étape.' },
    platform: { title: 'Ce qu’une plateforme d’agence contient, au minimum', layers: [
      { label: 'Agents', items: [{ name: 'Application mobile agent', sub: 'photos, statut après visite, demandes attribuées, AR et FR' }, { name: 'Notifications', sub: 'nouvelle demande, bien retiré, rappel propriétaire' }] },
      { label: 'Direction', items: [{ name: 'Back-office', sub: 'pipeline, attribution, historique, reporting' }, { name: 'Portail propriétaires', sub: 'optionnel : suivi des visites et des offres' }] },
      { label: 'Cœur', items: [{ name: 'Fiche bien unique', sub: 'référence, statut, agent, date de mise à jour', accent: true }, { name: 'Demandes et matching', sub: 'critères, budget, quartier, correspondances' }] },
      { label: 'Canaux', items: [{ name: 'WhatsApp Business API', sub: 'un numéro d’agence, conversations rattachées' }, { name: 'Site et Ouedkniss', sub: 'diffusion depuis la fiche, jamais l’inverse' }] },
      { label: 'Données', items: [{ name: 'Reprise de vos Sheets', sub: 'nettoyés et importés une fois' }, { name: 'Hébergement conforme loi 18-07', sub: 'données clients et propriétaires' }] },
    ], caption: 'Figure 2 · La fiche bien unique est le centre. Tout le reste la lit ou la met à jour. WhatsApp reste le canal client, il cesse d’être la mémoire.', alt: 'Architecture d’une plateforme pour agence immobilière : application mobile agent, back-office, fiche bien unique, demandes et matching, WhatsApp Business API, site et Ouedkniss, reprise des données.' },
    ai: { title: 'Où l’IA fait gagner du temps dans une agence, et où elle n’apporte rien', columns: ['Gain réel', 'Prérequis'], rows: [
      { label: 'Matching automatique demande ↔ bien', cells: [2, 'Biens structurés dans la fiche unique'] },
      { label: 'Réponse au premier message WhatsApp, 24h/24', cells: [2, 'Horaires, FAQ, transfert à un agent'] },
      { label: 'Rédaction des annonces en arabe et en français', cells: [1, 'Photos et fiche complètes'] },
      { label: 'Résumé des appels et des visites', cells: [1, 'Agents qui dictent après la visite'] },
      { label: 'Estimation automatique des prix', cells: [0, 'Données de marché fiables, encore rares en Algérie'] },
    ], legend: '●  gain fort      ◐  gain moyen      ○  pas encore', caption: 'Figure 3 · L’IA accélère une agence déjà rangée. Sur un Sheet en désordre, elle accélère le désordre.', alt: 'Usages de l’IA dans une agence immobilière classés par gain réel : matching et réponse automatique forts, rédaction et résumés moyens, estimation de prix pas encore fiable en Algérie.' },
    timeline: { title: 'De vos Sheets à une plateforme utilisée par toute l’équipe', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'vos règles, vos statuts, vos canaux', from: 0, to: 1 },
      { label: 'Reprise des données', note: 'nettoyage des Sheets, doublons, biens fantômes', from: 1, to: 2 },
      { label: 'Design', note: 'application agent et back-office, sur téléphone', from: 2, to: 4 },
      { label: 'Développement', note: 'fiche bien, demandes, matching, WhatsApp', from: 4, to: 10 },
      { label: 'Formation et bascule', note: 'une règle : aucun bien hors plateforme', from: 10, to: 12, accent: true },
    ], caption: 'Figure 4 · Douze semaines. La semaine de reprise des données est celle qui décide si l’équipe fera confiance à l’outil.', alt: 'Calendrier en semaines : cadrage 0 à 1, reprise des données 1 à 2, design 2 à 4, développement 4 à 10, formation et bascule 10 à 12.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Real-estate agency', title: ['My agency runs', 'on WhatsApp', 'and Google Sheets.'], subtitle: 'What gets fixed in a week, what needs a platform, where AI really saves time.', left: { label: 'Today', sub: 'WhatsApp groups · one Sheet' }, right: { label: 'In 12 weeks', sub: 'one source of truth' }, note: 'Algeria · 2026' },
    journey: { title: 'The journey of an enquiry today, and where it leaks', items: [
      { label: 'The enquiry arrives', sub: 'WhatsApp, call, Facebook, Ouedkniss. On an agent’s personal phone.' },
      { label: 'An agent reads it', sub: 'Or not. Nobody knows who took it or whether it got an answer.' },
      { label: 'They search the Sheet', sub: 'The flat is marked available. A colleague rented it yesterday.' },
      { label: 'Viewing', sub: 'Two agents offer the same flat to the same client. The owner gets three calls.' },
      { label: 'The outcome is written nowhere', sub: 'The enquiry is lost for next time. So is the client.', accent: true },
    ], caption: 'Figure 1 · Every step depends on one person’s memory. That is the problem, not WhatsApp.', alt: 'The journey of an enquiry in a real-estate agency organised on WhatsApp and Google Sheets, with leaks at every step.' },
    platform: { title: 'What an agency platform contains, at minimum', layers: [
      { label: 'Agents', items: [{ name: 'Agent mobile app', sub: 'photos, status after viewing, assigned enquiries, AR and FR' }, { name: 'Notifications', sub: 'new enquiry, listing withdrawn, owner reminder' }] },
      { label: 'Management', items: [{ name: 'Back-office', sub: 'pipeline, assignment, history, reporting' }, { name: 'Owner portal', sub: 'optional: viewings and offers tracking' }] },
      { label: 'Core', items: [{ name: 'Single listing record', sub: 'reference, status, agent, last update', accent: true }, { name: 'Enquiries and matching', sub: 'criteria, budget, district, matches' }] },
      { label: 'Channels', items: [{ name: 'WhatsApp Business API', sub: 'one agency number, conversations attached' }, { name: 'Website and Ouedkniss', sub: 'published from the record, never the reverse' }] },
      { label: 'Data', items: [{ name: 'Import of your Sheets', sub: 'cleaned and imported once' }, { name: 'Law 18-07 compliant hosting', sub: 'client and owner data' }] },
    ], caption: 'Figure 2 · The single listing record is the centre. Everything else reads or updates it. WhatsApp stays the client channel, it stops being the memory.', alt: 'Architecture of a real-estate agency platform: agent mobile app, back-office, single listing record, enquiries and matching, WhatsApp Business API, website and Ouedkniss, data import.' },
    ai: { title: 'Where AI saves time in an agency, and where it adds nothing', columns: ['Real gain', 'Prerequisite'], rows: [
      { label: 'Automatic enquiry ↔ listing matching', cells: [2, 'Listings structured in the single record'] },
      { label: 'Reply to the first WhatsApp message, 24/7', cells: [2, 'Opening hours, FAQ, handover to an agent'] },
      { label: 'Writing listings in Arabic and French', cells: [1, 'Complete photos and record'] },
      { label: 'Summaries of calls and viewings', cells: [1, 'Agents who dictate after the viewing'] },
      { label: 'Automatic price estimation', cells: [0, 'Reliable market data, still rare in Algeria'] },
    ], legend: '●  strong gain      ◐  medium gain      ○  not yet', caption: 'Figure 3 · AI speeds up an agency that is already tidy. On a messy Sheet, it speeds up the mess.', alt: 'AI uses in a real-estate agency ranked by real gain: matching and automatic replies strong, writing and summaries medium, price estimation not yet reliable in Algeria.' },
    timeline: { title: 'From your Sheets to a platform the whole team uses', unit: 'weeks', items: [
      { label: 'Scoping', note: 'your rules, your statuses, your channels', from: 0, to: 1 },
      { label: 'Data import', note: 'cleaning Sheets, duplicates, ghost listings', from: 1, to: 2 },
      { label: 'Design', note: 'agent app and back-office, on a phone', from: 2, to: 4 },
      { label: 'Development', note: 'listing record, enquiries, matching, WhatsApp', from: 4, to: 10 },
      { label: 'Training and switch-over', note: 'one rule: no listing outside the platform', from: 10, to: 12, accent: true },
    ], caption: 'Figure 4 · Twelve weeks. The data import week decides whether the team will trust the tool.', alt: 'Timeline in weeks: scoping 0 to 1, data import 1 to 2, design 2 to 4, development 4 to 10, training and switch-over 10 to 12.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · وكالة عقارية', title: ['وكالتي تشتغل', 'على واتساب', 'وGoogle Sheets.'], subtitle: 'ما يُحلّ في أسبوع، ما يحتاج منصة، وأين يوفّر الذكاء الاصطناعي الوقت فعلاً.', left: { label: 'اليوم', sub: 'مجموعات واتساب · ملف Sheets' }, right: { label: 'بعد 12 أسبوعاً', sub: 'مصدر واحد للحقيقة' }, note: 'الجزائر · 2026' },
    journey: { title: 'مسار الطلب اليوم، وأين يتسرّب', items: [
      { label: 'يصل الطلب', sub: 'واتساب، مكالمة، فيسبوك، Ouedkniss. على الهاتف الشخصي لأحد الوكلاء.' },
      { label: 'يقرأه وكيل', sub: 'أو لا. لا أحد يعرف من أخذه ولا إن تلقى جواباً.' },
      { label: 'يبحث في الملف', sub: 'الشقة مسجّلة متاحة. أجّرها زميل أمس.' },
      { label: 'زيارة', sub: 'وكيلان يعرضان الشقة نفسها على العميل نفسه. المالك يتلقى ثلاث مكالمات.' },
      { label: 'النتيجة لا تُسجَّل في أي مكان', sub: 'الطلب ضائع للمرة القادمة. والعميل أيضاً.', accent: true },
    ], caption: 'الشكل 1 · كل خطوة تعتمد على ذاكرة شخص. هذه هي المشكلة، لا واتساب.', alt: 'مسار الطلب في وكالة عقارية منظّمة على واتساب وGoogle Sheets مع التسربات في كل خطوة.' },
    platform: { title: 'ما تحتويه منصة الوكالة، كحد أدنى', layers: [
      { label: 'الوكلاء', items: [{ name: 'تطبيق الوكيل على الهاتف', sub: 'صور، حالة بعد الزيارة، طلبات مسندة، عربي وفرنسي' }, { name: 'إشعارات', sub: 'طلب جديد، عقار مسحوب، تذكير المالك' }] },
      { label: 'الإدارة', items: [{ name: 'الإدارة الخلفية', sub: 'مسار الطلبات، الإسناد، السجل، التقارير' }, { name: 'بوابة الملاك', sub: 'اختياري: متابعة الزيارات والعروض' }] },
      { label: 'القلب', items: [{ name: 'بطاقة عقار واحدة', sub: 'مرجع، حالة، وكيل، تاريخ آخر تحديث', accent: true }, { name: 'الطلبات والمطابقة', sub: 'معايير، ميزانية، حي، تطابقات' }] },
      { label: 'القنوات', items: [{ name: 'WhatsApp Business API', sub: 'رقم واحد للوكالة، محادثات مرتبطة' }, { name: 'الموقع وOuedkniss', sub: 'النشر من البطاقة، لا العكس أبداً' }] },
      { label: 'البيانات', items: [{ name: 'استرجاع ملفاتكم', sub: 'تُنظَّف وتُستورد مرة واحدة' }, { name: 'استضافة مطابقة للقانون 18-07', sub: 'بيانات العملاء والملاك' }] },
    ], caption: 'الشكل 2 · بطاقة العقار الواحدة هي المركز. كل ما عداها يقرؤها أو يحدّثها. يبقى واتساب قناة العميل ويتوقف عن أن يكون الذاكرة.', alt: 'بنية منصة وكالة عقارية.' },
    ai: { title: 'أين يوفّر الذكاء الاصطناعي الوقت في الوكالة، وأين لا يضيف شيئاً', columns: ['الفائدة الحقيقية', 'الشرط المسبق'], rows: [
      { label: 'مطابقة تلقائية بين الطلب والعقار', cells: [2, 'عقارات منظّمة في البطاقة الواحدة'] },
      { label: 'الرد على أول رسالة واتساب على مدار الساعة', cells: [2, 'مواعيد، أسئلة شائعة، تحويل إلى وكيل'] },
      { label: 'كتابة الإعلانات بالعربية والفرنسية', cells: [1, 'صور وبطاقة مكتملة'] },
      { label: 'تلخيص المكالمات والزيارات', cells: [1, 'وكلاء يُملون بعد الزيارة'] },
      { label: 'تقدير الأسعار تلقائياً', cells: [0, 'بيانات سوق موثوقة، ما زالت نادرة في الجزائر'] },
    ], legend: '●  فائدة قوية      ◐  متوسطة      ○  ليس بعد', caption: 'الشكل 3 · الذكاء الاصطناعي يسرّع وكالة مرتّبة أصلاً. على ملف فوضوي يسرّع الفوضى.', alt: 'استخدامات الذكاء الاصطناعي في الوكالة العقارية حسب الفائدة الحقيقية.' },
    timeline: { title: 'من ملفاتكم إلى منصة يستعملها كل الفريق', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'قواعدكم، حالاتكم، قنواتكم', from: 0, to: 1 },
      { label: 'استرجاع البيانات', note: 'تنظيف الملفات، التكرارات، العقارات الوهمية', from: 1, to: 2 },
      { label: 'التصميم', note: 'تطبيق الوكيل والإدارة الخلفية، على الهاتف', from: 2, to: 4 },
      { label: 'التطوير', note: 'بطاقة العقار، الطلبات، المطابقة، واتساب', from: 4, to: 10 },
      { label: 'التكوين والانتقال', note: 'قاعدة واحدة: لا عقار خارج المنصة', from: 10, to: 12, accent: true },
    ], caption: 'الشكل 4 · اثنا عشر أسبوعاً. أسبوع استرجاع البيانات هو الذي يقرر إن كان الفريق سيثق بالأداة.', alt: 'جدول زمني بالأسابيع.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      journey: { svg: steps({ title: t.journey.title, steps: t.journey.items, arrows: true, rtl }), caption: t.journey.caption, alt: t.journey.alt },
      platform: { svg: layers({ title: t.platform.title, layers: t.platform.layers, rtl }), caption: t.platform.caption, alt: t.platform.alt },
      ai: { svg: matrix({ title: t.ai.title, columns: t.ai.columns, rows: t.ai.rows, legend: t.ai.legend, rtl }), caption: t.ai.caption, alt: t.ai.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 12, tick: 2, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
