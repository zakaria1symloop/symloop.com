import Link from 'next/link';

// Internal links from pages that already rank ("logiciel [secteur] algérie")
// to the sector pages Google has not surfaced yet. Titles are the buyer's query.
export const SECTOR_PAGES = [
  { slug: 'logiciel-entretien-annuel-evaluation-du-personnel-algerie-2027-objectifs-notes-de-l-annee-grille-de-criteres-calibrage-plan-de-formation', fr: 'Logiciel d’entretien annuel en Algérie', en: 'Yearly appraisal software in Algeria', ar: 'برنامج المقابلة السنوية في الجزائر' },
  { slug: 'logiciel-suivi-budgetaire-algerie-2027-budget-par-centre-de-cout-engage-realise-reste-a-engager-atterrissage-ecarts-transferts-entre-lignes', fr: 'Logiciel de suivi budgétaire en Algérie', en: 'Budget tracking software in Algeria', ar: 'برنامج متابعة الميزانية في الجزائر' },
  { slug: 'logiciel-gestion-des-contrats-algerie-2027-contratheque-echeances-preavis-reconduction-tacite-avenants-versions-alertes-obligations-responsable', fr: 'Logiciel de gestion des contrats en Algérie', en: 'Contract management software in Algeria', ar: 'برنامج تسيير العقود في الجزائر' },
  { slug: 'logiciel-location-de-materiel-engins-algerie-2027-planning-de-disponibilite-etat-des-lieux-photo-compteur-d-heures-facturation-taux-utilisation', fr: 'Logiciel de location de matériel en Algérie', en: 'Equipment rental software in Algeria', ar: 'برنامج كراء العتاد في الجزائر' },
  { slug: 'logiciel-appel-d-offres-algerie-2027-ia-veille-des-avis-lecture-du-cahier-des-charges-pieces-a-fournir-memoire-technique-controle-avant-depot', fr: 'Logiciel appel d’offres en Algérie', en: 'Tender software in Algeria', ar: 'برنامج المناقصات في الجزائر' },
  { slug: 'logiciel-de-recrutement-algerie-2027-gestion-des-candidatures-tri-des-cv-doublons-convocations-entretiens-notes-reponse-a-chaque-candidat', fr: 'Logiciel de recrutement en Algérie', en: 'Recruitment software in Algeria', ar: 'برنامج التوظيف في الجزائر' },
  { slug: 'logiciel-gestion-restaurant-algerie-2027-fiches-techniques-cout-matiere-par-plat-stock-decompte-a-la-vente-ecart-theorique-reel-salle-cuisine', fr: 'Logiciel de restaurant en Algérie', en: 'Restaurant software in Algeria', ar: 'برنامج المطعم في الجزائر' },
  { slug: 'logiciel-gestion-showroom-automobile-algerie-2027-fiche-par-chassis-prix-de-revient-reservations-versements-jours-en-stock-marge-par-vehicule', fr: 'Logiciel showroom automobile en Algérie', en: 'Car showroom software in Algeria', ar: 'برنامج معرض السيارات في الجزائر' },
  { slug: 'logiciel-de-gestion-hoteliere-algerie-2027-planning-des-chambres-reservations-sans-double-vente-arrivees-departs-menage-cloture-de-nuit', fr: 'Logiciel de gestion hôtelière en Algérie', en: 'Hotel management software in Algeria', ar: 'برنامج تسيير الفندق في الجزائر' },
  { slug: 'logiciel-de-gestion-cabinet-medical-algerie-2027-agenda-salle-d-attente-dossier-patient-ordonnances-imprimees-recettes-du-jour-qui-voit-quoi', fr: 'Logiciel cabinet médical en Algérie', en: 'Medical practice software in Algeria', ar: 'برنامج العيادة الطبية في الجزائر' },
  { slug: 'logiciel-architecte-bureau-d-etudes-algerie-2027-honoraires-par-phase-temps-passe-indices-de-plans-registre-de-diffusion-reserves-de-chantier', fr: 'Logiciel architecte et bureau d’études en Algérie', en: 'Software for architects and design offices in Algeria', ar: 'برنامج المهندس المعماري ومكتب الدراسات في الجزائر' },
  { slug: 'logiciel-librairie-papeterie-algerie-2027-rentree-scolaire-listes-de-fournitures-en-kits-manuels-commandes-clients-invendus-stock-par-saison', fr: 'Logiciel librairie-papeterie en Algérie', en: 'Bookshop and stationery software in Algeria', ar: 'برنامج المكتبة والوراقة في الجزائر' },
  { slug: 'logiciel-bijouterie-algerie-2027-prix-au-gramme-du-jour-etiquette-par-piece-reprise-de-vieil-or-reparations-acomptes-inventaire-au-poids', fr: 'Logiciel bijouterie en Algérie', en: 'Jewellery shop software in Algeria', ar: 'برنامج محل المجوهرات في الجزائر' },
  { slug: 'logiciel-de-gestion-de-production-gpao-algerie-2027-suivi-d-atelier-au-poste-arrets-machine-par-cause-trs-en-cours-ordres-de-fabrication', fr: 'Logiciel de gestion de production en Algérie', en: 'Production management software in Algeria', ar: 'برنامج تسيير الإنتاج في الجزائر' },
  { slug: 'logiciel-imprimerie-algerie-2027-devis-d-impression-prix-par-quantite-bon-a-tirer-dossier-de-fabrication-planning-des-machines-stock-papier', fr: 'Logiciel imprimerie en Algérie', en: 'Print shop software in Algeria', ar: 'برنامج المطبعة في الجزائر' },
  { slug: 'logiciel-agroalimentaire-algerie-2027-tracabilite-des-lots-de-la-matiere-a-la-palette-rappel-rendement-controles-qualite-dlc-erp-production', fr: 'Logiciel agroalimentaire en Algérie', en: 'Food manufacturing software in Algeria', ar: 'برنامج الصناعة الغذائية في الجزائر' },
  { slug: 'logiciel-boutique-pret-a-porter-magasin-de-vetements-algerie-2027-stock-par-taille-et-couleur-echanges-mise-de-cote-instagram-fin-de-saison', fr: 'Logiciel boutique de prêt-à-porter et magasin de vêtements en Algérie', en: 'Clothing shop software in Algeria', ar: 'برنامج محل الملابس الجاهزة في الجزائر' },
  { slug: 'logiciel-station-service-algerie-2027-compteurs-des-pompes-jaugeage-des-cuves-ecart-de-caisse-par-equipe-clients-en-compte-boutique', fr: 'Logiciel station-service en Algérie', en: 'Filling station software in Algeria', ar: 'برنامج محطة الوقود في الجزائر' },
  { slug: 'logiciel-agence-de-voyage-algerie-2027-un-dossier-par-voyage-places-bloquees-acomptes-echeances-fournisseurs-passeports-marge-par-dossier', fr: 'Logiciel agence de voyage en Algérie', en: 'Travel agency software in Algeria', ar: 'برنامج وكالة السفر في الجزائر' },
  { slug: 'logiciel-erp-algerie-2027-une-seule-base-achats-stock-production-ventes-quand-il-en-faut-un-par-quels-modules-commencer-deploiement-par-vagues', fr: 'Logiciel ERP en Algérie', en: 'ERP software in Algeria', ar: 'برنامج ERP في الجزائر' },
  { slug: 'logiciel-boulangerie-patisserie-algerie-2027-production-du-jour-invendus-ruptures-commandes-de-gateaux-acompte-cout-de-revient-recette', fr: 'Logiciel boulangerie et pâtisserie en Algérie', en: 'Bakery and pastry shop software in Algeria', ar: 'برنامج المخبزة والحلويات في الجزائر' },
  { slug: 'logiciel-lavage-auto-algerie-2027-application-station-de-lavage-file-d-attente-ticket-par-voiture-laveurs-abonnements-lavage-a-domicile', fr: 'Logiciel lavage auto et station de lavage en Algérie', en: 'Car wash software in Algeria', ar: 'برنامج غسل السيارات في الجزائر' },
  { slug: 'logiciel-pieces-auto-algerie-2027-magasin-pieces-detachees-recherche-par-vehicule-references-equivalentes-emplacements-demandes-non-servies', fr: 'Logiciel pièces auto et pièces détachées en Algérie', en: 'Auto parts store software in Algeria', ar: 'برنامج قطع غيار السيارات في الجزائر' },
  { slug: 'logiciel-quincaillerie-materiaux-de-construction-algerie-2027-caisse-stock-unites-multiples-credit-artisans-marchandise-payee-non-enlevee', fr: 'Logiciel quincaillerie et matériaux de construction en Algérie', en: 'Hardware and building-materials store software in Algeria', ar: 'برنامج محل الخردوات ومواد البناء في الجزائر' },
  { slug: 'logiciel-entreprise-batiment-btp-algerie-2027-devis-metre-suivi-de-chantier-situations-de-travaux-achats-pointage-marge-par-chantier', fr: 'Logiciel entreprise de bâtiment et BTP en Algérie', en: 'Construction company software in Algeria', ar: 'برنامج مؤسسات البناء والأشغال في الجزائر' },
  { slug: 'logiciel-gestion-commerciale-algerie-2027-devis-commande-bon-de-livraison-facture-stock-reglements-erp-ou-pas-sans-ressaisie', fr: 'Logiciel de gestion commerciale en Algérie', en: 'Sales and inventory management software in Algeria', ar: 'برنامج التسيير التجاري في الجزائر' },
  { slug: 'logiciel-transport-marchandises-algerie-2027-voyages-lettre-de-voiture-avances-chauffeur-retours-a-vide-marge', fr: 'Logiciel transport de marchandises en Algérie', en: 'Freight transport software in Algeria', ar: 'برنامج نقل البضائع في الجزائر' },
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
