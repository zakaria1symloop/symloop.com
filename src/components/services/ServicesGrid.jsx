import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import {
  Clock,
  DollarSign,
  MessageCircle,
  Sparkles
} from "lucide-react";

/* ─── Per-service color mapping for glow effects ─── */
const SERVICE_COLORS = {
  "dev-logiciel":              { glow: "rgba(99,102,241,0.14)",  shadow: "rgba(99,102,241,0.20)",  accent: "from-blue-500 to-indigo-600" },
  "app-mobile-flutter":        { glow: "rgba(20,184,166,0.14)",  shadow: "rgba(20,184,166,0.20)",  accent: "from-emerald-400 to-teal-600" },
  "site-web-ecommerce":        { glow: "rgba(249,115,22,0.14)",  shadow: "rgba(249,115,22,0.20)",  accent: "from-orange-400 to-rose-600" },
  "infrastructure-reseau-iot":  { glow: "rgba(139,92,246,0.14)",  shadow: "rgba(139,92,246,0.20)",  accent: "from-violet-400 to-blue-600" },
  "intelligence-artificielle":  { glow: "rgba(129,140,248,0.14)", shadow: "rgba(129,140,248,0.20)", accent: "from-indigo-400 to-purple-600" },
  "cybersecurity":              { glow: "rgba(244,63,94,0.14)",   shadow: "rgba(244,63,94,0.20)",   accent: "from-rose-400 to-pink-600" },
};

/* ─── Ambient orbs for the section background ─── */
function AmbientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes drift1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(50px,-35px)} }
        @keyframes drift2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-35px,25px)} }
        .ambient-a { animation: drift1 28s ease-in-out infinite; }
        .ambient-b { animation: drift2 35s ease-in-out infinite 6s; }
        .ambient-c { animation: drift1 24s ease-in-out infinite 12s; }
      `}</style>
      <div className="ambient-a absolute rounded-full" style={{ width: 600, height: 600, left: '-8%', top: '15%', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)', filter: 'blur(100px)', willChange: 'transform' }} />
      <div className="ambient-b absolute rounded-full" style={{ width: 500, height: 500, right: '-5%', top: '45%', background: 'radial-gradient(circle, rgba(147,51,234,0.05) 0%, transparent 65%)', filter: 'blur(100px)', willChange: 'transform' }} />
      <div className="ambient-c absolute rounded-full" style={{ width: 550, height: 550, left: '35%', bottom: '5%', background: 'radial-gradient(circle, rgba(236,72,153,0.04) 0%, transparent 65%)', filter: 'blur(100px)', willChange: 'transform' }} />
    </div>
  );
}

const ServicesGrid = ({
  services = [],
  selectedCategory,
  setSelectedCategory,
  onConsultationClick
}) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';

  const categories = ["tous", "développement", "mobile", "web", "infrastructure", "support"];

  const filteredServices = selectedCategory === "tous"
    ? services
    : services.filter(s => s.category?.toLowerCase() === selectedCategory);

  /* Bento layout: items 0, 3, 5 span 2 cols when showing all 6 services */
  const isBento = filteredServices.length === 6;
  const getBentoSpan = (index) => {
    if (!isBento) return '';
    if (index === 0 || index === 3 || index === 5) return 'xl:col-span-2';
    return '';
  };

  return (
    <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
      <AmbientOrbs />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative z-10 container mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white/50">{t('servicesPage.servicesTitle')}</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            {t('servicesPage.servicesTitle')}
          </h2>
          <p className="text-lg text-white/30 max-w-2xl mx-auto leading-relaxed">
            {t('servicesPage.servicesSubtitle')}
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-400 text-sm ${
                selectedCategory === cat
                  ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                  : 'bg-white/[0.03] text-white/35 border border-white/[0.06] hover:bg-white/[0.07] hover:text-white/70 hover:border-white/[0.12]'
              }`}
            >
              {t(`servicesPage.categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 mb-24">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            const colors = SERVICE_COLORS[service.id] || SERVICE_COLORS["dev-logiciel"];
            const bentoSpan = getBentoSpan(index);

            const featureArray = Array.isArray(service.features) ? service.features :
              (typeof service.features === 'object' && service.features !== null) ? Object.values(service.features) : [];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.35, ease: 'easeOut' } }}
                className={`group relative rounded-3xl ${bentoSpan}`}
                style={{ willChange: 'transform' }}
              >
                {/* ── Outer glow on hover ── */}
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ boxShadow: `0 0 50px ${colors.shadow}, inset 0 1px 0 rgba(255,255,255,0.06)` }}
                />

                {/* ── Card surface ── */}
                <div className="relative h-full rounded-3xl bg-white/[0.025] border border-white/[0.06] group-hover:border-white/[0.14] overflow-hidden transition-all duration-700 backdrop-blur-sm">

                  {/* Top gradient accent bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${colors.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Shimmer sweep on hover */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    <div
                      className="absolute top-0 left-0 h-full w-1/2 skew-x-[-20deg] -translate-x-[200%] group-hover:translate-x-[400%] transition-transform duration-[1200ms] ease-out"
                      style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)' }}
                    />
                  </div>

                  {/* Card inner glow orb (behind icon) */}
                  <div
                    className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`, filter: 'blur(25px)' }}
                  />

                  {/* ── Content ── */}
                  <div className="relative p-7 sm:p-8">

                    {/* Icon */}
                    <div className="mb-7">
                      <div className="relative inline-block">
                        <div
                          className="absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: colors.glow, filter: 'blur(12px)' }}
                        />
                        <div
                          className="relative p-4 rounded-2xl border border-white/[0.08] group-hover:border-white/[0.15] transition-all duration-500"
                          style={{ background: `linear-gradient(135deg, ${colors.glow}, transparent)` }}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2.5 leading-tight tracking-tight">
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-white/35 mb-4 leading-relaxed">
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-white/20 mb-6 leading-relaxed line-clamp-2 group-hover:text-white/30 transition-colors duration-500">
                      {service.description}
                    </p>

                    {/* Feature tags */}
                    {featureArray.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-7">
                        {featureArray.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/[0.04] text-white/35 px-3 py-1.5 rounded-full border border-white/[0.05] group-hover:bg-white/[0.07] group-hover:text-white/55 group-hover:border-white/[0.1] transition-all duration-400"
                          >
                            {typeof feature === 'string' ? feature : feature?.toString() || ''}
                          </span>
                        ))}
                        {featureArray.length > 3 && (
                          <span className="text-xs text-white/15 px-2 py-1.5">
                            +{featureArray.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Separator */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6 group-hover:via-white/[0.12] transition-all duration-500" />

                    {/* Price & Duration */}
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <DollarSign className="w-3.5 h-3.5 text-white/15" />
                          <span className="text-[11px] uppercase tracking-wider text-white/20">{t('services.pricing')}</span>
                        </div>
                        <p className="text-sm font-semibold text-white">{service.estimatedPrice}</p>
                      </div>
                      <div className={isRTL ? 'text-left' : 'text-right'}>
                        <div className={`flex items-center gap-1.5 mb-1.5 ${isRTL ? '' : 'justify-end'}`}>
                          <Clock className="w-3.5 h-3.5 text-white/15" />
                          <span className="text-[11px] uppercase tracking-wider text-white/20">{t('services.duration')}</span>
                        </div>
                        <p className="text-sm font-medium text-white/55">{service.deliveryTime}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block">
            <p className="text-lg text-white/30 mb-8">
              {t('servicesPage.ctaNotFound')}
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onConsultationClick}
              className="group inline-flex items-center gap-3 bg-white/[0.05] border border-white/[0.1] text-white font-semibold px-9 py-4 rounded-2xl hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-500 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]"
            >
              <MessageCircle className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              <span>{t('servicesPage.ctaTalk')}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
