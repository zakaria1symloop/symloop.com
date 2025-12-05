import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Eye,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Tag,
  ChevronRight,
  BookOpen
} from 'lucide-react';

// Firebase imports
import { db } from '../../lib/firebase';
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc
} from 'firebase/firestore';

export default function BlogPost({ blog, relatedBlogs }) {
  const router = useRouter();
  const { t } = useTranslation('common');
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const [copied, setCopied] = useState(false);

  // Get localized content
  const getLocalizedContent = (field) => {
    if (blog?.translations?.[locale]?.[field]) {
      return blog.translations[locale][field];
    }
    return blog?.[field] || '';
  };

  const title = getLocalizedContent('title');
  const excerpt = getLocalizedContent('excerpt');
  const content = getLocalizedContent('content');

  // Increment view count
  useEffect(() => {
    if (blog?.id) {
      const incrementViews = async () => {
        try {
          const blogRef = doc(db, 'blogs', blog.id);
          await updateDoc(blogRef, {
            views: (blog.views || 0) + 1
          });
        } catch (error) {
          console.error('Error incrementing views:', error);
        }
      };
      incrementViews();
    }
  }, [blog?.id]);

  // Share functions
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Loading state
  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-gray-500">
          {t('blog.loading')}
        </div>
      </div>
    );
  }

  // 404 if no blog found
  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600 mb-8">
            {t('blog.notFound')}
          </p>
          <Link href="/blog" className="text-gray-600 hover:text-black underline">
            {t('blog.backToBlog')}
          </Link>
        </div>
      </div>
    );
  }

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ar' ? 'ar-DZ' : locale === 'en' ? 'en-US' : 'fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": excerpt,
    "image": blog.image,
    "author": {
      "@type": "Person",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "logo": {
        "@type": "ImageObject",
        "url": "https://symloop.com/sym-logo.png"
      }
    },
    "datePublished": blog.createdAt,
    "dateModified": blog.updatedAt || blog.createdAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://symloop.com/blog/${blog.slug}`
    }
  };

  return (
    <>
      <Head>
        <title>{blog.metaTitle || title} | Symloop Blog</title>
        <meta name="description" content={blog.metaDescription || excerpt} />
        <meta name="keywords" content={blog.tags?.join(', ')} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://symloop.com/blog/${blog.slug}`} />
        <meta property="article:published_time" content={blog.createdAt} />
        <meta property="article:author" content={blog.author} />
        <meta property="article:section" content={blog.category} />
        {blog.tags?.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={blog.image} />

        {/* Canonical & Hreflang */}
        <link rel="canonical" href={`https://symloop.com/blog/${blog.slug}`} />
        <link rel="alternate" hrefLang="fr" href={`https://symloop.com/fr/blog/${blog.slug}`} />
        <link rel="alternate" hrefLang="en" href={`https://symloop.com/en/blog/${blog.slug}`} />
        <link rel="alternate" hrefLang="ar" href={`https://symloop.com/ar/blog/${blog.slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://symloop.com/blog/${blog.slug}`} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <article className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px] bg-black">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${blog.image})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end max-w-4xl mx-auto px-6 pb-12">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-8 left-6"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                <span>{t('blog.back')}</span>
              </Link>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 bg-white text-black text-sm font-medium rounded-full mb-4">
                {blog.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 text-white/80 text-sm"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{blog.views?.toLocaleString() || 0} {t('blog.views')}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Share Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200"
          >
            <span className="text-gray-600 text-sm font-medium">
              {t('blog.share')}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={shareOnFacebook}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                onClick={shareOnTwitter}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={shareOnLinkedIn}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={copyLink}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
                title={t('blog.copyLink')}
              >
                {copied ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* Blog Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-black prose-a:underline hover:prose-a:no-underline prose-img:rounded-xl prose-blockquote:border-gray-900 prose-blockquote:bg-gray-100 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-500" />
                {blog.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Author Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 p-6 bg-gray-100 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                {blog.author?.charAt(0) || 'S'}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{blog.author}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {t('blog.authorDescription')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-8 bg-black rounded-2xl text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-3">
              {t('blog.ctaTitle')}
            </h3>
            <p className="text-gray-400 mb-6">
              {t('blog.ctaSubtitle')}
            </p>
            <a
              href="https://wa.me/213549575512"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              {t('blog.ctaButton')}
              <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
          </motion.div>
        </div>

        {/* Related Posts */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <div className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                {t('blog.relatedArticles')}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogs.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-gray-200 relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-5">
                          <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <h3 className="font-semibold text-gray-900 mt-3 line-clamp-2 group-hover:text-gray-600 transition-colors">
                            {post.translations?.[locale]?.title || post.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
                            <span>{post.readTime}</span>
                            <span>•</span>
                            <span>{post.views?.toLocaleString() || 0} {t('blog.views')}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  );
}

// Static generation with ISR (Incremental Static Regeneration)
export async function getStaticPaths() {
  try {
    const blogsRef = collection(db, 'blogs');
    // Fetch all and filter in JS to avoid index requirement
    const snapshot = await getDocs(blogsRef);

    const paths = [];

    snapshot.docs.forEach(doc => {
      const data = doc.data();
      const slug = data.slug;
      // Only include published blogs
      if (slug && data.published === true) {
        // Generate paths for all locales
        paths.push({ params: { slug }, locale: 'fr' });
        paths.push({ params: { slug }, locale: 'en' });
        paths.push({ params: { slug }, locale: 'ar' });
      }
    });

    return {
      paths,
      fallback: 'blocking' // Enable ISR - new pages generated on-demand
    };
  } catch (error) {
    console.error('Error generating static paths:', error);
    return {
      paths: [],
      fallback: 'blocking'
    };
  }
}

export async function getStaticProps({ params, locale }) {
  try {
    const { slug } = params;

    // Fetch the blog post by slug (simple query, no composite index needed)
    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, where('slug', '==', slug));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return {
        notFound: true,
        revalidate: 60
      };
    }

    const blogDoc = snapshot.docs[0];
    const blogData = blogDoc.data();

    const blog = {
      id: blogDoc.id,
      ...blogData,
      createdAt: blogData.createdAt?.toDate?.()?.toISOString() || null,
      updatedAt: blogData.updatedAt?.toDate?.()?.toISOString() || null,
    };

    // Fetch all blogs and filter in JS to avoid composite index requirement
    const allBlogsSnapshot = await getDocs(blogsRef);

    let relatedBlogs = allBlogsSnapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || null,
      }))
      // Filter: published, same category, not current post
      .filter(b => b.published === true && b.category === blog.category && b.id !== blogDoc.id)
      // Sort by date descending
      .sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
        const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
        return dateB - dateA;
      })
      // Take only 3
      .slice(0, 3);

    return {
      props: {
        blog,
        relatedBlogs,
        ...(await serverSideTranslations(locale, ['common'])),
      },
      revalidate: 300, // Regenerate page every 5 minutes (good for SEO freshness)
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return {
      notFound: true,
      revalidate: 60
    };
  }
}
