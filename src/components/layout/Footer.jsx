"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

// ============================================================================
// SYMLOOP — Footer (editorial 2026-05)
//
// Purpose: deep internal linking to compound search-engine discovery and
// match enterprise positioning. Every editorial page (services, industries,
// case studies, insights) is reachable from here in one click.
//
// Design DNA: black background, hairline borders, font-mono uppercase
// eyebrow text, font-light body. Same vocabulary as Header / insight pages.
// ============================================================================

const WHATSAPP_URL = 'https://wa.me/213549575512';
const PHONE_URL    = 'tel:+213549575512';
const PHONE_LABEL  = '+213 549 57 55 12';
const EMAIL        = 'contact@symloop.com';

export default function Footer() {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();

  const colCapabilities = {
    label: 'Capabilities',
    items: [
      { name: 'Software Engineering', href: '/services/software-engineering/' },
      { name: 'Mobile Engineering',   href: '/services/mobile/' },
      { name: 'Artificial Intelligence', href: '/services/ai/' },
      { name: 'Cloud & DevOps',        href: '/services/cloud/' },
      { name: 'IoT & Industrial',      href: '/services/iot/' },
      { name: 'Cybersecurity',         href: '/services/cybersecurity/' },
      { name: 'Technology Consulting', href: '/services/consulting/' },
      { name: 'Product Engineering',   href: '/services/product/' },
    ],
  };

  const colMarkets = {
    label: 'Markets',
    items: [
      { name: 'Africa',                href: '/africa/' },
      { name: 'MENA',                  href: '/mena/' },
      { name: 'Outsourcing',           href: '/outsourcing/' },
      { name: 'Startups',              href: '/startup/' },
      { name: 'Algiers',               href: '/locations/alger/' },
      { name: 'Sétif',                 href: '/locations/setif/' },
      { name: 'Oran',                  href: '/locations/oran/' },
      { name: 'Constantine',           href: '/locations/constantine/' },
    ],
  };

  const colWork = {
    label: 'Work',
    items: [
      { name: 'Case Studies',          href: '/case-studies/' },
      { name: 'TrackSera — Distribution SaaS', href: '/case-studies/tracksera/' },
      { name: 'Sadia — Consumer Activation',   href: '/case-studies/sadia/' },
      { name: 'Hajz — Booking Marketplace',    href: '/case-studies/hajz/' },
      { name: 'Products',              href: '/products/asa/' },
    ],
  };

  const colInsights = {
    label: 'Insights',
    items: [
      { name: 'All Insights',          href: '/insights/' },
      { name: 'Oil & Gas — DCS to PLC', href: '/insights/oil-gas/' },
      { name: 'Vision 2030 — Gulf Tech', href: '/insights/vision-2030/' },
      { name: 'AI in Production',      href: '/insights/ai/' },
      { name: 'ERP Reality Check',     href: '/insights/erp/' },
      { name: 'Healthcare Tech',       href: '/insights/healthcare/' },
      { name: 'AI for the CTO',        href: '/insights/ai-cto/' },
      { name: 'Cost of Software',      href: '/insights/cost/' },
    ],
  };

  const colCompany = {
    label: 'Company',
    items: [
      { name: 'About Symloop',         href: '/presentation/' },
      { name: 'Careers',               href: '/recrutement/' },
      { name: 'Learning',              href: '/learning/' },
      { name: 'Services Overview',     href: '/services/' },
    ],
  };

  const columns = [colCapabilities, colMarkets, colWork, colInsights, colCompany];

  return (
    <footer className="bg-black border-t border-white/[0.06] mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">

        {/* ── Top: brand + tagline ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/sym-logo.png"
                alt="Symloop Technology"
                width={140}
                height={36}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/50 font-light leading-relaxed max-w-sm mb-6">
              Symloop Technology — engineering firm building production software,
              applied AI, and industrial systems. Delivered from Algeria to clients
              across Africa, MENA, the Gulf and Europe.
            </p>
            <div className="space-y-3 text-sm">
              <a href={PHONE_URL} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="font-mono text-[11px] tracking-[0.1em]">{PHONE_LABEL}</span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="text-[12px]">WhatsApp</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="text-[12px]">{EMAIL}</span>
              </a>
              <div className="flex items-center gap-3 text-white/40">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="text-[12px]">Algiers · Sétif · MENA · Gulf</span>
              </div>
            </div>
          </div>

          {/* ── Sitemap columns ─────────────────────────────────────── */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {columns.map((col) => (
              <div key={col.label}>
                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-5">
                  {col.label}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[13px] text-white/60 hover:text-white transition-colors leading-snug"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom: trust strip + legal ──────────────────────────── */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] tracking-[0.15em] uppercase text-white/30">
            <span>Clutch 5.0/5.0</span>
            <span className="text-white/15">·</span>
            <span>Algiers · Sétif</span>
            <span className="text-white/15">·</span>
            <span>EN · FR · AR</span>
            <span className="text-white/15">·</span>
            <span>Africa · MENA · Gulf · Europe</span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30">
            © {year} Symloop Technology · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
