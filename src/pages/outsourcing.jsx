import Image from 'next/image';import Link from 'next/link';import{motion}from'framer-motion';import{useRouter}from'next/router';import{serverSideTranslations}from'next-i18next/serverSideTranslations';import{ArrowRight,MessageCircle,Clock,Globe,DollarSign,Shield}from'lucide-react';import SEO from'../components/SEO';
const W='https://wa.me/213549575512';
function R(t){return String(t).split(/(\*\*[^*]+\*\*)/g).map((p,i)=>p.startsWith('**')&&p.endsWith('**')?<span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2,-2)}</span>:<span key={i}>{p}</span>);}
const f={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}}};
const st={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:0.08,delayChildren:0.05}}};

const C={
  fr:{
    eyebrow:"Symloop · Nearshore depuis l'Algérie",
    title:"Externalisation développement logiciel. Pourquoi l'Algérie.",
    dek:"Les entreprises européennes paient €600-800/jour pour un développeur senior. Même compétence, mêmes standards, mêmes fuseaux horaires — depuis Alger, c'est tarifs compétitifs, mêmes standards. Pas de l'offshore low-cost. Du nearshore premium.",
    publishedAt:'Mis à jour Avril 2026',
    stats:{eyebrow:'— Pourquoi l\'Algérie',items:[
      {value:'UTC+1',label:'Même fuseau que Paris, Berlin, Madrid'},
      {value:'3×',label:'Plus de puissance ingénierie par budget'},
      {value:'3',label:'Langues : Français, Anglais, Arabe'},
      {value:'5.0',label:'Clutch vérifié · 0 projets annulés'},
    ]},
    comparison:{eyebrow:'— Comparaison coûts',title:'Le même projet. Trois devis.',
      rows:[
        {loc:'Paris / Londres',rate:'€600–800/jour',timeline:'6–9 mois',total:'€150K–250K',note:'Standards élevés, coût élevé'},
        {loc:'Inde / Vietnam',rate:'€100–200/jour',timeline:'8–14 mois',total:'€80K–140K',note:'Moins cher, mais décalage horaire, barrière culturelle'},
        {loc:'Alger (Symloop)',rate:'€200–350/jour',timeline:'5–8 mois',total:'€60K–120K',note:'Même fuseau, français natif, IP complète'},
      ]
    },
    advantages:{eyebrow:'— Avantages concrets',items:[
      {icon:'clock',title:'Même fuseau horaire',desc:"UTC+1 — vos daily standups à 9h, nos daily standups à 9h. Pas de réunions à 23h. Collaboration en temps réel comme une équipe locale."},
      {icon:'globe',title:'Français natif + anglais + arabe',desc:"Communication directe sans intermédiaire. Documentation en français. Code reviews en anglais. Support client en arabe si nécessaire."},
      {icon:'dollar',title:'60-70% d\'économie',desc:"Senior fullstack à €250/jour au lieu de €700. Architecte cloud à €300/jour au lieu de €900. Mêmes certifications AWS/GCP, mêmes standards de code."},
      {icon:'shield',title:'IP complète + conformité',desc:"Transfert total de la propriété intellectuelle. NDA signé dès le premier jour. Conformité RGPD. Pas de sous-traitance cachée."},
    ]},
    process:{eyebrow:'— Comment ça fonctionne',title:'Du premier appel à la production.',items:[
      {step:'01',title:'Appel découverte',desc:"30 minutes. On comprend votre besoin, on évalue la faisabilité, on propose une approche. Gratuit."},
      {step:'02',title:'Proposition technique',desc:"Architecture, équipe, timeline, budget fixe ou T&M. Livré en 5 jours ouvrés."},
      {step:'03',title:'Sprint 0',desc:"2 semaines. Setup technique, CI/CD, environnements, premiers écrans fonctionnels. Vous voyez du code qui tourne."},
      {step:'04',title:'Sprints de production',desc:"Livraisons toutes les 2 semaines. Démos en direct. Accès complet au repo, Jira, Slack."},
      {step:'05',title:'Transfert & support',desc:"Documentation complète, transfert de connaissances, support post-livraison 3 mois inclus."},
    ]},
    services:{eyebrow:'— Ce que nous externalisons',items:[
      {title:'Logiciel sur mesure',desc:'ERP, CRM, SaaS, backends d\'entreprise',href:'/services/software-engineering/'},
      {title:'Applications mobiles',desc:'iOS, Android, Flutter, React Native',href:'/services/mobile/'},
      {title:'Intelligence artificielle',desc:'ML, NLP, LLM, vision par ordinateur',href:'/services/ai/'},
      {title:'Migration cloud',desc:'AWS, GCP, Azure, Kubernetes, DevOps',href:'/services/cloud/'},
      {title:'MVP pour startups',desc:'Discovery → design → production en 8 semaines',href:'/services/product/'},
      {title:'Cybersécurité',desc:'Audit, pentest, SOC 2, ISO 27001',href:'/services/cybersecurity/'},
    ]},
    cta:{eyebrow:'Prêt à réduire vos coûts de développement ?',title:"30 minutes suffisent. On évalue votre projet, on propose une approche, on chiffre. Gratuit, sans engagement."},
    faq:{eyebrow:'— Questions fréquentes',items:[
      {q:"Quelle est la différence entre nearshore et offshore ?",a:"Le nearshore, c'est externaliser dans un pays proche géographiquement et culturellement. Alger est à 2h de vol de Paris, même fuseau horaire, français natif. L'offshore (Inde, Vietnam), c'est 5-10h de décalage, barrière linguistique, communication asynchrone."},
      {q:"Est-ce que la qualité est la même qu'en Europe ?",a:"Nos ingénieurs sont formés aux mêmes standards : TDD, code review systématique, CI/CD, documentation. Nous utilisons les mêmes stacks (TypeScript, Python, Go, Kubernetes). La différence, c'est le coût de la vie, pas la compétence."},
      {q:"Comment fonctionne le transfert de propriété intellectuelle ?",a:"NDA signé au premier jour. Tout le code vous appartient dès qu'il est écrit. Repository privé sous votre organisation GitHub/GitLab. Transfert complet à la fin du projet."},
      {q:"Combien coûte l'externalisation du développement logiciel en Algérie ?",a:"Un développeur senior fullstack coûte €200-350/jour depuis Alger, contre €600-800/jour à Paris ou Londres. Pour un projet de 6 mois avec 3 développeurs, comptez €60-120K au lieu de €150-250K."},
    ]},
  },
  en:{
    eyebrow:"Symloop · Nearshore from Algeria",
    title:"Software development outsourcing. Why companies choose Algeria.",
    dek:"European companies pay €600-800/day for a senior developer. Same skills, same standards, same timezone — from Algiers, it's significantly more efficient. Not low-cost offshore. Premium nearshore.",
    publishedAt:'Updated April 2026',
    stats:{eyebrow:'— Why Algeria',items:[
      {value:'UTC+1',label:'Same timezone as Paris, Berlin, Madrid'},
      {value:'3×',label:'More engineering per budget invested'},
      {value:'3',label:'Languages: French, English, Arabic'},
      {value:'5.0',label:'Clutch verified · 0 cancelled projects'},
    ]},
    comparison:{eyebrow:'— Cost comparison',title:'Same project. Three quotes.',
      rows:[
        {loc:'Paris / London',rate:'€600–800/day',timeline:'6–9 months',total:'€150K–250K',note:'High standards, high cost'},
        {loc:'India / Vietnam',rate:'€100–200/day',timeline:'8–14 months',total:'€80K–140K',note:'Cheaper, but timezone gap, cultural barrier'},
        {loc:'Algiers (Symloop)',rate:'€200–350/day',timeline:'5–8 months',total:'€60K–120K',note:'Same timezone, French native, full IP transfer'},
      ]
    },
    advantages:{eyebrow:'— Concrete advantages',items:[
      {icon:'clock',title:'Same timezone',desc:"UTC+1 — your 9am standup is our 9am standup. No 11pm meetings. Real-time collaboration like a local team."},
      {icon:'globe',title:'French + English + Arabic',desc:"Direct communication, no middlemen. Documentation in English. Code reviews in English. Client support in French or Arabic if needed."},
      {icon:'dollar',title:'Optimized investment',desc:"Senior fullstack at €250/day instead of €700. Cloud architect at €300/day instead of €900. Same AWS/GCP certifications, same code standards."},
      {icon:'shield',title:'Full IP + compliance',desc:"Complete intellectual property transfer. NDA signed day one. GDPR compliant. No hidden subcontracting."},
    ]},
    process:{eyebrow:'— How it works',title:'From first call to production.',items:[
      {step:'01',title:'Discovery call',desc:"30 minutes. We understand your needs, assess feasibility, propose an approach. Free."},
      {step:'02',title:'Technical proposal',desc:"Architecture, team, timeline, fixed-price or T&M. Delivered in 5 business days."},
      {step:'03',title:'Sprint 0',desc:"2 weeks. Technical setup, CI/CD, environments, first working screens. You see running code."},
      {step:'04',title:'Production sprints',desc:"Deliveries every 2 weeks. Live demos. Full access to repo, Jira, Slack."},
      {step:'05',title:'Handover & support',desc:"Complete documentation, knowledge transfer, 3-month post-delivery support included."},
    ]},
    services:{eyebrow:'— What we outsource',items:[
      {title:'Custom software',desc:'ERP, CRM, SaaS, enterprise backends',href:'/services/software-engineering/'},
      {title:'Mobile apps',desc:'iOS, Android, Flutter, React Native',href:'/services/mobile/'},
      {title:'Artificial intelligence',desc:'ML, NLP, LLM, computer vision',href:'/services/ai/'},
      {title:'Cloud migration',desc:'AWS, GCP, Azure, Kubernetes, DevOps',href:'/services/cloud/'},
      {title:'Startup MVPs',desc:'Discovery → design → production in 8 weeks',href:'/services/product/'},
      {title:'Cybersecurity',desc:'Audit, pentest, SOC 2, ISO 27001',href:'/services/cybersecurity/'},
    ]},
    cta:{eyebrow:'Ready to cut your development costs?',title:"30 minutes is enough. We assess your project, propose an approach, and quote. Free, no commitment."},
    faq:{eyebrow:'— FAQ',items:[
      {q:"What's the difference between nearshore and offshore?",a:"Nearshore means outsourcing to a nearby country with cultural alignment. Algiers is a 2-hour flight from Paris, same timezone, French-speaking. Offshore (India, Vietnam) means 5-10 hour time difference, language barriers, async communication."},
      {q:"Is the quality the same as European agencies?",a:"Our engineers follow the same standards: TDD, systematic code review, CI/CD, documentation. We use the same stacks (TypeScript, Python, Go, Kubernetes). The difference is cost of living, not competence."},
      {q:"How does intellectual property transfer work?",a:"NDA signed on day one. All code belongs to you from the moment it's written. Private repository under your GitHub/GitLab organization. Complete handover at project end."},
      {q:"What is the cost of outsourcing software development to Algeria?",a:"A senior fullstack developer costs €200-350/day from Algiers, compared to €600-800/day in Paris or London. For a 6-month project with 3 developers, expect €60-120K instead of €150-250K."},
    ]},
  },
  ar:{
    eyebrow:"سيملوب · نيرشور من الجزائر",
    title:"إسناد تطوير البرمجيات. لماذا تختار الشركات الجزائر.",
    dek:"الشركات الأوروبية تدفع 600-800 يورو/يوم لمطور كبير. نفس المهارات، نفس المعايير، نفس المنطقة الزمنية — من الجزائر العاصمة، بأسعار تنافسية. ليس أوفشور رخيص. نيرشور متميز.",
    publishedAt:'تحديث أبريل 2026',
    stats:{eyebrow:'— لماذا الجزائر',items:[
      {value:'UTC+1',label:'نفس التوقيت: باريس، برلين، مدريد'},
      {value:'3×',label:'قوة هندسية أكبر لكل ميزانية'},
      {value:'3',label:'لغات: فرنسية، إنجليزية، عربية'},
      {value:'5.0',label:'Clutch موثق · 0 مشاريع ملغاة'},
    ]},
    comparison:{eyebrow:'— مقارنة التكاليف',title:'نفس المشروع. ثلاثة عروض.',
      rows:[
        {loc:'باريس / لندن',rate:'€600–800/يوم',timeline:'6–9 أشهر',total:'€150K–250K',note:'معايير عالية، تكلفة عالية'},
        {loc:'الهند / فيتنام',rate:'€100–200/يوم',timeline:'8–14 شهر',total:'€80K–140K',note:'أرخص، لكن فارق توقيت وحاجز ثقافي'},
        {loc:'الجزائر (سيملوب)',rate:'€200–350/يوم',timeline:'5–8 أشهر',total:'€60K–120K',note:'نفس التوقيت، فرنسية أصلية، نقل IP كامل'},
      ]
    },
    advantages:{eyebrow:'— مزايا ملموسة',items:[
      {icon:'clock',title:'نفس المنطقة الزمنية',desc:"UTC+1 — اجتماعكم الصباحي الساعة 9 هو اجتماعنا الساعة 9. لا اجتماعات في الساعة 11 مساءً. تعاون فوري كفريق محلي."},
      {icon:'globe',title:'فرنسية + إنجليزية + عربية',desc:"تواصل مباشر بدون وسيط. توثيق بالإنجليزية. مراجعة الكود بالإنجليزية. دعم العملاء بالعربية عند الحاجة."},
      {icon:'dollar',title:'استثمار أمثل',desc:"مطور Fullstack كبير بـ 250 يورو/يوم بدلاً من 700. مهندس سحابة بـ 300 يورو/يوم بدلاً من 900. نفس الشهادات ونفس معايير الكود."},
      {icon:'shield',title:'ملكية فكرية كاملة + امتثال',desc:"نقل كامل للملكية الفكرية. اتفاقية عدم إفشاء من اليوم الأول. امتثال GDPR. لا تعاقد من الباطن مخفي."},
    ]},
    process:{eyebrow:'— كيف يعمل',title:'من المكالمة الأولى إلى الإنتاج.',items:[
      {step:'01',title:'مكالمة استكشافية',desc:"30 دقيقة. نفهم احتياجاتك، نقيّم الجدوى، نقترح نهجاً. مجاني."},
      {step:'02',title:'عرض تقني',desc:"معمارية، فريق، جدول زمني، سعر ثابت أو T&M. يُسلم في 5 أيام عمل."},
      {step:'03',title:'Sprint 0',desc:"أسبوعان. إعداد تقني، CI/CD، بيئات، أول شاشات عاملة. ترى كوداً يعمل."},
      {step:'04',title:'سبرنتات الإنتاج',desc:"تسليمات كل أسبوعين. عروض مباشرة. وصول كامل للريبو و Jira و Slack."},
      {step:'05',title:'تسليم ودعم',desc:"توثيق كامل، نقل المعرفة، دعم ما بعد التسليم 3 أشهر مشمول."},
    ]},
    services:{eyebrow:'— ما نقدمه',items:[
      {title:'برمجيات مخصصة',desc:'ERP، CRM، SaaS، خلفيات مؤسسية',href:'/services/software-engineering/'},
      {title:'تطبيقات جوال',desc:'iOS، Android، Flutter، React Native',href:'/services/mobile/'},
      {title:'ذكاء اصطناعي',desc:'ML، NLP، LLM، رؤية حاسوبية',href:'/services/ai/'},
      {title:'ترحيل سحابي',desc:'AWS، GCP، Azure، Kubernetes، DevOps',href:'/services/cloud/'},
      {title:'MVP للشركات الناشئة',desc:'استكشاف → تصميم → إنتاج في 8 أسابيع',href:'/services/product/'},
      {title:'أمن سيبراني',desc:'تدقيق، اختبار اختراق، SOC 2، ISO 27001',href:'/services/cybersecurity/'},
    ]},
    cta:{eyebrow:'مستعد لتقليل تكاليف التطوير؟',title:"30 دقيقة تكفي. نقيّم مشروعك، نقترح نهجاً، ونسعّر. مجاناً، بدون التزام."},
    faq:{eyebrow:'— أسئلة شائعة',items:[
      {q:"ما الفرق بين النيرشور والأوفشور؟",a:"النيرشور يعني الإسناد لدولة قريبة جغرافياً وثقافياً. الجزائر على بعد ساعتين من باريس، نفس المنطقة الزمنية، فرنسية أصلية. الأوفشور (الهند، فيتنام) يعني 5-10 ساعات فارق، حاجز لغوي، تواصل غير متزامن."},
      {q:"هل الجودة مثل الوكالات الأوروبية؟",a:"مهندسونا يتبعون نفس المعايير: TDD، مراجعة كود منهجية، CI/CD، توثيق. نستخدم نفس التقنيات. الفرق في تكلفة المعيشة، ليس الكفاءة."},
      {q:"كيف يعمل نقل الملكية الفكرية؟",a:"اتفاقية عدم إفشاء من اليوم الأول. كل الكود ملكك من لحظة كتابته. ريبو خاص تحت مؤسستك. تسليم كامل عند نهاية المشروع."},
      {q:"كم تكلفة إسناد تطوير البرمجيات إلى الجزائر؟",a:"مطور Fullstack كبير يكلف 200-350 يورو/يوم من الجزائر، مقابل 600-800 يورو/يوم في باريس أو لندن. لمشروع 6 أشهر مع 3 مطورين، توقع 60-120 ألف يورو بدلاً من 150-250 ألف."},
    ]},
  },
};

const ICONS={clock:Clock,globe:Globe,dollar:DollarSign,shield:Shield};

export async function getStaticProps({locale}){return{props:{...(await serverSideTranslations(locale||'fr',['common']))}}}

export default function OutsourcingPage(){const{locale}=useRouter();const isRtl=locale==='ar';const c=C[locale]||C.fr;
  const ld={'@context':'https://schema.org','@type':'WebPage',name:c.title,description:c.dek,url:'https://symloop.com/outsourcing/',publisher:{'@type':'Organization',name:'Symloop Technology'}};
  const faqLd={'@context':'https://schema.org','@type':'FAQPage',mainEntity:c.faq.items.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))};
  const bc=[{name:'Home',url:'https://symloop.com/'},{name:'Outsourcing',url:'https://symloop.com/outsourcing/'}];
  return(<><SEO title={`${c.title} — Symloop`} description={c.dek} keywords="software development outsourcing, nearshore software development, offshore software development, software outsourcing algeria, nearshore development algeria, outsourcing africa, externalisation développement logiciel, nearshore algérie, développement logiciel nearshore, إسناد تطوير البرمجيات, نيرشور الجزائر, symloop outsourcing" type="website" structuredData={ld} breadcrumbs={bc}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqLd)}}/>
    <main dir={isRtl?'rtl':'ltr'} className="bg-black text-white">

      {/* Hero */}
      <section className="relative border-b border-white/[0.06]"><div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16"><motion.div initial="hidden" animate="show" variants={st}>
        <motion.div variants={f} className="flex items-center gap-3 mb-8"><span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.eyebrow}</span><span className="h-px w-12 bg-white/20"/><span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span></motion.div>
        <motion.h1 variants={f} className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95]">{c.title}</motion.h1>
        <motion.p variants={f} className="mt-10 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p>
        <motion.div variants={f} className="mt-12 flex flex-wrap gap-4">
          <a href={W} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"><MessageCircle className="w-4 h-4" strokeWidth={1.75}/><span>WhatsApp</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75}/></a>
          <Link href="/services/" className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors"><span>{locale==='ar'?'خدماتنا':locale==='en'?'Our services':'Nos services'}</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5}/></Link>
        </motion.div>
      </motion.div></div></section>

      {/* Stats */}
      <section className="border-b border-white/[0.06]"><div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-10 flex items-center gap-3"><span>{c.stats.eyebrow}</span><span className="h-px flex-1 bg-white/10"/></div>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">{c.stats.items.map((s,i)=><li key={i} className="bg-black p-8 lg:p-10"><div className="text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white leading-none mb-5">{s.value}</div><div className="font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/45 leading-snug">{s.label}</div></li>)}</ul>
      </div></section>

      {/* Cost Comparison Table */}
      <section className="border-b border-white/[0.06]"><div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6 flex items-center gap-3"><span>{c.comparison.eyebrow}</span><span className="h-px flex-1 bg-white/10"/></div>
        <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-12">{c.comparison.title}</h2>
        <div className="border border-white/[0.06] overflow-hidden">
          <div className="hidden lg:grid grid-cols-5 gap-px bg-white/[0.06] text-[11px] font-mono tracking-[0.15em] uppercase text-white/40">
            <div className="bg-black p-4">{locale==='ar'?'الموقع':'Location'}</div>
            <div className="bg-black p-4">{locale==='ar'?'السعر/يوم':'Rate/day'}</div>
            <div className="bg-black p-4">{locale==='ar'?'الجدول':'Timeline'}</div>
            <div className="bg-black p-4">{locale==='ar'?'المجموع':'Total'}</div>
            <div className="bg-black p-4">{locale==='ar'?'ملاحظة':'Note'}</div>
          </div>
          {c.comparison.rows.map((r,i)=>(
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-5 gap-px bg-white/[0.06] ${i===2?'ring-1 ring-white/20':''}`}>
              <div className={`bg-black p-5 ${i===2?'font-medium text-white':'text-white/70'}`}>{r.loc}</div>
              <div className={`bg-black p-5 font-mono text-sm ${i===2?'text-white':'text-white/60'}`}>{r.rate}</div>
              <div className="bg-black p-5 font-mono text-sm text-white/60">{r.timeline}</div>
              <div className={`bg-black p-5 font-mono text-sm ${i===2?'text-white font-medium':'text-white/60'}`}>{r.total}</div>
              <div className="bg-black p-5 text-sm text-white/40">{r.note}</div>
            </div>
          ))}
        </div>
      </div></section>

      {/* Advantages */}
      <section className="border-b border-white/[0.06]"><div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-12 flex items-center gap-3"><span>{c.advantages.eyebrow}</span><span className="h-px flex-1 bg-white/10"/></div>
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
          {c.advantages.items.map((a,i)=>{const Icon=ICONS[a.icon]||Clock;return(
            <div key={i} className="bg-black p-8 lg:p-10">
              <Icon className="w-5 h-5 text-white/30 mb-6" strokeWidth={1.5}/>
              <h3 className="text-xl font-light mb-4">{a.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{a.desc}</p>
            </div>
          )})}
        </div>
      </div></section>

      {/* Process */}
      <section className="border-b border-white/[0.06]"><div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6 flex items-center gap-3"><span>{c.process.eyebrow}</span><span className="h-px flex-1 bg-white/10"/></div>
        <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-16">{c.process.title}</h2>
        <div className="space-y-0 border border-white/[0.06]">
          {c.process.items.map((p,i)=>(
            <div key={i} className="flex gap-6 lg:gap-10 p-6 lg:p-8 border-b border-white/[0.06] last:border-b-0">
              <span className="font-mono text-[11px] text-white/25 tracking-[0.15em] pt-1 shrink-0">{p.step}</span>
              <div><h3 className="text-lg font-light mb-2">{p.title}</h3><p className="text-sm text-white/45 leading-relaxed">{p.desc}</p></div>
            </div>
          ))}
        </div>
      </div></section>

      {/* Services Grid */}
      <section className="border-b border-white/[0.06]"><div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-12 flex items-center gap-3"><span>{c.services.eyebrow}</span><span className="h-px flex-1 bg-white/10"/></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
          {c.services.items.map((s,i)=>(
            <Link key={i} href={s.href} className="group bg-black p-8 hover:bg-white/[0.02] transition-colors">
              <h3 className="text-lg font-light mb-2 group-hover:text-white transition-colors">{s.title}</h3>
              <p className="text-sm text-white/40 mb-6">{s.desc}</p>
              <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-all group-hover:translate-x-1" strokeWidth={1.5}/>
            </Link>
          ))}
        </div>
      </div></section>

      {/* FAQ */}
      <section className="border-b border-white/[0.06]"><div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-12 flex items-center gap-3"><span>{c.faq.eyebrow}</span><span className="h-px flex-1 bg-white/10"/></div>
        <div className="space-y-0 border border-white/[0.06]">
          {c.faq.items.map((f,i)=>(
            <div key={i} className="p-6 lg:p-8 border-b border-white/[0.06] last:border-b-0">
              <h3 className="text-lg font-light mb-4">{f.q}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div></section>

      {/* CTA */}
      <section className="border-b border-white/[0.06]"><div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6 block">{c.cta.eyebrow}</span>
        <p className="text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-2xl mx-auto mb-12">{c.cta.title}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={W} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"><MessageCircle className="w-4 h-4" strokeWidth={1.75}/><span>WhatsApp</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75}/></a>
          <a href="mailto:contact@symloop.com" className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-10 py-5 text-sm font-medium tracking-wide transition-colors"><span>contact@symloop.com</span></a>
        </div>
      </div></section>

    </main>
  </>);
}
