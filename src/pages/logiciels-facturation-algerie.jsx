// /logiciels-facturation-algerie/ — source page: verified list of invoicing software in Algeria
// (FR / EN / AR). Data: src/data/sources/algeria-invoicing-software.js.
// No prices, no statement of any tax or invoicing rule.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { INVOICING, TOP_INVOICING, VERIFIED_ON } from '../data/sources/algeria-invoicing-software';

const ITEMS = INVOICING.filter((x) => x.self || TOP_INVOICING.includes(x.name));
const OTHERS = INVOICING.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const TRIAL = has('trial');
const ONLINE = ITEMS.filter((x) => (x.platforms || []).some((p) => p === 'web' || p === 'cloud')).map((x) => x.name);
const ANDROID = ITEMS.filter((x) => (x.platforms || []).includes('android')).map((x) => x.name);
const OFFLINE = has('offline');
const CREDIT = has('credit_notes');
const DELIVERY = has('delivery_notes');
const TAX = has('tax_mentioned');
const SIMPLE = [...OTHERS.filter((x) => x.focus === 'invoicing' && !x.services.includes('stock')).map((x) => x.name)];

const KIND_LABELS = {
  fr: { builder: 'Sur mesure', management: 'Gestion commerciale avec facturation', invoicing: 'Outils de facturation', payment: 'Paiement avec factures' },
  en: { builder: 'Custom-built', management: 'Commercial management with invoicing', invoicing: 'Invoicing tools', payment: 'Payment with invoices' },
  ar: { builder: 'على المقاس', management: 'تسيير تجاري مع الفوترة', invoicing: 'أدوات الفوترة', payment: 'الدفع مع الفواتير' },
};
const FEATURE_LABELS = {
  fr: { custom: 'du devis à la facture sans ressaisie, relié au reste', quotes: 'devis ou pro forma', invoices: 'factures', delivery_notes: 'bons de livraison', credit_notes: 'avoirs', payments: 'suivi des paiements', stock: 'stock', multi_company: 'plusieurs sociétés', pdf: 'PDF et impression', mobile: 'sur téléphone', reports: 'statistiques', e_payment: 'paiement en ligne', offline: 'sans connexion', trial: 'gratuit ou à l’essai', ids_mentioned: 'NIF, NIS, RC, AI mentionnés', tax_mentioned: 'TVA ou timbre mentionnés' },
  en: { custom: 'quote to invoice without re-typing, connected to the rest', quotes: 'quotes or pro formas', invoices: 'invoices', delivery_notes: 'delivery notes', credit_notes: 'credit notes', payments: 'payment tracking', stock: 'stock', multi_company: 'several companies', pdf: 'PDF and printing', mobile: 'on the phone', reports: 'statistics', e_payment: 'online payment', offline: 'offline', trial: 'free or on trial', ids_mentioned: 'NIF, NIS, RC, AI mentioned', tax_mentioned: 'VAT or stamp duty mentioned' },
  ar: { custom: 'من عرض السعر إلى الفاتورة دون إعادة إدخال، مربوط بالباقي', quotes: 'عروض الأسعار', invoices: 'الفواتير', delivery_notes: 'وصولات التسليم', credit_notes: 'الفواتير التصحيحية', payments: 'متابعة المدفوعات', stock: 'المخزون', multi_company: 'عدة شركات', pdf: 'PDF والطباعة', mobile: 'على الهاتف', reports: 'الإحصائيات', e_payment: 'الدفع عبر الإنترنت', offline: 'دون اتصال', trial: 'مجاني أو تجريبي', ids_mentioned: 'NIF و NIS و RC و AI مذكورة', tax_mentioned: 'الرسم أو الطابع مذكوران' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels. Cette page en retient dix : Symloop, qui publie la liste et construit du sur-mesure, et neuf logiciels dont la page décrit les devis et les factures et indique un lien avec l’Algérie (adresse, dinars ou conception pour l’Algérie). Deux solutions de paiement qui émettent des factures sont citées dans les questions.`,
  en: `We verified ${TOTAL} products. This page keeps ten: Symloop, which publishes the list and builds custom software, and nine products whose page describes quotes and invoices and states a link to Algeria (address, dinars or design for Algeria). Two payment solutions that issue invoices are named in the questions.`,
  ar: `تحققنا من ${TOTAL} برنامجاً. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني على المقاس، وتسعة برامج تصف صفحتها عروض الأسعار والفواتير وتذكر صلة بالجزائر (عنوان، دينار أو تصميم للجزائر). وحلّا دفع يُصدران فواتير مذكوران في الأسئلة.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs logiciels de facturation en Algérie 2027 : liste vérifiée de ${N} solutions`,
    seoTitle: `Logiciels de facturation en Algérie 2027 : ${N} solutions vérifiées (gratuit, en ligne, Windows)`,
    seoDescription: `Logiciels de facturation en Algérie en 2027 : ${N} solutions vérifiées avec les documents (devis, factures, bons de livraison, avoirs), le suivi des paiements, l’accès (Windows, en ligne, Android) et la version gratuite ou l’essai annoncés. Vérifié le 26 novembre 2026.`,
    keywords: 'meilleur logiciel facturation algérie 2027, logiciel facturation algérie, logiciel de facturation gratuit algérie, télécharger logiciel de facturation algérie gratuit, logiciel devis facture algérie, application facturation algérie, برنامج الفوترة الجزائر',
    colCompany: 'Logiciel', colDoes: 'Documents, accès et paiement', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} solutions pour faire ses devis et ses factures en Algérie : sept logiciels de gestion commerciale avec facturation, deux outils de facturation, et Symloop, qui construit des logiciels sur mesure. Pour chacun : les documents qu’il produit, le suivi des paiements, l’accès et la version gratuite ou l’essai annoncés, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Devis ou pro forma', 'quotes'], ['Bons de livraison', 'delivery_notes'], ['Avoirs', 'credit_notes'], ['Suivi des paiements', 'payments'], ['Avec le stock', 'stock'], ['Sans connexion', 'offline'], ['Gratuit ou à l’essai (selon le site)', 'trial'], ['TVA ou droit de timbre mentionnés', 'tax_mentioned']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel facturation Algérie », « logiciel de facturation gratuit Algérie », « logiciel devis facture Algérie », « application facturation Algérie ».',
      'Un logiciel entre dans la liste si sa page décrit la création de devis et de factures, si elle s’ouvre et si elle indique un lien avec l’Algérie. Quand un site mentionne le NIF, le NIS, le RC, la TVA ou le droit de timbre, nous le signalons seulement. Nous ne reprenons aucun prix. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons installé ni testé aucun de ces logiciels : ce qui est indiqué est ce que chaque éditeur annonce. Faites une facture d’essai avec vos propres informations avant de choisir.',
      'Cette page ne dit pas si une facture est conforme à une règle fiscale : posez la question à l’éditeur et à votre comptable.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel de facturation en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur. Le bon choix dépend de ce que vous facturez, du nombre de postes, du besoin de stock et du mode d’accès.`],
      ['Existe-t-il un logiciel de facturation gratuit en Algérie ?', `${join(TRIAL, 'et')} indiquent sur leur site une version gratuite, un essai ou une démo à télécharger. Les conditions changent d’un éditeur à l’autre : lisez-les sur la page du logiciel.`],
      ['Quels logiciels de facturation fonctionnent en ligne ?', `${join(ONLINE, 'et')} indiquent un accès en ligne ou par navigateur.`],
      ['Quel logiciel de facturation sur Android ?', `${join(ANDROID, 'et')} indiquent une application Android.`],
      ['Quels logiciels fonctionnent sans connexion ?', `${join(OFFLINE, 'et')} indiquent un fonctionnement sans connexion.`],
      ['Quels logiciels font les bons de livraison et les avoirs ?', `${join(DELIVERY, 'et')} annoncent les bons de livraison ; ${join(CREDIT, 'et')} annoncent les avoirs.`],
      ['Quels logiciels mentionnent la TVA ou le droit de timbre ?', `${join(TAX, 'et')} mentionnent la TVA ou le droit de timbre sur leur site. Cette page n’explique pas ces règles : demandez à votre comptable.`],
      ['Je veux seulement faire des devis et des factures, sans gestion de stock : lequel ?', `${join(SIMPLE, 'et')} se présentent d’abord comme des outils de facturation et n’annoncent pas de gestion de stock.`],
      ['Peut-on se faire payer en ligne une facture en Algérie ?', 'SlickPay indique la création de factures envoyées par lien et payées par carte, et Guiddini présente eFawtara, des factures numériques avec lien de paiement. Notre page sur les solutions de paiement en ligne en Algérie en présente d’autres.'],
      ['Logiciel prêt à l’emploi ou logiciel sur mesure ?', 'Un logiciel de facturation prêt à l’emploi convient quand vos devis et vos factures suivent un modèle courant. Le sur-mesure se justifie quand les prix se calculent selon vos propres règles (remises, contrats, projets), ou quand la facture doit partir d’un autre outil sans ressaisie.'],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Du devis à la facture sans ressaisie', '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/'], ['Meilleurs logiciels de gestion de stock en Algérie', '/logiciels-gestion-de-stock-algerie/'], ['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/']],
  },
  en: {
    title: `Best invoicing software in Algeria 2027: a verified list of ${N} solutions`,
    seoTitle: `Invoicing software in Algeria 2027: ${N} verified solutions (free, online, Windows)`,
    seoDescription: `Invoicing software in Algeria in 2027: ${N} verified solutions with the documents (quotes, invoices, delivery notes, credit notes), payment tracking, access (Windows, online, Android) and the free version or trial each states. Verified on 26 November 2026.`,
    keywords: 'best invoicing software algeria 2027, invoicing software algeria, free invoicing software algeria, quote invoice software algeria, invoicing app algeria',
    colCompany: 'Software', colDoes: 'Documents, access and payment', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents ${N} solutions for issuing quotes and invoices in Algeria: seven commercial management products with invoicing, two invoicing tools, and Symloop, which builds custom software. For each one: the documents it produces, payment tracking, access and the free version or trial it states, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Quotes or pro formas', 'quotes'], ['Delivery notes', 'delivery_notes'], ['Credit notes', 'credit_notes'], ['Payment tracking', 'payments'], ['With stock', 'stock'], ['Offline', 'offline'], ['Free or on trial (per the site)', 'trial'], ['VAT or stamp duty mentioned', 'tax_mentioned']],
    method: [
      'We searched with simple words such as “invoicing software Algeria”, “free invoicing software Algeria” and “quote invoice software Algeria”.',
      'A product enters the list if its page describes creating quotes and invoices, loads, and states a link to Algeria. When a site mentions the NIF, NIS, RC, VAT or stamp duty, we only report it. We report no prices. Each name links to the page read.',
    ],
    limits: [
      'We installed and tested none of these products: what is shown is what each publisher announces. Make a test invoice with your own details before choosing.',
      'This page does not say whether an invoice complies with any tax rule: ask the publisher and your accountant.',
    ],
    fix: 'Something is wrong, or your product is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best invoicing software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice. The right choice depends on what you invoice, the number of users, whether you need stock and the access mode.`],
      ['Is there free invoicing software in Algeria?', `${join(TRIAL, 'and')} state a free version, a trial or a downloadable demo on their sites. Conditions differ from one publisher to another: read them on the product’s page.`],
      ['Which invoicing software works online?', `${join(ONLINE, 'and')} state online or browser access.`],
      ['Which invoicing software on Android?', `${join(ANDROID, 'and')} state an Android app.`],
      ['Which products work offline?', `${join(OFFLINE, 'and')} state that they work without a connection.`],
      ['Which products issue delivery notes and credit notes?', `${join(DELIVERY, 'and')} announce delivery notes; ${join(CREDIT, 'and')} announce credit notes.`],
      ['Which products mention VAT or stamp duty?', `${join(TAX, 'and')} mention VAT or stamp duty on their sites. This page does not explain those rules: ask your accountant.`],
      ['I only want quotes and invoices, without stock: which one?', `${join(SIMPLE, 'and')} present themselves first as invoicing tools and announce no stock management.`],
      ['Can an invoice be paid online in Algeria?', 'SlickPay states invoices sent by link and paid by card, and Guiddini presents eFawtara, digital invoices with a payment link. Our page on online payment solutions in Algeria presents others.'],
      ['Ready-made software or custom software?', 'Ready-made invoicing software suits quotes and invoices that follow a common model. Custom software is justified when prices follow your own rules (discounts, contracts, projects), or when the invoice must come from another tool without re-typing.'],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Best stock management software in Algeria', '/logiciels-gestion-de-stock-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل برامج الفوترة في الجزائر 2027: قائمة موثقة من ${N} حلول`,
    seoTitle: `برامج الفوترة في الجزائر 2027: ${N} حلول موثقة (مجاني، عبر الإنترنت، ويندوز)`,
    seoDescription: `برامج الفوترة في الجزائر سنة 2027: ${N} حلول موثقة مع الوثائق (عروض الأسعار، الفواتير، وصولات التسليم، الفواتير التصحيحية)، متابعة المدفوعات، طريقة الاستعمال (ويندوز، عبر الإنترنت، أندرويد) والنسخة المجانية أو التجريبية المعلنة. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل برنامج فوترة الجزائر 2027, برنامج الفوترة الجزائر, برنامج فوترة مجاني الجزائر, برنامج عروض الأسعار والفواتير الجزائر, تطبيق الفوترة الجزائر',
    colCompany: 'البرنامج', colDoes: 'الوثائق، الاستعمال والدفع', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} حلول لإعداد عروض الأسعار والفواتير في الجزائر: سبعة برامج تسيير تجاري مع الفوترة، أداتا فوترة، و Symloop التي تبني برمجيات على المقاس. لكل واحد: الوثائق التي يُصدرها، متابعة المدفوعات، طريقة الاستعمال والنسخة المجانية أو التجريبية المعلنة، مأخوذة من موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['عروض الأسعار', 'quotes'], ['وصولات التسليم', 'delivery_notes'], ['الفواتير التصحيحية', 'credit_notes'], ['متابعة المدفوعات', 'payments'], ['مع المخزون', 'stock'], ['دون اتصال', 'offline'], ['مجاني أو تجريبي (حسب الموقع)', 'trial'], ['الرسم أو حق الطابع مذكوران', 'tax_mentioned']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج الفوترة الجزائر» و«برنامج فوترة مجاني الجزائر» و«برنامج عروض الأسعار والفواتير الجزائر».',
      'يدخل البرنامج القائمة إذا كانت صفحته تصف إنشاء عروض الأسعار والفواتير، تفتح وتذكر صلة بالجزائر. وحين يذكر موقع NIF أو NIS أو RC أو الرسم على القيمة المضافة أو حق الطابع نشير إلى ذلك فقط. ولا ننقل أي سعر. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نثبّت ولم نختبر أياً من هذه البرامج: المذكور هو ما يعلنه كل ناشر. أعدّوا فاتورة تجريبية بمعلوماتكم قبل الاختيار.',
      'لا تذكر هذه الصفحة هل الفاتورة مطابقة لقاعدة جبائية: اسألوا الناشر ومحاسبكم.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج فوترة في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. والاختيار الصحيح يتوقف على ما تفوترونه، عدد المستخدمين، الحاجة إلى المخزون وطريقة الاستعمال.`],
      ['هل يوجد برنامج فوترة مجاني في الجزائر؟', `${join(TRIAL, 'و')} تذكر في مواقعها نسخة مجانية، تجربة أو نسخة تجريبية للتحميل. والشروط تختلف من ناشر إلى آخر: اقرؤوها في صفحة البرنامج.`],
      ['ما هي برامج الفوترة التي تعمل عبر الإنترنت؟', `${join(ONLINE, 'و')} تذكر استعمالاً عبر الإنترنت أو المتصفح.`],
      ['أي برنامج فوترة على أندرويد؟', `${join(ANDROID, 'و')} تذكر تطبيق أندرويد.`],
      ['ما هي البرامج التي تعمل دون اتصال؟', `${join(OFFLINE, 'و')} تذكر العمل دون اتصال.`],
      ['ما هي البرامج التي تُصدر وصولات التسليم والفواتير التصحيحية؟', `${join(DELIVERY, 'و')} تعلن وصولات التسليم؛ و${join(CREDIT, 'و')} تعلن الفواتير التصحيحية.`],
      ['ما هي البرامج التي تذكر الرسم على القيمة المضافة أو حق الطابع؟', `${join(TAX, 'و')} تذكرها في مواقعها. ولا تشرح هذه الصفحة هذه القواعد: اسألوا محاسبكم.`],
      ['أريد فقط عروض أسعار وفواتير دون مخزون: أيّها؟', `${join(SIMPLE, 'و')} تقدّم نفسها أولاً كأدوات فوترة ولا تعلن تسيير المخزون.`],
      ['هل يمكن دفع فاتورة عبر الإنترنت في الجزائر؟', 'يذكر SlickPay فواتير تُرسل برابط وتُدفع بالبطاقة، ويعرض Guiddini خدمة eFawtara، فواتير رقمية برابط دفع. وصفحتنا عن حلول الدفع الإلكتروني في الجزائر تعرض غيرها.'],
      ['برنامج جاهز أم برنامج على المقاس؟', 'برنامج الفوترة الجاهز يناسب عروض الأسعار والفواتير التي تتبع نموذجاً شائعاً. والبرنامج على المقاس مبرَّر حين تُحسب الأسعار حسب قواعدكم (تخفيضات، عقود، مشاريع)، أو حين يجب أن تنطلق الفاتورة من أداة أخرى دون إعادة إدخال.'],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['أفضل برامج تسيير المخزون في الجزائر', '/logiciels-gestion-de-stock-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-facturation-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
