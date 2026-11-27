// Verified dataset: communication, advertising, events and digital-marketing agencies in the
// wilaya of Algiers.
//
// Method: each fact below was read on the agency's own website on the date in VERIFIED_ON; `url`
// is the page read. Directories were used for discovery only. What a site does not state is left
// out. Prices, team sizes, client names, awards and founding years are never reported, and no
// person is named. No ranking. Pure web-development companies are on /agences-web-algerie/.
// To correct or add an entry: contact@symloop.com.
//
// focus:    builder | full (communication across print, digital and events) | events | digital
//           (social media and ads) | visual (signage, print, displays) | consulting (group)
// city:     commune as the site states it (shown as written)
// services: branding, advertising, media_buying, outdoor, social_media, digital_ads, seo, website,
//           video, events, print, pr, influence, strategy
// Entries without a `note` are verified but not shown on the page (ten per list).

export const VERIFIED_ON = '2026-11-26';

export const COMMUNICATION_AGENCIES = [
  { name: 'Symloop', url: 'https://symloop.com/services/', city: 'alger', focus: 'builder', self: true, services: ['custom'],
    note: { fr: 'Éditeur de cette liste. N’est pas une agence de communication : société de logiciel qui construit les sites, applications et plateformes vers lesquels mènent les campagnes (formulaires, paiement, suivi des demandes), avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. Not a communication agency: a software company building the sites, apps and platforms campaigns lead to (forms, payment, request tracking), with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. ليست وكالة اتصال: شركة برمجيات تبني المواقع والتطبيقات والمنصات التي تقود إليها الحملات (الاستمارات، الدفع، متابعة الطلبات)، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'CF Agency', url: 'https://www.cfa-agency.com/', city: 'Hydra', focus: 'full', services: ['strategy', 'branding', 'social_media', 'website', 'seo', 'video', 'events', 'pr'],
    note: { fr: 'Le site énumère la stratégie, l’identité visuelle, le marketing digital et les réseaux sociaux, les sites et le référencement, l’audiovisuel, les événements et les relations presse ; la distribution de produits figure aussi parmi ses services.', en: 'The site lists strategy, visual identity, digital and social media marketing, websites and SEO, audiovisual work, events and press relations; product distribution is also among its services.', ar: 'يعدّد الموقع الاستراتيجية، الهوية البصرية، التسويق الرقمي وشبكات التواصل، المواقع والإحالة، السمعي البصري، الفعاليات والعلاقات الصحفية؛ وتوزيع المنتجات من بين خدماته أيضاً.' } },
  { name: 'COM EVENT’AL', url: 'https://comevental.dz/', city: 'Ouled Fayet', focus: 'events', services: ['events', 'video'],
    note: { fr: 'Agence d’événementiel et de digital : événements d’entreprise, congrès médicaux, salons, team building et installations techniques, ainsi que marketing digital et production audiovisuelle.', en: 'Events and digital agency: corporate events, medical congresses, trade shows, team building and technical set-up, plus digital marketing and audiovisual production.', ar: 'وكالة فعاليات ورقمي: فعاليات المؤسسات، المؤتمرات الطبية، المعارض، بناء الفرق والتجهيزات التقنية، إضافة إلى التسويق الرقمي والإنتاج السمعي البصري.' } },
  { name: 'Dusens Group', url: 'https://dusens.group/fr/', city: 'Alger', focus: 'consulting', services: ['strategy', 'branding', 'social_media', 'website'],
    note: { fr: 'Groupe de conseil en communication qui indique un bureau à Alger, à côté de Nice, Paris et Abou Dhabi ; il couvre le conseil, le contenu de marque, le digital et les réseaux sociaux.', en: 'Communication consulting group stating an office in Algiers alongside Nice, Paris and Abu Dhabi; it covers advisory, brand content, digital and social media.', ar: 'مجموعة استشارات في الاتصال تذكر مكتباً في الجزائر العاصمة إلى جانب نيس وباريس وأبوظبي؛ وتغطي الاستشارة، محتوى العلامة، الرقمي وشبكات التواصل.' } },
  { name: 'Ettayssir Studio de Création', url: 'https://ettayssir.com/', city: 'Hydra', focus: 'full', services: ['strategy', 'website', 'branding', 'print', 'events', 'video'],
    note: { fr: 'Se présente comme une agence de communication globale : stratégie, sites web, identité visuelle, impression offset et numérique, événements d’entreprise et audiovisuel.', en: 'Presents itself as a full communication agency: strategy, websites, visual identity, offset and digital print, corporate events and audiovisual work.', ar: 'تقدّم نفسها كوكالة اتصال شاملة: الاستراتيجية، مواقع الويب، الهوية البصرية، الطباعة الأوفست والرقمية، فعاليات المؤسسات والسمعي البصري.' } },
  { name: 'FAN Advertising Algérie', url: 'https://www.fancommunication.dz/', city: 'Bir Mourad Raïs', focus: 'full', services: ['branding', 'advertising', 'outdoor', 'print', 'events', 'website', 'seo', 'social_media', 'video', 'strategy'],
    note: { fr: 'Le site indique un bureau à Bir Mourad Raïs et propose identité visuelle, signalétique, impression, événements, sites web, référencement, réseaux sociaux, audiovisuel et stratégie marketing.', en: 'The site states an office in Bir Mourad Raïs and offers branding, signage, print, events, websites, SEO, social media, audiovisual production and marketing strategy.', ar: 'يذكر الموقع مكتباً في بئر مراد رايس ويقترح الهوية البصرية، اللافتات، الطباعة، الفعاليات، مواقع الويب، الإحالة، شبكات التواصل، السمعي البصري واستراتيجية التسويق.' } },
  { name: 'PRISM CREATIVE', url: 'https://www.prismcreative.dz/', city: 'Alger Centre', focus: 'full', services: ['strategy', 'website', 'print', 'video', 'events'],
    note: { fr: 'Siège indiqué rue Didouche Mourad ; propose le conseil et la stratégie de communication, les sites web, l’impression sur tous supports, l’audiovisuel et l’organisation d’événements.', en: 'Head office stated on rue Didouche Mourad; offers communication advice and strategy, websites, print on all media, audiovisual production and event organisation.', ar: 'المقر مذكور في شارع ديدوش مراد؛ تقترح الاستشارة واستراتيجية الاتصال، مواقع الويب، الطباعة على كل الدعائم، السمعي البصري وتنظيم الفعاليات.' } },
  { name: 'SCALEIT', url: 'https://scaleitdz.com/', city: 'Bouzaréah', focus: 'digital', services: ['branding', 'social_media', 'video', 'digital_ads', 'seo', 'strategy'],
    note: { fr: 'Agence marketing qui propose le positionnement de marque, le contenu photo et vidéo, la gestion des réseaux sociaux, les publicités Meta, TikTok et Google, l’e-mailing et le référencement de base.', en: 'Marketing agency offering brand positioning, photo and video content, community management, Meta, TikTok and Google ads, email marketing and basic SEO.', ar: 'وكالة تسويق تقترح تموضع العلامة، محتوى الصور والفيديو، تسيير شبكات التواصل، إعلانات Meta و TikTok و Google، التسويق بالبريد والإحالة الأساسية.' } },
  { name: 'South & North', url: 'https://southandnorthalgeria.com/', city: 'Saïd Hamdine', focus: 'events', services: ['events', 'social_media', 'influence', 'branding', 'print', 'pr', 'video'],
    note: { fr: 'Se décrit comme une agence événementielle et créative : événements, réseaux sociaux et influence, identité de marque, production imprimée, relations presse et projets spéciaux.', en: 'Describes itself as an events and creative agency: events, social media and influence, branding, print production, press relations and special projects.', ar: 'تصف نفسها كوكالة فعاليات وإبداع: الفعاليات، شبكات التواصل والمؤثرون، هوية العلامة، الإنتاج المطبوع، العلاقات الصحفية والمشاريع الخاصة.' } },
  { name: 'Visual Marketing', url: 'https://visuelmarketing.com/en/index.html', city: 'Alger Centre', focus: 'visual', services: ['branding', 'print', 'outdoor'],
    note: { fr: 'Entreprise de communication visuelle qui associe création graphique et identité, impression, signalétique, présentoirs de point de vente, habillage de véhicules et pose ; adresse indiquée rue Hassiba Ben Bouali.', en: 'Visual communication firm combining graphic design and identity with printing, signage, point-of-sale displays, vehicle wrapping and installation; address stated on rue Hassiba Ben Bouali.', ar: 'مؤسسة اتصال بصري تجمع التصميم الغرافيكي والهوية مع الطباعة، اللافتات، عارضات نقاط البيع، تغليف المركبات والتركيب؛ العنوان مذكور في شارع حسيبة بن بوعلي.' } },
  // verified, not shown on the page (named in the FAQ)
  { name: 'Echo Advertise', url: 'https://www.echoo.pro/', city: 'Ouled Fayet', focus: 'full', services: ['website', 'branding', 'print', 'video', 'events', 'social_media', 'digital_ads', 'seo', 'advertising', 'media_buying'] },
  { name: 'Black & Yellow', url: 'https://blackandyellow.agency/', city: 'Alger', focus: 'full', services: ['branding', 'video', 'events', 'social_media', 'seo', 'website'] },
  { name: 'APM Innovation', url: 'https://apm-innovation.com/', city: 'Alger', focus: 'digital', services: ['strategy', 'social_media', 'video', 'branding', 'influence', 'events'] },
];

// The nine shown beside the publisher: agencies whose own site loaded, states an Algiers address
// (commune or street) and shows activity since 2025.
export const TOP_COMMUNICATION = ['CF Agency', 'COM EVENT’AL', 'Dusens Group', 'Ettayssir Studio de Création', 'FAN Advertising Algérie', 'PRISM CREATIVE', 'SCALEIT', 'South & North', 'Visual Marketing'];
