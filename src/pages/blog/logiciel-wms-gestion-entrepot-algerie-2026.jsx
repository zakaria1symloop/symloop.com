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
  title: 'Logiciel WMS en Algérie 2026 — Gestion d\'Entrepôt et Stock Multi-Sites',
  desc: "Guide complet WMS pour entrepôts et e-commerce en Algérie. Picking optimisé, mobile barcode, multi-sites, intégrations Yalidine/ZR Express/Maystro. Alternatives SAP EWM. Symloop construit du sur-mesure.",
  url: 'https://symloop.com/blog/logiciel-wms-gestion-entrepot-algerie-2026/',
  image: 'https://symloop.com/blog/cover-wms.jpg',
  published: '2026-05-04',
  modified: '2026-05-04',
  readTime: '15 min',
};

const FAQ = [
  {
    q: "Qu'est-ce qu'un WMS et en quoi diffère-t-il d'un ERP avec module stock ?",
    a: "Un WMS (Warehouse Management System) est un logiciel spécialisé dans la gestion physique de l'entrepôt — emplacement de chaque produit, parcours de picking optimisé, gestion des emplacements en hauteur, gestion FIFO/LIFO/FEFO, contrôle qualité à l'entrée. Le module stock d'un ERP (Sage, Odoo, SAP) gère les niveaux de stock comptables, valorisation et mouvements logiques, mais ne sait pas dire où se trouve physiquement un produit dans l'entrepôt ni optimiser un parcours de préparation. Pour les entrepôts de plus de 500 m² ou plus de 5 000 références, le WMS devient indispensable.",
  },
  {
    q: 'Combien coûte un logiciel WMS en Algérie en 2026 ?',
    a: "WMS open source / freemium (Odoo Inventory, ERPNext) : 0 à 1 million DA en licences + 1 à 4 millions d'intégration et formation. WMS SaaS spécialisé (Stock Sync, Sortly, ShipBob) : 1 à 5 millions DA par an pour 10 à 50 utilisateurs. WMS enterprise (SAP EWM, Manhattan Active, Blue Yonder) : 8 à 30 millions DA en licences + 20 à 80 millions d'intégration — souvent surdimensionné pour le marché algérien. Un WMS sur-mesure conçu pour un opérateur algérien démarre à 6 millions DA et se rentabilise en 18 mois grâce aux gains de productivité (15 à 30 % de picking en plus, réduction des erreurs de 50 à 80 %).",
  },
  {
    q: "Comment intégrer un WMS avec Yalidine, ZR Express, Maystro Delivery, et Algérie Poste ?",
    a: "Les principaux transporteurs algériens exposent désormais des API : Yalidine (création de bordereaux, suivi en temps réel, gestion des retours, paiement à la livraison), ZR Express (intégration livraison express grandes villes), Maystro Delivery (API moderne pour e-commerce), Algérie Poste / EMS (couverture rurale). Un WMS bien architecturé traite chaque transporteur comme un adaptateur derrière une abstraction \"shipping intent\" : le WMS ne parle pas Yalidine ou ZR directement, il parle un contrat typé (poids, destination, valeur, mode de paiement) et la couche d'adaptateurs route vers le bon transporteur selon les règles définies. Symloop livre cette intégration en 4 à 8 semaines.",
  },
  {
    q: "Quelles fonctionnalités WMS sont essentielles pour un e-commerce algérien ?",
    a: "Pour un e-commerce qui livre 100 à 5 000 commandes par jour : 1) Picking par vague optimisé (réduit les déplacements de 40 à 60 %), 2) Mobile barcode scanning sur tablette ou téléphone (élimine 80 % des erreurs), 3) Gestion multi-sites avec mouvement inter-entrepôts, 4) Intégration native Yalidine/ZR/Maystro avec création automatique de bordereaux, 5) Gestion des retours produits (reverse logistics) avec contrôle qualité, 6) Reporting en temps réel sur les KPI (taux de rupture, taux d'erreur, productivité par préparateur). Ces six capacités font la différence entre un e-commerce qui scale à 10 millions DA par mois et un qui plafonne à 1 million.",
  },
  {
    q: "Quel WMS choisir pour un distributeur multi-wilayas en Algérie ?",
    a: "Pour un distributeur national couvrant Alger, Oran, Constantine, Annaba, Sétif, etc. : 1) Architecture multi-sites avec un site maître et des dépôts régionaux synchronisés, 2) Routage intelligent des commandes vers le dépôt le plus proche du client final, 3) Mouvements inter-dépôts automatiques selon les niveaux de stock, 4) Intégration avec votre flotte de transport (camions, transporteurs partenaires), 5) Visibilité consolidée pour la direction sur tableau de bord BI temps réel. Une plateforme sur-mesure construite par Symloop sert plusieurs distributeurs nationaux algériens dans l'agroalimentaire, la pièce détachée et l'électroménager.",
  },
  {
    q: 'Faut-il une WMS sur-mesure ou une solution standard pour un entrepôt algérien ?',
    a: "Standard (Odoo, ERPNext, SAP EWM) convient pour les entrepôts simples (mono-site, moins de 5 000 références, processus standards) sans contraintes métier spécifiques. Sur-mesure devient le bon choix dès qu'il y a : intégration profonde avec transporteurs algériens (Yalidine API, ZR Express, paiement à la livraison), workflows métier non standards (vente B2B avec catalogues clients personnalisés, gestion lots et péremption FEFO en agroalimentaire, traçabilité pharmaceutique avec QR code unitaire), ou multi-tenant pour opérateurs 3PL servant plusieurs marques. Le sur-mesure se rentabilise typiquement en 18 mois pour les opérateurs au-delà de 100 commandes/jour.",
  },
];

const SECTIONS = [
  {
    h: "Le boom logistique algérien — pourquoi 2026 est le moment du WMS",
    body: [
      "L'Algérie traverse une transformation logistique accélérée. **Le e-commerce a dépassé 100 milliards DA de transactions annuelles, porté par Jumia, Yassir, Yalidine, ZR Express et plusieurs centaines de marchands directs.** La distribution traditionnelle se professionnalise — un grossiste agroalimentaire algérien moyen gère désormais 3 000 à 8 000 références sur 2 000 à 6 000 m² d'entrepôt. La logistique pharmaceutique exige une traçabilité au numéro de lot. Les sous-traitants automobiles d'Oran et de Tafraoui livrent en flux tendu sur des fenêtres de 2 heures.",
      "Aucune de ces opérations ne tourne sur un fichier Excel. **Mais une part significative tourne encore sur des outils mal adaptés — un module stock d'ERP générique, une feuille de calcul partagée, ou une solution SaaS étrangère qui ne sait pas parler à Yalidine.** Cette page est un guide d'achat et d'architecture pour les directions logistique, supply chain et e-commerce qui doivent passer à l'acte en 2026.",
    ],
  },
  {
    h: "Les 6 capacités d'un WMS digne de 2026",
    body: [
      "**Réception et contrôle qualité.** Réception fournisseur avec scan code-barre ou QR, contrôle quantitatif et qualitatif, gestion des écarts, mise en stock automatique vers un emplacement optimal selon la classe ABC du produit.",
      "**Mise en stock intelligente.** Le WMS suggère l'emplacement optimal selon plusieurs critères : volume produit, rotation, compatibilité, hauteur, accessibilité. Pour les produits à forte rotation, l'emplacement est en zone picking facile. Pour les produits lents, en zone réserve.",
      "**Picking optimisé par vague.** Le WMS regroupe les commandes en vagues, calcule l'itinéraire optimal (algorithme TSP — voyageur de commerce simplifié), et oriente le préparateur via tablette ou casque vocal. Réduction typique des déplacements : 40 à 60 %.",
      "**Mobile barcode et scan unitaire.** Chaque mouvement est validé par scan : entrée, mise en stock, picking, contrôle, expédition. Plus aucune erreur d'identification produit. Plus aucun débat \"je suis sûr d'avoir mis 50 unités\".",
      "**Expédition et intégration transporteurs.** Création automatique des bordereaux Yalidine, ZR Express, Maystro Delivery, Algérie Poste selon les règles de routage (poids, destination, valeur, mode de paiement, délais). Suivi en temps réel des envois.",
      "**Reporting et BI.** Tableaux de bord temps réel : taux de rupture, taux d'erreur, productivité par préparateur, taux de retour, taux d'occupation entrepôt. Sans ces métriques, on ne pilote pas — on subit.",
    ],
  },
  {
    h: "Standard, SaaS, ou sur-mesure",
    body: [
      "**Odoo Inventory et ERPNext** sont les solutions open source les plus utilisées en Algérie. Elles couvrent les besoins de base mais peinent sur trois points critiques : 1) Intégration native avec les transporteurs algériens (Yalidine, ZR, Maystro) — il faut développer les connecteurs en custom; 2) Performance sur de gros volumes — Odoo commence à ralentir au-delà de 50 000 SKU; 3) Workflows métier spécifiques (paiement à la livraison, gestion B2B avec catalogues clients).",
      "**SaaS spécialisés (ShipBob, Stord, Manhattan Active)** sont matures fonctionnellement mais conçus pour les marchés américains et européens. L'intégration avec les transporteurs algériens demande systématiquement du custom. Coût récurrent élevé (1 à 5 millions DA par an). Données hébergées hors Algérie — bloquant pour certains opérateurs.",
      "**SAP EWM, Manhattan Active, Blue Yonder** sont les solutions enterprise mondiales. Robustes, complètes, mais surdimensionnées et hors budget pour la majorité des opérateurs algériens. Intégration de 12 à 24 mois, coût total de plusieurs centaines de millions de dinars.",
      "**Sur-mesure** devient le bon choix pour les opérateurs algériens à partir de 200 commandes/jour avec : intégration native Yalidine/ZR/Maystro (gain de plusieurs mois de développement), workflows métier spécifiques (paiement à la livraison COD, gestion catalogues B2B, traçabilité lot/péremption), multi-tenant pour les 3PL. Symloop livre des WMS sur-mesure pour 6 à 18 millions DA selon le périmètre, avec un ROI de 12 à 24 mois.",
    ],
  },
  {
    h: "L'intégration transporteurs — l'étape qui fait ou casse l'opération",
    body: [
      "**Yalidine** couvre 58 wilayas avec un réseau de plus de 500 agences. Son API permet la création de bordereaux, le suivi temps réel, la gestion du paiement à la livraison (COD), et la gestion des retours. Mais l'API a évolué plusieurs fois et le support documentaire ne suit pas toujours en temps réel.",
      "**ZR Express** est dominant sur les grandes villes (Alger, Oran, Constantine) avec des délais de 24 à 48 heures. API moderne, intégration directe possible.",
      "**Maystro Delivery** est plus récent mais a la meilleure API technique du marché — REST, webhooks pour le suivi temps réel, gestion fine des statuts.",
      "**EMS / Algérie Poste** reste pertinent pour la couverture rurale et les destinations qu'aucun transporteur privé ne dessert. API moins moderne mais documentée.",
      "**L'architecture qui survit** traite chaque transporteur comme un adaptateur derrière une abstraction \"shipping intent\". Le WMS ne dépend d'aucun transporteur en particulier. Quand Yalidine change son API (ce qui arrive), seul l'adaptateur change — pas le WMS. Quand un nouveau transporteur arrive sur le marché, on ajoute un adaptateur en 2 semaines au lieu de réécrire le système.",
    ],
  },
  {
    h: "Le cas e-commerce — du Shopify à 100 commandes/jour au WMS sur-mesure",
    body: [
      "Un e-commerce algérien démarre typiquement sur Shopify ou WooCommerce avec un module stock basique. **Cela tient jusqu'à 50-100 commandes par jour.** Au-delà, les erreurs explosent (5 à 15 % des commandes ont une erreur de picking ou de stock), les retours compensatoires augmentent, le taux de satisfaction client chute.",
      "**Le passage à un WMS dédié devient impératif autour de 100-200 commandes/jour.** À ce stade, l'investissement (6 à 12 millions DA) se rentabilise en 12 à 18 mois grâce à : gain de productivité préparateurs (15 à 30 %), réduction des erreurs (de 8 % à moins de 1 %), réduction des retours (de 12 % à 5-7 %), capacité à gérer le pic Black Friday / Aïd / rentrée scolaire sans casser.",
      "Symloop a livré des WMS pour plusieurs e-commerces algériens à différents stades de scale. **Notre approche : démarrer avec un MVP qui couvre les 80 % de besoin courant en 8-12 semaines, puis itérer sur les workflows avancés (multi-entrepôts, COD, B2B) au rythme de la croissance.**",
    ],
  },
  {
    h: "Notre approche — WMS conçu depuis l'entrepôt, pas depuis le bureau",
    body: [
      "Nous concevons des WMS qui survivent au quotidien réel d'un entrepôt algérien. **Cela commence par une semaine sur place — dans l'entrepôt, avec les préparateurs et les chefs d'équipe — avant la première ligne de code.** Nous mesurons les flux réels : combien de mètres parcourus par préparateur par heure, où sont les goulots d'étranglement, quelles sont les erreurs les plus fréquentes.",
      "Notre stack : **Node.js / PostgreSQL pour le noyau, Redis pour les files d'attente, Flutter ou React Native pour le mobile préparateur, intégrations natives Yalidine/ZR/Maystro/EMS, BI temps réel pour la direction.** Architecture multi-sites prête pour scale national. Hébergement souverain en Algérie ou cloud régulé.",
      "Pour les distributeurs nationaux, e-commerces multi-wilayas, et opérateurs 3PL qui veulent passer le palier des 200+ commandes/jour : **nous livrons un MVP en 12 semaines, puis itérons. Pas de big-bang. Pas de migration risquée.** Et un transfert de compétences à l'équipe IT du client pour qu'il puisse maintenir le système après notre passage.",
    ],
  },
];

export default function BlogWmsPage() {
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
      { '@type': 'Thing', name: 'Warehouse management system' },
      { '@type': 'Thing', name: 'Logiciel gestion entrepot Algerie' },
      { '@type': 'Thing', name: 'E-commerce logistics integration' },
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
      { '@type': 'ListItem', position: 3, name: 'WMS Algérie 2026', item: ARTICLE.url },
    ],
  };

  return (
    <>
      <Head>
        <title>{ARTICLE.title} | Symloop</title>
        <meta name="description" content={ARTICLE.desc} />
        <meta name="keywords" content="wms algerie, logiciel wms algerie, gestion entrepot algerie, warehouse management system algeria, logiciel gestion stock multi-sites, integration yalidine api, integration zr express, maystro delivery integration, picking optimise, mobile barcode scanning, sap ewm alternative algerie, odoo inventory algerie, ecommerce wms, distributeur national wms, 3pl wms multi-tenant, paiement a la livraison cod, fefo agroalimentaire algerie, tracabilite pharmaceutique, reverse logistics, kpi entrepot temps reel" />
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
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">Logistics · {ARTICLE.readTime}</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">
                Logiciel WMS en Algérie 2026 — Gestion d'Entrepôt et Stock Multi-Sites
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
                Du module stock générique au système conçu pour scaler. Picking optimisé, mobile barcode, intégrations Yalidine/ZR/Maystro, multi-sites. Comment passer le palier des 200 commandes/jour.
              </motion.p>
            </motion.div>
          </div>
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image src="/blog/cover-wms.jpg" alt="Logiciel WMS en Algérie — entrepôt automatisé avec convoyeurs et système de picking" fill priority sizes="100vw" className="object-cover" />
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
              <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">Questions fréquentes sur le WMS en Algérie</h2>
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
                { name: 'TrackSera — case study : SaaS de distribution multi-tenant pour grossistes', href: '/case-studies/tracksera/' },
                { name: 'Services Software Engineering — multi-tenant SaaS, microservices', href: '/services/software-engineering/' },
                { name: 'Symloop à Sétif — ingénierie pour le tissu industriel des hauts plateaux', href: '/locations/setif/' },
                { name: 'ERP buy vs build — au-delà d\'Odoo', href: '/insights/erp/' },
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
                Vous dirigez un entrepôt, un e-commerce, ou une opération 3PL en Algérie ? Décrivez votre situation.
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
