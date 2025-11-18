"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  Building2,
  Handshake,
  Award,
  TrendingUp,
  Users,
  Globe
} from "lucide-react";

const getClientsPartners = (t) => [
  {
    name: "TechCorp MENA",
    type: "client",
    category: t('clientsPartners.categories.client'),
    description: t('clientsPartners.techcorp.description'),
    icon: Building2,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "EcomDZ Marketplace",
    type: "client",
    category: t('clientsPartners.categories.client'),
    description: t('clientsPartners.ecomdz.description'),
    icon: TrendingUp,
    color: "from-orange-500 to-red-500"
  },
  {
    name: "DeliveryDZ",
    type: "client",
    category: t('clientsPartners.categories.client'),
    description: t('clientsPartners.deliverydz.description'),
    icon: Users,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "AWS Partner",
    type: "partner",
    category: t('clientsPartners.categories.partner'),
    description: t('clientsPartners.aws.description'),
    icon: Globe,
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "Microsoft Partner",
    type: "partner",
    category: t('clientsPartners.categories.partner'),
    description: t('clientsPartners.microsoft.description'),
    icon: Award,
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Google Cloud",
    type: "partner",
    category: t('clientsPartners.categories.partner'),
    description: t('clientsPartners.google.description'),
    icon: Handshake,
    color: "from-indigo-500 to-purple-500"
  }
];

export default function ClientsPartnersSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const clientsPartners = getClientsPartners(t);

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

        {/* Client & Partner Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientsPartners.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`${item.name}-${router.locale}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group"
              >
                <article className="relative h-full rounded-xl p-8 bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <header>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          item.type === 'client'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-green-500/20 text-green-300 border border-green-500/30'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-white group-hover:text-white transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                    </header>

                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>

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
