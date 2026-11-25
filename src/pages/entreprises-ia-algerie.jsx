// /entreprises-ia-algerie/ — source page: verified list of companies in Algeria that state an
// artificial-intelligence offer (FR / EN / AR). Data: src/data/sources/algeria-ai-companies.js.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { AI_COMPANIES, VERIFIED_ON } from '../data/sources/algeria-ai-companies';

const N = AI_COMPANIES.length;
const names = (test) => AI_COMPANIES.filter(test).map((x) => x.name);
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const DARIJA = names((x) => /darija|dialecte/i.test(x.note.fr));
const ONPREM = names((x) => /installés? chez le client/i.test(x.note.fr));
const PRODUCTS = names((x) => x.focus === 'product');

const KIND_LABELS = {
  fr: { product: 'Éditeurs de produits IA', software: 'Sociétés de logiciel qui proposent de l’IA', web: 'Agences web qui proposent de l’IA', consult: 'Conseil en données et en IA' },
  en: { product: 'Publishers of AI products', software: 'Software companies offering AI', web: 'Web agencies offering AI', consult: 'Data and AI consultancies' },
  ar: { product: 'ناشرو منتجات الذكاء الاصطناعي', software: 'شركات برمجيات تقترح الذكاء الاصطناعي', web: 'وكالات ويب تقترح الذكاء الاصطناعي', consult: 'الاستشارة في البيانات والذكاء الاصطناعي' },
};
const AI_LABELS = {
  fr: { product: 'produit IA maison', chatbots: 'chatbots et assistants', agents: 'agents IA et automatisation', rag: 'réponses à partir des documents de l’entreprise (RAG)', vision: 'vision par ordinateur', nlp: 'langue, texte et voix', data: 'science des données et prédiction', docs: 'lecture de documents (OCR, extraction)', training: 'formation IA', integration: 'intégration de modèles de langage' },
  en: { product: 'own AI product', chatbots: 'chatbots and assistants', agents: 'AI agents and automation', rag: 'answers from company documents (RAG)', vision: 'computer vision', nlp: 'language, text and speech', data: 'data science and prediction', docs: 'document reading (OCR, extraction)', training: 'AI training', integration: 'language model integration' },
  ar: { product: 'منتج ذكاء اصطناعي خاص', chatbots: 'روبوتات محادثة ومساعدون', agents: 'وكلاء ذكاء اصطناعي وأتمتة', rag: 'إجابات من وثائق المؤسسة (RAG)', vision: 'رؤية حاسوبية', nlp: 'اللغة والنص والصوت', data: 'علم البيانات والتنبؤ', docs: 'قراءة الوثائق (OCR واستخراج)', training: 'تكوين في الذكاء الاصطناعي', integration: 'إدماج النماذج اللغوية' },
};

const CONTENT = {
  fr: {
    title: `Entreprises d’intelligence artificielle en Algérie : liste vérifiée de ${N} sociétés et startups IA (2027)`,
    seoTitle: `Entreprises d’IA en Algérie : liste vérifiée 2027 (${N} sociétés et startups)`,
    seoDescription: `Liste de ${N} entreprises et startups d’intelligence artificielle en Algérie : chatbots en darija, agents IA, assistants sur documents, vision par ordinateur, science des données. Ce que chacune propose, relevé sur son propre site, vérifié le 25 novembre 2026.`,
    keywords: 'entreprise intelligence artificielle algérie, société IA algérie, startup IA algérie, agence IA algérie, chatbot algérie, chatbot darija, intelligence artificielle algérie entreprise, AI company algeria',
    colDoes: 'Type d’IA', colFact: 'Ce que son site dit de son offre IA',
    lead: `Cette page recense ${N} entreprises établies en Algérie qui décrivent une offre d’intelligence artificielle sur leur propre site : éditeurs de produits IA, sociétés de logiciel, agences web et cabinets de conseil. Pour chacune : sa ville, le type d’IA proposé et ce que son site en dit, sans classement, par ordre alphabétique.`,
    byService: [['Chatbots et assistants', 'chatbots'], ['Agents IA et automatisation', 'agents'], ['Réponses à partir des documents de l’entreprise (RAG)', 'rag'], ['Vision par ordinateur', 'vision'], ['Lecture de documents (OCR, extraction)', 'docs'], ['Science des données et prédiction', 'data'], ['Formation IA pour les entreprises', 'training']],
    method: [
      'Nous avons relu les sites des sociétés de nos autres listes qui mentionnent l’IA, puis cherché d’autres entreprises avec des mots simples : « entreprise intelligence artificielle Algérie », « startup IA Algérie », « chatbot Algérie ».',
      'Une entreprise entre dans la liste si son propre site s’ouvre, indique qu’elle est établie en Algérie, et décrit un produit ou un service d’IA précis. Une simple mention du mot « IA » ne suffit pas. Le lien de chaque nom mène à la page où l’offre est décrite.',
      'L’ordre est alphabétique. Il n’y a ni note, ni classement : nous n’avons testé aucun de ces produits ni de ces services. Les universités, les laboratoires, les organismes publics et les filiales de sociétés étrangères ne figurent pas dans la liste.',
    ],
    limits: [
      'La liste n’est pas complète, et l’offre change vite : une société peut avoir ajouté ou retiré un produit depuis la date de vérification.',
      'Les descriptions reprennent ce que chaque société déclare. Nous n’avons vérifié ni les performances, ni les langues réellement prises en charge, ni les clients.',
      'Symloop, qui publie cette liste, y figure à sa place alphabétique.',
    ],
    fix: 'Une information est fausse, ou votre entreprise manque ? Écrivez-nous avec le lien de la page qui décrit votre offre IA, nous corrigeons :',
    faq: [
      ['Quelles entreprises font de l’intelligence artificielle en Algérie ?', `Cette page en recense ${N} dont le site décrit une offre précise : ${PRODUCTS.length} éditeurs de produits IA (${join(PRODUCTS, 'et')}), ainsi que des sociétés de logiciel, des agences web et des cabinets de conseil qui construisent de l’IA sur mesure.`],
      ['Quelles entreprises algériennes proposent un chatbot qui répond en darija ?', `${join(DARIJA, 'et')} indiquent sur leur site que leur assistant répond en darija (arabe dialectal algérien), en plus du français et de l’arabe.`],
      ['Existe-t-il des solutions d’IA installées dans l’entreprise, sans envoyer les données à l’étranger ?', `${join(ONPREM, 'et')} indiquent proposer des logiciels d’IA installés chez le client, qui répondent à partir de ses documents et de ses bases de données.`],
      ['Quelle différence entre un produit IA et une IA sur mesure ?', 'Un produit IA est un logiciel prêt à l’emploi, vendu à de nombreux clients, souvent par abonnement. Une IA sur mesure est construite pour une seule entreprise, reliée à ses documents, à ses logiciels et à ses règles.'],
      ['Comment ajouter mon entreprise à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre offre IA. L’inscription est gratuite.'],
    ],
    related: [['Entreprises informatiques en Algérie', '/entreprises-informatiques-algerie/'], ['Startups algériennes', '/startups-algeriennes/'], ['Agences web en Algérie', '/agences-web-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `AI companies in Algeria: a verified list of ${N} companies and startups (2027)`,
    seoTitle: `AI companies in Algeria: verified list 2027 (${N} companies and startups)`,
    seoDescription: `A list of ${N} artificial intelligence companies and startups in Algeria: Darija chatbots, AI agents, document assistants, computer vision, data science. What each one offers, read on its own site, verified on 25 November 2026.`,
    keywords: 'ai companies in algeria, ai company algeria, artificial intelligence algeria, ai startups algeria, chatbot algeria, darija chatbot, ai agency algeria',
    colDoes: 'Type of AI', colFact: 'What its site says about its AI offer',
    lead: `This page lists ${N} companies based in Algeria that describe an artificial intelligence offer on their own website: publishers of AI products, software companies, web agencies and consultancies. For each one: its city, the type of AI offered and what its site says about it, with no ranking, in alphabetical order.`,
    byService: [['Chatbots and assistants', 'chatbots'], ['AI agents and automation', 'agents'], ['Answers from company documents (RAG)', 'rag'], ['Computer vision', 'vision'], ['Document reading (OCR, extraction)', 'docs'], ['Data science and prediction', 'data'], ['AI training for companies', 'training']],
    method: [
      'We re-read the sites of the companies in our other lists that mention AI, then looked for others with simple words such as “AI company Algeria”, “AI startup Algeria” and “chatbot Algeria”.',
      'A company enters the list if its own site loads, states that it is based in Algeria, and describes a specific AI product or service. A mere mention of the word “AI” is not enough. Each name links to the page where the offer is described.',
      'The order is alphabetical. There is no score and no ranking: we have not tested any of these products or services. Universities, laboratories, public bodies and branches of foreign companies are not included.',
    ],
    limits: [
      'The list is not complete, and offers change fast: a company may have added or removed a product since the verification date.',
      'The descriptions repeat what each company states. We did not verify performance, the languages actually supported, or clients.',
      'Symloop, which publishes this list, appears in its alphabetical place.',
    ],
    fix: 'Something is wrong, or your company is missing? Write to us with the link to the page describing your AI offer, and we correct it:',
    faq: [
      ['Which companies do artificial intelligence in Algeria?', `This page lists ${N} whose site describes a specific offer: ${PRODUCTS.length} publishers of AI products (${join(PRODUCTS, 'and')}), plus software companies, web agencies and consultancies that build custom AI.`],
      ['Which Algerian companies offer a chatbot that answers in Darija?', `${join(DARIJA, 'and')} state on their sites that their assistant answers in Darija (Algerian Arabic dialect), in addition to French and Arabic.`],
      ['Are there AI solutions installed inside the company, without sending data abroad?', `${join(ONPREM, 'and')} state that they offer AI software installed at the client’s premises, answering from its documents and databases.`],
      ['What is the difference between an AI product and custom AI?', 'An AI product is ready-made software sold to many customers, often by subscription. Custom AI is built for one company, connected to its documents, its software and its rules.'],
      ['How do I add my company to this list?', 'Write to contact@symloop.com with the link to the page describing your AI offer. Listing is free.'],
    ],
    related: [['IT and software companies in Algeria', '/entreprises-informatiques-algerie/'], ['Algerian startups', '/startups-algeriennes/'], ['Web agencies in Algeria', '/agences-web-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `شركات الذكاء الاصطناعي في الجزائر: قائمة موثقة من ${N} شركة ومؤسسة ناشئة (2027)`,
    seoTitle: `شركات الذكاء الاصطناعي في الجزائر: قائمة موثقة 2027 (${N} شركة)`,
    seoDescription: `قائمة من ${N} شركة ومؤسسة ناشئة في الذكاء الاصطناعي بالجزائر: روبوتات محادثة بالدارجة، وكلاء ذكاء اصطناعي، مساعدون على الوثائق، رؤية حاسوبية، علم البيانات. ما تقترحه كل واحدة، مأخوذاً من موقعها، تم التحقق منه في 25 نوفمبر 2026.`,
    keywords: 'شركات الذكاء الاصطناعي في الجزائر, شركة ذكاء اصطناعي الجزائر, شركات ناشئة ذكاء اصطناعي الجزائر, شات بوت الجزائر, شات بوت بالدارجة',
    colDoes: 'نوع الذكاء الاصطناعي', colFact: 'ما يذكره موقعها عن عرضها',
    lead: `تحصي هذه الصفحة ${N} شركة مقرها الجزائر تصف عرضاً في الذكاء الاصطناعي في موقعها: ناشرو منتجات، شركات برمجيات، وكالات ويب ومكاتب استشارة. لكل واحدة: مدينتها، نوع الذكاء الاصطناعي المقترح وما يذكره موقعها عنه، دون ترتيب تفاضلي، وبالترتيب الأبجدي اللاتيني.`,
    byService: [['روبوتات محادثة ومساعدون', 'chatbots'], ['وكلاء ذكاء اصطناعي وأتمتة', 'agents'], ['إجابات من وثائق المؤسسة (RAG)', 'rag'], ['رؤية حاسوبية', 'vision'], ['قراءة الوثائق (OCR واستخراج)', 'docs'], ['علم البيانات والتنبؤ', 'data'], ['تكوين المؤسسات في الذكاء الاصطناعي', 'training']],
    method: [
      'أعدنا قراءة مواقع شركات قوائمنا الأخرى التي تذكر الذكاء الاصطناعي، ثم بحثنا عن غيرها بكلمات بسيطة مثل «شركة ذكاء اصطناعي الجزائر» و«شات بوت الجزائر».',
      'تدخل الشركة القائمة إذا كان موقعها يفتح ويذكر أنها في الجزائر ويصف منتجاً أو خدمة محددة في الذكاء الاصطناعي. مجرد ذكر كلمة «ذكاء اصطناعي» لا يكفي. ورابط كل اسم يؤدي إلى الصفحة التي تصف العرض.',
      'الترتيب أبجدي. لا تنقيط ولا تصنيف: لم نختبر أياً من هذه المنتجات أو الخدمات. والجامعات والمخابر والهيئات العمومية وفروع الشركات الأجنبية غير مدرجة.',
    ],
    limits: [
      'القائمة غير كاملة، والعروض تتغير بسرعة: قد تكون شركة أضافت منتجاً أو سحبته منذ تاريخ التحقق.',
      'الأوصاف تنقل ما تصرّح به كل شركة. لم نتحقق من الأداء ولا من اللغات المدعومة فعلاً ولا من الزبائن.',
      'Symloop، التي تنشر هذه القائمة، مدرجة في موضعها الأبجدي.',
    ],
    fix: 'معلومة خاطئة أو شركتكم غير مدرجة؟ راسلونا مع رابط الصفحة التي تصف عرضكم، ونصحّح:',
    faq: [
      ['ما هي الشركات التي تعمل في الذكاء الاصطناعي بالجزائر؟', `تحصي هذه الصفحة ${N} شركة يصف موقعها عرضاً محدداً: ${PRODUCTS.length} ناشرين لمنتجات ذكاء اصطناعي (${join(PRODUCTS, 'و')})، إضافة إلى شركات برمجيات ووكالات ويب ومكاتب استشارة تبني ذكاءً اصطناعياً على المقاس.`],
      ['ما هي الشركات الجزائرية التي تقترح شات بوت يجيب بالدارجة؟', `${join(DARIJA, 'و')} تذكر في مواقعها أن مساعدها يجيب بالدارجة الجزائرية، إضافة إلى الفرنسية والعربية.`],
      ['هل توجد حلول ذكاء اصطناعي تُثبَّت داخل المؤسسة دون إرسال البيانات إلى الخارج؟', `${join(ONPREM, 'و')} تذكران اقتراح برمجيات ذكاء اصطناعي تُثبَّت عند الزبون وتجيب انطلاقاً من وثائقه وقواعد بياناته.`],
      ['ما الفرق بين منتج ذكاء اصطناعي وذكاء اصطناعي على المقاس؟', 'منتج الذكاء الاصطناعي برنامج جاهز يُباع لزبائن كثيرين، غالباً بالاشتراك. والذكاء الاصطناعي على المقاس يُبنى لمؤسسة واحدة ويُوصل بوثائقها وبرمجياتها وقواعدها.'],
      ['كيف أضيف شركتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف عرضكم في الذكاء الاصطناعي. الإدراج مجاني.'],
    ],
    related: [['شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['الشركات الناشئة الجزائرية', '/startups-algeriennes/'], ['وكالات الويب في الجزائر', '/agences-web-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="entreprises-ia-algerie" content={CONTENT} items={AI_COMPANIES} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={AI_LABELS} />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
