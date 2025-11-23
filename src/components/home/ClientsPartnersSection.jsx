"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Actual clients from public/clients folder
const clients = [
  {
    name: "Avé",
    logo: "/clients/avé.png",
    alt: "Avé - Client Symloop"
  },
  {
    name: "Offto",
    logo: "/clients/Offto.png",
    alt: "Offto - Client Symloop"
  },
  {
    name: "Del Monte",
    logo: "/clients/Logo_Del_Monte.svg.png",
    alt: "Del Monte - Client Symloop"
  },
  {
    name: "Sadia",
    logo: "/clients/Logo-sadia.svg.png",
    alt: "Sadia - Client Symloop"
  },
  {
    name: "Sunny",
    logo: "/clients/Sunny.png",
    alt: "Sunny - Client Symloop"
  },
  {
    name: "Synronose",
    logo: "/clients/synronose.png",
    alt: "Synronose - Client Symloop"
  },
  {
    name: "SPN Events",
    logo: "/clients/spn enents.jpg",
    alt: "SPN Events - Client Symloop"
  },
  {
    name: "Commune de Sétif",
    logo: "/clients/بلدية سطيف.jpeg",
    alt: "بلدية سطيف - Commune de Sétif - Client Symloop"
  },
  {
    name: "Barugzai",
    logo: "/clients/barugzai.png",
    alt: "Barugzai - Client Symloop"
  },
  {
    name: "El Ibtissama",
    logo: "/clients/el-ibtissama.png",
    alt: "El Ibtissama - Client Symloop"
  },
  {
    name: "Epson",
    logo: "/clients/Epson.png",
    alt: "Epson - Client Symloop"
  },
  {
    name: "CCN Auto Sétif - Renault",
    logo: "/clients/Renault.png",
    alt: "CCN Auto Sétif - Renault - Partenaire Symloop"
  }
];

export default function ClientsPartnersSection() {
  const { t } = useTranslation('common');
  const router = useRouter();

  // RTL support
  const isRTL = router.locale === 'ar';

  // Update document direction dynamically without reload
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', router.locale || 'en');
    }
  }, [isRTL, router.locale]);

  return (
    <section
      id="clients-partners"
      className={`relative py-32 bg-black text-white overflow-hidden ${isRTL ? 'rtl-clients' : ''}`}
      aria-labelledby="clients-heading"
      key={`clients-${router.locale}`}
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-sm border border-white/20 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="font-medium text-white/90">{t('clientsPartners.badge')}</span>
            <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">🌍</span>
          </motion.div>

          <h2
            id="clients-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white"
          >
            {t('clientsPartners.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 font-normal mt-2">
              {t('clientsPartners.titleAccent')}
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            {t('clientsPartners.subtitle')}
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={`${client.name}-${router.locale}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-32 md:h-40 rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10 flex items-center justify-center">
                {/* Logo */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={120}
                    height={80}
                    className="object-contain max-h-20 md:max-h-24 w-auto transition-all duration-300"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                {/* Client Name Tooltip on Hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs text-white text-center font-medium truncate">
                    {client.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Startup Label Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-center text-center"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
            <Image
              src="/clients/label-startup-algerie.png"
              alt="Label Startup Algérie - Symloop"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-lg md:text-xl font-medium text-white mb-2">
            {router.locale === 'ar' ? 'شركة ناشئة معتمدة' : router.locale === 'en' ? 'Certified Startup' : 'Startup Labellisée'}
          </p>
          <p className="text-sm text-gray-400 max-w-md">
            {router.locale === 'ar'
              ? 'شركة ناشئة حاصلة على علامة الجودة في الجزائر - معترف بها من طرف الدولة'
              : router.locale === 'en'
              ? 'Startup with official label in Algeria - State recognized'
              : 'Startup avec label officiel en Algérie - Reconnue par l\'État'}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">12+</p>
            <p className="text-sm text-gray-400">{router.locale === 'ar' ? 'عملاء سعداء' : router.locale === 'en' ? 'Happy Clients' : 'Clients Satisfaits'}</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">50+</p>
            <p className="text-sm text-gray-400">{router.locale === 'ar' ? 'مشاريع منجزة' : router.locale === 'en' ? 'Projects Done' : 'Projets Réalisés'}</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">10+</p>
            <p className="text-sm text-gray-400">{router.locale === 'ar' ? 'سنوات خبرة' : router.locale === 'en' ? 'Years Experience' : 'Ans d\'Expérience'}</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</p>
            <p className="text-sm text-gray-400">{router.locale === 'ar' ? 'دعم فني' : router.locale === 'en' ? 'Support' : 'Support'}</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500 font-light">
            {t('clientsPartners.tagline')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
