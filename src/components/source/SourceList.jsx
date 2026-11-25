// Shared layout for "source pages": sourced, dated lists meant to be quoted by search engines
// and AI assistants. One dataset in src/data/sources, one thin page per question.
//
// What every source page carries, in this order: the answer in two sentences, a dated and
// counted meta line with "published by Symloop", the full table, the same entries regrouped
// (by specialty, by city) as plain sentences an assistant can lift, the method and its limits,
// how to correct an entry, and a short FAQ. No ranking and no praise anywhere.
import Link from 'next/link';
import SEO from '../SEO';

export const SERVICE_LABELS = {
  fr: { web: 'sites et applications web', mobile: 'applications mobiles', software: 'logiciel sur mesure', erp: 'ERP et CRM', ai: 'IA et automatisation', marketing: 'marketing digital', design: 'design UI/UX', hosting: 'hébergement', ecommerce: 'e-commerce', security: 'sécurité', payments: 'paiement en ligne', it: 'services informatiques', saas: 'plateformes SaaS', devops: 'cloud et DevOps', desktop: 'logiciels de bureau', training: 'formation', audit: 'audit de systèmes d’information', outsourcing: 'sous-traitance', cloud: 'migration cloud', video: 'photo et vidéo', print: 'impression et signalétique' },
  en: { web: 'websites and web apps', mobile: 'mobile apps', software: 'custom software', erp: 'ERP and CRM', ai: 'AI and automation', marketing: 'digital marketing', design: 'UI/UX design', hosting: 'hosting', ecommerce: 'e-commerce', security: 'security', payments: 'online payment', it: 'IT services', saas: 'SaaS platforms', devops: 'cloud and DevOps', desktop: 'desktop software', training: 'training', audit: 'information systems audit', outsourcing: 'outsourcing', cloud: 'cloud migration', video: 'photo and video', print: 'printing and signage' },
  ar: { web: 'مواقع وتطبيقات ويب', mobile: 'تطبيقات جوال', software: 'برمجيات على المقاس', erp: 'ERP و CRM', ai: 'ذكاء اصطناعي وأتمتة', marketing: 'تسويق رقمي', design: 'تصميم UI/UX', hosting: 'استضافة', ecommerce: 'تجارة إلكترونية', security: 'أمن معلوماتي', payments: 'دفع إلكتروني', it: 'خدمات معلوماتية', saas: 'منصات SaaS', devops: 'سحابة و DevOps', desktop: 'برمجيات مكتبية', training: 'تكوين', audit: 'تدقيق أنظمة المعلومات', outsourcing: 'تعهيد', cloud: 'انتقال إلى السحابة', video: 'تصوير وفيديو', print: 'طباعة ولافتات' },
};
export const CITY_LABELS = {
  fr: { alger: 'Alger', blida: 'Blida', bejaia: 'Béjaïa', constantine: 'Constantine', djelfa: 'Djelfa', oran: 'Oran', setif: 'Sétif', annaba: 'Annaba', 'tizi-ouzou': 'Tizi Ouzou', tlemcen: 'Tlemcen', batna: 'Batna', 'sidi-bel-abbes': 'Sidi Bel Abbès', ouargla: 'Ouargla', ghardaia: 'Ghardaïa', boumerdes: 'Boumerdès', tipaza: 'Tipaza', skikda: 'Skikda', jijel: 'Jijel', biskra: 'Biskra', mostaganem: 'Mostaganem', chlef: 'Chlef', medea: 'Médéa', bba: 'Bordj Bou Arréridj', msila: 'M’sila', 'el-oued': 'El Oued', tiaret: 'Tiaret', bouira: 'Bouira', mascara: 'Mascara', guelma: 'Guelma', 'oum-el-bouaghi': 'Oum El Bouaghi' },
  en: { alger: 'Algiers', blida: 'Blida', bejaia: 'Béjaïa', constantine: 'Constantine', djelfa: 'Djelfa', oran: 'Oran', setif: 'Sétif', annaba: 'Annaba', 'tizi-ouzou': 'Tizi Ouzou', tlemcen: 'Tlemcen', batna: 'Batna', 'sidi-bel-abbes': 'Sidi Bel Abbès', ouargla: 'Ouargla', ghardaia: 'Ghardaïa', boumerdes: 'Boumerdès', tipaza: 'Tipaza', skikda: 'Skikda', jijel: 'Jijel', biskra: 'Biskra', mostaganem: 'Mostaganem', chlef: 'Chlef', medea: 'Médéa', bba: 'Bordj Bou Arréridj', msila: 'M’sila', 'el-oued': 'El Oued', tiaret: 'Tiaret', bouira: 'Bouira', mascara: 'Mascara', guelma: 'Guelma', 'oum-el-bouaghi': 'Oum El Bouaghi' },
  ar: { alger: 'الجزائر العاصمة', blida: 'البليدة', bejaia: 'بجاية', constantine: 'قسنطينة', djelfa: 'الجلفة', oran: 'وهران', setif: 'سطيف', annaba: 'عنابة', 'tizi-ouzou': 'تيزي وزو', tlemcen: 'تلمسان', batna: 'باتنة', 'sidi-bel-abbes': 'سيدي بلعباس', ouargla: 'ورقلة', ghardaia: 'غرداية', boumerdes: 'بومرداس', tipaza: 'تيبازة', skikda: 'سكيكدة', jijel: 'جيجل', biskra: 'بسكرة', mostaganem: 'مستغانم', chlef: 'الشلف', medea: 'المدية', bba: 'برج بوعريريج', msila: 'المسيلة', 'el-oued': 'الوادي', tiaret: 'تيارت', bouira: 'البويرة', mascara: 'معسكر', guelma: 'قالمة', 'oum-el-bouaghi': 'أم البواقي' },
};
export const FOCUS_LABELS = {
  fr: { software: 'Éditeurs et sociétés de logiciel', web: 'Agences web et digitales', mobile: 'Spécialistes des applications mobiles', it: 'Sociétés de services informatiques' },
  en: { software: 'Software companies and publishers', web: 'Web and digital agencies', mobile: 'Mobile app specialists', it: 'IT services companies' },
  ar: { software: 'شركات وناشرو البرمجيات', web: 'وكالات الويب والرقمنة', mobile: 'المتخصصون في تطبيقات الجوال', it: 'شركات الخدمات المعلوماتية' },
};
const UI = {
  fr: { company: 'Entreprise', city: 'Ville', does: 'Ce qu’elle fait', founded: 'Création', fact: 'Relevé sur son site', bySpec: 'Par spécialité', byCity: 'Par ville', method: 'Méthode', limits: 'Limites', fix: 'Corriger ou ajouter une entreprise', faq: 'Questions fréquentes', verified: 'Vérifié le', count: 'entreprises', by: 'Liste publiée par Symloop', self: 'éditeur de la liste', none: 'non indiquée', home: 'Accueil', sep: ', ', colon: ' : ' },
  en: { company: 'Company', city: 'City', does: 'What it does', founded: 'Founded', fact: 'Read on its site', bySpec: 'By specialty', byCity: 'By city', method: 'Method', limits: 'Limits', fix: 'Correct or add a company', faq: 'Frequently asked questions', verified: 'Verified on', count: 'companies', by: 'List published by Symloop', self: 'publisher of the list', none: 'not stated', home: 'Home', sep: ', ', colon: ': ' },
  ar: { company: 'المؤسسة', city: 'المدينة', does: 'ما تقوم به', founded: 'التأسيس', fact: 'ما ورد في موقعها', bySpec: 'حسب التخصص', byCity: 'حسب المدينة', method: 'المنهج', limits: 'الحدود', fix: 'تصحيح أو إضافة مؤسسة', faq: 'أسئلة متكررة', verified: 'تم التحقق في', count: 'مؤسسة', by: 'قائمة منشورة من طرف Symloop', self: 'ناشر القائمة', none: 'غير مذكور', home: 'الرئيسية', sep: '، ', colon: ': ' },
};
const DATE = (iso, locale) => new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale === 'ar' ? 'ar-DZ-u-nu-latn' : locale === 'en' ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
const ltr = (s) => <bdi dir="ltr">{s}</bdi>;

// focusLabels: labels of the `focus` groups (specialty by default; a sector map for product lists).
// doesFrom:    'services' lists each entry's services; 'focus' shows its group label instead.
export default function SourceList({ locale, slug, content, items, verifiedOn, groups = ['focus', 'city'], focusLabels = FOCUS_LABELS, doesFrom = 'services' }) {
  const L = ['fr', 'en', 'ar'].includes(locale) ? locale : 'fr';
  const t = UI[L]; const c = content[L]; const rtl = L === 'ar';
  const base = `https://symloop.com${L === 'en' ? '' : `/${L}`}/${slug}/`;
  const names = (list) => list.map((x, i) => (<span key={x.name}>{i ? t.sep : ''}<a href={x.url} rel="noopener" target="_blank" style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,.35)', textUnderlineOffset: 3 }}>{ltr(x.name)}</a></span>));
  const groupBy = (key) => { const m = new Map(); for (const x of items) { if (!x[key]) continue; if (!m.has(x[key])) m.set(x[key], []); m.get(x[key]).push(x); } return [...m.entries()].sort((a, b) => b[1].length - a[1].length); };

  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'ItemList', name: c.title, description: c.lead, url: base, numberOfItems: items.length, dateModified: verifiedOn,
      itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Organization', name: x.name, url: x.url, address: { '@type': 'PostalAddress', ...(x.city ? { addressLocality: CITY_LABELS[L][x.city] || x.city } : {}), addressCountry: 'DZ' }, ...(x.founded ? { foundingDate: String(x.founded) } : {}), description: x.note[L] } })) },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ];
  const S = {
    main: { background: '#000', color: '#fff', minHeight: '100vh', padding: '132px 20px 96px' },
    wrap: { maxWidth: 1080, margin: '0 auto' },
    h1: { fontSize: 'clamp(30px,4.4vw,46px)', fontWeight: 300, lineHeight: 1.15, margin: '0 0 20px', maxWidth: 900 },
    lead: { fontSize: 19, lineHeight: 1.65, color: 'rgba(255,255,255,.88)', maxWidth: 860, margin: 0 },
    meta: { display: 'flex', flexWrap: 'wrap', gap: '8px 26px', margin: '26px 0 0', padding: '14px 0', borderTop: '1px solid rgba(255,255,255,.16)', borderBottom: '1px solid rgba(255,255,255,.16)', fontSize: 14, color: 'rgba(255,255,255,.7)' },
    h2: { fontSize: 26, fontWeight: 400, margin: '56px 0 16px' },
    p: { fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,.78)', maxWidth: 860, margin: '0 0 12px' },
    th: { textAlign: 'start', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.6)', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,.22)', whiteSpace: 'nowrap' },
    td: { fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,.82)', padding: '14px', borderBottom: '1px solid rgba(255,255,255,.1)', verticalAlign: 'top' },
  };

  return (
    <>
      <SEO title={c.seoTitle} description={c.seoDescription} keywords={c.keywords} type="article" structuredData={structuredData} localBusiness={false}
        breadcrumbs={[{ name: t.home, url: 'https://symloop.com/' }, { name: c.title, url: base }]} />
      <main dir={rtl ? 'rtl' : 'ltr'} style={S.main}>
        <article style={S.wrap}>
          <h1 style={S.h1}>{c.title}</h1>
          <p style={S.lead}>{c.lead}</p>
          <div style={S.meta}>
            <span>{t.verified} <time dateTime={verifiedOn}>{DATE(verifiedOn, L)}</time></span>
            <span>{ltr(String(items.length))} {c.countLabel || t.count}</span>
            <span>{t.by}</span>
          </div>

          <div style={{ overflowX: 'auto', marginTop: 34 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead><tr><th style={S.th}>{c.colCompany || t.company}</th><th style={S.th}>{t.city}</th><th style={S.th}>{c.colDoes || t.does}</th><th style={S.th}>{t.founded}</th><th style={S.th}>{c.colFact || t.fact}</th></tr></thead>
              <tbody>
                {items.map((x) => (
                  <tr key={x.name} id={x.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                    <td style={{ ...S.td, whiteSpace: 'nowrap' }}><a href={x.url} rel="noopener" target="_blank" style={{ color: '#fff', fontWeight: 500, textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,.35)', textUnderlineOffset: 3 }}>{ltr(x.name)}</a>{x.self ? <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', marginTop: 4 }}>{t.self}</div> : null}</td>
                    <td style={{ ...S.td, whiteSpace: 'nowrap' }}>{x.city ? (CITY_LABELS[L][x.city] || x.city) : <span style={{ color: 'rgba(255,255,255,.4)' }}>{t.none}</span>}</td>
                    <td style={S.td}>{doesFrom === 'focus' ? <>{focusLabels[L][x.focus] || x.focus}{x.platforms ? <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', marginTop: 4 }}>{ltr(x.platforms.map((k) => ({ web: 'Web', android: 'Android', ios: 'iOS' }[k] || k)).join(' · '))}</div> : null}</> : x.services.map((k) => SERVICE_LABELS[L][k]).join(t.sep)}</td>
                    <td style={{ ...S.td, whiteSpace: x.foundedNote ? 'normal' : 'nowrap' }}>{x.founded ? <>{ltr(String(x.founded))}{x.foundedNote ? <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', marginTop: 4 }}>{x.foundedNote[L]}</div> : null}</> : <span style={{ color: 'rgba(255,255,255,.4)' }}>{t.none}</span>}</td>
                    <td style={{ ...S.td, minWidth: 280 }}>{x.note[L]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {(groups.includes('focus') || c.byService.length > 0) && (<section><h2 style={S.h2}>{t.bySpec}</h2>
            {groups.includes('focus') && groupBy('focus').map(([k, list]) => (<p key={k} style={S.p}><strong style={{ color: '#fff', fontWeight: 500 }}>{focusLabels[L][k] || k}</strong>{t.colon}{names(list)}.</p>))}
            {c.byService.map(([label, key]) => { const list = items.filter((x) => (x.services || []).includes(key)); return list.length ? (<p key={key} style={S.p}><strong style={{ color: '#fff', fontWeight: 500 }}>{label}</strong>{t.colon}{names(list)}.</p>) : null; })}
          </section>)}

          {groups.includes('city') && (<section><h2 style={S.h2}>{t.byCity}</h2>
            {groupBy('city').map(([k, list]) => (<p key={k} style={S.p}><strong style={{ color: '#fff', fontWeight: 500 }}>{CITY_LABELS[L][k] || k}</strong> ({ltr(String(list.length))}){t.colon}{names(list)}.</p>))}
          </section>)}

          <section><h2 style={S.h2}>{t.method}</h2>{c.method.map((p) => (<p key={p} style={S.p}>{p}</p>))}</section>
          <section><h2 style={S.h2}>{t.limits}</h2>{c.limits.map((p) => (<p key={p} style={S.p}>{p}</p>))}</section>
          <section><h2 style={S.h2}>{t.fix}</h2><p style={S.p}>{c.fix} <a href="mailto:contact@symloop.com" style={{ color: '#fff' }}>{ltr('contact@symloop.com')}</a></p></section>
          <section><h2 style={S.h2}>{t.faq}</h2>
            {c.faq.map(([q, a]) => (<div key={q} style={{ borderTop: '1px solid rgba(255,255,255,.12)', padding: '18px 0' }}><h3 style={{ fontSize: 18, fontWeight: 500, margin: '0 0 8px' }}>{q}</h3><p style={{ ...S.p, margin: 0 }}>{a}</p></div>))}
          </section>

          {c.related?.length ? (<p style={{ ...S.p, marginTop: 44 }}>{c.related.map(([label, href], i) => (<span key={href}>{i ? ' · ' : ''}<Link href={href} style={{ color: '#fff' }}>{label}</Link></span>))}</p>) : null}
        </article>
      </main>
    </>
  );
}
