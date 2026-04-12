"use client";

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
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

    // Force scroll to top on initial mount — prevents browser from
    // restoring previous scroll position on page load/refresh.
    lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top on every route change — Lenis must be told explicitly
  // because it manages its own scroll position and ignores window.scrollTo.
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url.includes('#')) return; // skip anchor links
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return <>{children}</>;
}
