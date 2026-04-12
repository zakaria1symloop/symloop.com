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

  // Disable browser's native scroll restoration — we handle it ourselves
  // via Lenis in SmoothScroll.jsx. Without this, the browser restores the
  // previous scroll position on page load/refresh, causing pages to open
  // at the bottom instead of the top.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

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
      {/* Default SEO meta tags — pages can override with their own Head */}
      <Head>
        <meta name="description" content="Symloop — Algeria's #1 software engineering and AI company. Web development, mobile apps, IoT, AI automation, custom ERP/CRM. Serving all 58 wilayas. Contact: +213 549 575 512." />
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
