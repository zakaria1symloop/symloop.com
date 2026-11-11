import Link from 'next/link';

// Internal links from pages that already rank ("logiciel [secteur] algérie")
// to the sector pages Google has not surfaced yet. Titles are the buyer's query.
export const SECTOR_PAGES = [
  { slug: 'logiciel-laboratoire-analyses-medicales-algerie-2027-tubes-code-barres-automates-validation-compte-rendu-whatsapp', fr: 'Logiciel laboratoire d’analyses médicales en Algérie', en: 'Medical laboratory software in Algeria', ar: 'برنامج مخبر التحاليل الطبية في الجزائر' },
  { slug: 'logiciel-superette-supermarche-algerie-2027-caisse-hors-ligne-code-barres-balance-dlc-marge-cloture', fr: 'Logiciel supérette et supermarché en Algérie', en: 'Convenience store and supermarket software in Algeria', ar: 'برنامج سوبيرات وسوبرماركت في الجزائر' },
  { slug: 'logiciel-auto-ecole-algerie-2027-planning-moniteurs-vehicules-heures-comptees-tranches-code-en-ligne', fr: 'Logiciel auto-école en Algérie', en: 'Driving school software in Algeria', ar: 'برنامج مدرسة سياقة في الجزائر' },
  { slug: 'logiciel-creche-algerie-2027-inscriptions-pointage-mensualites-journal-parents-liste-d-attente', fr: 'Logiciel crèche en Algérie', en: 'Nursery software in Algeria', ar: 'برنامج روضة أطفال في الجزائر' },
  { slug: 'creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement', fr: 'Logiciel salle de sport en Algérie', en: 'Gym management software in Algeria', ar: 'برنامج تسيير قاعة رياضة في الجزائر' },
  { slug: 'cabinet-dentaire-algerie-2027-patients-diaspora-ete-plan-de-traitement-a-distance-devis-radios-suivi', fr: 'Logiciel cabinet dentaire en Algérie', en: 'Dental practice software in Algeria', ar: 'برنامج عيادة أسنان في الجزائر' },
  { slug: 'creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux', fr: 'Logiciel de location de voitures en Algérie', en: 'Car rental software in Algeria', ar: 'برنامج كراء السيارات في الجزائر' },
  { slug: 'creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien', fr: 'Logiciel garage automobile en Algérie', en: 'Auto garage software in Algeria', ar: 'برنامج ورشة ميكانيك السيارات في الجزائر' },
  { slug: 'creer-equivalent-mariages-net-algerie-2027-salle-des-fetes-reservation-depuis-la-france-acompte-dates', fr: 'Logiciel salle des fêtes en Algérie', en: 'Wedding hall booking software in Algeria', ar: 'برنامج قاعة الحفلات في الجزائر' },
  { slug: 'promoteur-immobilier-vendre-sur-plan-diaspora-2027-espace-acquereur-suivi-chantier', fr: 'Logiciel promoteur immobilier en Algérie', en: 'Property developer software in Algeria', ar: 'برنامج المرقّي العقاري في الجزائر' },
  { slug: 'logiciel-hotel-reservation-hebergement-algerie-2026', fr: 'Logiciel hôtel en Algérie', en: 'Hotel software in Algeria', ar: 'برنامج فندق في الجزائر' },
  { slug: 'caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026', fr: 'Logiciel restaurant et fast food en Algérie', en: 'Restaurant and fast food software in Algeria', ar: 'برنامج مطعم ووجبات سريعة في الجزائر' },
  { slug: 'ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026', fr: 'Logiciel centre de formation et école privée en Algérie', en: 'Training centre and private school software in Algeria', ar: 'برنامج مركز تكوين ومدرسة خاصة في الجزائر' },
  { slug: 'agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026', fr: 'Logiciel agence immobilière en Algérie', en: 'Real estate agency software in Algeria', ar: 'برنامج وكالة عقارية في الجزائر' },
  { slug: 'portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite', fr: 'Logiciel grossiste en Algérie', en: 'Wholesaler software in Algeria', ar: 'برنامج تاجر جملة في الجزائر' },
  { slug: 'logiciel-ecole-gestion-scolaire-algerie-2026', fr: 'Logiciel école et gestion scolaire en Algérie', en: 'School management software in Algeria', ar: 'برنامج تسيير المدارس في الجزائر' },
  { slug: 'logiciel-pharmacie-gestion-stock-algerie-2026', fr: 'Logiciel pharmacie et gestion de stock en Algérie', en: 'Pharmacy stock software in Algeria', ar: 'برنامج الصيدلية وتسيير المخزون في الجزائر' },
  { slug: 'logiciel-clinique-cabinet-medical-algerie-2026', fr: 'Logiciel clinique, cabinet médical et hôpital en Algérie', en: 'Clinic, medical practice and hospital software in Algeria', ar: 'برنامج المصحة والعيادة الطبية والمستشفى في الجزائر' },
  { slug: 'serre-intelligente-agriculture-algerie-2026', fr: 'Serre intelligente et agriculture en Algérie', en: 'Smart greenhouse and agriculture software in Algeria', ar: 'البيت البلاستيكي الذكي والفلاحة في الجزائر' },
];

const HEADING = { fr: 'Logiciels par secteur en Algérie', en: 'Software by sector in Algeria', ar: 'برامج حسب القطاع في الجزائر' };

export default function SectorSoftwareLinks({ locale = 'fr', exclude = [], tone = 'dark', className = '' }) {
  const lang = ['fr', 'en', 'ar'].includes(locale) ? locale : 'fr';
  const items = SECTOR_PAGES.filter((p) => !exclude.includes(p.slug));
  const dark = tone === 'dark';
  return (
    <nav aria-label={HEADING[lang]} dir={lang === 'ar' ? 'rtl' : 'ltr'} className={`mb-16 ${className}`}>
      <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${dark ? 'text-gray-500' : 'text-gray-600'}`}>{HEADING[lang]}</h3>
      <ul className="grid sm:grid-cols-2 gap-2">
        {items.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} locale={lang} className={`block px-4 py-3 rounded-lg text-sm transition-colors ${dark ? 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white' : 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'}`}>
              {p[lang]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
