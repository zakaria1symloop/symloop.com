/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');


const nextConfig = {
  trailingSlash: true,
  webpack: (config) => {
    return config;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
  },
  // Enable i18n for all builds
  i18n,
  // Compression for better performance
  compress: true,
  // Power optimizations
  poweredByHeader: false,
  // Strict mode for React
  reactStrictMode: true,
  // Ignore ESLint during builds (warnings only)
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig