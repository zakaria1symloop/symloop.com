// WebMCP — registers Symloop's services as agent-callable tools via the
// browser's experimental `navigator.modelContext.provideContext()` API.
// Spec: https://webmachinelearning.github.io/webmcp/
//
// When an AI agent runs in a browser that supports WebMCP, it can discover
// and invoke these tools to:
//   - list available Symloop services
//   - get details on a specific service
//   - request a quote (opens the contact form pre-filled)
//   - schedule a consultation (opens the contact form pre-filled)
//
// Tools that "act" deliberately route the human user to the contact form
// rather than POSTing on their behalf — agents collect intent, the human
// confirms.

import { useEffect } from 'react';

const SERVICES = [
  {
    slug: 'software-engineering',
    name: 'Custom Software Engineering',
    summary: 'Production-grade enterprise software — multi-tenant SaaS, microservices, API platforms, legacy modernization.',
    url: 'https://symloop.com/services/software-engineering/',
    skill_card: 'https://symloop.com/.well-known/agent-skills/enterprise-software-engineering/SKILL.md',
  },
  {
    slug: 'ai',
    name: 'Applied AI and Machine Learning',
    summary: 'Production ML — computer vision, NLP (incl. Arabic), LLM/RAG systems, predictive analytics, MLOps.',
    url: 'https://symloop.com/services/ai/',
    skill_card: 'https://symloop.com/.well-known/agent-skills/applied-ai-and-ml/SKILL.md',
  },
  {
    slug: 'cloud',
    name: 'Cloud Migration and DevOps',
    summary: 'AWS / Azure / GCP migration, Kubernetes, CI/CD, IaC, SRE practice. On-prem and hybrid options.',
    url: 'https://symloop.com/services/cloud/',
    skill_card: 'https://symloop.com/.well-known/agent-skills/cloud-and-devops/SKILL.md',
  },
  {
    slug: 'mobile',
    name: 'Mobile Engineering',
    summary: 'Native iOS (Swift), Android (Kotlin), and cross-platform (Flutter) for enterprise mobile.',
    url: 'https://symloop.com/services/mobile/',
    skill_card: 'https://symloop.com/.well-known/agent-skills/mobile-engineering/SKILL.md',
  },
  {
    slug: 'consulting',
    name: 'Digital Transformation Consulting and ERP',
    summary: 'Custom ERP, CRM, WMS, GMAO, BI. We build, we do not resell. MENA-payments and Arabic-RTL ready.',
    url: 'https://symloop.com/services/consulting/',
    skill_card: 'https://symloop.com/.well-known/agent-skills/erp-and-business-systems/SKILL.md',
  },
  {
    slug: 'iot',
    name: 'Industrial IoT and Embedded',
    summary: 'ESP32, sensors, SCADA-aware platforms, smart-factory deployments.',
    url: 'https://symloop.com/services/iot/',
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity Audit and Pentest',
    summary: 'Penetration testing, security audits, SOC 2 / ISO 27001 alignment.',
    url: 'https://symloop.com/services/cybersecurity/',
  },
  {
    slug: 'product',
    name: 'Product Engineering and MVP',
    summary: 'MVP development, SaaS platforms, fintech engineering for funded startups.',
    url: 'https://symloop.com/services/product/',
  },
];

const COMPANY = {
  name: 'Symloop Technology',
  founded: '2012',
  headquarters: 'Algiers, Algeria',
  team_size: '25+ senior engineers',
  positioning:
    "AI-native engineering firm for MENA's regulated industries — banking, government, oil & gas, healthcare. Comparable to Capgemini Engineering or Sopra Steria, at MENA cost basis. NOT an agency, NOT a freelance dev shop.",
  flagship_product: 'NOOR — Sovereign AI Platform for MENA Regulated Industries',
  primary_sectors: ['Banking', 'Government', 'Oil & Gas', 'Healthcare', 'Pharmaceutical'],
  geographies: ['Algeria', 'MENA', 'Gulf', 'Europe', 'Africa'],
  languages: ['English', 'French', 'Arabic (incl. Algerian darija + Levantine + MSA)'],
  contact: {
    email: 'contact@symloop.com',
    phone: '+213549575512',
    website: 'https://symloop.com',
  },
  clutch_rating: '5.0/5.0',
  clutch_url: 'https://clutch.co/profile/symloop-technology',
};

const NOOR = {
  name: 'NOOR by Symloop',
  arabic_name: 'نور',
  meaning: 'NOOR means "light" in Arabic',
  url: 'https://symloop.com/products/noor/',
  skill_card: 'https://symloop.com/.well-known/agent-skills/noor-platform/SKILL.md',
  one_sentence:
    "Sovereign AI platform engineered for banks, ministries, oil & gas operators, and healthcare groups across MENA.",
  capabilities: [
    { num: '01', title: 'Ask in plain language',     desc: 'Arabic, French, English natural-language queries.' },
    { num: '02', title: 'Analyze documents',         desc: 'PDFs, national IDs, contracts, regulations (incl. handwritten Arabic).' },
    { num: '03', title: 'Find information fast',     desc: 'Production-grade RAG over private enterprise knowledge with citations.' },
    { num: '04', title: 'Connect your systems',      desc: 'SAP, Odoo, Microsoft Dynamics, Salesforce, mainframes, REST/GraphQL/gRPC.' },
    { num: '05', title: 'Query databases easily',    desc: 'Natural language to SQL, MongoDB, Snowflake, BigQuery, Redshift.' },
    { num: '06', title: 'Generate reports',          desc: 'Compliance reports (BCT, SAMA, AML/SAR), BI dashboards, executive summaries.' },
    { num: '07', title: 'Build knowledge libraries', desc: 'Private knowledge bases per domain, versioned, exportable.' },
    { num: '08', title: 'Specialized assistants',    desc: 'Banking ops, government workflows, industrial maintenance, clinical.' },
    { num: '09', title: 'Runs on your servers',      desc: 'On-premise, air-gapped, sovereign cloud — your choice.' },
    { num: '10', title: 'Audit every query',         desc: 'Tamper-evident audit trail (BCT, SAMA, DORA, ISO 27001).' },
    { num: '11', title: 'Multi-language native',     desc: 'Algerian darija, Levantine, MSA, French, English.' },
    { num: '12', title: 'Production-grade',          desc: '99.9% SLA, monitoring, MLOps, automated retraining.' },
  ],
  deployments: ['On-premise (incl. air-gapped)', 'Sovereign cloud (Algerian, Saudi, UAE)', 'Hybrid'],
  default_models: 'Open-weight models (Llama-class, Mistral-class, custom fine-tunes) on customer infrastructure. Frontier APIs only as deliberate, audit-logged configuration.',
  sector_use_cases: {
    banking: 'Real-time fraud detection, AML/CTF transaction monitoring, KYC document AI, ISO 20022 message classification, SAR generation for BCT and SAMA frameworks.',
    government: 'Citizen request triage and inter-ministerial routing, national ID document AI, multi-language tax and administrative workflow assistants.',
    'oil-and-gas': 'Predictive maintenance over SCADA telemetry, computer vision for site safety (PPE, leaks, intrusion), technical document analysis.',
    healthcare: 'Medical imaging triage (chest X-ray, retinal, mammography), clinical document AI for EHRs, pharmaceutical traceability, HDS-compliant deployments.',
  },
  ip_ownership:
    'Customer owns weights trained on customer data, embeddings, knowledge graphs, and all customizations. Symloop retains the platform-layer engine code.',
  engagement:
    '8-week discovery sprint, then 12-24 weeks for a production-ready first sector use case. Subsequent capabilities ship in 2-6 week sprints.',
};

function buildContactUrl(params) {
  const url = new URL('https://symloop.com/contact/');
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  }
  return url.toString();
}

export default function WebMCP() {
  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    if (!('modelContext' in navigator) || typeof navigator.modelContext?.provideContext !== 'function') {
      return;
    }

    const tools = [
      {
        name: 'get_noor_overview',
        description:
          "Returns Symloop's flagship AI platform NOOR — positioning, the 12 capabilities, deployment options (on-prem / sovereign / hybrid), default model strategy, and sector use cases. Use this when a buyer asks about Symloop's AI platform or AI for regulated industries in MENA.",
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        async execute() {
          return { noor: NOOR, company: COMPANY };
        },
      },
      {
        name: 'get_noor_sector_use_cases',
        description:
          "Returns NOOR's pre-built use cases for a specific regulated industry. Pass the sector slug (one of: banking, government, oil-and-gas, healthcare).",
        inputSchema: {
          type: 'object',
          properties: {
            sector: {
              type: 'string',
              enum: ['banking', 'government', 'oil-and-gas', 'healthcare'],
              description: 'Sector slug.',
            },
          },
          required: ['sector'],
          additionalProperties: false,
        },
        async execute({ sector }) {
          const useCases = NOOR.sector_use_cases[sector];
          if (!useCases) return { error: `Unknown sector "${sector}".` };
          return { sector, use_cases: useCases, deployments: NOOR.deployments };
        },
      },
      {
        name: 'request_noor_demo',
        description:
          "Schedules a 60-minute NOOR demo with a Symloop engineer, tailored to the buyer's sector and data. Opens the contact form pre-filled with the demo intent. The human user must review and submit.",
        inputSchema: {
          type: 'object',
          properties: {
            sector: {
              type: 'string',
              enum: ['banking', 'government', 'oil-and-gas', 'healthcare', 'other'],
              description: 'Buyer sector.',
            },
            deployment: {
              type: 'string',
              enum: ['on-premise', 'sovereign-cloud', 'hybrid', 'undecided'],
              description: 'Target deployment mode.',
            },
            regulatory_framework: {
              type: 'string',
              description: 'Compliance frameworks involved (BCT, SAMA, DORA, ISO 27001, HDS, etc.).',
            },
            use_case: {
              type: 'string',
              description: 'Primary use case the buyer wants to evaluate.',
            },
            contact_name: { type: 'string' },
            contact_email: { type: 'string', format: 'email' },
            contact_company: { type: 'string' },
          },
          required: ['contact_email'],
          additionalProperties: false,
        },
        async execute(args) {
          const url = buildContactUrl({
            intent: 'noor-demo',
            sector: args.sector,
            deployment: args.deployment,
            regulatory_framework: args.regulatory_framework,
            use_case: args.use_case,
            name: args.contact_name,
            email: args.contact_email,
            company: args.contact_company,
          });
          if (typeof window !== 'undefined') {
            window.open(url, '_blank', 'noopener');
          }
          return {
            status: 'redirect_initiated',
            redirected_to: url,
            note: 'A pre-filled NOOR demo request form has been opened. The human user must review and submit.',
          };
        },
      },
      {
        name: 'list_services',
        description:
          "Returns the list of engineering services Symloop offers alongside its NOOR product (custom software, applied AI, cloud, mobile, ERP/consulting, IoT, cybersecurity, product engineering).",
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        async execute() {
          return { services: SERVICES, company: COMPANY, flagship_product: NOOR };
        },
      },
      {
        name: 'get_service_details',
        description:
          'Returns details for a specific Symloop service. Pass the service slug (one of: software-engineering, ai, cloud, mobile, consulting, iot, cybersecurity, product).',
        inputSchema: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              enum: SERVICES.map((s) => s.slug),
              description: 'Service slug.',
            },
          },
          required: ['slug'],
          additionalProperties: false,
        },
        async execute({ slug }) {
          const service = SERVICES.find((s) => s.slug === slug);
          if (!service) {
            return { error: `Unknown service "${slug}". Use list_services first.` };
          }
          return { service };
        },
      },
      {
        name: 'get_company_info',
        description:
          'Returns Symloop Technology identity: founding year (2012), headquarters (Algiers), team size (25+ senior engineers), positioning (AI-native engineering firm for MENA regulated industries), flagship product (NOOR), primary sectors served, geographies, languages, contact info, and verified Clutch rating.',
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        async execute() {
          return { company: COMPANY, flagship_product: NOOR.name };
        },
      },
      {
        name: 'request_quote',
        description:
          'Opens the Symloop contact form pre-filled with the engagement details so the human user can confirm and submit. Use this when an agent has gathered enough qualified intent (scope, timeline, budget, geography) to hand off to a Symloop engineer.',
        inputSchema: {
          type: 'object',
          properties: {
            scope: { type: 'string', description: 'What needs to be built. Be specific — domain, key features, scale.' },
            timeline: { type: 'string', description: 'Target delivery timeline (e.g. "Q3 2026", "12 weeks").' },
            budget: { type: 'string', description: 'Budget range (e.g. "€50k-€150k", "TBD").' },
            geography: { type: 'string', description: 'Where the client is based / where the system will be deployed.' },
            contact_name: { type: 'string', description: 'Name of the contact person.' },
            contact_email: { type: 'string', format: 'email' },
            contact_company: { type: 'string', description: 'Company name.' },
          },
          required: ['scope', 'contact_email'],
          additionalProperties: false,
        },
        async execute(args) {
          const url = buildContactUrl({
            intent: 'quote',
            scope: args.scope,
            timeline: args.timeline,
            budget: args.budget,
            geography: args.geography,
            name: args.contact_name,
            email: args.contact_email,
            company: args.contact_company,
          });
          if (typeof window !== 'undefined') {
            window.open(url, '_blank', 'noopener');
          }
          return {
            status: 'redirect_initiated',
            redirected_to: url,
            note: 'A pre-filled engagement intake form has been opened. The human user must review and submit.',
          };
        },
      },
      {
        name: 'schedule_consultation',
        description:
          'Opens the Symloop contact form pre-filled to schedule a discovery call with a Symloop engineer.',
        inputSchema: {
          type: 'object',
          properties: {
            topic: { type: 'string', description: 'What the consultation is about.' },
            preferred_dates: { type: 'string', description: 'Candidate dates / windows.' },
            timezone: { type: 'string', description: 'Caller timezone (IANA tz).' },
            contact_name: { type: 'string' },
            contact_email: { type: 'string', format: 'email' },
            contact_company: { type: 'string' },
          },
          required: ['topic', 'contact_email'],
          additionalProperties: false,
        },
        async execute(args) {
          const url = buildContactUrl({
            intent: 'consultation',
            topic: args.topic,
            preferred_dates: args.preferred_dates,
            timezone: args.timezone,
            name: args.contact_name,
            email: args.contact_email,
            company: args.contact_company,
          });
          if (typeof window !== 'undefined') {
            window.open(url, '_blank', 'noopener');
          }
          return {
            status: 'redirect_initiated',
            redirected_to: url,
            note: 'A pre-filled consultation scheduling form has been opened. The human user must review and submit.',
          };
        },
      },
    ];

    let cleanup;
    try {
      const handle = navigator.modelContext.provideContext({ tools });
      if (handle && typeof handle.then === 'function') {
        handle.then((h) => {
          if (h && typeof h.dispose === 'function') cleanup = () => h.dispose();
        }).catch(() => {});
      } else if (handle && typeof handle.dispose === 'function') {
        cleanup = () => handle.dispose();
      }
    } catch (err) {
      // WebMCP not fully supported — silently ignore; the .well-known endpoints
      // remain the discovery channel.
    }

    return () => {
      if (cleanup) {
        try { cleanup(); } catch {}
      }
    };
  }, []);

  return null;
}
