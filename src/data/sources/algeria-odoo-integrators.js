// Verified dataset: companies in Algeria that install and adapt the Odoo business software.
//
// Method: partner levels come from Odoo's own partner directory for Algeria
// (https://www.odoo.com/partners/country/algeria-61), read on the date in VERIFIED_ON; the other
// facts were read on each company's own website or its directory profile. What a page does not
// state is left out. Prices, licence costs, customer counts and numbers of certified staff are
// never reported, and nothing here explains an accounting, tax or payroll rule: `localization`
// only records that a company's site mentions Algerian modules. No ranking of our own, no
// personal data. To correct or add an entry: contact@symloop.com.
//
// focus:    builder | gold | silver | ready (level shown in Odoo's directory) | independent
// services: implementation, custom_modules, localization, migration, training, hosting, support,
//           integration, enterprise (Enterprise edition stated)
// Entries without a `note` are verified but not shown on the page.

export const VERIFIED_ON = '2026-11-26';
export const DIRECTORY_URL = 'https://www.odoo.com/partners/country/algeria-61';

export const ODOO_INTEGRATORS = [
  { name: 'Symloop', url: 'https://symloop.com/services/', city: 'alger', focus: 'builder', self: true, services: ['custom'],
    note: { fr: 'Éditeur de cette liste. N’est pas un partenaire Odoo : société de logiciel qui construit des logiciels de gestion sur mesure et relie entre eux les outils qu’une entreprise a déjà (ERP, site, application mobile), avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. Not an Odoo partner: a software company that builds custom management software and connects the tools a company already has (ERP, website, mobile app), with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. ليست شريكاً لـ Odoo: شركة برمجيات تبني برمجيات تسيير على المقاس وتربط بين الأدوات التي تملكها المؤسسة (ERP، الموقع، تطبيق الجوال)، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'AH Consulting', url: 'https://www.odoo.com/partners/ah-consulting-28964305', city: 'alger', focus: 'ready', services: [],
    note: { fr: 'Figure dans l’annuaire d’Odoo au niveau Ready, avec une adresse à El Hamiz (Dar El Beïda) ; sa fiche ne décrit pas ses services et n’indique pas de site web.', en: 'Listed in Odoo’s directory at Ready level, with an address in El Hamiz (Dar El Beïda); its profile describes no services and gives no website.', ar: 'مدرجة في دليل Odoo بمستوى Ready، بعنوان في الحميز (الدار البيضاء)؛ وصفحتها لا تصف خدماتها ولا تذكر موقعاً إلكترونياً.' } },
  { name: 'Cetelex', url: 'https://www.odoo.com/partners/cetelex-5183470', city: 'alger', focus: 'ready', services: ['implementation', 'custom_modules', 'migration', 'training'],
    note: { fr: 'Niveau Ready dans l’annuaire d’Odoo, à Hydra. Sa fiche indique la mise en place d’Odoo sur mesure, le développement de modules, la migration des données et la formation des utilisateurs ; son propre site ne s’ouvrait pas le jour de la vérification.', en: 'Ready level in Odoo’s directory, in Hydra. Its profile states custom Odoo implementation, module development, data migration and user training; its own site did not load on the verification day.', ar: 'مستوى Ready في دليل Odoo، في حيدرة. تذكر صفحتها تثبيت Odoo على المقاس، تطوير الوحدات، ترحيل البيانات وتكوين المستخدمين؛ وموقعها الخاص لم يفتح يوم التحقق.' } },
  { name: 'ERP WISE', url: 'https://www.erpwise.dz/', city: 'alger', focus: 'ready', services: ['implementation', 'custom_modules', 'migration', 'training', 'support'],
    note: { fr: 'Niveau Ready dans l’annuaire d’Odoo, à Chéraga. Son site indique l’intégration, la personnalisation et le déploiement d’Odoo ; sa fiche ajoute la migration des données, la formation et le support.', en: 'Ready level in Odoo’s directory, in Chéraga. Its site states Odoo integration, customisation and deployment; its profile adds data migration, training and ongoing support.', ar: 'مستوى Ready في دليل Odoo، في الشراقة. يذكر موقعها إدماج Odoo وتخصيصه ونشره؛ وتضيف صفحتها ترحيل البيانات، التكوين والدعم.' } },
  { name: 'EURL BUSINESNA', url: 'https://businesna.dz', city: 'alger', focus: 'ready', services: ['training'],
    note: { fr: 'Niveau Ready dans l’annuaire d’Odoo, à Bab Ezzouar. Son site cite « ERP Odoo » et la formation Odoo parmi ses services, sans autre détail.', en: 'Ready level in Odoo’s directory, in Bab Ezzouar. Its site lists “ERP Odoo” and Odoo training among its services, without further detail.', ar: 'مستوى Ready في دليل Odoo، في باب الزوار. يذكر موقعها «ERP Odoo» وتكوين Odoo ضمن خدماتها، دون تفاصيل أخرى.' } },
  { name: 'FINOUTSOURCE', url: 'http://www.finoutsource.dz/', city: 'alger', focus: 'ready', services: ['implementation', 'custom_modules', 'migration', 'enterprise'],
    note: { fr: 'Niveau Ready dans l’annuaire d’Odoo, à Hydra. Son site indique la mise en place et la personnalisation d’un ERP basé sur Odoo ; les références de sa fiche décrivent des migrations depuis un ancien ERP et de l’édition Community vers Enterprise.', en: 'Ready level in Odoo’s directory, in Hydra. Its site states setup and customisation of an Odoo-based ERP; its profile’s references describe migrations from a legacy ERP and from the Community to the Enterprise edition.', ar: 'مستوى Ready في دليل Odoo، في حيدرة. يذكر موقعها تثبيت وتخصيص ERP مبني على Odoo؛ وتصف مراجع صفحتها ترحيلات من ERP قديم ومن نسخة Community إلى Enterprise.' } },
  { name: 'HORIA TECHNOLOGIES', url: 'https://www.horia.tech/', city: 'alger', focus: 'ready', services: ['implementation', 'hosting', 'support'],
    note: { fr: 'Niveau Ready dans l’annuaire d’Odoo. Son site, qui donne une adresse à Bordj El Kiffan, propose l’hébergement d’Odoo en Algérie par sa plateforme Youdoo ; sa fiche ajoute la mise en place, le paramétrage, la maintenance et un support en trois langues.', en: 'Ready level in Odoo’s directory. Its site, which gives an address in Bordj El Kiffan, offers Odoo hosting in Algeria through its Youdoo platform; its profile adds implementation, configuration, maintenance and trilingual support.', ar: 'مستوى Ready في دليل Odoo. يقترح موقعها، الذي يعطي عنواناً في برج الكيفان، استضافة Odoo في الجزائر عبر منصتها Youdoo؛ وتضيف صفحتها التثبيت، الإعداد، الصيانة ودعماً بثلاث لغات.' } },
  { name: 'Insidjam COM', url: 'https://www.odoo.com/partners/insidjam-com-6706624', city: 'alger', focus: 'gold', services: ['implementation', 'training', 'support'],
    note: { fr: 'Niveau Gold dans l’annuaire d’Odoo, à Alger. Sa fiche décrit des projets Odoo du lancement à la mise en service, avec la formation et un portail de support ; son propre site présente un produit nommé INSIDJAM ERP.', en: 'Gold level in Odoo’s directory, in Algiers. Its profile describes Odoo projects from launch to go-live, with training and a support portal; its own site presents a product named INSIDJAM ERP.', ar: 'مستوى Gold في دليل Odoo، في الجزائر العاصمة. تصف صفحتها مشاريع Odoo من الانطلاق إلى التشغيل، مع التكوين وبوابة دعم؛ وموقعها الخاص يعرض منتجاً باسم INSIDJAM ERP.' } },
  { name: 'SIBIC', url: 'https://sibic.dz/', city: 'alger', focus: 'silver', services: ['implementation', 'custom_modules', 'migration', 'training', 'support', 'enterprise'],
    note: { fr: 'Niveau Silver dans l’annuaire d’Odoo, à Chéraga. Son site indique l’intégration d’Odoo, la migration de versions et de données, la formation des utilisateurs dans les projets et la maintenance corrective et évolutive.', en: 'Silver level in Odoo’s directory, in Chéraga. Its site states Odoo integration, version and data migration, user training within projects, and corrective and evolutive maintenance.', ar: 'مستوى Silver في دليل Odoo، في الشراقة. يذكر موقعها إدماج Odoo، ترحيل النسخ والبيانات، تكوين المستخدمين ضمن المشاريع والصيانة التصحيحية والتطويرية.' } },
  // verified, not in Odoo's official directory on the verification day (named in the FAQ)
  { name: 'Digitaliac', url: 'https://www.digitaliac.com/', city: 'alger', focus: 'independent', services: ['implementation', 'localization', 'training', 'integration', 'enterprise'] },
  { name: 'DIGISYS', url: 'https://digisys.dz/erp-odoo-algerie/', city: 'tlemcen', focus: 'independent', services: ['implementation', 'custom_modules', 'localization'] },
  { name: 'Elosys', url: 'https://elosys.net/', city: 'mostaganem', focus: 'independent', services: ['implementation', 'custom_modules', 'localization', 'migration', 'training', 'hosting', 'support'] },
  { name: 'EP Digital DZ', url: 'https://epdigitaldz.com/services/developpement-web/erp-odoo-logiciel-metier/', city: 'alger', focus: 'independent', services: ['implementation', 'custom_modules', 'migration', 'training', 'support', 'integration'] },
  { name: 'NUMIDIT', url: 'https://numidit.com/', city: 'alger', focus: 'independent', services: ['implementation', 'localization', 'hosting', 'support', 'integration'] },
  { name: 'SOGESI', url: 'https://sogesi-dz.com/', city: 'tlemcen', focus: 'independent', services: ['implementation', 'custom_modules', 'training', 'hosting', 'support', 'integration', 'enterprise'] },
  { name: 'Vtic', url: 'https://vtic-dz.com/services/erp-automatisation.php', city: 'bejaia', focus: 'independent', services: ['implementation', 'custom_modules', 'migration', 'training'] },
  { name: 'Wamanu', url: 'https://wamanu.com/', city: null, focus: 'independent', services: ['implementation', 'custom_modules', 'localization', 'migration', 'training', 'support', 'integration'] },
];

// Shown beside the publisher: every partner listed in Odoo's official directory for Algeria.
export const TOP_ODOO = ODOO_INTEGRATORS.filter((x) => ['gold', 'silver', 'ready'].includes(x.focus)).map((x) => x.name);
