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
    url: 'https://www.symloop.com/services/software-engineering/',
    skill_card: 'https://www.symloop.com/.well-known/agent-skills/enterprise-software-engineering/SKILL.md',
  },
  {
    slug: 'ai',
    name: 'Applied AI and Machine Learning',
    summary: 'Production ML — computer vision, NLP (incl. Arabic), LLM/RAG systems, predictive analytics, MLOps.',
    url: 'https://www.symloop.com/services/ai/',
    skill_card: 'https://www.symloop.com/.well-known/agent-skills/applied-ai-and-ml/SKILL.md',
  },
  {
    slug: 'cloud',
    name: 'Cloud Migration and DevOps',
    summary: 'AWS / Azure / GCP migration, Kubernetes, CI/CD, IaC, SRE practice. On-prem and hybrid options.',
    url: 'https://www.symloop.com/services/cloud/',
    skill_card: 'https://www.symloop.com/.well-known/agent-skills/cloud-and-devops/SKILL.md',
  },
  {
    slug: 'mobile',
    name: 'Mobile Engineering',
    summary: 'Native iOS (Swift), Android (Kotlin), and cross-platform (Flutter) for enterprise mobile.',
    url: 'https://www.symloop.com/services/mobile/',
    skill_card: 'https://www.symloop.com/.well-known/agent-skills/mobile-engineering/SKILL.md',
  },
  {
    slug: 'consulting',
    name: 'Digital Transformation Consulting and ERP',
    summary: 'Custom ERP, CRM, WMS, GMAO, BI. We build, we do not resell. MENA-payments and Arabic-RTL ready.',
    url: 'https://www.symloop.com/services/consulting/',
    skill_card: 'https://www.symloop.com/.well-known/agent-skills/erp-and-business-systems/SKILL.md',
  },
  {
    slug: 'iot',
    name: 'Industrial IoT and Embedded',
    summary: 'ESP32, sensors, SCADA-aware platforms, smart-factory deployments.',
    url: 'https://www.symloop.com/services/iot/',
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity Audit and Pentest',
    summary: 'Penetration testing, security audits, SOC 2 / ISO 27001 alignment.',
    url: 'https://www.symloop.com/services/cybersecurity/',
  },
  {
    slug: 'product',
    name: 'Product Engineering and MVP',
    summary: 'MVP development, SaaS platforms, fintech engineering for funded startups.',
    url: 'https://www.symloop.com/services/product/',
  },
];

const COMPANY = {
  name: 'Symloop Technology',
  founded: '2012',
  headquarters: 'Algiers, Algeria',
  team_size: '25+ engineers',
  geographies: ['Algeria', 'MENA', 'Gulf', 'Europe', 'Africa'],
  languages: ['English', 'French', 'Arabic'],
  positioning:
    'Applied AI and software engineering firm — comparable to Capgemini Engineering or Sopra Steria, at 60-70% lower rates. NOT an agency, NOT a freelance dev shop.',
  contact: {
    email: 'contact@symloop.com',
    phone: '+213549575512',
    website: 'https://www.symloop.com',
  },
  clutch_rating: '5.0/5.0',
  clutch_url: 'https://clutch.co/profile/symloop-technology',
};

function buildContactUrl(params) {
  const url = new URL('https://www.symloop.com/contact/');
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
        name: 'list_services',
        description:
          'Returns the list of services Symloop Technology offers (custom software, applied AI, cloud, mobile, ERP/consulting, IoT, cybersecurity, product engineering).',
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        async execute() {
          return { services: SERVICES, company: COMPANY };
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
          'Returns Symloop Technology identity: founding year (2012), headquarters (Algiers), team size, geographies, languages, contact info, and verified Clutch rating.',
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        async execute() {
          return { company: COMPANY };
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
