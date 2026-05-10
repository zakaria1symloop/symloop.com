"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, ArrowLeft, Building2, Briefcase, MessageSquare, Phone, Mail, Loader2 } from "lucide-react";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// ============================================================================
// SYMLOOP — CompanyContactSection (editorial redesign)
//
// Multi-step lead capture form saving to Firebase Firestore.
// All form logic, validation, Firebase integration, and RTL support are
// preserved exactly from the original. Only the visual presentation changed
// to match the editorial DNA (hairline borders, mono type, no gradients,
// no blur, no emojis, no rounded-3xl).
//
// Redesign changes:
//   - Title: engineering-firm tone, no gradient text
//   - Card: hairline-bordered, no rounded-3xl, no backdrop-blur
//   - Progress: numbered steps (01/05) instead of gradient bar
//   - Inputs: clean border, no blur, no rounded-xl
//   - Buttons: editorial (white fill or thin bordered), no rounded-xl
//   - Trust indicators: real facts as mono text, no emojis
//   - Background: clean black with hairline border-t, no orbs
// ============================================================================

const WHATSAPP_URL = 'https://wa.me/213549575512';

export default function CompanyContactSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    company: "",
    sector: "",
    need: "",
    phone: "",
    email: "",
  });
  const [success, setSuccess] = useState(false);
  const isRTL = router.locale === 'ar';

  const steps = [
    { icon: Building2, title: t('companyContact.steps.company.title'), subtitle: t('companyContact.steps.company.subtitle') },
    { icon: Briefcase, title: t('companyContact.steps.sector.title'), subtitle: t('companyContact.steps.sector.subtitle') },
    { icon: MessageSquare, title: t('companyContact.steps.need.title'), subtitle: t('companyContact.steps.need.subtitle') },
    { icon: Phone, title: t('companyContact.steps.contact.title'), subtitle: t('companyContact.steps.contact.subtitle') },
    { icon: Mail, title: t('companyContact.steps.email.title'), subtitle: t('companyContact.steps.email.subtitle') }
  ];

  const nextStep = () => { if (step < steps.length - 1) setStep(prev => prev + 1); };
  const prevStep = () => { if (step > 0) setStep(prev => prev - 1); };
  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); setSubmitError(""); };
  const validateStep = () => { const field = Object.keys(formData)[step]; return formData[field]?.trim() !== ""; };

  const handleSubmit = async () => {
    if (!validateStep()) { setSubmitError(t('companyContact.errors.requiredField')); return; }
    setIsSubmitting(true);
    setSubmitError("");
    try {
      await addDoc(collection(db, "company_inquiries"), {
        company: formData.company.trim(),
        sector: formData.sector.trim(),
        need: formData.need.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        type: "company_inquiry",
        source: "homepage",
        locale: router.locale,
        createdAt: serverTimestamp(),
        status: "new"
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setStep(0);
        setFormData({ company: "", sector: "", need: "", phone: "", email: "" });
      }, 3000);
    } catch (error) {
      console.error('Contact submission error:', error);
      if (error.message.includes('409')) setSubmitError(t('companyContact.errors.duplicateEmail'));
      else if (error.message.includes('422')) setSubmitError(t('companyContact.errors.invalidData'));
      else if (error.message.includes('Network')) setSubmitError(t('companyContact.errors.networkError'));
      else setSubmitError(error.message || t('companyContact.errors.generalError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: isRTL ? -30 : 30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isRTL ? 30 : -30 }
  };

  // Shared input class — editorial: clean border, no blur, no rounded-xl
  const inputClass = `w-full bg-transparent border border-white/[0.12] px-5 py-4 text-white text-base placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors ${isRTL ? 'text-right' : ''}`;

  return (
    <section
      id="company-contact-section"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="bg-black text-white border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* ── Left: headline + context ─────────────────────────── */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('companyContact.badge')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </div>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] mb-8">
                {t('companyContact.title')}
              </h2>

              <p className="text-lg text-white/55 leading-relaxed mb-12 max-w-md">
                {t('companyContact.description')}
              </p>

              {/* Direct contact — always visible alongside the form */}
              <div className="space-y-4 pt-8 border-t border-white/[0.06]">
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/35 mb-6">
                  {isRTL ? '— أو تواصل مباشرة' : router.locale === 'en' ? '— Or reach out directly' : '— Ou contactez-nous directement'}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Phone className="w-4 h-4 text-white/50" strokeWidth={1.5} />
                    <div>
                      <div className="text-sm text-white">WhatsApp</div>
                      <div className="font-mono text-[11px] text-white/40">+213 549 57 55 12</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
                </a>

                <a
                  href="mailto:contact@symloop.com"
                  className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Mail className="w-4 h-4 text-white/50" strokeWidth={1.5} />
                    <div>
                      <div className="text-sm text-white">Email</div>
                      <div className="font-mono text-[11px] text-white/40">contact@symloop.com</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Right: multi-step form ───────────────────────────── */}
          <div className="lg:col-span-7">
            <motion.div
              key={`form-${router.locale}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border border-white/[0.08] bg-white/[0.015] p-8 lg:p-12"
            >
              <AnimatePresence>
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-white/80 mb-8" strokeWidth={1} />
                    <h3 className="text-2xl font-light tracking-tight mb-3">
                      {t('companyContact.success.title')}
                    </h3>
                    <p className="text-white/50 text-base">
                      {t('companyContact.success.message')}
                    </p>
                  </motion.div>
                ) : (
                  <div>
                    {/* Step indicator — mono numbered */}
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-2xl lg:text-3xl font-light text-white">
                          {String(step + 1).padStart(2, '0')}
                        </span>
                        <span className="font-mono text-[11px] text-white/30">/</span>
                        <span className="font-mono text-[11px] text-white/30">
                          {String(steps.length).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Step dots */}
                      <div className="flex items-center gap-2">
                        {steps.map((_, i) => (
                          <div
                            key={i}
                            className={`h-px transition-all duration-300 ${
                              i <= step ? 'w-6 bg-white' : 'w-3 bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Step header */}
                    <div className="mb-8">
                      <h3 className="text-xl lg:text-2xl font-light tracking-tight text-white mb-2">
                        {steps[step].title}
                      </h3>
                      <p className="text-sm text-white/45">
                        {steps[step].subtitle}
                      </p>
                    </div>

                    {/* Error */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 border border-red-500/30 text-red-400 text-sm"
                      >
                        {submitError}
                      </motion.div>
                    )}

                    {/* Form fields */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        variants={stepVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.25 }}
                      >
                        {step === 0 && (
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder={t('companyContact.form.companyName.placeholder')}
                            dir={isRTL ? 'rtl' : 'ltr'}
                            autoFocus
                          />
                        )}

                        {step === 1 && (
                          <select
                            name="sector"
                            value={formData.sector}
                            onChange={handleChange}
                            className={inputClass}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          >
                            <option value="" className="bg-black">{t('companyContact.form.sector.placeholder')}</option>
                            <option value="industrie" className="bg-black">{t('companyContact.form.sector.options.industry')}</option>
                            <option value="commerce" className="bg-black">{t('companyContact.form.sector.options.commerce')}</option>
                            <option value="services" className="bg-black">{t('companyContact.form.sector.options.services')}</option>
                            <option value="sante" className="bg-black">{t('companyContact.form.sector.options.health')}</option>
                            <option value="education" className="bg-black">{t('companyContact.form.sector.options.education')}</option>
                            <option value="finance" className="bg-black">{t('companyContact.form.sector.options.finance')}</option>
                            <option value="immobilier" className="bg-black">{t('companyContact.form.sector.options.realEstate')}</option>
                            <option value="transport" className="bg-black">{t('companyContact.form.sector.options.transport')}</option>
                            <option value="autre" className="bg-black">{t('companyContact.form.sector.options.other')}</option>
                          </select>
                        )}

                        {step === 2 && (
                          <textarea
                            name="need"
                            value={formData.need}
                            onChange={handleChange}
                            rows="5"
                            className={`${inputClass} resize-none`}
                            placeholder={t('companyContact.form.need.placeholder')}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          />
                        )}

                        {step === 3 && (
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder={t('companyContact.form.phone.placeholder')}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          />
                        )}

                        {step === 4 && (
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder={t('companyContact.form.email.placeholder')}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className={`flex items-center justify-between mt-10 pt-8 border-t border-white/[0.06] ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <button
                        type="button"
                        onClick={prevStep}
                        disabled={step === 0}
                        className={`flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors ${
                          step === 0
                            ? 'text-white/15 cursor-not-allowed'
                            : 'text-white/50 hover:text-white'
                        }`}
                      >
                        {isRTL
                          ? <><span>{t('companyContact.form.navigation.previous')}</span><ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} /></>
                          : <><ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} /><span>{t('companyContact.form.navigation.previous')}</span></>
                        }
                      </button>

                      {step < steps.length - 1 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!validateStep()}
                          className={`flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-wide transition-all ${
                            validateStep()
                              ? 'bg-white text-black hover:bg-white/90'
                              : 'bg-white/10 text-white/30 cursor-not-allowed'
                          }`}
                        >
                          {isRTL
                            ? <><ArrowLeft className="w-4 h-4" strokeWidth={1.75} /><span>{t('companyContact.form.navigation.next')}</span></>
                            : <><span>{t('companyContact.form.navigation.next')}</span><ArrowRight className="w-4 h-4" strokeWidth={1.75} /></>
                          }
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={!validateStep() || isSubmitting}
                          className={`flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-wide transition-all ${
                            validateStep() && !isSubmitting
                              ? 'bg-white text-black hover:bg-white/90'
                              : 'bg-white/10 text-white/30 cursor-not-allowed'
                          }`}
                        >
                          {isSubmitting ? (
                            <><Loader2 className="w-4 h-4 animate-spin" /><span>{t('companyContact.form.navigation.submitting')}</span></>
                          ) : (
                            isRTL
                              ? <><ArrowLeft className="w-4 h-4" strokeWidth={1.75} /><span>{t('companyContact.form.navigation.submit')}</span></>
                              : <><span>{t('companyContact.form.navigation.submit')}</span><ArrowRight className="w-4 h-4" strokeWidth={1.75} /></>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
