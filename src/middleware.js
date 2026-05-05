// Markdown for Agents — RFC content negotiation per Cloudflare's
// "Markdown for Agents" pattern. When a request includes
// `Accept: text/markdown` (with no preference for HTML), serve a markdown
// representation of the resource. Otherwise pass through HTML.
//
// We don't run a full HTML→Markdown converter at the edge. Instead, we map
// well-known pages to hand-authored markdown counterparts:
//   /                      → /llms.txt
//   /services/{slug}/      → /.well-known/agent-skills/{skill}/SKILL.md
// Everything else falls through to HTML with `Vary: Accept`, signalling
// content negotiation is supported but no markdown variant exists yet.
//
// Spec reference: https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/

import { NextResponse } from 'next/server';

const SERVICE_SKILL_MAP = {
  'software-engineering': 'enterprise-software-engineering',
  'ai': 'applied-ai-and-ml',
  'cloud': 'cloud-and-devops',
  'mobile': 'mobile-engineering',
  'consulting': 'erp-and-business-systems',
};

function homepageTarget(pathname) {
  if (pathname === '/' || pathname === '') return '/llms.txt';
  if (/^\/(en|fr|ar)\/?$/.test(pathname)) return '/llms.txt';
  return null;
}

function serviceTarget(pathname) {
  const m = pathname.match(/^\/(?:(?:en|fr|ar)\/)?services\/([^/]+)\/?$/);
  if (!m) return null;
  const skill = SERVICE_SKILL_MAP[m[1]];
  return skill ? `/.well-known/agent-skills/${skill}/SKILL.md` : null;
}

export function middleware(req) {
  const accept = req.headers.get('accept') || '';
  const wantsMarkdown = /text\/markdown/i.test(accept);

  if (!wantsMarkdown) {
    // No markdown requested — pass through HTML, but advertise that we vary on Accept.
    const res = NextResponse.next();
    res.headers.append('Vary', 'Accept');
    return res;
  }

  const target =
    homepageTarget(req.nextUrl.pathname) ||
    serviceTarget(req.nextUrl.pathname);

  if (target) {
    const url = req.nextUrl.clone();
    url.pathname = target;
    const res = NextResponse.rewrite(url);
    res.headers.set('Content-Type', 'text/markdown; charset=utf-8');
    res.headers.append('Vary', 'Accept');
    res.headers.set('X-Markdown-Source', target);
    return res;
  }

  // Markdown requested but no variant available — let HTML through, with Vary.
  const res = NextResponse.next();
  res.headers.append('Vary', 'Accept');
  return res;
}

export const config = {
  matcher: [
    // Match every path except Next.js internals, the API routes, static assets,
    // and the .well-known directory itself (which already serves correct
    // Content-Type for its files).
    '/((?!_next/static|_next/image|favicon\\.ico|fonts/|\\.well-known/|robots\\.txt|sitemap.*\\.xml|llms.*\\.txt|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|css|js|woff|woff2|ttf|otf)).*)',
  ],
};
