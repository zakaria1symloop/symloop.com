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

// Lightweight intent detection — maps keywords in the user's message to a
// Symloop service category so the fallback can answer with something specific.
const detectIntent = (msg) => {
  if (/\b(mobile|ios|android|flutter|react native|app mobile|application mobile|تطبيق|جوال|موبايل)\b/.test(msg)) return 'mobile';
  if (/\b(ai|ia|artificial intelligence|intelligence artificielle|machine learning|chatbot|gpt|llm|ذكاء اصطناعي)\b/.test(msg)) return 'ai';
  if (/\b(erp|crm|gestion|comptab|facture|invoice|stock|hrms|hr|paie|إدارة|محاسبة|فاتورة)\b/.test(msg)) return 'erp';
  if (/\b(ecommerce|e-commerce|boutique|shop|store|marketplace|cib|edahabia|paiement|payment|تجارة|متجر)\b/.test(msg)) return 'ecommerce';
  if (/\b(site|website|web|landing|portfolio|moduleur|موقع|ويب)\b/.test(msg)) return 'web';
  if (/\b(iot|capteur|sensor|esp32|arduino|smart home|connected|hardware|إنترنت الأشياء|مستشعر)\b/.test(msg)) return 'iot';
  if (/\b(cloud|aws|azure|gcp|devops|kubernetes|k8s|docker|infrastructure|سحاب)\b/.test(msg)) return 'cloud';
  if (/\b(security|cybersec|pentest|audit|iso 27001|soc 2|rgpd|gdpr|أمن)\b/.test(msg)) return 'security';
  if (/\b(prix|cout|cost|budget|tarif|price|devis|quote|سعر|تكلفة|ميزانية)\b/.test(msg)) return 'price';
  if (/\b(delai|timeline|deadline|combien de temps|how long|when|مدة|متى)\b/.test(msg)) return 'timeline';
  if (/\b(bonjour|salut|hello|hi|hey|مرحبا|السلام)\b/.test(msg)) return 'greeting';
  if (/\b(merci|thanks|thank you|شكرا)\b/.test(msg)) return 'thanks';
  return 'generic';
};

// Context-aware fallback pools. Used when the GPT API is unreachable so the
// chatbot still feels conversational and specific to Symloop's services.
const FALLBACK_BANK = {
  en: {
    greeting: [
      "Hi there! Tell me what you're trying to build — web platform, mobile app, AI system, something else?",
      "Hello! What brings you to Symloop today? A new project, or something to fix?",
      "Hey! Happy to help. What kind of product or system are you working on?",
    ],
    mobile: [
      "Mobile app — great. Is this for iOS, Android, or both? And do you already have designs or do you need us to design it?",
      "We ship native iOS, Android, Flutter and React Native apps in production. What's the main use case of yours?",
      "Mobile is our strongest area. How many users do you expect in year one, and what features are critical for launch?",
    ],
    ai: [
      "AI project — interesting. Are you looking at a chatbot, document intelligence, computer vision, or a custom ML model?",
      "We ship production AI systems — NLP, vision, LLM integration, predictive. What's the business outcome you want to hit?",
      "AI is half of what we build. Do you already have data to train on, or is this greenfield?",
    ],
    erp: [
      "ERP / CRM — what's the sector? Trade, manufacturing, services? And how many users will log in daily?",
      "Gestion sur mesure, nice. Do you have an existing system to replace, or are you starting from scratch?",
      "We've shipped ERPs for banks, industrial groups, and SMEs. What are the top 3 modules you need first — accounting, HR, stock, sales?",
    ],
    ecommerce: [
      "E-commerce — for Algeria, MENA, or international? And do you need CIB / Edahabia payment integration?",
      "We build e-commerce on Next.js, Shopify, WooCommerce, and custom stacks. How many SKUs are you planning to sell?",
      "Online store — got it. Do you have the catalog ready, or are we starting with product strategy first?",
    ],
    web: [
      "Website — corporate, SaaS, portfolio, or something else? And do you need content and SEO help, or just build?",
      "We ship websites on Next.js, Laravel, and WordPress depending on the use case. What's the main goal — leads, sales, brand?",
      "Got it. What pages are must-have for launch, and do you have brand guidelines already?",
    ],
    iot: [
      "IoT — hardware + firmware + cloud + app, the full stack. What are you sensing or controlling?",
      "We design PCBs, write firmware in C and Rust, and build the cloud platform above. What's the deployment scale you're targeting?",
      "Connected devices are our speciality. Indoor, outdoor, industrial? And what's the connectivity — LoRa, 4G, Wi-Fi?",
    ],
    cloud: [
      "Cloud / DevOps — AWS, GCP, Azure, or multi-cloud? And are we talking migration, greenfield, or optimization?",
      "Kubernetes, Terraform, CI/CD — that's our daily bread. What's the current pain point — cost, reliability, or speed?",
      "We run production infrastructure for clients across MENA. How much monthly traffic do you serve today?",
    ],
    security: [
      "Security audit, pentest, compliance? Or all of the above? What certifications are you targeting — SOC 2, ISO 27001, GDPR?",
      "Cybersecurity — we handle audits, pentests, infrastructure hardening, incident response. What's the immediate concern?",
      "Got it. Is this driven by a client requirement, a recent incident, or proactive compliance work?",
    ],
    price: [
      "Pricing depends on scope and timeline. Tell me more about the features and I'll give you a ballpark within 24 hours.",
      "We quote after a 30-minute discovery call — it's free. Would you like to describe the project first or book a call directly?",
      "Honest answer: I can give you a range once I understand the scope. What are the 3 most important features you need?",
    ],
    timeline: [
      "Timeline depends on scope. A simple MVP is 6-8 weeks. Full enterprise systems take 3-6 months. What do you have in mind?",
      "When do you need to launch? We can usually start within 1-2 weeks of signing.",
      "Depends what we're building. Can you tell me a bit more about the scope, and do you have a hard deadline?",
    ],
    thanks: [
      "You're welcome! Want to leave your contact so a senior engineer can follow up with a proposal?",
      "Happy to help. Ready to take the next step? Drop your email and we'll send a detailed brief.",
      "Anytime. If you want, share your contact and we can schedule a 30-minute discovery call.",
    ],
    generic: [
      "Interesting. What's the core problem you're trying to solve — efficiency, revenue, user experience, or something else?",
      "Got it. Who are the main users, and what do they do today without this solution?",
      "Tell me more about the business context. Is this internal, customer-facing, or both?",
      "Makes sense. What's the biggest risk or unknown in this project from your side?",
      "Understood. Do you already have a technical team in place, or are you building from scratch?",
      "Noted. What does success look like 6 months after launch?",
    ],
  },
  fr: {
    greeting: [
      "Bonjour ! Dites-moi ce que vous cherchez à construire — plateforme web, app mobile, système IA, autre chose ?",
      "Salut ! Qu'est-ce qui vous amène chez Symloop aujourd'hui ? Un nouveau projet, ou quelque chose à corriger ?",
      "Bonjour, heureux de vous aider. Sur quel type de produit ou système travaillez-vous ?",
    ],
    mobile: [
      "App mobile — parfait. iOS, Android, ou les deux ? Et avez-vous déjà des maquettes ou on vous accompagne sur le design ?",
      "Nous livrons des apps iOS natif, Android natif, Flutter et React Native en production. Quel est le cas d'usage principal ?",
      "Le mobile est notre terrain fort. Combien d'utilisateurs attendez-vous la première année, et quelles fonctionnalités sont critiques au lancement ?",
    ],
    ai: [
      "Projet IA — intéressant. Chatbot, intelligence documentaire, vision par ordinateur, ou un modèle ML sur mesure ?",
      "Nous livrons des systèmes IA en production — NLP, vision, intégration LLM, prédictif. Quel est l'objectif business à atteindre ?",
      "L'IA est la moitié de ce que nous construisons. Avez-vous déjà des données d'entraînement, ou c'est un terrain vierge ?",
    ],
    erp: [
      "ERP / CRM — dans quel secteur ? Négoce, industrie, services ? Et combien d'utilisateurs se connecteront chaque jour ?",
      "Gestion sur mesure, très bien. Vous avez un système existant à remplacer, ou on part de zéro ?",
      "Nous avons livré des ERP pour des banques, groupes industriels et PME. Quels sont les 3 modules prioritaires — comptabilité, RH, stock, ventes ?",
    ],
    ecommerce: [
      "E-commerce — pour l'Algérie, le MENA, ou l'international ? Et avez-vous besoin de l'intégration CIB / Edahabia ?",
      "Nous construisons du e-commerce sur Next.js, Shopify, WooCommerce et stack custom. Combien de références prévoyez-vous ?",
      "Boutique en ligne, compris. Le catalogue est-il prêt, ou on commence par la stratégie produit ?",
    ],
    web: [
      "Site web — corporate, SaaS, portfolio, ou autre ? Et avez-vous besoin d'aide sur le contenu et le SEO, ou juste le build ?",
      "On livre des sites sur Next.js, Laravel et WordPress selon le besoin. Quel est l'objectif principal — leads, ventes, image de marque ?",
      "Compris. Quelles pages sont indispensables au lancement, et avez-vous déjà une charte graphique ?",
    ],
    iot: [
      "IoT — hardware + firmware + cloud + app, toute la chaîne. Qu'est-ce que vous captez ou pilotez ?",
      "Nous concevons les PCB, écrivons le firmware en C et Rust, et livrons la plateforme cloud au-dessus. Quelle échelle de déploiement visez-vous ?",
      "Les objets connectés sont notre spécialité. Intérieur, extérieur, industriel ? Et la connectivité — LoRa, 4G, Wi-Fi ?",
    ],
    cloud: [
      "Cloud / DevOps — AWS, GCP, Azure, ou multi-cloud ? Migration, greenfield, ou optimisation ?",
      "Kubernetes, Terraform, CI/CD — c'est notre pain quotidien. Quel est le point de douleur actuel — coût, fiabilité, vitesse ?",
      "Nous opérons l'infrastructure de production pour des clients à travers le MENA. Quel trafic mensuel servez-vous aujourd'hui ?",
    ],
    security: [
      "Audit sécurité, pentest, conformité ? Ou tout à la fois ? Quelles certifications visez-vous — SOC 2, ISO 27001, RGPD ?",
      "Cybersécurité — audits, pentests, durcissement d'infrastructure, réponse incident. Quelle est la préoccupation immédiate ?",
      "Compris. C'est poussé par une exigence client, un incident récent, ou de la conformité proactive ?",
    ],
    price: [
      "Le prix dépend du scope et du délai. Dites-m'en plus sur les fonctionnalités et je vous donne une fourchette sous 24h.",
      "Nous chiffrons après un appel de cadrage de 30 minutes — c'est gratuit. Vous préférez décrire le projet d'abord ou réserver un appel directement ?",
      "Réponse honnête : je peux donner une fourchette quand je comprends le scope. Quelles sont les 3 fonctionnalités les plus importantes ?",
    ],
    timeline: [
      "Le délai dépend du scope. Un MVP simple fait 6-8 semaines. Un système entreprise complet prend 3-6 mois. Qu'avez-vous en tête ?",
      "Quand avez-vous besoin de lancer ? On peut généralement démarrer 1-2 semaines après signature.",
      "Ça dépend de ce qu'on construit. Pouvez-vous en dire plus sur le scope, et avez-vous une deadline stricte ?",
    ],
    thanks: [
      "Je vous en prie ! Voulez-vous laisser vos coordonnées pour qu'un ingénieur senior vous rappelle avec une proposition ?",
      "Avec plaisir. Prêt pour la prochaine étape ? Laissez votre email et on envoie un brief détaillé.",
      "De rien. Si vous voulez, partagez votre contact et on organise un appel de cadrage de 30 minutes.",
    ],
    generic: [
      "Intéressant. Quel est le problème principal à résoudre — efficacité, revenu, expérience utilisateur, ou autre chose ?",
      "Compris. Qui sont les utilisateurs principaux, et que font-ils aujourd'hui sans cette solution ?",
      "Dites-m'en plus sur le contexte business. C'est interne, orienté client, ou les deux ?",
      "Logique. Quel est le risque ou l'inconnu le plus grand dans ce projet de votre côté ?",
      "Entendu. Vous avez déjà une équipe technique, ou on construit à partir de zéro ?",
      "Noté. À quoi ressemble le succès 6 mois après le lancement ?",
    ],
  },
  ar: {
    greeting: [
      "مرحباً! أخبرني ما الذي تحاول بناءه — منصة ويب، تطبيق جوال، نظام ذكاء اصطناعي، شيء آخر؟",
      "أهلاً! ما الذي يجلبك إلى سيملوب اليوم؟ مشروع جديد، أو شيء لإصلاحه؟",
      "مرحباً، سعيد بمساعدتك. على أي نوع من المنتج أو النظام تعمل؟",
    ],
    mobile: [
      "تطبيق جوال — رائع. iOS، أندرويد، أو كلاهما؟ وهل لديك تصاميم أم نحتاج أن نصمّم لك؟",
      "نحن نطلق تطبيقات iOS و Android و Flutter و React Native في الإنتاج. ما حالة الاستخدام الرئيسية؟",
      "الجوال هو أقوى مجالاتنا. كم مستخدماً تتوقع في السنة الأولى، وما الميزات الحرجة للإطلاق؟",
    ],
    ai: [
      "مشروع ذكاء اصطناعي — مثير. روبوت محادثة، ذكاء مستندات، رؤية حاسوبية، أم نموذج ML مخصص؟",
      "نحن نطلق أنظمة ذكاء اصطناعي في الإنتاج — NLP، رؤية، تكامل LLM، تنبؤ. ما النتيجة التجارية التي تريد تحقيقها؟",
      "الذكاء الاصطناعي نصف ما نبنيه. هل لديك بيانات للتدريب عليها، أم هذا مشروع جديد تماماً؟",
    ],
    erp: [
      "ERP / CRM — في أي قطاع؟ تجارة، صناعة، خدمات؟ وكم مستخدماً سيسجل الدخول يومياً؟",
      "إدارة مخصصة، جيد. هل لديك نظام حالي لاستبداله، أم سنبدأ من الصفر؟",
      "سلّمنا أنظمة ERP لبنوك ومجموعات صناعية وشركات متوسطة. ما الوحدات الثلاث الأولوية — محاسبة، موارد بشرية، مخزون، مبيعات؟",
    ],
    ecommerce: [
      "تجارة إلكترونية — للجزائر، الشرق الأوسط وشمال أفريقيا، أو دولي؟ وهل تحتاج دمج CIB / Edahabia؟",
      "نبني التجارة الإلكترونية على Next.js و Shopify و WooCommerce وحزم مخصصة. كم منتجاً تخطط لبيعه؟",
      "متجر إلكتروني، فهمت. هل الكتالوج جاهز، أم نبدأ باستراتيجية المنتج أولاً؟",
    ],
    web: [
      "موقع ويب — شركة، SaaS، portfolio، أو غير ذلك؟ وهل تحتاج مساعدة في المحتوى وSEO، أم فقط البناء؟",
      "نطلق مواقع على Next.js و Laravel و WordPress حسب الحاجة. ما الهدف الرئيسي — عملاء محتملون، مبيعات، هوية العلامة؟",
      "فهمت. ما الصفحات الضرورية للإطلاق، وهل لديك دليل هوية مسبقاً؟",
    ],
    iot: [
      "IoT — عتاد + برامج ثابتة + سحابة + تطبيق، الكدسة الكاملة. ما الذي تستشعره أو تتحكم فيه؟",
      "نصمم PCBs، نكتب البرامج الثابتة بـ C و Rust، ونبني منصة السحابة فوقها. ما حجم النشر المستهدف؟",
      "الأجهزة المتصلة تخصصنا. داخلي، خارجي، صناعي؟ وأي اتصال — LoRa، 4G، Wi-Fi؟",
    ],
    cloud: [
      "سحابة / DevOps — AWS، GCP، Azure، أم متعدد السحابات؟ ترحيل، مشروع جديد، أم تحسين؟",
      "Kubernetes، Terraform، CI/CD — خبزنا اليومي. ما نقطة الألم الحالية — تكلفة، موثوقية، أم سرعة؟",
      "نشغّل بنية الإنتاج لعملاء عبر الشرق الأوسط وشمال أفريقيا. كم ترافيك شهري تخدم اليوم؟",
    ],
    security: [
      "تدقيق أمني، اختبار اختراق، امتثال؟ أم كل ذلك؟ ما الشهادات التي تستهدفها — SOC 2، ISO 27001، GDPR؟",
      "أمن سيبراني — تدقيق، اختبار اختراق، تقوية بنية تحتية، استجابة للحوادث. ما الاهتمام الفوري؟",
      "فهمت. هل هذا مدفوع بمتطلب عميل، حادثة حديثة، أم امتثال استباقي؟",
    ],
    price: [
      "السعر يعتمد على النطاق والجدول الزمني. أخبرني أكثر عن الميزات وأعطيك تقديراً خلال 24 ساعة.",
      "نسعّر بعد مكالمة اكتشاف 30 دقيقة — مجانية. تفضّل وصف المشروع أولاً أم حجز مكالمة مباشرة؟",
      "إجابة صادقة: يمكنني إعطاء نطاق بمجرد فهم النطاق. ما الميزات الثلاث الأكثر أهمية؟",
    ],
    timeline: [
      "المدة تعتمد على النطاق. MVP بسيط 6-8 أسابيع. نظام مؤسسة كامل 3-6 أشهر. ماذا في ذهنك؟",
      "متى تحتاج الإطلاق؟ يمكننا عادةً البدء خلال 1-2 أسبوع من التوقيع.",
      "يعتمد على ما نبنيه. هل يمكنك إخباري المزيد عن النطاق، وهل لديك موعد نهائي صارم؟",
    ],
    thanks: [
      "عفواً! هل تريد ترك بيانات اتصالك ليتابع مهندس كبير بعرض؟",
      "سعيد بمساعدتك. جاهز للخطوة التالية؟ اترك بريدك الإلكتروني وسنرسل ملخصاً مفصلاً.",
      "في أي وقت. إذا أردت، شارك بياناتك ونحدد مكالمة اكتشاف 30 دقيقة.",
    ],
    generic: [
      "مثير. ما المشكلة الأساسية التي تحاول حلها — كفاءة، إيرادات، تجربة مستخدم، أم شيء آخر؟",
      "فهمت. من هم المستخدمون الرئيسيون، وماذا يفعلون اليوم بدون هذا الحل؟",
      "أخبرني أكثر عن السياق التجاري. هل هو داخلي، للعملاء، أم كلاهما؟",
      "منطقي. ما أكبر خطر أو مجهول في هذا المشروع من جانبك؟",
      "مفهوم. هل لديك فريق تقني قائم، أم نبني من الصفر؟",
      "ملاحظ. كيف يبدو النجاح بعد 6 أشهر من الإطلاق؟",
    ],
  },
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

  // ── Smart context-aware fallback (used when GPT API is unavailable) ──
  // Detects keywords in the user's message and returns a relevant Symloop
  // response, cycling through variants so the chat never feels robotic.
  const getSmartFallback = (userMessage, turn) => {
    const msg = String(userMessage || '').toLowerCase();
    const keyword = detectIntent(msg);
    const bank = FALLBACK_BANK[locale] || FALLBACK_BANK.en;
    const pool = bank[keyword] || bank.generic;
    // Rotate through the pool using turn count so we never repeat consecutively
    return pool[turn % pool.length];
  };

  // ── GPT API call with graceful degradation ──────────────────────
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
      if (!aiResponse) throw new Error('Empty response');
      setChatHistory([...newHistory, { role: 'assistant', content: aiResponse }]);
      return aiResponse;
    } catch (error) {
      console.error('GPT Error:', error);
      const fallback = getSmartFallback(userMessage, messageCount);
      setChatHistory(prev => [...prev, { role: 'user', content: userMessage }, { role: 'assistant', content: fallback }]);
      return fallback;
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
