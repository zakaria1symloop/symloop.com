// Verified dataset: data centers located in Algeria that sell services to companies (colocation,
// server hosting, dedicated servers, virtual servers, cloud, backup).
//
// Method: each fact below was read on the operator's own website (service pages or its own press
// releases) on the date in VERIFIED_ON; `url` is the page read. News articles were leads only.
// What a site does not state is left out. Prices, capacities, surface areas, rack counts,
// investment amounts and customer names are never reported, and no law or regulation is
// explained. A Tier level appears only when the operator states it. No ranking.
// To correct or add an entry: contact@symloop.com.
//
// focus:    builder | telecom (mobile or fixed operator) | isp_cloud (internet or cloud provider)
// city:     location of the data center as the operator states it (shown as written)
// services: colocation, housing, dedicated, vps, private_cloud, public_cloud, storage, backup,
//           connectivity, managed, security, tier_stated
// Entries without a `note` are verified but not shown on the page.

export const VERIFIED_ON = '2026-11-26';

export const DATA_CENTERS = [
  { name: 'Symloop', url: 'https://symloop.com/services/', city: 'alger', focus: 'builder', self: true, services: ['setup'],
    note: { fr: 'Éditeur de cette liste. N’exploite pas de data center : société de logiciel qui choisit l’hébergement avec le client, en Algérie ou ailleurs, l’installe, le sauvegarde et le surveille pour les logiciels qu’elle construit, avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. It runs no data center: a software company that chooses the hosting with the client, in Algeria or elsewhere, sets it up, backs it up and monitors it for the software it builds, with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. لا تشغّل مركز بيانات: شركة برمجيات تختار الاستضافة مع الزبون، في الجزائر أو خارجها، تثبّتها، تنسخها احتياطياً وتراقبها للبرمجيات التي تبنيها، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'ADEXCLOUD', url: 'https://www.adexcloud.dz/fr/about', city: 'Sidi Abdellah', focus: 'isp_cloud', services: ['colocation', 'dedicated', 'vps', 'private_cloud', 'storage', 'backup', 'managed', 'tier_stated'],
    note: { fr: 'Indique un data center au cyberparc de Sidi Abdellah, conçu selon lui au niveau « Tier II Ready », et vend la colocation, des serveurs physiques, des VPS, du cloud privé, du stockage S3 et la sauvegarde.', en: 'States a data center at the Sidi Abdellah cyber park, designed to “Tier II Ready” per its own site, and sells colocation, bare-metal servers, VPS, private cloud, S3 storage and backup.', ar: 'يذكر مركز بيانات في الحظيرة السيبرانية بسيدي عبد الله، مصمَّماً حسبه بمستوى «Tier II Ready»، ويبيع الإيواء المشترك، الخوادم الفعلية، الخوادم الافتراضية، السحابة الخاصة، تخزين S3 والنسخ الاحتياطي.' } },
  { name: 'Algérie Télécom', url: 'https://www.algerietelecom.dz/fr/entreprises/housing-colocation-prod237', city: 'Constantine', focus: 'telecom', services: ['colocation', 'housing', 'vps', 'backup', 'connectivity', 'security'],
    note: { fr: 'Loue des emplacements en baie dans ses data centers et vend des VPS qu’il dit hébergés dans ses data centers en Algérie, avec options WAF et anti-DDoS ; un communiqué de 2023 annonce son data center de Constantine.', en: 'Rents rack space in its data centers and sells VPS it says are hosted in its data centers in Algeria, with WAF and anti-DDoS options; a 2023 press release announces its Constantine data center.', ar: 'يؤجّر مواضع في الخزائن داخل مراكز بياناته ويبيع خوادم افتراضية يقول إنها مستضافة في مراكز بياناته في الجزائر، مع خيارات WAF ومكافحة DDoS؛ وبيان صحفي سنة 2023 يعلن مركز بياناته في قسنطينة.' } },
  { name: 'AYRADE', url: 'https://www.ayrade.com/produit/offre-serveur-web-dedie-algerie/', city: null, focus: 'isp_cloud', services: ['dedicated', 'vps', 'private_cloud', 'public_cloud', 'storage', 'backup', 'managed', 'security'],
    note: { fr: 'Indique posséder son data center et que les données des VPS restent dans ses data centers en Algérie ; vend des serveurs dédiés, des VPS et du cloud privé et public.', en: 'States it owns its data center and that VPS data stays in its data centers in Algeria; sells dedicated servers, VPS and private and public cloud.', ar: 'يذكر أنه يملك مركز بياناته وأن بيانات الخوادم الافتراضية تبقى في مراكز بياناته في الجزائر؛ ويبيع خوادم مخصصة، خوادم افتراضية وسحابة خاصة وعامة.' } },
  { name: 'Djezzy Cloud', by: 'Djezzy', url: 'https://solutions.djezzy.dz/solution-cloud-page', city: null, focus: 'telecom', services: ['public_cloud', 'storage', 'security', 'managed'],
    note: { fr: 'Propose du calcul, du stockage, du réseau, des bases de données gérées et des services de sécurité depuis une console cloud, sur une infrastructure qu’il dit hébergée en Algérie.', en: 'Offers compute, storage, network, managed databases and security services from a cloud console, on infrastructure it says is hosted in Algeria.', ar: 'يقترح الحوسبة، التخزين، الشبكة، قواعد البيانات المُدارة وخدمات الأمن عبر لوحة تحكم سحابية، على بنية يقول إنها مستضافة في الجزائر.' } },
  { name: 'HOSTARTS', url: 'https://www.hostarts.dz/infrastructure', city: 'Birtouta', focus: 'isp_cloud', services: ['colocation', 'dedicated', 'vps', 'private_cloud', 'managed', 'security'],
    note: { fr: 'Indique un data center à Birtouta (Alger) avec de la colocation de 1U à 4U, des serveurs dédiés, des VPS et du cloud privé ; Oran est annoncé « bientôt ».', en: 'States a data center in Birtouta (Algiers) with 1U to 4U colocation, dedicated servers, VPS and private cloud; Oran is announced as “coming soon”.', ar: 'يذكر مركز بيانات في بئر توتة (الجزائر العاصمة) مع إيواء مشترك من 1U إلى 4U، خوادم مخصصة، خوادم افتراضية وسحابة خاصة؛ ووهران معلنة «قريباً».' } },
  { name: 'ICOSNET', url: 'https://icosnet.com.dz/en/about-us/', city: 'Alger, Oran', focus: 'isp_cloud', services: ['colocation', 'housing', 'dedicated', 'vps', 'private_cloud', 'public_cloud', 'storage', 'backup', 'connectivity', 'managed', 'security'],
    note: { fr: 'Indique deux data centers en Algérie, à Alger (2019) et à Oran (2021), d’où il propose l’hébergement de serveurs, des serveurs dédiés, des VPS, des data centers virtuels et la sauvegarde.', en: 'States two data centers in Algeria, in Algiers (2019) and Oran (2021), from which it offers server housing, dedicated servers, VPS, virtual data centers and backup.', ar: 'يذكر مركزي بيانات في الجزائر، في العاصمة (2019) ووهران (2021)، يقترح منهما إيواء الخوادم، الخوادم المخصصة، الخوادم الافتراضية، مراكز البيانات الافتراضية والنسخ الاحتياطي.' } },
  { name: 'ISSAL NET', url: 'https://issal.dz/datacenter', city: null, focus: 'isp_cloud', services: ['vps', 'backup', 'connectivity'],
    note: { fr: 'Se présente comme un fournisseur cloud algérien dont le data center est situé dans le pays ; vend des VPS (FleXCompute), la réplication de sauvegarde (FleXBackup) et des accès MPLS.', en: 'Presents itself as an Algerian cloud provider with its data center in the country; sells VPS (FleXCompute), backup replication (FleXBackup) and MPLS access.', ar: 'يقدّم نفسه كمزوّد سحابة جزائري مركز بياناته داخل البلاد؛ ويبيع خوادم افتراضية (FleXCompute)، نسخاً احتياطياً متماثلاً (FleXBackup) ونفاذ MPLS.' } },
];

// Every verified operator is shown: its own site states a data center in Algeria, describes a
// service sold to companies from it and shows activity since 2025.
export const TOP_DATA_CENTERS = ['ADEXCLOUD', 'Algérie Télécom', 'AYRADE', 'Djezzy Cloud', 'HOSTARTS', 'ICOSNET', 'ISSAL NET'];
