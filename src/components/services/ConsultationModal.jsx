import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import {
  X,
  Phone,
  MessageCircle,
  PhoneCall,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  User,
  Clock,
  Building2,
  Mail,
} from "lucide-react";

const PHONE = "+213 549 57 55 12";

const ConsultationModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const isRTL = router.locale === "ar";
  const locale = router.locale;
  const tx = (ar, en, fr) =>
    locale === "ar" ? ar : locale === "en" ? en : fr;

  const [selectedMethod, setSelectedMethod] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    time: "",
  });

  const contactMethods = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      desc: tx("أسرع طريقة للتواصل", "Fastest way to reach us", "Le moyen le plus rapide"),
      icon: MessageCircle,
      gradient: "from-emerald-400 to-green-500",
      ring: "ring-emerald-500/30",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      glow: "shadow-[0_0_24px_rgba(16,185,129,0.2)]",
      action: () => window.open("https://wa.me/213549575512", "_blank"),
    },
    {
      id: "viber",
      name: "Viber",
      desc: tx("تواصل عبر فايبر", "Chat via Viber", "Discutez via Viber"),
      icon: MessageCircle,
      gradient: "from-violet-400 to-purple-500",
      ring: "ring-violet-500/30",
      bg: "bg-violet-500/10",
      border: "border-violet-500/30",
      glow: "shadow-[0_0_24px_rgba(139,92,246,0.2)]",
      action: () => window.open("viber://chat?number=213549575512", "_blank"),
    },
    {
      id: "phone",
      name: tx("اتصال مباشر", "Direct Call", "Appel Direct"),
      desc: tx("تحدث مع فريقنا", "Speak with our team", "Parlez à notre équipe"),
      icon: PhoneCall,
      gradient: "from-blue-400 to-indigo-500",
      ring: "ring-blue-500/30",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      glow: "shadow-[0_0_24px_rgba(59,130,246,0.2)]",
      action: () => window.open("tel:+213549575512", "_blank"),
    },
  ];

  const timeOptions = [
    { value: "", label: tx("اختر الوقت المفضل", "Preferred time", "Heure préférée") },
    { value: "morning", label: tx("صباحاً (9:00 - 12:00)", "Morning (9:00 - 12:00)", "Matin (9h - 12h)") },
    { value: "afternoon", label: tx("بعد الظهر (12:00 - 17:00)", "Afternoon (12:00 - 17:00)", "Après-midi (12h - 17h)") },
    { value: "evening", label: tx("مساءً (17:00 - 20:00)", "Evening (17:00 - 20:00)", "Soirée (17h - 20h)") },
    { value: "anytime", label: tx("أي وقت", "Anytime", "N'importe quand") },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMethod) return;
    const method = contactMethods.find((m) => m.id === selectedMethod);
    if (method) method.action();
    onClose();
  };

  if (!isOpen) return null;

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl"
          onClick={(e) => e.stopPropagation()}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Animated border glow */}
          <div className="absolute -inset-[1px] rounded-3xl overflow-hidden z-0">
            <div
              className="absolute inset-[-80%]"
              style={{
                background: "conic-gradient(from 0deg, transparent 30%, rgba(99,102,241,0.3) 40%, rgba(147,51,234,0.3) 50%, transparent 60%)",
                animation: "rotate-border 4s linear infinite",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 bg-[#0a0a12] rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="relative px-7 pt-7 pb-5">
              {/* Subtle radial glow behind header */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full opacity-40" style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />

              <div className="relative flex items-start justify-between">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
                      {tx("استشارة مجانية", "Free Consultation", "Consultation Gratuite")}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-1.5">
                    {tx("احجز استشارتك", "Book Your Consultation", "Réservez Votre Consultation")}
                  </h2>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {tx(
                      "اختر طريقة التواصل المفضلة وأكمل بياناتك",
                      "Choose how you'd like to connect, then fill in your details",
                      "Choisissez votre mode de contact, puis complétez vos informations"
                    )}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 -mt-1 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-7 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-7 py-6 space-y-6">
              {/* Contact Methods */}
              <div>
                <label className="block text-xs font-medium text-white/30 uppercase tracking-wider mb-3">
                  {tx("طريقة التواصل", "Contact Method", "Mode de Contact")}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {contactMethods.map((method) => {
                    const IconComponent = method.icon;
                    const isSelected = selectedMethod === method.id;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedMethod(method.id)}
                        className={`relative group p-4 rounded-2xl border text-center transition-all duration-300 ${
                          isSelected
                            ? `${method.border} ${method.bg} ${method.glow}`
                            : "border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12]"
                        }`}
                      >
                        {/* Selected check */}
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className={`absolute -top-1.5 ${isRTL ? "-left-1.5" : "-right-1.5"} w-5 h-5 rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center`}
                          >
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </motion.div>
                        )}

                        <div className={`w-11 h-11 mx-auto mb-3 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center transition-transform duration-300 ${isSelected ? "scale-110" : "group-hover:scale-105"}`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className={`text-sm font-semibold mb-0.5 transition-colors ${isSelected ? "text-white" : "text-white/70"}`}>
                          {method.name}
                        </div>
                        <div className="text-[10px] text-white/30 leading-tight hidden sm:block">{method.desc}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Phone number display */}
                {selectedMethod && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <Phone className="w-3.5 h-3.5 text-white/30" />
                    <span className="text-sm text-white/50 font-mono tracking-wide">{PHONE}</span>
                  </motion.div>
                )}
              </div>

              {/* Form Fields */}
              <div className="space-y-3">
                <label className="block text-xs font-medium text-white/30 uppercase tracking-wider mb-1">
                  {tx("بياناتك", "Your Details", "Vos Informations")}
                </label>

                {/* Name */}
                <div className="relative group">
                  <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "right-4" : "left-4"} pointer-events-none`}>
                    <User className="w-4 h-4 text-white/20 group-focus-within:text-indigo-400/60 transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder={tx("الاسم الكامل", "Full name", "Nom complet")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full ${isRTL ? "pr-11 pl-4" : "pl-11 pr-4"} py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300`}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="relative group">
                  <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "right-4" : "left-4"} pointer-events-none`}>
                    <Phone className="w-4 h-4 text-white/20 group-focus-within:text-indigo-400/60 transition-colors" />
                  </div>
                  <input
                    type="tel"
                    placeholder={tx("+213 5XX XXX XXX", "+213 5XX XXX XXX", "+213 5XX XXX XXX")}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full ${isRTL ? "pr-11 pl-4" : "pl-11 pr-4"} py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300`}
                    dir="ltr"
                    required
                  />
                </div>

                {/* Email + Company row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative group">
                    <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "right-4" : "left-4"} pointer-events-none`}>
                      <Mail className="w-4 h-4 text-white/20 group-focus-within:text-indigo-400/60 transition-colors" />
                    </div>
                    <input
                      type="email"
                      placeholder={tx("البريد", "Email", "Email")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full ${isRTL ? "pr-11 pl-3" : "pl-11 pr-3"} py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300`}
                    />
                  </div>
                  <div className="relative group">
                    <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "right-4" : "left-4"} pointer-events-none`}>
                      <Building2 className="w-4 h-4 text-white/20 group-focus-within:text-indigo-400/60 transition-colors" />
                    </div>
                    <input
                      type="text"
                      placeholder={tx("الشركة", "Company", "Entreprise")}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full ${isRTL ? "pr-11 pl-3" : "pl-11 pr-3"} py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300`}
                    />
                  </div>
                </div>

                {/* Time select */}
                <div className="relative group">
                  <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "right-4" : "left-4"} pointer-events-none`}>
                    <Clock className="w-4 h-4 text-white/20 group-focus-within:text-indigo-400/60 transition-colors" />
                  </div>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className={`w-full ${isRTL ? "pr-11 pl-4" : "pl-11 pr-4"} py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300 appearance-none ${!formData.time ? "text-white/20" : "text-white"}`}
                    style={{ backgroundImage: "none" }}
                  >
                    {timeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#0a0a12] text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "left-4" : "right-4"} pointer-events-none`}>
                    <svg className="w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={!selectedMethod}
                whileHover={selectedMethod ? { scale: 1.015 } : {}}
                whileTap={selectedMethod ? { scale: 0.985 } : {}}
                className={`relative w-full group overflow-hidden rounded-xl py-4 font-semibold text-sm transition-all duration-500 ${
                  selectedMethod
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] bg-[length:200%_100%] hover:bg-[position:100%_0]"
                    : "bg-white/[0.06] text-white/25 cursor-not-allowed border border-white/[0.06]"
                }`}
              >
                {/* Shimmer */}
                {selectedMethod && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", animation: "shimmer 2s ease-in-out infinite" }} />
                  </div>
                )}
                <span className="relative z-10 flex items-center justify-center gap-2.5">
                  <Phone className="w-4.5 h-4.5" />
                  {tx("احجز استشارتك المجانية", "Book Free Consultation", "Réserver la Consultation")}
                  <ArrowIcon className="w-4 h-4" />
                </span>
              </motion.button>

              {/* Footer note */}
              <p className="text-center text-[11px] text-white/20 leading-relaxed">
                {tx(
                  "سنتواصل معك خلال ساعة عبر الطريقة المختارة",
                  "We'll reach out within 1 hour via your chosen method",
                  "Nous vous contacterons dans l'heure via votre méthode choisie"
                )}
              </p>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ConsultationModal;
