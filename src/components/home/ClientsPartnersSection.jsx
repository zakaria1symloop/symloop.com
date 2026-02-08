"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const clients = [
  { name: "Renault", logo: "/clients/Renault.png", alt: "CCN Auto Sétif - Renault" },
  { name: "Del Monte", logo: "/clients/Logo_Del_Monte.svg.png", alt: "Del Monte" },
  { name: "Sadia", logo: "/clients/Logo-sadia.svg.png", alt: "Sadia" },
  { name: "Epson", logo: "/clients/Epson.png", alt: "Epson" },
  { name: "Offto", logo: "/clients/Offto.png", alt: "Offto" },
  { name: "Sunny", logo: "/clients/Sunny.png", alt: "Sunny" },
  { name: "Barugzai", logo: "/clients/barugzai.png", alt: "Barugzai" },
  { name: "El Ibtissama", logo: "/clients/el-ibtissama.png", alt: "El Ibtissama" },
  { name: "SPN Events", logo: "/clients/spn-events.jpg", alt: "SPN Events" },
  { name: "Commune de Sétif", logo: "/clients/commune-setif.jpeg", alt: "Commune de Sétif" },
  { name: "Synronose", logo: "/clients/synronose.png", alt: "Synronose" },
  { name: "Avé", logo: "/clients/ave.png", alt: "Avé" },
];

export default function ClientsPartnersSection() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const isRTL = router.locale === "ar";
  const locale = router.locale;

  const tx = (ar, en, fr) =>
    locale === "ar" ? ar : locale === "en" ? en : fr;

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
      document.documentElement.setAttribute("lang", locale || "en");
    }
  }, [isRTL, locale]);

  const marqueeGradientMask = {
    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
  };

  const statsData = [
    { value: "50+", label: tx("عملاء سعداء", "Happy Clients", "Clients Satisfaits"), dotColor: "bg-blue-400" },
    { value: "70+", label: tx("مشاريع منجزة", "Projects Done", "Projets Réalisés"), dotColor: "bg-purple-400" },
    { value: "5+", label: tx("سنوات خبرة", "Years Experience", "Ans d'Expérience"), dotColor: "bg-green-400" },
    { value: "24/7", label: tx("دعم فني", "Support", "Support"), dotColor: "bg-amber-400" },
  ];

  return (
    <section
      id="clients-partners"
      className="relative py-24 sm:py-32 bg-black text-white overflow-hidden"
      aria-labelledby="clients-heading"
      key={`clients-${locale}`}
    >
      {/* Sweep lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[12, 16, 20].map((dur, i) => (
          <div
            key={i}
            className="absolute h-px w-1/2"
            style={{
              top: `${20 + i * 30}%`,
              background: `linear-gradient(90deg, transparent, rgba(99,102,241,${0.12 - i * 0.03}), transparent)`,
              animation: `sweep-line ${dur}s linear infinite`,
              animationDelay: `${i * 2.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.05] backdrop-blur-sm rounded-full text-sm border border-white/[0.1] mb-8"
          >
            <div className="w-2 h-2 bg-indigo-400 rounded-full" />
            <span className="font-medium text-white/60">{t("clientsPartners.badge")}</span>
          </motion.div>

          <h2
            id="clients-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
          >
            {t("clientsPartners.title")}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white/50 to-white/30 font-normal mt-2">
              {t("clientsPartners.titleAccent")}
            </span>
          </h2>

          <p className="text-lg text-white/40 max-w-3xl mx-auto leading-relaxed">
            {t("clientsPartners.subtitle")}
          </p>
        </motion.div>

        {/* Marquee Row 1 — scrolls left */}
        <div className="relative mb-5 overflow-hidden" style={marqueeGradientMask}>
          <div className="flex animate-scroll-long" style={{ width: "max-content" }}>
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`row1-${i}`}
                className="flex-shrink-0 mx-5 sm:mx-8 flex items-center justify-center h-20 w-32 sm:w-40 rounded-xl bg-white/[0.04] border border-white/[0.07] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500"
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={120}
                  height={48}
                  className="object-contain max-h-12"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 — scrolls right */}
        <div className="relative mb-16 overflow-hidden" style={marqueeGradientMask}>
          <div className="flex animate-scroll-long-reverse" style={{ width: "max-content" }}>
            {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
              <div
                key={`row2-${i}`}
                className="flex-shrink-0 mx-5 sm:mx-8 flex items-center justify-center h-20 w-32 sm:w-40 rounded-xl bg-white/[0.04] border border-white/[0.07] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500"
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={120}
                  height={48}
                  className="object-contain max-h-12"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Glass pill stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16"
        >
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-full px-6 py-3 bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-400"
            >
              <div className={`w-2 h-2 rounded-full ${stat.dotColor}`} />
              <span className="text-lg font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-sm text-white/40">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Startup Label + Clutch */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
          {/* Startup Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-28 h-28 mb-3">
              <Image
                src="/clients/label-startup-algerie.png"
                alt="Label Startup Algérie - Symloop"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-white/70">
              {tx("شركة ناشئة معتمدة", "Certified Startup", "Startup Labellisée")}
            </p>
            <p className="text-xs text-white/30 max-w-[200px] mt-1">
              {tx(
                "معترف بها من طرف الدولة",
                "State recognized in Algeria",
                "Reconnue par l'État"
              )}
            </p>
          </motion.div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-20 bg-gradient-to-b from-transparent via-white/[0.1] to-transparent" />

          {/* Clutch Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <a
              href="https://clutch.co/profile/symloop-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/Clutch-mobile-app-developers.png"
                alt="Clutch Top Mobile App Developers"
                width={160}
                height={80}
                className="h-24 w-auto mx-auto"
              />
            </a>
            <p className="text-xs text-white/30 mt-2">
              {tx("معترف بنا من Clutch", "Recognized by Clutch", "Reconnu par Clutch")}
            </p>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-sm text-white/20">{t("clientsPartners.tagline")}</p>
        </motion.div>
      </div>
    </section>
  );
}
