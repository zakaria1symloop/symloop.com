// Registry of live source pages (sourced, dated lists). The sitemap and the hub page
// (/tech-algerie/) read it: add one line here each time a source page is published.
// `slug` is the top-level path, without slashes; `group` places the page on the hub.
import { WILAYA_KEYS } from './algeria-by-wilaya';

export const HUB_SLUG = 'tech-algerie';

export const SOURCE_PAGES = [
  { slug: HUB_SLUG, verifiedOn: '2026-11-26', hub: true },
  { slug: 'entreprises-informatiques-algerie', verifiedOn: '2026-11-25', group: 'companies', title: { fr: 'Entreprises informatiques en Algérie', en: 'IT companies in Algeria', ar: 'شركات المعلوماتية في الجزائر' } },
  { slug: 'agences-web-algerie', verifiedOn: '2026-11-25', group: 'companies', title: { fr: 'Agences web en Algérie', en: 'Web agencies in Algeria', ar: 'وكالات الويب في الجزائر' } },
  { slug: 'startups-algeriennes', verifiedOn: '2026-11-25', group: 'ecosystem', title: { fr: 'Startups algériennes', en: 'Algerian startups', ar: 'الشركات الناشئة الجزائرية' } },
  { slug: 'entreprises-ia-algerie', verifiedOn: '2026-11-25', group: 'companies', title: { fr: 'Entreprises d’IA en Algérie', en: 'AI companies in Algeria', ar: 'شركات الذكاء الاصطناعي في الجزائر' } },
  { slug: 'logiciels-gestion-scolaire-algerie', verifiedOn: '2026-11-25', group: 'software', title: { fr: 'Logiciels de gestion scolaire', en: 'School management software', ar: 'برامج تسيير المدارس' } },
  { slug: 'solutions-paiement-en-ligne-algerie', verifiedOn: '2026-11-25', group: 'providers', title: { fr: 'Solutions de paiement en ligne', en: 'Online payment solutions', ar: 'حلول الدفع الإلكتروني' } },
  { slug: 'logiciels-erp-algerie', verifiedOn: '2026-11-25', group: 'software', title: { fr: 'Logiciels ERP', en: 'ERP software', ar: 'برامج ERP' } },
  { slug: 'hebergeurs-web-algerie', verifiedOn: '2026-11-25', group: 'providers', title: { fr: 'Hébergeurs web et cloud', en: 'Web hosting and cloud', ar: 'استضافة المواقع والسحابة' } },
  { slug: 'logiciels-gestion-de-stock-algerie', verifiedOn: '2026-11-25', group: 'software', title: { fr: 'Logiciels de gestion de stock et de caisse', en: 'Stock and point-of-sale software', ar: 'برامج المخزون ونقطة البيع' } },
  { slug: 'logiciels-pharmacie-algerie', verifiedOn: '2026-11-25', group: 'software', title: { fr: 'Logiciels de pharmacie', en: 'Pharmacy software', ar: 'برامج الصيدليات' } },
  { slug: 'logiciels-restaurant-algerie', verifiedOn: '2026-11-25', group: 'software', title: { fr: 'Logiciels de restaurant', en: 'Restaurant software', ar: 'برامج المطاعم' } },
  { slug: 'logiciels-cabinet-medical-algerie', verifiedOn: '2026-11-26', group: 'software', title: { fr: 'Logiciels de cabinet médical, dentaire et de clinique', en: 'Medical, dental and clinic software', ar: 'برامج العيادات الطبية وعيادات الأسنان' } },
  { slug: 'applications-taxi-vtc-algerie', verifiedOn: '2026-11-26', group: 'apps', title: { fr: 'Applications de taxi et VTC', en: 'Taxi and ride-hailing apps', ar: 'تطبيقات الطاكسي و VTC' } },
  { slug: 'applications-livraison-algerie', verifiedOn: '2026-11-26', group: 'apps', title: { fr: 'Applications de livraison', en: 'Delivery apps', ar: 'تطبيقات التوصيل' } },
  { slug: 'societes-livraison-colis-algerie', verifiedOn: '2026-11-26', group: 'providers', title: { fr: 'Sociétés de livraison de colis', en: 'Parcel delivery companies', ar: 'شركات توصيل الطرود' } },
  { slug: 'entreprises-developpement-application-mobile-algerie', verifiedOn: '2026-11-26', group: 'companies', title: { fr: 'Entreprises de développement d’applications mobiles', en: 'Mobile app development companies', ar: 'شركات تطوير تطبيقات الجوال' } },
  { slug: 'incubateurs-algerie', verifiedOn: '2026-11-26', group: 'ecosystem', title: { fr: 'Incubateurs et accélérateurs de startups', en: 'Startup incubators and accelerators', ar: 'حاضنات ومسرّعات الشركات الناشئة' } },
  { slug: 'sites-vente-en-ligne-algerie', verifiedOn: '2026-11-26', group: 'apps', title: { fr: 'Sites de vente en ligne et marketplaces', en: 'Online selling sites and marketplaces', ar: 'مواقع البيع عبر الإنترنت والأسواق الإلكترونية' } },
  { slug: 'applications-bancaires-algerie', verifiedOn: '2026-11-26', group: 'apps', title: { fr: 'Applications bancaires', en: 'Banking apps', ar: 'التطبيقات البنكية' } },
  { slug: 'fournisseurs-internet-algerie', verifiedOn: '2026-11-26', group: 'providers', title: { fr: 'Fournisseurs d’accès internet', en: 'Internet providers', ar: 'مزوّدو الإنترنت' } },
  { slug: 'odoo-algerie', verifiedOn: '2026-11-26', group: 'companies', title: { fr: 'Odoo en Algérie : partenaires et intégrateurs', en: 'Odoo in Algeria: partners and integrators', ar: 'Odoo في الجزائر: الشركاء والمُدمِجون' } },
  { slug: 'coworking-alger', verifiedOn: '2026-11-26', group: 'ecosystem', title: { fr: 'Espaces de coworking à Alger', en: 'Coworking spaces in Algiers', ar: 'فضاءات العمل المشترك في الجزائر العاصمة' } },
  { slug: 'formation-informatique-alger', verifiedOn: '2026-11-26', group: 'ecosystem', title: { fr: 'Formations informatiques à Alger', en: 'IT training in Algiers', ar: 'تكوينات الإعلام الآلي في الجزائر العاصمة' } },
  { slug: 'logiciels-facturation-algerie', verifiedOn: '2026-11-26', group: 'software', title: { fr: 'Logiciels de facturation', en: 'Invoicing software', ar: 'برامج الفوترة' } },
  { slug: 'recrutement-informatique-algerie', verifiedOn: '2026-11-26', group: 'ecosystem', title: { fr: 'Recrutement informatique : sites d’emploi et cabinets', en: 'IT recruitment: job sites and firms', ar: 'التوظيف في المعلوماتية: المواقع والمكاتب' } },
  { slug: 'agences-communication-alger', verifiedOn: '2026-11-26', group: 'companies', title: { fr: 'Agences de communication à Alger', en: 'Communication agencies in Algiers', ar: 'وكالات الاتصال في الجزائر العاصمة' } },
  { slug: 'logiciels-comptabilite-algerie', verifiedOn: '2026-11-26', group: 'software', title: { fr: 'Logiciels de comptabilité', en: 'Accounting software', ar: 'برامج المحاسبة' } },
  { slug: 'data-centers-algerie', verifiedOn: '2026-11-26', group: 'providers', title: { fr: 'Data centers en Algérie', en: 'Data centers in Algeria', ar: 'مراكز البيانات في الجزائر' } },
  { slug: 'nom-de-domaine-dz', verifiedOn: '2026-11-26', group: 'providers', title: { fr: 'Nom de domaine .dz : registrars agréés et chiffres', en: '.dz domain names: accredited registrars and figures', ar: 'اسم النطاق ‎.dz: المسجِّلون المعتمدون والأرقام' } },
  { slug: 'fintech-algerie', verifiedOn: '2026-11-26', group: 'providers', title: { fr: 'Fintech : portefeuilles et applications de transfert', en: 'Fintech: wallets and transfer apps', ar: 'التكنولوجيا المالية: المحافظ وتطبيقات التحويل' } },
  { slug: 'cours-en-ligne-algerie', verifiedOn: '2026-11-26', group: 'ecosystem', title: { fr: 'Cours en ligne : plateformes (BEM, BAC, université)', en: 'Online courses: platforms (BEM, BAC, university)', ar: 'الدروس عبر الإنترنت: المنصات' } },
  { slug: 'suivi-gps-vehicules-algerie', verifiedOn: '2026-11-26', group: 'companies', title: { fr: 'Suivi GPS des véhicules et gestion de flotte', en: 'GPS vehicle tracking and fleet management', ar: 'تتبع المركبات بـ GPS وتسيير الأساطيل' } },
  { slug: 'chiffres-internet-mobile-algerie', verifiedOn: '2026-11-26', group: 'providers', title: { fr: 'Chiffres du mobile et d’internet : abonnés par opérateur (ARPCE)', en: 'Mobile and internet figures: subscribers by operator (ARPCE)', ar: 'أرقام النقال والإنترنت: المشتركون حسب المتعامل (ARPCE)' } },
  { slug: 'logiciels-rh-algerie', verifiedOn: '2026-11-26', group: 'software', title: { fr: 'Logiciels RH (congés, pointage, recrutement)', en: 'HR software (leave, attendance, recruitment)', ar: 'برامج الموارد البشرية' } },
  { slug: 'logiciels-crm-algerie', verifiedOn: '2026-11-26', group: 'software', title: { fr: 'Logiciels CRM', en: 'CRM software', ar: 'برامج CRM' } },
  { slug: 'api-sms-algerie', verifiedOn: '2026-11-27', group: 'providers', title: { fr: 'API SMS et SMS professionnel (OTP, envoi en masse)', en: 'SMS API and business SMS (OTP, bulk)', ar: 'واجهة الرسائل القصيرة والرسائل المهنية' } },
  { slug: 'entreprises-cybersecurite-algerie', verifiedOn: '2026-11-27', group: 'companies', title: { fr: 'Entreprises de cybersécurité (audit, pentest, SOC)', en: 'Cybersecurity companies (audit, pentest, SOC)', ar: 'شركات الأمن السيبراني' } },
  { slug: 'logiciels-location-voiture-algerie', verifiedOn: '2026-11-27', group: 'software', title: { fr: 'Logiciels de location de voiture', en: 'Car rental software', ar: 'برامج كراء السيارات' } },
  { slug: 'creer-boutique-en-ligne-algerie', verifiedOn: '2026-11-27', group: 'apps', title: { fr: 'Créer une boutique en ligne : plateformes', en: 'Create an online store: platforms', ar: 'إنشاء متجر إلكتروني: المنصات' } },
  { slug: 'logiciels-gestion-production-algerie', verifiedOn: '2026-11-27', group: 'software', title: { fr: 'Logiciels de gestion de production (GPAO)', en: 'Production management software (GPAO)', ar: 'برامج تسيير الإنتاج' } },
  // one page per wilaya with verified companies
  ...WILAYA_KEYS.map((k) => ({ slug: `entreprises-informatiques/${k}`, verifiedOn: '2026-11-25', wilaya: k })),
];
