#!/usr/bin/env node
// GEO pipeline, scoreboard: ask AI assistants the questions our clients ask and
// record whether symloop.com is cited or recommended. Run weekly, compare runs.
//
//   node scripts/geo/citation-test.mjs                 # all providers with a key in env
//   node scripts/geo/citation-test.mjs --provider=anthropic --limit=5
//
// Keys (any subset): OPENAI_API_KEY, ANTHROPIC_API_KEY, PERPLEXITY_API_KEY.
// Models can be overridden with OPENAI_MODEL, ANTHROPIC_MODEL, PERPLEXITY_MODEL.
// Output: geo/citations/<date>.json and <date>.md

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT_DIR = path.join(ROOT, 'geo', 'citations');
const TODAY = new Date().toISOString().slice(0, 10);
const args = Object.fromEntries(process.argv.slice(2).filter((a) => a.startsWith('--')).map((a) => { const [k, v] = a.slice(2).split('='); return [k, v ?? true]; }));
const LIMIT = args.limit ? Number(args.limit) : Infinity;
const { questions } = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'geo', 'questions.json'), 'utf8'));

const COMPETITOR_HINTS = ['agence', 'agency', 'studio', 'software', 'digital', 'tech', 'dev', 'solutions', 'labs', 'consulting'];
const DOMAIN_RE = /\b((?:[a-z0-9-]+\.)+(?:com|dz|fr|io|net|org|co|app|ai|tech|dev))\b/gi;

function analyse(text, citations = []) {
  const t = (text || '').toLowerCase();
  const urls = new Set([...citations, ...(t.match(DOMAIN_RE) || [])].map((u) => String(u).toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]));
  const mentioned = t.includes('symloop');
  const cited = [...urls].some((u) => u.includes('symloop.com'));
  const others = [...urls].filter((u) => !u.includes('symloop') && !/^(google|wikipedia|linkedin|facebook|youtube|doctolib|airbnb|booking|uber|leboncoin|vinted|blablacar|heetch)\./.test(u));
  const named = [...new Set((text || '').match(/\b[A-Z][A-Za-z0-9&-]{2,}(?: [A-Z][A-Za-z0-9&-]{2,}){0,2}\b/g) || [])].filter((n) => COMPETITOR_HINTS.some((h) => n.toLowerCase().includes(h)));
  return { mentioned, cited, otherDomains: others.slice(0, 10), namedCompanies: named.slice(0, 10) };
}

const providers = {
  async openai(q) {
    const r = await fetch('https://api.openai.com/v1/responses', { method: 'POST', headers: { 'content-type': 'application/json', authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-4.1', tools: [{ type: 'web_search_preview', user_location: { type: 'approximate', country: q.lang === 'en' ? 'FR' : 'FR' } }], input: q.text }) });
    const j = await r.json(); if (!r.ok) throw new Error(JSON.stringify(j).slice(0, 300));
    const text = (j.output || []).flatMap((o) => o.content || []).filter((c) => c.type === 'output_text').map((c) => c.text).join('\n');
    const cites = (j.output || []).flatMap((o) => o.content || []).flatMap((c) => c.annotations || []).map((a) => a.url).filter(Boolean);
    return { text, citations: cites };
  },
  async anthropic(q) {
    const r = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'content-type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-5-5', max_tokens: 1500, tools: [{ type: 'web_search_20250305', name: 'web_search', max_uses: 5, user_location: { type: 'approximate', country: 'FR' } }], messages: [{ role: 'user', content: q.text }] }) });
    const j = await r.json(); if (!r.ok) throw new Error(JSON.stringify(j).slice(0, 300));
    const text = (j.content || []).filter((c) => c.type === 'text').map((c) => c.text).join('\n');
    const cites = (j.content || []).flatMap((c) => c.citations || []).map((c) => c.url).filter(Boolean);
    return { text, citations: cites };
  },
  async perplexity(q) {
    const r = await fetch('https://api.perplexity.ai/chat/completions', { method: 'POST', headers: { 'content-type': 'application/json', authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}` },
      body: JSON.stringify({ model: process.env.PERPLEXITY_MODEL || 'sonar', messages: [{ role: 'user', content: q.text }] }) });
    const j = await r.json(); if (!r.ok) throw new Error(JSON.stringify(j).slice(0, 300));
    return { text: j.choices?.[0]?.message?.content || '', citations: j.citations || [] };
  },
};
const KEYS = { openai: 'OPENAI_API_KEY', anthropic: 'ANTHROPIC_API_KEY', perplexity: 'PERPLEXITY_API_KEY' };
const active = Object.keys(providers).filter((p) => process.env[KEYS[p]] && (!args.provider || args.provider === p));

if (!active.length) {
  console.log('No provider key found. Set one of OPENAI_API_KEY, ANTHROPIC_API_KEY, PERPLEXITY_API_KEY.');
  console.log(`\nManual fallback: ask these ${questions.length} questions and note whether symloop.com is cited.\n`);
  questions.forEach((q) => console.log(`${q.id} [${q.lang}/${q.intent}] ${q.text}`));
  process.exit(0);
}

const results = [];
for (const q of questions.slice(0, LIMIT)) {
  for (const p of active) {
    try {
      const { text, citations } = await providers[p](q);
      const a = analyse(text, citations);
      results.push({ id: q.id, lang: q.lang, intent: q.intent, provider: p, ...a, answer: text.slice(0, 4000), citations });
      console.log(`${q.id} ${p.padEnd(10)} cited=${a.cited ? 'YES' : 'no '} mentioned=${a.mentioned ? 'YES' : 'no '} others=${a.otherDomains.slice(0, 3).join(',')}`);
    } catch (e) {
      results.push({ id: q.id, provider: p, error: String(e.message).slice(0, 300) });
      console.log(`${q.id} ${p.padEnd(10)} ERROR ${String(e.message).slice(0, 120)}`);
    }
  }
}

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, `${TODAY}.json`), JSON.stringify({ date: TODAY, providers: active, results }, null, 1));
const ok = results.filter((r) => !r.error);
const byProvider = active.map((p) => { const rs = ok.filter((r) => r.provider === p); return `| ${p} | ${rs.length} | ${rs.filter((r) => r.cited).length} | ${rs.filter((r) => r.mentioned).length} |`; });
const byIntent = [...new Set(ok.map((r) => r.intent))].map((i) => { const rs = ok.filter((r) => r.intent === i); return `| ${i} | ${rs.length} | ${rs.filter((r) => r.cited || r.mentioned).length} |`; });
const competitors = {};
ok.forEach((r) => r.otherDomains.forEach((d) => { competitors[d] = (competitors[d] || 0) + 1; }));
const md = [
  `# Citation test ${TODAY}`, '', '| provider | answers | symloop cited | symloop mentioned |', '|---|---|---|---|', ...byProvider, '',
  '## By intent', '', '| intent | answers | symloop present |', '|---|---|---|', ...byIntent, '',
  '## Domains cited instead of us', '', ...Object.entries(competitors).sort((a, b) => b[1] - a[1]).slice(0, 25).map(([d, n]) => `- ${d} (${n})`), '',
  '## Misses', '', ...ok.filter((r) => !r.cited && !r.mentioned).map((r) => `- ${r.id} ${r.provider}: ${questions.find((q) => q.id === r.id)?.text}`),
];
fs.writeFileSync(path.join(OUT_DIR, `${TODAY}.md`), md.join('\n'));
console.log(`\nWritten: geo/citations/${TODAY}.json and .md`);
