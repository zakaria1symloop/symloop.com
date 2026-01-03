"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import {
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  TrendingUp,
  Users,
  Target,
  Zap
} from "lucide-react";

// Aurora Waves - Using CSS animations for smoother scroll performance
function AuroraWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes wave1 {
          0%, 100% { transform: translateX(-10%) rotate(-5deg); opacity: 0.4; }
          50% { transform: translateX(10%) rotate(-5deg); opacity: 0.7; }
        }
        @keyframes wave2 {
          0%, 100% { transform: translateX(10%) rotate(3deg); opacity: 0.5; }
          50% { transform: translateX(-10%) rotate(3deg); opacity: 0.8; }
        }
        @keyframes wave3 {
          0%, 100% { transform: translateX(-5%) rotate(-2deg); opacity: 0.5; }
          50% { transform: translateX(15%) rotate(-2deg); opacity: 0.8; }
        }
        .aurora-wave-1 { animation: wave1 12s ease-in-out infinite; }
        .aurora-wave-2 { animation: wave2 15s ease-in-out infinite; }
        .aurora-wave-3 { animation: wave3 18s ease-in-out infinite; }
      `}</style>
      <div className="aurora-wave-1 absolute w-[200%] h-[300px]" style={{ top: '20%', left: '-50%', background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.05) 80%, transparent 100%)', filter: 'blur(30px)', willChange: 'transform, opacity' }} />
      <div className="aurora-wave-2 absolute w-[200%] h-[200px]" style={{ top: '50%', left: '-50%', background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.04) 70%, transparent 100%)', filter: 'blur(40px)', willChange: 'transform, opacity' }} />
      <div className="aurora-wave-3 absolute w-[200%] h-[200px]" style={{ top: '55%', left: '-50%', background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 75%, transparent 100%)', filter: 'blur(35px)', willChange: 'transform, opacity' }} />
    </div>
  );
}

// Floating Light Orbs - Using CSS animations for smoother scroll performance
function LightOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(50px, -40px) scale(1.2); opacity: 0.7; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(-30px, 30px) scale(0.9); opacity: 0.5; }
        }
        .orb-1 { animation: float1 20s ease-in-out infinite; }
        .orb-2 { animation: float2 25s ease-in-out infinite 5s; }
        .orb-3 { animation: float1 18s ease-in-out infinite 2s; }
        .orb-4 { animation: float2 22s ease-in-out infinite 8s; }
      `}</style>
      <div className="orb-1 absolute rounded-full" style={{ width: 300, height: 300, left: '10%', top: '15%', background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)', filter: 'blur(40px)', willChange: 'transform, opacity' }} />
      <div className="orb-2 absolute rounded-full" style={{ width: 220, height: 220, left: '80%', top: '40%', background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)', filter: 'blur(40px)', willChange: 'transform, opacity' }} />
      <div className="orb-3 absolute rounded-full" style={{ width: 180, height: 180, left: '60%', top: '10%', background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)', filter: 'blur(40px)', willChange: 'transform, opacity' }} />
      <div className="orb-4 absolute rounded-full" style={{ width: 250, height: 250, left: '25%', top: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)', filter: 'blur(40px)', willChange: 'transform, opacity' }} />
    </div>
  );
}

// Animated Gradient Border Ring - Using CSS for smoother performance
function GlowRing() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: '-10%' }}>
      <style jsx>{`
        @keyframes ring1 {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: rotate(180deg) scale(1.05); opacity: 0.6; }
        }
        @keyframes ring2 {
          0%, 100% { transform: rotate(360deg) scale(1.05); opacity: 0.3; }
          50% { transform: rotate(180deg) scale(1); opacity: 0.5; }
        }
        .glow-ring-1 { animation: ring1 20s linear infinite; }
        .glow-ring-2 { animation: ring2 25s linear infinite; }
      `}</style>
      <div className="glow-ring-1 absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', willChange: 'transform, opacity' }} />
      <div className="glow-ring-2 absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', willChange: 'transform, opacity' }} />
    </div>
  );
}

// Noise Texture Overlay (Static)
function NoiseTexture() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// Animated Lines - Using CSS for smoother performance
function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-35">
      <style jsx>{`
        @keyframes line-sweep {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .anim-line-1 { animation: line-sweep 8s ease-in-out infinite; }
        .anim-line-2 { animation: line-sweep 10s ease-in-out infinite 1.5s; }
        .anim-line-3 { animation: line-sweep 12s ease-in-out infinite 3s; }
        .anim-line-4 { animation: line-sweep 14s ease-in-out infinite 4.5s; }
        .anim-line-5 { animation: line-sweep 16s ease-in-out infinite 6s; }
      `}</style>
      <div className="anim-line-1 absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent" style={{ top: '20%', willChange: 'transform, opacity' }} />
      <div className="anim-line-2 absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent" style={{ top: '35%', willChange: 'transform, opacity' }} />
      <div className="anim-line-3 absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent" style={{ top: '50%', willChange: 'transform, opacity' }} />
      <div className="anim-line-4 absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent" style={{ top: '65%', willChange: 'transform, opacity' }} />
      <div className="anim-line-5 absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent" style={{ top: '80%', willChange: 'transform, opacity' }} />
    </div>
  );
}

export default function BusinessHeroSection() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const [activeWord, setActiveWord] = useState(0);

  const content = {
    fr: {
      headline: "Augmentez vos",
      rotatingWords: ["Revenus", "Ventes", "Clients"],
      headlineEnd: "avec la technologie",
      subtitle: "Solutions digitales sur mesure pour entreprises ambitieuses",
      cta: "Demarrer mon projet",
      ctaSecondary: "Voir nos realisations",
      stats: [
        { value: "340%", label: "ROI moyen", icon: TrendingUp },
        { value: "200+", label: "Clients", icon: Users },
        { value: "90j", label: "Time to market", icon: Zap },
        { value: "98%", label: "Satisfaction", icon: Target }
      ]
    },
    en: {
      headline: "Grow your",
      rotatingWords: ["Revenue", "Sales", "Clients"],
      headlineEnd: "with technology",
      subtitle: "Custom digital solutions for ambitious businesses",
      cta: "Start my project",
      ctaSecondary: "See our work",
      stats: [
        { value: "340%", label: "Avg ROI", icon: TrendingUp },
        { value: "200+", label: "Clients", icon: Users },
        { value: "90d", label: "Time to market", icon: Zap },
        { value: "98%", label: "Satisfaction", icon: Target }
      ]
    },
    ar: {
      headline: "زد",
      rotatingWords: ["إيراداتك", "مبيعاتك", "عملاءك"],
      headlineEnd: "بالتكنولوجيا",
      subtitle: "حلول رقمية مخصصة للشركات الطموحة",
      cta: "ابدأ مشروعي",
      ctaSecondary: "شاهد أعمالنا",
      stats: [
        { value: "340%", label: "متوسط العائد", icon: TrendingUp },
        { value: "+200", label: "عميل", icon: Users },
        { value: "90ي", label: "وقت الإطلاق", icon: Zap },
        { value: "98%", label: "رضا", icon: Target }
      ]
    }
  };

  const c = content[locale] || content.fr;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % c.rotatingWords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [c.rotatingWords.length]);

  const handleStartProject = () => {
    const contactSection = document.getElementById('company-contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={`relative min-h-screen bg-black overflow-hidden flex items-center pt-24 md:pt-28 ${isRTL ? 'rtl' : 'ltr'}`}>

      {/* Layered Premium Animated Backgrounds */}
      <div className="absolute inset-0">
        <NoiseTexture />
        <LightOrbs />
        <AuroraWaves />
        <GlowRing />
        <AnimatedLines />
      </div>

      {/* Gradient overlays for depth - strong fade to black at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center max-w-4xl mx-auto space-y-8">

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ willChange: 'opacity, transform' }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
                <span className="text-gray-400">{c.headline}</span>{" "}
                <span className="relative inline-block min-w-[200px] sm:min-w-[280px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeWord}
                      initial={{ y: 30, opacity: 0, filter: 'blur(10px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: -30, opacity: 0, filter: 'blur(10px)' }}
                      transition={{ duration: 0.4 }}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white font-medium"
                    >
                      {c.rotatingWords[activeWord]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <br />
                <span className="text-gray-500 text-2xl sm:text-3xl md:text-4xl font-extralight">{c.headlineEnd}</span>
              </h1>
            </motion.div>

            {/* Subtitle with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative space-y-4"
            >
              <motion.p
                className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300 font-light"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              >
                {c.subtitle}
              </motion.p>

              {/* Serving Regions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-2 text-sm text-white/40"
              >
                {[
                  locale === 'ar' ? 'الجزائر' : locale === 'en' ? 'Algeria' : 'Algérie',
                  locale === 'ar' ? 'المغرب' : locale === 'en' ? 'Morocco' : 'Maroc',
                  locale === 'ar' ? 'تونس' : locale === 'en' ? 'Tunisia' : 'Tunisie',
                  locale === 'ar' ? 'الخليج' : locale === 'en' ? 'Gulf' : 'Golfe',
                  locale === 'ar' ? 'أوروبا' : locale === 'en' ? 'Europe' : 'Europe',
                ].map((region, i) => (
                  <span key={i} className="flex items-center">
                    {i > 0 && <span className="mx-2 text-white/20">•</span>}
                    <span className="hover:text-white/70 transition-colors">{region}</span>
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
            >
              <motion.button
                onClick={handleStartProject}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white text-black font-semibold rounded-xl transition-all duration-500 flex items-center justify-center gap-3"
              >
                <span>{c.cta}</span>
                {isRTL ? (
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
            >
              {c.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-4 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 group backdrop-blur-md cursor-default hover:bg-white/10 hover:border-white/30"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    <span className="text-2xl font-light text-white">{stat.value}</span>
                  </div>
                  <p className="text-xs text-white/40 group-hover:text-white/70 transition-colors">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-1.5 border border-white/20 rounded-full group-hover:border-white/50 transition-colors backdrop-blur-sm"
        >
          <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
