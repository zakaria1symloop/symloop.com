// /agences-web-algerie/ — source page: verified list of web and digital agencies in Algeria
// (FR / EN / AR). Data: src/data/sources/algeria-web-agencies.js.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { AGENCIES, VERIFIED_ON } from '../data/sources/algeria-web-agencies';

const N = AGENCIES.length;
const CITIES = new Set(AGENCIES.map((x) => x.city)).size;

const CONTENT = {
  fr: {
    title: `Agences web en Algérie : liste vérifiée de ${N} agences web et digitales (2027)`,
    seoTitle: `Agences web en Algérie : liste vérifiée 2027 (${N} agences web et digitales)`,
    seoDescription: `Liste de ${N} agences web et agences digitales en Algérie, dans ${CITIES} villes : création de site web, e-commerce, marketing digital, design. Ville, services et faits relevés sur le site de chaque agence, vérifiés le 25 novembre 2026.`,
    keywords: 'agence web algérie, agence digitale algérie, agence marketing digital algérie, agence création site web algérie, création site web algérie, agence web alger, agence web oran, agence web constantine, agence communication digitale algérie',
    lead: `Cette page recense ${N} agences web et digitales établies en Algérie, dans ${CITIES} villes, d’Oran à Annaba. Pour chacune : sa ville, ses services (création de site web, e-commerce, marketing digital, design) et un fait relevé sur son propre site, sans classement, par ordre alphabétique.`,
    byService: [['Agences qui créent des boutiques en ligne', 'ecommerce'], ['Agences qui font du marketing digital (référencement, publicité, réseaux sociaux)', 'marketing'], ['Agences qui intègrent le paiement en ligne (CIB, Edahabia)', 'payments'], ['Agences qui proposent de l’IA (chatbots, agents, automatisation)', 'ai'], ['Agences qui font aussi de l’impression et de la signalétique', 'print'], ['Agences qui développent aussi des applications mobiles', 'mobile']],
    method: [
      'Nous avons cherché, ville par ville, les agences avec des mots simples : « agence web Oran », « agence digitale Constantine », « création site web Annaba », puis ajouté les agences web déjà vérifiées pour notre liste des entreprises informatiques.',
      'Une agence n’entre dans la liste que si elle a son propre site, qu’il s’ouvre, et qu’il indique une ville en Algérie. Une page Facebook seule ne suffit pas. La ville, les services et le fait cité viennent de ce site, lu le jour de la vérification. L’année de création n’apparaît que si le site la donne.',
      'L’ordre est alphabétique. Il n’y a ni note, ni classement, ni « meilleure » agence : nous n’avons testé le travail d’aucune d’entre elles.',
    ],
    limits: [
      'La liste n’est pas complète. Beaucoup d’agences n’ont qu’une page sur les réseaux sociaux ou un site qui ne s’ouvre plus, et n’y figurent donc pas. Nous n’avons trouvé aucune agence remplissant ces critères à Sétif, Sidi Bel Abbès, Ouargla ou Ghardaïa.',
      'Les faits sont ceux que chaque agence déclare sur son site. Nous ne les avons pas contrôlés auprès d’un tiers.',
      'Symloop, qui publie cette liste, y figure à sa place alphabétique, bien qu’elle soit une société de logiciel plutôt qu’une agence.',
    ],
    fix: 'Une information est fausse, ou votre agence manque ? Écrivez-nous avec l’adresse de votre site, nous corrigeons :',
    faq: [
      ['Combien y a-t-il d’agences web en Algérie ?', `Il n’existe pas de chiffre officiel. Cette page en recense ${N} qui ont un site actif indiquant une ville en Algérie ; le nombre réel est plus élevé, car beaucoup d’agences ne sont présentes que sur les réseaux sociaux.`],
      ['Dans quelles villes trouve-t-on des agences web en Algérie ?', 'Dans cette liste : Alger, Oran, Constantine, Béjaïa, Tizi Ouzou, Annaba, Tlemcen, Batna, Blida, Tipaza, Jijel et Bordj Bou Arréridj.'],
      ['Que fait une agence web ?', 'Elle crée et maintient des sites et des boutiques en ligne. Beaucoup y ajoutent le référencement, la publicité en ligne, la gestion des réseaux sociaux et le design graphique ; certaines font aussi de l’impression ou de la vidéo.'],
      ['Agence web ou société de logiciel : laquelle choisir ?', 'Pour un site vitrine, une boutique en ligne ou une campagne de publicité, une agence web suffit. Pour un outil de gestion, une plateforme avec des comptes utilisateurs ou une application mobile reliée à vos données, il faut une société de logiciel.'],
      ['Comment ajouter mon agence à cette liste ?', 'Écrivez à contact@symloop.com avec l’adresse de votre site. L’inscription est gratuite ; le site doit s’ouvrir et indiquer une ville en Algérie.'],
    ],
    related: [['Entreprises informatiques en Algérie : liste vérifiée', '/entreprises-informatiques-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Web agencies in Algeria: a verified list of ${N} web and digital agencies (2027)`,
    seoTitle: `Web agencies in Algeria: verified list 2027 (${N} web and digital agencies)`,
    seoDescription: `A list of ${N} web and digital agencies in Algeria across ${CITIES} cities: website creation, e-commerce, digital marketing, design. City, services and facts read on each agency's own site, verified on 25 November 2026.`,
    keywords: 'web agency algeria, digital agency algeria, web design agency algeria, digital marketing agency algeria, website creation algeria, web agency algiers, web agency oran',
    lead: `This page lists ${N} web and digital agencies based in Algeria, across ${CITIES} cities from Oran to Annaba. For each one: its city, its services (website creation, e-commerce, digital marketing, design) and one fact read on its own website, with no ranking, in alphabetical order.`,
    byService: [['Agencies that build online shops', 'ecommerce'], ['Agencies that do digital marketing (SEO, ads, social media)', 'marketing'], ['Agencies that integrate online payment (CIB, Edahabia)', 'payments'], ['Agencies that offer AI (chatbots, agents, automation)', 'ai'], ['Agencies that also do printing and signage', 'print'], ['Agencies that also build mobile apps', 'mobile']],
    method: [
      'We searched city by city with simple words such as “web agency Oran”, “digital agency Constantine” and “website creation Annaba”, then added the web agencies already verified for our list of IT companies.',
      'An agency enters the list only if it has its own website, the site loads, and it states a city in Algeria. A Facebook page alone is not enough. The city, the services and the fact quoted come from that site, read on the verification date. The founding year appears only when the site gives it.',
      'The order is alphabetical. There is no score, no ranking and no “best” agency: we have not tested the work of any of them.',
    ],
    limits: [
      'The list is not complete. Many agencies only have a social-media page, or a site that no longer loads, and are therefore not included. We found no agency meeting these criteria in Sétif, Sidi Bel Abbès, Ouargla or Ghardaïa.',
      'The facts are what each agency states on its own site. We did not check them with a third party.',
      'Symloop, which publishes this list, appears in its alphabetical place, although it is a software company rather than an agency.',
    ],
    fix: 'Something is wrong, or your agency is missing? Write to us with your website address, and we correct it:',
    faq: [
      ['How many web agencies are there in Algeria?', `There is no official figure. This page lists ${N} that have a working website stating a city in Algeria; the real number is higher, because many agencies are present only on social media.`],
      ['Which Algerian cities have web agencies?', 'On this list: Algiers, Oran, Constantine, Béjaïa, Tizi Ouzou, Annaba, Tlemcen, Batna, Blida, Tipaza, Jijel and Bordj Bou Arréridj.'],
      ['What does a web agency do?', 'It builds and maintains websites and online shops. Many add SEO, online advertising, social media management and graphic design; some also do printing or video.'],
      ['Web agency or software company: which one do I need?', 'For a showcase site, an online shop or an advertising campaign, a web agency is enough. For a management tool, a platform with user accounts or a mobile app connected to your data, you need a software company.'],
      ['How do I add my agency to this list?', 'Write to contact@symloop.com with your website address. Listing is free; the site must load and state a city in Algeria.'],
    ],
    related: [['IT and software companies in Algeria: verified list', '/entreprises-informatiques-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `وكالات الويب في الجزائر: قائمة موثقة من ${N} وكالة ويب ورقمنة (2027)`,
    seoTitle: `وكالات الويب في الجزائر: قائمة موثقة 2027 (${N} وكالة ويب وتسويق رقمي)`,
    seoDescription: `قائمة من ${N} وكالة ويب ووكالة رقمية في الجزائر، في ${CITIES} مدينة: إنشاء المواقع، التجارة الإلكترونية، التسويق الرقمي، التصميم. المدينة والخدمات ومعلومات مأخوذة من موقع كل وكالة، تم التحقق منها في 25 نوفمبر 2026.`,
    keywords: 'وكالة ويب الجزائر, وكالة تسويق رقمي الجزائر, شركة تصميم مواقع الجزائر, إنشاء موقع إلكتروني الجزائر, وكالة رقمية الجزائر',
    lead: `تحصي هذه الصفحة ${N} وكالة ويب ورقمنة مقرها الجزائر، في ${CITIES} مدينة، من وهران إلى عنابة. لكل واحدة: مدينتها، خدماتها (إنشاء المواقع، التجارة الإلكترونية، التسويق الرقمي، التصميم) ومعلومة مأخوذة من موقعها، دون ترتيب تفاضلي، وبالترتيب الأبجدي اللاتيني.`,
    byService: [['وكالات تنشئ متاجر إلكترونية', 'ecommerce'], ['وكالات تقوم بالتسويق الرقمي (تحسين الظهور، الإشهار، شبكات التواصل)', 'marketing'], ['وكالات تدمج الدفع الإلكتروني (CIB والذهبية)', 'payments'], ['وكالات تقترح الذكاء الاصطناعي (روبوتات محادثة، وكلاء، أتمتة)', 'ai'], ['وكالات تقوم أيضاً بالطباعة واللافتات', 'print'], ['وكالات تطوّر أيضاً تطبيقات جوال', 'mobile']],
    method: [
      'بحثنا مدينة بمدينة بكلمات بسيطة مثل «وكالة ويب وهران» و«وكالة رقمية قسنطينة» و«إنشاء موقع عنابة»، ثم أضفنا وكالات الويب التي تحققنا منها سابقاً لقائمتنا عن شركات المعلوماتية.',
      'لا تدخل الوكالة القائمة إلا إذا كان لها موقع خاص يفتح ويذكر مدينة في الجزائر. صفحة فيسبوك وحدها لا تكفي. المدينة والخدمات والمعلومة المذكورة مأخوذة من ذلك الموقع يوم التحقق. وسنة التأسيس لا تظهر إلا إذا ذكرها الموقع.',
      'الترتيب أبجدي. لا تنقيط ولا تصنيف ولا «أفضل» وكالة: لم نختبر عمل أي واحدة منها.',
    ],
    limits: [
      'القائمة غير كاملة. كثير من الوكالات لها صفحة على شبكات التواصل فقط أو موقع لم يعد يفتح، فهي غير مدرجة. ولم نجد وكالة تستوفي هذه الشروط في سطيف، سيدي بلعباس، ورقلة أو غرداية.',
      'المعلومات هي ما تصرّح به كل وكالة في موقعها. لم نراجعها لدى طرف ثالث.',
      'Symloop، التي تنشر هذه القائمة، مدرجة في موضعها الأبجدي، مع أنها شركة برمجيات أكثر منها وكالة.',
    ],
    fix: 'معلومة خاطئة أو وكالتكم غير مدرجة؟ راسلونا مع عنوان موقعكم، ونصحّح:',
    faq: [
      ['كم عدد وكالات الويب في الجزائر؟', `لا يوجد رقم رسمي. تحصي هذه الصفحة ${N} وكالة لها موقع يعمل ويذكر مدينة في الجزائر؛ والعدد الحقيقي أكبر، لأن كثيراً من الوكالات حاضرة على شبكات التواصل فقط.`],
      ['في أي مدن جزائرية توجد وكالات ويب؟', 'في هذه القائمة: الجزائر العاصمة، وهران، قسنطينة، بجاية، تيزي وزو، عنابة، تلمسان، باتنة، البليدة، تيبازة، جيجل وبرج بوعريريج.'],
      ['ماذا تفعل وكالة الويب؟', 'تنشئ المواقع والمتاجر الإلكترونية وتصونها. وكثير منها يضيف تحسين الظهور في محركات البحث، الإشهار على الإنترنت، تسيير شبكات التواصل والتصميم الغرافيكي؛ وبعضها يقوم أيضاً بالطباعة أو الفيديو.'],
      ['وكالة ويب أم شركة برمجيات: أيهما أختار؟', 'لموقع تعريفي أو متجر إلكتروني أو حملة إشهارية، تكفي وكالة ويب. ولأداة تسيير أو منصة بحسابات مستعملين أو تطبيق جوال موصول ببياناتكم، تلزم شركة برمجيات.'],
      ['كيف أضيف وكالتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع عنوان موقعكم. الإدراج مجاني؛ ويجب أن يفتح الموقع ويذكر مدينة في الجزائر.'],
    ],
    related: [['شركات المعلوماتية والبرمجيات في الجزائر: قائمة موثقة', '/entreprises-informatiques-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="agences-web-algerie" content={CONTENT} items={AGENCIES} verifiedOn={VERIFIED_ON} groups={['city']} />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
