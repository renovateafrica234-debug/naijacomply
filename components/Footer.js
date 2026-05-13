"use client"
import Image from 'next/image';
import { C, font } from '../lib/theme';

export default function Footer() {
  return (
    <footer style={{ background: '#0A1F14', padding: '60px 24px 30px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 50 }} className="mob-col">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Image src="/images/naijacomply-logo.png" alt="NaijaComply" width={32} height={32} style={{ borderRadius: 6 }} />
              <span style={{ fontFamily: font.display, fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>NaijaComply</span>
            </div>
            <p style={{ fontFamily: font.body, fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 20 }}>
              AI-powered compliance for Nigerian businesses. CAC, FIRS, and state filings — automated.
            </p>
            <button onClick={() => window.open('https://wa.me/2349159199306?text=Hi%20NaijaComply', '_blank')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', background: '#22C55E', border: 'none', borderRadius: 8, color: '#fff', fontFamily: font.display, fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
              <span style={{ fontSize: '1.1rem' }}>💬</span> Chat on WhatsApp
            </button>
          </div>
          <div>
            <h4 style={{ fontFamily: font.display, fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: 16 }}>Product</h4>
            {['Dashboard', 'E-Invoice', 'Calculator', 'Agents', 'Pricing'].map(item => (
              <button key={item} onClick={() => document.querySelector(`#${item.toLowerCase().replace(' ', '-')}`)?.scrollIntoView({ behavior: 'smooth' })}
                style={{ display: 'block', background: 'none', border: 'none', padding: '6px 0', fontFamily: font.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', textAlign: 'left' }}>
                {item}
              </button>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: font.display, fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: 16 }}>Company</h4>
            {['About', 'Blog', 'Careers', 'Contact'].map(item => (
              <button key={item} onClick={() => alert(`${item} page coming soon`)}
                style={{ display: 'block', background: 'none', border: 'none', padding: '6px 0', fontFamily: font.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', textAlign: 'left' }}>
                {item}
              </button>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: font.display, fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: 16 }}>Legal</h4>
            {['Privacy', 'Terms', 'Security'].map(item => (
              <button key={item} onClick={() => alert(`${item} page coming soon`)}
                style={{ display: 'block', background: 'none', border: 'none', padding: '6px 0', fontFamily: font.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', textAlign: 'left' }}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: font.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
            © 2026 NaijaComply. Compliance, Intelligent.
          </span>
          <div style={{ display: 'flex', gap: 16 }}>
            <button onClick={() => window.open('https://twitter.com/naijacomply', '_blank')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: '1rem' }}>𝕏</button>
            <button onClick={() => window.open('https://linkedin.com/company/naijacomply', '_blank')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: '1rem' }}>in</button>
            <button onClick={() => window.open('https://wa.me/234YOURNUMBER', '_blank')} style={{ background: 'none', border: 'none', color: '#22C55E', cursor: 'pointer', fontSize: '1rem' }}>💬</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
