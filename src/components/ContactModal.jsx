"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { X, Send, CheckCircle, Loader2 } from "lucide-react";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactModal({ isOpen, onClose, service, type = "devis" }) {
  const router = useRouter();
  const locale = router.locale || 'fr';

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Translations
  const translations = {
    fr: {
      title: type === "devis" ? "Demander un Devis" : "Consultation Gratuite",
      subtitle: type === "devis"
        ? "Recevez un devis personnalisé sous 24h"
        : "Réservez votre consultation gratuite avec nos experts",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      company: "Entreprise",
      message: "Message",
      messagePlaceholder: type === "devis"
        ? "Décrivez votre projet et vos besoins..."
        : "Quelles sont vos questions ou besoins ?",
      submit: type === "devis" ? "Envoyer la demande" : "Réserver ma consultation",
      submitting: "Envoi en cours...",
      success: "Demande envoyée avec succès !",
      successMessage: "Notre équipe vous contactera dans les plus brefs délais.",
      close: "Fermer",
      required: "Champs obligatoires",
      errorMessage: "Une erreur est survenue. Veuillez réessayer.",
      serviceLabel: "Service demandé"
    },
    en: {
      title: type === "devis" ? "Request a Quote" : "Free Consultation",
      subtitle: type === "devis"
        ? "Receive a personalized quote within 24h"
        : "Book your free consultation with our experts",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      message: "Message",
      messagePlaceholder: type === "devis"
        ? "Describe your project and needs..."
        : "What are your questions or needs?",
      submit: type === "devis" ? "Send request" : "Book my consultation",
      submitting: "Sending...",
      success: "Request sent successfully!",
      successMessage: "Our team will contact you shortly.",
      close: "Close",
      required: "Required fields",
      errorMessage: "An error occurred. Please try again.",
      serviceLabel: "Requested service"
    },
    ar: {
      title: type === "devis" ? "طلب عرض سعر" : "استشارة مجانية",
      subtitle: type === "devis"
        ? "احصل على عرض سعر مخصص خلال 24 ساعة"
        : "احجز استشارتك المجانية مع خبرائنا",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      company: "الشركة",
      message: "الرسالة",
      messagePlaceholder: type === "devis"
        ? "صف مشروعك واحتياجاتك..."
        : "ما هي أسئلتك أو احتياجاتك؟",
      submit: type === "devis" ? "إرسال الطلب" : "حجز استشارتي",
      submitting: "جاري الإرسال...",
      success: "تم إرسال الطلب بنجاح!",
      successMessage: "سيتواصل معك فريقنا في أقرب وقت.",
      close: "إغلاق",
      required: "الحقول المطلوبة",
      errorMessage: "حدث خطأ. يرجى المحاولة مرة أخرى.",
      serviceLabel: "الخدمة المطلوبة"
    }
  };

  const t = translations[locale] || translations.fr;
  const isRTL = locale === 'ar';

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setIsSuccess(false);
        setError("");
      }, 300);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Save to Firebase Firestore
      await addDoc(collection(db, "leads"), {
        ...formData,
        service: service || "General",
        type: type,
        locale: locale,
        source: "website",
        page: router.asPath,
        createdAt: serverTimestamp(),
        status: "new"
      });

      setIsSuccess(true);

      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (err) {
      console.error("Error saving lead:", err);
      setError(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`relative w-full max-w-lg bg-gray-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden ${isRTL ? 'rtl' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label={t.close}
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Success State */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.success}</h3>
                <p className="text-gray-400">{t.successMessage}</p>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div className="p-6 pb-4 border-b border-white/10">
                  <h2 className="text-2xl font-bold text-white">{t.title}</h2>
                  <p className="text-gray-400 mt-1">{t.subtitle}</p>
                  {service && (
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                      <span className="text-xs text-gray-400">{t.serviceLabel}:</span>
                      <span className="text-xs font-medium text-white">{service}</span>
                    </div>
                  )}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      {t.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder={t.name}
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        {t.email} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                        placeholder={t.email}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        {t.phone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                        placeholder={t.phone}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      {t.company}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder={t.company}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      {t.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                      placeholder={t.messagePlaceholder}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t.submit}
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * {t.required}
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
