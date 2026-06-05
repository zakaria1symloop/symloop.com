"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  X,
  Send,
  Bot,
  Loader2,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  ChevronDown,
  Minimize2,
  Maximize2,
  ExternalLink,
  Play,
  Check,
  ArrowRight,
  ArrowLeft,
  Code,
  Smartphone,
  Globe,
  Server,
  Shield,
  Zap,
  Award,
  Users,
  TrendingUp,
  Clock,
  Star,
  Cpu,
  Layers,
  Palette,
  Box
} from "lucide-react";

// Dynamic import for Three.js fluid background (no SSR)
const FluidBackground = dynamic(() => import('../three/FluidBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
});

// --- Placeholder Typing Hook with SEO-focused placeholders ---
function useTypingPlaceholder() {
  const { t } = useTranslation('common');
  
  const placeholders = useMemo(() => [
    t('search.placeholder1'),
    t('search.placeholder2'),
    t('search.placeholder3'),
    t('search.placeholder4')
  ], [t]);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const waitingTime = 2000;

  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = placeholders[index];

    if (subIndex === current.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), waitingTime);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % placeholders.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, placeholders]);

  useEffect(() => {
    setPlaceholder(placeholders[index].substring(0, subIndex));
  }, [subIndex, index, placeholders]);

  return placeholder;
}


// Value proposition cards with MENA region-focused content
const ValueCard = ({ icon: Icon, title, description, delay = 0, gradient }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
    whileHover={{ 
      scale: 1.03, 
      y: -6,
      boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
      filter: "brightness(1.05)"
    }}
    whileTap={{ scale: 0.98 }}
    className="group relative bg-black border-2 border-transparent bg-gradient-to-r from-white/12 via-black to-white/12 p-[2px] rounded-2xl hover:from-white/20 hover:via-white/3 hover:to-white/20 transition-all duration-600 cursor-pointer shadow-md hover:shadow-xl"
  >
    <div className="bg-black rounded-2xl p-6 h-full relative overflow-hidden">
      {/* Premium shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out"></div>
      
      <div className="flex items-start gap-5 relative z-10">
        <div className="p-4 rounded-2xl group-hover:scale-115 transition-all duration-500 border-2 border-white/25 bg-white/8 group-hover:border-white/40 group-hover:bg-white/15 shadow-inner">
          <Icon className="w-7 h-7 text-white group-hover:drop-shadow-md transition-all duration-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium text-lg mb-3 group-hover:text-white/95 transition-colors duration-500">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Premium Minimal Service Cards
const PremiumServiceCard = ({ service, isSelected, onSelect, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      <motion.button
        onClick={() => onSelect(service)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full h-24 p-4 rounded-xl transition-all duration-300 relative overflow-hidden group border ${
          isSelected
            ? 'border-white/30 bg-gradient-to-br from-white/10 to-white/5 shadow-xl'
            : 'border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-white/20 hover:bg-white/10'
        }`}
      >
        {/* Premium gradient overlay for selected state */}
        {isSelected && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
        )}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center space-y-2">
            <h3 className={`font-medium text-base transition-colors duration-300 ${
              isSelected ? 'text-white' : 'text-white/90 group-hover:text-white'
            }`}>
              {service.name}
            </h3>
            <p className={`text-sm transition-colors duration-300 ${
              isSelected ? 'text-white/70' : 'text-white/50 group-hover:text-white/70'
            }`}>
              {service.price}
            </p>
          </div>
        </div>

        {/* Minimal selection indicator */}
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full"
          />
        )}
      </motion.button>
    </motion.div>
  );
};

const ServiceSelector = ({ onServiceSelect, selectedService }) => {
  const { t } = useTranslation('common');
  
  const services = [
    { 
      id: 'web', 
      icon: Globe, 
      name: t('hero.services.web.name'), 
      price: t('hero.services.web.price'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'mobile', 
      icon: Smartphone, 
      name: t('hero.services.mobile.name'), 
      price: t('hero.services.mobile.price'),
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'erp', 
      icon: Server, 
      name: t('hero.services.erp.name'), 
      price: t('hero.services.erp.price'),
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'ai', 
      icon: Cpu, 
      name: t('hero.services.ai.name'), 
      price: t('hero.services.ai.price'),
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <PremiumServiceCard
          key={service.id}
          service={service}
          isSelected={selectedService?.id === service.id}
          onSelect={onServiceSelect}
          index={index}
        />
      ))}
    </div>
  );
};

// Enhanced animated counter with better performance
function AnimatedCounter({ end, suffix, label, icon, duration = 2000, className = "", gradient = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  const ref = (node) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(node);
    }
  };

  if (className) {
    return (
      <div ref={ref} className={className}>
        {count.toLocaleString()}
        <span className="text-gray-400 font-thin">{suffix}</span>
      </div>
    );
  }

  const Icon = icon;
  return (
    <motion.div
      ref={ref}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        boxShadow: "0 25px 60px rgba(255, 255, 255, 0.15)",
        filter: "brightness(1.1)"
      }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-black border-2 border-transparent bg-gradient-to-r from-white/15 via-black to-white/15 p-[2px] rounded-3xl hover:from-white/25 hover:via-white/5 hover:to-white/25 transition-all duration-700 group cursor-pointer shadow-lg hover:shadow-2xl"
    >
      <div className="bg-black rounded-3xl p-8 h-full relative overflow-hidden">
        {/* Premium shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        
        <div className="w-14 h-14 rounded-2xl border-2 border-white/30 mb-6 flex items-center justify-center group-hover:scale-125 group-hover:border-white/50 transition-all duration-500 bg-white/10 group-hover:bg-white/20 shadow-inner">
          <Icon className="w-7 h-7 text-white group-hover:drop-shadow-lg transition-all duration-500" />
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-light text-white group-hover:text-white/90 transition-colors duration-500">
            {count.toLocaleString()}
            <span className="text-gray-400 font-thin group-hover:text-gray-300 transition-colors duration-500">{suffix}</span>
          </div>
          <p className="text-sm text-gray-400 font-light group-hover:text-gray-300 transition-colors duration-500">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ChatBot Modal Component (keeping existing functionality but enhanced)
const ChatBotModal = ({ isOpen, onClose, initialMessage = "", isRTL = false, router }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize chat session with MENA region-focused welcome

  // Auto scroll
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, isMinimized]);

  const handleQuickReply = (reply) => {
    const cleanReply = reply.replace(/[🌐📱💼💰📞🏢]/g, '').trim();
    handleSendMessage(cleanReply);
  };

  // Enhanced fallback with MENA region-specific responses
  const getFallbackResponse = (message) => {
    const lowercaseMsg = message.toLowerCase();
    
    if (lowercaseMsg.includes('site') || lowercaseMsg.includes('web') || lowercaseMsg.includes('ecommerce')) {
      return `🌐 **Développement Sites Web Professionnel région MENA**

💎 **Nos Solutions Web** :
• Sites vitrine responsive (60k-150k DA)
• E-commerce CIB/Edahabia (120k-500k DA)  
• Portails métiers (200k-800k DA)
• Applications web complexes (300k-2M DA)

🚀 **Inclus dans tous nos sites** :
✅ Design responsive (mobile-first)
✅ SEO optimisé pour la région MENA
✅ Hébergement local sécurisé
✅ Maintenance & support 12 mois
✅ Formation de vos équipes

📍 **Interventions** : région MENA - Maroc, Tunisie, Émirats, Arabie Saoudite
📞 **Contact direct** : +213 549 575 512`;
    }
    
    if (lowercaseMsg.includes('mobile') || lowercaseMsg.includes('app') || lowercaseMsg.includes('android') || lowercaseMsg.includes('ios')) {
      return `📱 **Applications Mobile Native & Hybrides**

💡 **Technologies Maîtrisées** :
• React Native (iOS/Android)
• Flutter (Google)
• Développement natif 
• Progressive Web Apps (PWA)

💰 **Tarifs Applications Mobile** :
• App simple (180k-400k DA)
• App avancée (500k-1M DA)  
• App enterprise (1M-2.5M DA)
• Maintenance (15k DA/mois)

🎯 **Spécialités région MENA** :
✅ Intégration paiements mobiles MENA
✅ Géolocalisation région MENA
✅ Mode hors-ligne
✅ Publication App Store/Play Store
✅ Analytics & crash reporting

📞 **Consultation gratuite** : +213 549 575 512`;
    }
    
    if (lowercaseMsg.includes('erp') || lowercaseMsg.includes('crm') || lowercaseMsg.includes('gestion') || lowercaseMsg.includes('entreprise')) {
      return `💼 **ERP/CRM Sur Mesure pour Entreprises région MENA**

🏭 **Modules Disponibles** :
• Gestion commerciale & stocks
• Comptabilité conforme fiscalité DZ
• Paie & ressources humaines
• Production & qualité
• Business Intelligence

💰 **Investissement ERP** :
• PME (500k-1.5M DA)
• Grandes entreprises (2M-5M DA)
• Modules additionnels (100k-500k DA)

🌍 **Conformité Réglementaire région MENA** :
✅ Facturation électronique région MENA
✅ Déclarations fiscales automatisées  
✅ Normes comptables région MENA
✅ Multi-devises (DA/€/$)
✅ Sauvegarde sécurisée locale

📈 **ROI Moyen** : 300% en 18 mois
📞 **Démo personnalisée** : +213 549 575 512`;
    }
    
    if (lowercaseMsg.includes('prix') || lowercaseMsg.includes('tarif') || lowercaseMsg.includes('devis') || lowercaseMsg.includes('coût')) {
      return `💰 **Tarifs Transparents - Adaptés au Marché région MENA**

🌐 **Sites Web** :
• Landing page : 60k-120k DA
• Site vitrine : 100k-300k DA  
• E-commerce : 150k-600k DA
• Portail métier : 300k-1.2M DA

📱 **Applications Mobile** :
• App basique : 180k-400k DA
• App avancée : 500k-1M DA
• App enterprise : 1M-2.5M DA

💼 **Solutions Entreprise** :
• CRM simple : 300k-800k DA
• ERP complet : 800k-3M DA
• Infrastructure IT : 500k-2M DA

🎁 **Offres Incluses** :
✅ Consultation & analyse gratuite
✅ Design & maquettes inclus
✅ Tests & recette complete
✅ Formation équipes
✅ Support 12 mois offert
✅ Hébergement 1ère année

💳 **Facilités de Paiement** : 3 à 12 mensualités
📞 **Devis personnalisé sous 24h** : +213 549 575 512`;
    }
    
    if (lowercaseMsg.includes('contact') || lowercaseMsg.includes('appel') || lowercaseMsg.includes('commercial') || lowercaseMsg.includes('expert')) {
      return `📞 **Contactez nos Experts IT région MENA**

🏢 **Symloop Technology MENA** - Leader depuis 2012
📍 **Siège social** : Alger, région MENA
🌍 **Couverture** : région MENA complète

📞 **Contacts Directs** :
• WhatsApp/Tél : **+213 549 575 512**
• Email : **contact@symloop.com**
• Site web : **symloop.com**

👥 **Équipe Commerciale** :
• Ahmed BENALI - Directeur Commercial
• Fatima KACI - Chef de projet
• Karim BOUALI - Expert technique

🕐 **Horaires** :
• Lun-Jeu : 8h-18h
• Vendredi : 8h-12h  
• Support urgent : 24h/7j

🚗 **Déplacements** : Gratuits dans un rayon de 100km
✈️ **Missions** : Toute la région MENA sur devis

💬 **Réponse garantie** : Moins de 2h en jours ouvrés`;
    }
    
    return `🤖 **Assistant Symloop - Votre Partenaire Digital région MENA**

Merci pour votre message concernant "${message}".

🏆 **Symloop en chiffres** :
• 5+ années d'expérience
• 70+ projets réalisés
• 50+ clients satisfaits
• 98% taux de satisfaction
• Équipe de 15+ experts

🎯 **Nos Expertises** :
💻 Développement web & e-commerce
📱 Applications mobiles natives
🏭 ERP/CRM sur mesure  
☁️ Cloud & infrastructure
🔒 Cybersécurité & conformité

🌍 **Pourquoi Symloop MENA ?**
✅ Expertise technique pointue
✅ Compréhension du marché MENA
✅ Support local région MENA
✅ Tarifs adaptés à la région MENA
✅ Conformité réglementaire

Pour une réponse détaillée à votre besoin spécifique :
📞 **+213 549 575 512** (WhatsApp/Appel)
📧 **contact@symloop.com**

Ou continuez la discussion ici ! 💬`;
  };

  const sendToChatGPT = async (userMessage) => {
    // Use fallback responses for chat
    return getFallbackResponse(userMessage);
  };

  const handleSendMessage = useCallback(async (messageText = inputMessage) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1200));
    const botResponse = await sendToChatGPT(messageText);

    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',  
      content: botResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);

    // Enhanced quick replies based on context
    setTimeout(() => {
      let quickReplies = [];
      
      if (botResponse.includes('site') || botResponse.includes('web')) {
        quickReplies = ["💰 Tarifs sites web", "🎨 Voir portfolio", "📞 Parler à un expert"];
      } else if (botResponse.includes('mobile') || botResponse.includes('app')) {
        quickReplies = ["📱 Démo applications", "💰 Coûts développement", "⚡ Délais réalisation"];
      } else if (botResponse.includes('erp') || botResponse.includes('crm')) {
        quickReplies = ["🏭 Solutions métiers", "📊 Modules disponibles", "📈 ROI & bénéfices"];
      } else if (botResponse.includes('contact') || botResponse.includes('WhatsApp')) {
        quickReplies = ["📱 WhatsApp maintenant", "📧 Email commercial", "📅 Planifier RDV"];
      } else {
        quickReplies = ["🌐 Sites web", "📱 Apps mobiles", "💼 Solutions ERP", "💰 Devis gratuit"];
      }

      if (quickReplies.length > 0) {
        setMessages(prev => [...prev, {
          id: Date.now() + 2,
          type: 'quick-replies',
          options: quickReplies,
          timestamp: new Date()
        }]);
      }
    }, 800);
  }, [inputMessage, sessionId]);

  // Initialize chat session with MENA region-focused welcome
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const newSessionId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setSessionId(newSessionId);
      
      const welcomeMessage = {
        id: 1,
        type: 'bot',
        content: router.locale === 'en' ?
          `🌍 Hello! Ahmed here, Symloop Technology commercial expert!

🔥 Perfect timing! You're in the right place!

🏆 Symloop - IT Excellence in MENA:
✅ 70+ successful projects
✅ Trusted clients across MENA region
✅ Proven ROI and results
✅ Client satisfaction guaranteed

💡 Let's talk about YOUR success:
🌐 E-commerce site that converts?
📱 Mobile app that generates revenue?
💼 ERP system that saves time?

🎁 SPECIAL OFFER: Free audit + strategy!

📞 WhatsApp me NOW: +213 549 575 512
⏰ Only 3 slots available this week!`
          : isRTL ? 
          `🌍 أهلاً وسهلاً ! أحمد، خبير تجاري في سيمبلوب تكنولوجي هنا!

🔥 تهانينا ! وصلت في الوقت المناسب !

🏆 سيمبلوب - التميز في تقنية المعلومات في منطقة MENA:
✅ 70+ مشروع ناجح
✅ عملاء موثوقون في منطقة MENA
✅ عائد استثمار مثبت ونتائج ملموسة
✅ ضمان رضا العملاء

💡 دعنا نتحدث عن نجاحك :
🌐 موقع تجارة إلكترونية يحقق المبيعات ؟
📱 تطبيق موبايل يولد الأرباح ؟
💼 نظام ERP يوفر الوقت ؟

🎁 عرض خاص : تدقيق + استراتيجية مجاناً !

📞 راسلني على واتساب الآن : 213 549 575 512+
⏰ 3 مواعيد متاحة فقط هذا الأسبوع !` 
          : 
          `🌍 Ahlan wa sahlan ! Ahmed, expert commercial Symloop ici !

🔥 Félicitations ! Vous tombez au BON moment !

🏆 Symloop - Excellence IT dans la région MENA :
✅ 70+ projets réussis
✅ Clients de confiance dans la région MENA
✅ ROI prouvé et résultats concrets
✅ Satisfaction client garantie

💡 Parlons de VOTRE succès :
🌐 Site e-commerce qui convertit ?
📱 App mobile qui génère du CA ?
💼 ERP qui fait gagner du temps ?

🎁 OFFRE SPÉCIALE : Audit + stratégie GRATUIT !

📞 WhatsApp moi MAINTENANT : +213 549 575 512
⏰ Seulement 3 créneaux dispo cette semaine !`,
        timestamp: new Date()
      };
      
      setMessages([welcomeMessage]);

      if (initialMessage) {
        setTimeout(() => {
          // Call handleSendMessage directly to avoid dependency loop
          const sendInitialMessage = async () => {
            if (!initialMessage.trim()) return;

            const userMessage = {
              id: Date.now(),
              type: 'user',
              content: initialMessage,
              timestamp: new Date()
            };

            setMessages(prev => [...prev, userMessage]);
            setIsTyping(true);

            await new Promise(resolve => setTimeout(resolve, 1200));
            const botResponse = await sendToChatGPT(initialMessage);

            const botMessage = {
              id: Date.now() + 1,
              type: 'bot',  
              content: botResponse,
              timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
          };
          
          sendInitialMessage();
        }, 1500);
      } else {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: 2,
            type: 'quick-replies',
            options: router.locale === 'en' ? [
              "🔥 E-commerce that sells",
              "📱 Profitable mobile app", 
              "💼 ERP that saves time",
              "💰 EXPRESS quote",
              "📞 Call Ahmed now",
              "🏆 Client success stories"
            ] : isRTL ? [
              "🌐 موقع تجارة إلكترونية",
              "📱 تطبيق موبايل",
              "💼 نظام إدارة الشركة", 
              "💰 طلب عرض سعر",
              "📞 التحدث مع خبير",
              "🏆 أعمالنا المميزة"
            ] : [
              "🔥 Site e-commerce qui vend",
              "📱 App mobile rentable", 
              "💼 ERP qui fait gagner",
              "💰 Devis EXPRESS",
              "📞 Ahmed au téléphone",
              "🏆 Succès clients"
            ],
            timestamp: new Date()
          }]);
        }, 1000);
      }
    }
  }, [isOpen, initialMessage, messages.length]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={`fixed ${isMinimized ? 'bottom-4 right-4 w-80' : 'inset-0 sm:inset-4'} z-50 ${!isMinimized && 'flex items-center justify-center p-4'}`}
      >
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
        )}

        <motion.div
          layout
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 ${
            isMinimized 
              ? 'w-full h-[70px]' 
              : 'relative w-full max-w-sm h-[500px] sm:h-[600px]'
          }`}
        >
          {/* Simplified Header */}
          <div className="bg-black text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center relative">
                <Bot className="w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
              </div>
              <div>
                <h3 className="font-semibold">
                  {router.locale === 'en' ? 'Symloop Assistant 🌍' : isRTL ? 'مساعد سيمبلوب 🌍' : 'Assistant Symloop 🌍'}
                </h3>
                {!isMinimized && (
                  <p className="text-xs text-gray-300 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    {router.locale === 'en' ? 'Online • MENA IT Expert' : isRTL ? 'متصل • خبير تكنولوجيا المعلومات منطقة الشرق الأوسط' : 'En ligne • Expert IT région MENA'}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100%-140px)] bg-gray-50">
                {messages.map((message) => (
                  <div key={message.id}>
                    {message.type === 'user' ? (
                      <motion.div
                        initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex justify-end"
                      >
                        <div className={`max-w-[80%] bg-black text-white px-4 py-3 shadow-lg ${
                          isRTL ? 'rounded-2xl rounded-bl-sm' : 'rounded-2xl rounded-br-sm'
                        }`}>
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <p className="text-xs text-gray-300 mt-1 opacity-80">
                            {message.timestamp.toLocaleTimeString(isRTL ? 'ar-DZ' : 'fr-FR', { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </motion.div>
                    ) : message.type === 'bot' ? (
                      <motion.div
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className={`max-w-[80%] bg-white px-4 py-3 shadow-lg border border-gray-100 ${
                          isRTL ? 'rounded-2xl rounded-br-sm' : 'rounded-2xl rounded-bl-sm'
                        }`}>
                          <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">{message.content}</p>
                          <p className={`text-xs text-gray-500 mt-2 flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <Clock className="w-3 h-3" />
                            {message.timestamp.toLocaleTimeString(isRTL ? 'ar-DZ' : 'fr-FR', { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </motion.div>
                    ) : message.type === 'quick-replies' ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-2 justify-center my-4"
                      >
                        {message.options.map((option, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => handleQuickReply(option)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700 transition-all duration-200 shadow-sm"
                          >
                            {option}
                          </motion.button>
                        ))}
                      </motion.div>
                    ) : null}
                  </div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-lg border border-gray-100">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Enhanced Input Area */}
              <div className="border-t bg-white p-4">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={router.locale === 'en' ? 'Describe your digital project...' : isRTL ? 'صف مشروعك الرقمي...' : 'Décrivez votre projet digital...'}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50 text-gray-800 placeholder-gray-500"
                    disabled={isTyping}
                  />
                  <motion.button
                    onClick={() => handleSendMessage()}
                    disabled={!inputMessage.trim() || isTyping}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                  >
                    {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  </motion.button>
                </div>
                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>{router.locale === 'en' ? 'Symloop AI • Instant replies 24/7 • MENA 🌍' : isRTL ? 'سيمبلوب الذكي • ردود فورية 24/7 • منطقة الشرق الأوسط وشمال أفريقيا 🌍' : 'Symloop AI • Réponses instantanées 24/7 • région MENA 🌍'}</span>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Contact Modal Component for Free Consultation
const ContactModal = ({ isOpen, onClose, isRTL = false, router }) => {
  if (!isOpen) return null;

  const contactOptions = [
    {
      icon: MessageCircle,
      title: router.locale === 'en' ? 'WhatsApp' : isRTL ? 'واتساب' : 'WhatsApp',
      subtitle: router.locale === 'en' ? 'Instant messaging' : isRTL ? 'رسائل فورية' : 'Message instantané',
      action: () => window.open('https://wa.me/213549575512', '_blank'),
      color: 'bg-black border-2 border-transparent bg-gradient-to-r from-white via-gray-300 to-white p-[2px]',
      innerColor: 'bg-black',
      hoverColor: 'hover:from-white hover:via-gray-200 hover:to-white'
    },
    {
      icon: Phone,
      title: router.locale === 'en' ? 'Phone Call' : isRTL ? 'مكالمة هاتفية' : 'Appel téléphonique',
      subtitle: router.locale === 'en' ? 'Direct call' : isRTL ? 'مكالمة مباشرة' : 'Appel direct',
      action: () => window.location.href = 'tel:+213549575512',
      color: 'bg-black border-2 border-transparent bg-gradient-to-r from-white via-gray-300 to-white p-[2px]',
      innerColor: 'bg-black',
      hoverColor: 'hover:from-white hover:via-gray-200 hover:to-white'
    },
    {
      icon: MessageCircle,
      title: router.locale === 'en' ? 'Viber' : isRTL ? 'فايبر' : 'Viber',
      subtitle: router.locale === 'en' ? 'Video & voice' : isRTL ? 'فيديو وصوت' : 'Vidéo & voix',
      action: () => window.open('viber://contact?number=213549575512', '_blank'),
      color: 'bg-black border-2 border-transparent bg-gradient-to-r from-white via-gray-300 to-white p-[2px]',
      innerColor: 'bg-black',
      hoverColor: 'hover:from-white hover:via-gray-200 hover:to-white'
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-black border border-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {router.locale === 'en' ? '📞 Free Consultation' : isRTL ? '📞 استشارة مجانية' : '📞 Consultation Gratuite'}
              </h3>
              <p className="text-gray-300 mt-1">
                {router.locale === 'en' ? 'Contact our IT experts' : isRTL ? 'تواصل مع خبرائنا في تكنولوجيا المعلومات' : 'Contactez nos experts IT'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Contact Options */}
          <div className="space-y-4">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full rounded-xl ${option.color} ${option.hoverColor} transition-all duration-200`}
              >
                <button
                  onClick={option.action}
                  className={`w-full p-4 rounded-xl ${option.innerColor} text-white flex items-center gap-4 group h-full`}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <option.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-lg">{option.title}</div>
                    <div className="text-white/80 text-sm">{option.subtitle}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-6 p-4 bg-gray-800 border border-gray-700 rounded-xl">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                {router.locale === 'en' ? 'Phone Number' : isRTL ? 'رقم الهاتف' : 'Numéro de téléphone'}
              </p>
              <p className="font-bold text-lg text-white">+213 549 575 512</p>
              <p className="text-gray-400 text-xs mt-1">
                {router.locale === 'en' ? 'Available 24/7 for urgent projects' : isRTL ? 'متاح 24/7 للمشاريع العاجلة' : 'Disponible 24h/7j pour projets urgents'}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Companies / Partners Logos with enhanced MENA region focus
const partners = [
  { name: "Renault MENA", src: "/assets/renault.png" },
  { name: "AL Fakher", src: "/assets/client2.png" },  
  { name: "Epson MENA", src: "/assets/client3.png" },
  { name: "Sadia", src: "/assets/client4.png" },
  { name: "Marisa", src: "/assets/client6.png" },
  { name: "Delmonte", src: "/assets/client9.png" },
  { name: "TechCorp DZ", src: "/assets/client1.png" },
];

// --- Main Hero Section Component ---
export default function HeroSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [input, setInput] = useState("");
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const placeholder = useTypingPlaceholder();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  // RTL support
  const isRTL = router.locale === 'ar';

  // Enhanced statistics with impressive MENA region-focused numbers
  const stats = [
    { 
      number: 500, 
      suffix: "+", 
      label: t('hero.stats.projects'), 
      icon: Award, 
      gradient: "from-blue-500 to-cyan-500" 
    },
    { 
      number: 98, 
      suffix: "%", 
      label: t('hero.stats.clientSatisfaction'), 
      icon: Star, 
      gradient: "from-yellow-500 to-orange-500" 
    },
    { 
      number: 200, 
      suffix: "+", 
      label: t('hero.stats.clients'), 
      icon: Users, 
      gradient: "from-green-500 to-emerald-500" 
    },
    { 
      number: 12, 
      suffix: "+", 
      label: t('hero.stats.yearsExperience'), 
      icon: TrendingUp, 
      gradient: "from-purple-500 to-pink-500" 
    },
  ];

  // Client testimonials with real MENA region context
  const testimonials = [
    {
      text: t('hero.testimonials.client1.text'),
      author: t('hero.testimonials.client1.author'),
      role: t('hero.testimonials.client1.role'),
      rating: 5,
      location: t('hero.testimonials.client1.location')
    },
    {
      text: t('hero.testimonials.client2.text'),
      author: t('hero.testimonials.client2.author'), 
      role: t('hero.testimonials.client2.role'),
      rating: 5,
      location: t('hero.testimonials.client2.location')
    },
    {
      text: t('hero.testimonials.client3.text'),
      author: t('hero.testimonials.client3.author'),
      role: t('hero.testimonials.client3.role'),
      rating: 5,
      location: t('hero.testimonials.client3.location')
    }
  ];

  // Value propositions focused on MENA region market
  const valueProps = [
    {
      icon: Zap,
      title: t('hero.valueProps.delivery.title'),
      description: t('hero.valueProps.delivery.description'),
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield, 
      title: t('hero.valueProps.security.title'),
      description: t('hero.valueProps.security.description'),
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: t('hero.valueProps.support.title'),
      description: t('hero.valueProps.support.description'),
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setInput(`Je souhaite développer ${service.name.toLowerCase()} pour mon entreprise dans la région MENA...`);
  };

  const handleStartProject = () => {
    // Scroll to CompanyContactSection
    const contactSection = document.getElementById('company-contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleStartProject();
    }
  };

  return (
    <>
      <section className="relative min-h-screen bg-black overflow-hidden">

        {/* Three.js Fluid Background */}
        <FluidBackground />

        <div className="relative z-10 min-h-screen flex flex-col justify-center px-6">
          {/* Main Hero Content */}
          <div className="max-w-7xl mx-auto w-full py-20">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Left Column - Premium Content */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-12 text-white"
              >
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-sm border border-white/20"
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="font-medium text-white/90">{t('hero.slogan')}</span>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">🇩🇿</span>
                </motion.div>

                {/* Premium Headline */}
                <div className="space-y-6">
                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <div className="block text-white mb-2">
                      {t('hero.title')}
                    </div>
                    
                    <div className="block relative mb-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 font-normal">
                        {t('hero.titleAccent')}
                      </span>
                    </div>
                    
                    <div className="block text-gray-400 font-extralight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                      {t('hero.subtitle')}
                    </div>
                  </motion.h1>
                </div>

                {/* Premium Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6"
                >
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
                    {t('hero.description')}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    {[
                      { icon: Code, text: t('hero.technologies.custom') },
                      { icon: Smartphone, text: t('hero.technologies.mobile') },
                      { icon: Globe, text: t('hero.technologies.web') },
                      { icon: Server, text: t('hero.technologies.cloud') }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/5 to-white/10 rounded-full border border-white/10"
                      >
                        <item.icon className="w-4 h-4 text-white/80" />
                        <span className="text-white/70 font-light">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Premium Service Selector */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-px h-12 bg-gradient-to-b from-white/50 to-white/10" />
                    <h3 className="text-xl font-light text-white/90">
                      {t('hero.serviceSelector')}
                    </h3>
                  </div>
                  
                  <ServiceSelector 
                    onServiceSelect={handleServiceSelect} 
                    selectedService={selectedService} 
                  />
                </motion.div>

                {/* Premium CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 pt-8"
                >
                  <motion.button
                    onClick={handleStartProject}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 bg-white text-black font-medium rounded-lg overflow-hidden transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex items-center justify-center gap-3">
                      <span className="text-lg">{t('hero.cta')}</span>
                      {isRTL ? (
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                      ) : (
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      )}
                    </div>
                  </motion.button>
                </motion.div>

                {/* Premium Trust Indicators */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
                >
                  {[
                    { number: "70+", label: t('hero.stats.partners'), icon: Award },
                    { number: "98%", label: t('hero.stats.satisfaction'), icon: Star },
                    { number: "5+", label: t('hero.stats.experience'), icon: TrendingUp },
                    { number: "24/7", label: t('hero.stats.support'), icon: Shield }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="text-center space-y-2"
                    >
                      <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                        <item.icon className="w-6 h-6 text-white/80" />
                      </div>
                      <div>
                        <div className="text-white font-light text-xl">{item.number}</div>
                        <div className="text-white/50 text-xs font-light">{item.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Premium Showcase */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="relative"
              >
                {/* Premium Container */}
                <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-12 rounded-2xl backdrop-blur-sm border border-white/10">
                  
                  {/* Premium Stats Grid */}
                  <div className="space-y-8">
                    <div className="text-center space-y-4">
                      <h4 className="text-white font-light text-xl">{t('hero.statsSection.title')}</h4>
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {stats.slice(0, 4).map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                          className="text-center p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                        >
                          <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <stat.icon className="w-6 h-6 text-white/80" />
                          </div>
                          <AnimatedCounter
                            end={stat.number}
                            suffix={stat.suffix}
                            className="text-white font-light text-2xl"
                          />
                          <div className="text-white/50 text-sm font-light mt-2">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Premium Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <h5 className="text-white/80 font-light">{t('hero.techStack.title')}</h5>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        {['React', 'Node.js', 'Flutter', 'Python', 'AWS', 'Docker'].map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3 + index * 0.1 }}
                            className="p-3 bg-gradient-to-br from-white/5 to-transparent rounded-lg text-center border border-white/10 hover:border-white/20 transition-all group"
                          >
                            <div className="text-white/70 text-sm font-light group-hover:text-white transition-colors">
                              {tech}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Premium Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 flex flex-col items-center gap-3 cursor-pointer group z-20"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm group-hover:text-white/60 transition-colors font-light bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
            {t('hero.scrollIndicator')}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 border border-white/20 rounded-full group-hover:border-white/40 transition-colors bg-black/50 backdrop-blur-sm"
          >
            <ChevronDown className="w-4 h-4 group-hover:text-white/60 transition-colors" />
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Modal for Free Consultation */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        isRTL={isRTL}
        router={router}
      />
    </>
  );
}