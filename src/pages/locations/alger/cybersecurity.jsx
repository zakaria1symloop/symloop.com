// ============================================================================
// SYMLOOP — /locations/alger/cybersecurity/
// City × service: Cybersecurity for Algiers banking and government perimeter.
// ============================================================================

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocationServiceLayout from '../../../components/locations/LocationServiceLayout';

const CONTENT = {
  fr: {
    eyebrow:     'Alger · Capitale · Cybersécurité',
    publishedAt: 'Mis à jour Avril 2026',
    title:       "La cybersécurité à Alger — pour les institutions qui sont déjà des cibles.",
    dek:         "Le seul atelier de cybersécurité basé à Alger qui livre des audits, tests d'intrusion et durcissement d'infrastructure pour les banques, l'administration et les grands groupes de la capitale. Nous supposons que vous êtes déjà compromis. Puis nous concevons pour le jour d'après.",
    meta: { one: 'Alger · Centre · Bab Ezzouar', two: 'Banques · Ministères · Industrie', three: 'Siège Symloop' },
    intro: [
      "Si vous êtes RSSI, DSI ou responsable risque dans une institution algéroise, vous savez deux choses. **Première** : vos systèmes sont attaqués chaque semaine, par des acteurs internationaux ou régionaux qui ne s'intéressent pas à votre nom mais à votre fonction. **Deuxième** : la plupart des audits que vous avez vus jusqu'à présent étaient des PowerPoint avec des recommandations génériques copiées d'OWASP, sans test réel.",
      "Cette page n'est pas un argumentaire. C'est un portrait éditorial de **comment la cybersécurité sérieuse fonctionne réellement dans la capitale algérienne en 2026**, et pourquoi nous sommes l'un des rares ateliers qui pratique des tests d'intrusion réels — pas des scans automatisés vendus comme des audits.",
    ],
    contact: { eyebrow: '— Réponse en moins de 4 heures', title: "Parlez à un ingénieur sécurité. Pas à un commercial.", body: "Nous répondons sur WhatsApp en moins de 4 heures pendant les heures ouvrables d'Alger.", whatsapp: 'WhatsApp', phone: 'Appel direct', ai: 'Demander à notre assistant IA →' },
    stats: {
      eyebrow: '— Chiffres réels',
      items: [
        { value: '50+',  label: "Tests d'intrusion livrés depuis Alger" },
        { value: '100%', label: "Vulnérabilités critiques avec plan de remédiation" },
        { value: '< 4h', label: 'Temps de réponse moyen' },
        { value: '0',    label: 'Faux positifs vendus comme critiques' },
      ],
    },
    pullQuote1: "Une institution algéroise n'a pas besoin d'un audit. Elle a besoin d'une attaque simulée par des gens qui pensent comme l'attaquant.",
    pullQuote2: "La conformité ne fait pas la sécurité. Mais l'absence de conformité garantit l'incident.",
    sections: [
      {
        heading: "Pourquoi la cybersécurité à Alger est différente",
        body: [
          "Les institutions algéroises font face à un **paysage de menaces spécifique** que la plupart des frameworks internationaux ne couvrent pas correctement. Trois facteurs changent la donne.",
          "Premier : **les acteurs régionaux**. Les attaques contre les institutions financières et étatiques en MENA viennent souvent d'acteurs étatiques ou semi-étatiques qui ont des motivations géopolitiques, pas financières. Les défenses contre une attaque opportuniste ne marchent pas contre une APT motivée. Deuxième : **les contraintes de divulgation**. La loi 18-07 et les exigences de la Banque d'Algérie créent des obligations spécifiques que les frameworks SOC 2 ou ISO 27001 ne couvrent qu'en surface. Troisième : **les compétences locales sont rares** — il y a moins de 100 ingénieurs cybersécurité seniors en Algérie, et la majorité ne pratique pas le pentest offensif.",
        ],
      },
      {
        heading: "Ce que nous livrons à Alger",
        body: [
          "Nos engagements cybersécurité à Alger se concentrent sur quatre catégories.",
          "Premier : **les tests d'intrusion réels** — externes, internes, applicatifs. Nous attaquons vos systèmes comme un attaquant motivé le ferait, avec des techniques éprouvées et des outils que les attaquants utilisent réellement. Pas un scan Nessus rebadgé.",
          "Deuxième : **les audits de code source** sur vos applications critiques, avec identification des vulnérabilités OWASP Top 10 et au-delà. Lecture manuelle, pas seulement SAST automatisé.",
          "Troisième : **le durcissement d'infrastructure cloud et on-premise**. AWS, Azure, GCP, OpenStack, VMware. Application des baselines CIS, mise en place d'IAM strict, gestion des secrets, monitoring de sécurité.",
          "Quatrième : **l'accompagnement à la conformité** SOC 2, ISO 27001, RGPD, PCI DSS, et les exigences spécifiques de la Banque d'Algérie. Nous livrons les contrôles, pas seulement la documentation.",
        ],
      },
      {
        heading: "La même rigueur pour la grande banque et la startup en pré-seed",
        body: [
          "Notre client le plus visible cette année est une institution publique algéroise. Notre projet le plus exigeant techniquement est un audit complet d'une plateforme bancaire avec plusieurs millions d'utilisateurs. Mais sur le même calendrier, nous auditons **une fintech algéroise de 12 personnes** qui prépare sa licence Banque d'Algérie.",
          "C'est volontaire. Nous refusons l'idée qu'une startup mérite un audit moins sérieux qu'une institution. **Le même processus, les mêmes outils, les mêmes ingénieurs.** Nous trouvons les vulnérabilités réelles, pas les vulnérabilités cosmétiques.",
          "Ce que nous adaptons, c'est **le périmètre, pas la rigueur**. Une startup n'a pas besoin de SOC 2 Type II le premier jour. Elle a besoin de fondations propres pour ne pas avoir à tout refaire dans deux ans.",
        ],
      },
      {
        heading: "Comment nous travaillons avec les institutions algéroises",
        body: [
          "**Notre équipe sécurité est à Alger.** Nous travaillons sous NDA dès le premier contact. Pour les institutions sensibles, nous opérons sur infrastructure isolée, sur du code qui ne sort jamais de l'environnement client, et avec des chaînes de communication chiffrées.",
          "Nous comprenons les exigences de **la loi 18-07**, les obligations de notification d'incident, les procédures d'achat des institutions publiques, et les calendriers de validation des grandes banques. Nous savons travailler avec les SOC internes existants sans les bousculer.",
          "Tous nos rapports incluent **un plan de remédiation actionnable** — pas seulement une liste de vulnérabilités. Pour chaque trouvaille, nous donnons : la sévérité réelle (pas la sévérité automatique), le risque métier, et les étapes concrètes pour fermer la faille. Quand nécessaire, nous accompagnons la remédiation sur place.",
        ],
      },
      {
        heading: "La sécurité qui survit à un vrai incident",
        body: [
          "Plusieurs des institutions que nous avons auditées à Alger ont **subi des tentatives réelles d'intrusion après notre passage**. Elles ont tenu, parce que les contrôles que nous avons recommandés et déployés fonctionnent en condition d'attaque. C'est le seul test qui compte. Tout le reste est de la décoration.",
          "Cela vous concerne directement : vous n'achetez pas un certificat de conformité. Vous achetez **une posture de sécurité qui tient quand quelqu'un essaie vraiment de vous compromettre**.",
        ],
      },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: {
        label: 'Disciplines liées',
        items: [
          { key: 'cybersecurity',        name: 'Cybersécurité' },
          { key: 'cloud',                name: 'Cloud & DevOps' },
          { key: 'consulting',           name: 'Conseil technologique' },
        ],
      },
      insights: { label: 'Études liées', items: [{ key: 'cost', name: 'Le vrai coût du développement logiciel en Algérie' }] },
    },
    cta: { eyebrow: 'Parlez à un ingénieur sécurité basé à Alger', title: "Vous êtes responsable sécurité à Alger et vous voulez un audit qui ne soit pas un PowerPoint ? Décrivez votre situation en cinq minutes.", button: 'Formulaire de contact' },
  },

  en: {
    eyebrow:     'Algiers · Capital · Cybersecurity',
    publishedAt: 'Updated April 2026',
    title:       'Cybersecurity in Algiers — for institutions that are already targets.',
    dek:         "The only cybersecurity workshop headquartered in Algiers that ships audits, penetration tests, and infrastructure hardening for the capital's banks, public administration, and large groups. We assume you are already compromised. Then we engineer for the day after.",
    meta: { one: 'Algiers · Center · Bab Ezzouar', two: 'Banking · Government · Industry', three: 'Symloop HQ' },
    intro: [
      'If you are a CISO, IT lead, or risk officer at an Algiers institution, you know two things. **First**: your systems are attacked every week, by international or regional actors who are not interested in your name but in your function. **Second**: most of the audits you have seen so far were PowerPoint with generic OWASP recommendations, with no real testing.',
      'This page is not a pitch. It is an editorial portrait of **how serious cybersecurity actually works in the Algerian capital in 2026**, and why we are one of the few workshops that does real penetration testing — not automated scans sold as audits.',
    ],
    contact: { eyebrow: '— Reply within 4 hours', title: 'Talk to a security engineer. Not a salesperson.', body: 'We reply on WhatsApp within 4 hours during Algiers business hours.', whatsapp: 'WhatsApp', phone: 'Direct call', ai: 'Ask our AI assistant →' },
    stats: {
      eyebrow: '— Real numbers',
      items: [
        { value: '50+',  label: 'Penetration tests delivered from Algiers' },
        { value: '100%', label: 'Critical vulnerabilities with remediation plan' },
        { value: '< 4h', label: 'Average response time' },
        { value: '0',    label: 'False positives sold as critical' },
      ],
    },
    pullQuote1: 'An Algiers institution does not need an audit. It needs a simulated attack by people who think like the attacker.',
    pullQuote2: 'Compliance does not make security. But the absence of compliance guarantees the incident.',
    sections: [
      {
        heading: 'Why cybersecurity in Algiers is different',
        body: [
          'Algiers institutions face a **specific threat landscape** that most international frameworks do not cover well. Three factors change the game.',
          'First: **regional actors**. Attacks against MENA financial and state institutions often come from state or semi-state actors with geopolitical motivations, not financial ones. Defenses against an opportunistic attack do not work against a motivated APT. Second: **disclosure constraints**. Law 18-07 and Bank of Algeria requirements create specific obligations that SOC 2 or ISO 27001 frameworks only cover at the surface. Third: **local skills are rare**.',
        ],
      },
      {
        heading: 'What we deliver in Algiers',
        body: [
          'Our cybersecurity engagements in Algiers focus on four categories.',
          'First: **real penetration tests** — external, internal, application. We attack your systems the way a motivated attacker would, with proven techniques and tools that attackers actually use. Not a rebadged Nessus scan.',
          'Second: **source code audits** on your critical applications, identifying OWASP Top 10 and beyond. Manual reading, not just automated SAST.',
          'Third: **infrastructure hardening** — cloud and on-premise. AWS, Azure, GCP, OpenStack, VMware. CIS baselines, strict IAM, secrets management, security monitoring.',
          'Fourth: **compliance support** — SOC 2, ISO 27001, GDPR, PCI DSS, and Bank of Algeria specific requirements. We deliver controls, not just documentation.',
        ],
      },
      {
        heading: 'The same rigor for the bank and the pre-seed startup',
        body: [
          'Our most visible client this year is an Algiers public institution. Our most technically demanding project is a complete audit of a banking platform with several million users. But on the same calendar, we are auditing **a 12-person Algiers fintech** preparing its Bank of Algeria license.',
          '**The same process, the same tools, the same engineers.** We find real vulnerabilities, not cosmetic ones.',
          'What we adapt is **scope, not rigor**. A startup does not need SOC 2 Type II on day one. It needs clean foundations so it does not have to redo everything in two years.',
        ],
      },
      {
        heading: 'How we work with Algiers institutions',
        body: [
          '**Our security team is in Algiers.** We work under NDA from the first contact. For sensitive institutions, we operate on isolated infrastructure, on code that never leaves the client environment, with encrypted communication chains.',
          'We understand **Law 18-07** requirements, incident notification obligations, public institution procurement procedures, and large bank validation calendars. We can work with existing internal SOCs without disrupting them.',
          'All our reports include **an actionable remediation plan** — not just a vulnerability list. For each finding, we give: the real severity (not the automatic one), the business risk, and concrete steps to close the gap. When needed, we support remediation on-site.',
        ],
      },
      {
        heading: 'Security that survives a real incident',
        body: [
          'Several of the institutions we audited in Algiers have **faced real intrusion attempts after our work**. They held, because the controls we recommended and deployed work under attack conditions. That is the only test that matters.',
          'This concerns you directly: you are not buying a compliance certificate. You are buying **a security posture that holds when someone really tries to compromise you**.',
        ],
      },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: {
        label: 'Related disciplines',
        items: [
          { key: 'cybersecurity',        name: 'Cybersecurity' },
          { key: 'cloud',                name: 'Cloud & DevOps' },
          { key: 'consulting',           name: 'Technology Consulting' },
        ],
      },
      insights: { label: 'Related insights', items: [{ key: 'cost', name: 'The real cost of building software in Algeria' }] },
    },
    cta: { eyebrow: 'Talk to a security engineer based in Algiers', title: 'Are you a security lead in Algiers and want an audit that is not a PowerPoint? Describe your situation in five minutes.', button: 'Contact form' },
  },

  ar: {
    eyebrow:     'الجزائر العاصمة · العاصمة · الأمن السيبراني',
    publishedAt: 'محدّث أبريل 2026',
    title:       'الأمن السيبراني في الجزائر العاصمة — للمؤسسات التي هي بالفعل أهداف.',
    dek:         'ورشة الأمن السيبراني الوحيدة التي مقرها الجزائر العاصمة وتسلّم عمليات تدقيق واختبارات اختراق وتقوية البنية التحتية لبنوك العاصمة وإدارتها العامة ومجموعاتها الكبرى. نفترض أنك مُخترَق بالفعل. ثم نصمم لليوم التالي.',
    meta: { one: 'الجزائر العاصمة · الوسط · باب الزوار', two: 'البنوك · الإدارة · الصناعة', three: 'مقر سيملوب' },
    intro: [
      'إذا كنت مدير أمن المعلومات أو مدير تكنولوجيا أو مسؤول مخاطر في مؤسسة في الجزائر العاصمة، فأنت تعرف شيئين. **الأول**: أنظمتك تتعرض للهجوم كل أسبوع. **الثاني**: معظم عمليات التدقيق التي رأيتها حتى الآن كانت PowerPoint بتوصيات عامة من OWASP، بدون اختبار حقيقي.',
      'هذه الصفحة ليست عرضاً تجارياً. إنها صورة **لكيفية عمل الأمن السيبراني الجاد فعلاً في العاصمة الجزائرية في 2026**.',
    ],
    contact: { eyebrow: '— الرد في أقل من 4 ساعات', title: 'تحدث مع مهندس أمن. لا مع موظف مبيعات.', body: 'نرد على واتساب في أقل من 4 ساعات.', whatsapp: 'واتساب', phone: 'مكالمة مباشرة', ai: 'اسأل مساعدنا الذكي ←' },
    stats: {
      eyebrow: '— أرقام حقيقية',
      items: [
        { value: '+50',  label: 'اختبارات اختراق تم تسليمها من الجزائر العاصمة' },
        { value: '100%', label: 'الثغرات الحرجة مع خطة معالجة' },
        { value: '< 4س', label: 'متوسط زمن الاستجابة' },
        { value: '0',    label: 'إنذارات كاذبة بيعت كحرجة' },
      ],
    },
    pullQuote1: 'مؤسسة في الجزائر العاصمة لا تحتاج إلى تدقيق. تحتاج إلى هجوم محاكاة من أشخاص يفكرون مثل المهاجم.',
    pullQuote2: 'الامتثال لا يصنع الأمن. لكن غياب الامتثال يضمن الحادث.',
    sections: [
      {
        heading: 'لماذا الأمن السيبراني في الجزائر العاصمة مختلف',
        body: [
          'مؤسسات الجزائر العاصمة تواجه **مشهد تهديدات محدداً** لا تغطيه معظم الأطر الدولية بشكل صحيح.',
          'أولاً: **الفاعلون الإقليميون**. الهجمات على المؤسسات المالية والحكومية في منطقة الشرق الأوسط وشمال أفريقيا تأتي غالباً من فاعلين دوليين بدوافع جيوسياسية. ثانياً: **قيود الإفصاح**. ثالثاً: **المهارات المحلية نادرة**.',
        ],
      },
      {
        heading: 'ما الذي نسلّمه في الجزائر العاصمة',
        body: [
          'مهامنا في الأمن السيبراني تركز على أربع فئات.',
          'الأولى: **اختبارات اختراق حقيقية** — خارجية، داخلية، تطبيقية. نهاجم أنظمتك كما يفعل مهاجم متحفز.',
          'الثانية: **تدقيقات الشيفرة المصدرية** على تطبيقاتك الحرجة.',
          'الثالثة: **تقوية البنية التحتية** — السحابة والمحلية.',
          'الرابعة: **دعم الامتثال** — SOC 2 و ISO 27001 و GDPR و PCI DSS، ومتطلبات بنك الجزائر المحددة.',
        ],
      },
      {
        heading: 'نفس الصرامة للبنك وللشركة الناشئة',
        body: [
          'أكثر عملائنا ظهوراً مؤسسة عامة في الجزائر العاصمة. لكن في نفس الوقت، نُدقّق **شركة فينتك من 12 شخصاً** تحضّر لرخصة بنك الجزائر.',
          '**نفس العملية، نفس الأدوات، نفس المهندسين.** نجد الثغرات الحقيقية، لا التجميلية.',
          'ما نُكيّفه هو **النطاق، لا الصرامة**.',
        ],
      },
      {
        heading: 'كيف نعمل مع المؤسسات في الجزائر العاصمة',
        body: [
          '**فريق الأمن لدينا في الجزائر العاصمة.** نعمل تحت اتفاقية عدم إفصاح من الاتصال الأول.',
          'نفهم متطلبات **القانون 18-07**، التزامات الإخطار بالحوادث، إجراءات شراء المؤسسات العامة.',
          'جميع تقاريرنا تتضمن **خطة معالجة قابلة للتنفيذ** — ليس فقط قائمة بالثغرات.',
        ],
      },
      {
        heading: 'الأمن الذي يصمد لحادث حقيقي',
        body: [
          'العديد من المؤسسات التي دقّقناها في الجزائر العاصمة **واجهت محاولات اختراق حقيقية بعد عملنا**. صمدت، لأن الضوابط التي أوصينا بها ونشرناها تعمل في ظروف الهجوم.',
          'هذا يعنيك مباشرة: أنت لا تشتري شهادة امتثال. أنت تشتري **وضعية أمنية تصمد عندما يحاول شخص ما اختراقك حقاً**.',
        ],
      },
    ],
    related: {
      eyebrow: 'للتعمق أكثر',
      services: {
        label: 'تخصصات ذات صلة',
        items: [
          { key: 'cybersecurity',        name: 'الأمن السيبراني' },
          { key: 'cloud',                name: 'السحابة و DevOps' },
          { key: 'consulting',           name: 'الاستشارات التقنية' },
        ],
      },
      insights: { label: 'دراسات ذات صلة', items: [{ key: 'cost', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' }] },
    },
    cta: { eyebrow: 'تحدث مع مهندس أمن مقره الجزائر العاصمة', title: 'هل أنت مسؤول أمن في الجزائر العاصمة وتريد تدقيقاً ليس PowerPoint؟', button: 'نموذج الاتصال' },
  },
};

export default function Page() {
  return (
    <LocationServiceLayout
      CONTENT={CONTENT}
      pageUrl="https://symloop.com/locations/alger/cybersecurity/"
      cityName="Alger"
      cityKey="alger"
      serviceType="Cybersecurity audits and penetration testing"
      schemaKeywords="cybersecurite alger, audit securite alger, pentest alger, penetration test alger, owasp alger, soc 2 alger, iso 27001 alger, rgpd alger, loi 18-07, securite banque alger, symloop cybersecurity algiers"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
