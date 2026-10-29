import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'application-a-ma-marque-ou-super-app-marketplace-algerie-2027';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Marque locale', title: ['Mon application, ou vendre', 'via les super-apps ?', 'Algérie, 2027.'], subtitle: 'L’échelle à monter dans l’ordre, de WhatsApp à l’application à votre marque, le verdict par type de marque, ce qu’on cède à une plateforme, et le calendrier 2027.', left: { label: 'Aujourd’hui', sub: 'Instagram, WhatsApp, peut-être une super-app' }, right: { label: 'Fin 2027', sub: 'plateformes pour acquérir, votre app pour garder' }, note: 'Algérie · 2027' },
    ladder: { title: 'L’échelle : chaque barreau se gagne avec le précédent', items: [
      { n: '01', label: 'WhatsApp Business', sub: 'Numéro d’entreprise, catalogue, réponses types. Suffit sous vingt commandes par jour.' },
      { n: '02', label: 'Super-apps et marketplaces', sub: 'Clients tout de suite, commission et données cédées. Acquisition, pas fidélité.' },
      { n: '03', label: 'Commande en ligne à votre marque', sub: 'Site ou web-app, paiement CIB/Edahabia, vos clients, vos données. Sans installation.', accent: true },
      { n: '04', label: 'Application à votre marque', sub: 'Fidélité, notifications, commande en deux gestes. Quand des clients reviennent chaque semaine.' },
    ], caption: 'Figure 1 · Sauter au barreau 4 sans le 3 donne une application que personne n’installe. Rester au barreau 2 donne une marque qui ne connaît pas ses clients.', alt: 'Quatre barreaux : WhatsApp Business, super-apps et marketplaces, commande en ligne à votre marque, application à votre marque.' },
    verdict: { title: 'Le verdict par type de marque, en 2027', columns: ['Application à votre marque', 'Plateformes tierces'], rows: [
      { label: 'Restaurant ou chaîne de restauration', cells: [1, 2] },
      { label: 'Pharmacie, parapharmacie, chaîne de magasins', cells: [2, 0] },
      { label: 'Marque de produits (cosmétique, mode, alimentaire)', cells: [1, 1] },
      { label: 'Vendeur Instagram, boutique unique', cells: [0, 1] },
      { label: 'Service à rendez-vous (clinique, salle, salon)', cells: [2, 0] },
      { label: 'Banque, assurance, télécom, énergie', cells: [2, 0] },
      { label: 'Grossiste, B2B, distribution', cells: [2, 0] },
    ], legend: '●  oui, c’est le canal principal      ◐  oui, en complément      ○  non, pas en 2027', caption: 'Figure 2 · Les plateformes vendent ce que le client achète une fois. L’application à votre marque garde celui qui revient.', alt: 'Matrice par type de marque entre application à votre marque et plateformes tierces : restaurants surtout plateformes, pharmacies, services à rendez-vous, banques et grossistes surtout leur application, marques de produits les deux, vendeur Instagram les plateformes.' },
    stack: { title: 'Ce que vous cédez à une plateforme, et ce que votre application garde', layers: [
      { label: 'Client', items: [{ name: 'Plateforme : le client est le sien', sub: 'vous êtes une ligne dans une liste' }, { name: 'Votre application : le client est le vôtre', sub: 'numéro, historique, préférences', accent: true }] },
      { label: 'Marge', items: [{ name: 'Plateforme : commission sur chaque vente', sub: 'et promotions imposées' }, { name: 'Votre application : la marge entière', sub: 'moins le paiement et l’hébergement' }] },
      { label: 'Données', items: [{ name: 'Plateforme : agrégées, pas à vous', sub: 'vous ne savez pas qui revient' }, { name: 'Votre application : chaque commande', sub: 'relances, fidélité, IA sur vos données' }] },
      { label: 'Acquisition', items: [{ name: 'Plateforme : le trafic est inclus', sub: 'c’est ce que vous payez' }, { name: 'Votre application : à construire', sub: 'boutiques, Instagram, WhatsApp, plateformes elles-mêmes' }] },
      { label: 'Risque', items: [{ name: 'Plateforme : elle peut fermer ou changer ses règles', sub: 'c’est arrivé en Algérie' }, { name: 'Votre application : maintenance et stores', sub: 'budget annuel décidé avant le lancement' }] },
    ], caption: 'Figure 3 · La plateforme vend du trafic contre le client, la marge et les données. C’est un bon échange pour acquérir, un mauvais pour garder.', alt: 'Cinq lignes comparant plateforme et application à votre marque : client, marge, données, acquisition, risque.' },
    timeline: { title: 'Monter l’échelle en 2027', unit: 'mois', items: [
      { label: 'WhatsApp Business et plateformes', note: 'janvier : numéro d’entreprise, catalogue, règles ; être là où les clients cherchent', from: 0, to: 2 },
      { label: 'Commande en ligne à votre marque', note: 'web-marchand, site de commande, paiement, suivi', from: 2, to: 5 },
      { label: 'Mesure : qui revient, combien de fois', note: 'trois mois de données avant de décider l’application', from: 5, to: 8 },
      { label: 'Application à votre marque', note: 'si des clients reviennent chaque semaine : fidélité, notifications', from: 8, to: 11, accent: true },
      { label: 'Relances et IA sur vos données', note: 'novembre-décembre : paniers abandonnés, réachat, support', from: 11, to: 12 },
    ], caption: 'Figure 4 · L’application se décide au huitième mois, sur les chiffres de la commande en ligne, pas en janvier sur une intuition.', alt: 'Calendrier en mois : WhatsApp et plateformes 0 à 2, commande en ligne 2 à 5, mesure 5 à 8, application 8 à 11, IA 11 à 12.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Local brand', title: ['My own app, or selling', 'through the super-apps?', 'Algeria, 2027.'], subtitle: 'The ladder to climb in order, from WhatsApp to your own branded app, the verdict by brand type, what you give up to a platform, and the 2027 calendar.', left: { label: 'Today', sub: 'Instagram, WhatsApp, maybe a super-app' }, right: { label: 'End of 2027', sub: 'platforms to acquire, your app to keep' }, note: 'Algeria · 2027' },
    ladder: { title: 'The ladder: each rung is earned with the previous one', items: [
      { n: '01', label: 'WhatsApp Business', sub: 'Company number, catalogue, template replies. Enough under twenty orders a day.' },
      { n: '02', label: 'Super-apps and marketplaces', sub: 'Customers right away, commission and data given up. Acquisition, not loyalty.' },
      { n: '03', label: 'Branded online ordering', sub: 'Site or web app, CIB/Edahabia payment, your customers, your data. No install needed.', accent: true },
      { n: '04', label: 'Your branded app', sub: 'Loyalty, notifications, two-tap ordering. When customers come back every week.' },
    ], caption: 'Figure 1 · Jumping to rung 4 without rung 3 yields an app nobody installs. Staying on rung 2 yields a brand that does not know its customers.', alt: 'Four rungs: WhatsApp Business, super-apps and marketplaces, branded online ordering, branded app.' },
    verdict: { title: 'The verdict by brand type, in 2027', columns: ['Your branded app', 'Third-party platforms'], rows: [
      { label: 'Restaurant or restaurant chain', cells: [1, 2] },
      { label: 'Pharmacy, parapharmacy, store chain', cells: [2, 0] },
      { label: 'Product brand (cosmetics, fashion, food)', cells: [1, 1] },
      { label: 'Instagram seller, single shop', cells: [0, 1] },
      { label: 'Appointment service (clinic, gym, salon)', cells: [2, 0] },
      { label: 'Bank, insurance, telecom, energy', cells: [2, 0] },
      { label: 'Wholesaler, B2B, distribution', cells: [2, 0] },
    ], legend: '●  yes, main channel      ◐  yes, as a complement      ○  no, not in 2027', caption: 'Figure 2 · Platforms sell what the customer buys once. Your branded app keeps the one who comes back.', alt: 'Matrix by brand type between branded app and third-party platforms: restaurants mostly platforms, pharmacies, appointment services, banks and wholesalers mostly their own app, product brands both, Instagram seller platforms.' },
    stack: { title: 'What you give up to a platform, and what your app keeps', layers: [
      { label: 'Customer', items: [{ name: 'Platform: the customer is theirs', sub: 'you are a line in a list' }, { name: 'Your app: the customer is yours', sub: 'number, history, preferences', accent: true }] },
      { label: 'Margin', items: [{ name: 'Platform: commission on every sale', sub: 'and imposed promotions' }, { name: 'Your app: the whole margin', sub: 'minus payment and hosting' }] },
      { label: 'Data', items: [{ name: 'Platform: aggregated, not yours', sub: 'you do not know who comes back' }, { name: 'Your app: every order', sub: 'reminders, loyalty, AI on your data' }] },
      { label: 'Acquisition', items: [{ name: 'Platform: traffic included', sub: 'that is what you pay for' }, { name: 'Your app: to be built', sub: 'shops, Instagram, WhatsApp, the platforms themselves' }] },
      { label: 'Risk', items: [{ name: 'Platform: it can close or change its rules', sub: 'it has happened in Algeria' }, { name: 'Your app: maintenance and stores', sub: 'annual budget decided before launch' }] },
    ], caption: 'Figure 3 · The platform sells traffic in exchange for the customer, the margin and the data. A good trade to acquire, a bad one to keep.', alt: 'Five rows comparing platform and branded app: customer, margin, data, acquisition, risk.' },
    timeline: { title: 'Climbing the ladder in 2027', unit: 'months', items: [
      { label: 'WhatsApp Business and platforms', note: 'January: company number, catalogue, rules; be where customers search', from: 0, to: 2 },
      { label: 'Branded online ordering', note: 'merchant status, ordering site, payment, tracking', from: 2, to: 5 },
      { label: 'Measure: who comes back, how often', note: 'three months of data before deciding on the app', from: 5, to: 8 },
      { label: 'Your branded app', note: 'if customers come back every week: loyalty, notifications', from: 8, to: 11, accent: true },
      { label: 'Reminders and AI on your data', note: 'November-December: abandoned baskets, repurchase, support', from: 11, to: 12 },
    ], caption: 'Figure 4 · The app is decided in month eight, on the numbers from online ordering, not in January on a hunch.', alt: 'Timeline in months: WhatsApp and platforms 0 to 2, online ordering 2 to 5, measurement 5 to 8, app 8 to 11, AI 11 to 12.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · علامة محلية', title: ['تطبيقي الخاص، أم البيع', 'عبر التطبيقات الشاملة؟', 'الجزائر، 2027.'], subtitle: 'السلّم الذي يُصعد بالترتيب من واتساب إلى تطبيق بعلامتك، الحكم حسب نوع العلامة، ما تتنازل عنه لمنصة، وجدول 2027.', left: { label: 'اليوم', sub: 'إنستغرام، واتساب، ربما تطبيق شامل' }, right: { label: 'نهاية 2027', sub: 'اكتساب على المنصات، ولاء في تطبيقك' }, note: 'الجزائر · 2027' },
    ladder: { title: 'السلّم: كل درجة تُكتسب بالسابقة', items: [
      { n: '01', label: 'واتساب للأعمال', sub: 'رقم شركة، كتالوج، ردود جاهزة. يكفي تحت عشرين طلباً يومياً.' },
      { n: '02', label: 'التطبيقات الشاملة والأسواق', sub: 'زبائن فوراً، عمولة وبيانات متنازَل عنها. اكتساب لا ولاء.' },
      { n: '03', label: 'طلب إلكتروني بعلامتك', sub: 'موقع أو تطبيق ويب، دفع CIB/الذهبية، زبائنك، بياناتك. بلا تثبيت.', accent: true },
      { n: '04', label: 'تطبيق بعلامتك', sub: 'ولاء، إشعارات، طلب بلمستين. حين يعود الزبائن كل أسبوع.' },
    ], caption: 'الشكل 1 · القفز إلى الدرجة 4 دون الثالثة يعطي تطبيقاً لا يثبّته أحد. والبقاء في الدرجة 2 يعطي علامة لا تعرف زبائنها.', alt: 'أربع درجات: واتساب للأعمال، التطبيقات الشاملة والأسواق، طلب إلكتروني بعلامتك، تطبيق بعلامتك.' },
    verdict: { title: 'الحكم حسب نوع العلامة، في 2027', columns: ['تطبيق بعلامتك', 'منصات الغير'], rows: [
      { label: 'مطعم أو سلسلة مطاعم', cells: [1, 2] },
      { label: 'صيدلية، شبه صيدلية، سلسلة محلات', cells: [2, 0] },
      { label: 'علامة منتجات (تجميل، موضة، غذاء)', cells: [1, 1] },
      { label: 'بائع إنستغرام، محل واحد', cells: [0, 1] },
      { label: 'خدمة بمواعيد (عيادة، قاعة رياضة، صالون)', cells: [2, 0] },
      { label: 'بنك، تأمين، اتصالات، طاقة', cells: [2, 0] },
      { label: 'تاجر جملة، B2B، توزيع', cells: [2, 0] },
    ], legend: '●  نعم، القناة الرئيسية      ◐  نعم، كتكملة      ○  لا، ليس في 2027', caption: 'الشكل 2 · تبيع المنصات ما يشتريه الزبون مرة. وتطبيق علامتك يحتفظ بمن يعود.', alt: 'مصفوفة حسب نوع العلامة بين تطبيق بعلامتك ومنصات الغير.' },
    stack: { title: 'ما تتنازل عنه لمنصة، وما يحتفظ به تطبيقك', layers: [
      { label: 'الزبون', items: [{ name: 'المنصة: الزبون زبونها', sub: 'أنت سطر في قائمة' }, { name: 'تطبيقك: الزبون زبونك', sub: 'رقم، سجل، تفضيلات', accent: true }] },
      { label: 'الهامش', items: [{ name: 'المنصة: عمولة على كل بيع', sub: 'وعروض مفروضة' }, { name: 'تطبيقك: الهامش كاملاً', sub: 'ناقص الدفع والاستضافة' }] },
      { label: 'البيانات', items: [{ name: 'المنصة: مجمَّعة، ليست لك', sub: 'لا تعرف من يعود' }, { name: 'تطبيقك: كل طلب', sub: 'تذكيرات، ولاء، ذكاء اصطناعي على بياناتك' }] },
      { label: 'الاكتساب', items: [{ name: 'المنصة: الزيارات مشمولة', sub: 'هذا ما تدفع مقابله' }, { name: 'تطبيقك: يُبنى', sub: 'محلات، إنستغرام، واتساب، المنصات نفسها' }] },
      { label: 'الخطر', items: [{ name: 'المنصة: قد تغلق أو تغيّر قواعدها', sub: 'حدث في الجزائر' }, { name: 'تطبيقك: صيانة ومتاجر', sub: 'ميزانية سنوية تُقرَّر قبل الإطلاق' }] },
    ], caption: 'الشكل 3 · تبيع المنصة الزيارات مقابل الزبون والهامش والبيانات. صفقة جيدة للاكتساب، سيئة للاحتفاظ.', alt: 'خمسة أسطر تقارن المنصة بتطبيق العلامة: زبون، هامش، بيانات، اكتساب، خطر.' },
    timeline: { title: 'صعود السلّم في 2027', unit: 'أشهر', items: [
      { label: 'واتساب للأعمال والمنصات', note: 'جانفي: رقم شركة، كتالوج، قواعد؛ كن حيث يبحث الزبائن', from: 0, to: 2 },
      { label: 'طلب إلكتروني بعلامتك', note: 'تاجر إلكتروني، موقع طلب، دفع، متابعة', from: 2, to: 5 },
      { label: 'قياس: من يعود، كم مرة', note: 'ثلاثة أشهر من البيانات قبل قرار التطبيق', from: 5, to: 8 },
      { label: 'تطبيق بعلامتك', note: 'إن كان الزبائن يعودون كل أسبوع: ولاء، إشعارات', from: 8, to: 11, accent: true },
      { label: 'تذكيرات وذكاء اصطناعي على بياناتك', note: 'نوفمبر-ديسمبر: سلال متروكة، إعادة شراء، دعم', from: 11, to: 12 },
    ], caption: 'الشكل 4 · يُقرَّر التطبيق في الشهر الثامن على أرقام الطلب الإلكتروني، لا في جانفي على حدس.', alt: 'جدول زمني بالأشهر لصعود السلّم في 2027.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      ladder: { svg: steps({ title: t.ladder.title, steps: t.ladder.items, arrows: true, rtl }), caption: t.ladder.caption, alt: t.ladder.alt },
      verdict: { svg: matrix({ title: t.verdict.title, columns: t.verdict.columns, rows: t.verdict.rows, legend: t.verdict.legend, rtl }), caption: t.verdict.caption, alt: t.verdict.alt },
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 12, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
