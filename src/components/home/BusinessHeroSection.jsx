"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  DollarSign,
  BarChart3,
  Target,
  Rocket,
  CheckCircle2,
  Play,
  ChevronDown,
  Zap,
  Clock,
  Shield,
  Users,
  Star,
  Phone,
  MessageCircle
} from "lucide-react";

// Animated counter for stats
function AnimatedNumber({ value, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// Rotating words animation
function RotatingWords({ words, className }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function BusinessHeroSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  const locale = router.locale || 'fr';

  const content = {
    fr: {
      badge: "Partenaire Digital #1 en Algerie",
      headline1: "Augmentez Votre",
      headline2: "Chiffre d'Affaires",
      headline3: "Avec la Technologie",
      rotatingWords: ["Revenus", "Ventes", "Clients", "Profits"],
      subtitle: "Nous transformons votre vision en solutions digitales qui generent des resultats mesurables. Plus de 200 entreprises nous font confiance.",
      cta: "Booster Mon Business",
      ctaSecondary: "Voir Nos Reussites",
      stats: [
        { value: 340, suffix: "%", label: "ROI Moyen", icon: TrendingUp },
        { value: 200, suffix: "+", label: "Entreprises Accompagnees", icon: Users },
        { value: 50, suffix: "M", label: "DA Generes pour nos Clients", icon: DollarSign },
        { value: 98, suffix: "%", label: "Clients Satisfaits", icon: Star }
      ],
      benefits: [
        { icon: TrendingUp, text: "Augmentation moyenne de 40% du CA" },
        { icon: Clock, text: "Mise en ligne en 4-8 semaines" },
        { icon: Shield, text: "Garantie satisfaction ou rembourse" },
        { icon: Zap, text: "Support technique 24/7" }
      ],
      trustText: "Ils nous font confiance",
      proofTitle: "Resultats Prouves",
      proofItems: [
        { company: "E-commerce Mode", result: "+180% ventes en 6 mois" },
        { company: "Restaurant Alger", result: "+95% commandes en ligne" },
        { company: "Agence Immobiliere", result: "+250% leads qualifies" }
      ],
      scrollText: "Decouvrir nos solutions"
    },
    en: {
      badge: "Algeria's #1 Digital Partner",
      headline1: "Increase Your",
      headline2: "Revenue",
      headline3: "With Technology",
      rotatingWords: ["Revenue", "Sales", "Clients", "Profits"],
      subtitle: "We transform your vision into digital solutions that generate measurable results. Over 200 businesses trust us.",
      cta: "Boost My Business",
      ctaSecondary: "See Our Success Stories",
      stats: [
        { value: 340, suffix: "%", label: "Average ROI", icon: TrendingUp },
        { value: 200, suffix: "+", label: "Businesses Helped", icon: Users },
        { value: 50, suffix: "M", label: "DA Generated for Clients", icon: DollarSign },
        { value: 98, suffix: "%", label: "Satisfied Clients", icon: Star }
      ],
      benefits: [
        { icon: TrendingUp, text: "Average 40% revenue increase" },
        { icon: Clock, text: "Launch in 4-8 weeks" },
        { icon: Shield, text: "Satisfaction guaranteed or refund" },
        { icon: Zap, text: "24/7 technical support" }
      ],
      trustText: "They trust us",
      proofTitle: "Proven Results",
      proofItems: [
        { company: "Fashion E-commerce", result: "+180% sales in 6 months" },
        { company: "Algiers Restaurant", result: "+95% online orders" },
        { company: "Real Estate Agency", result: "+250% qualified leads" }
      ],
      scrollText: "Discover our solutions"
    },
    ar: {
      badge: "الشريك الرقمي رقم 1 في الجزائر",
      headline1: "زد",
      headline2: "إيراداتك",
      headline3: "بالتكنولوجيا",
      rotatingWords: ["الإيرادات", "المبيعات", "العملاء", "الأرباح"],
      subtitle: "نحول رؤيتك إلى حلول رقمية تحقق نتائج قابلة للقياس. أكثر من 200 شركة تثق بنا.",
      cta: "عزز أعمالي",
      ctaSecondary: "شاهد قصص نجاحنا",
      stats: [
        { value: 340, suffix: "%", label: "متوسط العائد", icon: TrendingUp },
        { value: 200, suffix: "+", label: "شركة تمت مساعدتها", icon: Users },
        { value: 50, suffix: "M", label: "دج تم توليدها للعملاء", icon: DollarSign },
        { value: 98, suffix: "%", label: "عملاء راضون", icon: Star }
      ],
      benefits: [
        { icon: TrendingUp, text: "زيادة متوسطة 40% في الإيرادات" },
        { icon: Clock, text: "إطلاق في 4-8 أسابيع" },
        { icon: Shield, text: "ضمان الرضا أو استرداد المال" },
        { icon: Zap, text: "دعم تقني 24/7" }
      ],
      trustText: "يثقون بنا",
      proofTitle: "نتائج مثبتة",
      proofItems: [
        { company: "متجر أزياء إلكتروني", result: "+180% مبيعات في 6 أشهر" },
        { company: "مطعم الجزائر", result: "+95% طلبات عبر الإنترنت" },
        { company: "وكالة عقارية", result: "+250% عملاء محتملين" }
      ],
      scrollText: "اكتشف حلولنا"
    }
  };

  const c = content[locale] || content.fr;

  const handleStartProject = () => {
    const contactSection = document.getElementById('company-contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewPortfolio = () => {
    router.push('/portfolio');
  };

  return (
    <section className={`relative min-h-screen bg-black overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Left Column - Main Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">{c.badge}</span>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
                >
                  <span className="block">{c.headline1}</span>
                  <span className="block mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 font-normal">
                      <RotatingWords words={c.rotatingWords} />
                    </span>
                  </span>
                  <span className="block text-gray-400 text-3xl sm:text-4xl md:text-5xl font-extralight mt-4">
                    {c.headline3}
                  </span>
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl font-light"
              >
                {c.subtitle}
              </motion.p>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {c.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-light">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  onClick={handleStartProject}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-3">
                    <Rocket className="w-5 h-5" />
                    <span className="text-lg">{c.cta}</span>
                    {isRTL ? (
                      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </motion.button>

                <motion.button
                  onClick={handleViewPortfolio}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <Play className="w-5 h-5" />
                  <span>{c.ctaSecondary}</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {c.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="group relative p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                    <div className="relative">
                      <div className="w-12 h-12 mb-4 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl sm:text-4xl font-light text-white mb-1">
                        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-white/50 font-light">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Success Stories Preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="p-6 bg-gradient-to-br from-white/8 to-white/3 rounded-2xl border border-white/10"
              >
                <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  {c.proofTitle}
                </h4>
                <div className="space-y-3">
                  {c.proofItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <span className="text-white/70 text-sm">{item.company}</span>
                      <span className="text-green-400 font-medium text-sm">{item.result}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Trust Logos Placeholder */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="text-center"
              >
                <p className="text-white/40 text-sm mb-4">{c.trustText}</p>
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-8 bg-white/10 rounded-lg flex items-center justify-center"
                    >
                      <div className="w-10 h-4 bg-white/20 rounded" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 flex flex-col items-center gap-3 cursor-pointer group z-20"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-sm group-hover:text-white/60 transition-colors font-light bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
          {c.scrollText}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 border border-white/20 rounded-full group-hover:border-white/40 transition-colors bg-black/50 backdrop-blur-sm"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
