// ============================================================================
// SYMLOOP — Country brief: Mali 2026.
//
// Sahelian gold + diplomatic-hub positioning. Decision-makers: Barrick Gold
// (Loulo-Gounkoto), Resolute Mining (Syama), B2Gold (Fekola), Société des
// Mines de Kayes, Energie du Mali (EDM), Azalaï Hotels Group, Sheraton
// Bamako, Société Hôtelière Salam, Bamako real-estate developers, Ministry
// of Mines & Petroleum, Ministry of Digital Transformation. Verticals:
// BMS buildings, hotel PMS (AU-summit grade), smart home.
// ============================================================================

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import CountryInsightTemplate from '../../components/CountryInsightTemplate';
import { DemandCurveChart } from '../../components/CountryCharts';

const CONTENT = {
  en: {
    kind:        'Country brief',
    titleSeo:    'Mali 2026 — AI Engineering Partner for Bamako and Sahelian Gold',
    dekSeo:      'For Barrick Loulo, Resolute, B2Gold, Azalaï Hotels, Sheraton Bamako and the ministries modernizing AU-summit infrastructure: how Symloop ships hotel PMS, building management and mining-adjacent ERP with native French and Maghrebi-Arabic context.',
    title:       'Mali 2026 — the engineering partner for Bamako, Sahelian gold and diplomatic-hub infrastructure.',
    dek:         'A country brief for Malian buyers — Barrick Gold (Loulo-Gounkoto), Resolute Mining (Syama), B2Gold (Fekola), Azalaï Hotels, Sheraton Bamako, Société Hôtelière Salam, the Bamako real-estate developers, EDM and the ministries hosting African Union and ECOWAS-level meetings. Why an Algerian-engineered partner with French-native engineering and AI-first deep-tech depth fits Mali better than French agencies, Senegalese boutiques or imported Gulf vendors.',
    chart: {
      label:      'Time-to-production · International vendor vs Symloop',
      before:     { label: 'FR / Pan-African vendor', value: 28, unit: 'mo' },
      after:      { label: 'Symloop', value: 8, unit: 'mo' },
      deltaLabel: '3.5x faster · 50-60% lower cost · same engineering depth',
      note:       'Composite benchmark — software engagements delivered for Malian, Algerian, Senegalese and West African clients. Source: Symloop production engagements 2024–2026.',
    },
    publishedAt: 'May 2026',
    readTime:    '16 min read',
    pages:       '26 pages',
    author:      'Symloop research',
    intro: [
      'Mali in 2026 is Africa\'s third-largest gold producer, a Sahelian economy with deep mineral wealth, and a recurring diplomatic-hub host for African Union and ECOWAS meetings in Bamako. **Barrick Gold operates the Loulo-Gounkoto complex (one of the world\'s largest gold operations). Resolute Mining runs Syama. B2Gold operates Fekola. These three majors plus the smaller artisanal-to-industrial gold operators across Kayes, Sikasso and Koulikoro need operational software at a pace and scale no Malian vendor delivers today.** Bamako\'s hotel inventory — Azalaï Salam, Sheraton Bamako, Radisson Bamako, the boutique business hotels — is being upgraded for diplomatic-summit hosting standards. The capital is densifying with new commercial real estate and residential developments.',
      'The vendor reality in Mali is similar to Mauritania, with one twist. **French agencies** (Capgemini, Sopra Steria, Atos, plus the smaller Bamako-based French integrators) priced at French rates, with French overheads, and limited persistent presence in the country. **Senegalese pan-African firms** (the Dakar-based engineering shops that serve West Africa) with better cost structures but stretched thin across multiple countries and not specifically tuned for the operational reality of a Malian mining operation or the diplomatic-summit hospitality standard. **Or Gulf vendors** for the very largest contracts, with the standard fly-in-and-disappear delivery model.',
      '**Symloop\'s positioning fills the gap**: native French engineering (a substantial fraction of Algerian senior engineers studied through curricula very close to French grandes écoles), AI-first deep-tech with 25+ senior engineers, geographic neighbor (Algeria-Mali land border, with a long-standing trans-Saharan logistical and cultural link), and a delivery model that maintains persistent local presence in Bamako during engagements rather than flying engineers in from Paris or Dakar. **Three verticals form the wedge: AU-summit-grade hotel PMS for the diplomatic-hosting infrastructure, BMS building management for Bamako\'s densifying commercial and residential stock, and mining-adjacent operational software for Loulo-Gounkoto, Syama and Fekola.**',
    ],
    sections: [
      {
        heading: 'The Malian software wedge — sized in dollars',
        body: [
          '**Gold mining is the largest software opportunity in Mali by far.** Barrick\'s Loulo-Gounkoto complex (a long-life world-class gold mine with substantial expansion potential) needs ongoing predictive maintenance on heavy mining equipment, computer-vision quality control on the gold processing line, integrated environmental and water management, and reporting to the Ministry of Mines & Petroleum in French and the Bamako-standard administrative format. A 24-month operational-software engagement at $4-8M would deliver multi-million-dollar annual savings through downtime reduction alone.',
          '**Resolute Mining at Syama and B2Gold at Fekola have similar profiles.** Plus the smaller Malian-government-stakeholder operations (Société des Mines de Kayes, the joint ventures with the Malian state) need digital transformation that the major French integrators have not been competitive on. **Aggregate mining-software opportunity over 2026–2030: $30-60M of engineering and licensing**, served today almost entirely by global mining-software vendors at European pricing.',
          '**Bamako\'s hotel inventory upgrade is a multi-million-dollar PMS opportunity.** The Azalaï Salam, Sheraton Bamako, Radisson Bamako, plus the smaller business hotels around the airport corridor and the Bamako-Diaspora district, all need modern PMS, channel manager, booking engine, F&B integration, and AI dynamic pricing — particularly for the diplomatic-summit hosting demand cycle (high occupancy during AU summits at top dollar, normal business-travel cycles in between). Most properties run legacy systems that struggle with this dual-mode demand profile.',
          '**Bamako\'s densification is the third pillar.** New commercial real estate around the Bamako central business district, new residential developments in the upper-middle-class neighborhoods (Hamdallaye, Sébénikoro), and government-building modernization all need integrated building management. The BMS-style platform Symloop deploys in Algeria and adjacent markets ports directly.',
        ],
      },
      {
        heading: 'Vertical 1 — AU-summit-grade hotel PMS',
        body: [
          '**Bamako\'s hotels operate on a dual-mode demand profile that most international PMS systems are not optimized for.** Normal business travel is steady but low-volume (mining executives, NGO staff, ECOWAS commission travelers). Then 4-6 times per year, the city hosts an AU sub-commission meeting, an ECOWAS summit, a diplomatic gathering, or a major mining-industry conference — and occupancy spikes from 40-50% to 95%+ for 5-7 days at significantly elevated rates. The PMS, channel manager, and revenue management systems need to handle both modes.',
          '**Azalaï Hotels Group (the largest Sahelian hotel operator, headquartered in Bamako with properties across Mali, Senegal, Côte d\'Ivoire, Guinea, Burkina Faso, Mauritania, Benin)** is the strategically most important hotel software buyer in the region. A multi-property PMS rollout for Azalaï, calibrated for the diplomatic-summit demand pattern, with French + Arabic + Bambara guest-profile support and integration with the major OTAs plus AU/ECOWAS official-traveler booking channels, would be a $6-12M engagement over 18-24 months — and the operational model becomes a pan-Sahelian PMS reference deployment for Symloop.',
          'For independent properties (Sheraton Bamako, Radisson, the smaller business hotels), the engagement size is $1-2M per property over 6 months. The diplomatic-summit pricing optimization alone — getting the dynamic pricing model right for 5-7 days of 95%+ occupancy demand 4-6 times a year — typically returns the investment in the first year.',
        ],
      },
      {
        heading: 'Vertical 2 — BMS building management for Bamako',
        body: [
          'Bamako\'s electricity supply (EDM, Energie du Mali) has improved markedly over 2022-2026 but still has reliability issues that make backup-power orchestration and energy management operationally critical for any new commercial or residential building. **The new commercial real estate in the central business district, the government-building modernization programs (Ministry of Foreign Affairs, Ministry of Mines, ANTIM), and the upper-middle-class residential developments in Hamdallaye and Sébénikoro all need integrated building management.**',
          'The vendor reality: French integrators deploy Schneider EcoStruxure at French pricing (€80-150K per building plus annual maintenance). Pan-African firms cobble together off-the-shelf hardware with integration that struggles with the Bamako electrical-grid reality. There is no Bamako-rooted BMS vendor of scale.',
          '**Symloop\'s BMS platform** — deployed in Algerian, Libyan and Mauritanian contexts with similar grid-instability characteristics — fits Bamako natively. **Cost: $25-50K per building. Hardware ESP32-based, manufactured in Algiers, customizable for Malian-specific requirements. French + Bambara + Arabic UI. AI-driven energy + water + occupancy optimization. Source-code transfer to the Malian operator at end of engagement.**',
        ],
      },
      {
        heading: 'Vertical 3 — Mining-adjacent operational software',
        body: [
          '**Barrick Gold at Loulo-Gounkoto is the most strategically important mining-software buyer in Mali.** Barrick is a global mining major with corporate IT decisions made in Toronto, but operational software decisions are made at the site, and Barrick\'s pattern is to procure local-context delivery partners for site-specific software with global vendor MSAs above. Symloop\'s wedge: native French engineering presence in Bamako, hardware manufactured for the Sahelian climate, engagement costs 50% below what Barrick\'s global-tier vendors quote, and an AI-first deep-tech depth that aligns with Barrick\'s modernization agenda.',
          '**Resolute Mining at Syama** is similar in profile — Australian-listed mining major with a Sahelian operation. The procurement model is global MSA + local-context SOW. Symloop is positioned to be the local-context delivery partner for predictive maintenance, environmental monitoring, water management, and compliance reporting.',
          '**B2Gold at Fekola** is the third major. The operational software stack — fleet management for heavy mining equipment, computer-vision quality control on the processing line, environmental and water monitoring, ESG reporting in French for the Malian regulators — is exactly what Symloop\'s mining-and-energy engineering team has shipped in Algeria for Sonatrach and adjacent regulated heavy-industry operators.',
          'Plus the smaller **Malian-state-stakeholder mining operations** (Société des Mines de Kayes, the joint ventures, the artisanal-to-industrial upgrade programs) need digital transformation that the global mining-software vendors do not prioritize. A pan-Malian mining-platform engagement (state stakeholder + multiple operating sites + central reporting to Ministry of Mines & Petroleum) is a $5-10M, 24-month opportunity.',
        ],
      },
      {
        heading: 'Why an Algerian partner specifically — versus French, Senegalese, global',
        body: [
          '**Versus French firms**: Symloop is 50-60% cheaper for equivalent engineering depth. Algerian senior engineers studied through curricula very close to French grandes écoles (École Polytechnique d\'Alger, ÉNS Algiers, USTHB) and ship engineering work indistinguishable from French-trained engineers — at 40-60% of French agency day rates. Persistent local presence in Bamako during engagements (Algerian engineers maintain Bamako residency during projects, rather than flying in from Paris).',
          '**Versus Senegalese pan-African firms**: Symloop is structurally larger (25+ senior engineers vs. typical 5-15 of Senegalese boutiques), AI-first depth in production at scale, and free of the spread-thin-across-15-countries delivery problem that affects the larger Dakar-based pan-African operators. Plus Arabic-native capability (which matters less in Mali than Mauritania, but matters for some government and traditional-commerce buyers).',
          '**Versus global mining-software vendors (Hexagon, Maptek, Sandvik AutoMine)**: Symloop is the local-context delivery partner for the components those globals don\'t prioritize — French-language operational interfaces, locally-manufactured IoT hardware tuned for the Sahelian environment, persistent on-site engineering during initial deployment, source-code transfer to the operator at end of engagement.',
        ],
      },
      {
        heading: 'What a Malian operator does next week',
        body: [
          '**First**, commission a 2-week scoping engagement on the specific vertical — mining-adjacent operational software, AU-summit-grade hotel PMS, BMS building management, or smart home. $30-60K. Outcome: a defensible board paper showing what Symloop delivers, in what timeline, at what cost — versus French and pan-African alternatives.',
          '**Second**, structure the engagement as a fixed-price milestone-driven delivery. Mining-adjacent operational software: 18-24 months, $4-8M. AU-summit hotel PMS rollout: 6-12 months, $1-2M per property (multi-property for Azalaï: $6-12M over 18-24 months). BMS building deployment: 3-4 months per building at $25-50K.',
          '**Third**, take source-code ownership and on-premise or sovereign-cloud deployment as contractual default. For mining engagements with global majors (Barrick, Resolute, B2Gold), the contracting structure is MSA + SOW with global parent corporation, with Symloop as the local-context delivery partner. For Malian-state-stakeholder engagements (Société des Mines de Kayes, government modernization), public-procurement structure with board-approved scoping.',
        ],
      },
    ],
    takeaways: {
      title: 'Six things to take from this brief',
      items: [
        'Mali\'s gold mining + Bamako hotel + building-management opportunity implies $120M+ of software demand over 2026–2030, served today by French and global vendors at premium pricing.',
        'Symloop wins over French agencies on cost (50-60% cheaper), over Senegalese pan-African firms on depth and AI-first posture, over global mining-software vendors on local-context delivery and source-code ownership.',
        'Barrick Gold (Loulo-Gounkoto), Resolute (Syama), B2Gold (Fekola): mining-adjacent operational software is a 24-month, $4-8M-per-major-operator opportunity.',
        'Azalaï Hotels Group multi-property PMS: $6-12M, 18-24 months, pan-Sahelian reference deployment. Single-property rollouts (Sheraton Bamako, Radisson): $1-2M per property over 6 months.',
        'BMS building management for Bamako densification: $25-50K per building, no recurring fees, French + Bambara + Arabic UI, AI-driven energy + water + occupancy optimization.',
        'Diplomatic-summit dynamic pricing (4-6 high-occupancy events per year) is the differentiator that AU-summit-grade hotel PMS must handle — standard international PMS systems do not optimize this dual-mode demand profile correctly.',
      ],
    },
    faq: [
      { q: 'Why is an Algerian firm credible as a software partner in Mali specifically?',
        a: 'Three reasons. Engineering depth at the right price point (25+ senior engineers from curricula very close to French grandes écoles, at 50-60% below French agency rates). Geographic and cultural neighborhood (Algeria-Mali land border with long-standing trans-Saharan logistical and cultural link; Symloop engineers maintain Bamako residency during engagements). AI-first deep-tech depth at scale — most Bamako-serving firms have not built AI engineering capability that matches modern mining and hospitality requirements.' },
      { q: 'How does Symloop work with global mining majors like Barrick Gold or B2Gold?',
        a: 'Symloop is the local-context delivery partner. The primes (Barrick, Resolute, B2Gold) maintain corporate IT decisions at HQ (Toronto, Perth, Vancouver). Symloop delivers the in-country software components: predictive maintenance on local equipment, computer-vision quality control on the processing line, environmental and water monitoring, compliance reporting to the Malian Ministry of Mines & Petroleum in French. We work under MSA + SOW structures common to global mining, with milestone-based fixed-price delivery, locally-manufactured IoT hardware (Algiers-built), and source-code transfer to the operator at end of engagement.' },
      { q: 'What makes "AU-summit-grade hotel PMS" different from a standard hotel PMS?',
        a: 'Two operational realities. (1) Dual-mode demand: normal business travel (40-50% occupancy) interleaved with 4-6 diplomatic-summit weeks per year (95%+ occupancy at substantially elevated rates) — the dynamic pricing and revenue management model must handle both modes correctly. (2) Diplomatic guest profile management: official traveler bookings come through AU and ECOWAS official channels with specific reporting requirements (VIP comp rooms, government-rate discounting, official-protocol guest profiles, security and visit-coordination integration). Standard international PMS systems are calibrated for steady-state business or leisure demand — they handle the spike modes badly and have no native diplomatic-guest workflow.' },
      { q: 'What is the Azalaï Hotels Group multi-property engagement profile?',
        a: 'Azalaï is the largest Sahelian hotel operator, headquartered in Bamako with properties across Mali, Senegal, Côte d\'Ivoire, Guinea, Burkina Faso, Mauritania, Benin. A multi-property PMS rollout for Azalaï is structured as a phased deployment: Bamako flagship in months 1-6, regional expansion (Dakar, Abidjan, Conakry, Ouagadougou, Nouakchott, Cotonou) in months 6-18, central reporting and revenue management consolidation in months 12-24. Total engagement: $6-12M over 18-24 months. The operational model becomes a pan-Sahelian PMS reference deployment that Symloop can sell into adjacent African hotel operators.' },
      { q: 'How does Symloop handle French-Bambara-Arabic linguistic requirements?',
        a: 'French is the primary working language for Malian business and government — Symloop engineers are French-native or French-fluent. Bambara is the day-to-day spoken language across much of the workforce and customer base — Symloop builds Bambara-language UI variants and AI NLP models for chatbots, document understanding, and customer-facing flows where Bambara matters operationally (hospitality customer service, certain government interfaces). Arabic is a secondary language with limited operational reach in Mali but matters for some traditional-commerce buyers and Islamic-finance interfaces — Symloop\'s Arabic-native capability covers this without additional vendor coordination.' },
    ],
    relatedServices: {
      heading: 'Capabilities applied here',
      items: [
        { name: 'Artificial Intelligence — predictive maintenance, vision QC, NLP French + Bambara',  href: '/services/ai/' },
        { name: 'IoT & Industrial Systems — ESP32 hardware, sensor networks, PLC integration',         href: '/services/iot/' },
        { name: 'Software Engineering — ERP, PMS, building management platform, sovereign deployment', href: '/services/software-engineering/' },
        { name: 'Technology Consulting — vendor-vs-build assessment, public-procurement support',     href: '/services/consulting/' },
      ],
    },
    relatedInsights: {
      heading: 'Read next',
      items: [
        { name: 'Libya 2026 — reconstruction-economy AI partner brief',                       href: '/insights/libya/' },
        { name: 'Mauritania 2026 — Atlantic-gateway + mining-boom partner brief',             href: '/insights/mauritania/' },
        { name: 'Hospitality engineering — PMS lock-in to direct-booking conversion',         href: '/insights/hospitality/' },
      ],
    },
    cta: {
      eyebrow: 'Talk to the team that ships into Mali',
      title:   'Considering an AU-summit-grade hotel PMS, mining-adjacent operational software, or BMS building platform in Mali? We scope in two weeks and ship in eight months.',
      button:  'Start the scoping conversation',
    },
    backToHub: 'Back to all insights',
  },

  fr: {
    kind:        'Étude pays',
    titleSeo:    'Mali 2026 — Partenaire ingénierie IA pour Bamako et l\'or sahélien',
    dekSeo:      'Pour Barrick Loulo, Resolute, B2Gold, Azalaï Hotels, Sheraton Bamako et les ministères modernisant l\'infrastructure des sommets UA : comment Symloop livre PMS hôtels, gestion bâtiments et ERP minier-adjacent avec contexte français et arabe maghrébin natif.',
    title:       'Mali 2026 — le partenaire ingénierie pour Bamako, l\'or sahélien et l\'infrastructure diplomatique.',
    dek:         'Étude pays pour acheteurs maliens — Barrick Gold (Loulo-Gounkoto), Resolute Mining (Syama), B2Gold (Fekola), Azalaï Hotels, Sheraton Bamako, Société Hôtelière Salam, les promoteurs immobiliers de Bamako, EDM et les ministères qui hôtent les réunions Union Africaine et CEDEAO. Pourquoi un partenaire d\'ingénierie algérienne avec ingénierie française native et profondeur deep-tech IA-first colle mieux au Mali que les agences françaises, les boutiques sénégalaises ou les éditeurs golfiques importés.',
    chart: {
      label:      'Time-to-production · Éditeur international vs Symloop',
      before:     { label: 'Éditeur FR/Pan-Africain', value: 28, unit: 'mois' },
      after:      { label: 'Symloop', value: 8, unit: 'mois' },
      deltaLabel: '3,5x plus rapide · 50-60% moins cher · même profondeur d\'ingénierie',
      note:       'Benchmark composite — engagements logiciels livrés pour clients maliens, algériens, sénégalais et ouest-africains. Source : engagements Symloop 2024–2026.',
    },
    publishedAt: 'Mai 2026',
    readTime:    '16 min de lecture',
    pages:       '26 pages',
    author:      'Recherche Symloop',
    intro: [
      'Le Mali en 2026 est le troisième producteur d\'or d\'Afrique, une économie sahélienne à profonde richesse minérale, et un hôte récurrent de hub diplomatique pour les réunions Union Africaine et CEDEAO à Bamako. **Barrick Gold opère le complexe Loulo-Gounkoto (l\'une des plus grandes opérations aurifères au monde). Resolute Mining tourne Syama. B2Gold opère Fekola. Ces trois majors plus les opérateurs aurifères artisanaux-à-industriels plus petits à travers Kayes, Sikasso et Koulikoro ont besoin de logiciel opérationnel à un rythme et à une échelle qu\'aucun éditeur malien ne livre aujourd\'hui.** L\'inventaire hôtelier de Bamako — Azalaï Salam, Sheraton Bamako, Radisson Bamako, les hôtels business boutique — est en cours de mise à niveau pour les standards d\'hébergement de sommets diplomatiques.',
      'La réalité éditeur au Mali est similaire à la Mauritanie, avec une nuance. **Agences françaises** (Capgemini, Sopra Steria, Atos, plus les intégrateurs français basés à Bamako plus petits) tarifées aux taux français, avec frais généraux français, et présence persistante limitée dans le pays. **Firmes pan-africaines sénégalaises** (les ateliers d\'ingénierie basés à Dakar qui servent l\'Afrique de l\'Ouest) avec meilleures structures de coûts mais étalées mince à travers plusieurs pays et pas spécifiquement calibrées pour la réalité opérationnelle d\'une opération minière malienne ou le standard hôtelier de sommet diplomatique. **Ou éditeurs golfiques** pour les très plus gros contrats, avec le modèle de livraison standard fly-in-et-disparaître.',
      '**Le positionnement de Symloop comble la lacune** : ingénierie française native (une fraction substantielle des ingénieurs seniors algériens a étudié à travers des curricula très proches des grandes écoles françaises), deep-tech IA-first avec 25+ ingénieurs seniors, voisin géographique (frontière terrestre Algérie-Mali, avec un lien logistique et culturel trans-saharien de longue date), et un modèle de livraison qui maintient une présence locale persistante à Bamako pendant les engagements plutôt que d\'envoler les ingénieurs depuis Paris ou Dakar. **Trois verticaux forment le coin : PMS hôtelier de qualité sommet-UA pour l\'infrastructure d\'hébergement diplomatique, gestion bâtiment BMS pour le stock commercial et résidentiel se densifiant de Bamako, et logiciel opérationnel minier-adjacent pour Loulo-Gounkoto, Syama et Fekola.**',
    ],
    sections: [
      {
        heading: 'Le coin logiciel malien — chiffré en dollars',
        body: [
          '**La mine d\'or est de loin la plus grande opportunité logicielle au Mali.** Le complexe Loulo-Gounkoto de Barrick (une mine d\'or de classe mondiale à longue durée de vie avec un potentiel d\'expansion substantiel) a besoin de maintenance prédictive continue sur équipement minier lourd, contrôle qualité vision computationnelle sur la ligne de traitement d\'or, gestion environnementale et eau intégrée, et reporting au Ministère des Mines et du Pétrole en français et au format administratif standard Bamako. Un engagement logiciel opérationnel 24 mois à 4-8M$ livrerait des économies annuelles multi-millions de dollars uniquement par la réduction des arrêts.',
          '**Resolute Mining à Syama et B2Gold à Fekola ont des profils similaires.** Plus les opérations stakeholder-malien-gouvernemental plus petites (Société des Mines de Kayes, les coentreprises avec l\'État malien) ont besoin de transformation digitale où les majors intégrateurs français n\'ont pas été compétitifs. **Opportunité logicielle minière agrégée sur 2026-2030 : 30-60M$ d\'ingénierie et licences**, servie aujourd\'hui presque entièrement par les éditeurs miniers globaux à tarification européenne.',
          '**La mise à niveau d\'inventaire hôtelier de Bamako est une opportunité PMS pluri-millions de dollars.** L\'Azalaï Salam, le Sheraton Bamako, le Radisson Bamako, plus les plus petits hôtels business autour du corridor aéroport et le district Bamako-Diaspora, ont tous besoin de PMS moderne, channel manager, moteur de réservation, intégration F&B, et tarification dynamique IA — particulièrement pour le cycle de demande d\'hébergement de sommets diplomatiques (haute occupation pendant les sommets UA à dollar premium, cycles normaux voyage d\'affaires entre).',
          '**La densification de Bamako est le troisième pilier.** Nouvel immobilier commercial autour du quartier central des affaires de Bamako, nouveaux développements résidentiels dans les quartiers de classe moyenne supérieure (Hamdallaye, Sébénikoro), et modernisation de bâtiments gouvernementaux ont tous besoin de gestion intégrée de bâtiment.',
        ],
      },
      {
        heading: 'Vertical 1 — PMS hôtelier de qualité sommet-UA',
        body: [
          '**Les hôtels de Bamako opèrent sur un profil de demande dual-mode auquel la plupart des systèmes PMS internationaux ne sont pas optimisés.** Le voyage d\'affaires normal est régulier mais de faible volume (cadres miniers, personnel ONG, voyageurs de la commission CEDEAO). Puis 4-6 fois par an, la ville hôte une réunion de sous-commission UA, un sommet CEDEAO, un rassemblement diplomatique, ou une conférence industrielle minière majeure — et l\'occupation pointe de 40-50% à 95%+ pour 5-7 jours à des tarifs significativement élevés. Le PMS, channel manager et systèmes de gestion des revenus doivent gérer les deux modes.',
          '**Azalaï Hotels Group (le plus grand opérateur hôtelier sahélien, basé à Bamako avec propriétés à travers Mali, Sénégal, Côte d\'Ivoire, Guinée, Burkina Faso, Mauritanie, Bénin)** est l\'acheteur logiciel hôtelier stratégiquement le plus important de la région. Un déploiement PMS multi-propriétés pour Azalaï, calibré pour le pattern de demande sommet diplomatique, avec support profil-client français + arabe + bambara et intégration avec les grandes OTAs plus les canaux de réservation voyageur officiel UA/CEDEAO, serait un engagement 6-12M$ sur 18-24 mois — et le modèle opérationnel devient un déploiement de référence PMS pan-sahélien pour Symloop.',
          'Pour les propriétés indépendantes (Sheraton Bamako, Radisson, les hôtels business plus petits), la taille d\'engagement est 1-2M$ par propriété sur 6 mois.',
        ],
      },
      {
        heading: 'Vertical 2 — BMS gestion bâtiment pour Bamako',
        body: [
          'L\'approvisionnement électrique de Bamako (EDM, Energie du Mali) s\'est nettement amélioré sur 2022-2026 mais a encore des problèmes de fiabilité qui rendent l\'orchestration de backup-power et la gestion énergie opérationnellement critiques pour tout nouveau bâtiment commercial ou résidentiel. **Le nouvel immobilier commercial dans le quartier central des affaires, les programmes de modernisation de bâtiments gouvernementaux (Ministère des Affaires Étrangères, Ministère des Mines, ANTIM), et les développements résidentiels de classe moyenne supérieure dans Hamdallaye et Sébénikoro ont tous besoin de gestion intégrée de bâtiment.**',
          'La réalité éditeur : les intégrateurs français déploient Schneider EcoStruxure à tarification française (80-150K€ par bâtiment plus maintenance annuelle). Les firmes pan-africaines bricolent du hardware standard avec une intégration qui lutte avec la réalité du réseau électrique de Bamako. Il n\'y a aucun éditeur BMS enraciné Bamako à l\'échelle.',
          '**La plateforme BMS de Symloop** — déployée dans des contextes algériens, libyens et mauritaniens avec des caractéristiques d\'instabilité de grid similaires — colle nativement à Bamako. **Coût : 25-50K$ par bâtiment. Hardware ESP32, fabriqué à Alger, personnalisable pour exigences spécifiques maliennes. UI français + bambara + arabe. Optimisation énergie + eau + occupation IA. Transfert de code source à l\'opérateur malien en fin d\'engagement.**',
        ],
      },
      {
        heading: 'Vertical 3 — Logiciel opérationnel minier-adjacent',
        body: [
          '**Barrick Gold à Loulo-Gounkoto est l\'acheteur logiciel minier stratégiquement le plus important au Mali.** Barrick est un major minier global avec décisions IT corporate prises à Toronto, mais les décisions logicielles opérationnelles sont prises sur site, et le pattern de Barrick est de procurer des partenaires de livraison contexte-local pour le logiciel spécifique au site avec MSAs éditeurs globaux au-dessus. Le coin Symloop : présence ingénierie française native à Bamako, hardware fabriqué pour le climat sahélien, coûts d\'engagement 50% en dessous de ce que les éditeurs tier-global de Barrick citent, et une profondeur deep-tech IA-first qui s\'aligne avec l\'agenda de modernisation de Barrick.',
          '**Resolute Mining à Syama** est similaire en profil — major minier coté en Australie avec une opération sahélienne. Le modèle de procurement est MSA global + SOW contexte-local. Symloop est positionné pour être le partenaire de livraison contexte-local pour maintenance prédictive, monitoring environnemental, gestion eau, et reporting conformité.',
          '**B2Gold à Fekola** est le troisième major. La stack logicielle opérationnelle — gestion de flotte pour équipement minier lourd, contrôle qualité vision sur la ligne de traitement, monitoring environnemental et eau, reporting ESG en français pour les régulateurs maliens — est exactement ce que l\'équipe ingénierie minière-et-énergie de Symloop a livré en Algérie pour Sonatrach et les opérateurs heavy-industry régulés adjacents.',
          'Plus les **opérations minières plus petites stakeholder-malien-état** (Société des Mines de Kayes, les coentreprises, les programmes d\'amélioration artisanal-à-industriel) ont besoin de transformation digitale que les éditeurs miniers globaux ne priorisent pas. Un engagement plateforme minière pan-malien est une opportunité 5-10M$, 24 mois.',
        ],
      },
      {
        heading: 'Pourquoi un partenaire algérien spécifiquement — versus français, sénégalais, global',
        body: [
          '**Versus firmes françaises** : Symloop est 50-60% moins cher pour profondeur d\'ingénierie équivalente. Les ingénieurs seniors algériens ont étudié à travers des curricula très proches des grandes écoles françaises (École Polytechnique d\'Alger, ÉNS Alger, USTHB) et livrent un travail d\'ingénierie indiscernable des ingénieurs formés en France — à 40-60% des taux jour d\'agence française. Présence locale persistante à Bamako pendant les engagements.',
          '**Versus firmes pan-africaines sénégalaises** : Symloop est structurellement plus grand (25+ ingénieurs seniors vs. les 5-15 typiques des boutiques sénégalaises), profondeur IA-first en production à l\'échelle, et libre du problème de livraison étalée mince à travers 15 pays qui affecte les plus grands opérateurs pan-africains basés à Dakar. Plus capacité arabe native (qui compte moins au Mali qu\'en Mauritanie, mais compte pour certains acheteurs gouvernement et commerce traditionnel).',
          '**Versus éditeurs miniers globaux (Hexagon, Maptek, Sandvik AutoMine)** : Symloop est le partenaire de livraison contexte-local pour les composants que ces globaux ne priorisent pas — interfaces opérationnelles langue française, hardware IoT fabriqué localement calibré pour l\'environnement sahélien, présence ingénierie persistante sur site pendant le déploiement initial, transfert de code source à l\'opérateur en fin d\'engagement.',
        ],
      },
      {
        heading: 'Ce qu\'un opérateur malien fait la semaine prochaine',
        body: [
          '**Premièrement**, commander un cadrage de 2 semaines sur le vertical spécifique — logiciel opérationnel minier-adjacent, PMS hôtelier de qualité sommet-UA, gestion bâtiment BMS, ou smart home. 30-60K$. Résultat : un board paper défendable montrant ce que Symloop livre, dans quel délai, à quel coût — versus alternatives françaises et pan-africaines.',
          '**Deuxièmement**, structurer l\'engagement comme livraison forfait pilotée par jalons. Logiciel opérationnel minier-adjacent : 18-24 mois, 4-8M$. Déploiement PMS hôtelier sommet-UA : 6-12 mois, 1-2M$ par propriété (multi-propriétés pour Azalaï : 6-12M$ sur 18-24 mois). Déploiement bâtiment BMS : 3-4 mois par bâtiment à 25-50K$.',
          '**Troisièmement**, prendre la propriété du code source et déploiement on-premise ou cloud souverain comme défaut contractuel. Pour engagements miniers avec majors globaux (Barrick, Resolute, B2Gold), la structure contractuelle est MSA + SOW avec corporation parente globale, avec Symloop comme partenaire de livraison contexte-local. Pour engagements stakeholder-malien-état (Société des Mines de Kayes, modernisation gouvernementale), structure procurement public avec cadrage approuvé en conseil.',
        ],
      },
    ],
    takeaways: {
      title: 'Six points à retenir',
      items: [
        'L\'opportunité mine d\'or + hôtels Bamako + gestion bâtiment du Mali implique 120M$+ de demande logicielle sur 2026-2030, servie aujourd\'hui par éditeurs français et globaux à tarification premium.',
        'Symloop gagne sur agences françaises sur coût (50-60% moins cher), sur firmes pan-africaines sénégalaises sur profondeur et posture IA-first, sur éditeurs miniers globaux sur livraison contexte-local et propriété du code source.',
        'Barrick Gold (Loulo-Gounkoto), Resolute (Syama), B2Gold (Fekola) : logiciel opérationnel minier-adjacent est une opportunité 24 mois, 4-8M$ par major-opérateur.',
        'Azalaï Hotels Group PMS multi-propriétés : 6-12M$, 18-24 mois, déploiement de référence pan-sahélien. Déploiements single-propriété (Sheraton Bamako, Radisson) : 1-2M$ par propriété sur 6 mois.',
        'BMS gestion bâtiment pour densification Bamako : 25-50K$ par bâtiment, pas de frais récurrents, UI français + bambara + arabe, optimisation énergie + eau + occupation IA.',
        'La tarification dynamique sommet diplomatique (4-6 événements haute occupation par an) est le différenciateur que le PMS hôtelier qualité sommet-UA doit gérer — les systèmes PMS internationaux standard n\'optimisent pas correctement ce profil de demande dual-mode.',
      ],
    },
    faq: [
      { q: 'Pourquoi une firme algérienne est-elle crédible comme partenaire logiciel au Mali spécifiquement ?',
        a: 'Trois raisons. Profondeur d\'ingénierie au bon point de prix (25+ ingénieurs seniors de curricula très proches des grandes écoles françaises, à 50-60% en dessous des taux d\'agence française). Voisinage géographique et culturel (frontière terrestre Algérie-Mali avec lien logistique et culturel trans-saharien de longue date ; les ingénieurs Symloop maintiennent résidence Bamako pendant les engagements). Profondeur deep-tech IA-first à l\'échelle — la plupart des firmes servant Bamako n\'ont pas construit la capacité ingénierie IA qui correspond aux exigences modernes minières et hôtelières.' },
      { q: 'Comment Symloop travaille-t-il avec les majors miniers globaux comme Barrick Gold ou B2Gold ?',
        a: 'Symloop est le partenaire de livraison contexte-local. Les primes (Barrick, Resolute, B2Gold) maintiennent les décisions IT corporate au siège (Toronto, Perth, Vancouver). Symloop livre les composants logiciels in-country : maintenance prédictive sur équipement local, contrôle qualité vision computationnelle sur la ligne de traitement, monitoring environnemental et eau, reporting conformité au Ministère des Mines et du Pétrole malien en français. Nous travaillons sous structures MSA + SOW communes au minier global, avec livraison forfait pilotée par jalons, hardware IoT fabriqué localement (à Alger), et transfert de code source à l\'opérateur en fin d\'engagement.' },
      { q: 'Qu\'est-ce qui rend un "PMS hôtelier qualité sommet-UA" différent d\'un PMS hôtelier standard ?',
        a: 'Deux réalités opérationnelles. (1) Demande dual-mode : voyage d\'affaires normal (40-50% occupation) entrelacé avec 4-6 semaines de sommets diplomatiques par an (95%+ occupation à tarifs substantiellement élevés) — le modèle de tarification dynamique et gestion des revenus doit gérer correctement les deux modes. (2) Gestion de profil client diplomatique : les réservations voyageur officiel arrivent via canaux officiels UA et CEDEAO avec exigences de reporting spécifiques (chambres comp VIP, remises taux gouvernement, profils client protocole officiel, intégration sécurité et coordination de visite).' },
      { q: 'Quel est le profil d\'engagement multi-propriétés Azalaï Hotels Group ?',
        a: 'Azalaï est le plus grand opérateur hôtelier sahélien, basé à Bamako avec propriétés à travers Mali, Sénégal, Côte d\'Ivoire, Guinée, Burkina Faso, Mauritanie, Bénin. Un déploiement PMS multi-propriétés pour Azalaï est structuré comme un déploiement par phases : flagship Bamako mois 1-6, expansion régionale (Dakar, Abidjan, Conakry, Ouagadougou, Nouakchott, Cotonou) mois 6-18, consolidation reporting central et gestion des revenus mois 12-24. Engagement total : 6-12M$ sur 18-24 mois.' },
      { q: 'Comment Symloop gère-t-il les exigences linguistiques français-bambara-arabe ?',
        a: 'Le français est la langue de travail principale pour business et gouvernement maliens — les ingénieurs Symloop sont français-natifs ou français-fluent. Le bambara est la langue parlée quotidienne à travers une grande partie de la main-d\'œuvre et de la base client — Symloop construit des variantes UI langue bambara et modèles IA NLP pour chatbots, compréhension de document, et flux client-facing où le bambara compte opérationnellement (service client hôtellerie, certaines interfaces gouvernement). L\'arabe est une langue secondaire avec portée opérationnelle limitée au Mali mais compte pour certains acheteurs commerce traditionnel et interfaces finance islamique — la capacité arabe native de Symloop couvre cela sans coordination éditeur supplémentaire.' },
    ],
    relatedServices: {
      heading: 'Capacités appliquées ici',
      items: [
        { name: 'Intelligence Artificielle — maintenance prédictive, vision QC, NLP français + bambara',  href: '/services/ai/' },
        { name: 'IoT & Systèmes Industriels — hardware ESP32, capteurs, intégration PLC',                href: '/services/iot/' },
        { name: 'Ingénierie logicielle — ERP, PMS, plateforme gestion bâtiment, déploiement souverain',  href: '/services/software-engineering/' },
        { name: 'Conseil technologique — évaluation éditeur-vs-build, support marché public',            href: '/services/consulting/' },
      ],
    },
    relatedInsights: {
      heading: 'À lire ensuite',
      items: [
        { name: 'Libye 2026 — partenaire IA pour économie de reconstruction',                  href: '/insights/libya/' },
        { name: 'Mauritanie 2026 — partenaire Atlantic gateway + boom minier',                 href: '/insights/mauritania/' },
        { name: 'Ingénierie hôtellerie — du verrouillage PMS à la conversion en réservation directe', href: '/insights/hospitality/' },
      ],
    },
    cta: {
      eyebrow: 'Parlez à l\'équipe qui livre au Mali',
      title:   'Vous envisagez un PMS hôtelier qualité sommet-UA, du logiciel opérationnel minier-adjacent, ou une plateforme BMS au Mali ? Nous cadrons en deux semaines et livrons en huit mois.',
      button:  'Démarrer la conversation de cadrage',
    },
    backToHub: 'Retour à toutes les études',
  },

  ar: {
    kind:        'تقرير قطري',
    titleSeo:    'مالي 2026 — شريك هندسة الذكاء الاصطناعي لباماكو وذهب الساحل',
    dekSeo:      'لـ Barrick Loulo وResolute وB2Gold وAzalaï Hotels وSheraton Bamako والوزارات التي تحدّث بنية تحتية لقمم الاتحاد الإفريقي: كيف يشحن Symloop PMS الفنادق وإدارة المباني وERP التعدين المجاور بسياق فرنسي وعربي مغاربي أصلي.',
    title:       'مالي 2026 — شريك الهندسة لباماكو وذهب الساحل والبنية التحتية الدبلوماسية.',
    dek:         'تقرير قطري للمشترين الماليين — Barrick Gold (Loulo-Gounkoto) وResolute Mining (Syama) وB2Gold (Fekola) وAzalaï Hotels وSheraton Bamako ومطوّري عقارات باماكو وEDM والوزارات. لماذا يناسب شريك هندسي جزائري بهندسة فرنسية أصلية وعمق deep-tech AI-first مالي أفضل من الوكالات الفرنسية أو البوتيكات السنغالية.',
    chart: {
      label:      'الوقت إلى الإنتاج · بائع دولي مقابل Symloop',
      before:     { label: 'بائع FR/أفريقي', value: 28, unit: 'شهر' },
      after:      { label: 'Symloop', value: 8, unit: 'شهر' },
      deltaLabel: '3.5x أسرع · 50-60٪ أقل تكلفة · نفس عمق الهندسة',
      note:       'مقياس مركب — مهام برمجيات تم تسليمها لعملاء ماليين وجزائريين وسنغاليين وغرب أفريقيين.',
    },
    publishedAt: 'مايو 2026',
    readTime:    '16 دقيقة قراءة',
    pages:       '26 صفحة',
    author:      'أبحاث سيملوب',
    intro: [
      'مالي في 2026 هي ثالث أكبر منتج للذهب في إفريقيا، اقتصاد ساحلي بثروة معدنية عميقة، ومضيف متكرّر لمحور دبلوماسي لاجتماعات الاتحاد الإفريقي وECOWAS في باماكو. **Barrick Gold تشغّل مجمع Loulo-Gounkoto. Resolute Mining تشغّل Syama. B2Gold تشغّل Fekola.**',
      'الواقع البائع في مالي مشابه لموريتانيا، مع تطوّر. **الوكالات الفرنسية** مسعّرة بأسعار فرنسية. **الشركات الأفريقية السنغالية** بهياكل تكلفة أفضل لكن ممتدة عبر بلدان متعدّدة. **أو البائعون الخليجيون** للعقود الكبيرة جداً.',
      '**موقع Symloop يملأ الفجوة**: هندسة فرنسية أصلية، deep-tech AI-first مع 25+ مهندساً أقدم، جار جغرافي، ونموذج تسليم يحافظ على حضور محلي مستمر في باماكو. **ثلاث قطاعات تشكّل الإسفين: PMS فندقي بجودة قمم UA، إدارة المباني BMS لباماكو، وبرمجيات تشغيلية مجاورة للتعدين.**',
    ],
    sections: [
      {
        heading: 'إسفين البرمجيات المالي — محسوباً بالدولار',
        body: [
          '**التعدين الذهبي هو أكبر فرصة برمجيات في مالي بكثير.** مجمع Loulo-Gounkoto من Barrick يحتاج صيانة تنبؤية مستمرة على معدّات التعدين الثقيلة. مهمة 24 شهراً بـ 4-8 مليون دولار.',
          '**Resolute Mining في Syama وB2Gold في Fekola لديهم ملفات مشابهة.** **فرصة برمجيات التعدين الإجمالية في 2026-2030: 30-60 مليون دولار.**',
          '**ترقية مخزون فنادق باماكو هي فرصة PMS بعدّة ملايين دولار.** Azalaï Salam وSheraton Bamako وRadisson Bamako كلها تحتاج PMS حديث.',
          '**تكثيف باماكو هو الركيزة الثالثة.** عقارات تجارية جديدة، تطويرات سكنية للطبقة المتوسطة العليا، تحديث المباني الحكومية.',
        ],
      },
      {
        heading: 'القطاع 1 — PMS فندقي بجودة قمم UA',
        body: [
          '**فنادق باماكو تعمل على ملف طلب ثنائي الوضع.** السفر التجاري العادي (40-50٪ إشغال) متشابك مع 4-6 أسابيع من القمم الدبلوماسية في السنة (95٪+ إشغال).',
          '**Azalaï Hotels Group هي المشتري البرمجي الفندقي الأكثر أهمية استراتيجياً في المنطقة.** مشاركة PMS متعدّدة العقارات لـ Azalaï: 6-12 مليون دولار على 18-24 شهراً.',
          'للعقارات المستقلة (Sheraton Bamako، Radisson)، حجم المشاركة 1-2 مليون دولار لكل عقار على 6 أشهر.',
        ],
      },
      {
        heading: 'القطاع 2 — BMS لإدارة المباني لباماكو',
        body: [
          '**العقارات التجارية الجديدة، تحديث المباني الحكومية، والتطويرات السكنية للطبقة المتوسطة العليا في باماكو كلها تحتاج إدارة مباني متكاملة.**',
          'الواقع البائع: المتكاملون الفرنسيون ينشرون Schneider EcoStruxure بأسعار فرنسية. لا يوجد بائع BMS متجذّر في باماكو على نطاق واسع.',
          '**منصة BMS من Symloop** تناسب باماكو أصلياً. **التكلفة: 25-50 ألف دولار لكل مبنى. هاردوير ESP32. واجهة فرنسية + بمبارا + عربية.**',
        ],
      },
      {
        heading: 'القطاع 3 — برمجيات تشغيلية مجاورة للتعدين',
        body: [
          '**Barrick Gold في Loulo-Gounkoto هو المشتري البرمجي للتعدين الأكثر أهمية استراتيجياً في مالي.** Barrick هي شركة تعدين عالمية كبرى.',
          '**Resolute Mining في Syama** مشابه — شركة تعدين كبرى مدرجة في أستراليا.',
          '**B2Gold في Fekola** هي الكبرى الثالثة.',
          'بالإضافة إلى **عمليات التعدين الأصغر بصاحب المصلحة الدولة المالية**.',
        ],
      },
      {
        heading: 'لماذا شريك جزائري تحديداً — مقابل فرنسي وسنغالي وعالمي',
        body: [
          '**مقابل الشركات الفرنسية**: Symloop أرخص 50-60٪ لعمق هندسي مكافئ.',
          '**مقابل الشركات الأفريقية السنغالية**: Symloop أكبر هيكلياً (25+ مهندساً أقدم).',
          '**مقابل بائعي برمجيات التعدين العالميين**: Symloop هو شريك تسليم سياق محلي.',
        ],
      },
      {
        heading: 'ماذا يفعل المشغّل المالي الأسبوع القادم',
        body: [
          '**أولاً**، تكليف تحديد نطاق لأسبوعين. 30-60 ألف دولار.',
          '**ثانياً**، هيكلة المشاركة كتسليم بسعر ثابت قائم على معالم.',
          '**ثالثاً**، أخذ ملكية كود المصدر والنشر في الموقع كافتراضي تعاقدي.',
        ],
      },
    ],
    takeaways: {
      title: 'ستة أشياء تأخذها من هذا التقرير',
      items: [
        'فرصة التعدين الذهبي + فنادق باماكو + إدارة المباني في مالي تعني 120+ مليون دولار من الطلب البرمجي في 2026-2030.',
        'Symloop يفوز على الوكالات الفرنسية على التكلفة (50-60٪ أرخص)، على الشركات الأفريقية السنغالية على العمق، على بائعي برمجيات التعدين العالميين على التسليم بسياق محلي.',
        'Barrick Gold وResolute وB2Gold: برمجيات تشغيلية مجاورة للتعدين هي فرصة 24 شهراً، 4-8 مليون دولار لكل مشغّل رئيسي.',
        'Azalaï Hotels Group PMS متعدّد العقارات: 6-12 مليون دولار، 18-24 شهراً، نشر مرجعي عبر الساحل.',
        'BMS لإدارة المباني لتكثيف باماكو: 25-50 ألف دولار لكل مبنى.',
        'التسعير الديناميكي للقمم الدبلوماسية هو المُميِّز الذي يجب على PMS فندقي بجودة قمم UA التعامل معه.',
      ],
    },
    faq: [
      { q: 'لماذا شركة جزائرية موثوقة كشريك برمجيات في مالي تحديداً؟',
        a: 'ثلاثة أسباب. العمق الهندسي بنقطة السعر الصحيحة. الجوار الجغرافي والثقافي. عمق deep-tech AI-first على نطاق واسع.' },
      { q: 'كيف يعمل Symloop مع كبار شركات التعدين العالمية مثل Barrick Gold أو B2Gold؟',
        a: 'Symloop هو شريك تسليم سياق محلي. تحافظ الشركات الرئيسية على قرارات IT الشركة في المقر. يسلّم Symloop المكوّنات البرمجية في البلاد.' },
      { q: 'ما الذي يجعل "PMS فندقي بجودة قمم UA" مختلفاً عن PMS فندقي قياسي؟',
        a: 'حقيقتان تشغيليتان. الطلب ثنائي الوضع. إدارة ملف الضيف الدبلوماسي.' },
      { q: 'ما هو ملف مشاركة Azalaï Hotels Group متعدّد العقارات؟',
        a: 'Azalaï هي أكبر مشغّل فندقي ساحلي. نشر متعدّد العقارات لـ Azalaï: 6-12 مليون دولار على 18-24 شهراً.' },
      { q: 'كيف يتعامل Symloop مع المتطلبات اللغوية الفرنسية-البمبارا-العربية؟',
        a: 'الفرنسية هي لغة العمل الأساسية للأعمال والحكومة الماليين. البمبارا هي اللغة المنطوقة اليومية. العربية هي لغة ثانوية.' },
    ],
    relatedServices: {
      heading: 'القدرات المطبقة هنا',
      items: [
        { name: 'الذكاء الاصطناعي — صيانة تنبؤية، رؤية QC، NLP فرنسي + بمبارا',  href: '/services/ai/' },
        { name: 'IoT والأنظمة الصناعية — هاردوير ESP32، شبكات مستشعرات',          href: '/services/iot/' },
        { name: 'هندسة البرمجيات — ERP وPMS ومنصة إدارة المباني',                href: '/services/software-engineering/' },
        { name: 'الاستشارات التقنية — تقييم بائع-مقابل-بناء، دعم الشراء العام',  href: '/services/consulting/' },
      ],
    },
    relatedInsights: {
      heading: 'اقرأ بعد ذلك',
      items: [
        { name: 'ليبيا 2026 — شريك الذكاء الاصطناعي لاقتصاد إعادة الإعمار',             href: '/insights/libya/' },
        { name: 'موريتانيا 2026 — شريك بوابة الأطلسي وطفرة التعدين',                  href: '/insights/mauritania/' },
        { name: 'هندسة الضيافة — من قفل PMS إلى تحويل الحجز المباشر',                  href: '/insights/hospitality/' },
      ],
    },
    cta: {
      eyebrow: 'تحدّث إلى الفريق الذي يشحن إلى مالي',
      title:   'تفكر في PMS فندقي بجودة قمم UA أو برمجيات تشغيلية مجاورة للتعدين أو منصة BMS في مالي؟ نحدّد النطاق في أسبوعين ونشحن في ثمانية أشهر.',
      button:  'ابدأ محادثة تحديد النطاق',
    },
    backToHub: 'العودة إلى جميع التقارير',
  },
};

const SCHEMA_ABOUT = [
  { '@type': 'Thing',        name: 'Mali software engineering' },
  { '@type': 'Thing',        name: 'Mining software Mali' },
  { '@type': 'Thing',        name: 'Hotel PMS Bamako' },
  { '@type': 'Thing',        name: 'Building management Bamako' },
  { '@type': 'Thing',        name: 'AU summit hospitality software' },
  { '@type': 'Place',        name: 'Bamako' },
  { '@type': 'Place',        name: 'Kayes' },
  { '@type': 'Place',        name: 'Sikasso' },
  { '@type': 'Organization', name: 'Barrick Gold', alternateName: 'Loulo-Gounkoto' },
  { '@type': 'Organization', name: 'Resolute Mining', alternateName: 'Syama' },
  { '@type': 'Organization', name: 'B2Gold', alternateName: 'Fekola' },
  { '@type': 'Organization', name: 'Société des Mines de Kayes' },
  { '@type': 'Organization', name: 'Azalaï Hotels Group' },
  { '@type': 'Organization', name: 'Sheraton Bamako' },
  { '@type': 'Organization', name: 'EDM', alternateName: 'Énergie du Mali' },
];

const SCHEMA_MENTIONS = SCHEMA_ABOUT.filter(o => o['@type'] === 'Organization');

const SCHEMA_AUDIENCE = {
  '@type': 'BusinessAudience',
  audienceType: 'Malian operators, Barrick Loulo-Gounkoto site management, Resolute Syama, B2Gold Fekola, Azalaï Hotels Group executives, Sheraton Bamako, Bamako real-estate developers, EDM executives, Ministry of Mines & Petroleum, Ministry of Digital Transformation',
};

const KEYWORDS = "logiciel mali, ingénierie logicielle mali, AI Mali, software development Mali, hotel PMS Bamako, hotel software Bamako, BMS Mali, building management Bamako, BMS Mali, smart home Bamako, domotique Mali, mining software Mali, Barrick Loulo-Gounkoto software, Resolute Syama, B2Gold Fekola, Société Mines Kayes, Azalaï Hotels PMS, Sheraton Bamako software, EDM software, Bamako real estate software, AU summit hotel software, ECOWAS summit hospitality, sovereign software Mali, AI Mali hospitality, AI Mali mining, Bamako smart home, Mali hotel automation, Mali residential automation, Mali energy management, partenaire ingénierie Mali, PMS hôtel Mali, gestion bâtiment Mali, maison intelligente Mali, automatisation Mali, Algérie ingénierie pour Mali, bambara software, sahel software, Symloop Mali, Hamdallaye smart home, Sébénikoro BMS";

// Bamako hotel occupancy curve. Baseline 40-50% with 4 spikes per year
// at 95%+ during AU and ECOWAS summit weeks. The chart shows the
// dual-mode demand profile that AU-summit-grade PMS systems must
// handle correctly — a story you cannot tell with a comparison bar.
const POINTS    = [42, 48, 95, 50, 45, 92, 55, 48, 88, 52, 90, 47];
const SUMMITS_EN = [
  { idx: 2,  value: 95, label: 'AU summit' },
  { idx: 5,  value: 92, label: 'ECOWAS' },
  { idx: 8,  value: 88, label: 'Mining conf.' },
  { idx: 10, value: 90, label: 'AU sub-cmm.' },
];
const SUMMITS_FR = [
  { idx: 2,  value: 95, label: 'Sommet UA' },
  { idx: 5,  value: 92, label: 'CEDEAO' },
  { idx: 8,  value: 88, label: 'Conf. mines' },
  { idx: 10, value: 90, label: 'Sous-com. UA' },
];
const SUMMITS_AR = [
  { idx: 2,  value: 95, label: 'قمة UA' },
  { idx: 5,  value: 92, label: 'ECOWAS' },
  { idx: 8,  value: 88, label: 'مؤتمر تعدين' },
  { idx: 10, value: 90, label: 'لجنة UA' },
];

const CHART_DATA = {
  fr: {
    label:       'Demande hôtelière Bamako 2026 · occupation par mois',
    monthsLabel: ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Aoû','Sep','Oct','Nov','Déc'],
    points:      POINTS,
    summits:     SUMMITS_FR,
    note:        'Pattern de demande hôtelière dual-mode à Bamako : occupation business steady à 40-50% entrelacée avec 4-6 spikes de 88-95% lors des sommets UA / CEDEAO / mining conferences. Le PMS et le revenue management doivent gérer les deux modes — la plupart des systèmes internationaux ne le font pas correctement.',
  },
  en: {
    label:       'Bamako hotel demand 2026 · monthly occupancy',
    monthsLabel: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    points:      POINTS,
    summits:     SUMMITS_EN,
    note:        'Bamako dual-mode hotel demand profile: 40-50% steady business occupancy interleaved with 4-6 spikes at 88-95% during AU / ECOWAS / mining-conference weeks. PMS and revenue management must handle both modes correctly — most international systems do not.',
  },
  ar: {
    label:       'طلب فنادق باماكو 2026 · الإشغال الشهري',
    monthsLabel: ['ين','ف','مر','أبر','مي','يو','يل','أغ','سب','أك','نو','دس'],
    points:      POINTS,
    summits:     SUMMITS_AR,
    note:        'ملف طلب فنادق باماكو ثنائي الوضع: إشغال أعمال ثابت 40-50٪ متشابك مع 4-6 ارتفاعات بـ 88-95٪ خلال قمم UA / ECOWAS / مؤتمرات التعدين. يجب على PMS وإدارة الإيرادات التعامل مع كلا الوضعين بشكل صحيح — معظم الأنظمة الدولية لا تفعل ذلك.',
  },
};

function MaliChart() {
  const { locale } = useRouter();
  const d = CHART_DATA[locale] || CHART_DATA.en;
  return (
    <DemandCurveChart
      label={d.label}
      monthsLabel={d.monthsLabel}
      points={d.points}
      summits={d.summits}
      note={d.note}
    />
  );
}

export default function InsightMaliPage() {
  return (
    <CountryInsightTemplate
      content={CONTENT}
      slug="mali"
      publishedDate="2026-05-25"
      coverImage="/insights/cover-mali.jpg"
      schemaAbout={SCHEMA_ABOUT}
      schemaMentions={SCHEMA_MENTIONS}
      schemaAudience={SCHEMA_AUDIENCE}
      keywords={KEYWORDS}
      customChart={<MaliChart />}
    />
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'fr', ['common'])),
    },
  };
}
