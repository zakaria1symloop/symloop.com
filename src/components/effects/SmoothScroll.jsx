"use client";

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

// CRITICAL SSR NOTE:
// This component MUST render its children server-side. Previously it was
// imported in _app.js via dynamic(..., { ssr: false }) which caused every
// non-blog page (homepage, /products/noor/, /insights/*, /services/*,
// /presentation/) to ship to Google with an EMPTY <body> — only the head
// and __NEXT_DATA__ rendered, no content. That single line of dead-simple
// configuration was responsible for the bulk of the "Discovered, currently
// not indexed" mass in GSC: Google saw a homogeneous, content-less site.
//
// Lenis is now lazy-loaded inside useEffect so the module never touches
// `window` during SSR, which means _app.js can drop the `ssr: false` flag.
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    let rafId;

    // Dynamic import keeps Lenis out of the SSR module graph — the
    // component itself renders fine server-side and the smooth-scroll
    // behavior attaches once the bundle reaches the browser.
    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });
      lenisRef.current = lenis;
      lenis.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  // Scroll to top on every route change — Lenis must be told explicitly
  // because it manages its own scroll position and ignores window.scrollTo.
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url.includes('#')) return; // skip anchor links
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return <>{children}</>;
}
