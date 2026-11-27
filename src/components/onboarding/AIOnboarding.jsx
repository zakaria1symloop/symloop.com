"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { X, ArrowRight, ArrowLeft, Sparkles, Send, Loader2 } from "lucide-react";
import { SUGGESTIONS } from './assistant';

// ============================================================================
// SYMLOOP — AIOnboarding (editorial redesign)
//
// Side panel (full screen on phones). Two steps: the visitor's details first (first name,
// surname, phone, yes or no to a call), then the chat with the assistant (/api/chat). The
// canned replies below are only the fallback when the assistant is unreachable.
//
// Visual redesign: removed cartoon SVG character, gradient backgrounds,
// rounded-2xl bubbles, glow orbs. Replaced with editorial typography,
// hairline borders, mono eyebrow, font-light headlines — matching the
// rest of the site.
// ============================================================================

const getGreeting = (locale) => {
  const greetings = {
    fr: "Bonjour. Je suis l'assistant IA de Symloop. Posez-moi n'importe quelle question sur un logiciel, une application ou l'IA, ou décrivez votre projet.",
    en: "Hello. I'm Symloop's AI assistant. Ask me any question about software, apps or AI, or describe your project.",
    ar: "مرحباً. أنا المساعد الذكي لسيملوب. اطرح عليّ أي سؤال عن البرمجيات أو التطبيقات أو الذكاء الاصطناعي، أو صف مشروعك."
  };
  return greetings[locale] || greetings.en;
};

// Language of a message: Arabic script, darija in Latin letters (answered in
// French), French or English markers; falls back to the site locale.
const detectLang = (text, fallback) => {
  const t = String(text || '');
  if (/[؀-ۿ]/.test(t)) return 'ar';
  if (/(wach|kifach|kifech|bghit|nheb|n7eb|rani|ndir|chhal|9adach|wesh|labas|sahit|3la|3andi|habit)/i.test(t)) return 'fr';
  if (/(je|j'ai|nous|vous|bonjour|salut|une|des|pour|avec|mon|ma|mes|est|sont|projet|besoin|combien|comment|voudrais|veux|société|entreprise|agence)/i.test(t)) return 'fr';
  if (/(the|i|i'm|we|you|hello|hi|want|need|how|much|app|build|looking|company|business)/i.test(t)) return 'en';
  return fallback;
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

const COPY = {
  fr: {
    title: 'Assistant Symloop', status: 'IA · répond en français, arabe et anglais', typing: 'Écrit…', saved: 'Coordonnées enregistrées', close: 'Fermer',
    gateTitle: 'Avant de commencer', gateText: 'Laissez vos coordonnées : l’assistant vous répond tout de suite, et un ingénieur peut vous rappeler.',
    yourQuestion: 'Votre question', first: 'Prénom', last: 'Nom', phone: 'Téléphone',
    callQ: 'Acceptez-vous d’être appelé par Symloop ?', yes: 'Oui, appelez-moi', no: 'Non, pas d’appel',
    start: 'Commencer la discussion', sending: 'Enregistrement…', skip: 'Continuer sans laisser mes coordonnées',
    privacy: 'Utilisées uniquement pour vous rappeler.', privacyLink: 'Confidentialité',
    error: 'Vérifiez le numéro de téléphone, puis réessayez.', failed: 'Enregistrement impossible pour le moment. Vous pouvez continuer sans.',
    placeholder: 'Votre message…', send: 'Envoyer', tryAsking: 'Essayez par exemple',
    hello: (n) => (n ? `Bonjour ${n}. Je suis l’assistant IA de Symloop. Posez-moi votre question, ou décrivez ce que vous voulez construire.` : 'Bonjour. Je suis l’assistant IA de Symloop. Posez-moi votre question, ou décrivez ce que vous voulez construire.'),
  },
  en: {
    title: 'Symloop Assistant', status: 'AI · answers in English, French and Arabic', typing: 'Typing…', saved: 'Details saved', close: 'Close',
    gateTitle: 'Before we start', gateText: 'Leave your details: the assistant answers right away, and an engineer can call you back.',
    yourQuestion: 'Your question', first: 'First name', last: 'Surname', phone: 'Phone',
    callQ: 'Do you agree to receive a call from Symloop?', yes: 'Yes, call me', no: 'No call',
    start: 'Start the chat', sending: 'Saving…', skip: 'Continue without leaving my details',
    privacy: 'Used only to call you back.', privacyLink: 'Privacy',
    error: 'Check the phone number and try again.', failed: 'Could not save right now. You can continue without it.',
    placeholder: 'Your message…', send: 'Send', tryAsking: 'For example',
    hello: (n) => (n ? `Hello ${n}. I'm Symloop's AI assistant. Ask me your question, or describe what you want to build.` : "Hello. I'm Symloop's AI assistant. Ask me your question, or describe what you want to build."),
  },
  ar: {
    title: 'مساعد سيملوب', status: 'ذكاء اصطناعي · يجيب بالعربية والفرنسية والإنجليزية', typing: 'يكتب…', saved: 'تم حفظ بياناتكم', close: 'إغلاق',
    gateTitle: 'قبل أن نبدأ', gateText: 'اتركوا بياناتكم: يجيبكم المساعد فوراً، ويمكن لمهندس أن يتصل بكم.',
    yourQuestion: 'سؤالكم', first: 'الاسم', last: 'اللقب', phone: 'الهاتف',
    callQ: 'هل تقبلون اتصالاً من Symloop؟', yes: 'نعم، اتصلوا بي', no: 'لا، دون اتصال',
    start: 'بدء المحادثة', sending: 'جارٍ الحفظ…', skip: 'المتابعة دون ترك بياناتي',
    privacy: 'تُستعمل فقط للاتصال بكم.', privacyLink: 'الخصوصية',
    error: 'تحققوا من رقم الهاتف ثم أعيدوا المحاولة.', failed: 'تعذّر الحفظ حالياً. يمكنكم المتابعة دونه.',
    placeholder: 'رسالتكم…', send: 'إرسال', tryAsking: 'مثلاً',
    hello: (n) => (n ? `مرحباً ${n}. أنا المساعد الذكي لسيملوب. اطرحوا سؤالكم، أو صفوا ما تريدون بناءه.` : 'مرحباً. أنا المساعد الذكي لسيملوب. اطرحوا سؤالكم، أو صفوا ما تريدون بناءه.'),
  },
};
const GOLD = '#E9CD86';

// Flow: details first (first name, surname, phone, yes or no to a call), then the chat.
// The visitor may skip the first step; the assistant then asks for the details itself.
export default function AIOnboarding({ onComplete, onSkip, initialQuestion = '' }) {
  const router = useRouter();
  const locale = ['fr', 'en', 'ar'].includes(router.locale) ? router.locale : 'en';
  const isRTL = locale === 'ar';
  const c = COPY[locale];

  const [stage, setStage] = useState('gate');
  const [visitor, setVisitor] = useState({ firstName: '', lastName: '', phone: '', okToCall: null });
  const [gateError, setGateError] = useState('');
  const [registering, setRegistering] = useState(false);
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadSaved, setLeadSaved] = useState(false);
  // refs: a message can be sent in the same tick as the first step is submitted
  const history = useRef([]);
  const lead = useRef({ id: '', saved: false, known: null });
  const turns = useRef(0);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, [messages, isTyping]);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onSkip && onSkip(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onSkip]);

  const markSaved = (id) => {
    if (id) lead.current.id = id;
    if (!lead.current.saved) {
      lead.current.saved = true; setLeadSaved(true);
      // same conversion event as the contact forms, when the Meta pixel is installed
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') window.fbq('track', 'Lead', { content_name: 'chatbot' });
    }
  };

  const ask = async (text) => {
    const userMessage = String(text || '').trim();
    if (!userMessage || isTyping) return;
    setMessages((m) => [...m, { type: 'user', content: userMessage }]);
    setTextInput(''); setIsTyping(true);
    history.current = [...history.current, { role: 'user', content: userMessage }];
    let reply;
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.current, locale, page: router.asPath, leadSaved: lead.current.saved, leadId: lead.current.id || undefined, visitor: lead.current.known || undefined }) });
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      if (!data.message) throw new Error('Empty response');
      reply = data.message;
      if (data.lead_saved) markSaved(data.lead_id);
    } catch (error) {
      // assistant unreachable: canned reply, and the details step comes back if nothing is saved yet
      const lang = detectLang(userMessage, locale);
      const bank = FALLBACK_BANK[lang] || FALLBACK_BANK.en;
      const pool = bank[detectIntent(userMessage.toLowerCase())] || bank.generic;
      reply = pool[turns.current % pool.length];
      if (!lead.current.saved && turns.current >= 1) setTimeout(() => setStage('gate'), 1200);
    }
    turns.current += 1;
    history.current = [...history.current, { role: 'assistant', content: reply }];
    setIsTyping(false);
    setMessages((m) => [...m, { type: 'ai', content: reply }]);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const startChat = (firstName) => {
    setStage('chat');
    if (!messages.length) {
      const greeting = c.hello(firstName);
      setMessages([{ type: 'ai', content: greeting }]);
      history.current = [{ role: 'assistant', content: greeting }];
    }
    if (initialQuestion && !turns.current) ask(initialQuestion);
    else setTimeout(() => inputRef.current?.focus(), 80);
  };

  const gateReady = visitor.firstName.trim() && visitor.lastName.trim() && visitor.phone.replace(/\D/g, '').length >= 8 && visitor.okToCall !== null;
  const submitGate = async (e) => {
    e.preventDefault();
    if (!gateReady || registering) return;
    setRegistering(true); setGateError('');
    const v = { firstName: visitor.firstName.trim(), lastName: visitor.lastName.trim(), phone: visitor.phone.trim(), okToCall: visitor.okToCall === true };
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'register', visitor: v, locale, page: router.asPath, question: initialQuestion }) });
      const data = await response.json().catch(() => ({}));
      if (response.status === 400) { setGateError(c.error); setRegistering(false); return; }
      if (!response.ok || !data.lead_id) throw new Error('not saved');
      lead.current.known = { firstName: v.firstName, okToCall: v.okToCall };
      markSaved(data.lead_id);
      setRegistering(false);
      startChat(v.firstName);
    } catch (err) {
      setGateError(c.failed); setRegistering(false);
    }
  };

  const field = `w-full bg-transparent border border-white/15 px-4 py-3 text-white text-[15px] placeholder-white/35 focus:outline-none focus:border-white/50 transition-colors ${isRTL ? 'text-right' : ''}`;
  const choice = (on) => `flex-1 px-4 py-3 text-sm border transition-colors ${on ? 'border-white bg-white text-black' : 'border-white/15 text-white/75 hover:border-white/40'}`;
  const showSuggestions = stage === 'chat' && !turns.current && !isTyping && messages.length <= 1;

  return (
    <div className="fixed inset-0 z-[100]" dir={isRTL ? 'rtl' : 'ltr'} role="dialog" aria-modal="true" aria-label={c.title}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/70" onClick={onSkip} />
      <motion.aside initial={{ opacity: 0, x: isRTL ? -24 : 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}
        className={`absolute inset-y-0 ${isRTL ? 'left-0 sm:border-r' : 'right-0 sm:border-l'} w-full sm:w-[460px] bg-[#0b0b0c] border-white/10 flex flex-col text-white shadow-2xl`}>

        {/* header */}
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center justify-center w-9 h-9 border border-white/15 shrink-0"><Sparkles className="w-4 h-4" strokeWidth={1.5} style={{ color: GOLD }} /></div>
            <div className="min-w-0">
              <h2 className="text-[15px] font-medium leading-tight">{c.title}</h2>
              <p className="text-[12px] text-white/45 truncate">
                {isTyping ? c.typing : leadSaved ? <span style={{ color: GOLD }}>{c.saved}</span> : c.status}
              </p>
            </div>
          </div>
          <button onClick={onSkip} aria-label={c.close} className="flex items-center justify-center w-9 h-9 text-white/50 hover:text-white transition-colors"><X className="w-5 h-5" strokeWidth={1.5} /></button>
        </div>

        {/* step 1: details */}
        {stage === 'gate' && (
          <form onSubmit={submitGate} className="flex-1 overflow-y-auto px-5 py-6">
            <h3 className="text-2xl font-light tracking-tight">{c.gateTitle}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/60">{c.gateText}</p>

            {initialQuestion ? (
              <div className="mt-5 border-s-2 ps-4 py-1" style={{ borderColor: GOLD }}>
                <p className="text-[12px] text-white/45">{c.yourQuestion}</p>
                <p className="mt-1 text-[14px] text-white/90 leading-relaxed">{initialQuestion}</p>
              </div>
            ) : null}

            <div className="mt-6 grid grid-cols-2 gap-3">
              <label className="block"><span className="block text-[12px] text-white/55 mb-1.5">{c.first}</span>
                <input className={field} value={visitor.firstName} onChange={(e) => setVisitor((v) => ({ ...v, firstName: e.target.value }))} autoComplete="given-name" maxLength={80} autoFocus /></label>
              <label className="block"><span className="block text-[12px] text-white/55 mb-1.5">{c.last}</span>
                <input className={field} value={visitor.lastName} onChange={(e) => setVisitor((v) => ({ ...v, lastName: e.target.value }))} autoComplete="family-name" maxLength={80} /></label>
            </div>
            <label className="block mt-3"><span className="block text-[12px] text-white/55 mb-1.5">{c.phone}</span>
              <input className={field} type="tel" dir="ltr" inputMode="tel" value={visitor.phone} onChange={(e) => setVisitor((v) => ({ ...v, phone: e.target.value }))} autoComplete="tel" maxLength={40} placeholder="05 50 00 00 00" /></label>

            <fieldset className="mt-5">
              <legend className="text-[13px] text-white/80 mb-2">{c.callQ}</legend>
              <div className="flex gap-3">
                <button type="button" aria-pressed={visitor.okToCall === true} onClick={() => setVisitor((v) => ({ ...v, okToCall: true }))} className={choice(visitor.okToCall === true)}>{c.yes}</button>
                <button type="button" aria-pressed={visitor.okToCall === false} onClick={() => setVisitor((v) => ({ ...v, okToCall: false }))} className={choice(visitor.okToCall === false)}>{c.no}</button>
              </div>
            </fieldset>

            {gateError ? <p role="alert" className="mt-4 text-[13px]" style={{ color: GOLD }}>{gateError}</p> : null}

            <button type="submit" disabled={!gateReady || registering} className="mt-6 w-full flex items-center justify-center gap-3 bg-white text-black px-6 py-4 text-sm font-medium disabled:opacity-35 disabled:cursor-not-allowed hover:bg-white/90 transition-colors">
              {registering ? <><Loader2 className="w-4 h-4 animate-spin" /><span>{c.sending}</span></> : <><span>{c.start}</span>{isRTL ? <ArrowLeft className="w-4 h-4" strokeWidth={1.75} /> : <ArrowRight className="w-4 h-4" strokeWidth={1.75} />}</>}
            </button>
            <p className="mt-3 text-[12px] text-white/40">{c.privacy} <a href={`${locale === 'en' ? '' : `/${locale}`}/privacy/`} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-white/70">{c.privacyLink}</a></p>
            <button type="button" onClick={() => startChat('')} className="mt-6 text-[13px] text-white/45 hover:text-white underline underline-offset-4 transition-colors">{c.skip}</button>
          </form>
        )}

        {/* step 2: chat */}
        {stage === 'chat' && (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-3" aria-live="polite">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[86%] px-4 py-3 text-[14.5px] leading-relaxed whitespace-pre-wrap break-words ${message.type === 'user' ? 'bg-white text-black' : 'bg-white/[0.05] border border-white/10 text-white/90'}`}>{message.content}</div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start"><div className="bg-white/[0.05] border border-white/10 px-4 py-3.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" /><span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.15s' }} /><span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                </div></div>
              )}
              {showSuggestions && (
                <div className="pt-3">
                  <p className="text-[12px] text-white/40 mb-2">{c.tryAsking}</p>
                  <div className="flex flex-col items-start gap-2">
                    {(SUGGESTIONS[locale] || SUGGESTIONS.en).map((q) => (
                      <button key={q} type="button" onClick={() => ask(q)} className="text-start text-[13.5px] text-white/80 border border-white/15 hover:border-white/45 hover:text-white px-3.5 py-2.5 transition-colors">{q}</button>
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form onSubmit={(e) => { e.preventDefault(); ask(textInput); }} className="px-5 py-4 border-t border-white/10 flex gap-2.5">
              <input ref={inputRef} type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder={c.placeholder} className={`flex-1 ${field}`} dir={isRTL ? 'rtl' : 'ltr'} maxLength={2000} />
              <button type="submit" disabled={!textInput.trim() || isTyping} aria-label={c.send} className="flex items-center justify-center w-12 bg-white text-black disabled:opacity-35 disabled:cursor-not-allowed hover:bg-white/90 transition-colors"><Send className={`w-4 h-4 ${isRTL ? '-scale-x-100' : ''}`} strokeWidth={1.75} /></button>
            </form>
          </>
        )}
      </motion.aside>
    </div>
  );
}
