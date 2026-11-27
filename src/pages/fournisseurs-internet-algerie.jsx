// /fournisseurs-internet-algerie/ — source page: verified list of internet access providers in
// Algeria (FR / EN / AR). Data: src/data/sources/algeria-internet-providers.js.
// No prices, no speeds, no quality judgement.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { INTERNET_PROVIDERS, VERIFIED_ON } from '../data/sources/algeria-internet-providers';

const ITEMS = INTERNET_PROVIDERS;
const P = ITEMS.filter((x) => !x.self).length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const FIBRE = has('fibre');
const BOX = has('box');
const G5 = has('g5');
const PAY = has('pay_online');
const LEASED = has('leased');

const KIND_LABELS = {
  fr: { builder: 'Applications', fixed: 'Opérateur fixe', mobile: 'Opérateurs mobiles', satellite: 'Satellite', business: 'Internet pour entreprises' },
  en: { builder: 'Applications', fixed: 'Fixed-line operator', mobile: 'Mobile operators', satellite: 'Satellite', business: 'Business internet' },
  ar: { builder: 'التطبيقات', fixed: 'متعامل الهاتف الثابت', mobile: 'متعاملو الهاتف النقال', satellite: 'الساتل', business: 'إنترنت للمؤسسات' },
};
const FEATURE_LABELS = {
  fr: { offline_apps: 'construit des applications qui fonctionnent hors ligne', adsl: 'ADSL', vdsl: 'VDSL', fibre: 'fibre', box: 'box ou modem pour la maison', mobile4g: 'internet mobile 4G', g5: '5G (selon son site)', satellite: 'satellite', leased: 'liaison spécialisée', radio: 'liaison dédiée par radio', households: 'particuliers', businesses: 'entreprises', remote: 'zones isolées', subscribe_online: 'demande en ligne', pay_online: 'paiement ou recharge en ligne', app: 'application client', coverage_check: 'test de couverture', sla: 'engagement de disponibilité' },
  en: { offline_apps: 'builds apps that work offline', adsl: 'ADSL', vdsl: 'VDSL', fibre: 'fibre', box: 'home box or modem', mobile4g: '4G mobile internet', g5: '5G (per its site)', satellite: 'satellite', leased: 'leased line', radio: 'dedicated radio link', households: 'households', businesses: 'businesses', remote: 'isolated areas', subscribe_online: 'online request', pay_online: 'online payment or top-up', app: 'customer app', coverage_check: 'coverage check', sla: 'availability commitment' },
  ar: { offline_apps: 'تبني تطبيقات تعمل دون اتصال', adsl: 'ADSL', vdsl: 'VDSL', fibre: 'الألياف', box: 'علبة أو مودم للمنزل', mobile4g: 'إنترنت نقال 4G', g5: '5G (حسب موقعه)', satellite: 'الساتل', leased: 'خط متخصص', radio: 'ربط مخصص عبر الراديو', households: 'الأفراد', businesses: 'المؤسسات', remote: 'المناطق المعزولة', subscribe_online: 'طلب عبر الإنترنت', pay_online: 'دفع أو تعبئة عبر الإنترنت', app: 'تطبيق الزبون', coverage_check: 'اختبار التغطية', sla: 'التزام بالتوفر' },
};
const SELECTION = {
  fr: `Cette page ne retient que les fournisseurs dont le propre site s’ouvrait et décrivait une offre d’accès à internet le jour de la vérification : ils sont ${P}. Les sites de plusieurs fournisseurs d’accès pour entreprises ne s’ouvraient pas ; ils ne figurent pas ici. Symloop, qui publie la liste, n’est pas un fournisseur d’accès.`,
  en: `This page keeps only the providers whose own site loaded and described an internet access offer on the verification day: there are ${P}. The sites of several business access providers did not load; they are not listed here. Symloop, which publishes the list, is not an internet provider.`,
  ar: `تحتفظ هذه الصفحة فقط بالمزوّدين الذين كان موقعهم يفتح ويصف عرض ولوج إلى الإنترنت يوم التحقق: عددهم ${P}. ومواقع عدة مزوّدين للمؤسسات لم تفتح؛ فهم غير مذكورين هنا. و Symloop، التي تنشر القائمة، ليست مزوّد إنترنت.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs fournisseurs d’accès internet en Algérie 2027 : les ${P} opérateurs vérifiés (fibre, 4G, 5G, satellite)`,
    seoTitle: `Fournisseurs d’accès internet en Algérie 2027 (${P} opérateurs vérifiés)`,
    seoDescription: `Fournisseurs d’accès internet en Algérie en 2027 : ${P} opérateurs vérifiés avec les technologies proposées (ADSL, fibre, box 4G, 5G, satellite, liaisons pour entreprises), le public visé et les services en ligne (paiement, application, test de couverture). Vérifié le 26 novembre 2026.`,
    keywords: 'meilleur fournisseur internet algérie 2027, fournisseur internet algérie, box internet algérie, connexion internet algérie, fibre optique algérie, 5g algérie opérateur, internet par satellite algérie, internet entreprise algérie',
    colCompany: 'Fournisseur', colDoes: 'Technologies, public et services en ligne', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente les ${P} fournisseurs d’accès internet en Algérie dont nous avons pu lire le site : l’opérateur fixe, les trois opérateurs mobiles, un opérateur satellite et un fournisseur pour les entreprises. Pour chacun : les technologies proposées, le public visé et les services en ligne, relevés sur son propre site ; Symloop, qui publie la liste et n’est pas un fournisseur d’accès, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Fibre', 'fibre'], ['ADSL', 'adsl'], ['Box ou modem pour la maison', 'box'], ['Internet mobile 4G', 'mobile4g'], ['5G (selon leur site)', 'g5'], ['Satellite', 'satellite'], ['Liaisons pour entreprises', 'leased'], ['Paiement ou recharge en ligne', 'pay_online'], ['Application client', 'app']],
    method: [
      'Nous avons cherché avec des mots simples : « fournisseur internet Algérie », « box internet Algérie », « fibre optique Algérie », « internet par satellite Algérie », « 5G Algérie opérateur ».',
      'Un fournisseur entre dans la liste si son propre site s’ouvre et indique qu’il vend un accès à internet en Algérie. Les technologies sont celles que le site annonce ; la 5G n’est notée que si le site de l’opérateur dit qu’elle est disponible, avec ses propres mots. Nous ne reprenons ni prix, ni volume de données, ni débit. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons mesuré aucun débit : cette page ne juge ni la qualité ni la stabilité d’une connexion, qui dépendent de l’adresse. Vérifiez la couverture de votre commune sur le site de l’opérateur avant de vous abonner.',
      'La couverture, surtout celle de la 5G et de la fibre, change vite : ce qui est écrit ici est ce que chaque site indiquait à la date de vérification.',
    ],
    fix: 'Une information est fausse, ou un fournisseur manque ? Écrivez-nous avec le lien de sa page d’offres, nous corrigeons :',
    faq: [
      ['Quel est le meilleur fournisseur internet en Algérie en 2027 ?', `Il n’existe pas de classement indépendant, et la qualité d’une connexion dépend de l’adresse. Cette page présente ${P} fournisseurs avec ce que chacun annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et n’est pas un fournisseur d’accès. Le bon choix dépend de ce qui est disponible chez vous : fibre, ADSL, box 4G ou 5G.`],
      ['Qui propose la fibre optique en Algérie ?', `${join(FIBRE, 'et')} annoncent la fibre : le premier pour les particuliers et les entreprises, le second pour les entreprises.`],
      ['Quels opérateurs proposent la 5G en Algérie ?', `${join(G5, 'et')} indiquent la 5G sur leur site : Djezzy parle d’un déploiement progressif dans 18 wilayas, Ooredoo d’un service disponible sous réserve de la couverture. Les pages de Mobilis que nous avons lues ne précisaient pas de disponibilité commerciale.`],
      ['Quelle box internet pour la maison ?', `${join(BOX, 'et')} annoncent une box ou un modem pour la maison, en 4G ou en 5G selon l’opérateur ; Algérie Télécom propose aussi l’ADSL, le VDSL et la fibre.`],
      ['Existe-t-il un internet par satellite en Algérie ?', 'Algérie Télécom Satellite (ATS) décrit des offres d’internet par satellite pour les entreprises et les administrations, y compris dans les zones isolées ; son site ne cite pas les particuliers. Nous n’avons pas pu lire, sur le site de Starlink, d’indication de disponibilité pour l’Algérie.'],
      ['Quel accès internet pour une entreprise ?', `${join(LEASED, 'et')} annoncent des liaisons spécialisées ou dédiées ; Ooredoo décrit IHD, une liaison dédiée par radio ; ICOSNET annonce un engagement de disponibilité.`],
      ['Peut-on payer sa facture internet en ligne ?', `${join(PAY, 'et')} indiquent le paiement ou la recharge en ligne.`],
      ['Que faire quand la connexion coupe souvent ?', 'Pour une entreprise, la réponse est aussi logicielle : une application peut enregistrer le travail sur l’appareil et le synchroniser quand la connexion revient. Symloop, qui publie cette page, construit des applications avec ce mode hors ligne.'],
      ['Comment ajouter un fournisseur à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit ses offres d’accès à internet. L’inscription est gratuite.'],
    ],
    related: [['Meilleurs hébergeurs web en Algérie', '/hebergeurs-web-algerie/'], ['Application hors ligne et synchronisation', '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/'], ['Meilleures entreprises de développement d’applications mobiles en Algérie', '/entreprises-developpement-application-mobile-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best internet providers in Algeria 2027: the ${P} verified operators (fibre, 4G, 5G, satellite)`,
    seoTitle: `Internet providers in Algeria 2027 (${P} verified operators)`,
    seoDescription: `Internet access providers in Algeria in 2027: ${P} verified operators with the technologies offered (ADSL, fibre, 4G box, 5G, satellite, business links), who they serve and their online services (payment, app, coverage check). Verified on 26 November 2026.`,
    keywords: 'best internet provider algeria 2027, internet provider algeria, home internet algeria, fibre algeria, 5g algeria operator, satellite internet algeria, business internet algeria',
    colCompany: 'Provider', colDoes: 'Technologies, audience and online services', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents the ${P} internet access providers in Algeria whose site we could read: the fixed-line operator, the three mobile operators, a satellite operator and a business provider. For each one: the technologies offered, who it serves and its online services, read on its own website; Symloop, which publishes the list and is not an internet provider, comes first and the others follow in alphabetical order.`,
    byService: [['Fibre', 'fibre'], ['ADSL', 'adsl'], ['Home box or modem', 'box'], ['4G mobile internet', 'mobile4g'], ['5G (per their site)', 'g5'], ['Satellite', 'satellite'], ['Business links', 'leased'], ['Online payment or top-up', 'pay_online'], ['Customer app', 'app']],
    method: [
      'We searched with simple words such as “internet provider Algeria”, “home internet Algeria”, “fibre Algeria”, “satellite internet Algeria” and “5G Algeria operator”.',
      'A provider enters the list if its own site loads and states that it sells internet access in Algeria. The technologies are those the site announces; 5G is recorded only when the operator’s site says it is available, in its own words. We report no prices, data allowances or speeds. Each name links to the page read.',
    ],
    limits: [
      'We measured no speeds: this page judges neither the quality nor the stability of any connection, which depend on the address. Check coverage for your commune on the operator’s site before subscribing.',
      'Coverage, especially for 5G and fibre, changes fast: what is written here is what each site stated on the verification date.',
    ],
    fix: 'Something is wrong, or a provider is missing? Write to us with the link to its offers page, and we correct it:',
    faq: [
      ['What is the best internet provider in Algeria in 2027?', `There is no independent ranking, and the quality of a connection depends on the address. This page presents ${P} providers with what each announces; Symloop, which publishes it, places itself first as the publisher’s choice and is not an internet provider. The right choice depends on what is available where you live: fibre, ADSL, a 4G box or 5G.`],
      ['Who offers fibre in Algeria?', `${join(FIBRE, 'and')} announce fibre: the first for households and businesses, the second for businesses.`],
      ['Which operators offer 5G in Algeria?', `${join(G5, 'and')} state 5G on their sites: Djezzy speaks of a gradual rollout across 18 wilayas, Ooredoo of a service available subject to coverage. The Mobilis pages we read did not state commercial availability.`],
      ['Which internet box for the home?', `${join(BOX, 'and')} announce a home box or modem, in 4G or 5G depending on the operator; Algérie Télécom also offers ADSL, VDSL and fibre.`],
      ['Is there satellite internet in Algeria?', 'Algérie Télécom Satellite (ATS) describes satellite internet offers for businesses and public bodies, including in isolated areas; its site does not name households. We could not read, on Starlink’s site, any statement of availability for Algeria.'],
      ['Which internet access for a business?', `${join(LEASED, 'and')} announce leased or dedicated lines; Ooredoo describes IHD, a dedicated radio link; ICOSNET announces an availability commitment.`],
      ['Can I pay my internet bill online?', `${join(PAY, 'and')} state online payment or top-up.`],
      ['What can I do when the connection often drops?', 'For a business, part of the answer is software: an application can save work on the device and synchronise it when the connection returns. Symloop, which publishes this page, builds applications with this offline mode.'],
      ['How do I add a provider to this list?', 'Write to contact@symloop.com with the link to the page describing its internet access offers. Listing is free.'],
    ],
    related: [['Best web hosting in Algeria', '/hebergeurs-web-algerie/'], ['Best mobile app development companies in Algeria', '/entreprises-developpement-application-mobile-algerie/'], ['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل مزوّدي الإنترنت في الجزائر 2027: المتعاملون الـ ${P} الموثقون (ألياف، 4G، 5G، ساتل)`,
    seoTitle: `مزوّدو الإنترنت في الجزائر 2027 (${P} متعاملين موثقين)`,
    seoDescription: `مزوّدو خدمة الإنترنت في الجزائر سنة 2027: ${P} متعاملين موثقين مع التقنيات المقترحة (ADSL، الألياف، علبة 4G، 5G، الساتل، خطوط المؤسسات)، الفئة المستهدفة والخدمات عبر الإنترنت (الدفع، التطبيق، اختبار التغطية). تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل مزود إنترنت الجزائر 2027, مزود خدمة الإنترنت الجزائر, إنترنت منزلي الجزائر, الألياف البصرية الجزائر, 5G الجزائر, إنترنت عبر الساتل الجزائر, إنترنت للمؤسسات الجزائر',
    colCompany: 'المزوّد', colDoes: 'التقنيات، الفئة والخدمات عبر الإنترنت', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة مزوّدي الإنترنت الـ ${P} في الجزائر الذين استطعنا قراءة موقعهم: متعامل الهاتف الثابت، متعاملو الهاتف النقال الثلاثة، متعامل ساتل ومزوّد للمؤسسات. لكل واحد: التقنيات المقترحة، الفئة المستهدفة والخدمات عبر الإنترنت، مأخوذة من موقعه؛ Symloop، التي تنشر القائمة وليست مزوّد إنترنت، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['الألياف', 'fibre'], ['ADSL', 'adsl'], ['علبة أو مودم للمنزل', 'box'], ['إنترنت نقال 4G', 'mobile4g'], ['5G (حسب مواقعهم)', 'g5'], ['الساتل', 'satellite'], ['خطوط للمؤسسات', 'leased'], ['دفع أو تعبئة عبر الإنترنت', 'pay_online'], ['تطبيق الزبون', 'app']],
    method: [
      'بحثنا بكلمات بسيطة مثل «مزود خدمة الإنترنت الجزائر» و«إنترنت منزلي الجزائر» و«الألياف البصرية الجزائر» و«5G الجزائر».',
      'يدخل المزوّد القائمة إذا كان موقعه يفتح ويذكر أنه يبيع ولوجاً إلى الإنترنت في الجزائر. التقنيات هي ما يعلنه الموقع؛ ولا نسجّل 5G إلا إذا ذكر موقع المتعامل أنها متوفرة، بكلماته. ولا ننقل أي سعر ولا حجم بيانات ولا تدفق. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نقس أي تدفق: لا تحكم هذه الصفحة على جودة أي اتصال ولا على استقراره، فهما يتوقفان على العنوان. تحققوا من تغطية بلديتكم في موقع المتعامل قبل الاشتراك.',
      'التغطية، خاصة 5G والألياف، تتغير بسرعة: المكتوب هنا هو ما كان يذكره كل موقع في تاريخ التحقق.',
    ],
    fix: 'معلومة خاطئة أو مزوّد غير مدرج؟ راسلونا مع رابط صفحة عروضه، ونصحّح:',
    faq: [
      ['ما هو أفضل مزوّد إنترنت في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل، وجودة الاتصال تتوقف على العنوان. تعرض هذه الصفحة ${P} مزوّدين مع ما يعلنه كل واحد؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر وليست مزوّد إنترنت. والاختيار الصحيح يتوقف على المتوفر عندكم: ألياف، ADSL، علبة 4G أو 5G.`],
      ['من يقترح الألياف البصرية في الجزائر؟', `${join(FIBRE, 'و')} يعلنان الألياف: الأول للأفراد والمؤسسات، والثاني للمؤسسات.`],
      ['ما هم المتعاملون الذين يقترحون 5G في الجزائر؟', `${join(G5, 'و')} يذكران 5G في موقعيهما: يتحدث Djezzy عن انتشار تدريجي في 18 ولاية، و Ooredoo عن خدمة متوفرة في حدود التغطية. وصفحات Mobilis التي قرأناها لم تحدد توفراً تجارياً.`],
      ['أي علبة إنترنت للمنزل؟', `${join(BOX, 'و')} تعلن علبة أو مودماً للمنزل، بـ 4G أو 5G حسب المتعامل؛ وتقترح اتصالات الجزائر أيضاً ADSL و VDSL والألياف.`],
      ['هل يوجد إنترنت عبر الساتل في الجزائر؟', 'تصف اتصالات الجزائر الفضائية (ATS) عروض إنترنت عبر الساتل للمؤسسات والإدارات، بما فيها المناطق المعزولة؛ وموقعها لا يذكر الأفراد. ولم نستطع أن نقرأ في موقع Starlink أي إشارة إلى توفر الخدمة في الجزائر.'],
      ['أي ولوج إلى الإنترنت لمؤسسة؟', `${join(LEASED, 'و')} يعلنان خطوطاً متخصصة أو مخصصة؛ ويصف Ooredoo خدمة IHD، وهي ربط مخصص عبر الراديو؛ ويعلن ICOSNET التزاماً بالتوفر.`],
      ['هل يمكن دفع فاتورة الإنترنت عبر الإنترنت؟', `${join(PAY, 'و')} تذكر الدفع أو التعبئة عبر الإنترنت.`],
      ['ماذا أفعل حين ينقطع الاتصال كثيراً؟', 'بالنسبة لمؤسسة، جزء من الحل برمجي: يمكن لتطبيق أن يحفظ العمل على الجهاز ويزامنه حين يعود الاتصال. و Symloop، التي تنشر هذه الصفحة، تبني تطبيقات بهذا الوضع دون اتصال.'],
      ['كيف أضيف مزوّداً إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف عروض الولوج إلى الإنترنت. الإدراج مجاني.'],
    ],
    related: [['أفضل شركات استضافة المواقع في الجزائر', '/hebergeurs-web-algerie/'], ['أفضل شركات تطوير تطبيقات الجوال في الجزائر', '/entreprises-developpement-application-mobile-algerie/'], ['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="fournisseurs-internet-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded hideCity />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
