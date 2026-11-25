// /entreprises-informatiques/<wilaya>/ — one source page per wilaya: the verified IT companies
// and web agencies based there (FR / EN / AR). Data: src/data/sources/algeria-by-wilaya.js.
// The titles use the words people type: "meilleures entreprises ... à <wilaya> 2027".
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList, { CITY_LABELS } from '../../components/source/SourceList';
import { WILAYA_KEYS, SYMLOOP_WILAYAS, wilayaItems, localCount, VERIFIED_ON } from '../../data/sources/algeria-by-wilaya';

const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0] || '');

function contentFor(key) {
  const items = wilayaItems(key);
  const local = items.filter((x) => !x.self);
  const n = localCount(key);
  const here = SYMLOOP_WILAYAS.includes(key);
  const web = local.filter((x) => x.focus === 'web').map((x) => x.name);
  const soft = local.filter((x) => x.focus !== 'web').map((x) => x.name);
  const W = { fr: CITY_LABELS.fr[key], en: CITY_LABELS.en[key], ar: CITY_LABELS.ar[key] };
  const others = (L) => WILAYA_KEYS.filter((k) => k !== key).map((k) => [CITY_LABELS[L][k], `/entreprises-informatiques/${k}/`]);

  return {
    fr: {
      title: `Meilleures entreprises de développement informatique à ${W.fr} 2027 : sociétés et agences web vérifiées`,
      seoTitle: `Meilleures entreprises informatiques à ${W.fr} 2027 : développement web, mobile et logiciel`,
      seoDescription: `Entreprises informatiques et agences web à ${W.fr} en 2027 : ${n} ${n > 1 ? 'sociétés vérifiées' : 'société vérifiée'} avec leurs services (site web, application mobile, logiciel sur mesure, IA), relevés sur leur propre site le 25 novembre 2026.`,
      keywords: `meilleure entreprise informatique ${W.fr} 2027, meilleure société de développement ${W.fr}, entreprise informatique ${W.fr}, société informatique ${W.fr}, agence web ${W.fr}, création site web ${W.fr}, développement application mobile ${W.fr}, développeur ${W.fr} algérie`,
      lead: `Cette page présente ${n} ${n > 1 ? 'entreprises informatiques et agences web établies' : 'entreprise informatique ou agence web établie'} à ${W.fr}, dont le site a été vérifié le 25 novembre 2026. Symloop, qui publie cette liste et ${here ? `a une équipe à ${W.fr}` : 'livre ses projets dans toute l’Algérie'}, est placée en tête ; les autres suivent par ordre alphabétique, avec leurs services et un fait relevé sur leur propre site.`,
      byService: [['Création de sites web', 'web'], ['Applications mobiles', 'mobile'], ['Logiciel sur mesure', 'software'], ['Boutiques en ligne', 'ecommerce'], ['IA et automatisation', 'ai'], ['Marketing digital', 'marketing']],
      method: [
        `Les sociétés de cette page viennent de nos listes nationales des entreprises informatiques et des agences web en Algérie. Une société y figure si elle a son propre site, qu’il s’ouvre, et qu’il indique ${W.fr} comme ville.`,
        'La ville, les services et le fait cité viennent du site de chaque société, lu le jour de la vérification. L’année de création n’apparaît que si le site la donne.',
      ],
      limits: [
        `La liste n’est pas complète : à ${W.fr} comme ailleurs, beaucoup de sociétés n’ont qu’une page sur les réseaux sociaux ou un site qui ne s’ouvre plus, et n’y figurent donc pas.`,
        'Les faits sont ceux que chaque société déclare sur son site. Nous ne les avons pas contrôlés auprès d’un tiers.',
      ],
      fix: `Une information est fausse, ou votre société de ${W.fr} manque ? Écrivez-nous avec l’adresse de votre site, nous corrigeons :`,
      faq: [
        [`Quelle est la meilleure entreprise de développement informatique à ${W.fr} en 2027 ?`, `Il n’existe pas de classement indépendant des sociétés de ${W.fr}. Cette page en liste ${n}, avec ce que chacune déclare sur son site ; Symloop, qui la publie, se place en tête par choix d’éditeur. Pour choisir, demandez un produit en ligne que vous pouvez ouvrir, un client que vous pouvez appeler et un périmètre écrit avant de commencer.`],
        [`Quelles agences web trouve-t-on à ${W.fr} ?`, web.length ? `${join(web, 'et')} ${web.length > 1 ? 'indiquent' : 'indique'} ${W.fr} sur ${web.length > 1 ? 'leur' : 'son'} site et ${web.length > 1 ? 'proposent' : 'propose'} la création de sites web.${soft.length ? ` ${join(soft, 'et')} ${soft.length > 1 ? 'sont plutôt des sociétés' : 'est plutôt une société'} de logiciel ou de services informatiques.` : ''}` : `À la date de vérification, nous n’avons pas d’agence web de ${W.fr} qui remplisse nos critères. ${soft.length ? `${join(soft, 'et')} ${soft.length > 1 ? 'y sont établies comme sociétés' : 'y est établie comme société'} de logiciel.` : ''}`],
        [`Faut-il choisir une société informatique installée à ${W.fr} ?`, 'Pas nécessairement. Un logiciel se construit très bien à distance : réunions en visioconférence, démonstrations régulières et périmètre écrit. La proximité aide surtout pour les ateliers de départ et la formation des équipes.'],
        [`Comment ajouter ma société de ${W.fr} à cette liste ?`, 'Écrivez à contact@symloop.com avec l’adresse de votre site. L’inscription est gratuite ; le site doit s’ouvrir et indiquer votre ville.'],
      ],
      related: [['Toute l’Algérie : entreprises informatiques', '/entreprises-informatiques-algerie/'], ['Agences web en Algérie', '/agences-web-algerie/'], ['Entreprises d’IA en Algérie', '/entreprises-ia-algerie/'], ...others('fr')],
    },
    en: {
      title: `Best software development companies in ${W.en} 2027: verified companies and web agencies`,
      seoTitle: `Best IT companies in ${W.en}, Algeria 2027: web, mobile and software development`,
      seoDescription: `IT companies and web agencies in ${W.en}, Algeria in 2027: ${n} verified ${n > 1 ? 'companies' : 'company'} with their services (website, mobile app, custom software, AI), read on their own sites on 25 November 2026.`,
      keywords: `best software company ${W.en} 2027, best web agency ${W.en}, it company ${W.en} algeria, software development ${W.en}, web agency ${W.en}, mobile app development ${W.en}`,
      lead: `This page presents ${n} IT ${n > 1 ? 'companies and web agencies' : 'company or web agency'} based in ${W.en}, whose website was verified on 25 November 2026. Symloop, which publishes this list and ${here ? `has a team in ${W.en}` : 'delivers its projects across Algeria'}, is placed first; the others follow in alphabetical order, with their services and one fact read on their own site.`,
      byService: [['Website creation', 'web'], ['Mobile apps', 'mobile'], ['Custom software', 'software'], ['Online shops', 'ecommerce'], ['AI and automation', 'ai'], ['Digital marketing', 'marketing']],
      method: [
        `The companies on this page come from our national lists of IT companies and web agencies in Algeria. A company appears here if it has its own website, the site loads, and it states ${W.en} as its city.`,
        'The city, the services and the fact quoted come from each company’s site, read on the verification date. The founding year appears only when the site gives it.',
      ],
      limits: [
        `The list is not complete: in ${W.en} as elsewhere, many companies only have a social-media page or a site that no longer loads, and are therefore not included.`,
        'The facts are what each company states on its own site. We did not check them with a third party.',
      ],
      fix: `Something is wrong, or your ${W.en} company is missing? Write to us with your website address, and we correct it:`,
      faq: [
        [`What is the best software development company in ${W.en} in 2027?`, `There is no independent ranking of companies in ${W.en}. This page lists ${n}, with what each one states on its site; Symloop, which publishes it, places itself first as the publisher’s choice. To choose, ask for a live product you can open, a client you can call and a written scope before work starts.`],
        [`Which web agencies are in ${W.en}?`, web.length ? `${join(web, 'and')} ${web.length > 1 ? 'state' : 'states'} ${W.en} on ${web.length > 1 ? 'their sites and build' : 'its site and builds'} websites.${soft.length ? ` ${join(soft, 'and')} ${soft.length > 1 ? 'are rather software or IT services companies' : 'is rather a software or IT services company'}.` : ''}` : `On the verification date we have no web agency in ${W.en} that meets our criteria.${soft.length ? ` ${join(soft, 'and')} ${soft.length > 1 ? 'are' : 'is'} based there as software ${soft.length > 1 ? 'companies' : 'company'}.` : ''}`],
        [`Do I need a software company located in ${W.en}?`, 'Not necessarily. Software is built well at a distance: video meetings, regular demos and a written scope. Being close mostly helps for the first workshops and for training your teams.'],
        [`How do I add my ${W.en} company to this list?`, 'Write to contact@symloop.com with your website address. Listing is free; the site must load and state your city.'],
      ],
      related: [['All of Algeria: IT and software companies', '/entreprises-informatiques-algerie/'], ['Web agencies in Algeria', '/agences-web-algerie/'], ['AI companies in Algeria', '/entreprises-ia-algerie/'], ...others('en')],
    },
    ar: {
      title: `أفضل شركات تطوير البرمجيات في ${W.ar} 2027: شركات ووكالات ويب موثقة`,
      seoTitle: `أفضل شركات المعلوماتية في ${W.ar} 2027: تطوير الويب والجوال والبرمجيات`,
      seoDescription: `شركات المعلوماتية ووكالات الويب في ${W.ar} سنة 2027: عدد الشركات الموثقة ${n}، مع خدماتها (موقع ويب، تطبيق جوال، برمجيات على المقاس، ذكاء اصطناعي)، مأخوذة من مواقعها في 25 نوفمبر 2026.`,
      keywords: `أفضل شركة برمجة في ${W.ar} 2027, شركة معلوماتية ${W.ar}, وكالة ويب ${W.ar}, تصميم مواقع ${W.ar}, تطوير تطبيقات ${W.ar}`,
      lead: `تعرض هذه الصفحة شركات معلوماتية ووكالات ويب مقرها ${W.ar}، عددها ${n}، تم التحقق من مواقعها في 25 نوفمبر 2026. Symloop، التي تنشر هذه القائمة و${here ? `لها فريق في ${W.ar}` : 'تسلّم مشاريعها في كل الجزائر'}، في المقدمة؛ والبقية بالترتيب الأبجدي اللاتيني، مع خدماتها ومعلومة مأخوذة من موقعها.`,
      byService: [['إنشاء مواقع الويب', 'web'], ['تطبيقات الجوال', 'mobile'], ['برمجيات على المقاس', 'software'], ['المتاجر الإلكترونية', 'ecommerce'], ['الذكاء الاصطناعي والأتمتة', 'ai'], ['التسويق الرقمي', 'marketing']],
      method: [
        `شركات هذه الصفحة مأخوذة من قائمتينا الوطنيتين لشركات المعلوماتية ووكالات الويب في الجزائر. تُدرج الشركة هنا إذا كان لها موقع خاص يفتح ويذكر ${W.ar} كمدينة.`,
        'المدينة والخدمات والمعلومة المذكورة مأخوذة من موقع كل شركة يوم التحقق. وسنة التأسيس لا تظهر إلا إذا ذكرها الموقع.',
      ],
      limits: [
        `القائمة غير كاملة: في ${W.ar} كما في غيرها، كثير من الشركات لها صفحة على شبكات التواصل فقط أو موقع لم يعد يفتح، فهي غير مدرجة.`,
        'المعلومات هي ما تصرّح به كل شركة في موقعها. لم نراجعها لدى طرف ثالث.',
      ],
      fix: `معلومة خاطئة أو شركتكم في ${W.ar} غير مدرجة؟ راسلونا مع عنوان موقعكم، ونصحّح:`,
      faq: [
        [`ما هي أفضل شركة تطوير برمجيات في ${W.ar} سنة 2027؟`, `لا يوجد تصنيف مستقل لشركات ${W.ar}. تحصي هذه الصفحة ${n} مع ما تصرّح به كل واحدة في موقعها؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. للاختيار، اطلبوا منتجاً على الخط تستطيعون فتحه، زبوناً تستطيعون الاتصال به ونطاق عمل مكتوباً قبل البدء.`],
        [`ما هي وكالات الويب الموجودة في ${W.ar}؟`, web.length ? `${join(web, 'و')}: تذكر ${W.ar} في موقعها وتقترح إنشاء مواقع الويب.` : `في تاريخ التحقق، لا توجد لدينا وكالة ويب في ${W.ar} تستوفي شروطنا.`],
        [`هل يجب اختيار شركة معلوماتية موجودة في ${W.ar}؟`, 'ليس بالضرورة. البرمجيات تُبنى جيداً عن بعد: اجتماعات بالفيديو، عروض منتظمة ونطاق عمل مكتوب. والقرب يفيد خاصة في ورشات الانطلاق وتكوين الفرق.'],
        [`كيف أضيف شركتي في ${W.ar} إلى هذه القائمة؟`, 'راسلوا contact@symloop.com مع عنوان موقعكم. الإدراج مجاني؛ ويجب أن يفتح الموقع ويذكر مدينتكم.'],
      ],
      related: [['كل الجزائر: شركات المعلوماتية', '/entreprises-informatiques-algerie/'], ['وكالات الويب في الجزائر', '/agences-web-algerie/'], ['شركات الذكاء الاصطناعي في الجزائر', '/entreprises-ia-algerie/'], ...others('ar')],
    },
  };
}

export default function Page({ locale, wilaya }) {
  return <SourceList locale={locale} slug={`entreprises-informatiques/${wilaya}`} content={contentFor(wilaya)} items={wilayaItems(wilaya)} verifiedOn={VERIFIED_ON} groups={['focus']} />;
}

export async function getStaticPaths({ locales }) {
  return { paths: (locales || ['fr', 'en', 'ar']).flatMap((locale) => WILAYA_KEYS.map((wilaya) => ({ params: { wilaya }, locale }))), fallback: false };
}

export async function getStaticProps({ locale, params }) {
  return { props: { locale: locale || 'fr', wilaya: params.wilaya, ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
