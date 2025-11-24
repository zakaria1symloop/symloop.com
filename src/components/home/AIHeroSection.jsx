"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  Brain,
  Phone,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  HeartPulse,
  TrendingUp,
  Truck,
  Factory,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Building2
} from "lucide-react";

// Colorful AI Brain with orbiting industries
const AIBrainSystem = ({ activeIndustry, industries, setActiveIndustry }) => {
  const [pulseNodes, setPulseNodes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNodes = Array.from({ length: 5 }, () => Math.floor(Math.random() * 20));
      setPulseNodes(newNodes);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const brainNodes = [
    { x: 50, y: 15 }, { x: 72, y: 22 }, { x: 85, y: 40 }, { x: 85, y: 60 },
    { x: 72, y: 78 }, { x: 50, y: 85 }, { x: 28, y: 78 }, { x: 15, y: 60 },
    { x: 15, y: 40 }, { x: 28, y: 22 },
    { x: 50, y: 30 }, { x: 65, y: 38 }, { x: 70, y: 55 }, { x: 60, y: 70 },
    { x: 50, y: 75 }, { x: 40, y: 70 }, { x: 30, y: 55 }, { x: 35, y: 38 },
    { x: 50, y: 48 }, { x: 50, y: 58 }
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 0],
    [0, 10], [2, 11], [3, 12], [4, 13], [5, 14], [6, 15], [7, 16], [9, 17],
    [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 10],
    [10, 18], [12, 18], [14, 19], [16, 19], [18, 19]
  ];

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Colored glow based on active industry */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          key={activeIndustry}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className={`w-64 h-64 rounded-full blur-3xl ${industries[activeIndustry].bgGlow}`}
        />
      </div>

      {/* Brain SVG */}
      <svg className="w-full h-full relative z-10" viewBox="0 0 100 100">
        {connections.map(([from, to], i) => (
          <motion.line
            key={`conn-${i}`}
            x1={brainNodes[from].x}
            y1={brainNodes[from].y}
            x2={brainNodes[to].x}
            y2={brainNodes[to].y}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.03 }}
          />
        ))}

        {connections.map(([from, to], i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="1.2"
            className={industries[activeIndustry].fillClass}
            initial={{ opacity: 0 }}
            animate={{
              cx: [brainNodes[from].x, brainNodes[to].x],
              cy: [brainNodes[from].y, brainNodes[to].y],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.15,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}

        {brainNodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={pulseNodes.includes(i) ? 2.5 : 1.5}
            fill={pulseNodes.includes(i) ? industries[activeIndustry].color : "rgba(255,255,255,0.3)"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.02 }}
          />
        ))}
      </svg>

      {/* Center brain */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-20 h-20 rounded-full flex items-center justify-center border-2 ${industries[activeIndustry].borderClass} bg-black/50 backdrop-blur-sm`}
        >
          <Brain className={`w-10 h-10 ${industries[activeIndustry].textClass}`} />
        </motion.div>
      </div>

      {/* Orbiting industry icons - positioned in a perfect circle */}
      {industries.map((industry, i) => {
        const totalItems = industries.length;
        // Calculate angle for each icon (starting from top, going clockwise)
        const angleDeg = -90 + (i * 360) / totalItems;
        const angleRad = (angleDeg * Math.PI) / 180;
        // Use percentage from center
        const radiusPercent = 42;
        const x = 50 + radiusPercent * Math.cos(angleRad);
        const y = 50 + radiusPercent * Math.sin(angleRad);
        const Icon = industry.icon;
        const isActive = activeIndustry === i;

        return (
          <div
            key={i}
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <motion.button
              onClick={() => setActiveIndustry(i)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: isActive ? 1.1 : 1 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? `${industry.bgClass} text-white shadow-lg ${industry.shadowClass}`
                  : 'bg-white/10 text-white/60 border border-white/20 hover:bg-white/20 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>
        );
      })}
    </div>
  );
};

// Main AI Hero Section
export default function AIHeroSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      icon: HeartPulse,
      key: 'health',
      title: t('aiHero.industries.health.title'),
      description: t('aiHero.industries.health.description'),
      useCases: t('aiHero.industries.health.useCases', { returnObjects: true }),
      color: "#ef4444",
      bgClass: "bg-red-500",
      bgGlow: "bg-red-500/30",
      textClass: "text-red-400",
      borderClass: "border-red-500/50",
      shadowClass: "shadow-red-500/30",
      fillClass: "fill-red-400"
    },
    {
      icon: TrendingUp,
      key: 'marketing',
      title: t('aiHero.industries.marketing.title'),
      description: t('aiHero.industries.marketing.description'),
      useCases: t('aiHero.industries.marketing.useCases', { returnObjects: true }),
      color: "#22c55e",
      bgClass: "bg-green-500",
      bgGlow: "bg-green-500/30",
      textClass: "text-green-400",
      borderClass: "border-green-500/50",
      shadowClass: "shadow-green-500/30",
      fillClass: "fill-green-400"
    },
    {
      icon: Truck,
      key: 'logistics',
      title: t('aiHero.industries.logistics.title'),
      description: t('aiHero.industries.logistics.description'),
      useCases: t('aiHero.industries.logistics.useCases', { returnObjects: true }),
      color: "#f97316",
      bgClass: "bg-orange-500",
      bgGlow: "bg-orange-500/30",
      textClass: "text-orange-400",
      borderClass: "border-orange-500/50",
      shadowClass: "shadow-orange-500/30",
      fillClass: "fill-orange-400"
    },
    {
      icon: Factory,
      key: 'industry',
      title: t('aiHero.industries.industry.title'),
      description: t('aiHero.industries.industry.description'),
      useCases: t('aiHero.industries.industry.useCases', { returnObjects: true }),
      color: "#6366f1",
      bgClass: "bg-indigo-500",
      bgGlow: "bg-indigo-500/30",
      textClass: "text-indigo-400",
      borderClass: "border-indigo-500/50",
      shadowClass: "shadow-indigo-500/30",
      fillClass: "fill-indigo-400"
    },
    {
      icon: Landmark,
      key: 'finance',
      title: t('aiHero.industries.finance.title'),
      description: t('aiHero.industries.finance.description'),
      useCases: t('aiHero.industries.finance.useCases', { returnObjects: true }),
      color: "#eab308",
      bgClass: "bg-yellow-500",
      bgGlow: "bg-yellow-500/30",
      textClass: "text-yellow-400",
      borderClass: "border-yellow-500/50",
      shadowClass: "shadow-yellow-500/30",
      fillClass: "fill-yellow-400"
    },
    {
      icon: GraduationCap,
      key: 'education',
      title: t('aiHero.industries.education.title'),
      description: t('aiHero.industries.education.description'),
      useCases: t('aiHero.industries.education.useCases', { returnObjects: true }),
      color: "#8b5cf6",
      bgClass: "bg-violet-500",
      bgGlow: "bg-violet-500/30",
      textClass: "text-violet-400",
      borderClass: "border-violet-500/50",
      shadowClass: "shadow-violet-500/30",
      fillClass: "fill-violet-400"
    },
    {
      icon: ShoppingBag,
      key: 'commerce',
      title: t('aiHero.industries.commerce.title'),
      description: t('aiHero.industries.commerce.description'),
      useCases: t('aiHero.industries.commerce.useCases', { returnObjects: true }),
      color: "#ec4899",
      bgClass: "bg-pink-500",
      bgGlow: "bg-pink-500/30",
      textClass: "text-pink-400",
      borderClass: "border-pink-500/50",
      shadowClass: "shadow-pink-500/30",
      fillClass: "fill-pink-400"
    },
    {
      icon: Building2,
      key: 'realestate',
      title: t('aiHero.industries.realestate.title'),
      description: t('aiHero.industries.realestate.description'),
      useCases: t('aiHero.industries.realestate.useCases', { returnObjects: true }),
      color: "#06b6d4",
      bgClass: "bg-cyan-500",
      bgGlow: "bg-cyan-500/30",
      textClass: "text-cyan-400",
      borderClass: "border-cyan-500/50",
      shadowClass: "shadow-cyan-500/30",
      fillClass: "fill-cyan-400"
    }
  ];

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [industries.length]);

  const currentIndustry = industries[activeIndustry];
  const Icon = currentIndustry.icon;

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className={`order-2 lg:order-1 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Sparkles className="w-4 h-4 text-white/60" />
              <span className="text-sm bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                {t('aiHero.badge')}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                {t('aiHero.title')}<br />{t('aiHero.titleLine2')}
              </span>
            </motion.h1>

            {/* Active Industry Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-8"
              >
                <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                  <div className={`w-12 h-12 rounded-xl ${currentIndustry.bgClass} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className={`text-2xl font-bold ${currentIndustry.textClass}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {currentIndustry.title}
                  </h2>
                </div>
                <p className={`text-lg mb-6 leading-relaxed bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                  {currentIndustry.description}
                </p>

                {/* Use cases */}
                <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                  {currentIndustry.useCases.map((useCase, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`px-4 py-2 rounded-full text-sm border ${currentIndustry.borderClass} ${currentIndustry.textClass} bg-white/5`}
                    >
                      {useCase}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Industry selector */}
            <div className={`flex gap-2 mb-8 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              {industries.map((ind, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndustry(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndustry ? `${ind.bgClass} w-8` : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
              onClick={() => window.open('https://wa.me/213549575512?text=Je%20suis%20intéressé%20par%20vos%20solutions%20IA', '_blank')}
            >
              <Phone className="w-5 h-5" />
              {t('aiHero.cta')}
              {isRTL ? (
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </motion.button>
          </motion.div>

          {/* Right Side - Brain Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <AIBrainSystem
              activeIndustry={activeIndustry}
              industries={industries}
              setActiveIndustry={setActiveIndustry}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
