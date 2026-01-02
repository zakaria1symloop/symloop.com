"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Globe, ChevronDown, Check } from "lucide-react";

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷', short: 'FR' },
  { code: 'en', name: 'English', flag: '🇺🇸', short: 'EN' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', short: 'AR' }
];

export default function LanguageSwitcher({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find(lang => lang.code === router.locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    if (langCode === router.locale) {
      setIsOpen(false);
      return;
    }

    const { pathname, asPath, query } = router;
    setIsOpen(false);

    const newIsRTL = langCode === 'ar';
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', newIsRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', langCode);
    }

    router.push({ pathname, query }, asPath, {
      locale: langCode,
      scroll: false
    });
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Highlighted Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group relative flex items-center gap-2 px-4 py-2 rounded-full
          transition-all duration-300
          bg-gradient-to-r from-white/10 to-white/5
          border border-white/20 hover:border-white/40
          hover:bg-white/15 hover:shadow-lg hover:shadow-white/10
          text-white
          ${scrolled ? 'px-3 py-1.5' : 'px-4 py-2'}
        `}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Globe icon with pulse */}
        <div className="relative">
          <Globe className={`${scrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-white/80 group-hover:text-white transition-colors`} />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </div>

        {/* Current language code only */}
        <span className={`font-semibold ${scrolled ? 'text-xs' : 'text-sm'}`}>
          {currentLanguage.short}
        </span>

        {/* Chevron */}
        <ChevronDown className={`${scrolled ? 'w-3 h-3' : 'w-4 h-4'} text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-3 w-44 rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/50 z-50 overflow-hidden">
          {/* Language Options */}
          <div className="p-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-lg text-left
                  transition-all duration-200
                  ${router.locale === lang.code
                    ? 'bg-white/10 text-white'
                    : 'hover:bg-white/5 text-white/70 hover:text-white'
                  }
                `}
              >
                {/* Language name and code */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold w-8">{lang.short}</span>
                  <span className="text-sm">{lang.name}</span>
                </div>

                {/* Active indicator */}
                {router.locale === lang.code && (
                  <Check className="w-4 h-4 text-green-400" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
