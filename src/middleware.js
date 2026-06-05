// Markdown for Agents — content negotiation per Cloudflare's
// "Markdown for Agents" pattern. When a request includes
// `Accept: text/markdown` (and does NOT prefer text/html), serve a markdown
// representation of the resource. Otherwise pass through HTML.
//
// Spec reference: https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
//
// Implementation note: we fetch the markdown source and return it as a fresh
// Response with explicit Content-Type: text/markdown. We do NOT use
// NextResponse.rewrite() because Vercel's static-file serving forwards the
// upstream Content-Type (text/plain for .txt files), overriding any header
// override from the middleware.
//
// Path map (markdown sources are pre-authored, not converted from HTML):
//   /, /en, /fr, /ar          → /llms.txt
//   /services/{slug}/         → /.well-known/agent-skills/{skill}/SKILL.md
//   anything else with Accept: text/markdown → falls through to HTML + Vary

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

export async function middleware(req) {
  const accept = req.headers.get('accept') || '';
  const acceptsMarkdown = /text\/markdown/i.test(accept);
  const acceptsHtml = /text\/html/i.test(accept);
  // Serve markdown only when the client explicitly asks for it without
  // preferring HTML. Browsers send `text/html, ...` — they keep HTML.
  const wantsMarkdown = acceptsMarkdown && !acceptsHtml;

  if (!wantsMarkdown) {
    const res = NextResponse.next();
    res.headers.append('Vary', 'Accept');
    return res;
  }

  const target =
    homepageTarget(req.nextUrl.pathname) ||
    serviceTarget(req.nextUrl.pathname);

  if (!target) {
    // Markdown requested but no variant available for this path — pass HTML.
    const res = NextResponse.next();
    res.headers.append('Vary', 'Accept');
    return res;
  }

  // Fetch the markdown source from this same origin and return it as a fresh
  // response with the correct Content-Type. The matcher excludes /llms.txt
  // and /.well-known/, so this fetch does not re-trigger middleware.
  try {
    const targetUrl = new URL(target, req.nextUrl.origin);
    const upstream = await fetch(targetUrl.toString(), {
      headers: { 'User-Agent': 'symloop-markdown-negotiation/1.0' },
    });
    if (!upstream.ok) {
      const res = NextResponse.next();
      res.headers.append('Vary', 'Accept');
      return res;
    }
    const text = await upstream.text();
    return new Response(text, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'X-Markdown-Source': target,
        'Cache-Control': 'public, max-age=300, must-revalidate',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch {
    const res = NextResponse.next();
    res.headers.append('Vary', 'Accept');
    return res;
  }
}

export const config = {
  matcher: [
    // Explicit root — Next.js path-to-regexp doesn't reliably match `/` via
    // the `((?!...).*)` pattern alone.
    '/',
    // Match every other path except: Next.js internals, static assets,
    // .well-known files (which are served directly with their own
    // Content-Type), robots.txt, sitemap, llms.txt, and binary assets.
    '/((?!_next/static|_next/image|favicon\\.ico|fonts/|\\.well-known/|robots\\.txt|sitemap.*\\.xml|llms.*\\.txt|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|css|js|woff|woff2|ttf|otf)).*)',
  ],
};
