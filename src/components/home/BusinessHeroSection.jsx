"use client";
import { useState, useEffect, useMemo } from "react";
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

// Aurora Waves - Flowing gradient ribbons (Static)
function AuroraWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Wave 1 */}
      <motion.div
        className="absolute w-[200%] h-[300px]"
        style={{
          top: '20%',
          left: '-50%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.08) 80%, transparent 100%)',
          filter: 'blur(30px)',
          transform: 'rotate(-5deg)',
        }}
        animate={{
          x: ['-10%', '10%', '-10%'],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Wave 2 */}
      <motion.div
        className="absolute w-[200%] h-[200px]"
        style={{
          top: '50%',
          left: '-50%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.06) 70%, transparent 100%)',
          filter: 'blur(40px)',
          transform: 'rotate(3deg)',
        }}
        animate={{
          x: ['10%', '-10%', '10%'],
          opacity: [0.6, 0.95, 0.6],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Wave 3 */}
      <motion.div
        className="absolute w-[200%] h-[250px]"
        style={{
          top: '70%',
          left: '-50%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)',
          filter: 'blur(35px)',
          transform: 'rotate(-2deg)',
        }}
        animate={{
          x: ['-5%', '15%', '-5%'],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

// Floating Light Orbs - Static glowing spheres
function LightOrbs() {
  const orbs = useMemo(() => [
    { size: 350, x: '10%', y: '20%', duration: 20, delay: 0 },
    { size: 250, x: '80%', y: '60%', duration: 25, delay: 5 },
    { size: 200, x: '60%', y: '10%', duration: 18, delay: 2 },
    { size: 300, x: '30%', y: '80%', duration: 22, delay: 8 },
  ], []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.5, 0.9, 0.7, 0.5],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Animated Gradient Border Ring (Static)
function GlowRing() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
        style={{
          background: 'transparent',
          border: '2px solid rgba(255,255,255,0.2)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full"
        style={{
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.15)',
        }}
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.4, 0.7, 0.4],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
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

// Animated Lines - Premium tech feel (Static)
function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-50">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            width: '100%',
            top: `${20 + i * 15}%`,
          }}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{
            x: ['100%', '-100%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
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
    <section className={`relative min-h-[85vh] bg-black overflow-hidden flex items-center ${isRTL ? 'rtl' : 'ltr'}`}>

      {/* Layered Premium Animated Backgrounds */}
      <div className="absolute inset-0">
        <NoiseTexture />
        <LightOrbs />
        <AuroraWaves />
        <GlowRing />
        <AnimatedLines />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
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

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-400 font-light"
            >
              {c.subtitle}
            </motion.p>

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
