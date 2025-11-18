import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from "../../src/utils/seo";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";

export default function Custom404() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const locale = router.locale || 'fr';

  const content = {
    fr: {
      title: "Page Non Trouvée - Erreur 404 | Symloop Technology",
      description: "La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou contactez-nous pour obtenir de l'aide.",
      heading: "Oops! Page non trouvée",
      subheading: "La page que vous recherchez semble avoir été déplacée, supprimée ou n'existe pas.",
      errorCode: "Erreur 404",
      suggestions: "Voici quelques suggestions :",
      suggestionList: [
        "Vérifiez que l'URL est correctement saisie",
        "Retournez à la page d'accueil",
        "Utilisez la navigation pour trouver ce que vous cherchez",
        "Contactez-nous si vous avez besoin d'aide"
      ],
      homeButton: "Retour à l'accueil",
      backButton: "Page précédente",
      contactButton: "Nous contacter",
      searchLabel: "Ou recherchez ce que vous cherchez"
    },
    en: {
      title: "Page Not Found - Error 404 | Symloop Technology",
      description: "The page you're looking for doesn't exist or has been moved. Return to homepage or contact us for help.",
      heading: "Oops! Page not found",
      subheading: "The page you're looking for seems to have been moved, deleted, or doesn't exist.",
      errorCode: "Error 404",
      suggestions: "Here are some suggestions:",
      suggestionList: [
        "Check that the URL is entered correctly",
        "Return to the homepage",
        "Use the navigation to find what you're looking for",
        "Contact us if you need help"
      ],
      homeButton: "Back to homepage",
      backButton: "Previous page",
      contactButton: "Contact us",
      searchLabel: "Or search for what you're looking for"
    },
    ar: {
      title: "الصفحة غير موجودة - خطأ 404 | سيملوب تكنولوجي",
      description: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها. ارجع إلى الصفحة الرئيسية أو اتصل بنا للحصول على المساعدة.",
      heading: "عفواً! الصفحة غير موجودة",
      subheading: "يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها أو غير موجودة.",
      errorCode: "خطأ 404",
      suggestions: "إليك بعض الاقتراحات:",
      suggestionList: [
        "تحقق من صحة عنوان URL",
        "العودة إلى الصفحة الرئيسية",
        "استخدم التنقل للعثور على ما تبحث عنه",
        "تواصل معنا إذا كنت بحاجة للمساعدة"
      ],
      homeButton: "العودة للرئيسية",
      backButton: "الصفحة السابقة",
      contactButton: "تواصل معنا",
      searchLabel: "أو ابحث عما تبحث عنه"
    }
  };

  const currentContent = content[locale] || content.fr;

  return (
    <>
      <Seo
        title={currentContent.title}
        description={currentContent.description}
        noindex={true}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Code */}
          <div className="mb-8">
            <span className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              404
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentContent.heading}
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-600 mb-8">
            {currentContent.subheading}
          </p>

          {/* Suggestions */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {currentContent.suggestions}
            </h2>
            <ul className="space-y-2">
              {currentContent.suggestionList.map((suggestion, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-500 mt-1">•</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Home size={20} />
              {currentContent.homeButton}
            </Link>

            <button
              onClick={() => router.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              {currentContent.backButton}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              <Mail size={20} />
              {currentContent.contactButton}
            </Link>
          </div>

          {/* Company Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Symloop Technology.
              {locale === 'ar' ? ' جميع الحقوق محفوظة.' : locale === 'en' ? ' All rights reserved.' : ' Tous droits réservés.'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
