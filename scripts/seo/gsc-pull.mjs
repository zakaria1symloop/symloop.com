#!/usr/bin/env node
// Google Search Console puller — real queries, impressions, clicks, positions.
// No npm dependency: signs a service-account JWT with node:crypto, exchanges it
// for an access token, calls the Search Analytics API, and writes
// geo/gsc/<date>.{json,md} with the two lists big companies look at first:
//   - striking distance: queries at position 8–20 with impressions (small title /
//     intro fixes move them to page 1)
//   - page × query: which page answers which query, to retitle sleepers in the
//     words people actually type.
//
// Setup (once, by the site owner):
//   1. Google Cloud console → create a project (or reuse one) → enable
//      "Google Search Console API".
//   2. IAM → Service accounts → create one → Keys → add key (JSON) → download.
//   3. Search Console → property symloop.com (domain property) → Settings →
//      Users and permissions → Add user → the service account's e-mail
//      (…@…iam.gserviceaccount.com) → Full or Restricted.
//   4. Put the JSON outside the repo and run:
//        GSC_KEY_FILE="C:/path/sa.json" node scripts/seo/gsc-pull.mjs
//      Optional: GSC_SITE="sc-domain:symloop.com" (default) or "https://symloop.com/".
// The key file is never committed (geo/ and *.json keys are personal).

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = path.join(ROOT, 'geo', 'gsc');
const KEY_FILE = process.env.GSC_KEY_FILE;
const SITE = process.env.GSC_SITE || 'sc-domain:symloop.com';
const DAYS = Number(process.env.GSC_DAYS || 90);
if (!KEY_FILE || !fs.existsSync(KEY_FILE)) { console.error('Set GSC_KEY_FILE to the service-account JSON path (see header).'); process.exit(1); }
const key = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));

const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');
async function accessToken() {
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: key.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })}`;
  const sig = crypto.createSign('RSA-SHA256').update(unsigned).sign(key.private_key).toString('base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${unsigned}.${sig}` });
  const j = await r.json();
  if (!j.access_token) throw new Error('token: ' + JSON.stringify(j));
  return j.access_token;
}
async function query(token, body) {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, { method: 'POST', headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify(body) });
  const j = await r.json();
  if (j.error) throw new Error(JSON.stringify(j.error));
  return j.rows || [];
}

const end = new Date(Date.now() - 2 * 864e5); const start = new Date(end - DAYS * 864e5);
const d = (x) => x.toISOString().slice(0, 10);
const token = await accessToken();
const base = { startDate: d(start), endDate: d(end), rowLimit: 5000 };
const [byQuery, byPage, pageQuery, byCountry] = await Promise.all([
  query(token, { ...base, dimensions: ['query'] }),
  query(token, { ...base, dimensions: ['page'] }),
  query(token, { ...base, dimensions: ['page', 'query'] }),
  query(token, { ...base, dimensions: ['country'], rowLimit: 50 }),
]);
const striking = byQuery.filter((r) => r.position >= 8 && r.position <= 20 && r.impressions >= 20).sort((a, b) => b.impressions - a.impressions);
const lowCtr = byQuery.filter((r) => r.position <= 7 && r.impressions >= 50 && r.ctr < 0.03).sort((a, b) => b.impressions - a.impressions);
const TODAY = new Date().toISOString().slice(0, 10);
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, `${TODAY}.json`), JSON.stringify({ site: SITE, startDate: base.startDate, endDate: base.endDate, byQuery, byPage, pageQuery, byCountry }, null, 1));
const row = (r) => `| ${r.keys.join(' · ')} | ${r.clicks} | ${r.impressions} | ${(r.ctr * 100).toFixed(1)} % | ${r.position.toFixed(1)} |`;
const head = '| key | clicks | impressions | CTR | position |\n|---|---|---|---|---|';
const md = [
  `# Search Console ${TODAY} · ${SITE} · ${base.startDate} → ${base.endDate}`, '',
  `Queries: ${byQuery.length} · pages: ${byPage.length} · clicks: ${byQuery.reduce((a, r) => a + r.clicks, 0)} · impressions: ${byQuery.reduce((a, r) => a + r.impressions, 0)}`, '',
  '## Striking distance (position 8–20, ≥ 20 impressions) — fix title / intro / links', head, ...striking.slice(0, 80).map(row), '',
  '## Page 1 but low CTR (position ≤ 7, ≥ 50 impressions, CTR < 3 %) — rewrite the title and meta', head, ...lowCtr.slice(0, 40).map(row), '',
  '## Top pages', head, ...byPage.slice(0, 60).sort((a, b) => b.clicks - a.clicks).map(row), '',
  '## Top queries', head, ...byQuery.slice(0, 100).sort((a, b) => b.clicks - a.clicks).map(row), '',
  '## Countries', head, ...byCountry.sort((a, b) => b.clicks - a.clicks).map(row),
].join('\n');
fs.writeFileSync(path.join(OUT, `${TODAY}.md`), md);
console.log(`wrote geo/gsc/${TODAY}.md — ${striking.length} striking-distance queries, ${lowCtr.length} low-CTR page-1 queries`);
