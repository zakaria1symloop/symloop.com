import '../../styles/globals.css';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { appWithTranslation } from 'next-i18next';

const SmoothScroll = dynamic(() => import('../components/effects/SmoothScroll'), { ssr: false });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isBlog = router.pathname.startsWith('/blog/');

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
    </>
  );
}

export default appWithTranslation(MyApp);
