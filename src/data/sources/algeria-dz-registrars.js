// Verified dataset: where to register a .dz domain name.
//
// Method: the list of accredited registrars and the figures come from the .dz registry, NIC.dz
// (CERIST), read on its own public data service on the date in VERIFIED_ON
// (https://api.nic.dz/v1/registrars, /registrars/stats, /domains/count, /domains/stats, used by
// https://www.nic.dz/ for its pages "Liste des registrars" and "Statistiques"). What each
// registrar sells was read on its own website; `url` is the page read. Prices and processing times
// are never reported, and the eligibility conditions and documents are not explained: the page
// points to the registry. No ranking, no personal data.
// To correct or add an entry: contact@symloop.com.
//
// focus:    builder | registrar (on the NIC.dz list) | reseller (sells .dz, not on the NIC.dz list
//           read on VERIFIED_ON)
// services: online_order, search, transfer, renewal, dns, hosting, email, ssl, other_extensions,
//           several_dz (several .dz extensions named on its site)
// domains:  number of domain names NIC.dz shows for this registrar ("Noms de domaine par registrar")

export const VERIFIED_ON = '2026-11-26';

export const REGISTRY = {
  total: 21548, // "Total des noms de domaine créés" (api.nic.dz/v1/domains/count)
  perYear: { 2026: 1819, 2025: 1708, 2024: 1616, 2023: 1446, 2022: 1282, 2021: 1661, 2020: 1282, 2015: 937, 2010: 259 },
  registrars: ['wissal', 'icosnet', 'djaweb', 'ELIT', 'KDConcept', 'EBS', 'octenium', 'cetic', 'Macnethost', 'Host Arts', 'ayrade', 'DZSecurity', 'Adex Technology', 'ISSALNET', 'netsys', 'satlinker', 'localhost', 'caci', 'Datagix', '3t Solutions', 'Rsolution', 'djezzy', 'saadnet', 'openxnet', 'wokalaa', 'netbeopen', 'MSante', 'DJIDELSOLUTIONS', 'netulip', 'DjilWeb', 'Mobilis', 'AIM TECH', 'Diar Dzair'],
  top: [['wissal', 9258], ['octenium', 2479], ['djaweb', 1969], ['DZSecurity', 1772], ['icosnet', 1206], ['ayrade', 1190], ['KDConcept', 1049]],
};

export const DZ_REGISTRARS = [
  { name: 'Symloop', url: 'https://symloop.com/services/', city: 'alger', focus: 'builder', self: true, services: ['custom'],
    note: { fr: 'Éditeur de cette liste. N’est pas registrar : pour les sites et applications qu’elle construit, fait enregistrer le nom de domaine au nom du client chez un registrar, puis règle les DNS, l’hébergement et le certificat, avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. Not a registrar: for the sites and apps it builds, it has the domain registered in the client’s name with a registrar, then sets up DNS, hosting and the certificate, with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. ليست مسجِّلاً: للمواقع والتطبيقات التي تبنيها، تُسجّل اسم النطاق باسم الزبون لدى مسجِّل، ثم تضبط DNS والاستضافة والشهادة، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'DZSecurity', url: 'https://www.dzsecurity.com/fr/domains', city: null, focus: 'registrar', domains: 1772, services: ['online_order', 'transfer', 'hosting'],
    note: { fr: 'Inscrit sur la liste des registrars de NIC.dz, qui lui compte 1 772 noms de domaine ; son site propose un formulaire de demande de .dz avec option de transfert, à côté d’offres d’hébergement.', en: 'On the NIC.dz registrar list, which counts 1,772 domain names for it; its site offers a .dz request form with a transfer option, alongside hosting offers.', ar: 'مدرج في قائمة المسجِّلين لدى NIC.dz التي تحصي له 1 772 اسم نطاق؛ ويقترح موقعه استمارة طلب ‎.dz مع خيار النقل، إلى جانب عروض الاستضافة.' } },
  { name: 'Edisoft', url: 'https://www.edisoft.dz/domaine-dz_fr.html', city: 'Chéraga', focus: 'reseller', services: ['hosting', 'email', 'ssl', 'several_dz'],
    note: { fr: 'Le site indique l’enregistrement de .dz et de .com.dz, avec une demande par e-mail et un formulaire à télécharger, et vend l’hébergement avec messagerie et SSL ; le nom ne figure pas sur la liste de NIC.dz lue à la date de vérification.', en: 'The site states .dz and .com.dz registration, requested by email with a downloadable form, and sells hosting with email and SSL; the name is not on the NIC.dz list read on the verification date.', ar: 'يذكر الموقع تسجيل ‎.dz و ‎.com.dz، بطلب عبر البريد واستمارة للتحميل، ويبيع الاستضافة مع البريد و SSL؛ والاسم غير موجود في قائمة NIC.dz المقروءة في تاريخ التحقق.' } },
  { name: 'HOSTARTS', url: 'https://hostarts.dz/nom-de-domaine-dz', city: 'Alger', focus: 'registrar', domains: 226, services: ['search', 'transfer', 'renewal', 'dns', 'hosting', 'email', 'ssl', 'other_extensions'],
    note: { fr: 'Inscrit sur la liste de NIC.dz (sous « Host Arts »), qui lui compte 226 noms de domaine ; son site propose la recherche, le transfert et le renouvellement de .dz et un éditeur DNS, avec l’hébergement.', en: 'On the NIC.dz list (as “Host Arts”), which counts 226 domain names for it; its site offers .dz search, transfer and renewal and a DNS editor, with hosting.', ar: 'مدرج في قائمة NIC.dz (باسم «Host Arts») التي تحصي له 226 اسم نطاق؛ ويقترح موقعه البحث عن ‎.dz ونقله وتجديده ومحرر DNS، مع الاستضافة.' } },
  { name: 'ICOSNET', url: 'https://icosnet.com.dz/nom-de-domaine/', city: 'Chéraga', focus: 'registrar', domains: 1206, services: ['online_order', 'search', 'transfer', 'hosting', 'email', 'ssl', 'other_extensions'],
    note: { fr: 'Inscrit sur la liste de NIC.dz, qui lui compte 1 206 noms de domaine ; sa page propose la commande de .dz en ligne avec paiement par carte, un formulaire couvrant le transfert, l’hébergement, la messagerie et le SSL.', en: 'On the NIC.dz list, which counts 1,206 domain names for it; its page offers online .dz ordering with card payment, a form covering transfer, hosting, email and SSL.', ar: 'مدرج في قائمة NIC.dz التي تحصي له 1 206 اسم نطاق؛ وتقترح صفحته طلب ‎.dz عبر الإنترنت مع الدفع بالبطاقة، استمارة تشمل النقل، الاستضافة، البريد و SSL.' } },
  { name: 'KDCONCEPT', url: 'https://kdconcept.dz/nom-de-domaine-dz/', city: 'Kouba', focus: 'registrar', domains: 1049, services: ['hosting', 'email', 'ssl', 'other_extensions', 'several_dz'],
    note: { fr: 'Inscrit sur la liste de NIC.dz, qui lui compte 1 049 noms de domaine ; son site cite .dz et .com.dz à côté d’extensions internationales, avec l’hébergement, la messagerie et le SSL, et une commande par contact.', en: 'On the NIC.dz list, which counts 1,049 domain names for it; its site names .dz and .com.dz next to international extensions, with hosting, email and SSL, ordered through contact.', ar: 'مدرج في قائمة NIC.dz التي تحصي له 1 049 اسم نطاق؛ ويذكر موقعه ‎.dz و ‎.com.dz إلى جانب امتدادات دولية، مع الاستضافة، البريد و SSL، والطلب عبر الاتصال.' } },
  { name: 'LocalHost', url: 'https://corporate.localhost.dz/info/enregistrement-domaine-dz', city: null, focus: 'registrar', domains: 452, services: ['search', 'hosting', 'email', 'several_dz'],
    note: { fr: 'Inscrit sur la liste de NIC.dz, qui lui compte 452 noms de domaine ; sa page énumère neuf extensions en .dz avec une recherche de disponibilité, et le site vend l’hébergement et la messagerie.', en: 'On the NIC.dz list, which counts 452 domain names for it; its page lists nine .dz extensions with an availability search, and the site sells hosting and email.', ar: 'مدرج في قائمة NIC.dz التي تحصي له 452 اسم نطاق؛ وتعدّد صفحته تسعة امتدادات ‎.dz مع بحث عن التوفر، ويبيع الموقع الاستضافة والبريد.' } },
  { name: 'Octenium', url: 'https://octenium.com/domaine/extension/dz', city: null, focus: 'registrar', domains: 2479, services: ['online_order', 'search', 'transfer', 'renewal', 'dns', 'hosting', 'email', 'ssl', 'other_extensions'],
    note: { fr: 'Inscrit sur la liste de NIC.dz, qui lui compte 2 479 noms de domaine ; sa page propose la réservation de .dz par recherche et panier, un outil WHOIS, la gestion DNS et le transfert, avec l’hébergement.', en: 'On the NIC.dz list, which counts 2,479 domain names for it; its page offers .dz booking through search and cart, a WHOIS tool, DNS management and transfer, with hosting.', ar: 'مدرج في قائمة NIC.dz التي تحصي له 2 479 اسم نطاق؛ وتقترح صفحته حجز ‎.dz بالبحث والسلة، أداة WHOIS، تسيير DNS والنقل، مع الاستضافة.' } },
];
