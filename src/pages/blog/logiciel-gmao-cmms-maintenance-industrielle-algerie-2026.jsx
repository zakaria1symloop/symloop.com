"use client";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

const ARTICLE = {
  title: 'Logiciel GMAO en Algérie 2026 — Guide CMMS Maintenance Industrielle',
  desc: "Guide complet GMAO/CMMS pour l'industrie algérienne. Maintenance préventive, prédictive, IoT industriel, intégration ERP. Comment choisir, prix, alternatives Maximo. Symloop conçoit du sur-mesure.",
  url: 'https://www.symloop.com/blog/logiciel-gmao-cmms-maintenance-industrielle-algerie-2026/',
  image: 'https://www.symloop.com/blog/cover-gmao-cmms.jpg',
  published: '2026-05-04',
  modified: '2026-05-04',
  readTime: '16 min',
};

const FAQ = [
  {
    q: "Qu'est-ce qu'un logiciel GMAO et quelle différence avec un CMMS ?",
    a: "GMAO (Gestion de Maintenance Assistée par Ordinateur) et CMMS (Computerized Maintenance Management System) désignent le même type de logiciel — un terme français, l'autre anglo-saxon. Une GMAO centralise la gestion des équipements industriels : registre d'actifs, ordres de travail, planning de maintenance préventive, gestion des stocks de pièces de rechange, historique des interventions, et reporting de fiabilité. Les solutions modernes intègrent l'IoT pour la maintenance prédictive et l'API mobile pour les techniciens terrain.",
  },
  {
    q: 'Combien coûte un logiciel GMAO en Algérie en 2026 ?',
    a: "Une GMAO open source comme Maximo Asset (ex-IBM Maximo) ou Mainboss démarre à 0 € en licence mais demande 200 000 à 800 000 DA d'intégration et de formation. Une GMAO SaaS (Hippo CMMS, UpKeep, Fiix) coûte 50 à 200 € par utilisateur par mois — soit 1,5 à 6 millions DA par an pour 50 techniciens. Une GMAO sur-mesure pour un site industriel algérien démarre à 4 millions DA en première version et se rentabilise en 18 à 24 mois grâce à la réduction des arrêts non planifiés (typiquement 15 à 30 %).",
  },
  {
    q: 'Quelle est la différence entre maintenance préventive et maintenance prédictive ?',
    a: "La maintenance préventive est planifiée selon un calendrier (toutes les 500 heures, tous les 3 mois, etc.) — elle évite les pannes mais peut sur-entretenir des équipements en bon état. La maintenance prédictive utilise des capteurs IoT (vibrations, température, courant moteur) et des modèles d'IA pour prédire la panne avant qu'elle survienne — l'intervention se fait au bon moment, ni trop tôt ni trop tard. La prédictive réduit les coûts de maintenance de 25 à 40 % par rapport au préventif pur, mais nécessite des capteurs et un modèle d'analyse calibré.",
  },
  {
    q: "Faut-il choisir une GMAO open source ou une GMAO sur-mesure pour un site industriel algérien ?",
    a: "Open source convient aux sites simples (moins de 100 équipements, maintenance corrective dominante) avec une équipe IT capable d'intégrer et maintenir le logiciel. Sur-mesure devient le bon choix dès qu'il faut intégrer des automatismes industriels SCADA, des spécificités métier algériennes (cycles de maintenance Sonatrach, conformité HSE Sonelgaz, certifications ISO locales), ou des intégrations avec un ERP existant (SAP, Sage, Odoo). Le sur-mesure se rentabilise généralement en 24 mois pour les sites de plus de 200 équipements.",
  },
  {
    q: "Comment intégrer une GMAO avec un système SCADA ou un ERP existant ?",
    a: "Une GMAO moderne expose une API REST ou GraphQL qui permet de remonter les alarmes SCADA en ordres de travail automatiques (sensor depasses → ouverture ticket → assignation technicien), et de synchroniser les codes d'équipement et stocks de pièces avec un ERP (SAP MM, Odoo Inventory, Sage). Symloop intègre ces ponts en utilisant des protocoles industriels (OPC UA, Modbus, MQTT) côté SCADA et des connecteurs ERP standards côté gestion. L'intégration prend typiquement 4 à 8 semaines selon la complexité.",
  },
  {
    q: "Quels secteurs industriels en Algérie utilisent le plus la GMAO ?",
    a: "Les secteurs avec la plus forte adoption GMAO en Algérie sont : pétrole et gaz (Sonatrach, Hassi Messaoud, Arzew, Skikda), pétrochimie (NAFTAL, raffineries), sidérurgie (El Hadjar Annaba), industrie automobile (Renault Tafraoui Oran et sous-traitants), industrie alimentaire (Cevital, laiteries de Sétif), pharmacie (Saidal Constantine), et de plus en plus les manufactures de plastique et textile de la Mitidja et de Bordj Bou Arréridj.",
  },
];

const SECTIONS = [
  {
    h: "L'industrie algérienne se modernise — la GMAO est la première brique technique",
    body: [
      "Le tissu industriel algérien — Sonatrach, Sonelgaz, Cevital, Renault Tafraoui, Saidal, El Hadjar, et plusieurs centaines de PME industrielles à Sétif, Oran, Annaba et la Mitidja — sort progressivement d'une gestion de maintenance basée sur des **carnets papier, des fichiers Excel transmis par WhatsApp, et la mémoire d'un chef de maintenance proche de la retraite**. Cette transition n'est pas un projet IT cosmétique : c'est la condition pour respecter les exigences HSE, réduire les arrêts non planifiés, et conformer les sites aux audits de plus en plus fréquents.",
      "**Une GMAO bien implémentée réduit typiquement les arrêts non planifiés de 15 à 30 %, augmente la durée de vie des équipements de 20 à 40 %, et libère 30 à 50 % du temps administratif des chefs de maintenance.** Sur un site industriel moyen avec 50 millions DA de coûts de maintenance annuels, le ROI tombe en moins de 24 mois. Sur un site Sonatrach ou un complexe pétrochimique, le ROI tombe en moins de 6 mois grâce au seul évitement de quelques arrêts critiques.",
    ],
  },
  {
    h: "Les 5 piliers d'une GMAO digne de 2026",
    body: [
      "**Premier pilier : registre d'actifs et arborescence d'équipements.** Chaque pompe, chaque vanne, chaque transformateur a sa fiche — fabricant, modèle, date de mise en service, manuel constructeur, historique d'interventions, criticité, plan de maintenance. Sans registre propre, tout le reste s'effondre.",
      "**Deuxième pilier : ordres de travail et planning préventif.** Le système génère automatiquement les ordres de travail selon les fréquences ou les compteurs (heures de fonctionnement, kilométrage, nombre de cycles). Il les assigne à un technicien ou une équipe, suit l'exécution, archive le rapport.",
      "**Troisième pilier : maintenance prédictive via IoT.** Capteurs de vibration, température, courant moteur, pression, débit. Les données alimentent des modèles statistiques ou IA qui détectent les dérives avant la panne. La GMAO convertit l'alerte capteur en ordre de travail prioritaire automatiquement.",
      "**Quatrième pilier : mobile pour les techniciens.** Le technicien terrain ouvre l'application sur sa tablette ou son téléphone, voit ses ordres du jour, scanne le QR code de l'équipement, accède au manuel, saisit le rapport et ses photos sur place. Fini les bons papier remplis le soir au bureau.",
      "**Cinquième pilier : analytique et tableaux de bord.** MTBF (mean time between failures), MTTR (mean time to repair), coûts par équipement, taux de disponibilité, écarts entre maintenance préventive et corrective. Sans ces métriques, on ne pilote pas — on subit.",
    ],
  },
  {
    h: 'Open source, SaaS, ou sur-mesure — comment choisir',
    body: [
      "**Open source (Maximo Asset, Mainboss, Snipe-IT)** convient si vous avez moins de 100 équipements, une maintenance majoritairement corrective, et une équipe IT capable d'installer et maintenir le serveur. Coût total sur 3 ans : 1 à 3 millions DA (intégration, formation, support).",
      "**SaaS (UpKeep, Fiix, Hippo CMMS, Limble)** convient pour 50 à 200 utilisateurs avec besoin de mobile et d'API standards. Pas de serveur à gérer. Mais : données dans un cloud étranger, dépendance à la connectivité, abonnement perpétuel. Coût : 1,5 à 6 millions DA par an pour 50 techniciens.",
      "**Sur-mesure** devient le bon choix dès qu'il faut : intégration SCADA industrielle, conformité réglementaire algérienne spécifique (HSE Sonatrach, ISO 14001 sectoriel), workflows métier non standards, ou liaison avec un ERP existant. Coût : 4 à 12 millions DA en première version, ROI sur 18 à 24 mois pour les sites moyens.",
      "Pour Sonatrach, Sonelgaz, NAFTAL, et les grands sites pétrochimiques, **le sur-mesure n'est pas un choix mais une nécessité** — les contraintes de souveraineté, de criticité opérationnelle et d'intégration sont telles qu'un SaaS étranger ne passe ni l'audit HSE ni l'audit cybersécurité.",
    ],
  },
  {
    h: "L'IoT industriel — quand la GMAO devient prédictive",
    body: [
      "La maintenance prédictive est passée du laboratoire à la production en cinq ans. Les capteurs industriels ont chuté de prix (un capteur de vibration certifié ATEX coûtait 3 000 € en 2018, il coûte 400 € en 2026). Les protocoles ouverts (OPC UA, MQTT, Modbus) sont matures. Les modèles d'IA sont disponibles en open source.",
      "**Pour un complexe industriel algérien moyen, le déploiement IoT prédictif sur les 50 équipements les plus critiques coûte 8 à 25 millions DA et se rentabilise en 12 à 18 mois** par l'évitement d'arrêts non planifiés. Le retour est encore plus rapide sur les équipements à très haute criticité (compresseurs, turbines, fours électriques) où une panne peut coûter 50 à 200 millions DA en perte de production.",
      "Symloop conçoit les architectures IoT industrielles depuis le capteur jusqu'au modèle d'IA, en passant par le bus de données et la GMAO. Nos déploiements en pétrochimie, sidérurgie et agroalimentaire algériennes ont une caractéristique commune : nous travaillons sur site avec les opérateurs, pas depuis un bureau à Alger.",
    ],
  },
  {
    h: 'Conformité, HSE et reporting réglementaire',
    body: [
      "Une GMAO industrielle algérienne doit produire des rapports conformes aux exigences locales : audits HSE Sonatrach, ISO 9001/14001/45001 selon la certification du site, rapports DGM (Direction Générale des Mines) pour les sites miniers, rapports environnementaux annuels. Les solutions étrangères ne livrent pas ces formats par défaut.",
      "**Sur les chantiers Sonatrach, Sonelgaz, et les complexes industriels publics, l'absence de GMAO traçable est désormais un motif fréquent de non-conformité d'audit.** Les sites qui n'ont pas digitalisé leur maintenance se retrouvent à reconstruire en urgence des historiques sur la base de carnets et de mémoires d'opérateurs — un travail qui prend 6 à 12 mois et qui ne tient pas la rigueur d'un auditeur sérieux.",
    ],
  },
  {
    h: "Notre approche — GMAO conçue depuis l'usine, pas depuis le bureau",
    body: [
      "Nous concevons des GMAO industrielles qui survivent au quotidien réel d'un site algérien. **Cela commence par une semaine sur place — dans les ateliers, en salle de contrôle, avec les techniciens — avant la première ligne de code.** Nous lisons les manuels constructeurs, les rapports de maintenance des cinq dernières années, et nous comprenons la culture opérationnelle du site.",
      "Notre stack technique combine **un noyau métier sur-mesure (Node.js, PostgreSQL, Redis), une couche IoT (MQTT, time-series database InfluxDB ou TimescaleDB), une application mobile native ou Flutter pour les techniciens, et un module BI pour les directeurs de maintenance.** Tout est conçu pour fonctionner sur infrastructure souveraine — sur site ou cloud algérien régulé.",
      "Pour les sites Sonatrach, Cevital, Saidal, El Hadjar et les sous-traitants industriels de la Mitidja, nous proposons une approche en deux phases : phase 1, registre d'actifs + ordres de travail + mobile (8 à 12 semaines, livraison en production); phase 2, maintenance prédictive IoT sur les 20 % d'équipements les plus critiques (12 à 20 semaines supplémentaires).",
    ],
  },
];

export default function BlogGmaoCmmsPage() {
  const router = useRouter();
  const isRTL = router.locale === 'ar';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: ARTICLE.title,
    description: ARTICLE.desc,
    image: [ARTICLE.image],
    author: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://www.symloop.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Symloop Technology',
      logo: { '@type': 'ImageObject', url: 'https://www.symloop.com/sym-logo.png' },
    },
    datePublished: ARTICLE.published,
    dateModified: ARTICLE.modified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': ARTICLE.url },
    inLanguage: 'fr',
    about: [
      { '@type': 'Thing', name: 'GMAO maintenance industrielle' },
      { '@type': 'Thing', name: 'CMMS computerized maintenance' },
      { '@type': 'Thing', name: 'Maintenance prédictive IoT' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.symloop.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.symloop.com/blog/' },
      { '@type': 'ListItem', position: 3, name: 'GMAO Algérie 2026', item: ARTICLE.url },
    ],
  };

  return (
    <>
      <Head>
        <title>{ARTICLE.title} | Symloop</title>
        <meta name="description" content={ARTICLE.desc} />
        <meta name="keywords" content="gmao algerie, logiciel gmao, cmms algerie, logiciel maintenance preventive algerie, maintenance predictive iot, gestion equipement industriel, gmao open source, gmao maximo alternative, gmao saas algerie, mobile maintenance technicien, scada integration gmao, sonatrach maintenance software, hassi messaoud cmms, industrial asset management algeria, gmao sonelgaz, mtbf mttr industrial, gmao iso 9001 14001 45001, hse algerie maintenance, gmao cevital saidal, predictive maintenance machine learning industrie" />
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
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">Industrial · {ARTICLE.readTime}</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">
                Logiciel GMAO en Algérie 2026 — Guide CMMS Maintenance Industrielle
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
                Du carnet papier au système connecté. Maintenance préventive, prédictive, IoT industriel, intégration ERP. Comment choisir, combien ça coûte, et quand le sur-mesure devient inévitable.
              </motion.p>
            </motion.div>
          </div>
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image src="/blog/cover-gmao-cmms.jpg" alt="Logiciel GMAO en Algérie — salle de contrôle industrielle avec dashboards prédictifs" fill priority sizes="100vw" className="object-cover" />
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
              <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">Questions fréquentes sur la GMAO en Algérie</h2>
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
                { name: 'Pétrole et gaz IT — du verrouillage fournisseur au contrôle indépendant', href: '/insights/oil-gas/' },
                { name: 'Services IoT et systèmes industriels — Symloop', href: '/services/iot/' },
                { name: 'Symloop à Ouargla — hindesie pour le Sahara qui produit l\'énergie du pays', href: '/locations/ouargla/' },
                { name: 'Symloop à Annaba — ingénierie pour la sidérurgie, les engrais et le port', href: '/locations/annaba/' },
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
                Vous dirigez la maintenance d'un site industriel en Algérie ? Décrivez votre situation. Nous serons sur place sous deux semaines.
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
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
