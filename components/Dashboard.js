// components/Dashboard.js
"use client"
import { useState } from 'react';
import { C, font } from '../lib/theme';

const BUSINESSES = [
  {
    name:    'TechStart Nigeria Ltd',
    rc:      'RC1234567',
    type:    'Private Ltd',
    due:     '15 Apr 2026',
    status:  'overdue',
    penalty: 'N170,000',
    agents:  3,
    score:   42,
    alert:   'Auto-filing agent queued — awaiting your approval',
  },
  {
    name:    'African Logistics Co.',
    rc:      'RC7654321',
    type:    'Private Ltd',
    due:     '30 Jun 2026',
    status:  'due-soon',
    daysLeft: 56,
    agents:  2,
    score:   78,
    alert:   'Reminder scheduled at 30, 14 and 7 days before deadline',
  },
  {
    name:    'Green Energy Solutions',
    rc:      'RC9876543',
    type:    'Business Name',
    due:     '20 Sep 2026',
    status:  'compliant',
    daysLeft: 148,
    agents:  1,
    score:   97,
  },
  {
    name:    'Lagos Fintech Hub',
    rc:      'RC1122334',
    type:    'Private Ltd',
    due:     '01 May 2026',
    status:  'due-soon',
    daysLeft: 12,
    agents:  2,
    score:   65,
    alert:   'High urgency — e-invoice VAT return also due this month',
  },
];

const SUMMARY = [
  { label: 'Total Entities',    val: '4',   color: C.white,  icon: '&#9632;' },
  { label: 'Compliant',         val: '1',   color: C.green,  icon: '&#10003;' },
  { label: 'Due Soon',          val: '2',   color: C.amber,  icon: '&#9650;' },
  { label: 'Overdue',           val: '1',   color: C.red,    icon: '&#9888;' },
];

const statusStyle = {
  compliant: { bg: 'rgba(0,255,136,0.06)',  border: 'rgba(0,255,136,0.2)',  dot: C.green,  label: 'COMPLIANT',  badge: 'badge-green' },
  'due-soon':{ bg: 'rgba(255,184,0,0.06)',  border: 'rgba(255,184,0,0.2)',  dot: C.amber,  label: 'DUE SOON',   badge: 'badge-amber' },
  overdue:   { bg: 'rgba(255,59,92,0.06)',  border: 'rgba(255,59,92,0.2)',  dot: C.red,    label: 'OVERDUE',    badge: 'badge-red'   },
};

function ScoreRing({ score, color }) {
  const r    = 18;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <svg width="48" height="48" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
      <circle
        cx="24" cy="24" r={r}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 24 24)"
        style={{ transition: 'stroke-dasharray 0.8s ease' }}
      />
      <text x="24" y="28" textAnchor="middle" style={{ fontFamily: font.display, fontSize: '9px', fontWeight: 700, fill: color }}>{score}</text>
    </svg>
  );
}

export default function Dashboard() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section style={{ padding: '80px 24px', background: 'rgba(0,255,136,0.015)', borderTop: '1px solid rgba(0,255,136,0.06)', borderBottom: '1px solid rgba(0,255,136,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 40 }}>
          <div>
            <span style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.green, letterSpacing: '0.2em', display: 'block', marginBottom: 12, opacity: 0.8 }}>
              06 &mdash; COMPLIANCE DASHBOARD
            </span>
            <h2 style={{ fontFamily: font.display, fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 900, color: C.white, lineHeight: 1.1 }}>
              All Your Businesses.<br />
              <span style={{ color: C.green }}>One Control Panel.</span>
            </h2>
          </div>
          <button style={{
            border: '1px solid rgba(0,255,136,0.25)', color: C.green,
            fontFamily: font.display, fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.08em', background: 'transparent', cursor: 'pointer',
            padding: '11px 22px', borderRadius: 3,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span>+ Add Business</span>
          </button>
        </div>

        {/* Summary strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28 }}>
          {SUMMARY.map((s, i) => (
            <div key={i} className="nc-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: '1.2rem', color: s.color }} dangerouslySetInnerHTML={{ __html: s.icon }} />
              <div>
                <div style={{ fontFamily: font.display, fontSize: '1.5rem', fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: font.mono, fontSize: '0.6rem', color: C.muted, letterSpacing: '0.1em', marginTop: 3 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Business cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {BUSINESSES.map((biz, i) => {
            const s       = statusStyle[biz.status];
            const isOpen  = expanded === i;

            return (
              <div
                key={i}
                style={{
                  background: s.bg,
                  border: '1px solid ' + s.border,
                  borderRadius: 4,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                {/* Main row */}
                <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>

                  {/* Left: info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    {/* Score ring */}
                    <ScoreRing score={biz.score} color={s.dot} />

                    <div>
                      <div style={{ fontFamily: font.display, fontSize: '1rem', fontWeight: 700, color: C.white, marginBottom: 4, letterSpacing: '0.02em' }}>
                        {biz.name}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: font.mono, fontSize: '0.68rem', color: C.muted }}>{biz.rc}</span>
                        <span style={{ fontFamily: font.mono, fontSize: '0.62rem', color: C.muted }}>&#9642;</span>
                        <span style={{ fontFamily: font.mono, fontSize: '0.68rem', color: C.muted }}>{biz.type}</span>
                        <span className={'badge ' + s.badge}>{s.label}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 5 }}>
                        <span style={{ fontFamily: font.mono, fontSize: '0.68rem', color: C.muted }}>Due: {biz.due}</span>
                        {biz.daysLeft && (
                          <span style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.muted }}>&#9642; {biz.daysLeft} days left</span>
                        )}
                        <span style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.green }}>&#9642; {biz.agents} agent{biz.agents > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: penalty + action */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    {biz.penalty && (
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontFamily: font.display, fontSize: '1.15rem', fontWeight: 900, color: C.red }}>{biz.penalty}</div>
                        <div style={{ fontFamily: font.mono, fontSize: '0.6rem', color: C.muted, letterSpacing: '0.08em' }}>CURRENT PENALTY</div>
                      </div>
                    )}
                    <button
                      onClick={e => { e.stopPropagation(); }}
                      style={{
                        background: biz.status === 'compliant' ? 'transparent' : 'linear-gradient(135deg, #00FF88, #00CC6A)',
                        border: biz.status === 'compliant' ? '1px solid rgba(0,255,136,0.25)' : 'none',
                        color: biz.status === 'compliant' ? C.green : '#050A0E',
                        fontFamily: font.display, fontSize: '0.7rem', fontWeight: 700,
                        letterSpacing: '0.06em', cursor: 'pointer',
                        padding: '10px 20px', borderRadius: 3,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {biz.status === 'compliant' ? 'View Status' : 'File Now'}
                    </button>
                  </div>
                </div>

                {/* Alert banner */}
                {biz.alert && (
                  <div style={{ padding: '10px 24px', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(0,255,136,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: s.dot, fontSize: '0.85rem' }}>&#9650;</span>
                    <span style={{ fontFamily: font.mono, fontSize: '0.7rem', color: C.textDim, lineHeight: 1.5 }}>
                      <strong style={{ color: C.green }}>AI Agent: </strong>{biz.alert}
                    </span>
                  </div>
                )}

                {/* Expanded detail */}
                {isOpen && (
                  <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(0,255,136,0.08)', background: 'rgba(0,0,0,0.15)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    {[
                      { label: 'Compliance Score', val: biz.score + '%', color: s.dot },
                      { label: 'AI Agents Assigned', val: biz.agents + ' active', color: C.cyan },
                      { label: 'Filing Type', val: 'CAC Annual Return', color: C.white },
                      { label: 'e-Invoice Status', val: 'Up to date', color: C.green },
                    ].map((d, j) => (
                      <div key={j} style={{ padding: '12px 16px', background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.06)', borderRadius: 3 }}>
                        <div style={{ fontFamily: font.mono, fontSize: '0.62rem', color: C.muted, letterSpacing: '0.1em', marginBottom: 5 }}>{d.label.toUpperCase()}</div>
                        <div style={{ fontFamily: font.display, fontSize: '0.9rem', fontWeight: 700, color: d.color }}>{d.val}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
