// ============================================================================
// SYMLOOP BLOG — Hotel PMS for Libya + Mauritania + Mali 2026. Target
// buyers: Corinthia / Al Waddan / Rixos / Sahara Hotel / Azalaï hotel-
// group directors of IT and operations. FR-primary keywords: "logiciel
// hôtel", "PMS hôtel", "channel manager hôtel", "Oracle Opera alternative",
// "logiciel gestion hôtel Tripoli / Nouakchott / Bamako".
// ============================================================================

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, MessageCircle, Calendar, CreditCard, Globe, Users, BedDouble, BarChart3 } from 'lucide-react';
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

// Per-room-per-year cost comparison chart. Client-only mount.
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
              <bdi>${b.value}</bdi>
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
    kind: 'Guide PMS Afrique du Nord-Ouest',
    title: 'Logiciel PMS hôtels pour Libye, Mauritanie et Mali — 2026.',
    dek: 'Pour les directions IT et opérations des groupes hôteliers Corinthia, Al Waddan, Rixos, Sahara Hotel, Azalaï et leurs équivalents indépendants : comment livrer une plateforme PMS souveraine, AI-native, multi-propriétés à Tripoli, Benghazi, Nouakchott et Bamako, sans payer 600$ par chambre par an à Oracle Opera.',
    publishedAt: 'Mai 2026',
    readTime: '13 min de lecture',
    author: 'Symloop',
    chart: {
      label: 'Coût licence PMS · par chambre par an',
      before: { label: 'Oracle Opera + Sabre', value: 600 },
      after: { label: 'Symloop PMS souverain', value: 90 },
      deltaLabel: '–85% · pas de licence cloud · code source possédé',
      note: 'Comparaison composite : Oracle Opera Cloud (~400-800$ par chambre par an en licence + intégrations Sabre / OTAs) vs Symloop PMS sovereign-deployment (amortissement initial + support optionnel 60-120$ par chambre par an).',
    },
    intro: [
      'Le PMS (Property Management System) est le système nerveux d\'un hôtel — il gère les réservations, le check-in/check-out, la facturation, les profils clients, les paiements, l\'allocation des chambres, l\'intégration channel manager vers les OTAs, et de plus en plus la tarification dynamique pilotée par IA. **C\'est aussi le système le plus mal servi par les éditeurs internationaux dans les marchés libyens, mauritaniens et maliens.**',
      'Oracle Opera est le standard mondial, mais il est tarifé 400-800$ par chambre par an en licence pure, exige un partenaire intégrateur certifié à six chiffres pour le déploiement, et n\'a aucun support local dans les capitales libyennes, mauritaniennes ou maliennes. **Corinthia Tripoli, Al Waddan, Rixos Tripoli, Sahara Hotel & Casino Nouakchott, Azalaï Bamako paient des prix européens pour un produit qui ne parle pas leur langue opérationnelle.**',
      'Cet article explique : **ce qu\'un PMS moderne doit livrer en 2026 pour un hôtel libyen, mauritanien ou malien, pourquoi le coût par chambre par an doit être à 60-120$ et non à 400-800$, et comment Symloop construit une plateforme PMS souveraine multi-propriétés avec UI français + arabe + bambara/hassaniya selon le pays.**',
    ],
    sections: [
      {
        heading: 'Ce qu\'un PMS moderne doit livrer en 2026',
        body: [
          'Le PMS hôtelier de 2026 intègre **six fonctions opérationnelles** dans une seule plateforme : (1) gestion des réservations multi-canaux (direct, OTA, GDS, corporate), (2) check-in/check-out avec capture biométrique et paiement intégré, (3) facturation et AR/AP multi-devises (essentiel en Libye où les paiements multi-devises sont la norme), (4) channel manager temps réel vers Booking.com, Expedia, Trivago plus les GDS pour les voyageurs corporate et diplomatiques, (5) F&B/POS intégré avec gestion des comp rooms et room-service, (6) gestion housekeeping et maintenance avec mobile app pour les équipes terrain.',
          'En plus, le PMS 2026 doit livrer **trois capacités IA différenciatrices** que les éditeurs traditionnels ne livrent qu\'en surcharge premium : tarification dynamique multi-segments avec apprentissage des patterns saisonniers spécifiques au marché (par exemple, les sommets UA à Bamako qui poussent l\'occupation de 40% à 95%), prévision de demande à 13 et 52 semaines pour calage budget et staffing, et scoring de churn-et-renouvellement pour les comptes corporate pour repérer les bookers à risque de migration vers la concurrence.',
          'Symloop livre tout cela en standard sans surcharge — parce que **l\'AI-native est dans l\'architecture, pas dans un module additionnel facturé séparément**.',
        ],
      },
      {
        heading: 'Pourquoi Oracle Opera est mal calibré pour Tripoli, Nouakchott et Bamako',
        body: [
          'Oracle Opera Cloud — la version moderne SaaS d\'Opera — est tarifée par chambre par an avec des planchers minimum qui rendent économiquement difficile l\'adoption pour un hôtel indépendant de 50-100 chambres. **Pour un Corinthia Tripoli de 300 chambres, la licence Opera Cloud coûte 120-240K$/an. Pour un Sahara Hotel & Casino Nouakchott de 150 chambres, 60-120K$/an. Pour Azalaï Bamako de 100 chambres, 40-80K$/an.** Ces coûts sont entièrement libellés en USD ou EUR et augmentent annuellement à l\'index Oracle.',
          'Plus problématique opérationnellement : **Opera n\'a pas d\'interface arabe native** (l\'arabe est ajouté en surcharge avec traduction approximative), **aucun support en heures Libye/Mauritanie/Mali**, **aucune intégration native avec les banques locales** pour les paiements clients (Sahara Bank, Bank of Commerce & Development Libya, Banque Mauritanienne pour le Commerce International, BMCE Mali, Atlantique Mali), et **un modèle de données qui rend impossible la personnalisation pour les workflows diplomatiques** (room blocks pour délégations UA, comp rooms VIP avec protocole officiel, intégration sécurité visit-coordination).',
          'Le PMS Symloop est conçu **autour de cette réalité opérationnelle** : multi-langue native (arabe + français + anglais, et bambara/hassaniya selon le pays), intégration directe avec les banques locales pour paiements, support 7j/7 en heure Algiers/Tripoli/Nouakchott/Bamako, et architecture personnalisable pour les workflows diplomatiques que tout hôtel haut-de-gamme de la région doit gérer.',
        ],
      },
      {
        heading: 'L\'architecture multi-propriétés — pour Corinthia, Azalaï, et les chaînes émergentes',
        body: [
          'Pour les groupes hôteliers — **Corinthia Group avec ses propriétés Tripoli + diaspora-européenne + projets africains, Azalaï Hotels Group avec ses propriétés à Bamako + Dakar + Abidjan + Conakry + Ouagadougou + Nouakchott + Cotonou, et les chaînes émergentes des Émirats et Arabie Saoudite entrant en Afrique** — le PMS doit être nativement multi-propriétés, avec hiérarchie corporate et reporting consolidé temps réel.',
          'L\'architecture Symloop multi-propriétés : **une seule instance plateforme avec sub-tenanting par propriété, partage configurable du customer data (avec ou sans cross-property guest profiles selon les choix de gouvernance données du groupe), reporting consolidé temps réel sur revenue, occupation, ADR, RevPAR, et un single sign-on pour les équipes corporate**. Chaque propriété conserve son operating model spécifique tout en s\'inscrivant dans le pilotage corporate.',
          '**Pour Azalaï spécifiquement** — qui opère dans 7 pays avec des réglementations bancaires, fiscales et opérationnelles différentes — la capacité Symloop à livrer un déploiement progressif (Bamako flagship d\'abord, puis Dakar, Abidjan, etc.) avec des configurations par pays mais une plateforme commune est exactement ce que les déploiements Opera ou Sabre ne livrent pas sans plusieurs sous-projets parallèles.',
        ],
      },
      {
        heading: 'Comment commencer — feuille de route 6 mois pour une propriété',
        body: [
          '**Mois 1 : couche données.** Modèle propriété, inventaire chambres, plans tarifaires, structure taxes et frais alignée aux réglementations libyennes/mauritaniennes/maliennes, hiérarchie multi-propriétés si applicable. Livrable : data layer en production avec import des données historiques.',
          '**Mois 2 : PMS core.** Réservations, check-in/check-out, facturation, profils clients, AR/AP multi-devises. Formation initiale équipe réception et night-audit.',
          '**Mois 3 : channel manager + booking engine.** Intégration Booking.com, Expedia, Trivago, GDS pour comptes corporate. Test parité tarifaire et test cancellation patterns.',
          '**Mois 4 : F&B et POS intégration.** Intégration avec POS restaurant et room-service, gestion comp rooms et VIP protocol.',
          '**Mois 5 : housekeeping, maintenance, fidélité.** Mobile apps pour équipes terrain, intégration avec le programme fidélité du groupe.',
          '**Mois 6 : couche IA.** Tarification dynamique multi-segments calibrée sur 6 mois de données baseline, prévision demande, scoring renouvellement comptes corporate. Go-Live full et transfert code source au client.',
          'Coût total typique : **1,5-3M$ pour une propriété 100-300 chambres**. Payback typique 18-24 mois versus licence Opera Cloud + intégrations Sabre.',
        ],
      },
      {
        heading: 'Le différenciateur IA — tarification dynamique pour les sommets diplomatiques',
        body: [
          '**Bamako accueille 4-6 sommets UA/ECOWAS par an. Pendant ces semaines, l\'occupation hôtelière passe de 40-50% à 95%+** à des tarifs significativement élevés. Tripoli accueille des conférences pétrole et gaz récurrentes avec des dynamiques similaires. Nouakchott a un cycle business-traveler mining régulier plus des événements ponctuels (sommets, conférences).',
          'Les PMS internationaux (Opera, Sabre Sync, Mews, Cloudbeds) ont des moteurs de tarification dynamique conçus pour les marchés européens et américains avec des cycles de demande relativement stables. **Ils ne savent pas modéliser correctement le pattern dual-mode demande business-stable + spikes diplomatiques** — résultat, les hôtels qui les utilisent laissent 15-25% de revenus sur la table pendant les semaines de pic et sur-tarifent pendant les semaines normales.',
          'Le moteur de tarification dynamique Symloop est entraîné sur les patterns historiques spécifiques à chaque marché — **les 4-6 sommets UA par an à Bamako, les conférences pétrole-gaz Tripoli, les cycles mining Nouakchott** — et apprend en continu. Capture typique : **15-25% de revenus additionnels par an** versus un PMS sans tarification dynamique calibrée localement.',
        ],
      },
    ],
    useCases: {
      heading: '6 capacités PMS livrées en standard',
      items: [
        { icon: 'Calendar',   label: 'Réservations multi-canaux',    sub: 'Direct + OTA + GDS + corporate · channel manager intégré' },
        { icon: 'CreditCard', label: 'Facturation multi-devises',    sub: 'AR/AP intégrée · banques locales · LYD/MRU/XOF/USD/EUR' },
        { icon: 'Globe',      label: 'UI multi-langue native',       sub: 'Arabe + français + anglais + bambara/hassaniya' },
        { icon: 'Users',      label: 'Workflows diplomatiques',      sub: 'Room blocks UA/ECOWAS · VIP protocol · sécurité' },
        { icon: 'BedDouble',  label: 'Housekeeping mobile',          sub: 'Apps terrain temps réel · maintenance ticketing' },
        { icon: 'BarChart3',  label: 'Tarification dynamique IA',    sub: 'Calibrée sommets locaux · +15-25% revenu' },
      ],
    },
    cta: {
      eyebrow: 'Parlez à un ingénieur PMS',
      title: 'Vous opérez un hôtel ou un groupe hôtelier en Libye, Mauritanie ou Mali ? Décrivez votre stack actuel en 5 minutes — nous cadrons sous 2 semaines.',
    },
    related: {
      insights: [
        { key: 'libya',       name: 'Libye 2026 — partenaire IA pour économie de reconstruction' },
        { key: 'mauritania',  name: 'Mauritanie 2026 — Atlantic gateway + boom minier' },
        { key: 'mali',        name: 'Mali 2026 — Bamako, or sahélien et infrastructure diplomatique' },
      ],
      services: [
        { key: 'software-engineering', name: 'Ingénierie logicielle' },
        { key: 'ai',                   name: 'Intelligence Artificielle' },
      ],
    },
  },

  en: {
    kind: 'PMS guide — North-West Africa',
    title: 'Hotel PMS software for Libya, Mauritania and Mali — 2026.',
    dek: 'For IT and operations leadership at Corinthia, Al Waddan, Rixos, Sahara Hotel, Azalaï and their independent peers: how to ship a sovereign, AI-native, multi-property PMS platform in Tripoli, Benghazi, Nouakchott and Bamako, without paying $600 per room per year to Oracle Opera.',
    publishedAt: 'May 2026',
    readTime: '13 min read',
    author: 'Symloop',
    chart: {
      label: 'PMS license cost · per room per year',
      before: { label: 'Oracle Opera + Sabre', value: 600 },
      after: { label: 'Symloop sovereign PMS', value: 90 },
      deltaLabel: '–85% · no cloud license · source code owned',
      note: 'Composite comparison: Oracle Opera Cloud (~$400-800/room/year licensing + Sabre/OTA integrations) vs Symloop PMS sovereign-deployment (amortized initial + optional support $60-120/room/year).',
    },
    intro: [
      'The PMS (Property Management System) is the nervous system of a hotel — it handles reservations, check-in/check-out, billing, guest profiles, payments, room allocation, channel-manager integration to OTAs, and increasingly AI-driven dynamic pricing. **It is also the system most poorly served by international vendors in Libyan, Mauritanian and Malian markets.**',
      'Oracle Opera is the global standard, but it is priced at $400-800 per room per year in pure licensing, requires a six-figure certified integrator partnership for deployment, and has no local support in Libyan, Mauritanian or Malian capitals. **Corinthia Tripoli, Al Waddan, Rixos Tripoli, Sahara Hotel & Casino Nouakchott, Azalaï Bamako pay European prices for a product that doesn\'t speak their operational language.**',
      'This article explains: **what a modern PMS must deliver in 2026 for a Libyan, Mauritanian or Malian hotel, why per-room-per-year cost should be $60-120 not $400-800, and how Symloop builds a sovereign multi-property PMS platform with native Arabic + French + English + bambara/hassaniya UI per country.**',
    ],
    sections: [
      {
        heading: 'What a modern PMS must deliver in 2026',
        body: [
          'The 2026 hotel PMS integrates **six operational functions in one platform**: (1) multi-channel reservation management (direct, OTA, GDS, corporate), (2) check-in/check-out with biometric capture and integrated payments, (3) multi-currency billing and AR/AP (essential in Libya where multi-currency payments are the norm), (4) real-time channel manager to Booking.com, Expedia, Trivago plus GDS for corporate and diplomatic travelers, (5) integrated F&B/POS with comp-room and room-service management, (6) housekeeping and maintenance management with mobile apps for field teams.',
          'Plus, the 2026 PMS must deliver **three differentiating AI capabilities** that traditional vendors only offer as premium add-ons: multi-segment dynamic pricing learning seasonal patterns specific to the market (e.g., AU summits in Bamako pushing occupancy from 40% to 95%), 13-week and 52-week demand forecasting for budget and staffing alignment, and corporate-account churn-and-renewal scoring to spot bookers at risk of migration.',
          'Symloop delivers all of this as standard with no surcharge — because **AI-native is in the architecture, not in an add-on billed separately**.',
        ],
      },
      {
        heading: 'Why Oracle Opera is mis-calibrated for Tripoli, Nouakchott and Bamako',
        body: [
          'Oracle Opera Cloud — the modern SaaS version of Opera — is priced per room per year with minimum floors that make adoption economically difficult for an independent 50-100 room hotel. **For a 300-room Corinthia Tripoli, Opera Cloud licensing costs $120-240K/year. For a 150-room Sahara Hotel & Casino Nouakchott, $60-120K/year. For 100-room Azalaï Bamako, $40-80K/year.** These costs are fully USD/EUR denominated and increase annually at Oracle\'s index.',
          'Operationally more problematic: **Opera has no native Arabic interface** (Arabic is added as overlay with approximate translation), **no support in Libya/Mauritania/Mali business hours**, **no native integration with local banks** for guest payments (Sahara Bank, Bank of Commerce & Development Libya, Banque Mauritanienne pour le Commerce International, BMCE Mali, Atlantique Mali), and **a data model that makes customization for diplomatic workflows impossible** (room blocks for AU delegations, comp rooms with official VIP protocol, visit-coordination security integration).',
          'The Symloop PMS is designed **around this operational reality**: native multi-language (Arabic + French + English, plus bambara/hassaniya per country), direct integration with local banks for payments, 7-days-a-week support in Algiers/Tripoli/Nouakchott/Bamako business hours, and customizable architecture for the diplomatic workflows every regional luxury hotel must handle.',
        ],
      },
      {
        heading: 'Multi-property architecture — for Corinthia, Azalaï, and emerging chains',
        body: [
          'For hotel groups — **Corinthia Group with its Tripoli + European-diaspora + African-project properties, Azalaï Hotels Group with its Bamako + Dakar + Abidjan + Conakry + Ouagadougou + Nouakchott + Cotonou properties, and emerging Emirati and Saudi chains entering Africa** — the PMS must be natively multi-property with corporate hierarchy and real-time consolidated reporting.',
          'Symloop multi-property architecture: **single platform instance with per-property sub-tenanting, configurable customer-data sharing (with or without cross-property guest profiles based on the group\'s data-governance choices), real-time consolidated reporting on revenue, occupancy, ADR, RevPAR, and single sign-on for corporate teams**. Each property retains its specific operating model while fitting into corporate management.',
          '**For Azalaï specifically** — operating in 7 countries with different banking, fiscal and operational regulations — Symloop\'s ability to deliver a phased deployment (Bamako flagship first, then Dakar, Abidjan, etc.) with per-country configurations on a common platform is exactly what Opera or Sabre deployments do not deliver without multiple parallel sub-projects.',
        ],
      },
      {
        heading: 'How to start — 6-month per-property roadmap',
        body: [
          '**Month 1: data layer.** Property model, room inventory, rate plans, tax/fee structure aligned to Libyan/Mauritanian/Malian regulation, multi-property hierarchy if applicable. Deliverable: data layer in production with historical data import.',
          '**Month 2: core PMS.** Reservations, check-in/check-out, billing, guest profile, multi-currency AR/AP. Initial training for front desk and night-audit teams.',
          '**Month 3: channel manager + booking engine.** Booking.com, Expedia, Trivago integration, GDS for corporate accounts. Rate parity testing and cancellation pattern testing.',
          '**Month 4: F&B and POS integration.** Restaurant and room-service POS integration, comp-room and VIP-protocol management.',
          '**Month 5: housekeeping, maintenance, loyalty.** Mobile apps for field teams, group-loyalty program integration.',
          '**Month 6: AI layer.** Multi-segment dynamic pricing calibrated on 6 months of baseline data, demand forecasting, corporate-account renewal scoring. Full Go-Live and source-code transfer to client.',
          'Typical total cost: **$1.5-3M for a 100-300 room property**. Typical payback 18-24 months versus Opera Cloud + Sabre integrations licensing.',
        ],
      },
      {
        heading: 'The AI differentiator — dynamic pricing for diplomatic summits',
        body: [
          '**Bamako hosts 4-6 AU/ECOWAS summits per year. During these weeks, hotel occupancy goes from 40-50% to 95%+** at substantially elevated rates. Tripoli hosts recurring oil-and-gas conferences with similar dynamics. Nouakchott has a regular mining business-traveler cycle plus episodic events.',
          'International PMS systems (Opera, Sabre Sync, Mews, Cloudbeds) have dynamic-pricing engines designed for European and US markets with relatively stable demand cycles. **They cannot model the dual-mode business-stable + diplomatic-spike pattern correctly** — result, hotels using them leave 15-25% of revenue on the table during spike weeks and over-price during normal weeks.',
          'The Symloop dynamic-pricing engine is trained on each market\'s historical patterns — **the 4-6 annual AU summits in Bamako, Tripoli oil-and-gas conferences, Nouakchott mining cycles** — and continuously learns. Typical capture: **15-25% additional revenue per year** versus a PMS without locally-calibrated dynamic pricing.',
        ],
      },
    ],
    useCases: {
      heading: '6 PMS capabilities delivered as standard',
      items: [
        { icon: 'Calendar',   label: 'Multi-channel reservations',    sub: 'Direct + OTA + GDS + corporate · channel manager integrated' },
        { icon: 'CreditCard', label: 'Multi-currency billing',        sub: 'AR/AP integrated · local banks · LYD/MRU/XOF/USD/EUR' },
        { icon: 'Globe',      label: 'Native multi-language UI',      sub: 'Arabic + French + English + bambara/hassaniya' },
        { icon: 'Users',      label: 'Diplomatic workflows',          sub: 'AU/ECOWAS room blocks · VIP protocol · security' },
        { icon: 'BedDouble',  label: 'Housekeeping mobile',           sub: 'Real-time field apps · maintenance ticketing' },
        { icon: 'BarChart3',  label: 'AI dynamic pricing',            sub: 'Locally-calibrated · +15-25% revenue' },
      ],
    },
    cta: {
      eyebrow: 'Talk to a PMS engineer',
      title: 'Operating a hotel or hotel group in Libya, Mauritania or Mali? Describe your current stack in 5 minutes — we scope within 2 weeks.',
    },
    related: {
      insights: [
        { key: 'libya',       name: 'Libya 2026 — reconstruction-economy AI partner brief' },
        { key: 'mauritania',  name: 'Mauritania 2026 — Atlantic gateway + mining boom' },
        { key: 'mali',        name: 'Mali 2026 — Bamako, Sahelian gold + diplomatic-hub infrastructure' },
      ],
      services: [
        { key: 'software-engineering', name: 'Software Engineering' },
        { key: 'ai',                   name: 'Artificial Intelligence' },
      ],
    },
  },

  ar: {
    kind: 'دليل PMS لشمال غرب إفريقيا',
    title: 'برمجيات PMS للفنادق في ليبيا وموريتانيا ومالي — 2026.',
    dek: 'لقيادة تكنولوجيا المعلومات والعمليات في Corinthia و Al Waddan و Rixos و Sahara Hotel و Azalaï: كيف تشحن منصة PMS سيادية، AI-native، متعدّدة العقارات في طرابلس وبنغازي ونواكشوط وباماكو، دون دفع 600 دولار لكل غرفة سنوياً لـ Oracle Opera.',
    publishedAt: 'مايو 2026',
    readTime: '13 دقيقة قراءة',
    author: 'سيملوب',
    chart: {
      label: 'تكلفة ترخيص PMS · لكل غرفة في السنة',
      before: { label: 'Oracle Opera + Sabre', value: 600 },
      after: { label: 'Symloop PMS سيادي', value: 90 },
      deltaLabel: '–85٪ · بدون ترخيص سحابي · كود مصدر مملوك',
      note: 'مقارنة مركّبة: Oracle Opera Cloud (~400-800 دولار/غرفة/سنة) مقابل Symloop PMS sovereign-deployment.',
    },
    intro: [
      'PMS هو الجهاز العصبي للفندق — يدير الحجوزات وتسجيل الوصول/المغادرة والفوترة وملفات الضيوف والمدفوعات وتخصيص الغرف وتكامل channel manager إلى OTAs، وبشكل متزايد التسعير الديناميكي بالذكاء الاصطناعي. **إنه أيضاً النظام الأسوأ خدمة من البائعين الدوليين في الأسواق الليبية والموريتانية والمالية.**',
      'Oracle Opera هو المعيار العالمي، لكنّه مسعّر 400-800 دولار لكل غرفة سنوياً في الترخيص فقط. **Corinthia طرابلس و Al Waddan و Rixos و Sahara Hotel نواكشوط و Azalaï باماكو يدفعون أسعاراً أوروبية لمنتج لا يتحدّث لغتهم التشغيلية.**',
      'هذا المقال يشرح: **ما يجب أن يقدّمه PMS حديث في 2026، لماذا يجب أن تكون التكلفة لكل غرفة سنوياً 60-120 دولاراً وليس 400-800 دولاراً، وكيف يبني Symloop منصة PMS سيادية متعدّدة العقارات.**',
    ],
    sections: [
      {
        heading: 'ما يجب أن يقدّمه PMS حديث في 2026',
        body: [
          'PMS فنادق 2026 يدمج **ست وظائف تشغيلية في منصة واحدة**: إدارة حجوزات متعدّدة القنوات، تسجيل وصول/مغادرة، فوترة AR/AP متعدّدة العملات، channel manager في الوقت الفعلي، تكامل F&B/POS، إدارة housekeeping وصيانة.',
          'بالإضافة، يجب على PMS 2026 تقديم **ثلاث قدرات ذكاء اصطناعي مميّزة**: تسعير ديناميكي متعدّد الشرائح، توقع الطلب 13 و52 أسبوعاً، تسجيل churn للحسابات التجارية.',
          'يقدّم Symloop كلّ هذا كمعيار بدون رسوم إضافية لأن **AI-native في البنية، ليس في إضافة تُفوتر منفصلة**.',
        ],
      },
      {
        heading: 'لماذا Oracle Opera معاير بشكل خاطئ لطرابلس ونواكشوط وباماكو',
        body: [
          'Oracle Opera Cloud — النسخة الحديثة SaaS من Opera — مسعّرة لكل غرفة سنوياً. **لـ Corinthia طرابلس 300 غرفة، ترخيص Opera Cloud يكلّف 120-240 ألف دولار/سنة.**',
          'الأكثر إشكالية تشغيلياً: **Opera ليس لديه واجهة عربية أصلية**، **لا دعم في ساعات عمل ليبيا/موريتانيا/مالي**، **لا تكامل أصلي مع البنوك المحلية**.',
          'PMS من Symloop مصمّم **حول هذا الواقع التشغيلي**: متعدّد اللغات أصلياً، تكامل مباشر مع البنوك المحلية، دعم 7 أيام/أسبوع، وبنية قابلة للتخصيص.',
        ],
      },
      {
        heading: 'بنية متعدّدة العقارات — لـ Corinthia و Azalaï والسلاسل الناشئة',
        body: [
          'لمجموعات الفنادق، يجب أن يكون PMS متعدّد العقارات أصلياً مع هرمية شركة وتقارير موحّدة في الوقت الفعلي.',
          'بنية Symloop متعدّدة العقارات: **مثيل منصة واحد مع sub-tenanting لكل عقار، مشاركة بيانات عملاء قابلة للتكوين، تقارير موحّدة في الوقت الفعلي**.',
          '**لـ Azalaï تحديداً** — تعمل في 7 بلدان مع لوائح مختلفة — قدرة Symloop على تسليم نشر متدرّج هي بالضبط ما لا تقدّمه نشرات Opera أو Sabre.',
        ],
      },
      {
        heading: 'كيف تبدأ — خارطة طريق 6 أشهر لكل عقار',
        body: [
          '**الشهر 1: طبقة البيانات.** نموذج العقار، جرد الغرف، خطط الأسعار.',
          '**الشهر 2: PMS الأساسي.** حجوزات، تسجيل وصول/مغادرة، فوترة، ملف ضيف.',
          '**الشهر 3: channel manager + booking engine.** تكامل Booking.com وExpedia.',
          '**الشهر 4: تكامل F&B وPOS.**',
          '**الشهر 5: housekeeping وصيانة وولاء.**',
          '**الشهر 6: طبقة الذكاء الاصطناعي.** تسعير ديناميكي، توقع الطلب، تسجيل تجديد. Go-Live كامل ونقل كود المصدر.',
          'التكلفة الإجمالية النموذجية: **1.5-3 مليون دولار لعقار 100-300 غرفة**. الاسترداد النموذجي 18-24 شهراً.',
        ],
      },
      {
        heading: 'المُميّز بالذكاء الاصطناعي — التسعير الديناميكي للقمم الدبلوماسية',
        body: [
          '**باماكو تستضيف 4-6 قمم UA/ECOWAS سنوياً. خلال هذه الأسابيع، يرتفع الإشغال الفندقي من 40-50٪ إلى 95٪+** بأسعار مرتفعة بشكل كبير.',
          'أنظمة PMS الدولية لا يمكنها نمذجة نمط الطلب ثنائي الوضع بشكل صحيح — النتيجة، **الفنادق التي تستخدمها تترك 15-25٪ من الإيرادات على الطاولة**.',
          'محرّك تسعير Symloop الديناميكي مدرَّب على الأنماط التاريخية لكل سوق — **القمم الـ 4-6 السنوية في باماكو، مؤتمرات النفط في طرابلس، دورات التعدين في نواكشوط**. الالتقاط النموذجي: **15-25٪ إيرادات إضافية سنوياً**.',
        ],
      },
    ],
    useCases: {
      heading: '6 قدرات PMS تُسلَّم كمعيار',
      items: [
        { icon: 'Calendar',   label: 'حجوزات متعدّدة القنوات',          sub: 'مباشر + OTA + GDS · channel manager مدمج' },
        { icon: 'CreditCard', label: 'فوترة متعدّدة العملات',           sub: 'AR/AP · بنوك محلية · LYD/MRU/XOF/USD/EUR' },
        { icon: 'Globe',      label: 'واجهة متعدّدة اللغات أصلية',      sub: 'عربي + فرنسي + إنجليزي + بمبارا/حسانية' },
        { icon: 'Users',      label: 'سير عمل دبلوماسي',                sub: 'حجوزات UA/ECOWAS · بروتوكول VIP · أمن' },
        { icon: 'BedDouble',  label: 'Housekeeping موبايل',             sub: 'تطبيقات ميدانية · تذاكر صيانة' },
        { icon: 'BarChart3',  label: 'تسعير ديناميكي بالذكاء الاصطناعي', sub: 'معاير محلياً · +15-25٪ إيرادات' },
      ],
    },
    cta: {
      eyebrow: 'تحدّث إلى مهندس PMS',
      title: 'تشغّل فندقاً أو مجموعة فنادق في ليبيا أو موريتانيا أو مالي؟ صف حزمتك الحالية في 5 دقائق.',
    },
    related: {
      insights: [
        { key: 'libya',       name: 'ليبيا 2026 — شريك الذكاء الاصطناعي لاقتصاد إعادة الإعمار' },
        { key: 'mauritania',  name: 'موريتانيا 2026 — بوابة الأطلسي + طفرة التعدين' },
        { key: 'mali',        name: 'مالي 2026 — باماكو والذهب الساحلي والبنية التحتية الدبلوماسية' },
      ],
      services: [
        { key: 'software-engineering', name: 'هندسة البرمجيات' },
        { key: 'ai',                   name: 'الذكاء الاصطناعي' },
      ],
    },
  },
};

const FAQ = {
  fr: [
    { q: 'Quel est le coût total d\'un déploiement PMS Symloop versus Oracle Opera ?', a: 'Pour un hôtel 150-300 chambres : Symloop 1,5-3M$ initial + 60-120$ par chambre par an optionnel = 100K$-3,4M$ sur 10 ans. Oracle Opera Cloud 200K$-600K$ initial + 60K$-240K$/an récurrent = 800K$-3M$ sur 10 ans, sans propriété code source.' },
    { q: 'Symloop PMS peut-il s\'intégrer avec mon système ERP / comptabilité existant ?', a: 'Oui. Symloop intègre avec SAP, Sage, Odoo, et les ERP locaux libyens/mauritaniens/maliens via APIs REST + webhook. Pour la facturation et le rapprochement bancaire, intégration native avec Sahara Bank, Bank of Commerce & Development Libya, BMCI, BNM, GBM, BMCE Mali, Atlantique Mali.' },
    { q: 'Le déploiement on-premise est-il vraiment nécessaire pour un hôtel ?', a: 'Pas systématiquement. Pour les hôtels de 50-200 chambres, le cloud souverain régional (Sonelgaz Cloud Algérie pour Libye et Mauritanie cross-border, data centers nationaux Mali quand disponibles) est généralement le bon choix. Pour les groupes hôteliers multi-propriétés avec exigences spécifiques de souveraineté données (Corinthia, Azalaï), on-premise dans le data center du groupe ou cloud privé est l\'option recommandée.' },
    { q: 'Symloop peut-il livrer une migration depuis Opera ou Sabre sans interruption opérationnelle ?', a: 'Oui — la migration suit un pattern de double-run : Symloop PMS tourne en parallèle d\'Opera/Sabre pendant 4-6 semaines, avec sync bidirectionnel des réservations et profils clients. Coupure finale après validation de 3 cycles complets check-in/check-out/billing. Aucune interruption opérationnelle pendant la migration.' },
    { q: 'Le moteur de tarification dynamique IA est-il vraiment supérieur à Opera Revenue Management ?', a: 'Sur les marchés libyens, mauritaniens et maliens spécifiquement : oui, parce que Opera Revenue Management est entraîné sur des patterns européens et US qui ne capturent pas les spikes diplomatiques UA/ECOWAS, les cycles oil-gas conferences à Tripoli, ou les patterns mining à Nouakchott. Le moteur Symloop est entraîné localement sur 6-12 mois de données baseline avant Go-Live et continue d\'apprendre en production. Capture typique : 15-25% de revenus additionnels par an.' },
  ],
  en: [
    { q: 'What is the total cost of a Symloop PMS deployment versus Oracle Opera?', a: 'For a 150-300 room hotel: Symloop $1.5-3M initial + $60-120/room/year optional = $100K-$3.4M over 10 years. Oracle Opera Cloud $200K-$600K initial + $60K-$240K/year recurring = $800K-$3M over 10 years, without source-code ownership.' },
    { q: 'Can Symloop PMS integrate with my existing ERP / accounting system?', a: 'Yes. Symloop integrates with SAP, Sage, Odoo, and local Libyan/Mauritanian/Malian ERPs via REST APIs + webhook. For billing and bank reconciliation, native integration with Sahara Bank, Bank of Commerce & Development Libya, BMCI, BNM, GBM, BMCE Mali, Atlantique Mali.' },
    { q: 'Is on-premise deployment really necessary for a hotel?', a: 'Not always. For 50-200 room hotels, regional sovereign cloud (Sonelgaz Cloud Algeria for cross-border Libya and Mauritania, Mali national data centers where available) is usually the right choice. For multi-property hotel groups with specific data-sovereignty requirements (Corinthia, Azalaï), on-premise in the group data center or private cloud is the recommended option.' },
    { q: 'Can Symloop deliver a migration from Opera or Sabre without operational interruption?', a: 'Yes — migration follows a double-run pattern: Symloop PMS runs in parallel with Opera/Sabre for 4-6 weeks, with bidirectional sync of reservations and guest profiles. Final cutover after validation of 3 complete check-in/check-out/billing cycles. No operational interruption during migration.' },
    { q: 'Is the AI dynamic-pricing engine really better than Opera Revenue Management?', a: 'On Libyan, Mauritanian and Malian markets specifically: yes, because Opera Revenue Management is trained on European and US patterns that do not capture AU/ECOWAS diplomatic spikes, Tripoli oil-gas conference cycles, or Nouakchott mining patterns. The Symloop engine is locally trained on 6-12 months of baseline data before Go-Live and continues learning in production. Typical capture: 15-25% additional revenue per year.' },
  ],
  ar: [
    { q: 'ما إجمالي تكلفة نشر Symloop PMS مقابل Oracle Opera؟', a: 'لفندق 150-300 غرفة: Symloop 1.5-3 مليون دولار مبدئي + 60-120$ لكل غرفة سنوياً اختياري. Oracle Opera Cloud 200-600 ألف دولار مبدئي + 60-240 ألف دولار سنوياً متكرر، بدون ملكية كود مصدر.' },
    { q: 'هل يمكن لـ Symloop PMS التكامل مع نظام ERP / المحاسبة الحالي؟', a: 'نعم. يتكامل Symloop مع SAP وSage وOdoo وERPs المحلية عبر REST APIs.' },
    { q: 'هل النشر في الموقع ضروري فعلاً لفندق؟', a: 'ليس دائماً. للفنادق 50-200 غرفة، السحابة السيادية الإقليمية هي عادة الخيار الصحيح.' },
    { q: 'هل يستطيع Symloop تسليم هجرة من Opera أو Sabre بدون انقطاع تشغيلي؟', a: 'نعم — تتّبع الهجرة نمط التشغيل المزدوج: Symloop PMS يعمل بالتوازي مع Opera/Sabre لمدّة 4-6 أسابيع.' },
    { q: 'هل محرّك التسعير الديناميكي بالذكاء الاصطناعي أفضل فعلاً من Opera Revenue Management؟', a: 'في الأسواق الليبية والموريتانية والمالية تحديداً: نعم. الالتقاط النموذجي: 15-25٪ إيرادات إضافية سنوياً.' },
  ],
};

const iconMap = { Calendar, CreditCard, Globe, Users, BedDouble, BarChart3 };

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
    image: ['https://symloop.com/blog/cover-pms-hotels-libye-mauritanie-mali.jpg'],
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    author: { '@type': 'Organization', name: 'Symloop' },
    publisher: { '@type': 'Organization', name: 'Symloop', logo: { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' } },
    mainEntityOfPage: 'https://symloop.com/blog/logiciel-pms-hotels-libye-mauritanie-mali-2026/',
    about: [
      { '@type': 'Thing', name: 'Hotel PMS software' },
      { '@type': 'Thing', name: 'Property Management System' },
      { '@type': 'Thing', name: 'Channel manager hotel' },
      { '@type': 'Thing', name: 'AI dynamic pricing hospitality' },
      { '@type': 'Organization', name: 'Corinthia Group' },
      { '@type': 'Organization', name: 'Al Waddan' },
      { '@type': 'Organization', name: 'Rixos Tripoli' },
      { '@type': 'Organization', name: 'Sahara Hotel Casino' },
      { '@type': 'Organization', name: 'Azalaï Hotels Group' },
    ],
    audience: { '@type': 'BusinessAudience', audienceType: 'Hotel directors of IT and operations, hotel group CIOs, hospitality executives in Libya, Mauritania, Mali — Corinthia, Al Waddan, Rixos, Sahara Hotel, Azalaï' },
  };

  const bc = [
    { name: 'Home', url: 'https://symloop.com/' },
    { name: 'Blog', url: 'https://symloop.com/blog/' },
    { name: c.title, url: 'https://symloop.com/blog/logiciel-pms-hotels-libye-mauritanie-mali-2026/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} — Symloop`}
        description={c.dek}
        keywords="logiciel PMS hôtel, PMS hôtel Libye, PMS hôtel Mauritanie, PMS hôtel Mali, Oracle Opera alternative, Sabre alternative, Mews alternative, Cloudbeds alternative, logiciel gestion hôtel Tripoli, logiciel hôtel Nouakchott, logiciel hôtel Bamako, channel manager hôtel Afrique, hotel PMS Africa, hotel software Libya, hotel software Mauritania, hotel software Mali, Corinthia PMS, Al Waddan PMS, Rixos PMS, Sahara Hotel PMS, Azalaï PMS, AI dynamic pricing hotel, tarification dynamique hôtel IA, channel manager Booking Expedia Trivago, multi-property PMS, multi-currency PMS, native Arabic PMS, PMS arabe natif, PMS Bambara, PMS Hassaniya, sovereign hotel PMS, plateforme hôtelière souveraine, B2B hotel software Africa, African B2B PMS partner, PMS Afrique francophone, hotel software West Africa, hotel software Maghreb, hotel software Sahel, hotel software francophone Africa, AU summit hotel PMS, ECOWAS hotel software, Africa hotel chain software, pan-African hotel group PMS, Azalaï pan-Sahelian rollout, PMS Sénégal, PMS Côte d'Ivoire, PMS Guinée, PMS Burkina Faso, PMS Bénin, software for African hospitality groups"
        type="article"
        structuredData={ld}
        faq={faq}
        breadcrumbs={bc}
        image="/blog/cover-pms-hotels-libye-mauritanie-mali.jpg"
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
            <Image src="/blog/cover-pms-hotels-libye-mauritanie-mali.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover" />
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
                const Icon = iconMap[item.icon] || Calendar;
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
