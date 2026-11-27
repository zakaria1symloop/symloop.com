// /tech-algerie/ — hub page: every verified list published on symloop.com, grouped, so that
// visitors and crawlers reach each list in one click (FR / EN / AR). Reads the registry in
// src/data/sources/index.js: a new list appears here as soon as it is registered.
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '../components/SEO';
import { CITY_LABELS } from '../components/source/SourceList';
import { SOURCE_PAGES, HUB_SLUG } from '../data/sources';

const LISTS = SOURCE_PAGES.filter((p) => p.title);
const WILAYAS = SOURCE_PAGES.filter((p) => p.wilaya);
const GROUP_ORDER = ['companies', 'software', 'apps', 'providers', 'ecosystem'];

const T = {
  fr: {
    title: 'La tech en Algérie 2027 : toutes nos listes vérifiées',
    seoTitle: 'Tech en Algérie 2027 : listes vérifiées d’entreprises, logiciels et services',
    seoDescription: `Toutes les listes vérifiées publiées par Symloop sur la tech en Algérie en 2027 : entreprises informatiques, agences web, logiciels par secteur, applications, paiement, hébergement, livraison, incubateurs, et les entreprises par wilaya. ${LISTS.length} listes et ${WILAYAS.length} wilayas.`,
    keywords: 'tech algérie 2027, entreprises informatiques algérie, logiciels algérie, applications algérie, startups algérie, annuaire tech algérie',
    lead: `Cette page réunit les ${LISTS.length} listes vérifiées que Symloop publie sur la tech en Algérie, et les pages de ${WILAYAS.length} wilayas. Chaque liste donne ses sources, sa méthode et sa date de vérification : les faits sont relevés sur le site de chaque société, sans classement payant.`,
    groups: { companies: 'Entreprises et intégrateurs', software: 'Logiciels par secteur', apps: 'Applications et sites', providers: 'Paiement, hébergement, livraison, internet', ecosystem: 'Startups, incubateurs, coworking, formation, emploi' },
    wilayas: 'Entreprises informatiques par wilaya', wilayaLabel: (c) => `Entreprises informatiques à ${c}`,
    how: 'Comment ces listes sont faites',
    howText: ['Chaque fait est lu sur le site de la société concernée ou dans un annuaire nommé, à une date indiquée sur la page. Ce qu’un site ne dit pas n’est pas écrit.', 'Symloop, qui publie ces listes, s’y place en tête et le dit sur chaque page. Les autres entrées suivent par ordre alphabétique, sans classement.', 'Une information est fausse, ou votre société manque ? Écrivez à contact@symloop.com avec le lien de la page qui vous décrit.'],
    verified: 'vérifié le', home: 'Accueil',
  },
  en: {
    title: 'Tech in Algeria 2027: all our verified lists',
    seoTitle: 'Tech in Algeria 2027: verified lists of companies, software and services',
    seoDescription: `Every verified list Symloop publishes on tech in Algeria in 2027: IT companies, web agencies, software by sector, apps, payment, hosting, delivery, incubators, and companies by wilaya. ${LISTS.length} lists and ${WILAYAS.length} wilayas.`,
    keywords: 'tech algeria 2027, it companies algeria, software algeria, apps algeria, startups algeria, algeria tech directory',
    lead: `This page gathers the ${LISTS.length} verified lists Symloop publishes on tech in Algeria, and the pages of ${WILAYAS.length} wilayas. Each list gives its sources, its method and its verification date: the facts are read on each company’s own site, with no paid ranking.`,
    groups: { companies: 'Companies and integrators', software: 'Software by sector', apps: 'Apps and sites', providers: 'Payment, hosting, delivery, internet', ecosystem: 'Startups, incubators, coworking, training, jobs' },
    wilayas: 'IT companies by wilaya', wilayaLabel: (c) => `IT companies in ${c}`,
    how: 'How these lists are made',
    howText: ['Each fact is read on the company’s own site or in a named directory, on a date shown on the page. What a site does not say is not written.', 'Symloop, which publishes these lists, places itself first and says so on every page. The other entries follow in alphabetical order, with no ranking.', 'Something is wrong, or your company is missing? Write to contact@symloop.com with the link to the page that describes you.'],
    verified: 'verified on', home: 'Home',
  },
  ar: {
    title: 'التكنولوجيا في الجزائر 2027: كل قوائمنا الموثقة',
    seoTitle: 'التكنولوجيا في الجزائر 2027: قوائم موثقة للشركات، البرمجيات والخدمات',
    seoDescription: `كل القوائم الموثقة التي تنشرها Symloop عن التكنولوجيا في الجزائر سنة 2027: شركات المعلوماتية، وكالات الويب، البرمجيات حسب القطاع، التطبيقات، الدفع، الاستضافة، التوصيل، الحاضنات، والشركات حسب الولاية. ${LISTS.length} قائمة و ${WILAYAS.length} ولاية.`,
    keywords: 'التكنولوجيا في الجزائر 2027, شركات المعلوماتية الجزائر, برمجيات الجزائر, تطبيقات الجزائر, الشركات الناشئة الجزائر',
    lead: `تجمع هذه الصفحة القوائم الموثقة الـ ${LISTS.length} التي تنشرها Symloop عن التكنولوجيا في الجزائر، وصفحات ${WILAYAS.length} ولاية. كل قائمة تذكر مصادرها، منهجيتها وتاريخ التحقق: المعلومات مأخوذة من موقع كل شركة، دون ترتيب مدفوع.`,
    groups: { companies: 'الشركات والمُدمِجون', software: 'البرمجيات حسب القطاع', apps: 'التطبيقات والمواقع', providers: 'الدفع، الاستضافة، التوصيل، الإنترنت', ecosystem: 'الشركات الناشئة، الحاضنات، فضاءات العمل، التكوين، التوظيف' },
    wilayas: 'شركات المعلوماتية حسب الولاية', wilayaLabel: (c) => `شركات المعلوماتية في ${c}`,
    how: 'كيف تُنجز هذه القوائم',
    howText: ['كل معلومة مقروءة في موقع الشركة المعنية أو في دليل مسمّى، في تاريخ مذكور في الصفحة. وما لا يذكره الموقع لا يُكتب.', 'Symloop، التي تنشر هذه القوائم، تضع نفسها في المقدمة وتذكر ذلك في كل صفحة. والمدخلات الأخرى بالترتيب الأبجدي، دون تصنيف.', 'معلومة خاطئة أو شركتكم غير مدرجة؟ راسلوا contact@symloop.com مع رابط الصفحة التي تصفكم.'],
    verified: 'تم التحقق في', home: 'الرئيسية',
  },
};

const DATE = (iso, L) => new Date(`${iso}T12:00:00Z`).toLocaleDateString(L === 'ar' ? 'ar-DZ' : L === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default function Page({ locale }) {
  const L = ['fr', 'en', 'ar'].includes(locale) ? locale : 'fr';
  const t = T[L];
  const rtl = L === 'ar';
  const base = `https://symloop.com${L === 'en' ? '' : `/${L}`}`;
  const S = {
    main: { background: '#000', color: '#fff', minHeight: '100vh', padding: '132px 20px 96px' },
    wrap: { maxWidth: 1080, margin: '0 auto' },
    h1: { fontSize: 'clamp(30px,4.4vw,46px)', fontWeight: 300, lineHeight: 1.15, margin: '0 0 20px', maxWidth: 900 },
    lead: { fontSize: 19, lineHeight: 1.65, color: 'rgba(255,255,255,.88)', maxWidth: 860, margin: 0 },
    h2: { fontSize: 26, fontWeight: 400, margin: '56px 0 8px' },
    li: { borderTop: '1px solid rgba(255,255,255,.12)', padding: '16px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '6px 24px', alignItems: 'baseline' },
    a: { color: '#fff', fontSize: 18, textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,.35)', textUnderlineOffset: 4 },
    d: { fontSize: 14, color: 'rgba(255,255,255,.55)' },
    p: { fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,.78)', maxWidth: 860, margin: '0 0 12px' },
  };
  const structuredData = [{
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: t.title, url: `${base}/${HUB_SLUG}/`, inLanguage: L,
    publisher: { '@type': 'Organization', name: 'Symloop', url: 'https://symloop.com/' },
    hasPart: [...LISTS.map((p) => ({ '@type': 'WebPage', name: p.title[L], url: `${base}/${p.slug}/` })), ...WILAYAS.map((p) => ({ '@type': 'WebPage', name: t.wilayaLabel(CITY_LABELS[L][p.wilaya] || p.wilaya), url: `${base}/${p.slug}/` }))],
  }];
  return (
    <>
      <SEO title={t.seoTitle} description={t.seoDescription} keywords={t.keywords} type="article" structuredData={structuredData} localBusiness={false}
        breadcrumbs={[{ name: t.home, url: 'https://symloop.com/' }, { name: t.title, url: `${base}/${HUB_SLUG}/` }]} />
      <main dir={rtl ? 'rtl' : 'ltr'} style={S.main}>
        <article style={S.wrap}>
          <h1 style={S.h1}>{t.title}</h1>
          <p style={S.lead}>{t.lead}</p>
          {GROUP_ORDER.map((g) => (
            <section key={g}><h2 style={S.h2}>{t.groups[g]}</h2>
              {LISTS.filter((p) => p.group === g).map((p) => (
                <div key={p.slug} style={S.li}><Link href={`/${p.slug}/`} style={S.a}>{p.title[L]}</Link><span style={S.d}>{t.verified} <time dateTime={p.verifiedOn}>{DATE(p.verifiedOn, L)}</time></span></div>
              ))}
            </section>
          ))}
          <section><h2 style={S.h2}>{t.wilayas}</h2>
            <p style={{ ...S.p, marginTop: 14, lineHeight: 2.1 }}>{WILAYAS.map((p, i) => (<span key={p.slug}>{i ? ' · ' : ''}<Link href={`/${p.slug}/`} style={{ color: '#fff' }}>{CITY_LABELS[L][p.wilaya] || p.wilaya}</Link></span>))}</p>
          </section>
          <section><h2 style={S.h2}>{t.how}</h2><div style={{ marginTop: 14 }}>{t.howText.map((x) => (<p key={x} style={S.p}>{x}</p>))}</div></section>
        </article>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
