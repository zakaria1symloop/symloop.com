import { cover, steps, matrix, stats, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'label-startup-algerie-2026-conditions-dossier-avantages';

const T = {
  fr: {
    cover: { eyebrow: 'Guide fondateur · Label startup', title: ['Le label startup', 'en Algérie :', 'un produit d’abord.'], subtitle: 'Conditions, dossier, avantages fiscaux, délais, renouvellement, et l’ordre qui marche : construire, puis labelliser.', left: { label: 'Une idée', sub: 'ne se labellise pas' }, right: { label: 'Un produit démontrable', sub: 'se labellise en semaines' }, note: 'Édition 2026' },
    criteria: { title: 'Les conditions d’éligibilité, et ce qu’elles veulent dire pour vous', columns: ['Exigence', 'À vérifier dans votre cas'], rows: [
      { label: 'Société de droit algérien', cells: ['SARL, EURL, SPA ou équivalent, immatriculée au CNRC', 'Fondateur à l’étranger : création par procuration possible'] },
      { label: 'Âge de la société', cells: ['Moins de huit ans', 'Date d’immatriculation, pas date de l’idée'] },
      { label: 'Modèle innovant', cells: ['Produit, service ou modèle d’affaires innovant', 'Un prototype ou un produit démontrable, pas un pitch'] },
      { label: 'Taille', cells: ['Au plus 250 employés', 'Rarement un obstacle au départ'] },
      { label: 'Capital', cells: ['Au moins 50 % détenu par des personnes physiques, des fonds agréés ou des startups labellisées', 'Attention aux montages avec une société étrangère majoritaire'] },
      { label: 'Chiffre d’affaires', cells: ['Sous un plafond fixé par le comité national', 'Le plafond n’est pas dans le décret : vérifiez la valeur en vigueur'] },
    ], caption: 'Figure 1 · Critères rapportés par les sources publiques, à vérifier sur startup.dz et au Journal officiel avant de déposer.', alt: 'Les conditions d’éligibilité au label startup en Algérie : société de droit algérien de moins de huit ans, modèle innovant, au plus 250 employés, capital détenu à 50 % au moins par des personnes physiques ou fonds agréés, chiffre d’affaires sous un plafond fixé par le comité.' },
    process: { title: 'Le parcours, du produit au label', items: [
      { label: 'Un produit démontrable', sub: 'Une application en test, un prototype qui tourne, des premiers utilisateurs. C’est la pièce que le comité regarde en premier.' },
      { label: 'La société', sub: 'Création au CNRC, par procuration si vous êtes à l’étranger. Capital conforme à la règle des 50 %.' },
      { label: 'Le dossier sur startup.dz', sub: 'Compte, formulaire, pièces de la société, présentation du produit et du modèle, preuves d’innovation.' },
      { label: 'Le comité national', sub: 'Instruction, questions éventuelles, décision. Préparez une démonstration, pas un discours.' },
      { label: 'Label pour quatre ans', sub: 'Avantages à compter de la date d’obtention. Renouvelable une fois sous conditions.', accent: true },
    ], caption: 'Figure 2 · L’ordre compte : le label se demande avec un produit. Ceux qui déposent avec une idée attendent, puis recommencent.', alt: 'Le parcours vers le label startup en Algérie : produit démontrable, création de la société, dossier sur startup.dz, comité national, label pour quatre ans renouvelable.' },
    benefits: { title: 'Ce que le label apporte, d’après les textes cités par les sources publiques', items: [
      { value: '4 ans', label: 'd’exonération IRG, IBS ou IFU à compter de la date du label', accent: true },
      { value: '+2 ans', label: 'en cas de renouvellement du label' },
      { value: 'TVA', label: 'exonération rapportée sur les équipements du projet, droits de douane réduits' },
      { value: '4 ans', label: 'de validité du label, renouvelable une fois' },
    ], caption: 'Figure 3 · Les montants et les articles de loi évoluent avec chaque loi de finances. Faites confirmer par un expert-comptable avant d’en dépendre.', alt: 'Les avantages du label startup en Algérie rapportés par les sources : quatre ans d’exonération IRG IBS IFU, deux ans de plus au renouvellement, exonération de TVA sur les équipements, label valable quatre ans renouvelable une fois.' },
    timeline: { title: 'Construire d’abord, labelliser ensuite : le calendrier réaliste', unit: 'semaines', items: [
      { label: 'Cadrage et développement du produit', note: 'une première version démontrable, de vrais utilisateurs', from: 0, to: 14 },
      { label: 'Création de la société', note: 'en parallèle, par procuration si besoin', from: 6, to: 12 },
      { label: 'Préparation du dossier', note: 'pièces, présentation, démonstration', from: 12, to: 16 },
      { label: 'Dépôt et instruction', note: 'startup.dz, comité national, questions', from: 16, to: 24 },
      { label: 'Label et avantages', note: 'exonérations à compter de la date d’obtention', from: 24, to: 28, accent: true },
    ], caption: 'Figure 4 · Six mois de l’idée au label, parce que le produit se construit pendant que la société se crée. Les délais d’instruction varient.', alt: 'Calendrier en semaines : développement du produit 0 à 14, création de la société 6 à 12, préparation du dossier 12 à 16, dépôt et instruction 16 à 24, label 24 à 28.' },
  },
  en: {
    cover: { eyebrow: 'Founder guide · Startup label', title: ['The startup label', 'in Algeria:', 'a product first.'], subtitle: 'Conditions, file, tax benefits, timing, renewal, and the order that works: build, then get labelled.', left: { label: 'An idea', sub: 'cannot be labelled' }, right: { label: 'A demonstrable product', sub: 'gets labelled in weeks' }, note: '2026 edition' },
    criteria: { title: 'Eligibility conditions, and what they mean for you', columns: ['Requirement', 'To check in your case'], rows: [
      { label: 'Company under Algerian law', cells: ['SARL, EURL, SPA or equivalent, registered at the CNRC', 'Founder abroad: incorporation by proxy is possible'] },
      { label: 'Company age', cells: ['Under eight years', 'Registration date, not the date of the idea'] },
      { label: 'Innovative model', cells: ['Innovative product, service or business model', 'A prototype or demonstrable product, not a pitch'] },
      { label: 'Size', cells: ['At most 250 employees', 'Rarely an obstacle at the start'] },
      { label: 'Capital', cells: ['At least 50% held by natural persons, approved funds or labelled startups', 'Beware of structures with a majority foreign company'] },
      { label: 'Turnover', cells: ['Under a cap set by the national committee', 'The cap is not in the decree: check the value in force'] },
    ], caption: 'Figure 1 · Criteria as reported by public sources, to be checked on startup.dz and in the Official Journal before filing.', alt: 'Eligibility conditions for the startup label in Algeria: Algerian-law company under eight years old, innovative model, at most 250 employees, at least 50% of capital held by natural persons or approved funds, turnover under a cap set by the committee.' },
    process: { title: 'The path, from product to label', items: [
      { label: 'A demonstrable product', sub: 'An app in testing, a running prototype, first users. It is the piece the committee looks at first.' },
      { label: 'The company', sub: 'Incorporation at the CNRC, by proxy if you are abroad. Capital compliant with the 50% rule.' },
      { label: 'The file on startup.dz', sub: 'Account, form, company documents, product and model presentation, proof of innovation.' },
      { label: 'The national committee', sub: 'Review, possible questions, decision. Prepare a demonstration, not a speech.' },
      { label: 'Label for four years', sub: 'Benefits from the date obtained. Renewable once under conditions.', accent: true },
    ], caption: 'Figure 2 · Order matters: the label is requested with a product. Those who file with an idea wait, then start over.', alt: 'The path to the startup label in Algeria: demonstrable product, company incorporation, file on startup.dz, national committee, four-year renewable label.' },
    benefits: { title: 'What the label brings, according to the texts cited by public sources', items: [
      { value: '4 years', label: 'of IRG, IBS or IFU exemption from the label date', accent: true },
      { value: '+2 years', label: 'if the label is renewed' },
      { value: 'VAT', label: 'reported exemption on project equipment, reduced customs duties' },
      { value: '4 years', label: 'of label validity, renewable once' },
    ], caption: 'Figure 3 · Amounts and legal articles change with each finance act. Have them confirmed by an accountant before depending on them.', alt: 'Benefits of the startup label in Algeria as reported by sources: four years of IRG IBS IFU exemption, two more years on renewal, VAT exemption on equipment, label valid four years renewable once.' },
    timeline: { title: 'Build first, label after: the realistic timeline', unit: 'weeks', items: [
      { label: 'Scoping and product development', note: 'a demonstrable first version, real users', from: 0, to: 14 },
      { label: 'Company incorporation', note: 'in parallel, by proxy if needed', from: 6, to: 12 },
      { label: 'File preparation', note: 'documents, presentation, demonstration', from: 12, to: 16 },
      { label: 'Filing and review', note: 'startup.dz, national committee, questions', from: 16, to: 24 },
      { label: 'Label and benefits', note: 'exemptions from the date obtained', from: 24, to: 28, accent: true },
    ], caption: 'Figure 4 · Six months from idea to label, because the product is built while the company is created. Review times vary.', alt: 'Timeline in weeks: product development 0 to 14, company incorporation 6 to 12, file preparation 12 to 16, filing and review 16 to 24, label 24 to 28.' },
  },
  ar: {
    cover: { eyebrow: 'دليل المؤسس · علامة Startup', title: ['علامة Startup', 'في الجزائر:', 'المنتج أولاً.'], subtitle: 'الشروط، الملف، المزايا الضريبية، الآجال، التجديد، والترتيب الذي ينجح: ابنِ ثم احصل على العلامة.', left: { label: 'فكرة', sub: 'لا تُمنح علامة' }, right: { label: 'منتج قابل للعرض', sub: 'يُمنح العلامة في أسابيع' }, note: 'إصدار 2026' },
    criteria: { title: 'شروط الأهلية، وما تعنيه بالنسبة لك', columns: ['المتطلب', 'ما يجب التحقق منه في حالتك'], rows: [
      { label: 'شركة خاضعة للقانون الجزائري', cells: ['SARL أو EURL أو SPA أو ما يعادلها، مسجلة في CNRC', 'مؤسس في الخارج: التأسيس بالوكالة ممكن'] },
      { label: 'عمر الشركة', cells: ['أقل من ثماني سنوات', 'تاريخ التسجيل لا تاريخ الفكرة'] },
      { label: 'نموذج مبتكر', cells: ['منتج أو خدمة أو نموذج أعمال مبتكر', 'نموذج أولي أو منتج قابل للعرض، لا عرض تقديمي'] },
      { label: 'الحجم', cells: ['250 موظفاً على الأكثر', 'نادراً ما يكون عائقاً في البداية'] },
      { label: 'رأس المال', cells: ['50% على الأقل بحوزة أشخاص طبيعيين أو صناديق معتمدة أو شركات ناشئة موسومة', 'انتبه للتركيبات بشركة أجنبية مهيمنة'] },
      { label: 'رقم الأعمال', cells: ['تحت سقف تحدده اللجنة الوطنية', 'السقف ليس في المرسوم: تحقق من القيمة السارية'] },
    ], caption: 'الشكل 1 · معايير كما تنقلها المصادر العلنية، يجب التحقق منها على startup.dz وفي الجريدة الرسمية قبل الإيداع.', alt: 'شروط الأهلية لعلامة Startup في الجزائر.' },
    process: { title: 'المسار، من المنتج إلى العلامة', items: [
      { label: 'منتج قابل للعرض', sub: 'تطبيق قيد الاختبار، نموذج أولي يعمل، أول المستخدمين. هذه القطعة التي تنظر إليها اللجنة أولاً.' },
      { label: 'الشركة', sub: 'التأسيس في CNRC، بالوكالة إن كنت في الخارج. رأس مال مطابق لقاعدة 50%.' },
      { label: 'الملف على startup.dz', sub: 'حساب، استمارة، وثائق الشركة، عرض المنتج والنموذج، أدلة الابتكار.' },
      { label: 'اللجنة الوطنية', sub: 'دراسة، أسئلة محتملة، قرار. حضّر عرضاً عملياً لا خطاباً.' },
      { label: 'علامة لأربع سنوات', sub: 'مزايا من تاريخ الحصول. قابلة للتجديد مرة واحدة بشروط.', accent: true },
    ], caption: 'الشكل 2 · الترتيب مهم: تُطلب العلامة بمنتج. من يودع بفكرة ينتظر ثم يعيد.', alt: 'المسار نحو علامة Startup في الجزائر.' },
    benefits: { title: 'ما تمنحه العلامة، حسب النصوص التي تنقلها المصادر العلنية', items: [
      { value: '4 سنوات', label: 'إعفاء من IRG أو IBS أو IFU من تاريخ العلامة', accent: true },
      { value: '+2 سنة', label: 'عند تجديد العلامة' },
      { value: 'TVA', label: 'إعفاء منقول على تجهيزات المشروع، رسوم جمركية مخفّضة' },
      { value: '4 سنوات', label: 'صلاحية العلامة، قابلة للتجديد مرة' },
    ], caption: 'الشكل 3 · تتغير المبالغ ومواد القانون مع كل قانون مالية. اطلب تأكيد محاسب خبير قبل الاعتماد عليها.', alt: 'مزايا علامة Startup في الجزائر كما تنقلها المصادر.' },
    timeline: { title: 'ابنِ أولاً، ثم احصل على العلامة: الجدول الواقعي', unit: 'أسابيع', items: [
      { label: 'تأطير وتطوير المنتج', note: 'نسخة أولى قابلة للعرض، مستخدمون حقيقيون', from: 0, to: 14 },
      { label: 'تأسيس الشركة', note: 'بالتوازي، بالوكالة عند الحاجة', from: 6, to: 12 },
      { label: 'تحضير الملف', note: 'وثائق، عرض، عرض عملي', from: 12, to: 16 },
      { label: 'الإيداع والدراسة', note: 'startup.dz، اللجنة الوطنية، أسئلة', from: 16, to: 24 },
      { label: 'العلامة والمزايا', note: 'إعفاءات من تاريخ الحصول', from: 24, to: 28, accent: true },
    ], caption: 'الشكل 4 · ستة أشهر من الفكرة إلى العلامة لأن المنتج يُبنى بينما تُؤسَّس الشركة. آجال الدراسة تختلف.', alt: 'جدول زمني بالأسابيع.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      criteria: { svg: matrix({ title: t.criteria.title, columns: t.criteria.columns, rows: t.criteria.rows, rtl }), caption: t.criteria.caption, alt: t.criteria.alt },
      process: { svg: steps({ title: t.process.title, steps: t.process.items, arrows: true, rtl }), caption: t.process.caption, alt: t.process.alt },
      benefits: { svg: stats({ title: t.benefits.title, items: t.benefits.items, rtl }), caption: t.benefits.caption, alt: t.benefits.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 28, tick: 4, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
