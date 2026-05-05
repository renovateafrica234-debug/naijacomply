// components/Footer.js
"use client"
import { C, font } from '../lib/theme';

const LINKS = {
  Product:  ['Dashboard', 'E-Invoicing', 'Penalty Calculator', 'AI Brain', 'API Access'],
  Company:  ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'NDPR Compliance'],
  Support:  ['Help Centre', 'WhatsApp Support', 'System Status', 'Changelog'],
};

const INTEGRATIONS = ['CAC Portal', 'FIRS TaxPro-Max', 'FIRS e-Invoice', 'NAFDAC', 'NERC'];

export default function Footer() {
  const line = '1px solid rgba(0,255,136,0.07)';

  return (
    <footer style={{ borderTop: line, background: 'rgba(5,10,14,0.98)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 24px 32px' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48, borderBottom: line, flexWrap: 'wrap' }} className="mob-col">

          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 34, height: 34,
                background: 'linear-gradient(135deg, #00FF88, #00CC6A)',
                borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 12px rgba(0,255,136,0.25)',
              }}>
                <span style={{ fontFamily: font.display, fontSize: '0.75rem', fontWeight: 900, color: '#050A0E' }}>NC</span>
              </div>
              <div>
                <div style={{ fontFamily: font.display, fontSize: '0.95rem', fontWeight: 900, color: C.white, letterSpacing: '0.05em' }}>NaijaComply</div>
                <div style={{ fontFamily: font.mono, fontSize: '0.48rem', color: C.green, letterSpacing: '0.15em', opacity: 0.7 }}>AI COMPLIANCE ENGINE</div>
              </div>
            </div>
            <p style={{ fontSize: '0.83rem', color: C.textDim, lineHeight: 1.7, maxWidth: 260, marginBottom: 20 }}>
              AI-powered business compliance for Nigeria. CAC returns, FIRS e-invoicing, and regulatory automation in one platform.
            </p>

            {/* Integrations */}
            <div style={{ fontFamily: font.mono, fontSize: '0.6rem', color: C.muted, letterSpacing: '0.1em', marginBottom: 10 }}>CONNECTED TO</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {INTEGRATIONS.map((name, i) => (
                <span key={i} style={{
                  fontFamily: font.mono, fontSize: '0.6rem',
                  color: C.green, padding: '3px 8px',
                  border: '1px solid rgba(0,255,136,0.2)',
                  borderRadius: 2, letterSpacing: '0.06em',
                }}>
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <div style={{ fontFamily: font.mono, fontSize: '0.62rem', color: C.muted, letterSpacing: '0.15em', marginBottom: 16, fontWeight: 600 }}>{title.toUpperCase()}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map((item, j) => (
                  <span key={j} style={{
                    fontSize: '0.83rem', color: C.textDim,
                    cursor: 'pointer', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = C.green}
                    onMouseLeave={e => e.target.style.color = C.textDim}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance notice */}
        <div style={{ margin: '28px 0', padding: '16px 20px', background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.08)', borderRadius: 3 }}>
          <p style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.muted, lineHeight: 1.7, letterSpacing: '0.04em' }}>
            <strong style={{ color: C.green }}>REGULATORY NOTICE:</strong> NaijaComply operates in compliance with the Companies and Allied Matters Act (CAMA) 2020, the Finance Act 2023, and FIRS e-Invoice directives. All e-invoices generated are submitted to the FIRS gateway in real time. NaijaComply is not a law firm. For legal compliance advice, consult a qualified Nigerian lawyer.
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
          <span style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.muted }}>
            &copy; 2026 NaijaComply &mdash; A Renovate Africa Product &mdash; Abuja, Nigeria
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontFamily: font.mono, fontSize: '0.62rem', color: C.muted }}>hello@naijacomply.ng</span>
            <div style={{ padding: '4px 10px', background: 'rgba(118,185,0,0.08)', border: '1px solid rgba(118,185,0,0.2)', borderRadius: 2 }}>
              <span style={{ fontFamily: font.mono, fontSize: '0.58rem', color: '#76B900', fontWeight: 700, letterSpacing: '0.1em' }}>NVIDIA POWERED</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
