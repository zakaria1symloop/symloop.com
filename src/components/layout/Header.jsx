"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';

// --- NAV ITEM ---
const NavItem = ({ label, link, scrolled }) => {
  return (
    <Link
      href={link}
      className="group relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300"
    >
      <span className="relative z-10">{label}</span>
      {/* Hover underline effect */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-3/4 transition-all duration-300" />
    </Link>
  );
};

// --- MOBILE MENU ---
const MobileMenu = ({ isOpen, onClose }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const navItems = [
    { label: t('navigation.home'), link: '/' },
    { label: t('navigation.services'), link: '/services' },
    { label: t('navigation.clientsPartners'), link: '/#clients-partners' },
    { label: t('navigation.blog'), link: '/blog' },
    { label: t('navigation.learning'), link: '/learning' },
    { label: t('navigation.investors'), link: '/investisseurs' },
    { label: t('navigation.recruitment'), link: '/recrutement' },
  ];

  const handleNavClick = (link) => {
    onClose();
    router.push(link);
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.1); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-15px, 20px) scale(0.9); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1.1); }
          50% { transform: translate(10px, 15px) scale(1); }
        }
        @keyframes staggerIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .menu-panel {
          animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .menu-backdrop {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .orb-1 { animation: orbFloat1 8s ease-in-out infinite; }
        .orb-2 { animation: orbFloat2 10s ease-in-out infinite 1s; }
        .orb-3 { animation: orbFloat3 12s ease-in-out infinite 2s; }
        .nav-stagger {
          animation: staggerIn 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        {isOpen && (
          <div
            className="menu-backdrop fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
        )}

        {/* Menu Panel */}
        {isOpen && (
          <div className="menu-panel fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-black border-l border-white/10 overflow-hidden">

            {/* Animated Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="orb-1 absolute w-[250px] h-[250px] rounded-full"
                style={{
                  top: '5%',
                  right: '-30%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                  filter: 'blur(50px)'
                }}
              />
              <div className="orb-2 absolute w-[200px] h-[200px] rounded-full"
                style={{
                  top: '45%',
                  left: '-20%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />
              <div className="orb-3 absolute w-[180px] h-[180px] rounded-full"
                style={{
                  bottom: '10%',
                  right: '-20%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
                  filter: 'blur(45px)'
                }}
              />
            </div>

            <div className="relative flex flex-col h-full z-10">
              {/* Header */}
              <div className="flex items-center justify-between p-4">
                <img
                  src="/sym-logo.png"
                  alt="Symloop"
                  className="h-6 object-contain brightness-0 invert"
                />
                <button
                  onClick={onClose}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <X className="w-4 h-4 text-white/80" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-3 py-2">
                <div className="space-y-0.5">
                  {navItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavClick(item.link)}
                      className="nav-stagger w-full text-left px-4 py-2.5 text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 flex items-center justify-between group"
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </button>
                  ))}
                </div>
              </nav>

              {/* Bottom Section */}
              <div className="p-4 space-y-3 border-t border-white/10">
                {/* Language Switcher */}
                <div className="flex items-center justify-center gap-1.5">
                  {[
                    { code: 'fr', label: 'FR' },
                    { code: 'en', label: 'EN' },
                    { code: 'ar', label: 'AR' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        router.push(router.pathname, router.asPath, { locale: lang.code });
                        onClose();
                      }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                        router.locale === lang.code
                          ? 'bg-white text-black'
                          : 'text-white/50 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    onClose();
                    window.open('https://calendly.com/symloop', '_blank');
                  }}
                  className="w-full py-3 text-sm bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-white/90 active:scale-[0.98]"
                >
                  {t('contact.freeConsultation')}
                </button>

                {/* Contact */}
                <p className="text-center text-xs text-white/30">
                  contact@symloop.com
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// --- HEADER ---
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes subtleGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.05); }
          50% { box-shadow: 0 0 30px rgba(255,255,255,0.1); }
        }
        .header-glow {
          animation: subtleGlow 4s ease-in-out infinite;
        }
      `}</style>

      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'py-2 px-4' : 'py-4 px-4'
      }`}>
        {/* Header Container */}
        <div className={`max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl header-glow shadow-2xl shadow-black/50'
            : 'bg-black/30 backdrop-blur-md rounded-2xl'
        }`}>
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'px-6 py-3' : 'px-2 py-2'
          }`}>

            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative">
                <img
                  src="/sym-logo.png"
                  alt="Symloop"
                  className={`transition-all duration-500 object-contain brightness-0 invert ${
                    scrolled ? 'h-7' : 'h-9'
                  }`}
                />
                {/* Status indicator */}
                <div className={`absolute -top-0.5 -right-0.5 bg-green-400 rounded-full animate-pulse transition-all duration-500 ${
                  scrolled ? 'w-1.5 h-1.5' : 'w-2 h-2'
                }`} />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <NavItem label={t('navigation.home')} link="/" scrolled={scrolled} />
              <NavItem label={t('navigation.services')} link="/services" scrolled={scrolled} />
              <NavItem label={t('navigation.clientsPartners')} link="/#clients-partners" scrolled={scrolled} />
              <NavItem label={t('navigation.blog')} link="/blog" scrolled={scrolled} />
              <NavItem label={t('navigation.learning')} link="/learning" scrolled={scrolled} />
              <NavItem label={t('navigation.investors')} link="/investisseurs" scrolled={scrolled} />
              <NavItem label={t('navigation.recruitment')} link="/recrutement" scrolled={scrolled} />
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Language Switcher - Desktop */}
              <div className="hidden lg:block">
                <LanguageSwitcher scrolled={scrolled} />
              </div>

              {/* CTA Button - Desktop */}
              <a
                href="https://calendly.com/symloop"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden lg:flex items-center gap-2 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] ${
                  scrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-sm'
                }`}
              >
                <span>{t('contact.freeConsultation')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300 ${
                  scrolled ? 'w-10 h-10' : 'w-11 h-11'
                }`}
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
