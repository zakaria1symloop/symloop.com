import Image from 'next/image';import Link from 'next/link';import{motion}from'framer-motion';import{useRouter}from'next/router';import{serverSideTranslations}from'next-i18next/serverSideTranslations';import{ArrowRight,MessageCircle}from'lucide-react';import SEO from'../components/SEO';
const W='https://wa.me/213549575512';
function R(t){return String(t).split(/(\*\*[^*]+\*\*)/g).map((p,i)=>p.startsWith('**')&&p.endsWith('**')?<span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2,-2)}</span>:<span key={i}>{p}</span>);}
const f={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}}};
const st={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:0.08,delayChildren:0.05}}};

const C={
  fr:{
    eyebrow:'Symloop pour les startups',title:"De l'idée au premier client payant.",
    dek:"Vous avez le Label Startup, un prototype, ou juste une idée. Nous avons les ingénieurs seniors, l'architecture production-ready, et l'expérience de 15+ produits lancés. Même atelier que pour les banques et les ministères — adapté à votre stade.",
    publishedAt:'Mis à jour Avril 2026',
    stats:{eyebrow:'— Le marché startup en Algérie',items:[
      {value:'7,800+',label:'Entreprises sur startup.dz'},
      {value:'2,300',label:'Labels Startup délivrés'},
      {value:'$705M',label:'Levés en Afrique Q1 2026'},
      {value:'15+',label:'Produits startup lancés par Symloop'},
    ]},
    sections:[
      {heading:'Pourquoi les startups échouent à la couche ingénierie',body:[
        "La plupart des startups algériennes ne meurent pas par manque d'idées. Elles meurent parce que **le premier MVP est codé par un freelance qui disparaît**, le deuxième est reconstruit par une agence qui ne comprend pas l'architecture, et le troisième n'arrive jamais parce que le budget est épuisé.",
        "**Le problème n'est pas le code. C'est l'absence de rigueur d'ingénierie dès le jour 1.** Un MVP construit sans tests automatisés, sans CI/CD, sans architecture évolutive, et sans documentation est un prototype déguisé en produit. Il cassera au premier pic de trafic, au premier audit investisseur, au premier pivot.",
      ]},
      {heading:'Ce que nous construisons pour les startups',body:[
        "**MVPs production-ready (8–12 semaines, 2–8M DA).** Pas un prototype jetable — un vrai produit avec architecture évolutive, tests, CI/CD, documentation, et transfert de propriété intellectuelle. Le même standard que pour nos clients entreprise, adapté au périmètre startup.",
        "**SaaS multi-tenant.** L'architecture qui permet de servir 10 clients ou 10 000 avec le même code. Facturation récurrente, gestion des rôles, dashboards admin, API pour les intégrations futures.",
        "**Apps mobiles fintech.** Intégrations CIB, Edahabia, SATIM incluses. Publication App Store + Google Play. Les intégrations de paiement algériennes sont notre spécialité — pas un module ajouté après coup.",
        "**Plateformes marketplace.** Multi-faces (acheteurs + vendeurs), paiements, évaluations, modération. De la V1 simple à la plateforme complète.",
      ]},
      {heading:'Le Label Startup et ce qu\'il change pour votre projet',body:[
        "**2,300 startups algériennes ont le Label Startup** (sur 7,800 enregistrées sur startup.dz). Le label donne accès à des **financements publics, des exonérations fiscales, et des préférences dans les marchés publics**. Si vous l'avez ou le préparez, votre MVP doit être suffisamment solide pour passer l'évaluation technique du comité.",
        "Nous avons accompagné des startups dans la préparation de leur dossier technique pour le Label. Le code review, la documentation d'architecture, et les tests automatisés que nous livrons systématiquement sont exactement ce que le comité évalue.",
      ]},
      {heading:'$705 millions en Q1 2026 — l\'Afrique investit',body:[
        "Les startups africaines ont levé **$705M au premier trimestre 2026** (+26.5% par rapport à 2025). La fintech mène avec $221M, suivie par l'énergie ($141M) et la logistique ($149M). **L'Algérie est le marché le moins saturé et le plus prometteur** — le marché IA algérien est projeté à $1.69 milliard d'ici 2030.",
        "Si vous construisez une startup en Algérie ou en Afrique francophone, **vous êtes dans le bon marché au bon moment**. La question n'est pas « faut-il construire ? » — c'est « avec qui construire pour ne pas gaspiller votre window d'opportunité ».",
      ]},
      {heading:'La différence entre un atelier d\'ingénierie et un freelance pour une startup',body:[
        "**Un freelance** coûte 2x moins cher le premier mois. Et 5x plus cher sur 12 mois — parce que le code doit être réécrit, parce que le freelance n'est plus disponible, parce que l'investisseur demande un audit technique et que rien ne passe.",
        "**Un atelier d'ingénierie** coûte plus cher le premier mois. Et 3x moins cher sur 12 mois — parce que le code est maintenable, parce que l'équipe ne disparaît pas, parce que l'audit technique passe du premier coup, parce que le pivot technique prend 2 semaines au lieu de 3 mois.",
        "**Nous ne prenons pas tous les projets.** Si votre budget est inférieur à 2M DA ou que votre idée n'est pas encore validée, nous vous orientons vers un freelance ou un incubateur. Nous intervenons quand le risque d'échec technique est plus cher que le coût de bien faire dès le départ.",
      ]},
    ],
    pullQuote1:"Un MVP sans tests, sans CI/CD, sans architecture évolutive est un prototype déguisé en produit. Il cassera.",
    pullQuote2:"$705M levés en Afrique Q1 2026. L'Algérie est le marché le moins saturé et le plus prometteur.",
    cta:{eyebrow:'Parlez à un ingénieur produit',title:"Décrivez votre startup en 5 minutes. Nous vous dirons si vous avez besoin de nous — ou pas."},
    related:{insights:[{key:'ai-cto',name:"Vous n'avez pas besoin d'un CTO."},{key:'cost',name:'Le vrai coût du développement logiciel'}],services:[{key:'product',name:'Ingénierie Produit'},{key:'mobile',name:'Ingénierie Mobile'}]},
  },
  en:{
    eyebrow:'Symloop for startups',title:'From idea to first paying customer.',
    dek:"You have the Startup Label, a prototype, or just an idea. We have senior engineers, production-ready architecture, and 15+ launched products. Same workshop as for banks and ministries — adapted to your stage.",
    publishedAt:'Updated April 2026',
    stats:{eyebrow:'— The African startup market',items:[
      {value:'7,800+',label:'Companies on startup.dz'},
      {value:'2,300',label:'Startup Labels granted'},
      {value:'$705M',label:'Raised in Africa Q1 2026'},
      {value:'15+',label:'Startup products launched by Symloop'},
    ]},
    sections:[
      {heading:'Why startups fail at the engineering layer',body:["Most Algerian startups don't die from lack of ideas. They die because **the first MVP is coded by a freelancer who disappears**, the second is rebuilt by an agency that doesn't understand architecture, and the third never arrives because the budget is gone.","**The problem is not the code. It is the absence of engineering rigor from day 1.** An MVP built without automated tests, CI/CD, scalable architecture, and documentation is a prototype disguised as a product."]},
      {heading:'What we build for startups',body:["**Production-ready MVPs (8–12 weeks, 2–8M DZD).** Not a throwaway prototype — a real product with scalable architecture, tests, CI/CD, documentation, and IP transfer.","**Multi-tenant SaaS.** Architecture that serves 10 clients or 10,000 with the same code.","**Fintech mobile apps.** CIB, Edahabia, SATIM integrations included.","**Marketplace platforms.** Multi-sided, payments, ratings, moderation."]},
      {heading:'The Startup Label and what it changes',body:["**2,300 Algerian startups have the Startup Label** (out of 7,800 registered on startup.dz). The label grants access to **public funding, tax exemptions, and procurement preferences**. If you have it or are preparing it, your MVP must be solid enough to pass the committee's technical evaluation."]},
      {heading:'$705 million in Q1 2026 — Africa invests',body:["African startups raised **$705M in Q1 2026** (+26.5% YoY). Fintech leads with $221M. **Algeria is the least saturated and most promising market** — the Algerian AI market is projected at $1.69 billion by 2030.","If you are building a startup in Algeria or Francophone Africa, **you are in the right market at the right time**."]},
      {heading:'Engineering workshop vs freelancer for a startup',body:["**A freelancer** costs 2x less the first month. And 5x more over 12 months — because the code must be rewritten, because the freelancer is no longer available, because the investor audit fails.","**An engineering workshop** costs more the first month. And 3x less over 12 months — because the code is maintainable, the team doesn't disappear, the audit passes first try.","**We don't take every project.** If your budget is below 2M DZD or your idea isn't validated, we'll point you to a freelancer or incubator."]},
    ],
    pullQuote1:"An MVP without tests, CI/CD, or scalable architecture is a prototype disguised as a product. It will break.",
    pullQuote2:"$705M raised in Africa Q1 2026. Algeria is the least saturated and most promising market.",
    cta:{eyebrow:'Talk to a product engineer',title:"Describe your startup in 5 minutes. We'll tell you if you need us — or not."},
    related:{insights:[{key:'ai-cto',name:"You don't need a CTO."},{key:'cost',name:'The real cost of building software'}],services:[{key:'product',name:'Product Engineering'},{key:'mobile',name:'Mobile Engineering'}]},
  },
  ar:{
    eyebrow:'سيملوب للشركات الناشئة',title:'من الفكرة إلى أول عميل يدفع.',
    dek:'لديك Label Startup أو نموذج أولي أو مجرد فكرة. لدينا مهندسون كبار وهندسة جاهزة للإنتاج وأكثر من 15 منتجاً تم إطلاقه. نفس الورشة التي نعمل بها مع البنوك والوزارات — مكيفة لمرحلتك.',
    publishedAt:'محدّث أبريل 2026',
    stats:{eyebrow:'— سوق الشركات الناشئة الأفريقي',items:[
      {value:'+7,800',label:'شركة على startup.dz'},
      {value:'2,300',label:'Label Startup ممنوحة'},
      {value:'$705M',label:'جُمعت في أفريقيا Q1 2026'},
      {value:'+15',label:'منتج ناشئ أطلقته سيملوب'},
    ]},
    sections:[
      {heading:'لماذا تفشل الشركات الناشئة في طبقة الهندسة',body:['معظم الشركات الناشئة الجزائرية لا تموت لنقص الأفكار. تموت لأن **أول MVP يكتبه مستقل يختفي**، والثاني تعيد بناءه وكالة لا تفهم الهندسة، والثالث لا يصل أبداً لأن الميزانية نفدت.','**المشكلة ليست الشيفرة. إنها غياب صرامة الهندسة من اليوم الأول.**']},
      {heading:'ما نبنيه للشركات الناشئة',body:['**MVPs جاهزة للإنتاج (8–12 أسبوعاً، 2–8 مليون دج).** ليس نموذجاً أولياً يُرمى — منتج حقيقي بهندسة قابلة للتوسع واختبارات و CI/CD.','**SaaS متعدد المستأجرين.** هندسة تخدم 10 عملاء أو 10,000 بنفس الشيفرة.','**تطبيقات جوال فينتك.** تكاملات CIB والذهبية و SATIM مشمولة.','**منصات سوق.** متعددة الأوجه، مدفوعات، تقييمات، إشراف.']},
      {heading:'Label Startup وما يغيره لمشروعك',body:['**2,300 شركة ناشئة جزائرية لديها Label Startup** (من 7,800 مسجلة على startup.dz). يمنح الوصول إلى **تمويل عام وإعفاءات ضريبية وأفضليات في المشتريات العامة**.']},
      {heading:'$705 مليون في Q1 2026 — أفريقيا تستثمر',body:['الشركات الناشئة الأفريقية جمعت **$705M في Q1 2026** (+26.5%). الفينتك يقود بـ$221M. **الجزائر هي السوق الأقل تشبعاً والأكثر واعدية.**']},
      {heading:'ورشة هندسة مقابل مستقل للشركة الناشئة',body:['**المستقل** يكلف أقل بمرتين الشهر الأول. وأكثر بخمس مرات على 12 شهراً.','**ورشة الهندسة** تكلف أكثر الشهر الأول. وأقل بثلاث مرات على 12 شهراً.','**لا نقبل كل المشاريع.** إذا كانت ميزانيتك أقل من 2 مليون دج، نوجهك إلى مستقل أو حاضنة.']},
    ],
    pullQuote1:'MVP بدون اختبارات ولا CI/CD ولا هندسة قابلة للتوسع هو نموذج أولي متنكر في صورة منتج. سينهار.',
    pullQuote2:'$705M جُمعت في أفريقيا Q1 2026. الجزائر هي السوق الأقل تشبعاً والأكثر واعدية.',
    cta:{eyebrow:'تحدث مع مهندس منتج',title:'صف شركتك الناشئة في 5 دقائق. سنخبرك إذا كنت تحتاجنا — أم لا.'},
    related:{insights:[{key:'ai-cto',name:'لا تحتاج إلى CTO.'},{key:'cost',name:'التكلفة الحقيقية لبناء البرمجيات'}],services:[{key:'product',name:'هندسة المنتج'},{key:'mobile',name:'هندسة الجوال'}]},
  },
};

export default function StartupPage(){const{locale}=useRouter();const isRtl=locale==='ar';const c=C[locale]||C.fr;
  const ld={'@context':'https://schema.org','@type':'WebPage',name:c.title,description:c.dek,url:'https://symloop.com/startup/',publisher:{'@type':'Organization',name:'Symloop'}};
  const bc=[{name:'Home',url:'https://symloop.com/'},{name:'Startups',url:'https://symloop.com/startup/'}];
  return(<><SEO title={`${c.title} — Symloop`} description={c.dek} keywords="startup algérie, accompagnement startup algérie, label startup algérie, développement mvp algérie, startup africa, mvp development africa, saas startup algeria, fintech startup algeria, شركة ناشئة الجزائر, startup label algeria, product engineering startup, symloop startup" type="website" structuredData={ld} breadcrumbs={bc} image="/images/cover-startup.jpg"/>
    <main dir={isRtl?'rtl':'ltr'} className="bg-black text-white">
      <section className="relative border-b border-white/[0.06]"><div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16"><motion.div initial="hidden" animate="show" variants={st}><motion.div variants={f} className="flex items-center gap-3 mb-8"><span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.eyebrow}</span><span className="h-px w-12 bg-white/20"/><span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span></motion.div><motion.h1 variants={f} className="text-5xl sm:text-6xl lg:text-8xl xl:text-[9rem] font-light tracking-tight leading-[0.95]">{c.title}</motion.h1><motion.p variants={f} className="mt-10 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p><motion.div variants={f} className="mt-12 flex flex-wrap gap-4"><a href={W} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"><MessageCircle className="w-4 h-4" strokeWidth={1.75}/><span>WhatsApp</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75}/></a><Link href="/services/product/" className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors"><span>{locale==='ar'?'هندسة المنتج':locale==='en'?'Product Engineering':'Ingénierie Produit'}</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5}/></Link></motion.div></motion.div></div><div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden"><Image src="/images/cover-startup.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover"/></div></section>

      <section className="border-b border-white/[0.06]"><div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20"><div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-10 flex items-center gap-3"><span>{c.stats.eyebrow}</span><span className="h-px flex-1 bg-white/10"/></div><ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">{c.stats.items.map((s,i)=><li key={i} className="bg-black p-8 lg:p-10"><div className="text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white leading-none mb-5">{s.value}</div><div className="font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/45 leading-snug">{s.label}</div></li>)}</ul></div></section>

      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        {c.sections.map((s,idx)=>(<div key={idx}><motion.section initial="hidden" whileInView="show" viewport={{once:true,margin:'-100px'}} variants={st} className="mb-12 lg:mb-16"><motion.div variants={f} className="flex items-baseline gap-5 mb-6"><span className="font-mono text-xs tracking-[0.15em] text-white/30">{String(idx+1).padStart(2,'0')}</span><h2 className="text-2xl lg:text-4xl font-light tracking-tight text-white leading-[1.1]">{s.heading}</h2></motion.div><div className="space-y-5 ps-0 lg:ps-10">{s.body.map((p,i)=><motion.p key={i} variants={f} className="text-lg lg:text-xl text-white/70 leading-[1.65]">{R(p)}</motion.p>)}</div></motion.section>{idx===0&&c.pullQuote1&&<motion.figure initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"><blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">«{c.pullQuote1}»</blockquote></motion.figure>}{idx===3&&c.pullQuote2&&<motion.figure initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"><blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">«{c.pullQuote2}»</blockquote></motion.figure>}</div>))}
      </article>

      <section className="border-t border-white/[0.06]"><div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12"><div className="lg:col-span-6"><div className="flex items-center gap-3 mb-8"><span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span><span className="h-px w-12 bg-white/20"/></div><h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-10">{c.cta.title}</h2><a href={W} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"><MessageCircle className="w-4 h-4" strokeWidth={1.75}/><span>WhatsApp</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75}/></a></div><div className="lg:col-span-6"><div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">— Related</div><ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">{c.related.insights.map(it=><li key={it.key} className="bg-black"><Link href={`/insights/${it.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]"><div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Insight</div><h3 className="text-base font-light text-white leading-snug">{it.name}</h3></Link></li>)}{c.related.services.map(s=><li key={s.key} className="bg-black"><Link href={`/services/${s.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]"><div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Service</div><h3 className="text-base font-light text-white leading-snug">{s.name}</h3></Link></li>)}</ul></div></div></div></section>
    </main></>);
}
export async function getStaticProps({locale}){return{props:{...(await serverSideTranslations(locale,['common']))}};}
