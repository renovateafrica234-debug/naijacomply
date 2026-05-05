// components/Calculator.js
"use client"
import { useState } from 'react';
import { C, font } from '../lib/theme';

export default function Calculator() {
  const [type,    setType]    = useState('private');
  const [capital, setCapital] = useState('');
  const [years,   setYears]   = useState(1);
  const [result,  setResult]  = useState(null);

  const calculate = () => {
    const cap = parseInt(capital) || 500000;
    let annualFee = 0;
    let penaltyPerYear = 0;

    if (type === 'private') {
      annualFee     = cap <= 1000000 ? 3000 : cap <= 10000000 ? 5000 : 10000;
      penaltyPerYear = annualFee * 2;
    } else if (type === 'public') {
      annualFee     = cap <= 10000000 ? 15000 : 30000;
      penaltyPerYear = annualFee * 2;
    } else if (type === 'bn') {
      annualFee     = 2000;
      penaltyPerYear = 5000;
    } else {
      annualFee     = 1000;
      penaltyPerYear = 2000;
    }

    const penalty   = penaltyPerYear * years;
    const total     = annualFee + penalty;
    const severity  = total > 100000 ? 'critical' : total > 30000 ? 'warning' : 'low';

    setResult({ annualFee, penalty, total, severity });
  };

  const fmt = n => 'N' + n.toLocaleString('en-NG');

  const severityColor = { critical: C.red, warning: C.amber, low: C.green };

  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="mob-col">

          {/* Left: Copy */}
          <div>
            <span style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.green, letterSpacing: '0.2em', display: 'block', marginBottom: 12, opacity: 0.8 }}>
              04 &mdash; PENALTY CALCULATOR
            </span>
            <h2 style={{ fontFamily: font.display, fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 900, color: C.white, lineHeight: 1.1, marginBottom: 16 }}>
              Know Your Exposure<br />
              <span style={{ color: C.red }}>Before CAC Does.</span>
            </h2>
            <p style={{ fontSize: '0.92rem', color: C.textDim, lineHeight: 1.75, marginBottom: 28 }}>
              Late filing of CAC Annual Returns triggers escalating penalties under CAMA 2020. Calculate your exact liability in seconds — then let NaijaComply clear it.
            </p>

            {/* Quick facts */}
            {[
              { label: 'Private Ltd (RC)', detail: 'N3,000 - N10,000/yr base + 2x penalty per year late' },
              { label: 'Business Name (BN)',detail: 'N2,000/yr base + N5,000 penalty per year late' },
              { label: 'Public Company',    detail: 'N15,000 - N30,000/yr base + 2x penalty per year late' },
            ].map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid rgba(0,255,136,0.06)' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.green, marginTop: 5, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: font.mono, fontSize: '0.72rem', color: C.green, marginBottom: 2 }}>{f.label}</div>
                  <div style={{ fontSize: '0.82rem', color: C.textDim }}>{f.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Calculator */}
          <div className="nc-card" style={{ padding: 28, position: 'relative', overflow: 'hidden' }}>
            <div className="scan-line" />

            <div style={{ fontFamily: font.mono, fontSize: '0.7rem', color: C.green, letterSpacing: '0.12em', marginBottom: 22, opacity: 0.8 }}>
              &#9650; CAMA 2020 PENALTY ENGINE
            </div>

            {/* Company type */}
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>COMPANY TYPE</label>
              <select className="nc-input" value={type} onChange={e => setType(e.target.value)}>
                <option value="private">Private Limited Company (RC)</option>
                <option value="public">Public Limited Company (PLC)</option>
                <option value="bn">Business Name (BN)</option>
                <option value="it">Incorporated Trustees (IT)</option>
              </select>
            </div>

            {/* Share capital */}
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>SHARE CAPITAL (NGN)</label>
              <input className="nc-input" type="number" placeholder="e.g. 500000" value={capital}
                onChange={e => setCapital(e.target.value)} />
            </div>

            {/* Years late */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>
                YEARS LATE: <span style={{ color: C.white }}>{years}</span>
              </label>
              <div style={{ display: 'flex', gap: 6 }}>
                {[1, 2, 3, 4, 5].map(y => (
                  <button key={y} onClick={() => setYears(y)} style={{
                    flex: 1, padding: '10px 4px',
                    background: years === y ? 'rgba(0,255,136,0.12)' : 'transparent',
                    border: '1px solid',
                    borderColor: years === y ? C.green : 'rgba(0,255,136,0.15)',
                    color: years === y ? C.green : C.muted,
                    cursor: 'pointer',
                    fontFamily: font.display, fontSize: '0.78rem', fontWeight: 700,
                    borderRadius: 3, transition: 'all 0.2s',
                  }}>
                    {y}yr
                  </button>
                ))}
              </div>
            </div>

            <button onClick={calculate} style={{
              width: '100%', padding: '13px',
              background: 'linear-gradient(135deg, #00FF88, #00CC6A)',
              color: '#050A0E',
              fontFamily: font.display, fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.08em', border: 'none', cursor: 'pointer',
              borderRadius: 3,
            }}>
              CALCULATE PENALTY
            </button>

            {/* Result */}
            {result && (
              <div style={{ marginTop: 20, padding: 18, background: 'rgba(5,10,14,0.6)', border: '1px solid rgba(0,255,136,0.1)', borderRadius: 3, animation: 'countIn 0.4s ease' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(0,255,136,0.06)' }}>
                  <span style={{ fontFamily: font.mono, fontSize: '0.75rem', color: C.muted }}>Annual filing fee</span>
                  <span style={{ fontFamily: font.mono, fontSize: '0.75rem', color: C.text }}>{fmt(result.annualFee)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(0,255,136,0.06)' }}>
                  <span style={{ fontFamily: font.mono, fontSize: '0.75rem', color: C.muted }}>Late penalty ({years} yr{years > 1 ? 's' : ''})</span>
                  <span style={{ fontFamily: font.mono, fontSize: '0.75rem', color: C.red }}>{fmt(result.penalty)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, marginTop: 4 }}>
                  <span style={{ fontFamily: font.display, fontSize: '0.78rem', fontWeight: 700, color: severityColor[result.severity] }}>TOTAL EXPOSURE</span>
                  <span style={{ fontFamily: font.display, fontSize: '1.6rem', fontWeight: 900, color: severityColor[result.severity] }}>{fmt(result.total)}</span>
                </div>
                <button style={{
                  width: '100%', marginTop: 14, padding: '11px',
                  background: 'linear-gradient(135deg, #00FF88, #00CC6A)',
                  color: '#050A0E', border: 'none', cursor: 'pointer',
                  fontFamily: font.display, fontSize: '0.72rem', fontWeight: 700,
                  letterSpacing: '0.06em', borderRadius: 3,
                }}>
                  FILE NOW AND CLEAR THIS PENALTY
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
