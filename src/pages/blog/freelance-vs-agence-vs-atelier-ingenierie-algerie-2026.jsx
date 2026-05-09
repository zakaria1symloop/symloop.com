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
    kind: 'Guide décision', title: 'Freelance vs agence vs atelier d\'ingénierie — qui choisir pour votre projet en Algérie.',
    dek: "Trois options, trois profils de risque, trois résultats. Comment choisir le bon prestataire pour votre projet logiciel en Algérie sans le regretter 6 mois plus tard.",
    publishedAt: 'Avril 2026', readTime: '9 min de lecture', author: 'Symloop',
    intro: [
      "Quand une entreprise algérienne a besoin d'un logiciel, elle a **trois options** : un freelance, une agence digitale, ou un atelier d'ingénierie. La plupart des entreprises choisissent en fonction du prix. **C'est la pire façon de choisir.** Le prix détermine ce que vous payez le premier mois. La structure du prestataire détermine ce que vous obtenez les 36 mois suivants.",
    ],
    sections: [
      { heading: 'Le freelance — quand c\'est le bon choix', body: [
        "**Le freelance est le bon choix quand :** votre projet est petit (< 1.5M DA), bien défini, avec un périmètre fermé, et que vous avez **quelqu'un en interne capable de vérifier le code**. Un site vitrine, une landing page, un outil interne simple, une maquette Figma — le freelance est 2 à 3x moins cher et souvent plus rapide.",
        "**Le freelance est le mauvais choix quand :** votre projet dure plus de 3 mois, nécessite plusieurs compétences (design + backend + mobile + DevOps), ou doit être maintenu après livraison. **Un freelance qui tombe malade, déménage ou prend un autre contrat est un single point of failure.** Votre projet s'arrête quand il s'arrête.",
        "**Le vrai risque :** pas le prix, pas la qualité — **la continuité**. 40% des projets freelance en Algérie ne sont jamais terminés, d'après notre expérience. Le freelance n'a aucune obligation contractuelle forte, aucune équipe de backup, aucune réputation d'entreprise à protéger.",
      ]},
      { heading: 'L\'agence digitale — quand c\'est le bon choix', body: [
        "**L'agence est le bon choix quand :** vous avez besoin d'un site web, d'une campagne marketing, d'un branding, ou d'une app simple. L'agence vend du **« clé en main »** : design, développement, contenu, hébergement — dans un seul contrat. **C'est le bon modèle pour les projets où le marketing compte plus que l'ingénierie.**",
        "**L'agence est le mauvais choix quand :** votre projet est technique (ERP, intégrations, IA, IoT, architecture complexe). La plupart des agences algériennes **n'ont pas d'ingénieurs seniors** — elles ont des développeurs juniors supervisés par un chef de projet non technique. Le code qui sort est souvent un WordPress bricolé ou un React copié de StackOverflow.",
        "**Le vrai risque :** pas le prix — **le code**. Quand l'agence livre et que vous avez besoin de modifier, maintenir ou étendre 18 mois plus tard, vous découvrez que **personne ne peut toucher au code** parce qu'il n'a jamais été écrit pour être maintenu. Vous payez deux fois : la première pour construire, la deuxième pour reconstruire.",
      ]},
      { heading: 'L\'atelier d\'ingénierie — quand c\'est le bon choix', body: [
        "**L'atelier d'ingénierie est le bon choix quand :** votre projet est le système sur lequel votre entreprise va tourner pendant 5 à 10 ans. ERP, plateforme SaaS, app fintech, système IoT industriel, infrastructure cloud — **les systèmes qui ne peuvent pas casser, qui doivent évoluer, et qui doivent être maintenus par une équipe interne après livraison**.",
        "**L'atelier est le mauvais choix quand :** votre budget est inférieur à 3M DA ou que votre besoin est marketing (branding, site vitrine, campagne). Un atelier d'ingénierie pour un site vitrine, c'est comme embaucher un architecte pour poser une étagère.",
        "**La différence structurelle :** un atelier a des **ingénieurs seniors salariés** (pas des freelances en régie), un **process de code review** (chaque ligne est relue par un pair), des **tests automatisés** (le code est vérifié par des machines), une **CI/CD** (le déploiement est automatique), et une **documentation technique** (l'équipe suivante peut reprendre). **C'est ce qui fait que le système tient dans le temps.**",
      ]},
      { heading: 'Le tableau comparatif honnête', body: [
        "**Prix typique en Algérie :** Freelance = **200K–2M DA** · Agence = **500K–5M DA** · Atelier = **3–25M DA**",
        "**Délai typique :** Freelance = **2–8 semaines** · Agence = **4–12 semaines** · Atelier = **8–24 semaines**",
        "**Code review :** Freelance = **aucun** · Agence = **rare** · Atelier = **systématique**",
        "**Tests automatisés :** Freelance = **jamais** · Agence = **parfois** · Atelier = **toujours**",
        "**Documentation :** Freelance = **aucune** · Agence = **basique** · Atelier = **technique complète**",
        "**Propriété du code :** Freelance = **souvent flou** · Agence = **négociable** · Atelier = **transféré dès jour 1**",
        "**Maintenance post-livraison :** Freelance = **dépend de sa disponibilité** · Agence = **contrat séparé** · Atelier = **inclus 3 mois minimum**",
        "**Risque de disparition :** Freelance = **élevé** · Agence = **moyen** · Atelier = **faible** (entreprise avec siège, contrats, employés)",
      ]},
      { heading: 'Notre recommandation', body: [
        "**Prenez un freelance si :** projet < 1.5M DA + périmètre fermé + quelqu'un en interne peut vérifier le code.",
        "**Prenez une agence si :** le projet est marketing-first (branding, site vitrine, campagne) + budget 500K–5M DA.",
        "**Prenez un atelier d'ingénierie si :** le projet est le système sur lequel votre entreprise va tourner + budget > 3M DA + vous voulez un code maintenable qui vous appartient.",
        "**Si vous n'êtes pas sûr :** décrivez votre projet sur WhatsApp. Si c'est un projet pour un freelance ou une agence, nous vous le dirons. **Nous n'avons aucun intérêt à prendre un projet qui ne nous correspond pas.**",
      ]},
    ],
    pullQuote1: "Le prix détermine ce que vous payez le premier mois. La structure du prestataire détermine ce que vous obtenez les 36 mois suivants.",
    pullQuote2: "Un atelier d'ingénierie pour un site vitrine, c'est comme embaucher un architecte pour poser une étagère.",
    cta: { eyebrow: 'Parlez à un ingénieur', title: "Freelance, agence ou atelier ? Décrivez votre projet en 5 minutes — nous vous dirons qui choisir." },
    related: { insights: [{ key: 'cost', name: 'Le vrai coût du développement logiciel en Algérie' }, { key: 'ai-cto', name: "Vous n'avez pas besoin d'un CTO. Vous avez besoin d'une colonne vertébrale IA." }], services: [{ key: 'software-engineering', name: 'Ingénierie logicielle' }, { key: 'consulting', name: 'Conseil technologique' }] },
  },
  en: {
    kind: 'Decision guide', title: 'Freelance vs agency vs engineering workshop — who to choose for your project in Algeria.',
    dek: 'Three options, three risk profiles, three outcomes. How to choose the right vendor for your software project in Algeria without regretting it 6 months later.',
    publishedAt: 'April 2026', readTime: '9 min read', author: 'Symloop',
    intro: ["When an Algerian company needs software, it has **three options**: a freelancer, a digital agency, or an engineering workshop. Most companies choose based on price. **That is the worst way to choose.** Price determines what you pay the first month. The vendor's structure determines what you get the next 36 months."],
    sections: [
      { heading: 'The freelancer — when it is the right choice', body: ["**Right when:** project is small (< 1.5M DZD), well-defined, closed scope, and you have **someone internal who can verify the code**. A showcase site, a landing page, a simple internal tool.", "**Wrong when:** project lasts 3+ months, requires multiple skills, or must be maintained. **A freelancer who gets sick or takes another contract is a single point of failure.**", "**The real risk:** not price, not quality — **continuity**. 40% of freelance projects in Algeria are never completed."] },
      { heading: 'The digital agency — when it is the right choice', body: ["**Right when:** you need a website, marketing campaign, branding, or simple app. The agency sells **turnkey**: design, dev, content, hosting — one contract. **Good for projects where marketing matters more than engineering.**", "**Wrong when:** project is technical (ERP, integrations, AI, IoT). Most Algerian agencies **do not have senior engineers**.", "**The real risk:** not price — **the code**. 18 months later you discover **nobody can touch the code** because it was never written to be maintained. You pay twice."] },
      { heading: 'The engineering workshop — when it is the right choice', body: ["**Right when:** the project is the system your company will run on for 5-10 years. **Systems that cannot break, must evolve, and must be maintained by an internal team after delivery.**", "**Wrong when:** budget < 3M DZD or the need is marketing (branding, showcase site).", "**The structural difference:** salaried senior engineers, code review on every commit, automated tests, CI/CD, technical documentation. **That is what makes the system last.**"] },
      { heading: 'The honest comparison table', body: ["**Typical Algeria price:** Freelance = **200K–2M DZD** · Agency = **500K–5M DZD** · Workshop = **3–25M DZD**", "**Code review:** Freelance = **none** · Agency = **rare** · Workshop = **systematic**", "**Automated tests:** Freelance = **never** · Agency = **sometimes** · Workshop = **always**", "**Code ownership:** Freelance = **often unclear** · Agency = **negotiable** · Workshop = **transferred day 1**", "**Disappearance risk:** Freelance = **high** · Agency = **medium** · Workshop = **low**"] },
      { heading: 'Our recommendation', body: ["**Take a freelancer if:** project < 1.5M DZD + closed scope + internal code reviewer.", "**Take an agency if:** marketing-first project + budget 500K–5M DZD.", "**Take a workshop if:** system your company runs on + budget > 3M DZD + you want maintainable code you own.", "**Not sure?** Describe your project on WhatsApp. If it is a freelancer or agency project, we will tell you."] },
    ],
    pullQuote1: 'Price determines what you pay the first month. The vendor structure determines what you get the next 36 months.',
    pullQuote2: 'An engineering workshop for a showcase site is like hiring an architect to install a shelf.',
    cta: { eyebrow: 'Talk to an engineer', title: 'Freelance, agency, or workshop? Describe your project in 5 minutes — we will tell you who to choose.' },
    related: { insights: [{ key: 'cost', name: 'The real cost of building software in Algeria' }, { key: 'ai-cto', name: "You don't need a CTO. You need an AI operations backbone." }], services: [{ key: 'software-engineering', name: 'Software Engineering' }, { key: 'consulting', name: 'Technology Consulting' }] },
  },
  ar: {
    kind: 'دليل قرار', title: 'مستقل مقابل وكالة مقابل ورشة هندسة — من تختار لمشروعك في الجزائر.',
    dek: 'ثلاثة خيارات، ثلاثة ملفات مخاطر، ثلاث نتائج. كيف تختار المزود الصحيح لمشروعك البرمجي في الجزائر.',
    publishedAt: 'أبريل 2026', readTime: '9 دقائق قراءة', author: 'سيملوب',
    intro: ['عندما تحتاج شركة جزائرية إلى برنامج، لديها **ثلاثة خيارات**: مستقل، وكالة رقمية، أو ورشة هندسة. معظم الشركات تختار بناءً على السعر. **هذه أسوأ طريقة للاختيار.** السعر يحدد ما تدفعه الشهر الأول. هيكل المزود يحدد ما تحصل عليه الـ36 شهراً التالية.'],
    sections: [
      { heading: 'المستقل — متى يكون الاختيار الصحيح', body: ['**صحيح عندما:** المشروع صغير (< 1.5 مليون دج)، محدد جيداً، نطاق مغلق، و**لديك شخص داخلي يمكنه التحقق من الشيفرة**.', '**خاطئ عندما:** المشروع يستمر أكثر من 3 أشهر أو يحتاج عدة تخصصات. **المستقل الذي يمرض أو يأخذ عقداً آخر هو نقطة فشل وحيدة.**', '**الخطر الحقيقي:** ليس السعر — **الاستمرارية**. 40% من مشاريع المستقلين في الجزائر لا تكتمل أبداً.'] },
      { heading: 'الوكالة الرقمية — متى تكون الاختيار الصحيح', body: ['**صحيح عندما:** تحتاج موقعاً أو حملة تسويقية أو هوية بصرية. الوكالة تبيع **"مفتاح في اليد"**.', '**خاطئ عندما:** المشروع تقني (ERP، تكاملات، ذكاء اصطناعي). معظم الوكالات الجزائرية **ليس لديها مهندسون كبار**.', '**الخطر الحقيقي:** ليس السعر — **الشيفرة**. بعد 18 شهراً تكتشف أن **لا أحد يستطيع لمس الشيفرة**. تدفع مرتين.'] },
      { heading: 'ورشة الهندسة — متى تكون الاختيار الصحيح', body: ['**صحيح عندما:** المشروع هو النظام الذي ستعمل عليه شركتك لـ5-10 سنوات. **أنظمة لا يمكنها أن تنهار، يجب أن تتطور، ويجب أن يصونها فريق داخلي بعد التسليم.**', '**خاطئ عندما:** الميزانية أقل من 3 مليون دج أو الحاجة تسويقية.', '**الفرق الهيكلي:** مهندسون كبار موظفون، مراجعة شيفرة على كل commit، اختبارات آلية، CI/CD، وثائق تقنية. **هذا ما يجعل النظام يستمر.**'] },
      { heading: 'جدول المقارنة الصادق', body: ['**سعر نموذجي في الجزائر:** مستقل = **200K–2M دج** · وكالة = **500K–5M دج** · ورشة = **3–25M دج**', '**مراجعة الشيفرة:** مستقل = **لا** · وكالة = **نادراً** · ورشة = **منهجية**', '**ملكية الشيفرة:** مستقل = **غالباً غامض** · وكالة = **قابل للتفاوض** · ورشة = **تُنقل من اليوم الأول**', '**خطر الاختفاء:** مستقل = **مرتفع** · وكالة = **متوسط** · ورشة = **منخفض**'] },
      { heading: 'توصيتنا', body: ['**خذ مستقلاً إذا:** مشروع < 1.5 مليون دج + نطاق مغلق.', '**خذ وكالة إذا:** مشروع تسويقي أولاً + ميزانية 500K–5M دج.', '**خذ ورشة هندسة إذا:** النظام الذي تعمل عليه شركتك + ميزانية > 3M دج + تريد شيفرة قابلة للصيانة تملكها.', '**غير متأكد؟** صف مشروعك على واتساب. إذا كان مشروع مستقل أو وكالة، سنخبرك.'] },
    ],
    pullQuote1: 'السعر يحدد ما تدفعه الشهر الأول. هيكل المزود يحدد ما تحصل عليه الـ36 شهراً التالية.',
    pullQuote2: 'ورشة هندسة لموقع عرض مثل استئجار مهندس معماري لتركيب رف.',
    cta: { eyebrow: 'تحدث مع مهندس', title: 'مستقل أم وكالة أم ورشة؟ صف مشروعك في 5 دقائق — سنخبرك من تختار.' },
    related: { insights: [{ key: 'cost', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' }, { key: 'ai-cto', name: 'لا تحتاج إلى CTO. تحتاج إلى عمود فقري عمليات بالذكاء الاصطناعي.' }], services: [{ key: 'software-engineering', name: 'هندسة البرمجيات' }, { key: 'consulting', name: 'الاستشارات التقنية' }] },
  },
};

export default function Page() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;
  const articleLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: c.title, description: c.dek, image: ['https://symloop.com/blog/cover-freelance-vs-agence.jpg'], datePublished: '2026-04-12', author: { '@type': 'Organization', name: 'Symloop' }, mainEntityOfPage: 'https://symloop.com/blog/freelance-vs-agence-vs-atelier-ingenierie-algerie-2026/' };
  const breadcrumbs = [{ name: 'Home', url: 'https://symloop.com/' }, { name: 'Blog', url: 'https://symloop.com/blog/' }, { name: c.title, url: 'https://symloop.com/blog/freelance-vs-agence-vs-atelier-ingenierie-algerie-2026/' }];
  return (
    <>
      <SEO title={`${c.title} — Symloop`} description={c.dek} keywords="freelance vs agence algérie, choisir développeur algérie, agence web algérie vs freelance, prestataire développement logiciel algérie, atelier ingénierie algérie, software development vendor algeria, freelance developer algeria, web agency algeria comparison" type="article" structuredData={articleLd} breadcrumbs={breadcrumbs} image="/blog/cover-freelance-vs-agence.jpg" />
      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">
        <section className="relative border-b border-white/[0.06]"><div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16"><motion.div initial="hidden" animate="show" variants={stagger}><motion.div variants={fadeUp} className="flex items-center gap-3 mb-8"><Link href="/blog/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">{c.kind}</Link><span className="h-px w-12 bg-white/20" /><span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span></motion.div><motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">{c.title}</motion.h1><motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p><motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]"><span>{c.author}</span><span>{c.readTime}</span></motion.div></motion.div></div><div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden"><Image src="/blog/cover-freelance-vs-agence.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover" /></div></section>
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-7 mb-20">{c.intro.map((p,i)=><motion.p key={i} variants={fadeUp} className="text-xl lg:text-2xl text-white/80 leading-[1.55] font-light">{renderRichText(p)}</motion.p>)}</motion.div>
          {c.sections.map((s,idx) => (<div key={idx}><motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-12 lg:mb-16"><motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-6"><span className="font-mono text-xs tracking-[0.15em] text-white/30">{String(idx+1).padStart(2,'0')}</span><h2 className="text-2xl lg:text-4xl font-light tracking-tight text-white leading-[1.1]">{s.heading}</h2></motion.div><div className="space-y-5 ps-0 lg:ps-10">{s.body.map((p,i)=><motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/70 leading-[1.65]">{renderRichText(p)}</motion.p>)}</div></motion.section>{idx===0&&c.pullQuote1&&<motion.figure initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"><blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">«{c.pullQuote1}»</blockquote></motion.figure>}{idx===2&&c.pullQuote2&&<motion.figure initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"><blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">«{c.pullQuote2}»</blockquote></motion.figure>}</div>))}
        </article>
        <section className="border-t border-white/[0.06]"><div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12"><div className="lg:col-span-6"><div className="flex items-center gap-3 mb-8"><span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span><span className="h-px w-12 bg-white/20" /></div><h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-10">{c.cta.title}</h2><div className="flex flex-wrap gap-4"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"><MessageCircle className="w-4 h-4" strokeWidth={1.75}/><span>WhatsApp</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75}/></a><Link href="/contact/" className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors"><span>Contact</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5}/></Link></div></div><div className="lg:col-span-6"><div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">— Related</div><ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">{c.related.insights.map(it=><li key={it.key} className="bg-black"><Link href={`/insights/${it.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]"><div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Insight</div><h3 className="text-base font-light text-white leading-snug">{it.name}</h3></Link></li>)}{c.related.services.map(s=><li key={s.key} className="bg-black"><Link href={`/services/${s.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]"><div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Service</div><h3 className="text-base font-light text-white leading-snug">{s.name}</h3></Link></li>)}</ul></div></div></div></section>
      </main>
    </>
  );
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
