// Firebase configuration for Symloop
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNEw9CXXg-hQkyfDQk5Ig8ZM4u5lfsO1U",
  authDomain: "symloop-3b3ad.firebaseapp.com",
  projectId: "symloop-3b3ad",
  storageBucket: "symloop-3b3ad.firebasestorage.app",
  messagingSenderId: "741907088460",
  appId: "1:741907088460:web:839b2382af20e99eeea0e9",
  measurementId: "G-WEZ9RZY5QH"
};

// Initialize Firebase (prevent multiple initializations)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
const db = getFirestore(app);

// Firebase Analytics intentionally NOT initialised: it injected a second
// gtag.js (G-WEZ9RZY5QH) on every page on top of the Ads tag in _app.js and
// Vercel Analytics. Keep a null export so existing imports keep compiling.
const analytics = null;

export { app, db, analytics };
