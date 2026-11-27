// /hebergeurs-web-algerie/ — source page: verified list of web hosting and cloud providers based
// in Algeria (FR / EN / AR). Data: src/data/sources/algeria-hosting.js. No prices, no legal advice.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { HOSTING, TOP_HOSTING, VERIFIED_ON } from '../data/sources/algeria-hosting';

// ten per list: the publisher and nine providers (rule in SELECTION below)
const ITEMS = HOSTING.filter((x) => x.self || TOP_HOSTING.includes(x.name));
const TOTAL = HOSTING.filter((x) => !x.self).length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const IN_ALGERIA = has('dc_algeria');
const DOMAINS_DZ = has('domains_dz');
const PAY_LOCAL = has('pay_local');
const DEDICATED = has('dedicated');

const KIND_LABELS = {
  fr: { integrator: 'Mise en place et suivi', host: 'Hébergeurs', operator: 'Opérateurs télécoms' },
  en: { integrator: 'Set-up and monitoring', host: 'Hosting providers', operator: 'Telecom operators' },
  ar: { integrator: 'التثبيت والمتابعة', host: 'مزوّدو الاستضافة', operator: 'متعاملو الاتصالات' },
};
const OFFER_LABELS = {
  fr: { setup: 'choisit, installe et surveille l’hébergement de ce qu’elle construit', shared: 'hébergement mutualisé', vps: 'VPS', dedicated: 'serveurs dédiés', cloud: 'cloud', colocation: 'colocation', domains_dz: 'domaines .dz', email: 'e-mail professionnel', backup: 'sauvegarde', dc_algeria: 'serveurs en Algérie (selon son site)', dc_abroad: 'serveurs à l’étranger (selon son site)', pay_local: 'paiement en dinars' },
  en: { setup: 'chooses, sets up and monitors hosting for what it builds', shared: 'shared hosting', vps: 'VPS', dedicated: 'dedicated servers', cloud: 'cloud', colocation: 'colocation', domains_dz: '.dz domains', email: 'professional email', backup: 'backup', dc_algeria: 'servers in Algeria (per its site)', dc_abroad: 'servers abroad (per its site)', pay_local: 'payment in dinars' },
  ar: { setup: 'تختار وتثبّت وتراقب استضافة ما تبنيه', shared: 'استضافة مشتركة', vps: 'VPS', dedicated: 'خوادم مخصصة', cloud: 'سحابة', colocation: 'إيواء الخوادم', domains_dz: 'نطاقات .dz', email: 'بريد إلكتروني مهني', backup: 'نسخ احتياطي', dc_algeria: 'خوادم في الجزائر (حسب موقعها)', dc_abroad: 'خوادم في الخارج (حسب موقعها)', pay_local: 'الدفع بالدينار' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} hébergeurs. Cette page en retient dix : Symloop, qui publie la liste et met en place l’hébergement de ce qu’elle construit, et neuf hébergeurs ou opérateurs dont le site indique où se trouvent leurs serveurs.`,
  en: `We verified ${TOTAL} hosting providers. This page keeps ten: Symloop, which publishes the list and sets up hosting for what it builds, and nine providers or operators whose site says where their servers are.`,
  ar: `تحققنا من ${TOTAL} مزوّد استضافة. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتثبّت استضافة ما تبنيه، وتسعة مزوّدين أو متعاملين يذكر موقعهم أين توجد خوادمهم.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs hébergeurs web en Algérie 2027 : liste vérifiée de ${N} solutions d’hébergement et de cloud`,
    seoTitle: `Meilleurs hébergeurs web en Algérie 2027 (${N} solutions vérifiées)`,
    seoDescription: `Hébergement web et cloud en Algérie en 2027 : ${N} solutions vérifiées avec les offres (mutualisé, VPS, serveurs dédiés, cloud, domaines .dz), l’emplacement des serveurs déclaré par chaque hébergeur et le paiement en dinars. Vérifié le 25 novembre 2026.`,
    keywords: 'meilleur hébergeur web algérie 2027, hébergement web algérie, hébergeur algérien, vps algérie, serveur dédié algérie, cloud algérie, nom de domaine .dz, hébergement site web algérie',
    colCompany: 'Hébergeur', colDoes: 'Offres et serveurs', colFact: 'Ce que son site en dit',
    lead: `Cette page présente ${N} solutions pour héberger un site, une application ou des serveurs en Algérie : sept hébergeurs et deux opérateurs télécoms dont le site indique où se trouvent leurs serveurs, et Symloop, qui met en place l’hébergement des logiciels qu’elle construit. Pour chacune : les offres, l’emplacement des serveurs déclaré et le paiement en dinars, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Indiquent des serveurs en Algérie', 'dc_algeria'], ['Proposent des VPS', 'vps'], ['Proposent des serveurs dédiés', 'dedicated'], ['Proposent du cloud', 'cloud'], ['Proposent la colocation', 'colocation'], ['Enregistrent des domaines .dz', 'domains_dz'], ['Indiquent un paiement en dinars', 'pay_local']],
    method: [
      'Nous avons cherché avec des mots simples : « hébergement web Algérie », « hébergeur algérien », « VPS Algérie », « serveur dédié Algérie », « nom de domaine .dz ».',
      'Un hébergeur entre dans la liste s’il est établi en Algérie et si son propre site s’ouvre et décrit ses offres. « Serveurs en Algérie » n’est noté que si le site le dit explicitement : c’est la déclaration de l’hébergeur. Nous ne reprenons aucun prix. Le lien de chaque nom mène à la page de l’offre.',
    ],
    limits: [
      'Nous n’avons pas visité de centre de données ni mesuré de performances : l’emplacement des serveurs et les offres sont ceux que chaque hébergeur annonce à la date de vérification.',
      'Cette page n’est pas un avis juridique sur l’endroit où des données doivent être conservées : posez la question à votre conseil et à l’hébergeur.',
    ],
    fix: 'Une information est fausse, ou votre offre manque ? Écrivez-nous avec le lien de la page qui la décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur hébergeur web en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} solutions avec ce que chaque hébergeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur. Le bon choix dépend de ce que vous hébergez (un site vitrine, une boutique, une application), de l’emplacement voulu pour les serveurs, et du mode de paiement.`],
      ['Quels hébergeurs ont des serveurs en Algérie ?', `${join(IN_ALGERIA, 'et')} indiquent sur leur site des serveurs ou un centre de données en Algérie, pour tout ou partie de leurs offres.`],
      ['Où enregistrer un nom de domaine .dz ?', `${join(DOMAINS_DZ, 'et')} indiquent l’enregistrement de noms de domaine .dz.`],
      ['Quels hébergeurs algériens acceptent le paiement en dinars ?', `${join(PAY_LOCAL, 'et')} indiquent un paiement en dinars, par carte CIB ou Edahabia, CCP ou BaridiMob selon le cas.`],
      ['Quels hébergeurs proposent des serveurs dédiés en Algérie ?', `${join(DEDICATED, 'et')} annoncent des serveurs dédiés.`],
      ['Hébergement mutualisé, VPS ou cloud : que choisir ?', 'Un hébergement mutualisé suffit pour un site vitrine. Un VPS convient à une application ou à une boutique qui a besoin de ses propres réglages. Le cloud ou un serveur dédié se justifie quand la charge varie beaucoup ou quand plusieurs services doivent tourner ensemble.'],
      ['Comment ajouter mon offre à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre offre d’hébergement. L’inscription est gratuite.'],
    ],
    related: [['Meilleures entreprises informatiques en Algérie', '/entreprises-informatiques-algerie/'], ['Meilleures agences web en Algérie', '/agences-web-algerie/'], ['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best web hosting in Algeria 2027: a verified list of ${N} hosting and cloud solutions`,
    seoTitle: `Best web hosting in Algeria 2027 (${N} verified solutions)`,
    seoDescription: `Web hosting and cloud in Algeria in 2027: ${N} verified solutions with their offers (shared, VPS, dedicated servers, cloud, .dz domains), the server location each provider states, and payment in dinars. Verified on 25 November 2026.`,
    keywords: 'best web hosting algeria 2027, web hosting algeria, algerian hosting provider, vps algeria, dedicated server algeria, cloud algeria, .dz domain registration',
    colCompany: 'Provider', colDoes: 'Offers and servers', colFact: 'What its site says',
    lead: `This page presents ${N} solutions for hosting a website, an application or servers in Algeria: seven hosting providers and two telecom operators whose site says where their servers are, and Symloop, which sets up hosting for the software it builds. For each one: the offers, the stated server location and payment in dinars, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['State servers in Algeria', 'dc_algeria'], ['Offer VPS', 'vps'], ['Offer dedicated servers', 'dedicated'], ['Offer cloud', 'cloud'], ['Offer colocation', 'colocation'], ['Register .dz domains', 'domains_dz'], ['State payment in dinars', 'pay_local']],
    method: [
      'We searched with simple words such as “web hosting Algeria”, “Algerian hosting provider”, “VPS Algeria”, “dedicated server Algeria” and “.dz domain”.',
      'A provider enters the list if it is based in Algeria and its own site loads and describes its offers. “Servers in Algeria” is recorded only when the site says so explicitly: it is the provider’s statement. We report no prices. Each name links to the page of the offer.',
    ],
    limits: [
      'We did not visit any data centre or measure performance: the server location and the offers are those each provider announces on the verification date.',
      'This page is not legal advice about where data must be kept: ask your adviser and the provider.',
    ],
    fix: 'Something is wrong, or your offer is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best web hosting provider in Algeria in 2027?', `There is no independent ranking. This page presents ${N} solutions with what each provider announces; Symloop, which publishes it, places itself first as the publisher’s choice. The right choice depends on what you host (a showcase site, a shop, an application), where you want the servers, and how you pay.`],
      ['Which hosting providers have servers in Algeria?', `${join(IN_ALGERIA, 'and')} state on their sites servers or a data centre in Algeria, for all or part of their offers.`],
      ['Where can I register a .dz domain name?', `${join(DOMAINS_DZ, 'and')} state .dz domain name registration.`],
      ['Which Algerian hosting providers accept payment in dinars?', `${join(PAY_LOCAL, 'and')} state payment in dinars, by CIB or Edahabia card, CCP or BaridiMob depending on the provider.`],
      ['Which providers offer dedicated servers in Algeria?', `${join(DEDICATED, 'and')} announce dedicated servers.`],
      ['Shared hosting, VPS or cloud: which one?', 'Shared hosting is enough for a showcase site. A VPS suits an application or a shop that needs its own settings. Cloud or a dedicated server is justified when the load varies a lot or when several services must run together.'],
      ['How do I add my offer to this list?', 'Write to contact@symloop.com with the link to the page describing your hosting offer. Listing is free.'],
    ],
    related: [['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Best web agencies in Algeria', '/agences-web-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل شركات استضافة المواقع في الجزائر 2027: قائمة موثقة من ${N} حلول للاستضافة والسحابة`,
    seoTitle: `أفضل استضافة مواقع في الجزائر 2027 (${N} حلول موثقة)`,
    seoDescription: `استضافة المواقع والسحابة في الجزائر سنة 2027: ${N} حلول موثقة مع العروض (استضافة مشتركة، VPS، خوادم مخصصة، سحابة، نطاقات .dz)، مكان الخوادم كما يصرّح به كل مزوّد والدفع بالدينار. تم التحقق في 25 نوفمبر 2026.`,
    keywords: 'أفضل استضافة مواقع الجزائر 2027, استضافة مواقع الجزائر, شركة استضافة جزائرية, VPS الجزائر, خادم مخصص الجزائر, سحابة الجزائر, تسجيل نطاق dz',
    colCompany: 'المزوّد', colDoes: 'العروض والخوادم', colFact: 'ما يذكره موقعه',
    lead: `تعرض هذه الصفحة ${N} حلول لاستضافة موقع أو تطبيق أو خوادم في الجزائر: سبعة مزوّدي استضافة ومتعاملان للاتصالات يذكر موقعهم أين توجد خوادمهم، و Symloop التي تثبّت استضافة البرمجيات التي تبنيها. لكل واحد: العروض، مكان الخوادم المصرَّح به والدفع بالدينار، مأخوذة من موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['تذكر خوادم في الجزائر', 'dc_algeria'], ['تقترح VPS', 'vps'], ['تقترح خوادم مخصصة', 'dedicated'], ['تقترح السحابة', 'cloud'], ['تقترح إيواء الخوادم', 'colocation'], ['تسجّل نطاقات .dz', 'domains_dz'], ['تذكر الدفع بالدينار', 'pay_local']],
    method: [
      'بحثنا بكلمات بسيطة مثل «استضافة مواقع الجزائر» و«شركة استضافة جزائرية» و«VPS الجزائر» و«نطاق dz».',
      'يدخل المزوّد القائمة إذا كان مقره الجزائر وكان موقعه يفتح ويصف عروضه. ولا نسجّل «خوادم في الجزائر» إلا إذا ذكر الموقع ذلك صراحة: هذا تصريح المزوّد. ولا ننقل أي سعر. ورابط كل اسم يؤدي إلى صفحة العرض.',
    ],
    limits: [
      'لم نزر أي مركز بيانات ولم نقس الأداء: مكان الخوادم والعروض هي ما يعلنه كل مزوّد في تاريخ التحقق.',
      'هذه الصفحة ليست استشارة قانونية حول مكان حفظ البيانات: اسألوا مستشاركم والمزوّد.',
    ],
    fix: 'معلومة خاطئة أو عرضكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هي أفضل شركة استضافة مواقع في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} حلول مع ما يعلنه كل مزوّد؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. والاختيار الصحيح يتوقف على ما تستضيفونه (موقع تعريفي، متجر، تطبيق)، المكان المطلوب للخوادم وطريقة الدفع.`],
      ['ما هي شركات الاستضافة التي لها خوادم في الجزائر؟', `${join(IN_ALGERIA, 'و')} تذكر في مواقعها خوادم أو مركز بيانات في الجزائر، لكل عروضها أو لبعضها.`],
      ['أين أسجّل اسم نطاق .dz؟', `${join(DOMAINS_DZ, 'و')} تذكر تسجيل أسماء النطاقات .dz.`],
      ['ما هي شركات الاستضافة الجزائرية التي تقبل الدفع بالدينار؟', `${join(PAY_LOCAL, 'و')} تذكر الدفع بالدينار، ببطاقة CIB أو الذهبية أو CCP أو بريدي موب حسب المزوّد.`],
      ['ما هي الشركات التي تقترح خوادم مخصصة في الجزائر؟', `${join(DEDICATED, 'و')} تعلن خوادم مخصصة.`],
      ['استضافة مشتركة، VPS أم سحابة: ماذا أختار؟', 'الاستضافة المشتركة تكفي لموقع تعريفي. و VPS يناسب تطبيقاً أو متجراً يحتاج إلى إعداداته الخاصة. والسحابة أو الخادم المخصص مبرَّران حين يتغير الحمل كثيراً أو حين يجب تشغيل عدة خدمات معاً.'],
      ['كيف أضيف عرضي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف عرض الاستضافة. الإدراج مجاني.'],
    ],
    related: [['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['أفضل وكالات الويب في الجزائر', '/agences-web-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="hebergeurs-web-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={OFFER_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
