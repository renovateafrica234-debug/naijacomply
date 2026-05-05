// components/Nav.js
"use client"
import { useState } from 'react';
import { C, font } from '../lib/theme';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = ['Dashboard', 'E-Invoice', 'Calculator', 'Integrations', 'Pricing'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: 'rgba(5,10,14,0.88)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,255,136,0.08)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '0 24px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Logo mark */}
          <div style={{
            width: 34, height: 34,
            background: 'linear-gradient(135deg, #00FF88, #00CC6A)',
            borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 16px rgba(0,255,136,0.3)',
          }}>
            <span style={{ fontFamily: font.display, fontSize: '0.75rem', fontWeight: 900, color: '#050A0E' }}>NC</span>
          </div>
          <div>
            <div style={{ fontFamily: font.display, fontSize: '0.95rem', fontWeight: 900, color: C.white, letterSpacing: '0.05em' }}>NaijaComply</div>
            <div style={{ fontFamily: font.mono, fontSize: '0.5rem', color: C.green, letterSpacing: '0.15em', marginTop: -2, opacity: 0.8 }}>AI COMPLIANCE ENGINE</div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hide-mob" style={{ display: 'flex', gap: 28 }}>
          {links.map(l => (
            <span key={l} style={{
              fontSize: '0.82rem', fontWeight: 500,
              color: C.textDim, cursor: 'pointer',
              transition: 'color 0.2s', letterSpacing: '0.02em',
            }}
              onMouseEnter={e => e.target.style.color = C.green}
              onMouseLeave={e => e.target.style.color = C.textDim}
            >{l}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="hide-mob" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ fontSize: '0.82rem', color: C.textDim, cursor: 'pointer' }}>Sign In</span>
          <button className="btn-primary" style={{
            background: 'linear-gradient(135deg, #00FF88, #00CC6A)',
            color: '#050A0E',
            fontFamily: font.display,
            fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.08em',
            border: 'none', cursor: 'pointer',
            padding: '9px 20px', borderRadius: 3,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span>Get Started</span>
            <span style={{ fontSize: '0.85rem' }}>&#8599;</span>
          </button>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: C.green, fontSize: '1.2rem' }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: C.surface,
          borderTop: '1px solid rgba(0,255,136,0.08)',
          padding: '16px 24px',
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          {links.map(l => (
            <span key={l} style={{ fontSize: '0.9rem', color: C.text, cursor: 'pointer' }}>{l}</span>
          ))}
          <button style={{
            background: 'linear-gradient(135deg, #00FF88, #00CC6A)',
            color: '#050A0E', border: 'none', cursor: 'pointer',
            padding: '10px', borderRadius: 3,
            fontFamily: font.display, fontSize: '0.75rem', fontWeight: 700,
          }}>Get Started</button>
        </div>
      )}
    </nav>
  );
}
