"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Package, ExternalLink, Play, Sparkles } from 'lucide-react';

const getProducts = (t, locale) => [
  {
    name: locale === 'ar' ? 'نظام إدارة اللوجستيات' : locale === 'en' ? 'Logistics Management' : 'Gestion Logistique',
    slug: "logistics-management",
    desc: locale === 'ar' ? 'نظام متكامل لإدارة التوصيل والأسطول. تطبيق بائع، تطبيق سائق، لوحة تحكم المدير.' : locale === 'en' ? 'Complete delivery & fleet management. Seller app, driver app, admin dashboard with real-time tracking.' : 'Gestion complète livraison & flotte. App vendeur, app livreur, dashboard admin avec suivi temps réel.',
    image: "/products/logistics-icon.svg",
    externalUrl: null,
    isNew: true,
    liveDemo: "https://logistics.symloop.com",
    features: locale === 'ar'
      ? ['تتبع في الوقت الحقيقي', 'تطبيق جوال', 'لوحة تحكم']
      : locale === 'en'
      ? ['Real-time tracking', 'Mobile apps', 'Admin dashboard']
      : ['Suivi temps réel', 'Apps mobiles', 'Dashboard admin']
  }
];

export default function ProductsSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const products = getProducts(t, router.locale);

  // RTL support
  const isRTL = router.locale === 'ar';

  // Update document direction dynamically without reload
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', router.locale || 'fr');
    }
  }, [isRTL, router.locale]);

  return (
    <section
      className={`relative py-32 bg-black text-white overflow-hidden ${isRTL ? 'rtl-products' : ''}`}
      key={`products-${router.locale}`}
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header - Same as ClientsPartnersSection */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-sm border border-white/20 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="font-medium text-white/90">
              {isRTL ? 'حلول جاهزة' : router.locale === 'en' ? 'Ready-to-use' : 'Prêt à l\'emploi'}
            </span>
            <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">
              <Sparkles className="w-3 h-3 inline" />
            </span>
          </motion.div>

          {/* Title with gradient accent - Same style */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white">
            {t('products.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 font-normal mt-2">
              {isRTL ? 'حلول مبتكرة' : router.locale === 'en' ? 'Innovative Solutions' : 'Solutions Innovantes'}
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            {products.map((product, index) => {
              const linkProps = product.externalUrl
                ? {
                    href: product.externalUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : { href: `/products/${product.slug}` };

              return (
                <motion.div
                  key={`${product.slug}-${router.locale}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group"
                >
                  <div className={`relative h-auto rounded-2xl p-8 bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10 ${product.isNew ? 'ring-2 ring-amber-500/30' : ''}`}>

                    {/* NEW badge */}
                    {product.isNew && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-amber-500/30">
                          <Sparkles className="w-3 h-3" />
                          NEW
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Product Image */}
                      <div className={`w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-2xl overflow-hidden ${product.isNew ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20' : 'bg-white/10'} border border-white/10`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-contain w-24 h-24"
                          onError={(e) => {
                            e.target.src = '/products/default-product.svg';
                            e.target.onerror = null;
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className={`flex-1 ${isRTL ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
                        <h3 className="text-2xl font-semibold text-white mb-3">{product.name}</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          {product.desc}
                        </p>

                        {/* Features Tags */}
                        <div className={`flex flex-wrap gap-2 mb-6 ${isRTL ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                          {product.features?.map((feature, i) => (
                            <span key={i} className="text-xs px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-white/70">
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                          <Link
                            {...linkProps}
                            className="inline-flex items-center gap-2 text-sm px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium group/btn"
                          >
                            <Package className="w-4 h-4" />
                            {t('cta.viewPortfolio')}
                            <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                          </Link>
                          {product.liveDemo && (
                            <a
                              href={product.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 font-semibold shadow-lg shadow-amber-500/20"
                            >
                              <Play className="w-4 h-4" />
                              {isRTL ? 'عرض مباشر' : router.locale === 'en' ? 'Live Demo' : 'Démo Live'}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Hover gradient effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Coming Soon Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500 font-light">
            {isRTL ? 'المزيد من المنتجات قادمة قريباً...' : router.locale === 'en' ? 'More products coming soon...' : 'Plus de produits à venir...'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
