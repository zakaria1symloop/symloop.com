import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, MessageCircle } from 'lucide-react';
import SEO from '../../components/SEO';

const WHATSAPP_URL = 'https://wa.me/213549575512';
function renderRichText(text) { return String(text).split(/(\*\*[^*]+\*\*)/g).map((p,i) => p.startsWith('**')&&p.endsWith('**') ? <span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2,-2)}</span> : <span key={i}>{p}</span>); }
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

const CONTENT = {
  fr: {
    kind: 'Guide prix', title: 'Combien coûte une application mobile en Algérie en 2026 — tarifs réels.',
    dek: "Pas de fourchette vague. Des prix réels en dinars, par catégorie d'app, avec ce qui est inclus et ce qui ne l'est pas. Écrit par l'atelier qui les livre.",
    publishedAt: 'Avril 2026', readTime: '7 min de lecture', author: 'Symloop',
    intro: ["Vous avez tapé **« prix application mobile Algérie »** sur Google. Vous avez trouvé 10 pages qui disent toutes la même chose : **« ça dépend »**. Utile. Voici la version honnête, avec des chiffres réels en dinars algériens, pour des apps réelles que nous livrons en 2026."],
    sections: [
      { heading: 'Les 4 catégories de prix', body: [] },
      { heading: 'Catégorie 1 — App vitrine / catalogue (1.5–4M DA)', body: [
        "Une app qui **affiche des informations** : catalogue produits, menu restaurant, présentation entreprise, localisation sur carte. Pas de compte utilisateur, pas de paiement, pas de backend complexe. **iOS + Android en Flutter ou React Native.** Délai : 4 à 8 semaines.",
        "**Ce qui est inclus :** design UI/UX, développement cross-platform, publication App Store + Google Play, 30 jours de support post-lancement. **Ce qui n'est pas inclus :** backend sur mesure, authentification, paiement en ligne.",
      ]},
      { heading: 'Catégorie 2 — App avec compte utilisateur (4–8M DA)', body: [
        "Une app où **les utilisateurs se connectent** : profil, historique, favoris, notifications push. Backend avec base de données, API REST, authentification JWT. **Le saut de prix vient de l'authentification et du backend** — pas de l'interface.",
        "**Ce qui est inclus :** tout ce qui précède + backend Node.js/NestJS, base Postgres, authentification email/SMS, notifications push, tableau de bord admin basique. **Délai : 8 à 12 semaines.**",
      ]},
      { heading: 'Catégorie 3 — App transactionnelle / fintech (8–15M DA)', body: [
        "Une app avec **paiement intégré** : e-commerce, livraison, réservation, abonnement. Intégrations CIB, Edahabia, SATIM. **Le prix monte à cause des intégrations de paiement algériennes** — chacune est un mini-projet en soi.",
        "**Ce qui est inclus :** tout ce qui précède + intégration CIB/Edahabia/SATIM, intégration transporteurs (Yalidine, ZR Express), système de commande/panier, emails transactionnels, analytics. **Délai : 12 à 16 semaines.**",
      ]},
      { heading: 'Catégorie 4 — App enterprise / plateforme (15–40M DA)', body: [
        "Une app complexe : **marketplace multi-faces, super-app, app bancaire, plateforme B2B** avec plusieurs rôles utilisateurs, workflows métier, intégrations multiples, conformité réglementaire. **Le prix est porté par la complexité métier**, pas par le nombre d'écrans.",
        "**Ce qui est inclus :** architecture sur mesure, multi-rôles, API multiples, intégrations bancaires/gouvernementales, tests de charge, audit sécurité, conformité loi 18-07 si données personnelles. **Délai : 16 à 24 semaines.**",
      ]},
      { heading: 'Les 3 coûts cachés que personne ne chiffre', body: [
        "**1. Maintenance annuelle : 15–25% du coût initial.** Apple et Google sortent de nouvelles versions d'OS chaque année. Si votre app ne s'adapte pas, elle casse. **Budgétez 15 à 25% du coût initial par an pour la maintenance.**",
        "**2. Publication sur les stores : 100 USD + 25 USD.** Compte développeur Apple = 99 USD/an. Compte développeur Google = 25 USD une fois. Plus le temps de préparer les screenshots, descriptions, et de passer la review Apple (qui peut prendre 1 à 5 jours).",
        "**3. Hébergement backend : 5K–50K DA/mois.** Votre app ne tourne pas dans le vide. Le backend a besoin d'un serveur. **Comptez 5 000 à 50 000 DA/mois** selon le trafic. La plupart des devis « oublient » cette ligne.",
      ]},
    ],
    pullQuote1: "Le prix d'une app mobile en Algérie n'est pas un mystère. C'est un calcul : catégorie × intégrations × maintenance.",
    pullQuote2: "La plupart des devis « oublient » l'hébergement, la maintenance annuelle et la publication stores. Pas les nôtres.",
    cta: { eyebrow: 'Parlez à un ingénieur mobile', title: "Décrivez votre app en 5 minutes — nous vous dirons dans quelle catégorie elle tombe et combien elle coûte." },
    related: { insights: [{ key: 'cost', name: 'Le vrai coût du développement logiciel en Algérie' }], services: [{ key: 'mobile', name: 'Ingénierie Mobile' }, { key: 'product', name: 'Ingénierie Produit' }] },
  },
  en: {
    kind: 'Pricing guide', title: 'How much does a mobile app cost in Algeria in 2026 — real prices.',
    dek: "No vague ranges. Real prices in dinars, by app category, with what is included and what is not. Written by the workshop that ships them.",
    publishedAt: 'April 2026', readTime: '7 min read', author: 'Symloop',
    intro: ["You searched **\"mobile app cost Algeria\"** on Google. You found 10 pages that all say the same thing: **\"it depends\"**. Helpful. Here is the honest version, with real numbers in Algerian dinars, for real apps we ship in 2026."],
    sections: [
      { heading: 'The 4 price categories', body: [] },
      { heading: 'Category 1 — Showcase / catalogue app (1.5–4M DZD)', body: ["An app that **displays information**: product catalogue, restaurant menu, company presentation. No user accounts, no payments. **iOS + Android in Flutter or React Native.** Timeline: 4 to 8 weeks.", "**Included:** UI/UX design, cross-platform dev, App Store + Google Play publishing, 30 days post-launch support. **Not included:** custom backend, authentication, online payments."] },
      { heading: 'Category 2 — App with user accounts (4–8M DZD)', body: ["An app where **users log in**: profile, history, favorites, push notifications. Backend with database, REST API, JWT auth. **The price jump comes from authentication and backend** — not the interface.", "**Included:** everything above + Node.js/NestJS backend, Postgres DB, email/SMS auth, push notifications, basic admin dashboard. **Timeline: 8 to 12 weeks.**"] },
      { heading: 'Category 3 — Transactional / fintech app (8–15M DZD)', body: ["An app with **integrated payments**: e-commerce, delivery, booking, subscription. CIB, Edahabia, SATIM integrations. **Price goes up because of Algerian payment integrations** — each is a mini-project.", "**Included:** everything above + CIB/Edahabia/SATIM, carrier integrations (Yalidine, ZR Express), order/cart system, transactional emails, analytics. **Timeline: 12 to 16 weeks.**"] },
      { heading: 'Category 4 — Enterprise / platform app (15–40M DZD)', body: ["A complex app: **multi-sided marketplace, super-app, banking app, B2B platform** with multiple user roles, business workflows, multiple integrations. **Price is driven by business complexity**, not screen count.", "**Included:** custom architecture, multi-role, multiple APIs, banking/government integrations, load testing, security audit, Law 18-07 compliance. **Timeline: 16 to 24 weeks.**"] },
      { heading: 'The 3 hidden costs nobody quotes', body: ["**1. Annual maintenance: 15–25% of initial cost.** Apple and Google release new OS versions yearly. Budget **15 to 25% of initial cost per year.**", "**2. Store publishing: 100 USD + 25 USD.** Apple Developer = 99 USD/year. Google Developer = 25 USD one-time.", "**3. Backend hosting: 5K–50K DZD/month.** Your app needs a server. **Count 5,000 to 50,000 DZD/month.** Most quotes \"forget\" this line."] },
    ],
    pullQuote1: "The cost of a mobile app in Algeria is not a mystery. It is a calculation: category × integrations × maintenance.",
    pullQuote2: "Most quotes \"forget\" hosting, annual maintenance, and store publishing. Ours do not.",
    cta: { eyebrow: 'Talk to a mobile engineer', title: "Describe your app in 5 minutes — we will tell you which category it falls in and how much it costs." },
    related: { insights: [{ key: 'cost', name: 'The real cost of building software in Algeria' }], services: [{ key: 'mobile', name: 'Mobile Engineering' }, { key: 'product', name: 'Product Engineering' }] },
  },
  ar: {
    kind: 'دليل أسعار', title: 'كم يكلف تطبيق جوال في الجزائر في 2026 — أسعار حقيقية.',
    dek: 'لا نطاقات غامضة. أسعار حقيقية بالدينار، حسب فئة التطبيق، مع ما هو مشمول وما ليس كذلك.',
    publishedAt: 'أبريل 2026', readTime: '7 دقائق قراءة', author: 'سيملوب',
    intro: ['بحثت عن **"سعر تطبيق جوال الجزائر"** في Google. وجدت 10 صفحات كلها تقول نفس الشيء: **"يعتمد"**. مفيد. إليك النسخة الصادقة، بأرقام حقيقية بالدينار الجزائري.'],
    sections: [
      { heading: 'فئات الأسعار الأربع', body: [] },
      { heading: 'الفئة 1 — تطبيق عرض / كتالوج (1.5–4 مليون دج)', body: ['تطبيق **يعرض معلومات**: كتالوج منتجات، قائمة مطعم. لا حسابات مستخدمين، لا دفع. **iOS + Android بـ Flutter أو React Native.** المدة: 4 إلى 8 أسابيع.'] },
      { heading: 'الفئة 2 — تطبيق بحسابات مستخدمين (4–8 مليون دج)', body: ['تطبيق **المستخدمون يسجلون دخولهم**: ملف شخصي، سجل، مفضلات، إشعارات. **قفزة السعر تأتي من المصادقة والخلفية** — ليس من الواجهة. المدة: 8 إلى 12 أسبوعاً.'] },
      { heading: 'الفئة 3 — تطبيق معاملات / فينتك (8–15 مليون دج)', body: ['تطبيق بـ**دفع متكامل**: تجارة إلكترونية، توصيل، حجز. تكاملات CIB والذهبية وSATIM. **السعر يرتفع بسبب تكاملات الدفع الجزائرية.** المدة: 12 إلى 16 أسبوعاً.'] },
      { heading: 'الفئة 4 — تطبيق مؤسسي / منصة (15–40 مليون دج)', body: ['تطبيق معقد: **سوق متعدد الأوجه، تطبيق بنكي، منصة B2B** بأدوار متعددة. **السعر مدفوع بتعقيد الأعمال** لا بعدد الشاشات. المدة: 16 إلى 24 أسبوعاً.'] },
      { heading: 'التكاليف الثلاث المخفية التي لا يسعّرها أحد', body: ['**1. الصيانة السنوية: 15–25% من التكلفة الأولية.**', '**2. النشر على المتاجر: 100 + 25 دولار.**', '**3. استضافة الخلفية: 5K–50K دج/شهرياً.** معظم العروض "تنسى" هذا السطر.'] },
    ],
    pullQuote1: 'تكلفة تطبيق جوال في الجزائر ليست غامضة. إنها حساب: الفئة × التكاملات × الصيانة.',
    pullQuote2: 'معظم العروض "تنسى" الاستضافة والصيانة السنوية والنشر على المتاجر. عروضنا لا تنسى.',
    cta: { eyebrow: 'تحدث مع مهندس جوال', title: 'صف تطبيقك في 5 دقائق — سنخبرك في أي فئة يقع وكم يكلف.' },
    related: { insights: [{ key: 'cost', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' }], services: [{ key: 'mobile', name: 'هندسة الجوال' }, { key: 'product', name: 'هندسة المنتج' }] },
  },
};

export default function Page() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;
  const articleLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: c.title, description: c.dek, image: ['https://symloop.com/blog/cover-prix-app-mobile.jpg'], datePublished: '2026-04-12', author: { '@type': 'Organization', name: 'Symloop' }, mainEntityOfPage: 'https://symloop.com/blog/prix-application-mobile-algerie-2026/' };
  const breadcrumbs = [{ name: 'Home', url: 'https://symloop.com/' }, { name: 'Blog', url: 'https://symloop.com/blog/' }, { name: c.title, url: 'https://symloop.com/blog/prix-application-mobile-algerie-2026/' }];
  return (
    <>
      <SEO title={`${c.title} — Symloop`} description={c.dek} keywords="prix application mobile algérie, cout app mobile algérie 2026, tarif développement application algérie, prix app ios android algérie, flutter react native algérie prix, mobile app cost algeria, app development pricing algeria" type="article" structuredData={articleLd} breadcrumbs={breadcrumbs} image="/blog/cover-prix-app-mobile.jpg" />
      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">
        <section className="relative border-b border-white/[0.06]"><div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16"><motion.div initial="hidden" animate="show" variants={stagger}><motion.div variants={fadeUp} className="flex items-center gap-3 mb-8"><Link href="/blog/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">{c.kind}</Link><span className="h-px w-12 bg-white/20" /><span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span></motion.div><motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">{c.title}</motion.h1><motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p><motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]"><span>{c.author}</span><span>{c.readTime}</span></motion.div></motion.div></div><div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden"><Image src="/blog/cover-prix-app-mobile.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover" /></div></section>
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-7 mb-20">{c.intro.map((p,i)=><motion.p key={i} variants={fadeUp} className="text-xl lg:text-2xl text-white/80 leading-[1.55] font-light">{renderRichText(p)}</motion.p>)}</motion.div>
          {c.sections.map((s,idx) => (<div key={idx}><motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-12 lg:mb-16"><motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-6">{idx > 0 && <span className="font-mono text-xs tracking-[0.15em] text-white/30">{String(idx).padStart(2,'0')}</span>}<h2 className={`${idx===0?'text-3xl lg:text-5xl':'text-2xl lg:text-3xl'} font-light tracking-tight text-white leading-[1.1]`}>{s.heading}</h2></motion.div><div className="space-y-5 ps-0 lg:ps-10">{s.body.map((p,i)=><motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/70 leading-[1.65]">{renderRichText(p)}</motion.p>)}</div></motion.section>{idx===2&&c.pullQuote1&&<motion.figure initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"><blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">«{c.pullQuote1}»</blockquote></motion.figure>}{idx===5&&c.pullQuote2&&<motion.figure initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"><blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">«{c.pullQuote2}»</blockquote></motion.figure>}</div>))}
        </article>
        <section className="border-t border-white/[0.06]"><div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12"><div className="lg:col-span-6"><div className="flex items-center gap-3 mb-8"><span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span><span className="h-px w-12 bg-white/20" /></div><h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-10">{c.cta.title}</h2><div className="flex flex-wrap gap-4"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"><MessageCircle className="w-4 h-4" strokeWidth={1.75}/><span>WhatsApp</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75}/></a></div></div><div className="lg:col-span-6"><div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">— Related</div><ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">{c.related.insights.map(it=><li key={it.key} className="bg-black"><Link href={`/insights/${it.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]"><div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Insight</div><h3 className="text-base font-light text-white leading-snug">{it.name}</h3></Link></li>)}{c.related.services.map(s=><li key={s.key} className="bg-black"><Link href={`/services/${s.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]"><div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Service</div><h3 className="text-base font-light text-white leading-snug">{s.name}</h3></Link></li>)}</ul></div></div></div></section>
      </main>
    </>
  );
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
