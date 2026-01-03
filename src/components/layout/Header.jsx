"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';
import AIOnboarding from '../onboarding/AIOnboarding';

// --- CONTACT POPUP ---
const ContactPopup = ({ isOpen, onClose }) => {
  const { t } = useTranslation('common');

  if (!isOpen) return null;

  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: 'bg-green-500 hover:bg-green-600',
      href: 'https://wa.me/213549575512',
    },
    {
      name: 'Viber',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.182.635 6.665.5 9.748c-.134 3.083-.066 8.815 5.395 10.403l.004.003-.003 2.373s-.037.961.596 1.156c.766.236 1.214-.493 1.946-1.282.4-.432.952-1.064 1.37-1.548 3.768.322 6.665-.407 6.994-.505.762-.227 5.074-.8 5.775-6.528.724-5.905-.342-9.64-2.261-11.313l.001-.001c-.563-.524-2.834-2.195-8.016-2.478-.347-.019-.675-.028-.903-.026zm.127 1.94l.009.001c4.25.244 6.231 1.55 6.692 1.962 1.46 1.278 2.292 4.433 1.69 9.357-.535 4.39-3.794 4.886-4.421 5.073-.275.082-2.726.702-5.87.479 0 0-2.322 2.804-3.05 3.534-.114.114-.25.158-.34.137-.126-.03-.161-.179-.159-.396l.02-3.836-.002-.002c-4.607-1.267-4.335-5.984-4.226-8.494.109-2.51.638-4.508 2.037-5.895 1.886-1.724 5.476-1.933 7.62-1.92zm-.132 2.408a.636.636 0 00-.636.646.639.639 0 00.646.636c1.349-.009 2.543.46 3.453 1.313.91.851 1.465 2.02 1.54 3.367a.637.637 0 001.272-.07c-.094-1.696-.8-3.201-1.96-4.29a6.791 6.791 0 00-4.305-1.602h-.01zm.174 1.757a.636.636 0 00-.08 1.269c.764.048 1.417.376 1.924.864.506.486.835 1.128.914 1.89a.636.636 0 101.266-.129c-.113-1.107-.59-2.075-1.323-2.783-.732-.71-1.712-1.097-2.69-1.111h-.011zm-2.782.82c.217-.003.443.036.67.12l.018.006c.229.085.354.18.505.293.085.065.17.164.217.27.082.178.36.964.543 1.467a.573.573 0 01-.073.543c-.092.135-.2.252-.298.357l-.05.054c-.089.095-.227.222-.227.222a.582.582 0 00-.133.536c.19.656.522 1.263.967 1.79.332.397.743.753 1.18 1.058.249.172.515.315.778.451.103.052.242.128.398.175a.536.536 0 00.489-.084l.017-.013c.127-.106.502-.587.661-.795.158-.207.314-.179.512-.104l1.632.778c.195.091.323.16.385.22a.63.63 0 01.178.454 1.906 1.906 0 01-.235.774c-.132.257-.4.531-.711.743a2.04 2.04 0 01-.512.282c-.29.104-.572.135-.756.152-.6.05-1.206-.092-1.79-.287a8.046 8.046 0 01-1.893-.972 10.263 10.263 0 01-1.19-.923c-.87-.779-1.671-1.648-2.27-2.652-.393-.654-.688-1.369-.796-2.12a2.326 2.326 0 01.178-1.303c.138-.291.329-.512.53-.67.201-.157.4-.243.59-.29.14-.036.292-.05.445-.055h.08l.06.001zm2.53.998a.636.636 0 00-.061 1.27c.362.035.656.185.895.414.24.228.398.52.454.883a.637.637 0 101.261-.182c-.096-.635-.374-1.17-.821-1.591-.448-.422-1.028-.684-1.684-.792a.61.61 0 00-.044-.002z"/>
        </svg>
      ),
      color: 'bg-purple-500 hover:bg-purple-600',
      href: 'viber://chat?number=+213549575512',
    },
    {
      name: t('contact.phone') || 'Téléphone',
      icon: <Phone className="w-4 h-4" />,
      color: 'bg-blue-500 hover:bg-blue-600',
      href: 'tel:+213549575512',
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes popupFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes backdropFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .popup-container {
          animation: popupFadeIn 0.2s ease-out forwards;
        }
        .popup-backdrop {
          animation: backdropFadeIn 0.2s ease-out forwards;
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="popup-backdrop fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="popup-container fixed top-24 right-4 md:right-8 z-50 w-[260px]">
        <div className="bg-black/95 backdrop-blur-xl border border-white/15 rounded-xl p-4 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-medium text-sm">{t('contact.contactUs') || 'Contactez-nous'}</h3>
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-3 h-3 text-white/80" />
            </button>
          </div>

          {/* Contact Options */}
          <div className="space-y-2">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                target={option.name !== 'Téléphone' && option.name !== t('contact.phone') ? '_blank' : undefined}
                rel={option.name !== 'Téléphone' && option.name !== t('contact.phone') ? 'noopener noreferrer' : undefined}
                onClick={onClose}
                className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 ${option.color}`}
              >
                {option.icon}
                <span>{option.name}</span>
              </a>
            ))}
          </div>

          {/* Phone Number */}
          <p className="text-center text-white/30 text-xs mt-3">+213 549 575 512</p>
        </div>
      </div>
    </>
  );
};

// --- MOBILE CONTACT BAR ---
const MobileContactBar = ({ onAIClick }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <style jsx>{`
        @keyframes floatGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.1), 0 4px 30px rgba(0,0,0,0.5); }
          50% { box-shadow: 0 0 30px rgba(255,255,255,0.15), 0 4px 40px rgba(0,0,0,0.6); }
        }
        .contact-bar-glow {
          animation: floatGlow 3s ease-in-out infinite;
        }
      `}</style>

      <div className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
        <div className="contact-bar-glow bg-black/80 backdrop-blur-2xl border border-white/15 rounded-full px-2 py-1.5 flex items-center gap-1">
          {/* AI Button */}
          <button
            onClick={onAIClick}
            className="group flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:via-pink-500/30 hover:to-cyan-500/30 border border-white/10 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10" />
          {/* WhatsApp */}
          <a
            href="https://wa.me/213549575512"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-green-500/20 border border-transparent hover:border-green-500/30 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10" />

          {/* Viber */}
          <a
            href="viber://chat?number=+213549575512"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-purple-500/20 border border-transparent hover:border-purple-500/30 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.182.635 6.665.5 9.748c-.134 3.083-.066 8.815 5.395 10.403l.004.003-.003 2.373s-.037.961.596 1.156c.766.236 1.214-.493 1.946-1.282.4-.432.952-1.064 1.37-1.548 3.768.322 6.665-.407 6.994-.505.762-.227 5.074-.8 5.775-6.528.724-5.905-.342-9.64-2.261-11.313l.001-.001c-.563-.524-2.834-2.195-8.016-2.478-.347-.019-.675-.028-.903-.026zm.127 1.94l.009.001c4.25.244 6.231 1.55 6.692 1.962 1.46 1.278 2.292 4.433 1.69 9.357-.535 4.39-3.794 4.886-4.421 5.073-.275.082-2.726.702-5.87.479 0 0-2.322 2.804-3.05 3.534-.114.114-.25.158-.34.137-.126-.03-.161-.179-.159-.396l.02-3.836-.002-.002c-4.607-1.267-4.335-5.984-4.226-8.494.109-2.51.638-4.508 2.037-5.895 1.886-1.724 5.476-1.933 7.62-1.92z"/>
            </svg>
          </a>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10" />

          {/* Call */}
          <a
            href="tel:+213549575512"
            className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-blue-500/20 border border-transparent hover:border-blue-500/30 transition-all duration-300"
          >
            <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
          </a>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10" />

          {/* CTA Button */}
          <a
            href="tel:+213549575512"
            className="flex items-center gap-2 bg-white text-black font-semibold text-xs px-4 py-2.5 rounded-full hover:bg-white/90 transition-all duration-300"
          >
            <span>{t('contact.contactUs')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </>
  );
};

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
const MobileMenu = ({ isOpen, onClose, onContactClick }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const navItems = [
    { label: t('navigation.home'), link: '/' },
    { label: t('navigation.services'), link: '/services' },
    { label: t('navigation.clientsPartners'), link: '/#clients-partners' },
    { label: t('navigation.blog'), link: '/blog' },
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
                  onClick={onContactClick}
                  className="w-full py-3 text-sm bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-white/90 active:scale-[0.98]"
                >
                  {t('contact.freeConsultation')}
                </button>

                {/* Contact Info */}
                <div className="flex flex-col items-center gap-1.5">
                  <a href="tel:+213549575512" className="text-xs text-white/50 hover:text-white transition-colors">
                    +213 549 575 512
                  </a>
                  <a href="mailto:contact@symloop.com" className="text-xs text-white/50 hover:text-white transition-colors">
                    contact@symloop.com
                  </a>
                </div>
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
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const [showAIOnboarding, setShowAIOnboarding] = useState(false);
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
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Contact Info - Desktop */}
              <div className="hidden lg:flex items-center gap-3 mr-2">
                <a href="tel:+213549575512" className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+213 549 575 512</span>
                </a>
                <span className="text-white/20">|</span>
                <a href="mailto:contact@symloop.com" className="text-white/60 hover:text-white text-xs transition-colors">
                  contact@symloop.com
                </a>
              </div>

              {/* Language Switcher - Desktop */}
              <div className="hidden lg:block">
                <LanguageSwitcher scrolled={scrolled} />
              </div>

              {/* AI Button - Desktop */}
              <button
                onClick={() => setShowAIOnboarding(true)}
                className={`hidden lg:flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-[2px] transition-all duration-300 hover:scale-105 ${
                  scrolled ? 'w-9 h-9' : 'w-10 h-10'
                }`}
              >
                <span className="flex items-center justify-center w-full h-full rounded-full bg-black">
                  <Sparkles className="w-4 h-4 text-white" />
                </span>
              </button>

              {/* CTA Button - Desktop */}
              <button
                onClick={() => setContactPopupOpen(true)}
                className={`hidden lg:flex items-center gap-2 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] ${
                  scrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-sm'
                }`}
              >
                <span>{t('contact.freeConsultation')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

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
        onContactClick={() => {
          setMobileMenuOpen(false);
          setContactPopupOpen(true);
        }}
      />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={contactPopupOpen}
        onClose={() => setContactPopupOpen(false)}
      />

      {/* Mobile Contact Bar */}
      <MobileContactBar onAIClick={() => setShowAIOnboarding(true)} />

      {/* AI Onboarding */}
      {showAIOnboarding && (
        <AIOnboarding
          onComplete={() => setShowAIOnboarding(false)}
          onSkip={() => setShowAIOnboarding(false)}
        />
      )}
    </>
  );
}
