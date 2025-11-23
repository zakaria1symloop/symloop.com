"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// AI Character SVG Component
const AICharacter = ({ isTyping, size = "large" }) => {
  const sizeClasses = size === "large" ? "w-32 h-32" : "w-12 h-12";

  return (
    <motion.div
      className={`relative ${sizeClasses}`}
      animate={isTyping ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 1, repeat: isTyping ? Infinity : 0 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Head */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="url(#headGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        />

        {/* Eyes */}
        <motion.circle
          cx="35"
          cy="45"
          r="6"
          fill="#fff"
          animate={isTyping ? { scaleY: [1, 0.3, 1] } : {}}
          transition={{ duration: 0.3, repeat: isTyping ? Infinity : 0, repeatDelay: 2 }}
        />
        <motion.circle
          cx="65"
          cy="45"
          r="6"
          fill="#fff"
          animate={isTyping ? { scaleY: [1, 0.3, 1] } : {}}
          transition={{ duration: 0.3, repeat: isTyping ? Infinity : 0, repeatDelay: 2 }}
        />

        {/* Smile */}
        <motion.path
          d="M 35 60 Q 50 75 65 60"
          stroke="#fff"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        {/* Antenna */}
        <motion.line
          x1="50"
          y1="10"
          x2="50"
          y2="2"
          stroke="url(#antennaGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.circle
          cx="50"
          cy="2"
          r="3"
          fill="#fff"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
          <linearGradient id="antennaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl -z-10"></div>
    </motion.div>
  );
};

// Typing indicator
const TypingIndicator = () => (
  <div className="flex gap-1 items-center px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-white/60 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
  </div>
);

// Initial greetings
const getGreeting = (locale) => {
  const greetings = {
    fr: "Salut ! 👋 Je suis l'assistant IA de Symloop. Je suis là pour comprendre votre projet et vous aider à trouver la meilleure solution digitale. Alors, qu'est-ce qui vous amène aujourd'hui ? Parlez-moi de votre idée ou de ce que vous cherchez à réaliser !",
    en: "Hey there! 👋 I'm Symloop's AI assistant. I'm here to understand your project and help you find the best digital solution. So, what brings you here today? Tell me about your idea or what you're looking to achieve!",
    ar: "مرحباً! 👋 أنا مساعد Symloop الذكي. أنا هنا لفهم مشروعك ومساعدتك في إيجاد أفضل حل رقمي. إذن، ما الذي يجلبك إلى هنا اليوم؟ أخبرني عن فكرتك أو ما تريد تحقيقه!"
  };
  return greetings[locale] || greetings.en;
};

export default function AIOnboarding({ onComplete, onSkip }) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const locale = router.locale || 'en';
  const isRTL = locale === 'ar';

  const [stage, setStage] = useState('welcome'); // welcome, chat, contact, complete
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]); // For GPT context
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '' });
  const [textInput, setTextInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Call GPT API
  const callGPT = async (userMessage) => {
    try {
      const newHistory = [...chatHistory, { role: 'user', content: userMessage }];

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newHistory,
          locale
        })
      });

      if (!response.ok) {
        throw new Error('API error');
      }

      const data = await response.json();
      const aiResponse = data.message;

      setChatHistory([...newHistory, { role: 'assistant', content: aiResponse }]);
      return aiResponse;

    } catch (error) {
      console.error('GPT Error:', error);
      // Fallback responses
      const fallbacks = {
        fr: "Je comprends ! Pouvez-vous m'en dire plus sur votre projet ? Quel est votre objectif principal ?",
        en: "I see! Can you tell me more about your project? What's your main goal?",
        ar: "فهمت! هل يمكنك إخباري المزيد عن مشروعك؟ ما هو هدفك الرئيسي؟"
      };
      return fallbacks[locale] || fallbacks.en;
    }
  };

  // Start AI conversation
  const startAIChat = () => {
    setStage('chat');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const greeting = getGreeting(locale);
      setMessages([{ type: 'ai', content: greeting }]);
      setChatHistory([{ role: 'assistant', content: greeting }]);
    }, 1500);
  };

  // Handle text input submission
  const handleTextSubmit = async () => {
    if (!textInput.trim() || isTyping) return;

    const userMessage = textInput.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setTextInput('');
    setIsTyping(true);
    setMessageCount(prev => prev + 1);

    // Get AI response
    const aiResponse = await callGPT(userMessage);

    setIsTyping(false);
    setMessages(prev => [...prev, { type: 'ai', content: aiResponse }]);

    // After 4-5 messages, suggest moving to contact
    if (messageCount >= 3) {
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          const contactPrompt = locale === 'fr'
            ? "Super ! J'ai une bonne idée de votre projet maintenant. 🎯 Pour qu'on puisse vous recontacter avec une proposition personnalisée, pouvez-vous me laisser vos coordonnées ?"
            : locale === 'ar'
            ? "رائع! لدي فكرة جيدة عن مشروعك الآن. 🎯 لكي نتمكن من التواصل معك بعرض مخصص، هل يمكنك ترك بيانات الاتصال الخاصة بك؟"
            : "Great! I have a good idea of your project now. 🎯 So we can get back to you with a personalized proposal, can you leave me your contact details?";

          setMessages(prev => [...prev, { type: 'ai', content: contactPrompt }]);
          setStage('contact');
        }, 1000);
      }, 1500);
    }
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleTextSubmit();
    }
  };

  // Handle contact form submission
  const handleContactSubmit = async () => {
    if (!contactData.name.trim() || !contactData.phone.trim()) return;

    const contactString = `${contactData.name} - ${contactData.phone}${contactData.email ? ` - ${contactData.email}` : ''}`;
    setMessages(prev => [...prev, { type: 'user', content: contactString }]);

    setIsTyping(true);
    setIsSubmitting(true);

    try {
      // Extract conversation for storage
      const conversationText = messages
        .map(m => `${m.type === 'ai' ? 'AI' : 'User'}: ${m.content}`)
        .join('\n');

      // Save to Firebase
      await addDoc(collection(db, "ai_onboarding_leads"), {
        name: contactData.name.trim(),
        email: contactData.email.trim(),
        phone: contactData.phone.trim(),
        conversation: conversationText,
        messageCount: messageCount,
        locale,
        source: "ai_onboarding",
        createdAt: serverTimestamp(),
        status: "new"
      });

      setTimeout(() => {
        setIsTyping(false);
        setIsSubmitting(false);
        const thankYou = locale === 'fr'
          ? "Parfait ! 🎉 Merci pour ces infos. Notre équipe va analyser votre projet et vous contactera dans les 24h avec une proposition sur mesure. À très vite !"
          : locale === 'ar'
          ? "ممتاز! 🎉 شكراً على هذه المعلومات. سيقوم فريقنا بتحليل مشروعك والتواصل معك خلال 24 ساعة مع عرض مخصص. إلى اللقاء قريباً!"
          : "Perfect! 🎉 Thanks for the info. Our team will analyze your project and contact you within 24h with a custom proposal. Talk soon!";

        setMessages(prev => [...prev, { type: 'ai', content: thankYou }]);
        setStage('complete');
      }, 1500);

    } catch (error) {
      console.error('Error saving to Firebase:', error);
      setIsTyping(false);
      setIsSubmitting(false);
    }
  };

  // Render chat input
  const renderChatInput = () => {
    if (stage === 'contact') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <input
            type="text"
            value={contactData.name}
            onChange={(e) => setContactData(prev => ({ ...prev, name: e.target.value }))}
            placeholder={locale === 'fr' ? "Votre nom *" : locale === 'ar' ? "اسمك *" : "Your name *"}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
            dir={isRTL ? 'rtl' : 'ltr'}
          />
          <input
            type="tel"
            value={contactData.phone}
            onChange={(e) => setContactData(prev => ({ ...prev, phone: e.target.value }))}
            placeholder={locale === 'fr' ? "Téléphone *" : locale === 'ar' ? "الهاتف *" : "Phone *"}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
            dir="ltr"
          />
          <input
            type="email"
            value={contactData.email}
            onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
            placeholder={locale === 'fr' ? "Email (optionnel)" : locale === 'ar' ? "البريد الإلكتروني (اختياري)" : "Email (optional)"}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
            dir="ltr"
          />
          <button
            onClick={handleContactSubmit}
            disabled={!contactData.name.trim() || !contactData.phone.trim() || isSubmitting}
            className="w-full px-6 py-3 bg-white text-black rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
          >
            {isSubmitting
              ? (locale === 'fr' ? 'Envoi...' : locale === 'ar' ? 'جاري الإرسال...' : 'Sending...')
              : (locale === 'fr' ? 'Envoyer mes coordonnées' : locale === 'ar' ? 'إرسال بياناتي' : 'Send my contact info')}
          </button>
        </motion.div>
      );
    }

    // Chat input for conversation
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex gap-3"
      >
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={locale === 'fr' ? "Tapez votre message..." : locale === 'ar' ? "اكتب رسالتك..." : "Type your message..."}
          className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
          dir={isRTL ? 'rtl' : 'ltr'}
          disabled={isTyping}
        />
        <button
          onClick={handleTextSubmit}
          disabled={!textInput.trim() || isTyping}
          className="px-4 py-3 bg-white text-black rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </motion.div>
    );
  };

  return (
    <div className={`fixed inset-0 bg-black z-[100] overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <AnimatePresence mode="wait">
        {/* Welcome Screen */}
        {stage === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="relative h-full flex flex-col items-center justify-center px-6"
          >
            {/* Logo/Character */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="mb-8"
            >
              <AICharacter size="large" />
            </motion.div>

            {/* Title with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center mb-4"
            >
              <span className="text-white">
                {locale === 'fr' ? 'Bienvenue chez' : locale === 'ar' ? 'مرحباً بك في' : 'Welcome to'}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 font-normal mt-2">
                Symloop
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg text-center max-w-md mb-12"
            >
              {locale === 'fr'
                ? 'Solutions Digitales d\'Excellence'
                : locale === 'ar'
                ? 'حلول رقمية متميزة'
                : 'Digital Solutions of Excellence'}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-4 w-full max-w-sm"
            >
              {/* AI Chat Button - Primary with animated gradient */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={startAIChat}
                className="relative group overflow-hidden px-8 py-5 rounded-2xl font-medium text-white shadow-2xl"
              >
                {/* Animated gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 animate-gradient-x"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>

                {/* Content */}
                <span className="relative flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="text-base">
                    {locale === 'fr'
                      ? 'Parler avec l\'IA'
                      : locale === 'ar'
                      ? 'تحدث مع الذكاء الاصطناعي'
                      : 'Talk with AI'}
                  </span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>

              {/* Continue Button - Secondary */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onSkip}
                className="px-8 py-4 text-white/70 font-medium rounded-xl transition-all duration-300 hover:text-white flex items-center justify-center gap-2"
              >
                <span>
                  {locale === 'fr'
                    ? 'Passer et continuer vers le site'
                    : locale === 'ar'
                    ? 'تخطي والمتابعة إلى الموقع'
                    : 'Skip and continue to website'}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* Chat Screen */}
        {(stage === 'chat' || stage === 'contact' || stage === 'complete') && (
          <motion.div
            key="chat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative h-full flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-4 p-6 border-b border-white/10">
              <AICharacter isTyping={isTyping} size="small" />
              <div>
                <h2 className="text-white font-medium">
                  {locale === 'fr' ? 'Assistant Symloop' : locale === 'ar' ? 'مساعد Symloop' : 'Symloop Assistant'}
                </h2>
                <p className="text-sm text-gray-400">
                  {isTyping
                    ? (locale === 'fr' ? 'En train d\'écrire...' : locale === 'ar' ? 'يكتب...' : 'Typing...')
                    : (locale === 'fr' ? 'En ligne' : locale === 'ar' ? 'متصل' : 'Online')}
                </p>
              </div>

              {stage !== 'complete' && (
                <button
                  onClick={onSkip}
                  className="ml-auto text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {locale === 'fr' ? 'Passer' : locale === 'ar' ? 'تخطي' : 'Skip'}
                </button>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.type === 'user'
                          ? 'bg-white text-black rounded-br-sm'
                          : 'bg-white/10 text-white rounded-bl-sm'
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 rounded-2xl rounded-bl-sm">
                    <TypingIndicator />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            {(stage === 'chat' || stage === 'contact') && messages.length > 0 && (
              <div className="p-6 border-t border-white/10">
                {renderChatInput()}
              </div>
            )}

            {/* Complete state - button to continue */}
            {stage === 'complete' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 border-t border-white/10"
              >
                <button
                  onClick={() => onComplete && onComplete(contactData)}
                  className="w-full px-8 py-4 bg-white text-black font-medium rounded-xl hover:bg-gray-100 transition-colors"
                >
                  {locale === 'fr'
                    ? 'Découvrir nos solutions'
                    : locale === 'ar'
                    ? 'اكتشف حلولنا'
                    : 'Discover our solutions'}
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
