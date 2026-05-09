// ============================================================================
// SYMLOOP — /locations/alger/iot/
// City × service: IoT & industrial systems for Sonatrach, Sonelgaz, and Algiers industrial belt.
// ============================================================================

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocationServiceLayout from '../../../components/locations/LocationServiceLayout';

const CONTENT = {
  fr: {
    eyebrow:     'Alger · Capitale · IoT industriel',
    publishedAt: 'Mis à jour Avril 2026',
    title:       "L'IoT industriel à Alger — du capteur jusqu'au tableau de bord directionnel.",
    dek:         "Le seul atelier IoT basé à Alger qui livre des solutions complètes pour Sonatrach, Sonelgaz, leurs filiales, et la ceinture industrielle de la capitale. Électronique, firmware, passerelles, backend cloud, dashboards temps réel.",
    meta: { one: 'Alger · Bab Ezzouar · Rouiba · Réghaïa', two: 'Hydrocarbures · Énergie · Industrie lourde', three: 'Siège Symloop' },
    intro: [
      "Si vous êtes responsable opérations ou maintenance dans un grand groupe industriel à Alger ou dans la ceinture algéroise, vous savez que **chaque heure d'arrêt non planifié coûte entre dix et cent millions de dinars**, selon le site et le moment. C'est précisément le contexte dans lequel l'IoT industriel a un sens — pas pour faire joli, pas pour des dashboards qui finissent en PDF.",
      "Cette page n'est pas un argumentaire. C'est un portrait de **comment l'IoT industriel sérieux fonctionne réellement à Alger en 2026**, et pourquoi nous sommes l'un des rares ateliers algériens qui livre la stack complète — du capteur ESP32 jusqu'au dashboard que regarde le directeur de site.",
    ],
    contact: { eyebrow: '— Réponse en moins de 4 heures', title: "Parlez à un ingénieur IoT. Pas à un commercial.", body: "Nous répondons sur WhatsApp en moins de 4 heures pendant les heures ouvrables d'Alger.", whatsapp: 'WhatsApp', phone: 'Appel direct', ai: 'Demander à notre assistant IA →' },
    stats: {
      eyebrow: '— Chiffres réels',
      items: [
        { value: '500K+', label: "Points de mesure en production sur sites algérois" },
        { value: '8',     label: 'Sites industriels équipés à Alger et alentours' },
        { value: '< 4h',  label: 'Temps de réponse moyen' },
        { value: '99.9%', label: "Disponibilité moyenne des passerelles terrain" },
      ],
    },
    pullQuote1: "L'IoT industriel à Alger, c'est mesurer ce qui se passe sur une chaîne de production, pas vendre des dashboards en PowerPoint.",
    pullQuote2: "Une heure d'arrêt évitée sur une raffinerie paye dix années de capteurs.",
    sections: [
      {
        heading: "Pourquoi l'IoT industriel à Alger est différent",
        body: [
          "Alger et sa ceinture industrielle (Rouiba, Réghaïa, Boudouaou) concentrent **les sièges et les sites de production des plus grands groupes industriels d'Algérie** : hydrocarbures (Sonatrach et filiales), énergie (Sonelgaz), agroalimentaire, cimenteries, sidérurgie. Ces sites partagent trois caractéristiques.",
          "Première : **l'enjeu financier d'un arrêt non planifié est massif**. Une raffinerie qui s'arrête coûte plusieurs millions de dollars par jour. Une cimenterie qui rate un cycle perd des dizaines de millions de dinars. Deuxième : **les équipements existants sont anciens** — souvent des automates Siemens, Schneider ou Allen-Bradley installés dans les années 1990-2000, sans aucune connectivité moderne. Troisième : **le personnel maintenance est expérimenté mais débordé** — chaque ingénieur gère vingt fois plus d'équipements qu'il ne peut suivre manuellement.",
        ],
      },
      {
        heading: "Ce que nous livrons à Alger",
        body: [
          "Nos engagements IoT à Alger se concentrent sur quatre catégories.",
          "Premier : **la maintenance prédictive sur équipements critiques**. Capteurs vibrations, température, pression, courant ajoutés sur les pompes, compresseurs, turbines, fours, broyeurs. Modèles ML qui prédisent les pannes avant qu'elles n'arrivent.",
          "Deuxième : **le monitoring temps réel de production**. Dashboard pour les directeurs de site qui voient en direct les indicateurs critiques : OEE, débit, consommation énergétique, qualité produit, alertes par exception.",
          "Troisième : **les passerelles entre l'OT et l'IT**. Connexion sécurisée des automates existants (PLC, SCADA) au monde IT moderne, sans casser ni remplacer l'existant. Modbus, OPC-UA, MQTT, Kafka.",
          "Quatrième : **les dashboards directionnels**. Vue consolidée multi-sites pour les groupes qui exploitent plusieurs usines en Algérie. Le directeur général voit en temps réel l'état de tous ses sites depuis Alger.",
        ],
      },
      {
        heading: "La même rigueur pour le grand groupe et la PME industrielle",
        body: [
          "Notre client le plus visible cette année est un grand groupe industriel algérien. Notre projet le plus exigeant techniquement déploie 120 000 points de mesure sur un seul site. Mais sur le même calendrier, nous équipons **une PME algéroise de transformation alimentaire** avec 200 capteurs et un dashboard simple.",
          "C'est volontaire. Nous refusons l'idée qu'une PME industrielle mérite une solution moins bien conçue qu'un grand groupe. **Les mêmes capteurs industriels, les mêmes protocoles, la même méthodologie de déploiement.** L'échelle est différente, mais la qualité est la même.",
          "Ce que nous adaptons, c'est **le périmètre, pas la rigueur**. Une PME a besoin d'un projet qui livre du ROI en six mois sur ses cinq équipements les plus critiques. C'est ce que nous livrons.",
        ],
      },
      {
        heading: "Comment nous travaillons avec les sites algérois",
        body: [
          "**Notre équipe IoT est à Alger.** Pour chaque mission, nous sommes sur site. Nous ne livrons jamais d'IoT sans avoir vu l'usine, parlé aux opérateurs, et compris la réalité du terrain. C'est la différence entre un déploiement qui marche et un déploiement qui finit dans un placard.",
          "Nous concevons l'électronique sur mesure quand c'est nécessaire : PCB, boîtiers IP65, alimentation industrielle, antennes. Nous écrivons le firmware en C, Rust ou MicroPython selon les contraintes. Nous déployons les passerelles LoRaWAN, NB-IoT ou cellulaires selon la couverture.",
          "Pour les sites sensibles (hydrocarbures, énergie), nous travaillons sous habilitation de sécurité, avec NDA et procédures d'accès site standardisées. Nous avons l'expérience des contraintes ATEX, des zones explosives, et des exigences de cybersécurité industrielle (IEC 62443).",
        ],
      },
      {
        heading: "L'IoT qui livre du ROI mesurable",
        body: [
          "Plusieurs des déploiements IoT que nous avons livrés à Alger ont **payé leur investissement en moins de 12 mois** par les arrêts évités, l'énergie économisée, ou la qualité améliorée. C'est le seul test qui compte. Un projet IoT qui ne livre pas de ROI mesurable n'est pas un projet — c'est une dépense.",
          "Cela vous concerne directement : nous ne déployons pas pour déployer. Chaque mission commence par une question simple — **quelle est la décision opérationnelle que ces données vont changer ?** Si nous n'avons pas de réponse claire, nous ne livrons pas.",
        ],
      },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: {
        label: 'Disciplines liées',
        items: [
          { key: 'iot',                  name: 'IoT et systèmes industriels' },
          { key: 'ai',                   name: 'Intelligence Artificielle' },
          { key: 'cloud',                name: 'Cloud & DevOps' },
        ],
      },
      insights: { label: 'Études liées', items: [{ key: 'ai', name: "Automatisation IA dans l'entreprise algérienne — 2026" }] },
    },
    cta: { eyebrow: 'Parlez à un ingénieur IoT basé à Alger', title: "Vous avez un site industriel à Alger qui doit être instrumenté ? Décrivez votre situation en cinq minutes.", button: 'Formulaire de contact' },
  },

  en: {
    eyebrow:     'Algiers · Capital · Industrial IoT',
    publishedAt: 'Updated April 2026',
    title:       'Industrial IoT in Algiers — from sensor to executive dashboard.',
    dek:         "The only IoT workshop headquartered in Algiers that ships complete solutions for Sonatrach, Sonelgaz, their subsidiaries, and the capital's industrial belt. Electronics, firmware, gateways, cloud backend, real-time dashboards.",
    meta: { one: 'Algiers · Bab Ezzouar · Rouiba · Réghaïa', two: 'Oil & Gas · Energy · Heavy industry', three: 'Symloop HQ' },
    intro: [
      "If you run operations or maintenance for a large industrial group in Algiers or the Algerian capital belt, you know that **every hour of unplanned downtime costs between ten and one hundred million dinars**, depending on the site. That is exactly the context where industrial IoT makes sense — not for show, not for PowerPoint dashboards.",
      'This page is not a pitch. It is a portrait of **how serious industrial IoT actually works in Algiers in 2026**, and why we are one of the few Algerian workshops that ships the full stack — from the ESP32 sensor to the dashboard the site director looks at.',
    ],
    contact: { eyebrow: '— Reply within 4 hours', title: 'Talk to an IoT engineer. Not a salesperson.', body: 'We reply on WhatsApp within 4 hours during Algiers business hours.', whatsapp: 'WhatsApp', phone: 'Direct call', ai: 'Ask our AI assistant →' },
    stats: {
      eyebrow: '— Real numbers',
      items: [
        { value: '500K+', label: 'Measurement points in production on Algiers sites' },
        { value: '8',     label: 'Industrial sites equipped in and around Algiers' },
        { value: '< 4h',  label: 'Average response time' },
        { value: '99.9%', label: 'Average field gateway availability' },
      ],
    },
    pullQuote1: 'Industrial IoT in Algiers means measuring what happens on a production line, not selling PowerPoint dashboards.',
    pullQuote2: 'One hour of downtime avoided on a refinery pays for ten years of sensors.',
    sections: [
      {
        heading: 'Why industrial IoT in Algiers is different',
        body: [
          "Algiers and its industrial belt (Rouiba, Réghaïa, Boudouaou) concentrate **the headquarters and production sites of Algeria's largest industrial groups**: oil and gas (Sonatrach and subsidiaries), energy (Sonelgaz), food processing, cement, steel.",
          'First: **the financial stakes of unplanned downtime are massive**. Second: **existing equipment is old** — often Siemens, Schneider, or Allen-Bradley PLCs from the 1990s-2000s, with no modern connectivity. Third: **maintenance personnel are experienced but overwhelmed**.',
        ],
      },
      {
        heading: 'What we deliver in Algiers',
        body: [
          'Our IoT engagements in Algiers focus on four categories.',
          'First: **predictive maintenance on critical equipment**. Vibration, temperature, pressure, current sensors added to pumps, compressors, turbines, furnaces, mills. ML models predicting failures before they happen.',
          'Second: **real-time production monitoring**. Dashboards for site directors showing critical indicators live: OEE, throughput, energy consumption, product quality, exception alerts.',
          'Third: **OT/IT bridges**. Secure connection of existing PLCs and SCADA to the modern IT world, without breaking or replacing the existing. Modbus, OPC-UA, MQTT, Kafka.',
          'Fourth: **executive dashboards**. Consolidated multi-site view for groups operating several plants in Algeria.',
        ],
      },
      {
        heading: 'The same rigor for the large group and the industrial SME',
        body: [
          "Our most visible client this year is a large Algerian industrial group. Our most technically demanding project deploys 120,000 measurement points on a single site. But on the same calendar, we are equipping **an Algerian food processing SME** with 200 sensors and a simple dashboard.",
          '**The same industrial sensors, the same protocols, the same deployment methodology.** Scale is different, quality is the same.',
          'What we adapt is **scope, not rigor**. An SME needs a project that delivers ROI in six months on its five most critical pieces of equipment.',
        ],
      },
      {
        heading: 'How we work with Algiers sites',
        body: [
          '**Our IoT team is in Algiers.** For every engagement, we are on-site. We never deliver IoT without having seen the factory, talked to the operators, understood the field reality.',
          'We design custom electronics when needed: PCB, IP65 enclosures, industrial power, antennas. We write firmware in C, Rust, or MicroPython. We deploy LoRaWAN, NB-IoT, or cellular gateways depending on coverage.',
          'For sensitive sites (oil, gas, energy), we work under security clearance, with NDAs and standardized site access procedures. We have experience with ATEX constraints and IEC 62443 industrial cybersecurity requirements.',
        ],
      },
      {
        heading: 'IoT that delivers measurable ROI',
        body: [
          'Several of the IoT deployments we delivered in Algiers **paid for themselves in less than 12 months** through avoided downtime, energy saved, or quality improved. An IoT project that does not deliver measurable ROI is not a project — it is an expense.',
          'This concerns you directly: we do not deploy for the sake of deploying. Every engagement starts with one question — **what operational decision will this data change?** If we do not have a clear answer, we do not deliver.',
        ],
      },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: {
        label: 'Related disciplines',
        items: [
          { key: 'iot',                  name: 'IoT & Industrial Systems' },
          { key: 'ai',                   name: 'Artificial Intelligence' },
          { key: 'cloud',                name: 'Cloud & DevOps' },
        ],
      },
      insights: { label: 'Related insights', items: [{ key: 'ai', name: 'AI automation in Algerian business — 2026' }] },
    },
    cta: { eyebrow: 'Talk to an IoT engineer based in Algiers', title: 'Have an industrial site in Algiers that needs to be instrumented? Describe your situation in five minutes.', button: 'Contact form' },
  },

  ar: {
    eyebrow:     'الجزائر العاصمة · العاصمة · إنترنت الأشياء الصناعي',
    publishedAt: 'محدّث أبريل 2026',
    title:       'إنترنت الأشياء الصناعي في الجزائر العاصمة — من المستشعر إلى لوحة القيادة التنفيذية.',
    dek:         'ورشة إنترنت الأشياء الوحيدة التي مقرها الجزائر العاصمة وتسلّم حلولاً كاملة لسوناطراك وسونلغاز وفروعها والحزام الصناعي للعاصمة.',
    meta: { one: 'الجزائر العاصمة · باب الزوار · الرويبة · رغاية', two: 'المحروقات · الطاقة · الصناعة الثقيلة', three: 'مقر سيملوب' },
    intro: [
      'إذا كنت تدير العمليات أو الصيانة لمجموعة صناعية كبرى في الجزائر العاصمة أو الحزام العاصمي، فأنت تعرف أن **كل ساعة توقف غير مخطط لها تكلف بين عشرة ومئة مليون دينار**.',
      'هذه الصفحة ليست عرضاً تجارياً. إنها صورة **لكيفية عمل إنترنت الأشياء الصناعي الجاد فعلاً في الجزائر العاصمة في 2026**.',
    ],
    contact: { eyebrow: '— الرد في أقل من 4 ساعات', title: 'تحدث مع مهندس إنترنت الأشياء. لا مع موظف مبيعات.', body: 'نرد على واتساب في أقل من 4 ساعات.', whatsapp: 'واتساب', phone: 'مكالمة مباشرة', ai: 'اسأل مساعدنا الذكي ←' },
    stats: {
      eyebrow: '— أرقام حقيقية',
      items: [
        { value: '+500K', label: 'نقاط قياس في الإنتاج على المواقع في الجزائر العاصمة' },
        { value: '8',     label: 'مواقع صناعية مجهزة في الجزائر العاصمة وحولها' },
        { value: '< 4س',  label: 'متوسط زمن الاستجابة' },
        { value: '99.9%', label: 'متوسط توافر بوابات الميدان' },
      ],
    },
    pullQuote1: 'إنترنت الأشياء الصناعي في الجزائر العاصمة يعني قياس ما يحدث على خط إنتاج، لا بيع لوحات تحكم في PowerPoint.',
    pullQuote2: 'ساعة واحدة من التوقف الذي يتم تجنبه على مصفاة تدفع ثمن عشر سنوات من المستشعرات.',
    sections: [
      {
        heading: 'لماذا إنترنت الأشياء الصناعي في الجزائر العاصمة مختلف',
        body: [
          'الجزائر العاصمة وحزامها الصناعي (الرويبة، رغاية، بودواو) تركز **مقرات ومواقع إنتاج أكبر المجموعات الصناعية في الجزائر**: المحروقات (سوناطراك وفروعها)، الطاقة (سونلغاز)، الصناعات الغذائية، الإسمنت، الحديد والصلب.',
          'أولاً: **المخاطر المالية للتوقف غير المخطط له ضخمة**. ثانياً: **المعدات الموجودة قديمة**. ثالثاً: **موظفو الصيانة ذوو خبرة لكنهم مرهقون**.',
        ],
      },
      {
        heading: 'ما الذي نسلّمه في الجزائر العاصمة',
        body: [
          'مهامنا في إنترنت الأشياء في الجزائر العاصمة تركز على أربع فئات.',
          'الأولى: **الصيانة التنبؤية على المعدات الحرجة**.',
          'الثانية: **مراقبة الإنتاج في الوقت الفعلي**.',
          'الثالثة: **جسور OT/IT** — اتصال آمن لـ PLCs و SCADA الموجودين بالعالم الحديث.',
          'الرابعة: **لوحات قيادة تنفيذية** — رؤية موحدة متعددة المواقع.',
        ],
      },
      {
        heading: 'نفس الصرامة للمجموعة الكبيرة وللشركة الصناعية الصغيرة',
        body: [
          'أكثر عملائنا ظهوراً مجموعة صناعية جزائرية كبرى. لكن في نفس الوقت، نُجهّز **شركة جزائرية لتحويل الأغذية** بـ 200 مستشعر.',
          '**نفس المستشعرات الصناعية، نفس البروتوكولات، نفس منهجية النشر.**',
          'ما نُكيّفه هو **النطاق، لا الصرامة**.',
        ],
      },
      {
        heading: 'كيف نعمل مع المواقع في الجزائر العاصمة',
        body: [
          '**فريق إنترنت الأشياء لدينا في الجزائر العاصمة.** لكل مهمة، نحن في الموقع.',
          'نصمم الإلكترونيات المخصصة عند الحاجة: PCB، علب IP65، طاقة صناعية، هوائيات. نكتب البرامج الثابتة بـ C أو Rust أو MicroPython.',
          'للمواقع الحساسة، نعمل تحت تصريح أمني مع اتفاقيات عدم إفصاح وإجراءات وصول قياسية.',
        ],
      },
      {
        heading: 'إنترنت الأشياء الذي يسلّم عائداً قابلاً للقياس',
        body: [
          'العديد من نشرات إنترنت الأشياء التي سلّمناها **دفعت ثمن نفسها في أقل من 12 شهراً** من خلال التوقف الذي تم تجنبه.',
          'هذا يعنيك مباشرة: نحن لا ننشر من أجل النشر. كل مهمة تبدأ بسؤال واحد — **ما القرار التشغيلي الذي ستغيره هذه البيانات؟**',
        ],
      },
    ],
    related: {
      eyebrow: 'للتعمق أكثر',
      services: {
        label: 'تخصصات ذات صلة',
        items: [
          { key: 'iot',                  name: 'إنترنت الأشياء والأنظمة الصناعية' },
          { key: 'ai',                   name: 'الذكاء الاصطناعي' },
          { key: 'cloud',                name: 'السحابة و DevOps' },
        ],
      },
      insights: { label: 'دراسات ذات صلة', items: [{ key: 'ai', name: 'أتمتة الذكاء الاصطناعي في الشركات الجزائرية — 2026' }] },
    },
    cta: { eyebrow: 'تحدث مع مهندس إنترنت الأشياء مقره الجزائر العاصمة', title: 'هل لديك موقع صناعي في الجزائر العاصمة يحتاج إلى تجهيز؟', button: 'نموذج الاتصال' },
  },
};

export default function Page() {
  return (
    <LocationServiceLayout
      CONTENT={CONTENT}
      pageUrl="https://symloop.com/locations/alger/iot/"
      cityName="Alger"
      cityKey="alger"
      serviceType="Industrial IoT and embedded systems"
      schemaKeywords="iot alger, iot industriel alger, capteurs industriels alger, maintenance predictive alger, esp32 alger, scada alger, modbus alger, opc-ua alger, sonatrach iot, sonelgaz iot, symloop iot algiers"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
