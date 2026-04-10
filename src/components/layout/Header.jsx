"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ArrowUpRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';
import AIOnboarding from '../onboarding/AIOnboarding';

// ============================================================================
// SYMLOOP — Header (editorial redesign 2026-04)
//
// Design DNA: matches the insight/service pages — hairline borders, mono
// numerals, font-light, no gradients, no glass blur, no glow effects.
// Feels like Bloomberg Businessweek or Stripe Press navigation, not a
// startup SaaS header.
//
// Layout:
//   Desktop: [logo] ··· [nav items] ··· [phone] [lang] [AI] [Contact]
//   Mobile:  [logo] ··· [hamburger]
//   Scroll:  transparent → solid black + hairline border-b
// ============================================================================

const WHATSAPP_URL = 'https://wa.me/213549575512';
const PHONE_URL    = 'tel:+213549575512';
const PHONE_LABEL  = '+213 549 57 55 12';

// ── Contact Popup (kept from original — modal with contact options) ─────
const ContactPopup = ({ isOpen, onClose }) => {
  const { t } = useTranslation('common');
  if (!isOpen) return null;

  const options = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-4 h-4" />,
      href: WHATSAPP_URL,
      accent: 'hover:border-green-500/40 hover:text-green-400',
    },
    {
      name: t('contact.telephone', { defaultValue: 'Appel' }),
      icon: <Phone className="w-4 h-4" />,
      href: PHONE_URL,
      accent: 'hover:border-blue-500/40 hover:text-blue-400',
    },
  ];

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm">
        <div className="bg-black border border-white/[0.08] p-8">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              {t('contact.chooseMethod', { defaultValue: 'Contact' })}
            </span>
            <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="space-y-px bg-white/[0.06]">
            {options.map((opt) => (
              <a
                key={opt.name}
                href={opt.href}
                target={opt.href.startsWith('http') ? '_blank' : undefined}
                rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group flex items-center justify-between bg-black p-5 border border-transparent transition-all duration-200 ${opt.accent}`}
                onClick={onClose}
              >
                <div className="flex items-center gap-4">
                  <span className="text-white/60 group-hover:text-current transition-colors">{opt.icon}</span>
                  <span className="text-sm text-white">{opt.name}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div className="mt-6 font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 text-center">
            {PHONE_LABEL}
          </div>
        </div>
      </div>
    </>
  );
};

// ── Mobile Menu (fullscreen, editorial) ─────────────────────────────────
const MobileMenu = ({ isOpen, onClose, onContactClick }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const navItems = [
    { label: t('navigation.home'), link: '/' },
    { label: t('navigation.services'), link: '/services' },
    { label: t('navigation.clientsPartners'), link: '/#clients-partners' },
    { label: t('navigation.insights', { defaultValue: 'Insights' }), link: '/insights' },
  ];

  const handleNavClick = (link) => {
    onClose();
    router.push(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
        <Link href="/" onClick={onClose}>
          <Image
            src="/sym-logo.png"
            alt="Symloop"
            width={120}
            height={30}
            className="h-7 w-auto object-contain brightness-0 invert"
          />
        </Link>
        <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
          <X className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
        {navItems.map((item, i) => (
          <button
            key={item.link}
            onClick={() => handleNavClick(item.link)}
            className="group flex items-baseline gap-5 py-5 border-b border-white/[0.04] text-start"
          >
            <span className="font-mono text-[11px] tracking-[0.15em] text-white/25">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-3xl sm:text-4xl font-light tracking-tight text-white/80 group-hover:text-white transition-colors">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Bottom bar — contact + language */}
      <div className="px-8 py-6 border-t border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-white text-xs font-mono tracking-wide transition-colors"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            <span>WhatsApp</span>
          </a>
          <a
            href={PHONE_URL}
            className="flex items-center gap-2 text-white/50 hover:text-white text-xs font-mono tracking-wide transition-colors"
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            <span>{PHONE_LABEL}</span>
          </a>
        </div>
        <LanguageSwitcher scrolled={true} />
      </div>
    </div>
  );
};

// ── Mobile Contact Bar (bottom-fixed, editorial) ────────────────────────
const MobileContactBar = ({ onAIClick }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-black border-t border-white/[0.08]">
      <div className="flex items-center justify-between px-4 py-3">
        {/* AI assistant */}
        <button
          onClick={onAIClick}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors px-3 py-2"
        >
          <Sparkles className="w-4 h-4" strokeWidth={1.5} />
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase">AI</span>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-white/10" />

        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors px-3 py-2"
        >
          <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase">WhatsApp</span>
        </a>

        {/* Divider */}
        <div className="w-px h-6 bg-white/10" />

        {/* Call */}
        <a
          href={PHONE_URL}
          className="flex items-center gap-2 bg-white text-black px-5 py-2.5 text-xs font-medium tracking-wide"
        >
          <Phone className="w-3.5 h-3.5" strokeWidth={1.75} />
          <span>{PHONE_LABEL}</span>
        </a>
      </div>
    </div>
  );
};

// ── Header ──────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const [showAIOnboarding, setShowAIOnboarding] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-sm border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-14' : 'h-20'
          }`}>

            {/* Logo — clean, no gimmicks */}
            <Link href="/" className="shrink-0">
              <Image
                src="/sym-logo.png"
                alt="Symloop"
                width={130}
                height={32}
                className={`object-contain brightness-0 invert transition-all duration-500 w-auto ${
                  scrolled ? 'h-6' : 'h-8'
                }`}
                priority
              />
            </Link>

            {/* Desktop nav — mono uppercase, editorial */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { label: t('navigation.home'), link: '/' },
                { label: t('navigation.services'), link: '/services' },
                { label: t('navigation.clientsPartners'), link: '/#clients-partners' },
                { label: t('navigation.insights', { defaultValue: 'Insights' }), link: '/insights' },
              ].map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/50 hover:text-white px-4 py-2 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right section — desktop */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Phone — small mono */}
              <a
                href={PHONE_URL}
                className="font-mono text-[11px] tracking-[0.1em] text-white/40 hover:text-white transition-colors"
              >
                {PHONE_LABEL}
              </a>

              {/* Language switcher */}
              <LanguageSwitcher scrolled={scrolled} />

              {/* AI assistant — subtle circle */}
              <button
                onClick={() => setShowAIOnboarding(true)}
                className="flex items-center justify-center w-8 h-8 border border-white/[0.12] hover:border-white/30 transition-colors duration-200"
                title="AI Assistant"
              >
                <Sparkles className="w-3.5 h-3.5 text-white/60" strokeWidth={1.5} />
              </button>

              {/* Contact CTA — thin bordered, not filled */}
              <button
                onClick={() => setContactPopupOpen(true)}
                className="font-mono text-[11px] tracking-[0.15em] uppercase text-white border border-white/20 hover:border-white/60 px-5 py-2 transition-colors duration-200"
              >
                Contact
              </button>
            </div>

            {/* Mobile: hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Modals & overlays — same as before */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onContactClick={() => {
          setMobileMenuOpen(false);
          setContactPopupOpen(true);
        }}
      />

      <ContactPopup
        isOpen={contactPopupOpen}
        onClose={() => setContactPopupOpen(false)}
      />

      <MobileContactBar onAIClick={() => setShowAIOnboarding(true)} />

      {showAIOnboarding && (
        <AIOnboarding
          onComplete={() => setShowAIOnboarding(false)}
          onSkip={() => setShowAIOnboarding(false)}
        />
      )}
    </>
  );
}
