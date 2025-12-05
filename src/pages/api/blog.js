// Blog API for AI posting
// Usage: POST /api/blog with API_SECRET_KEY header

import { db } from '../../lib/firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore';

const COLLECTION_NAME = 'blogs';

// Generate URL-friendly slug
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Calculate read time from content
const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ''); // Strip HTML
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
};

export default async function handler(req, res) {
  // CORS headers for API access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-API-Key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Verify API key for write operations
  const apiKey = req.headers['x-api-key'] || req.headers['authorization']?.replace('Bearer ', '');
  const validApiKey = process.env.BLOG_API_SECRET_KEY;

  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    if (!apiKey || apiKey !== validApiKey) {
      return res.status(401).json({ error: 'Unauthorized - Invalid API key' });
    }
  }

  try {
    // GET - Fetch all blogs
    if (req.method === 'GET') {
      const { slug, category, published } = req.query;

      const blogsRef = collection(db, COLLECTION_NAME);
      let q;

      if (slug) {
        // Get single blog by slug - simple query, no index needed
        q = query(blogsRef, where('slug', '==', slug));
        const snapshot = await getDocs(q);
        const blogs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate?.().toISOString() || null,
          updatedAt: doc.data().updatedAt?.toDate?.().toISOString() || null,
        }));
        return res.status(200).json(blogs[0] || null);
      }

      // For all other queries, fetch all documents and filter/sort in JavaScript
      // This avoids the composite index requirement
      const snapshot = await getDocs(blogsRef);
      let blogs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.().toISOString() || null,
        updatedAt: doc.data().updatedAt?.toDate?.().toISOString() || null,
      }));

      // Filter by published status
      if (published !== 'false') {
        blogs = blogs.filter(blog => blog.published === true);
      }

      // Filter by category
      if (category) {
        blogs = blogs.filter(blog => blog.category === category);
      }

      // Sort by createdAt descending (most recent first)
      blogs.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
        const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
        return dateB - dateA;
      });

      return res.status(200).json(blogs);
    }

    // POST - Create new blog
    if (req.method === 'POST') {
      const {
        title,
        excerpt,
        content,
        author,
        category,
        tags,
        image,
        featured,
        published,
        metaTitle,
        metaDescription,
        translations
      } = req.body;

      // Validation
      if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
      }

      const slug = generateSlug(title);
      const readTime = calculateReadTime(content);

      const blogData = {
        title,
        slug,
        excerpt: excerpt || content.substring(0, 160).replace(/<[^>]*>/g, '') + '...',
        content,
        author: author || 'Symloop Team',
        category: category || 'Tech',
        tags: tags || [],
        image: image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200',
        featured: featured || false,
        published: published !== undefined ? published : true,
        views: 0,
        readTime,
        metaTitle: metaTitle || title,
        metaDescription: metaDescription || excerpt || content.substring(0, 160).replace(/<[^>]*>/g, ''),
        translations: translations || {},
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, COLLECTION_NAME), blogData);

      return res.status(201).json({
        success: true,
        id: docRef.id,
        slug,
        message: 'Blog created successfully'
      });
    }

    // PUT - Update blog
    if (req.method === 'PUT') {
      const { id, ...updateData } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'Blog ID is required' });
      }

      // Regenerate slug if title changed
      if (updateData.title) {
        updateData.slug = generateSlug(updateData.title);
      }

      // Recalculate read time if content changed
      if (updateData.content) {
        updateData.readTime = calculateReadTime(updateData.content);
      }

      updateData.updatedAt = serverTimestamp();

      const blogRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(blogRef, updateData);

      return res.status(200).json({
        success: true,
        message: 'Blog updated successfully'
      });
    }

    // DELETE - Delete blog
    if (req.method === 'DELETE') {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'Blog ID is required' });
      }

      await deleteDoc(doc(db, COLLECTION_NAME, id));

      return res.status(200).json({
        success: true,
        message: 'Blog deleted successfully'
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Blog API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}

/*
===========================================
API USAGE GUIDE FOR AI POSTING
===========================================

1. CREATE BLOG (POST /api/blog)
Headers:
  X-API-Key: your-secret-key

Body (JSON):
{
  "title": "How to Build a Mobile App in Algeria",
  "excerpt": "Complete guide to mobile app development...",
  "content": "<h2>Introduction</h2><p>Mobile apps are...</p>",
  "author": "Symloop AI",
  "category": "Mobile",  // Options: SEO, E-commerce, Mobile, Web, AI, Business, Tech
  "tags": ["mobile", "flutter", "algeria"],
  "image": "https://images.unsplash.com/...",
  "featured": false,
  "published": true,
  "metaTitle": "Mobile App Development Algeria | Symloop",
  "metaDescription": "Learn how to build mobile apps in Algeria...",
  "translations": {
    "ar": {
      "title": "كيفية إنشاء تطبيق جوال في الجزائر",
      "excerpt": "دليل كامل لتطوير تطبيقات الهاتف المحمول...",
      "content": "<h2>مقدمة</h2><p>تطبيقات الهاتف المحمول...</p>"
    },
    "en": {
      "title": "How to Build a Mobile App in Algeria",
      "excerpt": "Complete guide to mobile app development...",
      "content": "<h2>Introduction</h2><p>Mobile apps are...</p>"
    }
  }
}

2. GET ALL BLOGS (GET /api/blog)
No auth required for public blogs

3. GET BLOG BY SLUG (GET /api/blog?slug=my-blog-post)
No auth required

4. UPDATE BLOG (PUT /api/blog)
Headers:
  X-API-Key: your-secret-key

Body:
{
  "id": "firebase-doc-id",
  "title": "Updated Title",
  "content": "Updated content..."
}

5. DELETE BLOG (DELETE /api/blog)
Headers:
  X-API-Key: your-secret-key

Body:
{
  "id": "firebase-doc-id"
}

===========================================
*/
