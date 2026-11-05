import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages';

const T = {
  fr: {
    cover: { eyebrow: 'Diaspora · Lancer en 2027', title: ['Lancer en Algérie', 'depuis la France en 2027 :', 'quatre voyages, douze mois.'], subtitle: 'Ce qui se fait depuis la France et ce qui exige d’être sur place, le montage qui tient, le calendrier qui respecte le Ramadan et l’été, et les quatre voyages qui le rythment.', left: { label: 'Novembre 2026', sub: 'un modèle vu en France, un réseau, des soirs et des week-ends' }, right: { label: 'Octobre 2027', sub: 'société, produit, premiers clients payants, équipe sur place' }, note: 'Algérie · France · 2027' },
    trips: { title: 'Les quatre voyages de 2027', items: [
      { n: 'NOV–DÉC 2026', label: 'Le voyage des entretiens', sub: 'Vingt entretiens clients, choix de l’associé opérationnel, dossier de société ouvert, studio choisi sur cadrage écrit.' },
      { n: 'MARS 2027', label: 'Le voyage de la banque', sub: 'Après l’Aïd : compte bancaire, dossier web-marchand, label startup déposé, cinq pilotes signés sur le prototype.' },
      { n: 'JUIL–AOÛT 2027', label: 'Le voyage du lancement', sub: 'L’été où la diaspora rentre : produit en ligne, premiers payants, terrain chaque jour, premier commercial recruté.', accent: true },
      { n: 'OCT 2027', label: 'Le voyage de la rentrée', sub: 'Chiffres des trois premiers mois, produit corrigé, deuxième ville, décision : plein temps ou pas.' },
    ], caption: 'Figure 1 · Quatre voyages, pas douze. Entre deux, l’associé sur place et le studio avancent ; le fondateur pilote le soir et le week-end.', alt: 'Quatre voyages : novembre-décembre 2026 entretiens et dossier, mars 2027 banque et pilotes après l’Aïd, juillet-août 2027 lancement pendant l’été de la diaspora, octobre 2027 rentrée et chiffres.' },
    where: { title: 'Ce qui se fait depuis la France, et ce qui exige d’être en Algérie', columns: ['Depuis la France', 'Sur place'], rows: [
      { label: 'Entretiens avec les futurs clients', cells: ['La moitié en visio, via le réseau familial et professionnel', 'L’autre moitié en face à face : on voit la boutique, l’entrepôt, le cahier'] },
      { label: 'Création de la société', cells: ['Dossier préparé, statuts rédigés, procuration consulaire possible', 'Signature chez le notaire et dépôt, ou un associé mandaté'] },
      { label: 'Compte bancaire et web-marchand', cells: ['Rien de sérieux : les banques veulent voir le gérant', 'Une à deux semaines sur place, selon la banque'] },
      { label: 'Label startup', cells: ['Dossier en ligne, pitch, prévisionnel', 'Rien d’obligatoire sur place'] },
      { label: 'Développement du produit', cells: ['Pilotage hebdomadaire avec le studio, cadrage écrit, code à votre nom', 'Tests terrain sur téléphones et réseau réels'] },
      { label: 'Premiers clients payants', cells: ['Relances, démonstrations à distance', 'Les signatures se font en face à face, et l’onboarding aussi'] },
      { label: 'Équipe et associé opérationnel', cells: ['Repérage, entretiens de présélection', 'Le choix final se fait en travaillant une semaine ensemble'] },
    ], caption: 'Figure 2 · La règle : ce qui touche l’argent et les gens se fait sur place ; ce qui touche le papier et le produit se pilote de loin.', alt: 'Matrice de sept étapes avec ce qui se fait depuis la France et ce qui exige d’être en Algérie : entretiens, création de société, banque et web-marchand, label startup, développement, premiers clients, équipe.' },
    setup: { title: 'Le montage qui tient en 2027', layers: [
      { label: 'Fondateur en France', items: [{ name: 'Vision, réseau, premier financement', sub: 'soirs et week-ends jusqu’au voyage trois', accent: true }, { name: 'Clients de la diaspora', sub: 'si le modèle les concerne : iOS dès le premier mois' }] },
      { label: 'Structure algérienne', items: [{ name: 'SARL ou EURL', sub: 'facture en dinars, registre, NIF' }, { name: 'Label startup', sub: 'exonérations, crédibilité, accès aux dispositifs' }, { name: 'Statut web-marchand', sub: 'CIB/Edahabia via la banque et le GIE Monétique' }] },
      { label: 'Équipe sur place', items: [{ name: 'Associé opérationnel', sub: 'parts au capital, pas un salarié à distance' }, { name: 'Premier commercial', sub: 'recruté au voyage trois, payé sur les signatures' }] },
      { label: 'Produit', items: [{ name: 'Web et application mobile', sub: 'studio senior, cadrage écrit, prix total, code à votre nom' }] },
      { label: 'Clients', items: [{ name: 'Entreprises locales ou consommateurs', sub: 'paiement en dinars, onboarding humain, support AR/FR' }] },
    ], caption: 'Figure 3 · Le montage échoue presque toujours au troisième étage : sans associé opérationnel au capital, le fondateur en France pilote un salarié qu’il ne voit jamais.', alt: 'Cinq couches : fondateur en France, structure algérienne (SARL/EURL, label, web-marchand), équipe sur place (associé opérationnel, commercial), produit construit par un studio, clients locaux payant en dinars.' },
    timeline: { title: 'Douze mois, avec le Ramadan et l’été placés', unit: 'mois', items: [
      { label: 'Entretiens et choix de l’associé', note: 'voyage 1, novembre-décembre 2026', from: 0, to: 2 },
      { label: 'Société, label, banque, web-marchand', note: 'dossier en janvier, banque au voyage 2', from: 1, to: 5 },
      { label: 'Produit : cadrage, prototype, développement', note: 'le studio avance pendant le Ramadan', from: 1, to: 7 },
      { label: 'Ramadan', note: 'février-mars : ventes B2B lentes, usage consommateur le soir', from: 3, to: 4 },
      { label: 'Pilotes payants', note: 'signés au voyage 2, onboardés en avril-mai', from: 4, to: 8 },
      { label: 'Lancement d’été', note: 'voyage 3, juillet-août 2027', from: 8, to: 10, accent: true },
      { label: 'Rentrée et deuxième ville', note: 'voyage 4, octobre 2027', from: 10, to: 12 },
    ], caption: 'Figure 4 · Le Ramadan n’est pas un trou dans le calendrier : c’est le moment où le studio développe et où le fondateur prépare le voyage de la banque.', alt: 'Calendrier en mois de novembre 2026 à octobre 2027 : entretiens 0 à 2, société et banque 1 à 5, produit 1 à 7, Ramadan 3 à 4, pilotes 4 à 8, lancement d’été 8 à 10, rentrée 10 à 12.' },
  },
  en: {
    cover: { eyebrow: 'Diaspora · Launching in 2027', title: ['Launching in Algeria', 'from France in 2027:', 'four trips, twelve months.'], subtitle: 'What can be done from France and what requires being there, the setup that holds, the calendar that respects Ramadan and summer, and the four trips that pace it.', left: { label: 'November 2026', sub: 'a model seen in France, a network, evenings and weekends' }, right: { label: 'October 2027', sub: 'company, product, first paying customers, team on site' }, note: 'Algeria · France · 2027' },
    trips: { title: 'The four trips of 2027', items: [
      { n: 'NOV–DEC 2026', label: 'The interviews trip', sub: 'Twenty customer interviews, operating partner chosen, company file opened, studio chosen on a written scope.' },
      { n: 'MARCH 2027', label: 'The bank trip', sub: 'After Eid: bank account, online-merchant file, startup label submitted, five pilots signed on the prototype.' },
      { n: 'JUL–AUG 2027', label: 'The launch trip', sub: 'The summer the diaspora comes home: product live, first payers, field every day, first salesperson hired.', accent: true },
      { n: 'OCT 2027', label: 'The back-to-school trip', sub: 'Numbers of the first three months, product fixed, second city, decision: full time or not.' },
    ], caption: 'Figure 1 · Four trips, not twelve. In between, the partner on site and the studio move forward; the founder steers in the evenings and at weekends.', alt: 'Four trips: November-December 2026 interviews and file, March 2027 bank and pilots after Eid, July-August 2027 launch during the diaspora summer, October 2027 back-to-school and numbers.' },
    where: { title: 'What can be done from France, and what requires being in Algeria', columns: ['From France', 'On site'], rows: [
      { label: 'Interviews with future customers', cells: ['Half by video, through the family and professional network', 'The other half face to face: you see the shop, the warehouse, the notebook'] },
      { label: 'Company creation', cells: ['File prepared, articles drafted, consular power of attorney possible', 'Signature at the notary and filing, or a mandated partner'] },
      { label: 'Bank account and merchant status', cells: ['Nothing serious: banks want to see the manager', 'One to two weeks on site, depending on the bank'] },
      { label: 'Startup label', cells: ['Online file, pitch, forecast', 'Nothing required on site'] },
      { label: 'Product development', cells: ['Weekly steering with the studio, written scope, code in your name', 'Field tests on real phones and network'] },
      { label: 'First paying customers', cells: ['Follow-ups, remote demos', 'Signatures happen face to face, and so does onboarding'] },
      { label: 'Team and operating partner', cells: ['Scouting, pre-selection interviews', 'The final choice is made by working a week together'] },
    ], caption: 'Figure 2 · The rule: what touches money and people is done on site; what touches paper and product is steered from afar.', alt: 'Matrix of seven steps with what can be done from France and what requires being in Algeria: interviews, company creation, bank and merchant status, startup label, development, first customers, team.' },
    setup: { title: 'The setup that holds in 2027', layers: [
      { label: 'Founder in France', items: [{ name: 'Vision, network, first funding', sub: 'evenings and weekends until trip three', accent: true }, { name: 'Diaspora customers', sub: 'if the model concerns them: iOS from month one' }] },
      { label: 'Algerian structure', items: [{ name: 'SARL or EURL', sub: 'invoices in dinars, register, tax ID' }, { name: 'Startup label', sub: 'exemptions, credibility, access to schemes' }, { name: 'Online-merchant status', sub: 'CIB/Edahabia via the bank and GIE Monétique' }] },
      { label: 'Team on site', items: [{ name: 'Operating partner', sub: 'equity, not a remote employee' }, { name: 'First salesperson', sub: 'hired on trip three, paid on signatures' }] },
      { label: 'Product', items: [{ name: 'Web and mobile app', sub: 'senior studio, written scope, total price, code in your name' }] },
      { label: 'Customers', items: [{ name: 'Local companies or consumers', sub: 'payment in dinars, human onboarding, AR/FR support' }] },
    ], caption: 'Figure 3 · The setup almost always fails on the third floor: without an operating partner holding equity, the founder in France manages an employee they never see.', alt: 'Five layers: founder in France, Algerian structure (SARL/EURL, label, merchant status), team on site (operating partner, salesperson), product built by a studio, local customers paying in dinars.' },
    timeline: { title: 'Twelve months, with Ramadan and summer placed', unit: 'months', items: [
      { label: 'Interviews and partner choice', note: 'trip 1, November-December 2026', from: 0, to: 2 },
      { label: 'Company, label, bank, merchant status', note: 'file in January, bank on trip 2', from: 1, to: 5 },
      { label: 'Product: scope, prototype, development', note: 'the studio moves forward during Ramadan', from: 1, to: 7 },
      { label: 'Ramadan', note: 'February-March: slow B2B sales, consumer use in the evening', from: 3, to: 4 },
      { label: 'Paying pilots', note: 'signed on trip 2, onboarded in April-May', from: 4, to: 8 },
      { label: 'Summer launch', note: 'trip 3, July-August 2027', from: 8, to: 10, accent: true },
      { label: 'Back to school and second city', note: 'trip 4, October 2027', from: 10, to: 12 },
    ], caption: 'Figure 4 · Ramadan is not a hole in the calendar: it is when the studio develops and the founder prepares the bank trip.', alt: 'Timeline in months from November 2026 to October 2027: interviews 0 to 2, company and bank 1 to 5, product 1 to 7, Ramadan 3 to 4, pilots 4 to 8, summer launch 8 to 10, back to school 10 to 12.' },
  },
  ar: {
    cover: { eyebrow: 'الجالية · الإطلاق في 2027', title: ['الإطلاق في الجزائر', 'من فرنسا سنة 2027:', 'أربع رحلات، اثنا عشر شهراً.'], subtitle: 'ما يُنجز من فرنسا وما يتطلب الحضور، التركيبة التي تصمد، الجدول الذي يحترم رمضان والصيف، والرحلات الأربع التي تضبط إيقاعه.', left: { label: 'نوفمبر 2026', sub: 'نموذج رأيته في فرنسا، شبكة علاقات، أمسيات وعطل نهاية الأسبوع' }, right: { label: 'أكتوبر 2027', sub: 'شركة، منتج، أول زبائن يدفعون، فريق في الميدان' }, note: 'الجزائر · فرنسا · 2027' },
    trips: { title: 'الرحلات الأربع لسنة 2027', items: [
      { n: 'نوف–ديس 2026', label: 'رحلة المقابلات', sub: 'عشرون مقابلة مع الزبائن، اختيار الشريك التشغيلي، فتح ملف الشركة، استوديو مختار على تأطير مكتوب.' },
      { n: 'مارس 2027', label: 'رحلة البنك', sub: 'بعد العيد: حساب بنكي، ملف التاجر الإلكتروني، إيداع علامة ستارت-أب، خمسة زبائن تجريبيين موقَّعون على النموذج.' },
      { n: 'جوي–أوت 2027', label: 'رحلة الإطلاق', sub: 'صيف عودة الجالية: المنتج على الخط، أول الدافعين، ميدان كل يوم، توظيف أول مندوب تجاري.', accent: true },
      { n: 'أكت 2027', label: 'رحلة الدخول', sub: 'أرقام الأشهر الثلاثة الأولى، منتج مصحَّح، مدينة ثانية، قرار: تفرغ كامل أو لا.' },
    ], caption: 'الشكل 1 · أربع رحلات لا اثنتا عشرة. بينها يتقدم الشريك في الميدان والاستوديو؛ ويقود المؤسس مساءً وفي نهاية الأسبوع.', alt: 'أربع رحلات بين نوفمبر 2026 وأكتوبر 2027.' },
    where: { title: 'ما يُنجز من فرنسا، وما يتطلب الحضور في الجزائر', columns: ['من فرنسا', 'في الميدان'], rows: [
      { label: 'مقابلات مع الزبائن المستقبليين', cells: ['النصف عبر الفيديو من خلال شبكة العائلة والعمل', 'النصف الآخر وجهاً لوجه: ترى المحل والمستودع والدفتر'] },
      { label: 'إنشاء الشركة', cells: ['ملف محضَّر، قانون أساسي مكتوب، وكالة قنصلية ممكنة', 'توقيع عند الموثق وإيداع، أو شريك موكَّل'] },
      { label: 'الحساب البنكي والتاجر الإلكتروني', cells: ['لا شيء جدي: البنوك تريد رؤية المسيّر', 'أسبوع إلى أسبوعين في الميدان حسب البنك'] },
      { label: 'علامة ستارت-أب', cells: ['ملف إلكتروني، عرض، توقعات', 'لا شيء إلزامي في الميدان'] },
      { label: 'تطوير المنتج', cells: ['قيادة أسبوعية مع الاستوديو، تأطير مكتوب، كود باسمك', 'اختبارات ميدانية على هواتف وشبكة حقيقية'] },
      { label: 'أول الزبائن الدافعين', cells: ['متابعات، عروض عن بعد', 'التوقيعات تتم وجهاً لوجه، والمرافقة كذلك'] },
      { label: 'الفريق والشريك التشغيلي', cells: ['رصد، مقابلات انتقاء أولي', 'الاختيار النهائي يتم بالعمل أسبوعاً معاً'] },
    ], caption: 'الشكل 2 · القاعدة: ما يمس المال والناس يُنجز في الميدان؛ وما يمس الورق والمنتج يُقاد عن بعد.', alt: 'مصفوفة سبع خطوات بين ما يُنجز من فرنسا وما يتطلب الحضور في الجزائر.' },
    setup: { title: 'التركيبة التي تصمد في 2027', layers: [
      { label: 'المؤسس في فرنسا', items: [{ name: 'رؤية، شبكة، تمويل أول', sub: 'أمسيات وعطل نهاية الأسبوع حتى الرحلة الثالثة', accent: true }, { name: 'زبائن الجالية', sub: 'إن كان النموذج يعنيهم: iOS منذ الشهر الأول' }] },
      { label: 'الهيكل الجزائري', items: [{ name: 'SARL أو EURL', sub: 'فاتورة بالدينار، سجل، NIF' }, { name: 'علامة ستارت-أب', sub: 'إعفاءات، مصداقية، ولوج إلى الآليات' }, { name: 'صفة التاجر الإلكتروني', sub: 'CIB/الذهبية عبر البنك وGIE Monétique' }] },
      { label: 'الفريق في الميدان', items: [{ name: 'شريك تشغيلي', sub: 'حصص في رأس المال، لا موظف عن بعد' }, { name: 'أول مندوب تجاري', sub: 'يُوظَّف في الرحلة الثالثة ويُدفع له على التوقيعات' }] },
      { label: 'المنتج', items: [{ name: 'ويب وتطبيق جوّال', sub: 'استوديو خبير، تأطير مكتوب، سعر إجمالي، كود باسمك' }] },
      { label: 'الزبائن', items: [{ name: 'شركات محلية أو مستهلكون', sub: 'دفع بالدينار، مرافقة بشرية، دعم عربي/فرنسي' }] },
    ], caption: 'الشكل 3 · تفشل التركيبة غالباً في الطابق الثالث: بلا شريك تشغيلي في رأس المال يدير المؤسس في فرنسا موظفاً لا يراه أبداً.', alt: 'خمس طبقات لتركيبة ستارت-أب الجالية في 2027.' },
    timeline: { title: 'اثنا عشر شهراً، مع رمضان والصيف في مكانهما', unit: 'أشهر', items: [
      { label: 'المقابلات واختيار الشريك', note: 'الرحلة 1، نوفمبر-ديسمبر 2026', from: 0, to: 2 },
      { label: 'الشركة، العلامة، البنك، التاجر الإلكتروني', note: 'الملف في جانفي، البنك في الرحلة 2', from: 1, to: 5 },
      { label: 'المنتج: تأطير، نموذج، تطوير', note: 'الاستوديو يتقدم خلال رمضان', from: 1, to: 7 },
      { label: 'رمضان', note: 'فيفري-مارس: مبيعات B2B بطيئة، استخدام المستهلك مساءً', from: 3, to: 4 },
      { label: 'زبائن تجريبيون يدفعون', note: 'موقَّعون في الرحلة 2، مرافقون في أفريل-ماي', from: 4, to: 8 },
      { label: 'إطلاق الصيف', note: 'الرحلة 3، جويلية-أوت 2027', from: 8, to: 10, accent: true },
      { label: 'الدخول والمدينة الثانية', note: 'الرحلة 4، أكتوبر 2027', from: 10, to: 12 },
    ], caption: 'الشكل 4 · رمضان ليس فجوة في الجدول: هو وقت يطوّر فيه الاستوديو ويحضّر فيه المؤسس رحلة البنك.', alt: 'جدول زمني بالأشهر من نوفمبر 2026 إلى أكتوبر 2027.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      trips: { svg: steps({ title: t.trips.title, steps: t.trips.items, arrows: true, rtl }), caption: t.trips.caption, alt: t.trips.alt },
      where: { svg: matrix({ title: t.where.title, columns: t.where.columns, rows: t.where.rows, rtl }), caption: t.where.caption, alt: t.where.alt },
      setup: { svg: layers({ title: t.setup.title, layers: t.setup.layers, rtl }), caption: t.setup.caption, alt: t.setup.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 12, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
