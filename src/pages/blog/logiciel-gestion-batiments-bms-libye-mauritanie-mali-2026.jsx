// ============================================================================
// SYMLOOP BLOG — BMS (Building Management System) software for Libya,
// Mauritania, Mali 2026. Decision-maker SEO targets: property developers,
// hotel groups, mining company facility managers, ministries of public
// works. FR-primary keywords: "logiciel gestion bâtiment", "BMS", "GTB",
// "gestion énergie bâtiment Afrique", "automatisation bâtiment Tripoli /
// Nouakchott / Bamako".
//
// Animations: scroll-triggered framer-motion intro + a 6-capability grid
// + a comparison chart (international BMS vendor cost vs Symloop). Schema:
// BlogPosting + FAQPage + BreadcrumbList + Organization mentions.
// ============================================================================

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, MessageCircle, Zap, Droplet, Shield, Cpu, Activity, Wind } from 'lucide-react';
import SEO from '../../components/SEO';

const WA = 'https://wa.me/213549575512';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function R(text) {
  return String(text).split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2, -2)}</span>
      : <span key={i}>{p}</span>
  );
}

// Cost-comparison chart: European BMS vendor vs Symloop sovereign BMS.
// Client-only mount to avoid framer-motion SSR/CSR drift.
function CostCompareChart({ label, before, after, deltaLabel, note }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const max = Math.max(before.value, after.value);
  const bh  = (v) => Math.round((v / max) * 100);

  if (!mounted) {
    return (
      <figure className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="h-[240px] lg:h-[320px] mb-8" aria-hidden="true" />
        <figcaption className="mt-6 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">{note}</figcaption>
      </figure>
    );
  }

  return (
    <motion.figure initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>
      <div className="grid grid-cols-2 gap-8 lg:gap-16 items-end h-[240px] lg:h-[320px] mb-8 max-w-2xl mx-auto">
        {[before, after].map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, height: 0 }} whileInView={{ opacity: 1, height: `${bh(b.value)}%` }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.1, delay: 0.25 + i * 0.35, ease: [0.22, 1, 0.36, 1] }} className={`relative w-full ${i === 0 ? 'bg-white/[0.18]' : 'bg-white'} flex flex-col items-center`} style={{ minHeight: 8 }}>
            <motion.span initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.3 + i * 0.35 }} className={`absolute -top-9 font-light text-2xl lg:text-3xl tracking-tight ${i === 0 ? 'text-white/70' : 'text-white'}`}>
              <bdi>${b.value}K</bdi>
            </motion.span>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-8 lg:gap-16 max-w-2xl mx-auto mb-8">
        {[before, after].map((b, i) => (
          <motion.div key={i} variants={fadeUp} className="text-center">
            <span className="font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/40">{b.label}</span>
          </motion.div>
        ))}
      </div>
      <motion.div variants={fadeUp} className="text-center mb-6">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/70 border border-white/20 px-4 py-2">{deltaLabel}</span>
      </motion.div>
      <motion.figcaption variants={fadeUp} className="mt-6 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">{note}</motion.figcaption>
    </motion.figure>
  );
}

const C = {
  fr: {
    kind: 'Guide BMS Afrique du Nord-Ouest',
    title: 'Logiciel de gestion de bâtiments BMS pour Libye, Mauritanie et Mali — 2026.',
    dek: 'Pour promoteurs immobiliers, groupes hôteliers, gestionnaires d\'installations minières et ministères des travaux publics : comment livrer une plateforme BMS souveraine à Tripoli, Nouakchott et Bamako pour 30-60K$ par bâtiment, avec hardware IoT fabriqué localement, AI intégrée, et code source possédé par le client.',
    publishedAt: 'Mai 2026',
    readTime: '13 min de lecture',
    author: 'Symloop',
    chart: {
      label: 'Coût plateforme BMS par bâtiment',
      before: { label: 'Schneider / Honeywell / Siemens', value: 120 },
      after: { label: 'Symloop BMS souverain', value: 45 },
      deltaLabel: '–62% · pas de licence récurrente · code source possédé',
      note: 'Coût composite déploiement initial par bâtiment commercial moyen (5-15 étages). Source : missions Symloop + benchmarks publics éditeurs internationaux 2024-2026.',
    },
    intro: [
      'En 2026, **chaque nouveau bâtiment commercial ou résidentiel à Tripoli, Benghazi, Misrata, Nouakchott et Bamako fait face au même problème opérationnel** : la stabilité électrique du réseau (GECOL en Libye, SOMELEC en Mauritanie, EDM au Mali) reste insuffisante, et chaque mètre carré construit a besoin d\'une plateforme BMS (Building Management System) pour orchestrer l\'énergie, l\'eau, le CVC, la sécurité et la conformité environnementale.',
      'Le marché actuel offre trois mauvais choix. **Éditeurs européens** (Schneider EcoStruxure, Honeywell Forge, Siemens Desigo) tarifés 80-150K$ par bâtiment plus maintenance annuelle à 30K$, calibrés pour l\'immobilier européen et insensibles aux spécificités du réseau électrique libyen ou sahélien. **Intégrateurs golfiques** qui s\'envolent pour le projet et disparaissent ensuite. **Bricolage local** avec hardware Tuya grand public et zéro intégration multi-systèmes.',
      'Cet article explique, pour un promoteur immobilier ou un directeur de propriété en Libye, Mauritanie ou Mali : **ce qu\'une plateforme BMS moderne doit livrer en 2026, pourquoi le coût total par bâtiment doit être à 30-60K$ et pas 120-150K$, comment Symloop construit une plateforme BMS souveraine avec hardware IoT ESP32 fabriqué à Alger, et pourquoi la propriété du code source est non négociable.**',
    ],
    sections: [
      {
        heading: 'Ce que la plateforme BMS doit réellement faire en 2026',
        body: [
          'Une plateforme BMS moderne intègre **six fonctions opérationnelles dans un seul tableau de bord** : (1) gestion énergie avec orchestration générateur + batterie + solaire quand applicable, (2) optimisation CVC à l\'occupation et à la météo, (3) gestion eau et fuites, (4) sécurité avec vision computationnelle sur caméras IP, (5) gestion accès et badges, (6) reporting conformité environnementale pour exigences financement international (LEED, BREEAM, certifications carbone).',
          'Les éditeurs européens livrent toutes ces fonctions mais avec **une charge cognitive et financière trop élevée pour les marchés libyens, mauritaniens et maliens** : licence annuelle libellée en euros, formation technicien européen sur place, dépendance support en heure UTC, et un modèle de données opérationnelles centralisé chez l\'éditeur — pas chez le propriétaire du bâtiment.',
          'La plateforme BMS de Symloop livre les mêmes six fonctions avec une **architecture sovereign-deployment-first** : déployée on-premise dans le bâtiment ou dans un cloud local que le propriétaire contrôle, code source transféré au client en fin de mission, hardware IoT ESP32 fabriqué à Alger et donc disponible en délai court, interfaces français + arabe + bambara selon le pays, et **AI native intégrée dès le premier jour** pour optimisation énergie et détection d\'anomalies.',
        ],
      },
      {
        heading: 'Les six capacités opérationnelles — détaillées',
        body: [
          '**Gestion énergie** : orchestration intelligente du mix réseau-générateur-batterie-solaire en fonction du tarif horaire (où applicable), de la disponibilité réseau, et de l\'état de charge batterie. Réduit la facture électricité de 18 à 35% sur les bâtiments tertiaires en Libye et au Mali où le diesel est cher.',
          '**Optimisation CVC** : modèle prédictif IA qui apprend les patterns d\'occupation par étage et par pièce, anticipe les besoins de refroidissement (climat désertique à Nouakchott et Tripoli) ou de chauffage (nuits sahéliennes à Bamako), et minimise la consommation sans dégrader le confort. Économie typique : 22-30% sur la consommation CVC annuelle.',
          '**Gestion eau et fuites** : capteurs de débit + pression + qualité d\'eau, détection automatique de fuites en moins de 30 minutes (versus jours sans BMS), et reporting consommation par étage pour facturation interne ou répartition charges aux locataires.',
          '**Sécurité avec vision computationnelle** : caméras IP intégrées avec modèles vision Symloop pour détection intrusion, comportement anormal, et reconnaissance véhicules. Aucune transmission vidéo hors-site sans accord propriétaire — déploiement on-premise du modèle d\'inférence.',
          '**Gestion accès et badges** : intégration lecteurs cartes/biométrie/QR, journalisation accès auditable, et gestion droits par locataire ou par zone. Conforme aux exigences DGSN (Libye) et équivalents Mauritanie/Mali pour les bâtiments officiels et diplomatiques.',
          '**Reporting environnemental et conformité** : agrégation continue des KPI énergie + eau + carbone, génération automatique de rapports pour certifications LEED/BREEAM/EDGE et pour exigences financement international (Banque mondiale, BAD, AFD). Différenciateur clé pour les promoteurs immobiliers cherchant financement étranger.',
        ],
      },
      {
        heading: 'Pourquoi le coût doit être 30-60K$ et pas 120-150K$',
        body: [
          'Le coût Symloop de 30-60K$ par bâtiment se décompose ainsi : **hardware IoT (capteurs énergie, eau, occupation, qualité air, caméras) 8-15K$ ; logiciel BMS déploiement et personnalisation 12-25K$ ; intégration PLC backbone bâtiment 5-10K$ ; formation et transfert code source 3-8K$ ; mise en service et 90 jours de support 2-5K$.** Aucun frais récurrent obligatoire — le propriétaire peut tourner sans intervention Symloop ou choisir un contrat support annuel optionnel à 5-10K$.',
          'Le coût Schneider EcoStruxure pour le même bâtiment se décompose : **hardware Schneider 30-50K$ (souvent surdimensionné), licence logiciel cloud 20-40K$/an, intégration via partenaire local 25-40K$, formation européen sur site 15-25K$, mise en service 10-20K$, maintenance annuelle obligatoire 25-35K$/an.** Le bâtiment paie 120-150K$ initial plus 50-75K$/an récurrent — et toutes les données opérationnelles vivent chez Schneider.',
          'Sur 10 ans de durée de vie typique du bâtiment, **Symloop coûte 60-100K$ total (30-60K$ initial + 5-10K$/an optionnel)** versus Schneider à **620-900K$ total**. Le différentiel libère 500-800K$ par bâtiment pour d\'autres priorités — finition, ameublement, ou réinvestissement dans plus de bâtiments.',
        ],
      },
      {
        heading: 'L\'architecture sovereign-deployment-first — pourquoi c\'est non négociable',
        body: [
          'En Libye, Mauritanie et Mali, **les données opérationnelles d\'un bâtiment commercial — patterns d\'occupation, profils de consommation, présence de tenants, vidéo sécurité — sont des données sensibles** qui ne devraient jamais quitter le pays. Les éditeurs européens hébergent toutes ces données dans des clouds en Europe ou aux États-Unis, soumis aux réglementations européennes ou américaines mais pas aux exigences du gouvernement libyen, mauritanien ou malien.',
          '**L\'architecture Symloop est sovereign-deployment-first** : le BMS tourne soit on-premise dans le bâtiment lui-même (machine virtuelle sur un serveur local de 5-10K$ amortie sur 5 ans), soit dans un cloud local régulé (Sonelgaz Cloud Algérie pour clients Libye/Algérie transfrontaliers, ou data centers nationaux quand disponibles en Mauritanie et Mali). Le code source est transféré au client au moment du Go-Live et le propriétaire peut auditer, modifier, ou continuer à opérer la plateforme indépendamment de Symloop si la relation commerciale prend fin.',
          'Aucun éditeur international ne livre cette architecture parce que leur business model dépend du lock-in client. **C\'est précisément pourquoi un promoteur libyen, mauritanien ou malien construisant pour 30 ans devrait refuser le modèle éditeur international en 2026.**',
        ],
      },
      {
        heading: 'Comment commencer — feuille de route 4 mois par bâtiment',
        body: [
          '**Semaines 1-3 : audit et cadrage.** Audit du bâtiment existant ou des plans architecte, définition des KPI cibles (consommation énergie, eau, niveau de confort, niveau de sécurité), choix des intégrations tierces (système alarme existant, badges, caméras déjà installées), et chiffrage forfait définitif. Livrable : board paper avec budget engagé.',
          '**Mois 1-2 : installation hardware et backbone.** Capteurs IoT sur tous les étages (énergie, eau, occupation, qualité air), caméras IP si pas déjà installées, gateway de communication, et serveur on-premise. Symloop livre le hardware depuis Alger en délai 4-6 semaines (versus 12-16 semaines pour hardware Schneider expédié d\'Europe).',
          '**Mois 2-3 : logiciel et personnalisation.** Déploiement plateforme BMS, configuration des règles d\'orchestration énergie spécifiques au bâtiment, intégration des systèmes tiers, et calibration des modèles IA sur 30 jours de données baseline.',
          '**Mois 4 : formation et transfert.** Formation gestionnaire de propriété sur l\'interface web et mobile, formation technicien maintenance sur le hardware, transfert du code source et de la documentation, et 90 jours de support inclus pour stabiliser les ajustements.',
          '**Mois 5+ : opération.** Le bâtiment opère sa plateforme BMS de manière autonome. Symloop disponible pour contrats support optionnels, mais le propriétaire peut aussi opérer entièrement en interne avec son équipe maintenance.',
        ],
      },
    ],
    useCases: {
      heading: '6 capacités BMS livrées en standard',
      items: [
        { icon: 'Zap',      label: 'Gestion énergie',         sub: 'Orchestration réseau-générateur-batterie · -18 à -35% facture' },
        { icon: 'Wind',     label: 'Optimisation CVC IA',     sub: 'Modèle prédictif occupation + météo · -22 à -30%' },
        { icon: 'Droplet',  label: 'Gestion eau et fuites',   sub: 'Détection fuites < 30 min · sub-comptage par étage' },
        { icon: 'Shield',   label: 'Sécurité vision IA',      sub: 'Détection intrusion + véhicules · on-premise' },
        { icon: 'Cpu',      label: 'Accès et badges',         sub: 'Cartes / biométrie / QR · journal audit-grade' },
        { icon: 'Activity', label: 'Reporting conformité',    sub: 'LEED / BREEAM / EDGE · financement international' },
      ],
    },
    cta: {
      eyebrow: 'Parlez à un ingénieur BMS',
      title: 'Vous construisez ou rénovez un bâtiment à Tripoli, Nouakchott, Bamako ou ailleurs en Afrique du Nord-Ouest ? Décrivez le projet en 5 minutes — nous cadrons sous 2 semaines.',
    },
    related: {
      insights: [
        { key: 'libya',      name: 'Libye 2026 — partenaire IA pour économie de reconstruction' },
        { key: 'mauritania', name: 'Mauritanie 2026 — Atlantic gateway + boom minier' },
        { key: 'mali',       name: 'Mali 2026 — Bamako, or sahélien et infrastructure diplomatique' },
      ],
      services: [
        { key: 'iot',                  name: 'IoT & Systèmes Industriels' },
        { key: 'software-engineering', name: 'Ingénierie logicielle' },
      ],
    },
  },

  en: {
    kind: 'BMS guide — North-West Africa',
    title: 'BMS building management software for Libya, Mauritania and Mali — 2026.',
    dek: 'For property developers, hotel groups, mining-facility managers and ministries of public works: how to deploy a sovereign BMS platform in Tripoli, Nouakchott and Bamako for $30-60K per building, with locally-manufactured IoT hardware, integrated AI, and source code owned by the client.',
    publishedAt: 'May 2026',
    readTime: '13 min read',
    author: 'Symloop',
    chart: {
      label: 'BMS platform cost per building',
      before: { label: 'Schneider / Honeywell / Siemens', value: 120 },
      after: { label: 'Symloop sovereign BMS', value: 45 },
      deltaLabel: '–62% · no recurring license · source code owned',
      note: 'Composite initial-deployment cost per average commercial building (5-15 stories). Source: Symloop engagements + public international-vendor benchmarks 2024-2026.',
    },
    intro: [
      'In 2026, **every new commercial or residential building in Tripoli, Benghazi, Misrata, Nouakchott and Bamako faces the same operational problem**: grid electricity (GECOL Libya, SOMELEC Mauritania, EDM Mali) is not yet reliable, and every square meter built needs a BMS (Building Management System) platform to orchestrate energy, water, HVAC, security and environmental compliance.',
      'The current market offers three bad choices. **European vendors** (Schneider EcoStruxure, Honeywell Forge, Siemens Desigo) priced at $80-150K per building plus $30K/year maintenance, calibrated for European real estate and tone-deaf to the realities of the Libyan, Mauritanian or Sahelian grid. **Gulf integrators** that fly in for the project and disappear afterward. **Local cobble-together** with consumer-grade Tuya hardware and zero multi-system integration.',
      'This article explains, for a property developer or facility director in Libya, Mauritania or Mali: **what a modern BMS platform must deliver in 2026, why per-building cost must be $30-60K not $120-150K, how Symloop builds a sovereign BMS with ESP32 IoT hardware manufactured in Algiers, and why source-code ownership is non-negotiable.**',
    ],
    sections: [
      {
        heading: 'What a BMS must actually do in 2026',
        body: [
          'A modern BMS integrates **six operational functions in one dashboard**: (1) energy management with grid + generator + battery + solar orchestration, (2) HVAC optimization on occupancy and weather, (3) water management and leak detection, (4) security with computer-vision on IP cameras, (5) access and badge management, (6) environmental compliance reporting for international financing eligibility (LEED, BREEAM, carbon certifications).',
          'European vendors deliver all of these but with **cognitive and financial overhead too high for Libyan, Mauritanian and Malian markets**: euro-denominated annual licensing, European technicians on-site, UTC-business-hours support dependency, and a centralized operational-data model that lives with the vendor, not the building owner.',
          'The Symloop BMS platform delivers the same six functions with a **sovereign-deployment-first architecture**: deployed on-premise in the building or in a local cloud the owner controls, source code transferred to the client at Go-Live, ESP32 IoT hardware manufactured in Algiers and therefore available in short lead-times, French + Arabic + Bambara interfaces per country, and **AI native from day one** for energy optimization and anomaly detection.',
        ],
      },
      {
        heading: 'The six operational capabilities — in detail',
        body: [
          '**Energy management**: intelligent orchestration of grid-generator-battery-solar mix based on hourly tariff, grid availability and battery state of charge. Cuts electricity bill 18-35% on tertiary buildings in Libya and Mali where diesel is expensive.',
          '**HVAC optimization**: predictive AI model learning floor-and-room occupancy patterns, anticipating cooling needs (desert climate in Nouakchott and Tripoli) or heating needs (Sahelian nights in Bamako), minimizing consumption without degrading comfort. Typical saving: 22-30% on annual HVAC consumption.',
          '**Water management and leaks**: flow + pressure + quality sensors, automatic leak detection in under 30 minutes (versus days without BMS), and per-floor consumption reporting for internal billing or tenant cost allocation.',
          '**Security with computer vision**: IP cameras with Symloop vision models for intrusion detection, abnormal behavior, and vehicle recognition. No off-site video transmission without owner consent — on-premise inference model deployment.',
          '**Access and badges**: card/biometric/QR reader integration, audit-grade access logging, and rights management per tenant or zone. Compliant with DGSN requirements (Libya) and Mauritanian/Malian equivalents for official and diplomatic buildings.',
          '**Environmental and compliance reporting**: continuous aggregation of energy + water + carbon KPIs, automatic report generation for LEED/BREEAM/EDGE certifications and international financing requirements (World Bank, ADB, AFD).',
        ],
      },
      {
        heading: 'Why per-building cost must be $30-60K, not $120-150K',
        body: [
          'Symloop\'s $30-60K cost breaks down as: **IoT hardware (energy, water, occupancy, air quality sensors, cameras) $8-15K; BMS software deployment and customization $12-25K; PLC backbone integration $5-10K; training and source-code transfer $3-8K; commissioning and 90 days of support $2-5K.** No mandatory recurring fees — the owner can operate without Symloop intervention or choose an optional $5-10K/year support contract.',
          'Schneider EcoStruxure for the same building breaks down as: **Schneider hardware $30-50K (often oversized), cloud software license $20-40K/year, local-partner integration $25-40K, on-site European training $15-25K, commissioning $10-20K, mandatory annual maintenance $25-35K/year.** The building pays $120-150K initial plus $50-75K/year recurring — and all operational data lives with Schneider.',
          'Over a typical 10-year building lifespan, **Symloop costs $60-100K total ($30-60K initial + optional $5-10K/year)** versus Schneider at **$620-900K total**. The differential frees $500-800K per building for other priorities — finishing, furnishing, or reinvesting in more buildings.',
        ],
      },
      {
        heading: 'Sovereign-deployment-first architecture — why it\'s non-negotiable',
        body: [
          'In Libya, Mauritania and Mali, **operational data from a commercial building — occupancy patterns, consumption profiles, tenant presence, security video — is sensitive data** that should never leave the country. European vendors host all of this in European or US clouds, subject to European or US regulation but not to the requirements of the Libyan, Mauritanian or Malian government.',
          '**Symloop\'s architecture is sovereign-deployment-first**: the BMS runs either on-premise in the building itself (virtual machine on a local $5-10K server amortized over 5 years), or in a regulated local cloud (Sonelgaz Cloud Algeria for cross-border Libya/Algeria clients, or national data centers where available in Mauritania and Mali). The source code is transferred to the client at Go-Live and the owner can audit, modify, or continue operating the platform independently if the commercial relationship ends.',
          'No international vendor delivers this architecture because their business model depends on client lock-in. **That is precisely why a Libyan, Mauritanian or Malian developer building for 30 years should refuse the international-vendor model in 2026.**',
        ],
      },
      {
        heading: 'How to start — 4-month per-building roadmap',
        body: [
          '**Weeks 1-3: audit and scoping.** Building audit or architect-plan review, KPI target definition (energy, water, comfort, security), third-party integration choices (existing alarm, badges, cameras), and fixed-price quoting. Deliverable: board paper with committed budget.',
          '**Months 1-2: hardware install and backbone.** IoT sensors on every floor (energy, water, occupancy, air quality), IP cameras if not already installed, communication gateway, and on-premise server. Symloop ships hardware from Algiers in 4-6 weeks lead time (versus 12-16 weeks for Schneider hardware from Europe).',
          '**Months 2-3: software and customization.** BMS platform deployment, energy-orchestration rule configuration specific to the building, third-party system integration, and AI model calibration on 30 days of baseline data.',
          '**Month 4: training and transfer.** Property-manager training on web and mobile UI, maintenance-technician training on hardware, source-code and documentation transfer, and 90 days of included support to stabilize adjustments.',
          '**Month 5+: operation.** The building operates its BMS autonomously. Symloop available for optional support contracts, but the owner can also fully operate in-house with their maintenance team.',
        ],
      },
    ],
    useCases: {
      heading: '6 BMS capabilities delivered as standard',
      items: [
        { icon: 'Zap',      label: 'Energy management',         sub: 'Grid-generator-battery-solar · -18 to -35% bill' },
        { icon: 'Wind',     label: 'AI HVAC optimization',      sub: 'Predictive occupancy + weather model · -22 to -30%' },
        { icon: 'Droplet',  label: 'Water + leak detection',    sub: 'Leak detection < 30 min · per-floor sub-metering' },
        { icon: 'Shield',   label: 'AI vision security',        sub: 'Intrusion + vehicle detection · on-premise inference' },
        { icon: 'Cpu',      label: 'Access + badges',           sub: 'Card / biometric / QR · audit-grade logging' },
        { icon: 'Activity', label: 'Compliance reporting',      sub: 'LEED / BREEAM / EDGE · international financing' },
      ],
    },
    cta: {
      eyebrow: 'Talk to a BMS engineer',
      title: 'Building or renovating in Tripoli, Nouakchott, Bamako or elsewhere in North-West Africa? Describe the project in 5 minutes — we scope within 2 weeks.',
    },
    related: {
      insights: [
        { key: 'libya',      name: 'Libya 2026 — reconstruction-economy AI partner brief' },
        { key: 'mauritania', name: 'Mauritania 2026 — Atlantic gateway + mining boom' },
        { key: 'mali',       name: 'Mali 2026 — Bamako, Sahelian gold + diplomatic-hub infrastructure' },
      ],
      services: [
        { key: 'iot',                  name: 'IoT & Industrial Systems' },
        { key: 'software-engineering', name: 'Software Engineering' },
      ],
    },
  },

  ar: {
    kind: 'دليل BMS لشمال غرب إفريقيا',
    title: 'برمجيات BMS لإدارة المباني في ليبيا وموريتانيا ومالي — 2026.',
    dek: 'لمطوّري العقارات ومجموعات الفنادق ومدراء المرافق التعدينية ووزارات الأشغال العامة: كيف تنشر منصة BMS سيادية في طرابلس ونواكشوط وباماكو مقابل 30-60 ألف دولار لكل مبنى، مع هاردوير IoT مصنّع محلياً، وذكاء اصطناعي مدمج، وكود مصدر يملكه العميل.',
    publishedAt: 'مايو 2026',
    readTime: '13 دقيقة قراءة',
    author: 'سيملوب',
    chart: {
      label: 'تكلفة منصة BMS لكل مبنى',
      before: { label: 'Schneider / Honeywell / Siemens', value: 120 },
      after: { label: 'Symloop BMS سيادي', value: 45 },
      deltaLabel: '–62٪ · بدون ترخيص متكرر · كود المصدر مملوك',
      note: 'تكلفة نشر مبدئية مركّبة لكل مبنى تجاري متوسط (5-15 طابقاً).',
    },
    intro: [
      'في 2026، **كل مبنى تجاري أو سكني جديد في طرابلس وبنغازي ومصراتة ونواكشوط وباماكو يواجه نفس المشكلة التشغيلية**: استقرار الكهرباء غير كافٍ، وكل متر مربع يحتاج منصة BMS لتنسيق الطاقة والمياه والتكييف والأمن والامتثال البيئي.',
      'السوق الحالي يقدّم ثلاثة خيارات سيّئة. **بائعون أوروبيون** مسعّرون 80-150 ألف دولار. **متكاملون خليجيون** يطيرون للمشروع ويختفون بعدها. **تجميع محلي** بأجهزة Tuya استهلاكية بدون تكامل متعدّد الأنظمة.',
      'هذا المقال يشرح: **ما يجب أن تقدّمه منصة BMS حديثة في 2026، لماذا يجب أن تكون التكلفة لكل مبنى 30-60 ألف دولار وليس 120-150 ألف دولار، وكيف يبني Symloop منصة BMS سيادية بهاردوير IoT ESP32 مصنّع في الجزائر العاصمة.**',
    ],
    sections: [
      {
        heading: 'ما يجب أن تفعله منصة BMS فعلاً في 2026',
        body: [
          'منصة BMS حديثة تدمج **ست وظائف تشغيلية في لوحة تحكّم واحدة**: إدارة الطاقة، تحسين التكييف، إدارة المياه وكشف التسرّب، الأمن بالرؤية الحاسوبية، إدارة الوصول والشارات، تقارير الامتثال البيئي.',
          'البائعون الأوروبيون يسلّمون هذا كلّه لكن مع **عبء معرفي ومالي مرتفع جداً للأسواق الليبية والموريتانية والمالية**.',
          'منصة BMS من Symloop تسلّم نفس الوظائف الستّ بـ **بنية sovereign-deployment-first**: منشورة في الموقع، كود مصدر منقول للعميل عند الإطلاق، هاردوير IoT ESP32 مصنّع في الجزائر العاصمة.',
        ],
      },
      {
        heading: 'القدرات التشغيلية الستّ — بالتفصيل',
        body: [
          '**إدارة الطاقة**: تنسيق ذكي لمزيج الشبكة-المولّد-البطارية-الشمسي. يخفّض فاتورة الكهرباء 18-35٪.',
          '**تحسين التكييف**: نموذج تنبؤي بالذكاء الاصطناعي يتعلّم أنماط الإشغال. وفّر نموذجي: 22-30٪.',
          '**إدارة المياه وكشف التسرّب**: كشف تسرّب آلي في أقل من 30 دقيقة.',
          '**الأمن بالرؤية الحاسوبية**: كاميرات IP مع نماذج رؤية Symloop. بدون نقل فيديو خارج الموقع.',
          '**الوصول والشارات**: تكامل قارئات بطاقة/بيومتري/QR، تسجيل وصول قابل للتدقيق.',
          '**التقارير البيئية والامتثال**: تجميع مستمر لـ KPI الطاقة + المياه + الكربون، توليد تقارير LEED/BREEAM/EDGE.',
        ],
      },
      {
        heading: 'لماذا يجب أن تكون التكلفة 30-60 ألف دولار وليس 120-150 ألف دولار',
        body: [
          'تكلفة Symloop 30-60 ألف دولار تتفصّل: هاردوير IoT 8-15 ألف؛ برمجيات BMS 12-25 ألف؛ تكامل PLC 5-10 ألف؛ تدريب ونقل كود 3-8 ألف؛ تشغيل ودعم 90 يوماً 2-5 ألف.',
          'Schneider EcoStruxure لنفس المبنى: هاردوير 30-50 ألف؛ ترخيص سحابي 20-40 ألف/سنة؛ تكامل شريك محلي 25-40 ألف؛ تدريب أوروبي 15-25 ألف؛ تشغيل 10-20 ألف؛ صيانة سنوية إلزامية 25-35 ألف/سنة.',
          'على عمر افتراضي 10 سنوات للمبنى، **Symloop يكلّف 60-100 ألف دولار إجمالاً مقابل Schneider بـ 620-900 ألف دولار**. الفارق يحرّر 500-800 ألف دولار لكل مبنى.',
        ],
      },
      {
        heading: 'بنية sovereign-deployment-first — لماذا غير قابلة للتفاوض',
        body: [
          'في ليبيا وموريتانيا ومالي، **البيانات التشغيلية لمبنى تجاري — أنماط الإشغال وملفّات الاستهلاك ووجود المستأجرين وفيديو الأمن — هي بيانات حساسة** لا يجب أن تغادر البلد.',
          '**بنية Symloop هي sovereign-deployment-first**: BMS يعمل إمّا في الموقع في المبنى نفسه أو في سحابة محلية منظّمة. كود المصدر يُنقل للعميل عند الإطلاق.',
          'لا يقدّم أي بائع دولي هذه البنية لأن نموذج عملهم يعتمد على قفل العميل. **هذا بالضبط لماذا يجب على مطوّر ليبي أو موريتاني أو مالي يبني لـ 30 عاماً رفض نموذج البائع الدولي في 2026.**',
        ],
      },
      {
        heading: 'كيف تبدأ — خارطة طريق 4 أشهر لكل مبنى',
        body: [
          '**الأسابيع 1-3: التدقيق وتحديد النطاق.** تدقيق المبنى الموجود، تحديد KPI، اختيار التكاملات، تسعير ثابت.',
          '**الشهران 1-2: تثبيت الهاردوير والعمود الفقري.** مستشعرات IoT في كل طابق. Symloop يشحن الهاردوير من الجزائر العاصمة في 4-6 أسابيع.',
          '**الشهران 2-3: البرمجيات والتخصيص.** نشر منصة BMS، تكوين قواعد تنسيق الطاقة، معايرة نماذج الذكاء الاصطناعي.',
          '**الشهر 4: التدريب والنقل.** تدريب مدير العقار، نقل كود المصدر والوثائق، 90 يوماً من الدعم المضمن.',
          '**الشهر 5+: التشغيل.** يشغّل المبنى منصة BMS بشكل مستقل.',
        ],
      },
    ],
    useCases: {
      heading: '6 قدرات BMS تُسلَّم كمعيار',
      items: [
        { icon: 'Zap',      label: 'إدارة الطاقة',                sub: 'شبكة-مولد-بطارية-شمسي · -18 إلى -35٪' },
        { icon: 'Wind',     label: 'تحسين التكييف بالذكاء الاصطناعي', sub: 'نموذج إشغال + طقس · -22 إلى -30٪' },
        { icon: 'Droplet',  label: 'إدارة المياه وكشف التسرّب',    sub: 'كشف تسرّب < 30 دقيقة' },
        { icon: 'Shield',   label: 'الأمن بالرؤية',                sub: 'كشف اقتحام + مركبات · في الموقع' },
        { icon: 'Cpu',      label: 'الوصول والشارات',              sub: 'بطاقة / بيومتري / QR · سجل قابل للتدقيق' },
        { icon: 'Activity', label: 'تقارير الامتثال',              sub: 'LEED / BREEAM / EDGE · تمويل دولي' },
      ],
    },
    cta: {
      eyebrow: 'تحدّث إلى مهندس BMS',
      title: 'تبني أو تجدّد في طرابلس أو نواكشوط أو باماكو؟ صف المشروع في 5 دقائق — نحدّد النطاق في أسبوعين.',
    },
    related: {
      insights: [
        { key: 'libya',      name: 'ليبيا 2026 — شريك الذكاء الاصطناعي لاقتصاد إعادة الإعمار' },
        { key: 'mauritania', name: 'موريتانيا 2026 — بوابة الأطلسي + طفرة التعدين' },
        { key: 'mali',       name: 'مالي 2026 — باماكو والذهب الساحلي والبنية التحتية الدبلوماسية' },
      ],
      services: [
        { key: 'iot',                  name: 'IoT والأنظمة الصناعية' },
        { key: 'software-engineering', name: 'هندسة البرمجيات' },
      ],
    },
  },
};

const FAQ = {
  fr: [
    { q: 'Que veut dire BMS exactement ?', a: 'BMS = Building Management System (système de gestion technique de bâtiment, GTB en français). Plateforme logicielle qui orchestre énergie, CVC, eau, sécurité, accès et reporting environnemental dans un seul tableau de bord. Standard industrie depuis 30 ans, mais les éditeurs traditionnels (Schneider, Honeywell, Siemens) restent calibrés pour le marché européen.' },
    { q: 'Quel est le ROI d\'une plateforme BMS Symloop ?', a: 'Sur un bâtiment commercial moyen de 5-15 étages : 18 à 35% d\'économie sur la facture électricité, 22 à 30% sur la consommation CVC, et 60-100K$ de coût total sur 10 ans versus 620-900K$ pour une plateforme Schneider équivalente. Payback typique 18-24 mois sur l\'investissement initial.' },
    { q: 'Le hardware Symloop est-il aussi robuste que Schneider ou Siemens ?', a: 'Symloop fabrique du hardware ESP32 industriel certifié IP65 (résistance poussière + eau) et CE pour la conformité européenne. Pour les composants critiques (PLCs backbone, contrôleurs CVC, transformateurs), Symloop intègre du hardware Schneider M340/M580 ou Siemens S7 — donc vous obtenez le hardware Schneider quand ça compte, plus du hardware Symloop pour les capteurs où Schneider est massivement surdimensionné en prix.' },
    { q: 'Peut-on intégrer Symloop BMS avec un bâtiment Schneider/Honeywell existant ?', a: 'Oui. Symloop intègre avec les PLCs Schneider M340/M580 et Siemens S7 via Modbus/TCP ou BACnet, peut lire les données de plateformes EcoStruxure ou Forge déjà installées, et étend par-dessus avec les capacités IA et le hub de données souverain. Migration progressive possible sans rip-and-replace.' },
    { q: 'Comment Symloop gère-t-il la conformité réglementaire locale ?', a: 'Pour la Libye, conformité avec exigences DGSN sur traçabilité accès. Pour la Mauritanie, intégration avec normes Ministère de l\'Habitat et de l\'Urbanisme. Pour le Mali, conformité avec ANTIM et exigences ministère du logement. Pour tous : reporting automatique LEED, BREEAM et EDGE pour les bâtiments cherchant financement Banque Mondiale, BAD ou AFD.' },
  ],
  en: [
    { q: 'What does BMS mean exactly?', a: 'BMS = Building Management System. A software platform orchestrating energy, HVAC, water, security, access and environmental reporting in one dashboard. Industry standard for 30 years, but traditional vendors (Schneider, Honeywell, Siemens) remain calibrated for the European market.' },
    { q: 'What is the ROI of a Symloop BMS platform?', a: 'On an average 5-15 story commercial building: 18-35% savings on the electricity bill, 22-30% on HVAC consumption, and $60-100K total cost over 10 years versus $620-900K for an equivalent Schneider platform. Typical payback 18-24 months on the initial investment.' },
    { q: 'Is Symloop hardware as robust as Schneider or Siemens?', a: 'Symloop manufactures industrial-grade ESP32 hardware certified IP65 (dust + water resistant) and CE-compliant for European standards. For critical components (PLC backbone, HVAC controllers, transformers), Symloop integrates Schneider M340/M580 or Siemens S7 hardware — so you get Schneider hardware where it matters, plus Symloop hardware for the sensors where Schneider is massively overpriced.' },
    { q: 'Can Symloop BMS integrate with an existing Schneider/Honeywell building?', a: 'Yes. Symloop integrates with Schneider M340/M580 and Siemens S7 PLCs via Modbus/TCP or BACnet, can read data from already-installed EcoStruxure or Forge platforms, and extends above with AI capabilities and a sovereign data hub. Gradual migration possible without rip-and-replace.' },
    { q: 'How does Symloop handle local regulatory compliance?', a: 'For Libya: compliance with DGSN access-traceability requirements. For Mauritania: integration with Ministry of Habitat and Urbanism standards. For Mali: compliance with ANTIM and Ministry of Housing requirements. For all: automatic LEED, BREEAM and EDGE reporting for buildings seeking World Bank, ADB or AFD financing.' },
  ],
  ar: [
    { q: 'ماذا يعني BMS بالضبط؟', a: 'BMS = Building Management System (نظام إدارة المباني). منصة برمجية تنسّق الطاقة والتكييف والمياه والأمن والوصول والتقارير البيئية في لوحة تحكّم واحدة.' },
    { q: 'ما عائد الاستثمار لمنصة BMS من Symloop؟', a: 'على مبنى تجاري متوسط 5-15 طابقاً: 18-35٪ توفير على فاتورة الكهرباء، 22-30٪ على استهلاك التكييف، و60-100 ألف دولار تكلفة إجمالية على 10 سنوات مقابل 620-900 ألف دولار لمنصة Schneider مكافئة.' },
    { q: 'هل هاردوير Symloop قويّ مثل Schneider أو Siemens؟', a: 'يصنّع Symloop هاردوير ESP32 صناعي معتمد IP65 (مقاوم للغبار والماء) و CE. للمكونات الحيوية، يدمج Symloop هاردوير Schneider M340/M580 أو Siemens S7.' },
    { q: 'هل يمكن دمج Symloop BMS مع مبنى Schneider/Honeywell موجود؟', a: 'نعم. يدمج Symloop مع PLCs Schneider M340/M580 وSiemens S7 عبر Modbus/TCP أو BACnet. هجرة تدريجية ممكنة بدون استبدال كامل.' },
    { q: 'كيف يتعامل Symloop مع الامتثال التنظيمي المحلي؟', a: 'لليبيا: الامتثال مع متطلبات DGSN. لموريتانيا: التكامل مع معايير وزارة الإسكان والتعمير. لمالي: الامتثال مع ANTIM. للجميع: تقارير LEED وBREEAM وEDGE تلقائية.' },
  ],
};

const iconMap = { Zap, Droplet, Shield, Cpu, Activity, Wind };

export default function Page() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = C[locale] || C.fr;
  const faq = FAQ[locale] || FAQ.fr;

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: c.title,
    description: c.dek,
    image: ['https://symloop.com/blog/cover-bms-libye-mauritanie-mali.jpg'],
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    author: { '@type': 'Organization', name: 'Symloop' },
    publisher: { '@type': 'Organization', name: 'Symloop', logo: { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' } },
    mainEntityOfPage: 'https://symloop.com/blog/logiciel-gestion-batiments-bms-libye-mauritanie-mali-2026/',
    about: [
      { '@type': 'Thing', name: 'BMS Building Management System' },
      { '@type': 'Thing', name: 'Energy management software' },
      { '@type': 'Thing', name: 'HVAC AI optimization' },
      { '@type': 'Thing', name: 'IoT building automation Africa' },
      { '@type': 'Place', name: 'Tripoli' },
      { '@type': 'Place', name: 'Nouakchott' },
      { '@type': 'Place', name: 'Bamako' },
    ],
    audience: { '@type': 'BusinessAudience', audienceType: 'Property developers, hotel groups, mining facility managers, ministries of public works in Libya, Mauritania, Mali' },
  };

  const bc = [
    { name: 'Home', url: 'https://symloop.com/' },
    { name: 'Blog', url: 'https://symloop.com/blog/' },
    { name: c.title, url: 'https://symloop.com/blog/logiciel-gestion-batiments-bms-libye-mauritanie-mali-2026/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} — Symloop`}
        description={c.dek}
        keywords="logiciel BMS, logiciel gestion bâtiment, GTB gestion technique bâtiment, BMS Libye, BMS Mauritanie, BMS Mali, gestion énergie bâtiment Afrique, smart building Tripoli, smart building Nouakchott, smart building Bamako, building management system Africa, Schneider EcoStruxure alternative, Honeywell Forge alternative, Siemens Desigo alternative, IoT bâtiment Algérie, ESP32 building automation, optimisation CVC IA, gestion eau bâtiment, sécurité vision bâtiment, LEED BREEAM EDGE Africa, BMS sovereign deployment, plateforme BMS souveraine, logiciel gestion immeuble, software gestion edificios Mauritanie, BMS libyen, BMS sahélien, automatisation immeuble"
        type="article"
        structuredData={ld}
        faq={faq}
        breadcrumbs={bc}
        image="/blog/cover-bms-libye-mauritanie-mali.jpg"
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link href="/blog/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">{c.kind}</Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">{c.title}</motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]">
                <span>{c.author}</span>
                <span>{c.readTime}</span>
              </motion.div>
            </motion.div>
          </div>
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image src="/blog/cover-bms-libye-mauritanie-mali.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-7 mb-12">
            {c.intro.map((p, i) => <motion.p key={i} variants={fadeUp} className="text-xl lg:text-2xl text-white/80 leading-[1.55] font-light">{R(p)}</motion.p>)}
          </motion.div>

          <CostCompareChart label={c.chart.label} before={c.chart.before} after={c.chart.after} deltaLabel={c.chart.deltaLabel} note={c.chart.note} />

          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="mb-20 lg:mb-24">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.useCases.heading}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
              {c.useCases.items.map((item, i) => {
                const Icon = iconMap[item.icon] || Zap;
                return (
                  <motion.li key={i} variants={fadeUp} className="bg-black p-6 lg:p-8 group hover:bg-white/[0.025] transition-colors">
                    <div className="flex items-start gap-4">
                      <Icon className="w-5 h-5 text-white/40 group-hover:text-white mt-1 transition-colors shrink-0" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-lg lg:text-xl font-normal text-white mb-2 leading-snug">{item.label}</h3>
                        <p className="text-sm text-white/55 leading-relaxed">{item.sub}</p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.section>

          {c.sections.map((s, idx) => (
            <motion.section key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-12 lg:mb-16">
              <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-6">
                <span className="font-mono text-xs tracking-[0.15em] text-white/30">{String(idx + 1).padStart(2, '0')}</span>
                <h2 className="text-2xl lg:text-4xl font-light tracking-tight text-white leading-[1.1]">{s.heading}</h2>
              </motion.div>
              <div className="space-y-5 ps-0 lg:ps-10">
                {s.body.map((p, i) => <motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/70 leading-[1.65]">{R(p)}</motion.p>)}
              </div>
            </motion.section>
          ))}

        </article>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span>
                  <span className="h-px w-12 bg-white/20" />
                </div>
                <h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-10">{c.cta.title}</h2>
                <div className="flex flex-wrap gap-4">
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors">
                    <MessageCircle className="w-4 h-4" strokeWidth={1.75} /><span>WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                  </a>
                  <a href="mailto:contact@symloop.com" className="group inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/5 transition-colors">
                    <span>{isRtl ? 'بريد إلكتروني' : 'Email'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">— {isRtl ? 'مقالات ذات صلة' : (locale === 'fr' ? 'À lire ensuite' : 'Related')}</div>
                <ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">
                  {c.related.insights.map((it) => (
                    <li key={it.key} className="bg-black">
                      <Link href={`/insights/${it.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]">
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Insight</div>
                        <h3 className="text-base font-light text-white leading-snug">{it.name}</h3>
                      </Link>
                    </li>
                  ))}
                  {c.related.services.map((s) => (
                    <li key={s.key} className="bg-black">
                      <Link href={`/services/${s.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]">
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Service</div>
                        <h3 className="text-base font-light text-white leading-snug">{s.name}</h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
