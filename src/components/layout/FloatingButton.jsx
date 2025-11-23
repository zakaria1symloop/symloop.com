// layout/FloatingButton.jsx

"use client";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from "framer-motion";
import AIOnboarding from "../onboarding/AIOnboarding";

export default function FloatingButton() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const router = useRouter();
  const locale = router.locale || 'en';

  // Funny messages that rotate
  const messages = {
    fr: [
      "Psst... 👋",
      "Je suis là !",
      "Besoin d'aide ?",
      "Cliquez-moi !",
      "Une idée ? 💡",
      "Parlons projet !",
    ],
    en: [
      "Psst... 👋",
      "I'm here!",
      "Need help?",
      "Click me!",
      "Got an idea? 💡",
      "Let's talk!",
    ],
    ar: [
      "👋 ...هاي",
      "أنا هنا!",
      "تحتاج مساعدة؟",
      "انقر علي!",
      "عندك فكرة؟ 💡",
      "لنتحدث!",
    ]
  };

  const currentMessages = messages[locale] || messages.en;

  // Show/hide message periodically
  useEffect(() => {
    const showInterval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setMessageIndex(prev => (prev + 1) % currentMessages.length);
      }, 3000);
    }, 6000);

    // Show first message after 2 seconds
    const initialTimeout = setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }, 2000);

    return () => {
      clearInterval(showInterval);
      clearTimeout(initialTimeout);
    };
  }, [currentMessages.length]);

  const handleComplete = (data) => {
    setShowOnboarding(false);
  };

  const handleSkip = () => {
    setShowOnboarding(false);
  };

  return (
    <>
      {/* AI Onboarding */}
      {showOnboarding && (
        <AIOnboarding
          onComplete={handleComplete}
          onSkip={handleSkip}
        />
      )}

      {/* Floating Button */}
      {!showOnboarding && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Small message bubble - appears and disappears */}
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-14 right-0 mb-1"
              >
                <div className="bg-black text-white px-3 py-1.5 rounded-lg rounded-br-none shadow-lg text-xs font-medium whitespace-nowrap">
                  {currentMessages[messageIndex]}
                  <div className="absolute -bottom-1 right-3 w-2 h-2 bg-black transform rotate-45"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button with animated border */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowOnboarding(true)}
            className="relative flex items-center justify-center w-14 h-14"
          >
            {/* Animated gradient border */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-spin" style={{ animationDuration: '3s' }}></span>

            {/* Inner button */}
            <span className="absolute inset-[3px] rounded-full bg-black flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </span>

            {/* Green dot */}
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white z-10"></span>
          </motion.button>
        </div>
      )}
    </>
  );
}