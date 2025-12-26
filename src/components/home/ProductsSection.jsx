"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const getProducts = (t, locale) => [
  {
    name: locale === 'ar' ? 'نظام إدارة اللوجستيات' : locale === 'en' ? 'Logistics Management' : 'Gestion Logistique',
    slug: "logistics-management",
    desc: locale === 'ar' ? 'نظام متكامل لإدارة التوصيل والأسطول. تطبيق بائع، تطبيق سائق، لوحة تحكم المدير.' : locale === 'en' ? 'Complete delivery & fleet management. Seller app, driver app, admin dashboard with real-time tracking.' : 'Gestion complète livraison & flotte. App vendeur, app livreur, dashboard admin avec suivi temps réel.',
    image: "/products/logistics-icon.svg",
    externalUrl: null,
    isNew: true,
    liveDemo: "https://logistics.symloop.com"
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
    <section className={`py-24 bg-black text-white ${isRTL ? 'rtl-products' : ''}`} key={`products-${router.locale}`}>
      <div className={`max-w-7xl mx-auto px-6 ${isRTL ? 'text-center' : 'text-center'}`}>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          {t('products.title')}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-20"
        >
          {t('products.subtitle')}
        </motion.p>

        {/* Product Cards */}
        <div className={`flex justify-center ${isRTL ? 'rtl-grid' : ''}`}>
          <div className="max-w-lg w-full">
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
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: isRTL ? -20 : 20
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0
                }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 25px 60px rgba(255, 255, 255, 0.15)"
                }}
                className={`relative flex flex-col items-center space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 ${product.isNew ? 'ring-2 ring-amber-500/50' : ''} ${isRTL ? 'rtl-product-card' : ''}`}
              >
                {/* NEW badge */}
                {product.isNew && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                      NEW
                    </span>
                  </div>
                )}

                {/* product image */}
                <div className={`w-24 h-24 flex items-center justify-center rounded-lg overflow-hidden ${product.isNew ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20' : 'bg-white/10'}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-20 h-20"
                    onError={(e) => {
                      e.target.src = '/products/default-product.svg';
                      e.target.onerror = null;
                    }}
                  />
                </div>

                {/* name + desc */}
                <div className={`space-y-2 ${isRTL ? 'text-center' : 'text-center'}`}>
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <p className={`text-sm text-gray-400 leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                    {product.desc}
                  </p>
                </div>

                {/* CTA links */}
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <Link
                    {...linkProps}
                    className={`text-sm px-5 py-2.5 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium ${isRTL ? 'rtl-cta-btn' : ''}`}
                  >
                    {t('cta.viewPortfolio')}
                  </Link>
                  {product.liveDemo && (
                    <a
                      href={product.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-5 py-2.5 bg-amber-500 text-black rounded-full hover:bg-amber-400 transition-all duration-300 font-medium"
                    >
                      {isRTL ? 'عرض مباشر' : router.locale === 'en' ? 'Live Demo' : 'Démo Live'}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
