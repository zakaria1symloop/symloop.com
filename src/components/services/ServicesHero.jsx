import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import {
  MapPin,
  Globe2,
  Phone,
  Calculator,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

/* ─── Animated Mesh Gradient ─── */
function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes mesh1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, -60px) scale(1.2); }
          66% { transform: translate(-40px, 40px) scale(0.9); }
        }
        @keyframes mesh2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, 50px) scale(1.3); }
          66% { transform: translate(30px, -30px) scale(0.85); }
        }
        @keyframes mesh3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, 40px) scale(1.15); }
        }
        @keyframes mesh4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, -40px) scale(1.1); }
        }
        .mesh-a { animation: mesh1 20s ease-in-out infinite; }
        .mesh-b { animation: mesh2 25s ease-in-out infinite 3s; }
        .mesh-c { animation: mesh3 22s ease-in-out infinite 7s; }
        .mesh-d { animation: mesh4 18s ease-in-out infinite 5s; }
      `}</style>
      <div className="mesh-a absolute" style={{ width: 650, height: 650, left: '-8%', top: '-15%', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 60%)', filter: 'blur(80px)', willChange: 'transform' }} />
      <div className="mesh-b absolute" style={{ width: 550, height: 550, right: '0%', top: '10%', background: 'radial-gradient(circle, rgba(147,51,234,0.18) 0%, transparent 60%)', filter: 'blur(80px)', willChange: 'transform' }} />
      <div className="mesh-c absolute" style={{ width: 500, height: 500, left: '25%', bottom: '0%', background: 'radial-gradient(circle, rgba(20,184,166,0.14) 0%, transparent 60%)', filter: 'blur(80px)', willChange: 'transform' }} />
      <div className="mesh-d absolute" style={{ width: 450, height: 450, left: '55%', top: '45%', background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 60%)', filter: 'blur(70px)', willChange: 'transform' }} />
    </div>
  );
}

/* ─── Rising Light Particles ─── */
function FloatingParticles() {
  const particles = [
    { left: '10%', delay: '0s', dur: '14s', size: 3 },
    { left: '25%', delay: '2s', dur: '18s', size: 2 },
    { left: '42%', delay: '5s', dur: '16s', size: 3 },
    { left: '58%', delay: '7s', dur: '20s', size: 2 },
    { left: '73%', delay: '3s', dur: '15s', size: 3 },
    { left: '88%', delay: '9s', dur: '22s', size: 2 },
    { left: '35%', delay: '11s', dur: '17s', size: 2 },
    { left: '65%', delay: '4s', dur: '19s', size: 2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          8% { opacity: 0.7; }
          92% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }
      `}</style>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: '-3%',
            animation: `rise ${p.dur} linear infinite ${p.delay}`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Concentric Orbit Rings ─── */
function OrbitRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: '-5%' }}>
      <style jsx>{`
        @keyframes orbit1 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit2 {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .orbit-ring-1 { animation: orbit1 60s linear infinite; }
        .orbit-ring-2 { animation: orbit2 45s linear infinite; }
      `}</style>
      <div className="orbit-ring-1 absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full border border-white/[0.03]" style={{ willChange: 'transform' }} />
      <div className="orbit-ring-2 absolute w-[300px] h-[300px] md:w-[520px] md:h-[520px] rounded-full border border-dashed border-white/[0.025]" style={{ willChange: 'transform' }} />
    </div>
  );
}

/* ─── Animated Sweep Lines ─── */
function SweepLines() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 0.35; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .sweep-a { animation: sweep 10s ease-in-out infinite; }
        .sweep-b { animation: sweep 14s ease-in-out infinite 4s; }
        .sweep-c { animation: sweep 18s ease-in-out infinite 8s; }
      `}</style>
      <div className="sweep-a absolute h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" style={{ top: '22%', willChange: 'transform, opacity' }} />
      <div className="sweep-b absolute h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ top: '55%', willChange: 'transform, opacity' }} />
      <div className="sweep-c absolute h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ top: '82%', willChange: 'transform, opacity' }} />
    </div>
  );
}

/* ─── Noise Texture ─── */
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

const ServicesHero = ({
  stats = [],
  onConsultationClick,
  onQuoteClick
}) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';

  return (
    <section className="relative overflow-hidden bg-black min-h-screen flex items-center pt-24 md:pt-28">
      {/* Layered background */}
      <MeshGradient />
      <FloatingParticles />
      <OrbitRings />
      <SweepLines />
      <NoiseTexture />

      {/* Depth overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 container mx-auto px-6 py-16 sm:py-20">
        <div className="text-center max-w-5xl mx-auto">

          {/* Animated badge */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-2.5 mb-10 backdrop-blur-sm"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <div className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <span className="text-sm font-medium text-white/60">{t('servicesPage.badge')}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight"
          >
            <span className="text-white">{t('servicesPage.heroTitle')}</span>
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 100%' }}
            >
              {t('servicesPage.heroSubtitle')}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg md:text-xl text-white/35 max-w-3xl mx-auto leading-relaxed mb-16"
          >
            {t('servicesPage.heroDescription')}
          </motion.p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-16">
            {stats.slice(0, 4).map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.55 + index * 0.1 }}
                className="group relative"
              >
                {/* Hover glow ring */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative p-5 sm:p-6 bg-white/[0.03] rounded-2xl border border-white/[0.06] backdrop-blur-sm group-hover:border-white/[0.14] transition-all duration-700">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1.5 tracking-tight">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-white/25 group-hover:text-white/50 transition-colors duration-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onConsultationClick}
              className="group inline-flex items-center justify-center gap-3 bg-white text-black font-semibold px-9 py-4 rounded-2xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]"
            >
              <Phone className="w-5 h-5" />
              <span>{t('servicesPage.consultation')}</span>
              {isRTL ? (
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-3 font-semibold px-9 py-4 rounded-2xl transition-all duration-500 border border-white/10 text-white hover:border-white/25 hover:bg-white/[0.05] backdrop-blur-sm"
            >
              <Calculator className="w-5 h-5" />
              <span>{t('servicesPage.quote')}</span>
            </motion.button>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-white/20"
          >
            <div className="flex items-center gap-2 hover:text-white/40 transition-colors duration-300">
              <MapPin className="w-4 h-4" />
              <span>{t('servicesPage.heroLocations')}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white/40 transition-colors duration-300">
              <Globe2 className="w-4 h-4" />
              <span>{t('servicesPage.heroCoverage')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
