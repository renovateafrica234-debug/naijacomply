// components/MCPGrid.js
"use client"
import { C, font } from '../lib/theme';

const INTEGRATIONS = [
  {
    icon: '🏛',
    name: 'CAC Portal',
    badge: 'badge-green',
    badgeText: 'LIVE',
    desc: 'Direct API to the Corporate Affairs Commission. File annual returns, check RC status, update directors and get instant CAC certificates.',
    actions: ['Annual Returns', 'RC Status Check', 'Director Updates', 'Certificate Download'],
  },
  {
    icon: '🧾',
    name: 'FIRS e-Invoice Gateway',
    badge: 'badge-green',
    badgeText: 'LIVE',
    desc: 'Issue, receive and validate FIRS-compliant e-invoices. Meets the new Finance Act requirement for all businesses to use electronic invoicing.',
    actions: ['Issue e-Invoice', 'Validate Invoice', 'Tax Clearance', 'VAT Filing'],
  },
  {
    icon: '💳',
    name: 'FIRS TaxPro-Max',
    badge: 'badge-cyan',
    badgeText: 'CONNECTED',
    desc: 'Integrated with the FIRS TaxPro-Max portal for CIT, WHT, and VAT filing. Pre-fill tax forms from your compliance data automatically.',
    actions: ['CIT Filing', 'WHT Returns', 'VAT Monthly', 'TCC Request'],
  },
  {
    icon: '📋',
    name: 'NAFDAC Registry',
    badge: 'badge-violet',
    badgeText: 'BETA',
    desc: 'Product registration status, permit renewals and compliance tracking for businesses in food, pharma, cosmetics and regulated sectors.',
    actions: ['Product Registration', 'Permit Renewal', 'Compliance Check'],
  },
  {
    icon: '⚡',
    name: 'NERC Compliance',
    badge: 'badge-violet',
    badgeText: 'BETA',
    desc: 'Nigerian Electricity Regulatory Commission filings and license renewals for energy sector businesses.',
    actions: ['License Renewal', 'Tariff Filing', 'Compliance Report'],
  },
  {
    icon: '🌍',
    name: 'SON Standards Portal',
    badge: 'badge-amber',
    badgeText: 'Q3 2026',
    desc: 'Standards Organisation of Nigeria product certification and standards compliance for manufacturers and importers.',
    actions: ['Product Certification', 'Standards Audit', 'Import Compliance'],
  },
];

export default function MCPGrid() {
  return (
    <section style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <span className="sec-tag" style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.green, letterSpacing: '0.2em', display: 'block', marginBottom: 12, opacity: 0.8 }}>
            02 &mdash; MCP GOVERNMENT INTEGRATIONS
          </span>
          <h2 style={{ fontFamily: font.display, fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 900, color: C.white, lineHeight: 1.1, marginBottom: 14, maxWidth: 600 }}>
            Every Nigerian Government Portal,<br />
            <span style={{ color: C.green }}>One Dashboard.</span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: C.textDim, maxWidth: 520, lineHeight: 1.7 }}>
            NaijaComply connects directly to government portals via Model Context Protocol (MCP) APIs. No manual data re-entry. No portal-hopping. Your AI agent handles it all.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
          {INTEGRATIONS.map((item, i) => (
            <div
              key={i}
              className="nc-card"
              style={{ padding: '28px', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
            >
              {/* Top accent line on live items */}
              {item.badgeText === 'LIVE' && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #00FF88, #00E5FF)' }} />
              )}

              {/* Icon + badge row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{
                  width: 48, height: 48,
                  background: 'rgba(0,255,136,0.06)',
                  border: '1px solid rgba(0,255,136,0.12)',
                  borderRadius: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  {item.icon}
                </div>
                <span className={'badge ' + item.badge}>{item.badgeText}</span>
              </div>

              {/* Name */}
              <div style={{ fontFamily: font.display, fontSize: '1rem', fontWeight: 700, color: C.white, marginBottom: 10, letterSpacing: '0.03em' }}>
                {item.name}
              </div>

              {/* Desc */}
              <p style={{ fontSize: '0.83rem', color: C.textDim, lineHeight: 1.65, marginBottom: 18 }}>
                {item.desc}
              </p>

              {/* Action chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {item.actions.map((a, j) => (
                  <span key={j} style={{
                    fontFamily: font.mono,
                    fontSize: '0.6rem',
                    color: C.muted,
                    padding: '3px 8px',
                    border: '1px solid rgba(74,96,128,0.3)',
                    borderRadius: 2,
                    letterSpacing: '0.06em',
                  }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ marginTop: 32, padding: '16px 24px', background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.08)', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: '1.1rem' }}>&#9888;</span>
          <p style={{ fontSize: '0.82rem', color: C.textDim, lineHeight: 1.6 }}>
            <strong style={{ color: C.green, fontFamily: font.mono }}>AI Agent Note:</strong>{' '}
            Your NaijaComply AI agent monitors all connected portals 24/7, alerts you before deadlines, and can auto-file returns with your pre-saved business data. No portal login required.
          </p>
        </div>
      </div>
    </section>
  );
}
