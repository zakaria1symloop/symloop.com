import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, MessageCircle } from 'lucide-react';
import SEO from '../../components/SEO';

const WHATSAPP_URL = 'https://wa.me/213549575512';
function renderRichText(text) {
  return String(text).split(/(\*\*[^*]+\*\*)/g).map((p, i) => p.startsWith('**') && p.endsWith('**') ? <span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2,-2)}</span> : <span key={i}>{p}</span>);
}
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

const CONTENT = {
  fr: {
    kind: 'Comparatif', title: 'Odoo vs ERP sur mesure en Algérie — le vrai comparatif 2026.',
    dek: "Odoo Community, Odoo Enterprise, ou un ERP construit de zéro ? Nous livrons les deux. Voici le comparatif honnête que personne ne vous donnera — parce que la plupart des prestataires n'ont intérêt qu'à vendre l'un des deux.",
    publishedAt: 'Avril 2026', readTime: '10 min de lecture', author: 'Symloop',
    intro: [
      "Si vous dirigez une PME algérienne et que vous cherchez un ERP, vous avez probablement reçu **deux types de discours opposés**. Le premier : « Odoo fait tout, c'est gratuit, c'est la solution ». Le deuxième : « Odoo est une cage, il faut construire de zéro ». **Les deux sont faux.** La vérité est entre les deux, et elle dépend de qui vous êtes.",
    ],
    sections: [
      { heading: 'Quand Odoo est le bon choix', body: [
        "**Odoo est le bon choix quand vos processus sont standards.** Si votre entreprise fait de la vente, de la facturation, de la gestion de stock et de la comptabilité de la même façon que 80% des PME de votre secteur, Odoo Community fait le travail pour **moins de 500 000 DA tout compris** (installation, configuration, formation). C'est 10x moins qu'un sur mesure.",
        "**Odoo est aussi le bon choix quand votre budget est inférieur à 3 millions de DA.** En dessous de ce seuil, un ERP sur mesure sérieux n'existe pas — vous achetez un prototype. Odoo correctement configuré par un intégrateur compétent est plus fiable qu'un sur mesure low-cost.",
        "**Odoo Enterprise vaut le coup quand vous avez besoin du support éditeur.** Si votre équipe IT interne est inexistante et que vous voulez un support contractuel, Odoo Enterprise à **~800 000 DA/an** est un bon investissement. Le Community sans support est un risque pour une entreprise sans compétences techniques.",
      ]},
      { heading: 'Quand Odoo est le mauvais choix', body: [
        "**Odoo est le mauvais choix quand vos processus sont votre avantage compétitif.** Si la façon dont vous gérez votre chaîne de production, votre logistique ou votre relation client est **ce qui vous rend meilleur que vos concurrents**, forcer ces processus dans les modules Odoo standards va les casser. Vous allez empiler des personnalisations jusqu'à ce que le système devienne inmaintenable.",
        "**Odoo est le mauvais choix quand vous avez besoin d'intégrations algériennes profondes.** CIB, Edahabia, SATIM, CNRC, CNAS — les modules Odoo pour ces intégrations sont souvent **des plugins tiers de qualité variable**, mal maintenus, et qui cassent à chaque mise à jour. Un ERP sur mesure intègre nativement.",
        "**Odoo est le mauvais choix quand vous avez déjà 3+ ans de personnalisations.** Si votre Odoo a accumulé 15 modules custom, 8 plugins tiers et 5 workflows bricolés — **vous ne faites plus du Odoo**. Vous faites du sur mesure mal architecturé. Autant reconstruire proprement.",
      ]},
      { heading: 'Le vrai coût comparé sur 5 ans', body: [
        "**Odoo Community :** installation + config + formation = **300K–800K DA**. Coût annuel : hébergement + maintenance = **100K–300K DA/an**. Total 5 ans : **~1–2.3M DA**. Risque : pas de support éditeur, montées de version à gérer soi-même.",
        "**Odoo Enterprise :** licence + installation + config = **800K–2M DA**. Coût annuel : licence + support = **600K–1.5M DA/an**. Total 5 ans : **~4–9.5M DA**. Avantage : support éditeur, mises à jour automatiques.",
        "**ERP sur mesure :** développement initial = **5–25M DA**. Coût annuel : maintenance + évolution = **500K–2M DA/an**. Total 5 ans : **~7.5–35M DA**. Avantage : fait exactement ce que vous voulez, pas de licence, code à vous, pas de dépendance éditeur.",
        "**La conclusion :** Odoo Community est **5x moins cher** qu'un sur mesure si vos processus sont standards. Odoo Enterprise est **comparable au sur mesure** sur 5 ans si vous ajoutez les personnalisations. Un sur mesure est **moins cher qu'Odoo Enterprise** quand vous avez besoin de plus de 5 personnalisations majeures.",
      ]},
      { heading: 'Notre recommandation honnête', body: [
        "Nous livrons les deux. Nous n'avons aucun intérêt à vous pousser vers l'un ou l'autre. Voici le test :",
        "**Prenez Odoo Community si :** processus standards + budget < 3M DA + équipe IT interne ou intégrateur de confiance.",
        "**Prenez Odoo Enterprise si :** processus standards + pas d'équipe IT + besoin de support contractuel + budget 5-10M DA sur 5 ans.",
        "**Construisez du sur mesure si :** processus = avantage compétitif + intégrations algériennes profondes + budget > 5M DA initial + propriétaire interne du système.",
        "**Si vous n'êtes pas sûr :** décrivez votre situation sur WhatsApp. Nous vous dirons lequel choisir — même si la réponse est « pas nous ».",
      ]},
    ],
    pullQuote1: "Le vrai comparatif n'est pas Odoo vs sur mesure. C'est vos processus standards vs vos processus qui sont votre avantage.",
    pullQuote2: "Odoo Enterprise sur 5 ans coûte souvent autant qu'un sur mesure — mais sans vous appartenir.",
    cta: { eyebrow: 'Parlez à un ingénieur', title: "Odoo ou sur mesure ? Décrivez votre situation en 5 minutes — nous vous dirons lequel choisir." },
    related: { insights: [{ key: 'erp', name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" }, { key: 'cost', name: 'Le vrai coût du développement logiciel en Algérie' }], services: [{ key: 'software-engineering', name: 'Ingénierie logicielle' }, { key: 'consulting', name: 'Conseil technologique' }] },
  },
  en: {
    kind: 'Comparison', title: 'Odoo vs custom ERP in Algeria — the real 2026 comparison.',
    dek: "Odoo Community, Odoo Enterprise, or an ERP built from scratch? We deliver both. Here is the honest comparison nobody will give you — because most vendors only profit from selling one of the two.",
    publishedAt: 'April 2026', readTime: '10 min read', author: 'Symloop',
    intro: ["If you run an Algerian SME and you are looking for an ERP, you have probably received **two opposite pitches**. First: \"Odoo does everything, it's free, it's the solution\". Second: \"Odoo is a cage, you must build from scratch\". **Both are wrong.** The truth is in between, and it depends on who you are."],
    sections: [
      { heading: 'When Odoo is the right choice', body: ["**Odoo is right when your processes are standard.** If your company does sales, invoicing, inventory and accounting the same way as 80% of SMEs in your sector, Odoo Community does the job for **less than 500,000 DZD all-in**.", "**Odoo is right when your budget is below 3 million DZD.** Below that, serious custom ERP does not exist.", "**Odoo Enterprise is worth it when you need vendor support.** ~800,000 DZD/year for contractual support is a good investment if your IT team is nonexistent."] },
      { heading: 'When Odoo is the wrong choice', body: ["**Odoo is wrong when your processes are your competitive advantage.** Forcing unique processes into standard Odoo modules breaks them.", "**Odoo is wrong when you need deep Algerian integrations.** CIB, Edahabia, SATIM, CNRC — Odoo plugins for these are **third-party, variable quality**, and break on updates.", "**Odoo is wrong when you already have 3+ years of customizations.** At that point you are running badly-architected custom software, not Odoo."] },
      { heading: 'The real 5-year cost comparison', body: ["**Odoo Community:** 5-year total ~**1–2.3M DZD**. Risk: no vendor support.", "**Odoo Enterprise:** 5-year total ~**4–9.5M DZD**. Advantage: vendor support, auto-updates.", "**Custom ERP:** 5-year total ~**7.5–35M DZD**. Advantage: does exactly what you need, no license, code is yours.", "**Bottom line:** Odoo Community is **5x cheaper** for standard processes. Odoo Enterprise is **comparable to custom** over 5 years with customizations. Custom is **cheaper than Enterprise** when you need 5+ major customizations."] },
      { heading: 'Our honest recommendation', body: ["We deliver both. We have no interest in pushing you either way.", "**Take Odoo Community if:** standard processes + budget < 3M DZD + internal IT team.", "**Take Odoo Enterprise if:** standard processes + no IT team + need contractual support.", "**Build custom if:** processes = competitive advantage + deep Algerian integrations + budget > 5M DZD + internal system owner.", "**Not sure?** Describe your situation on WhatsApp. We will tell you which to choose — even if the answer is \"not us\"."] },
    ],
    pullQuote1: "The real comparison is not Odoo vs custom. It is your standard processes vs your processes that are your advantage.",
    pullQuote2: "Odoo Enterprise over 5 years often costs as much as custom — but without you owning it.",
    cta: { eyebrow: 'Talk to an engineer', title: "Odoo or custom? Describe your situation in 5 minutes — we will tell you which to choose." },
    related: { insights: [{ key: 'erp', name: 'Custom ERP for Algerian SMEs — beyond Odoo' }, { key: 'cost', name: 'The real cost of building software in Algeria' }], services: [{ key: 'software-engineering', name: 'Software Engineering' }, { key: 'consulting', name: 'Technology Consulting' }] },
  },
  ar: {
    kind: 'مقارنة', title: 'أودو مقابل ERP مخصص في الجزائر — المقارنة الحقيقية 2026.',
    dek: 'أودو Community أم Enterprise أم ERP مبني من الصفر؟ نحن نسلّم الاثنين. إليك المقارنة الصادقة التي لن يعطيها لك أحد.',
    publishedAt: 'أبريل 2026', readTime: '10 دقائق قراءة', author: 'سيملوب',
    intro: ['إذا كنت تدير شركة جزائرية وتبحث عن ERP، فقد تلقيت على الأرجح **خطابين متناقضين**. الأول: "أودو يفعل كل شيء". الثاني: "أودو قفص، يجب البناء من الصفر". **كلاهما خاطئ.** الحقيقة بينهما، وتعتمد على من أنت.'],
    sections: [
      { heading: 'متى يكون أودو الاختيار الصحيح', body: ['**أودو صحيح عندما تكون عملياتك معيارية.** أودو Community يفعل العمل بـ**أقل من 500,000 دج**. هذا 10 أضعاف أقل من المخصص.', '**أودو صحيح عندما تكون ميزانيتك أقل من 3 ملايين دج.** تحت هذا الحد، ERP مخصص جاد لا يوجد.', '**أودو Enterprise يستحق عندما تحتاج دعم البائع.** ~800,000 دج/سنة للدعم التعاقدي استثمار جيد.'] },
      { heading: 'متى يكون أودو الاختيار الخاطئ', body: ['**أودو خاطئ عندما تكون عملياتك ميزتك التنافسية.** إجبار عمليات فريدة في وحدات أودو المعيارية يكسرها.', '**أودو خاطئ عندما تحتاج تكاملات جزائرية عميقة.** CIB، الذهبية، SATIM، CNRC — إضافات أودو لهذه **من طرف ثالث، جودة متغيرة**.', '**أودو خاطئ عندما لديك أكثر من 3 سنوات من التخصيصات.** في تلك المرحلة أنت تشغّل برنامجاً مخصصاً سيء الهندسة، لا أودو.'] },
      { heading: 'التكلفة الحقيقية المقارنة على 5 سنوات', body: ['**أودو Community:** إجمالي 5 سنوات ~**1–2.3 مليون دج**.', '**أودو Enterprise:** إجمالي 5 سنوات ~**4–9.5 مليون دج**.', '**ERP مخصص:** إجمالي 5 سنوات ~**7.5–35 مليون دج**. الميزة: يفعل بالضبط ما تريد، الشيفرة لك.', '**الخلاصة:** أودو Community **أرخص 5 مرات** للعمليات المعيارية. أودو Enterprise **مشابه للمخصص** على 5 سنوات. المخصص **أرخص من Enterprise** عند 5+ تخصيصات رئيسية.'] },
      { heading: 'توصيتنا الصادقة', body: ['نحن نسلّم الاثنين. ليس لدينا مصلحة في دفعك لأي اتجاه.', '**خذ أودو Community إذا:** عمليات معيارية + ميزانية < 3 مليون دج.', '**خذ أودو Enterprise إذا:** عمليات معيارية + لا فريق IT + تحتاج دعماً تعاقدياً.', '**ابنِ مخصصاً إذا:** العمليات = ميزة تنافسية + تكاملات جزائرية عميقة + ميزانية > 5 مليون دج.', '**غير متأكد؟** صف وضعك على واتساب. سنخبرك أيهما تختار.'] },
    ],
    pullQuote1: 'المقارنة الحقيقية ليست أودو مقابل مخصص. إنها عملياتك المعيارية مقابل عملياتك التي هي ميزتك.',
    pullQuote2: 'أودو Enterprise على 5 سنوات يكلف غالباً نفس المخصص — لكن بدون أن تملكه.',
    cta: { eyebrow: 'تحدث مع مهندس', title: 'أودو أم مخصص؟ صف وضعك في 5 دقائق — سنخبرك أيهما تختار.' },
    related: { insights: [{ key: 'erp', name: 'ERP مخصص للشركات الجزائرية — ما بعد أودو' }, { key: 'cost', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' }], services: [{ key: 'software-engineering', name: 'هندسة البرمجيات' }, { key: 'consulting', name: 'الاستشارات التقنية' }] },
  },
};

export default function Page() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;
  const articleLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: c.title, description: c.dek, image: ['https://symloop.com/blog/cover-odoo-vs-custom.jpg'], datePublished: '2026-04-12', author: { '@type': 'Organization', name: 'Symloop' }, mainEntityOfPage: 'https://symloop.com/blog/odoo-vs-erp-sur-mesure-algerie-2026/' };
  const breadcrumbs = [{ name: 'Home', url: 'https://symloop.com/' }, { name: 'Blog', url: 'https://symloop.com/blog/' }, { name: c.title, url: 'https://symloop.com/blog/odoo-vs-erp-sur-mesure-algerie-2026/' }];

  return (
    <>
      <SEO title={`${c.title} — Symloop`} description={c.dek} keywords="odoo algérie, odoo vs erp sur mesure, erp algérie 2026, odoo community algérie, odoo enterprise algérie, erp pme algérie, comparatif erp algérie, custom erp algeria, odoo alternative algeria" type="article" structuredData={articleLd} breadcrumbs={breadcrumbs} image="/blog/cover-odoo-vs-custom.jpg" />
      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8"><Link href="/blog/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">{c.kind}</Link><span className="h-px w-12 bg-white/20" /><span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span></motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">{c.title}</motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]"><span>{c.author}</span><span>{c.readTime}</span></motion.div>
            </motion.div>
          </div>
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden"><Image src="/blog/cover-odoo-vs-custom.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover" /></div>
        </section>
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-7 mb-20">
            {c.intro.map((p, i) => <motion.p key={i} variants={fadeUp} className="text-xl lg:text-2xl text-white/80 leading-[1.55] font-light">{renderRichText(p)}</motion.p>)}
          </motion.div>
          {c.sections.map((s, idx) => (
            <div key={idx}>
              <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-12 lg:mb-16">
                <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-6"><span className="font-mono text-xs tracking-[0.15em] text-white/30">{String(idx + 1).padStart(2, '0')}</span><h2 className="text-2xl lg:text-4xl font-light tracking-tight text-white leading-[1.1]">{s.heading}</h2></motion.div>
                <div className="space-y-5 ps-0 lg:ps-10">{s.body.map((p, i) => <motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/70 leading-[1.65]">{renderRichText(p)}</motion.p>)}</div>
              </motion.section>
              {idx === 1 && c.pullQuote1 && <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"><blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">« {c.pullQuote1} »</blockquote></motion.figure>}
              {idx === 2 && c.pullQuote2 && <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"><blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">« {c.pullQuote2} »</blockquote></motion.figure>}
            </div>
          ))}
        </article>
        <section className="border-t border-white/[0.06]"><div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12"><div className="lg:col-span-6"><div className="flex items-center gap-3 mb-8"><span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span><span className="h-px w-12 bg-white/20" /></div><h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-10">{c.cta.title}</h2><div className="flex flex-wrap gap-4"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"><MessageCircle className="w-4 h-4" strokeWidth={1.75} /><span>WhatsApp</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} /></a><Link href="/contact/" className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors"><span>Contact</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} /></Link></div></div><div className="lg:col-span-6"><div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">{isRtl ? '— ذات صلة' : locale === 'en' ? '— Related' : '— En lien'}</div><ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">{c.related.insights.map(it => <li key={it.key} className="bg-black"><Link href={`/insights/${it.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]"><div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Insight</div><h3 className="text-base font-light text-white leading-snug">{it.name}</h3></Link></li>)}{c.related.services.map(s => <li key={s.key} className="bg-black"><Link href={`/services/${s.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]"><div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Service</div><h3 className="text-base font-light text-white leading-snug">{s.name}</h3></Link></li>)}</ul></div></div></div></section>
      </main>
    </>
  );
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
