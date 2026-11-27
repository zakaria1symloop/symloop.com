// Verified dataset: internet access providers in Algeria.
//
// Method: each fact below was read on the provider's own website on the date in VERIFIED_ON;
// `url` is the page read. What a site does not state is left out; 5G is recorded only where the
// operator's own site says it is available, with its wording. Prices, data allowances and
// speeds are never reported, no quality or reliability judgement is made, and nothing here
// explains telecom rules. No ranking, no personal data. To correct or add an entry:
// contact@symloop.com.
//
// focus:    builder | fixed | mobile | satellite | business
// services: adsl, vdsl, fibre, box (home internet box or modem), mobile4g, g5, satellite, leased
//           (dedicated link), radio (dedicated radio link), households, businesses, remote,
//           subscribe_online, pay_online, app, coverage_check, sla
// Only six providers had a readable site describing an access offer, so the page shows seven
// entries with the publisher.

export const VERIFIED_ON = '2026-11-26';

export const INTERNET_PROVIDERS = [
  { name: 'Symloop', url: 'https://symloop.com/services/mobile/', city: 'alger', focus: 'builder', self: true, services: ['offline_apps'],
    note: { fr: 'Éditeur de cette liste. N’est pas un fournisseur d’accès : société de logiciel qui construit des applications qui continuent de fonctionner quand la connexion est coupée (mode hors ligne, puis synchronisation), avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. Not an internet provider: a software company that builds applications which keep working when the connection drops (offline mode, then synchronisation), with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. ليست مزوّد إنترنت: شركة برمجيات تبني تطبيقات تواصل العمل حين ينقطع الاتصال (العمل دون اتصال ثم المزامنة)، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'Algérie Télécom (Idoom)', url: 'https://www.algerietelecom.dz/', focus: 'fixed', services: ['adsl', 'vdsl', 'fibre', 'box', 'leased', 'households', 'businesses', 'subscribe_online', 'pay_online', 'app', 'coverage_check'],
    note: { fr: 'Le site énumère Idoom ADSL, VDSL, Fibre et 4G LTE pour les particuliers, ainsi que la fibre professionnelle et les liaisons spécialisées pour les entreprises, avec la recharge en ligne par carte CIB ou Edahabia et un test d’éligibilité à la fibre.', en: 'The site lists Idoom ADSL, VDSL, Fibre and 4G LTE for households, plus professional fibre and leased lines for businesses, with online top-up by CIB or Edahabia card and a fibre eligibility test.', ar: 'يذكر الموقع Idoom ADSL و VDSL والألياف و 4G LTE للأفراد، وكذلك الألياف المهنية والخطوط المتخصصة للمؤسسات، مع التعبئة عبر الإنترنت ببطاقة CIB أو الذهبية واختبار أهلية للألياف.' } },
  { name: 'Algérie Télécom Satellite (ATS)', url: 'https://www.ats.dz/internet-haut-debit-par-satellite/', focus: 'satellite', services: ['satellite', 'businesses', 'remote'],
    note: { fr: 'Le site énumère l’internet haut débit par satellite, des connexions occasionnelles et maritimes, des solutions de mobilité et du M2M pour des secteurs comme l’énergie, les administrations et les entreprises, y compris dans les zones isolées ; il ne cite pas les particuliers.', en: 'The site lists high-speed satellite internet, occasional and maritime connections, mobility solutions and M2M for sectors such as energy, government and enterprises, including in isolated areas; it does not name households.', ar: 'يذكر الموقع الإنترنت عالي التدفق عبر الساتل، اتصالات ظرفية وبحرية، حلول التنقل و M2M لقطاعات مثل الطاقة، الإدارات والمؤسسات، بما فيها المناطق المعزولة؛ ولا يذكر الأفراد.' } },
  { name: 'Djezzy', by: 'Optimum Télécom Algérie', url: 'https://www.djezzy.dz/', focus: 'mobile', services: ['mobile4g', 'g5', 'box', 'households', 'businesses', 'pay_online', 'app', 'coverage_check'],
    note: { fr: 'Le site énumère des forfaits d’internet mobile, un modem 5G pour la maison et les petits bureaux et des forfaits internet pour les entreprises ; son site 5G indique un déploiement progressif dans 18 wilayas.', en: 'The site lists mobile internet plans, a 5G modem for homes and small offices and internet plans for businesses; its 5G site states a gradual rollout across 18 wilayas.', ar: 'يذكر الموقع عروض الإنترنت النقال، مودم 5G للمنزل والمكاتب الصغيرة وعروض إنترنت للمؤسسات؛ ويذكر موقعه الخاص بـ 5G انتشاراً تدريجياً في 18 ولاية.' } },
  { name: 'ICOSNET', url: 'https://icosnet.com.dz/acces-internet-haut-debit/', focus: 'business', services: ['fibre', 'leased', 'businesses', 'sla'],
    note: { fr: 'Le site décrit un accès internet dédié et symétrique par fibre ou par liaison louée, une offre d’accès partagé et un service de réseau privé pour les organisations, avec un engagement de disponibilité et un support permanent.', en: 'The site describes dedicated symmetric internet access over fibre or leased line, a shared access offer and a private network service for organisations, with an availability commitment and round-the-clock support.', ar: 'يصف الموقع ولوجاً مخصصاً ومتناظراً إلى الإنترنت عبر الألياف أو خط مؤجر، عرض ولوج مشترك وخدمة شبكة خاصة للمنظمات، مع التزام بالتوفر ودعم دائم.' } },
  { name: 'Mobilis', by: 'ATM Mobilis', url: 'https://www.mobilis.dz/', focus: 'mobile', services: ['mobile4g', 'box', 'households', 'businesses', 'pay_online', 'app'],
    note: { fr: 'Le site énumère des forfaits et des pass d’internet mobile, un pack modem 4G et des offres pour les entreprises, dont le VPN et le M2M, et indique que son réseau couvre les 58 wilayas.', en: 'The site lists mobile internet plans and passes, a 4G modem pack and business offers including VPN and M2M, and states that its network covers the 58 wilayas.', ar: 'يذكر الموقع عروض وباقات الإنترنت النقال، حزمة مودم 4G وعروضاً للمؤسسات منها VPN و M2M، ويذكر أن شبكته تغطي الولايات الـ 58.' } },
  { name: 'Ooredoo Algérie', by: 'Wataniya Télécom Algérie', url: 'https://www.ooredoo.dz/', focus: 'mobile', services: ['mobile4g', 'g5', 'box', 'radio', 'households', 'businesses', 'pay_online', 'app', 'coverage_check'],
    note: { fr: 'Le site énumère des forfaits d’internet mobile, une box pour la maison, une box 5G et IHD, une liaison internet dédiée par radio pour les entreprises ; sa page 5G indique un service disponible pour les particuliers et les entreprises, sous réserve de la couverture.', en: 'The site lists mobile internet bundles, a home box, a 5G box and IHD, a dedicated radio-based internet link for businesses; its 5G page states a service available to individuals and businesses, subject to coverage.', ar: 'يذكر الموقع عروض الإنترنت النقال، علبة للمنزل، علبة 5G و IHD، وهو ربط إنترنت مخصص عبر الراديو للمؤسسات؛ وتذكر صفحته الخاصة بـ 5G خدمة متوفرة للأفراد والمؤسسات، في حدود التغطية.' } },
];

export const TOP_PROVIDERS = INTERNET_PROVIDERS.filter((x) => !x.self).map((x) => x.name);
