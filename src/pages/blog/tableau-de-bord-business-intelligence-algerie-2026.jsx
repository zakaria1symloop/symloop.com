"use client";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

const ARTICLE = {
  title: 'Tableau de Bord et Business Intelligence en Algérie 2026',
  desc: "Guide BI pour entreprises algériennes. Power BI, Tableau, Metabase, ou tableau de bord sur-mesure. Data warehouse, KPI temps réel, analytique prédictive. Comment construire votre BI.",
  url: 'https://symloop.com/blog/tableau-de-bord-business-intelligence-algerie-2026/',
  image: 'https://symloop.com/blog/cover-bi-dashboard.jpg',
  published: '2026-05-04',
  modified: '2026-05-04',
  readTime: '17 min',
};

const FAQ = [
  {
    q: "Qu'est-ce qu'un tableau de bord business intelligence (BI) ?",
    a: "Un tableau de bord BI est un écran interactif qui agrège, filtre et visualise les indicateurs clés de performance (KPI) d'une entreprise en temps réel ou quasi-réel. Il combine des données de plusieurs sources (ERP, CRM, e-commerce, paie, BDD opérationnelles) dans un entrepôt de données (data warehouse), applique des transformations (ETL/ELT), et affiche les résultats sous forme de graphiques, tables et alertes. Un bon tableau de bord BI permet à un dirigeant de prendre une décision en moins d'une minute là où l'extraction Excel équivalente prendrait 2 jours.",
  },
  {
    q: "Quelle différence entre Power BI, Tableau, Metabase, Looker, et Qlik ?",
    a: "Power BI (Microsoft) est dominant en Algérie pour les utilisateurs Office 365 — bonne intégration Excel, prix compétitif (10 €/utilisateur/mois pour Pro). Tableau (Salesforce) reste la référence pour la visualisation avancée — plus puissant graphiquement mais plus cher. Metabase est l'option open source la plus populaire — gratuite (community), simple à installer, parfaite pour les startups. Looker (Google) excelle sur la modélisation de données et l'analytics produit. Qlik Sense propose un moteur associatif unique mais moins populaire en Algérie. Le choix dépend de la taille, du budget, et de l'écosystème existant.",
  },
  {
    q: 'Combien coûte une solution BI en Algérie en 2026 ?',
    a: "Power BI Pro : 10 € par utilisateur par mois (300 000 DA par an pour 20 utilisateurs). Tableau Cloud : 75 € par utilisateur par mois — beaucoup plus cher. Metabase open source : 0 DA en licence + 1 à 3 millions DA d'intégration et formation. Tableau de bord sur-mesure développé par Symloop : 4 à 15 millions DA selon la complexité de la modélisation et le nombre de sources. Pour la plupart des PME algériennes, la combinaison data warehouse sur-mesure (PostgreSQL ou ClickHouse) + Metabase comme couche de visualisation offre le meilleur rapport coût/performance.",
  },
  {
    q: "Faut-il un data warehouse avant de mettre en place un BI ?",
    a: "Pour des cas simples (un seul ERP, moins de 100 000 lignes par mois), Power BI ou Metabase peuvent se connecter directement à la base opérationnelle sans data warehouse. Pour les entreprises avec plusieurs sources (ERP + CRM + e-commerce + paie + Google Analytics), un data warehouse devient indispensable : il consolide les données, applique les transformations, garantit la performance des requêtes (un dashboard temps réel sur la BDD opérationnelle peut ralentir l'application métier), et historise les données pour les analyses temporelles. Symloop construit des data warehouses sur PostgreSQL, ClickHouse ou BigQuery selon les volumes.",
  },
  {
    q: "Quels indicateurs (KPI) un dirigeant algérien doit-il piloter en 2026 ?",
    a: "Pour un dirigeant d'entreprise algérienne, les 8 KPI essentiels à suivre quotidiennement sont : 1) Chiffre d'affaires journalier vs mensuel cumulé, 2) Marge brute par catégorie produit, 3) Taux de transformation commerciale (devis → commande), 4) BFR et trésorerie disponible, 5) Stocks dormants vs rotation, 6) Productivité par site/équipe, 7) Délai moyen de paiement client (DSO), 8) Taux de satisfaction client (NPS si tracé). Un bon tableau de bord BI les présente sur un écran unique avec des alertes automatiques quand un seuil est franchi.",
  },
  {
    q: "L'analytique prédictive (IA) vaut-elle le coup pour une entreprise algérienne ?",
    a: "Oui, sur des cas d'usage ciblés : 1) Prévision de ventes (réduit les ruptures et les surstocks de 20 à 40 %), 2) Détection de fraude (paiement, e-commerce, RH), 3) Maintenance prédictive industrielle (réduit les arrêts de 25 à 40 %), 4) Analyse de churn client (CRM, telco, banque), 5) Optimisation de prix dynamique. L'investissement initial en data + IA est de 3 à 12 millions DA selon la complexité, avec un ROI typique de 12 à 24 mois. Mais attention : sans qualité des données en amont (ce que résout le data warehouse), aucun modèle d'IA ne fonctionne.",
  },
];

const SECTIONS = [
  {
    h: "Pourquoi 2026 est l'année où la BI devient incontournable en Algérie",
    body: [
      "Les dirigeants d'entreprises algériennes pilotaient encore en 2020 sur des **fichiers Excel envoyés par email le lundi matin avec les chiffres de la semaine précédente.** Cette époque se termine — pour trois raisons. Premièrement, la pression réglementaire et la concurrence se sont durcies : impossible de prendre une décision tarifaire ou opérationnelle avec une semaine de décalage quand vos concurrents pilotent en temps réel. Deuxièmement, les ERP modernes et le e-commerce produisent désormais 100 à 1000 fois plus de données qu'il y a 10 ans, rendant Excel inopérant au-delà d'un certain seuil. Troisièmement, les outils BI sont devenus accessibles : un tableau de bord exécutif coûte aujourd'hui 10 fois moins qu'il y a 10 ans.",
      "**Un dirigeant qui pilote son entreprise sans BI temps réel en 2026, c'est comme un pilote d'avion qui vole sans instruments.** Cette page est un guide pour les directions générales, financières et opérationnelles qui veulent passer d'Excel hebdomadaire à un véritable pilotage data-driven.",
    ],
  },
  {
    h: "Les 5 couches d'une stack BI moderne",
    body: [
      "**Couche 1 : sources de données.** ERP (Sage, Odoo, SAP), CRM (Salesforce, HubSpot, Zoho), e-commerce (Shopify, WooCommerce, custom), comptabilité, paie, Google Analytics, réseaux sociaux, applications métier internes. Chaque source a son format, son rythme, sa qualité.",
      "**Couche 2 : ingestion et ETL.** Outils qui extraient les données des sources, les transforment (nettoyage, normalisation, agrégation), et les chargent dans le data warehouse. Airbyte, Fivetran (commercial), ou pipelines sur-mesure en Python pour les besoins spécifiques.",
      "**Couche 3 : data warehouse.** Le cerveau de la BI — base de données analytique optimisée pour les requêtes complexes sur de gros volumes. PostgreSQL convient jusqu'à quelques centaines de millions de lignes. ClickHouse pour les volumes plus importants. BigQuery (Google) ou Snowflake si vous acceptez le cloud étranger.",
      "**Couche 4 : couche sémantique et métriques.** Définit ce que signifient \"chiffre d'affaires\", \"marge\", \"client actif\" — règles métier claires, partagées entre toute l'organisation. dbt est l'outil de référence pour cela.",
      "**Couche 5 : visualisation et reporting.** Power BI, Tableau, Metabase, Looker — l'écran que les utilisateurs voient. Doit être rapide (sub-seconde), interactif (filtres, drill-down), et beau (sinon personne ne l'utilise).",
    ],
  },
  {
    h: "Power BI vs Tableau vs Metabase vs sur-mesure — comment décider",
    body: [
      "**Power BI** est le bon choix si votre entreprise utilise déjà Microsoft 365, si la majorité de vos utilisateurs travaillent dans Excel, et si votre budget par utilisateur est limité (10 €/mois). Limites : courbe d'apprentissage DAX (le langage de calcul) non triviale, dépendance Microsoft, et certaines fonctions avancées de visualisation moins puissantes que Tableau.",
      "**Tableau** est le bon choix si la qualité visuelle prime et si vous avez des analystes data dédiés capables de l'exploiter pleinement. Coût élevé (75 €/utilisateur/mois en cloud), mais retours visuels supérieurs.",
      "**Metabase (open source)** est imbattable pour les startups, scale-ups, et PME algériennes qui veulent commencer la BI sans payer de licences. Installation sur serveur (votre propre infra ou cloud) en quelques heures. Interface simple, courbe d'apprentissage minimale. Limites : moins de fonctions avancées que les solutions commerciales, mais largement suffisant pour 80 % des cas d'usage.",
      "**Sur-mesure** devient le bon choix quand : 1) Votre tableau de bord doit être intégré directement à votre application métier (pas un outil séparé), 2) Vos KPI sont si spécifiques qu'aucun outil standard ne les modélise correctement, 3) Vous voulez exposer le tableau de bord à vos clients ou partenaires (tableau de bord embarqué). Symloop construit des tableaux de bord BI sur-mesure (React + bibliothèques de charts comme Plotly, Recharts, Apache ECharts) intégrés à des plateformes métier.",
    ],
  },
  {
    h: "L'analytique prédictive — IA appliquée à votre data",
    body: [
      "Une fois le data warehouse en place, il devient possible d'aller au-delà du **descriptif** (ce qui s'est passé) vers le **prédictif** (ce qui va se passer) et le **prescriptif** (ce qu'il faut faire).",
      "**Prévision de ventes (forecasting).** Modèles ARIMA, Prophet, ou réseaux de neurones qui prédisent les ventes par produit, par site, par jour. Réduction typique des ruptures de stock : 20 à 40 %. Réduction des surstocks : 15 à 30 %. ROI rapide pour les distributeurs et e-commerces.",
      "**Détection d'anomalies.** Identifier en temps réel les fraudes au paiement, les erreurs de saisie, les comportements clients inhabituels. Particulièrement valuable en banque, e-commerce et télécom.",
      "**Segmentation client.** K-means ou modèles plus avancés pour identifier des groupes de clients aux comportements similaires — base d'un marketing ciblé efficace.",
      "**Maintenance prédictive industrielle.** Voir notre article dédié sur la GMAO — l'IA appliquée aux capteurs IoT pour prédire les pannes avant qu'elles surviennent.",
      "L'investissement initial en data + IA pour une PME algérienne est de 3 à 12 millions DA. Le ROI typique tombe en 12 à 24 mois sur les cas d'usage bien choisis.",
    ],
  },
  {
    h: "Les pièges à éviter dans un projet BI",
    body: [
      "**Piège 1 : commencer par l'outil avant de définir les KPI.** Acheter Power BI sans avoir clarifié ce qu'on veut mesurer aboutit à des dizaines de tableaux de bord que personne ne regarde. Toujours commencer par les 5-10 questions de pilotage que la direction veut résoudre.",
      "**Piège 2 : connecter directement le BI à la base opérationnelle.** Au début c'est tentant — pas de data warehouse, pas d'ETL, ça marche tout de suite. Mais quand le BI commence à charger l'application métier (ralentissement caissier, plantage du caissier le samedi en pic), il est trop tard. Mettre un data warehouse dès le début.",
      "**Piège 3 : laisser chaque service définir ses propres KPI.** \"Chiffre d'affaires\" pour la finance peut signifier \"ventes facturées HT\". Pour les ventes \"commandes signées TTC\". Pour la direction \"encaissements bancaires\". Sans couche sémantique partagée (dbt), trois services produisent trois chiffres différents pour le même concept et personne ne se fait confiance.",
      "**Piège 4 : ignorer la qualité des données amont.** \"Garbage in, garbage out\" — un data warehouse qui ingère des données erronées de l'ERP produit des tableaux de bord trompeurs. Investir dans la qualité de saisie en amont (validations, contrôles, formation) est souvent plus rentable que dans le BI lui-même.",
      "**Piège 5 : sur-investir dans l'analytique prédictive avant d'avoir le descriptif solide.** Aucun modèle d'IA ne corrige des données mal modélisées. Construire le data warehouse + dashboards descriptifs solides avant d'investir dans le prédictif.",
    ],
  },
  {
    h: "Notre approche — BI conçue depuis les questions, pas depuis l'outil",
    body: [
      "Nous construisons des architectures BI qui durent dix ans. **Cela commence par une session de cadrage avec la direction — quelles sont les 5 à 10 questions de pilotage critiques, à quelle fréquence, pour quel niveau de granularité.** Puis nous remontons depuis ces questions vers la modélisation des données, le data warehouse, les pipelines ETL, et enfin l'outil de visualisation.",
      "Notre stack typique : **PostgreSQL ou ClickHouse en data warehouse (sur infrastructure souveraine), pipelines ETL en Python ou Airbyte, modélisation sémantique avec dbt, visualisation Metabase pour la majorité des cas, ou tableau de bord sur-mesure React/Plotly pour les besoins spécifiques.** Architecture conçue pour scaler et pour que vous restiez maître de vos données.",
      "Pour une PME algérienne typique (10 à 50 utilisateurs BI, 5 à 10 sources de données, plusieurs millions de lignes), un déploiement complet prend 8 à 14 semaines pour 4 à 9 millions DA. Pour les groupes industriels avec besoins prédictifs et plusieurs sites, comptez 16 à 28 semaines et 9 à 18 millions DA.",
    ],
  },
];

export default function BlogBiPage() {
  const router = useRouter();
  const isRTL = router.locale === 'ar';

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: ARTICLE.title, description: ARTICLE.desc, image: [ARTICLE.image],
    author: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
    publisher: { '@type': 'Organization', name: 'Symloop Technology', logo: { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' } },
    datePublished: ARTICLE.published, dateModified: ARTICLE.modified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': ARTICLE.url },
    inLanguage: 'fr',
    about: [
      { '@type': 'Thing', name: 'Business intelligence' },
      { '@type': 'Thing', name: 'Tableau de bord executif' },
      { '@type': 'Thing', name: 'Data warehouse Algerie' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://symloop.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://symloop.com/blog/' },
      { '@type': 'ListItem', position: 3, name: 'Tableau de bord BI Algérie 2026', item: ARTICLE.url },
    ],
  };

  return (
    <>
      <Head>
        <title>{ARTICLE.title} | Symloop</title>
        <meta name="description" content={ARTICLE.desc} />
        <meta name="keywords" content="tableau de bord algerie, business intelligence algerie, bi algerie 2026, power bi alternative algerie, tableau software algerie, metabase open source, looker algerie, decisionnel entreprise, kpi pilotage, data warehouse algerie, data warehouse postgresql clickhouse, etl pipeline algerie, dbt modelisation, analytique predictive, ia previsions ventes algerie, dashboard executif sur mesure, embedded analytics, tableau de bord temps reel, reporting automatise, dso bfr stocks, kpi dirigeant pme algerie" />
        <link rel="canonical" href={ARTICLE.url} />
        <meta property="og:title" content={ARTICLE.title} />
        <meta property="og:description" content={ARTICLE.desc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={ARTICLE.url} />
        <meta property="og:image" content={ARTICLE.image} />
        <meta property="og:locale" content="fr_DZ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ARTICLE.title} />
        <meta name="twitter:description" content={ARTICLE.desc} />
        <meta name="twitter:image" content={ARTICLE.image} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <main dir={isRTL ? 'rtl' : 'ltr'} className="bg-black text-white">
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-12">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link href="/blog/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">Blog</Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">Analytics · {ARTICLE.readTime}</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">
                Tableau de Bord et Business Intelligence en Algérie 2026
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
                D'Excel hebdomadaire au pilotage temps réel. Power BI, Tableau, Metabase, ou tableau de bord sur-mesure. Data warehouse, KPI, analytique prédictive — comment construire votre BI sans tomber dans les pièges classiques.
              </motion.p>
            </motion.div>
          </div>
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image src="/blog/cover-bi-dashboard.jpg" alt="Tableau de bord BI en Algérie — visualisation de données analytiques sur écran de salle de conseil" fill priority sizes="100vw" className="object-cover" />
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          {SECTIONS.map((s, idx) => (
            <motion.section key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">{String(idx + 1).padStart(2, '0')}</span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">{s.h}</h2>
              </motion.div>
              <div className="space-y-5 ps-0 lg:ps-10">
                {s.body.map((p, i) => (
                  <motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/70 leading-relaxed">
                    {p.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
                      part.startsWith('**') && part.endsWith('**')
                        ? <span key={j} className="font-normal text-white border-b border-white/30">{part.slice(2, -2)}</span>
                        : <span key={j}>{part}</span>
                    )}
                  </motion.p>
                ))}
              </div>
            </motion.section>
          ))}

          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-20 mb-16">
            <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-10">
              <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">FAQ</span>
              <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">Questions fréquentes sur la BI en Algérie</h2>
            </motion.div>
            <div className="space-y-8 ps-0 lg:ps-10 border-t border-white/[0.06] pt-8">
              {FAQ.map((f, i) => (
                <motion.div key={i} variants={fadeUp} className="border-b border-white/[0.06] pb-8 last:border-0">
                  <h3 className="text-lg lg:text-xl font-normal text-white mb-3 leading-snug">{f.q}</h3>
                  <p className="text-base lg:text-lg text-white/65 leading-relaxed">{f.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-20 mb-12">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">À lire ensuite</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <ul className="space-y-px bg-white/[0.06]">
              {[
                { name: "L'IA en production — adoption pratique pour les équipes opérationnelles", href: '/insights/ai/' },
                { name: 'AI for the CTO — pragmatic adoption framework', href: '/insights/ai-cto/' },
                { name: 'Services Artificial Intelligence — ML, NLP, computer vision', href: '/services/ai/' },
                { name: 'Modernisation des logiciels bancaires — reporting réglementaire', href: '/insights/banking/' },
              ].map((item) => (
                <motion.li key={item.href} variants={fadeUp}>
                  <Link href={item.href} className="group flex items-start justify-between gap-6 bg-black p-6 hover:bg-white/[0.02] transition-colors">
                    <span className="text-base lg:text-lg text-white/75 group-hover:text-white transition-colors leading-snug font-light">{item.name}</span>
                    <ArrowRight className="w-4 h-4 mt-1.5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all shrink-0" strokeWidth={1.5} />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </article>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">Parlez à un ingénieur</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">
                Vous voulez piloter votre entreprise en temps réel au lieu d'attendre Excel le lundi matin ? Décrivez votre situation.
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-10">
                <Link href="/contact/" className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors">
                  <span>Réserver un appel de 30 minutes</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) }, revalidate: 86400 };
}
