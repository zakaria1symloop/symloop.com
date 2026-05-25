// ============================================================================
// SYMLOOP BLOG — Smart home + residential automation for Libya, Mauritania,
// Mali 2026. Buyer profiles: luxury residential developers, upper-middle-
// class homeowners, diaspora-returnee buyers, gated-community operators.
// FR-primary keywords: "maison intelligente", "smart home", "domotique",
// "automatisation résidentielle Tripoli / Nouakchott / Bamako".
// ============================================================================

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, MessageCircle, Lock, Lightbulb, Thermometer, Smartphone, Eye, Battery } from 'lucide-react';
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
    kind: 'Guide smart home Afrique du Nord-Ouest',
    title: 'Maison intelligente et domotique pour Libye, Mauritanie et Mali — 2026.',
    dek: 'Pour promoteurs résidentiels luxe, propriétaires classe moyenne supérieure, communautés fermées et opérateurs villas haut-de-gamme à Tripoli, Misrata, Nouakchott et Bamako : comment livrer une smart home intégrée — sécurité IA, gestion énergie, CVC intelligent, accès biométrique, applications mobile française et arabe — pour 3-8K$ par villa au lieu de 15-25K$ chez les éditeurs golfiques importés.',
    publishedAt: 'Mai 2026',
    readTime: '12 min de lecture',
    author: 'Symloop',
    chart: {
      label: 'Coût smart home par villa de luxe',
      before: { label: 'Honeywell / Lutron / Crestron Gulf', value: 22 },
      after: { label: 'Symloop smart home', value: 6 },
      deltaLabel: '–73% · hardware fabriqué à Alger · maintenance locale',
      note: 'Comparaison composite : solutions smart home importées du Golfe (Honeywell + Lutron + Crestron + intégrateur Dubaï) vs Symloop sovereign-deployment avec hardware ESP32 fabriqué localement.',
    },
    intro: [
      'En 2026, **le marché résidentiel luxe en Libye, Mauritanie et Mali est la troisième vague de demande smart home** après les marchés du Golfe (saturé) et l\'Afrique anglophone (en cours). Les acheteurs : retour de diaspora avec exposition européenne ou américaine, professionnels du secteur pétrole-gaz-minier avec budget, fonctionnaires gouvernementaux et diplomatiques, et les nouvelles classes moyennes supérieures de Tripoli, Nouakchott et Bamako qui voient ce que smart home signifie à Dubaï, Londres ou Istanbul et veulent la même chose chez eux.',
      'Aujourd\'hui, les seules options sont **trois mauvaises** : (1) éditeurs golfiques (Honeywell, Lutron, Crestron via intégrateurs Dubaï) qui livrent du hardware robuste mais aux prix européens, sans support local au-delà de la livraison initiale ; (2) bricolage Tuya/Shenzhen avec hardware grand public, zéro intégration multi-systèmes, et applications anglaises seulement ; (3) électriciens locaux qui installent un ou deux composants mais ne livrent jamais une smart home architecturale intégrée.',
      'Cet article explique : **ce qu\'une smart home intégrée doit livrer en 2026 pour un acheteur libyen, mauritanien ou malien, pourquoi le coût par villa doit être 3-8K$ et non 15-25K$, et comment Symloop livre une plateforme smart home complète avec hardware fabriqué à Alger, applications française et arabe, et maintenance sur le terrain.**',
    ],
    sections: [
      {
        heading: 'Ce que la smart home moderne doit livrer en 2026',
        body: [
          'Une smart home intégrée 2026 livre **six fonctions opérationnelles** : (1) sécurité avec caméras IA et détection intrusion + comportement anormal + reconnaissance faciale pour résidents et visiteurs autorisés, (2) gestion accès biométrique pour porte d\'entrée, garage et zones sensibles (bureau privé, chambre coffre-fort), (3) gestion énergie avec orchestration générateur + batterie + solaire (essentiel en Libye et Mauritanie où le réseau est instable), (4) CVC intelligent avec apprentissage des préférences par pièce et par occupant (climat désertique à Nouakchott et Tripoli), (5) éclairage à l\'occupation + ambiance (scénarios cuisine, salon, chambre, réception), (6) gestion centralisée via application mobile française + arabe avec contrôle vocal local.',
          'Les éditeurs golfiques livrent ces fonctions séparément avec un intégrateur Dubaï qui assemble les composants — résultat, coût élevé (15-25K$ par villa moyenne) et fragilité d\'intégration (un composant qui tombe en panne casse souvent toute la chaîne). **Symloop livre les six fonctions en une plateforme intégrée native** — pas un assemblage d\'éditeurs différents, mais une architecture conçue pour interopérer dès le premier jour.',
          'Différenciateur opérationnel critique : **maintenance sur le terrain**. Quand un client à Tripoli, Nouakchott ou Bamako a un problème smart home en 2027 ou 2030, qui répond ? Les éditeurs golfiques ne répondent plus après la livraison initiale. Symloop maintient une équipe support persistante en Algérie qui peut intervenir physiquement dans les 48-72 heures par route ou vol charter, et résoudre 80% des problèmes à distance via le hub on-premise.',
        ],
      },
      {
        heading: 'Les six capacités opérationnelles — détaillées',
        body: [
          '**Sécurité IA** : 4-12 caméras IP par villa (selon taille), modèles vision Symloop pour détection intrusion + comportement anormal + reconnaissance plaques minéralogiques et visages autorisés. Aucune transmission vidéo hors-site sans accord explicite — modèle d\'inférence on-premise sur un hub local (5-8K$ amorti sur la villa). Notifications push application mobile en cas d\'événement.',
          '**Accès biométrique** : lecteur empreinte digitale + reconnaissance faciale + QR code temporaire pour visiteurs. Journal accès audit-grade exportable. Gestion droits par membre famille et par personnel domestique. Intégration avec serrures motorisées Yale, Schlage, ou alternatives locales.',
          '**Gestion énergie** : orchestration intelligente réseau (SOMELEC en Mauritanie, GECOL en Libye, EDM au Mali) + générateur diesel + batterie + panneaux solaires (où installés). Réduit la facture diesel de 25-40% pour les villas qui dépendent du diesel pendant les coupures réseau.',
          '**CVC intelligent** : modèle prédictif IA qui apprend les patterns d\'occupation par pièce et par heure, et préfère pré-climatiser plutôt que sur-réagir au moment de l\'occupation. Économie typique : 25-35% sur la consommation CVC annuelle (qui est énorme dans le climat désertique de Nouakchott et Tripoli).',
          '**Éclairage et ambiance** : LED RGBW dimmable par zone, scénarios pré-configurés (matin, journée, soirée, réception) plus création de scénarios personnalisés via app. Intégration avec stores motorisés et rideaux automatisés.',
          '**Application mobile française + arabe** : contrôle centralisé toutes les fonctions, contrôle vocal local (sans transmission à un cloud Apple ou Google), gestion permissions par membre famille, intégration avec les notifications de sécurité.',
        ],
      },
      {
        heading: 'Pourquoi 3-8K$ par villa et non 15-25K$',
        body: [
          'Le coût Symloop de 3-8K$ par villa moyenne (200-400m²) se décompose : **hardware (4-8 caméras IP, 2-4 lecteurs biométriques, capteurs CVC, contrôleurs LED, hub central) 1,5-3,5K$ ; logiciel et personnalisation 0,8-2K$ ; installation et calibration 0,5-1,5K$ ; formation propriétaire et personnel 0,2-0,5K$ ; 90 jours de support inclus 0-0,5K$.** Maintenance annuelle optionnelle 200-500$/an.',
          'Le coût Honeywell + Lutron + Crestron via intégrateur Dubaï pour la même villa : **hardware 5-10K$ (souvent surdimensionné), licence et configuration 3-5K$, installation par technicien Dubaï 4-6K$, formation 2-3K$, support annuel obligatoire 1,5-3K$/an.** Total 15-25K$ initial plus 1,5-3K$/an récurrent.',
          'Sur 10 ans, **Symloop coûte 5-13K$ total versus Honeywell+integrator à 30-55K$ total**. Le différentiel libère 25-40K$ par villa pour l\'ameublement, le jardin paysager, ou réinvestir dans plus de villas pour les promoteurs.',
        ],
      },
      {
        heading: 'L\'architecture data-sovereignty-first — pourquoi c\'est non négociable pour smart home',
        body: [
          'La donnée smart home — **patterns d\'occupation, présence des membres de famille, vidéo sécurité, profils biométriques** — est extrêmement sensible. Les éditeurs golfiques transmettent toutes ces données vers des clouds hébergés à Dubaï, en Europe, ou aux États-Unis. **Pour un fonctionnaire diplomatique libyen, un cadre minier mauritanien, ou un homme d\'affaires malien, ces données sortant du pays sont un risque opérationnel et personnel réel.**',
          '**L\'architecture Symloop est on-premise par défaut** : un hub local Raspberry Pi industriel ou mini-PC (300-800$ amorti dans le hardware total) tourne dans la villa, gère tous les modèles IA en local (inférence vision, reconnaissance faciale, optimisation CVC), et seules les notifications opt-in vers l\'application mobile du propriétaire quittent la villa via Internet. Les vidéos sécurité, les journaux accès, les profils biométriques restent physiquement à la maison.',
          'Pour les acheteurs qui veulent accès à distance via leur smartphone hors-pays, Symloop offre un VPN privé chiffré bout-en-bout entre l\'application mobile et le hub on-premise — pas de cloud intermédiaire propriété d\'un tiers. **Le propriétaire reste seul gardien de ses données.**',
        ],
      },
      {
        heading: 'Comment commencer — installation en 4-8 semaines par villa',
        body: [
          '**Semaine 1 : audit et design.** Visite villa, audit câblage électrique existant, plans d\'installation par pièce (caméras, capteurs, lecteurs biométriques, hub central), choix matériaux (couleur boîtiers caméra, finitions lecteurs biométriques pour matcher la déco). Livrable : devis forfait final et plan d\'installation.',
          '**Semaines 2-4 : installation hardware.** Pose des caméras IP, lecteurs biométriques, capteurs CVC, contrôleurs LED, hub central. Tirage câblage si nécessaire (la plupart des villas modernes ont déjà le câblage prévu). Configuration réseau local sécurisé.',
          '**Semaines 5-6 : logiciel et calibration.** Configuration des scénarios, entraînement initial du modèle IA reconnaissance faciale sur les membres de famille et personnel autorisé, calibration des préférences CVC par pièce, configuration des notifications mobile.',
          '**Semaine 7 : formation.** Formation propriétaire et conjoint sur l\'application mobile et les contrôles physiques, formation personnel de maison sur les capacités opérationnelles quotidiennes, transfert documentation et accès admin.',
          '**Semaine 8 : Go-Live et 90 jours support inclus.** La villa opère smart home complète. Support Symloop disponible 7j/7 pour ajustements pendant les 90 jours qui suivent.',
        ],
      },
    ],
    useCases: {
      heading: '6 capacités smart home livrées en standard',
      items: [
        { icon: 'Eye',         label: 'Sécurité IA',             sub: '4-12 caméras IP · détection intrusion + reconnaissance faciale' },
        { icon: 'Lock',        label: 'Accès biométrique',       sub: 'Empreinte + face + QR · journal audit-grade' },
        { icon: 'Battery',     label: 'Gestion énergie',         sub: 'Réseau + générateur + batterie + solaire · -25 à -40% diesel' },
        { icon: 'Thermometer', label: 'CVC intelligent IA',      sub: 'Modèle prédictif occupation · -25 à -35% conso' },
        { icon: 'Lightbulb',   label: 'Éclairage et ambiance',    sub: 'Scénarios pré-configurés · stores motorisés intégrés' },
        { icon: 'Smartphone',  label: 'App mobile FR/AR',         sub: 'Contrôle vocal local · pas de cloud tiers · VPN privé' },
      ],
    },
    cta: {
      eyebrow: 'Parlez à un ingénieur smart home',
      title: 'Vous construisez ou achetez une villa luxe à Tripoli, Nouakchott, Bamako, Misrata ou ailleurs en Afrique du Nord-Ouest ? Décrivez le projet en 5 minutes — nous cadrons sous 2 semaines.',
    },
    related: {
      insights: [
        { key: 'libya',       name: 'Libye 2026 — partenaire IA pour économie de reconstruction' },
        { key: 'mauritania',  name: 'Mauritanie 2026 — Atlantic gateway + boom minier' },
        { key: 'mali',        name: 'Mali 2026 — Bamako, or sahélien et infrastructure diplomatique' },
      ],
      services: [
        { key: 'iot',                  name: 'IoT & Systèmes Industriels' },
        { key: 'ai',                   name: 'Intelligence Artificielle' },
      ],
    },
  },

  en: {
    kind: 'Smart home guide — North-West Africa',
    title: 'Smart home and residential automation for Libya, Mauritania and Mali — 2026.',
    dek: 'For luxury residential developers, upper-middle-class homeowners, gated communities and luxury villa operators in Tripoli, Misrata, Nouakchott and Bamako: how to ship an integrated smart home — AI security, energy management, intelligent HVAC, biometric access, French and Arabic mobile apps — for $3-8K per villa instead of $15-25K from imported Gulf vendors.',
    publishedAt: 'May 2026',
    readTime: '12 min read',
    author: 'Symloop',
    chart: {
      label: 'Smart home cost per luxury villa',
      before: { label: 'Honeywell / Lutron / Crestron Gulf', value: 22 },
      after: { label: 'Symloop smart home', value: 6 },
      deltaLabel: '–73% · hardware manufactured in Algiers · local maintenance',
      note: 'Composite comparison: Gulf-imported smart home solutions (Honeywell + Lutron + Crestron + Dubai integrator) vs Symloop sovereign-deployment with locally-manufactured ESP32 hardware.',
    },
    intro: [
      'In 2026, **the luxury residential market in Libya, Mauritania and Mali is the third wave of smart-home demand** after Gulf markets (saturated) and Anglophone Africa (in progress). The buyers: diaspora returnees with European or American exposure, oil-gas-mining professionals with budget, government and diplomatic officials, and the new upper-middle classes in Tripoli, Nouakchott and Bamako who have seen what smart home means in Dubai, London or Istanbul and want the same at home.',
      'Today the only options are **three bad ones**: (1) Gulf vendors (Honeywell, Lutron, Crestron via Dubai integrators) shipping robust hardware at European prices with no local support beyond initial delivery; (2) Tuya/Shenzhen cobble-together with consumer-grade hardware, zero multi-system integration, English-only apps; (3) local electricians installing one or two components but never delivering an integrated architectural smart home.',
      'This article explains: **what an integrated smart home must deliver in 2026 for a Libyan, Mauritanian or Malian buyer, why per-villa cost should be $3-8K not $15-25K, and how Symloop ships a complete smart-home platform with hardware manufactured in Algiers, French and Arabic apps, and on-the-ground maintenance.**',
    ],
    sections: [
      {
        heading: 'What a modern smart home must deliver in 2026',
        body: [
          'An integrated 2026 smart home delivers **six operational functions**: (1) security with AI cameras and intrusion detection + abnormal behavior + facial recognition for residents and authorized visitors, (2) biometric access management for entry door, garage and sensitive zones (private office, safe room), (3) energy management with generator + battery + solar orchestration (essential in Libya and Mauritania where grid is unstable), (4) intelligent HVAC with preference learning per room and per occupant (desert climate in Nouakchott and Tripoli), (5) occupancy + ambiance lighting (kitchen, living room, bedroom, reception scenarios), (6) centralized management via French + Arabic mobile app with local voice control.',
          'Gulf vendors deliver these functions separately through a Dubai integrator assembling components — result, high cost ($15-25K per average villa) and integration fragility (one component fails, the whole chain often breaks). **Symloop delivers all six in one natively integrated platform** — not a multi-vendor assembly, but architecture designed to interoperate from day one.',
          'Critical operational differentiator: **on-the-ground maintenance**. When a client in Tripoli, Nouakchott or Bamako has a smart-home problem in 2027 or 2030, who answers? Gulf vendors don\'t answer after initial delivery. Symloop maintains a persistent support team in Algeria able to physically intervene within 48-72 hours by road or charter flight, and resolve 80% of issues remotely via the on-premise hub.',
        ],
      },
      {
        heading: 'The six operational capabilities — in detail',
        body: [
          '**AI security**: 4-12 IP cameras per villa (depending on size), Symloop vision models for intrusion + abnormal-behavior detection + license-plate and authorized-face recognition. No off-site video transmission without explicit consent — on-premise inference model on a local hub ($300-800 amortized in total hardware). Mobile push notifications on events.',
          '**Biometric access**: fingerprint reader + facial recognition + temporary QR code for visitors. Audit-grade access log, exportable. Rights management per family member and domestic staff. Integration with motorized locks (Yale, Schlage, or local alternatives).',
          '**Energy management**: intelligent orchestration of grid (SOMELEC Mauritania, GECOL Libya, EDM Mali) + diesel generator + battery + solar panels (where installed). Cuts diesel bill 25-40% for villas dependent on diesel during grid outages.',
          '**Intelligent HVAC**: predictive AI model learning room-by-room and hour-by-hour occupancy patterns, preferring pre-cooling over reactive response on occupancy. Typical saving: 25-35% on annual HVAC consumption (huge in the desert climate of Nouakchott and Tripoli).',
          '**Lighting and ambiance**: dimmable RGBW LED by zone, pre-configured scenarios (morning, daytime, evening, reception) plus custom scenarios via app. Integration with motorized blinds and automated curtains.',
          '**French + Arabic mobile app**: centralized control of all functions, local voice control (no transmission to Apple or Google cloud), permission management per family member, integration with security notifications.',
        ],
      },
      {
        heading: 'Why $3-8K per villa, not $15-25K',
        body: [
          'Symloop $3-8K per average villa (200-400m²) breaks down: **hardware (4-8 IP cameras, 2-4 biometric readers, HVAC sensors, LED controllers, central hub) $1.5-3.5K; software and customization $0.8-2K; installation and calibration $0.5-1.5K; owner and staff training $0.2-0.5K; 90 days included support $0-0.5K.** Optional annual maintenance $200-500/year.',
          'Honeywell + Lutron + Crestron via Dubai integrator for the same villa: **hardware $5-10K (often oversized), license and config $3-5K, Dubai-technician installation $4-6K, training $2-3K, mandatory annual support $1.5-3K/year.** Total $15-25K initial plus $1.5-3K/year recurring.',
          'Over 10 years, **Symloop costs $5-13K total versus Honeywell+integrator at $30-55K total**. The differential frees $25-40K per villa for furnishing, landscaping, or developer reinvestment in more villas.',
        ],
      },
      {
        heading: 'Data-sovereignty-first architecture — why non-negotiable for smart home',
        body: [
          'Smart home data — **occupancy patterns, family member presence, security video, biometric profiles** — is extremely sensitive. Gulf vendors transmit all of this to clouds hosted in Dubai, Europe or the US. **For a Libyan diplomatic official, Mauritanian mining executive or Malian businessman, this data leaving the country is a real operational and personal risk.**',
          '**Symloop architecture is on-premise by default**: a local industrial Raspberry Pi or mini-PC hub ($300-800 amortized in total hardware) runs in the villa, handles all AI models locally (vision inference, facial recognition, HVAC optimization), and only opt-in notifications to the owner\'s mobile app leave the villa via internet. Security videos, access logs, biometric profiles stay physically at home.',
          'For buyers wanting remote access via smartphone outside the country, Symloop offers a private end-to-end encrypted VPN between the mobile app and the on-premise hub — no third-party cloud intermediary. **The owner remains the sole guardian of their data.**',
        ],
      },
      {
        heading: 'How to start — 4-8 week installation per villa',
        body: [
          '**Week 1: audit and design.** Villa visit, existing electrical-cabling audit, room-by-room installation plans (cameras, sensors, biometric readers, central hub), material choices (camera enclosure color, biometric reader finishes to match decor). Deliverable: final fixed-price quote and installation plan.',
          '**Weeks 2-4: hardware installation.** IP camera placement, biometric readers, HVAC sensors, LED controllers, central hub. Cable runs if needed (most modern villas already have planned cabling). Secure local network configuration.',
          '**Weeks 5-6: software and calibration.** Scenario configuration, initial training of facial-recognition AI model on family members and authorized staff, HVAC preference calibration per room, mobile notification setup.',
          '**Week 7: training.** Owner and spouse training on mobile app and physical controls, household-staff training on daily operational capabilities, documentation and admin-access transfer.',
          '**Week 8: Go-Live and 90 days included support.** The villa operates full smart home. Symloop support available 7-days-a-week for adjustments during the following 90 days.',
        ],
      },
    ],
    useCases: {
      heading: '6 smart home capabilities delivered as standard',
      items: [
        { icon: 'Eye',         label: 'AI security',                 sub: '4-12 IP cameras · intrusion + facial recognition' },
        { icon: 'Lock',        label: 'Biometric access',            sub: 'Fingerprint + face + QR · audit-grade log' },
        { icon: 'Battery',     label: 'Energy management',           sub: 'Grid + generator + battery + solar · -25 to -40% diesel' },
        { icon: 'Thermometer', label: 'AI HVAC',                     sub: 'Predictive occupancy model · -25 to -35%' },
        { icon: 'Lightbulb',   label: 'Lighting + ambiance',         sub: 'Pre-configured scenarios · motorized blinds' },
        { icon: 'Smartphone',  label: 'FR/AR mobile app',            sub: 'Local voice control · no cloud · private VPN' },
      ],
    },
    cta: {
      eyebrow: 'Talk to a smart home engineer',
      title: 'Building or buying a luxury villa in Tripoli, Nouakchott, Bamako, Misrata or elsewhere in North-West Africa? Describe the project in 5 minutes — we scope within 2 weeks.',
    },
    related: {
      insights: [
        { key: 'libya',       name: 'Libya 2026 — reconstruction-economy AI partner brief' },
        { key: 'mauritania',  name: 'Mauritania 2026 — Atlantic gateway + mining boom' },
        { key: 'mali',        name: 'Mali 2026 — Bamako, Sahelian gold + diplomatic-hub infrastructure' },
      ],
      services: [
        { key: 'iot',                  name: 'IoT & Industrial Systems' },
        { key: 'ai',                   name: 'Artificial Intelligence' },
      ],
    },
  },

  ar: {
    kind: 'دليل المنزل الذكي لشمال غرب إفريقيا',
    title: 'المنزل الذكي والأتمتة السكنية لليبيا وموريتانيا ومالي — 2026.',
    dek: 'لمطوّري السكن الفاخر وأصحاب المنازل من الطبقة المتوسطة العليا والمجتمعات المسوّرة في طرابلس ومصراتة ونواكشوط وباماكو: كيف تشحن منزلاً ذكياً متكاملاً مقابل 3-8 آلاف دولار لكل فيلا بدلاً من 15-25 ألف دولار من البائعين الخليجيين المستوردين.',
    publishedAt: 'مايو 2026',
    readTime: '12 دقيقة قراءة',
    author: 'سيملوب',
    chart: {
      label: 'تكلفة المنزل الذكي لكل فيلا فاخرة',
      before: { label: 'Honeywell / Lutron / Crestron الخليج', value: 22 },
      after: { label: 'Symloop منزل ذكي', value: 6 },
      deltaLabel: '–73٪ · هاردوير مصنّع في الجزائر العاصمة · صيانة محلية',
      note: 'مقارنة مركّبة: حلول المنزل الذكي المستوردة من الخليج مقابل Symloop sovereign-deployment.',
    },
    intro: [
      'في 2026، **سوق السكن الفاخر في ليبيا وموريتانيا ومالي هو الموجة الثالثة لطلب المنزل الذكي** بعد أسواق الخليج (مشبعة) وإفريقيا الناطقة بالإنجليزية (قيد التطوير). المشترون: عائدو الشتات، مهنيو قطاع النفط والغاز والتعدين، المسؤولون الحكوميون والدبلوماسيون، والطبقات المتوسطة العليا الجديدة في طرابلس ونواكشوط وباماكو.',
      'اليوم، الخيارات الوحيدة هي **ثلاثة سيّئة**: (1) بائعون خليجيون يشحنون هاردوير قوياً بأسعار أوروبية بدون دعم محلي بعد التسليم الأولي؛ (2) تجميع Tuya/Shenzhen بأجهزة استهلاكية بدون تكامل متعدّد الأنظمة؛ (3) كهربائيون محليون يثبّتون مكوّناً أو اثنين لكن لا يسلّمون أبداً منزلاً ذكياً معمارياً متكاملاً.',
      'هذا المقال يشرح: **ما يجب أن يقدّمه المنزل الذكي المتكامل في 2026، لماذا يجب أن تكون التكلفة لكل فيلا 3-8 آلاف دولار وليس 15-25 ألف دولار، وكيف يشحن Symloop منصة منزل ذكي كاملة بهاردوير مصنّع في الجزائر العاصمة.**',
    ],
    sections: [
      {
        heading: 'ما يجب أن يقدّمه المنزل الذكي الحديث في 2026',
        body: [
          'المنزل الذكي المتكامل لعام 2026 يقدّم **ست وظائف تشغيلية**: الأمن بالذكاء الاصطناعي، الوصول البيومتري، إدارة الطاقة، التكييف الذكي، الإضاءة والأجواء، الإدارة المركزية عبر تطبيق موبايل فرنسي + عربي مع التحكّم الصوتي المحلي.',
          'البائعون الخليجيون يقدّمون هذه الوظائف بشكل منفصل عبر متكامل دبي يجمّع المكوّنات — النتيجة: تكلفة عالية (15-25 ألف دولار لكل فيلا متوسطة) وهشاشة تكامل. **Symloop يقدّم الستّة في منصة واحدة متكاملة أصلياً**.',
          'مُميّز تشغيلي حيوي: **الصيانة على أرض الواقع**. عندما يواجه عميل في طرابلس أو نواكشوط أو باماكو مشكلة منزل ذكي في 2027 أو 2030، من يجيب؟ Symloop يحافظ على فريق دعم مستمر في الجزائر قادر على التدخّل فعلياً خلال 48-72 ساعة.',
        ],
      },
      {
        heading: 'القدرات التشغيلية الستّ — بالتفصيل',
        body: [
          '**الأمن بالذكاء الاصطناعي**: 4-12 كاميرا IP لكل فيلا، نماذج رؤية Symloop. بدون نقل فيديو خارج الموقع.',
          '**الوصول البيومتري**: قارئ بصمة + تعرّف الوجه + رمز QR للزوار. سجل وصول قابل للتدقيق.',
          '**إدارة الطاقة**: تنسيق ذكي للشبكة + المولّد + البطارية + الألواح الشمسية. يخفّض فاتورة الديزل 25-40٪.',
          '**التكييف الذكي**: نموذج تنبؤي بالذكاء الاصطناعي يتعلّم أنماط الإشغال. وفر نموذجي 25-35٪.',
          '**الإضاءة والأجواء**: LED RGBW قابل للتعتيم حسب المنطقة، سيناريوهات مسبقة التكوين.',
          '**تطبيق موبايل فرنسي + عربي**: تحكّم مركزي، تحكّم صوتي محلي، إدارة أذونات.',
        ],
      },
      {
        heading: 'لماذا 3-8 آلاف دولار لكل فيلا وليس 15-25 ألف دولار',
        body: [
          'Symloop 3-8 آلاف دولار لكل فيلا متوسطة (200-400 م²) يتفصّل: هاردوير 1.5-3.5 ألف؛ برمجيات وتخصيص 0.8-2 ألف؛ تركيب وتعيير 0.5-1.5 ألف.',
          'Honeywell + Lutron + Crestron عبر متكامل دبي لنفس الفيلا: هاردوير 5-10 آلاف؛ ترخيص وتكوين 3-5 آلاف؛ تركيب تقني من دبي 4-6 آلاف؛ تدريب 2-3 آلاف؛ دعم سنوي إلزامي 1.5-3 ألف/سنة.',
          'على 10 سنوات، **Symloop يكلّف 5-13 ألف دولار إجمالاً مقابل Honeywell+متكامل بـ 30-55 ألف دولار إجمالاً**.',
        ],
      },
      {
        heading: 'بنية data-sovereignty-first — لماذا غير قابلة للتفاوض للمنزل الذكي',
        body: [
          'بيانات المنزل الذكي — **أنماط الإشغال، حضور أفراد الأسرة، فيديو الأمن، الملفّات البيومترية** — حساسة للغاية.',
          '**بنية Symloop هي on-premise بشكل افتراضي**: محور صناعي محلي (300-800 دولار) يعمل في الفيلا، يتعامل مع جميع نماذج الذكاء الاصطناعي محلياً.',
          'للمشترين الذين يريدون الوصول عن بُعد عبر الهاتف خارج البلد، يقدّم Symloop VPN خاص مشفّر من طرف إلى طرف. **يبقى المالك الحارس الوحيد لبياناته.**',
        ],
      },
      {
        heading: 'كيف تبدأ — تركيب 4-8 أسابيع لكل فيلا',
        body: [
          '**الأسبوع 1: التدقيق والتصميم.** زيارة الفيلا، تدقيق التسليك الكهربائي.',
          '**الأسابيع 2-4: تثبيت الهاردوير.** وضع الكاميرات IP، القارئات البيومترية.',
          '**الأسابيع 5-6: البرمجيات والتعيير.** تكوين السيناريوهات، التدريب الأولي لنموذج الذكاء الاصطناعي.',
          '**الأسبوع 7: التدريب.** تدريب المالك والزوج، تدريب طاقم المنزل.',
          '**الأسبوع 8: Go-Live ومضمون 90 يوماً من الدعم.**',
        ],
      },
    ],
    useCases: {
      heading: '6 قدرات المنزل الذكي تُسلَّم كمعيار',
      items: [
        { icon: 'Eye',         label: 'الأمن بالذكاء الاصطناعي', sub: '4-12 كاميرا IP · كشف اقتحام + تعرّف وجه' },
        { icon: 'Lock',        label: 'الوصول البيومتري',         sub: 'بصمة + وجه + QR · سجل قابل للتدقيق' },
        { icon: 'Battery',     label: 'إدارة الطاقة',             sub: 'شبكة + مولّد + بطارية + شمسي · -25 إلى -40٪' },
        { icon: 'Thermometer', label: 'تكييف ذكي بالذكاء الاصطناعي', sub: 'نموذج إشغال تنبؤي · -25 إلى -35٪' },
        { icon: 'Lightbulb',   label: 'إضاءة وأجواء',             sub: 'سيناريوهات مسبقة · ستائر مؤتمتة' },
        { icon: 'Smartphone',  label: 'تطبيق موبايل عربي/فرنسي',  sub: 'تحكّم صوتي محلي · بدون سحابة · VPN خاص' },
      ],
    },
    cta: {
      eyebrow: 'تحدّث إلى مهندس منزل ذكي',
      title: 'تبني أو تشتري فيلا فاخرة في طرابلس أو نواكشوط أو باماكو أو مصراتة؟ صف المشروع في 5 دقائق.',
    },
    related: {
      insights: [
        { key: 'libya',       name: 'ليبيا 2026 — شريك الذكاء الاصطناعي لاقتصاد إعادة الإعمار' },
        { key: 'mauritania',  name: 'موريتانيا 2026 — بوابة الأطلسي + طفرة التعدين' },
        { key: 'mali',        name: 'مالي 2026 — باماكو والذهب الساحلي والبنية التحتية الدبلوماسية' },
      ],
      services: [
        { key: 'iot',                  name: 'IoT والأنظمة الصناعية' },
        { key: 'ai',                   name: 'الذكاء الاصطناعي' },
      ],
    },
  },
};

const FAQ = {
  fr: [
    { q: 'Quel est le coût total smart home Symloop versus Honeywell+intégrateur Dubaï ?', a: 'Pour une villa moyenne 200-400m² sur 10 ans : Symloop 5-13K$ total (3-8K$ initial + 200-500$/an optionnel). Honeywell+Lutron+Crestron via intégrateur Dubaï 30-55K$ total (15-25K$ initial + 1,5-3K$/an récurrent obligatoire).' },
    { q: 'Le hardware Symloop ESP32 est-il aussi fiable que Honeywell ou Lutron ?', a: 'Pour les composants smart home résidentiels (capteurs CVC, contrôleurs LED, hub central, caméras IP non-industrielles), Symloop ESP32 industriel IP65 est largement suffisant et déjà déployé dans des centaines de bâtiments. Pour les composants critiques où Honeywell ou Lutron ont vraiment une supériorité (serrures motorisées Yale/Schlage haute sécurité, détecteurs fumée certifiés), Symloop intègre directement le hardware d\'origine — vous obtenez le composant Yale là où ça compte.' },
    { q: 'Peut-on étendre une installation Symloop existante après Go-Live ?', a: 'Oui. L\'architecture est modulaire : ajout de caméras, capteurs, contrôleurs supplémentaires possible à tout moment. L\'application mobile et le hub central reconnaissent automatiquement les nouveaux composants après pairing. Coût d\'extension : ~50-150$ par composant simple, ~300-500$ par caméra IP additionnelle avec configuration.' },
    { q: 'Que se passe-t-il si Symloop arrête son activité dans 5 ans ?', a: 'L\'architecture sovereign-deployment signifie que le hub on-premise continue à tourner sans connexion à un cloud Symloop. Le code source est transféré au client au Go-Live, donc même si Symloop disparaît, un autre intégrateur peut reprendre la maintenance. Aucune dépendance à une infrastructure tierce qui pourrait disparaître.' },
    { q: 'Le contrôle vocal local marche-t-il vraiment sans cloud ?', a: 'Oui. Symloop utilise un modèle de reconnaissance vocale on-premise (basé sur Whisper open-source fine-tuned pour français + arabe maghrébin) qui tourne sur le hub central — pas de transmission audio vers Apple Siri, Google Assistant ou Amazon Alexa. Latence légèrement supérieure aux solutions cloud (300-800ms versus 200-400ms) mais aucune donnée vocale ne quitte la villa.' },
  ],
  en: [
    { q: 'What is the total cost of Symloop smart home versus Honeywell+Dubai integrator?', a: 'For an average 200-400m² villa over 10 years: Symloop $5-13K total ($3-8K initial + $200-500/year optional). Honeywell+Lutron+Crestron via Dubai integrator $30-55K total ($15-25K initial + mandatory $1.5-3K/year recurring).' },
    { q: 'Is Symloop ESP32 hardware as reliable as Honeywell or Lutron?', a: 'For residential smart-home components (HVAC sensors, LED controllers, central hub, non-industrial IP cameras), Symloop industrial IP65 ESP32 is amply sufficient and already deployed in hundreds of buildings. For critical components where Honeywell or Lutron have real superiority (Yale/Schlage high-security motorized locks, certified smoke detectors), Symloop integrates the original hardware directly — you get the Yale component where it matters.' },
    { q: 'Can an existing Symloop installation be extended after Go-Live?', a: 'Yes. The architecture is modular: adding cameras, sensors, additional controllers is possible at any time. The mobile app and central hub automatically recognize new components after pairing. Extension cost: ~$50-150 per simple component, ~$300-500 per additional IP camera with configuration.' },
    { q: 'What happens if Symloop stops operating in 5 years?', a: 'Sovereign-deployment architecture means the on-premise hub continues to run without connection to a Symloop cloud. Source code is transferred to the client at Go-Live, so even if Symloop disappears, another integrator can take over maintenance. No dependency on third-party infrastructure that could vanish.' },
    { q: 'Does local voice control really work without cloud?', a: 'Yes. Symloop uses an on-premise voice-recognition model (based on Whisper open-source fine-tuned for French + Maghrebi Arabic) running on the central hub — no audio transmission to Apple Siri, Google Assistant or Amazon Alexa. Latency slightly higher than cloud solutions (300-800ms versus 200-400ms) but no voice data leaves the villa.' },
  ],
  ar: [
    { q: 'ما إجمالي تكلفة المنزل الذكي من Symloop مقابل Honeywell+متكامل دبي؟', a: 'لفيلا متوسطة 200-400م² على 10 سنوات: Symloop 5-13 ألف دولار إجمالاً. Honeywell+Lutron+Crestron عبر متكامل دبي 30-55 ألف دولار إجمالاً.' },
    { q: 'هل هاردوير Symloop ESP32 موثوق مثل Honeywell أو Lutron؟', a: 'لمكونات المنزل الذكي السكنية، Symloop ESP32 صناعي IP65 كافٍ تماماً. للمكونات الحرجة، يدمج Symloop الهاردوير الأصلي مباشرة.' },
    { q: 'هل يمكن توسيع تركيب Symloop موجود بعد Go-Live؟', a: 'نعم. البنية معيارية: إضافة كاميرات ومستشعرات وتحكّمات إضافية ممكنة في أي وقت. تكلفة التوسيع: ~50-150 دولاراً لكل مكوّن بسيط.' },
    { q: 'ماذا يحدث إذا توقّف Symloop عن العمل في 5 سنوات؟', a: 'بنية sovereign-deployment تعني أن المحور المحلي يستمرّ في العمل بدون اتصال بسحابة Symloop. كود المصدر منقول للعميل عند Go-Live.' },
    { q: 'هل التحكّم الصوتي المحلي يعمل فعلاً بدون سحابة؟', a: 'نعم. يستخدم Symloop نموذج تعرّف صوتي in-premise يعمل على المحور المركزي. لا توجد بيانات صوتية تغادر الفيلا.' },
  ],
};

const iconMap = { Lock, Lightbulb, Thermometer, Smartphone, Eye, Battery };

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
    image: ['https://symloop.com/blog/cover-smart-home-libye-mauritanie-mali.jpg'],
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    author: { '@type': 'Organization', name: 'Symloop' },
    publisher: { '@type': 'Organization', name: 'Symloop', logo: { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' } },
    mainEntityOfPage: 'https://symloop.com/blog/maison-intelligente-smart-home-libye-mauritanie-mali-2026/',
    about: [
      { '@type': 'Thing', name: 'Smart home Africa' },
      { '@type': 'Thing', name: 'Residential automation' },
      { '@type': 'Thing', name: 'Home AI security camera' },
      { '@type': 'Thing', name: 'Biometric home access' },
      { '@type': 'Place', name: 'Tripoli' },
      { '@type': 'Place', name: 'Nouakchott' },
      { '@type': 'Place', name: 'Bamako' },
      { '@type': 'Place', name: 'Misrata' },
    ],
    audience: { '@type': 'BusinessAudience', audienceType: 'Luxury residential developers, gated-community operators, upper-middle-class homeowners, diaspora-returnee villa buyers in Libya, Mauritania, Mali' },
  };

  const bc = [
    { name: 'Home', url: 'https://symloop.com/' },
    { name: 'Blog', url: 'https://symloop.com/blog/' },
    { name: c.title, url: 'https://symloop.com/blog/maison-intelligente-smart-home-libye-mauritanie-mali-2026/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} — Symloop`}
        description={c.dek}
        keywords="maison intelligente Libye, smart home Libye, smart home Mauritanie, smart home Mali, domotique Tripoli, domotique Nouakchott, domotique Bamako, maison intelligente Misrata, smart home Africa, residential automation Libya, residential automation Mauritania, residential automation Mali, Honeywell alternative Africa, Lutron alternative, Crestron alternative, smart home Tuya alternative, sécurité villa Tripoli, sécurité villa Nouakchott, sécurité villa Bamako, caméra IA villa, biometric villa access, accès biométrique villa, gestion énergie villa, optimisation CVC villa désert, smart home Maghreb, smart home Sahel, ESP32 home automation, domotique sahélienne, automatisation résidentielle Afrique, smart home sovereign deployment, application maison français arabe"
        type="article"
        structuredData={ld}
        faq={faq}
        breadcrumbs={bc}
        image="/blog/cover-smart-home-libye-mauritanie-mali.jpg"
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
            <Image src="/blog/cover-smart-home-libye-mauritanie-mali.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover" />
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
                const Icon = iconMap[item.icon] || Lock;
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
