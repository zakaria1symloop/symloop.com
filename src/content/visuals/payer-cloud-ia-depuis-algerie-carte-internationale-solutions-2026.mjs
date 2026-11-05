import { cover, steps, layers, matrix } from '../../lib/visuals/index.mjs';

export const slug = 'payer-cloud-ia-depuis-algerie-carte-internationale-solutions-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Paiement international', title: ['Payer le cloud et l’IA', 'depuis l’Algérie', 'quand la carte est refusée.'], subtitle: 'AWS, Google Cloud, OpenAI : six options, ce qu’elles valent, ce qui est à vérifier, et l’architecture qui réduit le problème à sa plus petite taille.', left: { label: 'Carte CIB · Edahabia', sub: 'refusée à l’étranger' }, right: { label: 'Votre produit', sub: 'tourne quand même' }, note: 'Algérie · 2026' },
    options: { title: 'Six façons de payer un service cloud ou IA depuis l’Algérie', columns: ['Pour qui', 'Limite principale', 'À vérifier'], rows: [
      { label: 'Carte internationale d’une banque algérienne, adossée à un compte devises', cells: ['Particulier ou entreprise ayant des devises légales', 'Il faut alimenter le compte en devises', 'Conditions de votre banque'] },
      { label: 'Allocation voyage sur carte internationale', cells: ['Voyageurs', 'Prévue pour le voyage, pas pour un abonnement', 'Instruction Banque d’Algérie 07-2026'] },
      { label: 'Compte devises d’entreprise alimenté par vos exportations', cells: ['Société qui facture des clients à l’étranger', 'Demande des revenus en devises et une banque qui suit', 'Part des recettes d’exportation conservable en devises'] },
      { label: 'Revendeur ou partenaire local facturant en dinars', cells: ['Entreprises, écoles, administrations', 'Catalogue limité, marge du revendeur', 'Existence d’un partenaire pour le service voulu'] },
      { label: 'Carte virtuelle d’une fintech étrangère', cells: ['Freelances, étudiants', 'Zone grise, comptes fermés sans préavis', 'Légalité au regard du contrôle des changes'] },
      { label: 'Héberger en Algérie et utiliser des modèles ouverts', cells: ['Produits qui doivent tourner quoi qu’il arrive', 'Capacité GPU locale, compétences', 'Rien : c’est la seule option sans devises'] },
    ], highlight: -1, caption: 'Figure 1 · Aucune option n’est parfaite. La dernière est la seule qui ne dépend ni d’une banque ni d’un intermédiaire.', alt: 'Six façons de payer un service cloud ou IA depuis l’Algérie : carte internationale adossée à un compte devises, allocation voyage, compte devises d’entreprise exportatrice, revendeur local en dinars, carte virtuelle de fintech, hébergement local avec modèles ouverts.' },
    decision: { title: 'La décision en quatre questions', items: [
      { label: 'Avez-vous des revenus en devises ?', sub: 'Clients à l’étranger, salaire ou transferts légaux. Si oui, le compte devises et la carte internationale sont la voie normale.' },
      { label: 'Êtes-vous une entreprise ou un particulier ?', sub: 'Une entreprise exportatrice a des droits que le particulier n’a pas. Une société algérienne cliente peut aussi passer par un revendeur local.' },
      { label: 'Le service a-t-il un revendeur en Algérie ?', sub: 'Bureautique, messagerie, certains clouds et outils de sécurité se facturent en dinars via des partenaires. L’IA grand public, rarement.' },
      { label: 'Pouvez-vous l’héberger ici ?', sub: 'Pour un produit, souvent oui : serveurs en Algérie, modèles ouverts, API étrangère seulement en secours.', accent: true },
    ], caption: 'Figure 2 · Répondez dans l’ordre. La plupart des fondateurs découvrent que la quatrième question règle quatre-vingts pour cent du problème.', alt: 'Quatre questions pour choisir comment payer le cloud depuis l’Algérie : revenus en devises, entreprise ou particulier, revendeur local, hébergement en Algérie.' },
    architecture: { title: 'L’architecture qui réduit la dépendance au paiement étranger', layers: [
      { label: 'Produit', items: [{ name: 'Application et site', sub: 'hébergés chez un fournisseur algérien, payés en dinars' }, { name: 'Base de données et fichiers', sub: 'en Algérie, conforme loi 18-07' }] },
      { label: 'IA', items: [{ name: 'Modèles ouverts auto-hébergés', sub: 'Llama, Mistral, Qwen, Whisper sur GPU en Algérie', accent: true }, { name: 'API étrangère en secours', sub: 'seulement pour ce que le modèle local ne sait pas faire' }] },
      { label: 'Services', items: [{ name: 'SMS, paiement, cartes', sub: 'opérateurs et SATIM, en dinars' }, { name: 'Email transactionnel', sub: 'serveur local ou revendeur' }] },
      { label: 'Ce qui reste en devises', items: [{ name: 'Nom de domaine, comptes stores, une API', sub: 'quelques dizaines de dollars par mois, pas des milliers' }] },
    ], caption: 'Figure 3 · L’objectif n’est pas zéro devise. C’est de ramener le besoin à un montant qu’une carte internationale ordinaire couvre.', alt: 'Architecture réduisant la dépendance au paiement étranger : hébergement en Algérie payé en dinars, modèles d’IA ouverts auto-hébergés avec API étrangère en secours, SMS et paiement locaux, seuls le domaine, les stores et une API restant en devises.' },
  },
  en: {
    cover: { eyebrow: 'Problem · International payment', title: ['Paying for cloud and AI', 'from Algeria', 'when the card is declined.'], subtitle: 'AWS, Google Cloud, OpenAI: six options, what they are worth, what to check, and the architecture that shrinks the problem to its smallest size.', left: { label: 'CIB · Edahabia card', sub: 'declined abroad' }, right: { label: 'Your product', sub: 'runs anyway' }, note: 'Algeria · 2026' },
    options: { title: 'Six ways to pay for a cloud or AI service from Algeria', columns: ['For whom', 'Main limit', 'To check'], rows: [
      { label: 'International card from an Algerian bank, backed by a foreign currency account', cells: ['Individual or company with legal foreign currency', 'The account must be funded in foreign currency', 'Your bank’s conditions'] },
      { label: 'Travel allowance on an international card', cells: ['Travellers', 'Meant for travel, not for a subscription', 'Bank of Algeria instruction 07-2026'] },
      { label: 'Company foreign currency account funded by your exports', cells: ['Company invoicing clients abroad', 'Requires foreign revenue and a bank that follows', 'Share of export receipts that can be kept in currency'] },
      { label: 'Local reseller or partner invoicing in dinars', cells: ['Companies, schools, administrations', 'Limited catalogue, reseller margin', 'Whether a partner exists for the service you need'] },
      { label: 'Virtual card from a foreign fintech', cells: ['Freelancers, students', 'Grey zone, accounts closed without notice', 'Legality under exchange control'] },
      { label: 'Host in Algeria and use open-weight models', cells: ['Products that must run no matter what', 'Local GPU capacity, skills', 'Nothing: the only option without foreign currency'] },
    ], highlight: -1, caption: 'Figure 1 · No option is perfect. The last one is the only one that depends on neither a bank nor an intermediary.', alt: 'Six ways to pay for a cloud or AI service from Algeria: international card backed by a foreign currency account, travel allowance, exporting company account, local reseller in dinars, fintech virtual card, local hosting with open-weight models.' },
    decision: { title: 'The decision in four questions', items: [
      { label: 'Do you have foreign currency income?', sub: 'Clients abroad, salary or legal transfers. If yes, the foreign currency account and international card are the normal path.' },
      { label: 'Are you a company or an individual?', sub: 'An exporting company has rights an individual does not. An Algerian client company can also go through a local reseller.' },
      { label: 'Does the service have a reseller in Algeria?', sub: 'Office suites, email, some clouds and security tools are invoiced in dinars through partners. Consumer AI, rarely.' },
      { label: 'Can you host it here?', sub: 'For a product, often yes: servers in Algeria, open-weight models, foreign API only as a fallback.', accent: true },
    ], caption: 'Figure 2 · Answer in order. Most founders discover that the fourth question solves eighty percent of the problem.', alt: 'Four questions to decide how to pay for cloud from Algeria: foreign income, company or individual, local reseller, hosting in Algeria.' },
    architecture: { title: 'The architecture that reduces dependence on foreign payment', layers: [
      { label: 'Product', items: [{ name: 'App and website', sub: 'hosted with an Algerian provider, paid in dinars' }, { name: 'Database and files', sub: 'in Algeria, Law 18-07 compliant' }] },
      { label: 'AI', items: [{ name: 'Self-hosted open-weight models', sub: 'Llama, Mistral, Qwen, Whisper on GPUs in Algeria', accent: true }, { name: 'Foreign API as fallback', sub: 'only for what the local model cannot do' }] },
      { label: 'Services', items: [{ name: 'SMS, payment, maps', sub: 'carriers and SATIM, in dinars' }, { name: 'Transactional email', sub: 'local server or reseller' }] },
      { label: 'What stays in foreign currency', items: [{ name: 'Domain name, store accounts, one API', sub: 'tens of dollars a month, not thousands' }] },
    ], caption: 'Figure 3 · The goal is not zero foreign currency. It is to bring the need down to an amount an ordinary international card covers.', alt: 'Architecture reducing dependence on foreign payment: hosting in Algeria paid in dinars, self-hosted open-weight AI models with foreign API fallback, local SMS and payment, only domain, stores and one API left in foreign currency.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · الدفع الدولي', title: ['دفع السحابة والذكاء الاصطناعي', 'من الجزائر', 'عندما تُرفض البطاقة.'], subtitle: 'AWS وGoogle Cloud وOpenAI: ستة خيارات، قيمتها، ما يجب التحقق منه، والبنية التي تقلّص المشكلة إلى أصغر حجم.', left: { label: 'بطاقة CIB · الذهبية', sub: 'مرفوضة في الخارج' }, right: { label: 'منتجك', sub: 'يعمل رغم ذلك' }, note: 'الجزائر · 2026' },
    options: { title: 'ست طرق لدفع خدمة سحابية أو ذكاء اصطناعي من الجزائر', columns: ['لمن', 'الحد الرئيسي', 'ما يجب التحقق منه'], rows: [
      { label: 'بطاقة دولية من بنك جزائري مرتبطة بحساب بالعملة الصعبة', cells: ['فرد أو شركة لديها عملة صعبة قانونية', 'يجب تمويل الحساب بالعملة الصعبة', 'شروط بنكك'] },
      { label: 'منحة السفر على بطاقة دولية', cells: ['المسافرون', 'مخصصة للسفر لا للاشتراك', 'تعليمة بنك الجزائر 07-2026'] },
      { label: 'حساب شركة بالعملة الصعبة ممول من صادراتك', cells: ['شركة تفوتر عملاء في الخارج', 'يتطلب إيرادات بالعملة الصعبة وبنكاً متجاوباً', 'نسبة عائدات التصدير القابلة للاحتفاظ بها'] },
      { label: 'موزّع أو شريك محلي يفوتر بالدينار', cells: ['شركات، مدارس، إدارات', 'كتالوج محدود، هامش الموزّع', 'وجود شريك للخدمة المطلوبة'] },
      { label: 'بطاقة افتراضية من فينتك أجنبية', cells: ['مستقلون، طلبة', 'منطقة رمادية، حسابات تُغلق دون إشعار', 'الشرعية إزاء رقابة الصرف'] },
      { label: 'الاستضافة في الجزائر واستعمال نماذج مفتوحة', cells: ['منتجات يجب أن تعمل مهما حدث', 'قدرة GPU محلية، كفاءات', 'لا شيء: الخيار الوحيد بلا عملة صعبة'] },
    ], highlight: -1, caption: 'الشكل 1 · لا خيار مثالي. الأخير هو الوحيد الذي لا يعتمد على بنك ولا وسيط.', alt: 'ست طرق لدفع خدمة سحابية أو ذكاء اصطناعي من الجزائر.' },
    decision: { title: 'القرار في أربعة أسئلة', items: [
      { label: 'هل لديك إيرادات بالعملة الصعبة؟', sub: 'عملاء في الخارج، راتب أو تحويلات قانونية. إن نعم، فالحساب بالعملة الصعبة والبطاقة الدولية هما الطريق الطبيعي.' },
      { label: 'هل أنت شركة أم فرد؟', sub: 'الشركة المصدّرة لها حقوق لا يملكها الفرد. ويمكن لشركة جزائرية عميلة المرور عبر موزّع محلي.' },
      { label: 'هل للخدمة موزّع في الجزائر؟', sub: 'المكتبيات والبريد وبعض السحابات وأدوات الأمن تُفوتر بالدينار عبر شركاء. الذكاء الاصطناعي الاستهلاكي نادراً.' },
      { label: 'هل يمكنك استضافتها هنا؟', sub: 'لمنتج، غالباً نعم: خوادم في الجزائر، نماذج مفتوحة، واجهة أجنبية احتياطاً فقط.', accent: true },
    ], caption: 'الشكل 2 · أجب بالترتيب. يكتشف أغلب المؤسسين أن السؤال الرابع يحل ثمانين في المئة من المشكلة.', alt: 'أربعة أسئلة لاختيار كيفية دفع السحابة من الجزائر.' },
    architecture: { title: 'البنية التي تقلّل الاعتماد على الدفع الأجنبي', layers: [
      { label: 'المنتج', items: [{ name: 'التطبيق والموقع', sub: 'مستضافان لدى مزوّد جزائري، مدفوعان بالدينار' }, { name: 'قاعدة البيانات والملفات', sub: 'في الجزائر، مطابقة للقانون 18-07' }] },
      { label: 'الذكاء الاصطناعي', items: [{ name: 'نماذج مفتوحة مستضافة ذاتياً', sub: 'Llama وMistral وQwen وWhisper على GPU في الجزائر', accent: true }, { name: 'واجهة أجنبية احتياطاً', sub: 'فقط لما لا يستطيعه النموذج المحلي' }] },
      { label: 'الخدمات', items: [{ name: 'SMS، دفع، خرائط', sub: 'المشغّلون وSATIM، بالدينار' }, { name: 'بريد المعاملات', sub: 'خادم محلي أو موزّع' }] },
      { label: 'ما يبقى بالعملة الصعبة', items: [{ name: 'اسم النطاق، حسابات المتاجر، واجهة واحدة', sub: 'عشرات الدولارات شهرياً لا الآلاف' }] },
    ], caption: 'الشكل 3 · الهدف ليس صفر عملة صعبة، بل خفض الحاجة إلى مبلغ تغطيه بطاقة دولية عادية.', alt: 'بنية تقلّل الاعتماد على الدفع الأجنبي.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      options: { svg: matrix({ title: t.options.title, columns: t.options.columns, rows: t.options.rows, rtl }), caption: t.options.caption, alt: t.options.alt },
      decision: { svg: steps({ title: t.decision.title, steps: t.decision.items, arrows: true, rtl }), caption: t.decision.caption, alt: t.decision.alt },
      architecture: { svg: layers({ title: t.architecture.title, layers: t.architecture.layers, rtl }), caption: t.architecture.caption, alt: t.architecture.alt },
    },
  };
}
