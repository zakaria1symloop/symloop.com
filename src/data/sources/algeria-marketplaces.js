// Verified dataset: online marketplaces, classified-ad sites and online shops operating in
// Algeria.
//
// Method: each fact below was read on the site itself (home, about, help or seller pages) or on
// its official app-store listing on the date in VERIFIED_ON; `url` is the site. What a site does
// not state is left out. Prices, commissions, traffic figures and user counts are never
// reported, and no trust or safety judgement is made about any site. `wilayas` is the number the
// site itself states. No ranking, no personal data. To correct or add an entry:
// contact@symloop.com.
//
// focus:    builder | classifieds | marketplace | store | property
// services: for sellers (individuals_post, pro_stores, seller_signup, boosts), for buyers
//           (order_on_site, cod, card, delivery, returns, app) and categories shown
//           (cat_vehicles, cat_property, cat_electronics, cat_home, cat_fashion, cat_jobs)
// Entries without a `note` are verified but not shown on the page (ten per list).

export const VERIFIED_ON = '2026-11-26';

export const MARKETPLACES = [
  { name: 'Symloop', url: 'https://symloop.com/services/', city: 'alger', focus: 'builder', self: true, services: ['build'], wilayas: null,
    note: { fr: 'Éditeur de cette liste. N’est pas un site de vente : société de logiciel qui construit sur mesure des plateformes web (boutiques en ligne, marketplaces) et des applications mobiles, avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. Not a selling site: a software company that builds custom web platforms (online shops, marketplaces) and mobile apps, with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. ليست موقع بيع: شركة برمجيات تبني على المقاس منصات ويب (متاجر إلكترونية، أسواق إلكترونية) وتطبيقات جوال، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'AlgerieAnnonces.com', url: 'https://www.algerieannonces.com/', focus: 'classifieds', services: ['individuals_post', 'boosts', 'cat_vehicles', 'cat_property', 'cat_electronics', 'cat_jobs'], wilayas: null,
    note: { fr: 'Site de petites annonces dont la FAQ indique qu’il est ouvert aux particuliers et aux entreprises, avec des annonces gratuites et modérées et une mise en avant payante en option ; il montre l’emploi, l’auto-moto, l’immobilier, les services et le multimédia.', en: 'Classified-ads site whose FAQ says it is open to individuals and businesses, with free moderated ads and an optional paid placement; it shows jobs, cars and motorcycles, real estate, services and multimedia.', ar: 'موقع إعلانات مبوبة تذكر أسئلته الشائعة أنه مفتوح للأفراد والمؤسسات، بإعلانات مجانية مراقَبة وإبراز مدفوع اختياري؛ ويعرض التوظيف، السيارات والدراجات، العقار، الخدمات والوسائط المتعددة.' } },
  { name: 'Dirsouk', url: 'https://www.dirsouk.com/', focus: 'marketplace', services: ['individuals_post', 'pro_stores', 'cod', 'card', 'delivery', 'cat_fashion', 'cat_electronics', 'cat_home', 'cat_vehicles'], wilayas: 58,
    note: { fr: 'Se décrit comme une marketplace de seconde main avec des annonces gratuites, le paiement par CIB, Edahabia, portefeuille ou à la livraison et une livraison par un transporteur dans 58 wilayas ; l’acheteur contacte le vendeur et négocie.', en: 'Describes itself as a second-hand marketplace with free listings, payment by CIB, Edahabia, wallet or on delivery, and delivery by a carrier in 58 wilayas; the buyer contacts the seller and negotiates.', ar: 'يقدّم نفسه كسوق إلكتروني للمستعمل بإعلانات مجانية، دفع ببطاقة CIB أو الذهبية أو بالمحفظة أو عند الاستلام، وتوصيل عبر شركة نقل في 58 ولاية؛ ويتصل المشتري بالبائع ويتفاوض.' } },
  { name: 'DlalaDZ', url: 'https://dlaladz.com/', focus: 'classifieds', services: ['individuals_post', 'cat_vehicles', 'cat_property', 'cat_electronics', 'cat_home', 'cat_jobs'], wilayas: 58,
    note: { fr: 'Se décrit comme une place de marché qui met en relation acheteurs et vendeurs dans tout le pays, avec le dépôt gratuit d’annonces et une couverture annoncée de 58 wilayas.', en: 'Describes itself as a marketplace linking buyers and sellers across the country, with free ad posting and a stated coverage of 58 wilayas.', ar: 'يقدّم نفسه كسوق يربط المشترين بالبائعين في كل البلاد، مع نشر مجاني للإعلانات وتغطية معلنة لـ 58 ولاية.' } },
  { name: 'DZ-Immobilier', url: 'https://www.dz-immobilier.com/', focus: 'property', services: ['pro_stores', 'seller_signup', 'cat_property'], wilayas: null,
    note: { fr: 'Plateforme immobilière avec des annonces de vente et de location, des outils d’estimation et de simulation de crédit, un annuaire d’experts et des comptes pour les agences et les promoteurs.', en: 'Real-estate platform with sale and rental listings, valuation and loan simulation tools, an expert directory and accounts for agencies and developers.', ar: 'منصة عقارية بإعلانات البيع والكراء، أدوات للتقييم ومحاكاة القرض، دليل للخبراء وحسابات للوكالات والمرقّين.' } },
  { name: 'Dzairzone', url: 'https://dzairzone.com/', focus: 'classifieds', services: ['individuals_post', 'pro_stores', 'boosts', 'app', 'cat_vehicles', 'cat_property', 'cat_electronics', 'cat_home', 'cat_fashion', 'cat_jobs'], wilayas: null,
    note: { fr: 'Se présente comme une plateforme de petites annonces pour l’Algérie avec une trentaine de catégories, une section pour les professionnels certifiés et des annonces mises en avant ; sa fiche sur l’App Store indique une application.', en: 'Presents itself as a classified-ads platform for Algeria with about thirty categories, a section for certified professionals and boosted ads; its App Store listing shows an app.', ar: 'يقدّم نفسه كمنصة إعلانات مبوبة للجزائر بنحو ثلاثين فئة، قسم للمهنيين المعتمدين وإعلانات مبرزة؛ وتذكر صفحته على App Store تطبيقاً.' } },
  { name: 'Lkeria', url: 'https://www.lkeria.com/', focus: 'property', services: ['individuals_post', 'pro_stores', 'cat_property'], wilayas: null,
    note: { fr: 'Site d’annonces immobilières qui indique publier des annonces d’agents agréés, de promoteurs et de particuliers (vente, location, programmes neufs, location de vacances), avec des annuaires de notaires et d’architectes.', en: 'Property listings site stating it publishes ads from licensed agents, developers and individuals (sale, rental, new developments, holiday rentals), with directories of notaries and architects.', ar: 'موقع إعلانات عقارية يذكر أنه ينشر إعلانات وكلاء معتمدين، مرقّين وأفراد (بيع، كراء، مشاريع جديدة، كراء العطل)، مع أدلة للموثقين والمهندسين المعماريين.' } },
  { name: 'Marchego', url: 'https://marchego.com/', focus: 'store', services: ['order_on_site', 'cod', 'delivery', 'returns', 'cat_electronics', 'cat_home'], wilayas: 58,
    note: { fr: 'Se présente comme une boutique en ligne en Algérie avec le paiement à la livraison, une livraison dans 58 wilayas et un délai de retour annoncé ; elle montre l’électronique, la maison et la cuisine, l’électroménager, les accessoires auto et le sport.', en: 'Presents itself as an online shop in Algeria with cash on delivery, delivery to 58 wilayas and a stated return window; it shows electronics, home and kitchen, appliances, car accessories and sport.', ar: 'يقدّم نفسه كمتجر إلكتروني في الجزائر مع الدفع عند الاستلام، توصيل إلى 58 ولاية ومهلة إرجاع معلنة؛ ويعرض الإلكترونيات، المنزل والمطبخ، الأجهزة الكهرومنزلية، لوازم السيارات والرياضة.' } },
  { name: 'Ouedkniss', url: 'https://www.ouedkniss.com/', focus: 'classifieds', services: ['pro_stores', 'delivery', 'app'], wilayas: null,
    note: { fr: 'Site d’annonces de vente, d’achat et de location. Sa fiche officielle sur l’App Store le décrit comme un lieu pour vendre et acheter des produits et des services dans de nombreuses catégories, avec un service de livraison à domicile et des solutions pour les vendeurs professionnels.', en: 'Site of ads for selling, buying and renting. Its official App Store listing describes it as a place to sell and buy products and services in many categories, with a home delivery service and solutions for professional sellers.', ar: 'موقع إعلانات للبيع، الشراء والكراء. تصفه صفحته الرسمية على App Store كمكان لبيع وشراء المنتجات والخدمات في فئات كثيرة، مع خدمة توصيل إلى المنزل وحلول للبائعين المهنيين.' } },
  { name: 'Proxima Market', url: 'https://proxima.market/', focus: 'store', services: ['order_on_site', 'cod', 'card', 'delivery', 'cat_electronics', 'cat_home'], wilayas: 69,
    note: { fr: 'Vend de l’électroménager et de l’électronique en ligne et en showrooms, et indique la livraison à domicile dans 69 wilayas, le paiement à la livraison, par CIB ou Edahabia, et le retrait en magasin.', en: 'Sells appliances and electronics online and in showrooms, and states home delivery to 69 wilayas, cash on delivery, payment by CIB or Edahabia, and click and collect.', ar: 'يبيع الأجهزة الكهرومنزلية والإلكترونيات عبر الإنترنت وفي صالات العرض، ويذكر التوصيل إلى المنزل في 69 ولاية، الدفع عند الاستلام أو ببطاقة CIB أو الذهبية، والاستلام من المتجر.' } },
  // verified, not shown on the page
  { name: 'Bazaria', url: 'https://www.bazaria.co/', focus: 'classifieds', services: ['individuals_post', 'pro_stores', 'app', 'cat_vehicles', 'cat_property', 'cat_electronics', 'cat_fashion', 'cat_home'], wilayas: null },
  { name: 'Beytic', url: 'https://www.beytic.com/', focus: 'property', services: ['individuals_post', 'pro_stores', 'cat_property'], wilayas: null },
  { name: 'El Hamiz Online', url: 'https://elhamizonline.com/', focus: 'store', services: ['order_on_site', 'delivery', 'cat_home'], wilayas: 69 },
  { name: 'Linstashop', url: 'https://www.linstashop.com/', focus: 'marketplace', services: ['pro_stores', 'seller_signup', 'order_on_site', 'cod', 'card', 'delivery', 'returns', 'app', 'cat_fashion', 'cat_electronics', 'cat_home'], wilayas: null },
  { name: 'TalabaStore', url: 'https://talabastore.dz/', focus: 'marketplace', services: ['seller_signup', 'cod', 'delivery', 'cat_fashion', 'cat_electronics'], wilayas: 69 },
  { name: 'temtem', url: 'https://temtem.one/', focus: 'marketplace', services: ['seller_signup', 'card', 'delivery', 'app'], wilayas: 58 },
  { name: 'Ubuy Algeria', url: 'https://www.ubuy.dz/', focus: 'store', services: ['order_on_site', 'card', 'delivery', 'returns', 'app', 'cat_electronics', 'cat_fashion', 'cat_home'], wilayas: null },
];

// The nine shown beside the publisher: sites we could read that show activity in 2026: four
// classified-ad sites, one second-hand marketplace, two multi-category online shops and two
// property sites.
export const TOP_MARKETPLACES = ['AlgerieAnnonces.com', 'Dirsouk', 'DlalaDZ', 'DZ-Immobilier', 'Dzairzone', 'Lkeria', 'Marchego', 'Ouedkniss', 'Proxima Market'];

// Tools whose own site says they let a merchant in Algeria create an online shop (FAQ only).
export const STORE_BUILDERS = [
  { name: 'DZBuild', url: 'https://dzbuild.com/' },
  { name: 'Feeef', url: 'https://feeef.org/' },
  { name: 'Colisify', url: 'https://colisify.com/' },
];
