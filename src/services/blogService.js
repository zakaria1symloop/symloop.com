import { db } from '../lib/firebase';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';

const COLLECTION_NAME = 'blogs';

// Helper to generate URL-friendly slug
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
};

// Get all published blogs
export const getAllBlogs = async () => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(
      blogsRef,
      where('published', '==', true),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate?.() || new Date(),
    }));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

// Get all blogs (including drafts) for admin
export const getAllBlogsAdmin = async () => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(blogsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate?.() || new Date(),
    }));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

// Get single blog by slug
export const getBlogBySlug = async (slug) => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(blogsRef, where('slug', '==', slug), limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    const doc = snapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate?.() || new Date(),
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
};

// Get blogs by category
export const getBlogsByCategory = async (category) => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(
      blogsRef,
      where('published', '==', true),
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || new Date(),
    }));
  } catch (error) {
    console.error('Error fetching blogs by category:', error);
    return [];
  }
};

// Get all blog slugs (for static generation)
export const getAllBlogSlugs = async () => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(blogsRef, where('published', '==', true));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => doc.data().slug);
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
};

// Create new blog post
export const createBlog = async (blogData) => {
  try {
    const slug = generateSlug(blogData.title);

    const newBlog = {
      ...blogData,
      slug,
      published: blogData.published || false,
      views: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, COLLECTION_NAME), newBlog);
    return { id: docRef.id, slug };
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

// Update blog post
export const updateBlog = async (blogId, blogData) => {
  try {
    const blogRef = doc(db, COLLECTION_NAME, blogId);

    // If title changed, regenerate slug
    const updateData = {
      ...blogData,
      updatedAt: serverTimestamp(),
    };

    if (blogData.title) {
      updateData.slug = generateSlug(blogData.title);
    }

    await updateDoc(blogRef, updateData);
    return updateData.slug || blogData.slug;
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

// Delete blog post
export const deleteBlog = async (blogId) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, blogId));
    return true;
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};

// Increment view count
export const incrementViews = async (blogId) => {
  try {
    const blogRef = doc(db, COLLECTION_NAME, blogId);
    const blogSnap = await getDoc(blogRef);

    if (blogSnap.exists()) {
      const currentViews = blogSnap.data().views || 0;
      await updateDoc(blogRef, { views: currentViews + 1 });
    }
  } catch (error) {
    console.error('Error incrementing views:', error);
  }
};

// Get featured blogs
export const getFeaturedBlogs = async (limitCount = 3) => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(
      blogsRef,
      where('published', '==', true),
      where('featured', '==', true),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || new Date(),
    }));
  } catch (error) {
    console.error('Error fetching featured blogs:', error);
    return [];
  }
};

// Get recent blogs
export const getRecentBlogs = async (limitCount = 5) => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(
      blogsRef,
      where('published', '==', true),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || new Date(),
    }));
  } catch (error) {
    console.error('Error fetching recent blogs:', error);
    return [];
  }
};

// Blog schema for reference
export const blogSchema = {
  title: '', // Blog title (required)
  slug: '', // URL slug (auto-generated)
  excerpt: '', // Short description for cards
  content: '', // Full HTML/Markdown content
  author: '', // Author name
  category: '', // Category: SEO, E-commerce, Mobile, Web, AI, Business
  tags: [], // Array of tags
  image: '', // Featured image URL
  featured: false, // Show in featured section
  published: false, // Is published or draft
  views: 0, // View counter
  readTime: '', // Estimated read time
  metaTitle: '', // SEO meta title
  metaDescription: '', // SEO meta description
  createdAt: null, // Timestamp
  updatedAt: null, // Timestamp
  // Multi-language support
  translations: {
    ar: { title: '', excerpt: '', content: '' },
    en: { title: '', excerpt: '', content: '' },
  }
};
