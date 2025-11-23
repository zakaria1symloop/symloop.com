import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from "../utils/seo";
import { Home, RefreshCw, Mail, AlertTriangle } from "lucide-react";

export default function Custom500() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const locale = router.locale || 'fr';

  const content = {
    fr: {
      title: "Erreur Serveur - Erreur 500 | Symloop Technology",
      description: "Une erreur serveur s'est produite. Notre équipe a été notifiée. Veuillez réessayer ou contactez-nous.",
      heading: "Erreur serveur",
      subheading: "Désolé, une erreur inattendue s'est produite. Notre équipe technique a été automatiquement notifiée et travaille à résoudre le problème.",
      errorCode: "Erreur 500",
      whatToDo: "Que pouvez-vous faire ?",
      actionList: [
        "Actualisez la page et réessayez",
        "Attendez quelques instants et réessayez",
        "Retournez à la page d'accueil",
        "Contactez-nous si le problème persiste"
      ],
      homeButton: "Retour à l'accueil",
      refreshButton: "Actualiser la page",
      contactButton: "Signaler le problème",
      apology: "Nous nous excusons pour la gêne occasionnée."
    },
    en: {
      title: "Server Error - Error 500 | Symloop Technology",
      description: "A server error occurred. Our team has been notified. Please try again or contact us.",
      heading: "Server Error",
      subheading: "Sorry, an unexpected error occurred. Our technical team has been automatically notified and is working to resolve the issue.",
      errorCode: "Error 500",
      whatToDo: "What can you do?",
      actionList: [
        "Refresh the page and try again",
        "Wait a few moments and try again",
        "Return to the homepage",
        "Contact us if the problem persists"
      ],
      homeButton: "Back to homepage",
      refreshButton: "Refresh page",
      contactButton: "Report issue",
      apology: "We apologize for the inconvenience."
    },
    ar: {
      title: "خطأ في الخادم - خطأ 500 | سيملوب تكنولوجي",
      description: "حدث خطأ في الخادم. تم إخطار فريقنا. يرجى المحاولة مرة أخرى أو الاتصال بنا.",
      heading: "خطأ في الخادم",
      subheading: "عذراً، حدث خطأ غير متوقع. تم إخطار فريقنا التقني تلقائياً ويعمل على حل المشكلة.",
      errorCode: "خطأ 500",
      whatToDo: "ماذا يمكنك أن تفعل؟",
      actionList: [
        "قم بتحديث الصفحة وحاول مرة أخرى",
        "انتظر بضع لحظات وحاول مرة أخرى",
        "ارجع إلى الصفحة الرئيسية",
        "تواصل معنا إذا استمرت المشكلة"
      ],
      homeButton: "العودة للرئيسية",
      refreshButton: "تحديث الصفحة",
      contactButton: "الإبلاغ عن المشكلة",
      apology: "نعتذر عن الإزعاج."
    }
  };

  const currentContent = content[locale] || content.fr;

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Seo
        title={currentContent.title}
        description={currentContent.description}
        noindex={true}
      />

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-4">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <span className="text-7xl font-bold text-red-500 block">
              500
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

          {/* What to do */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {currentContent.whatToDo}
            </h2>
            <ul className="space-y-2">
              {currentContent.actionList.map((action, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <span className="text-red-500 mt-1">•</span>
                  {action}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRefresh}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              <RefreshCw size={20} />
              {currentContent.refreshButton}
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              <Home size={20} />
              {currentContent.homeButton}
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              <Mail size={20} />
              {currentContent.contactButton}
            </Link>
          </div>

          {/* Apology */}
          <p className="mt-8 text-gray-500 italic">
            {currentContent.apology}
          </p>

          {/* Company Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
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
