import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Calendar, User, ArrowLeft, Smartphone, Code, CheckCircle, TrendingUp, Euro, Shield, Zap, Globe, Building2 } from 'lucide-react';

export default function MobileAppFranceEurope2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Développement Application Mobile France & Europe 2026 : Guide Complet",
      metaTitle: "Développement Application Mobile France 2026 | Agence Expert Europe",
      metaDescription: "Développement d'applications mobiles en France et Europe en 2026. Solutions iOS, Android, Flutter, React Native. Devis gratuit. Agence certifiée Paris, Lyon, Marseille.",
      subtitle: "Créez votre application mobile avec une agence experte du marché européen",
      category: "Mobile",
      readTime: "12 min",
      author: "Équipe Symloop",
      date: "2026-01-02",
      backLink: "Retour au Blog",
      intro: "Le marché français des applications mobiles représente plus de 4,5 milliards d'euros en 2026. Avec 95% des Français équipés de smartphones et une digitalisation accélérée post-COVID, développer une application mobile est devenu un investissement stratégique pour toute entreprise visant le marché européen.",
      statsTitle: "Marché Mobile France & Europe 2026",
      stats: [
        { value: "95%", label: "Français avec smartphone" },
        { value: "4.5Mds€", label: "Marché apps France" },
        { value: "85%", label: "Achats sur mobile" },
        { value: "+35%", label: "Croissance annuelle" }
      ],
      sections: [
        {
          title: "Pourquoi Développer une App Mobile pour le Marché Français ?",
          items: [
            { title: "Un Marché de 67 Millions de Consommateurs", desc: "La France offre un marché mature avec un pouvoir d'achat élevé. Les consommateurs français passent en moyenne 4h30 par jour sur leur smartphone, dont 90% sur des applications.", color: "blue" },
            { title: "Conformité RGPD Native", desc: "Notre expertise européenne garantit des applications 100% conformes au RGPD dès la conception. Protection des données, consentement utilisateur, et sécurité renforcée.", color: "green" },
            { title: "Intégration Paiements Européens", desc: "Apple Pay, Google Pay, Stripe, PayPal, virements SEPA instantanés. Toutes les solutions de paiement pour maximiser vos conversions sur le marché européen.", color: "purple" }
          ]
        },
        {
          title: "Technologies Mobile 2026 : Notre Expertise",
          items: [
            { title: "Flutter & Dart", desc: "Une seule base de code pour iOS et Android. Performance native, développement 40% plus rapide, maintenance simplifiée. Utilisé par BMW, Alibaba, Google.", color: "cyan" },
            { title: "React Native", desc: "L'écosystème JavaScript/TypeScript pour des apps performantes. Idéal si vous avez déjà une équipe web React. Facebook, Instagram, Airbnb l'utilisent.", color: "blue" },
            { title: "Swift & Kotlin Natifs", desc: "Pour des performances maximales sur iOS et Android. Recommandé pour les apps gaming, AR/VR, ou nécessitant des fonctionnalités hardware avancées.", color: "orange" }
          ]
        },
        {
          title: "Nos Services pour la France et l'Europe",
          items: [
            { title: "Audit & Stratégie Mobile", desc: "Analyse de votre marché, étude de la concurrence, définition des fonctionnalités clés, wireframes et prototypes interactifs.", color: "indigo" },
            { title: "Design UX/UI Premium", desc: "Interfaces élégantes respectant les standards européens. Tests utilisateurs, accessibilité WCAG 2.1, design system personnalisé.", color: "pink" },
            { title: "Développement & Tests", desc: "Méthodologie Agile, sprints de 2 semaines, tests automatisés, QA rigoureux. Livraison continue avec démos régulières.", color: "green" },
            { title: "Publication & Marketing", desc: "Soumission App Store et Google Play, ASO (App Store Optimization), stratégie de lancement, analytics et KPIs.", color: "amber" }
          ]
        }
      ],
      pricing: {
        title: "Tarifs Développement Mobile France 2026",
        subtitle: "Investissement transparent, qualité européenne",
        plans: [
          { name: "App MVP", price: "15 000€ - 30 000€", features: ["5-8 écrans essentiels", "iOS ou Android", "Backend basique", "2-3 mois"], color: "gray" },
          { name: "App Business", price: "30 000€ - 60 000€", features: ["15-25 écrans", "iOS + Android", "API & Dashboard admin", "4-6 mois"], color: "blue" },
          { name: "App Enterprise", price: "60 000€+", features: ["Fonctionnalités avancées", "Intégrations multiples", "Scalabilité", "6-12 mois"], color: "purple" }
        ]
      },
      cities: {
        title: "Nous Servons Toute la France",
        list: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Bordeaux", "Lille", "Strasbourg", "Montpellier"]
      },
      cta: {
        title: "Lancez Votre Projet Mobile en France",
        subtitle: "Consultation gratuite de 30 minutes avec nos experts",
        button: "Demander un Devis Gratuit"
      },
      faq: {
        title: "Questions Fréquentes",
        items: [
          { q: "Combien coûte une application mobile en France en 2026 ?", a: "Le coût varie de 15 000€ pour un MVP à plus de 100 000€ pour une application enterprise complexe. Nous proposons des devis détaillés gratuits adaptés à votre projet." },
          { q: "Combien de temps pour développer une app mobile ?", a: "Un MVP peut être livré en 2-3 mois. Une application complète nécessite généralement 4-6 mois. Les projets enterprise peuvent prendre 6-12 mois." },
          { q: "Flutter ou React Native pour mon projet ?", a: "Flutter offre de meilleures performances et un design plus cohérent. React Native est idéal si vous avez déjà une équipe JavaScript. Nous vous conseillons selon votre contexte." },
          { q: "Proposez-vous la maintenance après lancement ?", a: "Oui, nous proposons des contrats de maintenance incluant mises à jour OS, corrections de bugs, évolutions fonctionnelles et support technique." }
        ]
      }
    },
    en: {
      title: "Mobile App Development France & Europe 2026: Complete Guide",
      metaTitle: "Mobile App Development France 2026 | Expert European Agency",
      metaDescription: "Mobile application development in France and Europe in 2026. iOS, Android, Flutter, React Native solutions. Free quote. Certified agency Paris, Lyon, Marseille.",
      subtitle: "Build your mobile app with an expert agency for the European market",
      category: "Mobile",
      readTime: "12 min",
      author: "Symloop Team",
      date: "2026-01-02",
      backLink: "Back to Blog",
      intro: "The French mobile app market represents over €4.5 billion in 2026. With 95% of French people equipped with smartphones and accelerated post-COVID digitalization, developing a mobile application has become a strategic investment for any company targeting the European market.",
      statsTitle: "Mobile Market France & Europe 2026",
      stats: [
        { value: "95%", label: "French with smartphone" },
        { value: "€4.5B", label: "France app market" },
        { value: "85%", label: "Mobile purchases" },
        { value: "+35%", label: "Annual growth" }
      ],
      sections: [
        {
          title: "Why Develop a Mobile App for the French Market?",
          items: [
            { title: "A Market of 67 Million Consumers", desc: "France offers a mature market with high purchasing power. French consumers spend an average of 4h30 per day on their smartphone, 90% of which on applications.", color: "blue" },
            { title: "Native GDPR Compliance", desc: "Our European expertise guarantees 100% GDPR-compliant applications from design. Data protection, user consent, and enhanced security.", color: "green" },
            { title: "European Payment Integration", desc: "Apple Pay, Google Pay, Stripe, PayPal, instant SEPA transfers. All payment solutions to maximize your conversions in the European market.", color: "purple" }
          ]
        },
        {
          title: "Mobile Technologies 2026: Our Expertise",
          items: [
            { title: "Flutter & Dart", desc: "A single codebase for iOS and Android. Native performance, 40% faster development, simplified maintenance. Used by BMW, Alibaba, Google.", color: "cyan" },
            { title: "React Native", desc: "The JavaScript/TypeScript ecosystem for performant apps. Ideal if you already have a React web team. Facebook, Instagram, Airbnb use it.", color: "blue" },
            { title: "Native Swift & Kotlin", desc: "For maximum performance on iOS and Android. Recommended for gaming apps, AR/VR, or requiring advanced hardware features.", color: "orange" }
          ]
        },
        {
          title: "Our Services for France and Europe",
          items: [
            { title: "Mobile Audit & Strategy", desc: "Market analysis, competition study, key feature definition, wireframes and interactive prototypes.", color: "indigo" },
            { title: "Premium UX/UI Design", desc: "Elegant interfaces respecting European standards. User testing, WCAG 2.1 accessibility, custom design system.", color: "pink" },
            { title: "Development & Testing", desc: "Agile methodology, 2-week sprints, automated testing, rigorous QA. Continuous delivery with regular demos.", color: "green" },
            { title: "Publishing & Marketing", desc: "App Store and Google Play submission, ASO (App Store Optimization), launch strategy, analytics and KPIs.", color: "amber" }
          ]
        }
      ],
      pricing: {
        title: "Mobile Development Pricing France 2026",
        subtitle: "Transparent investment, European quality",
        plans: [
          { name: "MVP App", price: "€15,000 - €30,000", features: ["5-8 essential screens", "iOS or Android", "Basic backend", "2-3 months"], color: "gray" },
          { name: "Business App", price: "€30,000 - €60,000", features: ["15-25 screens", "iOS + Android", "API & Admin dashboard", "4-6 months"], color: "blue" },
          { name: "Enterprise App", price: "€60,000+", features: ["Advanced features", "Multiple integrations", "Scalability", "6-12 months"], color: "purple" }
        ]
      },
      cities: {
        title: "We Serve All of France",
        list: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Bordeaux", "Lille", "Strasbourg", "Montpellier"]
      },
      cta: {
        title: "Launch Your Mobile Project in France",
        subtitle: "Free 30-minute consultation with our experts",
        button: "Request Free Quote"
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "How much does a mobile app cost in France in 2026?", a: "Cost varies from €15,000 for an MVP to over €100,000 for a complex enterprise application. We offer free detailed quotes tailored to your project." },
          { q: "How long to develop a mobile app?", a: "An MVP can be delivered in 2-3 months. A complete application typically requires 4-6 months. Enterprise projects can take 6-12 months." },
          { q: "Flutter or React Native for my project?", a: "Flutter offers better performance and more consistent design. React Native is ideal if you already have a JavaScript team. We advise you based on your context." },
          { q: "Do you offer maintenance after launch?", a: "Yes, we offer maintenance contracts including OS updates, bug fixes, functional evolutions and technical support." }
        ]
      }
    },
    ar: {
      title: "تطوير تطبيقات الجوال فرنسا وأوروبا 2026: الدليل الشامل",
      metaTitle: "تطوير تطبيقات الجوال فرنسا 2026 | وكالة خبيرة أوروبية",
      metaDescription: "تطوير تطبيقات الجوال في فرنسا وأوروبا في 2026. حلول iOS و Android و Flutter و React Native. عرض أسعار مجاني. وكالة معتمدة باريس، ليون، مارسيليا.",
      subtitle: "أنشئ تطبيقك للجوال مع وكالة خبيرة في السوق الأوروبية",
      category: "موبايل",
      readTime: "12 دقيقة",
      author: "فريق سيملوب",
      date: "2026-01-02",
      backLink: "العودة للمدونة",
      intro: "يمثل سوق تطبيقات الجوال الفرنسي أكثر من 4.5 مليار يورو في 2026. مع 95% من الفرنسيين مجهزين بالهواتف الذكية والتحول الرقمي المتسارع بعد كوفيد، أصبح تطوير تطبيق جوال استثماراً استراتيجياً لأي شركة تستهدف السوق الأوروبية.",
      statsTitle: "سوق الجوال فرنسا وأوروبا 2026",
      stats: [
        { value: "95%", label: "فرنسيين بهواتف ذكية" },
        { value: "4.5 مليار€", label: "سوق التطبيقات فرنسا" },
        { value: "85%", label: "مشتريات عبر الجوال" },
        { value: "+35%", label: "نمو سنوي" }
      ],
      sections: [
        {
          title: "لماذا تطوير تطبيق جوال للسوق الفرنسية؟",
          items: [
            { title: "سوق من 67 مليون مستهلك", desc: "تقدم فرنسا سوقاً ناضجة بقدرة شرائية عالية. يقضي المستهلكون الفرنسيون في المتوسط 4 ساعات و30 دقيقة يومياً على هواتفهم الذكية، 90% منها على التطبيقات.", color: "blue" },
            { title: "التوافق الأصلي مع GDPR", desc: "خبرتنا الأوروبية تضمن تطبيقات متوافقة 100% مع GDPR من التصميم. حماية البيانات، موافقة المستخدم، وأمان معزز.", color: "green" },
            { title: "تكامل المدفوعات الأوروبية", desc: "Apple Pay، Google Pay، Stripe، PayPal، تحويلات SEPA الفورية. جميع حلول الدفع لتعظيم تحويلاتك في السوق الأوروبية.", color: "purple" }
          ]
        },
        {
          title: "تقنيات الجوال 2026: خبرتنا",
          items: [
            { title: "Flutter و Dart", desc: "قاعدة كود واحدة لـ iOS و Android. أداء أصلي، تطوير أسرع بـ 40%، صيانة مبسطة. تستخدمه BMW، علي بابا، جوجل.", color: "cyan" },
            { title: "React Native", desc: "نظام JavaScript/TypeScript للتطبيقات عالية الأداء. مثالي إذا كان لديك فريق ويب React. تستخدمه فيسبوك، إنستغرام، Airbnb.", color: "blue" },
            { title: "Swift و Kotlin الأصلية", desc: "لأقصى أداء على iOS و Android. موصى به لتطبيقات الألعاب، AR/VR، أو التي تتطلب ميزات أجهزة متقدمة.", color: "orange" }
          ]
        },
        {
          title: "خدماتنا لفرنسا وأوروبا",
          items: [
            { title: "التدقيق والاستراتيجية المحمولة", desc: "تحليل السوق، دراسة المنافسة، تحديد الميزات الرئيسية، إطارات سلكية ونماذج أولية تفاعلية.", color: "indigo" },
            { title: "تصميم UX/UI متميز", desc: "واجهات أنيقة تحترم المعايير الأوروبية. اختبارات المستخدم، إمكانية الوصول WCAG 2.1، نظام تصميم مخصص.", color: "pink" },
            { title: "التطوير والاختبار", desc: "منهجية Agile، دورات أسبوعين، اختبارات آلية، ضمان جودة صارم. تسليم مستمر مع عروض توضيحية منتظمة.", color: "green" },
            { title: "النشر والتسويق", desc: "إرسال App Store و Google Play، ASO، استراتيجية الإطلاق، التحليلات ومؤشرات الأداء.", color: "amber" }
          ]
        }
      ],
      pricing: {
        title: "أسعار تطوير الجوال فرنسا 2026",
        subtitle: "استثمار شفاف، جودة أوروبية",
        plans: [
          { name: "تطبيق MVP", price: "15,000€ - 30,000€", features: ["5-8 شاشات أساسية", "iOS أو Android", "خلفية أساسية", "2-3 أشهر"], color: "gray" },
          { name: "تطبيق أعمال", price: "30,000€ - 60,000€", features: ["15-25 شاشة", "iOS + Android", "API ولوحة إدارة", "4-6 أشهر"], color: "blue" },
          { name: "تطبيق مؤسسي", price: "60,000€+", features: ["ميزات متقدمة", "تكاملات متعددة", "قابلية التوسع", "6-12 شهر"], color: "purple" }
        ]
      },
      cities: {
        title: "نخدم كل فرنسا",
        list: ["باريس", "ليون", "مارسيليا", "تولوز", "نيس", "نانت", "بوردو", "ليل", "ستراسبورغ", "مونبلييه"]
      },
      cta: {
        title: "أطلق مشروعك المحمول في فرنسا",
        subtitle: "استشارة مجانية لمدة 30 دقيقة مع خبرائنا",
        button: "اطلب عرض أسعار مجاني"
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          { q: "كم تكلفة تطبيق جوال في فرنسا في 2026؟", a: "تتراوح التكلفة من 15,000€ لـ MVP إلى أكثر من 100,000€ لتطبيق مؤسسي معقد. نقدم عروض أسعار مفصلة مجانية مخصصة لمشروعك." },
          { q: "كم من الوقت لتطوير تطبيق جوال؟", a: "يمكن تسليم MVP في 2-3 أشهر. التطبيق الكامل يتطلب عادة 4-6 أشهر. مشاريع المؤسسات قد تستغرق 6-12 شهراً." },
          { q: "Flutter أم React Native لمشروعي؟", a: "Flutter يوفر أداء أفضل وتصميم أكثر اتساقاً. React Native مثالي إذا كان لديك فريق JavaScript. ننصحك حسب سياقك." },
          { q: "هل تقدمون الصيانة بعد الإطلاق؟", a: "نعم، نقدم عقود صيانة تشمل تحديثات نظام التشغيل، إصلاح الأخطاء، التطورات الوظيفية والدعم الفني." }
        ]
      }
    }
  };

  const c = content[locale] || content.fr;
  const colorMap = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-600' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600' },
    gray: { bg: 'bg-gray-100', text: 'text-gray-600' }
  };

  const handleContact = () => {
    window.location.href = '/#company-contact-section';
  };

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta name="keywords" content="développement application mobile France, app mobile Paris, agence mobile Europe, Flutter France, React Native Europe, iOS Android développement, application mobile 2026, création app France" />
        <link rel="canonical" href={`https://symloop.com/${locale}/blog/developpement-application-mobile-france-europe-2026`} />
        <meta property="og:title" content={c.title} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://symloop.com/${locale}/blog/developpement-application-mobile-france-europe-2026`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.title} />
        <meta name="twitter:description" content={c.metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Symloop" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/developpement-application-mobile-france-europe-2026" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/developpement-application-mobile-france-europe-2026" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/developpement-application-mobile-france-europe-2026" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": c.title,
          "description": c.metaDescription,
          "author": { "@type": "Organization", "name": "Symloop" },
          "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }},
          "datePublished": "2026-01-02",
          "dateModified": "2026-01-02"
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": c.faq.items.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        })}} />
      </Head>

      <article className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Hero */}
        <div className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {c.backLink}
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">{c.category}</span>
              <span className="text-gray-400 text-sm">{c.readTime}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">{c.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{c.subtitle}</p>

            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2"><User className="w-4 h-4" />{c.author}</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{c.date}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-12">{c.intro}</p>

          {/* Stats */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-xl p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-500" />
              {c.statsTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {c.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sections */}
          {c.sections.map((section, idx) => (
            <section key={idx} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-100">{section.title}</h2>
              <div className="space-y-8">
                {section.items.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${colorMap[item.color].bg} rounded-xl flex items-center justify-center`}>
                      <CheckCircle className={`w-6 h-6 ${colorMap[item.color].text}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Pricing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{c.pricing.title}</h2>
            <p className="text-gray-600 mb-8">{c.pricing.subtitle}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {c.pricing.plans.map((plan, i) => (
                <div key={i} className={`p-6 rounded-2xl border-2 ${i === 1 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{plan.price}</div>
                  <ul className="space-y-2">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Cities */}
          <section className="mb-12 bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6" />
              {c.cities.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {c.cities.list.map((city, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200">{city}</span>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{c.faq.title}</h2>
            <div className="space-y-6">
              {c.faq.items.map((item, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-2">{c.cta.title}</h2>
            <p className="text-blue-100 mb-6">{c.cta.subtitle}</p>
            <button onClick={handleContact} className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              {c.cta.button}
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
