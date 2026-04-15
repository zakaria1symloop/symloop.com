import '../../styles/globals.css';
import { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { MessageCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { appWithTranslation } from 'next-i18next';

const SmoothScroll = dynamic(() => import('../components/effects/SmoothScroll'), { ssr: false });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isBlog = router.pathname.startsWith('/blog/');

  // Disable browser's native scroll restoration + set lang/dir on <html>
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Keep <html> lang and dir in sync with the active locale on every
  // navigation. _document.js sets it at SSR time but client-side
  // navigation doesn't update it, so the Arabic font CSS selector
  // ([lang="ar"]) and RTL layout ([dir="rtl"]) won't apply without this.
  useEffect(() => {
    const locale = router.locale || 'en';
    document.documentElement.setAttribute('lang', locale);
    document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
  }, [router.locale]);

  // Scroll to top on every page navigation (fallback for non-Lenis pages).
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url.includes('#')) return;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  const content = (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );

  return (
    <>
      {/* Default SEO meta tags — locale-aware so Arabic pages get Arabic description */}
      <Head>
        <meta name="description" content={
          router.locale === 'ar'
            ? 'سيملوب — شركة تطوير برمجيات في الجزائر. برمجيات مخصصة، تطبيقات جوال، ذكاء اصطناعي، ترحيل سحابي، ERP. بديل نيرشور للوكالات الأوروبية. نخدم أفريقيا والشرق الأوسط وأوروبا والخليج. اتصل: +213 549 575 512.'
            : router.locale === 'fr'
            ? "Symloop — développement logiciel sur mesure en Algérie. Applications mobiles, IA, migration cloud, ERP entreprise. Alternative nearshore aux prestataires européens : mêmes standards, plus de puissance d'ingénierie par budget. Algérie, MENA, Europe, Golfe. Contact : +213 549 575 512."
            : "Symloop — software development company in Algeria. Custom software, mobile apps, AI, cloud migration, ERP. Nearshore alternative to European agencies: same standards, more engineering power per budget. Serving Africa, MENA, Europe and the Gulf. Contact: +213 549 575 512."
        } />
        <title>{
          router.locale === 'ar'
            ? 'سيملوب | شركة تطوير برمجيات — نيرشور من الجزائر'
            : router.locale === 'fr'
            ? 'Symloop | Développement Logiciel Sur Mesure — Nearshore depuis l\'Algérie'
            : 'Symloop | Software Development Company — Nearshore from Algeria'
        }</title>
      </Head>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-975333575"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-975333575');
        `}
      </Script>

      {isBlog ? content : <SmoothScroll>{content}</SmoothScroll>}

      {/* Floating WhatsApp button — square → circle on hover with smile */}
      <style jsx global>{`
        .wa-fab {
          border-radius: 0;
          transition: border-radius 0.3s ease, transform 0.3s ease;
        }
        .wa-fab:hover {
          border-radius: 50%;
          transform: scale(1.08);
        }
        .wa-fab .wa-smile { opacity: 0; position: absolute; transition: opacity 0.2s ease; }
        .wa-fab .wa-icon { opacity: 1; transition: opacity 0.2s ease; }
        .wa-fab:hover .wa-smile { opacity: 1; }
        .wa-fab:hover .wa-icon { opacity: 0; }
      `}</style>
      <a
        href="https://wa.me/213549575512"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="wa-fab fixed z-50 bottom-6 right-6 lg:bottom-8 lg:right-8 flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-white text-black shadow-2xl shadow-black/40"
        style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <MessageCircle className="wa-icon w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.75} />
        <svg className="wa-smile w-6 h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
        </svg>
      </a>
    </>
  );
}

export default appWithTranslation(MyApp);
