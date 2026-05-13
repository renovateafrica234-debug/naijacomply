"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { C, font } from '../lib/theme';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (href, label) => (
    <Link href={href} onClick={() => setMenuOpen(false)}
      style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
      onMouseEnter={e => e.target.style.color = '#00E676'}
      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>
      {label}
    </Link>
  );

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(10,31,20,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          {/* Fallback: if logo image fails, show styled NC text */}
          <div style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg, #00E676, #00C853)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#0A1F14' }}>N</span>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>NaijaComply</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#00E676', letterSpacing: '0.15em', fontWeight: 600 }}>AI COMPLIANCE ENGINE</div>
          </div>
        </Link>

        <div className="hide-mob" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {navLink('#dashboard', 'Dashboard')}
          {navLink('#e-invoice', 'E-Invoice')}
          {navLink('#calculator', 'Calculator')}
          {navLink('#integrations', 'Integrations')}
          {navLink('#pricing', 'Pricing')}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="hide-mob" onClick={() => alert('Sign In — Connects to Supabase auth')}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 600, color: '#fff', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', padding: '8px 18px', borderRadius: 8, cursor: 'pointer' }}>
            Sign In
          </button>
          <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', fontWeight: 600, color: '#0A1F14', background: 'linear-gradient(135deg, #00E676, #00C853)', border: 'none', padding: '8px 20px', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 4px 14px rgba(0,230,118,0.25)' }}>
            Get Started ↗
          </button>
          <button onClick={() => window.open('https://wa.me/234YOURNUMBER?text=Hi%20NaijaComply', '_blank')}
            style={{ width: 36, height: 36, borderRadius: 8, background: '#22C55E', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
            💬
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="hide-desk" style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.3rem', cursor: 'pointer', display: 'none' }}>☰</button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {navLink('#dashboard', 'Dashboard')}
          {navLink('#e-invoice', 'E-Invoice')}
          {navLink('#calculator', 'Calculator')}
          {navLink('#integrations', 'Integrations')}
          {navLink('#pricing', 'Pricing')}
          <button onClick={() => { alert('Sign In'); setMenuOpen(false); }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 600, color: '#fff', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', padding: '10px', borderRadius: 8, cursor: 'pointer', width: '100%' }}>
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
