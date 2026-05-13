"use client"
import { useState } from 'react';
import Image from 'next/image';
import { C, font, sectionTag, sectionTitle, btnPrimary, btnSecondary } from '../lib/theme';

export default function Hero() {
  const [email, setEmail] = useState('');

  return (
    <section id="hero" style={{ position: 'relative', padding: '140px 24px 100px', background: 'linear-gradient(180deg, #0A1F14 0%, #0f2e1d 40%, #F8FAF7 100%)', overflow: 'hidden' }}>
      {/* Background network pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 20% 50%, #00E676 1px, transparent 1px), radial-gradient(circle at 80% 20%, #00E676 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="mob-col">
        <div className="fu" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            <span className="badge badge-green"><span className="agent-dot active" style={{ width: 6, height: 6 }} />NVIDIA AI BRAIN ACTIVE</span>
            <span className="badge badge-cyan">MCP GOVERNMENT APIS LIVE</span>
            <span className="badge badge-green">💬 WHATSAPP CONNECTED</span>
          </div>

          <h1 style={{ ...sectionTitle, color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
            Nigerian Business<br />Compliance,<br />
            <span style={{ color: C.green }}>Seamless.</span>
          </h1>

          <p style={{ fontFamily: font.body, fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
            File CAC annual returns, generate FIRS-compliant e-invoices, calculate penalties in real-time, and stay ahead of every regulatory deadline — all from one AI-powered dashboard.
          </p>

          <div style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
            <button onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} style={btnPrimary}>
              Check My Penalty ↗
            </button>
            <button onClick={() => alert('Demo video modal opens here')} style={{ ...btnSecondary, background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
              ▶ Watch Demo
            </button>
          </div>

          {/* WhatsApp USP Badge */}
          <div onClick={() => window.open('https://wa.me/234YOURNUMBER?text=Hi%20NaijaComply', '_blank')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 20px', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 12, cursor: 'pointer', transition: 'all 0.2s', marginBottom: 32 }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', boxShadow: '0 4px 12px rgba(34,197,94,0.3)' }}>💬</div>
            <div>
              <div style={{ fontFamily: font.display, fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>Get Alerts on WhatsApp</div>
              <div style={{ fontFamily: font.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Monthly reports, deadline reminders & approvals</div>
            </div>
            <span style={{ fontFamily: font.mono, fontSize: '0.75rem', color: '#22C55E', fontWeight: 600 }}>CONNECT →</span>
          </div>

          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: font.display, fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>500+</span>
              <span style={{ fontFamily: font.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', maxWidth: 80, lineHeight: 1.3 }}>Businesses Protected</span>
            </div>
            <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: font.display, fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>₦12M+</span>
              <span style={{ fontFamily: font.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', maxWidth: 80, lineHeight: 1.3 }}>Penalties Avoided</span>
            </div>
          </div>
        </div>

        {/* Hand Mockup Image */}
        <div className="fu2" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,230,118,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div style={{ position: 'relative', transform: 'rotate(-3deg)', transition: 'transform 0.3s', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-3deg) scale(1)'}>
            <Image
              src="/images/hand-mockup.jpg"
              alt="NaijaComply on mobile"
              width={380}
              height={500}
              style={{ borderRadius: 24, boxShadow: '0 25px 60px rgba(0,0,0,0.3)', objectFit: 'cover' }}
              priority
            />
            {/* Floating WhatsApp indicator on the phone */}
            <div className="float" style={{ position: 'absolute', bottom: 40, right: -20, padding: '10px 16px', background: '#fff', borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '1.2rem' }}>💬</span>
              <div>
                <div style={{ fontFamily: font.display, fontSize: '0.75rem', fontWeight: 700, color: C.text }}>New Alert</div>
                <div style={{ fontFamily: font.body, fontSize: '0.65rem', color: C.textSecondary }}>CAC deadline in 3 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div style={{ marginTop: 80, overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 0' }}>
        <div className="ticker-track">
          {['CAC ANNUAL RETURNS', 'FIRS E-INVOICING', 'PENALTY CALCULATOR', 'REAL-TIME COMPLIANCE', 'AI-POWERED FILING', 'MCP GOVERNMENT APIs', 'CAMA 2020 COMPLIANT', 'FIRS TAX AUTOMATION', 'WHATSAPP ALERTS', 'NVIDIA AI BRAIN'].map((t, i) => (
            <span key={i} style={{ fontFamily: font.mono, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 500, marginRight: 40, whiteSpace: 'nowrap' }}>
              ◆ {t}
            </span>
          ))}
          {['CAC ANNUAL RETURNS', 'FIRS E-INVOICING', 'PENALTY CALCULATOR', 'REAL-TIME COMPLIANCE', 'AI-POWERED FILING', 'MCP GOVERNMENT APIs', 'CAMA 2020 COMPLIANT', 'FIRS TAX AUTOMATION', 'WHATSAPP ALERTS', 'NVIDIA AI BRAIN'].map((t, i) => (
            <span key={'dup'+i} style={{ fontFamily: font.mono, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 500, marginRight: 40, whiteSpace: 'nowrap' }}>
              ◆ {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
