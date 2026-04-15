import Image from 'next/image';import Link from 'next/link';import{motion}from'framer-motion';import{useRouter}from'next/router';import{serverSideTranslations}from'next-i18next/serverSideTranslations';import{ArrowRight,MessageCircle}from'lucide-react';import SEO from'../components/SEO';
const W='https://wa.me/213549575512';
function R(t){return String(t).split(/(\*\*[^*]+\*\*)/g).map((p,i)=>p.startsWith('**')&&p.endsWith('**')?<span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2,-2)}</span>:<span key={i}>{p}</span>);}
const f={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}}};
const st={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:0.08,delayChildren:0.05}}};

const C={
  fr:{
    eyebrow:"Symloop · L'ingénierie pour l'Afrique",title:"L'atelier d'ingénierie de l'Afrique. Basé à Alger.",
    dek:"$705 millions levés par les startups africaines au Q1 2026. 14 pays. Fintech, énergie, logistique. Le continent construit — et il a besoin d'ingénieurs qui livrent en production, pas en slides. Nous parlons français, arabe et anglais. Nous livrons depuis Alger vers le continent.",
    publishedAt:'Mis à jour Avril 2026',
    stats:{eyebrow:'— L\'Afrique tech en chiffres',items:[
      {value:'$705M',label:'Levés Q1 2026 (14 pays)'},
      {value:'$221M',label:'Fintech — secteur #1'},
      {value:'3',label:'Langues (FR · AR · EN)'},
      {value:'6',label:'Pays servis depuis Alger'},
    ]},
    sections:[
      {heading:'Pourquoi l\'Afrique a un problème d\'ingénierie',body:[
        "L'Afrique ne manque pas de startups. Elle ne manque pas de financement — $705M au Q1 2026, +26.5% par rapport à 2025. Elle ne manque pas d'idées. **Elle manque d'ateliers d'ingénierie capables de livrer des systèmes en production à l'échelle du continent.**",
        "Le Nigéria a **89 000 développeurs** mais presque zéro *engineering firms* — des structures avec code review, tests automatisés, CI/CD, documentation, et transfert de propriété intellectuelle. Le Sénégal a un écosystème startup en croissance mais **aucune firme d'ingénierie locale capable de livrer un SaaS multi-tenant**. Le Cameroun a 21 000 développeurs répartis entre des freelances et des agences web.",
        "**Le résultat : les startups africaines qui lèvent des fonds sous-traitent leur ingénierie en Inde, en Europe de l'Est, ou au Maroc.** Elles paient en dollars, ne parlent pas aux développeurs en direct, et reçoivent du code que personne en interne ne peut maintenir.",
      ]},
      {heading:'L\'avantage Symloop pour l\'Afrique',body:[
        "**Trois langues.** Le français couvre 22 pays africains. L'arabe couvre 7 pays de l'Afrique du Nord au Soudan. L'anglais couvre le reste. **Aucune autre firme d'ingénierie en Afrique ne maîtrise les trois.** Les outsourceurs indiens ne parlent ni français ni arabe. Les agences marocaines ne parlent qu'en français. Les firmes égyptiennes ne couvrent pas le français.",
        "**Un fuseau horaire partagé.** Alger est à UTC+1 — le même fuseau que Lagos, Douala, Dakar. Pas de décalage horaire avec l'Afrique de l'Ouest. Une heure de décalage avec l'Europe. Trois heures avec le Golfe. **Les réunions en temps réel fonctionnent avec tous nos marchés.**",
        "**Des standards internationaux, des prix africains.** Nous appliquons les mêmes méthodes que les meilleures firmes de la Silicon Valley — mais nos tarifs sont **60 à 70% inférieurs** à ceux d'un outsourceur européen ou américain. Un ingénieur senior chez Symloop coûte ce qu'un junior coûte à Paris.",
      ]},
      {heading:'Les 5 marchés que nous servons en Afrique',body:[
        "**Algérie** — notre base. 7 800 startups enregistrées, 2 300 Labels Startup, marché IA projeté à $1.69 milliard d'ici 2030. Nous y livrons depuis 2012.",
        "**Tunisie** — culture d'ingénierie proche, écosystème startup mature, cadre réglementaire fintech avancé. Nous y livrons des plateformes SaaS et des systèmes fintech.",
        "**Libye** — le gap d'infrastructure le plus large en Afrique du Nord crée la plus grande opportunité. Les systèmes ERP, la digitalisation gouvernementale, et les plateformes logistiques sont des besoins urgents.",
        "**Sénégal** — la porte d'entrée de l'Afrique de l'Ouest francophone. $32M levés en Q1 2026. Digitalisation bancaire, mobile money, e-commerce. Un marché de 17 millions de personnes avec un écosystème startup en explosion.",
        "**Nigéria** — le plus grand marché tech d'Afrique. $190M en Q1 2026. 89 000 développeurs mais presque zéro firmes d'ingénierie avec les trois langues. La fintech nigériane a besoin de partenaires qui comprennent la régulation MENA — c'est nous.",
      ]},
      {heading:'Ce que nous livrons pour les clients africains',body:[
        "**Fintech ($221M levés au Q1 2026)** — détection de fraude, KYC automatisé, scoring de crédit, réconciliation de paiements, apps mobile banking. Nos intégrations couvrent CIB/Edahabia (Algérie), mobile money (Afrique de l'Ouest), et passerelles internationales.",
        "**Logistique ($149M levés)** — plateformes de gestion de flotte, suivi GPS, optimisation de routes, intégrations transporteurs. De Yalidine (Algérie) aux réseaux logistiques panafricains.",
        "**Énergie ($141M levés)** — IoT pour le monitoring de sites solaires et éoliens, maintenance prédictive pour les infrastructures énergétiques, dashboards de production en temps réel.",
        "**E-gouvernement** — digitalisation de services publics, portails citoyens, systèmes de gestion documentaire. Notre expérience avec les ministères algériens se transfère directement à d'autres administrations africaines.",
      ]},
      {heading:'L\'Afrique construit. Nous livrons.',body:[
        "Le continent n'attend pas. **$705M au Q1 2026.** L'Égypte mène avec $190M, le Nigéria suit, le Sénégal accélère, l'Algérie se réveille. Les startups africaines passent de la phase « potentiel » à la phase « exécution ». Elles ont besoin d'ingénieurs, pas de promesses.",
        "**Nous sommes l'atelier d'ingénierie que l'Afrique francophone n'avait pas encore.** Basé à Alger, livrant en production, en trois langues, avec les standards des meilleures firmes internationales et les tarifs d'un partenaire africain.",
      ]},
    ],
    pullQuote1:"L'Afrique ne manque pas de startups ni de financement. Elle manque d'ateliers d'ingénierie capables de livrer en production à l'échelle du continent.",
    pullQuote2:"Nous sommes l'atelier d'ingénierie que l'Afrique francophone n'avait pas encore.",
    cta:{eyebrow:'Parlez à un ingénieur',title:"Vous construisez en Afrique et vous avez besoin d'un partenaire d'ingénierie qui parle votre langue ? 5 minutes suffisent."},
    related:{insights:[{key:'vision-2030',name:"L'entreprise 2030 — pourquoi l'IA n'est pas optionnelle."},{key:'ai',name:"Automatisation IA dans l'entreprise algérienne"}],services:[{key:'software-engineering',name:'Ingénierie logicielle'},{key:'ai',name:'Intelligence Artificielle'}]},
  },
  en:{
    eyebrow:"Symloop · Engineering for Africa",title:"Africa's engineering firm. Headquartered in Algiers.",
    dek:"$705 million raised by African startups in Q1 2026. 14 countries. Fintech, energy, logistics. The continent is building — and it needs engineers who deliver in production, not in slides. We speak French, Arabic and English. We deliver from Algiers across the continent.",
    publishedAt:'Updated April 2026',
    stats:{eyebrow:'— African tech in numbers',items:[
      {value:'$705M',label:'Raised Q1 2026 (14 countries)'},
      {value:'$221M',label:'Fintech — sector #1'},
      {value:'3',label:'Languages (FR · AR · EN)'},
      {value:'6',label:'Countries served from Algiers'},
    ]},
    sections:[
      {heading:"Why Africa has an engineering problem",body:["Africa does not lack startups. It does not lack funding — $705M in Q1 2026, +26.5% YoY. It does not lack ideas. **It lacks engineering firms capable of delivering production systems at continental scale.**","Nigeria has **89,000 developers** but almost zero *engineering firms*. Senegal has a growing startup ecosystem but **no local engineering firm capable of shipping multi-tenant SaaS**. Cameroon has 21,000 developers split between freelancers and web agencies.","**Result: African startups that raise funds outsource engineering to India, Eastern Europe, or Morocco.** They pay in dollars, never talk to the developers directly, and receive code nobody internal can maintain."]},
      {heading:"The Symloop advantage for Africa",body:["**Three languages.** French covers 22 African countries. Arabic covers 7 from North Africa to Sudan. English covers the rest. **No other engineering firm in Africa masters all three.**","**Shared timezone.** Algiers is UTC+1 — same as Lagos, Douala, Dakar. No timezone gap with West Africa. One hour from Europe. Three from the Gulf.","**International standards, African prices.** We apply Silicon Valley methods at rates **60-70% below** European or American outsourcers."]},
      {heading:"The 5 markets we serve in Africa",body:["**Algeria** — our base. 7,800 startups registered, 2,300 Startup Labels, AI market projected at $1.69 billion by 2030.","**Tunisia** — close engineering culture, mature startup ecosystem, advanced fintech regulation.","**Libya** — the largest infrastructure gap in North Africa creates the biggest opportunity.","**Senegal** — Francophone West Africa's gateway. $32M raised Q1 2026.","**Nigeria** — Africa's largest tech market. $190M Q1 2026. 89,000 developers but near-zero engineering firms with all three languages."]},
      {heading:"What we deliver for African clients",body:["**Fintech ($221M raised Q1 2026)** — fraud detection, automated KYC, credit scoring, payment reconciliation, mobile banking apps.","**Logistics ($149M raised)** — fleet management, GPS tracking, route optimization.","**Energy ($141M raised)** — IoT for solar/wind monitoring, predictive maintenance.","**E-government** — public service digitalization, citizen portals, document management."]},
      {heading:"Africa builds. We deliver.",body:["The continent is not waiting. **$705M in Q1 2026.** Egypt leads with $190M, Nigeria follows, Senegal accelerates, Algeria awakens. African startups are moving from potential to execution. They need engineers, not promises.","**We are the engineering firm Francophone Africa didn't have yet.** Based in Algiers, delivering in production, in three languages, with international standards and African partner rates."]},
    ],
    pullQuote1:"Africa does not lack startups or funding. It lacks engineering firms capable of delivering in production at continental scale.",
    pullQuote2:"We are the engineering firm Francophone Africa didn't have yet.",
    cta:{eyebrow:'Talk to an engineer',title:"Building in Africa and need an engineering partner who speaks your language? 5 minutes is enough."},
    related:{insights:[{key:'vision-2030',name:"The 2030 company — why AI is not optional."},{key:'ai',name:"AI automation in Algerian business"}],services:[{key:'software-engineering',name:'Software Engineering'},{key:'ai',name:'Artificial Intelligence'}]},
  },
  ar:{
    eyebrow:'سيملوب · الهندسة لأفريقيا',title:'شركة هندسة أفريقيا. مقرها الجزائر العاصمة.',
    dek:'$705 مليون جمعتها الشركات الناشئة الأفريقية في Q1 2026. 14 دولة. فينتك، طاقة، لوجستيك. القارة تبني — وتحتاج مهندسين يسلّمون في الإنتاج، لا في الشرائح. نتحدث الفرنسية والعربية والإنجليزية. نسلّم من الجزائر العاصمة عبر القارة.',
    publishedAt:'محدّث أبريل 2026',
    stats:{eyebrow:'— تقنية أفريقيا بالأرقام',items:[
      {value:'$705M',label:'جُمعت Q1 2026 (14 دولة)'},
      {value:'$221M',label:'فينتك — القطاع #1'},
      {value:'3',label:'لغات (FR · AR · EN)'},
      {value:'6',label:'دول نخدمها من الجزائر'},
    ]},
    sections:[
      {heading:'لماذا لدى أفريقيا مشكلة هندسة',body:['أفريقيا لا تفتقر إلى شركات ناشئة ولا إلى تمويل — $705M في Q1 2026. **تفتقر إلى ورش هندسة قادرة على تسليم أنظمة إنتاج على مستوى القارة.**','نيجيريا لديها **89,000 مطور** لكن تقريباً صفر *شركات هندسة*. السنغال لديه منظومة ناشئة متنامية لكن **لا شركة هندسة محلية قادرة على تسليم SaaS متعدد المستأجرين**.']},
      {heading:'ميزة سيملوب لأفريقيا',body:['**ثلاث لغات.** الفرنسية تغطي 22 دولة أفريقية. العربية تغطي 7 دول. الإنجليزية تغطي الباقي. **لا شركة هندسة أخرى في أفريقيا تتقن الثلاث.**','**منطقة زمنية مشتركة.** الجزائر العاصمة UTC+1 — نفس لاغوس ودوالا وداكار.','**معايير دولية، أسعار أفريقية.** نطبق أساليب وادي السيليكون بأسعار **أقل 60-70%** من المقاولين الأوروبيين.']},
      {heading:'الأسواق الخمسة التي نخدمها في أفريقيا',body:['**الجزائر** — قاعدتنا. 7,800 شركة ناشئة مسجلة، 2,300 Label Startup.','**تونس** — ثقافة هندسية قريبة، منظومة ناشئة ناضجة.','**ليبيا** — أكبر فجوة بنية تحتية في شمال أفريقيا تخلق أكبر فرصة.','**السنغال** — بوابة أفريقيا الغربية الفرنكوفونية. $32M جُمعت Q1 2026.','**نيجيريا** — أكبر سوق تقني في أفريقيا. $190M في Q1 2026.']},
      {heading:'ما نسلّمه للعملاء الأفارقة',body:['**فينتك ($221M جُمعت)** — كشف احتيال، KYC آلي، تسجيل ائتماني، تطبيقات بنكية.','**لوجستيك ($149M)** — إدارة أسطول، تتبع GPS، تحسين المسارات.','**طاقة ($141M)** — IoT لمراقبة المواقع الشمسية والريحية.','**حكومة إلكترونية** — رقمنة خدمات عامة، بوابات مواطنين.']},
      {heading:'أفريقيا تبني. نحن نسلّم.',body:['القارة لا تنتظر. **$705M في Q1 2026.** مصر تقود، نيجيريا تتبع، السنغال يتسارع، الجزائر تستيقظ.','**نحن شركة الهندسة التي لم تكن لدى أفريقيا الفرنكوفونية بعد.** مقرها الجزائر العاصمة، تسلّم في الإنتاج، بثلاث لغات.']},
    ],
    pullQuote1:'أفريقيا لا تفتقر إلى شركات ناشئة ولا إلى تمويل. تفتقر إلى ورش هندسة قادرة على التسليم في الإنتاج على مستوى القارة.',
    pullQuote2:'نحن شركة الهندسة التي لم تكن لدى أفريقيا الفرنكوفونية بعد.',
    cta:{eyebrow:'تحدث مع مهندس',title:'تبني في أفريقيا وتحتاج شريك هندسة يتحدث لغتك؟ 5 دقائق تكفي.'},
    related:{insights:[{key:'vision-2030',name:'شركة 2030 — لماذا الذكاء الاصطناعي ليس اختيارياً.'},{key:'ai',name:'أتمتة الذكاء الاصطناعي في الشركات الجزائرية'}],services:[{key:'software-engineering',name:'هندسة البرمجيات'},{key:'ai',name:'الذكاء الاصطناعي'}]},
  },
};

export default function AfricaPage(){const{locale}=useRouter();const isRtl=locale==='ar';const c=C[locale]||C.fr;
  const ld={'@context':'https://schema.org','@type':'WebPage',name:c.title,description:c.dek,url:'https://symloop.com/africa/',publisher:{'@type':'Organization',name:'Symloop'}};
  const bc=[{name:'Home',url:'https://symloop.com/'},{name:'Africa',url:'https://symloop.com/africa/'}];
  return(<><SEO title={`${c.title} — Symloop`} description={c.dek} keywords="software development company africa, software development outsourcing africa, nearshore software development africa, app development agency africa, mobile app developer africa, ai development company africa, custom software development africa, engineering firm africa, fintech software development africa, startup app development africa, développement logiciel afrique, outsourcing afrique francophone, nearshore afrique, شركة تطوير برمجيات أفريقيا, symloop africa" type="website" structuredData={ld} breadcrumbs={bc} image="/images/cover-africa.jpg"/>
    <main dir={isRtl?'rtl':'ltr'} className="bg-black text-white">
      <section className="relative border-b border-white/[0.06]"><div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16"><motion.div initial="hidden" animate="show" variants={st}><motion.div variants={f} className="flex items-center gap-3 mb-8"><span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.eyebrow}</span><span className="h-px w-12 bg-white/20"/><span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span></motion.div><motion.h1 variants={f} className="text-5xl sm:text-6xl lg:text-8xl xl:text-[9rem] font-light tracking-tight leading-[0.95]">{c.title}</motion.h1><motion.p variants={f} className="mt-10 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p><motion.div variants={f} className="mt-12 flex flex-wrap gap-4"><a href={W} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"><MessageCircle className="w-4 h-4" strokeWidth={1.75}/><span>WhatsApp</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75}/></a><Link href="/services/" className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors"><span>{locale==='ar'?'خدماتنا':locale==='en'?'Our services':'Nos services'}</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5}/></Link></motion.div></motion.div></div><div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden"><Image src="/images/cover-africa.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover"/></div></section>

      <section className="border-b border-white/[0.06]"><div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20"><div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-10 flex items-center gap-3"><span>{c.stats.eyebrow}</span><span className="h-px flex-1 bg-white/10"/></div><ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">{c.stats.items.map((s,i)=><li key={i} className="bg-black p-8 lg:p-10"><div className="text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white leading-none mb-5">{s.value}</div><div className="font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/45 leading-snug">{s.label}</div></li>)}</ul></div></section>

      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        {c.sections.map((s,idx)=>(<div key={idx}><motion.section initial="hidden" whileInView="show" viewport={{once:true,margin:'-100px'}} variants={st} className="mb-12 lg:mb-16"><motion.div variants={f} className="flex items-baseline gap-5 mb-6"><span className="font-mono text-xs tracking-[0.15em] text-white/30">{String(idx+1).padStart(2,'0')}</span><h2 className="text-2xl lg:text-4xl font-light tracking-tight text-white leading-[1.1]">{s.heading}</h2></motion.div><div className="space-y-5 ps-0 lg:ps-10">{s.body.map((p,i)=><motion.p key={i} variants={f} className="text-lg lg:text-xl text-white/70 leading-[1.65]">{R(p)}</motion.p>)}</div></motion.section>{idx===0&&c.pullQuote1&&<motion.figure initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"><blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">«{c.pullQuote1}»</blockquote></motion.figure>}{idx===4&&c.pullQuote2&&<motion.figure initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"><blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">«{c.pullQuote2}»</blockquote></motion.figure>}</div>))}
      </article>

      <section className="border-t border-white/[0.06]"><div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12"><div className="lg:col-span-6"><div className="flex items-center gap-3 mb-8"><span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span><span className="h-px w-12 bg-white/20"/></div><h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-10">{c.cta.title}</h2><a href={W} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"><MessageCircle className="w-4 h-4" strokeWidth={1.75}/><span>WhatsApp</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75}/></a></div><div className="lg:col-span-6"><div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">— Related</div><ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">{c.related.insights.map(it=><li key={it.key} className="bg-black"><Link href={`/insights/${it.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]"><div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Insight</div><h3 className="text-base font-light text-white leading-snug">{it.name}</h3></Link></li>)}{c.related.services.map(s=><li key={s.key} className="bg-black"><Link href={`/services/${s.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]"><div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Service</div><h3 className="text-base font-light text-white leading-snug">{s.name}</h3></Link></li>)}</ul></div></div></div></section>
    </main></>);
}
export async function getStaticProps({locale}){return{props:{...(await serverSideTranslations(locale,['common']))}};}
