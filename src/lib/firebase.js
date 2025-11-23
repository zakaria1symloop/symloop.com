// Firebase configuration for Symloop
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

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

// Initialize Analytics (only in browser)
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, analytics };
