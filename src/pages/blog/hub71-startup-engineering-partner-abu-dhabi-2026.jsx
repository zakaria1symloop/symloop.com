import Image from 'next/image';import Link from 'next/link';import{motion}from'framer-motion';import{useRouter}from'next/router';import{serverSideTranslations}from'next-i18next/serverSideTranslations';import{ArrowRight,MessageCircle}from'lucide-react';import SEO from'../../components/SEO';
const W='https://wa.me/213549575512';
function R(t){return String(t).split(/(\*\*[^*]+\*\*)/g).map((p,i)=>p.startsWith('**')&&p.endsWith('**')?<span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2,-2)}</span>:<span key={i}>{p}</span>);}
const f={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}}};
const st={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:0.08,delayChildren:0.05}}};

const C={
  en:{kind:'Startup brief',title:"Why Hub71 startups are choosing nearshore engineering from Algeria.",
    dek:"400+ startups in Abu Dhabi, AED 750K in funding, and a hiring problem. How MENA nearshore solves the engineering gap for Hub71 founders — with competitive MENA rates.",
    publishedAt:'April 2026',readTime:'10 min read',author:'Symloop',
    intro:[
      "Hub71 has scaled to **400+ active startups** as of 2026, with portfolio companies collectively raising **over $4 billion**. The ecosystem is real. But here's the problem most founders discover 3 months in: **hiring senior engineers in Abu Dhabi is brutally expensive**.",
      "A senior fullstack developer in the UAE costs **AED 35,000-55,000/month** ($9,500-$15,000). Your AED 750,000 Hub71 incentive covers **one senior dev for 14-21 months** — or an entire **3-person engineering team from Algiers for 12+ months**. Same timezone region, same work culture, Arabic and English native. This isn't theoretical. It's how MENA startups are actually building.",
    ],
    sections:[
      {heading:'The Hub71 engineering gap',body:[
        "Hub71 startups get **AED 250K in cash + AED 250K in services + up to AED 250K top-up**. That's ~$204K total. For a fintech or healthtech startup, you need at minimum a **fullstack engineer, a mobile developer, and a cloud/DevOps engineer** to ship a production product.",
        "**In Abu Dhabi**, those 3 hires cost $30,000-$45,000/month in salary alone — **$360K-$540K/year**. Your Hub71 funding doesn't even cover 6 months of a 3-person team. This is why **80% of Hub71 startups with non-technical founders struggle to ship v1** within their first year.",
        "**The alternative:** A nearshore engineering team from Algeria costs **$5,000-$8,000/month per senior engineer**. A 3-person team runs **$15,000-$24,000/month** — meaning your $204K Hub71 funding covers **8-13 months of a full engineering team**. That's enough to build, launch, get traction, and raise your seed round.",
      ]},
      {heading:'Why Algeria, not India or Eastern Europe',body:[
        "When Hub71 founders think outsourcing, they usually think India ($15-25/hour) or Eastern Europe ($35-60/hour). Both have problems for MENA startups.",
        "**India:** 5.5-hour timezone gap from Abu Dhabi. Your 9am standup is their 12:30pm. By 2pm UAE time, India is wrapping up. Real-time collaboration is limited to **~4 hours overlap**. Add cultural distance and English-only communication (no Arabic support for your MENA users).",
        "**Eastern Europe (Ukraine, Poland):** Excellent quality but **$35-60/hour** — not much cheaper than local UAE hires after you factor in project management overhead. Plus zero Arabic capability.",
        "**Algeria (UTC+1):** 3 hours behind Abu Dhabi. Your 9am is their 6am — but your 11am is their 8am, giving **6+ hours of real-time overlap**. **Native Arabic + French + English.** Cost: **$25-35/hour** for senior engineers. Cultural alignment with MENA market. Understanding of Islamic fintech, Arabic NLP, RTL interfaces, local payment systems.",
      ]},
      {heading:'What Hub71 startups outsource to us',body:[
        "**Fintech backends.** Payment processing, KYC/AML compliance, transaction monitoring, multi-currency wallets. We've built banking systems in production — not toy demos. Integration with local payment rails across MENA.",
        "**AI-powered products.** 80% of Hub71's latest cohort is AI-focused. We ship production ML systems: NLP in Arabic (not just English-translated), computer vision, predictive analytics, LLM integration with RAG. Custom models trained on MENA data.",
        "**Mobile applications.** iOS + Android, Flutter or native. Multilingual by default — Arabic RTL is not an afterthought, it's built from day one. Offline-first for markets with inconsistent connectivity.",
        "**Cloud infrastructure.** Kubernetes, CI/CD, observability, FinOps. We set up production infrastructure that scales — not the typical startup spaghetti that collapses at 1,000 users.",
      ]},
      {heading:'The math: Hub71 funding × Symloop engineering',body:[
        "Let's be concrete. Here's what AED 750,000 (~$204K) buys you:",
        "**Option A — Hire in UAE:** 1 senior developer for 14-21 months. You ship slowly, have zero redundancy, and can't cover frontend + backend + mobile + cloud with one person.",
        "**Option B — Symloop nearshore team:** 3 senior engineers (fullstack + mobile + cloud) for **10-12 months**. You ship your MVP in 3-4 months, iterate for 6 months, reach traction, and still have budget left for your seed pitch.",
        "**Option C — Hybrid:** 1 UAE-based technical co-founder/CTO + 2 Symloop engineers. Best of both worlds — local leadership with nearshore execution power. Total cost: ~$180K/year.",
      ]},
      {heading:'How it works — from first call to production',body:[
        "**Week 1: Discovery call + technical proposal.** 30-minute call to understand your product, market, and technical requirements. We deliver a technical proposal with architecture, team composition, timeline, and fixed-price or T&M quote within 5 business days.",
        "**Week 2-3: Sprint 0.** CI/CD pipeline, staging environments, repository setup, design system, first working screens. You see running code within 2 weeks.",
        "**Week 4+: Production sprints.** Bi-weekly deliveries, live demos every Friday, full access to GitHub, Jira/Linear, Slack. You're not managing an outsourced team — you're working with an engineering partner.",
        "**Handover:** Complete documentation, knowledge transfer sessions, 3-month post-delivery support included. Full IP transfer from day one — NDA signed before we see your pitch deck.",
      ]},
      {heading:'Arabic-first engineering matters',body:[
        "Most offshore teams treat Arabic as a translation layer. They build in English, then add Arabic RTL as an afterthought. The result: **broken layouts, wrong number formatting, culturally tone-deaf UX**.",
        "We build multilingual-first. Our engineers understand that a fintech app for Saudi users needs different tone than one for Egyptian users. We handle **production NLP** (sentiment analysis, named entity recognition, document processing in multiple languages), **RTL-native interfaces** (not just CSS direction:rtl — proper logical properties, bidirectional text, Arabic typography), and **Islamic finance compliance** (Sharia-compliant product flows, Hijri calendar integration, prayer-time-aware notifications).",
      ]},
    ],
    cta:{eyebrow:'Building at Hub71?',title:"30 minutes. We assess your product, propose a team, and quote. Free, no commitment. We've worked with MENA startups, banks, and enterprises — we understand your market."},
    faq:[
      {q:"Can we meet in person in Abu Dhabi?",a:"Yes. Algiers to Abu Dhabi is a direct 5-hour flight. We do quarterly on-site visits for active clients. For kickoff meetings and critical milestones, we fly in."},
      {q:"Do you work with non-technical founders?",a:"That's the majority of our startup clients. We provide a technical lead who acts as your fractional CTO — making architecture decisions, managing the team, and translating business requirements into engineering specs."},
      {q:"What about IP protection?",a:"NDA signed before we see your pitch deck. All code belongs to you from the first commit. Repository under your GitHub/GitLab organization. Complete handover with documentation at project end."},
      {q:"How does payment work?",a:"Monthly invoicing in USD, EUR, or AED. Wire transfer or Wise. Net-15 terms. No upfront payment beyond Sprint 0. Fixed-price or time-and-materials — your choice."},
    ],
  },
  fr:{kind:'Brief startup',title:"Pourquoi les startups Hub71 choisissent l'ingénierie nearshore depuis l'Algérie.",
    dek:"400+ startups à Abu Dhabi, 750K AED de financement, et un problème de recrutement. Comment le nearshore MENA résout le gap ingénierie des fondateurs Hub71 — à des tarifs compétitifs pour le MENA.",
    publishedAt:'Avril 2026',readTime:'10 min de lecture',author:'Symloop',
    intro:[
      "Hub71 a atteint **plus de 400 startups actives** en 2026, avec des entreprises du portfolio ayant levé collectivement **plus de $4 milliards**. L'écosystème est réel. Mais voici le problème que la plupart des fondateurs découvrent après 3 mois : **recruter des ingénieurs seniors à Abu Dhabi est brutalement cher**.",
      "Un développeur fullstack senior aux Émirats coûte **AED 35 000-55 000/mois** ($9 500-$15 000). Votre incentive Hub71 de AED 750 000 couvre **un seul dev senior pendant 14-21 mois** — ou une **équipe de 3 ingénieurs depuis Alger pendant 12+ mois**. Même région, même culture, arabe et anglais natifs.",
    ],
    sections:[
      {heading:'Le gap ingénierie de Hub71',body:[
        "Les startups Hub71 reçoivent **AED 250K en cash + AED 250K en services + jusqu'à AED 250K en top-up**. C'est ~$204K au total. Pour une startup fintech ou healthtech, il faut au minimum un **fullstack, un développeur mobile, et un ingénieur cloud/DevOps** pour livrer un produit en production.",
        "**À Abu Dhabi**, ces 3 recrutements coûtent $30 000-$45 000/mois en salaire seul. Votre financement Hub71 ne couvre même pas 6 mois. **L'alternative :** une équipe nearshore depuis l'Algérie coûte **$15 000-$24 000/mois** pour 3 ingénieurs seniors. Vos $204K couvrent **8-13 mois d'équipe complète**.",
      ]},
      {heading:'Pourquoi l\'Algérie, pas l\'Inde ou l\'Europe de l\'Est',body:[
        "**L'Inde :** 5.5h de décalage avec Abu Dhabi. Communication limitée à ~4h d'overlap. Zéro capacité arabe.",
        "**Europe de l'Est :** Excellente qualité mais **$35-60/h** — pas beaucoup moins cher que les recrutements locaux. Zéro arabe.",
        "**L'Algérie (UTC+1) :** 3h de décalage avec Abu Dhabi. **6+ heures d'overlap réel.** Arabe natif + français + anglais. **$25-35/h** pour des ingénieurs seniors. Compréhension du marché MENA : fintech islamique, NLP arabe, interfaces RTL, systèmes de paiement locaux.",
      ]},
      {heading:'Ce que les startups Hub71 nous externalisent',body:[
        "**Backends fintech.** Paiements, KYC/AML, monitoring transactionnel, wallets multi-devises. Intégration avec les rails de paiement MENA.",
        "**Produits IA.** 80% de la dernière cohorte Hub71 est axée IA. NLP arabe en production, vision par ordinateur, analyse prédictive, intégration LLM avec RAG.",
        "**Applications mobiles.** iOS + Android, Flutter ou natif. Multilingue par défaut — l'arabe RTL n'est pas un ajout, c'est la base.",
        "**Infrastructure cloud.** Kubernetes, CI/CD, observabilité, FinOps. Infrastructure de production qui scale.",
      ]},
      {heading:'Le calcul : financement Hub71 × ingénierie Symloop',body:[
        "**Option A — Recruter aux EAU :** 1 dev senior pendant 14-21 mois. Vous livrez lentement.",
        "**Option B — Équipe nearshore Symloop :** 3 ingénieurs seniors pour **10-12 mois**. MVP en 3-4 mois, itération 6 mois, traction, et budget pour votre seed.",
        "**Option C — Hybride :** 1 CTO basé aux EAU + 2 ingénieurs Symloop. Leadership local + puissance d'exécution nearshore. ~$180K/an.",
      ]},
    ],
    cta:{eyebrow:'Vous construisez chez Hub71 ?',title:"30 minutes. On évalue votre produit, on propose une équipe, on chiffre. Gratuit, sans engagement."},
    faq:[
      {q:"Peut-on se rencontrer à Abu Dhabi ?",a:"Oui. Alger-Abu Dhabi est un vol direct de 5h. Visites sur site trimestrielles pour les clients actifs."},
      {q:"Travaillez-vous avec des fondateurs non-techniques ?",a:"C'est la majorité de nos clients startup. Nous fournissons un lead technique qui fait office de CTO fractionnel."},
      {q:"Comment fonctionne la propriété intellectuelle ?",a:"NDA signé avant de voir votre pitch deck. Tout le code vous appartient dès le premier commit. Transfert complet avec documentation."},
      {q:"Comment fonctionne le paiement ?",a:"Facturation mensuelle en USD, EUR ou AED. Virement ou Wise. Net-15. Pas de paiement initial au-delà du Sprint 0."},
    ],
  },
  ar:{kind:'ملخص للشركات الناشئة',title:"لماذا تختار شركات Hub71 الناشئة الهندسة النيرشور من الجزائر.",
    dek:"أكثر من 400 شركة ناشئة في أبوظبي، 750 ألف درهم تمويل، ومشكلة توظيف. كيف يحل النيرشور من منطقة MENA فجوة الهندسة لمؤسسي Hub71 — بأسعار تنافسية لمنطقة MENA.",
    publishedAt:'أبريل 2026',readTime:'10 دقائق قراءة',author:'سيملوب',
    intro:[
      "وصل Hub71 إلى **أكثر من 400 شركة ناشئة نشطة** في 2026، مع شركات المحفظة التي جمعت مجتمعة **أكثر من 4 مليار دولار**. النظام البيئي حقيقي. لكن هذه هي المشكلة التي يكتشفها معظم المؤسسين بعد 3 أشهر: **توظيف مهندسين كبار في أبوظبي مكلف جداً**.",
      "مطور Fullstack كبير في الإمارات يكلف **35,000-55,000 درهم/شهر**. حافز Hub71 الخاص بك البالغ 750,000 درهم يغطي **مطور كبير واحد لمدة 14-21 شهراً** — أو **فريق من 3 مهندسين من الجزائر لأكثر من 12 شهراً**. نفس المنطقة، نفس الثقافة، عربية وإنجليزية أصلية.",
    ],
    sections:[
      {heading:'فجوة الهندسة في Hub71',body:[
        "شركات Hub71 الناشئة تحصل على **250 ألف درهم نقداً + 250 ألف درهم خدمات + حتى 250 ألف درهم إضافية**. هذا ~204 ألف دولار. لشركة فينتك أو هيلثتك ناشئة، تحتاج على الأقل **مهندس Fullstack + مطور جوال + مهندس سحابة** لتسليم منتج إنتاجي.",
        "**في أبوظبي**، هذه التوظيفات الثلاثة تكلف $30,000-$45,000/شهر. تمويل Hub71 لا يغطي حتى 6 أشهر. **البديل:** فريق نيرشور من الجزائر يكلف **$15,000-$24,000/شهر** لـ 3 مهندسين كبار. $204K تغطي **8-13 شهراً من فريق كامل**.",
      ]},
      {heading:'لماذا الجزائر وليس الهند أو أوروبا الشرقية',body:[
        "**الهند:** فارق 5.5 ساعات مع أبوظبي. تداخل ~4 ساعات فقط. صفر قدرة عربية.",
        "**أوروبا الشرقية:** جودة ممتازة لكن **$35-60/ساعة**. صفر عربية.",
        "**الجزائر (UTC+1):** 3 ساعات فارق مع أبوظبي. **6+ ساعات تداخل حقيقي.** عربية أصلية + فرنسية + إنجليزية. **$25-35/ساعة**. فهم سوق MENA: فينتك إسلامي، NLP عربي، واجهات RTL.",
      ]},
      {heading:'ما تسنده لنا شركات Hub71',body:[
        "**خلفيات فينتك.** مدفوعات، KYC/AML، مراقبة المعاملات، محافظ متعددة العملات.",
        "**منتجات ذكاء اصطناعي.** 80% من آخر دفعة Hub71 مركزة على الذكاء الاصطناعي. NLP عربي في الإنتاج، رؤية حاسوبية، تحليل تنبؤي.",
        "**تطبيقات جوال.** iOS + Android، Flutter أو أصلي. متعدد اللغات افتراضياً — العربية RTL ليست إضافة، إنها الأساس.",
        "**بنية تحتية سحابية.** Kubernetes، CI/CD، مراقبة، FinOps.",
      ]},
    ],
    cta:{eyebrow:'تبني في Hub71؟',title:"30 دقيقة. نقيّم منتجك، نقترح فريقاً، ونسعّر. مجاناً، بدون التزام."},
    faq:[
      {q:"هل يمكننا اللقاء في أبوظبي؟",a:"نعم. الجزائر-أبوظبي رحلة مباشرة 5 ساعات. زيارات ربع سنوية للعملاء النشطين."},
      {q:"هل تعملون مع مؤسسين غير تقنيين؟",a:"هذا هو غالبية عملائنا. نوفر قائد تقني يعمل كـ CTO جزئي."},
      {q:"كيف تعمل الملكية الفكرية؟",a:"NDA قبل رؤية pitch deck. كل الكود ملكك من أول commit. تسليم كامل مع التوثيق."},
      {q:"كيف يعمل الدفع؟",a:"فواتير شهرية بالدولار أو اليورو أو الدرهم. تحويل بنكي أو Wise. Net-15."},
    ],
  },
};

export async function getStaticProps({locale}){return{props:{...(await serverSideTranslations(locale||'en',['common']))}}}

export default function Hub71Blog(){const{locale}=useRouter();const isRtl=locale==='ar';const c=C[locale]||C.en;
  const ld={'@context':'https://schema.org','@type':'Article',headline:c.title,description:c.dek,datePublished:'2026-04-15',author:{'@type':'Organization',name:'Symloop Technology',url:'https://symloop.com'},publisher:{'@type':'Organization',name:'Symloop Technology',logo:{'@type':'ImageObject',url:'https://symloop.com/sym-logo.png'}}};
  const faqLd={'@context':'https://schema.org','@type':'FAQPage',mainEntity:c.faq.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))};
  const bc=[{name:'Home',url:'https://symloop.com/'},{name:'Blog',url:'https://symloop.com/blog/'},{name:'Hub71 Engineering Partner',url:'https://symloop.com/blog/hub71-startup-engineering-partner-abu-dhabi-2026/'}];

  return(<><SEO title={`${c.title} — Symloop`} description={c.dek} keywords="Hub71 startups, Hub71 engineering partner, software development Abu Dhabi, hire developers UAE, app development company Dubai, outsource software development MENA, nearshore development Abu Dhabi, Hub71 developer team, startup engineering UAE, AI development company UAE, mobile app developer Dubai, fintech development MENA, شركة تطوير برمجيات أبوظبي, Hub71 شركة ناشئة, symloop hub71" type="article" structuredData={ld} breadcrumbs={bc}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqLd)}}/>
    <main dir={isRtl?'rtl':'ltr'} className="bg-black text-white">

      {/* Hero */}
      <section className="border-b border-white/[0.06]"><div className="max-w-3xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16"><motion.div initial="hidden" animate="show" variants={st}>
        <motion.div variants={f} className="flex flex-wrap items-center gap-3 mb-8">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.kind}</span><span className="h-px w-8 bg-white/20"/>
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span><span className="h-px w-8 bg-white/20"/>
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.readTime}</span>
        </motion.div>
        <motion.h1 variants={f} className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">{c.title}</motion.h1>
        <motion.p variants={f} className="mt-8 text-lg lg:text-xl text-white/55 leading-relaxed font-light">{c.dek}</motion.p>
      </motion.div></div></section>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        {/* Intro */}
        <div className="space-y-6 mb-16">{c.intro.map((p,i)=><p key={i} className="text-base lg:text-lg text-white/60 leading-relaxed font-light">{R(p)}</p>)}</div>

        {/* Sections */}
        {c.sections.map((s,i)=>(
          <section key={i} className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-8 pb-4 border-b border-white/[0.06]">{s.heading}</h2>
            <div className="space-y-5">{s.body.map((p,j)=><p key={j} className="text-base text-white/55 leading-relaxed font-light">{R(p)}</p>)}</div>
          </section>
        ))}

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-8 pb-4 border-b border-white/[0.06]">{locale==='ar'?'أسئلة شائعة':locale==='fr'?'Questions fréquentes':'FAQ'}</h2>
          <div className="border border-white/[0.06]">{c.faq.map((f,i)=>(
            <div key={i} className="p-6 border-b border-white/[0.06] last:border-b-0">
              <h3 className="text-lg font-light mb-3">{f.q}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{f.a}</p>
            </div>
          ))}</div>
        </section>

        {/* CTA */}
        <section className="border border-white/[0.06] p-8 lg:p-12 text-center">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-4 block">{c.cta.eyebrow}</span>
          <p className="text-lg text-white/55 leading-relaxed font-light max-w-xl mx-auto mb-8">{c.cta.title}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={W} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"><MessageCircle className="w-4 h-4" strokeWidth={1.75}/><span>WhatsApp</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75}/></a>
            <a href="mailto:contact@symloop.com" className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors"><span>contact@symloop.com</span></a>
          </div>
        </section>

        {/* Related Links */}
        <nav className="mt-16 pt-8 border-t border-white/[0.06]">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 mb-6 block">{locale==='ar'?'روابط ذات صلة':locale==='fr'?'Liens connexes':'Related'}</span>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/outsourcing/" className="group p-5 border border-white/[0.06] hover:border-white/20 transition-colors"><span className="text-sm font-light group-hover:text-white transition-colors">{locale==='ar'?'إسناد تطوير البرمجيات':locale==='fr'?'Externalisation développement logiciel':'Software Development Outsourcing'}</span><ArrowRight className="w-3 h-3 text-white/20 mt-2" strokeWidth={1.5}/></Link>
            <Link href="/services/ai/" className="group p-5 border border-white/[0.06] hover:border-white/20 transition-colors"><span className="text-sm font-light group-hover:text-white transition-colors">{locale==='ar'?'خدمات الذكاء الاصطناعي':locale==='fr'?'Services Intelligence Artificielle':'AI Engineering Services'}</span><ArrowRight className="w-3 h-3 text-white/20 mt-2" strokeWidth={1.5}/></Link>
            <Link href="/services/mobile/" className="group p-5 border border-white/[0.06] hover:border-white/20 transition-colors"><span className="text-sm font-light group-hover:text-white transition-colors">{locale==='ar'?'تطوير تطبيقات جوال':locale==='fr'?'Développement Mobile':'Mobile App Development'}</span><ArrowRight className="w-3 h-3 text-white/20 mt-2" strokeWidth={1.5}/></Link>
            <Link href="/startup/" className="group p-5 border border-white/[0.06] hover:border-white/20 transition-colors"><span className="text-sm font-light group-hover:text-white transition-colors">{locale==='ar'?'للشركات الناشئة':locale==='fr'?'Startups':'For Startups'}</span><ArrowRight className="w-3 h-3 text-white/20 mt-2" strokeWidth={1.5}/></Link>
          </div>
        </nav>
      </article>

    </main>
  </>);
}
