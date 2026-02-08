import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServiceDetail from "../../components/services/ServiceDetail";
import { getServicesData } from "../../components/services/ServicesData";

// Map every possible slug (all locales + legacy) to a service ID
const ALL_SLUGS = {
  // French slugs
  "developpement-logiciel-sur-mesure-mena": "dev-logiciel",
  "developpement-application-mobile-flutter-mena": "app-mobile-flutter",
  "creation-site-web-ecommerce-mena": "site-web-ecommerce",
  "solutions-iot-esp32-objets-connectes-mena": "infrastructure-reseau-iot",
  "intelligence-artificielle-chatgpt-machine-learning-mena": "intelligence-artificielle",
  "cybersecurite-entreprise-protection-donnees-mena": "cybersecurity",
  // English slugs
  "custom-software-development-mena": "dev-logiciel",
  "flutter-mobile-app-development-mena": "app-mobile-flutter",
  "website-ecommerce-development-mena": "site-web-ecommerce",
  "iot-solutions-esp32-connected-objects-mena": "infrastructure-reseau-iot",
  "artificial-intelligence-chatgpt-machine-learning-mena": "intelligence-artificielle",
  "enterprise-cybersecurity-data-protection-mena": "cybersecurity",
  // Arabic slugs
  "\u062A\u0637\u0648\u064A\u0631-\u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0627\u062A-\u0627\u0644\u0645\u062E\u0635\u0635\u0629-\u0645\u064A\u0646\u0627": "dev-logiciel",
  "\u062A\u0637\u0648\u064A\u0631-\u062A\u0637\u0628\u064A\u0642\u0627\u062A-\u0627\u0644\u0647\u0627\u062A\u0641-\u0641\u0644\u0627\u062A\u0631-\u0645\u064A\u0646\u0627": "app-mobile-flutter",
  "\u062A\u0637\u0648\u064A\u0631-\u0645\u0648\u0627\u0642\u064A\u0639-\u0627\u0644\u062A\u062C\u0627\u0631\u0629-\u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629-\u0645\u064A\u0646\u0627": "site-web-ecommerce",
  "\u062D\u0644\u0648\u0644-\u0627\u0646\u062A\u0631\u0646\u062A-\u0627\u0644\u0627\u0634\u064A\u0627\u0621-ESP32-\u0645\u064A\u0646\u0627": "infrastructure-reseau-iot",
  "\u0627\u0644\u0630\u0643\u0627\u0621-\u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A-ChatGPT-\u062A\u0639\u0644\u0645-\u0627\u0644\u0622\u0644\u0629-\u0645\u064A\u0646\u0627": "intelligence-artificielle",
  "\u0627\u0644\u0623\u0645\u0646-\u0627\u0644\u0633\u064A\u0628\u0631\u0627\u0646\u064A-\u0644\u0644\u0634\u0631\u0643\u0627\u062A-\u062D\u0645\u0627\u064A\u0629-\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A-\u0645\u064A\u0646\u0627": "cybersecurity",
  // Legacy slugs (keep old links working)
  "sites-web": "site-web-ecommerce",
  "developpement-mobile": "app-mobile-flutter",
  "hebergement": "infrastructure-reseau-iot",
  "logiciel": "dev-logiciel",
  "iot": "infrastructure-reseau-iot",
  "intelligence-artificielle": "intelligence-artificielle",
  "ecommerce": "site-web-ecommerce",
  "cybersecurite": "cybersecurity",
};

export default function ServicePage() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { slug } = router.query;

  if (!slug) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white/50">Loading...</div>;
  }

  const serviceId = ALL_SLUGS[slug];

  if (!serviceId) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Service not found</h1>
        <p className="text-white/40 mb-8">The requested service does not exist.</p>
        <button
          onClick={() => router.push('/services')}
          className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
        >
          {router.locale === 'ar' ? 'العودة للخدمات' : router.locale === 'en' ? 'Back to services' : 'Retour aux services'}
        </button>
      </div>
    );
  }

  const services = getServicesData(t, router);
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Service not found</h1>
      </div>
    );
  }

  const features = Array.isArray(service.features) ? service.features :
    (typeof service.features === 'object' && service.features !== null) ? Object.values(service.features) : [];

  return (
    <ServiceDetail
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      price={service.estimatedPrice}
      duration={service.deliveryTime}
      features={features.map(f => typeof f === 'string' ? f : f?.toString() || '')}
      technologies={service.keywords || []}
      applications={[]}
    />
  );
}

export async function getStaticPaths() {
  const allSlugs = Object.keys(ALL_SLUGS);
  const paths = allSlugs.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
