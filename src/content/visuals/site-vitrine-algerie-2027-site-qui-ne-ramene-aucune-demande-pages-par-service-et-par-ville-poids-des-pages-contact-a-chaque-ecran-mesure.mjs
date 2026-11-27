import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { demandes, poids, STRINGS as SC } from './custom/vitrine.mjs';
export const slug = 'site-vitrine-algerie-2027-site-qui-ne-ramene-aucune-demande-pages-par-service-et-par-ville-poids-des-pages-contact-a-chaque-ecran-mesure';
const T = {
  fr: {
    cover: { eyebrow: 'Site vitrine · Algérie · 2027', title: ['Un site vitrine', 'qui ramène des demandes'], subtitle: 'Pages par service et par ville, pages légères, contact à chaque écran, demandes comptées', left: { label: 'Site actuel', sub: '9 demandes par mois' }, right: { label: 'Site refait', sub: '46 demandes par mois' } },
    demandes: { caption: 'Figure 1 · Sur cent visiteurs du site actuel, 86 ne voient pas comment joindre l’entreprise et moins d’un le fait ; sur le site refait, tous le voient et 3 le font. Visites et demandes fictives.' },
    poids: { caption: 'Figure 2 · Une page d’accueil de 8 mégaoctets met 16 secondes à se télécharger à 4 mégabits par seconde ; à 0,8 mégaoctet, 1,6 seconde. Poids et débit fictifs ; la médiane mobile de 2,3 mégaoctets vient du Web Almanac 2024.' },
    parcours: { title: 'De la recherche à la réponse, en six temps', items: [
      { label: 'Recherche', sub: 'le métier et la ville, avec les mots du client' },
      { label: 'Résultat', sub: 'un titre qui dit le service et le lieu' },
      { label: 'Page du service', sub: 'ce que vous faites, pour qui, où' },
      { label: 'Preuve', sub: 'vos photos, vos réalisations, vos références' },
      { label: 'Contact', sub: 'appeler, écrire, venir : un seul geste', accent: true },
      { label: 'Réponse', sub: 'le jour même, dans une liste suivie' },
    ], caption: 'Figure 3 · Six temps. Le temps accentué est le contact : dans l’exemple, 86 visiteurs sur 100 repartaient sans l’avoir vu.', alt: 'Six temps : recherche, résultat, page du service, preuve, contact (accentué), réponse.' },
    situations: { title: 'Cinq situations, et ce que la refonte change', columns: ['Avec le site actuel', 'Avec le site refait'], rows: [
      { label: 'On cherche votre métier et votre ville', cells: ['le site n’apparaît pas', 'une page par service et par ville'] },
      { label: 'La page s’ouvre sur un téléphone', cells: ['seize secondes', 'moins de deux secondes'] },
      { label: 'Un client veut vous joindre', cells: ['il cherche la page Contact', 'appel, message, formulaire à chaque écran'] },
      { label: 'Un formulaire est envoyé', cells: ['une boîte que personne ne lit', 'une liste suivie, réponse le jour même'] },
      { label: 'Il faut changer un texte', cells: ['l’ancien prestataire a les accès', 'vos accès, votre domaine, votre hébergement'] },
    ], caption: 'Figure 4 · Cinq situations. Aucune ligne ne promet une position dans Google : chacune décrit ce qui dépend de vous.', alt: 'Matrice de cinq situations : recherche du métier et de la ville, ouverture sur téléphone, client qui veut joindre l’entreprise, formulaire envoyé, texte à changer ; pour chacune, avec le site actuel et avec le site refait.' },
    calendrier: { title: 'Huit semaines, en commençant par la mesure', unit: 'sem.', items: [
      { label: 'Mesure du site actuel', note: 'visites, clics d’appel et de message, formulaires, poids des pages', from: 0, to: 4, accent: true },
      { label: 'Services, villes, preuves', note: 'la liste des pages, les mots des clients, les photos et les références', from: 0, to: 3 },
      { label: 'Maquettes sur téléphone', note: 'l’écran du téléphone d’abord, le contact à chaque écran', from: 2, to: 4 },
      { label: 'Développement', note: 'pages, formulaires, deux langues, poids de chaque page contrôlé', from: 3, to: 7 },
      { label: 'Adresses et redirections', note: 'chaque ancienne adresse reliée à la nouvelle, plan du site', from: 6, to: 7 },
      { label: 'Mise en ligne et mesure', note: 'les mêmes compteurs qu’avant, comparés mois par mois', from: 7, to: 8 },
    ], caption: 'Figure 5 · Huit semaines dans l’exemple. La période accentuée est la mesure du site actuel, menée pendant que le contenu se prépare. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : mesure du site actuel (accentué), services, villes et preuves, maquettes sur téléphone, développement, adresses et redirections, mise en ligne et mesure.' },
    couches: { title: 'Ce qu’il y a dans un site vitrine, en cinq couches', layers: [
      { label: 'Contenu', items: [{ name: 'Le contenu : une page par service et par ville servie, vos photos, vos références, en arabe et en français', sub: 'ce que vous faites, pour qui, où' }] },
      { label: 'Contact', items: [{ name: 'Le contact : appel, message, formulaire court, itinéraire, visibles à chaque écran', sub: 'un geste pour vous joindre', accent: true }] },
      { label: 'Vitesse', items: [{ name: 'La vitesse : images redimensionnées, scripts triés, un budget de poids par page', sub: 'ouvert avant que le client reparte' }] },
      { label: 'Technique', items: [{ name: 'La technique : titres, données structurées, plan du site, redirections des anciennes adresses', sub: 'compris par les moteurs' }] },
      { label: 'Mesure', items: [{ name: 'La mesure et la propriété : demandes comptées par source, accès, domaine et hébergement à votre nom', sub: 'vous savez ce qu’il rapporte, et il est à vous' }] },
    ], caption: 'Figure 6 · Cinq couches. La couche accentuée est le contact : c’est elle qui transforme une visite en demande.', alt: 'Cinq couches : le contenu ; le contact (accentué) ; la vitesse ; la technique ; la mesure et la propriété.' },
  },
  en: {
    cover: { eyebrow: 'Showcase website · Algeria · 2027', title: ['A showcase website', 'that brings requests'], subtitle: 'Pages per service and per city, light pages, contact on every screen, requests counted', left: { label: 'Current site', sub: '9 requests a month' }, right: { label: 'Rebuilt site', sub: '46 requests a month' } },
    demandes: { caption: 'Figure 1 · Out of one hundred visitors to the current site, 86 never see how to reach the company and less than one does; on the rebuilt site, all see it and 3 do. Fictitious visits and requests.' },
    poids: { caption: 'Figure 2 · An 8-megabyte home page takes 16 seconds to download at 4 megabits per second; at 0.8 megabytes, 1.6 seconds. Fictitious weights and speed; the 2.3-megabyte mobile median comes from the Web Almanac 2024.' },
    parcours: { title: 'From the search to the answer, in six steps', items: [
      { label: 'Search', sub: 'the trade and the city, in the customer’s words' },
      { label: 'Result', sub: 'a title that says the service and the place' },
      { label: 'Service page', sub: 'what you do, for whom, where' },
      { label: 'Proof', sub: 'your photos, your work, your references' },
      { label: 'Contact', sub: 'call, write, come: one single gesture', accent: true },
      { label: 'Answer', sub: 'the same day, in a tracked list' },
    ], caption: 'Figure 3 · Six steps. The accented step is the contact: in the example, 86 visitors out of 100 left without seeing it.', alt: 'Six steps: search, result, service page, proof, contact (accented), answer.' },
    situations: { title: 'Five situations, and what the rebuild changes', columns: ['With the current site', 'With the rebuilt site'], rows: [
      { label: 'Someone searches your trade and city', cells: ['the site does not appear', 'one page per service and per city'] },
      { label: 'The page opens on a phone', cells: ['sixteen seconds', 'under two seconds'] },
      { label: 'A customer wants to reach you', cells: ['they look for the Contact page', 'call, message, form on every screen'] },
      { label: 'A form is sent', cells: ['a mailbox nobody reads', 'a tracked list, answered the same day'] },
      { label: 'A text has to be changed', cells: ['the former provider holds the access', 'your access, your domain, your hosting'] },
    ], caption: 'Figure 4 · Five situations. No line promises a position in Google: each describes what depends on you.', alt: 'Matrix of five situations: search for the trade and the city, opening on a phone, customer who wants to reach the company, form sent, text to change; for each, with the current site and with the rebuilt site.' },
    calendrier: { title: 'Eight weeks, starting with measurement', unit: 'wk', items: [
      { label: 'Measuring the current site', note: 'visits, call and message clicks, forms, page weights', from: 0, to: 4, accent: true },
      { label: 'Services, cities, proof', note: 'the list of pages, the customers’ words, the photos and the references', from: 0, to: 3 },
      { label: 'Mock-ups on a phone', note: 'the phone screen first, the contact on every screen', from: 2, to: 4 },
      { label: 'Development', note: 'pages, forms, two languages, the weight of every page checked', from: 3, to: 7 },
      { label: 'Addresses and redirects', note: 'every old address linked to the new one, site map', from: 6, to: 7 },
      { label: 'Launch and measurement', note: 'the same counters as before, compared month by month', from: 7, to: 8 },
    ], caption: 'Figure 5 · Eight weeks in the example. The accented period is the measurement of the current site, carried out while the content is being prepared. Indicative durations of a constructed example.', alt: 'Eight-week calendar: measuring the current site (accented), services, cities and proof, mock-ups on a phone, development, addresses and redirects, launch and measurement.' },
    couches: { title: 'What is inside a showcase website, in five layers', layers: [
      { label: 'Content', items: [{ name: 'Content: one page per service and per city served, your photos, your references, in Arabic and French', sub: 'what you do, for whom, where' }] },
      { label: 'Contact', items: [{ name: 'Contact: call, message, short form, directions, visible on every screen', sub: 'one gesture to reach you', accent: true }] },
      { label: 'Speed', items: [{ name: 'Speed: resized images, sorted scripts, a weight budget per page', sub: 'open before the customer leaves' }] },
      { label: 'Technical', items: [{ name: 'Technical: titles, structured data, site map, redirects from the old addresses', sub: 'understood by search engines' }] },
      { label: 'Measurement', items: [{ name: 'Measurement and ownership: requests counted by source, access, domain and hosting in your name', sub: 'you know what it brings, and it is yours' }] },
    ], caption: 'Figure 6 · Five layers. The accented layer is the contact: it is what turns a visit into a request.', alt: 'Five layers: content; contact (accented); speed; technical; measurement and ownership.' },
  },
  ar: {
    cover: { eyebrow: 'موقع تعريفي · الجزائر · 2027', title: ['موقع تعريفي', 'يجلب الطلبات'], subtitle: 'صفحة لكل خدمة ولكل مدينة، صفحات خفيفة، وسيلة اتصال في كل شاشة، وطلبات محسوبة', left: { label: 'الموقع الحالي', sub: '9 طلبات في الشهر' }, right: { label: 'الموقع الجديد', sub: '46 طلباً في الشهر' } },
    demandes: { caption: 'الشكل 1 · من مئة زائر للموقع الحالي، 86 لا يرون كيف يتصلون بالمؤسسة وأقل من واحد يفعل؛ وفي الموقع المُعاد بناؤه، الكل يرى وثلاثة يفعلون. زيارات وطلبات خيالية.' },
    poids: { caption: 'الشكل 2 · صفحة رئيسية من 8 ميغابايت تحتاج 16 ثانية لتُحمَّل بسرعة 4 ميغابت في الثانية؛ ومع أقل من ميغابايت واحد، أقل من ثانيتين. أوزان وسرعة خيالية؛ والوسيط على الهاتف مأخوذ من تقرير سنة 2024.' },
    parcours: { title: 'من البحث إلى الجواب، في ست مراحل', items: [
      { label: 'البحث', sub: 'المهنة والمدينة، بكلمات الزبون' },
      { label: 'النتيجة', sub: 'عنوان يقول الخدمة والمكان' },
      { label: 'صفحة الخدمة', sub: 'ما تفعلونه، لمن، وأين' },
      { label: 'الإثبات', sub: 'صوركم، إنجازاتكم، ومراجعكم' },
      { label: 'الاتصال', sub: 'مكالمة، رسالة، أو زيارة: حركة واحدة', accent: true },
      { label: 'الجواب', sub: 'في اليوم نفسه، في قائمة متابَعة' },
    ], caption: 'الشكل 3 · ست مراحل. المرحلة المبرزة هي الاتصال: في المثال، 86 زائراً من 100 كانوا يغادرون دون أن يروه.', alt: 'ست مراحل: البحث، النتيجة، صفحة الخدمة، الإثبات، الاتصال (مبرز)، والجواب.' },
    situations: { title: 'خمس حالات، وما تغيّره إعادة البناء', columns: ['مع الموقع الحالي', 'مع الموقع الجديد'], rows: [
      { label: 'يبحثون عن مهنتكم ومدينتكم', cells: ['الموقع لا يظهر', 'صفحة لكل خدمة ولكل مدينة'] },
      { label: 'الصفحة تُفتَح على هاتف', cells: ['ست عشرة ثانية', 'أقل من ثانيتين'] },
      { label: 'زبون يريد الاتصال بكم', cells: ['يبحث عن صفحة الاتصال', 'مكالمة، رسالة، واستمارة في كل شاشة'] },
      { label: 'استمارة تُرسَل', cells: ['بريد لا يقرؤه أحد', 'قائمة متابَعة، وجواب في اليوم نفسه'] },
      { label: 'يجب تغيير نص', cells: ['المزوّد القديم يملك مفاتيح الدخول', 'مفاتيحكم، نطاقكم، واستضافتكم'] },
    ], caption: 'الشكل 4 · خمس حالات. لا سطر يعد بمرتبة في محركات البحث: كل واحد يصف ما يتوقف عليكم.', alt: 'مصفوفة من خمس حالات: البحث عن المهنة والمدينة، الفتح على الهاتف، زبون يريد الاتصال، استمارة تُرسَل، ونص يجب تغييره؛ ولكل واحدة مع الموقع الحالي ومع الموقع الجديد.' },
    calendrier: { title: 'ثمانية أسابيع، بدءاً بالقياس', unit: 'أسبوع', items: [
      { label: 'قياس الموقع الحالي', note: 'الزيارات، النقرات على الاتصال والرسالة، الاستمارات، وأوزان الصفحات', from: 0, to: 4, accent: true },
      { label: 'الخدمات، المدن، والإثباتات', note: 'قائمة الصفحات، كلمات الزبائن، الصور، والمراجع', from: 0, to: 3 },
      { label: 'نماذج على الهاتف', note: 'شاشة الهاتف أولاً، ووسيلة الاتصال في كل شاشة', from: 2, to: 4 },
      { label: 'التطوير', note: 'الصفحات، الاستمارات، اللغتان، ومراقبة وزن كل صفحة', from: 3, to: 7 },
      { label: 'العناوين وإعادة التوجيه', note: 'كل عنوان قديم مربوط بالجديد، وخريطة الموقع', from: 6, to: 7 },
      { label: 'الوضع على الخط والقياس', note: 'العدّادات نفسها كما قبل، مقارَنة شهراً بشهر', from: 7, to: 8 },
    ], caption: 'الشكل 5 · ثمانية أسابيع في المثال. الفترة المبرزة هي قياس الموقع الحالي، ويجري أثناء تحضير المحتوى. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: قياس الموقع الحالي (مبرز)، الخدمات والمدن والإثباتات، نماذج على الهاتف، التطوير، العناوين وإعادة التوجيه، والوضع على الخط والقياس.' },
    couches: { title: 'ما يوجد في موقع تعريفي، في خمس طبقات', layers: [
      { label: 'المحتوى', items: [{ name: 'المحتوى: صفحة لكل خدمة ولكل مدينة، صوركم، ومراجعكم، بالعربية والفرنسية', sub: 'ما تفعلونه، لمن، وأين' }] },
      { label: 'الاتصال', items: [{ name: 'الاتصال: مكالمة، رسالة، استمارة قصيرة، ومسار الوصول، ظاهرة في كل شاشة', sub: 'حركة واحدة للاتصال بكم', accent: true }] },
      { label: 'السرعة', items: [{ name: 'السرعة: صور بأبعاد مناسبة، سكريبتات مفروزة، وميزانية وزن لكل صفحة', sub: 'تُفتَح قبل أن يغادر الزبون' }] },
      { label: 'التقنية', items: [{ name: 'التقنية: العناوين، البيانات المنظَّمة، خريطة الموقع، وإعادة توجيه العناوين القديمة', sub: 'تفهمها محركات البحث' }] },
      { label: 'القياس', items: [{ name: 'القياس والملكية: الطلبات محسوبة حسب المصدر، والدخول والنطاق والاستضافة باسمكم', sub: 'تعرفون ما يجلبه، وهو ملككم' }] },
    ], caption: 'الشكل 6 · خمس طبقات. الطبقة المبرزة هي الاتصال: هي التي تحوّل الزيارة إلى طلب.', alt: 'خمس طبقات: المحتوى؛ الاتصال (مبرز)؛ السرعة؛ التقنية؛ والقياس والملكية.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      demandes: { svg: demandes(e.demandes, rtl), caption: t.demandes.caption, alt: e.demandes.alt },
      poids: { svg: poids(e.poids, rtl), caption: t.poids.caption, alt: e.poids.alt },
      parcours: { svg: steps({ title: t.parcours.title, steps: t.parcours.items, arrows: true, rtl }), caption: t.parcours.caption, alt: t.parcours.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
    },
  };
}
