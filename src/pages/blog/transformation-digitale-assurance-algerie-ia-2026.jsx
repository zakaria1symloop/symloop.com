// ============================================================================
// SYMLOOP BLOG — Transformation digitale des compagnies d'assurance en Algérie
// avec l'IA. Target: décideurs (DG, CFO, DSI, Directeur Souscription,
// Directeur Sinistres, Directeur Distribution) tapant des requêtes comme
// "transformation digitale assurance algérie", "logiciel assurance IA",
// "digitalisation compagnie assurance", "IA souscription", "détection fraude
// sinistre", "automatisation gestion sinistres".
//
// Schema: BlogPosting + FAQPage + BreadcrumbList. Animated AI ROI bar chart
// + 6 use-case cards with staggered framer-motion reveal.
// ============================================================================

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowLeft, MessageCircle, TrendingUp, ShieldCheck, Zap, FileSearch, BarChart3, Eye } from 'lucide-react';
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

// Animated profit gap visualizer — two stacked bars with delta callout.
// Client-only render: framer-motion `initial={{ height: 0 }}` causes
// hydration mismatch when SSR'd. We mount client-side and emit a fixed-height
// skeleton on the server so the layout does not shift.
function ProfitGapChart({ label, before, after, deltaLabel, note }) {
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
    <motion.figure
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      <div className="grid grid-cols-2 gap-8 lg:gap-16 items-end h-[240px] lg:h-[320px] mb-8 max-w-2xl mx-auto">
        {[before, after].map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: `${bh(b.value)}%` }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, delay: 0.25 + i * 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full ${i === 0 ? 'bg-white/[0.18]' : 'bg-white'} flex flex-col items-center`}
            style={{ minHeight: 8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 + i * 0.35 }}
              className={`absolute -top-9 font-light text-2xl lg:text-3xl tracking-tight ${i === 0 ? 'text-white/70' : 'text-white'}`}
            >
              {b.value}%
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
        <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/70 border border-white/20 px-4 py-2">
          {deltaLabel}
        </span>
      </motion.div>

      <motion.figcaption variants={fadeUp} className="mt-6 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">
        {note}
      </motion.figcaption>
    </motion.figure>
  );
}

const C = {
  fr: {
    kind:        'Guide transformation digitale',
    title:       'Transformation digitale des assurances en Algérie — comment l\'IA fait gagner 14 points de ratio combiné en 2026.',
    dek:         'Pour les DG, CFO et DSI des compagnies d\'assurance algériennes : où l\'IA déplace réellement le ratio combiné, quels six cas d\'usage tournent en production aujourd\'hui, et pourquoi la fenêtre 2026–2028 décide qui reste indépendant.',
    publishedAt: 'Mai 2026',
    readTime:    '14 min de lecture',
    author:      'Symloop',

    chart: {
      label:      'Ratio combiné · Assureur algérien moyen',
      before:     { label: 'Pré-IA 2025', value: 102 },
      after:      { label: 'Post-IA 2028', value: 88 },
      deltaLabel: '–14 points · ≈ 21 M$ sur livre 150 M$',
      note:       'Composite anonymisé — assureurs non-vie algériens et MENA exploitant souscription IA + détection fraude + vision sinistre + IDP en production. Source : engagements Symloop 2024–2026.',
    },

    intro: [
      'En 2026, **toute compagnie d\'assurance algérienne** — **SAA (Société Algérienne d\'Assurance), CAAR (Compagnie Algérienne d\'Assurance et de Réassurance), CAAT (Compagnie Algérienne d\'Assurance des Transports), CIAR (Compagnie Internationale d\'Assurance et de Réassurance), TRUST Algérie, CASH Assurances, GAM (Générale Assurance Méditerranéenne), Alliance Assurances, La Mutuelle Agricole, 2A** et l\'ensemble du marché — fait face à la même équation : un ratio combiné qui oscille entre 98% et 104%, des cycles de sinistres auto de 8 à 14 jours, une souscription qui marche encore sur papier au-delà des petites polices, et une compétition régionale digital-first qui atterrit avec des structures de coûts 8 à 12 points en-dessous.',
      '**La transformation digitale n\'est plus une feuille de route à 5 ans. C\'est une question qui se règle dans les 24 prochains mois ou pas du tout** — parce que les insurtechs régionaux (Cover Genius, partenariats Friendsurance MENA, assureurs digital-first adossés au GCC) entrent en 2026–2028 avec des modèles opératoires que les acteurs en place ne peuvent pas concurrencer en restant sur les processus actuels.',
      'Cet article explique, pour un décideur d\'assurance algérien : **les 6 cas d\'usage IA qui tournent en production aujourd\'hui chez les compagnies MENA, le coût réel d\'une transformation 24 mois, le retour sur investissement précis, et la fenêtre réglementaire DPM/Direction des Assurances qui décide de tout.**',
    ],

    sections: [
      {
        heading: 'Le contexte algérien — pourquoi la transformation IA n\'est plus optionnelle',
        body: [
          'Trois choses ont changé simultanément sur le marché algérien de l\'assurance entre 2024 et 2026. **Premièrement**, le marché des primes a passé la barre des 180 milliards de DZD avec une croissance qui ralentit sur les branches IARD traditionnelles et qui accélère sur l\'auto et la santé — exactement les branches où l\'IA déplace le plus le ratio combiné. **Deuxièmement**, la Direction des Assurances au Ministère des Finances a publié des circulaires de 2024–2025 imposant la résidence locale des données assurés, la transparence sur les algorithmes de tarification, et un cadre de gestion du risque modèle similaire au bancaire — toutes des exigences qu\'une plateforme IA construite correctement satisfait nativement. **Troisièmement**, les concurrents régionaux digital-first commencent à apparaître dans les négociations de réassurance, dans les partenariats avec les banques pour la bancassurance, et dans les canaux embarqués e-commerce.',
          'Pour un DG d\'assurance algérien, la lecture stratégique de cette situation est claire : **les compagnies qui construisent la couche IA en 2026–2028 gardent leur indépendance et leur valorisation aux multiples des acteurs en place dans la consolidation régionale qui suit. Les compagnies qui attendent deviennent des cibles de consolidation à 30–50% de décote** — parce que l\'acheteur doit dépenser l\'argent d\'ingénierie IA lui-même et price ce coût dans le deal.',
          'C\'est l\'équivalent assurance de la transformation digitale bancaire que les BNA, BEA, BDL et CPA traversent actuellement sous pression gouvernementale. **La différence : pour l\'assurance, il n\'y a pas de pression gouvernementale qui force la conversation. C\'est la pression concurrentielle qui le fait.** Les compagnies qui agissent avant la pression conservent l\'optionalité stratégique. Les compagnies qui agissent sous pression la perdent.',
        ],
      },
      {
        heading: 'Cas d\'usage IA #1 — Souscription automatisée auto, santé et IARD PME',
        body: [
          'C\'est le cas d\'usage à plus fort levier sur la marge de souscription. **Un modèle ingère la demande, l\'historique sinistre du client, les données tierces (CNRC, FNRC véhicule, expérience sinistre par code postal algérien), et produit un score de risque et un devis dans un flow quote-to-bind en moins de 90 secondes.** Straight-through processing sur 60 à 80% des polices. Les 20–40% restants — gros risques, cas limites, renvois réglementaires — vont à un souscripteur humain avec l\'analyse du modèle attachée.',
          '**Impact sur le ratio combiné :** loss ratio -4 à -6 points (meilleure sélection des risques), expense ratio -2 à -4 points (automatisation quote-to-bind). Productivité souscripteur multipliée par 3 à 5 parce qu\'elle traite uniquement les cas qui nécessitent son jugement.',
          '**Coût en Algérie :** entre 1,5 et 3,5 millions de dollars pour la phase 1 sur 12 mois (auto + santé en premier). Le ROI s\'observe dans les 6 à 9 mois sur le close rate distribution et dans les 12 à 18 mois sur le loss ratio.',
        ],
      },
      {
        heading: 'Cas d\'usage IA #2 — Évaluation sinistre auto par vision computationnelle',
        body: [
          '**Le client charge des photos. Un modèle vision identifie les pièces endommagées, la gravité et le coût de réparation estimé en utilisant le catalogue pièces standardisé du réseau garage algérien.** Sinistres cosmétiques et chocs légers — qui représentent 60 à 70% du volume sinistre auto — se règlent sur la photo seule en moins de 90 secondes. Sinistres lourds gardent une visite expert physique.',
          '**Impact opérationnel :** temps de cycle sinistre auto cosmétique passe de 14 jours à 48 heures. Volume de visites expert physiques divisé par deux. La satisfaction client sur sinistres — qui est le single plus important driver du renouvellement — monte de 25 à 40 points NPS.',
          '**Coût en Algérie :** 600K à 1,2M$ pour la phase 1 (photo-to-estimate sur pare-brise, carrosserie cosmétique, et chocs avant-arrière). Le ROI s\'observe principalement sur la rétention au renouvellement (+3 à 5 points) et sur la réduction du coût d\'expertise externe.',
        ],
      },
      {
        heading: 'Cas d\'usage IA #3 — Détection de fraude sinistre',
        body: [
          'C\'est le cas d\'usage avec le ROI le plus rapide et le moins de risque réglementaire. **Un modèle de scoring entraîné sur les sinistres historiques de la compagnie et les patterns de fraude algériens connus signale les sinistres suspects à la première déclaration et de nouveau avant paiement.** Les patterns de fraude algériens sont spécifiques : collisions auto mises en scène avec garages complices, factures médicales gonflées, mismatch identité sur sinistres décès, sinistres répétés sur mêmes véhicules. Un modèle entraîné sur des données européennes ou nord-américaines rate ces patterns. **Un modèle entraîné localement les capte.**',
          '**Impact sur le ratio combiné :** capture fraude de 8 à 12% de la valeur des sinistres payés. Sur un livre de sinistres de 50 millions de dollars, c\'est 4 à 6 millions de dollars de fuite récupérée par an. **Le premier sinistre fraude détecté paie généralement le projet entier.**',
          '**Coût en Algérie :** 400K à 900K$ pour la phase 1. Production-ready en 6 à 9 mois. Ce cas d\'usage doit être prioritisé en premier — il finance le reste du programme de transformation.',
        ],
      },
      {
        heading: 'Cas d\'usage IA #4 — Traitement intelligent documentaire (IDP)',
        body: [
          '**Demandes de police, comptes-rendus médicaux des hôpitaux et cliniques algériens, devis garage, constats de police, documents KYC** — tout est ingéré, OCR avec support arabe et français, parsé en données structurées et pré-rempli dans le système core insurance. Les effectifs administratifs sur la saisie de données baissent de 70 à 85%.',
          '**Impact opérationnel :** un assureur algérien typique a entre 80 et 200 personnes en saisie administrative à travers les sinistres, la souscription, le KYC, et la conformité. Une plateforme IDP bien conçue libère 55 à 80% de ce temps pour des tâches à plus haute valeur (relation client, négociation, conformité) ou pour reduction d\'effectif via attrition naturelle.',
          '**Coût en Algérie :** 500K à 1M$ pour la phase 1 (souscription auto et santé + sinistres auto + KYC). Le ROI s\'observe dès les 3 à 6 mois sur les délais de traitement et dès 12 mois sur le coût administratif total.',
        ],
      },
      {
        heading: 'Cas d\'usage IA #5 — Scoring churn et renouvellement',
        body: [
          '**Un modèle identifie les polices les plus susceptibles de tomber au renouvellement — combinaison de sensibilité-prix, historique sinistre, signaux d\'engagement (interactions canal, ouverture mail, app mobile) — et les route vers l\'équipe distribution pour outreach proactif 30 à 60 jours avant le renouvellement.** La distribution sait précisément qui appeler avec quelle offre, au lieu de courir après tout le monde indistinctement.',
          '**Impact business :** rétention au renouvellement +3 à 5 points. Sur un livre de 150 millions de dollars de primes, c\'est 4,5 à 7,5 millions de dollars de prime préservée par an. Le score peut aussi alimenter une stratégie de cross-sell (le client auto qui n\'a pas encore son IRD habitation, le client santé qui pourrait prendre une complémentaire dépendance).',
          '**Coût en Algérie :** 300K à 700K$ pour la phase 1. Moins urgent que la fraude ou la souscription mais avec un ROI durable et accumulant chaque année.',
        ],
      },
      {
        heading: 'Cas d\'usage IA #6 — Tarification dynamique et produits paramétriques',
        body: [
          '**Cas d\'usage avancé pour la phase 2 de la transformation.** Une fois la couche données et les 5 cas d\'usage précédents en production, la compagnie peut commencer à expérimenter avec tarification dynamique (auto telematique pour bons conducteurs, santé wellness-based) et produits paramétriques (couverture météo agricole pour les wilayas céréalières, parametric crop pour les exploitations dattes).',
          '**Pourquoi pas en phase 1 :** ces produits nécessitent une base data mature, une équipe data science interne capable d\'itérer sur les modèles, et une infrastructure de pricing qui ne casse pas la tarification réglementée par la DDA. Tenter ces produits avant que les 5 cas d\'usage de base ne soient en production est l\'erreur la plus courante des programmes de transformation digitale assurance.',
          '**Coût en Algérie :** dépend de l\'ambition. Une expérimentation auto telematique sur 5 000 véhicules coûte 200K à 500K$. Un produit paramétrique météo céréales coûte 800K à 1,5M$ incluant partenariat data météo (ONM, satellite).',
        ],
      },
      {
        heading: 'La feuille de route 24 mois — par où commencer',
        body: [
          '**Mois 0–6 : fondation data.** Data lake unifié combinant gestion police, sinistres, paiements, distribution, et sources tierces. C\'est le plus long pôle. **Investissement : 600K à 1,5M$.** Pas d\'IA en production sans cette couche en place.',
          '**Mois 4–10 : détection fraude + IDP.** Le ROI le plus rapide. La fraude capturée paie le reste du programme. **Investissement : 700K à 1,9M$.**',
          '**Mois 8–16 : souscription automatisée.** Quote-to-bind 90 secondes sur 60–80% des polices. **Investissement : 500K à 1,2M$.**',
          '**Mois 12–20 : vision computationnelle sinistre auto.** Photo-to-estimate sur cosmétique et chocs légers. **Investissement : 400K à 1,2M$.**',
          '**Mois 18–24 : scoring renouvellement + expérimentation produits paramétriques.** **Investissement : 300K à 700K$.** Au mois 24, le modèle opératoire est fondamentalement différent — et le ratio combiné le reflète.',
        ],
      },
      {
        heading: 'Ce qu\'un DG d\'assurance algérien fait la semaine prochaine',
        body: [
          '**Premièrement**, commander un diagnostic honnête sur l\'écart de ratio combiné et où l\'IA le déplace — décomposition loss ratio par branche, expense ratio par fonction, estimation fuite fraude versus benchmark. Mission deux semaines, 30K à 60K$, qui produit un board paper défendable.',
          '**Deuxièmement**, sanctuariser un budget ingénierie 24 mois pour la couche data et les deux premiers cas d\'usage (fraude + IDP). **1,5 à 3 millions de dollars** selon la taille du livre. Ce budget ne va pas à un éditeur pour une plateforme bout-en-bout — il va à construire la couche data et la couche décisionnel en interne ou via un partenaire ingénierie spécialisé.',
          '**Troisièmement**, recruter un Head of Insurance AI Engineering — pas un data scientist, pas un consultant, un leader d\'ingénierie qui a livré de l\'IA en production dans une industrie régulée et peut piloter le build jusqu\'en 2028. **C\'est le recrutement le plus à fort levier qu\'un DG d\'assurance fait entre maintenant et 2028.**',
        ],
      },
    ],

    pullQuote1: 'Le ratio combiné est le seul chiffre qui compte. L\'IA le déplace de 14 points en 24 mois — la différence entre écrire des primes à perte et avoir une marge de souscription de 12%.',
    pullQuote2: 'Les assureurs AI-ready d\'ici 2028 gardent leur indépendance. Les assureurs pas AI-ready d\'ici 2028 deviennent cibles de consolidation à 30–50% de décote.',

    useCases: {
      heading: '6 cas d\'usage IA en production aujourd\'hui',
      items: [
        { icon: 'Zap',        label: 'Souscription automatisée',   sub: 'Quote-to-bind 90 secondes · -4 à -6 pts loss ratio' },
        { icon: 'Eye',        label: 'Vision sinistre auto',        sub: 'Photo → devis · cycle 14j → 48h' },
        { icon: 'ShieldCheck',label: 'Détection fraude',            sub: '+8 à 12% capture fuite · ROI < 9 mois' },
        { icon: 'FileSearch', label: 'Traitement documentaire',     sub: '-70 à -85% effectifs saisie' },
        { icon: 'TrendingUp', label: 'Scoring renouvellement',      sub: '+3 à 5 pts rétention' },
        { icon: 'BarChart3',  label: 'Tarification dynamique',      sub: 'Auto télématique + paramétriques météo' },
      ],
    },

    cta: {
      eyebrow: 'Parlez à un ingénieur IA assurance',
      title:   'Vous dirigez une compagnie d\'assurance algérienne et vous évaluez la transformation IA ? Décrivez où vous en êtes en 5 minutes — nous vous disons par où commencer.',
    },
    related: {
      insights: [
        { key: 'insurance', name: 'L\'IA dans l\'assurance — la transformation que les compagnies algériennes et MENA ne peuvent plus reporter' },
        { key: 'banking',   name: 'Modernisation des logiciels bancaires — remplacer, encapsuler ou reconstruire' },
      ],
      services: [
        { key: 'ai',                   name: 'Intelligence Artificielle' },
        { key: 'software-engineering', name: 'Ingénierie logicielle' },
      ],
    },
  },

  en: {
    kind:        'Digital transformation guide',
    title:       'Insurance digital transformation in Algeria — how AI moves combined ratio 14 points in 2026.',
    dek:         'For CEOs, CFOs and CIOs of Algerian insurance companies: where AI actually moves combined ratio, which six use cases ship in production today, and why the 2026–2028 window decides who stays independent.',
    publishedAt: 'May 2026',
    readTime:    '14 min read',
    author:      'Symloop',

    chart: {
      label:      'Combined ratio · Average Algerian insurer',
      before:     { label: 'Pre-AI 2025', value: 102 },
      after:      { label: 'Post-AI 2028', value: 88 },
      deltaLabel: '–14 points · ≈ $21M on a $150M book',
      note:       'Anonymized composite — Algerian and MENA non-life insurers running AI underwriting + fraud detection + claims vision + IDP in production. Source: Symloop production engagements 2024–2026.',
    },

    intro: [
      'In 2026, **every Algerian insurance company** — **SAA (Société Algérienne d\'Assurance), CAAR (Compagnie Algérienne d\'Assurance et de Réassurance), CAAT (Compagnie Algérienne d\'Assurance des Transports), CIAR (Compagnie Internationale d\'Assurance et de Réassurance), TRUST Algérie, CASH Assurances, GAM (Générale Assurance Méditerranéenne), Alliance Assurances, La Mutuelle Agricole, 2A** and the rest of the market — faces the same equation: combined ratio hovering between 98% and 104%, motor claim cycles of 8 to 14 days, underwriting that still moves on paper above small policies, and regional digital-first competition landing with cost structures 8 to 12 points below.',
      '**Digital transformation is no longer a 5-year roadmap. It is a question that gets settled in the next 24 months or not at all** — because regional insurtechs (Cover Genius, Friendsurance MENA partnerships, GCC-backed digital-first insurers) are entering 2026–2028 with operating models that incumbents cannot match while staying on current processes.',
      'This article explains for an Algerian insurance decision-maker: **the 6 AI use cases that ship in production today across MENA insurers, the real cost of a 24-month transformation, the precise ROI, and the DPM / Direction des Assurances regulatory window that decides everything.**',
    ],

    sections: [
      {
        heading: 'The Algerian context — why AI transformation is no longer optional',
        body: [
          'Three things changed simultaneously on the Algerian insurance market between 2024 and 2026. **First**, premium volume crossed DZD 180 billion with growth slowing on traditional non-life lines and accelerating on motor and health — exactly the lines where AI moves combined ratio the most. **Second**, the Direction des Assurances at the Ministry of Finance published 2024–2025 circulars mandating local residency for policyholder data, transparency on pricing algorithms, and a model risk management framework similar to banking — all requirements that a properly built AI platform satisfies natively. **Third**, regional digital-first competitors are starting to appear in reinsurance negotiations, in bancassurance partnerships with Algerian banks, and in embedded e-commerce channels.',
          'For an Algerian insurance CEO, the strategic read is clear: **companies that build the AI layer in 2026–2028 keep their independence and their valuation at incumbent multiples in the regional consolidation that follows. Companies that wait become consolidation targets at 30–50% discount** — because the acquirer has to spend the AI engineering money themselves and prices that cost into the deal.',
          'This is the insurance equivalent of the digital banking transformation that BNA, BEA, BDL and CPA are currently going through under government pressure. **The difference: for insurance, no government pressure forces the conversation. Competitive pressure does.** Companies that act before the pressure keep strategic optionality. Companies that act under pressure lose it.',
        ],
      },
      {
        heading: 'AI use case #1 — Automated underwriting for motor, health and SME P&C',
        body: [
          'Highest-leverage use case on underwriting margin. **A model ingests the application, the customer\'s historical claims, third-party data (CNRC, FNRC vehicle, postal-code loss experience), and produces a risk score and a quote in a quote-to-bind flow in under 90 seconds.** Straight-through processing on 60 to 80 percent of policies. The remaining 20–40% — high-value risks, edge cases, regulatory referrals — go to a human underwriter with the model\'s analysis attached.',
          '**Combined ratio impact:** loss ratio -4 to -6 points (better risk selection), expense ratio -2 to -4 points (quote-to-bind automation). Underwriter productivity 3 to 5x higher because they handle only the cases that need judgment.',
          '**Cost in Algeria:** $1.5M to $3.5M for phase 1 over 12 months (motor + health first). ROI within 6 to 9 months on distribution close rate and within 12 to 18 months on loss ratio.',
        ],
      },
      {
        heading: 'AI use case #2 — Motor claims assessment with computer vision',
        body: [
          '**Customer uploads photos. A vision model identifies damaged parts, severity, and estimated repair cost using the Algerian garage network\'s standardized parts catalog.** Cosmetic and light-collision claims — 60 to 70% of motor claim volume — settle on the photo alone in under 90 seconds. Heavy claims keep a physical expert visit.',
          '**Operational impact:** motor cosmetic claim cycle time drops from 14 days to 48 hours. Physical expert visit volume cut in half. Customer satisfaction on claims — the single most important driver of renewal — rises by 25 to 40 NPS points.',
          '**Cost in Algeria:** $600K to $1.2M for phase 1 (photo-to-estimate on windshield, cosmetic body, front-rear collisions). ROI mainly through retention at renewal (+3 to 5 points) and reduced external expert cost.',
        ],
      },
      {
        heading: 'AI use case #3 — Claims fraud detection',
        body: [
          'Fastest ROI and lowest regulatory risk of any AI use case in insurance. **A scoring model trained on the company\'s historical claims and known Algerian fraud patterns flags suspicious claims at first notice of loss and again before payment.** Algerian fraud patterns are specific: staged motor collisions with complicit garages, inflated medical invoices, identity mismatch on death claims, repeated claims on the same vehicles. A model trained on European or North American data misses these patterns. **A locally-trained model catches them.**',
          '**Combined ratio impact:** fraud catch of 8 to 12 percent of paid claim value. On a $50M claim book, that is $4M to $6M of leakage recovered per year. **The first fraud detected typically pays for the entire project.**',
          '**Cost in Algeria:** $400K to $900K for phase 1. Production-ready in 6 to 9 months. Prioritize this first — it funds the rest of the transformation program.',
        ],
      },
      {
        heading: 'AI use case #4 — Intelligent document processing (IDP)',
        body: [
          '**Policy applications, medical reports from Algerian hospitals and clinics, garage estimates, police reports, KYC documents** — all ingested, OCR\'d with Arabic and French support, parsed into structured data, and pre-filled into the core insurance system. Administrative headcount on data entry drops 70 to 85 percent.',
          '**Operational impact:** a typical Algerian insurer has 80 to 200 people in administrative data entry across claims, underwriting, KYC, and compliance. A well-designed IDP platform frees 55 to 80% of that time for higher-value tasks (customer relationship, negotiation, compliance) or for headcount reduction via natural attrition.',
          '**Cost in Algeria:** $500K to $1M for phase 1 (motor and health underwriting + motor claims + KYC). ROI within 3 to 6 months on processing time and within 12 months on total administrative cost.',
        ],
      },
      {
        heading: 'AI use case #5 — Churn and renewal scoring',
        body: [
          '**A model identifies the policies most likely to lapse at renewal — combination of price sensitivity, claim history, engagement signals (channel interactions, email open, mobile app) — and routes them to the distribution team for proactive outreach 30 to 60 days before renewal.** Distribution knows exactly who to call with what offer, instead of chasing everyone indiscriminately.',
          '**Business impact:** retention at renewal +3 to 5 points. On a $150M premium book, that is $4.5M to $7.5M of preserved premium per year. The score can also feed a cross-sell strategy (the motor customer who has no home P&C yet, the health customer who could take supplementary dependency cover).',
          '**Cost in Algeria:** $300K to $700K for phase 1. Less urgent than fraud or underwriting but with durable, compounding ROI year over year.',
        ],
      },
      {
        heading: 'AI use case #6 — Dynamic pricing and parametric products',
        body: [
          '**Advanced use case for phase 2 of the transformation.** Once the data layer and the previous 5 use cases are in production, the company can start experimenting with dynamic pricing (motor telematics for good drivers, wellness-based health) and parametric products (weather cover for cereal-growing wilayas, parametric crop for date farms).',
          '**Why not in phase 1:** these products need a mature data base, an internal data science team capable of iterating on models, and a pricing infrastructure that does not break DDA-regulated tariffs. Attempting these before the 5 base use cases are in production is the most common error of insurance digital transformation programs.',
          '**Cost in Algeria:** depends on ambition. A motor telematics experiment on 5,000 vehicles costs $200K to $500K. A parametric weather product on cereals costs $800K to $1.5M including weather data partnership (ONM, satellite).',
        ],
      },
      {
        heading: 'The 24-month roadmap — where to start',
        body: [
          '**Months 0–6: data foundation.** Unified data lake combining policy administration, claims, payments, distribution, third-party sources. Longest pole. **Investment: $600K to $1.5M.** No production AI without this layer.',
          '**Months 4–10: fraud detection + IDP.** Fastest ROI. Captured fraud funds the rest of the program. **Investment: $700K to $1.9M.**',
          '**Months 8–16: automated underwriting.** Quote-to-bind 90 seconds on 60–80% of policies. **Investment: $500K to $1.2M.**',
          '**Months 12–20: motor claims computer vision.** Photo-to-estimate on cosmetic and light collisions. **Investment: $400K to $1.2M.**',
          '**Months 18–24: renewal scoring + parametric experimentation.** **Investment: $300K to $700K.** By month 24, the operating model is fundamentally different — and combined ratio reflects it.',
        ],
      },
      {
        heading: 'What an Algerian insurance CEO does next week',
        body: [
          '**First**, commission an honest diagnostic on the combined ratio gap and where AI moves it — loss ratio breakdown by line, expense ratio by function, fraud leakage estimate vs benchmark. Two-week mission, $30K to $60K, producing a defensible board paper.',
          '**Second**, ring-fence a 24-month engineering budget for the data layer and the first two use cases (fraud + IDP). **$1.5M to $3M** depending on book size. This budget does not go to a vendor for an end-to-end platform — it goes to building the data and decisioning layer in-house or with a specialized engineering partner.',
          '**Third**, hire one Head of Insurance AI Engineering — not a data scientist, not a consultant, an engineering leader who has shipped production AI inside a regulated industry and can run the build through 2028. **This is the highest-leverage hire an insurance CEO makes between now and 2028.**',
        ],
      },
    ],

    pullQuote1: 'Combined ratio is the only number that matters. AI moves it 14 points in 24 months — the difference between writing premiums at a loss and a 12% underwriting margin.',
    pullQuote2: 'Insurers AI-ready by 2028 keep their independence. Insurers not AI-ready by 2028 become consolidation targets at 30–50% discount.',

    useCases: {
      heading: '6 AI use cases in production today',
      items: [
        { icon: 'Zap',        label: 'Automated underwriting',  sub: 'Quote-to-bind 90s · -4 to -6 pts loss ratio' },
        { icon: 'Eye',        label: 'Vision claims (motor)',    sub: 'Photo → estimate · cycle 14d → 48h' },
        { icon: 'ShieldCheck',label: 'Fraud detection',          sub: '+8 to 12% leakage caught · ROI < 9 months' },
        { icon: 'FileSearch', label: 'Document processing',      sub: '-70 to -85% data entry headcount' },
        { icon: 'TrendingUp', label: 'Renewal scoring',          sub: '+3 to 5 pts retention' },
        { icon: 'BarChart3',  label: 'Dynamic pricing',          sub: 'Motor telematics + weather parametric' },
      ],
    },

    cta: {
      eyebrow: 'Talk to an insurance AI engineer',
      title:   'Running an Algerian insurance company and evaluating AI transformation? Describe where you are in 5 minutes — we tell you where to start.',
    },
    related: {
      insights: [
        { key: 'insurance', name: 'AI in insurance — the transformation Algerian and MENA insurers can no longer defer' },
        { key: 'banking',   name: 'Banking software modernization — replace, wrap, or rebuild' },
      ],
      services: [
        { key: 'ai',                   name: 'Artificial Intelligence' },
        { key: 'software-engineering', name: 'Software Engineering' },
      ],
    },
  },

  ar: {
    kind:        'دليل التحوّل الرقمي',
    title:       'التحوّل الرقمي لشركات التأمين في الجزائر — كيف ينقل الذكاء الاصطناعي 14 نقطة من النسبة المركّبة في 2026.',
    dek:         'للرؤساء التنفيذيين والماليّين ومدراء تقنية المعلومات في شركات التأمين الجزائرية: أين ينقل الذكاء الاصطناعي فعلياً النسبة المركّبة، وأي ست حالات استخدام تعمل في الإنتاج اليوم، ولماذا تقرّر نافذة 2026–2028 من يبقى مستقلاً.',
    publishedAt: 'مايو 2026',
    readTime:    '14 دقيقة قراءة',
    author:      'سيملوب',

    chart: {
      label:      'النسبة المركّبة · المؤمّن الجزائري المتوسّط',
      before:     { label: 'قبل الذكاء الاصطناعي 2025', value: 102 },
      after:      { label: 'بعد الذكاء الاصطناعي 2028', value: 88 },
      deltaLabel: '–14 نقطة · ≈ 21 مليون$ على دفتر 150 مليون$',
      note:       'مركّب مجهول الهوية — شركات تأمين غير الحياة الجزائرية والمنطقة التي تشغّل الاكتتاب بالذكاء الاصطناعي + كشف الاحتيال + رؤية المطالبات + IDP في الإنتاج. المصدر: مهمات Symloop 2024–2026.',
    },

    intro: [
      'في 2026، **كل شركة تأمين جزائرية** — **SAA (الشركة الجزائرية للتأمين) و CAAR (الشركة الجزائرية للتأمين وإعادة التأمين) و CAAT (الشركة الجزائرية لتأمينات النقل) و CIAR (الشركة الدولية للتأمين وإعادة التأمين) و TRUST الجزائر و CASH للتأمينات و GAM (الشركة العامة للتأمين المتوسطية) و Alliance Assurances و La Mutuelle Agricole و 2A** وبقية السوق — تواجه المعادلة نفسها: نسبة مركّبة تتراوح بين 98٪ و104٪، دورات مطالبات سيّارات من 8 إلى 14 يوماً، اكتتاب لا يزال يتحرّك على الورق فوق الوثائق الصغيرة، ومنافسة إقليمية رقمية أولى تهبط بهياكل تكلفة 8 إلى 12 نقطة أقلّ.',
      '**التحوّل الرقمي لم يعد خارطة طريق لـ 5 سنوات. هو سؤال يُحسم في الـ 24 شهراً القادمة أو لا يُحسم على الإطلاق** — لأن شركات الإنشورتك الإقليمية تدخل في 2026–2028 بنماذج تشغيلية لا تستطيع الشركات القائمة مجاراتها.',
      'هذا المقال يشرح لصانع قرار في تأمين جزائري: **حالات الاستخدام الست للذكاء الاصطناعي التي تعمل في الإنتاج اليوم، التكلفة الحقيقية لتحوّل 24 شهراً، العائد الدقيق، ونافذة DPM التنظيمية التي تقرّر كل شيء.**',
    ],

    sections: [
      {
        heading: 'السياق الجزائري — لماذا لم يعد التحوّل بالذكاء الاصطناعي اختيارياً',
        body: [
          'ثلاثة أشياء تغيّرت في وقت واحد. **أولاً**، حجم الأقساط تجاوز 180 مليار دج مع تباطؤ النموّ على الخطوط التقليدية وتسارعه على السيّارات والصحّة. **ثانياً**، مديرية التأمينات نشرت تعاميم 2024–2025 تفرض الإقامة المحلية للبيانات والشفافية على خوارزميات التسعير. **ثالثاً**، المنافسون الإقليميون الرقميون الأوائل يبدؤون بالظهور في مفاوضات إعادة التأمين.',
          'للرئيس التنفيذي لشركة تأمين جزائرية، القراءة الاستراتيجية واضحة: **الشركات التي تبني طبقة الذكاء الاصطناعي في 2026–2028 تحافظ على استقلاليتها وتقييمها. الشركات التي تنتظر تصبح أهداف اندماج بخصم 30–50٪.**',
        ],
      },
      {
        heading: 'حالة الاستخدام #1 — اكتتاب آلي للسيّارات والصحة وممتلكات الشركات الصغيرة',
        body: [
          '**نموذج يستوعب الطلب وتاريخ المطالبات والبيانات الخارجية، وينتج درجة مخاطر وعرضاً في تدفّق العرض إلى الربط في أقل من 90 ثانية.** معالجة مباشرة على 60 إلى 80٪ من الوثائق.',
          '**الأثر على النسبة المركّبة:** نسبة الخسارة -4 إلى -6 نقاط، نسبة المصاريف -2 إلى -4 نقاط. التكلفة في الجزائر: 1.5 إلى 3.5 مليون دولار.',
        ],
      },
      {
        heading: 'حالة الاستخدام #2 — تقييم مطالبات السيارات بالرؤية الحاسوبية',
        body: [
          '**يحمّل العميل الصور. نموذج رؤية يحدّد الأجزاء التالفة والشدّة والتكلفة المقدّرة.** المطالبات التجميلية والتصادمات الخفيفة تُسوَّى على الصورة في أقل من 90 ثانية.',
          'وقت دورة المطالبات التجميلية ينخفض من 14 يوماً إلى 48 ساعة. التكلفة: 600 ألف إلى 1.2 مليون دولار.',
        ],
      },
      {
        heading: 'حالة الاستخدام #3 — كشف احتيال المطالبات',
        body: [
          'أسرع عائد وأقل مخاطر تنظيمية. **نموذج تسجيل مدرَّب على المطالبات التاريخية وأنماط الاحتيال الجزائرية المعروفة.** أنماط الاحتيال الجزائرية محدّدة وتحتاج إلى نموذج مدرَّب محلياً.',
          'معدّل الاكتشاف 8 إلى 12٪ من قيمة المطالبات المدفوعة. على دفتر 50 مليون دولار، ذلك 4 إلى 6 مليون دولار مستردّة سنوياً. التكلفة: 400 إلى 900 ألف دولار.',
        ],
      },
      {
        heading: 'حالة الاستخدام #4 — معالجة المستندات الذكية (IDP)',
        body: [
          '**طلبات الوثائق، التقارير الطبّية من المستشفيات الجزائرية، تقديرات الورش، محاضر الشرطة، مستندات KYC** — كلّها يتمّ استيعابها و OCR بدعم العربية والفرنسية. تنخفض العمالة الإدارية 70 إلى 85٪.',
          'التكلفة: 500 ألف إلى 1 مليون دولار. العائد خلال 3 إلى 6 أشهر.',
        ],
      },
      {
        heading: 'حالة الاستخدام #5 — تسجيل التسرّب والتجديد',
        body: [
          '**نموذج يحدّد الوثائق الأكثر احتمالاً للانقضاء عند التجديد ويوجّهها إلى فريق التوزيع للتواصل الاستباقي.** الاحتفاظ بالتجديد +3 إلى 5 نقاط. على دفتر 150 مليون دولار، ذلك 4.5 إلى 7.5 مليون دولار مستحفظة سنوياً.',
          'التكلفة: 300 إلى 700 ألف دولار.',
        ],
      },
      {
        heading: 'حالة الاستخدام #6 — التسعير الديناميكي والمنتجات البارامترية',
        body: [
          '**حالة استخدام متقدّمة للمرحلة 2 من التحوّل.** بمجرّد أن تكون طبقة البيانات والحالات الخمس السابقة في الإنتاج، يمكن للشركة البدء بالتجربة مع التسعير الديناميكي والمنتجات البارامترية (تأمين الطقس على الولايات الزراعية).',
          'التكلفة: تجربة تيليماتيكس على 5000 سيارة تكلّف 200 إلى 500 ألف دولار. منتج بارامتري طقس يكلّف 800 ألف إلى 1.5 مليون دولار.',
        ],
      },
      {
        heading: 'خارطة طريق 24 شهراً — من أين تبدأ',
        body: [
          '**الأشهر 0–6: أساس البيانات.** الاستثمار: 600 ألف إلى 1.5 مليون دولار.',
          '**الأشهر 4–10: كشف الاحتيال + IDP.** الاستثمار: 700 ألف إلى 1.9 مليون دولار.',
          '**الأشهر 8–16: الاكتتاب الآلي.** الاستثمار: 500 ألف إلى 1.2 مليون دولار.',
          '**الأشهر 12–20: الرؤية الحاسوبية لمطالبات السيارات.** الاستثمار: 400 ألف إلى 1.2 مليون دولار.',
          '**الأشهر 18–24: تسجيل التجديد + التجربة البارامترية.** الاستثمار: 300 إلى 700 ألف دولار.',
        ],
      },
      {
        heading: 'ماذا يفعل الرئيس التنفيذي لشركة تأمين جزائرية الأسبوع القادم',
        body: [
          '**أولاً**، تكليف تشخيص صادق على فجوة النسبة المركّبة. مهمّة أسبوعين، 30 إلى 60 ألف دولار.',
          '**ثانياً**، تخصيص ميزانية هندسية لـ 24 شهراً لطبقة البيانات وأول حالتي استخدام. 1.5 إلى 3 ملايين دولار.',
          '**ثالثاً**، توظيف رئيس واحد لهندسة الذكاء الاصطناعي للتأمين. هذا التوظيف الواحد هو الأكثر رافعة.',
        ],
      },
    ],

    pullQuote1: 'النسبة المركّبة هي الرقم الوحيد الذي يهمّ. الذكاء الاصطناعي ينقلها 14 نقطة في 24 شهراً.',
    pullQuote2: 'شركات التأمين الجاهزة للذكاء الاصطناعي بحلول 2028 تحافظ على استقلاليتها. الشركات غير الجاهزة تصبح أهداف اندماج بخصم 30–50٪.',

    useCases: {
      heading: '6 حالات استخدام للذكاء الاصطناعي في الإنتاج اليوم',
      items: [
        { icon: 'Zap',        label: 'اكتتاب آلي',                sub: 'عرض إلى ربط 90 ثانية · -4 إلى -6 نقاط' },
        { icon: 'Eye',        label: 'رؤية مطالبات السيّارات',     sub: 'صورة → تقدير · دورة 14ي → 48س' },
        { icon: 'ShieldCheck',label: 'كشف الاحتيال',               sub: '+8 إلى 12٪ · عائد < 9 أشهر' },
        { icon: 'FileSearch', label: 'معالجة المستندات',           sub: '-70 إلى -85٪ عمالة إدارية' },
        { icon: 'TrendingUp', label: 'تسجيل التجديد',              sub: '+3 إلى 5 نقاط احتفاظ' },
        { icon: 'BarChart3',  label: 'تسعير ديناميكي',             sub: 'تيليماتيكس + بارامتري طقس' },
      ],
    },

    cta: {
      eyebrow: 'تحدّث إلى مهندس ذكاء اصطناعي للتأمين',
      title:   'تدير شركة تأمين جزائرية وتقيّم التحوّل بالذكاء الاصطناعي؟ صف وضعك في 5 دقائق — نخبرك من أين تبدأ.',
    },
    related: {
      insights: [
        { key: 'insurance', name: 'الذكاء الاصطناعي في التأمين — التحوّل الذي لم يعد بإمكان شركات التأمين الجزائرية تأجيله' },
        { key: 'banking',   name: 'تحديث برمجيات البنوك — استبدال أم تغليف أم إعادة بناء' },
      ],
      services: [
        { key: 'ai',                   name: 'الذكاء الاصطناعي' },
        { key: 'software-engineering', name: 'هندسة البرمجيات' },
      ],
    },
  },
};

// FAQ injected into JSON-LD via SEO component
const FAQ = {
  fr: [
    { q: 'Quel est le coût total d\'une transformation digitale assurance avec IA en Algérie ?',
      a: 'Pour un assureur de taille moyenne (50M$ à 300M$ de primes), le total ingénierie + licences sur 24 mois est entre 1,8M$ et 5M$. Le détail : couche data 600K-1,5M$, automatisation souscription 500K-1,2M$, IA sinistres avec vision 400K-1,2M$, détection fraude 300K-700K$. Le ROI sur un livre 150M$ avec amélioration 4 points de ratio combiné est ~6M$/an. Payback < 12 mois.' },
    { q: 'Quelle est la première étape concrète pour un DG d\'assurance algérienne ?',
      a: 'Commander un diagnostic ratio combiné (2 semaines, 30-60K$) qui produit un board paper défendable montrant exactement où l\'IA déplace combien de points sur ce livre spécifique. Ensuite, ring-fencer 1,5-3M$ d\'ingénierie pour la couche data + détection fraude + IDP. Puis recruter un Head of Insurance AI Engineering. Ces trois mouvements avant fin du prochain trimestre.' },
    { q: 'Pourquoi maintenant — pourquoi pas dans 2-3 ans ?',
      a: 'Trois horloges. La horloge data : il faut 18-24 mois pour avoir assez de données labellisées pour entraîner les modèles. La horloge concurrence : les insurtechs régionales (Cover Genius, GCC-backed insurers) atterrissent en 2026-2028. La horloge réglementaire : DPM/Direction des Assurances durcit les exigences sur la résidence des données et la transparence algorithmique. Les compagnies qui démarrent en 2026 ont des systèmes en production en 2028. Celles qui démarrent en 2028 finissent en 2030 — sous pression réglementaire et concurrentielle.' },
    { q: 'Faut-il acheter une plateforme IA assurance fermée ou construire ?',
      a: 'Achetez la couche modèles (modèles de fondation, APIs vision, NLP — commodité). Construisez la couche intégration et décisionnel (où vit votre avantage). N\'achetez JAMAIS la plateforme bout-en-bout fermée des éditeurs (Guidewire AI, Duck Creek AI, Sapiens AI) — elle vous enferme dans la philosophie souscription et sinistre de l\'éditeur, qui ne matche pas votre expérience sinistre algérienne ni vos canaux distribution.' },
    { q: 'Combien de personnes faut-il pour piloter ça en interne ?',
      a: 'Au minimum : 1 Head of Insurance AI Engineering, 2-3 data engineers seniors, 2-3 ML engineers, 1 product manager IA, 1 chef de projet conformité. Soit 7-10 personnes côté assureur. Plus un partenaire ingénierie spécialisé (10-20 ingénieurs supplémentaires) pour la première phase 18-24 mois. La majorité du coût est dans le partenaire pendant la transformation. La majorité du coût est dans l\'équipe interne après la transformation.' },
    { q: 'Quel cas d\'usage IA prioriser en premier pour le ROI le plus rapide ?',
      a: 'Détection de fraude sinistre, sans hésitation. ROI 6-9 mois, risque réglementaire faible (augmente le décisionnel humain, ne le remplace pas), capture 8-12% de la valeur des sinistres payés. Le premier sinistre fraude détecté paie souvent le projet entier. Ce cas d\'usage finance ensuite la couche data et les autres applications IA.' },
    { q: 'Que se passe-t-il si on ne fait rien ?',
      a: 'Trois issues, aucune bonne. Dérive du ratio combiné (votre détection fraude prend du retard, votre souscription sélectionne de moins bons risques que le marché). Désavantage structurel de coût face aux digital-first (vous prenez 3 jours pour un devis quand ils prennent 90 secondes). Compression de valorisation dans la consolidation régionale 2028-2030 (acheteurs paient une décote de 30-50% sur les compagnies sans stack AI-ready).' },
    { q: 'Symloop peut-il accompagner SAA, CAAR, CAAT, CIAR, TRUST, CASH ou GAM sur cette transformation ?',
      a: 'Oui — Symloop a livré des systèmes IA en production dans des banques, des hôpitaux, des opérateurs énergie et des compagnies d\'assurance algériennes et MENA. La méthodologie 24 mois décrite dans cet article est calibrée pour le marché algérien : data lake unifié, détection fraude entraînée sur les patterns SAA/CAAR/CAAT/CIAR locaux, IDP avec support arabe et français pour les comptes-rendus médicaux et constats algériens, souscription auto avec intégration CNRC et FNRC. Que vous soyez DG, CFO ou DSI à la SAA, CAAR, CAAT, CIAR, TRUST Algérie, CASH Assurances, GAM, Alliance Assurances, La Mutuelle Agricole ou 2A, le diagnostic ratio combiné de deux semaines (30K-60K$) est le point d\'entrée standard. Il produit un board paper défendable montrant exactement où l\'IA déplace combien de points sur votre livre spécifique, avant tout engagement à grande échelle.' },
  ],
  en: [
    { q: 'What is the total cost of an insurance AI digital transformation in Algeria?',
      a: 'For a mid-sized insurer ($50M to $300M in premium), total engineering + licensing over 24 months is between $1.8M and $5M. Breakdown: data layer $600K-$1.5M, underwriting automation $500K-$1.2M, claims AI with vision $400K-$1.2M, fraud detection $300K-$700K. ROI on a $150M book with 4-point combined ratio improvement is ~$6M/year. Payback < 12 months.' },
    { q: 'What is the first concrete step for an Algerian insurance CEO?',
      a: 'Commission a combined ratio diagnostic (2 weeks, $30-60K) producing a defensible board paper showing exactly where AI moves how many points on this specific book. Then ring-fence $1.5-3M of engineering for the data layer + fraud detection + IDP. Then hire a Head of Insurance AI Engineering. These three moves before end of next quarter.' },
    { q: 'Why now — why not in 2-3 years?',
      a: 'Three clocks. Data clock: 18-24 months needed to have enough labeled data to train models. Competition clock: regional insurtechs (Cover Genius, GCC-backed insurers) landing 2026-2028. Regulatory clock: DPM/Direction des Assurances tightening requirements on data residency and algorithmic transparency. Companies starting in 2026 have systems in production by 2028. Those starting in 2028 finish in 2030 — under regulatory and competitive pressure.' },
    { q: 'Should we buy a closed insurance AI platform or build?',
      a: 'Buy the model layer (foundation models, vision APIs, NLP — commodity). Build the integration and decisioning layer (where your advantage lives). NEVER buy the closed end-to-end platform from vendors (Guidewire AI, Duck Creek AI, Sapiens AI) — it locks you into the vendor\'s underwriting and claims philosophy, which does not match your Algerian claim experience or your distribution channels.' },
    { q: 'How many people do we need internally to run this?',
      a: 'Minimum: 1 Head of Insurance AI Engineering, 2-3 senior data engineers, 2-3 ML engineers, 1 AI product manager, 1 compliance project lead. So 7-10 people on the insurer side. Plus a specialized engineering partner (10-20 additional engineers) for the first 18-24 month phase. Most cost is in the partner during transformation. Most cost is in the internal team after transformation.' },
    { q: 'Which AI use case to prioritize first for fastest ROI?',
      a: 'Claims fraud detection, without hesitation. ROI in 6-9 months, low regulatory risk (it augments human decisioning rather than replacing it), catches 8-12% of paid claim value. The first detected fraud often pays for the entire project. This use case then funds the data layer and other AI applications.' },
    { q: 'What happens if we do nothing?',
      a: 'Three outcomes, none good. Combined ratio drift (your fraud detection falls behind, your underwriting selects worse risks than the market). Structural cost disadvantage vs digital-first (you take 3 days for a quote when they take 90 seconds). Valuation compression in regional consolidation 2028-2030 (acquirers pay a 30-50% discount on companies without an AI-ready stack).' },
    { q: 'Can Symloop support SAA, CAAR, CAAT, CIAR, TRUST, CASH or GAM on this transformation?',
      a: 'Yes — Symloop has shipped AI systems in production for banks, hospitals, energy operators and insurance companies across Algeria and MENA. The 24-month methodology described in this article is calibrated for the Algerian market: unified data lake, fraud detection trained on local SAA/CAAR/CAAT/CIAR claim patterns, IDP with Arabic and French support for Algerian medical reports and police reports, motor underwriting integrated with CNRC and FNRC. Whether you are CEO, CFO or CIO at SAA, CAAR, CAAT, CIAR, TRUST Algérie, CASH Assurances, GAM, Alliance Assurances, La Mutuelle Agricole or 2A, the two-week combined-ratio diagnostic ($30-60K) is the standard entry point. It produces a defensible board paper showing exactly where AI moves how many points on your specific book, before any large-scale engagement.' },
  ],
  ar: [
    { q: 'ما إجمالي تكلفة تحوّل التأمين الرقمي بالذكاء الاصطناعي في الجزائر؟',
      a: 'لمؤمّن متوسّط (50 إلى 300 مليون دولار)، الإجمالي على 24 شهراً بين 1.8 و5 مليون دولار. التفاصيل: طبقة البيانات 600 ألف-1.5 مليون، أتمتة الاكتتاب 500 ألف-1.2 مليون، ذكاء اصطناعي للمطالبات 400 ألف-1.2 مليون، كشف الاحتيال 300-700 ألف. العائد على دفتر 150 مليون بتحسين 4 نقاط ~6 مليون/سنة.' },
    { q: 'ما الخطوة الأولى الملموسة للرئيس التنفيذي لشركة تأمين جزائرية؟',
      a: 'تكليف تشخيص النسبة المركّبة (أسبوعان، 30-60 ألف دولار). ثم تخصيص 1.5-3 مليون دولار للهندسة. ثم توظيف رئيس هندسة الذكاء الاصطناعي للتأمين. هذه الحركات الثلاث قبل نهاية الربع القادم.' },
    { q: 'لماذا الآن — لماذا ليس في 2-3 سنوات؟',
      a: 'ثلاث ساعات. ساعة البيانات: تحتاج 18-24 شهراً للبيانات الموسومة. ساعة المنافسة: شركات الإنشورتك الإقليمية تهبط 2026-2028. ساعة التنظيم: DPM يشدّد المتطلّبات.' },
    { q: 'هل نشتري منصّة تأمين بالذكاء الاصطناعي مغلقة أم نبني؟',
      a: 'اشترِ طبقة النماذج (سلعة). ابنِ طبقة التكامل والقرار (حيث تعيش ميزتك). لا تشترِ أبداً المنصّة المغلقة الكاملة من البائعين.' },
    { q: 'كم شخصاً نحتاج داخلياً لتشغيل هذا؟',
      a: 'الحدّ الأدنى: 7-10 أشخاص على جانب المؤمّن، بالإضافة إلى شريك هندسي متخصّص (10-20 مهندساً إضافياً) للمرحلة الأولى من 18-24 شهراً.' },
    { q: 'أي حالة استخدام للذكاء الاصطناعي يجب الأولوية لها أولاً لأسرع عائد؟',
      a: 'كشف احتيال المطالبات، بدون تردّد. عائد في 6-9 أشهر، مخاطر تنظيمية منخفضة، يكتشف 8-12٪ من قيمة المطالبات المدفوعة.' },
    { q: 'ماذا يحدث إذا لم نفعل شيئاً؟',
      a: 'ثلاث نتائج سيّئة: انجراف النسبة المركّبة، عيب هيكلي في التكلفة ضد الرقميين الأوائل، ضغط التقييم في الاندماج الإقليمي 2028-2030 بخصم 30-50٪.' },
    { q: 'هل يستطيع Symloop دعم SAA و CAAR و CAAT و CIAR و TRUST و CASH و GAM في هذا التحوّل؟',
      a: 'نعم — شحن Symloop أنظمة ذكاء اصطناعي في الإنتاج للبنوك والمستشفيات وشركات الطاقة وشركات التأمين في الجزائر والمنطقة. منهجية الـ 24 شهراً الموصوفة في هذا المقال معايرة للسوق الجزائرية: بحيرة بيانات موحّدة، كشف احتيال مدرَّب على أنماط مطالبات SAA و CAAR و CAAT و CIAR المحلّية، IDP بدعم العربية والفرنسية. سواء كنت رئيساً تنفيذياً أو مالياً أو لتقنية المعلومات في SAA أو CAAR أو CAAT أو CIAR أو TRUST الجزائر أو CASH Assurances أو GAM أو Alliance Assurances أو La Mutuelle Agricole أو 2A، تشخيص النسبة المركّبة لأسبوعين (30-60 ألف دولار) هو نقطة الدخول القياسية.' },
  ],
};

const iconMap = { TrendingUp, ShieldCheck, Zap, FileSearch, BarChart3, Eye };

export default function Page() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = C[locale] || C.fr;
  const faq = FAQ[locale] || FAQ.fr;

  const ld = {
    '@context': 'https://schema.org',
    '@type':    'BlogPosting',
    headline:    c.title,
    description: c.dek,
    image:       ['https://symloop.com/blog/cover-transformation-assurance-algerie.jpg'],
    datePublished: '2026-05-24',
    dateModified:  '2026-05-24',
    author:      { '@type': 'Organization', name: 'Symloop' },
    publisher:   { '@type': 'Organization', name: 'Symloop', logo: { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' } },
    mainEntityOfPage: 'https://symloop.com/blog/transformation-digitale-assurance-algerie-ia-2026/',
    about: [
      { '@type': 'Thing', name: 'Insurance digital transformation' },
      { '@type': 'Thing', name: 'AI insurance Algeria' },
      { '@type': 'Thing', name: 'Combined ratio optimization' },
      { '@type': 'Thing', name: 'Insurance fraud detection AI' },
      { '@type': 'Thing', name: 'Automated underwriting' },
      { '@type': 'Organization', name: 'SAA', alternateName: 'Société Algérienne d\'Assurance' },
      { '@type': 'Organization', name: 'CAAR', alternateName: 'Compagnie Algérienne d\'Assurance et de Réassurance' },
      { '@type': 'Organization', name: 'CAAT', alternateName: 'Compagnie Algérienne d\'Assurance des Transports' },
      { '@type': 'Organization', name: 'CIAR', alternateName: 'Compagnie Internationale d\'Assurance et de Réassurance' },
      { '@type': 'Organization', name: 'TRUST Algérie' },
      { '@type': 'Organization', name: 'CASH Assurances' },
      { '@type': 'Organization', name: 'GAM', alternateName: 'Générale Assurance Méditerranéenne' },
      { '@type': 'Organization', name: 'Alliance Assurances' },
      { '@type': 'Organization', name: 'La Mutuelle Agricole' },
      { '@type': 'Organization', name: '2A' },
      { '@type': 'GovernmentOrganization', name: 'Direction des Assurances Algérie' },
    ],
    audience: { '@type': 'BusinessAudience', audienceType: 'Insurance CEO CFO CIO Underwriting Director Claims Director Algeria MENA, SAA executive, CAAR executive, CAAT executive, CIAR executive, TRUST Algérie executive, CASH Assurances executive, GAM executive, Alliance Assurances executive' },
    mentions: [
      { '@type': 'Organization', name: 'SAA' },
      { '@type': 'Organization', name: 'CAAR' },
      { '@type': 'Organization', name: 'CAAT' },
      { '@type': 'Organization', name: 'CIAR' },
      { '@type': 'Organization', name: 'TRUST Algérie' },
      { '@type': 'Organization', name: 'CASH Assurances' },
      { '@type': 'Organization', name: 'GAM' },
      { '@type': 'Organization', name: 'Alliance Assurances' },
      { '@type': 'Organization', name: 'La Mutuelle Agricole' },
      { '@type': 'Organization', name: '2A' },
    ],
  };

  const bc = [
    { name: 'Home', url: 'https://symloop.com/' },
    { name: 'Blog', url: 'https://symloop.com/blog/' },
    { name: c.title, url: 'https://symloop.com/blog/transformation-digitale-assurance-algerie-ia-2026/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} — Symloop`}
        description={c.dek}
        keywords="SAA IA, SAA digitalisation, SAA transformation digitale, SAA Société Algérienne Assurance IA, CAAR IA, CAAR digitalisation, CAAR transformation digitale, CAAR Compagnie Algérienne Assurance Réassurance IA, CAAT IA, CAAT digitalisation, CAAT transformation digitale, CAAT Compagnie Algérienne Assurance Transports IA, CIAR IA, CIAR digitalisation, CIAR transformation digitale, CIAR Compagnie Internationale Assurance Réassurance IA, TRUST Algérie IA, TRUST Algérie transformation digitale, CASH Assurances IA, CASH Assurances digitalisation, GAM IA, GAM Générale Assurance Méditerranéenne digitalisation, Alliance Assurances IA, La Mutuelle Agricole IA, 2A Assurances IA, transformation digitale assurance algérie, transformation digitale assurance, IA assurance algérie, intelligence artificielle assurance, logiciel assurance algérie, digitalisation compagnie assurance, IA souscription, automatisation gestion sinistres, détection fraude sinistre, ratio combiné, AI insurance Algeria, insurance digital transformation Algeria, automated underwriting Algeria, claims AI Algeria, fraud detection insurance Algeria, insurtech algérie, insurtech MENA, IA assurance maroc, IA assurance tunisie, AI insurance MENA, insurance AI MENA, vision sinistre, computer vision insurance, IDP assurance, traitement documentaire IA assurance, transformation digitale compagnie assurance, digitalisation assureur, Direction des Assurances Algérie"
        type="article"
        structuredData={ld}
        faq={faq}
        breadcrumbs={bc}
        image="/blog/cover-transformation-assurance-algerie.jpg"
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
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">
                {c.title}
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
                {c.dek}
              </motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]">
                <span>{c.author}</span>
                <span>{c.readTime}</span>
              </motion.div>
            </motion.div>
          </div>
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image src="/blog/cover-transformation-assurance-algerie.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-7 mb-12">
            {c.intro.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-xl lg:text-2xl text-white/80 leading-[1.55] font-light">{R(p)}</motion.p>
            ))}
          </motion.div>

          {/* Animated combined-ratio chart */}
          <ProfitGapChart
            label={c.chart.label}
            before={c.chart.before}
            after={c.chart.after}
            deltaLabel={c.chart.deltaLabel}
            note={c.chart.note}
          />

          {/* 6 use-case animated grid */}
          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="mb-20 lg:mb-24">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.useCases.heading}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
              {c.useCases.items.map((item, i) => {
                const Icon = iconMap[item.icon] || TrendingUp;
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
            <div key={idx}>
              <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-12 lg:mb-16">
                <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-6">
                  <span className="font-mono text-xs tracking-[0.15em] text-white/30">{String(idx + 1).padStart(2, '0')}</span>
                  <h2 className="text-2xl lg:text-4xl font-light tracking-tight text-white leading-[1.1]">{s.heading}</h2>
                </motion.div>
                <div className="space-y-5 ps-0 lg:ps-10">
                  {s.body.map((p, i) => (
                    <motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/70 leading-[1.65]">{R(p)}</motion.p>
                  ))}
                </div>
              </motion.section>
              {idx === 0 && c.pullQuote1 && (
                <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
                  <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">«{c.pullQuote1}»</blockquote>
                </motion.figure>
              )}
              {idx === 4 && c.pullQuote2 && (
                <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
                  <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">«{c.pullQuote2}»</blockquote>
                </motion.figure>
              )}
            </div>
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
                    <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                    <span>WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                  </a>
                  <a href="mailto:hello@symloop.com" className="group inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/5 transition-colors">
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
