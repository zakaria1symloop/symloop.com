import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'lancer-startup-tech-algerie-depuis-france-diaspora-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Guide fondateur · Diaspora', title: ['Lancer une startup tech', 'en Algérie', 'depuis la France.'], subtitle: 'Structure juridique, produit, équipe, calendrier : le parcours réel d’un fondateur de la diaspora en 2026.', left: { label: 'Paris', sub: 'UTC+1 · vous' }, right: { label: 'Alger · Sétif', sub: 'UTC+1 · votre équipe' }, note: 'Édition 2026' },
    options: { title: 'Trois façons de structurer le projet depuis la France', items: [
      { label: 'Valider avant de créer', sub: 'Vous développez depuis votre structure française et testez une bêta en Algérie. Rien à créer tant qu’il n’y a pas d’utilisateurs.' },
      { label: 'SARL ou EURL par procuration', sub: 'Notaire, CNRC, compte bancaire, sans vous déplacer. Comptez quatre à huit semaines et un capital en dinars.' },
      { label: 'Label startup', sub: 'Via startup.dz, une fois le produit démontrable. Exonérations fiscales et accès aux programmes d’accompagnement.' },
    ], caption: 'Figure 1 · Les trois options juridiques, de la moins engageante à la plus structurée.', alt: 'Trois options pour structurer une startup en Algérie depuis la France : valider avant de créer, SARL ou EURL par procuration, label startup.' },
    constraints: { title: 'Ce qu’une application doit respecter pour fonctionner en Algérie', layers: [
      { label: 'Paiement', items: [{ name: 'CIB et Edahabia via SATIM', sub: 'carte interbancaire et carte postale' }, { name: 'Paiement à la livraison', sub: 'majoritaire hors grandes villes' }] },
      { label: 'Livraison', items: [{ name: 'Yalidine', sub: 'suivi, tarif par wilaya' }, { name: 'ZR Express', sub: 'retours, COD' }, { name: 'Maystro', sub: 'dernier kilomètre' }] },
      { label: 'Réseau', items: [{ name: 'Mode dégradé hors connexion', sub: 'cache, reprise des actions' }, { name: 'Application légère', sub: '4G variable selon la wilaya' }] },
      { label: 'Identité', items: [{ name: 'Inscription par numéro de téléphone', sub: 'code SMS, pas d’email', accent: true }] },
      { label: 'Langues', items: [{ name: 'Français', sub: 'LTR' }, { name: 'Arabe', sub: 'RTL natif' }, { name: 'Anglais', sub: 'selon la cible' }] },
    ], caption: 'Figure 2 · Les cinq contraintes du marché algérien. Chacune est connue et résolue, mais seulement par des équipes qui les ont déjà livrées.', alt: 'Les cinq contraintes techniques d’une application pour le marché algérien : paiement CIB Edahabia et à la livraison, livraison Yalidine ZR Express Maystro, réseau instable, identité par SMS, trois langues dont l’arabe.' },
    team: { title: 'Choisir votre équipe technique', columns: ['Agence en France', 'Freelance', 'Équipe senior en Algérie'], rows: [
      { label: 'CIB, Edahabia, Yalidine déjà livrés en production', cells: [0, 1, 2] },
      { label: 'Même fuseau horaire, même langue', cells: [2, 1, 2] },
      { label: 'Propriété totale du code et des comptes', cells: [1, 1, 2] },
      { label: 'Continuité après le lancement', cells: [2, 0, 2] },
      { label: 'Facturation en euros, paiement par jalons', cells: [2, 1, 2] },
      { label: 'Délai réaliste, app avec paiement intégré', cells: ['4 à 6 mois', '5 à 9 mois', '3 à 4 mois'] },
    ], highlight: 2, legend: '●  acquis      ◐  variable      ○  rare', caption: 'Figure 3 · Lisez la première ligne d’abord : c’est elle qui décide du délai et du nombre d’inconnues.', alt: 'Comparaison agence en France, freelance et équipe senior en Algérie sur six critères : intégrations algériennes livrées, fuseau horaire, propriété du code, continuité, facturation en euros, délai.' },
    timeline: { title: 'De l’idée aux premiers utilisateurs payants', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'ateliers à distance, périmètre écrit', from: 0, to: 2 },
      { label: 'Design', note: 'maquettes FR et AR, validées sur téléphone', from: 2, to: 5 },
      { label: 'Développement', note: 'backend, iOS, Android, paiement, livraison', from: 5, to: 14 },
      { label: 'Tests et publication', note: 'vrais utilisateurs en Algérie, stores', from: 14, to: 16 },
      { label: 'Lancement et itération', note: 'premiers clients, deuxième version', from: 16, to: 24, accent: true },
    ], caption: 'Figure 4 · Seize semaines jusqu’aux stores, puis deux mois pilotés par l’usage réel.', alt: 'Calendrier en semaines : cadrage 0 à 2, design 2 à 5, développement 5 à 14, tests et publication 14 à 16, lancement et itération 16 à 24.' },
    mistakes: { title: 'Les cinq erreurs que nous voyons chaque mois', items: [
      { label: 'Tout construire avant de tester', sub: 'Six mois de développement, puis découverte que les utilisateurs veulent autre chose.' },
      { label: 'Ignorer le paiement à la livraison', sub: 'Encore la majorité des transactions hors d’Alger, Oran et Constantine.' },
      { label: 'Confier le projet à un cousin', sub: 'Les liens familiaux ne remplacent pas un contrat, des jalons et une équipe.' },
      { label: 'Ne pas posséder ses comptes', sub: 'Stores, domaine, serveurs et code à votre nom dès le premier jour.' },
      { label: 'Sous-estimer le marketing local', sub: 'Sans Facebook, TikTok et les groupes de quartier, une application ne décolle pas.' },
    ], caption: 'Figure 5 · Cinq erreurs, toutes évitables au moment du cadrage.', alt: 'Les cinq erreurs classiques des fondateurs de la diaspora : tout construire avant de tester, ignorer le paiement à la livraison, confier le projet à un proche, ne pas posséder ses comptes, sous-estimer le marketing local.' },
  },
  en: {
    cover: { eyebrow: 'Founder guide · Diaspora', title: ['Launching a tech startup', 'in Algeria', 'from France.'], subtitle: 'Legal structure, product, team, timeline: the real path of a diaspora founder in 2026.', left: { label: 'Paris', sub: 'UTC+1 · you' }, right: { label: 'Algiers · Sétif', sub: 'UTC+1 · your team' }, note: '2026 edition' },
    options: { title: 'Three ways to structure the project from France', items: [
      { label: 'Validate before incorporating', sub: 'Build from your French entity and test a beta in Algeria. Nothing to incorporate until there are users.' },
      { label: 'SARL or EURL by proxy', sub: 'Notary, CNRC registration, bank account, without travelling. Four to eight weeks and capital in dinars.' },
      { label: 'Startup label', sub: 'Through startup.dz once the product is demonstrable. Tax exemptions and access to support programmes.' },
    ], caption: 'Figure 1 · The three legal options, from the lightest to the most structured.', alt: 'Three options to structure a startup in Algeria from France: validate before incorporating, SARL or EURL by proxy, startup label.' },
    constraints: { title: 'What an app must respect to work in Algeria', layers: [
      { label: 'Payment', items: [{ name: 'CIB and Edahabia via SATIM', sub: 'interbank and postal cards' }, { name: 'Cash on delivery', sub: 'majority outside big cities' }] },
      { label: 'Delivery', items: [{ name: 'Yalidine', sub: 'tracking, per-wilaya pricing' }, { name: 'ZR Express', sub: 'returns, COD' }, { name: 'Maystro', sub: 'last mile' }] },
      { label: 'Network', items: [{ name: 'Offline-tolerant mode', sub: 'cache, retry actions' }, { name: 'Lightweight app', sub: '4G varies by wilaya' }] },
      { label: 'Identity', items: [{ name: 'Phone number sign-up', sub: 'SMS code, no email', accent: true }] },
      { label: 'Languages', items: [{ name: 'French', sub: 'LTR' }, { name: 'Arabic', sub: 'native RTL' }, { name: 'English', sub: 'depending on target' }] },
    ], caption: 'Figure 2 · The five constraints of the Algerian market. Each is known and solved, but only by teams that have shipped them.', alt: 'The five technical constraints of an app for the Algerian market: CIB Edahabia and cash on delivery, Yalidine ZR Express Maystro delivery, unstable network, SMS identity, three languages including Arabic.' },
    team: { title: 'Choosing your technical team', columns: ['Agency in France', 'Freelancer', 'Senior team in Algeria'], rows: [
      { label: 'CIB, Edahabia, Yalidine already shipped in production', cells: [0, 1, 2] },
      { label: 'Same time zone, same language', cells: [2, 1, 2] },
      { label: 'Full ownership of code and accounts', cells: [1, 1, 2] },
      { label: 'Continuity after launch', cells: [2, 0, 2] },
      { label: 'Invoicing in euros, milestone payments', cells: [2, 1, 2] },
      { label: 'Realistic timeline, app with payments', cells: ['4 to 6 months', '5 to 9 months', '3 to 4 months'] },
    ], highlight: 2, legend: '●  established      ◐  variable      ○  rare', caption: 'Figure 3 · Read the first row first: it decides the timeline and the number of unknowns.', alt: 'Comparison of a French agency, a freelancer and a senior team in Algeria on six criteria: Algerian integrations shipped, time zone, code ownership, continuity, euro invoicing, timeline.' },
    timeline: { title: 'From idea to first paying users', unit: 'weeks', items: [
      { label: 'Scoping', note: 'remote workshops, written scope', from: 0, to: 2 },
      { label: 'Design', note: 'FR and AR mockups, validated on a phone', from: 2, to: 5 },
      { label: 'Development', note: 'backend, iOS, Android, payments, delivery', from: 5, to: 14 },
      { label: 'Testing and release', note: 'real users in Algeria, app stores', from: 14, to: 16 },
      { label: 'Launch and iteration', note: 'first customers, second version', from: 16, to: 24, accent: true },
    ], caption: 'Figure 4 · Sixteen weeks to the stores, then two months driven by real usage.', alt: 'Timeline in weeks: scoping 0 to 2, design 2 to 5, development 5 to 14, testing and release 14 to 16, launch and iteration 16 to 24.' },
    mistakes: { title: 'The five mistakes we see every month', items: [
      { label: 'Building everything before testing', sub: 'Six months of development, then discovering users want something else.' },
      { label: 'Ignoring cash on delivery', sub: 'Still the majority of transactions outside Algiers, Oran and Constantine.' },
      { label: 'Handing the project to a cousin', sub: 'Family ties do not replace a contract, milestones and a team.' },
      { label: 'Not owning your accounts', sub: 'Stores, domain, servers and code in your name from day one.' },
      { label: 'Underestimating local marketing', sub: 'Without Facebook, TikTok and neighbourhood groups, an app does not take off.' },
    ], caption: 'Figure 5 · Five mistakes, all avoidable at scoping time.', alt: 'The five classic mistakes of diaspora founders: building before testing, ignoring cash on delivery, handing the project to a relative, not owning accounts, underestimating local marketing.' },
  },
  ar: {
    cover: { eyebrow: 'دليل المؤسس · الجالية', title: ['إطلاق شركة تقنية ناشئة', 'في الجزائر', 'انطلاقاً من فرنسا.'], subtitle: 'الهيكل القانوني، المنتج، الفريق، الجدول الزمني: المسار الحقيقي لمؤسس من الجالية في 2026.', left: { label: 'باريس', sub: 'أنت' }, right: { label: 'الجزائر · سطيف', sub: 'فريقك' }, note: 'إصدار 2026' },
    options: { title: 'ثلاث طرق لهيكلة المشروع من فرنسا', items: [
      { label: 'التحقق قبل التأسيس', sub: 'تطوّر من شركتك الفرنسية وتختبر نسخة تجريبية في الجزائر. لا شيء تؤسسه قبل وجود مستخدمين.' },
      { label: 'SARL أو EURL بالوكالة', sub: 'موثق، CNRC، حساب بنكي، دون السفر. أربعة إلى ثمانية أسابيع ورأس مال بالدينار.' },
      { label: 'علامة Startup', sub: 'عبر startup.dz بعد أن يصبح المنتج قابلاً للعرض. إعفاءات ضريبية وبرامج مرافقة.' },
    ], caption: 'الشكل 1 · الخيارات القانونية الثلاثة من الأخف إلى الأكثر هيكلة.', alt: 'ثلاثة خيارات لهيكلة شركة ناشئة في الجزائر من فرنسا.' },
    constraints: { title: 'ما يجب أن يحترمه التطبيق ليعمل في الجزائر', layers: [
      { label: 'الدفع', items: [{ name: 'CIB والذهبية عبر SATIM', sub: 'بطاقات بنكية وبريدية' }, { name: 'الدفع عند التسليم', sub: 'الأغلبية خارج المدن الكبرى' }] },
      { label: 'التوصيل', items: [{ name: 'Yalidine', sub: 'تتبع، تسعير حسب الولاية' }, { name: 'ZR Express', sub: 'إرجاع، COD' }, { name: 'Maystro', sub: 'الميل الأخير' }] },
      { label: 'الشبكة', items: [{ name: 'وضع يتحمل انقطاع الاتصال', sub: 'تخزين مؤقت، إعادة المحاولة' }, { name: 'تطبيق خفيف', sub: '4G تختلف حسب الولاية' }] },
      { label: 'الهوية', items: [{ name: 'التسجيل برقم الهاتف', sub: 'رمز SMS، بلا بريد إلكتروني', accent: true }] },
      { label: 'اللغات', items: [{ name: 'الفرنسية', sub: 'LTR' }, { name: 'العربية', sub: 'RTL أصلي' }, { name: 'الإنجليزية', sub: 'حسب الجمهور' }] },
    ], caption: 'الشكل 2 · القيود الخمسة للسوق الجزائرية. كلها معروفة ومحلولة، لكن فقط لدى الفرق التي سلّمتها فعلاً.', alt: 'القيود التقنية الخمسة لتطبيق موجه للسوق الجزائرية.' },
    team: { title: 'اختيار فريقك التقني', columns: ['وكالة في فرنسا', 'مستقل', 'فريق خبير في الجزائر'], rows: [
      { label: 'CIB والذهبية وYalidine مسلّمة في الإنتاج', cells: [0, 1, 2] },
      { label: 'نفس المنطقة الزمنية ونفس اللغة', cells: [2, 1, 2] },
      { label: 'ملكية كاملة للكود والحسابات', cells: [1, 1, 2] },
      { label: 'الاستمرارية بعد الإطلاق', cells: [2, 0, 2] },
      { label: 'فوترة باليورو ودفع حسب المراحل', cells: [2, 1, 2] },
      { label: 'المدة الواقعية لتطبيق بدفع مدمج', cells: ['4 إلى 6 أشهر', '5 إلى 9 أشهر', '3 إلى 4 أشهر'] },
    ], highlight: 2, legend: '●  متوفر      ◐  متغير      ○  نادر', caption: 'الشكل 3 · اقرأ السطر الأول أولاً: هو الذي يحدد المدة وعدد المجاهيل.', alt: 'مقارنة بين وكالة فرنسية ومستقل وفريق خبير في الجزائر على ستة معايير.', rtl: true },
    timeline: { title: 'من الفكرة إلى أول مستخدمين يدفعون', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'ورشات عن بعد، نطاق مكتوب', from: 0, to: 2 },
      { label: 'التصميم', note: 'نماذج بالفرنسية والعربية على الهاتف', from: 2, to: 5 },
      { label: 'التطوير', note: 'خلفية، iOS، Android، دفع، توصيل', from: 5, to: 14 },
      { label: 'الاختبار والنشر', note: 'مستخدمون حقيقيون في الجزائر، المتاجر', from: 14, to: 16 },
      { label: 'الإطلاق والتحسين', note: 'أول العملاء، النسخة الثانية', from: 16, to: 24, accent: true },
    ], caption: 'الشكل 4 · ستة عشر أسبوعاً حتى المتاجر، ثم شهران يقودهما الاستخدام الفعلي.', alt: 'جدول زمني بالأسابيع من التأطير إلى الإطلاق.' },
    mistakes: { title: 'الأخطاء الخمسة التي نراها كل شهر', items: [
      { label: 'بناء كل شيء قبل الاختبار', sub: 'ستة أشهر من التطوير ثم اكتشاف أن المستخدمين يريدون شيئاً آخر.' },
      { label: 'تجاهل الدفع عند التسليم', sub: 'ما زال أغلبية المعاملات خارج الجزائر ووهران وقسنطينة.' },
      { label: 'تسليم المشروع لقريب', sub: 'الروابط العائلية لا تعوّض العقد والمراحل والفريق.' },
      { label: 'عدم امتلاك حساباتك', sub: 'المتاجر والنطاق والخوادم والكود باسمك من اليوم الأول.' },
      { label: 'التقليل من التسويق المحلي', sub: 'بدون فيسبوك وتيك توك ومجموعات الحي لا ينطلق التطبيق.' },
    ], caption: 'الشكل 5 · خمسة أخطاء، كلها يمكن تجنبها في مرحلة التأطير.', alt: 'الأخطاء الخمسة الكلاسيكية لمؤسسي الجالية.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      options: { svg: steps({ title: t.options.title, steps: t.options.items, arrows: false, rtl }), caption: t.options.caption, alt: t.options.alt },
      constraints: { svg: layers({ title: t.constraints.title, layers: t.constraints.layers, rtl }), caption: t.constraints.caption, alt: t.constraints.alt },
      team: { svg: matrix({ title: t.team.title, columns: t.team.columns, rows: t.team.rows, highlight: t.team.highlight, legend: t.team.legend, rtl }), caption: t.team.caption, alt: t.team.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 24, tick: 4, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
      mistakes: { svg: steps({ title: t.mistakes.title, steps: t.mistakes.items, arrows: false, rtl }), caption: t.mistakes.caption, alt: t.mistakes.alt },
    },
  };
}
