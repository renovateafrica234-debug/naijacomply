// components/Hero.js
"use client"
import { useState, useEffect } from 'react';
import { C, font } from '../lib/theme';

const STATS = [
  { n: '340+',  label: 'Businesses Compliant' },
  { n: 'N12M+', label: 'Penalties Avoided' },
  { n: '99.9%', label: 'Filing Accuracy' },
  { n: '4 min', label: 'Avg Filing Time' },
];

const TICKER_ITEMS = [
  'CAC ANNUAL RETURNS', 'FIRS E-INVOICING', 'PENALTY CALCULATOR',
  'REAL-TIME COMPLIANCE', 'AI-POWERED FILING', 'MCP GOVERNMENT APIs',
  'CAMA 2020 COMPLIANT', 'FIRS TAX AUTOMATION',
];

export default function Hero() {
  const [tick, setTick] = useState(0);
  const words = ['Automated.', 'Intelligent.', 'Seamless.'];

  useEffect(() => {
    const t = setInterval(() => setTick(i => (i + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, []);

  const allTicker = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section style={{ position: 'relative', minHeight: '100vh', paddingTop: 64, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

      {/* Background glow orbs */}
      <div style={{ position: 'absolute', top: '15%', left: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,136,0.08), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,47,255,0.06), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '40%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.05), transparent 70%)', pointerEvents: 'none' }} />

      {/* Nvidia-style spinning ring */}
      <div className="spin hide-mob" style={{
        position: 'absolute', top: '12%', right: '8%',
        width: 280, height: 280,
        border: '1px solid rgba(0,255,136,0.08)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
          width: 8, height: 8, borderRadius: '50%', background: C.green,
          boxShadow: '0 0 12px ' + C.green,
        }} />
      </div>
      <div style={{
        position: 'absolute', top: '12%', right: '8%',
        width: 220, height: 220,
        marginTop: 30, marginRight: 30,
        border: '1px solid rgba(0,229,255,0.05)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} className="hide-mob" />

      {/* Main content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 24px 48px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>

        {/* Status badge */}
        <div className="fu" style={{ marginBottom: 24 }}>
          <span className="badge badge-green">
            <span className="pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: C.green, display: 'inline-block' }} />
            NVIDIA AI BRAIN ACTIVE
          </span>
          <span className="badge badge-cyan" style={{ marginLeft: 8 }}>
            MCP GOVERNMENT APIS LIVE
          </span>
        </div>

        {/* Headline */}
        <h1 className="fu2" style={{
          fontFamily: font.display,
          fontSize: 'clamp(2.4rem, 6vw, 5rem)',
          fontWeight: 900,
          color: C.white,
          lineHeight: 1.0,
          marginBottom: 16,
          maxWidth: 700,
        }}>
          Nigerian Business<br />
          Compliance,{' '}
          <span className="glow" style={{ color: C.green }}>{words[tick]}</span>
        </h1>

        {/* Sub */}
        <p className="fu3" style={{
          fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
          color: C.textDim,
          maxWidth: 560,
          lineHeight: 1.75,
          marginBottom: 36,
        }}>
          File CAC annual returns, generate FIRS-compliant e-invoices, calculate penalties in real-time, and stay ahead of every regulatory deadline — all from one AI-powered dashboard.
        </p>

        {/* CTA row */}
        <div className="fu4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 56 }}>
          <button style={{
            background: 'linear-gradient(135deg, #00FF88, #00CC6A)',
            color: '#050A0E',
            fontFamily: font.display,
            fontSize: '0.78rem', fontWeight: 700,
            letterSpacing: '0.08em',
            border: 'none', cursor: 'pointer',
            padding: '14px 32px', borderRadius: 3,
            display: 'flex', alignItems: 'center', gap: 8,
            boxShadow: '0 0 24px rgba(0,255,136,0.25)',
          }}>
            <span>Check My Penalty</span>
            <span>&#8599;</span>
          </button>
          <button style={{
            border: '1px solid rgba(0,255,136,0.25)',
            color: C.green,
            fontFamily: font.display,
            fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.08em',
            background: 'transparent', cursor: 'pointer',
            padding: '13px 28px', borderRadius: 3,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span>&#9654;</span>
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Stats strip */}
        <div className="fu5" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 1,
          borderTop: '1px solid rgba(0,255,136,0.08)',
          paddingTop: 32,
          maxWidth: 680,
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ paddingRight: 24, paddingLeft: i > 0 ? 24 : 0, borderRight: i < STATS.length - 1 ? '1px solid rgba(0,255,136,0.08)' : 'none' }}>
              <div style={{ fontFamily: font.display, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, color: C.white, marginBottom: 4 }}>{s.n}</div>
              <div style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker strip */}
      <div style={{ background: 'rgba(0,255,136,0.05)', borderTop: '1px solid rgba(0,255,136,0.1)', borderBottom: '1px solid rgba(0,255,136,0.1)', padding: '10px 0', overflow: 'hidden' }}>
        <div className="ticker-track">
          {allTicker.map((t, i) => (
            <span key={i} style={{
              fontFamily: font.mono,
              fontSize: '0.7rem',
              color: C.green,
              letterSpacing: '0.15em',
              padding: '0 28px',
              whiteSpace: 'nowrap',
              opacity: 0.7,
            }}>
              {t} <span style={{ opacity: 0.3, marginLeft: 8 }}>&#9670;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
