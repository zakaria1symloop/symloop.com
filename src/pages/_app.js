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
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { IBM_Plex_Sans_Arabic, JetBrains_Mono, Instrument_Serif } from 'next/font/google';

// next/font self-hosts Google Fonts at build time — no render-blocking
// <link href="fonts.googleapis.com">, no FOUT, zero CLS from font swap, and
// fonts ship on the same origin (privacy + speed). Each call returns a
// CSS variable name we attach to body so existing styles can reference it.
const fontIbmPlex = IBM_Plex_Sans_Arabic({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['arabic', 'latin'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
});
const fontMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});
const fontSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

// CRITICAL: ssr: false here was the single biggest SEO bug in the codebase —
// it caused every non-blog page to ship with an EMPTY <body> in SSR (only
// __NEXT_DATA__, no rendered React tree, no h1, no content). Google saw a
// homogeneous, content-less site. SmoothScroll has been refactored to
// lazy-load Lenis inside useEffect, so the component itself is SSR-safe and
// we can drop the ssr: false flag.
const SmoothScroll = dynamic(() => import('../components/effects/SmoothScroll'));
const WebMCP = dynamic(() => import('../components/WebMCP'), { ssr: false });

const SITE_URL = 'https://symloop.com';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isBlog = router.pathname.startsWith('/blog/');

  // Canonical + hreflang — computed once per render. Every page gets a
  // self-referencing canonical and a complete hreflang set automatically,
  // so missing-canonical and "Duplicate without user-selected canonical"
  // never show up in Search Console for any page.
  const locale = router.locale || 'en';
  const defaultLocale = router.defaultLocale || 'en';
  const path = (router.asPath || '/').split('?')[0].split('#')[0];
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const canonicalUrl = `${SITE_URL}${localePrefix}${path}`;
  const hreflangs = [
    { lang: 'en',        href: `${SITE_URL}${path}` },
    { lang: 'fr',        href: `${SITE_URL}/fr${path}` },
    { lang: 'ar',        href: `${SITE_URL}/ar${path}` },
    { lang: 'x-default', href: `${SITE_URL}${path}` },
  ];

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

  // Attach all three font CSS variables on the outermost wrapper so any
  // descendant can resolve var(--font-ibm-plex-arabic) etc.
  const fontVars = `${fontIbmPlex.variable} ${fontMono.variable} ${fontSerif.variable}`;

  const content = (
    <div className={`${fontVars} flex flex-col min-h-screen bg-white text-black`}>
      <Header />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );

  return (
    <>
      {/* Per-page <title> and <meta name="description"> are intentionally NOT
          set here. When _app.js emits them, they win the Next.js Head dedupe
          race against page-level Heads, and every page renders the same
          title — which is exactly what an SEO audit caught (every page
          showing the same _app.js title in production). The fallback for
          pages without their own title is the React/browser default, which
          is acceptable; every editorial page already defines its own.

          What _app.js KEEPS emitting: per-route canonical and the full
          hreflang set, computed from router.asPath. These are the same
          across all pages (one canonical per URL), so dedup is a non-issue,
          and centralizing them here means every page gets them
          automatically. */}
      <Head>
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        {hreflangs.map(h => (
          <link key={`hreflang-${h.lang}`} rel="alternate" hrefLang={h.lang} href={h.href} />
        ))}
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

      {/* WebMCP — exposes Symloop services as agent-callable tools when the
          browser supports navigator.modelContext (WebMCP). No-op otherwise. */}
      <WebMCP />

      {/* Vercel Speed Insights — measures real-user Core Web Vitals
          (LCP, INP, CLS) in production. Data feeds Vercel's dashboard
          and Google Search Console's Core Web Vitals report. CWV is a
          Google ranking signal. */}
      <SpeedInsights />

      {/* Vercel Web Analytics — first-party pageview + custom event
          tracking. Privacy-respecting, no cookies, GDPR-friendly. */}
      <Analytics />

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
