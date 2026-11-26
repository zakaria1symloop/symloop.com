// /data-centers-algerie/ — source page: verified list of data centers located in Algeria that
// sell services to companies (FR / EN / AR). Data: src/data/sources/algeria-data-centers.js.
// No prices, capacities, investments or customer names; no law explained.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { DATA_CENTERS, TOP_DATA_CENTERS, VERIFIED_ON } from '../data/sources/algeria-data-centers';

const ITEMS = DATA_CENTERS.filter((x) => x.self || TOP_DATA_CENTERS.includes(x.name));
const OTHERS = DATA_CENTERS.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const COLO = has('colocation');
const HOUSING = has('housing');
const DEDICATED = has('dedicated');
const VPS = has('vps');
const PUBLIC = has('public_cloud');
const PRIVATE = has('private_cloud');
const BACKUP = has('backup');
const SECURITY = has('security');
const LINKS = has('connectivity');
const WHERE = OTHERS.filter((x) => x.city).map((x) => `${x.name} (${x.city})`);

const KIND_LABELS = {
  fr: { builder: 'Éditeur de la liste (n’exploite pas de data center)', telecom: 'Opérateurs télécoms', isp_cloud: 'Fournisseurs internet et cloud' },
  en: { builder: 'Publisher of the list (runs no data center)', telecom: 'Telecom operators', isp_cloud: 'Internet and cloud providers' },
  ar: { builder: 'ناشر القائمة (لا يشغّل مركز بيانات)', telecom: 'متعاملو الاتصالات', isp_cloud: 'مزوّدو الإنترنت والسحابة' },
};
const FEATURE_LABELS = {
  fr: { setup: 'choix, installation, sauvegarde et surveillance de l’hébergement', colocation: 'colocation', housing: 'hébergement de serveurs', dedicated: 'serveurs dédiés', vps: 'VPS', private_cloud: 'cloud privé', public_cloud: 'cloud public', storage: 'stockage', backup: 'sauvegarde', connectivity: 'liaisons dédiées', managed: 'services gérés', security: 'sécurité (pare-feu, anti-DDoS)', tier_stated: 'niveau Tier annoncé' },
  en: { setup: 'choosing, setting up, backing up and monitoring hosting', colocation: 'colocation', housing: 'server housing', dedicated: 'dedicated servers', vps: 'VPS', private_cloud: 'private cloud', public_cloud: 'public cloud', storage: 'storage', backup: 'backup', connectivity: 'dedicated links', managed: 'managed services', security: 'security (firewall, anti-DDoS)', tier_stated: 'Tier level stated' },
  ar: { setup: 'اختيار الاستضافة وتثبيتها ونسخها ومراقبتها', colocation: 'الإيواء المشترك', housing: 'إيواء الخوادم', dedicated: 'خوادم مخصصة', vps: 'خوادم افتراضية', private_cloud: 'سحابة خاصة', public_cloud: 'سحابة عامة', storage: 'التخزين', backup: 'النسخ الاحتياطي', connectivity: 'وصلات مخصصة', managed: 'خدمات مُدارة', security: 'الأمن (جدار ناري، مكافحة DDoS)', tier_stated: 'مستوى Tier معلن' },
};
const SELECTION = {
  fr: `Nous avons retenu ${TOTAL} opérateurs dont le propre site indique un data center situé en Algérie, décrit au moins un service vendu aux entreprises depuis ce data center et montre une activité depuis 2025 ; tous figurent ici, avec Symloop, qui publie la liste.`,
  en: `We kept ${TOTAL} operators whose own site states a data center located in Algeria, describes at least one service sold to companies from it and shows activity since 2025; all of them are here, with Symloop, which publishes the list.`,
  ar: `احتفظنا بـ ${TOTAL} متعاملين يذكر موقعهم مركز بيانات موجوداً في الجزائر، يصف خدمة واحدة على الأقل تُباع للمؤسسات منه ويُظهر نشاطاً منذ 2025؛ وكلهم مذكورون هنا، مع Symloop التي تنشر القائمة.`,
};

const CONTENT = {
  fr: {
    title: `Data centers en Algérie 2027 : liste vérifiée de ${TOTAL} opérateurs (colocation, serveurs, cloud)`,
    seoTitle: `Data center en Algérie 2027 : ${TOTAL} opérateurs vérifiés (colocation, VPS, cloud)`,
    seoDescription: `Data centers en Algérie en 2027 : ${TOTAL} opérateurs vérifiés qui vendent depuis un data center situé en Algérie (colocation, hébergement de serveurs, serveurs dédiés, VPS, cloud, sauvegarde), avec le lieu indiqué. Vérifié le 26 novembre 2026.`,
    keywords: 'data center algérie 2027, data center algérie, datacenter algérie, data center algérie télécom, colocation serveur algérie, hébergement serveur algérie, cloud algérie, vps algérie, مركز بيانات الجزائر',
    colCompany: 'Opérateur', colDoes: 'Services depuis le data center', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `${TOTAL} opérateurs indiquent sur leur propre site un data center situé en Algérie d’où ils vendent des services aux entreprises : deux opérateurs télécoms et cinq fournisseurs internet et cloud. Pour chacun : le lieu indiqué et les services (colocation, serveurs dédiés, VPS, cloud, sauvegarde) ; Symloop, qui publie la liste et n’exploite pas de data center, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Colocation', 'colocation'], ['Serveurs dédiés', 'dedicated'], ['VPS', 'vps'], ['Cloud public', 'public_cloud'], ['Cloud privé', 'private_cloud'], ['Sauvegarde', 'backup'], ['Liaisons dédiées', 'connectivity']],
    method: [
      'Nous avons cherché avec des mots simples : « data center Algérie », « datacenter Algérie colocation », « hébergement serveur Algérie », « cloud Algérie ». Les articles de presse ont servi de pistes ; les faits viennent du site de chaque opérateur.',
      'Un opérateur entre dans la liste si son propre site indique un data center situé en Algérie et décrit au moins un service vendu aux entreprises depuis ce data center. Nous ne reprenons ni prix, ni capacité, ni surface, ni montant d’investissement, ni nom de client. Un niveau Tier n’apparaît que si l’opérateur l’annonce lui-même. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons visité aucun data center : ce qui est indiqué est ce que chaque opérateur annonce. Demandez une visite, les engagements de disponibilité par écrit et l’endroit exact où vos données seront copiées.',
      'Plusieurs data centers internes (administrations, banques, grandes entreprises) ne vendent pas de services et ne figurent pas ici. Le site du CERIST ne s’ouvrait pas à la date de vérification. Cette page n’explique aucune règle sur l’emplacement des données.',
    ],
    fix: 'Une information est fausse, ou votre data center manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quels sont les data centers en Algérie en 2027 ?', `Parmi les opérateurs qui vendent des services aux entreprises, ${join(OTHERS.map((x) => x.name), 'et')} indiquent sur leur site un data center situé en Algérie. Il n’existe pas de classement indépendant ; Symloop, qui publie cette page, est en tête par choix d’éditeur et n’exploite pas de data center.`],
      ['Où sont situés les data centers en Algérie ?', `Les opérateurs qui indiquent un lieu : ${join(WHERE, 'et')}. Les autres ne nomment pas de ville sur leur site.`],
      ['Où louer un emplacement en baie (colocation) en Algérie ?', `${join(COLO, 'et')} annoncent la colocation ; ${join(HOUSING, 'et')} annoncent aussi l’hébergement du serveur du client.`],
      ['Où louer un serveur dédié ou un VPS en Algérie ?', `${join(DEDICATED, 'et')} annoncent des serveurs dédiés ; ${join(VPS, 'et')} annoncent des VPS.`],
      ['Existe-t-il un cloud public hébergé en Algérie ?', `${join(PUBLIC, 'et')} annoncent un cloud public ; ${join(PRIVATE, 'et')} annoncent un cloud privé.`],
      ['Quels data centers proposent la sauvegarde ?', `${join(BACKUP, 'et')} annoncent la sauvegarde ou la réplication.`],
      ['Quels opérateurs proposent une protection anti-DDoS ou un pare-feu ?', `${join(SECURITY, 'et')} annoncent des services de sécurité.`],
      ['Quels opérateurs fournissent la liaison jusqu’au data center ?', `${join(LINKS, 'et')} annoncent des liaisons dédiées ou des accès MPLS vers leur data center.`],
      ['Quel data center algérien est certifié Tier III ?', 'Aucun des opérateurs vérifiés n’annonce de certification Tier III sur son site. ADEXCLOUD indique une conception « Tier II Ready » ; les autres ne citent pas de niveau Tier.'],
      ['Combien coûte un hébergement en data center en Algérie ?', 'Cette page ne reprend aucun prix. Demandez un devis écrit qui précise l’espace ou les ressources, la bande passante, la disponibilité garantie, la sauvegarde et l’accès au site.'],
      ['Data center, colocation ou serveur dans l’entreprise ?', 'Un serveur dans un local de l’entreprise dépend de son électricité, de sa climatisation et de sa connexion. La colocation place le même serveur dans un data center ; le VPS ou le cloud évitent d’acheter le matériel. Le bon choix dépend de la disponibilité attendue et de qui surveille le serveur.'],
      ['Comment ajouter mon data center à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit vos services. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Serveur dans un placard, colocation ou cloud : que choisir', '/blog/data-center-algerie-2027-serveur-d-entreprise-dans-un-placard-colocation-housing-serveur-loue-ou-virtuel-disponibilite-second-lien-internet/'], ['Hébergeurs web et cloud en Algérie', '/hebergeurs-web-algerie/'], ['Fournisseurs d’accès internet en Algérie', '/fournisseurs-internet-algerie/']],
  },
  en: {
    title: `Data centers in Algeria 2027: a verified list of ${TOTAL} operators (colocation, servers, cloud)`,
    seoTitle: `Data center in Algeria 2027: ${TOTAL} verified operators (colocation, VPS, cloud)`,
    seoDescription: `Data centers in Algeria in 2027: ${TOTAL} verified operators selling from a data center located in Algeria (colocation, server housing, dedicated servers, VPS, cloud, backup), with the location stated. Verified on 26 November 2026.`,
    keywords: 'data center algeria 2027, data centers algeria, datacenter algeria, colocation algeria, server hosting algeria, cloud algeria, vps algeria',
    colCompany: 'Operator', colDoes: 'Services from the data center', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `${TOTAL} operators state on their own sites a data center located in Algeria from which they sell services to companies: two telecom operators and five internet and cloud providers. For each one: the location stated and the services (colocation, dedicated servers, VPS, cloud, backup); Symloop, which publishes the list and runs no data center, comes first and the others follow in alphabetical order.`,
    byService: [['Colocation', 'colocation'], ['Dedicated servers', 'dedicated'], ['VPS', 'vps'], ['Public cloud', 'public_cloud'], ['Private cloud', 'private_cloud'], ['Backup', 'backup'], ['Dedicated links', 'connectivity']],
    method: [
      'We searched with simple words such as “data center Algeria”, “colocation Algeria”, “server hosting Algeria” and “cloud Algeria”. Press articles were leads; the facts come from each operator’s own site.',
      'An operator enters the list if its own site states a data center located in Algeria and describes at least one service sold to companies from it. We report no prices, capacities, surface areas, investment amounts or customer names. A Tier level appears only when the operator states it itself. Each name links to the page read.',
    ],
    limits: [
      'We visited no data center: what is shown is what each operator announces. Ask for a visit, written availability commitments and the exact place your data will be copied to.',
      'Several internal data centers (administrations, banks, large companies) sell no services and are not here. CERIST’s site did not load on the verification date. This page explains no rule on data location.',
    ],
    fix: 'Something is wrong, or your data center is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['Which data centers are there in Algeria in 2027?', `Among operators selling services to companies, ${join(OTHERS.map((x) => x.name), 'and')} state a data center located in Algeria on their sites. There is no independent ranking; Symloop, which publishes this page, comes first as the publisher’s choice and runs no data center.`],
      ['Where are data centers located in Algeria?', `Operators stating a location: ${join(WHERE, 'and')}. The others name no city on their sites.`],
      ['Where can I rent rack space (colocation) in Algeria?', `${join(COLO, 'and')} announce colocation; ${join(HOUSING, 'and')} also announce housing the customer’s server.`],
      ['Where can I rent a dedicated server or a VPS in Algeria?', `${join(DEDICATED, 'and')} announce dedicated servers; ${join(VPS, 'and')} announce VPS.`],
      ['Is there a public cloud hosted in Algeria?', `${join(PUBLIC, 'and')} announce a public cloud; ${join(PRIVATE, 'and')} announce a private cloud.`],
      ['Which data centers offer backup?', `${join(BACKUP, 'and')} announce backup or replication.`],
      ['Which operators offer anti-DDoS or firewall protection?', `${join(SECURITY, 'and')} announce security services.`],
      ['Which operators provide the link to the data center?', `${join(LINKS, 'and')} announce dedicated links or MPLS access to their data center.`],
      ['Which Algerian data center is Tier III certified?', 'None of the verified operators states a Tier III certification on its site. ADEXCLOUD states a “Tier II Ready” design; the others cite no Tier level.'],
      ['How much does data center hosting cost in Algeria?', 'This page reports no prices. Ask for a written quote stating the space or resources, bandwidth, guaranteed availability, backup and site access.'],
      ['Data center, colocation or a server in the office?', 'A server in the office depends on its power, cooling and connection. Colocation puts the same server in a data center; a VPS or the cloud avoids buying hardware. The right choice depends on the availability expected and on who monitors the server.'],
      ['How do I add my data center to this list?', 'Write to contact@symloop.com with the link to the page describing your services. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Web hosting and cloud in Algeria', '/hebergeurs-web-algerie/'], ['Internet providers in Algeria', '/fournisseurs-internet-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `مراكز البيانات في الجزائر 2027: قائمة موثقة من ${TOTAL} متعاملين (إيواء، خوادم، سحابة)`,
    seoTitle: `مركز بيانات في الجزائر 2027: ${TOTAL} متعاملين موثقين (إيواء، خوادم افتراضية، سحابة)`,
    seoDescription: `مراكز البيانات في الجزائر سنة 2027: ${TOTAL} متعاملين موثقين يبيعون من مركز بيانات موجود في الجزائر (الإيواء المشترك، إيواء الخوادم، الخوادم المخصصة، الخوادم الافتراضية، السحابة، النسخ الاحتياطي)، مع المكان المذكور. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'مركز بيانات الجزائر 2027, مراكز البيانات في الجزائر, data center الجزائر, استضافة الخوادم الجزائر, السحابة الجزائر',
    colCompany: 'المتعامل', colDoes: 'الخدمات من مركز البيانات', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `${TOTAL} متعاملين يذكرون في مواقعهم مركز بيانات موجوداً في الجزائر يبيعون منه خدمات للمؤسسات: متعاملان للاتصالات وخمسة مزوّدين للإنترنت والسحابة. لكل واحد: المكان المذكور والخدمات (الإيواء المشترك، الخوادم المخصصة، الخوادم الافتراضية، السحابة، النسخ الاحتياطي)؛ و Symloop، ناشرة القائمة التي لا تشغّل مركز بيانات، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['الإيواء المشترك', 'colocation'], ['خوادم مخصصة', 'dedicated'], ['خوادم افتراضية', 'vps'], ['سحابة عامة', 'public_cloud'], ['سحابة خاصة', 'private_cloud'], ['النسخ الاحتياطي', 'backup'], ['وصلات مخصصة', 'connectivity']],
    method: [
      'بحثنا بكلمات بسيطة مثل «مركز بيانات الجزائر» و«data center Algérie» و«استضافة الخوادم الجزائر» و«السحابة الجزائر». واستُعملت المقالات الصحفية كمؤشرات؛ والمعلومات من موقع كل متعامل.',
      'يدخل المتعامل القائمة إذا كان موقعه يذكر مركز بيانات موجوداً في الجزائر ويصف خدمة واحدة على الأقل تُباع للمؤسسات منه. ولا ننقل أي سعر ولا سعة ولا مساحة ولا مبلغ استثمار ولا اسم زبون. ولا يظهر مستوى Tier إلا إذا أعلنه المتعامل بنفسه. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نزر أي مركز بيانات: المذكور هو ما يعلنه كل متعامل. اطلبوا زيارة، والتزامات التوفر كتابياً، والمكان الدقيق الذي تُنسخ فيه بياناتكم.',
      'عدة مراكز بيانات داخلية (إدارات، بنوك، مؤسسات كبرى) لا تبيع خدمات وغير مذكورة هنا. وموقع CERIST لم يفتح في تاريخ التحقق. ولا تشرح هذه الصفحة أي قاعدة حول مكان البيانات.',
    ],
    fix: 'معلومة خاطئة أو مركز بياناتكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هي مراكز البيانات في الجزائر سنة 2027؟', `من بين المتعاملين الذين يبيعون خدمات للمؤسسات، ${join(OTHERS.map((x) => x.name), 'و')} تذكر في مواقعها مركز بيانات موجوداً في الجزائر. ولا يوجد تصنيف مستقل؛ و Symloop، التي تنشر هذه الصفحة، في المقدمة باختيار الناشر ولا تشغّل مركز بيانات.`],
      ['أين توجد مراكز البيانات في الجزائر؟', `المتعاملون الذين يذكرون مكاناً: ${join(WHERE, 'و')}. والآخرون لا يذكرون مدينة في مواقعهم.`],
      ['أين أؤجّر موضعاً في خزانة (إيواء مشترك) في الجزائر؟', `${join(COLO, 'و')} تعلن الإيواء المشترك؛ و${join(HOUSING, 'و')} تعلن أيضاً إيواء خادم الزبون.`],
      ['أين أؤجّر خادماً مخصصاً أو خادماً افتراضياً في الجزائر؟', `${join(DEDICATED, 'و')} تعلن خوادم مخصصة؛ و${join(VPS, 'و')} تعلن خوادم افتراضية.`],
      ['هل توجد سحابة عامة مستضافة في الجزائر؟', `${join(PUBLIC, 'و')} تعلن سحابة عامة؛ و${join(PRIVATE, 'و')} تعلن سحابة خاصة.`],
      ['ما هي مراكز البيانات التي تقترح النسخ الاحتياطي؟', `${join(BACKUP, 'و')} تعلن النسخ الاحتياطي أو النسخ المتماثل.`],
      ['ما هم المتعاملون الذين يقترحون الحماية من DDoS أو جداراً نارياً؟', `${join(SECURITY, 'و')} تعلن خدمات أمنية.`],
      ['ما هم المتعاملون الذين يوفّرون الوصلة إلى مركز البيانات؟', `${join(LINKS, 'و')} تعلن وصلات مخصصة أو نفاذ MPLS إلى مركز بياناتها.`],
      ['أي مركز بيانات جزائري حاصل على شهادة Tier III؟', 'لا أحد من المتعاملين الموثقين يعلن شهادة Tier III في موقعه. ويذكر ADEXCLOUD تصميماً «Tier II Ready»؛ والآخرون لا يذكرون مستوى Tier.'],
      ['كم تكلف الاستضافة في مركز بيانات في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. اطلبوا عرضاً مكتوباً يحدد المساحة أو الموارد، عرض النطاق، التوفر المضمون، النسخ الاحتياطي والدخول إلى الموقع.'],
      ['مركز بيانات، إيواء مشترك أم خادم داخل المؤسسة؟', 'الخادم داخل المؤسسة يتوقف على كهربائها وتبريدها واتصالها. والإيواء المشترك يضع الخادم نفسه في مركز بيانات؛ والخادم الافتراضي أو السحابة يُغنيان عن شراء العتاد. والاختيار الصحيح يتوقف على التوفر المنتظر ومن يراقب الخادم.'],
      ['كيف أضيف مركز بياناتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف خدماتكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['استضافة المواقع والسحابة في الجزائر', '/hebergeurs-web-algerie/'], ['مزوّدو الإنترنت في الجزائر', '/fournisseurs-internet-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="data-centers-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
