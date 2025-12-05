"use client";
import { useState } from "react";
import { Calendar, Clock, User, Search, ChevronRight, BookOpen, TrendingUp, Code, Smartphone, Globe, Server, Star, Eye, ShoppingCart, Cpu, Zap } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getAllBlogs, getCategories, getFeaturedBlogs } from '../../data/blogs';

// Category icons mapping
const categoryIcons = {
  "E-commerce": ShoppingCart,
  "SEO": TrendingUp,
  "Mobile": Smartphone,
  "Web": Globe,
  "IA": Cpu,
  "Digital": Zap,
  "ERP": Server,
  "Default": BookOpen
};

// Category colors
const categoryColors = {
  "E-commerce": "bg-orange-500",
  "Mobile": "bg-blue-500",
  "Web": "bg-green-500",
  "IA": "bg-purple-500",
  "Digital": "bg-cyan-500",
  "ERP": "bg-red-500",
  "Default": "bg-gray-500"
};

export default function BlogIndexPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const blogs = getAllBlogs();
  const serverCategories = getCategories();
  const featuredPosts = getFeaturedBlogs();

  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  // Build categories
  const categories = [
    { name: "Tous", count: blogs.length, icon: BookOpen },
    ...serverCategories.map(cat => ({
      name: cat.name,
      count: cat.count,
      icon: categoryIcons[cat.name] || categoryIcons.Default
    }))
  ];

  // Filter posts
  const filteredPosts = blogs.filter(post => {
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory;
    const matchesSearch = searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Blog Tech & Digital Algérie | Symloop</title>
        <meta name="description" content="Articles et guides sur le développement web, mobile, SEO, e-commerce et digitalisation en Algérie. Conseils d'experts pour votre transformation digitale." />
        <link rel="canonical" href="https://symloop.com/blog" />
      </Head>

      <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Hero Section */}
        <section className="bg-black text-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">
                  Expertise Tech & Digital
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tech</span> Symloop
              </h1>

              <p className="text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Guides pratiques, conseils d'experts et actualités sur le développement web,
                mobile, l'IA et la transformation digitale en Algérie.
              </p>

              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{blogs.length}</div>
                  <div className="text-gray-400 text-sm">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{categories.length - 1}</div>
                  <div className="text-gray-400 text-sm">Catégories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">Expert</div>
                  <div className="text-gray-400 text-sm">Contenu</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-black/10 focus:border-gray-300 transition-all"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                        selectedCategory === category.name
                          ? 'bg-black text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedCategory === category.name
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === "Tous" && searchTerm === "" && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-10">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-900">Articles Vedettes</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post, index) => {
                  const CategoryIcon = categoryIcons[post.category] || categoryIcons.Default;
                  const categoryColor = categoryColors[post.category] || categoryColors.Default;

                  return (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={`/blog/${post.slug}`} className="group block">
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                          <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                              <span className={`${categoryColor} text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5`}>
                                <CategoryIcon className="w-4 h-4" />
                                {post.category}
                              </span>
                              <span className="text-gray-400 text-sm">{post.readTime}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                              {post.title}
                            </h3>

                            <p className="text-gray-500 mb-6 leading-relaxed">
                              {post.subtitle}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                                  S
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{post.author}</div>
                                  <div className="text-xs text-gray-400">
                                    {new Date(post.date).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric', year: 'numeric' })}
                                  </div>
                                </div>
                              </div>
                              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === "Tous" ? "Tous les Articles" : selectedCategory}
              </h2>
              <span className="text-gray-500 bg-white px-4 py-2 rounded-lg text-sm border border-gray-200">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun article trouvé</h3>
                <p className="text-gray-500">Essayez une autre recherche ou catégorie</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => {
                  const CategoryIcon = categoryIcons[post.category] || categoryIcons.Default;
                  const categoryColor = categoryColors[post.category] || categoryColors.Default;

                  return (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <div className="h-full bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-4">
                              <span className={`${categoryColor} text-white px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1`}>
                                <CategoryIcon className="w-3 h-3" />
                                {post.category}
                              </span>
                              <span className="text-xs text-gray-400">{post.readTime}</span>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                              {post.title}
                            </h3>

                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-2 text-xs text-gray-400">
                                <Calendar className="w-3.5 h-3.5" />
                                {new Date(post.date).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric' })}
                              </div>
                              <span className="text-xs text-blue-600 font-medium group-hover:underline">
                                Lire plus →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Restez Informé
            </h2>
            <p className="text-gray-400 mb-8">
              Recevez nos derniers articles et guides tech directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-white/20 focus:border-white/30"
              />
              <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
