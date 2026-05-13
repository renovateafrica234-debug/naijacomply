"use client"
import { useState } from 'react';
import Image from 'next/image';
import { C, font } from '../lib/theme';

export default function Hero() {
  return (
    <section id="hero" style={{ 
      position: 'relative', 
      padding: '140px 24px 80px', 
      background: 'linear-gradient(180deg, #F8FAF7 0%, #FFFFFF 50%, #F0FDF4 100%)',
      overflow: 'hidden' 
    }}>
      {/* Subtle background mesh */}
      <div style={{ 
        position: 'absolute', inset: 0, opacity: 0.4,
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(0,230,118,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0,230,118,0.06) 0%, transparent 50%)'
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Badges */}
        <div className="fu" style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
          <span className="badge badge-green">
            <span className="agent-dot active" style={{ width: 6, height: 6 }} />
            NVIDIA AI BRAIN ACTIVE
          </span>
          <span className="badge badge-cyan">MCP GOVERNMENT APIS LIVE</span>
          <span className="badge badge-green">💬 WHATSAPP CONNECTED</span>
        </div>

        {/* Headline */}
        <h1 className="fu1" style={{ 
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', 
          fontWeight: 700,
          color: '#0A1F14', 
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          maxWidth: 750,
          marginBottom: 24 
        }}>
          Nigerian Business<br />
          Compliance,<br />
          <span style={{ color: '#00E676' }}>Seamless.</span>
        </h1>

        {/* Subhead */}
        <p className="fu2" style={{ 
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', 
          color: '#4A5568', 
          lineHeight: 1.7, 
          maxWidth: 560, 
          marginBottom: 36 
        }}>
          File CAC annual returns, generate FIRS-compliant e-invoices, calculate penalties in real-time, and stay ahead of every regulatory deadline — all from one AI-powered dashboard.
        </p>

        {/* CTAs */}
        <div className="fu3" style={{ display: 'flex', gap: 14, marginBottom: 40, flexWrap: 'wrap', alignItems: 'center' }}>
          <button onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.01em',
              color: '#0A1F14',
              background: 'linear-gradient(135deg, #00E676, #00C853)',
              border: 'none', borderRadius: 10,
              padding: '14px 28px',
              cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              boxShadow: '0 4px 14px rgba(0,230,118,0.25)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            Check My Penalty ↗
          </button>

          <button onClick={() => alert('Demo video modal opens here')}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.9rem', fontWeight: 600,
              color: '#00E676',
              background: 'transparent',
              border: '1.5px solid rgba(0,230,118,0.3)', 
              borderRadius: 10,
              padding: '14px 28px',
              cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,230,118,0.05)'; e.currentTarget.style.borderColor = '#00E676'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(0,230,118,0.3)'; }}>
            ▶ Watch Demo
          </button>
        </div>

        {/* WhatsApp USP Row */}
        <div className="fu4" onClick={() => window.open('https://wa.me/2349159199306?text=Hi%20NaijaComply', '_blank')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            padding: '14px 20px',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: 12,
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,230,118,0.3)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'; }}>
          <div style={{ 
            width: 40, height: 40, borderRadius: '50%', 
            background: '#22C55E', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            fontSize: '1.2rem',
            boxShadow: '0 2px 8px rgba(34,197,94,0.25)',
            flexShrink: 0
          }}>
            💬
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', fontWeight: 700, color: '#0A1F14', marginBottom: 2 }}>
              Get Alerts on WhatsApp
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#718096' }}>
              Monthly reports, deadline reminders & approvals
            </div>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#00E676', fontWeight: 600, marginLeft: 8 }}>
            CONNECT →
          </span>
        </div>

        {/* Stats */}
        <div className="fu5" style={{ display: 'flex', gap: 32, marginTop: 48, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 700, color: '#0A1F14', letterSpacing: '-0.02em' }}>500+</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#718096', marginTop: 2 }}>Businesses Protected</div>
          </div>
          <div style={{ width: 1, height: 40, background: '#E2E8F0' }} className="hide-mob" />
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 700, color: '#0A1F14', letterSpacing: '-0.02em' }}>₦12M+</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#718096', marginTop: 2 }}>Penalties Avoided</div>
          </div>
          <div style={{ width: 1, height: 40, background: '#E2E8F0' }} className="hide-mob" />
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 700, color: '#0A1F14', letterSpacing: '-0.02em' }}>7</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#718096', marginTop: 2 }}>AI Agents Active</div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div style={{ marginTop: 80, overflow: 'hidden', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '18px 0' }}>
        <div className="ticker-track">
          {['CAC ANNUAL RETURNS', 'FIRS E-INVOICING', 'PENALTY CALCULATOR', 'REAL-TIME COMPLIANCE', 'AI-POWERED FILING', 'MCP GOVERNMENT APIs', 'CAMA 2020 COMPLIANT', 'FIRS TAX AUTOMATION', 'WHATSAPP ALERTS', 'NVIDIA AI BRAIN'].map((t, i) => (
            <span key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500, marginRight: 40, whiteSpace: 'nowrap' }}>
              ◆ {t}
            </span>
          ))}
          {['CAC ANNUAL RETURNS', 'FIRS E-INVOICING', 'PENALTY CALCULATOR', 'REAL-TIME COMPLIANCE', 'AI-POWERED FILING', 'MCP GOVERNMENT APIs', 'CAMA 2020 COMPLIANT', 'FIRS TAX AUTOMATION', 'WHATSAPP ALERTS', 'NVIDIA AI BRAIN'].map((t, i) => (
            <span key={'dup'+i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500, marginRight: 40, whiteSpace: 'nowrap' }}>
              ◆ {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
