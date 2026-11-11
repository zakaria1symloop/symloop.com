"use client";
import { useRouter } from "next/router";

// ============================================================================
// SYMLOOP — Language Switcher (editorial redesign)
//
// All 3 locales visible at once. No dropdown, no globe icon, no chevron.
// Active locale is bright white with a subtle underline. Inactive locales
// are dimmed. Click to switch — instant, single-tap, zero extra UI.
//
// Desktop: shows native short names — "Fr · En · ع"
// Mobile: same inline layout, works in the header footer bar
//
// The native-script short names are a creative touch: Arabic gets "ع" (the
// letter ayn) instead of "AR", which is a subtle nod to actual Arabic
// speakers and looks distinctive. French gets "Fr", English gets "En".
// ============================================================================

const LOCALES = [
  { code: 'fr', label: 'Fr' },
  { code: 'en', label: 'En' },
  { code: 'ar', label: 'ع' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = router.locale || 'fr';

  const handleSwitch = (code) => {
    if (code === currentLocale) return;

    const newIsRTL = code === 'ar';
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', newIsRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', code);
    }

    router.push(
      { pathname: router.pathname, query: router.query },
      router.asPath,
      { locale: code, scroll: false }
    );
  };

  return (
    <div className="flex items-center" role="group" aria-label="Language">
      {LOCALES.map((loc, i) => {
        const isActive = loc.code === currentLocale;
        return (
          <div key={loc.code} className="flex items-center">
            {/* Separator dot */}
            {i > 0 && (
              <span className="text-white/15 mx-1.5 select-none" aria-hidden>
                ·
              </span>
            )}

            <button
              onClick={() => handleSwitch(loc.code)}
              aria-current={isActive ? 'true' : undefined}
              className={`
                relative font-mono text-[11px] tracking-[0.1em] uppercase
                px-1.5 py-1 transition-all duration-200
                ${isActive
                  ? 'text-white'
                  : 'text-white/30 hover:text-white/70'
                }
              `}
            >
              {loc.label}

              {/* Active underline — thin, subtle, animated */}
              <span
                className={`
                  absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-white
                  transition-all duration-300 ease-out
                  ${isActive ? 'w-full' : 'w-0'}
                `}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
