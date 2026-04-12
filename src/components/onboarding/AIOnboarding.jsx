"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { X, ArrowRight, ArrowLeft, Sparkles, Send, Loader2 } from "lucide-react";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// ============================================================================
// SYMLOOP — AIOnboarding (editorial redesign)
//
// All logic preserved: GPT API calls, Firebase lead capture, 4-stage flow
// (welcome → chat → contact → complete), RTL support, message history.
//
// Visual redesign: removed cartoon SVG character, gradient backgrounds,
// rounded-2xl bubbles, glow orbs. Replaced with editorial typography,
// hairline borders, mono eyebrow, font-light headlines — matching the
// rest of the site.
// ============================================================================

const getGreeting = (locale) => {
  const greetings = {
    fr: "Bonjour. Je suis l'assistant Symloop. Décrivez votre projet en quelques phrases — je poserai les bonnes questions ensuite.",
    en: "Hello. I'm the Symloop assistant. Describe your project in a few sentences — I'll ask the right questions next.",
    ar: "مرحباً. أنا مساعد سيملوب. صف مشروعك في بضع جمل — سأطرح الأسئلة الصحيحة بعدها."
  };
  return greetings[locale] || greetings.en;
};

export default function AIOnboarding({ onComplete, onSkip }) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const locale = router.locale || 'en';
  const isRTL = locale === 'ar';

  const [stage, setStage] = useState('welcome');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '' });
  const [textInput, setTextInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ── GPT API call (unchanged) ──────────────────────────────────────
  const callGPT = async (userMessage) => {
    try {
      const newHistory = [...chatHistory, { role: 'user', content: userMessage }];
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newHistory, locale })
      });
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      const aiResponse = data.message;
      setChatHistory([...newHistory, { role: 'assistant', content: aiResponse }]);
      return aiResponse;
    } catch (error) {
      console.error('GPT Error:', error);
      const fallbacks = {
        fr: "Je comprends. Pouvez-vous m'en dire plus sur votre projet ?",
        en: "I see. Can you tell me more about your project?",
        ar: "فهمت. هل يمكنك إخباري المزيد عن مشروعك؟"
      };
      return fallbacks[locale] || fallbacks.en;
    }
  };

  const startAIChat = () => {
    setStage('chat');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const greeting = getGreeting(locale);
      setMessages([{ type: 'ai', content: greeting }]);
      setChatHistory([{ role: 'assistant', content: greeting }]);
    }, 800);
  };

  const handleTextSubmit = async () => {
    if (!textInput.trim() || isTyping) return;
    const userMessage = textInput.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setTextInput('');
    setIsTyping(true);
    setMessageCount(prev => prev + 1);

    const aiResponse = await callGPT(userMessage);
    setIsTyping(false);
    setMessages(prev => [...prev, { type: 'ai', content: aiResponse }]);

    if (messageCount >= 3) {
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          const contactPrompt = locale === 'fr'
            ? "J'ai une bonne idée de votre projet. Pour qu'on puisse vous recontacter avec une proposition, laissez-moi vos coordonnées."
            : locale === 'ar'
            ? "لدي فكرة جيدة عن مشروعك. لكي نتمكن من التواصل معك بعرض، اترك لي بيانات الاتصال."
            : "I have a good idea of your project. So we can follow up with a proposal, leave me your contact details.";
          setMessages(prev => [...prev, { type: 'ai', content: contactPrompt }]);
          setStage('contact');
        }, 800);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleTextSubmit();
    }
  };

  // ── Firebase submission (unchanged) ───────────────────────────────
  const handleContactSubmit = async () => {
    if (!contactData.name.trim() || !contactData.phone.trim()) return;
    const contactString = `${contactData.name} - ${contactData.phone}${contactData.email ? ` - ${contactData.email}` : ''}`;
    setMessages(prev => [...prev, { type: 'user', content: contactString }]);
    setIsTyping(true);
    setIsSubmitting(true);

    try {
      const conversationText = messages.map(m => `${m.type === 'ai' ? 'AI' : 'User'}: ${m.content}`).join('\n');
      await addDoc(collection(db, "ai_onboarding_leads"), {
        name: contactData.name.trim(),
        email: contactData.email.trim(),
        phone: contactData.phone.trim(),
        conversation: conversationText,
        messageCount,
        locale,
        source: "ai_onboarding",
        createdAt: serverTimestamp(),
        status: "new"
      });

      setTimeout(() => {
        setIsTyping(false);
        setIsSubmitting(false);
        const thankYou = locale === 'fr'
          ? "Merci. Notre équipe va analyser votre projet et vous contactera dans les 24 heures avec une proposition sur mesure."
          : locale === 'ar'
          ? "شكراً. سيقوم فريقنا بتحليل مشروعك والتواصل معك خلال 24 ساعة مع عرض مخصص."
          : "Thank you. Our team will analyze your project and contact you within 24 hours with a custom proposal.";
        setMessages(prev => [...prev, { type: 'ai', content: thankYou }]);
        setStage('complete');
      }, 1000);
    } catch (error) {
      console.error('Error saving to Firebase:', error);
      setIsTyping(false);
      setIsSubmitting(false);
    }
  };

  // ── Shared input class ────────────────────────────────────────────
  const inputClass = `w-full bg-transparent border border-white/[0.12] px-5 py-4 text-white text-base placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors ${isRTL ? 'text-right' : ''}`;

  return (
    <div className={`fixed inset-0 bg-black z-[100] overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>

      <AnimatePresence mode="wait">
        {/* ── Welcome Screen ─────────────────────────────────────── */}
        {stage === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            className="relative h-full flex flex-col items-center justify-center px-6"
          >
            {/* Close button */}
            <button
              onClick={onSkip}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>

            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="mb-10 flex items-center justify-center w-20 h-20 border border-white/[0.12]"
            >
              <Sparkles className="w-8 h-8 text-white/80" strokeWidth={1.5} />
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                {locale === 'fr' ? 'Assistant IA · Symloop' : locale === 'ar' ? 'مساعد ذكي · سيملوب' : 'AI Assistant · Symloop'}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-light text-center tracking-tight leading-[1.05] mb-6"
            >
              {locale === 'fr' ? 'Décrivez votre projet.' : locale === 'ar' ? 'صف مشروعك.' : 'Describe your project.'}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/50 text-center max-w-md mb-12"
            >
              {locale === 'fr'
                ? "Notre assistant analyse votre besoin et prépare une proposition en moins de 5 minutes."
                : locale === 'ar'
                ? "مساعدنا يحلل احتياجك ويحضّر عرضاً في أقل من 5 دقائق."
                : "Our assistant analyzes your need and prepares a proposal in under 5 minutes."}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 w-full max-w-sm"
            >
              <button
                onClick={startAIChat}
                className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
              >
                <Sparkles className="w-4 h-4" strokeWidth={1.75} />
                <span>
                  {locale === 'fr' ? 'Commencer' : locale === 'ar' ? 'ابدأ' : 'Start'}
                </span>
                {isRTL
                  ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.75} />
                  : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                }
              </button>

              <button
                onClick={onSkip}
                className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors py-3"
              >
                {locale === 'fr' ? 'Passer' : locale === 'ar' ? 'تخطي' : 'Skip'}
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* ── Chat Screen ────────────────────────────────────────── */}
        {(stage === 'chat' || stage === 'contact' || stage === 'complete') && (
          <motion.div
            key="chat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative h-full flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-9 h-9 border border-white/[0.12]">
                  <Sparkles className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-sm font-medium text-white">
                    {locale === 'fr' ? 'Assistant Symloop' : locale === 'ar' ? 'مساعد سيملوب' : 'Symloop Assistant'}
                  </h2>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                    {isTyping
                      ? (locale === 'fr' ? 'Écrit...' : locale === 'ar' ? 'يكتب...' : 'Typing...')
                      : (locale === 'fr' ? 'En ligne' : locale === 'ar' ? 'متصل' : 'Online')}
                  </p>
                </div>
              </div>

              {stage !== 'complete' && (
                <button onClick={onSkip} className="text-white/40 hover:text-white transition-colors">
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-5 py-4 text-sm leading-relaxed ${
                        message.type === 'user'
                          ? 'bg-white text-black'
                          : 'bg-white/[0.04] border border-white/[0.08] text-white/80'
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-white/[0.04] border border-white/[0.08] px-5 py-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.15s' }} />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            {(stage === 'chat' || stage === 'contact') && messages.length > 0 && (
              <div className="px-6 py-5 border-t border-white/[0.06]">
                {stage === 'contact' ? (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                    <input
                      type="text"
                      value={contactData.name}
                      onChange={(e) => setContactData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder={locale === 'fr' ? "Votre nom *" : locale === 'ar' ? "اسمك *" : "Your name *"}
                      className={inputClass}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                    <input
                      type="tel"
                      value={contactData.phone}
                      onChange={(e) => setContactData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder={locale === 'fr' ? "Téléphone *" : locale === 'ar' ? "الهاتف *" : "Phone *"}
                      className={inputClass}
                      dir="ltr"
                    />
                    <input
                      type="email"
                      value={contactData.email}
                      onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder={locale === 'fr' ? "Email (optionnel)" : locale === 'ar' ? "البريد الإلكتروني (اختياري)" : "Email (optional)"}
                      className={inputClass}
                      dir="ltr"
                    />
                    <button
                      onClick={handleContactSubmit}
                      disabled={!contactData.name.trim() || !contactData.phone.trim() || isSubmitting}
                      className="w-full flex items-center justify-center gap-3 bg-white text-black px-6 py-4 text-sm font-medium tracking-wide disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-colors"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /><span>{locale === 'fr' ? 'Envoi...' : locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span></>
                      ) : (
                        <><span>{locale === 'fr' ? 'Envoyer' : locale === 'ar' ? 'إرسال' : 'Send'}</span><ArrowRight className="w-4 h-4" strokeWidth={1.75} /></>
                      )}
                    </button>
                  </motion.div>
                ) : (
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={locale === 'fr' ? "Votre message..." : locale === 'ar' ? "رسالتك..." : "Your message..."}
                      className={`flex-1 ${inputClass}`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                      disabled={isTyping}
                    />
                    <button
                      onClick={handleTextSubmit}
                      disabled={!textInput.trim() || isTyping}
                      className="flex items-center justify-center w-14 bg-white text-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-colors"
                    >
                      <Send className="w-4 h-4" strokeWidth={1.75} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Complete state */}
            {stage === 'complete' && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="px-6 py-5 border-t border-white/[0.06]">
                <button
                  onClick={() => onComplete && onComplete(contactData)}
                  className="w-full flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  <span>{locale === 'fr' ? 'Voir le site' : locale === 'ar' ? 'عرض الموقع' : 'View site'}</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
