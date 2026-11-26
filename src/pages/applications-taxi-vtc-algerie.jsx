// /applications-taxi-vtc-algerie/ — source page: verified list of taxi and ride-hailing (VTC)
// apps operating in Algeria (FR / EN / AR). Data: src/data/sources/algeria-ride-apps.js.
// No fares, no download counts, no safety judgement.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList, { CITY_LABELS } from '../components/source/SourceList';
import { RIDE_APPS, TOP_RIDE, NOT_IN_ALGERIA, VERIFIED_ON } from '../data/sources/algeria-ride-apps';

// ten per list: the publisher and nine apps (rule in SELECTION below)
const ITEMS = RIDE_APPS.filter((x) => x.self || TOP_RIDE.includes(x.name));
const TOTAL = RIDE_APPS.filter((x) => !x.self).length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const inCity = (key) => ITEMS.filter((x) => !x.self && x.cities.includes(key)).map((x) => x.name);
const ALGER = inCity('alger');
const ORAN = inCity('oran');
const CONSTANTINE = inCity('constantine');
const WOMEN = has('women_only');
const UPFRONT = has('price_upfront');
const NEGOTIATED = has('price_negotiated');
const CARD = has('pay_card');
const INTERCITY = has('intercity');
const MOTO = has('moto');
const HEETCH_CITIES = (L, sep) => RIDE_APPS.find((x) => x.name === 'Heetch').cities.map((k) => CITY_LABELS[L][k] || k).join(sep);

const KIND_LABELS = {
  fr: { custom: 'Sur mesure', app: 'Applications de taxi et VTC' },
  en: { custom: 'Custom-built', app: 'Taxi and ride-hailing apps' },
  ar: { custom: 'على المقاس', app: 'تطبيقات الطاكسي و VTC' },
};
const FEATURE_LABELS = {
  fr: { custom: 'construit des applications sur mesure', car_ride: 'VTC', taxi: 'taxi', moto: 'moto-taxi', women_only: 'option femmes', intercity: 'trajets entre villes', airport: 'aéroport', scheduled: 'réservation à l’avance', delivery: 'livraison de colis', food: 'repas', business: 'offre entreprises', pay_cash: 'espèces', pay_card: 'carte', pay_wallet: 'portefeuille', price_upfront: 'prix affiché avant la course', price_negotiated: 'prix proposé par le passager' },
  en: { custom: 'builds custom apps', car_ride: 'private hire', taxi: 'taxi', moto: 'moto taxi', women_only: 'women option', intercity: 'city-to-city trips', airport: 'airport', scheduled: 'advance booking', delivery: 'parcel delivery', food: 'food', business: 'business offer', pay_cash: 'cash', pay_card: 'card', pay_wallet: 'wallet', price_upfront: 'price shown before the ride', price_negotiated: 'price proposed by the passenger' },
  ar: { custom: 'تبني تطبيقات على المقاس', car_ride: 'VTC', taxi: 'طاكسي', moto: 'دراجة نارية', women_only: 'خيار للنساء', intercity: 'رحلات بين المدن', airport: 'المطار', scheduled: 'حجز مسبق', delivery: 'توصيل الطرود', food: 'وجبات', business: 'عرض للمؤسسات', pay_cash: 'نقداً', pay_card: 'بطاقة', pay_wallet: 'محفظة', price_upfront: 'السعر يظهر قبل الرحلة', price_negotiated: 'السعر يقترحه الراكب' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} applications. Cette page en retient dix : Symloop, qui publie la liste et construit des applications sur mesure, et les neuf applications dont nous avons lu directement le site ou la fiche officielle et qui ont été mises à jour en 2025 ou en 2026.`,
  en: `We verified ${TOTAL} apps. This page keeps ten: Symloop, which publishes the list and builds custom apps, and the nine apps whose own site or official store listing we read directly and which were updated in 2025 or 2026.`,
  ar: `تحققنا من ${TOTAL} تطبيقاً. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني تطبيقات على المقاس، والتطبيقات التسعة التي قرأنا مباشرة موقعها أو صفحتها الرسمية وتم تحديثها في 2025 أو 2026.`,
};

const CONTENT = {
  fr: {
    title: `Meilleures applications de taxi et VTC en Algérie 2027 : liste vérifiée de ${N} applications`,
    seoTitle: `Meilleures applications de taxi et VTC en Algérie 2027 (${N} vérifiées)`,
    seoDescription: `Applications de taxi et de VTC en Algérie en 2027 : ${N} applications vérifiées avec les villes nommées, les types de course (VTC, taxi, moto, option femmes, trajets entre villes), les moyens de paiement et la façon dont le prix est fixé. Vérifié le 26 novembre 2026.`,
    keywords: 'meilleure application taxi alger 2027, application taxi algérie, application vtc algérie, application taxi femme alger, appli taxi oran, application taxi constantine, application uber algérie, application transport alger',
    colCompany: 'Application', colDoes: 'Courses, paiement et prix', colFact: 'Ce que son site ou sa fiche en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} entrées sur les applications de taxi et de VTC en Algérie : neuf applications avec lesquelles on commande une course, et Symloop, qui construit des applications mobiles sur mesure. Pour chacune : les villes que l’opérateur nomme, les types de course, les moyens de paiement et la façon dont le prix est fixé, relevés sur son site ou sa fiche officielle ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Avec une option femmes', 'women_only'], ['Affichent le prix avant la course', 'price_upfront'], ['Le passager propose le prix', 'price_negotiated'], ['Acceptent la carte', 'pay_card'], ['Trajets entre villes', 'intercity'], ['Moto-taxi', 'moto'], ['Courses vers l’aéroport', 'airport'], ['Livrent aussi des colis', 'delivery']],
    method: [
      'Nous avons cherché avec des mots simples : « application taxi Alger », « application VTC Algérie », « application taxi femme Alger », « appli taxi Oran ».',
      'Une application entre dans la liste si son site ou sa fiche officielle sur l’App Store s’ouvre et indique qu’elle fonctionne en Algérie. Les villes sont celles que la page nomme ; quand l’opérateur ne publie pas de liste, nous n’en indiquons pas. Nous ne reprenons ni tarif, ni commission, ni nombre de téléchargements. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons commandé aucune course : les villes, les options et les moyens de paiement sont ceux que chaque opérateur annonce à la date de vérification, et ils changent souvent. Vérifiez dans l’application avant de compter dessus.',
      'Cette page ne porte aucun jugement sur la sécurité, la qualité ou le prix d’un service.',
    ],
    fix: 'Une information est fausse, ou votre application manque ? Écrivez-nous avec le lien de sa page officielle, nous corrigeons :',
    faq: [
      ['Quelle est la meilleure application de taxi en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque opérateur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et n’est pas une application de taxi. Le bon choix dépend de la ville, du type de course et du moyen de paiement.`],
      ['Quelle application de taxi utiliser à Alger ?', `${join(ALGER, 'et')} nomment Alger parmi les villes desservies. Les autres applications de cette page ne publient pas la liste de leurs villes sur la page lue : vérifiez dans l’application.`],
      ['Quelle application de taxi à Oran et à Constantine ?', `Pour Oran, ${join(ORAN, 'et')} nomment la ville ; pour Constantine, ${join(CONSTANTINE, 'et')}. Heetch cite en tout dix-huit villes : ${HEETCH_CITIES('fr', ', ')}.`],
      ['Existe-t-il une application de taxi pour femmes en Algérie ?', `${join(WOMEN, 'et')} annoncent une option réservée aux femmes ou avec des conductrices. C’est ce que chaque opérateur annonce ; la disponibilité dépend de la ville.`],
      ['Uber est-il disponible en Algérie ?', `Le 26 novembre 2026, l’Algérie ne figurait pas dans la liste des pays que ${join(NOT_IN_ALGERIA, 'et')} publient sur leur site. Les applications de cette page proposent un service de commande de course en Algérie.`],
      ['Le prix est-il connu avant la course ?', `${join(UPFRONT, 'et')} indiquent un prix affiché ou fixé avant la course. Avec ${join(NEGOTIATED, 'et')}, le passager propose un prix et choisit parmi les offres des conducteurs.`],
      ['Peut-on payer par carte ?', `${join(CARD, 'et')} indiquent le paiement par carte. Les autres applications de cette page indiquent le paiement en espèces ou ne précisent pas le moyen de paiement.`],
      ['Quelles applications proposent les trajets entre villes ou le moto-taxi ?', `${join(INTERCITY, 'et')} annoncent des trajets entre villes ; ${join(MOTO, 'et')} annonce le moto-taxi.`],
      ['Comment créer sa propre application de taxi ou de VTC en Algérie ?', 'Un service de ce type repose sur trois logiciels : une application pour les passagers, une application pour les conducteurs et un tableau de bord pour l’exploitant (courses, tarifs, paiements, support). Symloop, qui publie cette page, est une société de développement qui construit des applications mobiles sur mesure.'],
      ['Comment ajouter mon application à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page officielle de votre application. L’inscription est gratuite.'],
    ],
    related: [['Meilleures entreprises informatiques en Algérie', '/entreprises-informatiques-algerie/'], ['Startups algériennes', '/startups-algeriennes/'], ['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best taxi and ride-hailing apps in Algeria 2027: a verified list of ${N} apps`,
    seoTitle: `Best taxi and ride-hailing apps in Algeria 2027 (${N} verified)`,
    seoDescription: `Taxi and ride-hailing apps in Algeria in 2027: ${N} verified apps with the cities named, ride types (private hire, taxi, moto, women option, city-to-city), payment methods and how the price is set. Verified on 26 November 2026.`,
    keywords: 'best taxi app algiers 2027, taxi app algeria, ride hailing app algeria, vtc app algeria, women taxi app algiers, taxi app oran, uber algeria, transport app algiers',
    colCompany: 'App', colDoes: 'Rides, payment and price', colFact: 'What its site or listing says', countLabel: 'verified entries',
    lead: `This page presents ${N} entries on taxi and ride-hailing apps in Algeria: nine apps through which you order a ride, and Symloop, which builds custom mobile apps. For each one: the cities the operator names, the ride types, the payment methods and how the price is set, read on its site or official listing; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['With a women option', 'women_only'], ['Show the price before the ride', 'price_upfront'], ['The passenger proposes the price', 'price_negotiated'], ['Accept cards', 'pay_card'], ['City-to-city trips', 'intercity'], ['Moto taxi', 'moto'], ['Airport rides', 'airport'], ['Also deliver parcels', 'delivery']],
    method: [
      'We searched with simple words such as “taxi app Algiers”, “ride-hailing app Algeria”, “women taxi app Algiers” and “taxi app Oran”.',
      'An app enters the list if its site or official App Store listing loads and states that it operates in Algeria. The cities are those the page names; when the operator publishes no list, we show none. We report no fares, commissions or download counts. Each name links to the page read.',
    ],
    limits: [
      'We ordered no ride: the cities, options and payment methods are those each operator announces on the verification date, and they change often. Check in the app before relying on them.',
      'This page makes no judgement about the safety, quality or price of any service.',
    ],
    fix: 'Something is wrong, or your app is missing? Write to us with the link to its official page, and we correct it:',
    faq: [
      ['What is the best taxi app in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each operator announces; Symloop, which publishes it, places itself first as the publisher’s choice and is not a taxi app. The right choice depends on the city, the ride type and the payment method.`],
      ['Which taxi app can I use in Algiers?', `${join(ALGER, 'and')} name Algiers among the cities served. The other apps on this page do not publish their list of cities on the page read: check in the app.`],
      ['Which taxi app in Oran and Constantine?', `For Oran, ${join(ORAN, 'and')} name the city; for Constantine, ${join(CONSTANTINE, 'and')}. Heetch names eighteen cities in all: ${HEETCH_CITIES('en', ', ')}.`],
      ['Is there a taxi app for women in Algeria?', `${join(WOMEN, 'and')} announce an option reserved for women or with women drivers. This is what each operator announces; availability depends on the city.`],
      ['Is Uber available in Algeria?', `On 26 November 2026, Algeria was not in the list of countries that ${join(NOT_IN_ALGERIA, 'and')} publish on their sites. The apps on this page offer ride ordering in Algeria.`],
      ['Is the price known before the ride?', `${join(UPFRONT, 'and')} state a price shown or fixed before the ride. With ${join(NEGOTIATED, 'and')}, the passenger proposes a price and chooses among drivers’ offers.`],
      ['Can I pay by card?', `${join(CARD, 'and')} state card payment. The other apps on this page state cash payment or do not state the payment method.`],
      ['Which apps offer city-to-city trips or moto taxi?', `${join(INTERCITY, 'and')} announce city-to-city trips; ${join(MOTO, 'and')} announces moto taxi.`],
      ['How do I create my own taxi or ride-hailing app in Algeria?', 'A service of this kind rests on three pieces of software: an app for passengers, an app for drivers and a dashboard for the operator (rides, fares, payments, support). Symloop, which publishes this page, is a development company that builds custom mobile apps.'],
      ['How do I add my app to this list?', 'Write to contact@symloop.com with the link to your app’s official page. Listing is free.'],
    ],
    related: [['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Algerian startups', '/startups-algeriennes/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل تطبيقات الطاكسي و VTC في الجزائر 2027: قائمة موثقة من ${N} تطبيقات`,
    seoTitle: `أفضل تطبيقات الطاكسي و VTC في الجزائر 2027 (${N} موثقة)`,
    seoDescription: `تطبيقات الطاكسي و VTC في الجزائر سنة 2027: ${N} تطبيقات موثقة مع المدن المذكورة، أنواع الرحلات (VTC، طاكسي، دراجة نارية، خيار للنساء، رحلات بين المدن)، وسائل الدفع وطريقة تحديد السعر. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل تطبيق طاكسي الجزائر 2027, تطبيق طاكسي الجزائر, تطبيق نقل الجزائر, تطبيق طاكسي للنساء الجزائر, تطبيق طاكسي وهران, تطبيق طاكسي قسنطينة, أوبر الجزائر',
    colCompany: 'التطبيق', colDoes: 'الرحلات، الدفع والسعر', colFact: 'ما يذكره موقعه أو صفحته', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} مدخلات عن تطبيقات الطاكسي و VTC في الجزائر: تسعة تطبيقات تُطلب بها الرحلة، و Symloop التي تبني تطبيقات جوال على المقاس. لكل واحد: المدن التي يذكرها المتعامل، أنواع الرحلات، وسائل الدفع وطريقة تحديد السعر، مأخوذة من موقعه أو صفحته الرسمية؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['بخيار للنساء', 'women_only'], ['تُظهر السعر قبل الرحلة', 'price_upfront'], ['الراكب يقترح السعر', 'price_negotiated'], ['تقبل البطاقة', 'pay_card'], ['رحلات بين المدن', 'intercity'], ['دراجة نارية', 'moto'], ['رحلات إلى المطار', 'airport'], ['توصّل الطرود أيضاً', 'delivery']],
    method: [
      'بحثنا بكلمات بسيطة مثل «تطبيق طاكسي الجزائر» و«تطبيق نقل الجزائر» و«تطبيق طاكسي للنساء الجزائر» و«تطبيق طاكسي وهران».',
      'يدخل التطبيق القائمة إذا كان موقعه أو صفحته الرسمية على App Store تفتح وتذكر أنه يعمل في الجزائر. المدن هي ما تذكره الصفحة؛ وحين لا ينشر المتعامل قائمة لا نذكر أي مدينة. ولا ننقل أي سعر ولا عمولة ولا عدد تحميلات. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نطلب أي رحلة: المدن، الخيارات ووسائل الدفع هي ما يعلنه كل متعامل في تاريخ التحقق، وهي تتغير كثيراً. تحققوا في التطبيق قبل الاعتماد عليها.',
      'لا تصدر هذه الصفحة أي حكم على أمان أي خدمة أو جودتها أو سعرها.',
    ],
    fix: 'معلومة خاطئة أو تطبيقكم غير مدرج؟ راسلونا مع رابط صفحته الرسمية، ونصحّح:',
    faq: [
      ['ما هو أفضل تطبيق طاكسي في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل متعامل؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر وليست تطبيق طاكسي. والاختيار الصحيح يتوقف على المدينة، نوع الرحلة ووسيلة الدفع.`],
      ['أي تطبيق طاكسي أستعمل في الجزائر العاصمة؟', `${join(ALGER, 'و')} تذكر الجزائر العاصمة ضمن المدن المخدومة. والتطبيقات الأخرى في هذه الصفحة لا تنشر قائمة مدنها في الصفحة المقروءة: تحققوا في التطبيق.`],
      ['أي تطبيق طاكسي في وهران وقسنطينة؟', `لوهران، ${join(ORAN, 'و')} تذكر المدينة؛ ولقسنطينة، ${join(CONSTANTINE, 'و')}. ويذكر Heetch ثماني عشرة مدينة في المجموع: ${HEETCH_CITIES('ar', '، ')}.`],
      ['هل يوجد تطبيق طاكسي للنساء في الجزائر؟', `${join(WOMEN, 'و')} تعلن خياراً خاصاً بالنساء أو مع سائقات. هذا ما يعلنه كل متعامل؛ والتوفر يتوقف على المدينة.`],
      ['هل أوبر متوفر في الجزائر؟', `في 26 نوفمبر 2026، لم تكن الجزائر ضمن قائمة البلدان التي ينشرها ${join(NOT_IN_ALGERIA, 'و')} في مواقعها. والتطبيقات المذكورة في هذه الصفحة تقترح طلب الرحلات في الجزائر.`],
      ['هل يُعرف السعر قبل الرحلة؟', `${join(UPFRONT, 'و')} تذكر سعراً يظهر أو يُحدَّد قبل الرحلة. ومع ${join(NEGOTIATED, 'و')}، يقترح الراكب سعراً ويختار بين عروض السائقين.`],
      ['هل يمكن الدفع بالبطاقة؟', `${join(CARD, 'و')} تذكر الدفع بالبطاقة. والتطبيقات الأخرى في هذه الصفحة تذكر الدفع نقداً أو لا تحدد وسيلة الدفع.`],
      ['ما هي التطبيقات التي تقترح رحلات بين المدن أو دراجة نارية؟', `${join(INTERCITY, 'و')} تعلن رحلات بين المدن؛ و${join(MOTO, 'و')} يعلن الدراجة النارية.`],
      ['كيف أنشئ تطبيق طاكسي أو VTC خاصاً بي في الجزائر؟', 'خدمة من هذا النوع تقوم على ثلاثة برامج: تطبيق للركاب، تطبيق للسائقين ولوحة قيادة للمستغل (الرحلات، الأسعار، المدفوعات، الدعم). و Symloop، التي تنشر هذه الصفحة، شركة تطوير تبني تطبيقات جوال على المقاس.'],
      ['كيف أضيف تطبيقي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة الرسمية لتطبيقكم. الإدراج مجاني.'],
    ],
    related: [['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['الشركات الناشئة الجزائرية', '/startups-algeriennes/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="applications-taxi-vtc-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={[]} hideFounded hideCity />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
