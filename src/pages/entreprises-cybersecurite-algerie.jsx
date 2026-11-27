// /entreprises-cybersecurite-algerie/ — source page: verified list of cybersecurity service
// companies in Algeria (FR / EN / AR). Data: src/data/sources/algeria-cybersecurity.js.
// No prices or clients; no law explained; Symloop not listed (no security services sold).
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { CYBER, TOP_CYBER, VERIFIED_ON } from '../data/sources/algeria-cybersecurity';

const ITEMS = CYBER.filter((x) => TOP_CYBER.includes(x.name));
const TOTAL = CYBER.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => x.services.includes(key)).map((x) => x.name);
const kind = (k) => ITEMS.filter((x) => x.focus === k).map((x) => x.name);
const AUDIT = has('audit');
const PENTEST = has('pentest');
const SOC = has('soc');
const IR = has('incident_response');
const ISO = has('iso27001');
const AWARE = has('awareness');
const DDOS = has('anti_ddos');
const ENDPOINT = has('endpoint');
const TELECOM = kind('telecom');
const VENDORS = (v) => ITEMS.filter((x) => x.vendors.includes(v)).map((x) => x.name);
const HIDDEN = CYBER.filter((x) => !TOP_CYBER.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { specialist: 'Sociétés de cybersécurité', integrator: 'Intégrateurs avec une offre de sécurité', telecom: 'Offres de sécurité des opérateurs et fournisseurs internet' },
  en: { specialist: 'Cybersecurity companies', integrator: 'Integrators with a security offer', telecom: 'Security offers of operators and internet providers' },
  ar: { specialist: 'شركات الأمن السيبراني', integrator: 'مُدمِجون بعرض أمني', telecom: 'العروض الأمنية للمتعاملين ومزوّدي الإنترنت' },
};
const FEATURE_LABELS = {
  fr: { audit: 'audit', pentest: 'test d’intrusion', soc: 'SOC', incident_response: 'réponse aux incidents', integration: 'intégration (pare-feu, réseau)', endpoint: 'protection des postes', awareness: 'sensibilisation', training: 'formation', iso27001: 'ISO 27001', cloud_security: 'sécurité cloud', anti_ddos: 'anti-DDoS', consulting: 'conseil' },
  en: { audit: 'audit', pentest: 'penetration test', soc: 'SOC', incident_response: 'incident response', integration: 'integration (firewall, network)', endpoint: 'endpoint protection', awareness: 'awareness', training: 'training', iso27001: 'ISO 27001', cloud_security: 'cloud security', anti_ddos: 'anti-DDoS', consulting: 'consulting' },
  ar: { audit: 'التدقيق', pentest: 'اختبار الاختراق', soc: 'مركز العمليات الأمنية', incident_response: 'الاستجابة للحوادث', integration: 'الإدماج (جدار الحماية، الشبكة)', endpoint: 'حماية الأجهزة', awareness: 'التوعية', training: 'التكوين', iso27001: 'ISO 27001', cloud_security: 'أمن السحابة', anti_ddos: 'مكافحة DDoS', consulting: 'الاستشارة' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} entreprises dont le propre site indique une présence en Algérie, décrit des services de cybersécurité vendus aux organisations et montre une activité depuis 2025. Cette page en présente ${N} ; les deux autres, à l’offre surtout tournée vers la revente de produits, sont citées dans les questions. Symloop, qui publie la page, ne vend pas de services de sécurité et ne figure pas dans la liste.`,
  en: `We verified ${TOTAL} companies whose own site states a presence in Algeria, describes cybersecurity services sold to organisations and shows activity since 2025. This page presents ${N}; the other two, whose offer is mostly product resale, are named in the questions. Symloop, which publishes the page, sells no security services and is not on the list.`,
  ar: `تحققنا من ${TOTAL} شركة يذكر موقعها حضوراً في الجزائر، يصف خدمات أمن سيبراني تُباع للهيئات ويُظهر نشاطاً منذ 2025. تعرض هذه الصفحة ${N} منها؛ والشركتان الأخريان، اللتان يغلب على عرضهما بيع المنتجات، مذكورتان في الأسئلة. و Symloop، التي تنشر الصفحة، لا تبيع خدمات أمنية وليست في القائمة.`,
};

const CONTENT = {
  fr: {
    title: `Entreprises de cybersécurité en Algérie 2027 : liste vérifiée de ${N} sociétés (audit, test d’intrusion, SOC)`,
    seoTitle: `Cybersécurité en Algérie 2027 : ${N} entreprises vérifiées (audit, pentest, SOC)`,
    seoDescription: `Entreprises de cybersécurité en Algérie en 2027 : ${N} sociétés vérifiées avec les services annoncés sur leur site (audit de sécurité, test d’intrusion, SOC, réponse aux incidents, pare-feu, sensibilisation, ISO 27001, anti-DDoS) et les éditeurs partenaires. Vérifié le 27 novembre 2026.`,
    keywords: 'entreprise cybersécurité algérie 2027, société cybersécurité alger, audit sécurité informatique algérie, test d’intrusion algérie, pentest algérie, soc algérie, iso 27001 algérie, شركات الأمن السيبراني الجزائر',
    colCompany: 'Entreprise', colDoes: 'Services de sécurité', colFact: 'Ce que son site en dit', countLabel: 'entreprises vérifiées',
    lead: `Pour un audit de sécurité, un test d’intrusion ou un SOC en Algérie, cette page présente ${N} entreprises : deux sociétés de cybersécurité, des intégrateurs informatiques qui ont une offre de sécurité, et les offres de sécurité de trois opérateurs et fournisseurs internet. Pour chacune : les services de sécurité et les éditeurs partenaires annoncés sur son propre site, par ordre alphabétique et sans classement.`,
    byService: [['Audit', 'audit'], ['Test d’intrusion', 'pentest'], ['SOC', 'soc'], ['Réponse aux incidents', 'incident_response'], ['ISO 27001', 'iso27001'], ['Sensibilisation', 'awareness'], ['Anti-DDoS', 'anti_ddos']],
    method: [
      'Nous avons cherché avec des mots simples : « cybersécurité Algérie entreprise », « audit sécurité informatique Algérie », « test d’intrusion Algérie », « SOC Algérie », « الأمن السيبراني الجزائر شركة ». Les annuaires et la presse ont servi de pistes ; aucun test n’a été mené sur les sites, seules leurs pages publiques ont été lues.',
      'Une entreprise entre dans la liste si son propre site indique une présence en Algérie, décrit des services de cybersécurité vendus aux organisations et montre une activité depuis 2025. Nous ne reprenons ni prix, ni nom de client, et nous n’expliquons aucune loi. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons fait appel à aucune de ces entreprises : ce qui est indiqué est ce que chacune annonce. Demandez le périmètre exact, la méthode et un exemple de rapport avant de signer.',
      'Plusieurs sociétés ne figurent pas ici parce que leur site ne s’ouvrait pas ou n’indiquait pas d’adresse en Algérie. Les centres qui ne font que de la formation sont dans notre liste des formations informatiques à Alger.',
    ],
    fix: 'Une information est fausse, ou votre entreprise manque ? Écrivez-nous avec le lien de la page qui décrit vos services, nous corrigeons :',
    faq: [
      ['Quelles sont les entreprises de cybersécurité en Algérie en 2027 ?', `${join(ITEMS.map((x) => x.name), 'et')} décrivent sur leur site des services de cybersécurité vendus aux organisations en Algérie. Il n’existe pas de classement indépendant ; cette page les présente par ordre alphabétique.`],
      ['Qui fait des audits de sécurité informatique en Algérie ?', `${join(AUDIT, 'et')} annoncent des audits de sécurité.`],
      ['Qui fait des tests d’intrusion (pentest) en Algérie ?', `${join(PENTEST, 'et')} annoncent des tests d’intrusion.`],
      ['Existe-t-il un SOC ou une surveillance 24 h/24 en Algérie ?', `${join(SOC, 'et')} annoncent un SOC ou une détection et réponse gérées.`],
      ['Qui intervient en cas d’incident ou de piratage ?', `${join(IR, 'et')} annoncent la réponse aux incidents. Notre guide sur le piratage d’une entreprise décrit aussi les gestes de la première heure.`],
      ['Qui accompagne une certification ISO 27001 ?', `${join(ISO, 'et')} annoncent un accompagnement ou une formation ISO 27001.`],
      ['Qui propose la sensibilisation du personnel et la simulation d’hameçonnage ?', `${join(AWARE, 'et')} annoncent la sensibilisation du personnel.`],
      ['Qui protège contre les attaques DDoS ?', `${join(DDOS, 'et')} annoncent une protection anti-DDoS.`],
      ['Les opérateurs proposent-ils des services de cybersécurité ?', `${join(TELECOM, 'et')} présentent des offres de sécurité sur leurs pages pour les entreprises. Les pages entreprises de Mobilis et d’Ooredoo n’en présentaient pas à la date de vérification.`],
      ['Quelles entreprises sont partenaires de Fortinet ou de Sophos ?', `${join(VENDORS('Fortinet'), 'et')} citent Fortinet ; ${join(VENDORS('Sophos'), 'et')} citent Sophos, selon leur site.`],
      ['Combien coûte un audit ou un test d’intrusion en Algérie ?', 'Cette page ne reprend aucun prix. Le coût dépend du périmètre (nombre de serveurs, d’applications, de sites) et de la méthode. Demandez une proposition écrite qui précise le périmètre, la durée et le contenu du rapport.'],
      ['Comment rendre une application plus sûre dès sa conception ?', 'En prévoyant dès le départ la gestion des accès par rôle, le chiffrement, les sauvegardes, la journalisation et un test d’intrusion avant la mise en ligne. Symloop, qui publie cette page, construit des applications ; l’audit et le test d’intrusion restent le travail des sociétés de cette liste.'],
      ['D’autres entreprises ?', `Nous avons aussi vérifié ${join(HIDDEN, 'et')}, dont l’offre de sécurité est surtout la revente et l’intégration de produits.`],
      ['Comment ajouter mon entreprise à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit vos services. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Audit de sécurité ou test d’intrusion : ce qu’il regarde', '/blog/cybersecurite-entreprise-algerie-2027-audit-de-securite-informatique-ou-test-d-intrusion-ce-qu-il-regarde-rapport-priorites-corrections/'], ['Boîte mail piratée, faux RIB : que faire', '/blog/piratage-entreprise-algerie-2027-boite-mail-piratee-faux-rib-fournisseur-que-faire-premiere-heure-double-verification-regles-de-transfert/'], ['Cybersécurité en Algérie : le guide', '/blog/cybersecurite-algerie-2024/']],
  },
  en: {
    title: `Cybersecurity companies in Algeria 2027: a verified list of ${N} companies (audit, penetration test, SOC)`,
    seoTitle: `Cybersecurity in Algeria 2027: ${N} verified companies (audit, pentest, SOC)`,
    seoDescription: `Cybersecurity companies in Algeria in 2027: ${N} verified companies with the services stated on their sites (security audit, penetration test, SOC, incident response, firewalls, awareness, ISO 27001, anti-DDoS) and partner vendors. Verified on 27 November 2026.`,
    keywords: 'cybersecurity companies algeria 2027, cybersecurity algiers, security audit algeria, penetration testing algeria, pentest algeria, soc algeria, iso 27001 algeria',
    colCompany: 'Company', colDoes: 'Security services', colFact: 'What its site says', countLabel: 'verified companies',
    lead: `For a security audit, a penetration test or a SOC in Algeria, this page presents ${N} companies: two cybersecurity companies, IT integrators with a security offer, and the security offers of three operators and internet providers. For each one: the security services and partner vendors stated on its own site, in alphabetical order and with no ranking.`,
    byService: [['Audit', 'audit'], ['Penetration test', 'pentest'], ['SOC', 'soc'], ['Incident response', 'incident_response'], ['ISO 27001', 'iso27001'], ['Awareness', 'awareness'], ['Anti-DDoS', 'anti_ddos']],
    method: [
      'We searched with simple words such as “cybersecurity company Algeria”, “security audit Algeria”, “penetration test Algeria” and “SOC Algeria”. Directories and press were leads; no test was run against any site, only public pages were read.',
      'A company enters the list if its own site states a presence in Algeria, describes cybersecurity services sold to organisations and shows activity since 2025. We report no prices or client names, and we explain no law. Each name links to the page read.',
    ],
    limits: [
      'We hired none of these companies: what is shown is what each one announces. Ask for the exact scope, the method and a sample report before signing.',
      'Several companies are not here because their site did not load or stated no address in Algeria. Training-only centres are on our list of IT training in Algiers.',
    ],
    fix: 'Something is wrong, or your company is missing? Write to us with the link to the page describing your services, and we correct it:',
    faq: [
      ['Which cybersecurity companies are there in Algeria in 2027?', `${join(ITEMS.map((x) => x.name), 'and')} describe on their sites cybersecurity services sold to organisations in Algeria. There is no independent ranking; this page presents them in alphabetical order.`],
      ['Who does IT security audits in Algeria?', `${join(AUDIT, 'and')} announce security audits.`],
      ['Who does penetration testing in Algeria?', `${join(PENTEST, 'and')} announce penetration tests.`],
      ['Is there a SOC or 24/7 monitoring in Algeria?', `${join(SOC, 'and')} announce a SOC or managed detection and response.`],
      ['Who responds to an incident or a breach?', `${join(IR, 'and')} announce incident response. Our guide on a company breach also describes the first-hour steps.`],
      ['Who supports an ISO 27001 certification?', `${join(ISO, 'and')} announce ISO 27001 support or training.`],
      ['Who offers staff awareness and phishing simulation?', `${join(AWARE, 'and')} announce staff awareness.`],
      ['Who protects against DDoS attacks?', `${join(DDOS, 'and')} announce anti-DDoS protection.`],
      ['Do operators offer cybersecurity services?', `${join(TELECOM, 'and')} present security offers on their business pages. Mobilis’s and Ooredoo’s business pages showed none on the verification date.`],
      ['Which companies partner with Fortinet or Sophos?', `${join(VENDORS('Fortinet'), 'and')} name Fortinet; ${join(VENDORS('Sophos'), 'and')} name Sophos, according to their sites.`],
      ['How much does an audit or a penetration test cost in Algeria?', 'This page reports no prices. The cost depends on the scope (number of servers, applications, sites) and the method. Ask for a written proposal stating the scope, the duration and the report’s content.'],
      ['How do I make an app safer from the design stage?', 'By planning role-based access, encryption, backups, logging and a penetration test before go-live from the start. Symloop, which publishes this page, builds apps; audits and penetration tests remain the work of the companies on this list.'],
      ['Other companies?', `We also verified ${join(HIDDEN, 'and')}, whose security offer is mostly product resale and integration.`],
      ['How do I add my company to this list?', 'Write to contact@symloop.com with the link to the page describing your services. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['IT training in Algiers', '/formation-informatique-alger/'], ['Data centers in Algeria', '/data-centers-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `شركات الأمن السيبراني في الجزائر 2027: قائمة موثقة من ${N} شركات (تدقيق، اختبار اختراق، مركز عمليات أمنية)`,
    seoTitle: `الأمن السيبراني في الجزائر 2027: ${N} شركات موثقة (تدقيق، اختبار اختراق، SOC)`,
    seoDescription: `شركات الأمن السيبراني في الجزائر سنة 2027: ${N} شركات موثقة مع الخدمات المعلنة في مواقعها (التدقيق الأمني، اختبار الاختراق، مركز العمليات الأمنية، الاستجابة للحوادث، جدران الحماية، التوعية، ISO 27001، مكافحة DDoS) والناشرين الشركاء. تم التحقق في 27 نوفمبر 2026.`,
    keywords: 'شركات الأمن السيبراني الجزائر 2027, تدقيق أمن المعلوماتية الجزائر, اختبار الاختراق الجزائر, مركز العمليات الأمنية الجزائر, ISO 27001 الجزائر',
    colCompany: 'الشركة', colDoes: 'الخدمات الأمنية', colFact: 'ما يذكره موقعها', countLabel: 'شركات موثقة',
    lead: `لتدقيق أمني أو اختبار اختراق أو مركز عمليات أمنية في الجزائر، تعرض هذه الصفحة ${N} شركات: شركتان للأمن السيبراني، مُدمِجون معلوماتيون لهم عرض أمني، والعروض الأمنية لثلاثة متعاملين ومزوّدي إنترنت. لكل واحدة: الخدمات الأمنية والناشرون الشركاء المعلنون في موقعها، بالترتيب الأبجدي ودون تصنيف.`,
    byService: [['التدقيق', 'audit'], ['اختبار الاختراق', 'pentest'], ['مركز العمليات الأمنية', 'soc'], ['الاستجابة للحوادث', 'incident_response'], ['ISO 27001', 'iso27001'], ['التوعية', 'awareness'], ['مكافحة DDoS', 'anti_ddos']],
    method: [
      'بحثنا بكلمات بسيطة مثل «الأمن السيبراني الجزائر شركة» و«تدقيق أمن المعلوماتية الجزائر» و«اختبار الاختراق الجزائر». واستُعملت الأدلة والصحافة كمؤشرات؛ ولم يُجرَ أي اختبار على المواقع، بل قُرئت صفحاتها العامة فقط.',
      'تدخل الشركة القائمة إذا كان موقعها يذكر حضوراً في الجزائر، يصف خدمات أمن سيبراني تُباع للهيئات ويُظهر نشاطاً منذ 2025. ولا ننقل أي سعر ولا اسم زبون، ولا نشرح أي قانون. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نتعامل مع أي من هذه الشركات: المذكور هو ما تعلنه كل واحدة. اطلبوا النطاق الدقيق، المنهجية ونموذج تقرير قبل التوقيع.',
      'عدة شركات غير مذكورة لأن موقعها لم يفتح أو لم يذكر عنواناً في الجزائر. ومراكز التكوين فقط في قائمتنا لتكوينات الإعلام الآلي بالجزائر العاصمة.',
    ],
    fix: 'معلومة خاطئة أو شركتكم غير مدرجة؟ راسلونا مع رابط الصفحة التي تصف خدماتكم، ونصحّح:',
    faq: [
      ['ما هي شركات الأمن السيبراني في الجزائر سنة 2027؟', `${join(ITEMS.map((x) => x.name), 'و')} تصف في مواقعها خدمات أمن سيبراني تُباع للهيئات في الجزائر. ولا يوجد تصنيف مستقل؛ وتعرضها هذه الصفحة بالترتيب الأبجدي.`],
      ['من ينجز تدقيق أمن المعلوماتية في الجزائر؟', `${join(AUDIT, 'و')} تعلن تدقيقات أمنية.`],
      ['من ينجز اختبارات الاختراق في الجزائر؟', `${join(PENTEST, 'و')} تعلن اختبارات الاختراق.`],
      ['هل يوجد مركز عمليات أمنية أو مراقبة على مدار الساعة في الجزائر؟', `${join(SOC, 'و')} تعلن مركز عمليات أمنية أو كشفاً واستجابة مُدارين.`],
      ['من يتدخل عند حادث أو اختراق؟', `${join(IR, 'و')} تعلن الاستجابة للحوادث. ويصف دليلنا عن اختراق المؤسسات أيضاً خطوات الساعة الأولى.`],
      ['من يرافق شهادة ISO 27001؟', `${join(ISO, 'و')} تعلن مرافقة أو تكويناً في ISO 27001.`],
      ['من يقترح توعية المستخدمين ومحاكاة التصيد؟', `${join(AWARE, 'و')} تعلن توعية المستخدمين.`],
      ['من يحمي من هجمات DDoS؟', `${join(DDOS, 'و')} تعلن حماية من DDoS.`],
      ['هل يقترح المتعاملون خدمات أمن سيبراني؟', `${join(TELECOM, 'و')} تعرض عروضاً أمنية في صفحات المؤسسات. وصفحات المؤسسات لدى موبيليس وأوريدو لم تعرض شيئاً في تاريخ التحقق.`],
      ['ما هي الشركات الشريكة لـ Fortinet أو Sophos؟', `${join(VENDORS('Fortinet'), 'و')} تذكر Fortinet؛ و${join(VENDORS('Sophos'), 'و')} تذكر Sophos، حسب مواقعها.`],
      ['كم يكلف تدقيق أو اختبار اختراق في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. التكلفة تتوقف على النطاق (عدد الخوادم والتطبيقات والمواقع) والمنهجية. اطلبوا عرضاً مكتوباً يحدد النطاق، المدة ومحتوى التقرير.'],
      ['كيف أجعل تطبيقاً أكثر أماناً منذ تصميمه؟', 'بالتخطيط منذ البداية لصلاحيات الدخول حسب الدور، التشفير، النسخ الاحتياطي، تسجيل العمليات واختبار اختراق قبل الإطلاق. و Symloop، التي تنشر هذه الصفحة، تبني التطبيقات؛ ويبقى التدقيق واختبار الاختراق عمل شركات هذه القائمة.'],
      ['شركات أخرى؟', `تحققنا أيضاً من ${join(HIDDEN, 'و')}، التي يغلب على عرضها الأمني بيع المنتجات وإدماجها.`],
      ['كيف أضيف شركتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف خدماتكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['تكوينات الإعلام الآلي في الجزائر العاصمة', '/formation-informatique-alger/'], ['مراكز البيانات في الجزائر', '/data-centers-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="entreprises-cybersecurite-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
